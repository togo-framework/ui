import * as React from "react";
import { Lock } from "lucide-react";
import { cn } from "../lib/cn";

// ── BrandPanel ────────────────────────────────────────────────────────────────
export interface BrandPanelProps {
  name: string;
  tagline?: string;
  icon?: React.ReactNode;
  primary?: string;
  footer?: React.ReactNode;
}
/** BrandPanel — the branded showcase half of the auth split-screen. */
export function BrandPanel({ name, tagline, icon, primary = "#7c3aed", footer }: BrandPanelProps) {
  return (
    <div
      className="relative hidden flex-1 flex-col items-center justify-center overflow-hidden p-12 text-white lg:flex"
      style={{ background: `linear-gradient(135deg, ${primary}, #4f46e5)` }}
    >
      <span className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/15 backdrop-blur">
        {icon}
      </span>
      <div className="mt-6 text-3xl font-bold">{name}</div>
      {tagline && <div className="mt-1 text-white/80">{tagline}</div>}
      <div className="absolute bottom-8 flex items-center gap-2 text-sm text-white/70">
        {footer ?? (<><Lock className="h-4 w-4" /> Secured & encrypted</>)}
      </div>
    </div>
  );
}

// ── AuthLayout ────────────────────────────────────────────────────────────────
export interface AuthLayoutProps {
  /** The brand showcase panel (right on LTR, left on RTL). */
  brand: BrandPanelProps;
  /** The form side (AuthCard). */
  children: React.ReactNode;
}
/** AuthLayout — the split-screen auth shell: form on one side, BrandPanel on the
 * other (the panel sits at the inline-end, so it flips under dir="rtl"). */
export function AuthLayout({ brand, children }: AuthLayoutProps) {
  return (
    <div className="tg-root flex min-h-screen bg-slate-950 text-slate-100">
      <div className="flex flex-1 items-center justify-center p-8">{children}</div>
      <BrandPanel {...brand} />
    </div>
  );
}

// ── AuthCard ──────────────────────────────────────────────────────────────────
export interface AuthCardProps {
  title: string;
  subtitle?: string;
  footer?: React.ReactNode;
  children: React.ReactNode;
}
/** AuthCard — the titled form container used on every auth screen. */
export function AuthCard({ title, subtitle, footer, children }: AuthCardProps) {
  return (
    <div className="w-full max-w-sm">
      <h1 className="text-3xl font-semibold">{title}</h1>
      {subtitle && <p className="mt-1 text-sm text-slate-400">{subtitle}</p>}
      <div className="mt-6">{children}</div>
      {footer && <div className="mt-6 text-center text-sm text-slate-500">{footer}</div>}
    </div>
  );
}

// ── AuthError ─────────────────────────────────────────────────────────────────
/** AuthError — an inline form error line (renders nothing when empty). */
export function AuthError({ children }: { children?: React.ReactNode }) {
  if (!children) return null;
  return <p className="mb-3 rounded-lg border border-red-900/50 bg-red-950/30 px-3 py-2 text-sm text-red-400">{children}</p>;
}

// ── AuthMethods ───────────────────────────────────────────────────────────────
export interface AuthMethod {
  key?: React.Key;
  label: string;
  icon?: React.ReactNode;
  onClick: () => void;
}
export interface AuthMethodsProps {
  methods: AuthMethod[];
  /** Divider label (e.g. "or"). */
  dividerLabel?: string;
  className?: string;
}
/** AuthMethods — a divider + alternative sign-in buttons (dev login, OAuth, …). */
export function AuthMethods({ methods, dividerLabel = "or", className }: AuthMethodsProps) {
  if (!methods.length) return null;
  return (
    <div className={cn("mt-4", className)}>
      <div className="my-4 flex items-center gap-3 text-xs text-slate-500">
        <span className="h-px flex-1 bg-slate-800" />{dividerLabel}<span className="h-px flex-1 bg-slate-800" />
      </div>
      <div className="space-y-2">
        {methods.map((m, i) => (
          <button key={m.key ?? i} onClick={m.onClick} className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-700 px-3 py-2 text-sm text-slate-200 transition hover:bg-white/5">
            {m.icon}{m.label}
          </button>
        ))}
      </div>
    </div>
  );
}
