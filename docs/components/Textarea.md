# Textarea

A styled multi-line text field — wrapper over the native `<textarea>`.

## Import
```tsx
import { Textarea } from "@togo-framework/ui";
```

## Usage
```tsx
import { Textarea, Label } from "@togo-framework/ui";

<div className="space-y-1.5">
  <Label htmlFor="bio">Bio</Label>
  <Textarea id="bio" rows={4} placeholder="Tell us about yourself…" />
</div>
```

## Props
Accepts **all native `<textarea>` props** (`TextareaProps extends React.TextareaHTMLAttributes`). No custom props.

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` / `defaultValue` | `string` | — | Controlled / uncontrolled value. |
| `onChange` | `(e) => void` | — | Change handler. |
| `rows` | `number` | — | Visible rows (min height is `80px`). |
| `disabled` | `boolean` | `false` | Disables the field. |
| `placeholder` | `string` | — | Placeholder text. |
| `className` | `string` | — | Extra classes. |
| `ref` | `Ref<HTMLTextAreaElement>` | — | Forwarded ref. |

## Accessibility, RTL & theming
- Pair with a `Label` via `htmlFor`/`id`.
- Min height `80px`; resize with the native handle or `className="resize-none"`.
- RTL-safe (logical padding); themes via `border-input`/`bg-background` tokens.

## Do / Don't
- ✅ Set `rows` to a sensible default for the expected content.
- ❌ Don't use it for single-line input — use `Input`.
