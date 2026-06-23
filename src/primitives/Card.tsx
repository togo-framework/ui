import * as React from "react";
import { cn } from "../lib/cn";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Adds default inner padding. */
  padded?: boolean;
}

/** Card — the kit's standard bordered dark surface. */
export function Card({ padded, className, children, ...props }: CardProps) {
  return (
    <div className={cn("rounded-xl border border-slate-800 bg-slate-900/50", padded && "p-5", className)} {...props}>
      {children}
    </div>
  );
}

/** CardTitle — a small section heading used inside cards. */
export function CardTitle({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 className={cn("mb-3 text-sm font-semibold", className)} {...props}>
      {children}
    </h2>
  );
}
