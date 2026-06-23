# IconPicker

A button that opens a searchable grid of lucide icons. Controlled by icon name.

## Import
```tsx
import { IconPicker } from "@togo-framework/ui";
```

## Usage
```tsx
const [icon, setIcon] = useState("Rocket");
<IconPicker value={icon} onChange={setIcon} />
```

## Props
| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `string` | — | Current icon name (lucide PascalCase, e.g. `Sparkles`). |
| `onChange` | `(name: string) => void` | — | Called with the selected name. |
| `icons` | `string[]` | curated common set | Restrict the grid to a custom list. |
| `className` | `string` | — | Trigger class. |
| `disabled` | `boolean` | `false` | Disable the trigger. |

## Accessibility, RTL & theming
- Popover with a search `Input` (autofocus) + a scrollable grid; each cell has a `title`.
- Themed via tokens; selected cell uses `bg-primary/15 text-primary`.

## Do / Don't
- ✅ Store the icon **name** and render with `DynamicIcon`/lucide later.
- ❌ Don't pass the full lucide set if you need a tight curated list — use `icons`.
