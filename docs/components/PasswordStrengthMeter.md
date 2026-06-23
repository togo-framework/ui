# PasswordStrengthMeter

A live password strength bar + rule checklist (length, upper, lower, digit, symbol).

## Import
```tsx
import { PasswordStrengthMeter, type PasswordRule } from "@togo-framework/ui";
```

## Usage
```tsx
<PasswordStrengthMeter password={newPassword} language="en" />
```

## Props
| Prop | Type | Default | Description |
|---|---|---|---|
| `password` | `string` | — | The password to evaluate. **Required.** |
| `language` | `'en' \| 'ar'` | `'en'` | Localizes the strength label + rule text. |

Rules checked: ≥12 chars, uppercase, lowercase, digit, symbol (each a `PasswordRule { id, met, … }`).

## Accessibility, RTL & theming
- `aria-label` on the meter; rule list is announced. Bilingual + RTL via `language`.

## Do / Don't
- ✅ Gate submit on strength. ❌ Don't show it before the user types.
