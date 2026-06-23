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
interface Issue {
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
    status?: Issue["status"];
    /** full-text search on title/culprit */
    q?: string;
}
type IssueSort = "lastSeen" | "firstSeen" | "count" | "userCount";

type Lang = "en" | "ar";
/** Map a Sentry-style level to a StatusBadge tone. */
declare function levelTone(level: IssueLevel): "danger" | "warning" | "info" | "neutral";

interface IssuesListProps {
    issues: Issue[];
    selectedId?: string | null;
    onSelectIssue?: (issue: Issue) => void;
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
    issue: Issue;
    language?: Lang;
    onResolve?: (issue: Issue) => void;
    onIgnore?: (issue: Issue) => void;
    className?: string;
}
/** IssueDetail — the error detail pane: title + culprit, level, resolve/ignore,
 * stats, a frequency chart, then tabbed Stack trace / Breadcrumbs / Tags. */
declare function IssueDetail({ issue, language, onResolve, onIgnore, className }: IssueDetailProps): React$1.JSX.Element;

interface ErrorTrackingPageProps {
    issues: Issue[];
    language?: Lang;
    filter?: ErrorFilter;
    onFilterChange?: (f: ErrorFilter) => void;
    sort?: IssueSort;
    onSortChange?: (s: IssueSort) => void;
    environments?: string[];
    onResolve?: (issue: Issue) => void;
    onIgnore?: (issue: Issue) => void;
    /** controlled selection (optional) */
    selectedId?: string | null;
    onSelectIssue?: (issue: Issue) => void;
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

export { type ActivityBucket, type AlertMapItem, type AlertSeverity, AppPageShell, type AppPageShellProps, AppSidebar, type AppSidebarProps, type AppearanceMode, AuthCard, type AuthCardBrand, type AuthClient, AuthErrorAlert, AuthFlow, type AuthLayout, AuthStepHeader, type BarPoint, type BrandContextValue, type BrandTokens, BrandingProvider, type BrandingProviderProps, type CardFilter, CardGrid, type CardGridLabels, ColorPicker, type ColorPickerProps, ContextualSkeleton, DEFAULT_LAYERS, DEFAULT_LEGEND_GROUPS, DEFAULT_REGION_PRESETS, DataState, type DataStateLabels, type DataStateProps, DataTable, type DataTableBulkAction, type DataTableColumnFilter, type DataTableColumnMeta, type DataTableDensity, type DataTableFilterType, type DataTableLanguage, type DataTableProps, type DataTableSelectOption, type DataTableServerCallbacks, type DataTableServerState, DynamicIcon, DynamicSection, type DynamicSectionProps, EmptyState, type EmptyStateProps, EntityNetworkGraph, type EntityNetworkGraphProps, type ErrorFilter, ErrorTrackingPage, type ErrorTrackingPageProps, EventMapPanel, type EventMapPanelProps, ForgotForm, type GraphLink, type GraphNode, IconPicker, type IconPickerProps, type Issue, type IssueAssignee, type IssueBreadcrumb, IssueDetail, type IssueDetailProps, type IssueLevel, type IssueSort, type IssueTag, IssuesList, type IssuesListProps, LANG_COOKIE_NAME, type LanguageContextValue, LanguageProvider, type LanguageProviderProps, type LegendGroup, type LegendItem, type LegendShapeType, LockScreen, type LockScreenProps, type LockScreenUser, type LogLevel, LoginForm, type LoginResult, type LogsFilter, LogsView, type LogsViewProps, MARKER_COLORS, MARKER_LABELS, type MapLayer, MapLayersPanel, type MapLayersPanelProps, MapLegend, type MapLegendProps, type MapMarker$1 as MapMarker, type MapMarkerType, MapPanel, type MapPanelProps, type MapRegionPreset, MapView, type MapViewProps, MiniBarChart, type ModelOption, NestedStepsEditor, type NestedStepsEditorProps, NetworkGraph, type NetworkGraphProps, OTPBoxGroup, type OtpResult, PIPELINE_STAGES, PageHeader, type PageHeaderProps, PasswordInput, PasswordLockScreen, type PasswordLockScreenProps, type PasswordLockScreenUser, type PasswordRule, PasswordStrengthMeter, type PipelineCard, type PipelineLane, type PipelineModel, type PluginActivitySummary, type PluginAppearanceFields, PluginAppearanceSection, type PluginAppearanceSectionProps, PluginCard, type PluginCatalogEntry, type PluginDetailIdentity, PluginDetailLayout, type PluginDetailLayoutProps, type PluginDetailTab, PluginHero, PluginHeroSkeleton, PluginPageHeader, PluginSectionCard, PluginSparkline, type ProfileSession, ProfileView, type ProfileViewProps, type RenderMapContext, ResetForm, type ResolvedIcon, RouteProgress, type RouteProgressProps, SENTRA_BRAND, STEP_FIELD_REGISTRY, SectionBoard, type SectionBoardProps, type SectionModel, SectionSkeleton, SentraLoading, type ServiceLogRow, ServiceUnavailable, type ServiceUnavailableProps, SessionExpired, type SessionExpiredProps, type SidebarConversation, type SidebarUser, SourceBadge, type SparklinePoint, type StackFrame, type StackFrameContextLine, StatCard, type StatCardProps, StatusBadge, type StatusBadgeProps, type StatusBadgeTone, type Step, type StepFieldDef, type StepFieldType, type StepMetrics7d, StepOptionsDialog, type StepOptionsDialogProps, type TestRunCallbacks, type TestRunCompletePayload, TestRunPanel, type TestRunPanelProps, type TestRunSavedItem, type TestRunStep, TwoFAForm, type UnlockCredentials, type Verify2FAResult, type View, ViewToggle, type ViewToggleProps, Workflow, WorkflowEditor, type WorkflowEditorProps, type WorkflowPalette, WorkflowPipeline, type WorkflowPipelineProps, type WorkflowProps, type WorkflowSource, type WorkflowStep, type WorkflowStepLike, WorkflowStepNode, type WorkflowStepNodeProps, type WorkflowView, applyBrand, cn, computeRules, computeScore, hexToHSL, isHSL, isValidColor, levelTone, nudgeL, resolveIcon, statValueVariants, statusBadgeVariants, toHSLSafe, useBrand, useLanguage, useT };
