# DropdownMenu

An actions menu opened from a button — items, checkboxes, radios, submenus.

## Import
```tsx
import {
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem,
  DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuGroup, DropdownMenuShortcut,
  DropdownMenuCheckboxItem, DropdownMenuRadioGroup, DropdownMenuRadioItem,
  DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuSubContent,
} from "@togo-framework/ui";
```

## Usage
```tsx
<DropdownMenu>
  <DropdownMenuTrigger asChild><Button variant="outline">Actions</Button></DropdownMenuTrigger>
  <DropdownMenuContent align="end">
    <DropdownMenuLabel>Account</DropdownMenuLabel>
    <DropdownMenuItem onSelect={openProfile}>Profile</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem className="text-destructive" onSelect={signOut}>Sign out</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

## Props / Parts
| Part | Notes |
|---|---|
| `DropdownMenuTrigger` | Opens the menu (`asChild`). |
| `DropdownMenuContent` | `align` / `side` / `sideOffset`. Portals to body. |
| `DropdownMenuItem` | `onSelect`, `disabled`; supports an icon + `DropdownMenuShortcut`. |
| `DropdownMenuCheckboxItem` | `checked` / `onCheckedChange`. |
| `DropdownMenuRadioGroup` + `DropdownMenuRadioItem` | `value` / `onValueChange`. |
| `DropdownMenuSub*` | Nested submenus. |
| `DropdownMenuLabel` / `DropdownMenuSeparator` / `DropdownMenuGroup` | Structure. |

## Accessibility, RTL & theming
- Full keyboard nav (arrows, type-ahead, `Esc`); roving focus.
- **Portals to `document.body`** → `.dark` on `<html>`. `bg-popover` token-themed.
- Submenus and `align`/`side` flip under `dir="rtl"`.

## Do / Don't
- ✅ Use for a list of actions on an item/row.
- ✅ Mark destructive items with `text-destructive`.
- ❌ Don't use as primary navigation — use `NavigationMenu`/`Sidebar`.
