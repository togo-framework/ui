# Tabs

Tabbed panels for switching between related views. Built on Radix Tabs.

## Import
```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@togo-framework/ui";
```

## Usage
```tsx
<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="activity">Activity</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">Overview panel</TabsContent>
  <TabsContent value="activity">Activity panel</TabsContent>
</Tabs>
```

## Props
`Tabs` is Radix `Tabs.Root`; `TabsList`/`TabsTrigger`/`TabsContent` forward all Radix props plus `className`.

| Part | Key props | Description |
|---|---|---|
| `Tabs` | `value`, `defaultValue`, `onValueChange`, `orientation` ("horizontal"\|"vertical"), `dir` | Root state container. |
| `TabsList` | `className`, `loop` | Pill container (`bg-muted`). |
| `TabsTrigger` | `value` (required), `disabled` | Tab button; active state = `data-[state=active]`. |
| `TabsContent` | `value` (required), `forceMount` | Panel shown for the active value. |

## Accessibility, RTL & theming
- Full Radix a11y: arrow-key roving focus, `role="tablist"/"tab"/"tabpanel"`, focus ring via `ring-ring`.
- Pass `dir="rtl"` (or inherit from a parent) — arrow-key navigation reverses.
- Surfaces use tokens (`bg-muted`, `data-[state=active]:bg-background`), so it flips dark/light.

## Do / Don't
- ✅ Give every `TabsTrigger`/`TabsContent` a matching `value`.
- ✅ Use `orientation="vertical"` for sidebars of tabs.
- ❌ Don't nest interactive controls inside a `TabsTrigger`.
