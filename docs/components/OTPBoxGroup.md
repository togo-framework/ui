# OTPBoxGroup

Segmented one-time-code input (6 boxes) with auto-advance and paste support. Controlled.

## Import
```tsx
import { OTPBoxGroup } from "@togo-framework/ui";
```

## Usage
```tsx
const [code, setCode] = useState("");
<OTPBoxGroup value={code} onChange={setCode} onComplete={(c) => verify(c)} autoFocus />
```

## Props
| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `string` | — | Current code (controlled). **Required.** |
| `onChange` | `(value: string) => void` | — | Fires on each change. **Required.** |
| `onComplete` | `(value: string) => void` | — | Fires when all digits are filled. |
| `disabled` | `boolean` | `false` | Disable input. |
| `ariaLabel` | `string` | — | Accessible group label. |
| `autoFocus` | `boolean` | `false` | Focus the first box on mount. |

## Accessibility, RTL & theming
- Each box is keyboard-navigable; paste fills all boxes; `ariaLabel` names the group. RTL-aware ordering.

## Do / Don't
- ✅ Verify in `onComplete`. ❌ Don't store the code outside React state — keep it controlled.
