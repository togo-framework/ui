# DataTable

The flagship data grid — TanStack Table over the kit's `Table` primitive: sorting, per-column
filters, global search, pagination (client or server), row selection + bulk actions, column
visibility/pinning/resizing, density, CSV export, expandable rows. Fully RTL + bilingual (EN/AR).
Product-agnostic: it never fetches — data arrives entirely via props.

## Import
```tsx
import { DataTable, type ColumnDef } from "@togo-framework/ui";
```

## Usage
```tsx
type Row = { id: string; title: string; severity: string; publishedAt: string };

const columns: ColumnDef<Row>[] = [
  { accessorKey: "id", header: "ID", meta: { header_en: "ID", header_ar: "المعرّف" } },
  { accessorKey: "title", header: "Title", size: 360 },
  { accessorKey: "severity", header: "Severity", size: 100 },
];

<DataTable<Row>
  data={rows}
  columns={columns}
  getRowId={(r) => r.id}
  language="en"
  filterDefs={[{ columnId: "title", type: "text", placeholder_en: "Search title…" }]}
  showGlobalSearch
  pageSize={10}
  enableRowSelection
  bulkActions={[{ id: "del", label_en: "Delete", variant: "destructive", onAction: (ids) => {} }]}
  showCsvExport
  showDensityToggle
  enableColumnVisibility
  onRowClick={(r) => {}}
/>
```

## Props
| Prop | Type | Default | Description |
|---|---|---|---|
| `data` | `TData[]` | — | Rows (required). |
| `columns` | `ColumnDef<TData>[]` | — | TanStack column defs; `meta.header_en/_ar` for bilingual headers. |
| `getRowId` | `(row) => string` | index | Stable row id (needed for selection). |
| `language` | `'en' \| 'ar'` | `'en'` | Chrome strings + sort-icon direction. |
| `filterDefs` | `DataTableColumnFilter[]` | — | Per-column filters: `text` / `select` / `date-range` / `number-range`. |
| `showGlobalSearch` | `boolean` | `false` | Global search box. |
| `pageSize` / `pageSizeOptions` | `number` / `number[]` | `10` | Pagination size + options. |
| `totalRows` / `serverCallbacks` | `number` / `DataTableServerCallbacks` | — | Server-side mode (controlled state). |
| `loading` / `error` | `boolean` / `string \| null` | — | Loading skeleton / error state. |
| `onRowClick` | `(row) => void` | — | Row click handler. |
| `enableRowSelection` | `boolean` | `false` | Checkbox selection. |
| `bulkActions` | `DataTableBulkAction[]` | — | Actions on selected rows. |
| `renderExpandedRow` | `(row) => ReactNode` | — | Expandable row content. |
| `enableColumnVisibility` / `enableColumnPinning` / `enableColumnResizing` | `boolean` | `false` | Column controls. |
| `enableSorting` / `enableMultiSort` | `boolean` | `true` / `false` | Sorting. |
| `showDensityToggle` / `defaultDensity` | `boolean` / `'compact' \| 'comfortable'` | — | Density. |
| `showCsvExport` / `csvFilename` | `boolean` / `string` | — | CSV export of current view. |
| `stickyHeader` / `className` | `boolean` / `string` | — | Layout. |

## Accessibility, RTL & theming
- `aria-sort` headers, keyboard-navigable, visible focus rings (WCAG 2.1 AA).
- Bilingual via `language`; under `dir="rtl"` the table mirrors and sort icons flip.
- Surfaces use `bg-card`/`border` tokens — dark in dark mode, white in light, automatically.

## Do / Don't
- ✅ Provide `getRowId` when using selection.
- ✅ Use `serverCallbacks` + `totalRows` for server-side paging.
- ❌ Don't fetch inside columns — pass resolved data in.
