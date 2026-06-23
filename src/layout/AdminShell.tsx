import * as React from "react";

export interface NavItem {
  key: string;
  label: string;
  icon: React.ReactNode;
  active?: boolean;
}

export interface Brand {
  name: string;
  subtitle?: string;
  primary?: string;
  icon?: React.ReactNode;
}

export interface AdminShellProps {
  brand: Brand;
  nav: NavItem[];
  groupLabel?: string;
  onNavigate: (key: string) => void;
  /** Slot below the brand (e.g. a PlatformSwitcher). */
  sidebarTop?: React.ReactNode;
  /** Left side of the top bar (e.g. a RealtimeDot). */
  headerLeft?: React.ReactNode;
  /** Right side of the top bar (e.g. LangToggle + UserMenu). */
  headerRight?: React.ReactNode;
  children: React.ReactNode;
}

/** AdminShell — the prism-style admin layout: a fixed sidebar (RTL-aware: it sits
 * at the inline-start, so it flips to the right under dir="rtl") + a top bar + main
 * content. Fully presentational — pass nav items, brand, and slots. */
export function AdminShell({ brand, nav, groupLabel = "Administration", onNavigate, sidebarTop, headerLeft, headerRight, children }: AdminShellProps) {
  const primary = brand.primary || "#7c3aed";
  return (
    <div className="tg-root flex min-h-screen bg-slate-950 text-slate-100" style={{ ["--primary" as any]: primary }}>
      <aside className="hidden w-64 shrink-0 flex-col border-e border-slate-800 bg-slate-900/80 p-4 sm:flex">
        <div className="mb-6 flex items-center gap-3 px-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl text-white" style={{ background: `linear-gradient(135deg, ${primary}, #4f46e5)` }}>
            {brand.icon}
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold">{brand.name}</span>
            {brand.subtitle && <span className="block text-[11px] text-slate-400">{brand.subtitle}</span>}
          </span>
        </div>

        {sidebarTop}

        <p className="mb-2 mt-5 px-3 text-[11px] font-medium uppercase tracking-wide text-slate-500">{groupLabel}</p>
        <nav className="space-y-0.5">
          {nav.map((item) => (
            <button
              key={item.key}
              onClick={() => onNavigate(item.key)}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition ${
                item.active ? "font-medium text-white" : "text-slate-400 hover:bg-white/5 hover:text-white"
              }`}
              style={item.active ? { background: `color-mix(in srgb, ${primary} 18%, transparent)` } : undefined}
            >
              <span className="h-4 w-4 shrink-0">{item.icon}</span>
              <span className="truncate text-start">{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex items-center justify-between border-b border-slate-800 bg-slate-900/50 px-6 py-3">
          <div>{headerLeft}</div>
          <div className="flex items-center gap-2">{headerRight}</div>
        </header>
        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </div>
  );
}
