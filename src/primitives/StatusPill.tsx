import * as React from "react";
import { cn } from "../lib/cn";

export interface StatusPillProps {
  /** When true → emerald "on" styling; false → muted/red. */
  active: boolean;
  label: string;
  /** Use red instead of muted-grey for the inactive state (e.g. "locked"). */
  danger?: boolean;
  className?: string;
}

/** StatusPill — a dotted pill for binary states (active/locked, enabled/disabled). */
export function StatusPill({ active, label, danger, className }: StatusPillProps) {
  const tone = active
    ? "bg-emerald-500/15 text-emerald-400"
    : danger
    ? "bg-red-500/15 text-red-400"
    : "bg-slate-700/40 text-slate-400";
  const dot = active ? "bg-emerald-400" : danger ? "bg-red-400" : "bg-slate-500";
  return (
    <span className={cn("inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px]", tone, className)}>
      <span className={cn("h-1.5 w-1.5 rounded-full", dot)} />
      {label}
    </span>
  );
}
