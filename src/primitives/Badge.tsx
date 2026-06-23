import * as React from "react";
import { cn } from "../lib/cn";

export type BadgeTone = "violet" | "emerald" | "red" | "slate" | "amber";

const TONES: Record<BadgeTone, string> = {
  violet: "bg-violet-500/15 text-violet-300",
  emerald: "bg-emerald-500/15 text-emerald-400",
  red: "bg-red-500/15 text-red-400",
  slate: "bg-slate-700/50 text-slate-300",
  amber: "bg-amber-500/15 text-amber-400",
};

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone;
}

/** Badge — a small rounded tag for roles, types, statuses. */
export function Badge({ tone = "violet", className, children, ...props }: BadgeProps) {
  return (
    <span className={cn("inline-block rounded-md px-2 py-0.5 text-[11px] font-medium", TONES[tone], className)} {...props}>
      {children}
    </span>
  );
}
