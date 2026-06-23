# Alert

An inline callout for contextual messages (info or destructive). Supports a leading icon.

## Import
```tsx
import { Alert, AlertTitle, AlertDescription } from "@togo-framework/ui";
```

## Usage
```tsx
import { Terminal, AlertCircle } from "lucide-react";

<Alert>
  <Terminal className="h-4 w-4" />
  <AlertTitle>Heads up</AlertTitle>
  <AlertDescription>Your changes have been saved.</AlertDescription>
</Alert>

<Alert variant="destructive">
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Could not reach the server.</AlertDescription>
</Alert>
```

## Props
| Part | Prop | Type | Default | Description |
|---|---|---|---|---|
| `Alert` | `variant` | `"default" \| "destructive"` | `"default"` | Tone. Renders `role="alert"`. |
| | `className` / `...div` | — | — | Standard div props. |
| `AlertTitle` | `...h5` | — | — | Bold title line. |
| `AlertDescription` | `...div` | — | — | Body text. |

## Variants
- **default** — `bg-background text-foreground`.
- **destructive** — destructive border + text, icon tinted.

## Accessibility, RTL & theming
- `role="alert"` announces to screen readers; pair an icon with `AlertTitle`.
- **RTL-aware:** the leading icon flips to the inline-end and text padding mirrors under `dir="rtl"`.
- Colors are tokens (`text-destructive`, `bg-background`) → flips dark/light.

## Do / Don't
- ✅ Use `destructive` only for errors/danger.
- ✅ Keep one icon + short title + concise description.
- ❌ Don't use Alert for transient feedback — use a toast (`Sonner`).
