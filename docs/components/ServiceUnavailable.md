# ServiceUnavailable

A "service unavailable / not configured" state with an optional hint (e.g. a missing env var)
and an action.

## Import
```tsx
import { ServiceUnavailable } from "@togo-framework/ui";
```

## Usage
```tsx
<ServiceUnavailable
  title="Search is unavailable"
  description="The search service isn't configured."
  hint={<code>SET SEARCH_URL</code>}
  action={<Button onClick={retry}>Retry</Button>}
/>
```

## Props
| Prop | Type | Default | Description |
|---|---|---|---|
| `title` | `string` | — | Pre-resolved title. **Required.** |
| `description` | `string` | — | Secondary text. |
| `hint` | `ReactNode` | — | Diagnostic hint (env var, docs link). |
| `icon` | `ReactNode` | — | Leading icon. |
| `action` | `ReactNode` | — | Retry/docs button. |
| `className` | `string` | — | Extra classes. |

## Accessibility, RTL & theming
- Token-themed, readable in both modes; RTL-safe. Pre-resolved strings (consumer picks language).

## Do / Don't
- ✅ Use `hint` to tell operators what to configure. ❌ Don't surface raw stack traces to end users.
