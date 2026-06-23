import * as React from "react";
import { Sidebar, Brand as BrandBlock, SidebarSection, NavItem } from "./Sidebar";
import { Topbar } from "./UserDropdown";

export interface NavItemDef {
  key: string;
  label: string;
  icon: React.ReactNode;
  active?: boolean;
}

export interface BrandInfo {
  name: string;
  subtitle?: string;
  primary?: string;
  icon?: React.ReactNode;
  logoUrl?: string;
}

export interface AdminShellProps {
  brand: BrandInfo;
  nav: NavItemDef[];
  groupLabel?: string;
  onNavigate: (key: string) => void;
  sidebarTop?: React.ReactNode;
  headerLeft?: React.ReactNode;
  headerRight?: React.ReactNode;
  children: React.ReactNode;
}

/** AdminShell — a convenience composition of the layout atoms (Sidebar + Brand +
 * SidebarSection/NavItem + Topbar). For full control, compose those atoms directly
 * instead of using this wrapper. */
export function AdminShell({ brand, nav, groupLabel = "Administration", onNavigate, sidebarTop, headerLeft, headerRight, children }: AdminShellProps) {
  const primary = brand.primary || "#7c3aed";
  return (
    <div className="tg-root flex min-h-screen bg-slate-950 text-slate-100" style={{ ["--primary" as any]: primary }}>
      <Sidebar>
        <BrandBlock name={brand.name} subtitle={brand.subtitle} icon={brand.icon} primary={primary} logoUrl={brand.logoUrl} />
        {sidebarTop}
        <SidebarSection label={groupLabel}>
          {nav.map((item) => (
            <NavItem key={item.key} icon={item.icon} label={item.label} active={item.active} primary={primary} onClick={() => onNavigate(item.key)} />
          ))}
        </SidebarSection>
      </Sidebar>

      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar left={headerLeft} right={headerRight} />
        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </div>
  );
}

// Back-compat alias for the nav item shape.
export type NavItem = NavItemDef;
