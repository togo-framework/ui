import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import {
  BarChart2, Users, ShieldCheck, Layers, Key, Layout as LayoutIcon, Settings,
  Building2, Database, FileText, ScrollText, Zap, Network, Download, Fingerprint,
  User as UserIcon, LogOut,
} from "lucide-react";
import { AdminShell, NavItem } from "./AdminShell";
import { RealtimeDot, LangToggle, UserMenu, PlatformSwitcher, PageHeader } from "./Bits";
import { StatCard } from "../data/StatCard";
import { Button } from "../primitives/Button";

const meta: Meta = { title: "Layout/AdminShell", parameters: { layout: "fullscreen" } };
export default meta;

const NAV: Omit<NavItem, "active">[] = [
  { key: "dashboard", label: "Dashboard", icon: <BarChart2 className="h-4 w-4" /> },
  { key: "users", label: "Users", icon: <Users className="h-4 w-4" /> },
  { key: "roles", label: "Roles", icon: <ShieldCheck className="h-4 w-4" /> },
  { key: "plugins", label: "Plugins", icon: <Layers className="h-4 w-4" /> },
  { key: "access", label: "Access", icon: <Key className="h-4 w-4" /> },
  { key: "branding", label: "Branding", icon: <LayoutIcon className="h-4 w-4" /> },
  { key: "settings", label: "Settings", icon: <Settings className="h-4 w-4" /> },
  { key: "platforms", label: "Platforms", icon: <Building2 className="h-4 w-4" /> },
  { key: "media", label: "Media", icon: <Database className="h-4 w-4" /> },
  { key: "audit", label: "Audit Log", icon: <FileText className="h-4 w-4" /> },
  { key: "logs", label: "Logs", icon: <ScrollText className="h-4 w-4" /> },
  { key: "nats", label: "NATS", icon: <Zap className="h-4 w-4" /> },
  { key: "mcp", label: "MCP Connect", icon: <Network className="h-4 w-4" /> },
  { key: "sdks", label: "SDKs", icon: <Download className="h-4 w-4" /> },
];

export const FortDashboard: StoryObj = {
  render: () => {
    const [active, setActive] = React.useState("dashboard");
    return (
      <AdminShell
        brand={{ name: "Fort", subtitle: "Auth & Identity Gateway", primary: "#7c3aed", icon: <Fingerprint className="h-5 w-5" /> }}
        nav={NAV.map((n) => ({ ...n, active: n.key === active }))}
        onNavigate={setActive}
        sidebarTop={<PlatformSwitcher current="Fort" options={[{ id: "1", name: "Fort" }, { id: "2", name: "Scout" }]} onSelect={() => {}} />}
        headerLeft={<RealtimeDot connected label="Realtime connected" />}
        headerRight={
          <>
            <LangToggle label="عربي" onToggle={() => {}} />
            <UserMenu email="admin@sentra.local" items={[{ label: "Profile", icon: <UserIcon className="h-4 w-4" />, onClick: () => {} }, { label: "Sign out", icon: <LogOut className="h-4 w-4" />, onClick: () => {}, danger: true }]} />
          </>
        }
      >
        <div className="mx-auto max-w-6xl p-8">
          <PageHeader title="Dashboard" subtitle="Platform overview & login analytics" actions={<Button size="sm">Refresh</Button>} />
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            <StatCard icon={<Building2 className="h-4 w-4" />} label="Platforms" value={5} />
            <StatCard icon={<ShieldCheck className="h-4 w-4" />} label="Admins" value={3} />
            <StatCard icon={<Users className="h-4 w-4" />} label="Total Users" value={6} />
            <StatCard icon={<Key className="h-4 w-4" />} label="Roles" value={16} />
          </div>
        </div>
      </AdminShell>
    );
  },
};
