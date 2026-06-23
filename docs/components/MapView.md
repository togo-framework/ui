# MapView

A real OpenStreetMap powered by **leaflet** — SSR-safe (leaflet loads in an effect, client-only).

## Import
```tsx
import { MapView } from "@togo-framework/ui";
```

## Usage
```tsx
<MapView
  center={[25.2854, 51.531]}
  zoom={11}
  height={460}
  markers={[{ lat: 25.2854, lng: 51.531, label: "Doha" }]}
/>
```

## Props
| Prop | Type | Default | Description |
|---|---|---|---|
| `center` | `[number, number]` | — | `[lat, lng]` center. |
| `zoom` | `number` | `12` | Initial zoom. |
| `markers` | `{ lat, lng, label?, color? }[]` | `[]` | Pins (divIcon; popup on click). |
| `height` | `number \| string` | `360` | Container height. |
| `attribution` | `string` | OSM | Tile attribution HTML. |
| `className` | `string` | — | Container class. |

## Accessibility, RTL & theming
- Client-only: leaflet initializes in `useEffect`; the leaflet CSS is injected from a CDN once.
- Themed container (rounded, `border-border`); tiles are OSM raster. Markers avoid the leaflet image-path issue via `divIcon`.

## Do / Don't
- ✅ Render inside a sized container; it fills width.
- ❌ Don't import on the server — it's guarded but meant for client routes (`"use client"`).
- Optional: the prism `MapPanel` chrome can wrap a map canvas; `MapView` is the working OSM map.
