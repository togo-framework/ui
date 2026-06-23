import type { Meta, StoryObj } from "@storybook/react";
import { AreaChart, BarChart, Gauge } from "./Charts";

const meta: Meta = { title: "Charts" };
export default meta;

const series = Array.from({ length: 30 }, (_, i) => ({
  success: Math.round(7 + 4 * Math.sin(i * 0.5) + (i >= 26 ? (i - 25) * 2.5 : 0)),
  failed: Math.max(0, Math.round(3 + 1.5 * Math.sin(i * 0.8))),
}));

export const Logins: StoryObj = {
  render: () => (
    <div className="max-w-3xl rounded-xl border border-slate-800 bg-slate-900/60 p-5">
      <AreaChart data={series} />
    </div>
  ),
};

export const Methods: StoryObj = {
  render: () => (
    <div className="max-w-md rounded-xl border border-slate-800 bg-slate-900/60 p-5">
      <BarChart data={[{ label: "email_password", value: 182 }, { label: "otp", value: 54 }, { label: "oauth_google", value: 25 }]} />
    </div>
  ),
};

export const SuccessRate: StoryObj = {
  render: () => (
    <div className="max-w-md rounded-xl border border-slate-800 bg-slate-900/60 p-5">
      <Gauge success={261} failed={80} />
    </div>
  ),
};
