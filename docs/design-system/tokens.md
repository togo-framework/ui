# Design tokens

Components read **semantic CSS variables**, never raw colors — that's what makes theming
global. Tokens are HSL-channel values exposed as Tailwind v4 color utilities.

| Token | Utility | Role |
|---|---|---|
| `--background` / `--foreground` | `bg-background` / `text-foreground` | page surface + text |
| `--card` | `bg-card` | raised surfaces (tables, panels) |
| `--popover` | `bg-popover` | overlays (menus, dialogs) |
| `--primary` | `bg-primary` | brand action color |
| `--secondary` | `bg-secondary` | secondary action |
| `--muted` | `text-muted-foreground` | subdued text/fills |
| `--accent` | `bg-accent` | hover/active fills |
| `--destructive` | `bg-destructive` | danger |
| `--border` / `--input` / `--ring` | `border-border` / `border-input` / `ring-ring` | lines + focus |
| `--sidebar-*` | — | sidebar surfaces |

- `--radius` drives `rounded-sm/md/lg` (default `0.5rem`).
- Font: **Lusail** (`--tg-font`), Arabic + Latin, weights 300–700.

**Rule:** never hard-code colors in app wrappers — use the same tokens so your UI flips
with the theme. The only constant colors are modal scrims (`bg-black/80`) and logo chips.
