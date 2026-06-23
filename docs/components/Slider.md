# Slider

A Radix range slider (single or multiple thumbs) with a brand-colored range.

## Import
```tsx
import { Slider } from "@togo-framework/ui";
```

## Usage
```tsx
// single value
<Slider defaultValue={[50]} min={0} max={100} step={1} onValueChange={([v]) => setVolume(v)} />

// range (two thumbs)
<Slider defaultValue={[20, 80]} min={0} max={100} />
```

## Props
Forwards Radix `Slider.Root` props.

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` / `defaultValue` | `number[]` | — | One entry per thumb. |
| `onValueChange` | `(value: number[]) => void` | — | Live change callback. |
| `onValueCommit` | `(value: number[]) => void` | — | Fires on release. |
| `min` / `max` | `number` | `0` / `100` | Range bounds. |
| `step` | `number` | `1` | Increment. |
| `disabled` | `boolean` | `false` | Disable the control. |

## Accessibility, RTL & theming
- Arrow keys / Home / End adjust the focused thumb; each thumb is a slider role.
- Track uses `bg-secondary`, range uses `bg-primary`; flips under `.dark`.
- Direction-aware via Radix when `dir="rtl"`.

## Do / Don't
- ✅ Always pass an array to `value`/`defaultValue` (even single thumb).
- ✅ Use `onValueCommit` for expensive updates; `onValueChange` for live preview.
- ❌ Don't render a numeric label from `value[0]` without guarding empty arrays.
