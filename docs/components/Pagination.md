# Pagination

Accessible page navigation built from composable parts.

## Import
```tsx
import {
  Pagination, PaginationContent, PaginationItem,
  PaginationLink, PaginationPrevious, PaginationNext, PaginationEllipsis,
} from "@togo-framework/ui";
```

## Usage
```tsx
<Pagination>
  <PaginationContent>
    <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
    <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
    <PaginationItem><PaginationLink href="#" isActive>2</PaginationLink></PaginationItem>
    <PaginationItem><PaginationEllipsis /></PaginationItem>
    <PaginationItem><PaginationNext href="#" /></PaginationItem>
  </PaginationContent>
</Pagination>
```

## Props
| Part | Prop | Type | Default | Description |
|---|---|---|---|---|
| `Pagination` | `...nav` | — | — | `role="navigation"`, `aria-label="pagination"`. |
| `PaginationContent` | `...ul` | — | — | Flex row of items. |
| `PaginationItem` | `...li` | — | — | List item wrapper. |
| `PaginationLink` | `isActive` | `boolean` | `false` | Marks current page (`aria-current="page"`). |
| | `size` | `ButtonSize` | `"icon"` | Link sizing (styled as a button). |
| | `...a` | — | — | Anchor props (`href`, `onClick`). |
| `PaginationPrevious` / `PaginationNext` | `...a` | — | — | Prev/next with chevrons. |
| `PaginationEllipsis` | `...span` | — | — | Truncation indicator. |

## Accessibility, RTL & theming
- Semantic nav + `aria-current` on the active page; prev/next have `aria-label`s.
- **RTL-aware:** the prev/next chevrons `rtl:rotate-180`, and `ps/pe` padding mirrors under `dir="rtl"`.
- Links use `buttonVariants` tokens → flips dark/light.

## Do / Don't
- ✅ Set `isActive` on exactly one link.
- ✅ Render real `href`s (or `onClick`) so it's keyboard/SEO friendly.
- ❌ Don't reverse Previous/Next manually for RTL — the component handles it.
