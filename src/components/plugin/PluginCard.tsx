'use client'

// PluginCard — grid card for a single plugin (source/capability/AI/pipeline).
//
// ADAPTED from app/src/components/superadmin/plugins/PluginCard.tsx:
//   - next/dynamic → static import (no Next.js server in sentra-ui; Storybook
//     renders synchronously; host can wrap in lazy() if needed).
//   - Link (next/link) → onDetailClick / onPageClick callbacks. The host
//     handles navigation; this keeps the component framework-agnostic.
//   - resolveIcon() → iconComponent prop — host passes the resolved Lucide icon.
//   - useLongPress → kept inline (no external dep needed, small helper).
//   - IntersectionObserver gate for sparkline kept but simplified —
//     sparkline is always rendered if seriesData has any > 0 values.
//     Host can gate it externally via the `showSparkline` prop if desired.
//   - @/components/ui/* → ../ui/*; @/lib/utils → ../../lib/utils

import { useMemo, useCallback, useEffect, useRef, useState } from "react";
import { Settings2, ExternalLink, CircleDot, type LucideIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import { PluginSparkline } from "./PluginSparkline";
import type { PluginCatalogEntry } from "./types";

// ── Type labels ───────────────────────────────────────────────────────────────

const TYPE_LABELS: Record<string, { en: string; ar: string }> = {
  capability: { en: "Capability", ar: "قدرة" },
  source: { en: "Source", ar: "مصدر" },
  ai_provider: { en: "AI Provider", ar: "مزوّد ذكاء" },
  adk_artifact: { en: "ADK Artifact", ar: "قطعة ADK" },
  pipeline: { en: "Pipeline", ar: "خطّ معالجة" },
  enrichment: { en: "Enrichment", ar: "إثراء" },
  copilot: { en: "Copilot", ar: "مساعد" },
  "system-base": { en: "System", ar: "نظام" },
  adk_tool: { en: "Tool", ar: "أداة" },
  core: { en: "Core", ar: "أساس" },
  // adk_kind values — shown in place of "adk_artifact" when present
  tool: { en: "Tool", ar: "أداة" },
  skill: { en: "Skill", ar: "مهارة" },
  agent: { en: "Agent", ar: "وكيل" },
  mcp: { en: "MCP", ar: "MCP" },
  memory: { en: "Memory", ar: "ذاكرة" },
  persona: { en: "Persona", ar: "شخصية" },
};

const DEFAULT_COLOR = "#64748b";

// ── Formatters ────────────────────────────────────────────────────────────────

function formatCount(n: number | undefined | null): string {
  if (n == null) return "0";
  if (n < 1000) return String(n);
  if (n < 1_000_000) return `${(n / 1000).toFixed(n < 10_000 ? 1 : 0)}K`;
  if (n < 1_000_000_000)
    return `${(n / 1_000_000).toFixed(n < 10_000_000 ? 1 : 0)}M`;
  return `${(n / 1_000_000_000).toFixed(1)}B`;
}

function formatRelative(iso: string | null | undefined, isRTL: boolean): string {
  if (!iso) return isRTL ? "لا نشاط" : "No activity";
  const t = Date.parse(iso);
  if (Number.isNaN(t)) return isRTL ? "لا نشاط" : "No activity";
  const diffSec = Math.max(0, Math.round((Date.now() - t) / 1000));
  if (diffSec < 60) return isRTL ? "قبل ثوانٍ" : "just now";
  const m = Math.round(diffSec / 60);
  if (m < 60) return isRTL ? `قبل ${m} د` : `${m}m ago`;
  const h = Math.round(diffSec / 3600);
  if (h < 48) return isRTL ? `قبل ${h} س` : `${h}h ago`;
  const d = Math.round(diffSec / 86400);
  if (d < 30) return isRTL ? `قبل ${d} يوم` : `${d}d ago`;
  const mo = Math.round(d / 30);
  if (mo < 12) return isRTL ? `قبل ${mo} شهر` : `${mo}mo ago`;
  const y = Math.round(d / 365);
  return isRTL ? `قبل ${y} سنة` : `${y}y ago`;
}

function countLabel(pluginType: string, isRTL: boolean): string {
  switch (pluginType) {
    case "source":
      return isRTL ? "مغلّفات" : "envelopes";
    case "ai_provider":
      return isRTL ? "رموز" : "tokens";
    case "adk_artifact":
    case "adk_tool":
      return isRTL ? "استدعاءات" : "invocations";
    case "pipeline":
    case "enrichment":
      return isRTL ? "مهام نشطة" : "active jobs";
    default:
      return isRTL ? "سجلات" : "records";
  }
}

// ── Activity state ────────────────────────────────────────────────────────────

type ActivityState = "green" | "yellow" | "red";

function activityState(iso: string | null | undefined): ActivityState {
  if (!iso) return "red";
  const t = Date.parse(iso);
  if (Number.isNaN(t)) return "red";
  const ageMin = (Date.now() - t) / 60000;
  if (ageMin <= 60) return "green";
  if (ageMin <= 60 * 24) return "yellow";
  return "red";
}

const STATE_CLASSES: Record<ActivityState, { chip: string; dot: string }> = {
  green: {
    chip: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
    dot: "bg-emerald-500",
  },
  yellow: {
    chip: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30",
    dot: "bg-amber-500",
  },
  red: {
    chip: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/30",
    dot: "bg-red-500",
  },
};

// ── Long-press hook (inline, no dep) ─────────────────────────────────────────

function useLongPress(
  callback: () => void,
  { delay = 500 }: { delay?: number } = {}
) {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const start = useCallback(() => {
    timerRef.current = setTimeout(callback, delay);
  }, [callback, delay]);

  const cancel = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  return {
    onMouseDown: start,
    onMouseUp: cancel,
    onMouseLeave: cancel,
    onTouchStart: start,
    onTouchEnd: cancel,
  };
}

// ── IntersectionObserver hook ─────────────────────────────────────────────────

function useInView(
  rootMargin = "200px"
): [React.RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { rootMargin }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [inView, rootMargin]);

  return [ref, inView];
}

// ── PluginCard ────────────────────────────────────────────────────────────────

export interface PluginCardProps {
  plugin: PluginCatalogEntry;
  isRTL: boolean;
  /**
   * Resolved Lucide icon component for this plugin.
   * Host calls resolveIcon(plugin.nav_icon) and passes the result here.
   */
  iconComponent?: LucideIcon;
  /** When true, render a checkbox for multi-select. */
  selectable?: boolean;
  selected?: boolean;
  onSelectChange?: (id: string, next: boolean) => void;
  /**
   * Called when the user clicks "Details". Host navigates to the detail page.
   * Receives the plugin slug (or id) as argument.
   */
  onDetailClick?: (slugOrId: string) => void;
  /**
   * Called when the user clicks "Page" (external route link).
   * Receives the route string from plugin.route.
   */
  onPageClick?: (route: string) => void;
}

export const PluginCard = ({
  plugin,
  isRTL,
  iconComponent: Icon,
  selectable = false,
  selected = false,
  onSelectChange,
  onDetailClick,
  onPageClick,
}: PluginCardProps) => {
  const name =
    (isRTL ? plugin.name_ar : plugin.name_en) ||
    plugin.name_en ||
    plugin.name ||
    plugin.slug ||
    plugin.id;

  const description =
    (isRTL ? plugin.description_ar : plugin.description_en) ||
    plugin.description_en ||
    plugin.description ||
    "";

  // When the plugin is an adk_artifact, prefer the granular adk_kind over the
  // coarse plugin_type so the badge shows "Tool" / "Skill" / "Agent" / "MCP" / etc.
  const rawTypeKey = String(plugin.plugin_type ?? "");
  const typeKey =
    rawTypeKey === "adk_artifact" && plugin.adk_kind
      ? String(plugin.adk_kind)
      : rawTypeKey;
  const typeLabel = TYPE_LABELS[typeKey] ?? {
    en: typeKey || "Plugin",
    ar: typeKey || "إضافة",
  };
  const color = plugin.nav_color || DEFAULT_COLOR;
  const enabled = plugin.enabled_globally !== false;
  const lastActiveISO = plugin.last_active_at ?? null;
  const state = activityState(lastActiveISO);
  const stateClasses = STATE_CLASSES[state];

  // countLabel uses the coarse plugin_type so all adk_artifact kinds show
  // "invocations" regardless of their specific adk_kind.
  const countLabelText = countLabel(rawTypeKey, isRTL);

  const seriesData = useMemo(() => {
    const series = plugin.activity_series ?? [];
    if (series.length === 0) {
      return Array.from({ length: 24 }, () => ({ n: 0 }));
    }
    return series.map((b) => ({ n: b.n }));
  }, [plugin.activity_series]);

  const hasSeriesData = seriesData.some((d) => d.n > 0);
  const [cardRef, chartInView] = useInView("200px");

  const externalRoute =
    typeof plugin.route === "string" && plugin.route.trim() !== ""
      ? plugin.route
      : null;

  const handleBodyClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!selectable) return;
    const target = e.target as HTMLElement;
    if (target.closest("a, button, input, [role='button']")) return;
    onSelectChange?.(plugin.id, !selected);
  };

  const handleLongPress = useCallback(() => {
    onSelectChange?.(plugin.id, true);
  }, [onSelectChange, plugin.id]);

  const longPressHandlers = useLongPress(handleLongPress, { delay: 500 });

  const slugOrId = plugin.slug ?? plugin.id;

  return (
    <div
      ref={cardRef}
      className={[
        "h-full rounded-lg border bg-card transition-all duration-fast ease-standard hover:shadow-md flex flex-col",
        selected
          ? "border-primary ring-2 ring-primary/40"
          : "border-border hover:border-primary/40",
        selectable ? "cursor-pointer select-none" : "",
      ].join(" ")}
      data-selected={selected ? "true" : undefined}
      onClick={handleBodyClick}
      onContextMenu={(e) => {
        if (selected || selectable) e.preventDefault();
      }}
      {...longPressHandlers}
    >
      <div className="p-4 flex flex-col gap-3 flex-1">
        <div className="flex items-start gap-3">
          <div
            className="flex h-11 w-11 flex-none items-center justify-center rounded-md text-white"
            style={{ backgroundColor: color }}
            aria-hidden="true"
          >
            {Icon && <Icon className="h-5 w-5" />}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-2">
              <h3
                className="text-sm font-semibold text-foreground truncate min-w-0"
                title={name ?? undefined}
              >
                {name}
              </h3>
              <span
                className={[
                  "inline-flex items-center gap-1 flex-none px-1.5 py-0.5 rounded-full text-[10px] font-medium border",
                  stateClasses.chip,
                ].join(" ")}
                title={lastActiveISO ?? (isRTL ? "لا نشاط" : "No activity")}
                aria-label={
                  isRTL
                    ? `آخر نشاط: ${formatRelative(lastActiveISO, isRTL)}`
                    : `Last active: ${formatRelative(lastActiveISO, isRTL)}`
                }
              >
                <span
                  className={[
                    "h-1.5 w-1.5 rounded-full flex-none",
                    stateClasses.dot,
                  ].join(" ")}
                />
                <span className="truncate">
                  {formatRelative(lastActiveISO, isRTL)}
                </span>
              </span>
            </div>
            <div className="mt-1 flex items-center gap-2 flex-wrap">
              <Badge
                variant="secondary"
                className="text-[10px] font-normal uppercase tracking-wide"
              >
                {isRTL ? typeLabel.ar : typeLabel.en}
              </Badge>
              <span
                className={[
                  "inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[10px] font-medium",
                  enabled
                    ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                    : "bg-muted text-muted-foreground",
                ].join(" ")}
                aria-label={enabled ? "Enabled" : "Disabled"}
              >
                <CircleDot className="h-3 w-3 opacity-70" />
                {enabled
                  ? isRTL
                    ? "مفعّل"
                    : "Enabled"
                  : isRTL
                  ? "معطّل"
                  : "Disabled"}
              </span>
            </div>
          </div>
        </div>

        <p className="text-xs text-muted-foreground line-clamp-2 min-h-[2rem]">
          {description || (isRTL ? "لا يوجد وصف." : "No description.")}
        </p>
      </div>

      {/* Counter + sparkline */}
      <div className="border-t border-border/60 bg-muted/20">
        <div className="px-4 pt-3 pb-1">
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
            {countLabelText}
          </div>
          <div
            className="text-2xl font-semibold text-foreground leading-tight"
            title={String(plugin.activity_count ?? 0)}
          >
            {formatCount(plugin.activity_count ?? 0)}
          </div>
        </div>

        {chartInView ? (
          <PluginSparkline
            pluginId={plugin.id}
            seriesData={seriesData}
            hasSeriesData={hasSeriesData}
            color={color}
          />
        ) : (
          <div className="h-12 w-full" aria-hidden="true" />
        )}
      </div>

      {/* Footer action bar */}
      <div className="px-3 py-2 flex items-center justify-between gap-2 text-xs border-t border-border/40">
        <span
          className="font-mono opacity-60 truncate text-muted-foreground"
          title={slugOrId}
        >
          {slugOrId}
        </span>
        <div className="inline-flex items-center gap-1 flex-none">
          {externalRoute && onPageClick && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onPageClick(externalRoute);
              }}
              className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-[11px] font-medium text-foreground hover:bg-muted transition-colors duration-fast ease-standard"
              title={
                isRTL
                  ? "فتح صفحة القدرة"
                  : "Open capability page"
              }
            >
              <ExternalLink className="h-3 w-3" />
              {isRTL ? "الصفحة" : "Page"}
            </button>
          )}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onDetailClick?.(slugOrId);
            }}
            className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-[11px] font-medium text-primary hover:bg-primary/10 transition-colors duration-fast ease-standard"
            title={isRTL ? "فتح تفاصيل الإضافة" : "Open plugin details"}
          >
            <Settings2 className="h-3 w-3" />
            {isRTL ? "التفاصيل" : "Details"}
          </button>
        </div>
      </div>
    </div>
  );
};

PluginCard.displayName = "PluginCard";