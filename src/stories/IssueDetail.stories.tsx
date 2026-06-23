import type { Meta, StoryObj } from "@storybook/react";
import { IssueDetail } from "../components/errors";
import { SAMPLE_ISSUES } from "./_fixtures/errors";

const meta: Meta<typeof IssueDetail> = {
  title: "Components/Issue Detail",
  component: IssueDetail,
  parameters: { docs: { story: { inline: false, height: "640px" } } },
};
export default meta;

type Story = StoryObj<typeof IssueDetail>;

export const Default: Story = {
  render: () => (
    <div className="h-[620px] overflow-hidden rounded-xl border border-border bg-background">
      <IssueDetail issue={SAMPLE_ISSUES[0]} language="en" onResolve={() => {}} onIgnore={() => {}} />
    </div>
  ),
};

export const ArabicRTL: Story = {
  name: "Arabic / RTL",
  render: () => (
    <div className="h-[620px] overflow-hidden rounded-xl border border-border bg-background">
      <IssueDetail issue={SAMPLE_ISSUES[0]} language="ar" onResolve={() => {}} onIgnore={() => {}} />
    </div>
  ),
};

export const FatalGoTrace: Story = {
  name: "Fatal (Go trace)",
  render: () => (
    <div className="h-[560px] overflow-hidden rounded-xl border border-border bg-background">
      <IssueDetail issue={SAMPLE_ISSUES[1]} language="en" />
    </div>
  ),
};
