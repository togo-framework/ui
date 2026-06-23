import * as React from "react";

export interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
  accent?: string;
}

/** StatCard — a dashboard counter tile (icon chip + label + big value). */
export function StatCard({ icon, label, value, accent = "#7c3aed" }: StatCardProps) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
      <div className="flex items-center justify-between">
        <span className="text-sm text-slate-400">{label}</span>
        <span
          className="flex h-7 w-7 items-center justify-center rounded-lg"
          style={{ background: `color-mix(in srgb, ${accent} 22%, transparent)`, color: accent }}
        >
          {icon}
        </span>
      </div>
      <div className="mt-2 text-3xl font-semibold tabular-nums">{value}</div>
    </div>
  );
}
