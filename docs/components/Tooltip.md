# Tooltip

A small hint shown on hover/focus of an element. Wrap your app (or a region) in
`TooltipProvider` once.

## Import
```tsx
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@togo-framework/ui";
```

## Usage
```tsx
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild><Button variant="ghost" size="icon"><Info /></Button></TooltipTrigger>
    <TooltipContent>More info</TooltipContent>
  </Tooltip>
</TooltipProvider>
```

## Props / Parts
| Part / Prop | Type | Default | Description |
|---|---|---|---|
| `TooltipProvider` `delayDuration` | `number` | `700` | Hover delay (ms), app-wide. |
| `TooltipContent` `side` / `sideOffset` | — | `"top"` / `4` | Placement. |
| `Tooltip` | — | — | One tip (`open` controllable). |

## Accessibility, RTL & theming
- Shows on hover **and** keyboard focus; `Esc` hides. Don't put essential info only in a tooltip (it's transient and pointer-biased).
- **Portals to `document.body`** → `.dark` on `<html>`. Token-themed; `side` flips under RTL.

## Do / Don't
- ✅ Use for icon-button labels and brief hints.
- ❌ Don't put interactive content inside — use `Popover`.
