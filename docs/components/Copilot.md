# Copilot (chat + artifacts)

The copilot UI ported from prism and **decoupled from the cortex SDK**. Two parts:

- **Artifacts** — `ArtifactRenderer` renders model-emitted A2UI blocks (`table`, `chart`,
  `card`, `actions`, `markdown`, + client_* kinds) below a message. Presentational.
- **Chat shell** — `ChatThread` (message list), `StreamingMessage`, `AgentSteps`,
  `ArtifactViewer`. The live dock `CopilotProvider` / `UnifiedCopilotDock` / `CopilotLauncher`
  take a host-injected **`CopilotClient`** (`copilotDispatch(req) => AsyncIterable<event>`)
  instead of `@sentra/cortex-sdk`, so the kit ships the UI and the app wires its own stream.

## Import
```tsx
import {
  ArtifactRenderer, ChatThread, CopilotProvider, UnifiedCopilotDock, useCopilot,
  type CopilotClient,
} from "@togo-framework/ui";
```

## Usage
```tsx
// Artifacts
<ArtifactRenderer artifact={{ version: 1, kind: "markdown", data: { content: "## Hi" } }} />

// Live dock with your own streaming backend
const client: CopilotClient = {
  async *copilotDispatch(req) { /* yield SSE events from your API */ },
};
<CopilotProvider client={client} baseUrl="/api/v1"><UnifiedCopilotDock /></CopilotProvider>
```

## Accessibility, RTL & theming
- Bilingual (EN/AR) + RTL; dark/light via tokens. ChatThread auto-scrolls on new tokens.

## Do / Don't
- ✅ inject a `CopilotClient` that streams from your backend.
- ❌ don't expect a built-in SDK — the transport is yours.
