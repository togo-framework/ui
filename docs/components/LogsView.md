# LogsView

Realtime/streamed log viewer — filterable, level-colored log lines.

## Import
```tsx
import { LogsView } from "@togo-framework/ui";
```

## Props
Rich, presentational props (ported from the prism design system). See the **Docs** tab of
the `LogsView` story in Storybook for the full, auto-generated props table + interactive controls.

## Accessibility, RTL & theming
- Presentational: pass data + callbacks; no data fetching inside.
- RTL via logical CSS (pass `isRTL`/`language` where the component accepts it); dark/light via design tokens.

## Do / Don't
- ✅ Keep it controlled; resolve icons/data in the host and pass them in.
- ❌ Don't hard-code colors around it — use tokens so it flips with the theme.
