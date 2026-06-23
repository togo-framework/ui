'use client'

/**
 * @module data-table
 *
 * DataTable — feature-complete grid for all Sentra product dashboards.
 * Built on @tanstack/react-table + shadcn/ui Table primitive.
 *
 * Usage:
 *   import { DataTable } from '@prism/ui'
 *   import type { ColumnDef } from '@prism/ui'
 */

export { DataTable } from './DataTable'
export { CardGrid } from './CardGrid'
export type { CardFilter, CardGridLabels } from './CardGrid'

export type {
  DataTableProps,
  DataTableLanguage,
  DataTableDensity,
  DataTableFilterType,
  DataTableSelectOption,
  DataTableColumnFilter,
  DataTableColumnMeta,
  DataTableServerState,
  DataTableServerCallbacks,
  DataTableBulkAction,
  // Re-export TanStack types consumers need
  ColumnDef,
  SortingState,
  ColumnFiltersState,
  VisibilityState,
  RowSelectionState,
  PaginationState,
} from './types'
