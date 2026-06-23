# CardGrid

A responsive card grid with built-in search, filters, count, and empty state — you supply
the card renderer.

## Import
```tsx
import { CardGrid } from "@togo-framework/ui";
```

## Usage
```tsx
<CardGrid
  items={services}
  getKey={(s) => s.id}
  searchText={(s) => s.name}
  renderCard={(s) => <ServiceCard service={s} />}
  filters={[{ key: "status", label: "Status", value: (s) => s.status,
    options: [{ value: "active", label: "Active" }] }]}
  labels={{
    searchPlaceholder: "Search…", all: "All",
    emptyTitle: "Nothing here", emptyDescription: "Try a different filter.",
    countLabel: (shown, total) => `${shown} of ${total}`,
  }}
/>
```

## Props
| Prop | Type | Description |
|---|---|---|
| `items` | `T[]` | Data. |
| `getKey` | `(item, index) => string` | Stable key. |
| `renderCard` | `(item) => ReactNode` | Card renderer. |
| `searchText` | `(item) => string` | Searchable text per item. |
| `filters` | `CardFilter<T>[]` | Optional dropdown filters (`key`, `label`, `value`, `options`). |
| `labels` | `CardGridLabels` | All chrome strings (caller-translated). |
| `emptyIcon` | `ReactNode` | Icon for the empty state. |

## Accessibility, RTL & theming
- Grid reflows by breakpoint (mobile-first); search/filters are keyboard accessible.
- Strings are caller-provided, so EN/AR is your choice; layout mirrors under `dir="rtl"`.

## Do / Don't
- ✅ Translate `labels` in app code.
- ❌ Don't fetch inside `renderCard`.
