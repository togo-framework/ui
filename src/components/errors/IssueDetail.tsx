"use client";

import * as React from "react";
import { ChevronRight, CheckCircle2, BellOff } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { StatusBadge } from "../status/StatusBadge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "../ui/collapsible";
import { MiniBarChart } from "../charts/MiniBarChart";
import { STR, levelTone, relTime, type Lang } from "./shared";
import type { Issue, StackFrame, IssueBreadcrumb } from "./types";

export interface IssueDetailProps {
  issue: Issue;
  language?: Lang;
  onResolve?: (issue: Issue) => void;
  onIgnore?: (issue: Issue) => void;
  className?: string;
}

function Stat({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-border bg-card px-3 py-2">
      <div className="text-[11px] uppercase tracking-wide text-muted-foreground">{label}</div>
      <div className="text-sm font-semibold tabular-nums">{value}</div>
    </div>
  );
}

function Frame({ frame }: { frame: StackFrame }) {
  const [open, setOpen] = React.useState(Boolean(frame.inApp && frame.context?.length));
  const loc = [frame.filename, frame.lineno].filter(Boolean).join(":") + (frame.colno ? `:${frame.colno}` : "");
  return (
    <Collapsible open={open} onOpenChange={setOpen} className={cn("border-b border-border/60", !frame.inApp && "opacity-70")}>
      <CollapsibleTrigger className="flex w-full items-center gap-2 px-3 py-2 text-start hover:bg-muted/40">
        <ChevronRight className={cn("size-3.5 shrink-0 text-muted-foreground transition-transform", open && "rotate-90")} />
        <span className="truncate font-mono text-xs">
          <span className="text-foreground">{loc}</span>
          {frame.function && <span className="text-muted-foreground"> in {frame.function}</span>}
        </span>
        {frame.inApp && <Badge className="ms-auto shrink-0 text-[10px]">in app</Badge>}
      </CollapsibleTrigger>
      {frame.context && frame.context.length > 0 && (
        <CollapsibleContent>
          <pre className="overflow-auto bg-muted/30 px-3 py-2 font-mono text-xs leading-5">
            {frame.context.map((c) => (
              <div key={c.line} className={cn("flex gap-3", c.current && "-mx-3 bg-destructive/10 px-3")}>
                <span className="w-8 shrink-0 select-none text-end text-muted-foreground">{c.line}</span>
                <span className={cn(c.current ? "text-foreground" : "text-muted-foreground")}>{c.text}</span>
              </div>
            ))}
          </pre>
        </CollapsibleContent>
      )}
    </Collapsible>
  );
}

function BreadcrumbRow({ b }: { b: IssueBreadcrumb }) {
  return (
    <div className="flex items-start gap-3 border-b border-border/60 px-3 py-2 text-xs">
      <span className="w-16 shrink-0 font-mono text-muted-foreground">{relTime(b.timestamp)}</span>
      {b.category && <Badge className="shrink-0 text-[10px]">{b.category}</Badge>}
      <span className="min-w-0 flex-1 break-words text-foreground">{b.message}</span>
    </div>
  );
}

/** IssueDetail — the error detail pane: title + culprit, level, resolve/ignore,
 * stats, a frequency chart, then tabbed Stack trace / Breadcrumbs / Tags. */
export function IssueDetail({ issue, language = "en", onResolve, onIgnore, className }: IssueDetailProps) {
  const t = STR[language];
  const dir = language === "ar" ? "rtl" : "ltr";
  const chart = (issue.frequency ?? []).map((value, i) => ({ label: String(i), value }));

  return (
    <div dir={dir} className={cn("flex h-full flex-col", className)}>
      {/* Header */}
      <div className="border-b border-border p-4">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <StatusBadge tone={levelTone(issue.level)}><span className="uppercase">{issue.level}</span></StatusBadge>
              <h2 className="truncate text-base font-semibold">{issue.title}</h2>
            </div>
            {issue.culprit && <p className="mt-1 truncate font-mono text-xs text-muted-foreground">{issue.culprit}</p>}
          </div>
          <div className="flex shrink-0 gap-2">
            <Button variant="outline" size="sm" onClick={() => onResolve?.(issue)}><CheckCircle2 className="size-4" /> {t.resolve}</Button>
            <Button variant="ghost" size="sm" onClick={() => onIgnore?.(issue)}><BellOff className="size-4" /> {t.ignore}</Button>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Stat label={t.events} value={issue.count.toLocaleString()} />
          <Stat label={t.users} value={(issue.userCount ?? 0).toLocaleString()} />
          <Stat label={t.firstSeen} value={relTime(issue.firstSeen)} />
          <Stat label={t.lastSeen} value={relTime(issue.lastSeen)} />
        </div>
      </div>

      <div className="min-h-0 flex-1 overflow-auto p-4">
        {chart.length > 0 && (
          <div className="mb-4">
            <div className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">{t.occurrences}</div>
            <MiniBarChart data={chart} height={120} />
          </div>
        )}

        <Tabs defaultValue="stack">
          <TabsList>
            <TabsTrigger value="stack">{t.stackTrace}</TabsTrigger>
            <TabsTrigger value="breadcrumbs">{t.breadcrumbs}</TabsTrigger>
            <TabsTrigger value="tags">{t.tags}</TabsTrigger>
          </TabsList>

          <TabsContent value="stack">
            <div className="overflow-hidden rounded-lg border border-border">
              {(issue.stack ?? []).length === 0
                ? <p className="p-4 text-sm text-muted-foreground">—</p>
                : issue.stack!.map((f, i) => <Frame key={i} frame={f} />)}
            </div>
          </TabsContent>

          <TabsContent value="breadcrumbs">
            <div className="overflow-hidden rounded-lg border border-border">
              {(issue.breadcrumbs ?? []).length === 0
                ? <p className="p-4 text-sm text-muted-foreground">—</p>
                : issue.breadcrumbs!.map((b, i) => <BreadcrumbRow key={i} b={b} />)}
            </div>
          </TabsContent>

          <TabsContent value="tags">
            <div className="flex flex-wrap gap-2">
              {(issue.tags ?? []).length === 0
                ? <p className="text-sm text-muted-foreground">—</p>
                : issue.tags!.map((tag) => (
                  <span key={tag.key} className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-2 py-1 text-xs">
                    <span className="text-muted-foreground">{tag.key}</span>
                    <span className="font-medium">{tag.value}</span>
                  </span>
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
