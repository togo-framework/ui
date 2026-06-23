# Accordion

Vertically stacked, collapsible sections (Radix Accordion).

## Import
```tsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@togo-framework/ui";
```

## Usage
```tsx
<Accordion type="single" collapsible>
  <AccordionItem value="shipping">
    <AccordionTrigger>Shipping</AccordionTrigger>
    <AccordionContent>Ships in 2–3 business days.</AccordionContent>
  </AccordionItem>
  <AccordionItem value="returns">
    <AccordionTrigger>Returns</AccordionTrigger>
    <AccordionContent>30-day return window.</AccordionContent>
  </AccordionItem>
</Accordion>
```

## Props
`Accordion` forwards Radix Root props; the parts add styling only.

| Prop (on `Accordion`) | Type | Description |
|---|---|---|
| `type` | `"single" \| "multiple"` | One or many open at once. |
| `collapsible` | `boolean` | (single) allow closing the open item. |
| `value` / `defaultValue` | `string \| string[]` | Controlled/uncontrolled open state. |
| `AccordionItem.value` | `string` | Required unique id per item. |

## Accessibility, RTL & theming
- Full keyboard + `aria-expanded` from Radix; the trigger's chevron rotates on open.
- RTL: trigger layout + chevron mirror under `dir="rtl"`.
- `border-border`, `text-foreground` tokens — flips with `.dark`.

## Do / Don't
- ✅ Give every `AccordionItem` a stable `value`.
- ❌ Don't bury primary actions inside collapsed sections.
