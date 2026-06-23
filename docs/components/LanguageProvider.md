# LanguageProvider

App-wide language context (EN/AR) + a translate helper. Pairs with RTL (`dir`).

## Import
```tsx
import { LanguageProvider, useT, useLanguage, useTranslation, LANG_COOKIE_NAME } from "@togo-framework/ui";
```

## Usage
```tsx
<LanguageProvider initialLanguage="en" onLanguageChange={persistToProfile}>
  <App />
</LanguageProvider>

// inside a component
const t = useT();
const { language, setLanguage } = useLanguage();
<button onClick={() => setLanguage(language === "en" ? "ar" : "en")}>{t("nav.profile")}</button>
```

## Props
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `ReactNode` | — | App tree. |
| `initialLanguage` | `'en' \| 'ar'` | `'en'` | Seed language (e.g. from the user's profile). |
| `onLanguageChange` | `(lang) => void` | — | Persist the change (profile/server). |

`useLanguage()` → `{ language, setLanguage }`. `useT()` → `t(key)`. The choice persists in a
cookie (`LANG_COOKIE_NAME`).

## Accessibility, RTL & theming
- Switching language should also switch `dir` (`document.documentElement.dir`) — see the RTL guide.
- Components also accept a `language` prop for local overrides.

## Do / Don't
- ✅ Mount near the root; sync `dir` with `language`. ❌ Don't duplicate app strings in the kit — it owns chrome only.
