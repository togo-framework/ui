import * as React from 'react';
import { ClassValue } from 'clsx';

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
type ButtonSize = "sm" | "md";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    /** Optional leading icon (e.g. a lucide-react icon element). */
    icon?: React.ReactNode;
}
/** Button — the kit's primary action control (4 variants, 2 sizes). */
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

type BadgeTone = "violet" | "emerald" | "red" | "slate" | "amber";
interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    tone?: BadgeTone;
}
/** Badge — a small rounded tag for roles, types, statuses. */
declare function Badge({ tone, className, children, ...props }: BadgeProps): React.JSX.Element;

interface StatusPillProps {
    /** When true → emerald "on" styling; false → muted/red. */
    active: boolean;
    label: string;
    /** Use red instead of muted-grey for the inactive state (e.g. "locked"). */
    danger?: boolean;
    className?: string;
}
/** StatusPill — a dotted pill for binary states (active/locked, enabled/disabled). */
declare function StatusPill({ active, label, danger, className }: StatusPillProps): React.JSX.Element;

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Adds default inner padding. */
    padded?: boolean;
}
/** Card — the kit's standard bordered dark surface. */
declare function Card({ padded, className, children, ...props }: CardProps): React.JSX.Element;
/** CardTitle — a small section heading used inside cards. */
declare function CardTitle({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>): React.JSX.Element;

declare const inputCls = "w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-violet-500/60";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
}
/** Input — a dark text input matching the kit's form styling. */
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
interface SearchInputProps extends InputProps {
}
/** SearchInput — an Input with a leading magnifier (RTL-aware via logical props). */
declare const SearchInput: React.ForwardRefExoticComponent<SearchInputProps & React.RefAttributes<HTMLInputElement>>;

interface FieldProps {
    label: string;
    className?: string;
    children: React.ReactNode;
}
/** Field — a labeled form row (label above the control). */
declare function Field({ label, className, children }: FieldProps): React.JSX.Element;

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    options?: {
        value: string;
        label?: string;
    }[];
}
/** Select — a dark native select matching the kit's form styling. */
declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLSelectElement>>;

interface SwitchProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
    "aria-label"?: string;
}
/** Switch — an RTL-aware toggle (the knob translates with the inline direction). */
declare function Switch({ checked, onChange, disabled, ...rest }: SwitchProps): React.JSX.Element;
interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
}
/** Checkbox — a violet-accented checkbox. */
declare function Checkbox({ className, ...props }: CheckboxProps): React.JSX.Element;

type AvatarSize = "sm" | "md" | "lg";
interface AvatarProps {
    /** Text to derive the initial from (name/email), used when no `src`/`icon`. */
    text?: string;
    /** An image URL. */
    src?: string;
    /** An icon element (e.g. a brand glyph) shown instead of an initial. */
    icon?: React.ReactNode;
    size?: AvatarSize;
    /** Gradient base colour. */
    primary?: string;
    className?: string;
}
/** Avatar — a gradient initial/icon/image chip used by the brand, user menu, and
 * profile/record heroes. */
declare function Avatar({ text, src, icon, size, primary, className }: AvatarProps): React.JSX.Element;

interface ModalProps {
    open: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
    footer?: React.ReactNode;
}
/** Modal — a centered dark dialog with backdrop, Esc-to-close, and a footer slot. */
declare function Modal({ open, onClose, title, children, footer }: ModalProps): React.JSX.Element | null;

type SeriesPoint = {
    label?: string;
    success: number;
    failed: number;
};
interface AreaChartProps {
    data: SeriesPoint[];
    emptyLabel?: string;
}
/** AreaChart — smooth overlaid success/failed area+line series (dependency-free SVG). */
declare function AreaChart({ data, emptyLabel }: AreaChartProps): React.JSX.Element;
type BarDatum = {
    label: string;
    value: number;
};
interface BarChartProps {
    data: BarDatum[];
    emptyLabel?: string;
}
/** BarChart — horizontal bars (e.g. top login methods). */
declare function BarChart({ data, emptyLabel }: BarChartProps): React.JSX.Element;
interface GaugeProps {
    success: number;
    failed: number;
    successLabel?: string;
    failedLabel?: string;
}
/** Gauge — a success-rate % with a progress bar and a success/failed legend. */
declare function Gauge({ success, failed, successLabel, failedLabel }: GaugeProps): React.JSX.Element;

interface StatCardProps {
    icon: React.ReactNode;
    label: string;
    value: React.ReactNode;
    accent?: string;
}
/** StatCard — a dashboard counter tile (icon chip + label + big value). */
declare function StatCard({ icon, label, value, accent }: StatCardProps): React.JSX.Element;

type CellKind = "text" | "bool" | "date" | "bytes" | "badge" | "mono";
interface Column<T = any> {
    key: string;
    label: string;
    kind?: CellKind;
    /** Custom cell renderer; overrides `kind`. */
    render?: (row: T) => React.ReactNode;
}
interface DataTableProps<T = any> {
    columns: Column<T>[];
    rows: T[] | null;
    onRowClick?: (row: T) => void;
    getRowKey?: (row: T, index: number) => React.Key;
    emptyLabel?: string;
    loadingLabel?: string;
}
/** DataTable — a presentational, RTL-aware list table with optional clickable rows.
 * Pass `rows={null}` to show the loading state. Pure UI: data fetching lives in the app. */
declare function DataTable<T extends Record<string, any>>({ columns, rows, onRowClick, getRowKey, emptyLabel, loadingLabel, }: DataTableProps<T>): React.JSX.Element;

interface DetailField {
    label: string;
    value: React.ReactNode;
}
interface DetailGridProps {
    fields: DetailField[];
    columns?: 1 | 2;
}
/** DetailGrid — a key/value grid for record detail/profile views. */
declare function DetailGrid({ fields, columns }: DetailGridProps): React.JSX.Element;

interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
}
/** Sidebar — the fixed admin rail (RTL-aware: border-e + inline-start placement). */
declare function Sidebar({ className, children, ...props }: SidebarProps): React.JSX.Element;
interface BrandProps {
    name: string;
    subtitle?: string;
    icon?: React.ReactNode;
    primary?: string;
    logoUrl?: string;
}
/** Brand — the sidebar header (icon/logo chip + name + subtitle). */
declare function Brand({ name, subtitle, icon, primary, logoUrl }: BrandProps): React.JSX.Element;
interface SidebarSectionProps {
    label?: string;
    children: React.ReactNode;
    className?: string;
}
/** SidebarSection — a labeled group of nav items. */
declare function SidebarSection({ label, children, className }: SidebarSectionProps): React.JSX.Element;
interface NavItemProps {
    icon?: React.ReactNode;
    label: string;
    active?: boolean;
    onClick?: () => void;
    /** Accent for the active tint (defaults to the CSS --primary var). */
    primary?: string;
}
/** NavItem — a single sidebar nav entry (button-based; wire routing via onClick). */
declare function NavItem({ icon, label, active, onClick, primary }: NavItemProps): React.JSX.Element;

interface UserDropdownItemProps {
    icon?: React.ReactNode;
    label: string;
    onClick: () => void;
    danger?: boolean;
}
/** UserDropdownItem — a single entry in the user menu. */
declare function UserDropdownItem({ icon, label, onClick, danger }: UserDropdownItemProps): React.JSX.Element;
interface UserDropdownProps {
    email: string;
    primary?: string;
    avatarUrl?: string;
    /** Provide either declarative `items` or compose `<UserDropdownItem>` children. */
    items?: (UserDropdownItemProps & {
        key?: React.Key;
    })[];
    children?: React.ReactNode;
}
/** UserDropdown — avatar + email trigger with a dropdown menu. Compose items via
 * the `items` prop or `<UserDropdownItem>` children. */
declare function UserDropdown({ email, primary, avatarUrl, items, children }: UserDropdownProps): React.JSX.Element;
interface TopbarProps {
    left?: React.ReactNode;
    right?: React.ReactNode;
}
/** Topbar — the app header bar with left + right slots. */
declare function Topbar({ left, right }: TopbarProps): React.JSX.Element;

interface RealtimeDotProps {
    connected: boolean;
    label: string;
}
/** RealtimeDot — a coloured status dot + label for a live connection. */
declare function RealtimeDot({ connected, label }: RealtimeDotProps): React.JSX.Element;
interface LangToggleProps {
    label: string;
    onToggle: () => void;
}
/** LangToggle — a small language switch button (the label is the OTHER language). */
declare function LangToggle({ label, onToggle }: LangToggleProps): React.JSX.Element;
interface PlatformOption {
    id: string;
    name: string;
}
interface PlatformSwitcherProps {
    current?: string;
    options: PlatformOption[];
    onSelect: (option: PlatformOption) => void;
    placeholder?: string;
}
/** PlatformSwitcher — a sidebar dropdown to switch the active platform/tenant. */
declare function PlatformSwitcher({ current, options, onSelect, placeholder }: PlatformSwitcherProps): React.JSX.Element;
interface PageHeaderProps {
    title: string;
    count?: number;
    subtitle?: string;
    actions?: React.ReactNode;
}
/** PageHeader — a page title with an optional count chip, subtitle, and actions. */
declare function PageHeader({ title, count, subtitle, actions }: PageHeaderProps): React.JSX.Element;
/** Toast — a transient bottom-corner confirmation. Render conditionally on a message. */
declare function Toast({ message }: {
    message: string;
}): React.JSX.Element | null;

interface NavItemDef {
    key: string;
    label: string;
    icon: React.ReactNode;
    active?: boolean;
}
interface BrandInfo {
    name: string;
    subtitle?: string;
    primary?: string;
    icon?: React.ReactNode;
    logoUrl?: string;
}
interface AdminShellProps {
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
declare function AdminShell({ brand, nav, groupLabel, onNavigate, sidebarTop, headerLeft, headerRight, children }: AdminShellProps): React.JSX.Element;

interface BrandPanelProps {
    name: string;
    tagline?: string;
    icon?: React.ReactNode;
    primary?: string;
    footer?: React.ReactNode;
}
/** BrandPanel — the branded showcase half of the auth split-screen. */
declare function BrandPanel({ name, tagline, icon, primary, footer }: BrandPanelProps): React.JSX.Element;
interface AuthLayoutProps {
    /** The brand showcase panel (right on LTR, left on RTL). */
    brand: BrandPanelProps;
    /** The form side (AuthCard). */
    children: React.ReactNode;
}
/** AuthLayout — the split-screen auth shell: form on one side, BrandPanel on the
 * other (the panel sits at the inline-end, so it flips under dir="rtl"). */
declare function AuthLayout({ brand, children }: AuthLayoutProps): React.JSX.Element;
interface AuthCardProps {
    title: string;
    subtitle?: string;
    footer?: React.ReactNode;
    children: React.ReactNode;
}
/** AuthCard — the titled form container used on every auth screen. */
declare function AuthCard({ title, subtitle, footer, children }: AuthCardProps): React.JSX.Element;
/** AuthError — an inline form error line (renders nothing when empty). */
declare function AuthError({ children }: {
    children?: React.ReactNode;
}): React.JSX.Element | null;
interface AuthMethod {
    key?: React.Key;
    label: string;
    icon?: React.ReactNode;
    onClick: () => void;
}
interface AuthMethodsProps {
    methods: AuthMethod[];
    /** Divider label (e.g. "or"). */
    dividerLabel?: string;
    className?: string;
}
/** AuthMethods — a divider + alternative sign-in buttons (dev login, OAuth, …). */
declare function AuthMethods({ methods, dividerLabel, className }: AuthMethodsProps): React.JSX.Element | null;

interface EntityHeaderProps {
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
declare function EntityHeader({ title, avatarText, avatarUrl, icon, primary, subtitle, meta, actions }: EntityHeaderProps): React.JSX.Element;
/** ProfileCard — a titled section block for profile/detail bodies (re-exports Card semantics). */
declare function ProfileSection({ title, children }: {
    title: string;
    children: React.ReactNode;
}): React.JSX.Element;

declare function cn(...inputs: ClassValue[]): string;

export { AdminShell, type AdminShellProps, AreaChart, type AreaChartProps, AuthCard, type AuthCardProps, AuthError, AuthLayout, type AuthLayoutProps, type AuthMethod, AuthMethods, type AuthMethodsProps, Avatar, type AvatarProps, type AvatarSize, Badge, type BadgeProps, type BadgeTone, BarChart, type BarChartProps, type BarDatum, Brand, type BrandInfo, BrandPanel, type BrandPanelProps, type BrandProps, Button, type ButtonProps, type ButtonSize, type ButtonVariant, Card, type CardProps, CardTitle, type CellKind, Checkbox, type CheckboxProps, type Column, DataTable, type DataTableProps, type DetailField, DetailGrid, type DetailGridProps, EntityHeader, type EntityHeaderProps, Field, type FieldProps, Gauge, type GaugeProps, Input, type InputProps, LangToggle, type LangToggleProps, Modal, type ModalProps, NavItem, type NavItemDef, type NavItemProps, PageHeader, type PageHeaderProps, type PlatformOption, PlatformSwitcher, type PlatformSwitcherProps, ProfileSection, RealtimeDot, type RealtimeDotProps, SearchInput, type SearchInputProps, Select, type SelectProps, type SeriesPoint, Sidebar, type SidebarProps, SidebarSection, type SidebarSectionProps, StatCard, type StatCardProps, StatusPill, type StatusPillProps, Switch, type SwitchProps, Toast, Topbar, type TopbarProps, UserDropdown, UserDropdownItem, type UserDropdownItemProps, type UserDropdownProps, cn, inputCls };
