# Button

Clickable action with token-driven variants, sizes, press feedback, and a focus ring.

## Import
```tsx
import { Button, buttonVariants } from "@togo-framework/ui";
```

## Usage
```tsx
<Button onClick={save}>Save</Button>
<Button variant="outline" size="sm">Cancel</Button>
<Button variant="destructive">Delete</Button>
<Button size="icon" aria-label="Settings"><Settings /></Button>
```

`Button` extends all native `<button>` attributes. Use `asChild` via a wrapper when you need
a link styled as a button (`<a className={buttonVariants({ variant: "link" })} />`).

## Props
| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `"default" \| "destructive" \| "outline" \| "secondary" \| "ghost" \| "link"` | `"default"` | Visual style. |
| `size` | `"default" \| "sm" \| "lg" \| "icon"` | `"default"` | Sizing. `icon` is square. |
| `...props` | `ButtonHTMLAttributes` | — | `onClick`, `disabled`, `type`, etc. |

## Variants
- **default** — solid brand (`bg-primary`). Primary action.
- **secondary** — muted solid.
- **outline** — bordered, brand-tinted hover.
- **ghost** — transparent, brand-tinted hover.
- **destructive** — danger action.
- **link** — text link styling.

## Accessibility, RTL & theming
- Renders a native `<button>` — full keyboard support; pass `aria-label` for icon-only buttons.
- Visible `focus-visible:ring-2 ring-ring` focus ring; `disabled` dims + blocks pointer.
- RTL: `gap`/icon layout mirror under `dir="rtl"`.
- Themed via `bg-primary`/`text-primary-foreground` tokens — flips with `.dark` and brand color.

## Do / Don't
- ✅ One `default` (primary) button per group; use `secondary`/`outline` for the rest.
- ✅ Give icon-only buttons an `aria-label`.
- ❌ Don't hard-code colors — use `variant` so it stays on-brand and theme-aware.
