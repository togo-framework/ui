# Popover

A small floating panel anchored to a trigger — for pickers, mini-forms, and extra info.

## Import
```tsx
import { Popover, PopoverTrigger, PopoverContent } from "@togo-framework/ui";
```

## Usage
```tsx
<Popover>
  <PopoverTrigger asChild><Button variant="outline">Open</Button></PopoverTrigger>
  <PopoverContent align="start" sideOffset={8}>
    {/* content */}
  </PopoverContent>
</Popover>
```

## Props / Parts
| Part / Prop | Type | Default | Description |
|---|---|---|---|
| `PopoverContent` `align` | `"start" \| "center" \| "end"` | `"center"` | Alignment to trigger. |
| `PopoverContent` `side` / `sideOffset` | `"top"\|"right"\|"bottom"\|"left"` / `number` | `"bottom"` / `4` | Placement. |
| `Popover` | — | — | Root (`open` / `onOpenChange`). |

## Accessibility, RTL & theming
- Opens on click; `Esc`/outside-click close; focus moves into the panel.
- **Portals to `document.body`** → `.dark` on `<html>`. `bg-popover` token themes it.
- Placement is dir-aware (`start`/`end` flip under RTL).

## Do / Don't
- ✅ Use for lightweight, dismissible content tied to a control.
- ❌ Don't use for hover-only info — use `Tooltip` or `HoverCard`.
