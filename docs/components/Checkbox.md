# Checkbox

A Radix checkbox with a check indicator. Controlled or uncontrolled.

## Import
```tsx
import { Checkbox } from "@togo-framework/ui";
```

## Usage
```tsx
import { Checkbox, Label } from "@togo-framework/ui";

<div className="flex items-center gap-2">
  <Checkbox id="terms" checked={agreed} onCheckedChange={setAgreed} />
  <Label htmlFor="terms">I accept the terms</Label>
</div>
```

## Props
Forwards Radix `Checkbox.Root` props.

| Prop | Type | Default | Description |
|---|---|---|---|
| `checked` | `boolean \| "indeterminate"` | — | Controlled state. |
| `defaultChecked` | `boolean` | — | Uncontrolled initial state. |
| `onCheckedChange` | `(checked) => void` | — | Change callback. |
| `disabled` | `boolean` | `false` | Disable the control. |
| `id` | `string` | — | For `Label` association. |
| `className` | `string` | — | Extra classes. |

## Accessibility, RTL & theming
- Keyboard-toggleable (Space); pair with a `Label` via `id`/`htmlFor`.
- Supports the `"indeterminate"` state for "select all" headers.
- Checked uses `bg-primary`/`text-primary-foreground` (brand color); themes with `.dark`.

## Do / Don't
- ✅ Use for independent boolean options.
- ✅ Use `"indeterminate"` for partial group selection.
- ❌ For mutually-exclusive choices use `RadioGroup`; for on/off settings use `Switch`.
