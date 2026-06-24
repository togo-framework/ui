// Shared plugin types for sentra-ui.
// Host products map their API responses to these shapes.

export interface ActivityBucket {
  n: number;
}

export interface PluginCatalogEntry {
  id: string;
  slug: string | null;
  name: string | null;
  name_en: string | null;
  name_ar: string | null;
  description: string | null;
  description_en: string | null;
  description_ar: string | null;
  plugin_type: string | null;
  /** adk_artifact sub-kind: tool | skill | agent | mcp | memory | persona */
  adk_kind?: string | null;
  enabled_globally: boolean | null;
  nav_icon: string | null;
  nav_color: string | null;
  last_active_at: string | null;
  activity_count: number | null;
  activity_series: ActivityBucket[] | null;
  /** Optional override for the counter's label (e.g. "downloads", "stars").
   * When set, it replaces the plugin_type-derived default ("records"). */
  metric_label?: string | null;
  route: string | null;
}

export interface SparklinePoint {
  n: number;
}
