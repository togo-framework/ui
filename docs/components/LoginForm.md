# LoginForm

Email + password (and OAuth) sign-in form. Calls your `authClient.login`.

## Import
```tsx
import { LoginForm, type AuthClient } from "@togo-framework/ui";
```

## Usage
```tsx
<LoginForm
  authClient={authClient}
  language="en"
  showRememberMe
  onSuccess={() => router.push("/dashboard")}
  onForgotPassword={() => setStep("forgot")}
  onOAuthRedirect={(url) => (window.location.href = url)}
/>
```

## Props
| Prop | Type | Default | Description |
|---|---|---|---|
| `authClient` | `AuthClient` | — | Backend adapter. **Required.** |
| `onSuccess` | `() => void` | — | After successful login. |
| `onForgotPassword` | `() => void` | — | "Forgot password?" link handler. |
| `onOAuthRedirect` | `(url: string) => void` | — | Called with the provider URL to redirect. |
| `language` | `'en' \| 'ar'` | `'en'` | UI language. |
| `showRememberMe` | `boolean` | — | Show the remember-me checkbox. |

## Accessibility, RTL & theming
- Labelled inputs, keyboard-submittable, `aria` on the password reveal. Bilingual + RTL via `language`.

## Do / Don't
- ✅ Drive navigation from `onSuccess`. ❌ Don't read tokens here — that's the client's job.
