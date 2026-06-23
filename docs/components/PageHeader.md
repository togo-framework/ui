# PageHeader

A page title block with optional description, icon, and right-aligned actions.

## Import
```tsx
import { PageHeader, Button } from "@togo-framework/ui";
```

## Usage
```tsx
<PageHeader
  title="Posts"
  description="Manage your content"
  actions={<Button>+ Create</Button>}
/>
```

## Props
| Prop | Type | Default | Description |
|---|---|---|---|
| `title` | `string` | — | Page title. |
| `description` | `string` | — | Subtitle under the title. |
| `icon` | `ReactNode` | — | Leading icon. |
| `actions` | `ReactNode` | — | Right-aligned actions (buttons, etc.). |
| `className` | `string` | — | Extra classes. |

## Accessibility, RTL & theming
- `title` renders as the page heading; place one per view.
- Actions sit at the inline-end, so they flip to the left under `dir="rtl"`.

## Do / Don't
- ✅ Keep one PageHeader per page.
- ❌ Don't stack multiple action rows — group them in `actions`.
