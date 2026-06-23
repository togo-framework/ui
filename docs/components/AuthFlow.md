# AuthFlow

A complete, orchestrated auth experience — email → password/OAuth → OTP/2FA → reset — driven
by a single `authClient`. Wraps the individual forms in an `AuthCard`.

## Import
```tsx
import { AuthFlow, type AuthClient } from "@togo-framework/ui";
```

## Usage
```tsx
<AuthFlow
  authClient={authClient}        // your impl of AuthClient (login/verifyOtp/verify2FA/resetPassword…)
  language="en"
  brand={{ name: "Acme" }}
  layout="split"
  showRememberMe
  onSuccess={() => router.push("/dashboard")}
/>
```

## Props
| Prop | Type | Default | Description |
|---|---|---|---|
| `authClient` | `AuthClient` | — | Backend adapter (see below). **Required.** |
| `onSuccess` | `() => void` | — | Fired after successful authentication. |
| `resetToken` | `string` | — | If present, opens the reset-password step. |
| `language` | `'en' \| 'ar'` | `'en'` | UI language (controlled). |
| `onLanguageToggle` | `(() => void) \| null` | — | Override/disable the built-in language toggle. |
| `brand` | `AuthCardBrand` | — | Brand panel (see AuthCard). |
| `layout` | `AuthLayout` | `'split'` | Auth card layout. |
| `withCard` | `boolean` | `true` | Wrap in `AuthCard` (set `false` to embed). |
| `showRememberMe` | `boolean` | — | Show "remember me". |
| `emailFirst` | `boolean` | `false` | Two-step email-first flow. |

`AuthClient` is an interface you implement: `login(email, password, rememberMe?)`,
`verifyOtp(email, code, challengeToken?)`, `verify2FA(code, challengeToken?)`,
`resetPassword(token, newPassword)`, plus optional `methodsForEmail`, `sendOtp`, dev-login.

## Accessibility, RTL & theming
- Fully bilingual + RTL via `language`/`dir`. Dark/light via tokens.

## Do / Don't
- ✅ Implement `AuthClient` against your API. ❌ Don't fetch inside the UI — the client owns IO.
