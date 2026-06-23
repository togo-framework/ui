import * as React from "react";
import { cn } from "../lib/cn";
import { Avatar } from "../primitives/Avatar";

// ── Sidebar ───────────────────────────────────────────────────────────────────
export interface SidebarProps extends React.HTMLAttributes<HTMLElement> {}
/** Sidebar — the fixed admin rail (RTL-aware: border-e + inline-start placement). */
export function Sidebar({ className, children, ...props }: SidebarProps) {
  return (
    <aside className={cn("hidden w-64 shrink-0 flex-col border-e border-slate-800 bg-slate-900/80 p-4 sm:flex", className)} {...props}>
      {children}
    </aside>
  );
}

// ── Brand ─────────────────────────────────────────────────────────────────────
export interface BrandProps {
  name: string;
  subtitle?: string;
  icon?: React.ReactNode;
  primary?: string;
  logoUrl?: string;
}
/** Brand — the sidebar header (icon/logo chip + name + subtitle). */
export function Brand({ name, subtitle, icon, primary = "#7c3aed", logoUrl }: BrandProps) {
  return (
    <div className="mb-6 flex items-center gap-3 px-2">
      <Avatar size="md" primary={primary} src={logoUrl} icon={icon} text={name} />
      <span className="leading-tight">
        <span className="block text-sm font-semibold">{name}</span>
        {subtitle && <span className="block text-[11px] text-slate-400">{subtitle}</span>}
      </span>
    </div>
  );
}

// ── SidebarSection ────────────────────────────────────────────────────────────
export interface SidebarSectionProps {
  label?: string;
  children: React.ReactNode;
  className?: string;
}
/** SidebarSection — a labeled group of nav items. */
export function SidebarSection({ label, children, className }: SidebarSectionProps) {
  return (
    <div className={className}>
      {label && <p className="mb-2 mt-5 px-3 text-[11px] font-medium uppercase tracking-wide text-slate-500">{label}</p>}
      <nav className="space-y-0.5">{children}</nav>
    </div>
  );
}

// ── NavItem ───────────────────────────────────────────────────────────────────
export interface NavItemProps {
  icon?: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
  /** Accent for the active tint (defaults to the CSS --primary var). */
  primary?: string;
}
/** NavItem — a single sidebar nav entry (button-based; wire routing via onClick). */
export function NavItem({ icon, label, active, onClick, primary }: NavItemProps) {
  return (
    <button
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={cn(
        "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition",
        active ? "font-medium text-white" : "text-slate-400 hover:bg-white/5 hover:text-white",
      )}
      style={active ? { background: primary ? `color-mix(in srgb, ${primary} 18%, transparent)` : "color-mix(in srgb, var(--primary, #7c3aed) 18%, transparent)" } : undefined}
    >
      {icon && <span className="h-4 w-4 shrink-0">{icon}</span>}
      <span className="truncate text-start">{label}</span>
    </button>
  );
}
