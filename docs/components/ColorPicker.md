# ColorPicker

A swatch trigger that opens a popover with a native color wheel, a hex field, and preset swatches. Controlled.

## Import
```tsx
import { ColorPicker } from "@togo-framework/ui";
```

## Usage
```tsx
const [color, setColor] = useState("#7c3aed");
<ColorPicker value={color} onChange={setColor} />
```

## Props
| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `string` | — | Current color, hex (e.g. `#7c3aed`). |
| `onChange` | `(hex: string) => void` | — | Called with the new hex. |
| `presets` | `string[]` | 12 swatches | Preset swatches in the popover. |
| `className` | `string` | — | Trigger class. |
| `disabled` | `boolean` | `false` | Disable the trigger. |

## Accessibility, RTL & theming
- Popover (Radix) — keyboard + focus managed; swatch buttons have `aria-label`.
- RTL: popover aligns to the logical start; themed via tokens (`border-input`, `bg-background`).

## Do / Don't
- ✅ Keep it controlled — store the hex in state.
- ❌ Don't pass non-hex values; the hex field validates and reverts on bad input.
