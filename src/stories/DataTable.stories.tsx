/**
 * DataTable.stories.tsx
 *
 * Storybook stories for the DataTable component.
 *
 * Variants:
 *   - Default EN/LTR with sorting + filters + pagination
 *   - Arabic RTL dark
 *   - Server-side mode demo (shows controlled state callbacks)
 *   - 1 000-row client-side performance demo
 *   - Row selection + bulk actions
 *   - Expandable rows
 *   - Column visibility + pinning
 */

import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import type { ColumnDef } from '@tanstack/react-table'
import { DataTable } from '../components/data-table/DataTable'
import type {
  DataTableColumnFilter,
  DataTableBulkAction,
  DataTableColumnMeta,
} from '../components/data-table/types'
import { Badge } from '../components/ui/badge'
import { Trash2 } from 'lucide-react'

// ── Shared types + data ───────────────────────────────────────────────────────

interface AlertRow {
  id: string
  title_en: string
  title_ar: string
  severity: 'critical' | 'high' | 'medium' | 'low'
  source: string
  scope_en: string
  scope_ar: string
  publishedAt: string
  score: number
}

const SEVERITIES = ['critical', 'high', 'medium', 'low'] as const
const SOURCES = ['Reuters', 'AFP', 'AP News', 'Sky News Arabia', 'Al Jazeera', 'BBC Arabic']
const SCOPES_EN = ['Iran', 'Gulf Affairs', 'Russia-Ukraine', 'Africa', 'Domestic']
const SCOPES_AR = ['إيران', 'الشأن الخليجي', 'روسيا وأوكرانيا', 'أفريقيا', 'الشأن الداخلي']

function makeRow(i: number): AlertRow {
  const sev = SEVERITIES[i % 4]
  const scopeIdx = i % 5
  return {
    id: `alert-${String(i + 1).padStart(4, '0')}`,
    title_en: `[${sev.toUpperCase()}] Intelligence report #${i + 1} — regional security update`,
    title_ar: `[${sev === 'critical' ? 'حرج' : sev === 'high' ? 'مرتفع' : sev === 'medium' ? 'متوسط' : 'منخفض'}] تقرير استخباراتي #${i + 1} — تحديث الأمن الإقليمي`,
    severity: sev,
    source: SOURCES[i % SOURCES.length],
    scope_en: SCOPES_EN[scopeIdx],
    scope_ar: SCOPES_AR[scopeIdx],
    publishedAt: new Date(Date.now() - (i * 3_600_000)).toISOString(),
    score: Math.round(100 - i * 0.1),
  }
}

const ROWS_20 = Array.from({ length: 20 }, (_, i) => makeRow(i))
const ROWS_1K = Array.from({ length: 1000 }, (_, i) => makeRow(i))

// ── Columns ───────────────────────────────────────────────────────────────────

const severityColors: Record<string, string> = {
  critical: 'bg-destructive/15 text-destructive',
  high:     'bg-destructive/10 text-destructive',
  medium:   'bg-amber-500/15 text-amber-600',
  low:      'bg-emerald-500/10 text-emerald-600',
}

const makeColumns = (language: 'en' | 'ar'): ColumnDef<AlertRow>[] => [
  {
    accessorKey: 'id',
    meta: { header_en: 'ID', header_ar: 'المعرّف' } satisfies DataTableColumnMeta,
    header: 'ID',
    size: 100,
  },
  {
    accessorKey: 'title_en',
    meta: { header_en: 'Title', header_ar: 'العنوان' } satisfies DataTableColumnMeta,
    header: 'Title',
    cell: ({ row }) => {
      const val = language === 'ar' ? row.original.title_ar : row.original.title_en
      return <span className="line-clamp-2">{val}</span>
    },
    size: 360,
  },
  {
    accessorKey: 'severity',
    meta: { header_en: 'Severity', header_ar: 'الخطورة' } satisfies DataTableColumnMeta,
    header: 'Severity',
    cell: ({ row }) => {
      const s = row.original.severity
      const labelMap = { critical: 'حرج', high: 'مرتفع', medium: 'متوسط', low: 'منخفض' }
      return (
        <Badge className={`${severityColors[s]} border-0 text-xs font-semibold`}>
          {language === 'ar' ? labelMap[s] : s}
        </Badge>
      )
    },
    size: 100,
  },
  {
    accessorKey: 'source',
    meta: { header_en: 'Source', header_ar: 'المصدر' } satisfies DataTableColumnMeta,
    header: 'Source',
    size: 130,
  },
  {
    accessorKey: 'scope_en',
    meta: { header_en: 'Scope', header_ar: 'النطاق' } satisfies DataTableColumnMeta,
    header: 'Scope',
    cell: ({ row }) => language === 'ar' ? row.original.scope_ar : row.original.scope_en,
    size: 140,
  },
  {
    accessorKey: 'score',
    meta: { header_en: 'Score', header_ar: 'الدرجة' } satisfies DataTableColumnMeta,
    header: 'Score',
    size: 80,
    cell: ({ row }) => (
      <span className="tabular-nums font-mono text-xs">{row.original.score}</span>
    ),
  },
  {
    accessorKey: 'publishedAt',
    meta: { header_en: 'Published', header_ar: 'تاريخ النشر' } satisfies DataTableColumnMeta,
    header: 'Published',
    size: 140,
    cell: ({ row }) => {
      const d = new Date(row.original.publishedAt)
      return (
        <span className="text-xs text-muted-foreground">
          {d.toLocaleDateString(language === 'ar' ? 'ar-QA' : 'en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })}
        </span>
      )
    },
  },
]

const filterDefs_en: DataTableColumnFilter<AlertRow>[] = [
  {
    columnId: 'title_en',
    type: 'text',
    placeholder_en: 'Search title…',
    placeholder_ar: 'ابحث في العنوان…',
  },
  {
    columnId: 'severity',
    type: 'select',
    options: [
      { value: 'critical', label_en: 'Critical', label_ar: 'حرج' },
      { value: 'high',     label_en: 'High',     label_ar: 'مرتفع' },
      { value: 'medium',   label_en: 'Medium',   label_ar: 'متوسط' },
      { value: 'low',      label_en: 'Low',      label_ar: 'منخفض' },
    ],
  },
  {
    columnId: 'source',
    type: 'text',
    placeholder_en: 'Filter source…',
    placeholder_ar: 'تصفية المصدر…',
  },
]

const bulkActions_en: DataTableBulkAction[] = [
  {
    id: 'delete',
    label_en: 'Delete',
    label_ar: 'حذف',
    variant: 'destructive',
    icon: <Trash2 className="size-3.5" />,
    onAction: (ids) => alert(`Delete: ${ids.join(', ')}`),
  },
]

// ── Meta ──────────────────────────────────────────────────────────────────────

const meta: Meta<typeof DataTable> = {
  title: "Domain/Data Table",
  component: DataTable as React.ComponentType,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark',  value: 'hsl(210 20% 6%)' },
        { name: 'light', value: 'hsl(0 0% 98%)' },
      ],
    },
  },
}
export default meta

type Story = StoryObj<typeof DataTable>

// ── Stories ───────────────────────────────────────────────────────────────────

/** Default: EN/LTR, sorting + text/select filters, global search, pagination. */
export const Default: Story = {
  render: () => (
    <div className="dark p-4 bg-background rounded-xl">
      <DataTable<AlertRow>
        data={ROWS_20}
        columns={makeColumns('en')}
        getRowId={(row) => row.id}
        language="en"
        filterDefs={filterDefs_en}
        showGlobalSearch
        pageSize={10}
        enableRowSelection
        bulkActions={bulkActions_en}
        showCsvExport
        showDensityToggle
        enableColumnVisibility
        enableColumnPinning
        onRowClick={(row) => console.log('Row clicked:', row.id)}
      />
    </div>
  ),
}

/** Arabic RTL dark — all chrome strings and filter labels in Arabic */
export const ArabicRTL: Story = {
  render: () => (
    <div className="dark p-4 bg-background rounded-xl" dir="rtl">
      <DataTable<AlertRow>
        data={ROWS_20}
        columns={makeColumns('ar')}
        getRowId={(row) => row.id}
        language="ar"
        filterDefs={filterDefs_en}
        showGlobalSearch
        pageSize={10}
        enableRowSelection
        showCsvExport
        showDensityToggle
        enableColumnVisibility
        csvFilename="تصدير-بيانات"
      />
    </div>
  ),
}

/** Server-side mode — state lifts out via onStateChange callback */
export const ServerSideMode: Story = {
  render: () => {
    const [log, setLog] = React.useState('(waiting for state change…)')
    return (
      <div className="dark p-4 bg-background rounded-xl space-y-4">
        <pre className="text-[10px] text-muted-foreground bg-muted p-2 rounded-md overflow-auto max-h-24">
          {log}
        </pre>
        <DataTable<AlertRow>
          data={ROWS_20}
          columns={makeColumns('en')}
          getRowId={(row) => row.id}
          language="en"
          filterDefs={filterDefs_en}
          showGlobalSearch
          pageSize={10}
          totalRows={200}
          serverCallbacks={{
            onStateChange: (state) => setLog(JSON.stringify(state, null, 2)),
          }}
          enableRowSelection
          showCsvExport
        />
      </div>
    )
  },
}

/** 1 000-row client-side performance demo */
export const OneThousandRows: Story = {
  render: () => (
    <div className="dark p-4 bg-background rounded-xl">
      <DataTable<AlertRow>
        data={ROWS_1K}
        columns={makeColumns('en')}
        getRowId={(row) => row.id}
        language="en"
        filterDefs={filterDefs_en}
        showGlobalSearch
        pageSize={50}
        pageSizeOptions={[25, 50, 100, 200]}
        showCsvExport
        csvFilename="1k-export"
        showDensityToggle
        enableColumnVisibility
      />
    </div>
  ),
}

/** Expandable rows */
export const ExpandableRows: Story = {
  render: () => (
    <div className="dark p-4 bg-background rounded-xl">
      <DataTable<AlertRow>
        data={ROWS_20}
        columns={makeColumns('en')}
        getRowId={(row) => row.id}
        language="en"
        showGlobalSearch={false}
        pageSize={10}
        renderExpandedRow={(row) => (
          <div className="text-xs text-muted-foreground space-y-1 p-2">
            <p><strong>ID:</strong> {row.id}</p>
            <p><strong>Published:</strong> {new Date(row.publishedAt).toLocaleString()}</p>
            <p><strong>Score:</strong> {row.score}</p>
          </div>
        )}
      />
    </div>
  ),
}

/** Loading state */
export const Loading: Story = {
  render: () => (
    <div className="dark p-4 bg-background rounded-xl">
      <DataTable<AlertRow>
        data={[]}
        columns={makeColumns('en')}
        language="en"
        loading
        pageSize={10}
      />
    </div>
  ),
}

/** Error state */
export const ErrorState: Story = {
  render: () => (
    <div className="dark p-4 bg-background rounded-xl">
      <DataTable<AlertRow>
        data={[]}
        columns={makeColumns('en')}
        language="en"
        error="Failed to load intelligence data. Please retry."
        pageSize={10}
      />
    </div>
  ),
}
