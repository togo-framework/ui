# RTL (right-to-left)

Components use **logical CSS** (`ps/pe`, `ms/me`, `start/end`, `text-start/end`). Set the
direction on a parent and the whole UI mirrors.

```tsx
document.documentElement.dir = "rtl";   // app-wide
<div dir="rtl"><App /></div>            // or a subtree
```

Pair with language for Arabic:

```tsx
<div dir="rtl"><DataTable data={rows} columns={cols} language="ar" /></div>
```

Components with internal chrome translate strings and flip sort icons/chevrons when
`language="ar"` + `dir="rtl"`.

Do / Don't:
- ✅ logical utilities (`ms-2`, `pe-4`, `start-0`).
- ❌ `ml-2` / `right-0` in wrappers (won't mirror).
- ✅ set `dir` on a parent, not per-component.
