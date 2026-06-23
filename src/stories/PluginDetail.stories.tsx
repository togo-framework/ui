import type { Meta, StoryObj } from '@storybook/react'
import { PluginDetailLayout } from '../components/plugin-detail'
import { MOCK_TABS, MOCK_PLUGIN, MOCK_ACTIVITY } from './_fixtures/plugin'

// The full plugin DETAIL page: hero + tab rail + sub-sidebar + content slot.
const meta: Meta<typeof PluginDetailLayout> = {
  title: 'Plugins/Plugin Detail',
  component: PluginDetailLayout,
  parameters: {
    layout: 'fullscreen',
    fullBleed: true,
    docs: { story: { inline: false, height: '700px' } },
  },
}
export default meta

type Story = StoryObj<typeof PluginDetailLayout>

const TabContent = ({ language }: { language: 'en' | 'ar' }) => (
  <div className="space-y-4">
    <h2 className="text-lg font-semibold">{language === 'ar' ? 'محتوى التبويب' : 'Tab Content Area'}</h2>
    <p className="text-muted-foreground text-sm">
      {language === 'ar'
        ? 'يُعرض هنا محتوى التبويب النشط. في التطبيق الفعلي يُعرض هنا WorkflowEditor أو PluginAppearanceSection أو غيرهما.'
        : 'Active tab content renders here. In the real app: WorkflowEditor, PluginAppearanceSection, TestRunPanel, etc.'}
    </p>
    <div className="grid grid-cols-3 gap-4">
      {Array.from({ length: 6 }, (_, i) => (
        <div key={i} className="flex h-20 items-center justify-center rounded-lg border bg-muted/30 text-xs text-muted-foreground">
          {language === 'ar' ? `بطاقة ${i + 1}` : `Card ${i + 1}`}
        </div>
      ))}
    </div>
  </div>
)

const Page = ({ language, activeTab }: { language: 'en' | 'ar'; activeTab?: string }) => (
  <PluginDetailLayout
    tabs={MOCK_TABS}
    activeTab={activeTab ?? 'workflow'}
    onTabChange={(key) => console.log('[Layout] tab change →', key)}
    plugin={MOCK_PLUGIN}
    activity={MOCK_ACTIVITY}
    language={language}
  >
    <TabContent language={language} />
  </PluginDetailLayout>
)

export const LTR: Story = { name: 'LTR (workflow tab)', render: () => <Page language="en" activeTab="workflow" /> }
export const RTL: Story = { name: 'RTL (workflow tab)', render: () => <Page language="ar" activeTab="workflow" /> }
export const CredentialsTab: Story = { name: 'Credentials tab active', render: () => <Page language="en" activeTab="credentials" /> }
export const Loading: Story = {
  name: 'Loading state',
  render: () => (
    <PluginDetailLayout tabs={MOCK_TABS} activeTab="workflow" onTabChange={() => {}} plugin={{}} isLoading language="en">
      <div />
    </PluginDetailLayout>
  ),
}
