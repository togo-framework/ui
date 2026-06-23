export { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Alert, AlertDescription, AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, AlertDialogPortal, AlertDialogTitle, AlertDialogTrigger, AlertTitle, AspectRatio, Avatar, AvatarFallback, AvatarImage, Badge, BadgeProps, Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, Button, ButtonProps, Calendar, CalendarProps, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartStyle, ChartTooltip, ChartTooltipContent, Checkbox, Collapsible, CollapsibleContent, CollapsibleTrigger, Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandInputPrimitive, CommandItem, CommandList, CommandSeparator, CommandShortcut, ContextMenu, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuGroup, ContextMenuItem, ContextMenuLabel, ContextMenuPortal, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, DirectionalArrow, Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerPortal, DrawerTitle, DrawerTrigger, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, HoverCard, HoverCardContent, HoverCardTrigger, Input, InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot, Label, LinkifyText, Menubar, MenubarCheckboxItem, MenubarContent, MenubarGroup, MenubarItem, MenubarLabel, MenubarMenu, MenubarPortal, MenubarRadioGroup, MenubarRadioItem, MenubarSeparator, MenubarShortcut, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger, NativeSelect, NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport, Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, Popover, PopoverContent, PopoverTrigger, Progress, RadioGroup, RadioGroupItem, ResizableHandle, ResizablePanel, ResizablePanelGroup, ScrollArea, ScrollBar, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, Separator, Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetOverlay, SheetPortal, SheetTitle, SheetTrigger, Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarInput, SidebarInset, SidebarMenu, SidebarMenuAction, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSkeleton, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarProvider, SidebarRail, SidebarSeparator, SidebarTrigger, Skeleton, Slider, Switch, Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow, Tabs, TabsContent, TabsList, TabsTrigger, Textarea, TextareaProps, Toaster, Toggle, ToggleGroup, ToggleGroupItem, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, badgeVariants, buttonVariants, navigationMenuTriggerStyle, toggleVariants, useFormField, useOptionalSidebar, useSidebar } from './shadcn.js';
import * as React$1 from 'react';
import React__default, { ReactNode } from 'react';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';
import { ColumnDef, SortingState, ColumnFiltersState, PaginationState } from '@tanstack/react-table';
export { ColumnDef, ColumnFiltersState, PaginationState, RowSelectionState, SortingState, VisibilityState } from '@tanstack/react-table';
import { LucideIcon } from 'lucide-react';
import { ClassValue } from 'clsx';
export { toast } from 'sonner';
export { useTranslation } from 'react-i18next';
import '@radix-ui/react-accordion';
import '@radix-ui/react-alert-dialog';
import '@radix-ui/react-aspect-ratio';
import '@radix-ui/react-avatar';
import 'react-day-picker';
import 'embla-carousel-react';
import 'recharts/types/util/payload/getUniqPayload';
import 'recharts/types/component/Tooltip';
import 'recharts/types/util/types';
import 'recharts/types/component/DefaultTooltipContent';
import 'recharts';
import '@radix-ui/react-checkbox';
import '@radix-ui/react-collapsible';
import '@radix-ui/react-dialog';
import '@radix-ui/react-context-menu';
import 'vaul';
import '@radix-ui/react-dropdown-menu';
import 'react-hook-form';
import '@radix-ui/react-label';
import '@radix-ui/react-hover-card';
import 'input-otp';
import '@radix-ui/react-context';
import '@radix-ui/react-menubar';
import '@radix-ui/react-navigation-menu';
import '@radix-ui/react-popover';
import '@radix-ui/react-progress';
import '@radix-ui/react-radio-group';
import 'react-resizable-panels';
import '@radix-ui/react-scroll-area';
import '@radix-ui/react-select';
import '@radix-ui/react-separator';
import '@radix-ui/react-tooltip';
import '@radix-ui/react-slider';
import '@radix-ui/react-switch';
import '@radix-ui/react-tabs';
import '@radix-ui/react-toggle';
import '@radix-ui/react-toggle-group';

/**
 * EmptyState — a centered "no data" placeholder for tables / lists / panels.
 *
 * Pure + product-agnostic (Rule 25): takes a pre-resolved `title`/`description`
 * (the consumer picks EN/AR via its `language`) and an optional `icon` + action
 * slot. Semantic tokens only; RTL-clean (logical centering).
 */
type EmptyStateProps = {
    /** Pre-resolved title string (consumer selects EN/AR). */
    title: string;
    /** Optional pre-resolved supporting line. */
    description?: string;
    /** Optional leading icon (e.g. a lucide-react element). */
    icon?: React$1.ReactNode;
    /** Optional action slot (button / link) rendered below the text. */
    action?: React$1.ReactNode;
    className?: string;
};
declare const EmptyState: {
    ({ title, description, icon, action, className }: EmptyStateProps): React$1.JSX.Element;
    displayName: string;
};

/**
 * ServiceUnavailable — the graceful "this service/backend dependency is not
 * connected" card. Rendered when an API returns 503 (a DB / NATS / Fort the
 * page depends on is down or unconfigured).
 *
 * This is an EXPECTED state, not an error — styled calm (amber-tinted, not
 * destructive). Pure + product-agnostic: pre-resolved strings in, optional
 * `hint` (e.g. which env var to set) and an action slot.
 */
type ServiceUnavailableProps = {
    /** Pre-resolved headline, e.g. "Service not connected". */
    title: string;
    /** Pre-resolved explanation line. */
    description?: string;
    /** Optional secondary hint (e.g. a config key) rendered muted/mono. */
    hint?: React$1.ReactNode;
    /** Optional leading icon. */
    icon?: React$1.ReactNode;
    /** Optional action slot (e.g. a retry / docs button). */
    action?: React$1.ReactNode;
    className?: string;
};
declare const ServiceUnavailable: {
    ({ title, description, hint, icon, action, className, }: ServiceUnavailableProps): React$1.JSX.Element;
    displayName: string;
};

/**
 * SessionExpired — the graceful "your session expired, sign in again" card,
 * rendered when an API returns 401. Product-agnostic: the consumer passes a
 * pre-resolved title/description/CTA label and a `loginHref` (the library does
 * not import next/link — it renders a plain anchor so it works in any app).
 */
type SessionExpiredProps = {
    /** Pre-resolved headline, e.g. "Session expired". */
    title: string;
    /** Pre-resolved explanation line. */
    description?: string;
    /** Pre-resolved CTA label, e.g. "Sign in again". */
    ctaLabel: string;
    /** Where the CTA links (defaults to "/login"). */
    loginHref?: string;
    /** Optional leading icon. */
    icon?: React$1.ReactNode;
    className?: string;
};
declare const SessionExpired: {
    ({ title, description, ctaLabel, loginHref, icon, className, }: SessionExpiredProps): React$1.JSX.Element;
    displayName: string;
};

/**
 * PageHeader — the standard page title row for admin/ops dashboard pages: an
 * optional leading icon, a title, an optional description line, and an optional
 * trailing `actions` slot (filters, buttons). RTL-clean (logical gap/justify).
 *
 * Pure + product-agnostic: pre-resolved `title`/`description` strings in.
 */
type PageHeaderProps = {
    /** Pre-resolved page title (consumer selects EN/AR). */
    title: string;
    /** Optional pre-resolved subtitle. */
    description?: string;
    /** Optional leading icon (sized to ~1.25rem). */
    icon?: React$1.ReactNode;
    /** Optional trailing actions (filters, buttons) — placed at the inline end. */
    actions?: React$1.ReactNode;
    className?: string;
};
declare const PageHeader: {
    ({ title, description, icon, actions, className }: PageHeaderProps): React$1.JSX.Element;
    displayName: string;
};

/**
 * StatCard — a compact metric tile (label + big value) for dashboard summary
 * strips. `tone` colors the value via semantic tokens (no hex literals).
 *
 * Pure + product-agnostic: pre-resolved `label` string + a value node in.
 */
declare const statValueVariants: (props?: ({
    tone?: "default" | "muted" | "success" | "warning" | "danger" | "info" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type StatCardProps = VariantProps<typeof statValueVariants> & {
    /** Pre-resolved metric label (consumer selects EN/AR). */
    label: string;
    /** The metric value — string or number. */
    value: React$1.ReactNode;
    className?: string;
};
declare const StatCard: {
    ({ label, value, tone, className }: StatCardProps): React$1.JSX.Element;
    displayName: string;
};

/**
 * StatusBadge — a small tinted status pill driven by semantic tokens instead of
 * hardcoded `bg-emerald-500/15` color literals. Use for health / level / state
 * (running, ok, down, error, warn, info, …). Pure + product-agnostic.
 *
 * The consumer maps its domain status → a `tone` and passes a pre-resolved
 * label (EN/AR). This keeps colors centralised and RTL-/theme-safe.
 */
declare const statusBadgeVariants: (props?: ({
    tone?: "success" | "warning" | "danger" | "info" | "neutral" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type StatusBadgeTone = NonNullable<VariantProps<typeof statusBadgeVariants>["tone"]>;
type StatusBadgeProps = VariantProps<typeof statusBadgeVariants> & {
    /** Pre-resolved label (consumer selects EN/AR). */
    children: React$1.ReactNode;
    className?: string;
};
declare const StatusBadge: {
    ({ tone, children, className }: StatusBadgeProps): React$1.JSX.Element;
    displayName: string;
};

/**
 * DataState — the single wrapper that guarantees a data page renders ONE of the
 * canonical states and NEVER a raw error string. Precedence:
 *
 *   loading → unauthorized (401) → unavailable (503) → error → empty → children
 *
 * Pure + product-agnostic (Rule 25): the consumer passes booleans + pre-resolved
 * EN/AR label bundles. The library never fetches and never reads a language
 * context — it just renders the resolved strings.
 */
type DataStateLabels = {
    /** Unauthorized (401) card. */
    sessionExpiredTitle: string;
    sessionExpiredDescription?: string;
    signInLabel: string;
    loginHref?: string;
    /** Unavailable (503) card. */
    unavailableTitle: string;
    unavailableDescription?: string;
    unavailableHint?: React$1.ReactNode;
    /** Generic error card. */
    errorTitle: string;
    /** Empty card. */
    emptyTitle: string;
    emptyDescription?: string;
};
type DataStateProps = {
    loading?: boolean;
    unauthorized?: boolean;
    unavailable?: boolean;
    /** Pre-resolved error detail (e.g. "HTTP 500"); shown under errorTitle. */
    error?: string | null;
    /** True when the request succeeded but returned no rows. */
    empty?: boolean;
    labels: DataStateLabels;
    /** Optional icon reused across empty/unavailable/session cards. */
    icon?: React$1.ReactNode;
    /** Optional action slot for the empty state (e.g. a "Create" button). */
    emptyAction?: React$1.ReactNode;
    /** Skeleton rendered while `loading`. Defaults to three bars. */
    loadingFallback?: React$1.ReactNode;
    /** The populated content, rendered only when no special state applies. */
    children?: React$1.ReactNode;
};
declare const DataState: {
    ({ loading, unauthorized, unavailable, error, empty, labels, icon, emptyAction, loadingFallback, children, }: DataStateProps): React$1.JSX.Element;
    displayName: string;
};

/**
 * DataTable types — shared type definitions for the DataTable component.
 *
 * Design system rules:
 *   - Rule 8  — bilingual (EN/AR): column headers carry header_en/header_ar or renderHeader
 *   - Rule 16 — Sentra app style: semantic tokens only, logical CSS props
 *   - Rule 25 — product-agnostic: NO data fetching, NO context reads
 */

type DataTableLanguage = 'en' | 'ar';
type DataTableDensity = 'compact' | 'comfortable';
type DataTableFilterType = 'text' | 'select' | 'date-range' | 'number-range';
interface DataTableSelectOption {
    label_en: string;
    label_ar?: string;
    value: string;
}
interface DataTableColumnFilter<TData = unknown> {
    /** Column accessor key — must match the column `id` / `accessorKey` */
    columnId: string;
    type: DataTableFilterType;
    /** For select filters: the list of options */
    options?: DataTableSelectOption[];
    /** Placeholder shown in text input */
    placeholder_en?: string;
    placeholder_ar?: string;
}
interface DataTableColumnMeta {
    /** English column header — takes precedence over `header` string if present */
    header_en?: string;
    /** Arabic column header */
    header_ar?: string;
    /** Whether this column can be resized */
    resizable?: boolean;
    /** Whether this column can be pinned */
    pinnable?: boolean;
}
interface DataTableServerState {
    sorting: SortingState;
    columnFilters: ColumnFiltersState;
    pagination: PaginationState;
    globalFilter: string;
}
interface DataTableServerCallbacks {
    onStateChange: (state: DataTableServerState) => void;
}
interface DataTableBulkAction {
    id: string;
    label_en: string;
    label_ar?: string;
    icon?: React.ReactNode;
    variant?: 'default' | 'destructive' | 'outline';
    onAction: (selectedRowIds: string[]) => void;
}
interface DataTableProps<TData> {
    data: TData[];
    columns: ColumnDef<TData, unknown>[];
    /**
     * A function that returns a unique string key for each row.
     * Required for row selection and stable React keys.
     */
    getRowId?: (row: TData) => string;
    language?: DataTableLanguage;
    filterDefs?: DataTableColumnFilter<TData>[];
    /** Show the global search box above the table */
    showGlobalSearch?: boolean;
    /**
     * Client-side mode (default): DataTable manages pagination state internally.
     * Server-side mode: pass `totalRows` + `serverCallbacks` — state is lifted.
     */
    pageSize?: number;
    pageSizeOptions?: number[];
    totalRows?: number;
    /**
     * When provided, DataTable enters controlled server-side mode.
     * The component fires `onStateChange` on every sort/filter/page change.
     * Products NEVER fetch inside DataTable — they do it from their own bridge.
     */
    serverCallbacks?: DataTableServerCallbacks;
    loading?: boolean;
    error?: string | null;
    onRowClick?: (row: TData) => void;
    enableRowSelection?: boolean;
    bulkActions?: DataTableBulkAction[];
    /**
     * Slot: if provided, renders below the clicked row as an expand panel.
     * Receives the row data.
     */
    renderExpandedRow?: (row: TData) => React.ReactNode;
    enableColumnVisibility?: boolean;
    enableColumnPinning?: boolean;
    enableColumnResizing?: boolean;
    enableSorting?: boolean;
    enableMultiSort?: boolean;
    showDensityToggle?: boolean;
    defaultDensity?: DataTableDensity;
    showCsvExport?: boolean;
    csvFilename?: string;
    className?: string;
    /** Sticky header (default: true) */
    stickyHeader?: boolean;
}

/**
 * DataTable — flagship grid component for the Sentra Design System.
 *
 * Built on @tanstack/react-table over the existing shadcn/ui Table primitive.
 *
 * Features:
 *   - Multi-column sorting (keyboard-navigable aria-sort headers)
 *   - Per-column filters: text / select / date-range / number-range
 *   - Global search box
 *   - Column visibility toggle
 *   - Column pinning (start/end)
 *   - Client-side pagination + controlled server-side mode
 *   - Row selection (checkbox) + bulk-action slot
 *   - Row click handler + expandable row slot
 *   - Density toggle (compact / comfortable)
 *   - Sticky header
 *   - Loading skeleton (SectionSkeleton)
 *   - Empty + error states
 *   - CSV export of current view (client-side)
 *   - Full RTL (logical props, dir-aware sort icons)
 *   - Bilingual: all chrome strings translated EN/AR internally via `language` prop
 *   - WCAG 2.1 AA: visible focus rings, aria-sort, aria-label on all controls
 *
 * Design rules:
 *   - Rule 8  — bilingual (EN/AR), RTL logical properties
 *   - Rule 16 — Sentra app style: semantic tokens only
 *   - Rule 25 — product-agnostic: NEVER fetches; data arrives entirely via props
 */

declare function DataTable<TData>({ data, columns, getRowId, language, filterDefs, showGlobalSearch, pageSize: initialPageSize, pageSizeOptions, totalRows, serverCallbacks, loading, error, onRowClick, enableRowSelection, bulkActions, renderExpandedRow, enableColumnVisibility, enableColumnPinning, enableColumnResizing, enableSorting, enableMultiSort, showDensityToggle, defaultDensity, showCsvExport, csvFilename, className, stickyHeader, }: DataTableProps<TData>): React$1.JSX.Element;
declare namespace DataTable {
    var displayName: string;
}

type CardFilter<T> = {
    /** Stable id for the dropdown. */
    key: string;
    /** Localised label, e.g. "Product". */
    label: string;
    /** Value extractor for an item (compared exactly to the selected option). */
    value: (item: T) => string;
    /** Options; the "all" choice is injected automatically. */
    options: {
        value: string;
        label: string;
    }[];
};
type CardGridLabels = {
    searchPlaceholder: string;
    all: string;
    emptyTitle: string;
    emptyDescription: string;
    countLabel: (shown: number, total: number) => string;
};
type CardGridProps<T> = {
    items: T[];
    getKey: (item: T, index: number) => string;
    renderCard: (item: T) => React.ReactNode;
    /** Concatenated searchable text for an item (lower-cased match). */
    searchText: (item: T) => string;
    filters?: CardFilter<T>[];
    labels: CardGridLabels;
    emptyIcon?: React.ReactNode;
    /** Tailwind grid column classes; sensible default if omitted. */
    gridClassName?: string;
};
declare function CardGrid<T>({ items, getKey, renderCard, searchText, filters, labels, emptyIcon, gridClassName, }: CardGridProps<T>): React$1.JSX.Element;
declare namespace CardGrid {
    var displayName: string;
}

/**
 * MiniBarChart — a dependency-free SVG/flex bar chart.
 *
 * Recharts (via ChartContainer) is overkill for a small sparkline-style chart,
 * so this renders a clean, responsive, semantic-token-styled bar chart from
 * plain data, RTL-safe (flips with `dir`), with an accessible title.
 * Promoted into @prism/ui from motor-web (product-agnostic).
 */
type BarPoint = {
    label: string;
    value: number;
    sublabel?: string;
};
declare const MiniBarChart: {
    ({ data, height, valueFormatter, }: {
        data: BarPoint[];
        height?: number;
        valueFormatter?: (n: number) => string;
    }): React$1.JSX.Element;
    displayName: string;
};

/**
 * AuthClient — the transport seam that all auth form components call.
 *
 * Fort's web layer passes a concrete implementation backed by Fort's
 * /v1/auth/* API endpoints + the Fort SDK.  The forms themselves own NO
 * transport logic — they only call methods on this interface.
 *
 * Design constraints:
 * - Every method returns a plain discriminated result so forms can branch on
 *   `challenge` without importing any SDK types.
 * - All methods throw on network / server errors (forms catch and surface the
 *   message via AuthErrorAlert).
 * - The interface is intentionally narrow — only what the auth flow screens need.
 *
 * ─── Integration contract for Fort's web (F1) ────────────────────────────────
 *
 *   import type { AuthClient } from '@prism/ui'
 *   import { fortAuthClient } from './fort-auth-client'  // Fort's concrete impl
 *
 *   <AuthFlow authClient={fortAuthClient} onSuccess={() => router.push('/dashboard')} />
 *
 * ─────────────────────────────────────────────────────────────────────────────
 */
type LoginResult = {
    challenge: 'otp';
    challenge_token?: string;
} | {
    challenge: '2fa';
    challenge_token?: string;
} | {
    challenge: 'none';
};
type OtpResult = {
    challenge: '2fa';
    challenge_token?: string;
} | {
    challenge: 'none';
};
type Verify2FAResult = {
    challenge: 'none';
};
interface AuthClient {
    /**
     * Sign in with email + password.
     *
     * Returns the next challenge the server requires:
     *   - `otp`  — email OTP sent; call `verifyOtp` next.
     *   - `2fa`  — TOTP required; call `verify2FA` next with the challenge_token.
     *   - `none` — session established; call `onSuccess`.
     *
     * Throws on bad credentials, locked account, or network error.
     * The error object may carry a `status` number (HTTP status) and a `message`.
     *
     * @param rememberMe - When `true`, the server should issue a long-lived
     *   persistent session cookie whose lifetime is determined by the server's
     *   `session.remember_me_duration` setting.  When `false` or omitted, the
     *   server issues a session-scoped cookie that expires on browser close.
     *   This parameter is optional so existing concrete implementations that
     *   ignore it continue to satisfy the interface without modification.
     */
    login(email: string, password: string, rememberMe?: boolean): Promise<LoginResult>;
    /**
     * Send (or resend) a one-time password to the given email.
     * Used for both magic-link flows and the OTP step after credentials.
     * Throws on network error.
     */
    sendOtp(email: string): Promise<void>;
    /**
     * Verify a 6-digit OTP code.
     *
     * `challenge_token` is the opaque token returned by `login()` — pass it
     * back verbatim so the server can correlate the session.
     *
     * Returns the next challenge:
     *   - `2fa`  — TOTP still required.
     *   - `none` — session established; call `onSuccess`.
     *
     * Throws on bad/expired code or too many attempts.
     */
    verifyOtp(email: string, code: string, challengeToken?: string): Promise<OtpResult>;
    /**
     * Request a password-reset email.
     * The server always responds the same way regardless of whether the account
     * exists (no enumeration).  Throws only on network errors.
     */
    forgotPassword(email: string): Promise<void>;
    /**
     * Set a new password using the reset token extracted from the magic link URL.
     * Throws with status 401/400 when the token is invalid or expired.
     */
    resetPassword(token: string, newPassword: string): Promise<void>;
    /**
     * Verify a TOTP or recovery code for the 2FA challenge step.
     * The challenge_token should be stored in memory (e.g. component state) after
     * login returns `challenge: '2fa'`.
     *
     * Throws on bad code, already-used recovery code, or too many attempts.
     */
    verify2FA(code: string, challengeToken?: string): Promise<Verify2FAResult>;
    /**
     * (Optional) Return the OAuth redirect URL for the given provider.
     * Used by the "Sign in with Google" button.  Return `undefined` / `null` to
     * hide the button.
     */
    getOAuthUrl?(provider: 'google' | string): string | null | undefined;
    /**
     * (Optional) Look up which login methods are allowed for a given email.
     *
     * The email-first flow calls this after the user clicks "Continue" on Step A.
     * The returned `methods` array drives which credential options are rendered:
     *
     *   'email_password' — reveal the password field + Sign in button
     *   'magic_link'     — show "Send magic link" button (calls sendOtp / sendLoginOtp)
     *   'otp'            — show "Email me a code" button (calls sendLoginOtp / sendOtp)
     *   'google_oauth'   — show Google sign-in button
     *   'github'         — show GitHub sign-in button
     *   'azure'          — show Microsoft/Azure sign-in button
     *
     * Fail-open: if this method is undefined OR throws, the form falls back to
     * showing the password field (email_password) so login always works.
     *
     * Return `undefined` to skip role-gating (all methods shown by default).
     */
    getLoginMethods?(email: string): Promise<{
        methods: string[];
    } | undefined>;
    /**
     * (Optional) Send a passwordless login OTP / magic-link code to the given email.
     *
     * Used by the email-first flow when the user selects "Email me a code" (otp
     * method) or "Send magic link" (magic_link method) on the methods step.
     *
     * When absent, the form falls back to `sendOtp(email)` which already exists
     * on all concrete implementations, so back-compat is preserved — callers that
     * have not yet added this method continue to satisfy the interface.
     *
     * The distinction from `sendOtp` is semantic: `sendLoginOtp` is the initial
     * unauthenticated OTP dispatch triggered by the user choosing a passwordless
     * path; `sendOtp` is the resend call on the OTP verification screen.
     * Implementations may delegate one to the other.
     */
    sendLoginOtp?(email: string): Promise<void>;
    /**
     * (Optional) One-click developer login.
     *
     * Present only when APP_ENV=development AND the platform has providers.dev=true.
     * The server mints a session for admin@sentra.local without requiring credentials.
     *
     * When this method is defined on the client, LoginForm renders a prominent
     * "Continue as dev" button ABOVE the email form with a divider. It is rendered
     * ONLY when this method is present — concrete implementations in non-dev
     * environments must omit it entirely.
     *
     * Throws on server error (server always 404s in production — rule 14 hard gate).
     */
    devLogin?(): Promise<void>;
}

type AuthLayout = 'split' | 'split-reverse' | 'centered' | 'minimal';
interface AuthCardBrand {
    /**
     * Optional logo image URL — the preferred brand mark. When provided it
     * replaces the default icon crest.
     */
    logoUrl?: string;
    /**
     * Optional icon element (e.g. a lucide icon) shown in the crest when no
     * `logoUrl` is given. Defaults to a ShieldCheck mark. Pass `null` to fall
     * back to the text `initial`.
     */
    icon?: React$1.ReactNode | null;
    /** Text initial — only used when `icon` is explicitly `null` and no logoUrl. */
    initial?: string;
    /**
     * Product name shown in the panel and mobile header. Default: 'Sentra Insight Hub'.
     * Pass a `{ en, ar }` pair to localize the title per language (operator
     * 2026-06-05: the AR title wasn't switching). A bare string is used as-is.
     */
    name?: string | {
        en: string;
        ar: string;
    };
    /** Tagline shown under the name. Provide both locales. */
    tagline?: {
        en: string;
        ar: string;
    };
    /** Feature bullets shown in the brand panel. Provide both locales for each. */
    bullets?: Array<{
        en: string;
        ar: string;
    }>;
    /** Footer note in the brand panel. Default: lock icon + 'Secure & Encrypted'. */
    secureNote?: {
        en: string;
        ar: string;
    };
}
interface AuthCardProps {
    children: React$1.ReactNode;
    /** Current display language. Default: 'en'. */
    language?: 'en' | 'ar';
    /**
     * Layout variant. Default: 'split'.
     *  - split          brand panel on the leading side (start), form trailing.
     *  - split-reverse  brand panel on the trailing side (end), form leading.
     *  - centered       no brand panel; a single centered card with a compact
     *                   brand header above it. Good for minimal Fort tenants.
     *  - minimal        like centered but without the card chrome (bare form,
     *                   only the brand crest + name). Smallest footprint.
     */
    layout?: AuthLayout;
    /**
     * Called when the user clicks the language toggle button.
     * If omitted the toggle is hidden.
     */
    onLanguageToggle?: () => void;
    /** Brand customisation. Defaults to Sentra copy if omitted. */
    brand?: AuthCardBrand;
    /** Optional extra class on the outer wrapper. */
    className?: string;
}
declare const AuthCard: {
    ({ children, language, layout, onLanguageToggle, brand: brandProp, className, }: AuthCardProps): React$1.JSX.Element;
    displayName: string;
};

interface AuthFlowProps {
    /** Transport seam — Fort's web passes its concrete implementation. */
    authClient: AuthClient;
    /**
     * Reset token from URL query param.
     * When provided, flow starts at the 'reset' step directly.
     */
    resetToken?: string;
    /** Called after the user is fully authenticated. */
    onSuccess?: () => void;
    /**
     * Display language. Default: 'en'.
     * Toggling is handled internally unless you pass `onLanguageToggle`.
     */
    language?: 'en' | 'ar';
    /**
     * Override the language toggle handler.
     * If omitted, AuthFlow toggles internally between 'en' and 'ar'.
     * If `null`, the toggle button is hidden.
     */
    onLanguageToggle?: (() => void) | null;
    /** Brand customisation forwarded to AuthCard. */
    brand?: AuthCardBrand;
    /**
     * AuthCard layout variant forwarded to AuthCard.
     * 'split' | 'split-reverse' | 'centered' | 'minimal'. Default: 'split'.
     * Lets Fort pick a brand-panel layout (or a panel-less centered card).
     */
    layout?: AuthLayout;
    /** If true, wraps the flow in an AuthCard (brand panel + card). Default: true. */
    withCard?: boolean;
    /**
     * Whether to show the "Remember me" checkbox on the login step.
     *
     * Forwarded directly to `LoginForm`.  Set to `false` when the server's
     * `session.remember_me_enabled` setting is disabled so the checkbox is
     * hidden and `login` is always called with `rememberMe = false`.
     *
     * Default: `true`.
     */
    showRememberMe?: boolean;
    /**
     * @deprecated — Email-first is now the default and only flow.
     * This prop is accepted but ignored; kept for back-compat so existing
     * callers that pass `emailFirst={true}` continue to compile.
     */
    emailFirst?: boolean;
}
declare const AuthFlow: {
    ({ authClient, resetToken, onSuccess, language: languageProp, onLanguageToggle, brand, layout, withCard, showRememberMe, emailFirst: _emailFirst, }: AuthFlowProps): React$1.JSX.Element;
    displayName: string;
};

interface LoginFormProps {
    authClient: AuthClient;
    onSuccess?: () => void;
    on2FA?: (challengeToken?: string) => void;
    onOAuthRedirect?: (url: string) => void;
    onForgotPassword?: () => void;
    language?: 'en' | 'ar';
    showRememberMe?: boolean;
}
declare const LoginForm: {
    ({ authClient, onSuccess, on2FA, onOAuthRedirect, onForgotPassword, language, showRememberMe, }: LoginFormProps): React$1.JSX.Element;
    displayName: string;
};

interface ForgotFormProps {
    /** Transport seam. */
    authClient: AuthClient;
    /** Called when the user clicks "Back to sign in". Fort's router handles navigation. */
    onBack?: () => void;
    /** Display language. Default: 'en'. */
    language?: 'en' | 'ar';
}
declare const ForgotForm: {
    ({ authClient, onBack, language }: ForgotFormProps): React$1.JSX.Element;
    displayName: string;
};

interface ResetFormProps {
    /** Reset token extracted from the magic link URL query param. */
    token: string;
    /** Transport seam. */
    authClient: AuthClient;
    /** Called after password is successfully reset. Fort's router may navigate to sign-in. */
    onSuccess?: () => void;
    /** Called when the user clicks "Request a new link". */
    onRequestNewLink?: () => void;
    /** Display language. Default: 'en'. */
    language?: 'en' | 'ar';
}
declare const ResetForm: {
    ({ token, authClient, onSuccess, onRequestNewLink, language, }: ResetFormProps): React$1.JSX.Element;
    displayName: string;
};

interface TwoFAFormProps {
    /** Transport seam. */
    authClient: AuthClient;
    /**
     * Opaque challenge token from LoginForm's on2FA callback.
     * Pass it directly — the form forwards it to authClient.verify2FA.
     */
    challengeToken?: string;
    /** Called after successful 2FA verification. */
    onSuccess?: () => void;
    /** Called when the server rejects the code with "too many attempts". */
    onTooManyAttempts?: () => void;
    /** Display language. Default: 'en'. */
    language?: 'en' | 'ar';
}
declare const TwoFAForm: {
    ({ authClient, challengeToken, onSuccess, onTooManyAttempts, language, }: TwoFAFormProps): React$1.JSX.Element;
    displayName: string;
};

interface AuthErrorAlertProps {
    error: string | null | undefined;
}
declare const AuthErrorAlert: {
    ({ error }: AuthErrorAlertProps): React$1.JSX.Element | null;
    displayName: string;
};

interface AuthStepHeaderProps {
    icon?: React$1.ReactNode;
    title: string;
    subtitle?: React$1.ReactNode;
    centered?: boolean;
}
declare const AuthStepHeader: {
    ({ icon, title, subtitle, centered }: AuthStepHeaderProps): React$1.JSX.Element;
    displayName: string;
};

interface OTPBoxGroupProps {
    value: string;
    onChange: (value: string) => void;
    onComplete?: (value: string) => void;
    disabled?: boolean;
    ariaLabel?: string;
    autoFocus?: boolean;
}
declare const OTPBoxGroup: {
    ({ value, onChange, onComplete, disabled, ariaLabel, autoFocus, }: OTPBoxGroupProps): React$1.JSX.Element;
    displayName: string;
};

interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    language?: 'en' | 'ar';
}
declare const PasswordInput: React$1.ForwardRefExoticComponent<PasswordInputProps & React$1.RefAttributes<HTMLInputElement>>;

interface PasswordRule {
    id: string;
    label_en: string;
    label_ar: string;
    met: boolean;
}
interface PasswordStrengthMeterProps {
    password: string;
    language?: 'en' | 'ar';
}
declare function computeRules(password: string): PasswordRule[];
declare function computeScore(rules: PasswordRule[]): number;
declare const PasswordStrengthMeter: {
    ({ password, language }: PasswordStrengthMeterProps): React$1.JSX.Element;
    displayName: string;
};

type Lang$2 = 'en' | 'ar';
interface LockScreenUser {
    /** Display name (language-resolved by caller). */
    name?: string | null;
    email: string;
    avatarUrl?: string | null;
}
interface LockScreenProps {
    user: LockScreenUser;
    /**
     * Called with the entered PIN when the user submits.
     * Should throw (or reject) if the PIN is wrong so the component can count
     * failed attempts. On success it should resolve without throwing.
     */
    onUnlock: (pin: string) => Promise<void>;
    /** Called when the user clicks "Not you? Sign out". */
    onSignOut: () => void;
    /** Current UI language. Default: 'en'. */
    language?: Lang$2;
    /**
     * Exact PIN length expected. Accepts 4-6. Default: 6.
     * NOTE: OTPBoxGroup always renders 6 slots; when pinLength < 6 the component
     * auto-submits on the Nth digit instead of the 6th.
     */
    pinLength?: 4 | 5 | 6;
    /** Max failed attempts before the lockout state. Default: 5. */
    maxAttempts?: number;
    /** Optional extra class on the outer wrapper. */
    className?: string;
}
declare const LockScreen: {
    ({ user, onUnlock, onSignOut, language, pinLength, maxAttempts, className, }: LockScreenProps): React$1.JSX.Element;
    displayName: string;
};

type Lang$1 = 'en' | 'ar';
interface PasswordLockScreenUser {
    name?: string | null;
    email: string;
    avatarUrl?: string | null;
}
interface UnlockCredentials {
    password: string;
    totp?: string;
}
interface PasswordLockScreenProps {
    user: PasswordLockScreenUser;
    /**
     * Called with the entered credentials. Should throw an Error whose message is
     * the server error code (e.g. "invalid_credentials", "totp_required",
     * "invalid_totp", "too_many_attempts").
     */
    onUnlock: (creds: UnlockCredentials) => Promise<void>;
    /** Called when user clicks "Switch account". */
    onSignOut: () => void;
    /**
     * Called when the server has force-logged-out after too many failures.
     * The session cookies are already cleared; the caller should redirect to login.
     */
    onForceLogout?: () => void;
    /** UI language. Default: 'en'. */
    language?: Lang$1;
    /** Max failed attempts before lockout state. Default: 5. */
    maxAttempts?: number;
    /**
     * Whether the user has TOTP enrolled. When true the TOTP field is always
     * visible. When false (default), it appears only after a totp_required error.
     */
    hasTOTP?: boolean;
    /** Optional extra class on the outer wrapper. */
    className?: string;
}
declare const PasswordLockScreen: {
    ({ user, onUnlock, onSignOut, onForceLogout, language, maxAttempts, hasTOTP: hasTOTPProp, className, }: PasswordLockScreenProps): React$1.JSX.Element;
    displayName: string;
};

interface SidebarUser {
    email: string | null;
    displayName: string | null;
    avatarUrl?: string;
}
interface SidebarConversation {
    id: string;
    title_en: string;
    title_ar?: string | null;
}
interface AppSidebarProps {
    /** Locale */
    language: 'en' | 'ar';
    isRTL: boolean;
    /** Branding — from BrandingProvider (U1) or direct props */
    appName?: string;
    logo?: string;
    /** Auth */
    user?: SidebarUser | null;
    isAuthLoading?: boolean;
    onSignOut?: () => void | Promise<void>;
    /** Navigation callbacks — product layer provides these */
    onNavigate?: (href: string) => void;
    /** Current pathname — used to highlight active tab and conversations */
    currentPathname?: string;
    /** Chat / conversation data (optional — hides the section when absent) */
    conversations?: SidebarConversation[];
    isConversationsLoading?: boolean;
    /** Tab hrefs */
    assistantHref?: string;
    analysisHref?: string;
}
declare const AppSidebar: {
    ({ language, isRTL, appName, logo, user, isAuthLoading, onSignOut, onNavigate, currentPathname, conversations, isConversationsLoading, assistantHref, analysisHref, }: AppSidebarProps): React$1.JSX.Element;
    displayName: string;
};

interface AppPageShellProps {
    children: React__default.ReactNode;
    /** Whether the current layout direction is RTL */
    isRTL: boolean;
    /** Called when auth check fails — product layer does the redirect */
    isAuthenticated?: boolean;
    isAuthLoading?: boolean;
    onUnauthenticated?: () => void;
    /** Full nav element rendered above content (UnifiedTopNav in app layer) */
    topNavSlot?: React__default.ReactNode;
    /** Slots for real-time banners rendered between nav and main content
     *  (CriticalAlertsBar, NewsChannelBanner, NotificationTicker) */
    realtimeSlotsTop?: React__default.ReactNode;
    /** Slot for the footer ticker (BreakingNewsTicker) */
    realtimeSlotBottom?: React__default.ReactNode;
    /** Backward-compat: copilotSeeds (unused) */
    copilotSeeds?: string[];
}
declare const AppPageShell: {
    ({ children, isRTL, isAuthenticated, isAuthLoading, onUnauthenticated, topNavSlot, realtimeSlotsTop, realtimeSlotBottom, copilotSeeds: _copilotSeeds, }: AppPageShellProps): React__default.JSX.Element | null;
    displayName: string;
};

type View = 'foryou' | 'dashboard' | 'projects';
interface ViewToggleProps {
    currentView?: View;
    language: 'en' | 'ar';
    isMobile?: boolean;
    /** Current URL path — used to derive active view */
    currentPathname?: string;
    /** Called with the new view when the user clicks */
    onViewChange: (view: View) => void;
    /** Called to navigate to a path */
    onNavigate?: (path: string) => void;
}
declare const ViewToggle: {
    ({ language, isMobile, currentPathname, currentView, onViewChange, onNavigate, }: ViewToggleProps): React$1.JSX.Element;
    displayName: string;
};

interface RouteProgressProps {
    /**
     * The current route path. Pass `usePathname()` from the app. Whenever this
     * value changes the bar animates. Required — the app owns the router binding.
     */
    pathname: string;
    /** Bar height in px. Default 2. */
    height?: number;
}
declare const RouteProgress: {
    ({ pathname, height }: RouteProgressProps): React$1.JSX.Element;
    displayName: string;
};

interface DynamicIconProps {
    name: string | null | undefined;
    className?: string;
    size?: number;
    strokeWidth?: number;
}
/**
 * Renders an icon by name string — supports four icon sources:
 *
 * 1. Image URL (starts with "http://", "https://", or "/"):
 *    Renders an <img> sized to match a lucide/boxicon of the same h-N class.
 *
 * 2. Boxicons brand icons — two accepted formats:
 *    a. Colon-prefix (canonical): "bxl:<name>" → "bxl-<name>" CSS class
 *    b. Legacy hyphen-prefix: "bxl-*" / "bx-*"
 *    Requires boxicons CSS loaded at the app root.
 *
 * 3. Lucide icons — two accepted formats:
 *    a. Colon-prefix (canonical): "lucide:<kebab-case>" → PascalCase lookup
 *    b. Legacy bare PascalCase (kept for backward-compat)
 *    Falls back to <Sparkles> when name is null, empty, or unrecognised.
 */
declare const DynamicIcon: {
    ({ name, className, size, strokeWidth }: DynamicIconProps): React$1.JSX.Element;
    displayName: string;
};

interface ProfileSession {
    id: string;
    device: string;
    location?: string;
    lastActive: string;
    current?: boolean;
}
interface ProfileViewProps {
    user: {
        name?: string;
        email: string;
        avatarUrl?: string;
        roles?: string[];
    };
    language?: "en" | "ar";
    sessions?: ProfileSession[];
    twoFactorEnabled?: boolean;
    onSave?: (data: {
        name: string;
        email: string;
    }) => void;
    onChangePassword?: () => void;
    onToggle2FA?: (enabled: boolean) => void;
    onRevokeSession?: (id: string) => void;
}
/** ProfileView — a presentational account/security/sessions profile screen built from the
 * kit primitives. Product-agnostic: pass user data + callbacks. RTL + bilingual via
 * `language`; themed via tokens (dark/light). */
declare function ProfileView({ user, language, sessions, twoFactorEnabled, onSave, onChangePassword, onToggle2FA, onRevokeSession, }: ProfileViewProps): React$1.JSX.Element;

interface ColorPickerProps {
    /** Current color, hex (e.g. "#7c3aed"). */
    value: string;
    onChange: (hex: string) => void;
    /** Preset swatches shown in the popover. */
    presets?: string[];
    /** Optional className for the trigger. */
    className?: string;
    disabled?: boolean;
    "aria-label"?: string;
}
/** ColorPicker — a swatch trigger that opens a popover with a native color input,
 * a hex field, and preset swatches. Presentational + controlled. */
declare function ColorPicker({ value, onChange, presets, className, disabled, ...rest }: ColorPickerProps): React$1.JSX.Element;

interface IconPickerProps {
    /** Current icon name (lucide PascalCase, e.g. "Sparkles"). */
    value?: string;
    onChange: (name: string) => void;
    /** Restrict to a custom icon list (defaults to a curated common set). */
    icons?: string[];
    className?: string;
    disabled?: boolean;
}
/** IconPicker — a button that opens a searchable grid of lucide icons. Controlled
 * by `value` (icon name) + `onChange`. Presentational + token-themed. */
declare function IconPicker({ value, onChange, icons, className, disabled }: IconPickerProps): React$1.JSX.Element;

interface MapMarker$1 {
    lat: number;
    lng: number;
    label?: string;
    /** Marker color (defaults to the brand primary). */
    color?: string;
}
interface MapViewProps {
    center: [number, number];
    zoom?: number;
    markers?: MapMarker$1[];
    /** Height of the map container (CSS value). Default 360px. */
    height?: number | string;
    className?: string;
    /** Tile attribution. Defaults to OpenStreetMap. */
    attribution?: string;
}
/** MapView — a real OpenStreetMap powered by leaflet. SSR-safe (leaflet loads in an
 * effect, client-only). Pass `center`, `zoom`, and `markers`. Themed container; the
 * tiles are OSM raster. */
declare function MapView({ center, zoom, markers, height, className, attribution, }: MapViewProps): React$1.JSX.Element;

/**
 * Map component types for sentra-ui.
 *
 * The map renderer itself is NOT included in this package to avoid bundling
 * maplibre-gl (~600 KB gzipped WebGL runtime) as a hard dependency. Products
 * supply the renderer via the `renderMap` prop (see MapPanel). This keeps the
 * library tree-shaking-friendly: consumers that never show a map pay zero cost.
 */
/** A single geographic marker for the map. */
interface MapMarker {
    id: string;
    /** Longitude */
    lng: number;
    /** Latitude */
    lat: number;
    /** Marker category — drives color + legend shape */
    markerType: MapMarkerType;
    /** English label shown in tooltip */
    label: string;
    /** Arabic label (RTL), falls back to label if absent */
    label_ar?: string;
    description?: string;
    description_ar?: string;
    /** Nominal size in pixels at zoom level 6 (data-driven) */
    size?: number;
}
/** All marker types the map legend and styling system understand. */
type MapMarkerType = 'strike' | 'launch_site' | 'proxy_force' | 'military_base' | 'air_defense' | 'nuclear' | 'naval' | 'infrastructure';
type LegendShapeType = 'diamond' | 'burst' | 'chevron' | 'triangle' | 'hexagon' | 'ring' | 'pill' | 'square';
interface LegendItem {
    /** Marker type key — used to look up color and label */
    type: MapMarkerType;
    shape: LegendShapeType;
}
interface LegendGroup {
    label: string;
    label_ar: string;
    items: LegendItem[];
}
type AlertSeverity = 'critical' | 'high' | 'medium' | 'low';
interface AlertMapItem {
    id: string;
    slug: string;
    title_en: string;
    title_ar: string | null;
    severity: AlertSeverity | null;
    mode: string;
    scope: string;
    topics: string[];
    updated_at: string;
}
/**
 * Region preset — used by the region selector and the fly-to handler.
 * The renderMap slot receives `initialRegion` so the product's map engine can
 * set its initial viewport.
 */
interface MapRegionPreset {
    key: string;
    label: string;
    label_ar: string;
    latitude: number;
    longitude: number;
    zoom: number;
}
/**
 * Layer toggle entry — sent to the LayersPanel and also passed to renderMap so
 * the product can show/hide GeoJSON layers.
 */
interface MapLayer {
    id: string;
    label: string;
    label_ar: string;
    enabled: boolean;
    color?: string;
}
/**
 * The seam contract the renderMap prop must satisfy.
 *
 * The product supplies a renderer (e.g. <Map> from react-map-gl/maplibre) and
 * receives the full state it needs to wire GeoJSON Sources and Layers. The
 * sentra-ui package never imports react-map-gl or maplibre-gl.
 */
interface RenderMapContext {
    /** Active layers; product hides/shows Source/Layer accordingly */
    layers: Record<string, boolean>;
    /** Markers to render as GeoJSON point features */
    markers: MapMarker[];
    /** Alert pins from the product's data fetch */
    alerts: AlertMapItem[];
    /** Currently active region preset */
    activeRegion: MapRegionPreset;
    /** Language code — 'en' | 'ar' */
    language: string;
    /** Text direction — 'ltr' | 'rtl' */
    dir: 'ltr' | 'rtl';
    /** Whether the host app is in dark theme */
    isDark: boolean;
}
interface MapPanelProps {
    /**
     * The actual map renderer, supplied by the product.
     *
     * Receives full state via RenderMapContext. Return a React node that fills
     * its container (w-full h-full). Example usage in sentra-next:
     *
     * ```tsx
     * renderMap={(ctx) => (
     *   <SituationMapEmbed
     *     layers={ctx.layers}
     *     alerts={ctx.alerts}
     *     language={ctx.language}
     *     isDark={ctx.isDark}
     *   />
     * )}
     * ```
     *
     * If omitted, an informational placeholder is shown — useful in Storybook
     * and tests.
     */
    renderMap?: (ctx: RenderMapContext) => React.ReactNode;
    /** Markers passed to renderMap ctx — product builds these from its GeoJSON data */
    markers?: MapMarker[];
    /** Live alert pins — product fetches these from its bridge endpoint */
    alerts?: AlertMapItem[];
    /** Region presets for the region selector bar. Defaults to MENA presets. */
    regionPresets?: MapRegionPreset[];
    /** Layer definitions controlling the LayersPanel toggles */
    layers?: MapLayer[];
    /** Initial active region key — defaults to 'global' */
    initialRegion?: string;
    /** Active language code — 'en' | 'ar' */
    language?: string;
    /** Whether host is in dark theme — forwarded to renderMap ctx */
    isDark?: boolean;
    /** Called when a layer is toggled */
    onLayerToggle?: (layerId: string, enabled: boolean) => void;
    /** Called when alert count changes (useful for badge in host nav) */
    onAlertCountChange?: (count: number) => void;
    /** CSS class name applied to the root container */
    className?: string;
}

interface MapLegendProps {
    /** Language code — 'en' | 'ar'. Controls label language and RTL positioning. */
    language?: string;
    /** Override legend groups (marker types + shapes). Defaults to MENA presets. */
    groups?: LegendGroup[];
    /**
     * Marker color map — keys are MapMarkerType strings, values are hex colors.
     * Defaults to MARKER_COLORS from mapDefaults.
     */
    markerColors?: Partial<Record<MapMarkerType, string>>;
    /**
     * Marker label map — keys are MapMarkerType strings.
     * Defaults to MARKER_LABELS from mapDefaults.
     */
    markerLabels?: Partial<Record<MapMarkerType, {
        en: string;
        ar: string;
    }>>;
    /** Additional class name on the root element */
    className?: string;
    /** Initially collapsed. Defaults to false (expanded). */
    defaultCollapsed?: boolean;
}
declare const MapLegend: {
    ({ language, groups, markerColors, markerLabels, className, defaultCollapsed, }: MapLegendProps): React$1.JSX.Element;
    displayName: string;
};

interface MapLayersPanelProps {
    /** Layer toggle entries. Defaults to DEFAULT_LAYERS from mapDefaults. */
    layers?: MapLayer[];
    /** Language code — 'en' | 'ar' */
    language?: string;
    /** Called when a layer toggle changes */
    onToggle?: (layerId: string, enabled: boolean) => void;
    /** Additional class name on root */
    className?: string;
}
declare const MapLayersPanel: {
    ({ layers, language, onToggle, className, }: MapLayersPanelProps): React$1.JSX.Element;
    displayName: string;
};

/**
 * MapPanel — chrome shell for the situation map view.
 *
 * Ported from app/src/components/situation-map/SituationMapEmbed.tsx.
 *
 * DESIGN DECISION — renderMap seam (option b from the porting spec):
 * ──────────────────────────────────────────────────────────────────
 * react-map-gl@7 + maplibre-gl@4 together add ~600 KB gzipped WebGL runtime.
 * Bundling them into @prism/ui would force every product consumer to pay that
 * cost even when no map is rendered (e.g. Scout's data-table views).
 *
 * Instead, MapPanel exposes a `renderMap` prop that receives a RenderMapContext
 * object. The product (sentra-next) supplies the actual <Map> component from
 * react-map-gl/maplibre, which it already depends on. sentra-ui ships zero
 * map-library bytes.
 *
 * Everything else — region selector bar, time-range filter, layers panel,
 * legend, alert sidebar — is real and fully ported here. The seam is only
 * the WebGL canvas itself.
 *
 * Adaptations from source:
 * - @/lib/utils        → ../../lib/utils
 * - @/components/ui/*  → ../ui/*
 * - useLanguage        → language / dir props
 * - useTheme           → isDark prop
 * - bridge + useQuery  → alerts prop (product fetches and passes)
 * - WebSocket listener → onAlertCountChange callback
 * - REGION_PRESETS     → regionPresets prop (defaults to DEFAULT_REGION_PRESETS)
 * - LayersPanel / MapLegend → imported from this module
 */

declare const MapPanel: {
    ({ renderMap, markers, alerts, regionPresets, layers: layersProp, initialRegion, language, isDark, onLayerToggle, onAlertCountChange, className, }: MapPanelProps): React__default.JSX.Element;
    displayName: string;
};

interface EventMapPanelProps {
    /** Structured location string — if absent the panel renders nothing */
    location?: string | null;
    /** Language code — 'en' | 'ar' */
    language?: string;
}
declare const EventMapPanel: {
    ({ location, language }: EventMapPanelProps): React$1.JSX.Element | null;
    displayName: string;
};

/**
 * Default configuration constants for the map components.
 *
 * These are the same values used in the source app (situation-map-data.ts /
 * MapLegend.tsx) extracted here so map components are self-contained without
 * depending on the app's data/ directory.
 */

declare const MARKER_COLORS: Record<MapMarkerType, string>;
declare const MARKER_LABELS: Record<MapMarkerType, {
    en: string;
    ar: string;
}>;
declare const DEFAULT_LEGEND_GROUPS: LegendGroup[];
declare const DEFAULT_REGION_PRESETS: MapRegionPreset[];
declare const DEFAULT_LAYERS: MapLayer[];

interface GraphNode {
    id: string;
    label?: string;
    group?: string;
}
interface GraphLink {
    source: string;
    target: string;
}
interface NetworkGraphProps {
    nodes: GraphNode[];
    links: GraphLink[];
    width?: number;
    height?: number;
    className?: string;
    /** Map a group → CSS color. Falls back to a token palette. */
    groupColor?: (group: string | undefined) => string;
    /** Node circle radius. */
    nodeRadius?: number;
    /** Fired when a node is clicked (not dragged). */
    onNodeClick?: (node: GraphNode) => void;
}
/** NetworkGraph — a dependency-free, **live force-directed** SVG graph with
 * **draggable** nodes. Nodes repel, links act as springs, and the layout settles;
 * dragging a node pins it to the pointer and reheats the simulation so the graph
 * reacts dynamically. Pass `nodes` + `links`. */
declare function NetworkGraph({ nodes, links, width, height, className, groupColor, nodeRadius, onNodeClick, }: NetworkGraphProps): React$1.JSX.Element;

type TEntityType = "government" | "individual" | "media" | "institution" | "state" | "organization" | "event" | "venue" | "persona" | "person" | "coalition";
type TSentiment = "positive" | "negative" | "neutral" | "unknown";
/** Network node/edge shapes for the graph renderer seam */
interface NetworkNode {
    id: string;
    slug: string;
    name_en: string;
    name_ar?: string | null;
    type: TEntityType;
    sentiment?: TSentiment | null;
    image_url?: string | null;
}
interface NetworkEdge {
    source: string;
    target: string;
    weight: number;
    relation?: string | null;
}
interface EntityNetwork {
    nodes: NetworkNode[];
    edges: NetworkEdge[];
}

interface EntityNetworkGraphProps {
    /**
     * SEAM — host renders the actual graph canvas inside this callback.
     * Receives the network data so the canvas can build its own graphology Graph.
     * If omitted, a "graph unavailable" placeholder is shown.
     *
     * Example (app side):
     *   renderGraph={(network) => <EntityNetworkGraphCanvas slug={slug} network={network} />}
     */
    renderGraph?: (network: EntityNetwork) => React.ReactNode;
    /** Network data fetched from GET /api/entities/{slug}/network */
    network: EntityNetwork | null;
    isLoading?: boolean;
    isError?: boolean;
    onRetry?: () => void;
    language?: "en" | "ar";
    isRTL?: boolean;
}
declare const EntityNetworkGraph: {
    ({ renderGraph, network, isLoading, isError, onRetry, language, isRTL, }: EntityNetworkGraphProps): React$1.JSX.Element;
    displayName: string;
};

interface ActivityBucket {
    n: number;
}
interface PluginCatalogEntry {
    id: string;
    slug: string | null;
    name: string | null;
    name_en: string | null;
    name_ar: string | null;
    description: string | null;
    description_en: string | null;
    description_ar: string | null;
    plugin_type: string | null;
    /** adk_artifact sub-kind: tool | skill | agent | mcp | memory | persona */
    adk_kind?: string | null;
    enabled_globally: boolean | null;
    nav_icon: string | null;
    nav_color: string | null;
    last_active_at: string | null;
    activity_count: number | null;
    activity_series: ActivityBucket[] | null;
    route: string | null;
}
interface SparklinePoint {
    n: number;
}

interface PluginCardProps {
    plugin: PluginCatalogEntry;
    isRTL: boolean;
    /**
     * Resolved Lucide icon component for this plugin.
     * Host calls resolveIcon(plugin.nav_icon) and passes the result here.
     */
    iconComponent?: LucideIcon;
    /** When true, render a checkbox for multi-select. */
    selectable?: boolean;
    selected?: boolean;
    onSelectChange?: (id: string, next: boolean) => void;
    /**
     * Called when the user clicks "Details". Host navigates to the detail page.
     * Receives the plugin slug (or id) as argument.
     */
    onDetailClick?: (slugOrId: string) => void;
    /**
     * Called when the user clicks "Page" (external route link).
     * Receives the route string from plugin.route.
     */
    onPageClick?: (route: string) => void;
}
declare const PluginCard: {
    ({ plugin, isRTL, iconComponent: Icon, selectable, selected, onSelectChange, onDetailClick, onPageClick, }: PluginCardProps): React$1.JSX.Element;
    displayName: string;
};

interface PluginPageHeaderProps {
    icon?: LucideIcon;
    title_en: string;
    title_ar: string;
    subtitle_en?: string;
    subtitle_ar?: string;
    actions?: React.ReactNode;
    /** Current UI language. */
    language: "en" | "ar";
}
declare const PluginPageHeader: {
    ({ icon: Icon, title_en, title_ar, subtitle_en, subtitle_ar, actions, language, }: PluginPageHeaderProps): React$1.JSX.Element;
    displayName: string;
};

interface PluginSectionCardProps {
    icon?: LucideIcon;
    title_en: string;
    title_ar: string;
    description_en?: string;
    description_ar?: string;
    /** Optional actions slot at the inline-end of the title row. */
    actions?: React.ReactNode;
    /** Adds destructive accent border for dangerous sections. */
    destructive?: boolean;
    className?: string;
    children: React.ReactNode;
    /** Current UI language. */
    language: "en" | "ar";
}
declare const PluginSectionCard: {
    ({ icon: Icon, title_en, title_ar, description_en, description_ar, actions, destructive, className, children, language, }: PluginSectionCardProps): React$1.JSX.Element;
    displayName: string;
};

interface PluginSparklineProps {
    pluginId: string;
    seriesData: SparklinePoint[];
    hasSeriesData: boolean;
    color: string;
}
declare const PluginSparkline: {
    ({ pluginId, seriesData, hasSeriesData, color, }: PluginSparklineProps): React$1.JSX.Element;
    displayName: string;
};

type SourceBadgeVariant = 'pill' | 'compact';
type SourceBadgeSize = 'xs' | 'sm' | 'md';
interface SourceBadgeProps {
    /** Display label (already localised by the product). */
    label: string;
    /** DynamicIcon name string — "si:openai", "lucide:zap", "bxl:reddit", a URL, etc. */
    navIcon?: string | null;
    /** Optional brand color (hex or CSS color) applied to the icon. */
    color?: string;
    variant?: SourceBadgeVariant;
    href?: string;
    size?: SourceBadgeSize;
    className?: string;
}
declare const SourceBadge: {
    ({ label, navIcon, color, variant, href, size, className, }: SourceBadgeProps): React$1.JSX.Element;
    displayName: string;
};

/** Appearance placement mode for a plugin. */
type AppearanceMode = 'sidebar' | 'header' | 'sideover' | 'fixed' | 'hidden';
/** Appearance fields passed into PluginAppearanceSection. */
interface PluginAppearanceFields {
    appearance_mode: AppearanceMode;
    nav_order: number;
    /** Only relevant for capability plugins. */
    is_default_page?: boolean;
    plugin_type?: string | null;
}
/** A single workflow step (raw JSONB shape). */
type WorkflowStep = Record<string, any>;
/** A single workflow source (raw JSONB shape). */
type WorkflowSource = Record<string, any>;
/** Tab definition for PluginDetailLayout. */
interface PluginDetailTab {
    key: string;
    label_en: string;
    label_ar: string;
    icon?: React.ElementType;
    /**
     * Optional section group label (bilingual). Tabs sharing the same section_en
     * render under one section header in the sub-sidebar (like the mofa-dev
     * reference: "Overview" / "Settings"). Tabs with no section render in an
     * unlabelled leading group. Order of first appearance defines section order.
     */
    section_en?: string;
    section_ar?: string;
}
/** A pipeline stage for WorkflowPipeline. */
interface PipelineLane {
    key: string;
    label_en: string;
    label_ar: string;
    cards: PipelineCard[];
}
/** A card inside a pipeline lane. */
interface PipelineCard {
    id: string;
    title_en: string;
    title_ar: string;
    svc?: string;
    isSynthetic?: boolean;
    summary: {
        label: string;
        value: string;
    }[];
    metrics?: {
        ok_rate: number;
        p50_ms: number;
        last_error?: string;
    };
}
/** Pipeline model passed to WorkflowPipeline. */
interface PipelineModel {
    stages: PipelineLane[];
    fetchBranches: PipelineCard[];
}
/** Metrics for a step keyed by step ID. */
interface StepMetrics7d {
    [stepId: string]: {
        runs: number;
        errors: number;
        avg_duration_ms?: number;
    };
}
/** Workflow palette for the Add Item dialog. */
interface WorkflowPalette {
    svc: Array<{
        slug: string;
        name_en: string;
        name_ar: string;
    }>;
}

type IconKind = 'lucide' | 'react-icons' | 'boxicons' | 'fallback';
interface ResolvedIcon {
    Component: React$1.ElementType;
    kind: IconKind;
}
declare const resolveIcon: (navIcon: string | null | undefined) => ResolvedIcon;

type StepPath = (number | string)[];
type AnyStep = Record<string, any>;
interface WorkflowStepNodeProps {
    step: AnyStep;
    path: StepPath;
    depth: number;
    isRTL: boolean;
    metrics?: StepMetrics7d;
    editingPath?: string | null;
    onEditRequest?: (path: StepPath) => void;
    onDelete?: (path: StepPath) => void;
    onMove?: (path: StepPath, dir: -1 | 1) => void;
    onAdd?: (containerPath: StepPath, kind: string) => void;
    addableKinds?: string[];
    renderEditor?: (step: AnyStep, path: StepPath) => React.ReactNode;
    /** Plain-language mode for non-technical readers (friendly badge + sentence,
     * no raw SQL/code). Default: true. Pass false for the developer view. */
    humanize?: boolean;
}
declare const WorkflowStepNode: {
    ({ step, path, depth, isRTL, metrics, editingPath, onEditRequest, onDelete, onMove, onAdd, addableKinds, renderEditor, humanize, }: WorkflowStepNodeProps): React$1.JSX.Element;
    displayName: string;
};

declare const PIPELINE_STAGES: {
    key: string;
    label_en: string;
    label_ar: string;
}[];
interface WorkflowPipelineProps {
    model: PipelineModel;
    /** Current UI direction. Default false (LTR). */
    isRTL?: boolean;
}
declare const WorkflowPipeline: {
    ({ model, isRTL }: WorkflowPipelineProps): React$1.JSX.Element;
    displayName: string;
};

interface WorkflowEditorProps {
    /** Raw JSONB workflow_steps array from the DB. */
    workflowSteps: WorkflowStep[];
    /** Raw JSONB sources array from the DB. */
    workflowSources: WorkflowSource[];
    /** Plugin slug — used in source credential links. */
    pluginSlug: string;
    /** Current UI language. */
    language: 'en' | 'ar';
    /** Palette for Add dialog SVC items. */
    palette?: WorkflowPalette;
    /**
     * Called when the operator clicks Save.
     * Returns a Promise — reject to show an error toast.
     */
    onSave: (steps: WorkflowStep[], sources: WorkflowSource[]) => Promise<void>;
}
declare const WorkflowEditor: {
    ({ workflowSteps, workflowSources, pluginSlug, language, palette, onSave, }: WorkflowEditorProps): React$1.JSX.Element;
    displayName: string;
};

interface PluginAppearanceSectionProps {
    /** Current server state — seeds the form on mount / when changed. */
    appearance: PluginAppearanceFields;
    /** Called when the operator saves. Return type intentionally void — host handles async. */
    onSave: (changed: Partial<PluginAppearanceFields>) => void;
    /** Whether the host is currently persisting. */
    isPending?: boolean;
    /** Whether the last save resulted in an error. */
    isError?: boolean;
    errorMessage?: string;
    /** Current UI language. */
    language: 'en' | 'ar';
}
declare const PluginAppearanceSection: {
    ({ appearance, onSave, isPending, isError, errorMessage, language, }: PluginAppearanceSectionProps): React$1.JSX.Element;
    displayName: string;
};

interface TestRunStep {
    name: string;
    status: 'ok' | 'error' | 'skipped' | string;
    detail?: string;
    duration_ms?: number;
    count?: number;
    error?: string;
}
interface TestRunSavedItem {
    title?: string;
    url?: string;
    language?: string;
    content_hash?: string;
    envelope_id?: string;
    source_id?: string;
    region?: string;
    content_en?: string;
    content_ar?: string;
    published_at?: string;
    raw_payload?: any;
}
interface TestRunCompletePayload {
    envelopes_saved: number;
    saved: TestRunSavedItem[];
}
/** Callbacks for the SSE stream. */
interface TestRunCallbacks {
    onStep: (step: TestRunStep) => void;
    onComplete: (payload: TestRunCompletePayload) => void;
    onError: (err: {
        error: string;
    }) => void;
}
interface TestRunPanelProps {
    /** Plugin slug — passed to onRunRequest. */
    slug: string;
    /** Max envelopes to save. Default 5. */
    maxEnvelopes?: number;
    /** If true, panel renders as an inline block rather than a Card. */
    inline?: boolean;
    /** Current UI language. */
    language: 'en' | 'ar';
    /**
     * Host-provided SSE runner. Must return an AbortController.
     * Signature mirrors sourceTestRunSSE from the bridge hooks.
     */
    onRunRequest: (slug: string, maxEnvelopes: number, callbacks: TestRunCallbacks) => AbortController;
}
declare const TestRunPanel: {
    ({ slug, maxEnvelopes, inline, language, onRunRequest, }: TestRunPanelProps): React$1.JSX.Element;
    displayName: string;
};

interface PluginDetailIdentity {
    slug?: string | null;
    name?: string | null;
    name_en?: string | null;
    name_ar?: string | null;
    description?: string | null;
    description_en?: string | null;
    description_ar?: string | null;
    plugin_type?: string | null;
    version?: string | null;
    nav_icon?: string | null;
    nav_color?: string | null;
    enabled_globally?: boolean | null;
}
interface PluginActivitySummary {
    last_active_at?: string | null;
    activity_count?: number | null;
    activity_series?: {
        n: number;
    }[];
}
interface PluginDetailLayoutProps {
    /** Ordered tab list. */
    tabs: PluginDetailTab[];
    /** Currently active tab key. */
    activeTab: string;
    /** Called when the operator clicks a tab. */
    onTabChange: (key: string) => void;
    /** Content for the active tab. */
    children: React.ReactNode;
    /** Plugin identity for the hero. */
    plugin: PluginDetailIdentity;
    /** Optional activity data for the sparkline analytics block. */
    activity?: PluginActivitySummary;
    /** Whether identity data is still loading. */
    isLoading?: boolean;
    /** Whether identity fetch errored. */
    isError?: boolean;
    /** Current UI language. */
    language: 'en' | 'ar';
}
declare const PluginHeroSkeleton: {
    (): React$1.JSX.Element;
    displayName: string;
};
interface PluginHeroProps {
    plugin: PluginDetailIdentity;
    activity?: PluginActivitySummary;
    isRTL: boolean;
}
declare const PluginHero: {
    ({ plugin, activity, isRTL }: PluginHeroProps): React$1.JSX.Element;
    displayName: string;
};

declare const PluginDetailLayout: {
    ({ tabs, activeTab, onTabChange, children, plugin, activity, isLoading, isError, language, }: PluginDetailLayoutProps): React$1.JSX.Element;
    displayName: string;
};

/**
 * StepOptionsDialog — a type-specific options modal for a single workflow step.
 *
 * The form fields are driven by a registry keyed on the step `kind`, so each step
 * type shows exactly the settings it needs (schedule, condition, query, prompt,
 * model, …). Unknown kinds fall back to a raw-JSON editor. Presentational +
 * bilingual (EN/AR) + token-themed + RTL — pass the step and an onSave callback.
 */

type StepFieldType = 'text' | 'textarea' | 'number' | 'select' | 'switch' | 'lines' | 'csv' | 'json';
interface StepFieldDef {
    key: string;
    type: StepFieldType;
    label_en: string;
    label_ar: string;
    placeholder?: string;
    options?: {
        value: string;
        label: string;
    }[];
}
/** kind → field schema. The most common togo/sentra step kinds are covered; any
 * other kind falls back to the raw-JSON editor. */
declare const STEP_FIELD_REGISTRY: Record<string, StepFieldDef[]>;
interface StepOptionsDialogProps {
    open: boolean;
    /** The step object being edited (any shape with a `kind`). */
    step: Record<string, any> | null;
    language?: 'en' | 'ar';
    onClose: () => void;
    /** Called with the FULL updated step object when the operator saves. */
    onSave: (next: Record<string, any>) => void;
}
declare function StepOptionsDialog({ open, step, language, onClose, onSave }: StepOptionsDialogProps): React$1.JSX.Element;
declare namespace StepOptionsDialog {
    var displayName: string;
}

/**
 * NestedStepsEditor — multi-level drag-and-drop editor for a workflow step TREE.
 *
 * Steps can be reordered within a branch AND moved across nesting levels
 * (top-level ↔ an `if`'s then/else ↔ a `for_each`'s loop body). Built on
 * @dnd-kit with one DndContext + a SortableContext per branch; drag-end resolves
 * the source/target branch by the dragged item's path and moves it immutably.
 * A gear button opens the per-step options modal (via onEditStep).
 */

type Step = Record<string, any>;
interface NestedStepsEditorProps {
    steps: Step[];
    language?: 'en' | 'ar';
    onChange: (steps: Step[]) => void;
    onEditStep?: (step: Step) => void;
    onDeleteStep?: (uid: string) => void;
    className?: string;
}
declare function NestedStepsEditor({ steps, language, onChange, onEditStep, onDeleteStep, className, }: NestedStepsEditorProps): React$1.JSX.Element;
declare namespace NestedStepsEditor {
    var displayName: string;
}

type WorkflowView = "steps" | "pipeline" | "editor";
interface WorkflowStepLike {
    kind?: string;
    then?: WorkflowStepLike[];
    else?: WorkflowStepLike[];
    steps?: WorkflowStepLike[];
    [key: string]: unknown;
}
interface WorkflowProps {
    /** The workflow as a nested step tree — the single source of truth for every view. */
    steps: WorkflowStepLike[];
    /** Controlled active view. */
    view?: WorkflowView;
    /** Initial view when uncontrolled. Default "steps". */
    defaultView?: WorkflowView;
    onViewChange?: (view: WorkflowView) => void;
    language?: "en" | "ar";
    /** Plain-language step descriptions (default true). */
    humanize?: boolean;
    /** Enables the Editor view; called when the editor mutates the tree. */
    onChange?: (steps: WorkflowStepLike[]) => void;
    onEditStep?: (step: WorkflowStepLike) => void;
    className?: string;
}
/** Workflow — the unified workflow component. One nested-step model rendered three ways,
 * switchable via the header toggle:
 *   • Steps    — human-readable vertical step tree (default)
 *   • Pipeline — the same steps as a horizontal flow
 *   • Editor   — multi-level drag-and-drop editor with per-step options (enabled when onChange is set)
 * Pipeline + Editor are derived from the same `steps`, so all three views show one workflow. */
declare function Workflow({ steps, view, defaultView, onViewChange, language, humanize, onChange, onEditStep, className, }: WorkflowProps): React$1.JSX.Element;

/**
 * types.ts — LogsView data contract
 *
 * Rule 25: product-agnostic seam — no fetching, no app/product imports.
 * Data arrives entirely as props.
 */
type LogLevel = 'debug' | 'info' | 'warn' | 'error';
interface ServiceLogRow {
    id: string;
    /** ISO 8601 timestamp */
    ts: string;
    level: LogLevel;
    /** e.g. 'axon', 'scout-collector', 'firecrawl' */
    service: string;
    /** optional subsystem label */
    component?: string;
    msg: string;
    traceId?: string;
    requestId?: string;
    userId?: string;
    /** arbitrary structured metadata */
    attrs?: Record<string, unknown>;
}
interface LogsFilter {
    /** multiselect level filter — empty / undefined = all levels */
    levels?: string[];
    service?: string;
    component?: string;
    /** ISO date-time lower bound */
    since?: string;
    /** ISO date-time upper bound */
    until?: string;
    /** full-text search on msg */
    q?: string;
}
interface LogsViewProps {
    logs: ServiceLogRow[];
    filters: LogsFilter;
    onFilterChange: (f: LogsFilter) => void;
    /** EN or AR — drives all chrome labels and RTL direction */
    language: 'en' | 'ar';
    loading?: boolean;
    /** called when the user reaches the bottom / clicks "load more" */
    onLoadMore?: () => void;
    hasMore?: boolean;
    /** options to populate the service dropdown */
    services?: string[];
    /** options to populate the component dropdown */
    components?: string[];
    /** whether live-tail polling is active */
    liveTail?: boolean;
    onToggleLiveTail?: (on: boolean) => void;
    className?: string;
}

/**
 * LogsView — presentational per-product log viewer
 *
 * Rule 25: purely presentational; NO data fetching, NO context reads,
 *          NO product-specific imports. All data arrives as props.
 * Rule 16: semantic tokens only (no hex), logical CSS properties (ms/me/ps/pe).
 * Rule 8:  all chrome strings bilingual via `language` prop.
 * Rule 7:  displayName set; event handlers prefixed `handle*`.
 */

declare const LogsView: {
    ({ logs, filters, onFilterChange, language, loading, onLoadMore, hasMore, services, components, liveTail, onToggleLiveTail, className, }: LogsViewProps): React__default.JSX.Element;
    displayName: string;
};

/**
 * Error-tracking data contract (Sentry-style). Product-agnostic: every component
 * is presentational — data arrives via props, no fetching, no app imports.
 */
type IssueLevel = "fatal" | "error" | "warning" | "info" | "debug";
interface StackFrameContextLine {
    line: number;
    text: string;
    /** the line where the error occurred */
    current?: boolean;
}
interface StackFrame {
    filename: string;
    function?: string;
    lineno?: number;
    colno?: number;
    /** true = application frame (vs. node_modules / framework) */
    inApp?: boolean;
    /** optional source context around the frame */
    context?: StackFrameContextLine[];
}
interface IssueBreadcrumb {
    /** ISO 8601 */
    timestamp: string;
    type?: "navigation" | "http" | "ui" | "log" | "error" | "info";
    category?: string;
    message: string;
    level?: IssueLevel;
}
interface IssueTag {
    key: string;
    value: string;
}
interface IssueAssignee {
    name?: string;
    email?: string;
    avatarUrl?: string;
}
interface Issue$1 {
    id: string;
    /** e.g. "TypeError: Cannot read properties of undefined (reading 'id')" */
    title: string;
    /** where it happened, e.g. "app/checkout/page.tsx in handleSubmit" */
    culprit?: string;
    level: IssueLevel;
    /** total events (occurrences) */
    count: number;
    /** distinct users affected */
    userCount?: number;
    /** ISO 8601 */
    firstSeen: string;
    lastSeen: string;
    status?: "unresolved" | "resolved" | "ignored";
    assignee?: IssueAssignee;
    environment?: string;
    project?: string;
    /** events-over-time buckets for the row sparkline / detail chart */
    frequency?: number[];
    stack?: StackFrame[];
    breadcrumbs?: IssueBreadcrumb[];
    tags?: IssueTag[];
}
interface ErrorFilter {
    /** empty/undefined = all levels */
    levels?: IssueLevel[];
    environment?: string;
    /** ISO lower bound (or a relative key the app resolves) */
    range?: string;
    status?: Issue$1["status"];
    /** full-text search on title/culprit */
    q?: string;
}
type IssueSort = "lastSeen" | "firstSeen" | "count" | "userCount";

type Lang = "en" | "ar";
/** Map a Sentry-style level to a StatusBadge tone. */
declare function levelTone(level: IssueLevel): "danger" | "warning" | "info" | "neutral";

interface IssuesListProps {
    issues: Issue$1[];
    selectedId?: string | null;
    onSelectIssue?: (issue: Issue$1) => void;
    language?: Lang;
    filter?: ErrorFilter;
    onFilterChange?: (f: ErrorFilter) => void;
    sort?: IssueSort;
    onSortChange?: (s: IssueSort) => void;
    /** options for the environment dropdown */
    environments?: string[];
    className?: string;
}
/** IssuesList — the Sentry-style "Issues" view: a filter bar + a list of error
 * groups (level, title + culprit, frequency sparkline, events, users, assignee,
 * last-seen). Presentational; row click → onSelectIssue. RTL + bilingual. */
declare function IssuesList({ issues, selectedId, onSelectIssue, language, filter, onFilterChange, sort, onSortChange, environments, className, }: IssuesListProps): React$1.JSX.Element;

interface IssueDetailProps {
    issue: Issue$1;
    language?: Lang;
    onResolve?: (issue: Issue$1) => void;
    onIgnore?: (issue: Issue$1) => void;
    className?: string;
}
/** IssueDetail — the error detail pane: title + culprit, level, resolve/ignore,
 * stats, a frequency chart, then tabbed Stack trace / Breadcrumbs / Tags. */
declare function IssueDetail({ issue, language, onResolve, onIgnore, className }: IssueDetailProps): React$1.JSX.Element;

interface ErrorTrackingPageProps {
    issues: Issue$1[];
    language?: Lang;
    filter?: ErrorFilter;
    onFilterChange?: (f: ErrorFilter) => void;
    sort?: IssueSort;
    onSortChange?: (s: IssueSort) => void;
    environments?: string[];
    onResolve?: (issue: Issue$1) => void;
    onIgnore?: (issue: Issue$1) => void;
    /** controlled selection (optional) */
    selectedId?: string | null;
    onSelectIssue?: (issue: Issue$1) => void;
    className?: string;
}
/** ErrorTrackingPage — the Sentry-style master/detail error page: IssuesList on
 * the start side, IssueDetail on the end side. Responsive: split on desktop,
 * list→detail drill-down on mobile. Uncontrolled selection unless `selectedId`
 * is provided. */
declare function ErrorTrackingPage({ issues, language, filter, onFilterChange, sort, onSortChange, environments, onResolve, onIgnore, selectedId, onSelectIssue, className, }: ErrorTrackingPageProps): React$1.JSX.Element;

interface SentraLoadingProps {
    language?: 'en' | 'ar';
    dir?: 'ltr' | 'rtl';
    /** Lucide icon name from the branding icon picker — the platform brand icon. */
    iconName?: string | null;
    /**
     * Platform title pair from Fort branding. The component resolves the active
     * language itself so every product gets the translated title for free.
     */
    productNameEn?: string | null;
    productNameAr?: string | null;
    /** Pre-resolved title override — wins over the En/Ar pair when set. */
    productName?: string;
}
declare const SentraLoading: {
    ({ language, dir, iconName, productNameEn, productNameAr, productName, }: SentraLoadingProps): React$1.JSX.Element;
    displayName: string;
};

/**
 * ContextualSkeleton — a loading skeleton with a contextual header (spinner +
 * a bilingual "loading X…" caption) and one of three body shapes: default
 * (text lines), grid (cards), or timeline (dot + lines rows).
 *
 * Pure & product-agnostic (Rule 25): `language` is a prop, no context. Distinct
 * from SectionSkeleton (which is a single card-shaped block) — this one carries
 * a caption + variant body for richer loading states.
 *
 * Ported from app/src/components/loading/ContextualSkeleton.tsx.
 */

type ContextualSkeletonVariant = 'default' | 'grid' | 'timeline';
interface ContextualSkeletonProps {
    /** Bilingual caption shown next to the spinner, e.g. {en:'Loading alerts…', ar:'…'} */
    description: {
        en: string;
        ar: string;
    };
    variant?: ContextualSkeletonVariant;
    /** Number of text lines for the 'default' variant. Default: 3. */
    lines?: number;
    language?: 'en' | 'ar';
    /**
     * Optional icon (LucideIcon component) rendered before the caption.
     * Accepted for API parity with hub callers — visually ignored (spinner
     * already serves as the loading indicator). Pass it to keep TS happy when
     * migrating from the old hub ContextualSkeleton.
     */
    icon?: React$1.ComponentType<{
        className?: string;
    }>;
    /**
     * Bilingual title shown above the skeleton body. Optional — omitted if not provided.
     */
    title?: {
        en: string;
        ar: string;
    };
}
declare const ContextualSkeleton: {
    ({ description, variant, lines, language, }: ContextualSkeletonProps): React$1.JSX.Element;
    displayName: string;
};

interface SectionSkeletonProps {
    title?: string;
    rows?: number;
}
declare const SectionSkeleton: {
    ({ title, rows }: SectionSkeletonProps): React$1.JSX.Element;
    displayName: string;
};

/**
 * brand.ts — Sentra dynamic theming primitives.
 *
 * Pure utilities: no React, no app context, no bridge dependency.
 * A product imports these and wires its own org-settings fetch,
 * then calls applyBrand() to override the CSS var baseline at runtime.
 *
 * CSS variables written (same set as app/src/components/BrandingProvider.tsx):
 *   --primary              HSL "H S% L%"  — buttons, rings, active states
 *   --brand-primary        HSL "H S% L%"  — alias kept for Situation Room glow
 *   --brand-primary-glow   HSL with +7 lightness — glow variant
 *   --ring                 same as --primary
 *   --sidebar-primary      same as --primary
 *   --sidebar-ring         same as --primary
 *   --ai-glow              same as --primary
 *   --accent-muted         accent HSL with -13 lightness
 *   --logo-url             CSS url("…") string for background-image consumers
 */
/** Returns true for the HSL string form "H S% L%". */
declare function isHSL(value: string): boolean;
/** Returns true for "#RRGGBB" or "#RGB". */
declare function isValidColor(value: string): boolean;
/**
 * Converts "#RRGGBB" or "#RGB" to the HSL string form "H S% L%".
 * Returns an empty string when the input is not a valid hex color.
 */
declare function hexToHSL(hex: string): string;
/**
 * Normalises a hex or HSL value to the "H S% L%" form.
 * Returns null when the value is unrecognised — callers should skip setting
 * the var rather than writing a broken value.
 */
declare function toHSLSafe(color: string): string | null;
/**
 * Nudges the lightness of an "H S% L%" string by `delta` percentage points,
 * clamped to [0, 100].
 */
declare function nudgeL(hsl: string, delta: number): string;
/**
 * SENTRA_BRAND — the platform's own brand tokens.
 *
 * These are the values used when no tenant branding is configured.
 * BrandingProvider applies them on first render so the first paint is always
 * branded; a tenant override writes over them once org-settings resolves.
 */
declare const SENTRA_BRAND: {
    /** Brand primary: Sentra crimson (--primary 345 75% 33%). */
    readonly primaryHex: "#931535";
    /** Brand accent: Tailwind violet-500. */
    readonly accentHex: "#daab4e";
    /** Logo path — products serve this from their own /public directory. */
    readonly logoUrl: "/sentra-logo-full.png";
};
interface BrandTokens {
    /** Hex string ("#RRGGBB") or HSL string ("H S% L%") for the primary color. */
    primaryHex?: string;
    /** Hex string ("#RRGGBB") or HSL string ("H S% L%") for the accent color. */
    accentHex?: string;
    /** Absolute URL or relative path to the org logo image. */
    logoUrl?: string;
}
/**
 * applyBrand — writes brand CSS custom properties directly onto `root`
 * (typically `document.documentElement`).
 *
 * Call this inside a useEffect whenever org-settings data changes.
 * When a field is absent or invalid, the corresponding Sentra default fills
 * the gap — the product always has a styled baseline.
 *
 * @param root      The element to set properties on (usually document.documentElement).
 * @param tokens    The brand tokens from org-settings; all fields are optional.
 */
declare function applyBrand(root: HTMLElement, tokens?: BrandTokens): void;

interface BrandContextValue extends Omit<BrandTokens, 'logoUrl'> {
    /** The resolved primary hex/HSL that is currently active (may be the Sentra default). */
    primaryHex: string;
    /** The resolved accent hex/HSL that is currently active (may be the Sentra default). */
    accentHex: string;
    /**
     * The RAW logo URL the tenant set, or null when none is configured.
     * Intentionally NOT defaulted to the Sentra logo: consumers (AdminLayout,
     * AuthCard) use null to decide "no logo → render the icon mark instead".
     * (operator 2026-06-05: everything was showing /sentra-logo-full.png — the
     * default — instead of the platform icon when no DB logo exists.)
     * The `--logo-url` CSS var (set by applyBrand) still falls back to the Sentra
     * default for pure background-image consumers; this context value does not.
     */
    logoUrl: string | null;
    /** Lucide icon name (e.g. 'ShieldCheck') for the platform mark. Null if unset. */
    iconName: string | null;
    /** Resolved product/platform name (for the sidebar title). Empty if unset. */
    productName: string;
}
/**
 * useBrand — reads the currently-active brand tokens from context.
 *
 * Returns the Sentra defaults when no BrandingProvider is in the tree.
 * Only use this when a component genuinely needs to read the color values
 * (e.g. to pass them to a canvas API). For standard CSS theming the CSS
 * vars (hsl(var(--primary)) etc.) are always preferred.
 */
declare function useBrand(): BrandContextValue;
interface BrandingProviderProps extends BrandTokens {
    /** Lucide icon name for the platform mark (from Fort branding.icon). */
    iconName?: string | null;
    /** Product/platform display name (from Fort branding.product_name_*). */
    productName?: string;
    children: ReactNode;
}
/**
 * BrandingProvider — hot-applies org branding CSS vars and exposes the
 * active tokens via BrandContext.
 *
 * Renders no additional DOM nodes — it is a pure side-effect + context provider.
 *
 * Props (all optional — Sentra defaults fill any missing value):
 *   primaryHex   Hex "#RRGGBB" or HSL "H S% L%" for the brand primary color.
 *   accentHex    Hex "#RRGGBB" or HSL "H S% L%" for the brand accent color.
 *   logoUrl      Absolute URL or relative path to the org logo.
 */
declare const BrandingProvider: {
    ({ primaryHex, accentHex, logoUrl, iconName, productName, children, }: BrandingProviderProps): React$1.JSX.Element;
    displayName: string;
};

/**
 * @prism/ui — shared i18next initialisation
 *
 * Called once by LanguageProvider. Safe to call multiple times (idempotent via
 * `i18n.isInitialized` guard). Defaults to EN so every app boots with zero
 * Arabic strings until the provider explicitly switches to AR.
 *
 * Consumers: import `i18n` from here if direct access is needed; prefer the
 * `useT()` / `useLanguage()` hooks for component-level translation.
 *
 * Rules: Rule 8 (bilingual EN/AR), Rule 16 (Sentra style — client component).
 */

declare const SUPPORTED_LANGUAGES: readonly ["en", "ar"];
type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

interface LanguageContextValue {
    /** Current locale — 'en' | 'ar' */
    language: SupportedLanguage;
    /** Alias used by components ported from the legacy Sentra app */
    lang: SupportedLanguage;
    /** true when language === 'ar' */
    isRTL: boolean;
    /** Switch language. Updates i18next, document.documentElement dir/lang,
     *  caches the choice to localStorage, and calls onLanguageChange. */
    setLanguage: (l: SupportedLanguage) => void;
    /**
     * Seed the language from the Fort profile AFTER login — but ONLY when the user
     * has no cached choice yet. The cached selection (the user's explicit toggle)
     * always wins over profile.lang on reload. Use this instead of setLanguage()
     * for the post-login profile seed so it doesn't clobber a cached preference.
     */
    seedLanguage: (l: SupportedLanguage) => void;
    /**
     * i18next `t()` bound to the current language.
     * Key format: `"namespace:key"` or just `"key"` (uses defaultNS = 'common').
     * Supports interpolation: `t('header:updated', { time: '5 min ago' })`.
     */
    t: (key: string, vars?: Record<string, unknown>) => string;
}
interface LanguageProviderProps {
    children: ReactNode;
    /**
     * Seed language. Defaults to 'en'.
     * Pass `initialLanguage={profile.lang}` post-login to hydrate from Fort
     * profile without a flicker (SSR already sets the cookie; the provider
     * syncs immediately).
     */
    initialLanguage?: SupportedLanguage;
    /**
     * Called whenever the user switches language (or on first mount if
     * initialLanguage differs from the stored preference). Products wire this
     * to `FortProfileClient.patchProfile({ lang })` to persist the choice.
     */
    onLanguageChange?: (lang: SupportedLanguage) => void;
}
/** Cookie name must be colon-free (RFC 6265). Mirrors LANG_STORAGE_KEY. */
declare const LANG_COOKIE_NAME = "sentra_lang";
declare const LanguageProvider: {
    ({ children, initialLanguage, onLanguageChange, }: LanguageProviderProps): React$1.JSX.Element;
    displayName: string;
};

/**
 * useT — primary hook. Returns `{ t, language, setLanguage, isRTL }`.
 * Must be used inside a <LanguageProvider>.
 */
declare const useT: () => LanguageContextValue;
/**
 * useLanguage — alias for useT. Preferred by components that only need
 * `language` / `setLanguage` and don't call `t()`.
 */
declare const useLanguage: () => LanguageContextValue;

/**
 * A2UI artifact types — client-side mirror of cortex/internal/copilot/sse.go A2UIArtifact.
 *
 * Wire contract (version 1, additive):
 *   {"type":"artifact","artifact":{"version":1,"kind":"table|chart|card|actions|markdown",
 *     "title_en":"...","title_ar":"...","data":{...}}}
 *
 * Rule 8: bilingual — both title_en and title_ar carried; renderer picks by language prop.
 * Rule 25: product-agnostic — no fetching, no context reads, pure typed shapes.
 *
 * Adding a new kind: add its data type here, add a case in ArtifactRenderer.tsx.
 * The unknown-kind fallback in ArtifactRenderer renders a labeled JSON <details> block —
 * forward-compatible for future kinds without a consumer upgrade.
 */
/** A column descriptor in an A2UI table artifact. */
interface A2UITableColumn {
    /** Stable accessor key — matches the property names in each row object. */
    key: string;
    /** English column header. */
    label_en: string;
    /** Arabic column header (optional; falls back to label_en). */
    label_ar?: string;
}
/**
 * Data payload for kind: "table". Two wire shapes are accepted (ArtifactTable
 * normalizes both):
 *  - SIMPLE (what the model emits): columns: string[], rows: unknown[][]
 *  - RICH: columns: A2UITableColumn[], rows: Array<Record<string, unknown>>
 */
interface A2UITableData {
    columns: Array<string | A2UITableColumn>;
    rows: Array<Record<string, unknown> | unknown[]>;
}
/** One data series in an A2UI chart. */
interface A2UIChartSeries {
    label_en: string;
    label_ar?: string;
    points: Array<{
        x: string | number;
        y: number;
    }>;
}
/** Data payload for kind: "chart". */
interface A2UIChartData {
    type: 'bar' | 'line' | 'pie';
    series: A2UIChartSeries[];
}
/** One field row in an A2UI card. */
interface A2UICardField {
    label: string;
    value: string | number;
}
/** Data payload for kind: "card". */
interface A2UICardData {
    title_en?: string;
    title_ar?: string;
    body_en?: string;
    body_ar?: string;
    /** Severity level — maps to SeverityChip tokens when provided. */
    severity?: 'critical' | 'high' | 'medium' | 'low';
    /** Key/value detail rows rendered below the body. */
    fields?: A2UICardField[];
}
/** One action item in an A2UI actions artifact. */
interface A2UIActionItem {
    id: string;
    label_en: string;
    label_ar?: string;
    /**
     * When provided, clicking this action sends the prompt as a new user message
     * via the onAction callback. Use this to pre-fill follow-up questions.
     */
    prompt?: string;
}
/** Data payload for kind: "actions". */
interface A2UIActionsData {
    items: A2UIActionItem[];
}
/** Data payload for kind: "markdown". */
interface A2UIMarkdownData {
    content: string;
}
/** One candidate client returned by the discovery tool. */
interface A2UIClientCandidate {
    name: string;
    website_url?: string;
    sector?: string;
    summary?: string;
}
/**
 * Data payload for kind: "client_candidates".
 * Renders a list of candidate clients the user can pick from.
 */
interface A2UIClientCandidatesData {
    candidates: A2UIClientCandidate[];
    /** Optional prompt shown above the list (instruction / clarification). */
    prompt?: string;
}
/** One field entry in a client field picker. */
interface A2UIClientField {
    /** Stable field key (maps to the DB column / API field name). */
    key: string;
    /** English label. */
    label_en: string;
    /** Arabic label (optional; falls back to label_en). */
    label_ar?: string;
    /** Current stored value (may be empty/absent). */
    current?: string;
    /** AI-suggested value for this field. */
    suggested?: string;
}
/**
 * Data payload for kind: "client_field_picker".
 * Lets the user select which fields to fill / confirm before saving.
 */
interface A2UIClientFieldPickerData {
    fields: A2UIClientField[];
}
/** One diff row in a client save confirmation. */
interface A2UIClientDiffRow {
    /** Stable field key. */
    field: string;
    /** English label. */
    label_en: string;
    /** Arabic label (optional). */
    label_ar?: string;
    /** Current stored value (absent = field is new). */
    old?: string;
    /** New / proposed value. */
    new: string;
}
/**
 * Data payload for kind: "client_diff_confirm".
 * Shows a before/after diff the user must confirm before the save is committed.
 */
interface A2UIClientDiffConfirmData {
    /** Dialog title in English. */
    title_en: string;
    /** Dialog title in Arabic (optional). */
    title_ar?: string;
    rows: A2UIClientDiffRow[];
    /** Confirm button label in English. */
    confirm_label_en: string;
    /** Confirm button label in Arabic (optional). */
    confirm_label_ar?: string;
}
/** One opening question / starter for a persona chat. */
interface A2UIPersonaStarter {
    /** English chip label. */
    label_en: string;
    /** Arabic chip label (optional; falls back to label_en). */
    label_ar?: string;
    /** The prompt sent to the copilot when the user clicks this chip. */
    prompt: string;
}
/**
 * Data payload for kind: "persona_starters".
 * Renders suggested opening questions that launch a persona conversation.
 */
interface A2UIPersonaStartersData {
    starters: A2UIPersonaStarter[];
}
/**
 * ArtifactInteraction — a structured post-back emitted by interactive artifact
 * renderers when the user makes a selection or confirms an action.
 *
 * Sent from the renderer → ArtifactRenderer → UnifiedCopilotDock →
 * CopilotProvider.handleArtifactInteract → CopilotRequest.interaction.
 *
 * Kind strings used by the four Phase-3 renderers:
 *   "select_candidate"  — user picked a client candidate
 *   "pick_fields"       — user selected fields to fill/update
 *   "confirm_diff"      — user confirmed (or cancelled) a before/after diff save
 *   "persona_start"     — user clicked a persona opening prompt chip
 *
 * The type is open (string) so future renderers can extend without a breaking
 * change; consumers should handle unknown kinds defensively.
 */
interface ArtifactInteraction {
    kind: 'select_candidate' | 'pick_fields' | 'confirm_diff' | 'persona_start' | string;
    payload: Record<string, unknown>;
}
type A2UIKind = 'table' | 'chart' | 'card' | 'actions' | 'markdown' | 'client_candidates' | 'client_field_picker' | 'client_diff_confirm' | 'persona_starters';
/**
 * A2UIArtifact — the versioned structured artifact the Cortex copilot stream emits.
 *
 * Mirrors internal/copilot/sse.go A2UIArtifact (version 1).
 *
 * `kind` is the rendering discriminator. Renderers pattern-match on it.
 * Unknown kinds are forwarded to the fallback renderer — never crash.
 *
 * `data` is typed per kind. Consumers narrow via `artifact.kind`:
 *
 * ```ts
 * if (artifact.kind === 'table') {
 *   const d = artifact.data as A2UITableData
 * }
 * ```
 */
interface A2UIArtifact$1 {
    /** Schema version. Currently 1. */
    version: number;
    /** Rendering hint: "table" | "chart" | "card" | "actions" | "markdown" | unknown future kinds. */
    kind: string;
    /** Display title in English. */
    title_en?: string;
    /** Display title in Arabic. Fallback to title_en when absent. */
    title_ar?: string;
    /**
     * Kind-specific payload. Cast to the matching A2UI*Data type after narrowing kind.
     * Use `unknown` to stay forward-compatible with future kinds.
     */
    data: unknown;
}

interface ArtifactRendererProps {
    artifact: A2UIArtifact$1;
    /** Fired when the user clicks an "actions" chip — sends item.prompt as a text message. */
    onAction?: (item: A2UIActionItem) => void;
    /**
     * Fired when an interactive artifact (client_candidates, client_field_picker,
     * client_diff_confirm, persona_starters) posts a structured interaction.
     * CopilotProvider wires this to handleArtifactInteract which forwards the
     * interaction to the dispatch request and suppresses the user bubble.
     */
    onInteract?: (interaction: ArtifactInteraction) => void;
    language?: 'en' | 'ar';
    dir?: 'ltr' | 'rtl';
}
declare const ArtifactRenderer: {
    ({ artifact, onAction, onInteract, language, dir, }: ArtifactRendererProps): React$1.JSX.Element;
    displayName: string;
};

interface ArtifactTableProps {
    data: A2UITableData;
    language?: 'en' | 'ar';
    dir?: 'ltr' | 'rtl';
}
declare const ArtifactTable: {
    ({ data, language, dir }: ArtifactTableProps): React$1.JSX.Element;
    displayName: string;
};

interface ArtifactChartProps {
    data: A2UIChartData;
    language?: 'en' | 'ar';
    dir?: 'ltr' | 'rtl';
}
declare const ArtifactChart: {
    ({ data, language }: ArtifactChartProps): React$1.JSX.Element;
    displayName: string;
};

interface ArtifactCardProps {
    data: A2UICardData;
    /** Outer artifact title (title_en / title_ar from the A2UIArtifact envelope). */
    artifactTitle?: string;
    language?: 'en' | 'ar';
    dir?: 'ltr' | 'rtl';
}
declare const ArtifactCard: {
    ({ data, artifactTitle, language, dir }: ArtifactCardProps): React$1.JSX.Element;
    displayName: string;
};

interface ArtifactActionsProps {
    data: A2UIActionsData;
    /** Called when the user clicks an action chip. */
    onAction?: (item: A2UIActionItem) => void;
    language?: 'en' | 'ar';
    dir?: 'ltr' | 'rtl';
}
declare const ArtifactActions: {
    ({ data, onAction, language, dir }: ArtifactActionsProps): React$1.JSX.Element | null;
    displayName: string;
};

interface ArtifactMarkdownProps {
    data: A2UIMarkdownData;
    language?: 'en' | 'ar';
    dir?: 'ltr' | 'rtl';
}
declare const ArtifactMarkdown: {
    ({ data, language, dir }: ArtifactMarkdownProps): React$1.JSX.Element | null;
    displayName: string;
};

interface ArtifactClientCandidatesProps {
    data: A2UIClientCandidatesData;
    /** Fired when the user selects a candidate. Carries a "select_candidate" interaction. */
    onInteract?: (interaction: ArtifactInteraction) => void;
    language?: 'en' | 'ar';
    dir?: 'ltr' | 'rtl';
}
declare const ArtifactClientCandidates: {
    ({ data, onInteract, language, dir, }: ArtifactClientCandidatesProps): React$1.JSX.Element | null;
    displayName: string;
};

interface ArtifactClientFieldPickerProps {
    data: A2UIClientFieldPickerData;
    /** Fired when the user confirms the selected fields. Carries a "pick_fields" interaction. */
    onInteract?: (interaction: ArtifactInteraction) => void;
    language?: 'en' | 'ar';
    dir?: 'ltr' | 'rtl';
}
declare const ArtifactClientFieldPicker: {
    ({ data, onInteract, language, dir, }: ArtifactClientFieldPickerProps): React$1.JSX.Element | null;
    displayName: string;
};

interface ArtifactClientDiffConfirmProps {
    data: A2UIClientDiffConfirmData;
    /** Fired when the user confirms or cancels the diff. Carries a "confirm_diff" interaction. */
    onInteract?: (interaction: ArtifactInteraction) => void;
    language?: 'en' | 'ar';
    dir?: 'ltr' | 'rtl';
}
declare const ArtifactClientDiffConfirm: {
    ({ data, onInteract, language, dir, }: ArtifactClientDiffConfirmProps): React$1.JSX.Element | null;
    displayName: string;
};

interface ArtifactPersonaStartersProps {
    data: A2UIPersonaStartersData;
    /** Fired when the user clicks a starter chip. Carries a "persona_start" interaction. */
    onInteract?: (interaction: ArtifactInteraction) => void;
    language?: 'en' | 'ar';
    dir?: 'ltr' | 'rtl';
}
declare const ArtifactPersonaStarters: {
    ({ data, onInteract, language, dir, }: ArtifactPersonaStartersProps): React$1.JSX.Element | null;
    displayName: string;
};

/**
 * Intel component types — shared type definitions for the IntelCard family,
 * ScopeGauge, ScopesAtAGlance, and FeedHeader.
 *
 * Design rules:
 *   - Rule 8  — bilingual (EN/AR): all user-facing text fields carry _en / _ar pairs
 *   - Rule 25 — product-agnostic: pure rendering types, no fetching, no context reads
 *   - Rule 26 — video = metadata only (URL + poster + permalink; never embedded player)
 */
type IntelSeverity = 'critical' | 'high' | 'medium' | 'low';

interface SeverityChipProps {
    severity: IntelSeverity;
    /** Scope/region name shown as a neutral secondary tag beside the badge */
    scopeName?: string;
    language?: 'en' | 'ar';
    className?: string;
}
declare const SeverityChip: {
    ({ severity, scopeName, language, className }: SeverityChipProps): React$1.JSX.Element;
    displayName: string;
};

interface MarkdownContentProps {
    /** Markdown source — typically an assistant chat message. */
    content: string;
    /**
     * Text direction. Drives RTL-safe layout (logical padding on lists and
     * blockquotes flips automatically; code blocks stay LTR regardless).
     * Defaults to 'ltr'.
     */
    dir?: 'ltr' | 'rtl';
    /** Extra classes merged onto the wrapper. */
    className?: string;
}
/**
 * MarkdownContent
 *
 * Shared markdown renderer for assistant chat messages (copilot dock, chat
 * thread, project chat). GFM enabled (tables, strikethrough, task lists,
 * autolinks).
 *
 * Security: `skipHtml` — raw HTML in the markdown source is never rendered,
 * so no sanitizer is needed; links open in a new tab with rel="noopener".
 *
 * User messages should stay plain text — only assistant output goes through
 * this component.
 */
declare const MarkdownContent: {
    ({ content, dir, className }: MarkdownContentProps): React$1.JSX.Element;
    displayName: string;
};

/** Issue lifecycle status. Lowercase string values mirror the SDK / DB enum. */
type IssueStatus = "todo" | "in_progress" | "blocked" | "ready_for_review" | "done";
/** Issue kind. `change` doubles as a feature request (carries the upvotes). */
type IssueType = "bug" | "change" | "question" | "discussion";
/** Issue priority. Color-coded AND text-labelled (a11y: never color-only). */
type IssuePriority = "low" | "normal" | "high" | "critical";
/** Who reported the issue — an authed hub user or an external/anonymous SDK reporter. */
type IssueReporterKind = "user" | "external";
/** A person reference (reporter / assignee / comment author). */
interface IssuePerson {
    id: string;
    /** Pre-resolved display name (the host chooses EN/AR before passing it). */
    name: string;
    avatarUrl?: string | null;
    kind?: IssueReporterKind;
    /** Only set for external reporters. */
    email?: string | null;
}
/** A stored attachment on an issue (image / pdf). URL is host-provided. */
interface IssueAttachment {
    /** Download URL (https) supplied by the host's upload endpoint. */
    url: string;
    /** Original file name. */
    name: string;
    /** MIME type. */
    contentType: string;
    /** Size in bytes. */
    size?: number;
    /** Pixel dimensions (images only). */
    width?: number;
    height?: number;
}
/** A comment on an issue. `body` is markdown/plain text (host decides rendering). */
interface IssueComment {
    id: string;
    author: IssuePerson | null;
    /** Comment body (markdown). Components render it as plain text by default; a
     *  host may pass a `renderBody` prop to plug in its own markdown renderer. */
    body: string;
    createdAt: string;
}
/** Where on the page an issue was pinned by the reporter's element picker.
 *  Mirrors the SDK anchor shape exactly so Motor's SDK + these components agree. */
interface IssueAnchor {
    /** CSS selector of the pinned element (primary anchor). */
    selector?: string;
    /** window scroll offset at pin time (fallback when the selector no longer matches). */
    scrollY: number;
    /** First ~80 chars of the pinned element's text, for human context. */
    hint?: string;
    /** Full URL at pin time (incl. query/hash) — restores tab/panel state. */
    href?: string;
}
/** Lightweight per-card aggregate counts (drives the card footer icons). */
interface IssueCounts {
    comments?: number;
    attachments?: number;
    children?: number;
}
/** The full issue shape consumed by the board / card / drawer / detail view.
 *  A host maps its `/api/issues/v1` rows onto this; every field the components
 *  read is here, so there is no hidden data dependency. */
interface Issue {
    id: string;
    /** Human-facing sequential number (#123). */
    number: number;
    title: string;
    description?: string | null;
    type: IssueType;
    status: IssueStatus;
    priority: IssuePriority;
    /** Optional area/component tag (e.g. "auth", "billing"). */
    area?: string | null;
    /** Route the issue was filed against (normalized pathname). */
    route?: string | null;
    /** Page-pin anchor (from the SDK element picker). */
    anchor?: IssueAnchor | null;
    reporter?: IssuePerson | null;
    assignee?: IssuePerson | null;
    /** Board ordering rank (lexicographic). Used to sort within a status column. */
    boardRank?: string;
    voteCount?: number;
    votedByMe?: boolean;
    counts?: IssueCounts;
    comments?: IssueComment[];
    attachments?: IssueAttachment[];
    createdAt: string;
    updatedAt?: string;
}

type Language = "en" | "ar";

/**
 * FeedbackButton — the trigger that opens the feedback hub / new-issue flow.
 *
 * Pure + product-agnostic (Rule 25): it renders a button and calls `onOpen` (or
 * `onClick`) — it owns no modal, no portal, no fetch. The host decides what
 * opening means (mount a FeedbackHub, open a NewIssueModal, etc.). Two layouts:
 * `variant="floating"` (a fixed FAB pinned to the inline-end / bottom corner,
 * RTL-aware) and `variant="inline"` (a compact toolbar/nav button). Bilingual
 * via `language` (Rule 8); token-clean (Rule 16).
 *
 * Props contract:
 *  - onOpen() | onClick(): fired when pressed (onOpen preferred; onClick alias)
 *  - language: 'en' | 'ar' — picks the "Feedback" label
 *  - variant:  'floating' (default) | 'inline'
 *  - count:    optional unread/open badge count
 *  - label:    optional override of the default "Feedback" text
 */
declare const feedbackButtonVariants: (props?: ({
    variant?: "inline" | "floating" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type FeedbackButtonProps = React$1.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof feedbackButtonVariants> & {
    onOpen?: () => void;
    language?: Language;
    /** Optional open/unread count rendered as a small badge. */
    count?: number;
    /** Optional label override (default: "Feedback" / "ملاحظات"). */
    label?: string;
};
declare const FeedbackButton: React$1.ForwardRefExoticComponent<React$1.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<(props?: ({
    variant?: "inline" | "floating" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & {
    onOpen?: () => void;
    language?: Language;
    /** Optional open/unread count rendered as a small badge. */
    count?: number;
    /** Optional label override (default: "Feedback" / "ملاحظات"). */
    label?: string;
} & React$1.RefAttributes<HTMLButtonElement>>;

/**
 * FeedbackHub — the reporter's feedback slide-over: the list of issues they have
 * filed (optionally scoped to the current route) plus a "Report something new"
 * entry. This is the lightweight reporter surface (distinct from the full manager
 * IssueBoard): a reporter opens it from a FeedbackButton to see their open items
 * and file a new one.
 *
 * Pure + product-agnostic (Rule 25): `issues` + the current `route` arrive as
 * props; selecting an item or starting a new report just fires `onSelectIssue` /
 * `onNewIssue`. No fetch, no portal beyond the @prism/ui Sheet (which is
 * RTL-aware). Bilingual via `language` (Rule 8); token-clean (Rule 16).
 *
 * Props contract:
 *  - open / onOpenChange:  controlled visibility
 *  - issues:    Issue[] filed by this reporter (host-supplied)
 *  - language:  'en' | 'ar'
 *  - route:     optional current route — when set, shows a "this page" group first
 *  - loading:   host-driven loading flag → skeleton rows
 *  - onNewIssue():        start a new report
 *  - onSelectIssue(id):   open an existing issue's detail
 *  - title:     optional header override (default "Feedback")
 */
type FeedbackHubProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    issues: Issue[];
    language?: Language;
    route?: string;
    loading?: boolean;
    onNewIssue?: () => void;
    onSelectIssue?: (id: string) => void;
    title?: string;
};
declare const FeedbackHub: {
    ({ open, onOpenChange, issues, language, route, loading, onNewIssue, onSelectIssue, title, }: FeedbackHubProps): React$1.JSX.Element;
    displayName: string;
};

/**
 * MotorFeedbackLauncher — the ONE shared feedback launcher for every Sentra
 * product dashboard (Sentra hub, Scout, Cortex, Fort, Axon).
 *
 * It loads the shared Motor feedback SDK (@sentra/motor-feedback, served as a
 * static bundle at `sdkSrc`, default /motor-feedback.js) and mounts its
 * FeedbackHub on this floating trigger. ALL feedback behaviour — the report
 * form, element anchor, client-side screenshot, attachments, and the POST to
 * Motor's /api/issues/v1 surface — lives in the Motor SDK. No product
 * reimplements the feedback form or transport (operator decision 2026-06-14:
 * "feedback must extend the Motor SDK, not be custom per product").
 *
 * The FAB is DRAGGABLE: press-and-drag moves it anywhere on screen and the
 * position is cached in localStorage (per project), so it survives reloads. A
 * drag is distinguished from a click by a small movement threshold — a real
 * click still opens the feedback panel; a drag does not.
 *
 * Why the SDK over a bespoke modal: the SDK renders its panel inside a Shadow
 * DOM mounted on <body>, so it sits on the top stacking layer — immune to the
 * host app's z-index / transformed ancestors (the old bespoke launcher rendered
 * *behind* the header). This trigger button also carries a very high z-index so
 * the FAB itself floats over all app UI.
 *
 * Product-agnostic (Rule 25): no app context, no fetch here — `project`,
 * `publishableKey` (Motor DSN public key), `apiBase`, and `language` all arrive
 * as props. Renders nothing when `project`/`publishableKey` are empty (Motor
 * optional → host stays standalone). Bilingual (Rule 8); token-clean (Rule 16).
 */
type SdkIssueType = "bug" | "change" | "question" | "discussion";
type FeedbackHubHandle = {
    open(): void;
    close(): void;
    refresh(): void;
    destroy(): void;
};
type MotorFeedbackSdk = {
    mountFeedbackHub(opts: {
        trigger: Element;
        project: string;
        publishableKey: string;
        apiBase: string;
        theme?: "light" | "dark" | "auto";
        defaultType?: SdkIssueType;
        title?: string;
        reporterEmail?: string;
        reporterName?: string;
    }): FeedbackHubHandle;
};
declare global {
    interface Window {
        MotorFeedback?: MotorFeedbackSdk;
    }
}
type MotorFeedbackLauncherProps = {
    /** Motor project slug, e.g. "sentra" | "scout" | "cortex" | "fort" | "axon". */
    project: string;
    /** Motor DSN public key, e.g. "motor-sentra-dev-key" (NEXT_PUBLIC_MOTOR_DSN). */
    publishableKey: string;
    /** Motor issues API base, e.g. http://localhost:8215/api/issues/v1. */
    apiBase: string;
    language?: Language;
    /** Where the Motor SDK bundle is served. Default: /motor-feedback.js */
    sdkSrc?: string;
    theme?: "light" | "dark" | "auto";
    defaultType?: SdkIssueType;
    /** Pre-fill the reporter identity when the host knows the signed-in user. */
    reporterEmail?: string;
    reporterName?: string;
    /** Optional FAB label override (default: "Feedback" / "ملاحظات"). */
    label?: string;
};
declare const MotorFeedbackLauncher: React$1.FC<MotorFeedbackLauncherProps>;

interface PickedElement {
    selector: string;
    tag: string;
    text?: string;
}
type FeedbackKind = "bug" | "idea" | "question";
interface FeedbackItem {
    id: string;
    kind: FeedbackKind;
    comment: string;
    element?: PickedElement;
    createdAt: string;
}
interface FeedbackWidgetProps {
    /** Existing items to show in the list. */
    items?: FeedbackItem[];
    /** Called when a new item is submitted (the host persists it). */
    onSubmit?: (item: Omit<FeedbackItem, "id" | "createdAt">) => void;
    onDelete?: (id: string) => void;
    language?: "en" | "ar";
    /** Hide the floating button and control open state externally. */
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    className?: string;
}
declare function FeedbackWidget({ items, onSubmit, onDelete, language, open: openProp, onOpenChange, className, }: FeedbackWidgetProps): React$1.JSX.Element;

interface ModelOption {
    value: string;
    label?: string;
}
interface SectionModel {
    id: string;
    title: string;
    badge?: string;
    /** AI prompt that powers this section (edited in edit mode). */
    prompt?: string;
    /** Selected model id. */
    model?: string;
    /** Arbitrary key/value settings. */
    settings?: Record<string, string>;
    /** Rendered content in view mode. */
    content?: React$1.ReactNode;
}
interface DynamicSectionProps {
    section: SectionModel;
    editMode?: boolean;
    models?: ModelOption[];
    language?: "en" | "ar";
    onChange?: (section: SectionModel) => void;
    onRemove?: () => void;
    /** Drag handle props (supplied by SectionBoard in edit mode). */
    handleProps?: React$1.HTMLAttributes<HTMLButtonElement>;
    className?: string;
}
declare function DynamicSection({ section, editMode, models, language, onChange, onRemove, handleProps, className, }: DynamicSectionProps): React$1.JSX.Element;
interface SectionBoardProps {
    sections: SectionModel[];
    editMode?: boolean;
    models?: ModelOption[];
    language?: "en" | "ar";
    columns?: 1 | 2;
    onChange?: (sections: SectionModel[]) => void;
    onAddSection?: () => void;
    className?: string;
}
/** SectionBoard — an ordered set of dynamic sections. In `editMode` each section is
 * drag-reorderable (@dnd-kit) and editable (prompt / model / settings via a dialog);
 * `onChange` fires on reorder and on per-section edits. View mode renders content only.
 * Token-themed (dark/light), RTL + EN/AR. */
declare function SectionBoard({ sections, editMode, models, language, columns, onChange, onAddSection, className, }: SectionBoardProps): React$1.JSX.Element;

declare function cn(...inputs: ClassValue[]): string;

interface CopilotRequest {
    [key: string]: any;
    attachments?: unknown[];
    intelligenceContext?: {
        data_summary?: string;
        [key: string]: unknown;
    };
}
interface CopilotEvent {
    type?: string;
    [key: string]: any;
}
/** The streaming client the host injects into CopilotProvider. */
interface CopilotClient {
    copilotDispatch(req: CopilotRequest, opts?: {
        signal?: AbortSignal;
    }): AsyncIterable<CopilotEvent>;
}

interface AgentStep {
    step: string;
    message: string;
    query?: string;
    subQuery?: string;
    count?: number;
    highQuality?: number;
    citations?: string[];
    sources?: string[];
    domains?: string[];
    handles?: string[];
    duration_ms?: number;
    done?: boolean;
}
interface ArtifactPayload {
    controller_slug: string;
    title?: string;
    title_ar?: string;
    data: unknown;
}
interface A2UIArtifact {
    version: number;
    kind: string;
    title_en?: string;
    title_ar?: string;
    data: unknown;
}
interface CopilotMessage {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    content_ar?: string;
    /** Whether the user message should be hidden (insight-trigger bubbles) */
    hidden?: boolean;
    steps?: AgentStep[];
    citations?: Array<{
        number: number;
        title: string;
        slug: string;
        type: string;
        description?: string;
    }>;
    briefing?: Record<string, unknown>;
    /** Legacy controller-slug artifacts (ArtifactViewer). */
    artifacts?: ArtifactPayload[];
    /**
     * A2UI structured artifacts from the Cortex SSE stream (phase 4).
     * A single message may carry multiple artifacts (emitted before [DONE]).
     * Rendered by ArtifactRenderer below the message text in the dock.
     */
    a2uiArtifacts?: A2UIArtifact[];
}
interface ForcedTools {
    search?: boolean;
    search_sources?: string[];
    deep_research?: boolean;
}
interface SendOptions {
    thinkingMode?: boolean;
    insight?: boolean;
    hideUserMessage?: boolean;
    forcedTools?: ForcedTools;
    attachments?: Array<{
        url?: string;
        data?: string;
        name: string;
        type: string;
    }>;
    /**
     * Structured interaction post-back from an interactive artifact renderer.
     * When set, CopilotProvider attaches it to the CopilotRequest.interaction
     * field so the backend can dispatch on the structured payload rather than
     * the synthesised text message. The user bubble is suppressed via hideUserMessage.
     */
    interaction?: {
        kind: string;
        payload: Record<string, unknown>;
    };
}
interface CopilotChatState {
    messages: CopilotMessage[];
    streamingText: string;
    isReceiving: boolean;
    isLoading: boolean;
    isStreaming: boolean;
    agentSteps: AgentStep[];
    streamError: string | null;
    inputValue: string;
    onInputChange: (value: string) => void;
    onSend: (text: string, opts?: SendOptions) => void;
    onStop?: () => void;
    onRetry: () => void;
    onNewConversation: () => void;
    conversationTitle?: string;
    conversationId?: string;
    conversationHistory?: Array<{
        id: string;
        title: string;
        updated_at: string;
        context_label?: string;
    }>;
    onLoadConversation?: (id: string) => void;
    onFetchHistory?: () => Promise<Array<{
        id: string;
        title: string;
        updated_at: string;
        context_label?: string;
    }>>;
    onDeleteConversation?: (id: string) => Promise<void>;
    loadedContextType?: string;
    loadedContextRef?: string;
    loadedContextLabel?: string;
    loadedCreatedAt?: string;
    loadedUpdatedAt?: string;
    effectiveMode?: string;
}
/**
 * A suggestion chip. Either a plain string (back-compat — same text in both
 * languages) or a bilingual pair so the dock can render the right language.
 */
type CopilotSuggestion = string | {
    en: string;
    ar: string;
};
interface CopilotDockContext {
    type: string;
    contextRef: string;
    title: string;
    mode: string;
    systemContext?: Record<string, unknown>;
    suggestions: CopilotSuggestion[];
    entityImageUrl?: string | null;
}

/**
 * CopilotProvider — @prism/ui F3
 *
 * Context provider that wires UnifiedCopilotDock to the cortex-sdk
 * CortexClient.copilotDispatch() SSE stream. Apps mount this once at their
 * root (or inside LanguageProvider) and call useCopilot() anywhere to
 * open/close the dock.
 *
 * Wave B additions (2026-06-06):
 *   B1 — Fetches /v1/copilot/config on mount; exposes allowedAgents as dynamic
 *        personas list and allowedTools/allowedSkills for the dock panels.
 *        Falls back to empty/undefined when Cortex is unreachable (nil-safe).
 *   B2 — allowedTools + allowedSkills passed to dock via new prop.
 *   B3 — AR suggestions already fixed (bilingual pair shape). Provider default
 *        suggestions are now bilingual.
 *   B4 — pageContext prop forwarded into CopilotRequest.intelligenceContext.data_summary.
 *
 * Architecture:
 *   - Provider manages CopilotChatState (messages, streaming, error).
 *   - onSend → CortexClient.copilotDispatch() → async generator → state updates.
 *   - Language comes from the shared LanguageProvider context so the copilot
 *     always answers in the active locale (EN/AR).
 *   - cortex-sdk is a pure fetch/SSE SDK — no React dependency. Safe in any
 *     runtime (browser, Node 18+, edge).
 *
 * Error handling (Rule 14 spirit):
 *   - Network / Cortex unreachable → streamError shown in dock; no crash.
 *   - Each SSE turn is wrapped in try/catch/finally so state always resolves.
 *
 * Rules: Rule 7 (displayName), Rule 8 (bilingual), Rule 16 (Sentra style),
 *        Rule 25 (product-agnostic — no product DB/context reads).
 */

interface CopilotConfigTool {
    slug: string;
    name: string;
    name_ar?: string;
    function_name?: string;
}
interface CopilotConfigSkill {
    slug: string;
    name: string;
    name_ar?: string;
}
interface CopilotConfigAgent {
    slug: string;
    name: string;
    /** Arabic name. The Go config handler currently returns only `name` (EN).
     *  When the server starts emitting this field it will be picked up automatically.
     *  Until then, CopilotProvider falls back to the AGENT_AR_NAMES map below.
     */
    name_ar?: string;
}
/**
 * Token-scoped branding the dashboard/SDK applies to the copilot dock.
 * Forwarded verbatim from cortex_api_keys.capabilities.branding (config_handler.go).
 * All fields optional — an empty object means "use the dock defaults".
 */
interface CopilotBranding {
    /** Dock header title (EN). Overrides the default "Copilot". */
    title?: string;
    /** Dock header title (AR). */
    titleAr?: string;
    /** Accent colour (CSS colour string) applied to the dock's primary surfaces. */
    primaryColor?: string;
    /** Input placeholder (EN). */
    placeholder?: string;
    /** Input placeholder (AR). */
    placeholderAr?: string;
}
/**
 * Token-scoped UI toggles. Forwarded from capabilities.ui. Each defaults to
 * "shown" when undefined so an unconfigured token keeps the full surface.
 */
interface CopilotUIConfig {
    /** Show the in-dock Tools panel + / command tools group. Default true. */
    showTools?: boolean;
    /** Show the in-dock Skills panel + / command skills group. Default true. */
    showSkills?: boolean;
    /** Show the @ agent/persona menu + picker. Default true. */
    showAgents?: boolean;
}
interface CopilotConfig {
    allowed_tools: CopilotConfigTool[];
    allowed_skills: CopilotConfigSkill[];
    allowed_agents: CopilotConfigAgent[];
    allowed_mcp: unknown[];
    branding: CopilotBranding;
    ui: CopilotUIConfig;
    limits: {
        rate_per_min: number | null;
        monthly_budget: string | null;
        hard_cap: string | null;
    };
}
/**
 * Options accepted by `useCopilot().open()`.
 *
 * Backwards-compatible: bare `open()` (no args) still works unchanged.
 */
interface OpenCopilotOptions {
    /**
     * Pre-fill the dock input with this message text.
     * When autoSend is false (default), the text is placed in the input field
     * and focus is moved to it so the user can review before sending.
     */
    message?: string;
    /**
     * When true, the message is sent automatically as soon as the dock opens,
     * without user confirmation. Use for smart-action "اسأل" flows where the
     * intent is clear from the card context.
     */
    autoSend?: boolean;
}
interface CopilotContextValue {
    /**
     * Open the copilot dock.
     *
     * @example bare open (no pre-load)
     * ```tsx
     * const { open } = useCopilot()
     * <button onClick={() => open()}>Copilot</button>
     * ```
     *
     * @example pre-fill input
     * ```tsx
     * open({ message: `اشرح هذا الخبر: ${card.title_ar}` })
     * ```
     *
     * @example auto-send
     * ```tsx
     * open({ message: `اشرح هذا الخبر: ${card.title_ar}`, autoSend: true })
     * ```
     */
    open: (opts?: OpenCopilotOptions) => void;
    /** Close the copilot dock */
    close: () => void;
    /** Whether the dock is currently open/expanded */
    isOpen: boolean;
    /** Token-scoped config (null while loading or when Cortex is unreachable) */
    config: CopilotConfig | null;
}
interface CopilotProviderProps {
    children: ReactNode;
    /**
     * Cortex base URL. Defaults to '/api/v1'.
     * Apps that proxy Cortex through Next.js rewrites pass the rewrite path here
     * (e.g. '/api/cortex'). Apps with a separate Cortex service pass the full
     * service URL (e.g. 'http://cortex:8210').
     */
    baseUrl?: string;
    /**
     * Optional Cortex API token (Bearer). When apps proxy Cortex via cookie-auth
     * (Next.js middleware attaches the token server-side) the token can be omitted.
     * When a raw token is available client-side, pass it here.
     */
    token?: string;
    /** Streaming client (replaces the cortex-sdk). Without it the dock renders but cannot dispatch. */
    client?: CopilotClient;
    /**
     * Page-level context fed to the copilot dock (type, title, suggestions, etc.).
     * Defaults to a generic "global" context. Apps update this by re-rendering
     * the provider with different context (or by wrapping per-page sub-sections).
     */
    context?: CopilotDockContext;
    /**
     * Start the dock in an open/expanded state. Defaults to false.
     */
    defaultOpen?: boolean;
    /**
     * B4: Optional markdown description of the current page. When set, the copilot
     * receives it as intelligenceContext.data_summary in every dispatch so it
     * "understands the current page" without the user having to explain.
     *
     * Apps update this prop on navigation to keep the context current.
     *
     * Example: "User is on the Plugins page. 13 plugins are loaded. Active types:
     * tool, skill, agent. The user can enable/disable plugins here."
     */
    pageContext?: string;
}
declare const CopilotProvider: {
    ({ children, baseUrl, token, context, defaultOpen, pageContext, client: injectedClient, }: CopilotProviderProps): React__default.JSX.Element;
    displayName: string;
};
/**
 * useCopilot — consume the copilot context.
 *
 * Returns `{ open, close, isOpen, config }`.
 * Must be used inside a <CopilotProvider>.
 *
 * @example
 * ```tsx
 * const { open } = useCopilot()
 * <button onClick={open}>Ask AI</button>
 * ```
 */
declare const useCopilot: () => CopilotContextValue;

type SlugChecker = (table: 'entities' | 'alerts' | 'narratives' | 'events', slugs: string[]) => Promise<string[]>;

interface UnifiedCopilotDockProps {
    /**
     * The chat state seam. The product creates this from its useCopilotChat hook
     * (Sentra) or its own streaming hook (Cortex, Scout). This is the ONLY API
     * surface that touches actual streaming/network logic.
     */
    chatState: CopilotChatState;
    /** Page-level context (type, title, suggestions) */
    context: CopilotDockContext;
    /**
     * UI language — 'en' or 'ar'. The product reads this from its LanguageContext
     * and passes it here. No context import needed in this component.
     */
    language?: 'en' | 'ar';
    /**
     * Navigation callback. Called with an absolute path when the user clicks
     * an internal link (context badge, citation, entity chip, etc.).
     * The product wires this to router.push (Next.js) or window.location.href.
     */
    onNavigate?: (path: string) => void;
    /**
     * Optional: batch slug-check for ChatStructuredData.
     * When omitted, all slugs are assumed valid.
     */
    onCheckSlugs?: SlugChecker;
    /**
     * Optional: navigate to the full-page chat view.
     * Called when the user clicks the Maximize button.
     */
    onExpandToFullPage?: () => void;
    /** Pre-fill the input with this text */
    pendingMessage?: string | null;
    /** If true, auto-send pendingMessage instead of just filling the input */
    pendingAutoSend?: boolean;
    /** Called once the pending message has been consumed */
    onPendingMessageConsumed?: () => void;
    /** Quick-action chips shown after the first insight response */
    followUpChips?: string[];
    /** Start the dock in expanded state */
    defaultExpanded?: boolean;
    /** Assistant greeting shown above suggestion chips when chat is empty */
    seedGreeting?: string;
    /** Called when user closes/collapses the dock */
    onClose?: () => void;
    /**
     * Optional: persona list override.
     * Defaults to analyst/strategist/advisor. Pass empty array to hide the picker.
     */
    personas?: Array<{
        id: string;
        label: string;
        labelAr: string;
        icon?: string;
    }>;
    /**
     * Token-scoped allowed tools (from /v1/copilot/config). Drives the Tools panel
     * + the `/` command menu. Undefined = no token restriction (panel hidden or
     * uses defaults). Each item: { slug, name, function_name? }.
     */
    allowedTools?: Array<{
        slug: string;
        name: string;
        function_name?: string;
    }>;
    /**
     * Token-scoped allowed skills (from /v1/copilot/config). Drives the Skills
     * panel + the `/` command menu's activate-skill entries. Undefined = none.
     */
    allowedSkills?: Array<{
        slug: string;
        name: string;
    }>;
    /**
     * B4: Optional markdown description of the current page. The dock stores
     * this and CopilotProvider injects it as intelligenceContext.data_summary.
     * For direct-mount consumers using their own chatState, wire page context
     * through their own send path. This prop is accepted but not auto-forwarded
     * from the dock itself (provider handles it).
     */
    pageContext?: string;
    /**
     * E: token-scoped branding (from /v1/copilot/config.branding). Optional —
     * an omitted/empty object keeps the dock defaults. Backwards-compatible.
     */
    branding?: {
        title?: string;
        titleAr?: string;
        primaryColor?: string;
        placeholder?: string;
        placeholderAr?: string;
    };
    /**
     * E: token-scoped UI toggles (from /v1/copilot/config.ui). Each defaults to
     * shown when undefined, so an unconfigured token keeps the full surface.
     */
    uiConfig?: {
        showTools?: boolean;
        showSkills?: boolean;
        showAgents?: boolean;
    };
    /**
     * A2UI: callback fired when the user clicks an action chip in an ArtifactActions
     * artifact. The item.prompt (when set) should be sent as a new user message.
     * CopilotProvider wires this automatically — direct mount consumers may pass
     * their own handler here.
     *
     * When omitted the dock provides a default that calls chatState.onSend(item.prompt).
     */
    onArtifactAction?: (item: A2UIActionItem) => void;
    /**
     * Phase-3 structured interaction channel. Fired when the user interacts with
     * a client_candidates, client_field_picker, client_diff_confirm, or
     * persona_starters artifact. The interaction carries a kind discriminator and
     * a structured payload — no free-text echo.
     *
     * CopilotProvider wires this to handleArtifactInteract (attaches the
     * interaction to the dispatch request, suppresses the user bubble).
     * Direct mount consumers may provide their own handler.
     *
     * When omitted the dock falls back to sending a synthesised hidden message
     * via chatState.onSend with { hideUserMessage: true, interaction }.
     */
    onArtifactInteract?: (interaction: ArtifactInteraction) => void;
}
/**
 * UnifiedCopilotDock
 *
 * Floating AI copilot dock (collapsed bar / expanded panel). Supports three
 * dock positions (bottom, left, right), streaming agent steps, structured data
 * blocks, compare-factors cards, attachment uploads, thinking-mode toggle, and
 * conversation history.
 *
 * ALL app-specific dependencies removed:
 *  - useCopilotChat  → chatState prop (CopilotChatState seam)
 *  - useAuth         → removed (no user avatar needed in shared lib)
 *  - useLanguage     → language prop
 *  - useRouter       → onNavigate / onExpandToFullPage props
 *  - bridge          → onCheckSlugs prop (ChatStructuredData seam)
 *  - Mode type       → plain string in CopilotDockContext
 *  - AuthImage       → plain <img> or omitted
 */
declare const UnifiedCopilotDock: {
    ({ chatState, context, language: languageProp, onNavigate, onCheckSlugs, onExpandToFullPage, pendingMessage, pendingAutoSend, onPendingMessageConsumed, followUpChips, defaultExpanded, seedGreeting, onClose, personas, allowedTools, allowedSkills, branding, uiConfig, pageContext: _pageContext, onArtifactAction, onArtifactInteract, }: UnifiedCopilotDockProps): React__default.JSX.Element;
    displayName: string;
};

/**
 * CopilotLauncher — @prism/ui F3
 *
 * A composable button that calls useCopilot().open(). Two variants:
 *
 *   variant="fab"     — floating action button (fixed bottom-right, z-40).
 *                       Good for apps without a header slot.
 *   variant="header"  — compact icon+label button for embedding in AppHeader's
 *                       right cluster or any nav bar.
 *
 * Bilingual label from the shared 'nav:copilot' key (EN: "Copilot", AR: "المساعد الذكي").
 * Language follows the shared LanguageProvider context automatically.
 *
 * Rules: Rule 7 (displayName, handle* events), Rule 8 (bilingual),
 *        Rule 16 (Sentra style — Tailwind tokens only).
 */

interface CopilotLauncherProps {
    /**
     * "fab"    — floating action button (position: fixed, bottom-right).
     * "header" — compact icon+label for embedding in a top-nav cluster.
     * Default: "header".
     */
    variant?: 'fab' | 'header';
    /** Additional Tailwind classes */
    className?: string;
    /**
     * Override label (skips the i18n lookup). Useful when the consuming app
     * has its own translation layer and wants to pass a pre-resolved string.
     */
    label?: string;
}
declare const CopilotLauncher: {
    ({ variant, className, label, }: CopilotLauncherProps): React__default.JSX.Element;
    displayName: string;
};

interface ThreadMessage {
    id: string;
    role: 'user' | 'assistant';
    /** English content — always present */
    text_en: string;
    /** Arabic content — used when language === 'ar' */
    text_ar?: string;
    /** Legacy controller-slug artifacts (ArtifactViewer). */
    artifacts?: ArtifactPayload[];
    /** A2UI structured artifacts from the Cortex SSE stream (table/chart/card/…). */
    a2uiArtifacts?: A2UIArtifact[];
}
interface ChatThreadProps {
    messages: ThreadMessage[];
    /** The text currently being accumulated from the SSE stream */
    streamingText?: string;
    isStreaming?: boolean;
    /** UI language. Defaults to 'en'. */
    language?: 'en' | 'ar';
    /** Text direction. Inferred from language when not provided. */
    dir?: 'ltr' | 'rtl';
}
/**
 * ChatThread
 *
 * Renders the full conversation history plus an optional live streaming tail.
 * Bilingual: reads `text_ar` when language === 'ar', falls back to `text_en`.
 * RTL-aware: message alignment and avatar order flip for Arabic.
 * Auto-scrolls to the bottom on new messages or streaming token updates.
 *
 * All app deps removed — language/dir are plain props.
 */
declare const ChatThread: {
    ({ messages, streamingText, isStreaming, language, dir, }: ChatThreadProps): React$1.JSX.Element;
    displayName: string;
};

interface StreamingMessageProps {
    text: string;
    isStreaming: boolean;
    /** UI language. Defaults to 'en'. */
    language?: 'en' | 'ar';
    /** Text direction. Inferred from language when not provided. */
    dir?: 'ltr' | 'rtl';
}
/**
 * StreamingMessage
 *
 * Renders an assistant message that may still be receiving SSE token deltas.
 * While streaming, shows a pulsing cursor at the end.
 * Content renders as markdown via the shared MarkdownContent primitive
 * (GFM, skipHtml, links in new tab, RTL-safe logical padding).
 *
 * All app deps removed — language/dir are plain props.
 */
declare const StreamingMessage: {
    ({ text, isStreaming, language, dir }: StreamingMessageProps): React$1.JSX.Element;
    displayName: string;
};

interface ArtifactViewerProps {
    artifact: ArtifactPayload;
    /** UI language. Defaults to 'en'. */
    language?: 'en' | 'ar';
    /** Text direction. Inferred from language when not provided. */
    dir?: 'ltr' | 'rtl';
}
/**
 * ArtifactViewer
 *
 * Switches on `artifact.controller_slug` to render the appropriate visualisation.
 * Supported slugs:
 *   - map-of-events
 *   - timeline
 *   - network-graph
 *   - kpi-card
 *
 * All others render a JSON fallback. All app dependencies removed — language/dir
 * are plain props.
 */
declare const ArtifactViewer: {
    ({ artifact, language, dir }: ArtifactViewerProps): React$1.JSX.Element;
    displayName: string;
};

interface AgentStepsProps {
    steps: AgentStep[];
    isStreaming: boolean;
    /** UI language. Defaults to 'en'. */
    language?: 'en' | 'ar';
    /** Text direction. Inferred from language when not provided. */
    dir?: 'ltr' | 'rtl';
}
/**
 * AgentSteps
 *
 * Collapsible list of streaming agent tool-call steps with real-time state
 * indicators (active/complete/error). Bilingual EN/AR, RTL-aware.
 *
 * All app deps removed — language/dir are plain props.
 */
declare const AgentSteps: {
    ({ steps, isStreaming, language, dir }: AgentStepsProps): React$1.JSX.Element | null;
    displayName: string;
};

export { type A2UIActionItem, type A2UIActionsData, type A2UIArtifact$1 as A2UIArtifact, type A2UICardData, type A2UICardField, type A2UIChartData, type A2UIChartSeries, type A2UIClientCandidate, type A2UIClientCandidatesData, type A2UIClientDiffConfirmData, type A2UIClientDiffRow, type A2UIClientField, type A2UIClientFieldPickerData, type A2UIKind, type A2UIMarkdownData, type A2UIPersonaStarter, type A2UIPersonaStartersData, type A2UITableColumn, type A2UITableData, type ActivityBucket, AgentSteps, type AlertMapItem, type AlertSeverity, AppPageShell, type AppPageShellProps, AppSidebar, type AppSidebarProps, type AppearanceMode, ArtifactActions, type ArtifactActionsProps, ArtifactCard, type ArtifactCardProps, ArtifactChart, type ArtifactChartProps, ArtifactClientCandidates, type ArtifactClientCandidatesProps, ArtifactClientDiffConfirm, type ArtifactClientDiffConfirmProps, ArtifactClientFieldPicker, type ArtifactClientFieldPickerProps, type ArtifactInteraction, ArtifactMarkdown, type ArtifactMarkdownProps, ArtifactPersonaStarters, type ArtifactPersonaStartersProps, ArtifactRenderer, type ArtifactRendererProps, ArtifactTable, type ArtifactTableProps, ArtifactViewer, AuthCard, type AuthCardBrand, type AuthClient, AuthErrorAlert, AuthFlow, type AuthLayout, AuthStepHeader, type BarPoint, type BrandContextValue, type BrandTokens, BrandingProvider, type BrandingProviderProps, type CardFilter, CardGrid, type CardGridLabels, ChatThread, ColorPicker, type ColorPickerProps, ContextualSkeleton, type CopilotClient, type CopilotEvent, CopilotLauncher, CopilotProvider, type CopilotRequest, DEFAULT_LAYERS, DEFAULT_LEGEND_GROUPS, DEFAULT_REGION_PRESETS, DataState, type DataStateLabels, type DataStateProps, DataTable, type DataTableBulkAction, type DataTableColumnFilter, type DataTableColumnMeta, type DataTableDensity, type DataTableFilterType, type DataTableLanguage, type DataTableProps, type DataTableSelectOption, type DataTableServerCallbacks, type DataTableServerState, DynamicIcon, DynamicSection, type DynamicSectionProps, EmptyState, type EmptyStateProps, EntityNetworkGraph, type EntityNetworkGraphProps, type ErrorFilter, ErrorTrackingPage, type ErrorTrackingPageProps, EventMapPanel, type EventMapPanelProps, FeedbackButton, type FeedbackButtonProps, FeedbackHub, type FeedbackHubProps, type FeedbackItem, type FeedbackKind, FeedbackWidget, type FeedbackWidgetProps, ForgotForm, type GraphLink, type GraphNode, IconPicker, type IconPickerProps, type Issue$1 as Issue, type IssueAssignee, type IssueBreadcrumb, IssueDetail, type IssueDetailProps, type IssueLevel, type IssueSort, type IssueTag, IssuesList, type IssuesListProps, LANG_COOKIE_NAME, type LanguageContextValue, LanguageProvider, type LanguageProviderProps, type LegendGroup, type LegendItem, type LegendShapeType, LockScreen, type LockScreenProps, type LockScreenUser, type LogLevel, LoginForm, type LoginResult, type LogsFilter, LogsView, type LogsViewProps, MARKER_COLORS, MARKER_LABELS, type MapLayer, MapLayersPanel, type MapLayersPanelProps, MapLegend, type MapLegendProps, type MapMarker$1 as MapMarker, type MapMarkerType, MapPanel, type MapPanelProps, type MapRegionPreset, MapView, type MapViewProps, MarkdownContent, MiniBarChart, type ModelOption, MotorFeedbackLauncher, type MotorFeedbackLauncherProps, NestedStepsEditor, type NestedStepsEditorProps, NetworkGraph, type NetworkGraphProps, OTPBoxGroup, type OtpResult, PIPELINE_STAGES, PageHeader, type PageHeaderProps, PasswordInput, PasswordLockScreen, type PasswordLockScreenProps, type PasswordLockScreenUser, type PasswordRule, PasswordStrengthMeter, type PickedElement, type PipelineCard, type PipelineLane, type PipelineModel, type PluginActivitySummary, type PluginAppearanceFields, PluginAppearanceSection, type PluginAppearanceSectionProps, PluginCard, type PluginCatalogEntry, type PluginDetailIdentity, PluginDetailLayout, type PluginDetailLayoutProps, type PluginDetailTab, PluginHero, PluginHeroSkeleton, PluginPageHeader, PluginSectionCard, PluginSparkline, type ProfileSession, ProfileView, type ProfileViewProps, type RenderMapContext, ResetForm, type ResolvedIcon, RouteProgress, type RouteProgressProps, SENTRA_BRAND, STEP_FIELD_REGISTRY, SectionBoard, type SectionBoardProps, type SectionModel, SectionSkeleton, SentraLoading, type ServiceLogRow, ServiceUnavailable, type ServiceUnavailableProps, SessionExpired, type SessionExpiredProps, SeverityChip, type SidebarConversation, type SidebarUser, SourceBadge, type SparklinePoint, type StackFrame, type StackFrameContextLine, StatCard, type StatCardProps, StatusBadge, type StatusBadgeProps, type StatusBadgeTone, type Step, type StepFieldDef, type StepFieldType, type StepMetrics7d, StepOptionsDialog, type StepOptionsDialogProps, StreamingMessage, type TestRunCallbacks, type TestRunCompletePayload, TestRunPanel, type TestRunPanelProps, type TestRunSavedItem, type TestRunStep, TwoFAForm, UnifiedCopilotDock, type UnlockCredentials, type Verify2FAResult, type View, ViewToggle, type ViewToggleProps, Workflow, WorkflowEditor, type WorkflowEditorProps, type WorkflowPalette, WorkflowPipeline, type WorkflowPipelineProps, type WorkflowProps, type WorkflowSource, type WorkflowStep, type WorkflowStepLike, WorkflowStepNode, type WorkflowStepNodeProps, type WorkflowView, applyBrand, cn, computeRules, computeScore, feedbackButtonVariants, hexToHSL, isHSL, isValidColor, levelTone, nudgeL, resolveIcon, statValueVariants, statusBadgeVariants, toHSLSafe, useBrand, useCopilot, useLanguage, useT };
