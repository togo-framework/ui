# NestedStepsEditor

Multi-level **drag-and-drop** editor for a workflow step tree. Steps reorder within a branch **and** move across nesting levels (top-level ↔ an `if`'s `then`/`else` ↔ a `for_each`'s loop `steps`).

## Import
```tsx
import { NestedStepsEditor } from "@togo-framework/ui";
```

## Usage
```tsx
<NestedStepsEditor
  steps={steps}                         // tree: steps may contain then/else/steps arrays
  language="en"
  onChange={setSteps}                   // new tree after a drag
  onEditStep={(step) => openOptions(step)}   // gear button
  onDeleteStep={(uid) => removeStep(uid)}
/>
```

## Props
| Prop | Type | Default | Description |
|---|---|---|---|
| `steps` | `Step[]` | — | The step tree (`then`/`else`/`steps` branches nest). |
| `language` | `'en' \| 'ar'` | `'en'` | Labels + RTL. |
| `onChange` | `(steps) => void` | — | Fired after a drag with the reordered tree. |
| `onEditStep` | `(step) => void` | — | Gear/settings button per step. |
| `onDeleteStep` | `(uid) => void` | — | Delete button per step. |
| `className` | `string` | — | — |

## How drag-and-drop works
Built on `@dnd-kit` with one `DndContext` + a `SortableContext` per branch; `onDragEnd` resolves the dragged step's path and the drop target (a sibling step or an empty-branch drop zone) and moves it immutably. A step cannot be dropped into its own subtree. A `DragOverlay` shows the dragged step.

## Accessibility, RTL & theming
Pointer + keyboard sensors. RTL-aware (`language="ar"` flips logical layout). Token-themed.
