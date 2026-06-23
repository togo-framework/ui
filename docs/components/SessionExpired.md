# SessionExpired

A session-expired state with a sign-in CTA.

## Import
```tsx
import { SessionExpired } from "@togo-framework/ui";
```

## Usage
```tsx
<SessionExpired
  title="Session expired"
  description="Please sign in again to continue."
  ctaLabel="Sign in"
  loginHref="/login"
/>
```

## Props
| Prop | Type | Default | Description |
|---|---|---|---|
| `title` | `string` | — | Pre-resolved title. **Required.** |
| `description` | `string` | — | Secondary text. |
| `ctaLabel` | `string` | — | Sign-in button label. **Required.** |
| `loginHref` | `string` | — | Where the CTA links. |
| `icon` | `ReactNode` | — | Leading icon. |
| `className` | `string` | — | Extra classes. |

## Accessibility, RTL & theming
- CTA is a real link/button; token-themed; RTL-safe. Strings are pre-resolved by the consumer.

## Do / Don't
- ✅ Point `loginHref` at your login route. ❌ Don't auto-redirect without telling the user.
