import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { BarChart2, Users, ShieldCheck, Fingerprint, User as UserIcon, LogOut } from "lucide-react";
import { Sidebar, Brand, SidebarSection, NavItem } from "./Sidebar";
import { UserDropdown, UserDropdownItem } from "./UserDropdown";
import { Avatar } from "../primitives/Avatar";
import { EntityHeader, ProfileSection } from "../profile/Profile";
import { Button } from "../primitives/Button";
import { Badge } from "../primitives/Badge";

const meta: Meta = { title: "Layout/Atoms" };
export default meta;

export const SidebarAtom: StoryObj = {
  render: () => (
    <div className="h-[420px]">
      <Sidebar className="flex">
        <Brand name="Fort" subtitle="Auth Gateway" icon={<Fingerprint className="h-5 w-5" />} />
        <SidebarSection label="Administration">
          <NavItem icon={<BarChart2 className="h-4 w-4" />} label="Dashboard" active />
          <NavItem icon={<Users className="h-4 w-4" />} label="Users" />
          <NavItem icon={<ShieldCheck className="h-4 w-4" />} label="Roles" />
        </SidebarSection>
      </Sidebar>
    </div>
  ),
};

export const Avatars: StoryObj = {
  render: () => (
    <div className="flex items-center gap-3">
      <Avatar size="sm" text="Admin" />
      <Avatar size="md" text="Fort" icon={<Fingerprint className="h-4 w-4" />} />
      <Avatar size="lg" text="Layla" />
    </div>
  ),
};

export const UserDropdownAtom: StoryObj = {
  render: () => (
    <div className="flex justify-end">
      <UserDropdown email="admin@sentra.local">
        <UserDropdownItem icon={<UserIcon className="h-4 w-4" />} label="Profile" onClick={() => {}} />
        <UserDropdownItem icon={<LogOut className="h-4 w-4" />} label="Sign out" danger onClick={() => {}} />
      </UserDropdown>
    </div>
  ),
};

export const Profile: StoryObj = {
  render: () => (
    <div className="max-w-2xl">
      <EntityHeader
        title="admin@sentra.local"
        subtitle={<span className="text-emerald-400">Active</span>}
        meta={<Badge>admin</Badge>}
        actions={<><Button size="sm" variant="secondary">Edit</Button><Button size="sm" variant="danger">Delete</Button></>}
      />
      <ProfileSection title="Login Methods"><p className="text-sm text-slate-400">Toggles go here.</p></ProfileSection>
    </div>
  ),
};
