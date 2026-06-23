'use client'

/**
 * TestRunPanel — streams SSE test-run execution log + saved envelopes.
 *
 * ADAPTED from app/src/components/superadmin/plugins/TestRunPanel.tsx:
 *   - @/components/ui/* → ../ui/*
 *   - @/lib/utils       → ../../lib/utils
 *   - useLanguage hook  → language prop
 *   - sourceTestRunSSE hook → onRunRequest seam (host wires the SSE call)
 *
 * Seam: instead of importing the bridge SSE helper directly, the host passes
 * `onRunRequest(slug, maxEnvelopes, callbacks)` which must match the same
 * AbortController return signature. This keeps sentra-ui bridge-free.
 *
 * Type definitions for TestRunStep, TestRunCompletePayload, TestRunSavedItem
 * are re-exported from this file so the host can wire them without a bridge dep.
 */

import { useState, useRef, useCallback } from 'react'
import {
  Play,
  Square,
  CheckCircle2,
  XCircle,
  MinusCircle,
  Loader2,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  FileText,
} from 'lucide-react'
import { cn } from '../../lib/utils'
import { Button } from '../ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { Separator } from '../ui/separator'

// ── Public types (re-exported for host wiring) ────────────────────────────────

export interface TestRunStep {
  name: string
  status: 'ok' | 'error' | 'skipped' | string
  detail?: string
  duration_ms?: number
  count?: number
  error?: string
}

export interface TestRunSavedItem {
  title?: string
  url?: string
  language?: string
  content_hash?: string
  envelope_id?: string
  source_id?: string
  region?: string
  content_en?: string
  content_ar?: string
  published_at?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  raw_payload?: any
}

export interface TestRunCompletePayload {
  envelopes_saved: number
  saved: TestRunSavedItem[]
}

/** Callbacks for the SSE stream. */
export interface TestRunCallbacks {
  onStep: (step: TestRunStep) => void
  onComplete: (payload: TestRunCompletePayload) => void
  onError: (err: { error: string }) => void
}

// ── Types ─────────────────────────────────────────────────────────────────────

type RunState = 'idle' | 'running' | 'done' | 'error'

// ── StepRow ───────────────────────────────────────────────────────────────────

interface StepRowProps {
  step: TestRunStep
  isRTL: boolean
}

const StepRow = ({ step, isRTL }: StepRowProps) => {
  const Icon =
    step.status === 'ok'      ? CheckCircle2 :
    step.status === 'error'   ? XCircle      :
    step.status === 'skipped' ? MinusCircle  :
    Loader2

  const iconClass = cn(
    'h-4 w-4 shrink-0',
    step.status === 'ok'      && 'text-emerald-500',
    step.status === 'error'   && 'text-destructive',
    step.status === 'skipped' && 'text-muted-foreground',
    step.status !== 'ok' && step.status !== 'error' && step.status !== 'skipped' && 'animate-spin text-muted-foreground',
  )

  return (
    <div className="flex items-start gap-3 py-2 text-sm">
      <Icon className={cn(iconClass, 'mt-0.5')} aria-hidden />
      <div className="min-w-0 flex-1 space-y-0.5">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-mono font-medium">{step.name}</span>
          {typeof step.count === 'number' && step.count > 0 && (
            <Badge variant="secondary" className="text-[10px] tabular-nums">{step.count}</Badge>
          )}
          {typeof step.duration_ms === 'number' && (
            <span className="text-[11px] text-muted-foreground tabular-nums">
              {step.duration_ms < 1000 ? `${step.duration_ms}ms` : `${(step.duration_ms / 1000).toFixed(1)}s`}
            </span>
          )}
        </div>
        {step.detail && (
          <p className="text-[11px] text-muted-foreground truncate" title={step.detail}>{step.detail}</p>
        )}
        {step.error && (
          <p className="text-[11px] text-destructive break-words">{step.error}</p>
        )}
      </div>
      <span className={cn(
        'shrink-0 text-[10px] font-medium uppercase tracking-wide',
        step.status === 'ok'      && 'text-emerald-500',
        step.status === 'error'   && 'text-destructive',
        step.status === 'skipped' && 'text-muted-foreground',
      )}>
        {isRTL
          ? step.status === 'ok'      ? 'ناجح'
          : step.status === 'error'   ? 'خطأ'
          : step.status === 'skipped' ? 'متخطّى'
          : '...'
          : step.status}
      </span>
    </div>
  )
}
StepRow.displayName = 'StepRow'

// ── SavedItem ─────────────────────────────────────────────────────────────────

interface SavedItemProps {
  item: TestRunSavedItem
  isRTL: boolean
}

const SavedItem = ({ item, isRTL }: SavedItemProps) => {
  const [rawOpen, setRawOpen] = useState(false)
  const bodyText = isRTL
    ? (item.content_ar || item.content_en || '')
    : (item.content_en || item.content_ar || '')

  const handleToggleRaw = () => setRawOpen((v) => !v)

  return (
    <div className="space-y-2 py-3">
      <div className="flex items-start gap-1.5">
        <div className="min-w-0 flex-1">
          {item.url ? (
            <a href={item.url} target="_blank" rel="noopener noreferrer"
              className="text-sm font-medium text-foreground hover:text-primary hover:underline" dir="auto">
              {item.title || item.url || '(untitled)'}
            </a>
          ) : (
            <span className="text-sm font-medium text-foreground" dir="auto">
              {item.title || '(untitled)'}
            </span>
          )}
        </div>
        {item.url && (
          <a href={item.url} target="_blank" rel="noopener noreferrer"
            className="shrink-0 text-muted-foreground hover:text-primary mt-0.5">
            <ExternalLink className="h-3 w-3" />
          </a>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {item.language && <Badge variant="outline" className="text-[10px] uppercase">{item.language}</Badge>}
        {item.region && <Badge variant="outline" className="text-[10px]">{item.region}</Badge>}
        {item.published_at && (
          <span className="text-[10px] text-muted-foreground tabular-nums">
            {new Date(item.published_at).toLocaleString(isRTL ? 'ar-SA' : 'en-US', { dateStyle: 'medium', timeStyle: 'short' })}
          </span>
        )}
        {item.content_hash && (
          <span className="text-[9px] font-mono text-muted-foreground/50 hidden sm:block">
            {item.content_hash.slice(0, 8)}
          </span>
        )}
      </div>

      {bodyText && (
        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-4 whitespace-pre-line" dir={isRTL ? 'rtl' : 'ltr'}>
          {bodyText}
        </p>
      )}

      {item.raw_payload != null && (
        <div>
          <button type="button" onClick={handleToggleRaw}
            className="flex items-center gap-1 text-[10px] text-muted-foreground hover:text-foreground transition-colors duration-fast ease-standard">
            <FileText className="h-3 w-3" />
            {rawOpen ? (isRTL ? 'إخفاء البيانات الخام' : 'Hide raw payload') : (isRTL ? 'عرض البيانات الخام' : 'Show raw payload')}
            {rawOpen ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
          </button>
          {rawOpen && (
            <pre className="mt-1.5 max-h-48 overflow-y-auto rounded-md bg-muted/60 px-3 py-2 text-[10px] font-mono text-muted-foreground whitespace-pre-wrap break-all">
              {JSON.stringify(item.raw_payload, null, 2)}
            </pre>
          )}
        </div>
      )}
    </div>
  )
}
SavedItem.displayName = 'SavedItem'

// ── TestRunPanel ──────────────────────────────────────────────────────────────

export interface TestRunPanelProps {
  /** Plugin slug — passed to onRunRequest. */
  slug: string
  /** Max envelopes to save. Default 5. */
  maxEnvelopes?: number
  /** If true, panel renders as an inline block rather than a Card. */
  inline?: boolean
  /** Current UI language. */
  language: 'en' | 'ar'
  /**
   * Host-provided SSE runner. Must return an AbortController.
   * Signature mirrors sourceTestRunSSE from the bridge hooks.
   */
  onRunRequest: (
    slug: string,
    maxEnvelopes: number,
    callbacks: TestRunCallbacks,
  ) => AbortController
}

export const TestRunPanel = ({
  slug,
  maxEnvelopes = 5,
  inline = false,
  language,
  onRunRequest,
}: TestRunPanelProps) => {
  const isRTL = language === 'ar'

  const [runState, setRunState] = useState<RunState>('idle')
  const [steps, setSteps] = useState<TestRunStep[]>([])
  const [complete, setComplete] = useState<TestRunCompletePayload | null>(null)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [savedExpanded, setSavedExpanded] = useState(true)

  const abortRef = useRef<AbortController | null>(null)

  const handleStart = useCallback(() => {
    setSteps([])
    setComplete(null)
    setErrorMsg(null)
    setSavedExpanded(true)
    setRunState('running')

    abortRef.current = onRunRequest(slug, maxEnvelopes, {
      onStep: (step) => setSteps((prev) => [...prev, step]),
      onComplete: (payload) => { setComplete(payload); setRunState('done') },
      onError: (err) => { setErrorMsg(err.error); setRunState('error') },
    })
  }, [slug, maxEnvelopes, onRunRequest])

  const handleStop = useCallback(() => {
    abortRef.current?.abort()
    setRunState('idle')
  }, [])

  const isRunning = runState === 'running'

  const content = (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        {isRunning ? (
          <Button variant="destructive" size="sm" onClick={handleStop} className="gap-1.5">
            <Square className="h-3.5 w-3.5" />
            {isRTL ? 'إيقاف' : 'Stop'}
          </Button>
        ) : (
          <Button size="sm" onClick={handleStart} className="gap-1.5">
            <Play className="h-3.5 w-3.5" />
            {isRTL ? 'تشغيل اختباري' : 'Test run'}
          </Button>
        )}

        {isRunning && (
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden />
            {isRTL ? 'جارٍ التشغيل…' : 'Running…'}
          </span>
        )}

        {runState === 'done' && complete && (
          <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
            {isRTL
              ? `تمّ حفظ ${complete.envelopes_saved} مغلّف`
              : `${complete.envelopes_saved} envelope${complete.envelopes_saved !== 1 ? 's' : ''} saved`}
          </span>
        )}

        {runState === 'error' && (
          <span className="text-xs text-destructive font-medium">
            {isRTL ? 'فشل التشغيل' : 'Run failed'}
          </span>
        )}
      </div>

      {steps.length > 0 && (
        <div className="rounded-md border bg-muted/30 px-4 divide-y divide-border/50">
          {steps.map((step, i) => (
            <StepRow key={`${step.name}-${i}`} step={step} isRTL={isRTL} />
          ))}
        </div>
      )}

      {runState === 'error' && errorMsg && (
        <div className="flex items-center gap-2 rounded-md border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          <XCircle className="h-4 w-4 shrink-0" aria-hidden />
          <span>{errorMsg}</span>
        </div>
      )}

      {runState === 'done' && complete && (
        <div className="rounded-md border">
          <button
            type="button"
            onClick={() => setSavedExpanded((v) => !v)}
            className="flex w-full items-center justify-between px-4 py-2.5 text-sm font-medium hover:bg-muted/40 transition-colors duration-fast ease-standard"
          >
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" aria-hidden />
              {isRTL
                ? `المغلّفات المحفوظة (${complete.envelopes_saved})`
                : `Saved envelopes (${complete.envelopes_saved})`}
            </span>
            {savedExpanded
              ? <ChevronUp className="h-4 w-4 text-muted-foreground" aria-hidden />
              : <ChevronDown className="h-4 w-4 text-muted-foreground" aria-hidden />}
          </button>

          {savedExpanded && (
            <>
              <Separator />
              <div className="px-4 divide-y divide-border/50">
                {complete.saved.length === 0 ? (
                  <p className="py-3 text-sm text-muted-foreground">
                    {isRTL ? 'لا توجد مغلّفات' : 'No envelopes'}
                  </p>
                ) : (
                  complete.saved.map((item, i) => (
                    <SavedItem
                      key={(item.content_hash || item.envelope_id || item.url || '') + i}
                      item={item}
                      isRTL={isRTL}
                    />
                  ))
                )}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )

  if (inline) return content

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-base flex items-center gap-2">
          <Play className="h-4 w-4 text-muted-foreground" aria-hidden />
          {isRTL ? 'تشغيل اختباري' : 'Test Run'}
        </CardTitle>
      </CardHeader>
      <CardContent>{content}</CardContent>
    </Card>
  )
}
TestRunPanel.displayName = 'TestRunPanel'

export default TestRunPanel
