'use client'

/**
 * DataTable types — shared type definitions for the DataTable component.
 *
 * Design system rules:
 *   - Rule 8  — bilingual (EN/AR): column headers carry header_en/header_ar or renderHeader
 *   - Rule 16 — Sentra app style: semantic tokens only, logical CSS props
 *   - Rule 25 — product-agnostic: NO data fetching, NO context reads
 */

import type { ColumnDef, SortingState, ColumnFiltersState, VisibilityState, RowSelectionState, PaginationState } from '@tanstack/react-table'

export type { ColumnDef, SortingState, ColumnFiltersState, VisibilityState, RowSelectionState, PaginationState }

// ── Language / locale ──────────────────────────────────────────────────────

export type DataTableLanguage = 'en' | 'ar'

// ── Density ────────────────────────────────────────────────────────────────

export type DataTableDensity = 'compact' | 'comfortable'

// ── Filter descriptor ──────────────────────────────────────────────────────

export type DataTableFilterType = 'text' | 'select' | 'date-range' | 'number-range'

export interface DataTableSelectOption {
  label_en: string
  label_ar?: string
  value: string
}

export interface DataTableColumnFilter<TData = unknown> {
  /** Column accessor key — must match the column `id` / `accessorKey` */
  columnId: string
  type: DataTableFilterType
  /** For select filters: the list of options */
  options?: DataTableSelectOption[]
  /** Placeholder shown in text input */
  placeholder_en?: string
  placeholder_ar?: string
}

// ── Column definition augmentation ────────────────────────────────────────
// DataTable accepts standard TanStack ColumnDef<TData> objects enriched with
// optional Sentra-specific bilingual header metadata.

export interface DataTableColumnMeta {
  /** English column header — takes precedence over `header` string if present */
  header_en?: string
  /** Arabic column header */
  header_ar?: string
  /** Whether this column can be resized */
  resizable?: boolean
  /** Whether this column can be pinned */
  pinnable?: boolean
}

// ── Server-side state ─────────────────────────────────────────────────────

export interface DataTableServerState {
  sorting: SortingState
  columnFilters: ColumnFiltersState
  pagination: PaginationState
  globalFilter: string
}

export interface DataTableServerCallbacks {
  onStateChange: (state: DataTableServerState) => void
}

// ── Bulk action ───────────────────────────────────────────────────────────

export interface DataTableBulkAction {
  id: string
  label_en: string
  label_ar?: string
  icon?: React.ReactNode
  variant?: 'default' | 'destructive' | 'outline'
  onAction: (selectedRowIds: string[]) => void
}

// ── DataTable main props ───────────────────────────────────────────────────

export interface DataTableProps<TData> {
  // ── Data + columns ──────────────────────────────────────────────────────
  data: TData[]
  columns: ColumnDef<TData, unknown>[]

  // ── Identity ────────────────────────────────────────────────────────────
  /**
   * A function that returns a unique string key for each row.
   * Required for row selection and stable React keys.
   */
  getRowId?: (row: TData) => string

  // ── Locale ──────────────────────────────────────────────────────────────
  language?: DataTableLanguage

  // ── Filters ─────────────────────────────────────────────────────────────
  filterDefs?: DataTableColumnFilter<TData>[]
  /** Show the global search box above the table */
  showGlobalSearch?: boolean

  // ── Pagination ──────────────────────────────────────────────────────────
  /**
   * Client-side mode (default): DataTable manages pagination state internally.
   * Server-side mode: pass `totalRows` + `serverCallbacks` — state is lifted.
   */
  pageSize?: number
  pageSizeOptions?: number[]
  totalRows?: number

  // ── Server-side mode ────────────────────────────────────────────────────
  /**
   * When provided, DataTable enters controlled server-side mode.
   * The component fires `onStateChange` on every sort/filter/page change.
   * Products NEVER fetch inside DataTable — they do it from their own bridge.
   */
  serverCallbacks?: DataTableServerCallbacks

  // ── Loading / error states ───────────────────────────────────────────────
  loading?: boolean
  error?: string | null

  // ── Row interactions ─────────────────────────────────────────────────────
  onRowClick?: (row: TData) => void

  // ── Row selection ────────────────────────────────────────────────────────
  enableRowSelection?: boolean
  bulkActions?: DataTableBulkAction[]

  // ── Expandable rows ───────────────────────────────────────────────────────
  /**
   * Slot: if provided, renders below the clicked row as an expand panel.
   * Receives the row data.
   */
  renderExpandedRow?: (row: TData) => React.ReactNode

  // ── Column features ──────────────────────────────────────────────────────
  enableColumnVisibility?: boolean
  enableColumnPinning?: boolean
  enableColumnResizing?: boolean
  enableSorting?: boolean
  enableMultiSort?: boolean

  // ── Density ──────────────────────────────────────────────────────────────
  showDensityToggle?: boolean
  defaultDensity?: DataTableDensity

  // ── CSV export ───────────────────────────────────────────────────────────
  showCsvExport?: boolean
  csvFilename?: string

  // ── Styling ──────────────────────────────────────────────────────────────
  className?: string
  /** Sticky header (default: true) */
  stickyHeader?: boolean
}
