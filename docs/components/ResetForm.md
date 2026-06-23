# ResetForm

Set-a-new-password form (after following a reset link). Includes a `PasswordStrengthMeter`.

## Import
```tsx
import { ResetForm, type AuthClient } from "@togo-framework/ui";
```

## Usage
```tsx
<ResetForm
  token={resetToken}
  authClient={authClient}
  language="en"
  onSuccess={() => setStep("login")}
  onRequestNewLink={() => setStep("forgot")}
/>
```

## Props
| Prop | Type | Default | Description |
|---|---|---|---|
| `token` | `string` | — | Reset token from the email link. **Required.** |
| `authClient` | `AuthClient` | — | Calls `resetPassword(token, newPassword)`. **Required.** |
| `onSuccess` | `() => void` | — | After the password is reset. |
| `onRequestNewLink` | `() => void` | — | Shown when the token is expired/invalid. |
| `language` | `'en' \| 'ar'` | `'en'` | UI language. |

## Accessibility, RTL & theming
- Live strength meter with `aria`; confirm-match validation. Bilingual + RTL via `language`.

## Do / Don't
- ✅ Offer `onRequestNewLink` for expired tokens. ❌ Don't accept weak passwords — the meter enforces rules.
