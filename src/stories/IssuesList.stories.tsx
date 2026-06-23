import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { IssuesList } from "../components/errors";
import type { ErrorFilter, IssueSort, Issue } from "../components/errors";
import { SAMPLE_ISSUES } from "./_fixtures/errors";

const meta: Meta<typeof IssuesList> = {
  title: "Components/Issues List",
  component: IssuesList,
  parameters: { docs: { story: { inline: false, height: "560px" } } },
};
export default meta;

type Story = StoryObj<typeof IssuesList>;

function Demo({ language }: { language: "en" | "ar" }) {
  const [filter, setFilter] = React.useState<ErrorFilter>({});
  const [sort, setSort] = React.useState<IssueSort>("lastSeen");
  const [sel, setSel] = React.useState<Issue | null>(null);
  return (
    <div className="h-[520px] overflow-hidden rounded-xl border border-border bg-background">
      <IssuesList
        issues={SAMPLE_ISSUES}
        language={language}
        selectedId={sel?.id}
        onSelectIssue={setSel}
        filter={filter}
        onFilterChange={setFilter}
        sort={sort}
        onSortChange={setSort}
        environments={["production", "staging"]}
      />
    </div>
  );
}

export const Default: Story = { render: () => <Demo language="en" /> };
export const ArabicRTL: Story = { name: "Arabic / RTL", render: () => <Demo language="ar" /> };
export const Empty: Story = {
  render: () => (
    <div className="h-[300px] overflow-hidden rounded-xl border border-border">
      <IssuesList issues={[]} language="en" />
    </div>
  ),
};
