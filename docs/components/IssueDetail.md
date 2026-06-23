# IssueDetail

The **error detail** pane: title + culprit, level, resolve/ignore actions, event/user/first/
last-seen stats, a frequency chart, and tabbed **Stack trace** (collapsible frames with source
context) / **Breadcrumbs** / **Tags**.

## Import
```tsx
import { IssueDetail } from "@togo-framework/ui";
import type { Issue } from "@togo-framework/ui";
```

## Usage
```tsx
<IssueDetail issue={issue} language="en" onResolve={resolve} onIgnore={ignore} />
```

## Props
| Prop | Type | Default | Description |
|---|---|---|---|
| `issue` | `Issue` | — | The error group (incl. `stack`, `breadcrumbs`, `tags`, `frequency`). |
| `language` | `'en' \| 'ar'` | `'en'` | Chrome + RTL. |
| `onResolve` / `onIgnore` | `(issue) => void` | — | Header actions. |

### `Issue` shape (key fields)
`title`, `culprit`, `level` (`fatal\|error\|warning\|info\|debug`), `count`, `userCount`,
`firstSeen`/`lastSeen`, `frequency: number[]`, `stack: StackFrame[]`, `breadcrumbs`, `tags`.
`StackFrame`: `filename`, `function?`, `lineno?`, `inApp?`, `context?` (source lines, `current` = error line).

## Accessibility, RTL & theming
Tabs are keyboard-navigable; frames are collapsible. Bilingual + RTL. Tokens for dark/light;
the error source line is highlighted with `bg-destructive/10`.

## Do / Don't
- ✅ Mark `inApp` frames so they expand by default.
- ❌ Don't dump raw HTML into `context.text` — it renders as plain text in a `<pre>`.
