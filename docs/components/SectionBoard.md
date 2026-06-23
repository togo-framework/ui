# SectionBoard / DynamicSection

Dynamic editable sections — the pattern used on sentra narrative/alerts pages. In **edit
mode** each section can be **drag-reordered** and have its **prompt / model / settings**
edited via a dialog. View mode renders content only. Presentational (data + callbacks).

## Import
```tsx
import { SectionBoard, DynamicSection, type SectionModel } from "@togo-framework/ui";
```

## Usage
```tsx
const [sections, setSections] = useState<SectionModel[]>([
  { id: "s1", title: "Executive Brief", badge: "AI", model: "gemini-2.5-pro",
    prompt: "Summarize in 3 bullets.", content: <p>…</p> },
]);

<SectionBoard
  sections={sections}
  editMode
  models={[{ value: "gemini-2.5-pro", label: "Gemini 2.5 Pro" }]}
  onChange={setSections}
  onAddSection={() => setSections(s => [...s, { id: crypto.randomUUID(), title: "New" }])}
/>
```

## Props (SectionBoard)
| Prop | Type | Default | Description |
|---|---|---|---|
| `sections` | `SectionModel[]` | — | ordered sections (`{id,title,badge?,prompt?,model?,settings?,content?}`) |
| `editMode` | `boolean` | `false` | enables drag-reorder + per-section editing |
| `models` | `{value,label?}[]` | `[]` | model options for the section editor |
| `columns` | `1 \| 2` | `1` | grid columns |
| `onChange` | `(sections) => void` | — | fires on reorder + edits |
| `onAddSection` | `() => void` | — | shows an "add section" control |
| `language` | `'en' \| 'ar'` | `'en'` | bilingual + RTL |

`DynamicSection` renders one section card and is composed by `SectionBoard`.

## Accessibility, RTL & theming
- @dnd-kit drag with pointer + keyboard sensors; drag handle is a labelled button.
- RTL via logical props + `language="ar"`; dark/light via tokens.

## Do / Don't
- ✅ keep section `content` presentational; drive data from your app.
- ❌ don't mutate `sections` in place — return a new array from `onChange`.
