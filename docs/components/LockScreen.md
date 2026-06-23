# LockScreen

A locked-session screen — re-authenticate with a PIN without fully signing out.

## Import
```tsx
import { LockScreen } from "@togo-framework/ui";
```

## Usage
```tsx
<LockScreen
  user={{ name: "Sara", email: "sara@acme.com" }}
  pinLength={6}
  language="en"
  onUnlock={async (pin) => { await api.unlock(pin); /* throw on wrong PIN */ }}
  onSignOut={() => auth.logout()}
/>
```

## Props
| Prop | Type | Default | Description |
|---|---|---|---|
| `user` | `LockScreenUser` | — | `{ name, email, avatarUrl? }` shown on the screen. **Required.** |
| `onUnlock` | `(pin: string) => Promise<void>` | — | Resolve on success; **throw/reject** on wrong PIN. **Required.** |
| `onSignOut` | `() => void` | — | "Not you? Sign out". **Required.** |
| `language` | `'en' \| 'ar'` | `'en'` | UI language. |
| `pinLength` | `4 \| 5 \| 6` | `6` | Expected PIN length (auto-submits on the Nth digit). |
| `maxAttempts` | `number` | `5` | Failed attempts before lockout. |
| `className` | `string` | — | Extra wrapper classes. |

## Accessibility, RTL & theming
- PIN boxes are labelled + announce errors; lockout state is communicated. Bilingual + RTL via `language`.

## Do / Don't
- ✅ Throw from `onUnlock` on a wrong PIN so attempts count. ❌ Don't resolve on failure.
