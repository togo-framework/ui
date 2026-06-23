import * as React from "react";

export interface DetailField {
  label: string;
  value: React.ReactNode;
}

export interface DetailGridProps {
  fields: DetailField[];
  columns?: 1 | 2;
}

/** DetailGrid — a key/value grid for record detail/profile views. */
export function DetailGrid({ fields, columns = 2 }: DetailGridProps) {
  return (
    <div className={`grid gap-px overflow-hidden rounded-xl border border-slate-800 bg-slate-800 ${columns === 2 ? "sm:grid-cols-2" : ""}`}>
      {fields.map((f, i) => (
        <div key={i} className="bg-slate-900/60 p-4">
          <div className="text-xs uppercase tracking-wide text-slate-500">{f.label}</div>
          <div className="mt-1 break-words text-sm text-slate-200">{f.value}</div>
        </div>
      ))}
    </div>
  );
}
