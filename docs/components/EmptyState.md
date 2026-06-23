# EmptyState

A no-data placeholder: icon + title + description + optional action. Product-agnostic
(you pass pre-resolved strings).

## Import
```tsx
import { EmptyState } from "@togo-framework/ui";
```

## Usage
```tsx
<EmptyState
  icon={<Inbox className="h-8 w-8" />}
  title="No resources yet"
  description="Run `togo make:resource Post` to get started."
  action={<Button>Create</Button>}
/>
```

## Props
| Prop | Type | Default | Description |
|---|---|---|---|
| `title` | `string` | — | Pre-resolved title (consumer picks EN/AR). **Required.** |
| `description` | `string` | — | Secondary text. |
| `icon` | `ReactNode` | — | Leading icon. |
| `action` | `ReactNode` | — | Action slot (button/link) below the text. |
| `className` | `string` | — | Extra classes. |

## Accessibility, RTL & theming
- Centered, readable contrast via tokens; flips with `.dark`. RTL-safe (logical spacing).

## Do / Don't
- ✅ Always offer a next action when possible. ❌ Don't pass raw i18n keys — resolve strings first.
