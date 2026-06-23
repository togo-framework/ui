import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { UserPlus, Trash2 } from "lucide-react";
import { Button } from "./Button";
import { Badge } from "./Badge";
import { StatusPill } from "./StatusPill";
import { Card, CardTitle } from "./Card";
import { Input, SearchInput } from "./Input";
import { Field } from "./Field";
import { Select } from "./Select";
import { Switch, Checkbox } from "./Switch";

const meta: Meta = { title: "Primitives" };
export default meta;

export const Buttons: StoryObj = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger" icon={<Trash2 className="h-4 w-4" />}>Delete</Button>
      <Button icon={<UserPlus className="h-4 w-4" />}>Add User</Button>
      <Button size="sm">Small</Button>
      <Button disabled>Disabled</Button>
    </div>
  ),
};

export const Badges: StoryObj = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge tone="violet">admin</Badge>
      <Badge tone="emerald">active</Badge>
      <Badge tone="red">revoked</Badge>
      <Badge tone="slate">system</Badge>
      <Badge tone="amber">draft</Badge>
    </div>
  ),
};

export const StatusPills: StoryObj = {
  render: () => (
    <div className="flex gap-3">
      <StatusPill active label="Active" />
      <StatusPill active={false} label="Locked" danger />
      <StatusPill active={false} label="Disabled" />
    </div>
  ),
};

export const Cards: StoryObj = {
  render: () => (
    <Card padded className="max-w-sm">
      <CardTitle>Login Methods</CardTitle>
      <p className="text-sm text-slate-400">A bordered dark surface used across the kit.</p>
    </Card>
  ),
};

export const Forms: StoryObj = {
  render: () => {
    const [on, setOn] = React.useState(true);
    return (
      <div className="max-w-sm space-y-3">
        <Field label="Email"><Input placeholder="user@sentra.local" /></Field>
        <Field label="Search"><SearchInput placeholder="Search…" /></Field>
        <Field label="Role"><Select options={[{ value: "viewer" }, { value: "admin" }]} /></Field>
        <div className="flex items-center gap-3">
          <Switch checked={on} onChange={setOn} /> <span className="text-sm text-slate-300">Switch</span>
          <Checkbox defaultChecked /> <span className="text-sm text-slate-300">Checkbox</span>
        </div>
      </div>
    );
  },
};
