// src/primitives/Button.tsx
import * as React from "react";

// src/lib/cn.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/primitives/Button.tsx
import { jsxs } from "react/jsx-runtime";
var VARIANTS = {
  primary: "bg-violet-600 text-white hover:bg-violet-500",
  secondary: "border border-slate-700 text-slate-200 hover:bg-white/5",
  ghost: "text-slate-300 hover:bg-white/5",
  danger: "border border-red-900/60 text-red-400 hover:bg-red-500/10"
};
var SIZES = {
  sm: "px-2.5 py-1.5 text-sm",
  md: "px-3 py-2 text-sm"
};
var Button = React.forwardRef(
  ({ variant = "primary", size = "md", icon, className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
    "button",
    {
      ref,
      className: cn(
        "inline-flex items-center justify-center gap-1.5 rounded-lg font-medium transition disabled:opacity-50 disabled:pointer-events-none",
        VARIANTS[variant],
        SIZES[size],
        className
      ),
      ...props,
      children: [
        icon,
        children
      ]
    }
  )
);
Button.displayName = "Button";

// src/primitives/Badge.tsx
import { jsx } from "react/jsx-runtime";
var TONES = {
  violet: "bg-violet-500/15 text-violet-300",
  emerald: "bg-emerald-500/15 text-emerald-400",
  red: "bg-red-500/15 text-red-400",
  slate: "bg-slate-700/50 text-slate-300",
  amber: "bg-amber-500/15 text-amber-400"
};
function Badge({ tone = "violet", className, children, ...props }) {
  return /* @__PURE__ */ jsx("span", { className: cn("inline-block rounded-md px-2 py-0.5 text-[11px] font-medium", TONES[tone], className), ...props, children });
}

// src/primitives/StatusPill.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
function StatusPill({ active, label, danger, className }) {
  const tone = active ? "bg-emerald-500/15 text-emerald-400" : danger ? "bg-red-500/15 text-red-400" : "bg-slate-700/40 text-slate-400";
  const dot = active ? "bg-emerald-400" : danger ? "bg-red-400" : "bg-slate-500";
  return /* @__PURE__ */ jsxs2("span", { className: cn("inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px]", tone, className), children: [
    /* @__PURE__ */ jsx2("span", { className: cn("h-1.5 w-1.5 rounded-full", dot) }),
    label
  ] });
}

// src/primitives/Card.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
function Card({ padded, className, children, ...props }) {
  return /* @__PURE__ */ jsx3("div", { className: cn("rounded-xl border border-slate-800 bg-slate-900/50", padded && "p-5", className), ...props, children });
}
function CardTitle({ className, children, ...props }) {
  return /* @__PURE__ */ jsx3("h2", { className: cn("mb-3 text-sm font-semibold", className), ...props, children });
}

// src/primitives/Input.tsx
import * as React2 from "react";
import { Search } from "lucide-react";
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var inputCls = "w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-violet-500/60";
var Input = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx4("input", { ref, className: cn(inputCls, className), ...props }));
Input.displayName = "Input";
var SearchInput = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs3("div", { className: "relative", children: [
  /* @__PURE__ */ jsx4(Search, { className: "pointer-events-none absolute start-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" }),
  /* @__PURE__ */ jsx4("input", { ref, className: cn(inputCls, "ps-9 pe-3", className), ...props })
] }));
SearchInput.displayName = "SearchInput";

// src/primitives/Field.tsx
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
function Field({ label, className, children }) {
  return /* @__PURE__ */ jsxs4("label", { className: cn("mb-3 block", className), children: [
    /* @__PURE__ */ jsx5("span", { className: "mb-1 block text-xs uppercase tracking-wide text-slate-400", children: label }),
    children
  ] });
}

// src/primitives/Select.tsx
import * as React3 from "react";
import { jsx as jsx6 } from "react/jsx-runtime";
var Select = React3.forwardRef(
  ({ className, options, children, ...props }, ref) => /* @__PURE__ */ jsx6("select", { ref, className: cn(inputCls, className), ...props, children: options ? options.map((o) => /* @__PURE__ */ jsx6("option", { value: o.value, children: o.label ?? o.value }, o.value)) : children })
);
Select.displayName = "Select";

// src/primitives/Switch.tsx
import { jsx as jsx7, jsxs as jsxs5 } from "react/jsx-runtime";
function Switch({ checked, onChange, disabled, ...rest }) {
  return /* @__PURE__ */ jsxs5("label", { className: "relative inline-flex cursor-pointer items-center", children: [
    /* @__PURE__ */ jsx7(
      "input",
      {
        type: "checkbox",
        className: "peer sr-only",
        checked,
        disabled,
        onChange: (e) => onChange(e.target.checked),
        ...rest
      }
    ),
    /* @__PURE__ */ jsx7("div", { className: "h-5 w-9 rounded-full bg-slate-700 transition-colors after:absolute after:start-0.5 after:top-0.5 after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-all peer-checked:bg-violet-600 peer-checked:after:translate-x-4 rtl:peer-checked:after:-translate-x-4" })
  ] });
}
function Checkbox({ className, ...props }) {
  return /* @__PURE__ */ jsx7("input", { type: "checkbox", className: `h-4 w-4 accent-violet-600 ${className ?? ""}`, ...props });
}

// src/primitives/Avatar.tsx
import { jsx as jsx8 } from "react/jsx-runtime";
var SIZES2 = {
  sm: "h-8 w-8 text-sm rounded-full",
  md: "h-9 w-9 text-sm rounded-xl",
  lg: "h-12 w-12 text-lg rounded-2xl"
};
function Avatar({ text, src, icon, size = "sm", primary = "#7c3aed", className }) {
  const initial = (text ?? "?").charAt(0).toUpperCase();
  return /* @__PURE__ */ jsx8(
    "span",
    {
      className: cn("flex shrink-0 items-center justify-center overflow-hidden font-semibold text-white", SIZES2[size], className),
      style: src ? void 0 : { background: `linear-gradient(135deg, ${primary}, #4f46e5)` },
      children: src ? /* @__PURE__ */ jsx8("img", { src, alt: "", className: "h-full w-full object-cover" }) : icon ?? initial
    }
  );
}

// src/overlays/Modal.tsx
import * as React4 from "react";
import { X } from "lucide-react";
import { jsx as jsx9, jsxs as jsxs6 } from "react/jsx-runtime";
function Modal({ open, onClose, title, children, footer }) {
  React4.useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /* @__PURE__ */ jsxs6("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4", onClick: onClose, children: [
    /* @__PURE__ */ jsx9("div", { className: "absolute inset-0 bg-black/60 backdrop-blur-sm" }),
    /* @__PURE__ */ jsxs6(
      "div",
      {
        className: "relative w-full max-w-md overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl",
        onClick: (e) => e.stopPropagation(),
        children: [
          /* @__PURE__ */ jsxs6("div", { className: "flex items-center justify-between border-b border-slate-800 px-5 py-3.5", children: [
            /* @__PURE__ */ jsx9("h2", { className: "text-base font-semibold", children: title }),
            /* @__PURE__ */ jsx9("button", { onClick: onClose, className: "rounded-lg p-1 text-slate-400 transition hover:bg-white/5 hover:text-white", children: /* @__PURE__ */ jsx9(X, { className: "h-4 w-4" }) })
          ] }),
          /* @__PURE__ */ jsx9("div", { className: "px-5 py-4", children }),
          footer && /* @__PURE__ */ jsx9("div", { className: "flex justify-end gap-2 border-t border-slate-800 px-5 py-3.5", children: footer })
        ]
      }
    )
  ] });
}

// src/charts/Charts.tsx
import { jsx as jsx10, jsxs as jsxs7 } from "react/jsx-runtime";
var GREEN = "#22c55e";
var RED = "#ef4444";
var VIOLET = "#7c3aed";
function Empty({ label }) {
  return /* @__PURE__ */ jsx10("div", { className: "flex h-full min-h-[180px] items-center justify-center text-sm text-slate-500", children: label });
}
function smoothLine(pts) {
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
function AreaChart({ data, emptyLabel = "No data yet" }) {
  if (!data?.length) return /* @__PURE__ */ jsx10(Empty, { label: emptyLabel });
  const W = 720, H = 220, pad = 24;
  const max = Math.max(1, ...data.map((d) => Math.max(d.success, d.failed)));
  const x = (i) => pad + i * (W - 2 * pad) / Math.max(1, data.length - 1);
  const y = (v) => H - pad - v * (H - 2 * pad) / max;
  const pts = (k) => data.map((d, i) => [x(i), y(d[k])]);
  const line = (k) => smoothLine(pts(k));
  const area = (k) => `${line(k)} L${x(data.length - 1).toFixed(1)},${H - pad} L${x(0).toFixed(1)},${H - pad} Z`;
  return /* @__PURE__ */ jsxs7("svg", { viewBox: `0 0 ${W} ${H}`, className: "h-[220px] w-full", preserveAspectRatio: "none", children: [
    /* @__PURE__ */ jsxs7("defs", { children: [
      /* @__PURE__ */ jsxs7("linearGradient", { id: "tgGSuccess", x1: "0", y1: "0", x2: "0", y2: "1", children: [
        /* @__PURE__ */ jsx10("stop", { offset: "0%", stopColor: GREEN, stopOpacity: "0.35" }),
        /* @__PURE__ */ jsx10("stop", { offset: "100%", stopColor: GREEN, stopOpacity: "0" })
      ] }),
      /* @__PURE__ */ jsxs7("linearGradient", { id: "tgGFailed", x1: "0", y1: "0", x2: "0", y2: "1", children: [
        /* @__PURE__ */ jsx10("stop", { offset: "0%", stopColor: RED, stopOpacity: "0.25" }),
        /* @__PURE__ */ jsx10("stop", { offset: "100%", stopColor: RED, stopOpacity: "0" })
      ] })
    ] }),
    [0.25, 0.5, 0.75, 1].map((g) => /* @__PURE__ */ jsx10("line", { x1: pad, x2: W - pad, y1: y(max * g), y2: y(max * g), stroke: "#1e293b", strokeWidth: "1" }, g)),
    /* @__PURE__ */ jsx10("path", { d: area("failed"), fill: "url(#tgGFailed)" }),
    /* @__PURE__ */ jsx10("path", { d: area("success"), fill: "url(#tgGSuccess)" }),
    /* @__PURE__ */ jsx10("path", { d: line("failed"), fill: "none", stroke: RED, strokeWidth: "2" }),
    /* @__PURE__ */ jsx10("path", { d: line("success"), fill: "none", stroke: GREEN, strokeWidth: "2" })
  ] });
}
function BarChart({ data, emptyLabel = "No data yet" }) {
  if (!data?.length) return /* @__PURE__ */ jsx10(Empty, { label: emptyLabel });
  const max = Math.max(1, ...data.map((d) => d.value));
  return /* @__PURE__ */ jsx10("div", { className: "space-y-3 py-2", children: data.map((d) => /* @__PURE__ */ jsxs7("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ jsx10("span", { className: "w-28 shrink-0 truncate text-xs text-slate-400", children: d.label }),
    /* @__PURE__ */ jsx10("div", { className: "h-6 flex-1 overflow-hidden rounded bg-slate-800/60", children: /* @__PURE__ */ jsx10("div", { className: "h-full rounded", style: { width: `${d.value / max * 100}%`, background: VIOLET } }) }),
    /* @__PURE__ */ jsx10("span", { className: "w-8 shrink-0 text-end text-xs tabular-nums text-slate-300", children: d.value })
  ] }, d.label)) });
}
function Gauge({ success, failed, successLabel = "success", failedLabel = "failed" }) {
  const total = success + failed;
  const pct = total === 0 ? 0 : Math.round(success / total * 100);
  return /* @__PURE__ */ jsxs7("div", { className: "flex flex-col justify-center py-2", children: [
    /* @__PURE__ */ jsxs7("div", { className: "text-5xl font-bold text-emerald-400 tabular-nums", children: [
      pct,
      "%"
    ] }),
    /* @__PURE__ */ jsx10("div", { className: "mt-3 h-2.5 w-full overflow-hidden rounded-full bg-slate-800", children: /* @__PURE__ */ jsx10("div", { className: "h-full rounded-full bg-emerald-500", style: { width: `${pct}%` } }) }),
    /* @__PURE__ */ jsxs7("div", { className: "mt-2 flex justify-between text-xs text-slate-400", children: [
      /* @__PURE__ */ jsxs7("span", { children: [
        failedLabel,
        ": ",
        failed
      ] }),
      /* @__PURE__ */ jsxs7("span", { children: [
        successLabel,
        ": ",
        success
      ] })
    ] })
  ] });
}

// src/data/StatCard.tsx
import { jsx as jsx11, jsxs as jsxs8 } from "react/jsx-runtime";
function StatCard({ icon, label, value, accent = "#7c3aed" }) {
  return /* @__PURE__ */ jsxs8("div", { className: "rounded-xl border border-slate-800 bg-slate-900/60 p-4", children: [
    /* @__PURE__ */ jsxs8("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsx11("span", { className: "text-sm text-slate-400", children: label }),
      /* @__PURE__ */ jsx11(
        "span",
        {
          className: "flex h-7 w-7 items-center justify-center rounded-lg",
          style: { background: `color-mix(in srgb, ${accent} 22%, transparent)`, color: accent },
          children: icon
        }
      )
    ] }),
    /* @__PURE__ */ jsx11("div", { className: "mt-2 text-3xl font-semibold tabular-nums", children: value })
  ] });
}

// src/data/DataTable.tsx
import { ChevronRight } from "lucide-react";
import { jsx as jsx12, jsxs as jsxs9 } from "react/jsx-runtime";
function fmtBytes(b) {
  if (!b) return "0 B";
  const u = ["B", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(b) / Math.log(1024));
  return `${(b / Math.pow(1024, i)).toFixed(i ? 1 : 0)} ${u[i]}`;
}
function renderCell(val, kind) {
  if (val == null || val === "") return /* @__PURE__ */ jsx12("span", { className: "text-slate-600", children: "\u2014" });
  switch (kind) {
    case "bool":
      return /* @__PURE__ */ jsx12(StatusPill, { active: !!val, label: String(!!val) });
    case "date":
      return /* @__PURE__ */ jsx12("span", { className: "text-slate-400", children: String(val).slice(0, 19).replace("T", " ") });
    case "bytes":
      return /* @__PURE__ */ jsx12("span", { className: "tabular-nums", children: fmtBytes(Number(val)) });
    case "mono":
      return /* @__PURE__ */ jsx12("span", { className: "font-mono text-xs text-slate-400", children: String(val) });
    case "badge":
      return /* @__PURE__ */ jsx12(Badge, { children: String(val) });
    default:
      return /* @__PURE__ */ jsx12("span", { className: "truncate", children: String(val) });
  }
}
function DataTable({
  columns,
  rows,
  onRowClick,
  getRowKey,
  emptyLabel = "No records yet",
  loadingLabel = "Loading\u2026"
}) {
  const colCount = columns.length + (onRowClick ? 1 : 0);
  return /* @__PURE__ */ jsx12("div", { className: "overflow-hidden rounded-xl border border-slate-800 bg-slate-900/40", children: /* @__PURE__ */ jsxs9("table", { className: "w-full text-sm", children: [
    /* @__PURE__ */ jsx12("thead", { className: "border-b border-slate-800 bg-slate-900/80 text-slate-400", children: /* @__PURE__ */ jsxs9("tr", { children: [
      columns.map((c) => /* @__PURE__ */ jsx12("th", { className: "px-4 py-3 text-start text-xs font-medium uppercase tracking-wide", children: c.label }, c.key)),
      onRowClick && /* @__PURE__ */ jsx12("th", { className: "w-10 px-4 py-3" })
    ] }) }),
    /* @__PURE__ */ jsxs9("tbody", { className: "divide-y divide-slate-800/60", children: [
      rows === null && /* @__PURE__ */ jsx12("tr", { children: /* @__PURE__ */ jsx12("td", { colSpan: colCount, className: "px-4 py-10 text-center text-slate-500", children: loadingLabel }) }),
      rows?.length === 0 && /* @__PURE__ */ jsx12("tr", { children: /* @__PURE__ */ jsx12("td", { colSpan: colCount, className: "px-4 py-10 text-center text-slate-500", children: emptyLabel }) }),
      rows?.map((row, i) => /* @__PURE__ */ jsxs9(
        "tr",
        {
          onClick: onRowClick ? () => onRowClick(row) : void 0,
          className: `transition-colors hover:bg-white/[0.025] ${onRowClick ? "cursor-pointer" : ""}`,
          children: [
            columns.map((c) => /* @__PURE__ */ jsx12("td", { className: "max-w-[280px] truncate px-4 py-3", children: c.render ? c.render(row) : renderCell(row[c.key], c.kind) }, c.key)),
            onRowClick && /* @__PURE__ */ jsx12("td", { className: "px-4 py-3 text-slate-600", children: /* @__PURE__ */ jsx12(ChevronRight, { className: "h-4 w-4 rtl:rotate-180" }) })
          ]
        },
        getRowKey ? getRowKey(row, i) : row.id ?? i
      ))
    ] })
  ] }) });
}

// src/data/DetailGrid.tsx
import { jsx as jsx13, jsxs as jsxs10 } from "react/jsx-runtime";
function DetailGrid({ fields, columns = 2 }) {
  return /* @__PURE__ */ jsx13("div", { className: `grid gap-px overflow-hidden rounded-xl border border-slate-800 bg-slate-800 ${columns === 2 ? "sm:grid-cols-2" : ""}`, children: fields.map((f, i) => /* @__PURE__ */ jsxs10("div", { className: "bg-slate-900/60 p-4", children: [
    /* @__PURE__ */ jsx13("div", { className: "text-xs uppercase tracking-wide text-slate-500", children: f.label }),
    /* @__PURE__ */ jsx13("div", { className: "mt-1 break-words text-sm text-slate-200", children: f.value })
  ] }, i)) });
}

// src/layout/Sidebar.tsx
import { jsx as jsx14, jsxs as jsxs11 } from "react/jsx-runtime";
function Sidebar({ className, children, ...props }) {
  return /* @__PURE__ */ jsx14("aside", { className: cn("hidden w-64 shrink-0 flex-col border-e border-slate-800 bg-slate-900/80 p-4 sm:flex", className), ...props, children });
}
function Brand({ name, subtitle, icon, primary = "#7c3aed", logoUrl }) {
  return /* @__PURE__ */ jsxs11("div", { className: "mb-6 flex items-center gap-3 px-2", children: [
    /* @__PURE__ */ jsx14(Avatar, { size: "md", primary, src: logoUrl, icon, text: name }),
    /* @__PURE__ */ jsxs11("span", { className: "leading-tight", children: [
      /* @__PURE__ */ jsx14("span", { className: "block text-sm font-semibold", children: name }),
      subtitle && /* @__PURE__ */ jsx14("span", { className: "block text-[11px] text-slate-400", children: subtitle })
    ] })
  ] });
}
function SidebarSection({ label, children, className }) {
  return /* @__PURE__ */ jsxs11("div", { className, children: [
    label && /* @__PURE__ */ jsx14("p", { className: "mb-2 mt-5 px-3 text-[11px] font-medium uppercase tracking-wide text-slate-500", children: label }),
    /* @__PURE__ */ jsx14("nav", { className: "space-y-0.5", children })
  ] });
}
function NavItem({ icon, label, active, onClick, primary }) {
  return /* @__PURE__ */ jsxs11(
    "button",
    {
      onClick,
      "aria-current": active ? "page" : void 0,
      className: cn(
        "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition",
        active ? "font-medium text-white" : "text-slate-400 hover:bg-white/5 hover:text-white"
      ),
      style: active ? { background: primary ? `color-mix(in srgb, ${primary} 18%, transparent)` : "color-mix(in srgb, var(--primary, #7c3aed) 18%, transparent)" } : void 0,
      children: [
        icon && /* @__PURE__ */ jsx14("span", { className: "h-4 w-4 shrink-0", children: icon }),
        /* @__PURE__ */ jsx14("span", { className: "truncate text-start", children: label })
      ]
    }
  );
}

// src/layout/UserDropdown.tsx
import * as React5 from "react";
import { ChevronDown } from "lucide-react";
import { jsx as jsx15, jsxs as jsxs12 } from "react/jsx-runtime";
function UserDropdownItem({ icon, label, onClick, danger }) {
  return /* @__PURE__ */ jsxs12(
    "button",
    {
      onClick,
      className: cn("flex w-full items-center gap-2 px-4 py-2.5 text-start text-sm hover:bg-white/5", danger ? "text-red-400" : "text-slate-200"),
      children: [
        icon,
        label
      ]
    }
  );
}
function UserDropdown({ email, primary = "#7c3aed", avatarUrl, items, children }) {
  const [open, setOpen] = React5.useState(false);
  const ref = React5.useRef(null);
  React5.useEffect(() => {
    const close = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);
  return /* @__PURE__ */ jsxs12("div", { className: "relative", ref, children: [
    /* @__PURE__ */ jsxs12("button", { onClick: () => setOpen((v) => !v), className: "flex items-center gap-2 rounded-full py-1 pe-3 ps-1 transition hover:bg-white/5", children: [
      /* @__PURE__ */ jsx15(Avatar, { size: "sm", primary, src: avatarUrl, text: email }),
      /* @__PURE__ */ jsx15("span", { className: "max-w-[160px] truncate text-sm text-slate-300", children: email }),
      /* @__PURE__ */ jsx15(ChevronDown, { className: "h-4 w-4 text-slate-500" })
    ] }),
    open && /* @__PURE__ */ jsx15("div", { className: "absolute end-0 mt-2 w-44 overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-xl", onClick: () => setOpen(false), children: items ? items.map((it, i) => /* @__PURE__ */ jsx15(UserDropdownItem, { ...it }, it.key ?? i)) : children })
  ] });
}
function Topbar({ left, right }) {
  return /* @__PURE__ */ jsxs12("header", { className: "flex items-center justify-between border-b border-slate-800 bg-slate-900/50 px-6 py-3", children: [
    /* @__PURE__ */ jsx15("div", { children: left }),
    /* @__PURE__ */ jsx15("div", { className: "flex items-center gap-2", children: right })
  ] });
}

// src/layout/Bits.tsx
import * as React6 from "react";
import { ChevronDown as ChevronDown2, Languages, Building2 } from "lucide-react";
import { jsx as jsx16, jsxs as jsxs13 } from "react/jsx-runtime";
function RealtimeDot({ connected, label }) {
  return /* @__PURE__ */ jsxs13("span", { className: "inline-flex items-center gap-1.5 text-xs text-slate-500", children: [
    /* @__PURE__ */ jsx16("span", { className: `h-1.5 w-1.5 rounded-full ${connected ? "bg-emerald-400" : "bg-slate-600"}` }),
    label
  ] });
}
function LangToggle({ label, onToggle }) {
  return /* @__PURE__ */ jsxs13("button", { onClick: onToggle, className: "inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs text-slate-300 transition hover:bg-white/5", title: "Language", children: [
    /* @__PURE__ */ jsx16(Languages, { className: "h-4 w-4" }),
    label
  ] });
}
function PlatformSwitcher({ current, options, onSelect, placeholder = "Platform" }) {
  const [open, setOpen] = React6.useState(false);
  return /* @__PURE__ */ jsxs13("div", { className: "relative", children: [
    /* @__PURE__ */ jsxs13("button", { onClick: () => setOpen((v) => !v), className: "flex w-full items-center justify-between rounded-lg border border-slate-800 bg-slate-950/50 px-3 py-2 text-sm text-slate-300 transition hover:bg-white/5", children: [
      /* @__PURE__ */ jsxs13("span", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx16(Building2, { className: "h-4 w-4 text-slate-400" }),
        /* @__PURE__ */ jsx16("span", { className: "truncate", children: current || placeholder })
      ] }),
      /* @__PURE__ */ jsx16(ChevronDown2, { className: "h-4 w-4 text-slate-500" })
    ] }),
    open && options.length > 0 && /* @__PURE__ */ jsx16("div", { className: "absolute z-10 mt-1 w-full overflow-hidden rounded-lg border border-slate-800 bg-slate-900 shadow-xl", children: options.map((p) => /* @__PURE__ */ jsx16("button", { onClick: () => {
      onSelect(p);
      setOpen(false);
    }, className: "block w-full px-3 py-2 text-start text-sm text-slate-300 hover:bg-white/5", children: p.name }, p.id)) })
  ] });
}
function PageHeader({ title, count, subtitle, actions }) {
  return /* @__PURE__ */ jsxs13("header", { className: "mb-5 flex flex-wrap items-end justify-between gap-3", children: [
    /* @__PURE__ */ jsxs13("div", { children: [
      /* @__PURE__ */ jsxs13("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx16("h1", { className: "text-2xl font-semibold", children: title }),
        count != null && /* @__PURE__ */ jsx16("span", { className: "rounded-full bg-slate-800 px-2 py-0.5 text-xs tabular-nums text-slate-400", children: count })
      ] }),
      subtitle && /* @__PURE__ */ jsx16("p", { className: "text-sm text-slate-400", children: subtitle })
    ] }),
    actions && /* @__PURE__ */ jsx16("div", { className: "flex items-center gap-2", children: actions })
  ] });
}
function Toast({ message }) {
  if (!message) return null;
  return /* @__PURE__ */ jsx16("div", { className: "fixed bottom-6 end-6 z-50 rounded-lg bg-emerald-600 px-4 py-2 text-sm text-white shadow-lg", children: message });
}

// src/layout/AdminShell.tsx
import { jsx as jsx17, jsxs as jsxs14 } from "react/jsx-runtime";
function AdminShell({ brand, nav, groupLabel = "Administration", onNavigate, sidebarTop, headerLeft, headerRight, children }) {
  const primary = brand.primary || "#7c3aed";
  return /* @__PURE__ */ jsxs14("div", { className: "tg-root flex min-h-screen bg-slate-950 text-slate-100", style: { ["--primary"]: primary }, children: [
    /* @__PURE__ */ jsxs14(Sidebar, { children: [
      /* @__PURE__ */ jsx17(Brand, { name: brand.name, subtitle: brand.subtitle, icon: brand.icon, primary, logoUrl: brand.logoUrl }),
      sidebarTop,
      /* @__PURE__ */ jsx17(SidebarSection, { label: groupLabel, children: nav.map((item) => /* @__PURE__ */ jsx17(NavItem, { icon: item.icon, label: item.label, active: item.active, primary, onClick: () => onNavigate(item.key) }, item.key)) })
    ] }),
    /* @__PURE__ */ jsxs14("div", { className: "flex min-w-0 flex-1 flex-col", children: [
      /* @__PURE__ */ jsx17(Topbar, { left: headerLeft, right: headerRight }),
      /* @__PURE__ */ jsx17("main", { className: "min-w-0 flex-1", children })
    ] })
  ] });
}

// src/auth/Auth.tsx
import { Lock } from "lucide-react";
import { Fragment, jsx as jsx18, jsxs as jsxs15 } from "react/jsx-runtime";
function BrandPanel({ name, tagline, icon, primary = "#7c3aed", footer }) {
  return /* @__PURE__ */ jsxs15(
    "div",
    {
      className: "relative hidden flex-1 flex-col items-center justify-center overflow-hidden p-12 text-white lg:flex",
      style: { background: `linear-gradient(135deg, ${primary}, #4f46e5)` },
      children: [
        /* @__PURE__ */ jsx18("span", { className: "flex h-20 w-20 items-center justify-center rounded-3xl bg-white/15 backdrop-blur", children: icon }),
        /* @__PURE__ */ jsx18("div", { className: "mt-6 text-3xl font-bold", children: name }),
        tagline && /* @__PURE__ */ jsx18("div", { className: "mt-1 text-white/80", children: tagline }),
        /* @__PURE__ */ jsx18("div", { className: "absolute bottom-8 flex items-center gap-2 text-sm text-white/70", children: footer ?? /* @__PURE__ */ jsxs15(Fragment, { children: [
          /* @__PURE__ */ jsx18(Lock, { className: "h-4 w-4" }),
          " Secured & encrypted"
        ] }) })
      ]
    }
  );
}
function AuthLayout({ brand, children }) {
  return /* @__PURE__ */ jsxs15("div", { className: "tg-root flex min-h-screen bg-slate-950 text-slate-100", children: [
    /* @__PURE__ */ jsx18("div", { className: "flex flex-1 items-center justify-center p-8", children }),
    /* @__PURE__ */ jsx18(BrandPanel, { ...brand })
  ] });
}
function AuthCard({ title, subtitle, footer, children }) {
  return /* @__PURE__ */ jsxs15("div", { className: "w-full max-w-sm", children: [
    /* @__PURE__ */ jsx18("h1", { className: "text-3xl font-semibold", children: title }),
    subtitle && /* @__PURE__ */ jsx18("p", { className: "mt-1 text-sm text-slate-400", children: subtitle }),
    /* @__PURE__ */ jsx18("div", { className: "mt-6", children }),
    footer && /* @__PURE__ */ jsx18("div", { className: "mt-6 text-center text-sm text-slate-500", children: footer })
  ] });
}
function AuthError({ children }) {
  if (!children) return null;
  return /* @__PURE__ */ jsx18("p", { className: "mb-3 rounded-lg border border-red-900/50 bg-red-950/30 px-3 py-2 text-sm text-red-400", children });
}
function AuthMethods({ methods, dividerLabel = "or", className }) {
  if (!methods.length) return null;
  return /* @__PURE__ */ jsxs15("div", { className: cn("mt-4", className), children: [
    /* @__PURE__ */ jsxs15("div", { className: "my-4 flex items-center gap-3 text-xs text-slate-500", children: [
      /* @__PURE__ */ jsx18("span", { className: "h-px flex-1 bg-slate-800" }),
      dividerLabel,
      /* @__PURE__ */ jsx18("span", { className: "h-px flex-1 bg-slate-800" })
    ] }),
    /* @__PURE__ */ jsx18("div", { className: "space-y-2", children: methods.map((m, i) => /* @__PURE__ */ jsxs15("button", { onClick: m.onClick, className: "flex w-full items-center justify-center gap-2 rounded-lg border border-slate-700 px-3 py-2 text-sm text-slate-200 transition hover:bg-white/5", children: [
      m.icon,
      m.label
    ] }, m.key ?? i)) })
  ] });
}

// src/profile/Profile.tsx
import { jsx as jsx19, jsxs as jsxs16 } from "react/jsx-runtime";
function EntityHeader({ title, avatarText, avatarUrl, icon, primary, subtitle, meta, actions }) {
  return /* @__PURE__ */ jsxs16("header", { className: "mb-6 flex flex-wrap items-center justify-between gap-3", children: [
    /* @__PURE__ */ jsxs16("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsx19(Avatar, { size: "lg", text: avatarText ?? title, src: avatarUrl, icon, primary }),
      /* @__PURE__ */ jsxs16("div", { children: [
        /* @__PURE__ */ jsx19("h1", { className: "text-xl font-semibold", children: title }),
        (subtitle || meta) && /* @__PURE__ */ jsxs16("div", { className: "mt-0.5 flex items-center gap-2 text-xs text-slate-500", children: [
          meta,
          subtitle
        ] })
      ] })
    ] }),
    actions && /* @__PURE__ */ jsx19("div", { className: "flex flex-wrap items-center gap-2", children: actions })
  ] });
}
function ProfileSection({ title, children }) {
  return /* @__PURE__ */ jsxs16("section", { className: "rounded-xl border border-slate-800 bg-slate-900/50 p-5", children: [
    /* @__PURE__ */ jsx19("h2", { className: "mb-3 text-sm font-semibold", children: title }),
    children
  ] });
}
export {
  AdminShell,
  AreaChart,
  AuthCard,
  AuthError,
  AuthLayout,
  AuthMethods,
  Avatar,
  Badge,
  BarChart,
  Brand,
  BrandPanel,
  Button,
  Card,
  CardTitle,
  Checkbox,
  DataTable,
  DetailGrid,
  EntityHeader,
  Field,
  Gauge,
  Input,
  LangToggle,
  Modal,
  NavItem,
  PageHeader,
  PlatformSwitcher,
  ProfileSection,
  RealtimeDot,
  SearchInput,
  Select,
  Sidebar,
  SidebarSection,
  StatCard,
  StatusPill,
  Switch,
  Toast,
  Topbar,
  UserDropdown,
  UserDropdownItem,
  cn,
  inputCls
};
//# sourceMappingURL=index.js.map