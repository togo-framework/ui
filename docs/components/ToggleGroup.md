# ToggleGroup

A set of toggles where one or many can be active. Built on Radix ToggleGroup; shares
`Toggle`'s variants via context.

## Import
```tsx
import { ToggleGroup, ToggleGroupItem } from "@togo-framework/ui";
```

## Usage
```tsx
import { AlignLeft, AlignCenter, AlignRight } from "lucide-react";

<ToggleGroup type="single" defaultValue="left" variant="outline">
  <ToggleGroupItem value="left" aria-label="Align left"><AlignLeft className="h-4 w-4" /></ToggleGroupItem>
  <ToggleGroupItem value="center" aria-label="Align center"><AlignCenter className="h-4 w-4" /></ToggleGroupItem>
  <ToggleGroupItem value="right" aria-label="Align right"><AlignRight className="h-4 w-4" /></ToggleGroupItem>
</ToggleGroup>
```

## Props
| Part | Prop | Type | Default | Description |
|---|---|---|---|---|
| `ToggleGroup` | `type` | `"single" \| "multiple"` | — | One vs many active (required). |
| | `value` / `defaultValue` | `string \| string[]` | — | Active item(s). |
| | `onValueChange` | `(value) => void` | — | Change handler. |
| | `variant` | `"default" \| "outline"` | `"default"` | Applied to all items via context. |
| | `size` | `"default" \| "sm" \| "lg"` | `"default"` | Applied to all items via context. |
| `ToggleGroupItem` | `value` | `string` | — | Item value (required). |
| | `variant` / `size` | — | inherits group | Override per item. |

## Accessibility, RTL & theming
- Radix: roving focus across items, arrow-key navigation, `aria-pressed` per item.
- Arrow-key direction respects `dir="rtl"`.
- Tokens flip dark/light; items inherit `Toggle` styling.

## Do / Don't
- ✅ Always set `type` (`single` or `multiple`).
- ✅ Give each icon-only item an `aria-label`.
- ❌ Don't mix unrelated actions in one group.
