# MiniBarChart

A compact, dependency-light bar chart for inline trends.

## Import
```tsx
import { MiniBarChart, type BarPoint } from "@togo-framework/ui";
```

## Usage
```tsx
const data: BarPoint[] = [
  { label: "Mon", value: 120 },
  { label: "Tue", value: 340, sublabel: "peak" },
  { label: "Wed", value: 210 },
];

<MiniBarChart data={data} height={140} valueFormatter={(n) => n.toLocaleString()} />
```

## Props
| Prop | Type | Default | Description |
|---|---|---|---|
| `data` | `BarPoint[]` | — | `{ label, value, sublabel? }[]`. Empty → dashed placeholder. |
| `height` | `number` | `140` | Chart height in px. |
| `valueFormatter` | `(n: number) => string` | `toLocaleString` | Format bar values. |

## Accessibility, RTL & theming
- Bars use brand/token colors; the placeholder uses `border-dashed` + `text-muted-foreground`.
- Renders left-to-right; wrap in `dir="rtl"` to mirror order.

## Do / Don't
- ✅ Use for sparkline-style summaries.
- ❌ For rich/interactive charts use `Chart` (recharts).
