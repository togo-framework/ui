'use client'

/**
 * WorkflowEditor — drag-reorderable list editor for plugin workflow_steps + sources.
 *
 * ADAPTED from app/src/components/superadmin/plugins/WorkflowEditor.tsx:
 *   - @/components/ui/*             → ../ui/*
 *   - @/lib/utils                   → ../../lib/utils
 *   - useLanguage (LanguageContext) → language prop (string)
 *   - useSaveWorkflow hook          → removed; onSave(steps, sources) callback seam
 *   - AIKeywordPanel                → removed (host product wires if needed)
 *   - toast (sonner)                → kept (sonner is in sentra-ui deps)
 *   - PipelineModel                 → removed (not needed by editor)
 *   - WorkflowPalette type          → imported from ./types
 *   - WorkflowValidationError       → removed (caller handles bridge error shape)
 *
 * DND: uses @dnd-kit/core + @dnd-kit/sortable — these are added to sentra-ui
 * package.json (dnd-kit is already in the host app; pulled as peer here).
 *
 * Seams:
 *   - workflowSteps / workflowSources: raw JSONB arrays (initial state)
 *   - onSave(steps, sources): called when operator hits Save; returns Promise
 *   - pluginSlug: passed to EditSourceDialog for Credentials links
 *   - language: 'en' | 'ar'
 *   - palette: optional WorkflowPalette (SVC picker items)
 */

import { useState, useCallback, useMemo } from 'react'
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from '@dnd-kit/core'
import {
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
  arrayMove,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import {
  Save,
  RotateCcw,
  Plus,
  Trash2,
  AlertTriangle,
  Pencil,
  GripVertical,
  Database,
  Search,
  Rss,
  Globe,
  Code,
  Info,
  ExternalLink,
} from 'lucide-react'
import { toast } from 'sonner'

import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { Switch } from '../ui/switch'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '../ui/dialog'
import { Separator } from '../ui/separator'
import { cn } from '../../lib/utils'
import type { WorkflowPalette, WorkflowStep, WorkflowSource } from './types'
import { NestedStepsEditor } from './NestedStepsEditor'
import { StepOptionsDialog } from './StepOptionsDialog'

// ── nested-tree helpers (steps can contain then/else/steps branches) ──
const BR = ['then', 'else', 'steps'] as const
let _wid = 0
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function assignUids(steps: any[]): any[] {
  return (steps ?? []).map((s) => {
    const n = { ...s, _uid: s._uid ?? `wstep-${_wid++}` }
    for (const k of BR) if (Array.isArray(n[k])) n[k] = assignUids(n[k])
    return n
  })
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function updateByUid(steps: any[], uid: string, next: any): any[] {
  return steps.map((s) => {
    if (String(s._uid) === uid) return { ...next, _uid: s._uid }
    let changed = false
    const c = { ...s }
    for (const k of BR) if (Array.isArray(c[k])) { const r = updateByUid(c[k], uid, next); if (r !== c[k]) { c[k] = r; changed = true } }
    return changed ? c : s
  })
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function deleteByUid(steps: any[], uid: string): any[] {
  const out: any[] = []
  for (const s of steps) {
    if (String(s._uid) === uid) continue
    const c = { ...s }
    for (const k of BR) if (Array.isArray(c[k])) c[k] = deleteByUid(c[k], uid)
    out.push(c)
  }
  return out
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function stripUidsDeep(o: any): any {
  if (Array.isArray(o)) return o.map(stripUidsDeep)
  if (o && typeof o === 'object') {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { _uid, ...rest } = o
    const r: Record<string, any> = {}
    for (const k of Object.keys(rest)) r[k] = stripUidsDeep(rest[k])
    return r
  }
  return o
}

// ── Constants ─────────────────────────────────────────────────────────────────

const PROTO_POLLUTION_KEYS = ['__proto__', 'constructor', 'prototype']

const SOURCE_TYPES = [
  { type: 'searxng_social', label_en: 'SearxNG Social', label_ar: 'سيركس اجتماعي' },
  { type: 'crawler',        label_en: 'Web Crawler',    label_ar: 'زاحف الويب' },
  { type: 'http',           label_en: 'HTTP Source',    label_ar: 'مصدر HTTP' },
  { type: 'api',            label_en: 'API Source',     label_ar: 'مصدر API' },
  { type: 'meltwater',      label_en: 'Meltwater',      label_ar: 'ميلت ووتر' },
]

const STEP_KINDS = [
  { kind: 'rss_poll',     label_en: 'RSS Poll',     label_ar: 'استطلاع RSS' },
  { kind: 'search_query', label_en: 'Search Query', label_ar: 'استعلام بحث' },
  { kind: 'http_call',    label_en: 'HTTP Call',    label_ar: 'طلب HTTP' },
  { kind: 'web_scrape',   label_en: 'Web Scrape',   label_ar: 'جلب صفحات' },
  { kind: 'sql_insert',   label_en: 'SQL Insert',   label_ar: 'إدراج SQL' },
]

const STEP_LABELS: Record<string, { en: string; ar: string }> = {
  rss_poll: { en: 'RSS Poll', ar: 'استطلاع RSS' },
  search_query: { en: 'Search Query', ar: 'استعلام بحث' },
  http_call: { en: 'HTTP Call', ar: 'طلب HTTP' },
  web_scrape: { en: 'Web Scrape', ar: 'جلب صفحات' },
  sql_insert: { en: 'SQL Insert', ar: 'إدراج SQL' },
}

const kindIcon = (kind: string) => {
  switch (kind) {
    case 'search_query': return Search
    case 'rss_poll': return Rss
    case 'http_call': return Globe
    case 'web_scrape': return Code
    case 'sql_insert': return Database
    default: return Code
  }
}

// ── Security helper ───────────────────────────────────────────────────────────

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const hasProtoPollutionKey = (obj: any): boolean => {
  if (!obj || typeof obj !== 'object') return false
  return Object.keys(obj).some((k) => PROTO_POLLUTION_KEYS.includes(k))
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const stepSummary = (step: any, isRTL: boolean): string => {
  const kind = step?.kind ?? ''
  if (kind === 'search_query') {
    const n = Array.isArray(step.queries) ? step.queries.length : 0
    return isRTL ? `${n} استعلام بحث` : `${n} search ${n === 1 ? 'query' : 'queries'}`
  }
  if (kind === 'rss_poll') {
    const n = Array.isArray(step.urls) ? step.urls.length : 0
    return isRTL ? `${n} رابط RSS` : `${n} feed ${n === 1 ? 'URL' : 'URLs'}`
  }
  if (kind === 'sql_insert') {
    return step.table ? `→ ${step.table}` : (isRTL ? 'إدراج' : 'insert')
  }
  if (kind === 'http_call') return step.url || step.endpoint_template || 'HTTP'
  if (kind === 'web_scrape') return step.url || step.endpoint_template || (isRTL ? 'جلب صفحة' : 'scrape')
  return ''
}

// ── JSON field parser ─────────────────────────────────────────────────────────

const parseJSONField = (txt: string): [unknown, string | null] => {
  const t = txt.trim()
  if (t === '') return [undefined, null]
  try {
    return [JSON.parse(t), null]
  } catch (e) {
    return [undefined, e instanceof Error ? e.message : 'invalid JSON']
  }
}

// ── SortableRow ───────────────────────────────────────────────────────────────

interface SortableRowProps {
  id: string
  icon: React.ComponentType<{ className?: string }>
  title: string
  subtitle: string
  badge?: string
  disabled?: boolean
  isRTL: boolean
  checked: boolean
  onToggle: () => void
  onEdit?: () => void
  onDelete: () => void
}

const SortableRow = ({
  id, icon: Icon, title, subtitle, badge, disabled, isRTL,
  checked, onToggle, onEdit, onDelete,
}: SortableRowProps) => {
  const {
    attributes, listeners, setNodeRef, setActivatorNodeRef,
    transform, transition, isDragging,
  } = useSortable({ id })

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 10 : undefined,
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={cn(
        'flex items-center gap-2 bg-card px-2 py-2.5',
        isDragging && 'opacity-80 shadow-lg rounded-md',
        disabled && 'opacity-55',
      )}
    >
      <button
        ref={setActivatorNodeRef}
        {...attributes}
        {...listeners}
        type="button"
        aria-label={isRTL ? 'اسحب لإعادة الترتيب' : 'Drag to reorder'}
        className="flex h-9 w-6 shrink-0 cursor-grab active:cursor-grabbing items-center justify-center text-muted-foreground/40 hover:text-muted-foreground transition-colors duration-fast ease-standard"
      >
        <GripVertical className="h-4 w-4" />
      </button>

      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-muted">
        <Icon className="h-4 w-4 text-muted-foreground" />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="truncate text-sm font-medium">{title}</span>
          {badge && (
            <Badge variant="secondary" className="shrink-0 text-[10px] tabular-nums">
              {badge}
            </Badge>
          )}
          {disabled && (
            <Badge variant="outline" className="shrink-0 text-[10px] text-muted-foreground">
              {isRTL ? 'معطّل' : 'off'}
            </Badge>
          )}
        </div>
        {subtitle && (
          <p className="truncate text-xs text-muted-foreground">{subtitle}</p>
        )}
      </div>

      <div className="flex shrink-0 items-center gap-1">
        <Switch
          checked={checked}
          onCheckedChange={onToggle}
          className="scale-90"
          aria-label={isRTL ? 'تفعيل/تعطيل' : 'Enable/disable'}
        />
        {onEdit && (
          <Button size="sm" variant="ghost" className="h-8 px-2" onClick={onEdit} title={isRTL ? 'تعديل' : 'Edit'}>
            <Pencil className="h-3.5 w-3.5 me-1" />
            {isRTL ? 'تعديل' : 'Edit'}
          </Button>
        )}
        <Button
          size="sm"
          variant="ghost"
          className="h-8 w-8 p-0 text-destructive hover:text-destructive"
          onClick={onDelete}
          title={isRTL ? 'حذف' : 'Delete'}
        >
          <Trash2 className="h-3.5 w-3.5" />
        </Button>
      </div>
    </div>
  )
}
SortableRow.displayName = 'SortableRow'

// ── AddItemDialog ─────────────────────────────────────────────────────────────

interface AddItemDialogProps {
  open: boolean
  onClose: () => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onAddStep: (step: any) => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onAddSource: (src: any) => void
  palette: WorkflowPalette | undefined
  isRTL: boolean
}

const AddItemDialog = ({ open, onClose, onAddStep, onAddSource, palette, isRTL }: AddItemDialogProps) => {
  const [mode, setMode] = useState<'step' | 'source'>('step')
  const [selectedKind, setSelectedKind] = useState('')
  const [selectedType, setSelectedType] = useState('')

  const handleAdd = () => {
    if (mode === 'step' && selectedKind) {
      const obj = { kind: selectedKind }
      if (hasProtoPollutionKey(obj)) return
      onAddStep(obj)
      setSelectedKind('')
      onClose()
    } else if (mode === 'source' && selectedType) {
      const obj = { type: selectedType, enabled: true }
      if (hasProtoPollutionKey(obj)) return
      onAddSource(obj)
      setSelectedType('')
      onClose()
    }
  }

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-sm" dir={isRTL ? 'rtl' : 'ltr'}>
        <DialogHeader>
          <DialogTitle>{isRTL ? 'إضافة عنصر' : 'Add item'}</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-2">
          <div className="flex gap-2">
            <Button size="sm" variant={mode === 'step' ? 'default' : 'outline'} onClick={() => setMode('step')}>
              {isRTL ? 'خطوة' : 'Step'}
            </Button>
            <Button size="sm" variant={mode === 'source' ? 'default' : 'outline'} onClick={() => setMode('source')}>
              {isRTL ? 'مصدر' : 'Source'}
            </Button>
          </div>

          {mode === 'step' && (
            <Select value={selectedKind} onValueChange={setSelectedKind}>
              <SelectTrigger>
                <SelectValue placeholder={isRTL ? 'اختر نوع الخطوة' : 'Select step kind'} />
              </SelectTrigger>
              <SelectContent>
                {STEP_KINDS.map((k) => (
                  <SelectItem key={k.kind} value={k.kind}>
                    {isRTL ? k.label_ar : k.label_en}
                  </SelectItem>
                ))}
                {(palette?.svc ?? []).map((s) => (
                  <SelectItem key={`svc-${s.slug}`} value={s.slug}>
                    {isRTL ? s.name_ar : s.name_en}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}

          {mode === 'source' && (
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger>
                <SelectValue placeholder={isRTL ? 'اختر نوع المصدر' : 'Select source type'} />
              </SelectTrigger>
              <SelectContent>
                {SOURCE_TYPES.map((t) => (
                  <SelectItem key={t.type} value={t.type}>
                    {isRTL ? t.label_ar : t.label_en}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        </div>

        <DialogFooter>
          <Button variant="outline" size="sm" onClick={onClose}>
            {isRTL ? 'إلغاء' : 'Cancel'}
          </Button>
          <Button size="sm" onClick={handleAdd} disabled={mode === 'step' ? !selectedKind : !selectedType}>
            {isRTL ? 'إضافة' : 'Add'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
AddItemDialog.displayName = 'AddItemDialog'

// ── EditStepDialog ────────────────────────────────────────────────────────────

interface EditStepDialogProps {
  open: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  step: any | null
  onClose: () => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSave: (patch: any) => void
  isRTL: boolean
}

import { useEffect } from 'react'

const EditStepDialog = ({ open, step, onClose, onSave, isRTL }: EditStepDialogProps) => {
  const kind: string = step?.kind ?? ''
  const lbl = (en: string, ar: string) => (isRTL ? ar : en)

  const [queriesTxt, setQueriesTxt] = useState('')
  const [enginesTxt, setEnginesTxt] = useState('')
  const [urlsTxt, setUrlsTxt] = useState('')
  const [freshnessHours, setFreshnessHours] = useState('')
  const [url, setUrl] = useState('')
  const [method, setMethod] = useState<'GET' | 'POST'>('GET')
  const [resultPath, setResultPath] = useState('')
  const [targetField, setTargetField] = useState('')
  const [timeoutSec, setTimeoutSec] = useState('')
  const [headersTxt, setHeadersTxt] = useState('')
  const [bodyJsonTxt, setBodyJsonTxt] = useState('')
  const [userAgent, setUserAgent] = useState('')
  const [extractTxt, setExtractTxt] = useState('')
  const [table, setTable] = useState('')
  const [rowsField, setRowsField] = useState('')
  const [onConflict, setOnConflict] = useState('')
  const [skipOnEmpty, setSkipOnEmpty] = useState(false)
  const [fieldMapTxt, setFieldMapTxt] = useState('')
  const [jsonErr, setJsonErr] = useState<string | null>(null)

  useEffect(() => {
    if (!step) return
    setJsonErr(null)
    const jstr = (v: unknown) => (v == null ? '' : JSON.stringify(v, null, 2))
    if (kind === 'search_query') {
      setQueriesTxt(Array.isArray(step.queries) ? step.queries.join('\n') : '')
      setEnginesTxt(Array.isArray(step.engines) ? step.engines.join(', ') : '')
    } else if (kind === 'rss_poll') {
      setUrlsTxt(Array.isArray(step.urls) ? step.urls.join('\n') : (step.url ? String(step.url) : ''))
      setFreshnessHours(step.freshness_hours != null ? String(step.freshness_hours) : '')
    } else if (kind === 'http_call') {
      setUrl(step.url ?? ''); setMethod(step.method === 'POST' ? 'POST' : 'GET')
      setResultPath(step.result_path ?? ''); setTargetField(step.target_field ?? '')
      setTimeoutSec(step.timeout_sec != null ? String(step.timeout_sec) : '')
      setHeadersTxt(jstr(step.headers)); setBodyJsonTxt(jstr(step.body_json))
    } else if (kind === 'web_scrape') {
      setUrl(step.url ?? ''); setTargetField(step.target_field ?? '')
      setTimeoutSec(step.timeout_sec != null ? String(step.timeout_sec) : '')
      setUserAgent(step.user_agent ?? ''); setExtractTxt(jstr(step.extract))
    } else if (kind === 'sql_insert') {
      setTable(step.table ?? ''); setRowsField(step.rows_field ?? '')
      setOnConflict(step.on_conflict ?? ''); setSkipOnEmpty(!!step.skip_on_empty)
      setFieldMapTxt(jstr(step.field_map))
    }
  }, [step, kind])

  const numOrSkip = (s: string) => {
    const t = s.trim()
    return t !== '' && !isNaN(Number(t)) ? Number(t) : undefined
  }

  const handleApply = () => {
    if (!step) return
    setJsonErr(null)
    if (kind === 'search_query') {
      const queries = queriesTxt.split('\n').map((q) => q.trim()).filter(Boolean)
      const engines = enginesTxt.split(',').map((e) => e.trim()).filter(Boolean)
      onSave({ queries, engines: engines.length > 0 ? engines : undefined })
    } else if (kind === 'rss_poll') {
      const urls = urlsTxt.split('\n').map((u) => u.trim()).filter(Boolean)
      const fh = numOrSkip(freshnessHours)
      onSave({ urls, ...(fh != null ? { freshness_hours: fh } : {}) })
    } else if (kind === 'http_call') {
      const [headers, hErr] = parseJSONField(headersTxt)
      const [bodyJson, bErr] = parseJSONField(bodyJsonTxt)
      if (hErr) { setJsonErr(`headers: ${hErr}`); return }
      if (bErr) { setJsonErr(`body_json: ${bErr}`); return }
      onSave({
        url: url.trim(), method,
        ...(resultPath.trim() ? { result_path: resultPath.trim() } : {}),
        ...(targetField.trim() ? { target_field: targetField.trim() } : {}),
        ...(numOrSkip(timeoutSec) != null ? { timeout_sec: numOrSkip(timeoutSec) } : {}),
        ...(headers !== undefined ? { headers } : {}),
        ...(bodyJson !== undefined ? { body_json: bodyJson } : {}),
      })
    } else if (kind === 'web_scrape') {
      const [extract, eErr] = parseJSONField(extractTxt)
      if (eErr) { setJsonErr(`extract: ${eErr}`); return }
      onSave({
        url: url.trim(),
        ...(targetField.trim() ? { target_field: targetField.trim() } : {}),
        ...(numOrSkip(timeoutSec) != null ? { timeout_sec: numOrSkip(timeoutSec) } : {}),
        ...(userAgent.trim() ? { user_agent: userAgent.trim() } : {}),
        ...(extract !== undefined ? { extract } : {}),
      })
    } else if (kind === 'sql_insert') {
      const [fieldMap, fErr] = parseJSONField(fieldMapTxt)
      if (fErr) { setJsonErr(`field_map: ${fErr}`); return }
      onSave({
        table: table.trim(),
        ...(rowsField.trim() ? { rows_field: rowsField.trim() } : {}),
        ...(onConflict.trim() ? { on_conflict: onConflict.trim() } : {}),
        skip_on_empty: skipOnEmpty,
        ...(fieldMap !== undefined ? { field_map: fieldMap } : {}),
      })
    } else {
      onClose(); return
    }
    onClose()
  }

  if (!step) return null
  const knownKind = ['search_query', 'rss_poll', 'http_call', 'web_scrape', 'sql_insert'].includes(kind)

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-md max-h-[85vh] overflow-y-auto" dir={isRTL ? 'rtl' : 'ltr'}>
        <DialogHeader>
          <DialogTitle>
            {lbl('Edit step', 'تعديل الخطوة')}{' '}
            <span className="font-mono text-sm text-muted-foreground">{kind}</span>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-2">
          {kind === 'search_query' && (
            <>
              <div className="space-y-1.5">
                <Label className="text-sm font-medium">{lbl('Queries (one per line)', 'الاستعلامات (سطر لكل استعلام)')}</Label>
                <Textarea dir={isRTL ? 'rtl' : 'ltr'} placeholder={isRTL ? 'صحافة\nسياسة' : 'press release\nbreaking news'} value={queriesTxt} onChange={(e) => setQueriesTxt(e.target.value)} rows={6} className="font-mono text-sm resize-y" />
              </div>
              <div className="space-y-1.5">
                <Label className="text-sm font-medium">{lbl('Engines (comma-separated)', 'محركات البحث (مفصولة بفواصل)')}</Label>
                <Input dir="ltr" placeholder="google, bing, duckduckgo" value={enginesTxt} onChange={(e) => setEnginesTxt(e.target.value)} className="font-mono text-sm" />
              </div>
            </>
          )}

          {kind === 'rss_poll' && (
            <>
              <div className="space-y-1.5">
                <Label className="text-sm font-medium">{lbl('Feed URLs (one per line)', 'روابط RSS (سطر لكل رابط)')}</Label>
                <Textarea dir="ltr" placeholder="https://example.com/feed.rss" value={urlsTxt} onChange={(e) => setUrlsTxt(e.target.value)} rows={5} className="font-mono text-sm resize-y" />
              </div>
              <div className="space-y-1.5">
                <Label className="text-sm font-medium">{lbl('Freshness (hours)', 'الحداثة (بالساعات)')}</Label>
                <Input dir="ltr" type="number" placeholder="24" value={freshnessHours} onChange={(e) => setFreshnessHours(e.target.value)} className="w-28" />
              </div>
            </>
          )}

          {kind === 'http_call' && (
            <>
              <div className="grid grid-cols-[1fr_auto] gap-2">
                <div className="space-y-1.5">
                  <Label className="text-sm font-medium">{lbl('URL', 'الرابط')}</Label>
                  <Input dir="ltr" placeholder="https://api.example.com/v1/items" value={url} onChange={(e) => setUrl(e.target.value)} className="font-mono text-sm" />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-sm font-medium">{lbl('Method', 'الطريقة')}</Label>
                  <Select value={method} onValueChange={(v) => setMethod(v as 'GET' | 'POST')}>
                    <SelectTrigger className="w-24"><SelectValue /></SelectTrigger>
                    <SelectContent><SelectItem value="GET">GET</SelectItem><SelectItem value="POST">POST</SelectItem></SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-1.5">
                  <Label className="text-sm font-medium">{lbl('Result path', 'مسار النتيجة')}</Label>
                  <Input dir="ltr" placeholder="$.data.items" value={resultPath} onChange={(e) => setResultPath(e.target.value)} className="font-mono text-sm" />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-sm font-medium">{lbl('Target field', 'الحقل الهدف')}</Label>
                  <Input dir="ltr" placeholder="envelopes" value={targetField} onChange={(e) => setTargetField(e.target.value)} className="font-mono text-sm" />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label className="text-sm font-medium">{lbl('Timeout (seconds)', 'المهلة (ثواني)')}</Label>
                <Input dir="ltr" type="number" placeholder="15" value={timeoutSec} onChange={(e) => setTimeoutSec(e.target.value)} className="w-28" />
              </div>
              <div className="space-y-1.5">
                <Label className="text-sm font-medium">{lbl('Headers (JSON)', 'الترويسات (JSON)')}</Label>
                <Textarea dir="ltr" placeholder='{"Authorization": "Bearer {{secret:token}}"}' value={headersTxt} onChange={(e) => setHeadersTxt(e.target.value)} rows={3} className="font-mono text-xs resize-y" />
              </div>
              <div className="space-y-1.5">
                <Label className="text-sm font-medium">{lbl('Body JSON (POST)', 'محتوى الطلب JSON (POST)')}</Label>
                <Textarea dir="ltr" placeholder='{"query": "..."}' value={bodyJsonTxt} onChange={(e) => setBodyJsonTxt(e.target.value)} rows={3} className="font-mono text-xs resize-y" />
              </div>
            </>
          )}

          {kind === 'web_scrape' && (
            <>
              <div className="space-y-1.5">
                <Label className="text-sm font-medium">{lbl('URL', 'الرابط')}</Label>
                <Input dir="ltr" placeholder="https://example.com/page" value={url} onChange={(e) => setUrl(e.target.value)} className="font-mono text-sm" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-1.5">
                  <Label className="text-sm font-medium">{lbl('Target field', 'الحقل الهدف')}</Label>
                  <Input dir="ltr" placeholder="envelopes" value={targetField} onChange={(e) => setTargetField(e.target.value)} className="font-mono text-sm" />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-sm font-medium">{lbl('Timeout (seconds)', 'المهلة (ثواني)')}</Label>
                  <Input dir="ltr" type="number" placeholder="20" value={timeoutSec} onChange={(e) => setTimeoutSec(e.target.value)} className="w-full" />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label className="text-sm font-medium">{lbl('User agent', 'وكيل المستخدم')}</Label>
                <Input dir="ltr" placeholder="Mozilla/5.0 ..." value={userAgent} onChange={(e) => setUserAgent(e.target.value)} className="font-mono text-xs" />
              </div>
              <div className="space-y-1.5">
                <Label className="text-sm font-medium">{lbl('Extract rules (JSON)', 'قواعد الاستخراج (JSON)')}</Label>
                <Textarea dir="ltr" placeholder='{"title": "h1", "content": ".article-body"}' value={extractTxt} onChange={(e) => setExtractTxt(e.target.value)} rows={4} className="font-mono text-xs resize-y" />
              </div>
            </>
          )}

          {kind === 'sql_insert' && (
            <>
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-1.5">
                  <Label className="text-sm font-medium">{lbl('Table', 'الجدول')}</Label>
                  <Input dir="ltr" placeholder="public.raw_envelopes" value={table} onChange={(e) => setTable(e.target.value)} className="font-mono text-sm" />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-sm font-medium">{lbl('Rows field', 'حقل الصفوف')}</Label>
                  <Input dir="ltr" placeholder="$envelopes" value={rowsField} onChange={(e) => setRowsField(e.target.value)} className="font-mono text-sm" />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label className="text-sm font-medium">{lbl('On conflict', 'عند التعارض')}</Label>
                <Input dir="ltr" placeholder="content_hash" value={onConflict} onChange={(e) => setOnConflict(e.target.value)} className="font-mono text-sm" />
              </div>
              <div className="flex items-center gap-2">
                <Switch checked={skipOnEmpty} onCheckedChange={setSkipOnEmpty} className="scale-90" />
                <Label className="text-sm">{lbl('Skip on empty', 'تخطٍّ إذا فارغ')}</Label>
              </div>
              <div className="space-y-1.5">
                <Label className="text-sm font-medium">{lbl('Field map (JSON)', 'خريطة الحقول (JSON)')}</Label>
                <Textarea dir="ltr" placeholder='{"content_en": "title", "url": "link"}' value={fieldMapTxt} onChange={(e) => setFieldMapTxt(e.target.value)} rows={5} className="font-mono text-xs resize-y" />
              </div>
            </>
          )}

          {!knownKind && (
            <div className="rounded-md bg-muted px-3 py-2 text-[11px] text-muted-foreground font-mono whitespace-pre-wrap break-all">
              {JSON.stringify(step, (k) => (k === '_uid' ? undefined : step[k]), 2)}
            </div>
          )}

          {jsonErr && (
            <div className="flex items-start gap-2 rounded-md border border-destructive/40 bg-destructive/10 px-3 py-2 text-xs text-destructive">
              <AlertTriangle className="h-3.5 w-3.5 shrink-0 mt-0.5" />
              <span>{lbl('Invalid JSON', 'JSON غير صالح')}: {jsonErr}</span>
            </div>
          )}
        </div>

        <DialogFooter>
          <Button variant="outline" size="sm" onClick={onClose}>{lbl('Cancel', 'إلغاء')}</Button>
          {knownKind && (
            <Button size="sm" onClick={handleApply}>{lbl('Apply', 'تطبيق')}</Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
EditStepDialog.displayName = 'EditStepDialog'

// ── Secret ref note ───────────────────────────────────────────────────────────

const SecretRefNote = ({ isRTL, pluginSlug, secretKey }: {
  isRTL: boolean
  pluginSlug: string
  secretKey: string
}) => (
  <div className="flex flex-wrap items-start gap-2 rounded-md border border-amber-200 bg-amber-50 px-3 py-2 dark:border-amber-800 dark:bg-amber-950">
    <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-600 dark:text-amber-400" />
    <div className="flex-1 space-y-1 text-[11px] leading-snug text-amber-700 dark:text-amber-300">
      <p>
        {isRTL
          ? 'يُستخدم المرجع التالي في الإعداد — لا تلصق الرمز السري هنا أبداً:'
          : 'This reference is used in the config — never paste the actual secret here:'}
      </p>
      <code className="rounded bg-amber-100 px-1 py-0.5 font-mono text-[10px] text-amber-800 dark:bg-amber-900 dark:text-amber-200">
        {`{{secret:${secretKey}}}`}
      </code>
      <p>
        {isRTL ? 'سجّل القيمة الفعلية في ' : 'Store the real value in '}
        <a
          href={`../plugins/${pluginSlug}/credentials`}
          className="inline-flex items-center gap-0.5 underline underline-offset-2 hover:no-underline"
        >
          {isRTL ? 'تبويب بيانات الاعتماد' : 'the Credentials tab'}
          <ExternalLink className="h-2.5 w-2.5" />
        </a>
      </p>
    </div>
  </div>
)
SecretRefNote.displayName = 'SecretRefNote'

// ── EditSourceDialog (simplified — covers known source types) ─────────────────

interface EditSourceDialogProps {
  open: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  source: any | null
  pluginSlug: string
  onClose: () => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSave: (patch: any) => void
  isRTL: boolean
}

const EditSourceDialog = ({ open, source, pluginSlug, onClose, onSave, isRTL }: EditSourceDialogProps) => {
  const sourceType: string = source?.type ?? ''
  const lbl = (en: string, ar: string) => (isRTL ? ar : en)

  const [sxLanguage, setSxLanguage] = useState<'ar' | 'en' | 'auto'>('ar')
  const [sxSite, setSxSite] = useState('')
  const [sxCategories, setSxCategories] = useState('news')
  const [sxTimeRange, setSxTimeRange] = useState('')
  const [sxMaxPerQuery, setSxMaxPerQuery] = useState('10')
  const [httpEndpoint, setHttpEndpoint] = useState('')
  const [httpMethod, setHttpMethod] = useState<'GET' | 'POST'>('GET')
  const [httpResultPath, setHttpResultPath] = useState('')
  const [httpHeaders, setHttpHeaders] = useState('')
  const [httpTimeout, setHttpTimeout] = useState('')
  const [crUrl, setCrUrl] = useState('')
  const [crProfileId, setCrProfileId] = useState('')
  const [crSelectorsTxt, setCrSelectorsTxt] = useState('')
  const [apiTrackHandle, setApiTrackHandle] = useState('')
  const [apiLang, setApiLang] = useState<'ar' | 'en' | 'auto'>('ar')
  const [apiMaxResults, setApiMaxResults] = useState('100')
  const [mwSearchId, setMwSearchId] = useState('')
  const [mwQuery, setMwQuery] = useState('')
  const [mwPlatform, setMwPlatform] = useState('')
  const [mwPageSize, setMwPageSize] = useState('50')
  const [jsonErr, setJsonErr] = useState<string | null>(null)

  useEffect(() => {
    if (!source) return
    setJsonErr(null)
    const jstr = (v: unknown) => (v == null ? '' : JSON.stringify(v, null, 2))
    setSxLanguage(source.language === 'en' || source.language === 'auto' ? source.language : 'ar')
    setSxSite(typeof source.site === 'string' ? source.site : '')
    setSxCategories(Array.isArray(source.categories) ? source.categories.join(', ') : 'news')
    setSxTimeRange(typeof source.time_range === 'string' ? source.time_range : '')
    setSxMaxPerQuery(source.max_per_query != null ? String(source.max_per_query) : '10')
    setHttpEndpoint(typeof source.endpoint_template === 'string' ? source.endpoint_template : '')
    setHttpMethod(source.method === 'POST' ? 'POST' : 'GET')
    setHttpResultPath(typeof source.result_path === 'string' ? source.result_path : '')
    setHttpHeaders(source.headers != null ? jstr(source.headers) : '')
    setHttpTimeout(source.timeout_sec != null ? String(source.timeout_sec) : '')
    setCrUrl(typeof source.url === 'string' ? source.url : '')
    setCrProfileId(typeof source.profile_id === 'string' ? source.profile_id : '')
    setCrSelectorsTxt(Array.isArray(source.selectors) ? source.selectors.join('\n') : '')
    setApiTrackHandle(typeof source.track_handle === 'string' ? source.track_handle : '')
    setApiLang(source.lang === 'en' || source.lang === 'auto' ? source.lang : 'ar')
    setApiMaxResults(source.max_results != null ? String(source.max_results) : '100')
    setMwSearchId(typeof source.search_id === 'string' ? source.search_id : '')
    setMwQuery(typeof source.query === 'string' ? source.query : '')
    setMwPlatform(typeof source.platform === 'string' ? source.platform : '')
    setMwPageSize(source.page_size != null ? String(source.page_size) : '50')
  }, [source])

  const numOrSkip = (s: string): number | undefined => {
    const t = s.trim()
    return t !== '' && !isNaN(Number(t)) ? Number(t) : undefined
  }

  const handleApply = () => {
    if (!source) return
    setJsonErr(null)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let patch: Record<string, any> = {}

    if (sourceType === 'searxng_social') {
      const categories = sxCategories.split(',').map((c) => c.trim()).filter(Boolean)
      patch = {
        language: sxLanguage,
        ...(sxSite.trim() ? { site: sxSite.trim() } : {}),
        categories: categories.length > 0 ? categories : ['news'],
        ...(sxTimeRange ? { time_range: sxTimeRange } : {}),
        ...(numOrSkip(sxMaxPerQuery) != null ? { max_per_query: numOrSkip(sxMaxPerQuery) } : {}),
      }
    } else if (sourceType === 'http') {
      const [headers, hErr] = parseJSONField(httpHeaders)
      if (hErr) { setJsonErr(`headers: ${hErr}`); return }
      patch = {
        endpoint_template: httpEndpoint.trim() || undefined,
        method: httpMethod,
        ...(httpResultPath.trim() ? { result_path: httpResultPath.trim() } : {}),
        ...(headers !== undefined ? { headers } : {}),
        ...(numOrSkip(httpTimeout) != null ? { timeout_sec: numOrSkip(httpTimeout) } : {}),
      }
    } else if (sourceType === 'crawler') {
      const selectors = crSelectorsTxt.split('\n').map((s) => s.trim()).filter(Boolean)
      patch = {
        url: crUrl.trim() || undefined,
        ...(crProfileId.trim() ? { profile_id: crProfileId.trim() } : {}),
        ...(selectors.length > 0 ? { selectors } : {}),
      }
    } else if (sourceType === 'api') {
      patch = {
        ...(apiTrackHandle.trim() ? { track_handle: apiTrackHandle.trim() } : {}),
        lang: apiLang,
        ...(numOrSkip(apiMaxResults) != null ? { max_results: numOrSkip(apiMaxResults) } : {}),
        headers: { Authorization: '{{secret:bearer_token}}' },
      }
    } else if (sourceType === 'meltwater') {
      patch = {
        ...(mwSearchId.trim() ? { search_id: mwSearchId.trim() } : {}),
        ...(mwQuery.trim() ? { query: mwQuery.trim() } : {}),
        ...(mwPlatform.trim() ? { platform: mwPlatform.trim() } : {}),
        ...(numOrSkip(mwPageSize) != null ? { page_size: numOrSkip(mwPageSize) } : {}),
        api_token: '{{secret:api_token}}',
      }
    }

    onSave(patch)
    onClose()
  }

  if (!source) return null
  const knownType = ['searxng_social', 'http', 'crawler', 'api', 'meltwater'].includes(sourceType)

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto" dir={isRTL ? 'rtl' : 'ltr'}>
        <DialogHeader>
          <DialogTitle>
            {lbl('Edit source', 'تعديل مصدر')}{' '}
            <span className="font-mono text-sm text-muted-foreground">{sourceType}</span>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-2">
          {sourceType === 'searxng_social' && (
            <>
              <div className="space-y-1.5">
                <Label className="text-xs font-medium">{lbl('Language', 'اللغة')}</Label>
                <Select value={sxLanguage} onValueChange={(v) => setSxLanguage(v as 'ar' | 'en' | 'auto')}>
                  <SelectTrigger className="w-40 text-sm"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ar">{lbl('Arabic (ar)', 'العربية')}</SelectItem>
                    <SelectItem value="en">{lbl('English (en)', 'الإنجليزية')}</SelectItem>
                    <SelectItem value="auto">{lbl('Auto', 'تلقائي')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs font-medium">{lbl('Site filter (optional)', 'تصفية بالموقع (اختياري)')}</Label>
                <Input dir="ltr" placeholder="facebook.com" value={sxSite} onChange={(e) => setSxSite(e.target.value)} className="font-mono text-sm" />
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs font-medium">{lbl('Categories (comma-separated)', 'الفئات (مفصولة بفواصل)')}</Label>
                <Input dir="ltr" placeholder="news, social media" value={sxCategories} onChange={(e) => setSxCategories(e.target.value)} className="font-mono text-sm" />
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs font-medium">{lbl('Results per query', 'نتائج لكل استعلام')}</Label>
                <Input dir="ltr" type="number" placeholder="10" value={sxMaxPerQuery} onChange={(e) => setSxMaxPerQuery(e.target.value)} className="w-28 text-sm" />
              </div>
            </>
          )}

          {sourceType === 'http' && (
            <>
              <div className="space-y-1.5">
                <Label className="text-xs font-medium">{lbl('Endpoint URL template', 'قالب رابط النقطة')}</Label>
                <Input dir="ltr" placeholder="https://api.example.com/{query}" value={httpEndpoint} onChange={(e) => setHttpEndpoint(e.target.value)} className="font-mono text-sm" />
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs font-medium">{lbl('Headers (JSON)', 'الترويسات (JSON)')}</Label>
                <div className="flex items-start gap-1.5 rounded-md border border-amber-200 bg-amber-50 px-2.5 py-1.5 dark:border-amber-800 dark:bg-amber-950">
                  <Info className="mt-0.5 h-3 w-3 shrink-0 text-amber-600 dark:text-amber-400" />
                  <p className="text-[10px] leading-snug text-amber-700 dark:text-amber-300">
                    {lbl('Use {{secret:KEY}} for tokens. Never paste plaintext.', 'استخدم {{secret:KEY}} للرموز. لا تلصق الرمز هنا.')}
                  </p>
                </div>
                <Textarea dir="ltr" placeholder={'{\n  "Authorization": "Bearer {{secret:api_token}}"\n}'} value={httpHeaders} onChange={(e) => setHttpHeaders(e.target.value)} rows={4} className="font-mono text-xs resize-y" />
              </div>
            </>
          )}

          {sourceType === 'crawler' && (
            <>
              <div className="space-y-1.5">
                <Label className="text-xs font-medium">{lbl('Start URL', 'رابط البداية')}</Label>
                <Input dir="ltr" placeholder="https://example.com/articles/" value={crUrl} onChange={(e) => setCrUrl(e.target.value)} className="font-mono text-sm" />
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs font-medium">{lbl('Profile ID (optional)', 'معرّف الملف الشخصي (اختياري)')}</Label>
                <Input dir="ltr" placeholder="profile-abc123" value={crProfileId} onChange={(e) => setCrProfileId(e.target.value)} className="font-mono text-sm" />
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs font-medium">{lbl('CSS selectors (one per line)', 'محدّدات CSS (سطر لكل محدّد)')}</Label>
                <Textarea dir="ltr" placeholder=".article-body" value={crSelectorsTxt} onChange={(e) => setCrSelectorsTxt(e.target.value)} rows={3} className="font-mono text-sm resize-y" />
              </div>
            </>
          )}

          {sourceType === 'api' && (
            <>
              <SecretRefNote isRTL={isRTL} pluginSlug={pluginSlug} secretKey="bearer_token" />
              <Separator />
              <div className="space-y-1.5">
                <Label className="text-xs font-medium">{lbl('Track handle', 'المقبض المتتبَّع')}</Label>
                <Input dir="ltr" placeholder="BBCWorld" value={apiTrackHandle} onChange={(e) => setApiTrackHandle(e.target.value)} className="font-mono text-sm" />
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs font-medium">{lbl('Max results per run', 'أقصى عدد نتائج')}</Label>
                <Input dir="ltr" type="number" placeholder="100" value={apiMaxResults} onChange={(e) => setApiMaxResults(e.target.value)} className="w-28 text-sm" />
              </div>
            </>
          )}

          {sourceType === 'meltwater' && (
            <>
              <SecretRefNote isRTL={isRTL} pluginSlug={pluginSlug} secretKey="api_token" />
              <Separator />
              <div className="space-y-1.5">
                <Label className="text-xs font-medium">{lbl('Search ID (saved search)', 'معرّف البحث')}</Label>
                <Input dir="ltr" placeholder="search-abc123" value={mwSearchId} onChange={(e) => setMwSearchId(e.target.value)} className="font-mono text-sm" />
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs font-medium">{lbl('Query (ad-hoc)', 'استعلام مباشر')}</Label>
                <Input dir="ltr" placeholder='site:twitter.com "خطاب سياسي"' value={mwQuery} onChange={(e) => setMwQuery(e.target.value)} className="font-mono text-sm" />
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs font-medium">{lbl('Page size', 'حجم الصفحة')}</Label>
                <Input dir="ltr" type="number" placeholder="50" value={mwPageSize} onChange={(e) => setMwPageSize(e.target.value)} className="w-28 text-sm" />
              </div>
            </>
          )}

          {!knownType && (
            <div className="rounded-md bg-muted px-3 py-2 text-[11px] text-muted-foreground font-mono whitespace-pre-wrap break-all">
              {JSON.stringify(source, (k) => (k === '_uid' ? undefined : source[k]), 2)}
            </div>
          )}

          {jsonErr && (
            <div className="flex items-start gap-2 rounded-md border border-destructive/40 bg-destructive/10 px-3 py-2 text-xs text-destructive">
              <AlertTriangle className="h-3.5 w-3.5 shrink-0 mt-0.5" />
              <span>{lbl('Invalid JSON', 'JSON غير صالح')}: {jsonErr}</span>
            </div>
          )}
        </div>

        <DialogFooter>
          <Button variant="outline" size="sm" onClick={onClose}>{lbl('Cancel', 'إلغاء')}</Button>
          {knownType && <Button size="sm" onClick={handleApply}>{lbl('Apply', 'تطبيق')}</Button>}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
EditSourceDialog.displayName = 'EditSourceDialog'

// ── WorkflowEditor (public) ────────────────────────────────────────────────────

export interface WorkflowEditorProps {
  /** Raw JSONB workflow_steps array from the DB. */
  workflowSteps: WorkflowStep[]
  /** Raw JSONB sources array from the DB. */
  workflowSources: WorkflowSource[]
  /** Plugin slug — used in source credential links. */
  pluginSlug: string
  /** Current UI language. */
  language: 'en' | 'ar'
  /** Palette for Add dialog SVC items. */
  palette?: WorkflowPalette
  /**
   * Called when the operator clicks Save.
   * Returns a Promise — reject to show an error toast.
   */
  onSave: (steps: WorkflowStep[], sources: WorkflowSource[]) => Promise<void>
}

export const WorkflowEditor = ({
  workflowSteps,
  workflowSources,
  pluginSlug,
  language,
  palette,
  onSave,
}: WorkflowEditorProps) => {
  const isRTL = language === 'ar'

  const initialSteps = useMemo(
    () => assignUids(workflowSteps),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )
  const initialSources = useMemo(
    () => workflowSources.map((s, i) => ({ ...s, _uid: `source-${i}` })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  const [uidSeq, setUidSeq] = useState(1000)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [editSteps, setEditSteps] = useState<any[]>(initialSteps)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [editSources, setEditSources] = useState<any[]>(initialSources)

  const [addDialogOpen, setAddDialogOpen] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [dirty, setDirty] = useState(false)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [editingStep, setEditingStep] = useState<any | null>(null)
  const [editStepDialogOpen, setEditStepDialogOpen] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [editingSource, setEditingSource] = useState<any | null>(null)
  const [editSourceDialogOpen, setEditSourceDialogOpen] = useState(false)

  const markDirty = () => setDirty(true)

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  )

  const handleStepDragEnd = useCallback((event: DragEndEvent) => {
    const { active, over } = event
    if (!over || active.id === over.id) return
    setEditSteps((prev) => {
      const oldIdx = prev.findIndex((s) => String(s._uid) === active.id)
      const newIdx = prev.findIndex((s) => String(s._uid) === over.id)
      if (oldIdx === -1 || newIdx === -1) return prev
      return arrayMove(prev, oldIdx, newIdx)
    })
    markDirty()
  }, [])

  const handleSourceDragEnd = useCallback((event: DragEndEvent) => {
    const { active, over } = event
    if (!over || active.id === over.id) return
    setEditSources((prev) => {
      const oldIdx = prev.findIndex((s) => String(s._uid) === active.id)
      const newIdx = prev.findIndex((s) => String(s._uid) === over.id)
      if (oldIdx === -1 || newIdx === -1) return prev
      return arrayMove(prev, oldIdx, newIdx)
    })
    markDirty()
  }, [])

  const handleToggleStep = useCallback((id: string) => {
    setEditSteps((prev) => prev.map((s) => (String(s._uid) === id ? { ...s, disabled: !s.disabled } : s)))
    markDirty()
  }, [])

  const handleDeleteStep = useCallback((id: string) => {
    setEditSteps((prev) => deleteByUid(prev, id))
    markDirty()
  }, [])

  // Open the type-specific options modal for a step (from the nested editor).
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleEditStep = useCallback((step: any) => {
    setEditingStep(step)
    setEditStepDialogOpen(true)
  }, [])

  // Save the FULL updated step back into the tree by its _uid (any depth).
  const handleStepOptionsSave = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (next: any) => {
      setEditSteps((prev) => updateByUid(prev, String(next._uid), next))
      markDirty()
    },
    [],
  )

  const handleToggleSource = useCallback((id: string) => {
    setEditSources((prev) => prev.map((s) =>
      String(s._uid) === id ? { ...s, enabled: s.enabled === false } : s))
    markDirty()
  }, [])

  const handleDeleteSource = useCallback((id: string) => {
    setEditSources((prev) => prev.filter((s) => String(s._uid) !== id))
    markDirty()
  }, [])

  const handleOpenEditSource = useCallback((id: string) => {
    setEditSources((prev) => {
      const source = prev.find((s) => String(s._uid) === id)
      if (source) { setEditingSource(source); setEditSourceDialogOpen(true) }
      return prev
    })
  }, [])

  const handleEditSourceSave = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (patch: any) => {
      if (!editingSource) return
      setEditSources((prev) => prev.map((s) =>
        String(s._uid) === String(editingSource._uid) ? { ...s, ...patch } : s))
      markDirty()
    },
    [editingSource],
  )

  const handleAddStep = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (step: any) => {
      if (hasProtoPollutionKey(step)) { toast.error(isRTL ? 'إدخال غير آمن' : 'Unsafe input blocked'); return }
      setUidSeq((n) => n + 1)
      setEditSteps((prev) => [...prev, { ...step, _uid: `step-new-${uidSeq}` }])
      markDirty()
    },
    [isRTL, uidSeq],
  )

  const handleAddSource = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (src: any) => {
      if (hasProtoPollutionKey(src)) { toast.error(isRTL ? 'إدخال غير آمن' : 'Unsafe input blocked'); return }
      setUidSeq((n) => n + 1)
      setEditSources((prev) => [...prev, { ...src, _uid: `source-new-${uidSeq}` }])
      markDirty()
    },
    [isRTL, uidSeq],
  )

  const handleReset = useCallback(() => {
    setEditSteps(initialSteps)
    setEditSources(initialSources)
    setDirty(false)
  }, [initialSteps, initialSources])

  const handleSave = useCallback(async () => {
    for (const s of editSteps) {
      if (hasProtoPollutionKey(s)) { toast.error(isRTL ? 'خطوة تحتوي على مفاتيح غير مسموح بها' : 'Step contains blocked keys'); return }
    }
    for (const s of editSources) {
      if (hasProtoPollutionKey(s)) { toast.error(isRTL ? 'مصدر يحتوي على مفاتيح غير مسموح بها' : 'Source contains blocked keys'); return }
    }

    const cleanSteps = stripUidsDeep(editSteps)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const cleanSources = editSources.map((s: any) => {
      const { _uid, ...rest } = s
      return { ...rest, enabled: typeof rest.enabled === 'boolean' ? rest.enabled : true, type: rest.type ?? 'searxng_social' }
    })

    setIsSaving(true)
    try {
      await onSave(cleanSteps, cleanSources)
      toast.success(isRTL ? 'تم حفظ سير العمل' : 'Workflow saved')
      setDirty(false)
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : null
      toast.error(msg
        ? (isRTL ? `فشل الحفظ: ${msg}` : `Save failed: ${msg}`)
        : (isRTL ? 'فشل الحفظ' : 'Save failed'))
    } finally {
      setIsSaving(false)
    }
  }, [editSteps, editSources, onSave, isRTL])

  const stepLabel = (kind: string) =>
    STEP_LABELS[kind] ? (isRTL ? STEP_LABELS[kind].ar : STEP_LABELS[kind].en) : kind

  return (
    <div className="space-y-5" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="flex flex-wrap items-center gap-2">
        <Button size="sm" onClick={handleSave} disabled={isSaving || !dirty}>
          <Save className="h-3.5 w-3.5 me-1.5" />
          {isRTL ? 'حفظ' : 'Save'}
        </Button>
        <Button size="sm" variant="outline" onClick={handleReset} disabled={!dirty}>
          <RotateCcw className="h-3.5 w-3.5 me-1.5" />
          {isRTL ? 'إعادة ضبط' : 'Reset'}
        </Button>
        <Button size="sm" variant="outline" onClick={() => setAddDialogOpen(true)} className="ms-auto">
          <Plus className="h-3.5 w-3.5 me-1.5" />
          {isRTL ? 'إضافة' : 'Add'}
        </Button>
      </div>

      {/* STEPS list */}
      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-muted-foreground">
          {isRTL ? 'الخطوات' : 'Steps'}{' '}
          <span className="text-xs font-normal">
            ({editSteps.length}) — {isRTL ? 'اسحب لإعادة الترتيب' : 'drag to reorder'}
          </span>
        </h3>
        {editSteps.length === 0 ? (
          <div className="rounded-lg border border-dashed bg-muted/20 px-4 py-6 text-center text-sm text-muted-foreground">
            {isRTL ? 'لا توجد خطوات — أضف خطوة' : 'No steps — add one'}
          </div>
        ) : (
          <div className="rounded-lg border border-border bg-muted/10 p-2">
            <NestedStepsEditor
              steps={editSteps}
              language={isRTL ? 'ar' : 'en'}
              onChange={(next) => { setEditSteps(next); markDirty() }}
              onEditStep={handleEditStep}
              onDeleteStep={handleDeleteStep}
            />
          </div>
        )}
      </div>

      {/* SOURCES list */}
      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-muted-foreground">
          {isRTL ? 'المصادر' : 'Sources'}{' '}
          <span className="text-xs font-normal">({editSources.length})</span>
        </h3>
        {editSources.length === 0 ? (
          <div className="rounded-lg border border-dashed bg-muted/20 px-4 py-6 text-center text-sm text-muted-foreground">
            {isRTL ? 'لا توجد مصادر' : 'No sources'}
          </div>
        ) : (
          <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleSourceDragEnd}>
            <SortableContext items={editSources.map((s) => String(s._uid))} strategy={verticalListSortingStrategy}>
              <div className="overflow-hidden rounded-lg border border-border divide-y divide-border">
                {editSources.map((s) => {
                  const subParts: string[] = []
                  if (s.site) subParts.push(`site:${s.site}`)
                  if (s.endpoint_template) subParts.push(s.endpoint_template)
                  if (s.url) subParts.push(s.url)
                  if (s.track_handle) subParts.push(`@${s.track_handle}`)
                  if (s.search_id) subParts.push(`search:${s.search_id}`)
                  else if (s.query) subParts.push(s.query.slice(0, 40))
                  subParts.push(isRTL ? 'يستخدم قائمة الكلمات المفتاحية' : 'uses keyword list')
                  const sub = subParts.join(' · ')
                  return (
                    <SortableRow
                      key={String(s._uid)}
                      id={String(s._uid)}
                      icon={Globe}
                      title={s.type ?? 'source'}
                      subtitle={sub}
                      disabled={s.enabled === false}
                      checked={s.enabled !== false}
                      isRTL={isRTL}
                      onToggle={() => handleToggleSource(String(s._uid))}
                      onEdit={() => handleOpenEditSource(String(s._uid))}
                      onDelete={() => handleDeleteSource(String(s._uid))}
                    />
                  )
                })}
              </div>
            </SortableContext>
          </DndContext>
        )}
      </div>

      <div className="flex items-start gap-2 text-[11px] text-amber-600 dark:text-amber-400">
        <AlertTriangle className="h-3.5 w-3.5 shrink-0 mt-0.5" />
        <span>
          {isRTL
            ? 'ملاحظة: تعطيل المصدر يُحترم من المُنفِّذ. تعطيل الخطوة تجميلي حالياً.'
            : 'Note: disabling a SOURCE is honoured by the executor. Disabling a STEP is currently cosmetic.'}
        </span>
      </div>

      <AddItemDialog
        open={addDialogOpen}
        onClose={() => setAddDialogOpen(false)}
        onAddStep={handleAddStep}
        onAddSource={handleAddSource}
        palette={palette}
        isRTL={isRTL}
      />
      <StepOptionsDialog
        open={editStepDialogOpen}
        step={editingStep}
        language={isRTL ? 'ar' : 'en'}
        onClose={() => setEditStepDialogOpen(false)}
        onSave={handleStepOptionsSave}
      />
      <EditSourceDialog
        open={editSourceDialogOpen}
        source={editingSource}
        pluginSlug={pluginSlug}
        onClose={() => setEditSourceDialogOpen(false)}
        onSave={handleEditSourceSave}
        isRTL={isRTL}
      />
    </div>
  )
}
WorkflowEditor.displayName = 'WorkflowEditor'

export default WorkflowEditor
