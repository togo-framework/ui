import type { Meta, StoryObj } from "@storybook/react";
import { ArtifactRenderer } from "../components/copilot/artifacts";
import ChatThread from "../components/copilot/ChatThread";

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
