'use client'

/**
 * DataTable — flagship grid component for the Sentra Design System.
 *
 * Built on @tanstack/react-table over the existing shadcn/ui Table primitive.
 *
 * Features:
 *   - Multi-column sorting (keyboard-navigable aria-sort headers)
 *   - Per-column filters: text / select / date-range / number-range
 *   - Global search box
 *   - Column visibility toggle
 *   - Column pinning (start/end)
 *   - Client-side pagination + controlled server-side mode
 *   - Row selection (checkbox) + bulk-action slot
 *   - Row click handler + expandable row slot
 *   - Density toggle (compact / comfortable)
 *   - Sticky header
 *   - Loading skeleton (SectionSkeleton)
 *   - Empty + error states
 *   - CSV export of current view (client-side)
 *   - Full RTL (logical props, dir-aware sort icons)
 *   - Bilingual: all chrome strings translated EN/AR internally via `language` prop
 *   - WCAG 2.1 AA: visible focus rings, aria-sort, aria-label on all controls
 *
 * Design rules:
 *   - Rule 8  — bilingual (EN/AR), RTL logical properties
 *   - Rule 16 — Sentra app style: semantic tokens only
 *   - Rule 25 — product-agnostic: NEVER fetches; data arrives entirely via props
 */

import * as React from 'react'
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
  type SortingState,
  type ColumnFiltersState,
  type VisibilityState,
  type RowSelectionState,
  type PaginationState,
  type ColumnPinningState,
} from '@tanstack/react-table'
import {
  ChevronDown,
  ChevronUp,
  ChevronsUpDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Download,
  Search,
  X,
  Eye,
  EyeOff,
  AlignJustify,
  AlignCenter,
} from 'lucide-react'

import { cn } from '../../lib/utils'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Checkbox } from '../ui/checkbox'
import { Badge } from '../ui/badge'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '../ui/dropdown-menu'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import { Skeleton } from '../ui/skeleton'
import { SectionSkeleton } from '../ui/section-skeleton'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Calendar } from '../ui/calendar'
import { Separator } from '../ui/separator'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'

import type {
  DataTableProps,
  DataTableLanguage,
  DataTableDensity,
  DataTableColumnFilter,
  DataTableSelectOption,
} from './types'

// ── I18n strings ──────────────────────────────────────────────────────────────

const STRINGS = {
  en: {
    search: 'Search…',
    noResults: 'No results found.',
    noData: 'No data available.',
    error: 'Failed to load data.',
    rowsPerPage: 'Rows per page',
    of: 'of',
    page: 'Page',
    columns: 'Columns',
    export: 'Export CSV',
    filters: 'Filters',
    clearFilters: 'Clear filters',
    selectAll: 'Select all',
    deselectAll: 'Deselect all',
    selected: 'selected',
    actions: 'Actions',
    first: 'First page',
    previous: 'Previous page',
    next: 'Next page',
    last: 'Last page',
    sortAsc: 'Sort ascending',
    sortDesc: 'Sort descending',
    removeSort: 'Remove sort',
    loading: 'Loading…',
    compact: 'Compact',
    comfortable: 'Comfortable',
    density: 'Density',
    from: 'From',
    to: 'To',
    all: 'All',
    pin: 'Pin column',
    unpin: 'Unpin',
    pinStart: 'Pin to start',
    pinEnd: 'Pin to end',
  },
  ar: {
    search: 'بحث…',
    noResults: 'لا توجد نتائج.',
    noData: 'لا تتوفر بيانات.',
    error: 'فشل تحميل البيانات.',
    rowsPerPage: 'صفوف في الصفحة',
    of: 'من',
    page: 'صفحة',
    columns: 'الأعمدة',
    export: 'تصدير CSV',
    filters: 'تصفية',
    clearFilters: 'مسح التصفية',
    selectAll: 'تحديد الكل',
    deselectAll: 'إلغاء الكل',
    selected: 'محدد',
    actions: 'إجراءات',
    first: 'الصفحة الأولى',
    previous: 'الصفحة السابقة',
    next: 'الصفحة التالية',
    last: 'الصفحة الأخيرة',
    sortAsc: 'ترتيب تصاعدي',
    sortDesc: 'ترتيب تنازلي',
    removeSort: 'إزالة الترتيب',
    loading: 'جارٍ التحميل…',
    compact: 'مضغوط',
    comfortable: 'مريح',
    density: 'الكثافة',
    from: 'من',
    to: 'إلى',
    all: 'الكل',
    pin: 'تثبيت العمود',
    unpin: 'إلغاء التثبيت',
    pinStart: 'تثبيت في البداية',
    pinEnd: 'تثبيت في النهاية',
  },
} as const

type Strings = typeof STRINGS['en']

function useT(language: DataTableLanguage): Strings {
  return STRINGS[language] as Strings
}

// ── CSV export helper ─────────────────────────────────────────────────────────

function exportToCsv<TData>(
  rows: TData[],
  headers: { id: string; label: string }[],
  filename: string,
) {
  const headerRow = headers.map((h) => `"${h.label}"`).join(',')
  const dataRows = rows.map((row) => {
    return headers
      .map((h) => {
        const val = (row as Record<string, unknown>)[h.id]
        const str = val === null || val === undefined ? '' : String(val)
        return `"${str.replace(/"/g, '""')}"`
      })
      .join(',')
  })
  const csv = [headerRow, ...dataRows].join('\n')
  const blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `${filename}.csv`
  link.click()
  URL.revokeObjectURL(url)
}

// ── Sort icon ─────────────────────────────────────────────────────────────────

const SortIcon = ({ sorted, isRTL }: { sorted: false | 'asc' | 'desc'; isRTL: boolean }) => {
  if (sorted === 'asc') return <ChevronUp className="ms-1 size-3.5 shrink-0" aria-hidden="true" />
  if (sorted === 'desc') return <ChevronDown className="ms-1 size-3.5 shrink-0" aria-hidden="true" />
  return <ChevronsUpDown className="ms-1 size-3.5 shrink-0 text-muted-foreground/50" aria-hidden="true" />
}

// ── DateRangeFilter ───────────────────────────────────────────────────────────

const DateRangeFilter = ({
  value,
  onChange,
  language,
  t,
}: {
  value: { from?: Date; to?: Date } | undefined
  onChange: (v: { from?: Date; to?: Date } | undefined) => void
  language: DataTableLanguage
  t: (typeof STRINGS)['en']
}) => {
  const [open, setOpen] = React.useState(false)
  const fromLabel = value?.from ? value.from.toLocaleDateString() : t.from
  const toLabel = value?.to ? value.to.toLocaleDateString() : t.to
  const hasValue = !!(value?.from || value?.to)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className={cn('h-8 text-xs gap-1', hasValue && 'border-primary text-primary')}
          aria-label={`${t.from} / ${t.to}`}
        >
          {fromLabel} — {toLabel}
          {hasValue && (
            <X
              className="ms-1 size-3.5"
              onClick={(e) => { e.stopPropagation(); onChange(undefined) }}
              aria-label={t.clearFilters}
            />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="range"
          selected={{ from: value?.from, to: value?.to }}
          onSelect={(range) => onChange(range ? { from: range.from, to: range.to } : undefined)}
          numberOfMonths={2}
          dir={language === 'ar' ? 'rtl' : 'ltr'}
        />
      </PopoverContent>
    </Popover>
  )
}

// ── NumberRangeFilter ─────────────────────────────────────────────────────────

const NumberRangeFilter = ({
  value,
  onChange,
  t,
}: {
  value: { min?: number; max?: number } | undefined
  onChange: (v: { min?: number; max?: number } | undefined) => void
  t: (typeof STRINGS)['en']
}) => {
  const [min, setMin] = React.useState(value?.min !== undefined ? String(value.min) : '')
  const [max, setMax] = React.useState(value?.max !== undefined ? String(value.max) : '')

  const commit = () => {
    const minVal = min !== '' ? Number(min) : undefined
    const maxVal = max !== '' ? Number(max) : undefined
    if (minVal === undefined && maxVal === undefined) {
      onChange(undefined)
    } else {
      onChange({ min: minVal, max: maxVal })
    }
  }

  return (
    <div className="flex items-center gap-1.5">
      <Input
        type="number"
        className="h-8 w-20 text-xs"
        placeholder={t.from}
        value={min}
        onChange={(e) => setMin(e.target.value)}
        onBlur={commit}
        aria-label={t.from}
      />
      <span className="text-xs text-muted-foreground">–</span>
      <Input
        type="number"
        className="h-8 w-20 text-xs"
        placeholder={t.to}
        value={max}
        onChange={(e) => setMax(e.target.value)}
        onBlur={commit}
        aria-label={t.to}
      />
    </div>
  )
}

// ── Loading skeleton rows ─────────────────────────────────────────────────────

const LoadingSkeleton = ({ columns, rows = 5 }: { columns: number; rows?: number }) => (
  <>
    {Array.from({ length: rows }).map((_, ri) => (
      <TableRow key={ri} aria-hidden="true">
        {Array.from({ length: columns }).map((_, ci) => (
          <TableCell key={ci}>
            <Skeleton className="h-4 w-full" />
          </TableCell>
        ))}
      </TableRow>
    ))}
  </>
)

// ── Main component ────────────────────────────────────────────────────────────

function DataTable<TData>({
  data,
  columns,
  getRowId,
  language = 'en',
  filterDefs,
  showGlobalSearch = true,
  pageSize: initialPageSize = 20,
  pageSizeOptions = [10, 20, 50, 100],
  totalRows,
  serverCallbacks,
  loading = false,
  error = null,
  onRowClick,
  enableRowSelection = false,
  bulkActions,
  renderExpandedRow,
  enableColumnVisibility = true,
  enableColumnPinning = true,
  enableColumnResizing = false,
  enableSorting = true,
  enableMultiSort = true,
  showDensityToggle = true,
  defaultDensity = 'comfortable',
  showCsvExport = true,
  csvFilename = 'export',
  className,
  stickyHeader = true,
}: DataTableProps<TData>) {
  const t = useT(language)
  const isRTL = language === 'ar'
  const isServerMode = !!serverCallbacks

  // ── State ──────────────────────────────────────────────────────────────────
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({})
  const [columnPinning, setColumnPinning] = React.useState<ColumnPinningState>({})
  const [globalFilter, setGlobalFilter] = React.useState('')
  const [density, setDensity] = React.useState<DataTableDensity>(defaultDensity)
  const [expandedRows, setExpandedRows] = React.useState<Record<string, boolean>>({})
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: initialPageSize,
  })

  // ── Server-side: fire callback on state change ────────────────────────────
  const prevServerState = React.useRef<string>('')
  React.useEffect(() => {
    if (!isServerMode) return
    const state = { sorting, columnFilters, pagination, globalFilter }
    const serialized = JSON.stringify(state)
    if (serialized !== prevServerState.current) {
      prevServerState.current = serialized
      serverCallbacks!.onStateChange(state)
    }
  }, [sorting, columnFilters, pagination, globalFilter, isServerMode, serverCallbacks])

  // ── Selection column ──────────────────────────────────────────────────────
  const selectionColumn = React.useMemo(() => {
    if (!enableRowSelection) return []
    return [{
      id: '__select__',
      header: ({ table }: { table: import('@tanstack/react-table').Table<TData> }) => (
        <Checkbox
          checked={table.getIsAllPageRowsSelected() ? true : table.getIsSomePageRowsSelected() ? 'indeterminate' : false}
          onCheckedChange={(v) => table.toggleAllPageRowsSelected(!!v)}
          aria-label={t.selectAll}
        />
      ),
      cell: ({ row }: { row: import('@tanstack/react-table').Row<TData> }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(v) => row.toggleSelected(!!v)}
          aria-label={`Select row ${row.index + 1}`}
          onClick={(e) => e.stopPropagation()}
        />
      ),
      enableSorting: false,
      enableHiding: false,
      size: 44,
    }] as import('@tanstack/react-table').ColumnDef<TData>[]
  }, [enableRowSelection, t.selectAll])

  const allColumns = React.useMemo(
    () => [...selectionColumn, ...columns],
    [selectionColumn, columns],
  )

  // ── Table instance ────────────────────────────────────────────────────────
  const table = useReactTable({
    data,
    columns: allColumns,
    getRowId,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: enableSorting ? getSortedRowModel() : undefined,
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onColumnPinningChange: setColumnPinning,
    onGlobalFilterChange: setGlobalFilter,
    onPaginationChange: setPagination,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      columnPinning,
      globalFilter,
      pagination,
    },
    enableMultiSort,
    enableColumnPinning,
    enableColumnResizing,
    // Server-side: disable client-side counts when totalRows is provided
    manualPagination: isServerMode,
    manualSorting: isServerMode,
    manualFiltering: isServerMode,
    pageCount: isServerMode && totalRows !== undefined ? Math.ceil(totalRows / pagination.pageSize) : undefined,
    columnResizeMode: enableColumnResizing ? 'onChange' : undefined,
  })

  // ── Selection info ────────────────────────────────────────────────────────
  const selectedRowIds = Object.keys(rowSelection).filter((k) => rowSelection[k])
  const hasSelection = selectedRowIds.length > 0
  const hasFilters = columnFilters.length > 0 || globalFilter.length > 0

  // ── Density classes ───────────────────────────────────────────────────────
  const cellCls = density === 'compact' ? 'py-1.5 px-3 text-xs' : 'py-3 px-4 text-sm'
  const headCls = density === 'compact' ? 'h-8 px-3 text-xs' : 'h-11 px-4 text-sm'

  // ── CSV export ────────────────────────────────────────────────────────────
  const handleExport = () => {
    const visibleColumns = table
      .getAllLeafColumns()
      .filter((col) => col.getIsVisible() && col.id !== '__select__')
    const headers = visibleColumns.map((col) => {
      const meta = col.columnDef.meta as import('./types').DataTableColumnMeta | undefined
      const label =
        (language === 'ar' ? meta?.header_ar : undefined) ??
        meta?.header_en ??
        (typeof col.columnDef.header === 'string' ? col.columnDef.header : col.id)
      return { id: col.id, label }
    })
    const rows = table.getFilteredRowModel().rows.map((r) => r.original)
    exportToCsv(rows, headers, csvFilename)
  }

  // ── Filter component for a given filter def ───────────────────────────────
  const renderFilterControl = (fd: DataTableColumnFilter<TData>) => {
    const column = table.getColumn(fd.columnId)
    if (!column) return null

    const filterValue = column.getFilterValue()

    if (fd.type === 'text') {
      return (
        <div key={fd.columnId} className="relative">
          <Search className="absolute start-2 top-1/2 -translate-y-1/2 size-3.5 text-muted-foreground pointer-events-none" aria-hidden="true" />
          <Input
            className="h-8 ps-7 text-xs w-40"
            placeholder={language === 'ar' ? fd.placeholder_ar : fd.placeholder_en}
            value={(filterValue as string) ?? ''}
            onChange={(e) => column.setFilterValue(e.target.value)}
            aria-label={language === 'ar' ? fd.placeholder_ar : fd.placeholder_en}
          />
        </div>
      )
    }

    if (fd.type === 'select') {
      const options = fd.options ?? []
      return (
        <Select
          key={fd.columnId}
          value={(filterValue as string) ?? ''}
          onValueChange={(v) => column.setFilterValue(v === '' ? undefined : v)}
        >
          <SelectTrigger className="h-8 text-xs w-36" aria-label={fd.columnId}>
            <SelectValue placeholder={t.all} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">{t.all}</SelectItem>
            {options.map((opt: DataTableSelectOption) => (
              <SelectItem key={opt.value} value={opt.value}>
                {language === 'ar' ? (opt.label_ar ?? opt.label_en) : opt.label_en}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )
    }

    if (fd.type === 'date-range') {
      return (
        <DateRangeFilter
          key={fd.columnId}
          value={filterValue as { from?: Date; to?: Date } | undefined}
          onChange={(v) => column.setFilterValue(v)}
          language={language}
          t={t}
        />
      )
    }

    if (fd.type === 'number-range') {
      return (
        <NumberRangeFilter
          key={fd.columnId}
          value={filterValue as { min?: number; max?: number } | undefined}
          onChange={(v) => column.setFilterValue(v)}
          t={t}
        />
      )
    }

    return null
  }

  // ── Toolbar ────────────────────────────────────────────────────────────────

  const toolbar = (
    <div
      className="flex flex-wrap items-center gap-2 pb-3"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Global search */}
      {showGlobalSearch && (
        <div className="relative flex-1 min-w-[180px] max-w-xs">
          <Search className="absolute start-2 top-1/2 -translate-y-1/2 size-3.5 text-muted-foreground pointer-events-none" aria-hidden="true" />
          <Input
            className="h-8 ps-7 text-xs"
            placeholder={t.search}
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
            aria-label={t.search}
          />
          {globalFilter && (
            <button
              className="absolute end-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              onClick={() => setGlobalFilter('')}
              aria-label={t.clearFilters}
            >
              <X className="size-3.5" />
            </button>
          )}
        </div>
      )}

      {/* Per-column filter controls */}
      {filterDefs && filterDefs.map((fd) => renderFilterControl(fd))}

      {/* Clear filters */}
      {hasFilters && (
        <Button
          variant="ghost"
          size="sm"
          className="h-8 text-xs text-muted-foreground"
          onClick={() => {
            setColumnFilters([])
            setGlobalFilter('')
          }}
          aria-label={t.clearFilters}
        >
          <X className="size-3.5 me-1" aria-hidden="true" />
          {t.clearFilters}
        </Button>
      )}

      <div className="flex items-center gap-1.5 ms-auto">
        {/* Bulk actions */}
        {hasSelection && bulkActions && bulkActions.length > 0 && (
          <>
            <Badge variant="secondary" className="text-xs h-8 px-2.5 rounded-md font-normal">
              {selectedRowIds.length} {t.selected}
            </Badge>
            {bulkActions.map((action) => (
              <Button
                key={action.id}
                variant={action.variant ?? 'outline'}
                size="sm"
                className="h-8 text-xs"
                onClick={() => action.onAction(selectedRowIds)}
              >
                {action.icon && <span className="me-1">{action.icon}</span>}
                {language === 'ar' ? (action.label_ar ?? action.label_en) : action.label_en}
              </Button>
            ))}
            <Separator orientation="vertical" className="h-5" />
          </>
        )}

        {/* Density toggle */}
        {showDensityToggle && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0"
                  onClick={() => setDensity(density === 'compact' ? 'comfortable' : 'compact')}
                  aria-label={t.density}
                >
                  {density === 'compact' ? (
                    <AlignJustify className="size-4" aria-hidden="true" />
                  ) : (
                    <AlignCenter className="size-4" aria-hidden="true" />
                  )}
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                {density === 'compact' ? t.comfortable : t.compact}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}

        {/* Column visibility */}
        {enableColumnVisibility && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-8 text-xs gap-1">
                <Eye className="size-3.5" aria-hidden="true" />
                {t.columns}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align={isRTL ? 'start' : 'end'}>
              {table
                .getAllLeafColumns()
                .filter((col) => col.id !== '__select__' && col.getCanHide())
                .map((col) => {
                  const meta = col.columnDef.meta as import('./types').DataTableColumnMeta | undefined
                  const label =
                    (language === 'ar' ? meta?.header_ar : undefined) ??
                    meta?.header_en ??
                    (typeof col.columnDef.header === 'string' ? col.columnDef.header : col.id)
                  return (
                    <DropdownMenuCheckboxItem
                      key={col.id}
                      checked={col.getIsVisible()}
                      onCheckedChange={(v) => col.toggleVisibility(!!v)}
                    >
                      {label}
                    </DropdownMenuCheckboxItem>
                  )
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        )}

        {/* CSV export */}
        {showCsvExport && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 w-8 p-0"
                  onClick={handleExport}
                  aria-label={t.export}
                >
                  <Download className="size-4" aria-hidden="true" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">{t.export}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
    </div>
  )

  // ── Error state ────────────────────────────────────────────────────────────
  if (error) {
    return (
      <div
        className={cn('rounded-lg border border-destructive/30 bg-card p-8 text-center', className)}
        role="alert"
        aria-live="assertive"
      >
        <p className="text-sm text-destructive">{error || t.error}</p>
      </div>
    )
  }

  // ── Table ─────────────────────────────────────────────────────────────────

  const headerRows = table.getHeaderGroups()
  const bodyRows = table.getRowModel().rows

  // Pagination info
  const pageIndex = table.getState().pagination.pageIndex
  const pageCount = table.getPageCount()
  const totalCount = isServerMode
    ? (totalRows ?? data.length)
    : table.getFilteredRowModel().rows.length
  const rowFrom = pageIndex * pagination.pageSize + 1
  const rowTo = Math.min(rowFrom + pagination.pageSize - 1, totalCount)

  return (
    <div className={cn('flex flex-col gap-0', className)} dir={isRTL ? 'rtl' : 'ltr'}>
      {toolbar}

      {/* Table wrapper — sticky header */}
      <div
        className={cn(
          'rounded-lg border border-border bg-card overflow-auto shadow-sm',
          stickyHeader && 'relative',
        )}
        style={{ maxHeight: stickyHeader ? '65vh' : undefined }}
      >
        <Table>
          <TableHeader
            className={cn(
              stickyHeader && 'sticky top-0 z-10 bg-card shadow-sm',
            )}
          >
            {headerRows.map((headerGroup) => (
              <TableRow key={headerGroup.id} className="hover:bg-transparent border-b border-border">
                {headerGroup.headers.map((header) => {
                  const meta = header.column.columnDef.meta as import('./types').DataTableColumnMeta | undefined
                  const isSortable = header.column.getCanSort()
                  const sorted = header.column.getIsSorted()
                  const ariaSort = sorted === 'asc' ? 'ascending' : sorted === 'desc' ? 'descending' : 'none'
                  const isPinned = header.column.getIsPinned()

                  // Bilingual header label
                  const headerContent = header.isPlaceholder ? null : (() => {
                    if (meta?.header_en || meta?.header_ar) {
                      return language === 'ar' ? (meta.header_ar ?? meta.header_en) : meta.header_en
                    }
                    return flexRender(header.column.columnDef.header, header.getContext())
                  })()

                  return (
                    <TableHead
                      key={header.id}
                      colSpan={header.colSpan}
                      className={cn(
                        headCls,
                        'font-semibold text-muted-foreground select-none whitespace-nowrap',
                        isSortable && 'cursor-pointer hover:text-foreground transition-colors duration-fast ease-standard',
                        isPinned === 'left' && 'sticky start-0 bg-card z-20 shadow-[inset_-1px_0_0_hsl(var(--border))]',
                        isPinned === 'right' && 'sticky end-0 bg-card z-20 shadow-[inset_1px_0_0_hsl(var(--border))]',
                      )}
                      style={{
                        width: header.getSize() !== 150 ? header.getSize() : undefined,
                      }}
                      aria-sort={isSortable ? ariaSort : undefined}
                      onClick={isSortable ? header.column.getToggleSortingHandler() : undefined}
                      onKeyDown={isSortable ? (e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault()
                          header.column.getToggleSortingHandler()?.(e)
                        }
                      } : undefined}
                      tabIndex={isSortable ? 0 : undefined}
                      role={isSortable ? 'button' : undefined}
                      aria-label={
                        isSortable
                          ? `${sorted === 'asc' ? t.sortDesc : sorted === 'desc' ? t.removeSort : t.sortAsc}: ${typeof headerContent === 'string' ? headerContent : header.id}`
                          : undefined
                      }
                    >
                      <div className="flex items-center">
                        {headerContent}
                        {isSortable && (
                          <SortIcon sorted={sorted} isRTL={isRTL} />
                        )}
                        {/* Column resizer */}
                        {enableColumnResizing && header.column.getCanResize() && (
                          <div
                            className={cn(
                              'absolute end-0 top-0 h-full w-1 cursor-col-resize touch-none select-none bg-border opacity-0 hover:opacity-100',
                              header.column.getIsResizing() && 'opacity-100 bg-primary',
                            )}
                            onMouseDown={header.getResizeHandler()}
                            onTouchStart={header.getResizeHandler()}
                            onClick={(e) => e.stopPropagation()}
                            aria-hidden="true"
                          />
                        )}
                      </div>
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {loading ? (
              <LoadingSkeleton
                columns={table.getAllLeafColumns().filter((c) => c.getIsVisible()).length}
                rows={pagination.pageSize > 10 ? 8 : pagination.pageSize}
              />
            ) : bodyRows.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={allColumns.length}
                  className="h-32 text-center text-sm text-muted-foreground"
                >
                  {hasFilters ? t.noResults : t.noData}
                </TableCell>
              </TableRow>
            ) : (
              bodyRows.map((row) => {
                const rowId = getRowId ? getRowId(row.original) : String(row.index)
                const isExpanded = expandedRows[rowId] ?? false

                return (
                  <React.Fragment key={row.id}>
                    <TableRow
                      data-state={row.getIsSelected() ? 'selected' : undefined}
                      className={cn(
                        'border-b border-border',
                        onRowClick && 'cursor-pointer hover:bg-muted/50 transition-colors duration-fast ease-standard',
                        row.getIsSelected() && 'bg-primary/5',
                        renderExpandedRow && 'cursor-pointer',
                      )}
                      onClick={() => {
                        onRowClick?.(row.original)
                        if (renderExpandedRow) {
                          setExpandedRows((prev) => ({
                            ...prev,
                            [rowId]: !prev[rowId],
                          }))
                        }
                      }}
                      aria-selected={row.getIsSelected()}
                    >
                      {row.getVisibleCells().map((cell) => {
                        const isPinned = cell.column.getIsPinned()
                        return (
                          <TableCell
                            key={cell.id}
                            className={cn(
                              cellCls,
                              isPinned === 'left' && 'sticky start-0 bg-card z-10 shadow-[inset_-1px_0_0_hsl(var(--border))]',
                              isPinned === 'right' && 'sticky end-0 bg-card z-10 shadow-[inset_1px_0_0_hsl(var(--border))]',
                            )}
                            style={{
                              width: cell.column.getSize() !== 150 ? cell.column.getSize() : undefined,
                            }}
                          >
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                          </TableCell>
                        )
                      })}
                    </TableRow>

                    {/* Expanded row slot */}
                    {renderExpandedRow && isExpanded && (
                      <TableRow key={`${row.id}-expanded`} className="bg-muted/30">
                        <TableCell
                          colSpan={allColumns.length}
                          className="p-4"
                        >
                          {renderExpandedRow(row.original)}
                        </TableCell>
                      </TableRow>
                    )}
                  </React.Fragment>
                )
              })
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination footer */}
      <div
        className="flex flex-wrap items-center justify-between gap-3 pt-3 text-xs text-muted-foreground"
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        {/* Rows per page */}
        <div className="flex items-center gap-2">
          <span className="whitespace-nowrap">{t.rowsPerPage}</span>
          <Select
            value={String(pagination.pageSize)}
            onValueChange={(v) => {
              table.setPageSize(Number(v))
              table.setPageIndex(0)
            }}
          >
            <SelectTrigger className="h-7 text-xs w-16" aria-label={t.rowsPerPage}>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {pageSizeOptions.map((size) => (
                <SelectItem key={size} value={String(size)} className="text-xs">
                  {size}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Row count info */}
        <span className="whitespace-nowrap tabular-nums">
          {totalCount > 0
            ? `${rowFrom}–${rowTo} ${t.of} ${totalCount}`
            : '0'}
        </span>

        {/* Page navigation */}
        <div className="flex items-center gap-0.5">
          <Button
            variant="ghost"
            size="sm"
            className="h-7 w-7 p-0"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
            aria-label={t.first}
          >
            {isRTL ? <ChevronsRight className="size-3.5" aria-hidden="true" /> : <ChevronsLeft className="size-3.5" aria-hidden="true" />}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-7 w-7 p-0"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            aria-label={t.previous}
          >
            {isRTL ? <ChevronRight className="size-3.5" aria-hidden="true" /> : <ChevronLeft className="size-3.5" aria-hidden="true" />}
          </Button>

          <span className="mx-1 tabular-nums whitespace-nowrap">
            {t.page} {pageIndex + 1} {t.of} {Math.max(1, pageCount)}
          </span>

          <Button
            variant="ghost"
            size="sm"
            className="h-7 w-7 p-0"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            aria-label={t.next}
          >
            {isRTL ? <ChevronLeft className="size-3.5" aria-hidden="true" /> : <ChevronRight className="size-3.5" aria-hidden="true" />}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-7 w-7 p-0"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
            aria-label={t.last}
          >
            {isRTL ? <ChevronsLeft className="size-3.5" aria-hidden="true" /> : <ChevronsRight className="size-3.5" aria-hidden="true" />}
          </Button>
        </div>
      </div>
    </div>
  )
}

DataTable.displayName = 'DataTable'

export { DataTable }
