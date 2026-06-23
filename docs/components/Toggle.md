# Toggle

A two-state button that can be on or off. Built on Radix Toggle.

## Import
```tsx
import { Toggle, toggleVariants } from "@togo-framework/ui";
```

## Usage
```tsx
import { Bold } from "lucide-react";

<Toggle aria-label="Bold" pressed={bold} onPressedChange={setBold}>
  <Bold className="h-4 w-4" />
</Toggle>

<Toggle variant="outline" size="sm">Draft</Toggle>
```

## Props
Forwards all Radix `Toggle.Root` props plus the variants below.

| Prop | Type | Default | Description |
|---|---|---|---|
| `pressed` | `boolean` | — | Controlled on/off state. |
| `defaultPressed` | `boolean` | — | Uncontrolled initial state. |
| `onPressedChange` | `(pressed: boolean) => void` | — | Change handler. |
| `disabled` | `boolean` | `false` | Disable the toggle. |
| `variant` | `"default" \| "outline"` | `"default"` | Visual style. |
| `size` | `"default" \| "sm" \| "lg"` | `"default"` | Sizing. |

## Variants
- **variant:** `default` (transparent, fills on hover/pressed), `outline` (bordered).
- **size:** `sm` (h-9), `default` (h-10), `lg` (h-11).
- `toggleVariants` is exported for composing custom toggle-like controls.

## Accessibility, RTL & theming
- Radix provides `aria-pressed` + keyboard activation; always pass an `aria-label` for icon-only toggles.
- Direction-agnostic (no left/right), works under `dir="rtl"`.
- Pressed state uses `bg-primary/10` + tokens → flips dark/light.

## Do / Don't
- ✅ Add `aria-label` for icon-only toggles.
- ✅ Use `ToggleGroup` for a set of related toggles.
- ❌ Don't use a Toggle for navigation — use a link/button.
