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

// ── utils ──
export { cn } from "./lib/utils";
