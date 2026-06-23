# AspectRatio

Constrains content to a fixed width-to-height ratio. Thin wrapper over Radix AspectRatio.

## Import
```tsx
import { AspectRatio } from "@togo-framework/ui";
```

## Usage
```tsx
<div className="w-[400px]">
  <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-md">
    <img src={src} alt="" className="h-full w-full object-cover" />
  </AspectRatio>
</div>
```

## Props
| Prop | Type | Default | Description |
|---|---|---|---|
| `ratio` | `number` | `1` | Width / height (e.g. `16/9`, `4/3`, `1`). |
| `className` | `string` | — | Applies to the ratio box. |
| `...props` | `div` props | — | Forwarded to the wrapper. |

## Accessibility, RTL & theming
- Purely structural — no color/theme of its own; direction-agnostic.
- Give media meaningful `alt` text; the box itself is presentational.

## Do / Don't
- ✅ Give the parent a width; AspectRatio derives the height.
- ✅ Use `object-cover` on images to fill the box.
- ❌ Don't set a fixed height on children — let the ratio drive it.
