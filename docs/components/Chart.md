# Chart

A theming wrapper around **recharts** — `ChartContainer` injects token-aware colors and
ships a styled tooltip/legend, so charts match the design system in dark & light.

## Import
```tsx
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@togo-framework/ui";
import { Bar, BarChart, XAxis } from "recharts";
```

## Usage
```tsx
const config = {
  visits: { label: "Visits", color: "hsl(var(--primary))" },
} satisfies ChartConfig;

<ChartContainer config={config} className="h-64 w-full">
  <BarChart data={data}>
    <XAxis dataKey="day" />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Bar dataKey="visits" fill="var(--color-visits)" radius={4} />
  </BarChart>
</ChartContainer>
```

## Props
| Export | Description |
|---|---|
| `ChartContainer` | Wraps a recharts chart; takes `config: ChartConfig` + `className`. |
| `ChartConfig` | `{ [key]: { label, color?, icon? } }` — drives `--color-<key>` vars. |
| `ChartTooltip` / `ChartTooltipContent` | Token-styled tooltip. |
| `ChartLegend` / `ChartLegendContent` | Token-styled legend. |

## Accessibility, RTL & theming
- Colors come from `config` (use `hsl(var(--primary))` etc.) so charts flip with the theme.
- Provide a fixed height via `className` (recharts needs a sized container).

## Do / Don't
- ✅ Reference tokens in `config.color`.
- ❌ Don't hard-code hex fills if you want dark/light parity.
