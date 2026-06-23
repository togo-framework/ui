import * as React from "react";

const GREEN = "#22c55e";
const RED = "#ef4444";
const VIOLET = "#7c3aed";

function Empty({ label }: { label: string }) {
  return (
    <div className="flex h-full min-h-[180px] items-center justify-center text-sm text-slate-500">{label}</div>
  );
}

// smoothLine builds a Catmull-Rom -> cubic-bezier path for a monotone-style curve.
function smoothLine(pts: [number, number][]): string {
  if (pts.length < 2) return pts.length ? `M${pts[0][0]},${pts[0][1]}` : "";
  let d = `M${pts[0][0].toFixed(1)},${pts[0][1].toFixed(1)}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] ?? pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] ?? p2;
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C${c1x.toFixed(1)},${c1y.toFixed(1)} ${c2x.toFixed(1)},${c2y.toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`;
  }
  return d;
}

export type SeriesPoint = { label?: string; success: number; failed: number };

export interface AreaChartProps {
  data: SeriesPoint[];
  emptyLabel?: string;
}

/** AreaChart — smooth overlaid success/failed area+line series (dependency-free SVG). */
export function AreaChart({ data, emptyLabel = "No data yet" }: AreaChartProps) {
  if (!data?.length) return <Empty label={emptyLabel} />;
  const W = 720, H = 220, pad = 24;
  const max = Math.max(1, ...data.map((d) => Math.max(d.success, d.failed)));
  const x = (i: number) => pad + (i * (W - 2 * pad)) / Math.max(1, data.length - 1);
  const y = (v: number) => H - pad - (v * (H - 2 * pad)) / max;
  const pts = (k: "success" | "failed"): [number, number][] => data.map((d, i) => [x(i), y(d[k])]);
  const line = (k: "success" | "failed") => smoothLine(pts(k));
  const area = (k: "success" | "failed") =>
    `${line(k)} L${x(data.length - 1).toFixed(1)},${H - pad} L${x(0).toFixed(1)},${H - pad} Z`;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-[220px] w-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="tgGSuccess" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={GREEN} stopOpacity="0.35" />
          <stop offset="100%" stopColor={GREEN} stopOpacity="0" />
        </linearGradient>
        <linearGradient id="tgGFailed" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={RED} stopOpacity="0.25" />
          <stop offset="100%" stopColor={RED} stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0.25, 0.5, 0.75, 1].map((g) => (
        <line key={g} x1={pad} x2={W - pad} y1={y(max * g)} y2={y(max * g)} stroke="#1e293b" strokeWidth="1" />
      ))}
      <path d={area("failed")} fill="url(#tgGFailed)" />
      <path d={area("success")} fill="url(#tgGSuccess)" />
      <path d={line("failed")} fill="none" stroke={RED} strokeWidth="2" />
      <path d={line("success")} fill="none" stroke={GREEN} strokeWidth="2" />
    </svg>
  );
}

export type BarDatum = { label: string; value: number };

export interface BarChartProps {
  data: BarDatum[];
  emptyLabel?: string;
}

/** BarChart — horizontal bars (e.g. top login methods). */
export function BarChart({ data, emptyLabel = "No data yet" }: BarChartProps) {
  if (!data?.length) return <Empty label={emptyLabel} />;
  const max = Math.max(1, ...data.map((d) => d.value));
  return (
    <div className="space-y-3 py-2">
      {data.map((d) => (
        <div key={d.label} className="flex items-center gap-3">
          <span className="w-28 shrink-0 truncate text-xs text-slate-400">{d.label}</span>
          <div className="h-6 flex-1 overflow-hidden rounded bg-slate-800/60">
            <div className="h-full rounded" style={{ width: `${(d.value / max) * 100}%`, background: VIOLET }} />
          </div>
          <span className="w-8 shrink-0 text-end text-xs tabular-nums text-slate-300">{d.value}</span>
        </div>
      ))}
    </div>
  );
}

export interface GaugeProps {
  success: number;
  failed: number;
  successLabel?: string;
  failedLabel?: string;
}

/** Gauge — a success-rate % with a progress bar and a success/failed legend. */
export function Gauge({ success, failed, successLabel = "success", failedLabel = "failed" }: GaugeProps) {
  const total = success + failed;
  const pct = total === 0 ? 0 : Math.round((success / total) * 100);
  return (
    <div className="flex flex-col justify-center py-2">
      <div className="text-5xl font-bold text-emerald-400 tabular-nums">{pct}%</div>
      <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-slate-800">
        <div className="h-full rounded-full bg-emerald-500" style={{ width: `${pct}%` }} />
      </div>
      <div className="mt-2 flex justify-between text-xs text-slate-400">
        <span>{failedLabel}: {failed}</span>
        <span>{successLabel}: {success}</span>
      </div>
    </div>
  );
}
