# ScrollArea

A styled, cross-browser scroll container with a custom thin scrollbar. Built on Radix
ScrollArea.

## Import
```tsx
import { ScrollArea, ScrollBar } from "@togo-framework/ui";
```

## Usage
```tsx
<ScrollArea className="h-72 w-full rounded-md border p-4">
  {items.map((i) => <div key={i}>{i}</div>)}
</ScrollArea>

// horizontal
<ScrollArea className="w-96 whitespace-nowrap rounded-md border">
  <div className="flex gap-2 p-4">{cards}</div>
  <ScrollBar orientation="horizontal" />
</ScrollArea>
```

## Props
| Part | Prop | Type | Default | Description |
|---|---|---|---|---|
| `ScrollArea` | `viewportRef` | `Ref<HTMLDivElement>` | — | Ref to the scrolling viewport. |
| | `dir` | `"ltr" \| "rtl"` | inherited | Scrollbar side / RTL behavior. |
| | `type`, `scrollHideDelay` | Radix | — | When the scrollbar shows. |
| | `className` | `string` | — | Sizing/box (set a height!). |
| `ScrollBar` | `orientation` | `"vertical" \| "horizontal"` | `"vertical"` | A vertical bar is included automatically; add a horizontal one explicitly. |

## Accessibility, RTL & theming
- Native keyboard scrolling preserved; thumb is `bg-border` (token).
- **RTL-aware:** the vertical scrollbar moves to the inline-start under `dir="rtl"` (`rtl:border-r`).
- Flips dark/light via the `border` token.

## Do / Don't
- ✅ Constrain the area with a height/width (e.g. `h-72`).
- ✅ Add `<ScrollBar orientation="horizontal" />` for horizontal scrolling.
- ❌ Don't wrap the whole page — use it for bounded regions (lists, menus, code).
