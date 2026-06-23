# DirectionalArrow

An RTL-aware arrow icon: renders `ArrowRight` in LTR and `ArrowLeft` in RTL, so "forward"
always points the reading direction. Takes `isRTL` as a prop so each app wires its own i18n.

## Import
```tsx
import { DirectionalArrow } from "@togo-framework/ui";
```

## Usage
```tsx
import { useLanguage } from "@togo-framework/ui";

function Next() {
  const { language } = useLanguage();
  return <button>Continue <DirectionalArrow isRTL={language === "ar"} /></button>;
}
```

## Props
| Prop | Type | Default | Description |
|---|---|---|---|
| `isRTL` | `boolean` | `false` | When true, renders a left-pointing arrow ("forward" in RTL). |
| `size` | `number` | `16` | Icon size in px. |
| `className` | `string` | — | Icon classes (e.g. color). |

## Accessibility, RTL & theming
- Rendered with `aria-hidden="true"` — it's decorative; convey meaning via adjacent text.
- This is the explicit RTL helper: derive `isRTL` from your language/`dir`.
- Color follows `currentColor`, so it inherits text color (theme-aware).

## Do / Don't
- ✅ Drive `isRTL` from `useLanguage()` or `dir`.
- ✅ Keep adjacent text for meaning (it's `aria-hidden`).
- ❌ Don't hard-code `ArrowRight` next to text that can render RTL.
