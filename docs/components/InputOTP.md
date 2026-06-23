# InputOTP

A one-time-code input (built on `input-otp`) rendered as individual digit boxes with a blinking caret.

## Import
```tsx
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from "@togo-framework/ui";
```

## Usage
```tsx
<InputOTP maxLength={6} value={code} onChange={setCode}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>
```

## Props
| Part | Prop | Type | Description |
|---|---|---|---|
| `InputOTP` | `maxLength` | `number` | Total number of digits. |
| `InputOTP` | `value` / `onChange` | `string` / `(v: string) => void` | Controlled code value. |
| `InputOTP` | `containerClassName` | `string` | Classes for the wrapper. |
| `InputOTP` | `disabled` | `boolean` | Disable input. |
| `InputOTPGroup` | — | — | Visual grouping of slots. |
| `InputOTPSlot` | `index` | `number` | **Required** — which digit this box renders. |
| `InputOTPSeparator` | — | — | A dot between groups. |

## Accessibility, RTL & theming
- Single hidden input drives all slots — paste, arrow keys, and backspace work across boxes.
- Active slot shows a focus ring; boxes use `border-input` with logical `rounded-s/e` so they group correctly in RTL.
- Themes via tokens (`border-input`, `bg-foreground` caret).

## Do / Don't
- ✅ Match the number of `InputOTPSlot`s to `maxLength`.
- ✅ Use `type="numeric"`/`inputMode` patterns for numeric codes (passed through).
- ❌ Don't render slots out of order — `index` maps to position.
