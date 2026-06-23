import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { ErrorTrackingPage } from "../components/errors";
import type { ErrorFilter, IssueSort } from "../components/errors";
import { SAMPLE_ISSUES } from "./_fixtures/errors";

const meta: Meta<typeof ErrorTrackingPage> = {
  title: "Logs/Error Tracking",
  component: ErrorTrackingPage,
  parameters: {
    layout: "fullscreen",
    fullBleed: true,
    docs: { story: { inline: false, height: "720px" } },
  },
};
export default meta;

type Story = StoryObj<typeof ErrorTrackingPage>;

function Demo({ language }: { language: "en" | "ar" }) {
  const [filter, setFilter] = React.useState<ErrorFilter>({});
  const [sort, setSort] = React.useState<IssueSort>("lastSeen");
  return (
    <ErrorTrackingPage
      issues={SAMPLE_ISSUES}
      language={language}
      filter={filter}
      onFilterChange={setFilter}
      sort={sort}
      onSortChange={setSort}
      environments={["production", "staging"]}
      onResolve={(i) => console.log("resolve", i.id)}
      onIgnore={(i) => console.log("ignore", i.id)}
    />
  );
}

export const Default: Story = { render: () => <Demo language="en" /> };
export const ArabicRTL: Story = { name: "Arabic / RTL", render: () => <Demo language="ar" /> };
