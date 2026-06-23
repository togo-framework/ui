# FeedbackButton / FeedbackHub

The reporter-facing feedback surface (ported from Motor). `FeedbackButton` is the trigger
(a floating FAB or an inline button); `FeedbackHub` is the slide-over showing the reporter's
items. Presentational + bilingual (EN/AR) + RTL — the host supplies issues + callbacks (no SDK).

## Import
```tsx
import { FeedbackButton, FeedbackHub } from "@togo-framework/ui";
```

## Usage
```tsx
const [open, setOpen] = useState(false);
<FeedbackButton variant="inline" count={2} onOpen={() => setOpen(true)} />
<FeedbackHub open={open} onOpenChange={setOpen} issues={myIssues}
  onNewIssue={() => …} onSelectIssue={(id) => …} />
```

## Props
**FeedbackButton** (extends `<button>`): `variant` `'floating'|'inline'` (default floating),
`count?`, `label?`, `language?` `'en'|'ar'`, `onOpen?`/`onClick?`.
**FeedbackHub**: `open`, `onOpenChange`, `issues`, `language?`, `loading?`, `route?`,
`onNewIssue?`, `onSelectIssue?`, `title?`.

## Accessibility, RTL & theming
- Floating variant pins to the inline-end/bottom corner (flips under `dir="rtl"`).
- Hub is a `Sheet` (focus trap, Esc). Dark/light via tokens.

## Do / Don't
- ✅ own the data + submission in your app; pass issues/callbacks in.
- ❌ don't expect it to fetch — it's presentational.
