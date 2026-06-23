"use client";

import * as React from "react";
import { ListTree, GitBranch, Pencil, ArrowRight } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { WorkflowStepNode } from "./WorkflowStepNode";
import { NestedStepsEditor } from "./NestedStepsEditor";

export type WorkflowView = "steps" | "pipeline" | "editor";

export interface WorkflowStepLike {
  kind?: string;
  then?: WorkflowStepLike[];
  else?: WorkflowStepLike[];
  steps?: WorkflowStepLike[];
  [key: string]: unknown;
}

export interface WorkflowProps {
  /** The workflow as a nested step tree — the single source of truth for every view. */
  steps: WorkflowStepLike[];
  /** Controlled active view. */
  view?: WorkflowView;
  /** Initial view when uncontrolled. Default "steps". */
  defaultView?: WorkflowView;
  onViewChange?: (view: WorkflowView) => void;
  language?: "en" | "ar";
  /** Plain-language step descriptions (default true). */
  humanize?: boolean;
  /** Enables the Editor view; called when the editor mutates the tree. */
  onChange?: (steps: WorkflowStepLike[]) => void;
  onEditStep?: (step: WorkflowStepLike) => void;
  className?: string;
}

const LABELS = {
  en: { steps: "Steps", pipeline: "Pipeline", editor: "Editor", empty: "No steps yet." },
  ar: { steps: "الخطوات", pipeline: "المسار", editor: "محرّر", empty: "لا توجد خطوات بعد." },
};

const VIEW_ICON: Record<WorkflowView, React.ElementType> = {
  steps: ListTree,
  pipeline: GitBranch,
  editor: Pencil,
};

/** Workflow — the unified workflow component. One nested-step model rendered three ways,
 * switchable via the header toggle:
 *   • Steps    — human-readable vertical step tree (default)
 *   • Pipeline — the same steps as a horizontal flow
 *   • Editor   — multi-level drag-and-drop editor with per-step options (enabled when onChange is set)
 * Pipeline + Editor are derived from the same `steps`, so all three views show one workflow. */
export function Workflow({
  steps, view, defaultView = "steps", onViewChange, language = "en",
  humanize = true, onChange, onEditStep, className,
}: WorkflowProps) {
  const isRTL = language === "ar";
  const t = LABELS[language];
  const [internal, setInternal] = React.useState<WorkflowView>(defaultView);
  const active = view ?? internal;
  const setView = (v: WorkflowView) => { setInternal(v); onViewChange?.(v); };

  const views: WorkflowView[] = onChange ? ["steps", "pipeline", "editor"] : ["steps", "pipeline"];

  return (
    <div dir={isRTL ? "rtl" : "ltr"} className={cn("flex flex-col gap-3", className)}>
      {/* View toggle */}
      <div className="inline-flex w-fit items-center gap-1 self-start rounded-lg border border-border bg-card p-1">
        {views.map((v) => {
          const Icon = VIEW_ICON[v];
          return (
            <Button
              key={v}
              type="button"
              size="sm"
              variant={active === v ? "secondary" : "ghost"}
              className="h-7 gap-1.5 px-2.5"
              aria-pressed={active === v}
              onClick={() => setView(v)}
            >
              <Icon className="h-3.5 w-3.5" />
              {t[v]}
            </Button>
          );
        })}
      </div>

      {/* Body */}
      {steps.length === 0 ? (
        <p className="rounded-lg border border-dashed border-border p-6 text-center text-sm text-muted-foreground">{t.empty}</p>
      ) : active === "editor" && onChange ? (
        <NestedStepsEditor
          steps={steps as never}
          language={language}
          onChange={(s) => onChange(s as WorkflowStepLike[])}
          onEditStep={onEditStep as never}
        />
      ) : active === "pipeline" ? (
        <div className="flex items-stretch gap-2 overflow-x-auto pb-2">
          {steps.map((step, i) => (
            <React.Fragment key={i}>
              {i > 0 && (
                <div className="flex shrink-0 items-center text-muted-foreground">
                  <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                </div>
              )}
              <div className="w-72 shrink-0">
                <WorkflowStepNode step={step as never} path={[i]} depth={0} isRTL={isRTL} humanize={humanize} />
              </div>
            </React.Fragment>
          ))}
        </div>
      ) : (
        <div className="space-y-2">
          {steps.map((step, i) => (
            <WorkflowStepNode key={i} step={step as never} path={[i]} depth={0} isRTL={isRTL} humanize={humanize} />
          ))}
        </div>
      )}
    </div>
  );
}
