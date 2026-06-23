# Breadcrumb

Hierarchical path navigation.

## Import
```tsx
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink,
  BreadcrumbPage, BreadcrumbSeparator, BreadcrumbEllipsis,
} from "@togo-framework/ui";
```

## Usage
```tsx
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem><BreadcrumbLink href="/admin">Admin</BreadcrumbLink></BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem><BreadcrumbPage>Posts</BreadcrumbPage></BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

## Props
Parts are styled `<nav>/<ol>/<li>/<a>/<span>` wrappers.

| Part | Element | Notes |
|---|---|---|
| `Breadcrumb` | `nav` | `aria-label="breadcrumb"`. |
| `BreadcrumbList` | `ol` | The list. |
| `BreadcrumbItem` | `li` | One crumb. |
| `BreadcrumbLink` | `a` | `asChild` to use a router `<Link>`. |
| `BreadcrumbPage` | `span` | Current page (non-link, `aria-current="page"`). |
| `BreadcrumbSeparator` | `li` | Custom `children` to override the separator icon. |
| `BreadcrumbEllipsis` | `span` | Collapsed-middle indicator. |

## Accessibility, RTL & theming
- `nav[aria-label="breadcrumb"]` + `aria-current="page"` on the last crumb.
- RTL: the separator chevron flips direction under `dir="rtl"` (logical, dir-aware).
- Muted/foreground tokens — flips with `.dark`.

## Do / Don't
- ✅ Use `BreadcrumbPage` (not a link) for the current page.
- ✅ Use `asChild` on `BreadcrumbLink` for client-side routing.
- ❌ Don't exceed one line — collapse the middle with `BreadcrumbEllipsis`.
