import type { Meta, StoryObj } from "@storybook/react";
import { AuroraBackground, GlassCard, MockupWindow, PillButton, Reveal, CodeBlock } from "../index";

const meta: Meta = { title: "Marketing/Glass" };
export default meta;
type Story = StoryObj;

export const Showcase: Story = {
  render: () => (
    <div className="relative min-h-[600px] bg-background text-foreground p-10 overflow-hidden">
      <AuroraBackground />
      <div className="relative mx-auto max-w-3xl space-y-6">
        <Reveal><GlassCard className="p-6"><h3 className="text-lg font-semibold">GlassCard</h3><p className="text-muted-foreground text-sm mt-2">Frosted, translucent, hairline-bordered surface over the aurora.</p></GlassCard></Reveal>
        <Reveal delayMs={80}>
          <MockupWindow title="~/myapp — togo">
            <CodeBlock lang="bash">{"$ togo new myapp\n$ togo serve\n→ http://localhost:8080"}</CodeBlock>
          </MockupWindow>
        </Reveal>
        <div className="flex gap-3"><PillButton href="#">Get started →</PillButton><PillButton href="#" variant="glass">Docs</PillButton></div>
      </div>
    </div>
  ),
};
