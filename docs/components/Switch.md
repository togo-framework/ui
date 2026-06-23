# Switch

A Radix on/off toggle. The thumb slides using logical inset, so it animates the correct direction in RTL (auto-detects `dir`).

## Import
```tsx
import { Switch } from "@togo-framework/ui";
```

## Usage
```tsx
import { Switch, Label } from "@togo-framework/ui";

<div className="flex items-center gap-2">
  <Switch id="notify" checked={on} onCheckedChange={setOn} />
  <Label htmlFor="notify">Email notifications</Label>
</div>
```

## Props
Forwards Radix `Switch.Root` props (plus auto-resolved `dir`).

| Prop | Type | Default | Description |
|---|---|---|---|
| `checked` | `boolean` | — | Controlled state. |
| `defaultChecked` | `boolean` | — | Uncontrolled initial state. |
| `onCheckedChange` | `(checked) => void` | — | Change callback. |
| `disabled` | `boolean` | `false` | Disable the control. |
| `dir` | `"ltr" \| "rtl"` | auto | Overrides the auto-detected document direction. |
| `id` | `string` | — | For `Label` association. |

## Accessibility, RTL & theming
- Toggle with Space/Enter; pair with a `Label`.
- Auto-reads `document.dir`; the thumb slides toward the inline-end when checked, correct in both LTR/RTL.
- Checked track uses `bg-primary`; unchecked uses `bg-input`.

## Do / Don't
- ✅ Use for instant on/off settings (no submit).
- ❌ Don't use for choices that need an explicit save — prefer `Checkbox` in a form.
