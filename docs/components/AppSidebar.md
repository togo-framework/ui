# AppSidebar

The full application sidebar shell — brand, navigation, and a user footer (avatar, sign-out).
Collapses to an off-canvas sheet on mobile. Bilingual + RTL-aware.

## Import
```tsx
import { AppSidebar } from "@togo-framework/ui";
```

## Usage
```tsx
<AppSidebar
  language="en"
  isRTL={false}
  appName="Acme"
  user={{ email: "a@b.c", displayName: "Ada", avatarUrl }}
  currentPathname={pathname}
  onNavigate={(href) => router.push(href)}
  onSignOut={() => auth.logout()}
/>
```

## Props
| Prop | Type | Description |
|---|---|---|
| `language` | `'en' \| 'ar'` | Chrome language. |
| `isRTL` | `boolean` | Mirror layout. |
| `appName` | `string` | Brand name. |
| `logo` | `string` | Logo URL (shown in a white chip). |
| `user` | `SidebarUser \| null` | `{ email, displayName, avatarUrl? }`. |
| `isAuthLoading` | `boolean` | Show loading state in footer. |
| `onSignOut` | `() => void \| Promise<void>` | Sign-out handler. |
| `onNavigate` | `(href: string) => void` | Navigation handler. |
| `currentPathname` | `string` | Highlights the active item. |

## Accessibility, RTL & theming
- Off-canvas on mobile (`Sheet`) with a trigger; keyboard accessible.
- `isRTL` flips the sidebar to the inline-end; surfaces use `sidebar-*` tokens (dark/light).

## Do / Don't
- ✅ Pass `currentPathname` for active highlighting.
- ❌ Don't fetch nav here — pass items/handlers in. (For a lighter shell, compose `Sidebar` primitives.)
