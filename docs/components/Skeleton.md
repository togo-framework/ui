# Skeleton

Animated placeholder for loading states.

## Import
```tsx
import { Skeleton } from "@togo-framework/ui";
```

## Usage
```tsx
<div className="space-y-2">
  <Skeleton className="h-4 w-48" />
  <Skeleton className="h-4 w-32" />
  <Skeleton className="h-24 w-full rounded-xl" />
</div>
```

## Props
| Prop | Type | Default | Description |
|---|---|---|---|
| `...props` | `HTMLAttributes<HTMLDivElement>` | — | Size/shape via `className` (`h-*`, `w-*`, `rounded-*`). |

## Accessibility, RTL & theming
- Decorative; add `aria-busy`/`aria-live` on the container that swaps skeleton → content.
- Uses `bg-muted` + pulse animation; flips with `.dark`.
- RTL-neutral.

## Do / Don't
- ✅ Match skeleton sizes to the real content to avoid layout shift.
- ❌ Don't leave skeletons up on error — switch to an error/empty state.
