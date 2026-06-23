# ContextMenu

A right-click (long-press) menu anchored to where the user clicked. Same item API as
`DropdownMenu`, different trigger.

## Import
```tsx
import {
  ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem,
  ContextMenuLabel, ContextMenuSeparator, ContextMenuCheckboxItem,
  ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuShortcut,
  ContextMenuSub, ContextMenuSubTrigger, ContextMenuSubContent,
} from "@togo-framework/ui";
```

## Usage
```tsx
<ContextMenu>
  <ContextMenuTrigger className="rounded-md border p-8">Right-click here</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Open</ContextMenuItem>
    <ContextMenuItem>Rename</ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem className="text-destructive">Delete</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>
```

## Props / Parts
| Part | Notes |
|---|---|
| `ContextMenuTrigger` | The area that responds to right-click / long-press. |
| `ContextMenuContent` | Menu panel (portals to body). |
| `ContextMenuItem` / `CheckboxItem` / `RadioItem` / `Sub*` | Same semantics as DropdownMenu. |

## Accessibility, RTL & theming
- Opens at the pointer; keyboard menu key supported. Always provide an equivalent action elsewhere (right-click isn't discoverable/touch-obvious).
- **Portals to `document.body`** → `.dark` on `<html>`. Token-themed; RTL-aware.

## Do / Don't
- ✅ Use as a power-user shortcut, not the only path to an action.
- ❌ Don't hide critical actions exclusively behind right-click.
