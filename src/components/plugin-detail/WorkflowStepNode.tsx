'use client'

/**
 * WorkflowStepNode — recursive, readable pipeline step renderer.
 *
 * ADAPTED from app/src/components/superadmin/plugins/WorkflowStepNode.tsx:
 *   - @/components/ui/* → ../ui/*
 *   - @/lib/utils       → ../../lib/utils
 *   - useLanguage hook  → removed; isRTL prop is external
 *   - StepMetrics7d     → inline type (no hook import)
 *
 * Seam: all data passes through props — no bridge/hook calls.
 */

import { useState } from 'react'
import {
  Clock,
  GitBranch,
  Database,
  Repeat,
  Sparkles,
  Code,
  Languages,
  Globe,
  PanelRightOpen,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  BarChart2,
  ArrowDown,
  Trash2,
} from 'lucide-react'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import { cn } from '../../lib/utils'
import type { StepMetrics7d } from './types'

// A path addresses a step in the nested tree.
type StepPath = (number | string)[]
const pathKey = (p: StepPath): string => p.join('.')

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyStep = Record<string, any>

const parseFromTable = (query: string): string | null => {
  if (!query) return null
  const m = query.match(/FROM\s+([\w."]+)/i)
  if (!m) return null
  return m[1].replace(/['"]/g, '')
}

const trunc = (s: string, max = 60): string =>
  s.length > max ? s.slice(0, max) + '…' : s

const parseLimit = (query: string): number | null => {
  const m = query.match(/LIMIT\s+(\d+)/i)
  return m ? parseInt(m[1], 10) : null
}

type StepCategory = 'trigger' | 'condition' | 'query' | 'loop' | 'ai' | 'output' | 'transform' | 'generic'

const getCategory = (kind: string): StepCategory => {
  switch (kind) {
    case 'cron_trigger': return 'trigger'
    case 'if': return 'condition'
    case 'sql_select': return 'query'
    case 'for_each': return 'loop'
    case 'gemini_call': case 'adk_call': return 'ai'
    case 'sql_insert': case 'sql_update': return 'output'
    case 'json_extract': case 'translate': return 'transform'
    default: return 'generic'
  }
}

const CATEGORY_STYLES: Record<StepCategory, { badge: string; border: string; icon: string }> = {
  trigger:   { badge: 'bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300',     border: 'border-s-violet-400',  icon: 'text-violet-500' },
  condition: { badge: 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300',         border: 'border-s-amber-400',   icon: 'text-amber-500' },
  query:     { badge: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',             border: 'border-s-blue-400',    icon: 'text-blue-500' },
  loop:      { badge: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/40 dark:text-cyan-300',             border: 'border-s-cyan-400',    icon: 'text-cyan-500' },
  ai:        { badge: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300', border: 'border-s-emerald-400', icon: 'text-emerald-500' },
  output:    { badge: 'bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300',             border: 'border-s-rose-400',    icon: 'text-rose-500' },
  transform: { badge: 'bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300',            border: 'border-s-teal-400',    icon: 'text-teal-500' },
  generic:   { badge: 'bg-muted text-muted-foreground',                                               border: 'border-s-border',      icon: 'text-muted-foreground' },
}

const STEP_ICONS: Record<string, React.ElementType> = {
  cron_trigger: Clock,
  if:           GitBranch,
  sql_select:   Database,
  sql_insert:   Database,
  sql_update:   Database,
  for_each:     Repeat,
  gemini_call:  Sparkles,
  adk_call:     Sparkles,
  json_extract: Code,
  translate:    Languages,
  http_call:    Globe,
}

// ── Inline summary per kind ───────────────────────────────────────────────────

// ── Human-readable helpers (plain-language mode for non-technical readers) ──────

// Friendly labels per step category (EN, AR).
const CATEGORY_LABEL: Record<StepCategory, [string, string]> = {
  trigger:   ['Schedule', 'الجدولة'],
  condition: ['Condition', 'شرط'],
  query:     ['Read data', 'قراءة البيانات'],
  loop:      ['Repeat', 'تكرار'],
  ai:        ['AI', 'ذكاء اصطناعي'],
  output:    ['Save', 'حفظ'],
  transform: ['Transform', 'تحويل'],
  generic:   ['Step', 'خطوة'],
}

// "step-3" → "Step 3" / "الخطوة ٣"
const friendlyStepNo = (id: string, isRTL: boolean): string => {
  const n = /(\d+)\s*$/.exec(String(id))?.[1]
  if (!n) return ''
  return isRTL ? `الخطوة ${n}` : `Step ${n}`
}

// "15m" → "15 minutes" / "كل ١٥ دقيقة"
const humanSchedule = (raw: unknown, isRTL: boolean): string => {
  const m = /^(\d+)\s*([smhd])$/.exec(String(raw ?? '').trim())
  if (!m) return String(raw ?? '')
  const n = Number(m[1])
  const U: Record<string, [string, string, string, string]> = {
    s: ['second', 'seconds', 'ثانية', 'ثوانٍ'],
    m: ['minute', 'minutes', 'دقيقة', 'دقائق'],
    h: ['hour', 'hours', 'ساعة', 'ساعات'],
    d: ['day', 'days', 'يوم', 'أيام'],
  }
  const u = U[m[2]]
  if (isRTL) return `${n} ${n === 1 ? u[2] : u[3]}`
  return n === 1 ? u[0] : `${n} ${u[1]}`
}

// strip $, schema prefix, and snake/kebab → spaced words: "public.raw_envelopes" → "raw envelopes"
const humanName = (s: unknown): string =>
  String(s ?? '').replace(/^\$/, '').replace(/^[a-z0-9]+\./i, '').replace(/[_-]+/g, ' ').trim()

// One plain-language sentence describing what a step does.
function humanStepSummary(step: AnyStep, isRTL: boolean): string {
  const kind: string = step.kind ?? step.type ?? '?'
  const t = (en: string, ar: string) => (isRTL ? ar : en)
  switch (kind) {
    case 'cron_trigger': {
      const s = humanSchedule(step.schedule ?? step.interval, isRTL)
      return t(`Runs automatically every ${s}`, `يعمل تلقائيًا كل ${s}`)
    }
    case 'if':
      return t('Continues only when the condition is met', 'يكمل فقط عند تحقّق الشرط')
    case 'for_each':
      return t('Repeats the next steps for each item', 'يكرّر الخطوات التالية لكل عنصر')
    case 'sql_select': {
      const from = humanName(parseFromTable(step.query ?? '') ?? '')
      const lim = parseLimit(step.query ?? '')
      const count = lim != null ? t(`up to ${lim} records`, `حتى ${lim} سجل`) : t('records', 'السجلات')
      return from
        ? t(`Looks up ${count} from ${from}`, `يجلب ${count} من ${from}`)
        : t(`Looks up ${count}`, `يجلب ${count}`)
    }
    case 'sql_insert': {
      const tb = humanName(step.table)
      return tb ? t(`Saves the results as ${tb}`, `يحفظ النتائج كـ ${tb}`) : t('Saves the results', 'يحفظ النتائج')
    }
    case 'sql_update': {
      const tb = humanName(step.table)
      return t(`Updates ${tb || 'the records'}`, `يحدّث ${tb || 'السجلات'}`)
    }
    case 'gemini_call':
    case 'adk_call': {
      const task = humanName(step.prompt_slug ?? step.prompt_id ?? '')
      return task
        ? t(`Uses AI to ${task}`, `يستخدم الذكاء الاصطناعي لـ ${task}`)
        : t('Uses AI to analyze the data', 'يستخدم الذكاء الاصطناعي لتحليل البيانات')
    }
    case 'http_request':
    case 'http_call':
      return t('Calls an external service', 'يستدعي خدمة خارجية')
    case 'send_email':
    case 'email':
      return t('Sends an email notification', 'يرسل إشعارًا عبر البريد الإلكتروني')
    case 'webhook':
      return t('Sends a webhook notification', 'يرسل إشعار ويب هوك')
    default:
      return t(`Runs the “${humanName(kind)}” step`, `ينفّذ خطوة «${humanName(kind)}»`)
  }
}

const StepSummary = ({ step, isRTL, humanize }: { step: AnyStep; isRTL: boolean; humanize?: boolean }) => {
  const lbl = (en: string, ar: string) => (isRTL ? ar : en)
  const [showQuery, setShowQuery] = useState(false)
  const kind: string = step.kind ?? '?'

  // Plain-language mode: one friendly sentence, no raw SQL/code.
  if (humanize) {
    return <span className="text-xs text-foreground/80">{humanStepSummary(step, isRTL)}</span>
  }

  if (kind === 'cron_trigger') {
    const schedule = step.schedule ?? step.interval ?? '?'
    const minSec = step.min_interval_sec
    return (
      <span className="text-xs text-muted-foreground font-mono">
        {lbl('every', 'كل')} <span className="text-foreground font-medium">{schedule}</span>
        {minSec != null && <span className="ms-1 opacity-60">(min {minSec}s)</span>}
      </span>
    )
  }

  if (kind === 'if') {
    const cond = step.condition ?? '?'
    return (
      <span className="text-xs text-muted-foreground">
        {lbl('if', 'إذا')} <code className="text-foreground bg-muted rounded px-1 py-0.5 text-[11px]">{trunc(String(cond), 80)}</code>
      </span>
    )
  }

  if (kind === 'sql_select') {
    const query: string = step.query ?? ''
    const fromTable = parseFromTable(query) ?? '?'
    const output = step.output ?? step.target_field ?? '?'
    const limit = parseLimit(query)
    return (
      <div className="text-xs text-muted-foreground space-y-1">
        <div>
          {lbl('SELECT from', 'اختيار من')} <code className="text-foreground bg-muted rounded px-1 py-0.5 text-[11px]">{fromTable}</code>
          {' → '}
          <code className="text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 rounded px-1 py-0.5 text-[11px]">${output}</code>
          {limit != null && <span className="ms-1 opacity-60">(LIMIT {limit})</span>}
        </div>
        {query && (
          <button
            type="button"
            className="flex items-center gap-1 text-[10px] text-primary/70 hover:text-primary underline-offset-2 hover:underline"
            onClick={() => setShowQuery((v) => !v)}
          >
            {showQuery
              ? <><ChevronDown className="h-3 w-3" />{lbl('hide query', 'إخفاء الاستعلام')}</>
              : <><ChevronRight className="h-3 w-3 rtl:rotate-180" />{lbl('show query', 'عرض الاستعلام')}</>
            }
          </button>
        )}
        {showQuery && (
          <pre className="mt-1 rounded bg-muted p-2 text-[10px] leading-relaxed whitespace-pre-wrap break-all max-h-40 overflow-y-auto font-mono" dir="ltr">
            {query}
          </pre>
        )}
      </div>
    )
  }

  if (kind === 'for_each') {
    const over = step.over ?? step.items ?? '?'
    return (
      <span className="text-xs text-muted-foreground">
        {lbl('for each', 'لكل')} <code className="text-foreground bg-muted rounded px-1 py-0.5 text-[11px]">{String(over)}</code>
        {' →'}
      </span>
    )
  }

  if (kind === 'sql_insert') {
    const table = step.table ?? '?'
    const cols: string[] = Array.isArray(step.columns) ? step.columns : []
    const onConflict = step.on_conflict
    return (
      <span className="text-xs text-muted-foreground">
        {lbl('INSERT into', 'إدراج في')} <code className="text-foreground bg-muted rounded px-1 py-0.5 text-[11px]">{table}</code>
        {cols.length > 0 && <span className="ms-1 opacity-70">({cols.length} {lbl('columns', 'أعمدة')})</span>}
        {onConflict && <span className="ms-1 opacity-60 text-[10px]">ON CONFLICT {trunc(String(onConflict), 30)}</span>}
      </span>
    )
  }

  if (kind === 'sql_update') {
    const table = step.table ?? '?'
    const setKeys = step.set && typeof step.set === 'object' ? Object.keys(step.set) : []
    return (
      <span className="text-xs text-muted-foreground">
        {lbl('UPDATE', 'تحديث')} <code className="text-foreground bg-muted rounded px-1 py-0.5 text-[11px]">{table}</code>
        {setKeys.length > 0 && (
          <span className="ms-1 opacity-70">
            SET {setKeys.slice(0, 4).join(', ')}{setKeys.length > 4 ? '…' : ''}
          </span>
        )}
      </span>
    )
  }

  if (kind === 'gemini_call') {
    const prompt = step.prompt_slug ?? step.prompt_id ?? step.model ?? '?'
    const target = step.target_field ?? step.output ?? ''
    return (
      <span className="text-xs text-muted-foreground">
        {lbl('Gemini: prompt=', 'Gemini: نموذج=')}
        <code className="text-foreground bg-muted rounded px-1 py-0.5 text-[11px]">{String(prompt)}</code>
        {target && (
          <> {' → '}<code className="text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 rounded px-1 py-0.5 text-[11px]">${target}</code></>
        )}
      </span>
    )
  }

  if (kind === 'adk_call') {
    const hasInline = !!step.prompt_inline
    const promptLabel = hasInline
      ? lbl('inline prompt', 'نص مضمّن')
      : (step.prompt_slug ?? step.prompt_id ?? '?')
    const modelLabel: string = step.model ?? 'gemini-2.5-flash'
    const target = step.target_field ?? 'adk_response'
    return (
      <span className="text-xs text-muted-foreground">
        {lbl('ADK: ', 'ADK: ')}
        <code className="text-foreground bg-muted rounded px-1 py-0.5 text-[11px]">
          {hasInline ? <em>{promptLabel}</em> : String(promptLabel)}
        </code>
        <span className="ms-1 opacity-60 text-[10px]">{modelLabel}</span>
        {' → '}
        <code className="text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 rounded px-1 py-0.5 text-[11px]">${target}</code>
      </span>
    )
  }

  if (kind === 'json_extract') {
    const exprs: unknown[] = Array.isArray(step.expressions) ? step.expressions : []
    const source = step.source ?? step.from ?? ''
    return (
      <span className="text-xs text-muted-foreground">
        {lbl('extract', 'استخراج')} <span className="text-foreground">{exprs.length > 0 ? exprs.slice(0, 3).join(', ') : '?'}</span>
        {source && <> {lbl('from', 'من')} <code className="bg-muted rounded px-1 py-0.5 text-[11px]">${source}</code></>}
      </span>
    )
  }

  if (kind === 'translate') {
    const textExpr = step.text ?? step.source_field ?? '?'
    const target = step.target_field ?? '?'
    const srcLang = step.source_lang ?? 'en'
    const tgtLang = step.target_lang ?? 'ar'
    return (
      <span className="text-xs text-muted-foreground">
        {lbl('translate', 'ترجمة')} <code className="bg-muted rounded px-1 py-0.5 text-[11px]">{String(textExpr)}</code>
        {' → '}
        <code className="text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 rounded px-1 py-0.5 text-[11px]">${target}</code>
        <span className="ms-1 opacity-60">({srcLang}→{tgtLang})</span>
      </span>
    )
  }

  if (kind === 'http_call') {
    const method = step.method ?? 'GET'
    const url: string = step.url ?? ''
    let host = url
    try { host = new URL(url).hostname } catch { /* raw */ }
    return (
      <span className="text-xs text-muted-foreground">
        <Badge variant="outline" className="me-1 font-mono text-[10px] h-4">{method}</Badge>
        <span className="text-foreground">{trunc(host, 50)}</span>
      </span>
    )
  }

  const label = step.label_en ?? step.label ?? ''
  if (label) {
    return <span className="text-xs text-muted-foreground">{trunc(String(label), 80)}</span>
  }
  return null
}
StepSummary.displayName = 'StepSummary'

// ── Metrics chip ──────────────────────────────────────────────────────────────

const MetricsChip = ({ runs, errors }: { runs: number; errors: number }) => {
  const okPct = runs > 0 ? Math.round(((runs - errors) / runs) * 100) : 100
  return (
    <div className="flex items-center gap-1 rounded-full border bg-muted/50 px-2 py-0.5 text-[10px] text-muted-foreground">
      <BarChart2 className="h-3 w-3" />
      <span>{runs}r / {okPct}%ok</span>
    </div>
  )
}
MetricsChip.displayName = 'MetricsChip'

const StepConnector = () => (
  <div className="flex justify-center py-0.5">
    <ArrowDown className="h-3.5 w-3.5 text-border" aria-hidden />
  </div>
)
StepConnector.displayName = 'StepConnector'

// ── Inline add control ────────────────────────────────────────────────────────

const NestedAddControl = ({ isRTL, addableKinds, onAdd }: {
  isRTL: boolean
  addableKinds: string[]
  onAdd: (kind: string) => void
}) => {
  const lbl = (en: string, ar: string) => (isRTL ? ar : en)
  const [kind, setKind] = useState('')
  return (
    <div className="flex items-center gap-1.5 pt-1">
      <Select value={kind} onValueChange={setKind}>
        <SelectTrigger className="h-6 w-36 text-[11px]">
          <SelectValue placeholder={lbl('+ add…', '+ إضافة…')} />
        </SelectTrigger>
        <SelectContent>
          {addableKinds.map((k) => (
            <SelectItem key={k} value={k} className="text-[11px] font-mono">{k}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button
        size="sm" variant="ghost" className="h-6 px-1.5 text-[11px]"
        disabled={!kind}
        onClick={() => { if (kind) { onAdd(kind); setKind('') } }}
      >
        {lbl('Add', 'إضافة')}
      </Button>
    </div>
  )
}
NestedAddControl.displayName = 'NestedAddControl'

// ── Main recursive node ───────────────────────────────────────────────────────

export interface WorkflowStepNodeProps {
  step: AnyStep
  path: StepPath
  depth: number
  isRTL: boolean
  metrics?: StepMetrics7d
  editingPath?: string | null
  onEditRequest?: (path: StepPath) => void
  onDelete?: (path: StepPath) => void
  onMove?: (path: StepPath, dir: -1 | 1) => void
  onAdd?: (containerPath: StepPath, kind: string) => void
  addableKinds?: string[]
  renderEditor?: (step: AnyStep, path: StepPath) => React.ReactNode
  /** Plain-language mode for non-technical readers (friendly badge + sentence,
   * no raw SQL/code). Default: true. Pass false for the developer view. */
  humanize?: boolean
}

export const WorkflowStepNode = ({
  step,
  path,
  depth,
  isRTL,
  metrics,
  editingPath,
  onEditRequest,
  onDelete,
  onMove,
  onAdd,
  addableKinds = [],
  renderEditor,
  humanize = true,
}: WorkflowStepNodeProps) => {
  const lbl = (en: string, ar: string) => (isRTL ? ar : en)
  const kind: string = step.kind ?? step.type ?? '?'
  const stepId: string = step.id ?? ''
  const category = getCategory(kind)
  const styles = CATEGORY_STYLES[category]
  const IconCmp = STEP_ICONS[kind] ?? PanelRightOpen

  const thenSteps: AnyStep[] = Array.isArray(step.then) ? step.then : []
  const elseSteps: AnyStep[] = Array.isArray(step.else) ? step.else : []
  const loopSteps: AnyStep[] = Array.isArray(step.steps) ? step.steps : []

  const m = metrics && stepId ? metrics[stepId] : undefined
  const isEditing = editingPath != null && editingPath === pathKey(path)

  const renderBranch = (children: AnyStep[], arrName: 'then' | 'else' | 'steps', railColor: string, label: string) => (
    <div className={cn('mt-2 ms-6 space-y-1.5 border-s-2 border-dashed ps-3', railColor)}>
      <div className="text-[10px] text-muted-foreground font-medium uppercase tracking-wide mb-1">{label}</div>
      {children.map((child, ci) => (
        <div key={child.id ?? ci}>
          {ci > 0 && <StepConnector />}
          <WorkflowStepNode
            step={child}
            path={[...path, arrName, ci]}
            depth={depth + 1}
            isRTL={isRTL}
            metrics={metrics}
            editingPath={editingPath}
            onEditRequest={onEditRequest}
            onDelete={onDelete}
            onMove={onMove}
            onAdd={onAdd}
            addableKinds={addableKinds}
            renderEditor={renderEditor}
            humanize={humanize}
          />
        </div>
      ))}
      {onAdd && (
        <NestedAddControl isRTL={isRTL} addableKinds={addableKinds} onAdd={(k) => onAdd([...path, arrName], k)} />
      )}
    </div>
  )

  return (
    <div className="relative">
      {depth > 0 && (
        <div className="absolute start-0 top-0 bottom-0 w-px bg-border/60" style={{ insetInlineStart: '-12px' }} aria-hidden />
      )}

      <div
        className={cn(
          'rounded-md border border-s-2 bg-card shadow-sm',
          styles.border,
          isEditing && 'ring-1 ring-primary/40',
        )}
      >
        <div className="flex items-start gap-2 px-3 py-2">
          <div className={cn('mt-0.5 shrink-0', styles.icon)}>
            <IconCmp className="h-3.5 w-3.5" aria-hidden />
          </div>

          <div className="flex-1 min-w-0 space-y-1">
            <div className="flex items-center gap-1.5 flex-wrap">
              <Badge variant="secondary" className={cn('h-4 rounded-sm text-[10px] px-1', !humanize && 'font-mono', styles.badge)}>
                {humanize ? lbl(CATEGORY_LABEL[category][0], CATEGORY_LABEL[category][1]) : kind}
              </Badge>
              {stepId && (
                <span className={cn('text-[10px] text-muted-foreground/50', !humanize && 'font-mono')}>
                  {humanize ? friendlyStepNo(stepId, isRTL) : stepId}
                </span>
              )}
              {m && <MetricsChip runs={m.runs} errors={m.errors} />}
            </div>
            <StepSummary step={step} isRTL={isRTL} humanize={humanize} />
          </div>

          <div className="flex items-center gap-0.5 shrink-0">
            {onMove && (
              <>
                <Button type="button" size="sm" variant="ghost" className="h-6 w-6 p-0" title={lbl('Move up', 'لأعلى')} onClick={() => onMove(path, -1)}>
                  <ChevronUp className="h-3 w-3" />
                </Button>
                <Button type="button" size="sm" variant="ghost" className="h-6 w-6 p-0" title={lbl('Move down', 'لأسفل')} onClick={() => onMove(path, 1)}>
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </>
            )}
            {onEditRequest && (
              <Button type="button" size="sm" variant="ghost" className="h-6 px-2 text-[11px]" onClick={() => onEditRequest(path)}>
                {isEditing ? lbl('Close', 'إغلاق') : lbl('Edit', 'تعديل')}
              </Button>
            )}
            {onDelete && (
              <Button type="button" size="sm" variant="ghost" className="h-6 w-6 p-0 text-destructive/70 hover:text-destructive" title={lbl('Delete', 'حذف')} onClick={() => onDelete(path)}>
                <Trash2 className="h-3 w-3" />
              </Button>
            )}
          </div>
        </div>

        {isEditing && renderEditor && (
          <div className="border-t px-3 pb-3 pt-2">
            {renderEditor(step, path)}
          </div>
        )}
      </div>

      {(loopSteps.length > 0 || (onAdd && kind === 'for_each')) &&
        renderBranch(loopSteps, 'steps', 'border-cyan-300/60', lbl('loop body', 'جسم الحلقة'))}

      {(thenSteps.length > 0 || (onAdd && kind === 'if')) &&
        renderBranch(thenSteps, 'then', 'border-amber-300/60', lbl('then', 'عندها'))}

      {elseSteps.length > 0 &&
        renderBranch(elseSteps, 'else', 'border-slate-300/60', lbl('else', 'وإلا'))}
    </div>
  )
}

WorkflowStepNode.displayName = 'WorkflowStepNode'
