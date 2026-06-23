import type { Meta, StoryObj } from '@storybook/react'
import { WorkflowStepNode, WorkflowPipeline, WorkflowEditor } from '../components/plugin-detail'
import {
  MOCK_STEPS, MOCK_PIPELINE_MODEL, MOCK_WORKFLOW_STEPS, MOCK_WORKFLOW_SOURCES,
} from './_fixtures/plugin'

// Workflow manager — step nodes, the read-only pipeline, and the drag-and-drop editor.
const meta: Meta<typeof WorkflowStepNode> = {
  title: 'Workflow/Workflow',
  component: WorkflowStepNode,
  parameters: { layout: 'padded' },
}
export default meta

// ─── WorkflowStepNode ─────────────────────────────────────────────────────────

export const CronTrigger: StoryObj<typeof WorkflowStepNode> = {
  args: { step: { kind: 'cron_trigger', schedule: '15m', min_interval_sec: 840, id: 'cron-1' }, path: [0], depth: 0, isRTL: false },
}

export const IfCondition: StoryObj<typeof WorkflowStepNode> = {
  args: { step: MOCK_STEPS[1], path: [1], depth: 0, isRTL: false },
}

export const SqlSelect: StoryObj<typeof WorkflowStepNode> = {
  args: {
    step: { kind: 'sql_select', query: 'SELECT id, title, content_en FROM public.raw_envelopes WHERE processed = false LIMIT 100', output: 'candidates', id: 'sql-1' },
    path: [2], depth: 1, isRTL: false, metrics: { 'sql-1': { runs: 142, errors: 3 } },
  },
}

export const RTLMode: StoryObj<typeof WorkflowStepNode> = {
  args: { step: { kind: 'adk_call', prompt_slug: 'alert-classify', model: 'gemini-2.5-flash', target_field: 'classification', id: 'adk-1' }, path: [0], depth: 0, isRTL: true },
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
  render: () => <WorkflowPipeline model={{ stages: MOCK_PIPELINE_MODEL.stages.map((s) => ({ ...s, cards: [] })), fetchBranches: [] }} isRTL={false} />,
}

// ─── WorkflowEditor (drag-and-drop step editor) ───────────────────────────────

export const EditorLTR: StoryObj<typeof WorkflowEditor> = {
  name: 'WorkflowEditor / LTR',
  parameters: { docs: { story: { inline: false, height: '640px' } } },
  render: () => (
    <WorkflowEditor
      workflowSteps={MOCK_WORKFLOW_STEPS}
      workflowSources={MOCK_WORKFLOW_SOURCES}
      pluginSlug="aljazeera-social"
      language="en"
      onSave={async (steps, sources) => { await new Promise((r) => setTimeout(r, 800)); console.log('[WorkflowEditor] saved', { steps, sources }) }}
    />
  ),
}

export const EditorRTL: StoryObj<typeof WorkflowEditor> = {
  name: 'WorkflowEditor / RTL',
  parameters: { docs: { story: { inline: false, height: '640px' } } },
  render: () => (
    <WorkflowEditor
      workflowSteps={MOCK_WORKFLOW_STEPS}
      workflowSources={MOCK_WORKFLOW_SOURCES}
      pluginSlug="aljazeera-social"
      language="ar"
      onSave={async () => { await new Promise((r) => setTimeout(r, 800)) }}
    />
  ),
}

export const EditorEmpty: StoryObj<typeof WorkflowEditor> = {
  name: 'WorkflowEditor / Empty',
  parameters: { docs: { story: { inline: false, height: '480px' } } },
  render: () => <WorkflowEditor workflowSteps={[]} workflowSources={[]} pluginSlug="new-plugin" language="en" onSave={async () => {}} />,
}
