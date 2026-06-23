# PasswordInput

A password field with a show/hide toggle. Extends the native `<input>`.

## Import
```tsx
import { PasswordInput } from "@togo-framework/ui";
```

## Usage
```tsx
<PasswordInput language="en" value={pw} onChange={(e) => setPw(e.target.value)} placeholder="Password" />
```

## Props
Extends `React.InputHTMLAttributes<HTMLInputElement>`, plus:

| Prop | Type | Default | Description |
|---|---|---|---|
| `language` | `'en' \| 'ar'` | `'en'` | Localizes the show/hide `aria-label`. |

## Accessibility, RTL & theming
- The reveal toggle has a localized `aria-label`; respects `dir`. Token-themed, flips with `.dark`.

## Do / Don't
- ✅ Pair with `PasswordStrengthMeter`. ❌ Don't disable the reveal toggle — it aids correctness.
