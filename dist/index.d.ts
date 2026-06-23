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

interface NavItem {
    key: string;
    label: string;
    icon: React.ReactNode;
    active?: boolean;
}
interface Brand {
    name: string;
    subtitle?: string;
    primary?: string;
    icon?: React.ReactNode;
}
interface AdminShellProps {
    brand: Brand;
    nav: NavItem[];
    groupLabel?: string;
    onNavigate: (key: string) => void;
    /** Slot below the brand (e.g. a PlatformSwitcher). */
    sidebarTop?: React.ReactNode;
    /** Left side of the top bar (e.g. a RealtimeDot). */
    headerLeft?: React.ReactNode;
    /** Right side of the top bar (e.g. LangToggle + UserMenu). */
    headerRight?: React.ReactNode;
    children: React.ReactNode;
}
/** AdminShell — the prism-style admin layout: a fixed sidebar (RTL-aware: it sits
 * at the inline-start, so it flips to the right under dir="rtl") + a top bar + main
 * content. Fully presentational — pass nav items, brand, and slots. */
declare function AdminShell({ brand, nav, groupLabel, onNavigate, sidebarTop, headerLeft, headerRight, children }: AdminShellProps): React.JSX.Element;

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
interface UserMenuItem {
    label: string;
    icon?: React.ReactNode;
    onClick: () => void;
    danger?: boolean;
}
interface UserMenuProps {
    email: string;
    items: UserMenuItem[];
    primary?: string;
}
/** UserMenu — an avatar + email button with a dropdown of actions. */
declare function UserMenu({ email, items, primary }: UserMenuProps): React.JSX.Element;
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

declare function cn(...inputs: ClassValue[]): string;

export { AdminShell, type AdminShellProps, AreaChart, type AreaChartProps, Badge, type BadgeProps, type BadgeTone, BarChart, type BarChartProps, type BarDatum, type Brand, Button, type ButtonProps, type ButtonSize, type ButtonVariant, Card, type CardProps, CardTitle, type CellKind, Checkbox, type CheckboxProps, type Column, DataTable, type DataTableProps, type DetailField, DetailGrid, type DetailGridProps, Field, type FieldProps, Gauge, type GaugeProps, Input, type InputProps, LangToggle, type LangToggleProps, Modal, type ModalProps, type NavItem, PageHeader, type PageHeaderProps, type PlatformOption, PlatformSwitcher, type PlatformSwitcherProps, RealtimeDot, type RealtimeDotProps, SearchInput, type SearchInputProps, Select, type SelectProps, type SeriesPoint, StatCard, type StatCardProps, StatusPill, type StatusPillProps, Switch, type SwitchProps, Toast, UserMenu, type UserMenuItem, type UserMenuProps, cn, inputCls };
