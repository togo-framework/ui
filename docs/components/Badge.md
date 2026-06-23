# Badge

Small pill for status or labels.

## Import
```tsx
import { Badge, badgeVariants } from "@togo-framework/ui";
```

## Usage
```tsx
<Badge>New</Badge>
<Badge variant="secondary">Beta</Badge>
<Badge variant="destructive">Failed</Badge>
<Badge variant="outline">Draft</Badge>
```

## Props
| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `"default" \| "secondary" \| "destructive" \| "outline"` | `"default"` | Visual style. |
| `...props` | `HTMLAttributes<HTMLDivElement>` | — | Standard div attrs; accepts an inline `<svg>` icon (sized to 3). |

## Accessibility, RTL & theming
- Presentational `<div>`. For live status, pair with `aria-live` on a parent, or use `StatusBadge`.
- RTL: icon + text gap mirror under `dir="rtl"`.
- Themed via tokens; flips with `.dark` + brand color.

## Do / Don't
- ✅ Keep text to one or two words.
- ❌ Don't use as a button — wrap in `Button`/`a` if it must be clickable.
