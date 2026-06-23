# HoverCard

A card that appears on hover (with a delay) — for rich previews like user/entity cards.

## Import
```tsx
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@togo-framework/ui";
```

## Usage
```tsx
<HoverCard>
  <HoverCardTrigger asChild><a href="#">@layla</a></HoverCardTrigger>
  <HoverCardContent>
    <div className="text-sm font-medium">Layla Hossam</div>
    <p className="text-xs text-muted-foreground">UI Designer</p>
  </HoverCardContent>
</HoverCard>
```

## Props / Parts
| Part / Prop | Type | Default | Description |
|---|---|---|---|
| `HoverCard` `openDelay` / `closeDelay` | `number` | `700` / `300` | Hover timing (ms). |
| `HoverCardContent` `align` / `side` | — | `"center"` / `"bottom"` | Placement. |

## Accessibility, RTL & theming
- Hover/focus-triggered; **not** for essential actions (no click target). Pointer-only by nature — provide an alternative for keyboard/touch.
- **Portals to `document.body`** → `.dark` on `<html>`. `bg-popover` token-themed; dir-aware placement.

## Do / Don't
- ✅ Use for non-critical preview info.
- ❌ Don't hide actions inside it — use `Popover`/`DropdownMenu`.
