# ForgotForm

"Forgot password" request form — emails a reset link via `authClient`.

## Import
```tsx
import { ForgotForm, type AuthClient } from "@togo-framework/ui";
```

## Usage
```tsx
<ForgotForm authClient={authClient} language="en" onBack={() => setStep("login")} />
```

## Props
| Prop | Type | Default | Description |
|---|---|---|---|
| `authClient` | `AuthClient` | — | Backend adapter (uses its reset-request method). **Required.** |
| `onBack` | `() => void` | — | "Back to sign in" handler. |
| `language` | `'en' \| 'ar'` | `'en'` | UI language. |

## Accessibility, RTL & theming
- Email input is labelled + validated; success state announced. Bilingual + RTL via `language`.

## Do / Don't
- ✅ Always render a `onBack` path. ❌ Don't reveal whether an email exists (the client shouldn't either).
