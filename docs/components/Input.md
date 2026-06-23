# Input

A styled single-line text field — thin wrapper over the native `<input>`.

## Import
```tsx
import { Input } from "@togo-framework/ui";
```

## Usage
```tsx
import { Input, Label } from "@togo-framework/ui";

<div className="space-y-1.5">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="you@example.com" />
</div>
```

## Props
Accepts **all native `<input>` props** (`React.ComponentProps<"input">`), forwarded to the element. There are no custom props. Common ones:

| Prop | Type | Default | Description |
|---|---|---|---|
| `type` | `string` | `"text"` | Input type (`text`, `email`, `password`, `file`, …). |
| `value` / `defaultValue` | `string` | — | Controlled / uncontrolled value. |
| `onChange` | `(e) => void` | — | Change handler. |
| `disabled` | `boolean` | `false` | Disables the field. |
| `placeholder` | `string` | — | Placeholder text. |
| `className` | `string` | — | Extra classes (merged via `cn`). |
| `ref` | `Ref<HTMLInputElement>` | — | Forwarded ref. |

## Accessibility, RTL & theming
- Always pair with a `Label` (`htmlFor` → input `id`) for screen readers.
- Visible focus ring (`focus-visible:ring-ring`); `disabled` dims and blocks input.
- RTL: padding uses logical spacing, so text/caret align correctly under `dir="rtl"`.
- Dark/light: `border-input` + `bg-background` + `placeholder:text-muted-foreground` flip with `.dark`.

## Do / Don't
- ✅ Give every input an associated `Label`.
- ✅ Use `type` appropriately (`email`/`tel`/`password`) for mobile keyboards.
- ❌ Don't hard-code `bg-white`/`text-black` — keep the token classes so it themes.
