# AppPageShell

A page wrapper that provides the authenticated layout frame — top-nav slot, realtime slots,
and an auth guard hook — around your page content.

## Import
```tsx
import { AppPageShell } from "@togo-framework/ui";
```

## Usage
```tsx
<AppPageShell
  isRTL={false}
  isAuthenticated={!!user}
  isAuthLoading={loading}
  onUnauthenticated={() => router.push("/login")}
  topNavSlot={<TopNav />}
  realtimeSlotsTop={<RealtimeDot />}
>
  {children}
</AppPageShell>
```

## Props
| Prop | Type | Description |
|---|---|---|
| `children` | `ReactNode` | Page content. |
| `isRTL` | `boolean` | Mirror layout. |
| `isAuthenticated` | `boolean` | Gate content; with `onUnauthenticated` redirects. |
| `isAuthLoading` | `boolean` | Suppress the guard while auth resolves. |
| `onUnauthenticated` | `() => void` | Called when unauthenticated. |
| `topNavSlot` | `ReactNode` | Top navigation area. |
| `realtimeSlotsTop` / `realtimeSlotBottom` | `ReactNode` | Live-status slots. |

## Accessibility, RTL & theming
- Respects `isRTL` for layout direction; tokens drive dark/light.
- Pair with `AppSidebar` for the full shell.

## Do / Don't
- ✅ Provide `onUnauthenticated` for the guard to act.
- ❌ Don't render before auth resolves — pass `isAuthLoading`.
