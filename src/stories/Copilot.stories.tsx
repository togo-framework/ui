import type { Meta, StoryObj } from "@storybook/react";
import { ArtifactRenderer } from "../components/copilot/artifacts";
import ChatThread from "../components/copilot/ChatThread";
import { CopilotProvider } from "../components/copilot/CopilotProvider";
import { CopilotLauncher } from "../components/copilot/CopilotLauncher";
import type { CopilotClient } from "../components/copilot/client";

const meta: Meta = {
  title: "Components/Copilot",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Copilot UI ported from prism, decoupled from the cortex SDK: the **artifacts** " +
          "(ArtifactRenderer renders model-emitted table/chart/card/markdown/actions blocks) and " +
          "the **chat** shell (ChatThread message list). The live dock (CopilotProvider/UnifiedCopilotDock) " +
          "takes a host-injected `CopilotClient` instead of the SDK.",
      },
    },
  },
};
export default meta;

const md = { version: 1, kind: "markdown", title_en: "Executive summary", data: { content: "## Key findings\n\n- Coordinated activity **up 23%**\n- Two dominant source clusters\n- Recommend escalation to the regional desk" } } as any;
const table = { version: 1, kind: "table", title_en: "Top sources", data: { columns: ["Source", "Mentions", "Reach"], rows: [["Reuters", 333, "0"], ["AFP", 276, "0"], ["Al Jazeera", 190, "0"]] } } as any;

export const Artifacts: StoryObj = {
  name: "Artifacts — markdown + table",
  render: () => (
    <div className="max-w-2xl space-y-4">
      <ArtifactRenderer artifact={md} />
      <ArtifactRenderer artifact={table} />
    </div>
  ),
};

export const Chat: StoryObj = {
  name: "Chat thread",
  render: () => (
    <div className="max-w-2xl">
      <ChatThread
        messages={[
          { id: "1", role: "user", content: "Summarize the latest narrative." } as any,
          { id: "2", role: "assistant", content: "Coordinated activity is up 23% across monitored regions, concentrated in two source clusters.", a2uiArtifacts: [md] } as any,
          { id: "3", role: "user", content: "Which sources?" } as any,
          { id: "4", role: "assistant", content: "Here are the top contributors:", a2uiArtifacts: [table] } as any,
        ]}
      />
    </div>
  ),
};

// ── Full Dock — wired CopilotProvider with a mock streaming client ──────────────
// The provider renders UnifiedCopilotDock; CopilotLauncher opens it; the mock
// client streams a token-by-token reply, a step, and a table artifact.
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const mockClient: CopilotClient = {
  async *copilotDispatch() {
    const reply =
      "Sure — coordinated activity is up 23% across monitored regions this week, " +
      "concentrated in two source clusters. Here are the top contributors:";
    yield { type: "step", step: { step: "search", message: "Searching sources…", done: false } } as any;
    await sleep(400);
    for (const word of reply.split(" ")) {
      await sleep(45);
      yield { type: "delta", text: word + " " } as any;
    }
    yield { type: "step", step: { step: "search", message: "Searched 3 sources", done: true, count: 3 } } as any;
    await sleep(250);
    yield {
      type: "artifact",
      artifact: {
        version: 1, kind: "table", title_en: "Top sources", title_ar: "أهم المصادر",
        data: { columns: ["Source", "Mentions"], rows: [["Reuters", 333], ["AFP", 276], ["Al Jazeera", 190]] },
      },
    } as any;
    yield { type: "done" } as any;
  },
};

export const FullDock: StoryObj = {
  name: "Full Dock — open & chat (mock streaming)",
  parameters: { layout: "fullscreen", fullBleed: true, docs: { story: { inline: false, height: "640px" } } },
  render: () => (
    <CopilotProvider client={mockClient} context={{ contextType: "global", contextRef: "", title_en: "Demo", title_ar: "تجربة", suggestions: [] } as any}>
      <div className="min-h-screen bg-background p-8 text-foreground">
        <h1 className="mb-2 text-2xl font-semibold">Copilot demo</h1>
        <p className="mb-6 max-w-prose text-sm text-muted-foreground">
          Click the launcher to open the dock, then send a message (e.g. “summarize the latest narrative”).
          The mock client streams a reply token-by-token, shows a step, and returns a table artifact.
        </p>
        <CopilotLauncher variant="header" />
      </div>
    </CopilotProvider>
  ),
};
