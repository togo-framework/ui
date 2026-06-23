# Avatar

User image with a graceful initials fallback (Radix Avatar).

## Import
```tsx
import { Avatar, AvatarImage, AvatarFallback } from "@togo-framework/ui";
```

## Usage
```tsx
<Avatar>
  <AvatarImage src={user.photo} alt={user.name} />
  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
</Avatar>
```

## Props
Thin wrappers over Radix Avatar — accept the Radix props plus `className`.

| Part | Key props | Description |
|---|---|---|
| `Avatar` | `className` | Circular container. |
| `AvatarImage` | `src`, `alt` | Image; hidden if it fails to load. |
| `AvatarFallback` | `delayMs?`, `children` | Shown while/if the image is unavailable. |

## Accessibility, RTL & theming
- Always provide `alt` on `AvatarImage` and meaningful `AvatarFallback` text (initials).
- The fallback uses `bg-muted`/tokens; flips with `.dark`.
- RTL-neutral (circular), but positions correctly in mirrored layouts.

## Do / Don't
- ✅ Always include `AvatarFallback`.
- ❌ Don't rely on the image alone — network failures must degrade to initials.
