# AuthCard

The auth shell — a branded split-screen (brand panel + form area) used to host any sign-in
screen. Presentational: you render the form as `children`.

## Import
```tsx
import { AuthCard, type AuthCardBrand, type AuthLayout } from "@togo-framework/ui";
```

## Usage
```tsx
const brand: AuthCardBrand = {
  icon: <ShieldCheck className="h-10 w-10" />,
  name: { en: "Acme", ar: "أكمي" },
  tagline: { en: "Authentication & identity", ar: "المصادقة والهوية" },
};

<AuthCard brand={brand} language="en" layout="split">
  <h1 className="text-2xl font-semibold">Welcome back</h1>
  {/* your form */}
</AuthCard>
```

## Props
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `ReactNode` | — | The form content. |
| `brand` | `AuthCardBrand` | Sentra default | Brand panel: `logoUrl?`, `icon?`, `initial?`, `name? (string \| {en,ar})`, `tagline? {en,ar}`, `bullets? {en,ar}[]`, `secureNote? {en,ar}`. |
| `layout` | `'split' \| 'split-reverse' \| 'centered' \| 'minimal'` | `'split'` | Where/whether the brand panel shows. |
| `language` | `'en' \| 'ar'` | `'en'` | Picks localized brand strings; drives RTL text. |
| `onLanguageToggle` | `() => void` | — | Shows a language toggle when provided. |
| `className` | `string` | — | Extra classes on the wrapper. |

## Accessibility, RTL & theming
- Localized via `language` (+ the `{en,ar}` brand fields); set `dir="rtl"` on a parent for Arabic — the split mirrors.
- Dark/light via tokens (`bg-background`/`bg-card`); flips with `.dark`.

## Do / Don't
- ✅ Pass pre-localized `{en,ar}` brand fields. ✅ Use `layout="centered"` for mobile-only forms.
- ❌ Don't hard-code brand colors — set them via `BrandingProvider`.
