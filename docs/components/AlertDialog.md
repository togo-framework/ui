# AlertDialog

A modal for destructive or important confirmations — it requires an explicit choice.

## Import
```tsx
import {
  AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader,
  AlertDialogTitle, AlertDialogDescription, AlertDialogFooter,
  AlertDialogAction, AlertDialogCancel,
} from "@togo-framework/ui";
```

## Usage
```tsx
<AlertDialog>
  <AlertDialogTrigger asChild><Button variant="destructive">Delete</Button></AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Delete this record?</AlertDialogTitle>
      <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction onClick={onDelete}>Delete</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
```

## Props / Parts
| Part | Notes |
|---|---|
| `AlertDialog` | Root (`open` / `onOpenChange`). |
| `AlertDialogAction` | Primary/confirm button (closes on click). |
| `AlertDialogCancel` | Dismiss button (closes). |
| `AlertDialogTitle` / `AlertDialogDescription` | Required labelling. |

## Accessibility, RTL & theming
- Unlike `Dialog`, it has **no ✕** and does not close on backdrop-click — the user must pick Action or Cancel.
- Focus trap + `Esc` (cancel). **Portals to `document.body`** → keep `.dark` on `<html>`.
- Token-themed; scrim `bg-black/80`. RTL-aware footer order.

## Do / Don't
- ✅ Use for irreversible actions (delete, sign-out everywhere).
- ❌ Don't use for routine forms — use `Dialog`.
