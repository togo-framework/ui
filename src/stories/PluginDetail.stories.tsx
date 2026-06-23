import type { Meta, StoryObj } from '@storybook/react'
import { PluginDetailLayout, WorkflowPipeline } from '../components/plugin-detail'
import { MOCK_TABS, MOCK_PLUGIN, MOCK_ACTIVITY, MOCK_PIPELINE_MODEL } from './_fixtures/plugin'

// The full plugin DETAIL page: hero + tab rail + sub-sidebar + content slot.
const meta: Meta<typeof PluginDetailLayout> = {
  title: "Pages/Plugin Detail",
  component: PluginDetailLayout,
  parameters: {
    layout: 'fullscreen',
    fullBleed: true,
    docs: { story: { inline: false, height: '700px' } },
  },
}
export default meta

type Story = StoryObj<typeof PluginDetailLayout>

const TabContent = ({ language, tab }: { language: 'en' | 'ar'; tab: string }) => {
  if (tab === 'workflow') {
    return <WorkflowPipeline model={MOCK_PIPELINE_MODEL} isRTL={language === 'ar'} />
  }
  return (
    <div className="rounded-lg border border-border bg-card p-6 text-sm text-muted-foreground">
      {language === 'ar' ? `محتوى تبويب «${tab}»` : `Content for the "${tab}" tab.`}
    </div>
  )
}

const Page = ({ language, activeTab }: { language: 'en' | 'ar'; activeTab?: string }) => {
  const tab = activeTab ?? 'workflow'
  return (
    <PluginDetailLayout
      tabs={MOCK_TABS}
      activeTab={tab}
      onTabChange={(key) => console.log('[Layout] tab change →', key)}
      plugin={MOCK_PLUGIN}
      activity={MOCK_ACTIVITY}
      language={language}
    >
      <TabContent language={language} tab={tab} />
    </PluginDetailLayout>
  )
}

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
