# Menubar

A horizontal application menubar (File / Edit / View …) with dropdown menus per top item.

## Import
```tsx
import {
  Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem,
  MenubarSeparator, MenubarLabel, MenubarShortcut, MenubarCheckboxItem,
  MenubarRadioGroup, MenubarRadioItem, MenubarSub, MenubarSubTrigger, MenubarSubContent,
} from "@togo-framework/ui";
```

## Usage
```tsx
<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>New <MenubarShortcut>⌘N</MenubarShortcut></MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Print</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>Edit</MenubarTrigger>
    <MenubarContent><MenubarItem>Undo</MenubarItem></MenubarContent>
  </MenubarMenu>
</Menubar>
```

## Props / Parts
| Part | Notes |
|---|---|
| `Menubar` | Root bar. |
| `MenubarMenu` | One top-level menu. |
| `MenubarTrigger` | Top-level label. |
| `MenubarContent` + items | Same item set as DropdownMenu (checkbox/radio/sub/shortcut). |

## Accessibility, RTL & theming
- Arrow-key navigation across menus + within; `Esc` closes.
- Content **portals to `document.body`** → `.dark` on `<html>`. Token-themed; bar flips order under RTL.

## Do / Don't
- ✅ Use for desktop app-style command surfaces.
- ❌ Don't use on mobile-first layouts — collapse into a `DropdownMenu`/`Sidebar`.
