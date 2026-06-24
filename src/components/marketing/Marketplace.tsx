"use client";

import * as React from "react";
import type { LucideIcon } from "lucide-react";
import { Search, Star, Download } from "lucide-react";
import { cn } from "../../lib/utils";
import { GlassCard } from "./Glass";

const DISPLAY: React.CSSProperties = { fontFamily: '"Sora", var(--togo-font-body, ui-sans-serif, system-ui, sans-serif)' };

// ── MarketplaceCard ──────────────────────────────────────────────────────────────
// A Filament-grade plugin card: a branded category "cover" (gradient + dotted texture +
// the category icon — since framework plugins rarely ship screenshots), then name,
// category, description, author/org, and stars/downloads. Glass-styled, hover-lifts.
export interface MarketplaceCardProps {
  name: string;
  href: string;
  category?: string;
  /** Hex that drives the cover gradient + icon tint. */
  categoryColor?: string;
  icon?: LucideIcon;
  description?: string;
  /** Owner/org, e.g. "togo-framework". */
  author?: string;
  stars?: number;
  downloads?: number;
  enabled?: boolean;
  className?: string;
}

export function MarketplaceCard({
  name, href, category, categoryColor = "#2D8CE6", icon: Icon,
  description, author, stars, downloads, enabled, className,
}: MarketplaceCardProps) {
  return (
    <a href={href} className={cn("group block h-full", className)}>
      <GlassCard hover className="overflow-hidden h-full flex flex-col p-0">
        <div
          className="relative h-28 flex items-center justify-center overflow-hidden"
          style={{ background: `radial-gradient(120% 140% at 0% 0%, ${categoryColor}55, transparent 62%), linear-gradient(135deg, ${categoryColor}26, #0b1016)` }}
        >
          <div className="absolute inset-0 opacity-[0.14]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)", backgroundSize: "16px 16px" }} />
          {Icon && (
            <div className="relative grid place-items-center w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm ring-1 ring-white/15 transition-transform duration-300 group-hover:scale-105">
              <Icon size={28} style={{ color: "#fff" }} />
            </div>
          )}
          {enabled && <span className="absolute top-3 end-3 text-[10px] font-mono px-2 py-0.5 rounded-full bg-black/30 text-emerald-300 ring-1 ring-emerald-400/30">enabled</span>}
        </div>
        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center gap-2">
            <h3 style={DISPLAY} className="text-[15px] font-bold truncate">{name}</h3>
            {category && <span className="ms-auto shrink-0 text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border border-white/12 text-muted-foreground">{category}</span>}
          </div>
          <p className="text-[13px] text-muted-foreground mt-1.5 line-clamp-2 flex-1">{description || "A togo-framework plugin."}</p>
          <div className="flex items-center gap-3 mt-3 text-[11px] text-muted-foreground font-mono">
            {author && <span className="truncate">{author}</span>}
            <span className="ms-auto flex items-center gap-3 shrink-0">
              {typeof stars === "number" && stars > 0 && <span className="flex items-center gap-1"><Star size={11} /> {stars}</span>}
              {typeof downloads === "number" && downloads > 0 && <span className="flex items-center gap-1"><Download size={11} /> {downloads}</span>}
            </span>
          </div>
        </div>
      </GlassCard>
    </a>
  );
}
MarketplaceCard.displayName = "MarketplaceCard";

// ── StatsRow ─────────────────────────────────────────────────────────────────────
export interface StatTile { label: string; value: React.ReactNode; }
export function StatsRow({ stats, className }: { stats: StatTile[]; className?: string }) {
  return (
    <div className={cn("grid grid-cols-3 gap-3 sm:gap-4", className)}>
      {stats.map((s, i) => (
        <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md px-4 sm:px-5 py-4 text-center">
          <div className="text-[10px] font-mono uppercase tracking-[0.16em] text-muted-foreground/70">{s.label}</div>
          <div style={DISPLAY} className="text-2xl sm:text-3xl font-bold mt-1">{s.value}</div>
        </div>
      ))}
    </div>
  );
}
StatsRow.displayName = "StatsRow";

// ── FilterBar (search + category chips + sort) ─────────────────────────────────────
export interface FilterChip { value: string; label: string; count?: number; }
export interface FilterBarProps {
  search: string;
  onSearch: (v: string) => void;
  chips: FilterChip[];
  active: string;
  onChip: (v: string) => void;
  sort?: { value: string; options: { value: string; label: string }[]; onSort: (v: string) => void };
  searchPlaceholder?: string;
  className?: string;
}
export function FilterBar({ search, onSearch, chips, active, onChip, sort, searchPlaceholder = "Search plugins…", className }: FilterBarProps) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
        <div className="relative flex-1 min-w-0">
          <Search size={15} className="absolute start-3.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
          <input
            value={search}
            onChange={(e) => onSearch(e.target.value)}
            placeholder={searchPlaceholder}
            className="w-full h-11 ps-10 pe-4 rounded-full border border-white/12 bg-white/[0.05] backdrop-blur-md text-sm outline-none focus:border-[color:rgba(31,199,220,.5)] transition-colors"
          />
        </div>
        {sort && (
          <select
            value={sort.value}
            onChange={(e) => sort.onSort(e.target.value)}
            className="h-11 px-4 rounded-full border border-white/12 bg-white/[0.05] backdrop-blur-md text-sm outline-none cursor-pointer"
          >
            {sort.options.map((o) => <option key={o.value} value={o.value} className="bg-[#0b1016]">{o.label}</option>)}
          </select>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {chips.map((c) => {
          const on = active === c.value;
          return (
            <button
              key={c.value}
              onClick={() => onChip(c.value)}
              className={cn(
                "font-mono text-[12px] px-3.5 py-1.5 rounded-full border transition-colors",
                on
                  ? "border-[color:rgba(31,199,220,.5)] text-[#5CDDEC] bg-[color:rgba(31,199,220,.08)]"
                  : "border-white/12 text-muted-foreground hover:text-foreground hover:bg-white/[0.05]",
              )}
            >
              {c.label}{typeof c.count === "number" && <span className="opacity-50"> {c.count}</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}
FilterBar.displayName = "FilterBar";

// ── Pager ─────────────────────────────────────────────────────────────────────
export function Pager({ page, pages, onPage, className }: { page: number; pages: number; onPage: (p: number) => void; className?: string }) {
  if (pages <= 1) return null;
  const nums = Array.from({ length: pages }, (_, i) => i + 1).filter((n) => n === 1 || n === pages || Math.abs(n - page) <= 1);
  const btn = "min-w-9 h-9 px-2 rounded-full border text-sm font-mono transition-colors";
  return (
    <div className={cn("flex items-center justify-center gap-1.5", className)}>
      <button disabled={page <= 1} onClick={() => onPage(page - 1)} className={cn(btn, "border-white/12 text-muted-foreground hover:text-foreground disabled:opacity-30")}>‹</button>
      {nums.map((n, i) => (
        <React.Fragment key={n}>
          {i > 0 && n - nums[i - 1] > 1 && <span className="text-muted-foreground/50 px-1">…</span>}
          <button onClick={() => onPage(n)} className={cn(btn, n === page ? "border-[color:rgba(31,199,220,.5)] text-[#5CDDEC] bg-[color:rgba(31,199,220,.08)]" : "border-white/12 text-muted-foreground hover:text-foreground")}>{n}</button>
        </React.Fragment>
      ))}
      <button disabled={page >= pages} onClick={() => onPage(page + 1)} className={cn(btn, "border-white/12 text-muted-foreground hover:text-foreground disabled:opacity-30")}>›</button>
    </div>
  );
}
Pager.displayName = "Pager";
