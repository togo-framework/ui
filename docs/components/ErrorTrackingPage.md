# ErrorTrackingPage

Sentry-style **error-tracking page** — a master/detail composition of `IssuesList`
(error groups) + `IssueDetail` (stack trace, breadcrumbs, tags). Responsive: split on
desktop, list→detail drill-down on mobile.

## Import
```tsx
import { ErrorTrackingPage } from "@togo-framework/ui";
import type { Issue, ErrorFilter, IssueSort } from "@togo-framework/ui";
```

## Usage
```tsx
<ErrorTrackingPage
  issues={issues}
  language="en"
  filter={filter}
  onFilterChange={setFilter}
  sort={sort}
  onSortChange={setSort}
  environments={["production", "staging"]}
  onResolve={(i) => resolve(i.id)}
  onIgnore={(i) => ignore(i.id)}
/>
```

## Props
| Prop | Type | Default | Description |
|---|---|---|---|
| `issues` | `Issue[]` | — | Error groups to show. |
| `language` | `'en' \| 'ar'` | `'en'` | Chrome language + RTL. |
| `filter` / `onFilterChange` | `ErrorFilter` / fn | — | Filter bar state (search, level, environment). |
| `sort` / `onSortChange` | `IssueSort` / fn | `'lastSeen'` | Sort key. |
| `environments` | `string[]` | `[]` | Environment dropdown options. |
| `onResolve` / `onIgnore` | `(issue) => void` | — | Detail-pane actions. |
| `selectedId` / `onSelectIssue` | `string` / fn | — | Controlled selection (omit for uncontrolled). |

## Accessibility, RTL & theming
Presentational — data + callbacks only. Bilingual via `language`; RTL mirrors (panel order,
icons). Themed via tokens (`bg-card`, `text-muted-foreground`…), flips with `.dark`. Mobile:
list-only with a back button into the detail.

## Do / Don't
- ✅ Resolve/sort/filter in your app via the callbacks.
- ❌ Don't fetch inside it — it never fetches.
