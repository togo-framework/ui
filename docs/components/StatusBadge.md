# StatusBadge

A small tone-colored status pill. Presentational — map your domain status to a `tone`.

## Import
```tsx
import { StatusBadge, type StatusBadgeProps } from "@togo-framework/ui";
```

## Usage
```tsx
<StatusBadge tone="success">Active</StatusBadge>
<StatusBadge tone="danger">Blocked</StatusBadge>
```

## Props
| Prop | Type | Default | Description |
|---|---|---|---|
| `tone` | `'neutral' \| 'success' \| 'warning' \| 'danger' \| 'info'` | `'neutral'` | Color tone (uses `--success`/`--warning`/`--destructive`/`--info` tokens). |
| `children` | `ReactNode` | — | Pre-resolved label (you pick EN/AR). |
| `className` | `string` | — | Extra classes. |

## Accessibility, RTL & theming
- Color + text (not color alone) convey status. Token-driven — adapts to dark/light automatically.

## Do / Don't
- ✅ Map domain → `tone` in the consumer. ❌ Don't rely on color only — keep the label meaningful.
