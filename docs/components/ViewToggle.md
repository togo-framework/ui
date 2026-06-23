# ViewToggle

A segmented control for switching between named views (e.g. list / grid / map), bilingual
and mobile-aware.

## Import
```tsx
import { ViewToggle } from "@togo-framework/ui";
```

## Usage
```tsx
<ViewToggle
  currentView="list"
  language="en"
  currentPathname={pathname}
  onViewChange={(v) => setView(v)}
  onNavigate={(path) => router.push(path)}
/>
```

## Props
| Prop | Type | Description |
|---|---|---|
| `currentView` | `View` | Active view id. |
| `language` | `'en' \| 'ar'` | Label language (`labelEn`/`labelAr` per view). |
| `isMobile` | `boolean` | Compact presentation. |
| `currentPathname` | `string` | Sync active state with the route. |
| `onViewChange` | `(view: View) => void` | View change handler. |
| `onNavigate` | `(path: string) => void` | Optional route navigation per view. |

## Accessibility, RTL & theming
- Keyboard-selectable segments; active uses brand token.
- Labels switch by `language`; order mirrors under `dir="rtl"`.

## Do / Don't
- ✅ Keep view ids stable and route-mapped.
- ❌ Don't use for many options — it's a small segmented control.
