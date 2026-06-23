# Table

Low-level, unstyled-but-tokenized table primitives. For rich features (sort/filter/paginate)
use `DataTable`; reach for these when you need full custom control.

## Import
```tsx
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCaption, TableFooter } from "@togo-framework/ui";
```

## Usage
```tsx
<Table>
  <TableHeader>
    <TableRow><TableHead>Name</TableHead><TableHead>Role</TableHead></TableRow>
  </TableHeader>
  <TableBody>
    <TableRow><TableCell>Ada</TableCell><TableCell>Admin</TableCell></TableRow>
  </TableBody>
</Table>
```

## Parts
| Component | Role |
|---|---|
| `Table` | Root `<table>` wrapper (scroll container). |
| `TableHeader` / `TableBody` / `TableFooter` | Sections. |
| `TableRow` | Row, hover + selected states. |
| `TableHead` | Header cell. |
| `TableCell` | Body cell. |
| `TableCaption` | Accessible caption. |

## Accessibility, RTL & theming
- Semantic table elements (screen-reader friendly).
- Borders/hover use `border`/`muted` tokens; mirrors under `dir="rtl"`.

## Do / Don't
- ✅ Use for bespoke tables.
- ❌ Don't re-implement sorting/paging — use `DataTable`.
