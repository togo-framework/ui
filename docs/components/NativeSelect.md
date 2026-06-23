# NativeSelect

A styled **native `<select>`** — lightweight, fully controlled, RTL-safe (the chevron flips). Best for small enum dropdowns (status / priority / type).

## Import
```tsx
import { NativeSelect } from "@togo-framework/ui";
```

## Usage
```tsx
<NativeSelect value={status} onChange={(e) => setStatus(e.target.value)}>
  <option value="todo">To do</option>
  <option value="doing">In progress</option>
  <option value="done">Done</option>
</NativeSelect>
```

## Props
Accepts **all native `<select>` props** (`React.SelectHTMLAttributes`). No custom props.

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` / `defaultValue` | `string` | — | Selected value. |
| `onChange` | `(e) => void` | — | Change handler (`e.target.value`). |
| `disabled` | `boolean` | `false` | Disable the control. |
| `children` | `<option>`s | — | The options. |
| `className` | `string` | — | Extra classes. |

## Accessibility, RTL & theming
- Native semantics → free a11y + mobile picker UI.
- Chevron is a CSS background anchored to the inline-end edge; flips automatically under `dir="rtl"`.
- Themes via `border-input`/`bg-background`/`text-foreground`.

## Do / Don't
- ✅ Use for short, static enum lists and dense forms.
- ✅ Pair with a `Label`.
- ❌ Reach for `Select` (Radix) only when you need custom option rendering / grouping / async.
