"use client";

import * as React from "react";
import { ArrowLeft } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { IssuesList } from "./IssuesList";
import { IssueDetail } from "./IssueDetail";
import { STR, type Lang } from "./shared";
import type { Issue, ErrorFilter, IssueSort } from "./types";

export interface ErrorTrackingPageProps {
  issues: Issue[];
  language?: Lang;
  filter?: ErrorFilter;
  onFilterChange?: (f: ErrorFilter) => void;
  sort?: IssueSort;
  onSortChange?: (s: IssueSort) => void;
  environments?: string[];
  onResolve?: (issue: Issue) => void;
  onIgnore?: (issue: Issue) => void;
  /** controlled selection (optional) */
  selectedId?: string | null;
  onSelectIssue?: (issue: Issue) => void;
  className?: string;
}

/** ErrorTrackingPage — the Sentry-style master/detail error page: IssuesList on
 * the start side, IssueDetail on the end side. Responsive: split on desktop,
 * list→detail drill-down on mobile. Uncontrolled selection unless `selectedId`
 * is provided. */
export function ErrorTrackingPage({
  issues, language = "en", filter, onFilterChange, sort, onSortChange,
  environments, onResolve, onIgnore, selectedId, onSelectIssue, className,
}: ErrorTrackingPageProps) {
  const t = STR[language];
  const dir = language === "ar" ? "rtl" : "ltr";
  const [internal, setInternal] = React.useState<string | null>(null);
  const activeId = selectedId !== undefined ? selectedId : internal;
  const active = issues.find((i) => i.id === activeId) ?? null;

  const select = (iss: Issue) => {
    if (selectedId === undefined) setInternal(iss.id);
    onSelectIssue?.(iss);
  };

  return (
    <div dir={dir} className={cn("flex h-[100vh] max-h-full overflow-hidden bg-background text-foreground", className)}>
      {/* List — full width on mobile, fixed start column on desktop */}
      <div className={cn("min-w-0 flex-1 border-border md:max-w-md md:flex-none md:border-e lg:max-w-lg", active && "hidden md:flex md:flex-col")}>
        <IssuesList
          issues={issues}
          selectedId={activeId}
          onSelectIssue={select}
          language={language}
          filter={filter}
          onFilterChange={onFilterChange}
          sort={sort}
          onSortChange={onSortChange}
          environments={environments}
        />
      </div>

      {/* Detail */}
      <div className={cn("min-w-0 flex-1", !active && "hidden md:flex md:items-center md:justify-center")}>
        {active ? (
          <div className="flex h-full flex-col">
            <div className="border-b border-border p-2 md:hidden">
              <Button variant="ghost" size="sm" onClick={() => (selectedId === undefined ? setInternal(null) : onSelectIssue?.(active))}>
                <ArrowLeft className="size-4 rtl:rotate-180" /> {t.issues}
              </Button>
            </div>
            <IssueDetail issue={active} language={language} onResolve={onResolve} onIgnore={onIgnore} className="min-h-0 flex-1" />
          </div>
        ) : (
          <p className="hidden p-10 text-center text-sm text-muted-foreground md:block">{t.selectIssue}</p>
        )}
      </div>
    </div>
  );
}
