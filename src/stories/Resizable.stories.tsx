import type { Meta, StoryObj } from "@storybook/react";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "../ui/resizable";

const meta: Meta<typeof ResizablePanel> = {
  title: "Primitives/Resizable",
  component: ResizablePanel,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj<typeof ResizablePanel>;

export const Horizontal: Story = {
  render: () => (
    <div className="h-[300px] p-6">
      <ResizablePanelGroup direction="horizontal" className="rounded-lg border">
        <ResizablePanel defaultSize={35} className="flex items-center justify-center bg-muted/30">
          <span className="text-sm text-muted-foreground">Sidebar</span>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={65} className="flex items-center justify-center">
          <span className="text-sm text-muted-foreground">Content — drag the divider</span>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="h-[320px] p-6">
      <ResizablePanelGroup direction="vertical" className="rounded-lg border">
        <ResizablePanel defaultSize={50} className="flex items-center justify-center bg-muted/30">Top</ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50} className="flex items-center justify-center">Bottom</ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
};
