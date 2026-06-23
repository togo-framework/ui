# StepOptionsDialog

A type-specific options modal for a single workflow step — the form fields are driven by the step `kind`.

## Import
```tsx
import { StepOptionsDialog, STEP_FIELD_REGISTRY } from "@togo-framework/ui";
```

## Usage
```tsx
const [open, setOpen] = useState(false);
const [step, setStep] = useState(myStep);

<StepOptionsDialog
  open={open}
  step={step}
  language="en"
  onClose={() => setOpen(false)}
  onSave={(next) => setStep(next)}   // full updated step object
/>
```

## Props
| Prop | Type | Default | Description |
|---|---|---|---|
| `open` | `boolean` | — | Whether the dialog is shown. |
| `step` | `Record<string, any> \| null` | — | The step being edited (must have a `kind`). |
| `language` | `'en' \| 'ar'` | `'en'` | Bilingual labels + RTL. |
| `onClose` | `() => void` | — | Close handler. |
| `onSave` | `(next) => void` | — | Receives the full updated step object. |

## Field registry
`STEP_FIELD_REGISTRY` maps a step `kind` to its fields. Covered kinds: `cron_trigger`, `if`, `for_each`, `sql_select`, `sql_insert`, `sql_update`, `gemini_call`, `adk_call`, `http_call`/`http_request`, `webhook`, `send_email`/`email`, `search_query`, `rss_poll`, `web_scrape`. Unknown kinds fall back to a raw-JSON editor. Field types: `text`, `textarea`, `number`, `select`, `switch`, `lines`, `csv`, `json`.

## Accessibility, RTL & theming
Built on the kit `Dialog` (focus trap, Esc-to-close), `Input`/`Textarea`/`Select`/`Switch`/`Label`. Token-themed (dark/light), RTL via `language="ar"`.
