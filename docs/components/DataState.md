# DataState

A wrapper that renders the right placeholder for an async region — loading, error, empty,
session-expired, or service-unavailable — given pre-resolved label bundles.

## Import
```tsx
import { DataState } from "@togo-framework/ui";
```

## Usage
```tsx
<DataState
  loading={isLoading}
  error={error}
  isEmpty={rows.length === 0}
  labels={{
    emptyTitle: "No data",
    errorTitle: "Something went wrong",
    sessionExpiredTitle: "Session expired",
    signInLabel: "Sign in",
    unavailableTitle: "Service unavailable",
  }}
>
  <Table rows={rows} />
</DataState>
```

## Props
| Prop | Type | Default | Description |
|---|---|---|---|
| `loading` | `boolean` | — | Show the loading skeleton. |
| `error` | `unknown` | — | When set, shows the error state. |
| `isEmpty` | `boolean` | — | Show the empty state. |
| `labels` | bundle | — | Pre-resolved EN/AR strings: `emptyTitle/Description`, `errorTitle`, `sessionExpiredTitle/Description`, `signInLabel`, `unavailableTitle/Description/Hint`, `loginHref?`. |
| `children` | `ReactNode` | — | Rendered when data is present. |

## Accessibility, RTL & theming
- Each state (skeleton/empty/error) is token-themed and RTL-safe. The library never fetches — you pass flags + labels.

## Do / Don't
- ✅ Resolve labels via your `language`. ❌ Don't fetch inside it — pass `loading`/`error`/`isEmpty`.
