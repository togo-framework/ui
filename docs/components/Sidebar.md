# Sidebar

A full-featured, collapsible application sidebar that becomes an off-canvas sheet on mobile.
Composed from a family of parts and a `SidebarProvider` that manages open/collapsed state
(persisted to a cookie, toggleable with ⌘/Ctrl+B).

## Import
```tsx
import {
  SidebarProvider, Sidebar, SidebarHeader, SidebarContent, SidebarFooter,
  SidebarGroup, SidebarGroupLabel, SidebarGroupContent, SidebarGroupAction,
  SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarMenuAction, SidebarMenuBadge,
  SidebarMenuSub, SidebarMenuSubItem, SidebarMenuSubButton, SidebarMenuSkeleton,
  SidebarInset, SidebarTrigger, SidebarRail, SidebarSeparator, SidebarInput,
  useSidebar,
} from "@togo-framework/ui";
```

## Usage
```tsx
<SidebarProvider>
  <Sidebar collapsible="icon">
    <SidebarHeader>{/* brand */}</SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Menu</SidebarGroupLabel>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton isActive onClick={...}>
              <LayoutGrid className="h-4 w-4" /><span>Dashboard</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter>{/* user */}</SidebarFooter>
  </Sidebar>

  <SidebarInset>
    <header><SidebarTrigger /></header>
    <main>{children}</main>
  </SidebarInset>
</SidebarProvider>
```

## Props (key parts)
| Part | Prop | Type | Default | Description |
|---|---|---|---|---|
| `SidebarProvider` | `defaultOpen` | `boolean` | `true` | Initial open state (uncontrolled). |
| | `open` / `onOpenChange` | `boolean` / `(o)=>void` | — | Controlled state. |
| `Sidebar` | `side` | `"left" \| "right"` | `"left"` | Which edge it sits on. |
| | `variant` | `"sidebar" \| "floating" \| "inset"` | `"sidebar"` | Shell style. |
| | `collapsible` | `"offcanvas" \| "icon" \| "none"` | `"offcanvas"` | Collapse behavior (mobile = Sheet). |
| `SidebarMenuButton` | `isActive` | `boolean` | `false` | Highlight current item. |
| | `asChild`, `tooltip` | — | — | Render as a link; show tooltip when icon-collapsed. |
| `SidebarTrigger` | `...button` | — | — | Toggles the sidebar. |
| `useSidebar()` | — | returns `{ state, open, setOpen, isMobile, toggleSidebar }` | — | Programmatic control. |

## Accessibility, RTL & theming
- Keyboard shortcut ⌘/Ctrl+B toggles; trigger is a real button; mobile uses an accessible Sheet (focus trap).
- **RTL-aware:** set `side="right"` or rely on `dir="rtl"` — the rail/offcanvas flip to the inline side.
- Uses `--sidebar-*` tokens (`bg-sidebar`, `text-sidebar-foreground`) → flips dark/light.
- **Mobile-first:** below the `md` breakpoint it auto-renders as an off-canvas Sheet opened by `SidebarTrigger`.

## Do / Don't
- ✅ Wrap the whole app region in one `SidebarProvider`, with `Sidebar` + `SidebarInset` as siblings.
- ✅ Use `SidebarMenuButton isActive={...}` for the current route.
- ❌ Don't place page content outside `SidebarInset` — it won't offset correctly.
