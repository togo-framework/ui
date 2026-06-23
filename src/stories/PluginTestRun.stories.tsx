import type { Meta, StoryObj } from '@storybook/react'
import { TestRunPanel } from '../components/plugin-detail'
import { fakeRunRequest } from './_fixtures/plugin'

const meta: Meta<typeof TestRunPanel> = {
  title: 'Plugins/Test Run',
  component: TestRunPanel,
  parameters: { layout: 'padded' },
}
export default meta

type Story = StoryObj<typeof TestRunPanel>

export const LTR: Story = {
  render: () => <TestRunPanel slug="aljazeera-social" language="en" onRunRequest={fakeRunRequest} />,
}

export const RTL: Story = {
  render: () => <TestRunPanel slug="aljazeera-social" language="ar" onRunRequest={fakeRunRequest} />,
}

export const Inline: Story = {
  render: () => (
    <div className="rounded-lg border p-4">
      <TestRunPanel slug="aljazeera-social" language="en" inline onRunRequest={fakeRunRequest} />
    </div>
  ),
}
