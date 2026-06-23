import type { Meta, StoryObj } from '@storybook/react'
import {
  WorkflowStepNode,
  WorkflowPipeline,
  WorkflowEditor,
  PluginAppearanceSection,
  TestRunPanel,
  PluginDetailLayout,
} from '../components/plugin-detail'
import type {
  PipelineModel,
  PluginDetailTab,
} from '../components/plugin-detail'
import type { PluginDetailIdentity, PluginActivitySummary } from '../components/plugin-detail/PluginDetailLayout'
import type { TestRunCallbacks } from '../components/plugin-detail/TestRunPanel'
import { Workflow, Palette, FileText, Key, Upload, LogOut } from 'lucide-react'

// ─── Mock data ────────────────────────────────────────────────────────────────

const MOCK_STEPS = [
  { kind: 'cron_trigger', schedule: '15m', min_interval_sec: 840, id: 'step-1' },
  { kind: 'if', condition: '$cron_due', id: 'step-2', then: [
    { kind: 'sql_select', query: 'SELECT id, title FROM public.raw_envelopes WHERE processed = false LIMIT 100', output: 'candidates', id: 'step-3' },
    { kind: 'for_each', over: '$candidates', id: 'step-4', steps: [
      { kind: 'adk_call', prompt_slug: 'alert-classify', model: 'gemini-2.5-flash', target_field: 'classification', id: 'step-5' },
      { kind: 'sql_insert', table: 'public.alerts', columns: ['title', 'severity', 'entity_id'], id: 'step-6' },
    ]},
  ]},
]

const MOCK_PIPELINE_MODEL: PipelineModel = {
  stages: [
    {
      key: 'fetch',
      label_en: 'Fetch',
      label_ar: 'جلب',
      cards: [
        {
          id: 'card-1',
          title_en: 'SearxNG Social',
          title_ar: 'سيركس اجتماعي',
          svc: 'svc-searxng',
          summary: [
            { label: 'language', value: 'ar' },
            { label: 'queries', value: '12' },
          ],
          metrics: { ok_rate: 0.94, p50_ms: 320 },
        },
        {
          id: 'card-2',
          title_en: 'Web Crawler',
          title_ar: 'زاحف الويب',
          svc: 'direct (HTTP)',
          summary: [{ label: 'url', value: 'https://example.com' }],
          metrics: { ok_rate: 0.45, p50_ms: 1800, last_error: 'timeout after 20s' },
        },
      ],
    },
    {
      key: 'parse',
      label_en: 'Parse',
      label_ar: 'تحليل',
      cards: [
        {
          id: 'card-3',
          title_en: 'RSS Poll',
          title_ar: 'استطلاع RSS',
          svc: 'direct',
          summary: [{ label: 'feeds', value: '3' }],
        },
      ],
    },
    {
      key: 'enrich',
      label_en: 'Enrich',
      label_ar: 'إثراء',
      cards: [],
    },
    {
      key: 'enhance',
      label_en: 'Enhance',
      label_ar: 'تحسين',
      cards: [
        {
          id: 'card-4',
          title_en: 'AI Enhance',
          title_ar: 'تحسين ذكي',
          svc: 'adk',
          isSynthetic: true,
          summary: [{ label: 'model', value: 'gemini-2.5-flash' }],
        },
      ],
    },
    {
      key: 'save',
      label_en: 'Save',
      label_ar: 'حفظ',
      cards: [
        {
          id: 'card-5',
          title_en: 'SQL Insert',
          title_ar: 'إدراج SQL',
          svc: 'db',
          summary: [{ label: 'table', value: 'public.raw_envelopes' }],
        },
      ],
    },
  ],
  fetchBranches: [],
}

const MOCK_WORKFLOW_STEPS = [
  { kind: 'search_query', queries: ['breaking news', 'سياسة'], engines: ['google', 'bing'] },
  { kind: 'rss_poll', urls: ['https://feeds.bbci.co.uk/news/rss.xml', 'https://rss.cnn.com/rss/edition.rss'], freshness_hours: 24 },
  { kind: 'sql_insert', table: 'public.raw_envelopes', rows_field: '$envelopes', on_conflict: 'content_hash' },
]

const MOCK_WORKFLOW_SOURCES = [
  { type: 'searxng_social', language: 'ar', categories: ['news'], max_per_query: 10, enabled: true },
  { type: 'crawler', url: 'https://aljazeera.net', enabled: true },
]

const MOCK_TABS: PluginDetailTab[] = [
  { key: 'workflow', label_en: 'Workflow', label_ar: 'سير العمل', icon: Workflow },
  { key: 'profile', label_en: 'Profile', label_ar: 'الملف', icon: Palette },
  { key: 'tables', label_en: 'Tables', label_ar: 'الجداول', icon: FileText },
  { key: 'credentials', label_en: 'Credentials', label_ar: 'الاعتمادات', icon: Key },
  { key: 'import-export', label_en: 'Import / Export', label_ar: 'استيراد / تصدير', icon: Upload },
  { key: 'logs', label_en: 'Logs', label_ar: 'السجلات', icon: LogOut },
]

const MOCK_PLUGIN: PluginDetailIdentity = {
  slug: 'aljazeera-social',
  name_en: 'Al Jazeera Social',
  name_ar: 'الجزيرة اجتماعي',
  description_en: 'Collects Arabic social content from Al Jazeera and related sources.',
  description_ar: 'يجمع المحتوى الاجتماعي العربي من الجزيرة والمصادر ذات الصلة.',
  plugin_type: 'source',
  version: '1.4.2',
  nav_icon: 'lucide:globe',
  nav_color: '#1a6b3c',
  enabled_globally: true,
}

const MOCK_ACTIVITY: PluginActivitySummary = {
  last_active_at: new Date(Date.now() - 8 * 60000).toISOString(),
  activity_count: 14_237,
  activity_series: Array.from({ length: 24 }, (_, i) => ({ n: Math.round(100 + Math.sin(i / 3) * 60 + Math.random() * 40) })),
}

// ─── Fake SSE runner for Storybook ────────────────────────────────────────────

const fakeRunRequest = (
  _slug: string,
  _max: number,
  callbacks: TestRunCallbacks,
): AbortController => {
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
            {
              title: 'اجتماع قمة الجامعة العربية',
              url: 'https://example.com/article-1',
              language: 'ar',
              content_hash: 'abc123def456',
              content_ar: 'تناول اجتماع قمة الجامعة العربية ملفات إقليمية عدة...',
              published_at: new Date().toISOString(),
            },
            {
              title: 'Regional Security Summit Concludes',
              url: 'https://example.com/article-2',
              language: 'en',
              content_hash: 'fed654cba321',
              content_en: 'Leaders from across the region gathered to discuss...',
              published_at: new Date(Date.now() - 3600000).toISOString(),
            },
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

// ─── WorkflowStepNode ─────────────────────────────────────────────────────────

const WorkflowStepNodeMeta: Meta<typeof WorkflowStepNode> = {
  title: "Workflow/WorkflowStepNode",
  component: WorkflowStepNode,
  parameters: { layout: 'padded' },
}
export default WorkflowStepNodeMeta

export const CronTrigger: StoryObj<typeof WorkflowStepNode> = {
  args: {
    step: { kind: 'cron_trigger', schedule: '15m', min_interval_sec: 840, id: 'cron-1' },
    path: [0],
    depth: 0,
    isRTL: false,
  },
}

export const IfCondition: StoryObj<typeof WorkflowStepNode> = {
  args: {
    step: MOCK_STEPS[1],
    path: [1],
    depth: 0,
    isRTL: false,
  },
}

export const SqlSelect: StoryObj<typeof WorkflowStepNode> = {
  args: {
    step: {
      kind: 'sql_select',
      query: 'SELECT id, title, content_en FROM public.raw_envelopes WHERE processed = false LIMIT 100',
      output: 'candidates',
      id: 'sql-1',
    },
    path: [2],
    depth: 1,
    isRTL: false,
    metrics: { 'sql-1': { runs: 142, errors: 3 } },
  },
}

export const RTLMode: StoryObj<typeof WorkflowStepNode> = {
  args: {
    step: { kind: 'adk_call', prompt_slug: 'alert-classify', model: 'gemini-2.5-flash', target_field: 'classification', id: 'adk-1' },
    path: [0],
    depth: 0,
    isRTL: true,
  },
}

// ─── WorkflowPipeline ─────────────────────────────────────────────────────────

export const PipelineLTR: StoryObj<typeof WorkflowPipeline> = {
  name: 'WorkflowPipeline / LTR',
  render: () => <WorkflowPipeline model={MOCK_PIPELINE_MODEL} isRTL={false} />,
}

export const PipelineRTL: StoryObj<typeof WorkflowPipeline> = {
  name: 'WorkflowPipeline / RTL',
  render: () => <WorkflowPipeline model={MOCK_PIPELINE_MODEL} isRTL={true} />,
}

export const PipelineEmpty: StoryObj<typeof WorkflowPipeline> = {
  name: 'WorkflowPipeline / Empty',
  render: () => (
    <WorkflowPipeline
      model={{ stages: MOCK_PIPELINE_MODEL.stages.map((s) => ({ ...s, cards: [] })), fetchBranches: [] }}
      isRTL={false}
    />
  ),
}

// ─── WorkflowEditor ───────────────────────────────────────────────────────────

export const EditorLTR: StoryObj<typeof WorkflowEditor> = {
  name: 'WorkflowEditor / LTR',
  render: () => (
    <WorkflowEditor
      workflowSteps={MOCK_WORKFLOW_STEPS}
      workflowSources={MOCK_WORKFLOW_SOURCES}
      pluginSlug="aljazeera-social"
      language="en"
      onSave={async (steps, sources) => {
        await new Promise((r) => setTimeout(r, 800))
        console.log('[WorkflowEditor] saved', { steps, sources })
      }}
    />
  ),
}

export const EditorRTL: StoryObj<typeof WorkflowEditor> = {
  name: 'WorkflowEditor / RTL',
  render: () => (
    <WorkflowEditor
      workflowSteps={MOCK_WORKFLOW_STEPS}
      workflowSources={MOCK_WORKFLOW_SOURCES}
      pluginSlug="aljazeera-social"
      language="ar"
      onSave={async () => {
        await new Promise((r) => setTimeout(r, 800))
      }}
    />
  ),
}

export const EditorEmpty: StoryObj<typeof WorkflowEditor> = {
  name: 'WorkflowEditor / Empty',
  render: () => (
    <WorkflowEditor
      workflowSteps={[]}
      workflowSources={[]}
      pluginSlug="new-plugin"
      language="en"
      onSave={async () => {}}
    />
  ),
}

// ─── PluginAppearanceSection ──────────────────────────────────────────────────

export const AppearanceCapability: StoryObj<typeof PluginAppearanceSection> = {
  name: 'PluginAppearanceSection / Capability',
  render: () => (
    <PluginAppearanceSection
      appearance={{ appearance_mode: 'sidebar', nav_order: 2, is_default_page: false, plugin_type: 'capability' }}
      onSave={(changed) => console.log('[Appearance] save', changed)}
      language="en"
    />
  ),
}

export const AppearanceSource: StoryObj<typeof PluginAppearanceSection> = {
  name: 'PluginAppearanceSection / Source (capability-only disabled)',
  render: () => (
    <PluginAppearanceSection
      appearance={{ appearance_mode: 'header', nav_order: 5, plugin_type: 'source' }}
      onSave={(changed) => console.log('[Appearance] save', changed)}
      language="en"
    />
  ),
}

export const AppearanceRTL: StoryObj<typeof PluginAppearanceSection> = {
  name: 'PluginAppearanceSection / RTL',
  render: () => (
    <PluginAppearanceSection
      appearance={{ appearance_mode: 'sidebar', nav_order: 1, plugin_type: 'capability', is_default_page: true }}
      onSave={() => {}}
      language="ar"
    />
  ),
}

export const AppearanceSaving: StoryObj<typeof PluginAppearanceSection> = {
  name: 'PluginAppearanceSection / Saving',
  render: () => (
    <PluginAppearanceSection
      appearance={{ appearance_mode: 'sidebar', nav_order: 1 }}
      onSave={() => {}}
      isPending={true}
      language="en"
    />
  ),
}

// ─── TestRunPanel ─────────────────────────────────────────────────────────────

export const TestRunLTR: StoryObj<typeof TestRunPanel> = {
  name: 'TestRunPanel / LTR',
  render: () => (
    <TestRunPanel
      slug="aljazeera-social"
      language="en"
      onRunRequest={fakeRunRequest}
    />
  ),
}

export const TestRunRTL: StoryObj<typeof TestRunPanel> = {
  name: 'TestRunPanel / RTL',
  render: () => (
    <TestRunPanel
      slug="aljazeera-social"
      language="ar"
      onRunRequest={fakeRunRequest}
    />
  ),
}

export const TestRunInline: StoryObj<typeof TestRunPanel> = {
  name: 'TestRunPanel / Inline',
  render: () => (
    <div className="border rounded-lg p-4">
      <TestRunPanel
        slug="aljazeera-social"
        language="en"
        inline
        onRunRequest={fakeRunRequest}
      />
    </div>
  ),
}

// ─── PluginDetailLayout ───────────────────────────────────────────────────────

const LayoutTemplate = ({ language, activeTab }: { language: 'en' | 'ar'; activeTab?: string }) => (
  <PluginDetailLayout
    tabs={MOCK_TABS}
    activeTab={activeTab ?? 'workflow'}
    onTabChange={(key) => console.log('[Layout] tab change →', key)}
    plugin={MOCK_PLUGIN}
    activity={MOCK_ACTIVITY}
    language={language}
  >
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">{language === 'ar' ? 'محتوى التبويب' : 'Tab Content Area'}</h2>
      <p className="text-muted-foreground text-sm">
        {language === 'ar'
          ? 'يُعرض هنا محتوى التبويب النشط. في التطبيق الفعلي يُعرض هنا WorkflowEditor أو PluginAppearanceSection أو غيرهما.'
          : 'Active tab content renders here. In the real app: WorkflowEditor, PluginAppearanceSection, TestRunPanel, etc.'}
      </p>
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i} className="h-20 rounded-lg border bg-muted/30 flex items-center justify-center text-xs text-muted-foreground">
            {language === 'ar' ? `بطاقة ${i + 1}` : `Card ${i + 1}`}
          </div>
        ))}
      </div>
    </div>
  </PluginDetailLayout>
)

export const LayoutLTR: StoryObj = {
  name: 'PluginDetailLayout / LTR (workflow tab)',
  render: () => <LayoutTemplate language="en" activeTab="workflow" />,
}

export const LayoutRTL: StoryObj = {
  name: 'PluginDetailLayout / RTL (workflow tab)',
  render: () => <LayoutTemplate language="ar" activeTab="workflow" />,
}

export const LayoutCredentialsTab: StoryObj = {
  name: 'PluginDetailLayout / Credentials tab active',
  render: () => <LayoutTemplate language="en" activeTab="credentials" />,
}

export const LayoutLoading: StoryObj = {
  name: 'PluginDetailLayout / Loading state',
  render: () => (
    <PluginDetailLayout
      tabs={MOCK_TABS}
      activeTab="workflow"
      onTabChange={() => {}}
      plugin={{}}
      isLoading
      language="en"
    >
      <div />
    </PluginDetailLayout>
  ),
}
