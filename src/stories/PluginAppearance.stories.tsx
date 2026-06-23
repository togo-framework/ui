import type { Meta, StoryObj } from '@storybook/react'
import { PluginAppearanceSection } from '../components/plugin-detail'

const meta: Meta<typeof PluginAppearanceSection> = {
  title: "Components/Plugin Appearance",
  component: PluginAppearanceSection,
  parameters: { layout: 'padded' },
}
export default meta

type Story = StoryObj<typeof PluginAppearanceSection>

export const Capability: Story = {
  render: () => (
    <PluginAppearanceSection
      appearance={{ appearance_mode: 'sidebar', nav_order: 2, is_default_page: false, plugin_type: 'capability' }}
      onSave={(changed) => console.log('[Appearance] save', changed)}
      language="en"
    />
  ),
}

export const Source: Story = {
  name: 'Source (capability-only disabled)',
  render: () => (
    <PluginAppearanceSection
      appearance={{ appearance_mode: 'header', nav_order: 5, plugin_type: 'source' }}
      onSave={(changed) => console.log('[Appearance] save', changed)}
      language="en"
    />
  ),
}

export const RTL: Story = {
  render: () => (
    <PluginAppearanceSection
      appearance={{ appearance_mode: 'sidebar', nav_order: 1, plugin_type: 'capability', is_default_page: true }}
      onSave={() => {}}
      language="ar"
    />
  ),
}

export const Saving: Story = {
  render: () => (
    <PluginAppearanceSection appearance={{ appearance_mode: 'sidebar', nav_order: 1 }} onSave={() => {}} isPending language="en" />
  ),
}
