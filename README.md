# @togo-framework/ui

The togo **UI kit** — the prism-style admin + auth component library extracted from the
Fort dashboard. Framework-agnostic (no Next.js / data-fetching coupling), **RTL-ready**,
dark-first, and self-hosting the **Lusail** typeface.

```bash
npm i @togo-framework/ui lucide-react
```

```tsx
import "@togo-framework/ui/styles.css";
import { AdminShell, StatCard, DataTable, Button } from "@togo-framework/ui";
```

Then copy the package's `public/fonts` into your app's served root, and add the package
to your Tailwind v4 content so its utility classes are generated:

```css
/* app.css */ @import "tailwindcss"; @source "../node_modules/@togo-framework/ui/dist";
```

## Components

| Group | Components |
|---|---|
| **Layout** | `AdminShell`, `PageHeader`, `PlatformSwitcher`, `UserMenu`, `LangToggle`, `RealtimeDot`, `Toast` |
| **Data** | `StatCard`, `DataTable`, `DetailGrid` |
| **Charts** | `AreaChart`, `BarChart`, `Gauge` (dependency-free SVG) |
| **Overlays** | `Modal` |
| **Primitives** | `Button`, `Badge`, `StatusPill`, `Card`, `Input`, `SearchInput`, `Select`, `Switch`, `Checkbox`, `Field` |

All components are presentational: pass data and callbacks. RTL works by setting
`dir="rtl"` on a parent — the components use logical CSS (`ps/pe/ms/me/start/end`) and
flip automatically.

## Develop

```bash
npm install
npm run storybook      # interactive component explorer (LTR/RTL toggle in the toolbar)
npm run build          # emit dist/ (ESM + types + styles.css)
```

MIT.
