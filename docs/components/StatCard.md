# StatCard

A compact metric tile (label + value) with a tone color.

## Import
```tsx
import { StatCard } from "@togo-framework/ui";
```

## Usage
```tsx
<StatCard label="Active alerts" value={1280} tone="danger" />
<StatCard label="Sources" value="31 / 39" tone="success" />
```

## Props
| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | `string` | — | Pre-resolved metric label (caller selects EN/AR). |
| `value` | `ReactNode` | — | The metric value. |
| `tone` | `'default' \| 'muted' \| 'success' \| 'warning' \| 'danger' \| 'info'` | `'default'` | Value color. |
| `className` | `string` | — | Extra classes. |

## Accessibility, RTL & theming
- Built on `Card` — `bg-card` surface flips with `.dark`.
- Tone maps to `text-success`/`text-warning`/`text-destructive`/`text-info` tokens.

## Do / Don't
- ✅ Pre-translate `label` in app code.
- ❌ Don't embed long text — it's a metric tile.
