# MarkdownRenderer

Renders markdown with GFM (tables, task lists, strikethrough, autolinks), syntax-highlighted code blocks, and mermaid diagrams — themed with the design tokens (dark/light), RTL-aware.

## Import
```tsx
import { MarkdownRenderer } from "@togo-framework/ui";
import "@togo-framework/ui/styles.css"; // includes the code-highlight theme
```

## Usage
```tsx
<MarkdownRenderer content={"# Hello\n\n```ts\nconst x = 1\n```"} language="en" />
```

## Props
| Prop | Type | Default | Description |
|---|---|---|---|
| content | `string` | — | The markdown source. |
| language | `'en' \| 'ar'` | `'en'` | Sets `dir` (RTL for `ar`). |
| className | `string` | — | Extra classes on the wrapper. |

## Notes
- ` ```mermaid ` fences render as live diagrams (mermaid loaded lazily; errors fall back to the source).
- Code blocks are highlighted via rehype-highlight + a token-driven theme (works in both modes).

## Do / Don't
- ✅ Import `styles.css` so the `.tg-md .hljs-*` theme applies.
- ❌ Don't pass untrusted HTML expecting it to render — only markdown is parsed.
