# Separator

A thin divider line (Radix Separator).

## Import
```tsx
import { Separator } from "@togo-framework/ui";
```

## Usage
```tsx
<Separator />
<div className="flex h-5 items-center gap-3">
  <span>Docs</span>
  <Separator orientation="vertical" />
  <span>API</span>
</div>
```

## Props
| Prop | Type | Default | Description |
|---|---|---|---|
| `orientation` | `"horizontal" \| "vertical"` | `"horizontal"` | Line direction. |
| `decorative` | `boolean` | `true` | If `true`, hidden from a11y tree; set `false` for a semantic separator. |
| `...props` | Radix Separator props | — | `className`, etc. |

## Accessibility, RTL & theming
- `decorative` controls whether it's exposed to assistive tech (`role="separator"`).
- Color from `bg-border`; flips with `.dark`.
- RTL-neutral.

## Do / Don't
- ✅ Use `orientation="vertical"` inside a fixed-height flex row.
- ❌ Don't use as spacing — use margins/padding instead.
