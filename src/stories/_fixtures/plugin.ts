// Shared mock data for the Workflow + Plugin-detail stories.
// Plain module (not *.stories.tsx), so Storybook does not pick it up as a story.
import { Workflow, Palette, FileText, Key, Upload, LogOut } from 'lucide-react'
import type { PipelineModel, PluginDetailTab } from '../../components/plugin-detail'
import type { PluginDetailIdentity, PluginActivitySummary } from '../../components/plugin-detail/PluginDetailLayout'
import type { TestRunCallbacks } from '../../components/plugin-detail/TestRunPanel'

export const MOCK_STEPS = [
  { kind: 'cron_trigger', schedule: '15m', min_interval_sec: 840, id: 'step-1' },
  { kind: 'if', condition: '$cron_due', id: 'step-2', then: [
    { kind: 'sql_select', query: 'SELECT id, title FROM public.raw_envelopes WHERE processed = false LIMIT 100', output: 'candidates', id: 'step-3' },
    { kind: 'for_each', over: '$candidates', id: 'step-4', steps: [
      { kind: 'adk_call', prompt_slug: 'alert-classify', model: 'gemini-2.5-flash', target_field: 'classification', id: 'step-5' },
      { kind: 'sql_insert', table: 'public.alerts', columns: ['title', 'severity', 'entity_id'], id: 'step-6' },
    ]},
  ]},
]

export const MOCK_PIPELINE_MODEL: PipelineModel = {
  stages: [
    {
      key: 'fetch', label_en: 'Fetch', label_ar: 'جلب',
      cards: [
        { id: 'card-1', title_en: 'SearxNG Social', title_ar: 'سيركس اجتماعي', svc: 'svc-searxng',
          summary: [{ label: 'language', value: 'ar' }, { label: 'queries', value: '12' }],
          metrics: { ok_rate: 0.94, p50_ms: 320 } },
        { id: 'card-2', title_en: 'Web Crawler', title_ar: 'زاحف الويب', svc: 'direct (HTTP)',
          summary: [{ label: 'url', value: 'https://example.com' }],
          metrics: { ok_rate: 0.45, p50_ms: 1800, last_error: 'timeout after 20s' } },
      ],
    },
    { key: 'parse', label_en: 'Parse', label_ar: 'تحليل',
      cards: [{ id: 'card-3', title_en: 'RSS Poll', title_ar: 'استطلاع RSS', svc: 'direct', summary: [{ label: 'feeds', value: '3' }] }] },
    { key: 'enrich', label_en: 'Enrich', label_ar: 'إثراء', cards: [] },
    { key: 'enhance', label_en: 'Enhance', label_ar: 'تحسين',
      cards: [{ id: 'card-4', title_en: 'AI Enhance', title_ar: 'تحسين ذكي', svc: 'adk', isSynthetic: true, summary: [{ label: 'model', value: 'gemini-2.5-flash' }] }] },
    { key: 'save', label_en: 'Save', label_ar: 'حفظ',
      cards: [{ id: 'card-5', title_en: 'SQL Insert', title_ar: 'إدراج SQL', svc: 'db', summary: [{ label: 'table', value: 'public.raw_envelopes' }] }] },
  ],
  fetchBranches: [],
}

export const MOCK_WORKFLOW_STEPS = [
  { kind: 'search_query', queries: ['breaking news', 'سياسة'], engines: ['google', 'bing'] },
  { kind: 'rss_poll', urls: ['https://feeds.bbci.co.uk/news/rss.xml', 'https://rss.cnn.com/rss/edition.rss'], freshness_hours: 24 },
  { kind: 'sql_insert', table: 'public.raw_envelopes', rows_field: '$envelopes', on_conflict: 'content_hash' },
]

export const MOCK_WORKFLOW_SOURCES = [
  { type: 'searxng_social', language: 'ar', categories: ['news'], max_per_query: 10, enabled: true },
  { type: 'crawler', url: 'https://aljazeera.net', enabled: true },
]

export const MOCK_TABS: PluginDetailTab[] = [
  { key: 'workflow', label_en: 'Workflow', label_ar: 'سير العمل', icon: Workflow },
  { key: 'profile', label_en: 'Profile', label_ar: 'الملف', icon: Palette },
  { key: 'tables', label_en: 'Tables', label_ar: 'الجداول', icon: FileText },
  { key: 'credentials', label_en: 'Credentials', label_ar: 'الاعتمادات', icon: Key },
  { key: 'import-export', label_en: 'Import / Export', label_ar: 'استيراد / تصدير', icon: Upload },
  { key: 'logs', label_en: 'Logs', label_ar: 'السجلات', icon: LogOut },
]

export const MOCK_PLUGIN: PluginDetailIdentity = {
  slug: 'aljazeera-social',
  name_en: 'Al Jazeera Social', name_ar: 'الجزيرة اجتماعي',
  description_en: 'Collects Arabic social content from Al Jazeera and related sources.',
  description_ar: 'يجمع المحتوى الاجتماعي العربي من الجزيرة والمصادر ذات الصلة.',
  plugin_type: 'source', version: '1.4.2', nav_icon: 'lucide:globe', nav_color: '#1a6b3c', enabled_globally: true,
}

export const MOCK_ACTIVITY: PluginActivitySummary = {
  last_active_at: new Date(Date.now() - 8 * 60000).toISOString(),
  activity_count: 14_237,
  activity_series: Array.from({ length: 24 }, (_, i) => ({ n: Math.round(100 + Math.sin(i / 3) * 60 + (i % 5) * 8) })),
}

// Fake SSE runner for the TestRunPanel stories.
export const fakeRunRequest = (_slug: string, _max: number, callbacks: TestRunCallbacks): AbortController => {
  const ctrl = new AbortController()
  const steps = [
    { name: 'authenticate', status: 'ok', duration_ms: 42 },
    { name: 'searxng_query', status: 'ok', duration_ms: 312, count: 18, detail: '18 results from google,bing' },
    { name: 'rss_poll', status: 'ok', duration_ms: 88, count: 7 },
    { name: 'dedup', status: 'ok', duration_ms: 15, detail: '3 duplicates removed' },
    { name: 'sql_insert', status: 'ok', duration_ms: 22, count: 5 },
  ]
  let i = 0
  const interval = setInterval(() => {
    if (ctrl.signal.aborted || i >= steps.length) {
      clearInterval(interval)
      if (!ctrl.signal.aborted) {
        callbacks.onComplete({
          envelopes_saved: 5,
          saved: [
            { title: 'اجتماع قمة الجامعة العربية', url: 'https://example.com/article-1', language: 'ar', content_hash: 'abc123def456', content_ar: 'تناول اجتماع قمة الجامعة العربية ملفات إقليمية عدة...', published_at: new Date().toISOString() },
            { title: 'Regional Security Summit Concludes', url: 'https://example.com/article-2', language: 'en', content_hash: 'fed654cba321', content_en: 'Leaders from across the region gathered to discuss...', published_at: new Date(Date.now() - 3600000).toISOString() },
          ],
        })
      }
      return
    }
    callbacks.onStep(steps[i] as Parameters<typeof callbacks.onStep>[0])
    i++
  }, 600)
  return ctrl
}
