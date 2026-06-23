# Collapsible

A single show/hide region (Radix Collapsible). Lighter than `Accordion` for one toggle.

## Import
```tsx
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@togo-framework/ui";
```

## Usage
```tsx
<Collapsible>
  <CollapsibleTrigger>Show details</CollapsibleTrigger>
  <CollapsibleContent>Extended details here…</CollapsibleContent>
</Collapsible>
```

## Props
Forwards Radix Collapsible props.

| Prop (on `Collapsible`) | Type | Description |
|---|---|---|
| `open` / `defaultOpen` | `boolean` | Controlled / uncontrolled. |
| `onOpenChange` | `(open: boolean) => void` | Open-state callback. |
| `disabled` | `boolean` | Disable toggling. |

## Accessibility, RTL & theming
- Radix manages `aria-expanded` + keyboard activation on the trigger.
- RTL-neutral content; trigger inherits your layout direction.
- Unstyled by default — style with tokens (`text-foreground`, etc.).

## Do / Don't
- ✅ Use for a single optional region; use `Accordion` for a set.
- ❌ Don't hide critical content behind it on first load.
