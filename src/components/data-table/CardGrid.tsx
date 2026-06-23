'use client'

/**
 * CardGrid — a reusable searchable / filterable responsive card grid. Same
 * toolbar UX as DataTable (global search + faceted dropdown filters + result
 * count + empty state) but renders a grid of cards via a `renderCard`
 * render-prop instead of table rows. Caller passes already-localised labels
 * (Rule 8). Promoted into @prism/ui from motor-web (product-agnostic).
 */

import { useMemo, useState } from 'react'
import { Search, Inbox } from 'lucide-react'
import { Input } from '../ui/input'
import { NativeSelect } from '../ui/native-select'
import { EmptyState } from '../status/EmptyState'

export type CardFilter<T> = {
  /** Stable id for the dropdown. */
  key: string
  /** Localised label, e.g. "Product". */
  label: string
  /** Value extractor for an item (compared exactly to the selected option). */
  value: (item: T) => string
  /** Options; the "all" choice is injected automatically. */
  options: { value: string; label: string }[]
}

export type CardGridLabels = {
  searchPlaceholder: string
  all: string
  emptyTitle: string
  emptyDescription: string
  countLabel: (shown: number, total: number) => string
}

type CardGridProps<T> = {
  items: T[]
  getKey: (item: T, index: number) => string
  renderCard: (item: T) => React.ReactNode
  /** Concatenated searchable text for an item (lower-cased match). */
  searchText: (item: T) => string
  filters?: CardFilter<T>[]
  labels: CardGridLabels
  emptyIcon?: React.ReactNode
  /** Tailwind grid column classes; sensible default if omitted. */
  gridClassName?: string
}

export function CardGrid<T>({
  items,
  getKey,
  renderCard,
  searchText,
  filters = [],
  labels,
  emptyIcon,
  gridClassName = 'grid gap-4 sm:grid-cols-2 lg:grid-cols-3',
}: CardGridProps<T>) {
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState<Record<string, string>>({})

  const handleFilter = (key: string, value: string) =>
    setSelected((s) => ({ ...s, [key]: value }))

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return items.filter((item) => {
      if (q && !searchText(item).toLowerCase().includes(q)) return false
      for (const f of filters) {
        const sel = selected[f.key]
        if (sel && f.value(item) !== sel) return false
      }
      return true
    })
  }, [items, query, selected, filters, searchText])

  return (
    <div className="space-y-4">
      {/* Toolbar: search + faceted filters */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search className="pointer-events-none absolute inset-block-0 my-auto ms-2.5 size-4 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={labels.searchPlaceholder}
            className="ps-8"
            aria-label={labels.searchPlaceholder}
          />
        </div>
        {filters.length > 0 && (
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((f) => (
              <NativeSelect
                key={f.key}
                value={selected[f.key] ?? ''}
                onChange={(e) => handleFilter(f.key, e.target.value)}
                aria-label={f.label}
                className="h-9 w-auto min-w-[8rem]"
              >
                <option value="">
                  {f.label}: {labels.all}
                </option>
                {f.options.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </NativeSelect>
            ))}
          </div>
        )}
      </div>

      {filtered.length === 0 ? (
        <EmptyState
          title={labels.emptyTitle}
          description={labels.emptyDescription}
          icon={emptyIcon ?? <Inbox />}
        />
      ) : (
        <>
          <div className={gridClassName}>
            {filtered.map((item, i) => (
              <div key={getKey(item, i)}>{renderCard(item)}</div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">
            {labels.countLabel(filtered.length, items.length)}
          </p>
        </>
      )}
    </div>
  )
}
CardGrid.displayName = 'CardGrid'
