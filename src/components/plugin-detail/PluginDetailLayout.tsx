'use client'

/**
 * PluginDetailLayout — tabbed [slug] layout with sub-sidebar tab navigation.
 *
 * ADAPTED from app/src/app/(app)/superadmin/plugins/[slug]/layout.tsx:
 *   - Extracted from Next.js App Router layout into a pure React component
 *   - @/components/ui/* → ../ui/*
 *   - @/lib/utils       → ../../lib/utils
 *   - useLanguage hook  → language prop
 *   - usePluginDetail / usePipelinePlugins → removed; plugin identity via props
 *   - recharts AreaChart → kept (recharts is in sentra-ui deps)
 *   - resolveIcon       → imported from ./icon-resolver
 *
 * Seams:
 *   - tabs: PluginDetailTab[]           — ordered list of available tabs
 *   - activeTab: string                 — currently active tab key
 *   - onTabChange(key): void            — host handles routing
 *   - children: React.ReactNode         — content for the active tab
 *   - plugin: PluginDetailIdentity      — name, description, type, icon props
 *   - activity?: PluginActivitySummary  — last_active_at + activity_count + series
 *   - language: 'en' | 'ar'
 */

import { useMemo } from 'react'
import { CircleDot } from 'lucide-react'
import { Area, AreaChart, ResponsiveContainer } from 'recharts'
import { Badge } from '../ui/badge'
import { Skeleton } from '../ui/skeleton'
import { cn } from '../../lib/utils'
import { resolveIcon } from './icon-resolver'
import type { PluginDetailTab } from './types'

// ── Shared vocabulary ─────────────────────────────────────────────────────────

const TYPE_LABELS: Record<string, { en: string; ar: string }> = {
  capability:    { en: 'Capability',   ar: 'قدرة' },
  source:        { en: 'Source',       ar: 'مصدر' },
  ai_provider:   { en: 'AI Provider',  ar: 'مزوّد ذكاء' },
  adk_artifact:  { en: 'AI',           ar: 'ذكاء اصطناعي' },
  pipeline:      { en: 'Pipeline',     ar: 'خطّ معالجة' },
  enrichment:    { en: 'Enrichment',   ar: 'إثراء' },
  copilot:       { en: 'Copilot',      ar: 'مساعد' },
  'system-base': { en: 'System',       ar: 'نظام' },
  adk_tool:      { en: 'ADK Tool',     ar: 'أداة ADK' },
  core:          { en: 'Core',         ar: 'الأساس' },
}

const DEFAULT_COLOR = '#64748b'

const formatCount = (n: number | null | undefined): string => {
  if (n == null) return '0'
  if (n < 1000) return String(n)
  if (n < 1_000_000) return `${(n / 1000).toFixed(n < 10_000 ? 1 : 0)}K`
  if (n < 1_000_000_000) return `${(n / 1_000_000).toFixed(n < 10_000_000 ? 1 : 0)}M`
  return `${(n / 1_000_000_000).toFixed(1)}B`
}

const countLabel = (pluginType: string, isRTL: boolean): string => {
  switch (pluginType) {
    case 'source': return isRTL ? 'مغلّفات' : 'envelopes'
    case 'ai_provider': return isRTL ? 'رموز' : 'tokens'
    case 'adk_artifact': case 'adk_tool': return isRTL ? 'استدعاءات' : 'invocations'
    case 'pipeline': case 'enrichment': return isRTL ? 'مهام نشطة' : 'active jobs'
    case 'core': return isRTL ? 'حالة' : 'status'
    default: return isRTL ? 'سجلات' : 'records'
  }
}

const formatRelative = (iso: string | null | undefined, isRTL: boolean): string => {
  if (!iso) return isRTL ? 'لا نشاط' : 'No activity'
  const t = Date.parse(iso)
  if (Number.isNaN(t)) return isRTL ? 'لا نشاط' : 'No activity'
  const diffSec = Math.max(0, Math.round((Date.now() - t) / 1000))
  if (diffSec < 60) return isRTL ? 'قبل ثوانٍ' : 'just now'
  const m = Math.round(diffSec / 60)
  if (m < 60) return isRTL ? `قبل ${m} د` : `${m}m ago`
  const h = Math.round(diffSec / 3600)
  if (h < 48) return isRTL ? `قبل ${h} س` : `${h}h ago`
  const d = Math.round(diffSec / 86400)
  if (d < 30) return isRTL ? `قبل ${d} يوم` : `${d}d ago`
  const mo = Math.round(d / 30)
  if (mo < 12) return isRTL ? `قبل ${mo} شهر` : `${mo}mo ago`
  const y = Math.round(d / 365)
  return isRTL ? `قبل ${y} سنة` : `${y}y ago`
}

type ActivityState = 'green' | 'yellow' | 'red'

const activityState = (iso: string | null | undefined): ActivityState => {
  if (!iso) return 'red'
  const t = Date.parse(iso)
  if (Number.isNaN(t)) return 'red'
  const ageMin = (Date.now() - t) / 60000
  if (ageMin <= 60) return 'green'
  if (ageMin <= 60 * 24) return 'yellow'
  return 'red'
}

const STATE_CLASSES: Record<ActivityState, { chip: string; dot: string }> = {
  green:  { chip: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30', dot: 'bg-emerald-500' },
  yellow: { chip: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30',         dot: 'bg-amber-500' },
  red:    { chip: 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/30',                 dot: 'bg-red-500' },
}

// ── Public types ──────────────────────────────────────────────────────────────

export interface PluginDetailIdentity {
  slug?: string | null
  name?: string | null
  name_en?: string | null
  name_ar?: string | null
  description?: string | null
  description_en?: string | null
  description_ar?: string | null
  plugin_type?: string | null
  version?: string | null
  nav_icon?: string | null
  nav_color?: string | null
  enabled_globally?: boolean | null
}

export interface PluginActivitySummary {
  last_active_at?: string | null
  activity_count?: number | null
  activity_series?: { n: number }[]
  /** Optional override for the counter's label (e.g. "downloads"); replaces the default ("records"). */
  metric_label?: string | null
}

export interface PluginDetailLayoutProps {
  /** Ordered tab list. */
  tabs: PluginDetailTab[]
  /** Currently active tab key. */
  activeTab: string
  /** Called when the operator clicks a tab. */
  onTabChange: (key: string) => void
  /** Content for the active tab. */
  children: React.ReactNode
  /** Plugin identity for the hero. */
  plugin: PluginDetailIdentity
  /** Optional activity data for the sparkline analytics block. */
  activity?: PluginActivitySummary
  /** Whether identity data is still loading. */
  isLoading?: boolean
  /** Whether identity fetch errored. */
  isError?: boolean
  /** Current UI language. */
  language: 'en' | 'ar'
}

// ── PluginHeroSkeleton ────────────────────────────────────────────────────────

const PluginHeroSkeleton = () => (
  <div className="w-full border-b border-border bg-card px-6 py-6">
    <div className="flex items-center gap-5">
      <Skeleton className="h-20 w-20 rounded-xl" />
      <div className="flex-1 space-y-3">
        <Skeleton className="h-6 w-64" />
        <Skeleton className="h-4 w-96" />
        <Skeleton className="h-4 w-40" />
      </div>
      <Skeleton className="h-20 w-48 rounded-lg" />
    </div>
  </div>
)
PluginHeroSkeleton.displayName = 'PluginHeroSkeleton'

// ── PluginHero ────────────────────────────────────────────────────────────────

interface PluginHeroProps {
  plugin: PluginDetailIdentity
  activity?: PluginActivitySummary
  isRTL: boolean
}

const PluginHero = ({ plugin, activity, isRTL }: PluginHeroProps) => {
  const name =
    (isRTL ? plugin.name_ar : plugin.name_en) ||
    plugin.name_en ||
    plugin.name ||
    plugin.slug ||
    ''
  const description =
    (isRTL ? plugin.description_ar : plugin.description_en) ||
    plugin.description_en ||
    plugin.description ||
    ''
  const typeKey = String(plugin.plugin_type ?? '')
  const typeLabel = TYPE_LABELS[typeKey] ?? { en: typeKey || 'Plugin', ar: typeKey || 'إضافة' }
  const color = plugin.nav_color || DEFAULT_COLOR
  const { Component: Icon } = resolveIcon(plugin.nav_icon)
  const enabled = plugin.enabled_globally !== false

  const lastActiveISO = activity?.last_active_at ?? null
  const state = activityState(lastActiveISO)
  const stateClasses = STATE_CLASSES[state]
  const activityCount = activity?.activity_count ?? 0

  const seriesData = useMemo(() => {
    const series = activity?.activity_series ?? []
    if (series.length === 0) return Array.from({ length: 24 }, () => ({ n: 0 }))
    return series.map((b) => ({ n: b.n }))
  }, [activity?.activity_series])
  const hasSeriesData = seriesData.some((d) => d.n > 0)
  const gradId = `herospark-${plugin.slug ?? 'plugin'}`

  return (
    <header className="w-full border-b border-border bg-card px-6 py-6">
      <div className="flex flex-col lg:flex-row lg:items-stretch gap-6">
        {/* Identity block */}
        <div className="flex items-start gap-5 flex-1 min-w-0">
          <div
            className="flex h-20 w-20 flex-none items-center justify-center rounded-xl text-white shadow-sm"
            style={{ backgroundColor: color }}
            aria-hidden="true"
          >
            <Icon className="h-9 w-9" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-3 flex-wrap">
              <h1 className="text-2xl font-semibold text-foreground leading-none">{name}</h1>
              <span
                className={cn(
                  'inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium border',
                  stateClasses.chip,
                )}
                title={lastActiveISO ?? (isRTL ? 'لا نشاط' : 'No activity')}
              >
                <span className={cn('h-2 w-2 rounded-full flex-none', stateClasses.dot)} />
                {formatRelative(lastActiveISO, isRTL)}
              </span>
            </div>

            {description && (
              <p className="mt-2.5 text-sm text-muted-foreground max-w-3xl">{description}</p>
            )}

            <div className="mt-3 flex items-center gap-2 flex-wrap">
              <Badge variant="secondary" className="text-[10px] uppercase tracking-wide">
                {isRTL ? typeLabel.ar : typeLabel.en}
              </Badge>
              {plugin.slug && (
                <Badge variant="outline" className="text-[10px] font-mono">{plugin.slug}</Badge>
              )}
              {plugin.version && (
                <Badge variant="outline" className="text-[10px] font-mono">v{plugin.version}</Badge>
              )}
              <span
                className={cn(
                  'inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium',
                  enabled
                    ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                    : 'bg-muted text-muted-foreground',
                )}
              >
                <CircleDot className="h-3 w-3 opacity-70" />
                {enabled ? (isRTL ? 'مفعّل' : 'Enabled') : (isRTL ? 'معطّل' : 'Disabled')}
              </span>
            </div>
          </div>
        </div>

        {/* Analytics block */}
        <div className="flex-none w-full lg:w-72 rounded-lg border border-border/70 bg-muted/20 overflow-hidden">
          <div className="px-4 pt-3 pb-1">
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
              {activity?.metric_label || countLabel(typeKey, isRTL)}
            </div>
            <div className="text-3xl font-semibold text-foreground leading-tight" title={String(activityCount)}>
              {formatCount(activityCount)}
            </div>
          </div>
          <div className="h-16 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={seriesData} margin={{ top: 4, right: 0, bottom: 0, left: 0 }}>
                <defs>
                  <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={color} stopOpacity={hasSeriesData ? 0.45 : 0.12} />
                    <stop offset="100%" stopColor={color} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="n"
                  stroke={color}
                  strokeWidth={1.5}
                  strokeOpacity={hasSeriesData ? 1 : 0.35}
                  fill={`url(#${gradId})`}
                  isAnimationActive={false}
                  dot={false}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </header>
  )
}
PluginHero.displayName = 'PluginHero'

// Re-exported so PluginDetailShell (AdminLayout-based plugin detail) can reuse
// the same hero + skeleton without duplicating them.
export { PluginHero, PluginHeroSkeleton }

// ── Sub-sidebar tab nav ───────────────────────────────────────────────────────

interface SubSidebarProps {
  tabs: PluginDetailTab[]
  activeTab: string
  onTabChange: (key: string) => void
  isRTL: boolean
}

const SubSidebar = ({ tabs, activeTab, onTabChange, isRTL }: SubSidebarProps) => {
  const renderTab = (tab: PluginDetailTab) => {
    const Icon = tab.icon
    const label = isRTL ? tab.label_ar : tab.label_en
    const isActive = activeTab === tab.key
    return (
      <button
        key={tab.key}
        type="button"
        onClick={() => onTabChange(tab.key)}
        className={cn(
          'flex items-center gap-2.5 rounded-md px-3 py-2 text-sm transition-colors duration-fast ease-standard text-start w-full',
          isActive
            ? 'bg-accent text-accent-foreground font-medium'
            : 'text-muted-foreground hover:bg-muted hover:text-foreground',
        )}
        aria-current={isActive ? 'page' : undefined}
      >
        {Icon && <Icon className="h-4 w-4 shrink-0" aria-hidden />}
        <span className="truncate">{label}</span>
      </button>
    )
  }

  // Group tabs by section (section_en), preserving first-appearance order.
  // Tabs without a section land in a leading unlabelled group (key '').
  const order: string[] = []
  const groups = new Map<string, PluginDetailTab[]>()
  for (const tab of tabs) {
    const key = tab.section_en ?? ''
    if (!groups.has(key)) {
      groups.set(key, [])
      order.push(key)
    }
    groups.get(key)!.push(tab)
  }
  const hasSections = tabs.some((t) => t.section_en)

  return (
    <nav
      aria-label={isRTL ? 'تنقل التبويبات الفرعية' : 'Plugin detail sub-navigation'}
      className="flex flex-col gap-4 p-3"
    >
      {order.map((sectionKey) => {
        const sectionTabs = groups.get(sectionKey)!
        const header = sectionKey
          ? isRTL
            ? sectionTabs[0].section_ar || sectionKey
            : sectionKey
          : null
        return (
          <div key={sectionKey || '_'} className="flex flex-col gap-0.5">
            {hasSections && header && (
              <p
                className={cn(
                  'px-3 mb-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/60',
                  isRTL ? 'text-right' : 'text-left',
                )}
              >
                {header}
              </p>
            )}
            {sectionTabs.map(renderTab)}
          </div>
        )
      })}
    </nav>
  )
}
SubSidebar.displayName = 'SubSidebar'

// ── PluginDetailLayout (root) ─────────────────────────────────────────────────

export const PluginDetailLayout = ({
  tabs,
  activeTab,
  onTabChange,
  children,
  plugin,
  activity,
  isLoading = false,
  isError = false,
  language,
}: PluginDetailLayoutProps) => {
  const isRTL = language === 'ar'

  return (
    // Two-sidebar plugin detail rendered INSIDE the product's AdminLayout content
    // (operator 2026-06-05: keep the dashboard menu; plugin tabs are a SECOND
    // sub-sidebar next to it). Full-bleed: cancel AdminLayout's <main> padding
    // (p-3 sm:p-4 md:p-6) with matching negative margins so the sub-sidebar sits
    // flush against the dashboard sidebar and the content has no outer gap.
    // NOTE: no min-h-screen / no sticky here — those fight AdminLayout's own
    // scrolling <main> and broke the layout. The hero scrolls with the content.
    // Reference layout (mofa-dev /superadmin/plugins/<slug>): a single flex ROW
    // — the plugin sub-sidebar sits flush at the TOP next to the dashboard
    // sidebar (full height), and the content column (hero + tab content stacked)
    // is beside it. NOT hero-on-top-spanning-both. Full-bleed: cancel
    // AdminLayout's <main> padding so the sub-sidebar borders the dashboard nav.
    <div
      // -m-* cancels AdminLayout <main>'s p-3 sm:p-4 md:p-6 on ALL sides (incl.
      // the RTL left side — margins are physical, so -m-* hits both edges
      // symmetrically regardless of dir). min-h-full makes this fill <main>'s
      // height so items-stretch gives the sub-sidebar FULL height. h-full +
      // overflow-hidden keeps the row bounded; the content column scrolls.
      className="flex items-stretch min-h-full h-full -m-3 sm:-m-4 md:-m-6"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* ── Plugin sub-sidebar (desktop) — full-height, flush beside the
          dashboard sidebar, grouped sections like the reference. ── */}
      <aside className="hidden md:flex flex-col w-56 shrink-0 self-stretch border-e border-border bg-card overflow-y-auto">
        <SubSidebar
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={onTabChange}
          isRTL={isRTL}
        />
      </aside>

      {/* ── Content column: mobile tab bar + hero + tab content (scrolls
          independently so the sub-sidebar stays full-height + fixed). ── */}
      <div className="flex-1 min-w-0 flex flex-col overflow-y-auto">
        {/* Mobile tab bar (horizontal scrollable) */}
        <div className="md:hidden w-full border-b border-border bg-card px-3 py-2 overflow-x-auto">
          <div className="flex gap-1 min-w-max">
            {tabs.map((tab) => {
              const Icon = tab.icon
              const label = isRTL ? tab.label_ar : tab.label_en
              const isActive = activeTab === tab.key
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => onTabChange(tab.key)}
                  className={cn(
                    'flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs transition-colors duration-fast ease-standard whitespace-nowrap',
                    isActive
                      ? 'bg-accent text-accent-foreground font-medium'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                  )}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {Icon && <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden />}
                  {label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Hero */}
        {isLoading && <PluginHeroSkeleton />}
        {isError && (
          <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-4 m-6 text-sm text-destructive">
            {isRTL ? 'تعذّر تحميل الإضافة.' : 'Failed to load this plugin.'}
          </div>
        )}
        {!isLoading && !isError && (
          <PluginHero plugin={plugin} activity={activity} isRTL={isRTL} />
        )}

        {/* Tab content */}
        <main className="flex-1 min-w-0 p-3 sm:p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}

PluginDetailLayout.displayName = 'PluginDetailLayout'

export default PluginDetailLayout
