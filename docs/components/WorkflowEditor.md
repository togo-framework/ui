# WorkflowEditor

Drag-and-drop workflow editor (dnd-kit) for arranging pipeline steps.

## Import
```tsx
import { WorkflowEditor } from "@togo-framework/ui";
```

## Props
Rich, presentational props (ported from the prism design system). See the **Docs** tab of
the `WorkflowEditor` story in Storybook for the full, auto-generated props table + interactive controls.

## Accessibility, RTL & theming
- Presentational: pass data + callbacks; no data fetching inside.
- RTL via logical CSS (pass `isRTL`/`language` where the component accepts it); dark/light via design tokens.

## Do / Don't
- ✅ Keep it controlled; resolve icons/data in the host and pass them in.
- ❌ Don't hard-code colors around it — use tokens so it flips with the theme.

## Multi-level editing
The steps section uses [`NestedStepsEditor`](./NestedStepsEditor.md) for **multi-level drag-and-drop** — drag steps within and across the `then`/`else`/loop branches. Each step's gear opens [`StepOptionsDialog`](./StepOptionsDialog.md), a **type-specific** settings modal whose fields depend on the step `kind`.
