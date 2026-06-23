# Select

A Radix-based dropdown select with a styled trigger and popover list (portaled). Compound API.

## Import
```tsx
import {
  Select, SelectTrigger, SelectValue, SelectContent,
  SelectItem, SelectGroup, SelectLabel, SelectSeparator,
} from "@togo-framework/ui";
```

## Usage
```tsx
<Select value={role} onValueChange={setRole}>
  <SelectTrigger className="w-56">
    <SelectValue placeholder="Select a role" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Roles</SelectLabel>
      <SelectItem value="admin">Admin</SelectItem>
      <SelectItem value="editor">Editor</SelectItem>
      <SelectSeparator />
      <SelectItem value="viewer">Viewer</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>
```

## Props
Parts forward their Radix props. Key ones:

| Part | Prop | Type | Description |
|---|---|---|---|
| `Select` (Root) | `value` / `defaultValue` | `string` | Selected value (controlled/uncontrolled). |
| `Select` | `onValueChange` | `(v: string) => void` | Selection callback. |
| `Select` | `disabled` | `boolean` | Disable the whole control. |
| `SelectValue` | `placeholder` | `string` | Shown when nothing is selected. |
| `SelectContent` | `position` | `"popper" \| "item-aligned"` | Defaults to `"popper"`. |
| `SelectItem` | `value` | `string` | **Required** item value. |
| `SelectItem` | `disabled` | `boolean` | Disable a single option. |

## Accessibility, RTL & theming
- Full keyboard support (type-ahead, arrows, Enter/Esc) from Radix.
- Content is **portaled** to `document.body` — keep the `.dark` class on `<html>` so the popover themes (it uses `bg-popover`/`text-popover-foreground`).
- RTL: check mark + padding use logical `start/end`, so it mirrors under `dir="rtl"`.

## Do / Don't
- ✅ Use for rich option lists / async / grouped options.
- ✅ For small enum dropdowns prefer the lighter `NativeSelect`.
- ❌ Don't forget `value` on each `SelectItem`.
