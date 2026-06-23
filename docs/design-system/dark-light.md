# Dark & Light mode

Mode is **class-based** — add/remove `dark` on `<html>`:

```ts
document.documentElement.classList.toggle("dark", isDark);
```

**Portals matter:** overlays (`Dialog`, `DropdownMenu`, `Popover`, `Sheet`, `Drawer`,
`Tooltip`) render at `document.body`, so the `dark` class must live on `<html>`/`body`, not
only an inner wrapper, or portaled content won't be themed.

Do / Don't:
- ✅ `bg-background`, `bg-card`, `text-foreground`, `text-muted-foreground`.
- ✅ `dark` on `<html>`.
- ❌ hard-coded `bg-slate-900` / `text-white` in wrappers (won't flip).
- ✅ modal scrims (`bg-black/80`) are intentionally constant.
