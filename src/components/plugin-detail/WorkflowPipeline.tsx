'use client'

/**
 * WorkflowPipeline — read-only flex pipeline lane viewer.
 *
 * ADAPTED from app/src/components/superadmin/plugins/WorkflowPipeline.tsx:
 *   - @/components/ui/* → ../ui/*
 *   - @/lib/utils       → ../../lib/utils
 *   - @/contexts/LanguageContext (useLanguage) → isRTL prop
 *   - @/lib/workflow-stages (STAGES, PipelineModel...) → props + local STAGES
 *
 * Seam: model + isRTL are external. No bridge/hook calls.
 */

import { ChevronRight } from 'lucide-react'
import { Card, CardContent } from '../ui/card'
import { Badge } from '../ui/badge'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip'
import { cn } from '../../lib/utils'
import type { PipelineModel, PipelineLane, PipelineCard } from './types'

// Default stages — matches the 5-stage pipeline from workflow-stages.ts.
// Callers can override by composing their own PipelineLane[] in model.stages.
export const PIPELINE_STAGES = [
  { key: 'fetch',   label_en: 'Fetch',   label_ar: 'جلب' },
  { key: 'parse',   label_en: 'Parse',   label_ar: 'تحليل' },
  { key: 'enrich',  label_en: 'Enrich',  label_ar: 'إثراء' },
  { key: 'enhance', label_en: 'Enhance', label_ar: 'تحسين' },
  { key: 'save',    label_en: 'Save',    label_ar: 'حفظ' },
]

// ── Props ─────────────────────────────────────────────────────────────────────

export interface WorkflowPipelineProps {
  model: PipelineModel
  /** Current UI direction. Default false (LTR). */
  isRTL?: boolean
}

// ── SVC badge colour ──────────────────────────────────────────────────────────

type BadgeVariant = 'default' | 'secondary' | 'outline' | 'destructive'

const svcBadgeVariant = (svc: string): BadgeVariant => {
  if (!svc || svc === 'direct (HTTP)' || svc === 'unknown' || svc === 'direct') {
    return 'secondary'
  }
  return 'default'
}

// ── Metrics pill ──────────────────────────────────────────────────────────────

interface MetricsPillProps {
  ok_rate: number
  p50_ms: number
  last_error?: string
  isRTL: boolean
}

const MetricsPill = ({ ok_rate, p50_ms, last_error, isRTL }: MetricsPillProps) => {
  const bad = ok_rate < 0.5
  const pct = Math.round(ok_rate * 100)
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className={cn(
              'flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-mono tabular-nums w-fit',
              bad
                ? 'bg-destructive/10 text-destructive'
                : 'bg-green-50 text-green-700 dark:bg-green-950/30 dark:text-green-400',
            )}
          >
            <span>{pct}%</span>
            <span className="text-muted-foreground">·</span>
            <span>{p50_ms}ms</span>
          </div>
        </TooltipTrigger>
        {last_error && (
          <TooltipContent side="bottom" dir={isRTL ? 'rtl' : 'ltr'} className="max-w-xs text-xs">
            {isRTL ? 'آخر خطأ: ' : 'Last error: '}
            {last_error}
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  )
}
MetricsPill.displayName = 'MetricsPill'

// ── Pipeline card ─────────────────────────────────────────────────────────────

interface PipelineCardViewProps {
  card: PipelineCard
  isRTL: boolean
}

const PipelineCardView = ({ card, isRTL }: PipelineCardViewProps) => {
  const title = isRTL ? card.title_ar : card.title_en

  return (
    <Card
      className={cn(
        'w-full border transition-all duration-fast ease-standard',
        card.isSynthetic
          ? 'border-dashed border-muted-foreground/40 bg-muted/20'
          : 'bg-card',
      )}
    >
      <CardContent className="px-3 py-2.5 space-y-1.5">
        <div className="flex items-start gap-2 flex-wrap">
          <span className="text-xs font-semibold leading-snug flex-1 min-w-0 break-words">
            {title}
          </span>
          {card.isSynthetic && (
            <Badge variant="outline" className="text-[10px] shrink-0 text-muted-foreground">
              {isRTL ? 'مشتق' : 'derived'}
            </Badge>
          )}
        </div>

        {card.svc && (
          <Badge
            variant={svcBadgeVariant(card.svc)}
            className="text-[10px] font-mono truncate max-w-full"
            title={card.svc}
          >
            {card.svc}
          </Badge>
        )}

        {card.summary.length > 0 && (
          <dl className="space-y-0.5">
            {card.summary.map(({ label, value }) => (
              <div key={label} className="flex items-start gap-1 text-[10px]">
                <dt className="text-muted-foreground shrink-0">{label}:</dt>
                <dd className="font-mono text-foreground truncate" dir="ltr" title={value}>
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        )}

        {card.metrics && (
          <MetricsPill
            ok_rate={card.metrics.ok_rate}
            p50_ms={card.metrics.p50_ms}
            last_error={card.metrics.last_error}
            isRTL={isRTL}
          />
        )}
      </CardContent>
    </Card>
  )
}
PipelineCardView.displayName = 'PipelineCardView'

// ── Lane column ───────────────────────────────────────────────────────────────

interface LaneColumnProps {
  lane: PipelineLane
  isRTL: boolean
  isLast: boolean
}

const LaneColumn = ({ lane, isRTL, isLast }: LaneColumnProps) => {
  const label = isRTL ? lane.label_ar : lane.label_en

  return (
    <div className="flex items-stretch gap-0 flex-1 min-w-0">
      <div className="flex flex-col gap-0 flex-1 min-w-0">
        <div className="rounded-t-lg border border-b-0 bg-muted/40 px-3 py-1.5">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            {label}
          </span>
        </div>

        <div className="flex-1 rounded-b-lg border bg-muted/10 px-2 py-2 space-y-2 min-h-[80px]">
          {lane.cards.length === 0 ? (
            <div className="flex items-center justify-center h-full min-h-[60px]">
              <span className="text-[10px] text-muted-foreground/50">—</span>
            </div>
          ) : (
            lane.cards.map((card) => (
              <PipelineCardView key={card.id} card={card} isRTL={isRTL} />
            ))
          )}
        </div>
      </div>

      {!isLast && (
        <div className="flex items-center justify-center px-1 shrink-0 self-stretch">
          <ChevronRight
            className={cn(
              'h-4 w-4 text-muted-foreground/50 shrink-0',
              isRTL && 'rotate-180',
            )}
            aria-hidden="true"
          />
        </div>
      )}
    </div>
  )
}
LaneColumn.displayName = 'LaneColumn'

// ── Parallel branches legend ──────────────────────────────────────────────────

interface BranchLegendProps {
  fetchBranches: PipelineCard[]
  isRTL: boolean
}

const BranchLegend = ({ fetchBranches, isRTL }: BranchLegendProps) => {
  if (fetchBranches.length <= 1) return null

  return (
    <div className="flex flex-wrap items-center gap-2 text-[11px] text-muted-foreground">
      <span className="font-medium">
        {isRTL ? 'فروع الجلب المتوازية:' : 'Parallel fetch branches:'}
      </span>
      {fetchBranches.map((card) => (
        <span
          key={card.id}
          className="inline-flex items-center gap-1 rounded-full bg-muted px-2 py-0.5"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" />
          <span>{isRTL ? card.title_ar : card.title_en}</span>
        </span>
      ))}
      <span className="text-muted-foreground/60">
        {isRTL
          ? '← تتقارع في Enhance + Save'
          : '→ converge on Enhance + Save'}
      </span>
    </div>
  )
}
BranchLegend.displayName = 'BranchLegend'

// ── WorkflowPipeline (root) ───────────────────────────────────────────────────

export const WorkflowPipeline = ({ model, isRTL = false }: WorkflowPipelineProps) => {
  const hasContent = model.stages.some((l) => l.cards.length > 0)

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className="space-y-4">
      {model.fetchBranches.length > 1 && (
        <BranchLegend fetchBranches={model.fetchBranches} isRTL={isRTL} />
      )}

      {hasContent ? (
        <div
          className="rounded-xl border bg-background p-4 overflow-x-auto"
          style={{
            backgroundImage:
              'radial-gradient(circle, var(--border) 1px, transparent 1px)',
            backgroundSize: '16px 16px',
          }}
        >
          <div className="flex items-stretch gap-0 pb-2 min-w-fit">
            {PIPELINE_STAGES.map((stage, idx) => {
              const lane = model.stages.find((l) => l.key === stage.key)
              if (!lane) return null
              return (
                <LaneColumn
                  key={stage.key}
                  lane={lane}
                  isRTL={isRTL}
                  isLast={idx === PIPELINE_STAGES.length - 1}
                />
              )
            })}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center rounded-lg border border-dashed bg-muted/20 h-40">
          <p className="text-sm text-muted-foreground">
            {isRTL
              ? 'لا توجد خطوات في سير العمل'
              : 'No workflow steps configured'}
          </p>
        </div>
      )}
    </div>
  )
}
WorkflowPipeline.displayName = 'WorkflowPipeline'

export default WorkflowPipeline
