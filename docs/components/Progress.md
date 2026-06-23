# Progress

Determinate progress bar (Radix Progress).

## Import
```tsx
import { Progress } from "@togo-framework/ui";
```

## Usage
```tsx
<Progress value={66} />
```

## Props
| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `number` | `0` | Completion 0–100. |
| `...props` | Radix Progress props | — | `className`, `max`, etc. |

## Accessibility, RTL & theming
- Radix exposes `role="progressbar"` with value semantics for assistive tech.
- RTL: the fill grows from the inline-start, so it mirrors under `dir="rtl"`.
- Track `bg-secondary` / fill `bg-primary` — flips with `.dark` + brand color.

## Do / Don't
- ✅ Use for known completion; for unknown duration use an indeterminate spinner/Skeleton.
- ❌ Don't pass values outside 0–100.
