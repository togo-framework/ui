# Mobile-first & responsive

Components are mobile-first and scale up with Tailwind breakpoints.

Built-in responsive behavior:
- **Sidebar** collapses to an off-canvas **Sheet** on small screens (with `SidebarTrigger`).
- **Dialog / Sheet / Drawer** size to the viewport; `Drawer` is the touch bottom-sheet.
- **DataTable** scrolls horizontally on narrow screens.

Guidance:
- Build layouts mobile-first (single column → `md:`/`lg:` grids).
- Prefer `Drawer` over `Dialog` for primary mobile flows.
- Test RTL + viewport together (the sidebar flips side *and* collapses).

In Storybook, use the **viewport** toolbar (Mobile/Tablet/Laptop/Desktop) to preview.
