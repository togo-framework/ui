# Sheet

A panel that slides in from a screen edge — good for filters, details, or secondary nav.

## Import
```tsx
import {
  Sheet, SheetTrigger, SheetContent, SheetHeader,
  SheetTitle, SheetDescription, SheetFooter, SheetClose,
} from "@togo-framework/ui";
```

## Usage
```tsx
<Sheet>
  <SheetTrigger asChild><Button variant="outline">Filters</Button></SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>Filters</SheetTitle>
      <SheetDescription>Narrow the results.</SheetDescription>
    </SheetHeader>
    {/* controls */}
  </SheetContent>
</Sheet>
```

## Props / Parts
| Part / Prop | Type | Default | Description |
|---|---|---|---|
| `SheetContent` `side` | `"top" \| "right" \| "bottom" \| "left"` | `"right"` | Edge to slide from. |
| `Sheet` | — | — | Root (`open` / `onOpenChange`). |
| `SheetTrigger` / `SheetClose` | — | — | Open / close (use `asChild`). |
| `SheetTitle` / `SheetDescription` | — | — | Accessible labelling. |

## Accessibility, RTL & theming
- Focus trap, `Esc`, backdrop-click close. Includes a ✕.
- **Portals to `document.body`** → `.dark` on `<html>`.
- `side` is physical; under `dir="rtl"`, `"left"`/`"right"` still map to visual edges — choose the side that reads as "trailing" for your layout. Token-themed; scrim `bg-black/80`.

## Do / Don't
- ✅ Use for filters/details that don't need full attention.
- ✅ On mobile, prefer `side="bottom"` or use `Drawer`.
- ❌ Don't put critical confirmations here — use `AlertDialog`.
