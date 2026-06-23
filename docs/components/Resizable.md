# Resizable

Resizable split panels with draggable handles. Built on `react-resizable-panels`.

## Import
```tsx
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@togo-framework/ui";
```

## Usage
```tsx
<ResizablePanelGroup direction="horizontal" className="rounded-lg border">
  <ResizablePanel defaultSize={30} minSize={20}>Sidebar</ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize={70}>Main</ResizablePanel>
</ResizablePanelGroup>
```

## Props
| Part | Prop | Type | Default | Description |
|---|---|---|---|---|
| `ResizablePanelGroup` | `direction` | `"horizontal" \| "vertical"` | — | Split axis (required). |
| | `autoSaveId` | `string` | — | Persist sizes to storage. |
| | `onLayout` | `(sizes:number[]) => void` | — | Layout change callback. |
| `ResizablePanel` | `defaultSize` | `number` (%) | — | Initial size. |
| | `minSize` / `maxSize` | `number` (%) | — | Bounds. |
| | `collapsible` / `onCollapse` | — | — | Allow collapsing. |
| `ResizableHandle` | `withHandle` | `boolean` | `false` | Show the grip affordance. |
| | `disabled` | `boolean` | `false` | Lock the handle. |

## Accessibility, RTL & theming
- Handles are keyboard-resizable (focusable, arrow keys) with a focus ring (`ring-ring`).
- Vertical groups auto-rotate the grip; layout adapts to `dir` of the group.
- Handle/grip use `bg-border` → flips dark/light.

## Do / Don't
- ✅ Set `direction` and give panels `defaultSize`.
- ✅ Use `withHandle` so users can find the divider.
- ❌ Don't put unbounded content without `minSize` — panels can collapse to nothing.
