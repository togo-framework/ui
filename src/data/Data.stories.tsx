import type { Meta, StoryObj } from "@storybook/react";
import { Users, ShieldCheck, Building2 } from "lucide-react";
import { StatCard } from "./StatCard";
import { DataTable } from "./DataTable";
import { DetailGrid } from "./DetailGrid";
import { Badge } from "../primitives/Badge";

const meta: Meta = { title: "Data" };
export default meta;

export const Stats: StoryObj = {
  render: () => (
    <div className="grid max-w-2xl grid-cols-2 gap-3 lg:grid-cols-3">
      <StatCard icon={<Users className="h-4 w-4" />} label="Total Users" value={6} />
      <StatCard icon={<ShieldCheck className="h-4 w-4" />} label="Admins" value={3} />
      <StatCard icon={<Building2 className="h-4 w-4" />} label="Platforms" value={5} />
    </div>
  ),
};

const rows = [
  { id: "1", email: "admin@sentra.local", role: "admin", locked: false, created_at: "2026-06-23T05:01:17Z" },
  { id: "2", email: "ops@sentra.local", role: "security_operator", locked: true, created_at: "2026-06-23T05:01:17Z" },
];

export const Table: StoryObj = {
  render: () => (
    <div className="max-w-3xl">
      <DataTable
        rows={rows}
        onRowClick={(r) => alert(r.email)}
        columns={[
          { key: "email", label: "Email", render: (r) => <span className="font-medium">{r.email}</span> },
          { key: "role", label: "Role", render: (r) => <Badge>{r.role}</Badge> },
          { key: "locked", label: "Status", kind: "bool" },
          { key: "created_at", label: "Created", kind: "date" },
        ]}
      />
    </div>
  ),
};

export const Loading: StoryObj = {
  render: () => <div className="max-w-3xl"><DataTable rows={null} columns={[{ key: "email", label: "Email" }]} /></div>,
};

export const Detail: StoryObj = {
  render: () => (
    <div className="max-w-2xl">
      <DetailGrid fields={[
        { label: "Email", value: "admin@sentra.local" },
        { label: "Role", value: <Badge>admin</Badge> },
        { label: "Lang", value: "en" },
        { label: "Created", value: "2026-06-23 05:01:17" },
      ]} />
    </div>
  ),
};
