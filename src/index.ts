// @togo-framework/ui — public API.
// Primary component set ported from the prism design system (RTL-ready, dark/light,
// multi-theme via BrandingProvider, bilingual EN/AR, mobile-first). Import the
// design system once: `import "@togo-framework/ui/styles.css"`.

// ── Primitives (shadcn/ui: Button, Badge, Card, Input, Label, Checkbox, Switch,
//    Select, Dialog, Sheet, Drawer, DropdownMenu, Tabs, Tooltip, Popover, Accordion,
//    Table, Form, Calendar, Command, Avatar, Separator, Skeleton, Progress, …) ──
export * from "./shadcn";

// ── Status / page chrome ──
export * from "./components/status";

// ── Data ──
export * from "./components/data-table";

// ── Charts ──
export * from "./components/charts/MiniBarChart";

// ── Auth flow ──
export * from "./components/auth";

// ── Layout ──
export * from "./components/layout/AppSidebar";
export * from "./components/layout/AppPageShell";
export * from "./components/layout/ViewToggle";
export * from "./components/layout/RouteProgress";

// ── Nav ──
export { DynamicIcon } from "./components/nav/DynamicIcon";

// ── profile ──
export { ProfileView } from "./components/profile/ProfileView";
export type { ProfileViewProps, ProfileSession } from "./components/profile/ProfileView";

// ── pickers (color + icon) ──
export { ColorPicker } from "./components/pickers/ColorPicker";
export type { ColorPickerProps } from "./components/pickers/ColorPicker";
export { IconPicker } from "./components/pickers/IconPicker";
export type { IconPickerProps } from "./components/pickers/IconPicker";

// ── map (OpenStreetMap via leaflet + prism map chrome) ──
export { MapView } from "./components/map/MapView";
export type { MapViewProps, MapMarker } from "./components/map/MapView";
export * from "./components/map";

// ── network / connections ──
export { NetworkGraph } from "./components/entity/NetworkGraph";
export type { NetworkGraphProps, GraphNode, GraphLink } from "./components/entity/NetworkGraph";
export { EntityNetworkGraph } from "./components/entity/EntityNetworkGraph";
export type { EntityNetworkGraphProps } from "./components/entity/EntityNetworkGraph";

// ── plugins (cards + pages) ──
export * from "./components/plugin";

// ── plugin detail + workflow manager (steps pipeline/editor) ──
export * from "./components/plugin-detail";

// ── logs viewer (raw / live-tail) ──
export * from "./components/logs";

// ── error tracking (Sentry-style: issues list + detail + page) ──
export * from "./components/errors";

// ── realtime loading ──
export { default as SentraLoading } from "./components/ui/sentra-loading";
export { ContextualSkeleton } from "./components/ui/contextual-skeleton";
export { SectionSkeleton } from "./components/ui/section-skeleton";

// ── Theme (multi-theme color system) ──
export * from "./theme";

// ── i18n (translations) ──
export {
  LanguageProvider,
  useT,
  useLanguage,
  useTranslation,
  LANG_COOKIE_NAME,
} from "./i18n/LanguageProvider";
export type { LanguageContextValue, LanguageProviderProps } from "./i18n/LanguageProvider";

// ── copilot artifacts (presentational renderers) ──
export * from "./components/copilot/artifacts";
export { SeverityChip } from "./components/intel/SeverityChip";
export { default as MarkdownContent } from "./components/chat/MarkdownContent";

// ── feedback (reporter surface) ──
export * from "./components/feedback";

// ── dynamic editable sections ──
export { DynamicSection, SectionBoard } from "./components/sections/SectionBoard";
export type { DynamicSectionProps, SectionBoardProps, SectionModel, ModelOption } from "./components/sections/SectionBoard";

// ── markdown (renderer + editor) ──
export * from "./components/markdown";

// ── utils ──
export { cn } from "./lib/utils";

// ── copilot (chat dock + streaming; host injects a CopilotClient) ──
export { CopilotProvider, useCopilot } from "./components/copilot/CopilotProvider";
export { default as UnifiedCopilotDock } from "./components/copilot/UnifiedCopilotDock";
export { CopilotLauncher } from "./components/copilot/CopilotLauncher";
export { default as ChatThread } from "./components/copilot/ChatThread";
export { default as StreamingMessage } from "./components/copilot/StreamingMessage";
export { default as ArtifactViewer } from "./components/copilot/ArtifactViewer";
export { default as AgentSteps } from "./components/copilot/AgentSteps";
export type { CopilotClient, CopilotRequest, CopilotEvent } from "./components/copilot/client";
