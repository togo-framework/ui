# Installation

```bash
npm i @togo-framework/ui lucide-react
```

```css
/* globals.css */
@import "tailwindcss";
@import "@togo-framework/ui/styles.css";              /* tokens + @theme + Lusail */
@source "../node_modules/@togo-framework/ui/dist";    /* Tailwind v4: scan the kit */
```

Serve the Lusail font:

```bash
cp -r node_modules/@togo-framework/ui/public/fonts/lusail public/fonts/lusail
```

Wrap with providers (optional):

```tsx
"use client";
import { BrandingProvider, LanguageProvider } from "@togo-framework/ui";
export function Providers({ children }) {
  return (
    <BrandingProvider primaryHex="#7c3aed" accentHex="#06b6d4" productName="My App">
      <LanguageProvider initialLanguage="en">{children}</LanguageProvider>
    </BrandingProvider>
  );
}
```

- Dark mode: `document.documentElement.classList.toggle("dark")`.
- RTL: `document.documentElement.dir = "rtl"`.
- React 19 peers: add `legacy-peer-deps=true` to `.npmrc`.
