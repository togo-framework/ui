import * as React from "react";
import { ChevronDown, Languages, Building2 } from "lucide-react";

// ── RealtimeDot ───────────────────────────────────────────────────────────────
export interface RealtimeDotProps {
  connected: boolean;
  label: string;
}
/** RealtimeDot — a coloured status dot + label for a live connection. */
export function RealtimeDot({ connected, label }: RealtimeDotProps) {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
      <span className={`h-1.5 w-1.5 rounded-full ${connected ? "bg-emerald-400" : "bg-slate-600"}`} />
      {label}
    </span>
  );
}

// ── LangToggle ────────────────────────────────────────────────────────────────
export interface LangToggleProps {
  label: string;
  onToggle: () => void;
}
/** LangToggle — a small language switch button (the label is the OTHER language). */
export function LangToggle({ label, onToggle }: LangToggleProps) {
  return (
    <button onClick={onToggle} className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs text-slate-300 transition hover:bg-white/5" title="Language">
      <Languages className="h-4 w-4" />
      {label}
    </button>
  );
}

// ── UserMenu ──────────────────────────────────────────────────────────────────
export interface UserMenuItem {
  label: string;
  icon?: React.ReactNode;
  onClick: () => void;
  danger?: boolean;
}
export interface UserMenuProps {
  email: string;
  items: UserMenuItem[];
  primary?: string;
}
/** UserMenu — an avatar + email button with a dropdown of actions. */
export function UserMenu({ email, items, primary = "#7c3aed" }: UserMenuProps) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const close = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);
  const initial = (email || "?").charAt(0).toUpperCase();
  return (
    <div className="relative" ref={ref}>
      <button onClick={() => setOpen((v) => !v)} className="flex items-center gap-2 rounded-full py-1 pe-3 ps-1 transition hover:bg-white/5">
        <span className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold text-white" style={{ background: `linear-gradient(135deg, ${primary}, #4f46e5)` }}>{initial}</span>
        <span className="max-w-[160px] truncate text-sm text-slate-300">{email}</span>
        <ChevronDown className="h-4 w-4 text-slate-500" />
      </button>
      {open && (
        <div className="absolute end-0 mt-2 w-44 overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-xl">
          {items.map((it, i) => (
            <button key={i} onClick={() => { setOpen(false); it.onClick(); }} className={`flex w-full items-center gap-2 px-4 py-2.5 text-start text-sm hover:bg-white/5 ${it.danger ? "text-red-400" : "text-slate-200"}`}>
              {it.icon}{it.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ── PlatformSwitcher ──────────────────────────────────────────────────────────
export interface PlatformOption { id: string; name: string }
export interface PlatformSwitcherProps {
  current?: string;
  options: PlatformOption[];
  onSelect: (option: PlatformOption) => void;
  placeholder?: string;
}
/** PlatformSwitcher — a sidebar dropdown to switch the active platform/tenant. */
export function PlatformSwitcher({ current, options, onSelect, placeholder = "Platform" }: PlatformSwitcherProps) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="relative">
      <button onClick={() => setOpen((v) => !v)} className="flex w-full items-center justify-between rounded-lg border border-slate-800 bg-slate-950/50 px-3 py-2 text-sm text-slate-300 transition hover:bg-white/5">
        <span className="flex items-center gap-2"><Building2 className="h-4 w-4 text-slate-400" /><span className="truncate">{current || placeholder}</span></span>
        <ChevronDown className="h-4 w-4 text-slate-500" />
      </button>
      {open && options.length > 0 && (
        <div className="absolute z-10 mt-1 w-full overflow-hidden rounded-lg border border-slate-800 bg-slate-900 shadow-xl">
          {options.map((p) => (
            <button key={p.id} onClick={() => { onSelect(p); setOpen(false); }} className="block w-full px-3 py-2 text-start text-sm text-slate-300 hover:bg-white/5">{p.name}</button>
          ))}
        </div>
      )}
    </div>
  );
}

// ── PageHeader ────────────────────────────────────────────────────────────────
export interface PageHeaderProps {
  title: string;
  count?: number;
  subtitle?: string;
  actions?: React.ReactNode;
}
/** PageHeader — a page title with an optional count chip, subtitle, and actions. */
export function PageHeader({ title, count, subtitle, actions }: PageHeaderProps) {
  return (
    <header className="mb-5 flex flex-wrap items-end justify-between gap-3">
      <div>
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-semibold">{title}</h1>
          {count != null && <span className="rounded-full bg-slate-800 px-2 py-0.5 text-xs tabular-nums text-slate-400">{count}</span>}
        </div>
        {subtitle && <p className="text-sm text-slate-400">{subtitle}</p>}
      </div>
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </header>
  );
}

// ── Toast ─────────────────────────────────────────────────────────────────────
/** Toast — a transient bottom-corner confirmation. Render conditionally on a message. */
export function Toast({ message }: { message: string }) {
  if (!message) return null;
  return <div className="fixed bottom-6 end-6 z-50 rounded-lg bg-emerald-600 px-4 py-2 text-sm text-white shadow-lg">{message}</div>;
}
