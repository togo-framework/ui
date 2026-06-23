# IssuesList

The Sentry-style **Issues** list: a filter bar (search · level · environment · sort) + rows
of error groups (level badge, title + culprit, frequency sparkline, events, users, assignee,
last-seen). Row click → `onSelectIssue`.

## Import
```tsx
import { IssuesList } from "@togo-framework/ui";
import type { Issue, ErrorFilter, IssueSort } from "@togo-framework/ui";
```

## Usage
```tsx
<IssuesList
  issues={issues}
  selectedId={selected?.id}
  onSelectIssue={setSelected}
  filter={filter} onFilterChange={setFilter}
  sort={sort} onSortChange={setSort}
  environments={["production", "staging"]}
  language="en"
/>
```

## Props
| Prop | Type | Default | Description |
|---|---|---|---|
| `issues` | `Issue[]` | — | Error groups. |
| `selectedId` / `onSelectIssue` | `string` / fn | — | Selection highlight + row click. |
| `filter` / `onFilterChange` | `ErrorFilter` / fn | `{}` | Search / level / environment. |
| `sort` / `onSortChange` | `IssueSort` / fn | `'lastSeen'` | Sort key. |
| `environments` | `string[]` | `[]` | Environment options. |
| `language` | `'en' \| 'ar'` | `'en'` | Chrome + RTL. |

## Accessibility, RTL & theming
Keyboard-focusable rows (buttons). Bilingual + RTL (search icon, columns flip). Tokens for
dark/light. Columns collapse on mobile (events/users/sparkline hidden < md).

## Do / Don't
- ✅ Sort/filter server- or client-side via the callbacks.
- ❌ Don't rely on the inline sparkline for precise values — it's a trend glyph.
