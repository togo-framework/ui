# RadioGroup

A Radix radio group for single-choice selection. Compose `RadioGroup` with `RadioGroupItem`s.

## Import
```tsx
import { RadioGroup, RadioGroupItem, Label } from "@togo-framework/ui";
```

## Usage
```tsx
<RadioGroup value={plan} onValueChange={setPlan}>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="free" id="free" />
    <Label htmlFor="free">Free</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="pro" id="pro" />
    <Label htmlFor="pro">Pro</Label>
  </div>
</RadioGroup>
```

## Props
| Part | Prop | Type | Description |
|---|---|---|---|
| `RadioGroup` | `value` / `defaultValue` | `string` | Selected value. |
| `RadioGroup` | `onValueChange` | `(v: string) => void` | Selection callback. |
| `RadioGroup` | `disabled` | `boolean` | Disable the whole group. |
| `RadioGroup` | `orientation` | `"horizontal" \| "vertical"` | Arrow-key navigation axis. |
| `RadioGroupItem` | `value` | `string` | **Required** option value. |
| `RadioGroupItem` | `id` | `string` | For `Label` association. |
| `RadioGroupItem` | `disabled` | `boolean` | Disable one option. |

## Accessibility, RTL & theming
- Roving focus + arrow-key navigation between items (Radix).
- Each item needs a `Label` (`id`/`htmlFor`).
- Selected dot uses the brand `text-primary`; RTL-safe layout.

## Do / Don't
- ✅ Use for 2–6 mutually-exclusive options.
- ❌ For many options use `Select`; for booleans use `Checkbox`/`Switch`.
