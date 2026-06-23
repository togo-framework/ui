# NetworkGraph

A dependency-free **SVG** graph with a deterministic force layout (circular seed + fixed iterations, no randomness).

## Import
```tsx
import { NetworkGraph } from "@togo-framework/ui";
```

## Usage
```tsx
<NetworkGraph
  nodes={[{ id: "a", label: "Gateway", group: "core" }, { id: "b", label: "Auth", group: "core" }]}
  links={[{ source: "a", target: "b" }]}
/>
```

## Props
| Prop | Type | Default | Description |
|---|---|---|---|
| `nodes` | `{ id, label?, group? }[]` | — | Graph nodes; `group` drives color. |
| `links` | `{ source, target }[]` | — | Edges by node id. |
| `width` / `height` | `number` | `640` / `420` | SVG viewBox. |
| `groupColor` | `(group?) => string` | token palette | Map group → color. |

## Accessibility, RTL & theming
- `role="img"` with an `aria-label`; lines/labels use tokens (`--border`, `fill-foreground`).
- Layout is deterministic (no `Math.random`) so renders are stable. Also usable as `EntityNetworkGraph`'s `renderGraph`.

## Do / Don't
- ✅ Keep node counts modest (the O(n²) layout runs in-render); memoize inputs.
- ❌ Don't expect physics interactivity — it's a static computed layout.
