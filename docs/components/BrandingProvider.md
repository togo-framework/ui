# BrandingProvider

Applies a brand's colors to the whole UI at runtime (multi-theme). Writes brand CSS vars
onto `document.documentElement`, so every `bg-primary`/`text-primary` component re-skins.

## Import
```tsx
import { BrandingProvider, useBrand, applyBrand, SENTRA_BRAND, type BrandTokens } from "@togo-framework/ui";
```

## Usage
```tsx
"use client";
<BrandingProvider primaryHex="#7c3aed" accentHex="#06b6d4" productName="Acme" iconName="shield">
  <App />
</BrandingProvider>

// imperative alternative
applyBrand(document.documentElement, { primaryHex: "#16a34a" });
```

## Props
| Prop | Type | Default | Description |
|---|---|---|---|
| `primaryHex` | `string` | Sentra maroon | Brand primary; sets `--primary` (+ derived). |
| `accentHex` | `string` | — | Accent color. |
| `logoUrl` | `string` | — | Logo mark; sets `--logo-url`. |
| `iconName` | `string \| null` | — | Named icon for the brand mark. |
| `productName` | `string` | `'Sentra Insight Hub'` | App name surfaced to brand-aware UI. |
| `children` | `ReactNode` | — | App tree. |

`useBrand()` reads the resolved brand. `applyBrand(root, tokens)` sets the vars directly.
`SENTRA_BRAND` is the default token set.

## Accessibility, RTL & theming
- SSR-safe: `applyBrand` runs in `useEffect`; `styles.css` provides static fallbacks so the
  UI is themed before hydration. Composes with dark/light (it only sets brand hues).

## Do / Don't
- ✅ Mount once near the root, above the theme/language providers. ✅ Feed per-tenant colors.
- ❌ Don't set `--primary` by hand in app CSS — let the provider own it.
