# Card

Surface container for grouped content, with composable header/content/footer parts.

## Import
```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@togo-framework/ui";
```

## Usage
```tsx
<Card>
  <CardHeader>
    <CardTitle>Revenue</CardTitle>
    <CardDescription>Last 30 days</CardDescription>
  </CardHeader>
  <CardContent>$48,200</CardContent>
  <CardFooter>
    <Button variant="outline" size="sm">Export</Button>
  </CardFooter>
</Card>
```

## Props
All parts are `forwardRef` `<div>` (Title/Description render heading/paragraph) and accept
standard `HTMLAttributes` — `className`, `children`, etc. No custom props.

| Part | Element | Role |
|---|---|---|
| `Card` | `div` | Bordered, rounded surface (`bg-card`). |
| `CardHeader` | `div` | Top section (padding + spacing). |
| `CardTitle` | `h3` | Title text. |
| `CardDescription` | `p` | Muted subtitle. |
| `CardContent` | `div` | Body. |
| `CardFooter` | `div` | Actions row. |

## Accessibility, RTL & theming
- `CardTitle` renders a heading — keep heading order sane on the page.
- RTL: padding/alignment use logical spacing and mirror under `dir="rtl"`.
- `bg-card` / `text-card-foreground` tokens — white in light, dark surface in dark.

## Do / Don't
- ✅ Use `CardHeader`/`CardContent`/`CardFooter` for consistent spacing.
- ❌ Don't nest interactive cards inside clickable cards (ambiguous targets).
