# DynamicIcon

Render a lucide icon by **name** (string) — handy when the icon is data-driven (e.g. from an API).

## Import
```tsx
import { DynamicIcon } from "@togo-framework/ui";
```

## Usage
```tsx
<DynamicIcon name="shield" className="h-4 w-4" />
<DynamicIcon name={resource.icon} size={18} strokeWidth={2} />
```

## Props
| Prop | Type | Default | Description |
|---|---|---|---|
| `name` | `string \| null \| undefined` | — | Lucide icon name (kebab or Pascal). Unknown/empty → safe fallback. |
| `className` | `string` | — | Classes (size/color). |
| `size` | `number` | — | Pixel size. |
| `strokeWidth` | `number` | — | Stroke width. |

## Accessibility, RTL & theming
- Decorative by default; add an `aria-label` wrapper if the icon conveys meaning.
- Inherits `currentColor`, so it follows token text colors in dark/light.

## Do / Don't
- ✅ Use for icons chosen at runtime by name.
- ❌ For static icons import the lucide component directly (tree-shakeable).
