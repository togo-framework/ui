# Dialog

A modal dialog overlaying the page, with focus trap and backdrop.

## Import
```tsx
import {
  Dialog, DialogTrigger, DialogContent, DialogHeader,
  DialogTitle, DialogDescription, DialogFooter, DialogClose,
} from "@togo-framework/ui";
```

## Usage
```tsx
<Dialog>
  <DialogTrigger asChild><Button>Edit</Button></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit profile</DialogTitle>
      <DialogDescription>Make changes, then save.</DialogDescription>
    </DialogHeader>
    {/* form */}
    <DialogFooter>
      <DialogClose asChild><Button variant="outline">Cancel</Button></DialogClose>
      <Button>Save</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

## Props / Parts
| Part | Notes |
|---|---|
| `Dialog` | Root. Controlled via `open` / `onOpenChange`, or uncontrolled with a `DialogTrigger`. |
| `DialogTrigger` | Opens the dialog; use `asChild` to wrap your own button. |
| `DialogContent` | The panel (auto-centered, includes a close ✕). Portals to `document.body`. |
| `DialogHeader` / `DialogFooter` | Layout slots. |
| `DialogTitle` / `DialogDescription` | Accessible labelling (required for a11y). |
| `DialogClose` | Closes from inside. |

## Accessibility, RTL & theming
- Focus is trapped; `Esc` and backdrop-click close; focus returns to the trigger.
- Always include `DialogTitle` (screen-reader label).
- **Portals to `document.body`** — the `.dark` class must be on `<html>` for theming.
- Uses `bg-background`/`border` tokens; the scrim is `bg-black/80` (constant by design). RTL via logical layout.

## Do / Don't
- ✅ Use for focused tasks/confirmations needing attention.
- ✅ Provide `DialogTitle` even if visually hidden.
- ❌ Don't nest dialogs; prefer a `Sheet`/`Drawer` for large/mobile content.
