# TwoFAForm

Two-factor (TOTP) verification form using OTP boxes.

## Import
```tsx
import { TwoFAForm, type AuthClient } from "@togo-framework/ui";
```

## Usage
```tsx
<TwoFAForm
  authClient={authClient}
  challengeToken={challengeToken}   // from login() when challenge === '2fa'
  language="en"
  onSuccess={() => router.push("/dashboard")}
  onTooManyAttempts={() => setStep("login")}
/>
```

## Props
| Prop | Type | Default | Description |
|---|---|---|---|
| `authClient` | `AuthClient` | — | Calls `verify2FA(code, challengeToken?)`. **Required.** |
| `challengeToken` | `string` | — | Opaque token returned by `login()`. |
| `onSuccess` | `() => void` | — | After successful verification. |
| `onTooManyAttempts` | `() => void` | — | Fired on attempt lockout. |
| `language` | `'en' \| 'ar'` | `'en'` | UI language. |

## Accessibility, RTL & theming
- Uses `OTPBoxGroup` (labelled, auto-advance, paste-aware). Bilingual + RTL via `language`.

## Do / Don't
- ✅ Pass the `challengeToken` from `login()`. ❌ Don't count attempts yourself — handle `onTooManyAttempts`.
