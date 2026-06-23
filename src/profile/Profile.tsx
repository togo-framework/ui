import * as React from "react";
import { Avatar } from "../primitives/Avatar";

export interface EntityHeaderProps {
  /** Text to derive the avatar initial from (or pass `avatarUrl`/`icon`). */
  title: string;
  avatarText?: string;
  avatarUrl?: string;
  icon?: React.ReactNode;
  primary?: string;
  /** A small line under the title (id, email, role…). */
  subtitle?: React.ReactNode;
  /** Badges/meta shown next to the subtitle. */
  meta?: React.ReactNode;
  /** Right-aligned action buttons. */
  actions?: React.ReactNode;
}

/** EntityHeader — the avatar-hero header shared by profile pages and record
 * detail views (user/role/platform). */
export function EntityHeader({ title, avatarText, avatarUrl, icon, primary, subtitle, meta, actions }: EntityHeaderProps) {
  return (
    <header className="mb-6 flex flex-wrap items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        <Avatar size="lg" text={avatarText ?? title} src={avatarUrl} icon={icon} primary={primary} />
        <div>
          <h1 className="text-xl font-semibold">{title}</h1>
          {(subtitle || meta) && (
            <div className="mt-0.5 flex items-center gap-2 text-xs text-slate-500">
              {meta}
              {subtitle}
            </div>
          )}
        </div>
      </div>
      {actions && <div className="flex flex-wrap items-center gap-2">{actions}</div>}
    </header>
  );
}

export interface ProfileCardProps {
  children: React.ReactNode;
}
/** ProfileCard — a titled section block for profile/detail bodies (re-exports Card semantics). */
export function ProfileSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
      <h2 className="mb-3 text-sm font-semibold">{title}</h2>
      {children}
    </section>
  );
}
