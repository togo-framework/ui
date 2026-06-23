# RouteProgress

A thin top-of-page progress bar that animates on route changes (YouTube/GitHub-style).

## Import
```tsx
import { RouteProgress } from "@togo-framework/ui";
```

## Usage
```tsx
// in your root layout, fed by the current path
<RouteProgress pathname={pathname} />
```

## Props
| Prop | Type | Default | Description |
|---|---|---|---|
| `pathname` | `string` | — | Current route; a change triggers the animation. |
| `height` | `number` | `2` | Bar thickness in px. |

## Accessibility, RTL & theming
- `pointer-events: none`, fixed at the top via `inset-inline-start` (RTL-safe).
- Uses the brand/primary token color; visible in dark & light.

## Do / Don't
- ✅ Render once at the app root.
- ❌ Don't gate content on it — it's a visual hint only.
