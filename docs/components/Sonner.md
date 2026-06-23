# Sonner (Toast)

Toast notifications via **sonner**. Mount `<Toaster />` once near the app root, then call
`toast(...)` from anywhere.

## Import
```tsx
import { Toaster, toast } from "@togo-framework/ui";
```

## Usage
```tsx
// once, near the root
<Toaster />

// anywhere
toast("Saved");
toast.success("Profile updated");
toast.error("Something went wrong");
toast.promise(save(), { loading: "Saving…", success: "Saved", error: "Failed" });
toast("Undo delete?", { action: { label: "Undo", onClick: restore } });
```

## API
| Call | Description |
|---|---|
| `toast(message, opts?)` | Default toast. |
| `toast.success / .error / .info / .warning(message)` | Tone variants. |
| `toast.promise(p, { loading, success, error })` | Tracks a promise. |
| `toast(message, { action: { label, onClick } })` | With an action button. |
| `<Toaster position? theme? richColors? />` | Mount once; inherits app theme. |

## Accessibility, RTL & theming
- Toasts are announced politely; auto-dismiss with pause-on-hover.
- The `Toaster` is **theme-aware** and uses `bg-background`/`text-foreground`/`border` tokens, so it flips with the `.dark` class on `<html>`. Position flips under RTL.

## Do / Don't
- ✅ Use for transient, non-blocking feedback.
- ✅ Mount exactly one `<Toaster />`.
- ❌ Don't use for errors that require a decision — use `AlertDialog`.
