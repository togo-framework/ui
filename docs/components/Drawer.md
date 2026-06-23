# Drawer

A touch-friendly bottom sheet (built on **vaul**) that drags up from the bottom — the
preferred overlay for primary mobile flows.

## Import
```tsx
import {
  Drawer, DrawerTrigger, DrawerContent, DrawerHeader,
  DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose,
} from "@togo-framework/ui";
```

## Usage
```tsx
<Drawer>
  <DrawerTrigger asChild><Button>Open</Button></DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Choose an option</DrawerTitle>
      <DrawerDescription>Swipe down to dismiss.</DrawerDescription>
    </DrawerHeader>
    {/* content */}
    <DrawerFooter>
      <Button>Confirm</Button>
      <DrawerClose asChild><Button variant="outline">Cancel</Button></DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
```

## Props / Parts
| Part | Notes |
|---|---|
| `Drawer` | Root (vaul). Accepts `shouldScaleBackground`, `open`, `onOpenChange`. |
| `DrawerContent` | Bottom panel with a drag handle. |
| `DrawerHeader` / `DrawerFooter` | Slots. |
| `DrawerTitle` / `DrawerDescription` | Required labelling. |

## Accessibility, RTL & theming
- Drag-to-dismiss + `Esc` + backdrop. Focus trapped.
- **Portals to `document.body`** → `.dark` on `<html>`.
- Token-themed; scrim `bg-black/80`. RTL-aware content.

## Do / Don't
- ✅ Use as the mobile counterpart to `Dialog`.
- ✅ Keep it short — it's a quick action surface.
- ❌ Don't use for long forms on desktop — use `Dialog`/`Sheet`.
