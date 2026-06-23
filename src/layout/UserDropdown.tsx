import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../lib/cn";
import { Avatar } from "../primitives/Avatar";

// ── UserDropdownItem ──────────────────────────────────────────────────────────
export interface UserDropdownItemProps {
  icon?: React.ReactNode;
  label: string;
  onClick: () => void;
  danger?: boolean;
}
/** UserDropdownItem — a single entry in the user menu. */
export function UserDropdownItem({ icon, label, onClick, danger }: UserDropdownItemProps) {
  return (
    <button
      onClick={onClick}
      className={cn("flex w-full items-center gap-2 px-4 py-2.5 text-start text-sm hover:bg-white/5", danger ? "text-red-400" : "text-slate-200")}
    >
      {icon}{label}
    </button>
  );
}

// ── UserDropdown ──────────────────────────────────────────────────────────────
export interface UserDropdownProps {
  email: string;
  primary?: string;
  avatarUrl?: string;
  /** Provide either declarative `items` or compose `<UserDropdownItem>` children. */
  items?: (UserDropdownItemProps & { key?: React.Key })[];
  children?: React.ReactNode;
}
/** UserDropdown — avatar + email trigger with a dropdown menu. Compose items via
 * the `items` prop or `<UserDropdownItem>` children. */
export function UserDropdown({ email, primary = "#7c3aed", avatarUrl, items, children }: UserDropdownProps) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const close = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);
  return (
    <div className="relative" ref={ref}>
      <button onClick={() => setOpen((v) => !v)} className="flex items-center gap-2 rounded-full py-1 pe-3 ps-1 transition hover:bg-white/5">
        <Avatar size="sm" primary={primary} src={avatarUrl} text={email} />
        <span className="max-w-[160px] truncate text-sm text-slate-300">{email}</span>
        <ChevronDown className="h-4 w-4 text-slate-500" />
      </button>
      {open && (
        <div className="absolute end-0 mt-2 w-44 overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-xl" onClick={() => setOpen(false)}>
          {items
            ? items.map((it, i) => <UserDropdownItem key={it.key ?? i} {...it} />)
            : children}
        </div>
      )}
    </div>
  );
}

// ── Topbar ────────────────────────────────────────────────────────────────────
export interface TopbarProps {
  left?: React.ReactNode;
  right?: React.ReactNode;
}
/** Topbar — the app header bar with left + right slots. */
export function Topbar({ left, right }: TopbarProps) {
  return (
    <header className="flex items-center justify-between border-b border-slate-800 bg-slate-900/50 px-6 py-3">
      <div>{left}</div>
      <div className="flex items-center gap-2">{right}</div>
    </header>
  );
}
