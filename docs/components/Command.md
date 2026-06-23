# Command

A command palette / searchable list (built on **cmdk**) — for quick navigation and actions.
Use inline, or inside a dialog via `CommandDialog`.

## Import
```tsx
import {
  Command, CommandDialog, CommandInput, CommandList, CommandEmpty,
  CommandGroup, CommandItem, CommandSeparator, CommandShortcut,
} from "@togo-framework/ui";
```

## Usage
```tsx
<CommandDialog open={open} onOpenChange={setOpen}>
  <CommandInput placeholder="Type a command or search…" />
  <CommandList>
    <CommandEmpty>No results.</CommandEmpty>
    <CommandGroup heading="Pages">
      <CommandItem onSelect={() => go("/dashboard")}>Dashboard</CommandItem>
      <CommandItem onSelect={() => go("/admin")}>Admin</CommandItem>
    </CommandGroup>
  </CommandList>
</CommandDialog>
```

## Props / Parts
| Part | Notes |
|---|---|
| `Command` | Inline root (filters its items by the input). |
| `CommandDialog` | `Command` inside a `Dialog` (`open` / `onOpenChange`). |
| `CommandInput` | Search box (drives filtering). |
| `CommandList` / `CommandEmpty` / `CommandGroup` | Results structure. |
| `CommandItem` | `onSelect`, `value`, `disabled`. |
| `CommandShortcut` | Trailing key hint. |

## Accessibility, RTL & theming
- Full keyboard: type to filter, arrows to move, `Enter` to select. Pair `CommandDialog` with a `⌘K` shortcut.
- `CommandDialog` **portals to `document.body`** → `.dark` on `<html>`. Token-themed; RTL-aware text.

## Do / Don't
- ✅ Use for global search / quick-actions (`⌘K`).
- ❌ Don't use as a plain `<select>` — use `Select`.
