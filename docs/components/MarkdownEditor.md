# MarkdownEditor

A dependency-light markdown editor: a formatting toolbar + a textarea + a **Write / Preview / Split** view toggle (Split shows a live `MarkdownRenderer`). Controlled or uncontrolled, RTL + EN/AR.

## Import
```tsx
import { MarkdownEditor } from "@togo-framework/ui";
```

## Usage
```tsx
const [value, setValue] = useState("# Hello");
<MarkdownEditor value={value} onChange={setValue} defaultView="split" />
```

## Props
| Prop | Type | Default | Description |
|---|---|---|---|
| value / defaultValue | `string` | `""` | Controlled / initial content. |
| onChange | `(v: string) => void` | — | Fired on edit. |
| view / defaultView | `'write' \| 'preview' \| 'split'` | `'split'` | Active view. |
| onViewChange | `(v) => void` | — | View change callback. |
| language | `'en' \| 'ar'` | `'en'` | Labels + direction. |
| placeholder, minRows, className | — | — | Textarea + wrapper options. |

## Toolbar
Bold, Italic, H1–H3, bulleted/numbered list, quote, link, inline code, code block — each wraps/prefixes the current selection.

## Do / Don't
- ✅ Use `split` for live preview; `preview` disables the toolbar.
- ❌ Don't reach for CodeMirror/Monaco for simple notes — this is intentionally lightweight.
