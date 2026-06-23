'use client'

/**
 * StepOptionsDialog — a type-specific options modal for a single workflow step.
 *
 * The form fields are driven by a registry keyed on the step `kind`, so each step
 * type shows exactly the settings it needs (schedule, condition, query, prompt,
 * model, …). Unknown kinds fall back to a raw-JSON editor. Presentational +
 * bilingual (EN/AR) + token-themed + RTL — pass the step and an onSave callback.
 */

import * as React from 'react'
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription,
} from '../ui/dialog'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Label } from '../ui/label'
import { Switch } from '../ui/switch'
import {
  Select, SelectTrigger, SelectValue, SelectContent, SelectItem,
} from '../ui/select'

export type StepFieldType = 'text' | 'textarea' | 'number' | 'select' | 'switch' | 'lines' | 'csv' | 'json'

export interface StepFieldDef {
  key: string
  type: StepFieldType
  label_en: string
  label_ar: string
  placeholder?: string
  options?: { value: string; label: string }[]
}

const MODELS = ['gemini-2.5-flash', 'gemini-2.5-pro', 'gpt-4o', 'gpt-4o-mini', 'claude-sonnet-4-6']
  .map((m) => ({ value: m, label: m }))

/** kind → field schema. The most common togo/sentra step kinds are covered; any
 * other kind falls back to the raw-JSON editor. */
export const STEP_FIELD_REGISTRY: Record<string, StepFieldDef[]> = {
  cron_trigger: [
    { key: 'schedule', type: 'text', label_en: 'Schedule', label_ar: 'الجدولة', placeholder: 'e.g. 15m, 1h, 1d' },
    { key: 'min_interval_sec', type: 'number', label_en: 'Min interval (seconds)', label_ar: 'أدنى فاصل (ثوانٍ)' },
  ],
  if: [
    { key: 'condition', type: 'text', label_en: 'Condition', label_ar: 'الشرط', placeholder: '$cron_due' },
  ],
  for_each: [
    { key: 'over', type: 'text', label_en: 'For each item in', label_ar: 'لكل عنصر في', placeholder: '$candidates' },
  ],
  sql_select: [
    { key: 'table', type: 'text', label_en: 'Table', label_ar: 'الجدول', placeholder: 'public.raw_envelopes' },
    { key: 'query', type: 'textarea', label_en: 'Query', label_ar: 'الاستعلام', placeholder: 'SELECT …' },
    { key: 'limit', type: 'number', label_en: 'Limit', label_ar: 'الحد' },
    { key: 'output', type: 'text', label_en: 'Output variable', label_ar: 'متغير الإخراج', placeholder: 'candidates' },
  ],
  sql_insert: [
    { key: 'table', type: 'text', label_en: 'Table', label_ar: 'الجدول' },
    { key: 'columns', type: 'csv', label_en: 'Columns', label_ar: 'الأعمدة', placeholder: 'title, severity, entity_id' },
    { key: 'rows_field', type: 'text', label_en: 'Rows from', label_ar: 'الصفوف من' },
    { key: 'on_conflict', type: 'text', label_en: 'On conflict', label_ar: 'عند التعارض' },
    { key: 'skip_on_empty', type: 'switch', label_en: 'Skip when empty', label_ar: 'تخطٍّ عند الفراغ' },
  ],
  sql_update: [
    { key: 'table', type: 'text', label_en: 'Table', label_ar: 'الجدول' },
    { key: 'set', type: 'json', label_en: 'Set (JSON)', label_ar: 'تعيين (JSON)' },
  ],
  gemini_call: [
    { key: 'prompt_slug', type: 'text', label_en: 'Prompt', label_ar: 'الموجّه', placeholder: 'alert-classify' },
    { key: 'model', type: 'select', label_en: 'Model', label_ar: 'النموذج', options: MODELS },
    { key: 'target_field', type: 'text', label_en: 'Save result to', label_ar: 'حفظ النتيجة في' },
  ],
  adk_call: [
    { key: 'prompt_slug', type: 'text', label_en: 'Prompt', label_ar: 'الموجّه', placeholder: 'alert-classify' },
    { key: 'prompt_inline', type: 'textarea', label_en: 'Inline prompt (optional)', label_ar: 'موجّه مضمّن (اختياري)' },
    { key: 'model', type: 'select', label_en: 'Model', label_ar: 'النموذج', options: MODELS },
    { key: 'target_field', type: 'text', label_en: 'Save result to', label_ar: 'حفظ النتيجة في' },
  ],
  http_call: [
    { key: 'url', type: 'text', label_en: 'URL', label_ar: 'الرابط', placeholder: 'https://…' },
    { key: 'method', type: 'select', label_en: 'Method', label_ar: 'الطريقة', options: [{ value: 'GET', label: 'GET' }, { value: 'POST', label: 'POST' }] },
    { key: 'target_field', type: 'text', label_en: 'Save response to', label_ar: 'حفظ الاستجابة في' },
    { key: 'timeout_sec', type: 'number', label_en: 'Timeout (seconds)', label_ar: 'المهلة (ثوانٍ)' },
    { key: 'headers', type: 'json', label_en: 'Headers (JSON)', label_ar: 'الترويسات (JSON)' },
    { key: 'body_json', type: 'json', label_en: 'Body (JSON)', label_ar: 'الجسم (JSON)' },
  ],
  webhook: [
    { key: 'url', type: 'text', label_en: 'Webhook URL', label_ar: 'رابط الويب هوك', placeholder: 'https://…' },
    { key: 'method', type: 'select', label_en: 'Method', label_ar: 'الطريقة', options: [{ value: 'POST', label: 'POST' }, { value: 'GET', label: 'GET' }] },
  ],
  send_email: [
    { key: 'to', type: 'text', label_en: 'To', label_ar: 'إلى' },
    { key: 'subject', type: 'text', label_en: 'Subject', label_ar: 'الموضوع' },
    { key: 'body', type: 'textarea', label_en: 'Body', label_ar: 'النص' },
  ],
  search_query: [
    { key: 'queries', type: 'lines', label_en: 'Queries (one per line)', label_ar: 'الاستعلامات (واحد بكل سطر)' },
    { key: 'engines', type: 'csv', label_en: 'Engines', label_ar: 'المحرّكات' },
  ],
  rss_poll: [
    { key: 'urls', type: 'lines', label_en: 'Feed URLs (one per line)', label_ar: 'روابط الخلاصات (واحد بكل سطر)' },
    { key: 'freshness_hours', type: 'number', label_en: 'Freshness (hours)', label_ar: 'الحداثة (ساعات)' },
  ],
  web_scrape: [
    { key: 'url', type: 'text', label_en: 'URL', label_ar: 'الرابط' },
    { key: 'target_field', type: 'text', label_en: 'Save to', label_ar: 'حفظ في' },
    { key: 'timeout_sec', type: 'number', label_en: 'Timeout (seconds)', label_ar: 'المهلة (ثوانٍ)' },
    { key: 'user_agent', type: 'text', label_en: 'User agent', label_ar: 'وكيل المستخدم' },
  ],
}

// alias kinds → same schema
STEP_FIELD_REGISTRY.http_request = STEP_FIELD_REGISTRY.http_call
STEP_FIELD_REGISTRY.email = STEP_FIELD_REGISTRY.send_email

export interface StepOptionsDialogProps {
  open: boolean
  /** The step object being edited (any shape with a `kind`). */
  step: Record<string, any> | null
  language?: 'en' | 'ar'
  onClose: () => void
  /** Called with the FULL updated step object when the operator saves. */
  onSave: (next: Record<string, any>) => void
}

const isContainerKey = (k: string) => k === 'then' || k === 'else' || k === 'steps' || k === '_uid' || k === 'id' || k === 'kind'

export function StepOptionsDialog({ open, step, language = 'en', onClose, onSave }: StepOptionsDialogProps) {
  const isRTL = language === 'ar'
  const t = (en: string, ar: string) => (isRTL ? ar : en)
  const kind: string = step?.kind ?? 'unknown'
  const fields = STEP_FIELD_REGISTRY[kind]
  const isKnown = Array.isArray(fields)

  const [form, setForm] = React.useState<Record<string, string>>({})
  const [rawJson, setRawJson] = React.useState('')
  const [err, setErr] = React.useState<string | null>(null)

  // seed form whenever a new step opens
  React.useEffect(() => {
    if (!step) return
    setErr(null)
    if (!isKnown) {
      setRawJson(JSON.stringify(step, (k, v) => (k === '_uid' ? undefined : v), 2))
      return
    }
    const next: Record<string, string> = {}
    for (const f of fields) {
      const v = step[f.key]
      if (f.type === 'lines') next[f.key] = Array.isArray(v) ? v.join('\n') : (v ?? '')
      else if (f.type === 'csv') next[f.key] = Array.isArray(v) ? v.join(', ') : (v ?? '')
      else if (f.type === 'json') next[f.key] = v == null ? '' : JSON.stringify(v, null, 2)
      else if (f.type === 'switch') next[f.key] = v ? '1' : ''
      else next[f.key] = v == null ? '' : String(v)
    }
    setForm(next)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, kind])

  const set = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }))

  const handleSave = () => {
    if (!step) return
    setErr(null)
    if (!isKnown) {
      try {
        const parsed = JSON.parse(rawJson)
        onSave({ ...parsed, _uid: step._uid, kind: parsed.kind ?? step.kind })
        onClose()
      } catch (e: any) {
        setErr(t('Invalid JSON: ', 'JSON غير صالح: ') + (e?.message ?? ''))
      }
      return
    }
    // preserve container branches + identity, overwrite the editable fields
    const next: Record<string, any> = {}
    for (const k of Object.keys(step)) if (isContainerKey(k)) next[k] = step[k]
    next.kind = step.kind
    for (const f of fields) {
      const raw = (form[f.key] ?? '').trim()
      if (f.type === 'switch') { next[f.key] = form[f.key] === '1'; continue }
      if (raw === '') continue
      if (f.type === 'number') { const n = Number(raw); if (!Number.isNaN(n)) next[f.key] = n; continue }
      if (f.type === 'lines') { next[f.key] = raw.split('\n').map((s) => s.trim()).filter(Boolean); continue }
      if (f.type === 'csv') { next[f.key] = raw.split(',').map((s) => s.trim()).filter(Boolean); continue }
      if (f.type === 'json') {
        try { next[f.key] = JSON.parse(raw) } catch (e: any) { setErr(`${f.label_en}: ${e?.message ?? 'invalid JSON'}`); return }
        continue
      }
      next[f.key] = raw
    }
    onSave(next)
    onClose()
  }

  const title = humanKind(kind, isRTL)

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-lg" dir={isRTL ? 'rtl' : 'ltr'}>
        <DialogHeader>
          <DialogTitle>{t('Step settings', 'إعدادات الخطوة')} · {title}</DialogTitle>
          <DialogDescription>{t('Configure what this step does.', 'اضبط ما تقوم به هذه الخطوة.')}</DialogDescription>
        </DialogHeader>

        <div className="max-h-[60vh] space-y-4 overflow-y-auto py-1">
          {err && <p className="rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive">{err}</p>}

          {!isKnown ? (
            <div className="space-y-1.5">
              <Label>{t('Raw step (JSON)', 'الخطوة الخام (JSON)')}</Label>
              <Textarea value={rawJson} onChange={(e) => setRawJson(e.target.value)} rows={12} className="font-mono text-xs" dir="ltr" />
            </div>
          ) : (
            fields.map((f) => (
              <div key={f.key} className="space-y-1.5">
                <Label htmlFor={`opt-${f.key}`}>{t(f.label_en, f.label_ar)}</Label>
                {f.type === 'switch' ? (
                  <div className="flex items-center gap-2">
                    <Switch id={`opt-${f.key}`} checked={form[f.key] === '1'} onCheckedChange={(v) => set(f.key, v ? '1' : '')} />
                  </div>
                ) : f.type === 'select' ? (
                  <Select value={form[f.key] || undefined} onValueChange={(v) => set(f.key, v)}>
                    <SelectTrigger id={`opt-${f.key}`}><SelectValue placeholder={t('Select…', 'اختر…')} /></SelectTrigger>
                    <SelectContent>
                      {f.options?.map((o) => <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>)}
                    </SelectContent>
                  </Select>
                ) : f.type === 'textarea' || f.type === 'lines' || f.type === 'csv' || f.type === 'json' ? (
                  <Textarea
                    id={`opt-${f.key}`}
                    value={form[f.key] ?? ''}
                    onChange={(e) => set(f.key, e.target.value)}
                    placeholder={f.placeholder}
                    rows={f.type === 'json' || f.type === 'textarea' ? 5 : 3}
                    className={f.type === 'json' ? 'font-mono text-xs' : undefined}
                    dir={f.type === 'json' ? 'ltr' : undefined}
                  />
                ) : (
                  <Input
                    id={`opt-${f.key}`}
                    type={f.type === 'number' ? 'number' : 'text'}
                    value={form[f.key] ?? ''}
                    onChange={(e) => set(f.key, e.target.value)}
                    placeholder={f.placeholder}
                  />
                )}
              </div>
            ))
          )}
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>{t('Cancel', 'إلغاء')}</Button>
          <Button onClick={handleSave}>{t('Save', 'حفظ')}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

function humanKind(kind: string, isRTL: boolean): string {
  const map: Record<string, [string, string]> = {
    cron_trigger: ['Schedule', 'جدولة'], if: ['Condition', 'شرط'], for_each: ['Repeat', 'تكرار'],
    sql_select: ['Read data', 'قراءة'], sql_insert: ['Save', 'حفظ'], sql_update: ['Update', 'تحديث'],
    gemini_call: ['AI', 'ذكاء اصطناعي'], adk_call: ['AI', 'ذكاء اصطناعي'], http_call: ['HTTP', 'HTTP'],
    http_request: ['HTTP', 'HTTP'], webhook: ['Webhook', 'ويب هوك'], send_email: ['Email', 'بريد'],
    search_query: ['Search', 'بحث'], rss_poll: ['RSS', 'RSS'], web_scrape: ['Scrape', 'جلب'],
  }
  const m = map[kind]
  if (m) return isRTL ? m[1] : m[0]
  return kind.replace(/[_-]+/g, ' ')
}

StepOptionsDialog.displayName = 'StepOptionsDialog'
