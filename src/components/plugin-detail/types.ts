// Plugin-detail shared types for sentra-ui.
// All data flows in through props — no bridge/hook imports.

/** Appearance placement mode for a plugin. */
export type AppearanceMode = 'sidebar' | 'header' | 'sideover' | 'fixed' | 'hidden'

/** Appearance fields passed into PluginAppearanceSection. */
export interface PluginAppearanceFields {
  appearance_mode: AppearanceMode
  nav_order: number
  /** Only relevant for capability plugins. */
  is_default_page?: boolean
  plugin_type?: string | null
}

/** A single workflow step (raw JSONB shape). */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WorkflowStep = Record<string, any>

/** A single workflow source (raw JSONB shape). */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WorkflowSource = Record<string, any>

/** Tab definition for PluginDetailLayout. */
export interface PluginDetailTab {
  key: string
  label_en: string
  label_ar: string
  icon?: React.ElementType
  /**
   * Optional section group label (bilingual). Tabs sharing the same section_en
   * render under one section header in the sub-sidebar (like the mofa-dev
   * reference: "Overview" / "Settings"). Tabs with no section render in an
   * unlabelled leading group. Order of first appearance defines section order.
   */
  section_en?: string
  section_ar?: string
}

/** A pipeline stage for WorkflowPipeline. */
export interface PipelineLane {
  key: string
  label_en: string
  label_ar: string
  cards: PipelineCard[]
}

/** A card inside a pipeline lane. */
export interface PipelineCard {
  id: string
  title_en: string
  title_ar: string
  svc?: string
  isSynthetic?: boolean
  summary: { label: string; value: string }[]
  metrics?: {
    ok_rate: number
    p50_ms: number
    last_error?: string
  }
}

/** Pipeline model passed to WorkflowPipeline. */
export interface PipelineModel {
  stages: PipelineLane[]
  fetchBranches: PipelineCard[]
}

/** Metrics for a step keyed by step ID. */
export interface StepMetrics7d {
  [stepId: string]: {
    runs: number
    errors: number
    avg_duration_ms?: number
  }
}

/** Workflow palette for the Add Item dialog. */
export interface WorkflowPalette {
  svc: Array<{
    slug: string
    name_en: string
    name_ar: string
  }>
}
