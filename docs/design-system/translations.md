# Translations (EN / AR)

**Per-component:** components with chrome accept `language="en" | "ar"`:

```tsx
<DataTable data={rows} columns={cols} language="ar" />
<LoginForm language="ar" />
```

**App-wide:** `LanguageProvider` shares the active language + a translate helper:

```tsx
import { LanguageProvider, useT, useLanguage } from "@togo-framework/ui";

<LanguageProvider initialLanguage="en"><App /></LanguageProvider>

const t = useT();
const { language, setLanguage } = useLanguage();
```

Switching language usually pairs with switching `dir` (see RTL). The provider persists the
choice (cookie). The kit owns component chrome only — translate your own content in app code.
