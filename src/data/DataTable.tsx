import * as React from "react";
import { ChevronRight } from "lucide-react";
import { Badge } from "../primitives/Badge";
import { StatusPill } from "../primitives/StatusPill";

export type CellKind = "text" | "bool" | "date" | "bytes" | "badge" | "mono";

export interface Column<T = any> {
  key: string;
  label: string;
  kind?: CellKind;
  /** Custom cell renderer; overrides `kind`. */
  render?: (row: T) => React.ReactNode;
}

export interface DataTableProps<T = any> {
  columns: Column<T>[];
  rows: T[] | null;
  onRowClick?: (row: T) => void;
  getRowKey?: (row: T, index: number) => React.Key;
  emptyLabel?: string;
  loadingLabel?: string;
}

function fmtBytes(b: number): string {
  if (!b) return "0 B";
  const u = ["B", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(b) / Math.log(1024));
  return `${(b / Math.pow(1024, i)).toFixed(i ? 1 : 0)} ${u[i]}`;
}

function renderCell(val: any, kind?: CellKind) {
  if (val == null || val === "") return <span className="text-slate-600">—</span>;
  switch (kind) {
    case "bool":
      return <StatusPill active={!!val} label={String(!!val)} />;
    case "date":
      return <span className="text-slate-400">{String(val).slice(0, 19).replace("T", " ")}</span>;
    case "bytes":
      return <span className="tabular-nums">{fmtBytes(Number(val))}</span>;
    case "mono":
      return <span className="font-mono text-xs text-slate-400">{String(val)}</span>;
    case "badge":
      return <Badge>{String(val)}</Badge>;
    default:
      return <span className="truncate">{String(val)}</span>;
  }
}

/** DataTable — a presentational, RTL-aware list table with optional clickable rows.
 * Pass `rows={null}` to show the loading state. Pure UI: data fetching lives in the app. */
export function DataTable<T extends Record<string, any>>({
  columns, rows, onRowClick, getRowKey, emptyLabel = "No records yet", loadingLabel = "Loading…",
}: DataTableProps<T>) {
  const colCount = columns.length + (onRowClick ? 1 : 0);
  return (
    <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900/40">
      <table className="w-full text-sm">
        <thead className="border-b border-slate-800 bg-slate-900/80 text-slate-400">
          <tr>
            {columns.map((c) => (
              <th key={c.key} className="px-4 py-3 text-start text-xs font-medium uppercase tracking-wide">{c.label}</th>
            ))}
            {onRowClick && <th className="w-10 px-4 py-3" />}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800/60">
          {rows === null && (
            <tr><td colSpan={colCount} className="px-4 py-10 text-center text-slate-500">{loadingLabel}</td></tr>
          )}
          {rows?.length === 0 && (
            <tr><td colSpan={colCount} className="px-4 py-10 text-center text-slate-500">{emptyLabel}</td></tr>
          )}
          {rows?.map((row, i) => (
            <tr
              key={getRowKey ? getRowKey(row, i) : (row.id ?? i)}
              onClick={onRowClick ? () => onRowClick(row) : undefined}
              className={`transition-colors hover:bg-white/[0.025] ${onRowClick ? "cursor-pointer" : ""}`}
            >
              {columns.map((c) => (
                <td key={c.key} className="max-w-[280px] truncate px-4 py-3">
                  {c.render ? c.render(row) : renderCell(row[c.key], c.kind)}
                </td>
              ))}
              {onRowClick && (
                <td className="px-4 py-3 text-slate-600">
                  <ChevronRight className="h-4 w-4 rtl:rotate-180" />
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
