# Label

An accessible form label (Radix `Label`) that associates with a control and dims when the peer control is disabled.

## Import
```tsx
import { Label } from "@togo-framework/ui";
```

## Usage
```tsx
import { Label, Input } from "@togo-framework/ui";

<Label htmlFor="name">Full name</Label>
<Input id="name" />
```

## Props
Accepts all Radix `Label` / native `<label>` props.

| Prop | Type | Default | Description |
|---|---|---|---|
| `htmlFor` | `string` | — | `id` of the control it labels. |
| `className` | `string` | — | Extra classes. |
| `children` | `ReactNode` | — | Label text. |
| `ref` | `Ref<HTMLLabelElement>` | — | Forwarded ref. |

## Accessibility, RTL & theming
- `htmlFor` must match the control's `id` so clicking the label focuses it.
- `peer-disabled:` styles dim the label when the associated control is disabled.
- Inherits text color from the design tokens; RTL-safe.

## Do / Don't
- ✅ Provide `htmlFor` for every standalone control.
- ✅ Inside `Form`, prefer `FormLabel` (auto-wires the id + error color).
- ❌ Don't wrap interactive controls and also set `htmlFor` to a different id.
