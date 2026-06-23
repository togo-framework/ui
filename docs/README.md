# @togo-framework/ui

The **togo UI kit** — a prism-derived component library: framework-agnostic, **dark-first**,
**RTL-ready**, **bilingual (EN/AR)**, **multi-theme**, **mobile-first**. Every component is
presentational — you pass data and callbacks.

```bash
npm i @togo-framework/ui lucide-react
```

```tsx
import "@togo-framework/ui/styles.css";
import { Button, DataTable, Dialog, StatCard } from "@togo-framework/ui";
```

> 💡 These Markdown docs mirror the interactive **Storybook**. Run `npm run storybook` for
> live, theme-aware previews (dark/light, RTL, viewport) + props tables for every component.

## Guides

- [Installation](./design-system/installation.md)
- [Design tokens](./design-system/tokens.md)
- [Theming (multi-color)](./design-system/theming.md)
- [Dark & Light](./design-system/dark-light.md)
- [RTL](./design-system/rtl.md)
- [Translations (EN/AR)](./design-system/translations.md)
- [Mobile-first](./design-system/mobile-first.md)

## Components

See the [component index](./components/README.md) — every component grouped by category,
with a one-line description and import. Each has its own page with props, variants, and
accessibility/RTL notes.

| Category | Components |
|---|---|
| **Primitives** | Button, Badge, Card, Avatar, Separator, Skeleton, Progress, Accordion, Collapsible, Breadcrumb, Tabs, Toggle, ToggleGroup, ScrollArea, Resizable, AspectRatio, Alert, DirectionalArrow, LinkifyText |
| **Forms** | Input, Textarea, Select, NativeSelect, Checkbox, Switch, RadioGroup, Slider, Label, Form, InputOTP |
| **Overlays** | Dialog, AlertDialog, Sheet, Drawer, Popover, HoverCard, DropdownMenu, ContextMenu, Menubar, Tooltip, Command, Sonner (toast) |
| **Navigation** | NavigationMenu, Pagination, Sidebar, DynamicIcon |
| **Data** | DataTable, CardGrid, Table, StatCard |
| **Charts** | MiniBarChart, Chart |
| **Layout** | AppSidebar, AppPageShell, PageHeader, ViewToggle, RouteProgress |
| **Auth** | AuthCard, AuthFlow, LoginForm, ForgotForm, ResetForm, TwoFAForm, LockScreen, OTPBoxGroup, PasswordInput, PasswordStrengthMeter, AuthStepHeader, AuthErrorAlert |
| **Status** | StatusBadge, EmptyState, DataState, ServiceUnavailable, SessionExpired |
| **Theme / i18n** | BrandingProvider, LanguageProvider |

## License

MIT.
