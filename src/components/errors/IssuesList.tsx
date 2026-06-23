"use client";

import * as React from "react";
import { Search } from "lucide-react";
import { cn } from "../../lib/utils";
import { Input } from "../ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../ui/select";
import { StatusBadge } from "../status/StatusBadge";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { STR, levelTone, relTime, type Lang } from "./shared";
import type { Issue, IssueLevel, ErrorFilter, IssueSort } from "./types";

export interface IssuesListProps {
  issues: Issue[];
  selectedId?: string | null;
  onSelectIssue?: (issue: Issue) => void;
  language?: Lang;
  filter?: ErrorFilter;
  onFilterChange?: (f: ErrorFilter) => void;
  sort?: IssueSort;
  onSortChange?: (s: IssueSort) => void;
  /** options for the environment dropdown */
  environments?: string[];
  className?: string;
}

const LEVELS: IssueLevel[] = ["fatal", "error", "warning", "info", "debug"];

/** Compact, RTL-safe inline bar sparkline for issue frequency. */
function Spark({ values }: { values?: number[] }) {
  if (!values || values.length === 0) return <div className="h-7 w-20" />;
  const max = Math.max(...values, 1);
  return (
    <div className="flex h-7 w-20 items-end gap-px" aria-hidden>
      {values.map((v, i) => (
        <span key={i} className="flex-1 rounded-sm bg-muted-foreground/40" style={{ height: `${Math.max(8, (v / max) * 100)}%` }} />
      ))}
    </div>
  );
}

/** IssuesList — the Sentry-style "Issues" view: a filter bar + a list of error
 * groups (level, title + culprit, frequency sparkline, events, users, assignee,
 * last-seen). Presentational; row click → onSelectIssue. RTL + bilingual. */
export function IssuesList({
  issues, selectedId, onSelectIssue, language = "en",
  filter = {}, onFilterChange, sort = "lastSeen", onSortChange, environments = [], className,
}: IssuesListProps) {
  const t = STR[language];
  const dir = language === "ar" ? "rtl" : "ltr";
  const setFilter = (patch: Partial<ErrorFilter>) => onFilterChange?.({ ...filter, ...patch });

  return (
    <div dir={dir} className={cn("flex h-full flex-col", className)}>
      {/* Filter bar */}
      <div className="flex flex-wrap items-center gap-2 border-b border-border p-3">
        <div className="relative min-w-[180px] flex-1">
          <Search className="pointer-events-none absolute top-1/2 size-4 -translate-y-1/2 text-muted-foreground ltr:left-2.5 rtl:right-2.5" />
          <Input
            value={filter.q ?? ""}
            onChange={(e) => setFilter({ q: e.target.value })}
            placeholder={t.search}
            className="ltr:pl-8 rtl:pr-8"
          />
        </div>
        <Select value={filter.levels?.[0] ?? "all"} onValueChange={(v) => setFilter({ levels: v === "all" ? undefined : [v as IssueLevel] })}>
          <SelectTrigger className="w-[130px]"><SelectValue placeholder={t.allLevels} /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{t.allLevels}</SelectItem>
            {LEVELS.map((l) => <SelectItem key={l} value={l} className="capitalize">{l}</SelectItem>)}
          </SelectContent>
        </Select>
        {environments.length > 0 && (
          <Select value={filter.environment ?? "all"} onValueChange={(v) => setFilter({ environment: v === "all" ? undefined : v })}>
            <SelectTrigger className="w-[150px]"><SelectValue placeholder={t.allEnvs} /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t.allEnvs}</SelectItem>
              {environments.map((e) => <SelectItem key={e} value={e}>{e}</SelectItem>)}
            </SelectContent>
          </Select>
        )}
        <Select value={sort} onValueChange={(v) => onSortChange?.(v as IssueSort)}>
          <SelectTrigger className="w-[140px]"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="lastSeen">{t.sortLastSeen}</SelectItem>
            <SelectItem value="firstSeen">{t.sortFirstSeen}</SelectItem>
            <SelectItem value="count">{t.sortEvents}</SelectItem>
            <SelectItem value="userCount">{t.sortUsers}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Column header (desktop) */}
      <div className="hidden items-center gap-3 border-b border-border bg-muted/30 px-4 py-2 text-xs font-medium uppercase tracking-wide text-muted-foreground md:flex">
        <span className="flex-1">{t.title}</span>
        <span className="w-20 text-center">{t.events}</span>
        <span className="w-24 text-center">{t.events} / {t.users}</span>
        <span className="w-24 text-end">{t.lastSeen}</span>
      </div>

      {/* Rows */}
      <div className="min-h-0 flex-1 overflow-auto">
        {issues.length === 0 ? (
          <div className="p-10 text-center text-sm text-muted-foreground">{t.noIssues}</div>
        ) : (
          issues.map((iss) => {
            const active = iss.id === selectedId;
            const initial = (iss.assignee?.name || iss.assignee?.email || "?").charAt(0).toUpperCase();
            return (
              <button
                key={iss.id}
                onClick={() => onSelectIssue?.(iss)}
                className={cn(
                  "flex w-full items-center gap-3 border-b border-border/60 px-4 py-3 text-start transition hover:bg-muted/40",
                  active && "bg-primary/5 ltr:border-s-2 ltr:border-s-primary rtl:border-e-2 rtl:border-e-primary",
                )}
              >
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <StatusBadge tone={levelTone(iss.level)}><span className="uppercase">{iss.level}</span></StatusBadge>
                    <span className="truncate text-sm font-semibold">{iss.title}</span>
                  </div>
                  {iss.culprit && <p className="mt-0.5 truncate font-mono text-xs text-muted-foreground">{iss.culprit}</p>}
                  <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                    {iss.environment && <span>{iss.environment}</span>}
                    {iss.status && iss.status !== "unresolved" && (
                      <span className="capitalize">{iss.status === "resolved" ? t.resolved : t.ignored}</span>
                    )}
                    <span className="md:hidden">{relTime(iss.lastSeen)}</span>
                  </div>
                </div>
                <div className="hidden md:block"><Spark values={iss.frequency} /></div>
                <div className="hidden w-20 text-center md:block">
                  <div className="text-sm font-semibold tabular-nums">{iss.count.toLocaleString()}</div>
                  <div className="text-[11px] text-muted-foreground">{t.events}</div>
                </div>
                <div className="hidden w-24 text-center md:block">
                  <div className="text-sm font-semibold tabular-nums">{(iss.userCount ?? 0).toLocaleString()}</div>
                  <div className="text-[11px] text-muted-foreground">{t.users}</div>
                </div>
                <div className="hidden w-24 items-center justify-end gap-2 md:flex">
                  <span className="text-xs text-muted-foreground">{relTime(iss.lastSeen)}</span>
                  {iss.assignee && (
                    <Avatar className="size-6">
                      {iss.assignee.avatarUrl && <AvatarImage src={iss.assignee.avatarUrl} alt={initial} />}
                      <AvatarFallback className="text-[10px]">{initial}</AvatarFallback>
                    </Avatar>
                  )}
                </div>
              </button>
            );
          })
        )}
      </div>
    </div>
  );
}
