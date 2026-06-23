# AppLayout

The full app shell: a collapsible sidebar (brand + nav groups + footer) + a top `AppHeader` + a content area, built on the kit Sidebar primitives. Responsive (off-canvas on mobile), RTL-aware, token-themed. Also exports `AppHeader` standalone.

## Import
```tsx
import { AppLayout, AppHeader } from "@togo-framework/ui";
```

## Usage
```tsx
<AppLayout
  brand={{ name: "Acme", icon: <Logo /> }}
  nav={[{ label: "Main", items: [{ key: "home", label: "Home", icon: <Home/>, active: true }] }]}
  footer={{ items: [{ key: "settings", label: "Settings", icon: <Cog/> }] }}
  onNavigate={(key) => router.push(key)}
  headerTitle="Dashboard"
  headerEnd={<UserMenu />}
>
  <YourPage />
</AppLayout>
```

## Props
| Prop | Type | Description |
|---|---|---|
| brand | `{ name; subtitle?; icon?; primary? }` | Sidebar brand block. |
| nav | `AppNavGroup[]` | Grouped nav items (`{ key, label, icon?, badge?, active? }`). |
| footer | `AppNavGroup` | Footer nav (Profile/Settings). |
| onNavigate | `(key) => void` | Nav click handler. |
| headerTitle / headerCenter / headerEnd | `ReactNode` | Header slots (title, center search, end actions). |
| assistant | `ReactNode` | Floating slot in content (e.g. a CopilotLauncher). |
| language | `'en' \| 'ar'` | Direction + labels. |
| defaultSidebarOpen | `boolean` | Initial sidebar state. |

## Notes
- Collapses to an off-canvas sheet on mobile; the header carries a `SidebarTrigger`.
- RTL flips the sidebar to the inline-end automatically.
