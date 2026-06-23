import * as React from "react";
import { cn } from "../lib/cn";

export interface FieldProps {
  label: string;
  className?: string;
  children: React.ReactNode;
}

/** Field — a labeled form row (label above the control). */
export function Field({ label, className, children }: FieldProps) {
  return (
    <label className={cn("mb-3 block", className)}>
      <span className="mb-1 block text-xs uppercase tracking-wide text-slate-400">{label}</span>
      {children}
    </label>
  );
}
