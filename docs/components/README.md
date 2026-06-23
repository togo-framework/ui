# Components

Every component is imported from `@togo-framework/ui`. Each has a dedicated page (props,
variants, accessibility + RTL notes) and a live, theme-aware story in Storybook.

```tsx
import { Button, Dialog, DataTable } from "@togo-framework/ui";
```

## Primitives

| Component | Description |
|---|---|
| [Button](./Button.md) | Actions. Variants: default/secondary/outline/ghost/destructive/link; sizes sm/md/lg/icon. |
| [Badge](./Badge.md) | Small status/label pill. |
| [Card](./Card.md) | Surface container (Header/Content/Footer/Title/Description). |
| [Avatar](./Avatar.md) | User image with fallback initials. |
| [Separator](./Separator.md) | Horizontal/vertical divider. |
| [Skeleton](./Skeleton.md) | Loading placeholder. |
| [Progress](./Progress.md) | Determinate progress bar. |
| [Accordion](./Accordion.md) | Collapsible sections. |
| [Collapsible](./Collapsible.md) | Single show/hide region. |
| [Breadcrumb](./Breadcrumb.md) | Hierarchical path nav. |
| [Tabs](./Tabs.md) | Tabbed panels. |
| [Toggle](./Toggle.md) / [ToggleGroup](./ToggleGroup.md) | Pressable toggle(s). |
| [ScrollArea](./ScrollArea.md) | Styled scroll container. |
| [Resizable](./Resizable.md) | Resizable split panels. |
| [AspectRatio](./AspectRatio.md) | Fixed-ratio box. |
| [Alert](./Alert.md) | Inline callout (info/destructive). |
| [DirectionalArrow](./DirectionalArrow.md) | RTL-aware arrow icon. |

## Forms

| Component | Description |
|---|---|
| [Input](./Input.md) | Text field. |
| [Textarea](./Textarea.md) | Multi-line field. |
| [Select](./Select.md) | Styled dropdown select. |
| [NativeSelect](./NativeSelect.md) | Native `<select>` styled. |
| [Checkbox](./Checkbox.md) | Boolean checkbox. |
| [Switch](./Switch.md) | On/off toggle. |
| [RadioGroup](./RadioGroup.md) | Single-choice radios. |
| [Slider](./Slider.md) | Range slider. |
| [Label](./Label.md) | Form label. |
| [Form](./Form.md) | react-hook-form field wrappers. |
| [InputOTP](./InputOTP.md) | One-time-code input. |

## Overlays

| Component | Description |
|---|---|
| [Dialog](./Dialog.md) | Modal dialog. |
| [AlertDialog](./AlertDialog.md) | Confirm/destructive modal. |
| [Sheet](./Sheet.md) | Side panel. |
| [Drawer](./Drawer.md) | Bottom sheet (mobile-friendly). |
| [Popover](./Popover.md) | Anchored floating panel. |
| [HoverCard](./HoverCard.md) | Hover-triggered card. |
| [DropdownMenu](./DropdownMenu.md) | Action menu. |
| [ContextMenu](./ContextMenu.md) | Right-click menu. |
| [Menubar](./Menubar.md) | App menubar. |
| [Tooltip](./Tooltip.md) | Hover hint. |
| [Command](./Command.md) | Command palette (cmdk). |
| [Sonner](./Sonner.md) | Toast notifications. |

## Navigation

| Component | Description |
|---|---|
| [NavigationMenu](./NavigationMenu.md) | Top navigation. |
| [Pagination](./Pagination.md) | Page controls. |
| [Sidebar](./Sidebar.md) | Collapsible app sidebar (off-canvas on mobile). |
| [DynamicIcon](./DynamicIcon.md) | Icon by name. |

## Data

| Component | Description |
|---|---|
| [DataTable](./DataTable.md) | TanStack table: sort/filter/search/pagination/selection/CSV, RTL + bilingual. |
| [CardGrid](./CardGrid.md) | Responsive card grid. |
| [Table](./Table.md) | Low-level table primitives. |
| [StatCard](./StatCard.md) | Metric tile. |

## Charts

| Component | Description |
|---|---|
| [MiniBarChart](./MiniBarChart.md) | Compact bar chart. |
| [Chart](./Chart.md) | recharts container + tooltip. |

## Layout

| Component | Description |
|---|---|
| [AppSidebar](./AppSidebar.md) | Full app sidebar shell. |
| [AppPageShell](./AppPageShell.md) | Page wrapper with header slots. |
| [PageHeader](./PageHeader.md) | Title + count + actions. |
| [ViewToggle](./ViewToggle.md) | List/grid switch. |
| [RouteProgress](./RouteProgress.md) | Top navigation progress bar. |

## Auth

| Component | Description |
|---|---|
| [AuthCard](./AuthCard.md) | Split-screen auth shell (brand panel + form). |
| [AuthFlow](./AuthFlow.md) | Orchestrated login → 2FA → reset flow. |
| [LoginForm](./LoginForm.md) · [ForgotForm](./ForgotForm.md) · [ResetForm](./ResetForm.md) · [TwoFAForm](./TwoFAForm.md) | Auth forms. |
| [LockScreen](./LockScreen.md) | Locked-session screen. |
| [OTPBoxGroup](./OTPBoxGroup.md) | OTP digit boxes. |
| [PasswordInput](./PasswordInput.md) · [PasswordStrengthMeter](./PasswordStrengthMeter.md) | Password field + strength. |

## Status

| Component | Description |
|---|---|
| [StatusBadge](./StatusBadge.md) | Tone-colored status pill. |
| [EmptyState](./EmptyState.md) | No-data placeholder. |
| [DataState](./DataState.md) | Loading/error/empty wrapper. |
| [ServiceUnavailable](./ServiceUnavailable.md) · [SessionExpired](./SessionExpired.md) | Error states. |

## Pickers

| Component | Description |
|---|---|
| [ColorPicker](./ColorPicker.md) | Swatch + popover with color wheel, hex field, presets. |
| [IconPicker](./IconPicker.md) | Searchable grid of lucide icons. |

## Map

| Component | Description |
|---|---|
| [MapView](./MapView.md) | Real OpenStreetMap via leaflet (SSR-safe). |
| [MapPanel](./MapPanel.md) | Map chrome (legend + layers) around a canvas. |
| [MapLegend](./MapLegend.md) · [MapLayersPanel](./MapLayersPanel.md) | Legend + layer toggles. |

## Network

| Component | Description |
|---|---|
| [NetworkGraph](./NetworkGraph.md) | Dependency-free SVG force-directed graph. |
| [EntityNetworkGraph](./EntityNetworkGraph.md) | Connection graph shell (`renderGraph` prop). |

## Workflow

| Component | Description |
|---|---|
| [WorkflowPipeline](./WorkflowPipeline.md) | Read-only pipeline of step lanes (workflow manager). |
| [WorkflowEditor](./WorkflowEditor.md) | Drag-and-drop step editor (dnd-kit). |
| [WorkflowStepNode](./WorkflowStepNode.md) | Single workflow step node (human-readable). |
| [NestedStepsEditor](./NestedStepsEditor.md) | Multi-level drag-and-drop step tree editor. |
| [StepOptionsDialog](./StepOptionsDialog.md) | Type-specific per-step options modal. |

## Plugins

| Component | Description |
|---|---|
| [PluginCard](./PluginCard.md) | Marketplace plugin card. |
| [PluginPageHeader](./PluginPageHeader.md) · [PluginSectionCard](./PluginSectionCard.md) | Plugin page header + section card. |
| [PluginSparkline](./PluginSparkline.md) · [SourceBadge](./SourceBadge.md) | Activity sparkline + source badge. |
| [PluginDetailLayout](./PluginDetailLayout.md) · [PluginAppearanceSection](./PluginAppearanceSection.md) · [TestRunPanel](./TestRunPanel.md) | Plugin detail page parts. |

## Logs & Error Tracking

| Component | Description |
|---|---|
| [LogsView](./LogsView.md) | Realtime/streamed, filterable raw log viewer. |
| [ErrorTrackingPage](./ErrorTrackingPage.md) | Sentry-style error page (issues list + detail, master/detail). |
| [IssuesList](./IssuesList.md) | Sentry issues table: level, title/culprit, frequency, events/users, assignee. |
| [IssueDetail](./IssueDetail.md) | Error detail: stack trace (source context), breadcrumbs, tags, frequency chart. |

## Feedback / Loading

| Component | Description |
|---|---|
| [SentraLoading](./SentraLoading.md) | Branded loading indicator. |
| [ContextualSkeleton](./ContextualSkeleton.md) · [SectionSkeleton](./SectionSkeleton.md) | Realtime-loading skeletons. |

## Theme & i18n

| Provider | Description |
|---|---|
| [BrandingProvider](./BrandingProvider.md) | Multi-theme brand color at runtime. |
| [LanguageProvider](./LanguageProvider.md) | App-wide EN/AR language + `useT`. |
