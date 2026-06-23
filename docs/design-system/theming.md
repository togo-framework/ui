# Theming — multi-color brand

Re-skin the entire UI to any brand color at runtime. `BrandingProvider` (or `applyBrand`)
writes brand CSS vars onto `document.documentElement`; every `bg-primary` component updates.

```tsx
import { BrandingProvider } from "@togo-framework/ui";
<BrandingProvider primaryHex="#7c3aed" accentHex="#06b6d4" productName="Acme">
  <App />
</BrandingProvider>
```

Imperatively:

```tsx
import { applyBrand } from "@togo-framework/ui";
applyBrand(document.documentElement, { primaryHex: "#16a34a" });
```

- `applyBrand` converts hex → HSL and sets `--primary` (+ derived vars).
- Static fallbacks in `styles.css` keep the UI themed before the provider runs (SSR-safe).
- **Per-tenant:** read a brand color from the org record → pass to `BrandingProvider`; the
  same build serves every tenant in their own color.
