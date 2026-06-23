import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  AlertDescription,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertTitle,
  AspectRatio,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  Calendar,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
  ChartTooltip,
  ChartTooltipContent,
  Checkbox,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandInputPrimitive,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuPortal,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  DirectionalArrow,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Input,
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
  Label,
  LinkifyText,
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarPortal,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
  NativeSelect,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Progress,
  RadioGroup,
  RadioGroupItem,
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
  ScrollArea,
  ScrollBar,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  Separator,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  Skeleton,
  Slider,
  Switch,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  Toaster,
  Toggle,
  ToggleGroup,
  ToggleGroupItem,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  badgeVariants,
  buttonVariants,
  cn,
  formatRelativeTime,
  navigationMenuTriggerStyle,
  toast,
  toggleVariants,
  useFormField,
  useOptionalSidebar,
  useSidebar
} from "./chunk-XXP2ZYPY.js";

// src/components/status/EmptyState.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var EmptyState = ({ title, description, icon, action, className }) => /* @__PURE__ */ jsxs(
  "div",
  {
    className: cn(
      "flex flex-col items-center justify-center rounded-xl border border-dashed bg-card/40 px-6 py-12 text-center transition-colors duration-base ease-standard",
      className
    ),
    children: [
      icon ? /* @__PURE__ */ jsx("div", { className: "mb-3 flex size-10 items-center justify-center rounded-full bg-muted text-muted-foreground [&>svg]:size-5", children: icon }) : null,
      /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-foreground", children: title }),
      description ? /* @__PURE__ */ jsx("p", { className: "mt-1 max-w-sm text-xs text-muted-foreground", children: description }) : null,
      action ? /* @__PURE__ */ jsx("div", { className: "mt-4", children: action }) : null
    ]
  }
);
EmptyState.displayName = "EmptyState";

// src/components/status/ServiceUnavailable.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var ServiceUnavailable = ({
  title,
  description,
  hint,
  icon,
  action,
  className
}) => /* @__PURE__ */ jsx2(
  "div",
  {
    className: cn(
      "rounded-xl border border-alert-amber/30 bg-alert-amber/5 p-5 shadow-sm transition-shadow duration-base ease-standard",
      className
    ),
    children: /* @__PURE__ */ jsxs2("div", { className: "flex items-start gap-3", children: [
      icon ? /* @__PURE__ */ jsx2("div", { className: "mt-0.5 text-alert-amber [&>svg]:size-5", children: icon }) : null,
      /* @__PURE__ */ jsxs2("div", { className: "min-w-0 flex-1", children: [
        /* @__PURE__ */ jsx2("p", { className: "text-sm font-semibold text-foreground", children: title }),
        description ? /* @__PURE__ */ jsx2("p", { className: "mt-1 text-sm text-muted-foreground", children: description }) : null,
        hint ? /* @__PURE__ */ jsx2("p", { className: "mt-2 text-xs text-muted-foreground", children: hint }) : null,
        action ? /* @__PURE__ */ jsx2("div", { className: "mt-3", children: action }) : null
      ] })
    ] })
  }
);
ServiceUnavailable.displayName = "ServiceUnavailable";

// src/components/status/SessionExpired.tsx
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
var SessionExpired = ({
  title,
  description,
  ctaLabel,
  loginHref = "/login",
  icon,
  className
}) => /* @__PURE__ */ jsxs3(
  "div",
  {
    className: cn(
      "flex flex-col items-center justify-center rounded-xl border bg-card px-6 py-12 text-center shadow-sm transition-shadow duration-base ease-standard",
      className
    ),
    children: [
      icon ? /* @__PURE__ */ jsx3("div", { className: "mb-3 flex size-10 items-center justify-center rounded-full bg-muted text-muted-foreground [&>svg]:size-5", children: icon }) : null,
      /* @__PURE__ */ jsx3("p", { className: "text-sm font-semibold text-foreground", children: title }),
      description ? /* @__PURE__ */ jsx3("p", { className: "mt-1 max-w-sm text-xs text-muted-foreground", children: description }) : null,
      /* @__PURE__ */ jsx3(
        "a",
        {
          href: loginHref,
          className: "mt-4 inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow-sm transition-all duration-fast ease-standard hover:bg-primary/90 hover:shadow-md active:scale-[0.98] focus-visible:outline-none focus-visible:shadow-focus",
          children: ctaLabel
        }
      )
    ]
  }
);
SessionExpired.displayName = "SessionExpired";

// src/components/status/PageHeader.tsx
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
var PageHeader = ({ title, description, icon, actions, className }) => /* @__PURE__ */ jsxs4("div", { className: cn("flex flex-wrap items-center justify-between gap-4", className), children: [
  /* @__PURE__ */ jsxs4("div", { className: "min-w-0", children: [
    /* @__PURE__ */ jsxs4("h1", { className: "flex items-center gap-2 text-2xl font-bold text-foreground", children: [
      icon ? /* @__PURE__ */ jsx4("span", { className: "text-muted-foreground [&>svg]:size-5", children: icon }) : null,
      title
    ] }),
    description ? /* @__PURE__ */ jsx4("p", { className: "mt-1 text-sm text-muted-foreground", children: description }) : null
  ] }),
  actions ? /* @__PURE__ */ jsx4("div", { className: "flex items-center gap-2", children: actions }) : null
] });
PageHeader.displayName = "PageHeader";

// src/components/status/StatCard.tsx
import { cva } from "class-variance-authority";
import { jsx as jsx5, jsxs as jsxs5 } from "react/jsx-runtime";
var statValueVariants = cva("text-2xl font-bold font-mono tabular-nums", {
  variants: {
    tone: {
      default: "text-foreground",
      muted: "text-muted-foreground",
      success: "text-success",
      warning: "text-warning",
      danger: "text-destructive",
      info: "text-info"
    }
  },
  defaultVariants: { tone: "default" }
});
var StatCard = ({ label, value, tone, className }) => /* @__PURE__ */ jsxs5(Card, { className: cn("transition-all duration-base ease-standard hover:shadow-md", className), children: [
  /* @__PURE__ */ jsx5(CardHeader, { className: "px-4 pb-1 pt-4", children: /* @__PURE__ */ jsx5(CardDescription, { className: "text-xs", children: label }) }),
  /* @__PURE__ */ jsx5(CardContent, { className: "px-4 pb-4", children: /* @__PURE__ */ jsx5("p", { className: cn(statValueVariants({ tone })), children: value }) })
] });
StatCard.displayName = "StatCard";

// src/components/status/StatusBadge.tsx
import { cva as cva2 } from "class-variance-authority";
import { jsx as jsx6 } from "react/jsx-runtime";
var statusBadgeVariants = cva2(
  "inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-xs font-medium transition-colors duration-fast ease-standard",
  {
    variants: {
      tone: {
        neutral: "border-border bg-muted text-muted-foreground",
        success: "border-success/30 bg-success/15 text-success",
        warning: "border-warning/30 bg-warning/15 text-warning",
        danger: "border-destructive/30 bg-destructive/15 text-destructive",
        info: "border-info/30 bg-info/15 text-info"
      }
    },
    defaultVariants: { tone: "neutral" }
  }
);
var StatusBadge = ({ tone, children, className }) => /* @__PURE__ */ jsx6("span", { className: cn(statusBadgeVariants({ tone }), className), children });
StatusBadge.displayName = "StatusBadge";

// src/components/status/DataState.tsx
import { Fragment, jsx as jsx7, jsxs as jsxs6 } from "react/jsx-runtime";
var DefaultSkeleton = () => /* @__PURE__ */ jsxs6("div", { className: "space-y-2", children: [
  /* @__PURE__ */ jsx7(Skeleton, { className: "h-9 w-full" }),
  /* @__PURE__ */ jsx7(Skeleton, { className: "h-9 w-full" }),
  /* @__PURE__ */ jsx7(Skeleton, { className: "h-9 w-full" })
] });
DefaultSkeleton.displayName = "DefaultSkeleton";
var DataState = ({
  loading,
  unauthorized,
  unavailable,
  error,
  empty,
  labels,
  icon,
  emptyAction,
  loadingFallback,
  children
}) => {
  if (loading) return /* @__PURE__ */ jsx7(Fragment, { children: loadingFallback ?? /* @__PURE__ */ jsx7(DefaultSkeleton, {}) });
  if (unauthorized) {
    return /* @__PURE__ */ jsx7(
      SessionExpired,
      {
        title: labels.sessionExpiredTitle,
        description: labels.sessionExpiredDescription,
        ctaLabel: labels.signInLabel,
        loginHref: labels.loginHref,
        icon
      }
    );
  }
  if (unavailable) {
    return /* @__PURE__ */ jsx7(
      ServiceUnavailable,
      {
        title: labels.unavailableTitle,
        description: labels.unavailableDescription,
        hint: labels.unavailableHint,
        icon
      }
    );
  }
  if (error) {
    return /* @__PURE__ */ jsxs6(Alert, { variant: "destructive", children: [
      /* @__PURE__ */ jsx7(AlertTitle, { children: labels.errorTitle }),
      /* @__PURE__ */ jsx7(AlertDescription, { children: error })
    ] });
  }
  if (empty) {
    return /* @__PURE__ */ jsx7(
      EmptyState,
      {
        title: labels.emptyTitle,
        description: labels.emptyDescription,
        icon,
        action: emptyAction
      }
    );
  }
  return /* @__PURE__ */ jsx7(Fragment, { children });
};
DataState.displayName = "DataState";

// src/components/data-table/DataTable.tsx
import * as React from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender
} from "@tanstack/react-table";
import {
  ChevronDown,
  ChevronUp,
  ChevronsUpDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Download,
  Search,
  X,
  Eye,
  AlignJustify,
  AlignCenter
} from "lucide-react";
import { Fragment as Fragment3, jsx as jsx8, jsxs as jsxs7 } from "react/jsx-runtime";
var STRINGS = {
  en: {
    search: "Search\u2026",
    noResults: "No results found.",
    noData: "No data available.",
    error: "Failed to load data.",
    rowsPerPage: "Rows per page",
    of: "of",
    page: "Page",
    columns: "Columns",
    export: "Export CSV",
    filters: "Filters",
    clearFilters: "Clear filters",
    selectAll: "Select all",
    deselectAll: "Deselect all",
    selected: "selected",
    actions: "Actions",
    first: "First page",
    previous: "Previous page",
    next: "Next page",
    last: "Last page",
    sortAsc: "Sort ascending",
    sortDesc: "Sort descending",
    removeSort: "Remove sort",
    loading: "Loading\u2026",
    compact: "Compact",
    comfortable: "Comfortable",
    density: "Density",
    from: "From",
    to: "To",
    all: "All",
    pin: "Pin column",
    unpin: "Unpin",
    pinStart: "Pin to start",
    pinEnd: "Pin to end"
  },
  ar: {
    search: "\u0628\u062D\u062B\u2026",
    noResults: "\u0644\u0627 \u062A\u0648\u062C\u062F \u0646\u062A\u0627\u0626\u062C.",
    noData: "\u0644\u0627 \u062A\u062A\u0648\u0641\u0631 \u0628\u064A\u0627\u0646\u0627\u062A.",
    error: "\u0641\u0634\u0644 \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A.",
    rowsPerPage: "\u0635\u0641\u0648\u0641 \u0641\u064A \u0627\u0644\u0635\u0641\u062D\u0629",
    of: "\u0645\u0646",
    page: "\u0635\u0641\u062D\u0629",
    columns: "\u0627\u0644\u0623\u0639\u0645\u062F\u0629",
    export: "\u062A\u0635\u062F\u064A\u0631 CSV",
    filters: "\u062A\u0635\u0641\u064A\u0629",
    clearFilters: "\u0645\u0633\u062D \u0627\u0644\u062A\u0635\u0641\u064A\u0629",
    selectAll: "\u062A\u062D\u062F\u064A\u062F \u0627\u0644\u0643\u0644",
    deselectAll: "\u0625\u0644\u063A\u0627\u0621 \u0627\u0644\u0643\u0644",
    selected: "\u0645\u062D\u062F\u062F",
    actions: "\u0625\u062C\u0631\u0627\u0621\u0627\u062A",
    first: "\u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0623\u0648\u0644\u0649",
    previous: "\u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0633\u0627\u0628\u0642\u0629",
    next: "\u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u062A\u0627\u0644\u064A\u0629",
    last: "\u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0623\u062E\u064A\u0631\u0629",
    sortAsc: "\u062A\u0631\u062A\u064A\u0628 \u062A\u0635\u0627\u0639\u062F\u064A",
    sortDesc: "\u062A\u0631\u062A\u064A\u0628 \u062A\u0646\u0627\u0632\u0644\u064A",
    removeSort: "\u0625\u0632\u0627\u0644\u0629 \u0627\u0644\u062A\u0631\u062A\u064A\u0628",
    loading: "\u062C\u0627\u0631\u064D \u0627\u0644\u062A\u062D\u0645\u064A\u0644\u2026",
    compact: "\u0645\u0636\u063A\u0648\u0637",
    comfortable: "\u0645\u0631\u064A\u062D",
    density: "\u0627\u0644\u0643\u062B\u0627\u0641\u0629",
    from: "\u0645\u0646",
    to: "\u0625\u0644\u0649",
    all: "\u0627\u0644\u0643\u0644",
    pin: "\u062A\u062B\u0628\u064A\u062A \u0627\u0644\u0639\u0645\u0648\u062F",
    unpin: "\u0625\u0644\u063A\u0627\u0621 \u0627\u0644\u062A\u062B\u0628\u064A\u062A",
    pinStart: "\u062A\u062B\u0628\u064A\u062A \u0641\u064A \u0627\u0644\u0628\u062F\u0627\u064A\u0629",
    pinEnd: "\u062A\u062B\u0628\u064A\u062A \u0641\u064A \u0627\u0644\u0646\u0647\u0627\u064A\u0629"
  }
};
function useT(language) {
  return STRINGS[language];
}
function exportToCsv(rows, headers, filename) {
  const headerRow = headers.map((h) => `"${h.label}"`).join(",");
  const dataRows = rows.map((row) => {
    return headers.map((h) => {
      const val = row[h.id];
      const str = val === null || val === void 0 ? "" : String(val);
      return `"${str.replace(/"/g, '""')}"`;
    }).join(",");
  });
  const csv = [headerRow, ...dataRows].join("\n");
  const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${filename}.csv`;
  link.click();
  URL.revokeObjectURL(url);
}
var SortIcon = ({ sorted, isRTL }) => {
  if (sorted === "asc") return /* @__PURE__ */ jsx8(ChevronUp, { className: "ms-1 size-3.5 shrink-0", "aria-hidden": "true" });
  if (sorted === "desc") return /* @__PURE__ */ jsx8(ChevronDown, { className: "ms-1 size-3.5 shrink-0", "aria-hidden": "true" });
  return /* @__PURE__ */ jsx8(ChevronsUpDown, { className: "ms-1 size-3.5 shrink-0 text-muted-foreground/50", "aria-hidden": "true" });
};
var DateRangeFilter = ({
  value,
  onChange,
  language,
  t: t2
}) => {
  const [open, setOpen] = React.useState(false);
  const fromLabel = value?.from ? value.from.toLocaleDateString() : t2.from;
  const toLabel = value?.to ? value.to.toLocaleDateString() : t2.to;
  const hasValue = !!(value?.from || value?.to);
  return /* @__PURE__ */ jsxs7(Popover, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx8(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs7(
      Button,
      {
        variant: "outline",
        size: "sm",
        className: cn("h-8 text-xs gap-1", hasValue && "border-primary text-primary"),
        "aria-label": `${t2.from} / ${t2.to}`,
        children: [
          fromLabel,
          " \u2014 ",
          toLabel,
          hasValue && /* @__PURE__ */ jsx8(
            X,
            {
              className: "ms-1 size-3.5",
              onClick: (e) => {
                e.stopPropagation();
                onChange(void 0);
              },
              "aria-label": t2.clearFilters
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ jsx8(PopoverContent, { className: "w-auto p-0", align: "start", children: /* @__PURE__ */ jsx8(
      Calendar,
      {
        mode: "range",
        selected: { from: value?.from, to: value?.to },
        onSelect: (range) => onChange(range ? { from: range.from, to: range.to } : void 0),
        numberOfMonths: 2,
        dir: language === "ar" ? "rtl" : "ltr"
      }
    ) })
  ] });
};
var NumberRangeFilter = ({
  value,
  onChange,
  t: t2
}) => {
  const [min, setMin] = React.useState(value?.min !== void 0 ? String(value.min) : "");
  const [max, setMax] = React.useState(value?.max !== void 0 ? String(value.max) : "");
  const commit = () => {
    const minVal = min !== "" ? Number(min) : void 0;
    const maxVal = max !== "" ? Number(max) : void 0;
    if (minVal === void 0 && maxVal === void 0) {
      onChange(void 0);
    } else {
      onChange({ min: minVal, max: maxVal });
    }
  };
  return /* @__PURE__ */ jsxs7("div", { className: "flex items-center gap-1.5", children: [
    /* @__PURE__ */ jsx8(
      Input,
      {
        type: "number",
        className: "h-8 w-20 text-xs",
        placeholder: t2.from,
        value: min,
        onChange: (e) => setMin(e.target.value),
        onBlur: commit,
        "aria-label": t2.from
      }
    ),
    /* @__PURE__ */ jsx8("span", { className: "text-xs text-muted-foreground", children: "\u2013" }),
    /* @__PURE__ */ jsx8(
      Input,
      {
        type: "number",
        className: "h-8 w-20 text-xs",
        placeholder: t2.to,
        value: max,
        onChange: (e) => setMax(e.target.value),
        onBlur: commit,
        "aria-label": t2.to
      }
    )
  ] });
};
var LoadingSkeleton = ({ columns, rows = 5 }) => /* @__PURE__ */ jsx8(Fragment3, { children: Array.from({ length: rows }).map((_, ri) => /* @__PURE__ */ jsx8(TableRow, { "aria-hidden": "true", children: Array.from({ length: columns }).map((_2, ci) => /* @__PURE__ */ jsx8(TableCell, { children: /* @__PURE__ */ jsx8(Skeleton, { className: "h-4 w-full" }) }, ci)) }, ri)) });
function DataTable({
  data,
  columns,
  getRowId,
  language = "en",
  filterDefs,
  showGlobalSearch = true,
  pageSize: initialPageSize = 20,
  pageSizeOptions = [10, 20, 50, 100],
  totalRows,
  serverCallbacks,
  loading = false,
  error = null,
  onRowClick,
  enableRowSelection = false,
  bulkActions,
  renderExpandedRow,
  enableColumnVisibility = true,
  enableColumnPinning = true,
  enableColumnResizing = false,
  enableSorting = true,
  enableMultiSort = true,
  showDensityToggle = true,
  defaultDensity = "comfortable",
  showCsvExport = true,
  csvFilename = "export",
  className,
  stickyHeader = true
}) {
  const t2 = useT(language);
  const isRTL = language === "ar";
  const isServerMode = !!serverCallbacks;
  const [sorting, setSorting] = React.useState([]);
  const [columnFilters, setColumnFilters] = React.useState([]);
  const [columnVisibility, setColumnVisibility] = React.useState({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnPinning, setColumnPinning] = React.useState({});
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [density, setDensity] = React.useState(defaultDensity);
  const [expandedRows, setExpandedRows] = React.useState({});
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: initialPageSize
  });
  const prevServerState = React.useRef("");
  React.useEffect(() => {
    if (!isServerMode) return;
    const state = { sorting, columnFilters, pagination, globalFilter };
    const serialized = JSON.stringify(state);
    if (serialized !== prevServerState.current) {
      prevServerState.current = serialized;
      serverCallbacks.onStateChange(state);
    }
  }, [sorting, columnFilters, pagination, globalFilter, isServerMode, serverCallbacks]);
  const selectionColumn = React.useMemo(() => {
    if (!enableRowSelection) return [];
    return [{
      id: "__select__",
      header: ({ table: table2 }) => /* @__PURE__ */ jsx8(
        Checkbox,
        {
          checked: table2.getIsAllPageRowsSelected() ? true : table2.getIsSomePageRowsSelected() ? "indeterminate" : false,
          onCheckedChange: (v) => table2.toggleAllPageRowsSelected(!!v),
          "aria-label": t2.selectAll
        }
      ),
      cell: ({ row }) => /* @__PURE__ */ jsx8(
        Checkbox,
        {
          checked: row.getIsSelected(),
          onCheckedChange: (v) => row.toggleSelected(!!v),
          "aria-label": `Select row ${row.index + 1}`,
          onClick: (e) => e.stopPropagation()
        }
      ),
      enableSorting: false,
      enableHiding: false,
      size: 44
    }];
  }, [enableRowSelection, t2.selectAll]);
  const allColumns = React.useMemo(
    () => [...selectionColumn, ...columns],
    [selectionColumn, columns]
  );
  const table = useReactTable({
    data,
    columns: allColumns,
    getRowId,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: enableSorting ? getSortedRowModel() : void 0,
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onColumnPinningChange: setColumnPinning,
    onGlobalFilterChange: setGlobalFilter,
    onPaginationChange: setPagination,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      columnPinning,
      globalFilter,
      pagination
    },
    enableMultiSort,
    enableColumnPinning,
    enableColumnResizing,
    // Server-side: disable client-side counts when totalRows is provided
    manualPagination: isServerMode,
    manualSorting: isServerMode,
    manualFiltering: isServerMode,
    pageCount: isServerMode && totalRows !== void 0 ? Math.ceil(totalRows / pagination.pageSize) : void 0,
    columnResizeMode: enableColumnResizing ? "onChange" : void 0
  });
  const selectedRowIds = Object.keys(rowSelection).filter((k) => rowSelection[k]);
  const hasSelection = selectedRowIds.length > 0;
  const hasFilters = columnFilters.length > 0 || globalFilter.length > 0;
  const cellCls = density === "compact" ? "py-1.5 px-3 text-xs" : "py-3 px-4 text-sm";
  const headCls = density === "compact" ? "h-8 px-3 text-xs" : "h-11 px-4 text-sm";
  const handleExport = () => {
    const visibleColumns = table.getAllLeafColumns().filter((col) => col.getIsVisible() && col.id !== "__select__");
    const headers = visibleColumns.map((col) => {
      const meta = col.columnDef.meta;
      const label = (language === "ar" ? meta?.header_ar : void 0) ?? meta?.header_en ?? (typeof col.columnDef.header === "string" ? col.columnDef.header : col.id);
      return { id: col.id, label };
    });
    const rows = table.getFilteredRowModel().rows.map((r) => r.original);
    exportToCsv(rows, headers, csvFilename);
  };
  const renderFilterControl = (fd) => {
    const column = table.getColumn(fd.columnId);
    if (!column) return null;
    const filterValue = column.getFilterValue();
    if (fd.type === "text") {
      return /* @__PURE__ */ jsxs7("div", { className: "relative", children: [
        /* @__PURE__ */ jsx8(Search, { className: "absolute start-2 top-1/2 -translate-y-1/2 size-3.5 text-muted-foreground pointer-events-none", "aria-hidden": "true" }),
        /* @__PURE__ */ jsx8(
          Input,
          {
            className: "h-8 ps-7 text-xs w-40",
            placeholder: language === "ar" ? fd.placeholder_ar : fd.placeholder_en,
            value: filterValue ?? "",
            onChange: (e) => column.setFilterValue(e.target.value),
            "aria-label": language === "ar" ? fd.placeholder_ar : fd.placeholder_en
          }
        )
      ] }, fd.columnId);
    }
    if (fd.type === "select") {
      const options = fd.options ?? [];
      return /* @__PURE__ */ jsxs7(
        Select,
        {
          value: filterValue ?? "",
          onValueChange: (v) => column.setFilterValue(v === "" ? void 0 : v),
          children: [
            /* @__PURE__ */ jsx8(SelectTrigger, { className: "h-8 text-xs w-36", "aria-label": fd.columnId, children: /* @__PURE__ */ jsx8(SelectValue, { placeholder: t2.all }) }),
            /* @__PURE__ */ jsxs7(SelectContent, { children: [
              /* @__PURE__ */ jsx8(SelectItem, { value: "", children: t2.all }),
              options.map((opt) => /* @__PURE__ */ jsx8(SelectItem, { value: opt.value, children: language === "ar" ? opt.label_ar ?? opt.label_en : opt.label_en }, opt.value))
            ] })
          ]
        },
        fd.columnId
      );
    }
    if (fd.type === "date-range") {
      return /* @__PURE__ */ jsx8(
        DateRangeFilter,
        {
          value: filterValue,
          onChange: (v) => column.setFilterValue(v),
          language,
          t: t2
        },
        fd.columnId
      );
    }
    if (fd.type === "number-range") {
      return /* @__PURE__ */ jsx8(
        NumberRangeFilter,
        {
          value: filterValue,
          onChange: (v) => column.setFilterValue(v),
          t: t2
        },
        fd.columnId
      );
    }
    return null;
  };
  const toolbar = /* @__PURE__ */ jsxs7(
    "div",
    {
      className: "flex flex-wrap items-center gap-2 pb-3",
      dir: isRTL ? "rtl" : "ltr",
      children: [
        showGlobalSearch && /* @__PURE__ */ jsxs7("div", { className: "relative flex-1 min-w-[180px] max-w-xs", children: [
          /* @__PURE__ */ jsx8(Search, { className: "absolute start-2 top-1/2 -translate-y-1/2 size-3.5 text-muted-foreground pointer-events-none", "aria-hidden": "true" }),
          /* @__PURE__ */ jsx8(
            Input,
            {
              className: "h-8 ps-7 text-xs",
              placeholder: t2.search,
              value: globalFilter,
              onChange: (e) => setGlobalFilter(e.target.value),
              "aria-label": t2.search
            }
          ),
          globalFilter && /* @__PURE__ */ jsx8(
            "button",
            {
              className: "absolute end-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",
              onClick: () => setGlobalFilter(""),
              "aria-label": t2.clearFilters,
              children: /* @__PURE__ */ jsx8(X, { className: "size-3.5" })
            }
          )
        ] }),
        filterDefs && filterDefs.map((fd) => renderFilterControl(fd)),
        hasFilters && /* @__PURE__ */ jsxs7(
          Button,
          {
            variant: "ghost",
            size: "sm",
            className: "h-8 text-xs text-muted-foreground",
            onClick: () => {
              setColumnFilters([]);
              setGlobalFilter("");
            },
            "aria-label": t2.clearFilters,
            children: [
              /* @__PURE__ */ jsx8(X, { className: "size-3.5 me-1", "aria-hidden": "true" }),
              t2.clearFilters
            ]
          }
        ),
        /* @__PURE__ */ jsxs7("div", { className: "flex items-center gap-1.5 ms-auto", children: [
          hasSelection && bulkActions && bulkActions.length > 0 && /* @__PURE__ */ jsxs7(Fragment3, { children: [
            /* @__PURE__ */ jsxs7(Badge, { variant: "secondary", className: "text-xs h-8 px-2.5 rounded-md font-normal", children: [
              selectedRowIds.length,
              " ",
              t2.selected
            ] }),
            bulkActions.map((action) => /* @__PURE__ */ jsxs7(
              Button,
              {
                variant: action.variant ?? "outline",
                size: "sm",
                className: "h-8 text-xs",
                onClick: () => action.onAction(selectedRowIds),
                children: [
                  action.icon && /* @__PURE__ */ jsx8("span", { className: "me-1", children: action.icon }),
                  language === "ar" ? action.label_ar ?? action.label_en : action.label_en
                ]
              },
              action.id
            )),
            /* @__PURE__ */ jsx8(Separator, { orientation: "vertical", className: "h-5" })
          ] }),
          showDensityToggle && /* @__PURE__ */ jsx8(TooltipProvider, { children: /* @__PURE__ */ jsxs7(Tooltip, { children: [
            /* @__PURE__ */ jsx8(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx8(
              Button,
              {
                variant: "ghost",
                size: "sm",
                className: "h-8 w-8 p-0",
                onClick: () => setDensity(density === "compact" ? "comfortable" : "compact"),
                "aria-label": t2.density,
                children: density === "compact" ? /* @__PURE__ */ jsx8(AlignJustify, { className: "size-4", "aria-hidden": "true" }) : /* @__PURE__ */ jsx8(AlignCenter, { className: "size-4", "aria-hidden": "true" })
              }
            ) }),
            /* @__PURE__ */ jsx8(TooltipContent, { side: "bottom", children: density === "compact" ? t2.comfortable : t2.compact })
          ] }) }),
          enableColumnVisibility && /* @__PURE__ */ jsxs7(DropdownMenu, { children: [
            /* @__PURE__ */ jsx8(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs7(Button, { variant: "outline", size: "sm", className: "h-8 text-xs gap-1", children: [
              /* @__PURE__ */ jsx8(Eye, { className: "size-3.5", "aria-hidden": "true" }),
              t2.columns
            ] }) }),
            /* @__PURE__ */ jsx8(DropdownMenuContent, { align: isRTL ? "start" : "end", children: table.getAllLeafColumns().filter((col) => col.id !== "__select__" && col.getCanHide()).map((col) => {
              const meta = col.columnDef.meta;
              const label = (language === "ar" ? meta?.header_ar : void 0) ?? meta?.header_en ?? (typeof col.columnDef.header === "string" ? col.columnDef.header : col.id);
              return /* @__PURE__ */ jsx8(
                DropdownMenuCheckboxItem,
                {
                  checked: col.getIsVisible(),
                  onCheckedChange: (v) => col.toggleVisibility(!!v),
                  children: label
                },
                col.id
              );
            }) })
          ] }),
          showCsvExport && /* @__PURE__ */ jsx8(TooltipProvider, { children: /* @__PURE__ */ jsxs7(Tooltip, { children: [
            /* @__PURE__ */ jsx8(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx8(
              Button,
              {
                variant: "outline",
                size: "sm",
                className: "h-8 w-8 p-0",
                onClick: handleExport,
                "aria-label": t2.export,
                children: /* @__PURE__ */ jsx8(Download, { className: "size-4", "aria-hidden": "true" })
              }
            ) }),
            /* @__PURE__ */ jsx8(TooltipContent, { side: "bottom", children: t2.export })
          ] }) })
        ] })
      ]
    }
  );
  if (error) {
    return /* @__PURE__ */ jsx8(
      "div",
      {
        className: cn("rounded-lg border border-destructive/30 bg-card p-8 text-center", className),
        role: "alert",
        "aria-live": "assertive",
        children: /* @__PURE__ */ jsx8("p", { className: "text-sm text-destructive", children: error || t2.error })
      }
    );
  }
  const headerRows = table.getHeaderGroups();
  const bodyRows = table.getRowModel().rows;
  const pageIndex = table.getState().pagination.pageIndex;
  const pageCount = table.getPageCount();
  const totalCount = isServerMode ? totalRows ?? data.length : table.getFilteredRowModel().rows.length;
  const rowFrom = pageIndex * pagination.pageSize + 1;
  const rowTo = Math.min(rowFrom + pagination.pageSize - 1, totalCount);
  return /* @__PURE__ */ jsxs7("div", { className: cn("flex flex-col gap-0", className), dir: isRTL ? "rtl" : "ltr", children: [
    toolbar,
    /* @__PURE__ */ jsx8(
      "div",
      {
        className: cn(
          "rounded-lg border border-border bg-card overflow-auto shadow-sm",
          stickyHeader && "relative"
        ),
        style: { maxHeight: stickyHeader ? "65vh" : void 0 },
        children: /* @__PURE__ */ jsxs7(Table, { children: [
          /* @__PURE__ */ jsx8(
            TableHeader,
            {
              className: cn(
                stickyHeader && "sticky top-0 z-10 bg-card shadow-sm"
              ),
              children: headerRows.map((headerGroup) => /* @__PURE__ */ jsx8(TableRow, { className: "hover:bg-transparent border-b border-border", children: headerGroup.headers.map((header) => {
                const meta = header.column.columnDef.meta;
                const isSortable = header.column.getCanSort();
                const sorted = header.column.getIsSorted();
                const ariaSort = sorted === "asc" ? "ascending" : sorted === "desc" ? "descending" : "none";
                const isPinned = header.column.getIsPinned();
                const headerContent = header.isPlaceholder ? null : (() => {
                  if (meta?.header_en || meta?.header_ar) {
                    return language === "ar" ? meta.header_ar ?? meta.header_en : meta.header_en;
                  }
                  return flexRender(header.column.columnDef.header, header.getContext());
                })();
                return /* @__PURE__ */ jsx8(
                  TableHead,
                  {
                    colSpan: header.colSpan,
                    className: cn(
                      headCls,
                      "font-semibold text-muted-foreground select-none whitespace-nowrap",
                      isSortable && "cursor-pointer hover:text-foreground transition-colors duration-fast ease-standard",
                      isPinned === "left" && "sticky start-0 bg-card z-20 shadow-[inset_-1px_0_0_hsl(var(--border))]",
                      isPinned === "right" && "sticky end-0 bg-card z-20 shadow-[inset_1px_0_0_hsl(var(--border))]"
                    ),
                    style: {
                      width: header.getSize() !== 150 ? header.getSize() : void 0
                    },
                    "aria-sort": isSortable ? ariaSort : void 0,
                    onClick: isSortable ? header.column.getToggleSortingHandler() : void 0,
                    onKeyDown: isSortable ? (e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        header.column.getToggleSortingHandler()?.(e);
                      }
                    } : void 0,
                    tabIndex: isSortable ? 0 : void 0,
                    role: isSortable ? "button" : void 0,
                    "aria-label": isSortable ? `${sorted === "asc" ? t2.sortDesc : sorted === "desc" ? t2.removeSort : t2.sortAsc}: ${typeof headerContent === "string" ? headerContent : header.id}` : void 0,
                    children: /* @__PURE__ */ jsxs7("div", { className: "flex items-center", children: [
                      headerContent,
                      isSortable && /* @__PURE__ */ jsx8(SortIcon, { sorted, isRTL }),
                      enableColumnResizing && header.column.getCanResize() && /* @__PURE__ */ jsx8(
                        "div",
                        {
                          className: cn(
                            "absolute end-0 top-0 h-full w-1 cursor-col-resize touch-none select-none bg-border opacity-0 hover:opacity-100",
                            header.column.getIsResizing() && "opacity-100 bg-primary"
                          ),
                          onMouseDown: header.getResizeHandler(),
                          onTouchStart: header.getResizeHandler(),
                          onClick: (e) => e.stopPropagation(),
                          "aria-hidden": "true"
                        }
                      )
                    ] })
                  },
                  header.id
                );
              }) }, headerGroup.id))
            }
          ),
          /* @__PURE__ */ jsx8(TableBody, { children: loading ? /* @__PURE__ */ jsx8(
            LoadingSkeleton,
            {
              columns: table.getAllLeafColumns().filter((c) => c.getIsVisible()).length,
              rows: pagination.pageSize > 10 ? 8 : pagination.pageSize
            }
          ) : bodyRows.length === 0 ? /* @__PURE__ */ jsx8(TableRow, { children: /* @__PURE__ */ jsx8(
            TableCell,
            {
              colSpan: allColumns.length,
              className: "h-32 text-center text-sm text-muted-foreground",
              children: hasFilters ? t2.noResults : t2.noData
            }
          ) }) : bodyRows.map((row) => {
            const rowId = getRowId ? getRowId(row.original) : String(row.index);
            const isExpanded = expandedRows[rowId] ?? false;
            return /* @__PURE__ */ jsxs7(React.Fragment, { children: [
              /* @__PURE__ */ jsx8(
                TableRow,
                {
                  "data-state": row.getIsSelected() ? "selected" : void 0,
                  className: cn(
                    "border-b border-border",
                    onRowClick && "cursor-pointer hover:bg-muted/50 transition-colors duration-fast ease-standard",
                    row.getIsSelected() && "bg-primary/5",
                    renderExpandedRow && "cursor-pointer"
                  ),
                  onClick: () => {
                    onRowClick?.(row.original);
                    if (renderExpandedRow) {
                      setExpandedRows((prev) => ({
                        ...prev,
                        [rowId]: !prev[rowId]
                      }));
                    }
                  },
                  "aria-selected": row.getIsSelected(),
                  children: row.getVisibleCells().map((cell) => {
                    const isPinned = cell.column.getIsPinned();
                    return /* @__PURE__ */ jsx8(
                      TableCell,
                      {
                        className: cn(
                          cellCls,
                          isPinned === "left" && "sticky start-0 bg-card z-10 shadow-[inset_-1px_0_0_hsl(var(--border))]",
                          isPinned === "right" && "sticky end-0 bg-card z-10 shadow-[inset_1px_0_0_hsl(var(--border))]"
                        ),
                        style: {
                          width: cell.column.getSize() !== 150 ? cell.column.getSize() : void 0
                        },
                        children: flexRender(cell.column.columnDef.cell, cell.getContext())
                      },
                      cell.id
                    );
                  })
                }
              ),
              renderExpandedRow && isExpanded && /* @__PURE__ */ jsx8(TableRow, { className: "bg-muted/30", children: /* @__PURE__ */ jsx8(
                TableCell,
                {
                  colSpan: allColumns.length,
                  className: "p-4",
                  children: renderExpandedRow(row.original)
                }
              ) }, `${row.id}-expanded`)
            ] }, row.id);
          }) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxs7(
      "div",
      {
        className: "flex flex-wrap items-center justify-between gap-3 pt-3 text-xs text-muted-foreground",
        dir: isRTL ? "rtl" : "ltr",
        children: [
          /* @__PURE__ */ jsxs7("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx8("span", { className: "whitespace-nowrap", children: t2.rowsPerPage }),
            /* @__PURE__ */ jsxs7(
              Select,
              {
                value: String(pagination.pageSize),
                onValueChange: (v) => {
                  table.setPageSize(Number(v));
                  table.setPageIndex(0);
                },
                children: [
                  /* @__PURE__ */ jsx8(SelectTrigger, { className: "h-7 text-xs w-16", "aria-label": t2.rowsPerPage, children: /* @__PURE__ */ jsx8(SelectValue, {}) }),
                  /* @__PURE__ */ jsx8(SelectContent, { children: pageSizeOptions.map((size) => /* @__PURE__ */ jsx8(SelectItem, { value: String(size), className: "text-xs", children: size }, size)) })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsx8("span", { className: "whitespace-nowrap tabular-nums", children: totalCount > 0 ? `${rowFrom}\u2013${rowTo} ${t2.of} ${totalCount}` : "0" }),
          /* @__PURE__ */ jsxs7("div", { className: "flex items-center gap-0.5", children: [
            /* @__PURE__ */ jsx8(
              Button,
              {
                variant: "ghost",
                size: "sm",
                className: "h-7 w-7 p-0",
                onClick: () => table.setPageIndex(0),
                disabled: !table.getCanPreviousPage(),
                "aria-label": t2.first,
                children: isRTL ? /* @__PURE__ */ jsx8(ChevronsRight, { className: "size-3.5", "aria-hidden": "true" }) : /* @__PURE__ */ jsx8(ChevronsLeft, { className: "size-3.5", "aria-hidden": "true" })
              }
            ),
            /* @__PURE__ */ jsx8(
              Button,
              {
                variant: "ghost",
                size: "sm",
                className: "h-7 w-7 p-0",
                onClick: () => table.previousPage(),
                disabled: !table.getCanPreviousPage(),
                "aria-label": t2.previous,
                children: isRTL ? /* @__PURE__ */ jsx8(ChevronRight, { className: "size-3.5", "aria-hidden": "true" }) : /* @__PURE__ */ jsx8(ChevronLeft, { className: "size-3.5", "aria-hidden": "true" })
              }
            ),
            /* @__PURE__ */ jsxs7("span", { className: "mx-1 tabular-nums whitespace-nowrap", children: [
              t2.page,
              " ",
              pageIndex + 1,
              " ",
              t2.of,
              " ",
              Math.max(1, pageCount)
            ] }),
            /* @__PURE__ */ jsx8(
              Button,
              {
                variant: "ghost",
                size: "sm",
                className: "h-7 w-7 p-0",
                onClick: () => table.nextPage(),
                disabled: !table.getCanNextPage(),
                "aria-label": t2.next,
                children: isRTL ? /* @__PURE__ */ jsx8(ChevronLeft, { className: "size-3.5", "aria-hidden": "true" }) : /* @__PURE__ */ jsx8(ChevronRight, { className: "size-3.5", "aria-hidden": "true" })
              }
            ),
            /* @__PURE__ */ jsx8(
              Button,
              {
                variant: "ghost",
                size: "sm",
                className: "h-7 w-7 p-0",
                onClick: () => table.setPageIndex(table.getPageCount() - 1),
                disabled: !table.getCanNextPage(),
                "aria-label": t2.last,
                children: isRTL ? /* @__PURE__ */ jsx8(ChevronsLeft, { className: "size-3.5", "aria-hidden": "true" }) : /* @__PURE__ */ jsx8(ChevronsRight, { className: "size-3.5", "aria-hidden": "true" })
              }
            )
          ] })
        ]
      }
    )
  ] });
}
DataTable.displayName = "DataTable";

// src/components/data-table/CardGrid.tsx
import { useMemo as useMemo2, useState as useState2 } from "react";
import { Search as Search2, Inbox } from "lucide-react";
import { Fragment as Fragment4, jsx as jsx9, jsxs as jsxs8 } from "react/jsx-runtime";
function CardGrid({
  items,
  getKey,
  renderCard,
  searchText,
  filters = [],
  labels,
  emptyIcon,
  gridClassName = "grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
}) {
  const [query, setQuery] = useState2("");
  const [selected, setSelected] = useState2({});
  const handleFilter = (key, value) => setSelected((s) => ({ ...s, [key]: value }));
  const filtered = useMemo2(() => {
    const q = query.trim().toLowerCase();
    return items.filter((item) => {
      if (q && !searchText(item).toLowerCase().includes(q)) return false;
      for (const f of filters) {
        const sel = selected[f.key];
        if (sel && f.value(item) !== sel) return false;
      }
      return true;
    });
  }, [items, query, selected, filters, searchText]);
  return /* @__PURE__ */ jsxs8("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxs8("div", { className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ jsxs8("div", { className: "relative w-full sm:max-w-xs", children: [
        /* @__PURE__ */ jsx9(Search2, { className: "pointer-events-none absolute inset-block-0 my-auto ms-2.5 size-4 text-muted-foreground" }),
        /* @__PURE__ */ jsx9(
          Input,
          {
            value: query,
            onChange: (e) => setQuery(e.target.value),
            placeholder: labels.searchPlaceholder,
            className: "ps-8",
            "aria-label": labels.searchPlaceholder
          }
        )
      ] }),
      filters.length > 0 && /* @__PURE__ */ jsx9("div", { className: "flex flex-wrap items-center gap-2", children: filters.map((f) => /* @__PURE__ */ jsxs8(
        NativeSelect,
        {
          value: selected[f.key] ?? "",
          onChange: (e) => handleFilter(f.key, e.target.value),
          "aria-label": f.label,
          className: "h-9 w-auto min-w-[8rem]",
          children: [
            /* @__PURE__ */ jsxs8("option", { value: "", children: [
              f.label,
              ": ",
              labels.all
            ] }),
            f.options.map((o) => /* @__PURE__ */ jsx9("option", { value: o.value, children: o.label }, o.value))
          ]
        },
        f.key
      )) })
    ] }),
    filtered.length === 0 ? /* @__PURE__ */ jsx9(
      EmptyState,
      {
        title: labels.emptyTitle,
        description: labels.emptyDescription,
        icon: emptyIcon ?? /* @__PURE__ */ jsx9(Inbox, {})
      }
    ) : /* @__PURE__ */ jsxs8(Fragment4, { children: [
      /* @__PURE__ */ jsx9("div", { className: gridClassName, children: filtered.map((item, i) => /* @__PURE__ */ jsx9("div", { children: renderCard(item) }, getKey(item, i))) }),
      /* @__PURE__ */ jsx9("p", { className: "text-xs text-muted-foreground", children: labels.countLabel(filtered.length, items.length) })
    ] })
  ] });
}
CardGrid.displayName = "CardGrid";

// src/components/charts/MiniBarChart.tsx
import { jsx as jsx10, jsxs as jsxs9 } from "react/jsx-runtime";
var MiniBarChart = ({
  data,
  height = 140,
  valueFormatter = (n) => n.toLocaleString()
}) => {
  if (data.length === 0) {
    return /* @__PURE__ */ jsx10(
      "div",
      {
        className: "flex items-center justify-center rounded-md border border-dashed text-xs text-muted-foreground",
        style: { height },
        children: "\u2014"
      }
    );
  }
  const max = Math.max(...data.map((d) => d.value), 1);
  const barH = (v) => Math.max(2, Math.round(v / max * (height - 28)));
  return /* @__PURE__ */ jsx10("div", { className: "flex items-end gap-1.5", style: { height }, role: "img", children: data.map((d, i) => /* @__PURE__ */ jsxs9("div", { className: "flex flex-1 flex-col items-center justify-end gap-1", children: [
    /* @__PURE__ */ jsx10("span", { className: "text-[10px] font-medium text-muted-foreground", children: d.value > 0 ? valueFormatter(d.value) : "" }),
    /* @__PURE__ */ jsx10(
      "div",
      {
        className: "w-full rounded-t bg-primary/80 transition-all duration-fast ease-standard hover:bg-primary",
        style: { height: barH(d.value) },
        title: `${d.sublabel ?? d.label}: ${valueFormatter(d.value)}`
      }
    ),
    /* @__PURE__ */ jsx10("span", { className: "max-w-full truncate text-[9px] text-muted-foreground", children: d.label })
  ] }, `${d.label}-${i}`)) });
};
MiniBarChart.displayName = "MiniBarChart";

// src/components/auth/AuthFlow.tsx
import { useState as useState9, useEffect as useEffect5 } from "react";
import { Loader2 as Loader25 } from "lucide-react";

// src/components/auth/AuthCard.tsx
import * as React2 from "react";
import { ShieldCheck } from "lucide-react";
import { jsx as jsx11, jsxs as jsxs10 } from "react/jsx-runtime";
var DEFAULT_BRAND = {
  initial: "S",
  logoUrl: void 0,
  // Default brand mark is an icon (not the "S" initial). Products override with
  // `logoUrl` (image) or a custom `icon`.
  icon: /* @__PURE__ */ jsx11(ShieldCheck, { className: "h-1/2 w-1/2", strokeWidth: 1.75 }),
  name: "Sentra Insight Hub",
  tagline: {
    en: "National Intelligence Analysis Platform",
    ar: "\u0645\u0646\u0635\u0629 \u0627\u0644\u062A\u062D\u0644\u064A\u0644 \u0627\u0644\u0627\u0633\u062A\u062E\u0628\u0627\u0631\u0627\u062A\u064A \u0627\u0644\u0648\u0637\u0646\u064A"
  },
  // No feature bullets by default — keeps the brand panel clean (mofa.id look).
  // Products that want them pass `bullets` explicitly.
  bullets: [],
  secureNote: { en: "Secure & Encrypted", ar: "\u0645\u0624\u0645\u0651\u0646 \u0648\u0645\u0634\u0641\u0651\u0631" }
};
var brandName = (brand, ar) => {
  const n = brand.name;
  if (typeof n === "string") return n;
  return (ar ? n.ar || n.en : n.en || n.ar) ?? "";
};
var BrandCrest = ({
  brand,
  size,
  onPanel
}) => {
  const box = size === "lg" ? "h-20 w-20" : "h-12 w-12";
  const text = size === "lg" ? "text-3xl" : "text-xl";
  const [logoFailed, setLogoFailed] = React2.useState(false);
  React2.useEffect(() => {
    setLogoFailed(false);
  }, [brand.logoUrl]);
  const rawLogo = (brand.logoUrl ?? "").trim();
  const hasRealLogo = rawLogo !== "" && !rawLogo.endsWith("/sentra-logo-full.png");
  if (hasRealLogo && !logoFailed) {
    return /* @__PURE__ */ jsx11("div", { className: cn("flex items-center justify-center", box), children: /* @__PURE__ */ jsx11(
      "img",
      {
        src: brand.logoUrl,
        alt: typeof brand.name === "string" ? brand.name : brand.name.en,
        className: "h-full w-full rounded-2xl object-contain",
        onError: () => setLogoFailed(true)
      }
    ) });
  }
  const crestChrome = cn(
    "flex items-center justify-center rounded-2xl",
    box,
    onPanel ? "border-2 border-primary-foreground/30 bg-primary-foreground/10" : "bg-primary/10",
    onPanel ? "text-primary-foreground" : "text-primary"
  );
  if (brand.icon !== null && brand.icon !== void 0) {
    return /* @__PURE__ */ jsx11("div", { className: crestChrome, "aria-hidden": "true", children: brand.icon });
  }
  return /* @__PURE__ */ jsx11("div", { className: crestChrome, children: /* @__PURE__ */ jsx11("span", { className: cn("font-bold tracking-tight", text), children: brand.initial }) });
};
BrandCrest.displayName = "BrandCrest";
var BrandPanel = ({ brand, ar }) => /* @__PURE__ */ jsxs10("div", { className: "relative hidden lg:flex lg:w-1/2 flex-col items-center justify-center overflow-hidden px-12 py-16 bg-primary", children: [
  /* @__PURE__ */ jsx11(
    "div",
    {
      className: "absolute inset-0 opacity-[0.08]",
      style: {
        backgroundImage: "radial-gradient(circle, hsl(var(--primary-foreground)) 1px, transparent 1px)",
        backgroundSize: "24px 24px"
      },
      "aria-hidden": "true"
    }
  ),
  /* @__PURE__ */ jsxs10("div", { className: "relative z-10 flex w-full max-w-sm flex-col items-center gap-7 text-center text-primary-foreground", children: [
    /* @__PURE__ */ jsx11(BrandCrest, { brand, size: "lg", onPanel: true }),
    /* @__PURE__ */ jsxs10("div", { className: "flex flex-col gap-2.5", children: [
      /* @__PURE__ */ jsx11("h1", { className: "text-[2rem] font-bold leading-tight tracking-tight", children: brandName(brand, ar) }),
      /* @__PURE__ */ jsx11("p", { className: "text-sm leading-relaxed text-primary-foreground/75", children: ar ? brand.tagline.ar : brand.tagline.en })
    ] }),
    brand.bullets.length > 0 && /* @__PURE__ */ jsx11("ul", { className: "mt-1 flex w-full flex-col items-center gap-3.5 text-center text-sm text-primary-foreground/85", children: brand.bullets.map((bullet, i) => /* @__PURE__ */ jsxs10("li", { className: "flex items-center justify-center gap-2.5", children: [
      /* @__PURE__ */ jsx11(
        "span",
        {
          className: "flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary-foreground/15",
          "aria-hidden": "true",
          children: /* @__PURE__ */ jsx11("svg", { className: "h-2.5 w-2.5", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "3", children: /* @__PURE__ */ jsx11("path", { d: "M20 6 9 17l-5-5" }) })
        }
      ),
      /* @__PURE__ */ jsx11("span", { className: "leading-snug", children: ar ? bullet.ar : bullet.en })
    ] }, i)) }),
    /* @__PURE__ */ jsxs10("div", { className: "mt-3 flex items-center gap-2 text-xs text-primary-foreground/55", children: [
      /* @__PURE__ */ jsxs10("svg", { className: "h-3.5 w-3.5", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", "aria-hidden": "true", children: [
        /* @__PURE__ */ jsx11("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2", ry: "2" }),
        /* @__PURE__ */ jsx11("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" })
      ] }),
      ar ? brand.secureNote.ar : brand.secureNote.en
    ] })
  ] })
] });
BrandPanel.displayName = "BrandPanel";
var AuthCard = ({
  children,
  language = "en",
  layout = "split",
  onLanguageToggle,
  brand: brandProp,
  className
}) => {
  const ar = language === "ar";
  const dir = ar ? "rtl" : "ltr";
  const brand = {
    ...DEFAULT_BRAND,
    ...brandProp,
    // Preserve the default icon unless the caller explicitly set `icon` (incl. null).
    icon: brandProp && "icon" in brandProp ? brandProp.icon : DEFAULT_BRAND.icon,
    tagline: { ...DEFAULT_BRAND.tagline, ...brandProp?.tagline },
    bullets: brandProp?.bullets ?? DEFAULT_BRAND.bullets,
    secureNote: { ...DEFAULT_BRAND.secureNote, ...brandProp?.secureNote }
  };
  const langToggle = onLanguageToggle && /* @__PURE__ */ jsx11("div", { className: "absolute end-4 top-4 z-20", children: /* @__PURE__ */ jsx11(
    Button,
    {
      variant: "ghost",
      size: "sm",
      onClick: onLanguageToggle,
      className: "text-xs font-medium",
      "aria-label": ar ? "Switch to English" : "\u0627\u0644\u062A\u0628\u062F\u064A\u0644 \u0625\u0644\u0649 \u0627\u0644\u0639\u0631\u0628\u064A\u0629",
      children: ar ? "EN" : "\u0639"
    }
  ) });
  if (layout === "centered" || layout === "minimal") {
    const bare = layout === "minimal";
    return /* @__PURE__ */ jsxs10(
      "div",
      {
        dir,
        className: cn(
          "relative flex min-h-screen w-full flex-col items-center justify-center bg-background px-4 py-12",
          className
        ),
        children: [
          langToggle,
          /* @__PURE__ */ jsxs10("div", { className: "mb-8 flex flex-col items-center gap-3", children: [
            /* @__PURE__ */ jsx11(BrandCrest, { brand, size: "md", onPanel: false }),
            /* @__PURE__ */ jsxs10("div", { className: "flex flex-col items-center gap-1 text-center", children: [
              /* @__PURE__ */ jsx11("span", { className: "text-base font-semibold text-foreground", children: brandName(brand, ar) }),
              /* @__PURE__ */ jsx11("span", { className: "text-xs text-muted-foreground", children: ar ? brand.tagline.ar : brand.tagline.en })
            ] })
          ] }),
          bare ? /* @__PURE__ */ jsx11("div", { className: "w-full max-w-sm", children }) : /* @__PURE__ */ jsx11(Card, { className: "w-full max-w-sm shadow-lg", children: /* @__PURE__ */ jsx11(CardContent, { className: "pt-6", children }) })
        ]
      }
    );
  }
  const reverse = layout === "split-reverse";
  return /* @__PURE__ */ jsxs10(
    "div",
    {
      dir,
      className: cn(
        "relative flex min-h-screen w-full",
        reverse ? "flex-row-reverse" : "flex-row",
        className
      ),
      children: [
        langToggle,
        /* @__PURE__ */ jsx11(BrandPanel, { brand, ar }),
        /* @__PURE__ */ jsxs10("div", { className: "flex flex-1 flex-col items-center justify-center bg-background px-6 py-12 lg:w-1/2", children: [
          /* @__PURE__ */ jsxs10("div", { className: "mb-8 flex flex-col items-center gap-2 lg:hidden", children: [
            /* @__PURE__ */ jsx11(BrandCrest, { brand, size: "md", onPanel: false }),
            /* @__PURE__ */ jsx11("span", { className: "text-sm font-semibold text-foreground", children: brandName(brand, ar) })
          ] }),
          /* @__PURE__ */ jsx11("div", { className: "w-full max-w-sm", children })
        ] })
      ]
    }
  );
};
AuthCard.displayName = "AuthCard";
var AuthCard_default = AuthCard;

// src/components/auth/LoginForm.tsx
import { useState as useState5, useEffect as useEffect4, useRef as useRef3, useCallback } from "react";
import { Mail, ArrowLeft, Loader2, Github, Terminal } from "lucide-react";

// src/components/auth/AuthErrorAlert.tsx
import { jsx as jsx12 } from "react/jsx-runtime";
var AuthErrorAlert = ({ error }) => {
  if (!error) return null;
  return /* @__PURE__ */ jsx12(
    "div",
    {
      role: "alert",
      className: "rounded-md border border-destructive/50 bg-destructive/10 px-4 py-3 text-sm text-destructive text-start",
      children: error
    }
  );
};
AuthErrorAlert.displayName = "AuthErrorAlert";
var AuthErrorAlert_default = AuthErrorAlert;

// src/components/auth/AuthStepHeader.tsx
import { jsx as jsx13, jsxs as jsxs11 } from "react/jsx-runtime";
var AuthStepHeader = ({ icon, title, subtitle, centered = false }) => {
  return /* @__PURE__ */ jsxs11("div", { className: `flex flex-col gap-1 ${centered ? "items-center text-center" : ""}`, children: [
    icon && // Icon alignment must follow the text: centered when `centered`, else
    // aligned to the start (matches the start-aligned title) instead of mx-auto.
    /* @__PURE__ */ jsx13(
      "div",
      {
        className: `mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary ${centered ? "mx-auto" : "me-auto"}`,
        children: icon
      }
    ),
    /* @__PURE__ */ jsx13("h2", { className: `text-2xl font-bold text-foreground ${centered ? "text-center" : "text-start"}`, children: title }),
    subtitle && /* @__PURE__ */ jsx13("p", { className: `text-sm text-muted-foreground ${centered ? "text-center" : "text-start"}`, children: subtitle })
  ] });
};
AuthStepHeader.displayName = "AuthStepHeader";
var AuthStepHeader_default = AuthStepHeader;

// src/components/auth/PasswordInput.tsx
import { forwardRef, useState as useState4 } from "react";
import { Eye as Eye2, EyeOff as EyeOff2 } from "lucide-react";
import { jsx as jsx14, jsxs as jsxs12 } from "react/jsx-runtime";
var PasswordInput = forwardRef(
  ({ className, language = "en", dir, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState4(false);
    const ariaLabelShow = language === "ar" ? "\u0625\u0638\u0647\u0627\u0631 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631" : "Show password";
    const ariaLabelHide = language === "ar" ? "\u0625\u062E\u0641\u0627\u0621 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631" : "Hide password";
    const handleToggle = () => setShowPassword((prev) => !prev);
    return /* @__PURE__ */ jsxs12("div", { className: "relative", children: [
      /* @__PURE__ */ jsx14(
        Input,
        {
          ref,
          type: showPassword ? "text" : "password",
          dir,
          className: cn("pe-10", className),
          ...props
        }
      ),
      /* @__PURE__ */ jsx14(
        "button",
        {
          type: "button",
          onClick: handleToggle,
          "aria-label": showPassword ? ariaLabelHide : ariaLabelShow,
          "aria-controls": props.id,
          "aria-pressed": showPassword,
          className: "absolute end-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors duration-fast ease-standard focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm",
          tabIndex: 0,
          children: showPassword ? /* @__PURE__ */ jsx14(EyeOff2, { className: "h-4 w-4", "aria-hidden": "true" }) : /* @__PURE__ */ jsx14(Eye2, { className: "h-4 w-4", "aria-hidden": "true" })
        }
      )
    ] });
  }
);
PasswordInput.displayName = "PasswordInput";
var PasswordInput_default = PasswordInput;

// src/components/auth/OTPBoxGroup.tsx
import { useEffect as useEffect3, useRef as useRef2 } from "react";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { jsx as jsx15 } from "react/jsx-runtime";
var OTPBoxGroup = ({
  value,
  onChange,
  onComplete,
  disabled = false,
  ariaLabel,
  autoFocus = false
}) => {
  const hasCalledComplete = useRef2(false);
  useEffect3(() => {
    if (value.length === 6 && !hasCalledComplete.current) {
      hasCalledComplete.current = true;
      onComplete?.(value);
    }
    if (value.length < 6) {
      hasCalledComplete.current = false;
    }
  }, [value, onComplete]);
  return /* @__PURE__ */ jsx15("div", { className: "flex justify-center my-2", children: /* @__PURE__ */ jsx15(
    InputOTP,
    {
      maxLength: 6,
      value,
      onChange,
      disabled,
      pattern: REGEXP_ONLY_DIGITS,
      autoFocus,
      "aria-label": ariaLabel,
      containerClassName: "gap-2",
      dir: "ltr",
      children: /* @__PURE__ */ jsx15(InputOTPGroup, { children: [0, 1, 2, 3, 4, 5].map((i) => /* @__PURE__ */ jsx15(
        InputOTPSlot,
        {
          index: i,
          className: "h-12 w-12 text-lg font-mono border-border first:rounded-s-md last:rounded-e-md sm:h-12 sm:w-12"
        },
        i
      )) })
    }
  ) });
};
OTPBoxGroup.displayName = "OTPBoxGroup";
var OTPBoxGroup_default = OTPBoxGroup;

// src/components/auth/LoginForm.tsx
import { Fragment as Fragment5, jsx as jsx16, jsxs as jsxs13 } from "react/jsx-runtime";
var DEFAULT_LOGIN_METHODS = ["email_password", "magic_link", "otp"];
var GoogleIcon = () => /* @__PURE__ */ jsxs13("svg", { className: "h-4 w-4", viewBox: "0 0 24 24", "aria-hidden": "true", children: [
  /* @__PURE__ */ jsx16("path", { d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z", fill: "#4285F4" }),
  /* @__PURE__ */ jsx16("path", { d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z", fill: "#34A853" }),
  /* @__PURE__ */ jsx16("path", { d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z", fill: "#FBBC05" }),
  /* @__PURE__ */ jsx16("path", { d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z", fill: "#EA4335" })
] });
GoogleIcon.displayName = "GoogleIcon";
var MicrosoftIcon = () => /* @__PURE__ */ jsxs13("svg", { className: "h-4 w-4", viewBox: "0 0 24 24", "aria-hidden": "true", children: [
  /* @__PURE__ */ jsx16("path", { d: "M11.4 2H2v9.4h9.4V2z", fill: "#F25022" }),
  /* @__PURE__ */ jsx16("path", { d: "M22 2h-9.4v9.4H22V2z", fill: "#7FBA00" }),
  /* @__PURE__ */ jsx16("path", { d: "M11.4 12.6H2V22h9.4v-9.4z", fill: "#00A4EF" }),
  /* @__PURE__ */ jsx16("path", { d: "M22 12.6h-9.4V22H22v-9.4z", fill: "#FFB900" })
] });
MicrosoftIcon.displayName = "MicrosoftIcon";
var LoginForm = ({
  authClient,
  onSuccess,
  on2FA,
  onOAuthRedirect,
  onForgotPassword,
  language = "en",
  showRememberMe = true
}) => {
  const ar = language === "ar";
  const [step, setStep] = useState5("email");
  const [otpSource, setOtpSource] = useState5("post-password");
  const [email, setEmail] = useState5("");
  const [password, setPassword] = useState5("");
  const [otpValue, setOtpValue] = useState5("");
  const [challengeToken, setChallengeToken] = useState5();
  const [resolvedMethods, setResolvedMethods] = useState5(DEFAULT_LOGIN_METHODS);
  const [isResolvingMethods, setIsResolvingMethods] = useState5(false);
  const [emailError, setEmailError] = useState5("");
  const [error, setError] = useState5("");
  const [hideSocialButtons, setHideSocialButtons] = useState5(false);
  const [countdown, setCountdown] = useState5(0);
  const countdownRef = useRef3(null);
  const [rememberMe, setRememberMe] = useState5(false);
  const [isSubmitting, setIsSubmitting] = useState5(false);
  const [isSendingOtp, setIsSendingOtp] = useState5(false);
  const [isVerifying, setIsVerifying] = useState5(false);
  const [isDevLoggingIn, setIsDevLoggingIn] = useState5(false);
  const liveRef = useRef3(null);
  const startCountdown = useCallback((seconds = 30) => {
    setCountdown(seconds);
    if (countdownRef.current) clearInterval(countdownRef.current);
    countdownRef.current = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          if (countdownRef.current) clearInterval(countdownRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1e3);
  }, []);
  useEffect4(() => () => {
    if (countdownRef.current) clearInterval(countdownRef.current);
  }, []);
  const dispatchLoginOtp = useCallback(async (emailAddr) => {
    if (authClient.sendLoginOtp) {
      return authClient.sendLoginOtp(emailAddr);
    }
    return authClient.sendOtp(emailAddr);
  }, [authClient]);
  const handleEmailContinue = async (e) => {
    e.preventDefault();
    setError("");
    setEmailError("");
    const trimmed = email.trim();
    if (!trimmed || !trimmed.includes("@")) {
      setEmailError(ar ? "\u064A\u0631\u062C\u0649 \u0625\u062F\u062E\u0627\u0644 \u0628\u0631\u064A\u062F \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0635\u062D\u064A\u062D." : "Please enter a valid email address.");
      return;
    }
    setIsResolvingMethods(true);
    try {
      if (authClient.getLoginMethods) {
        const resp = await authClient.getLoginMethods(trimmed);
        const methods = resp?.methods;
        if (Array.isArray(methods) && methods.length > 0) {
          setResolvedMethods(methods);
          setHideSocialButtons(false);
        } else {
          setResolvedMethods([]);
          setHideSocialButtons(true);
        }
      } else {
        setResolvedMethods(DEFAULT_LOGIN_METHODS);
      }
    } catch {
      setResolvedMethods(DEFAULT_LOGIN_METHODS);
    } finally {
      setIsResolvingMethods(false);
    }
    setStep("credentials");
  };
  const handleCredentialsSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);
    try {
      const result = await authClient.login(email.trim(), password, showRememberMe ? rememberMe : false);
      if (result.challenge === "otp") {
        setChallengeToken(result.challenge_token);
        setOtpSource("post-password");
        setStep("otp");
        startCountdown(30);
        setOtpValue("");
      } else if (result.challenge === "2fa") {
        on2FA?.(result.challenge_token);
      } else {
        onSuccess?.();
      }
    } catch (err) {
      const message = err?.message || "";
      const status = err?.status;
      if (status === 403) {
        setHideSocialButtons(true);
        setError(ar ? "\u0637\u0631\u064A\u0642\u0629 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0647\u0630\u0647 \u063A\u064A\u0631 \u0645\u0641\u0639\u0651\u0644\u0629 \u0644\u062D\u0633\u0627\u0628\u0643." : "This login method is not enabled for your account.");
      } else if (message.includes("locked") || status === 423) {
        const minutes = message.match(/(\d+)/)?.[1] || "?";
        setError(ar ? `\u0627\u0644\u062D\u0633\u0627\u0628 \u0645\u0642\u0641\u0644. \u062D\u0627\u0648\u0644 \u0645\u062C\u062F\u062F\u0627\u064B \u0628\u0639\u062F ${minutes} \u062F\u0642\u064A\u0642\u0629.` : `Account locked. Try again in ${minutes} minutes.`);
      } else if (status === 0 || message.toLowerCase().includes("network") || message.toLowerCase().includes("fetch")) {
        setError(ar ? "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u0627\u062A\u0635\u0627\u0644. \u064A\u0631\u062C\u0649 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649." : "Connection error. Please try again.");
      } else {
        setError(ar ? "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0623\u0648 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629." : "Email or password incorrect.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleSendEmailCode = async () => {
    setError("");
    setIsSendingOtp(true);
    try {
      await dispatchLoginOtp(email.trim());
      setChallengeToken(void 0);
      setOtpSource("passwordless");
      setStep("otp");
      startCountdown(30);
      setOtpValue("");
    } catch {
      setError(ar ? "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u0627\u062A\u0635\u0627\u0644. \u064A\u0631\u062C\u0649 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649." : "Connection error. Please try again.");
    } finally {
      setIsSendingOtp(false);
    }
  };
  const handleSendMagicLink = async () => {
    setError("");
    setIsSendingOtp(true);
    try {
      await dispatchLoginOtp(email.trim());
      setChallengeToken(void 0);
      setOtpSource("passwordless");
      setStep("otp");
      startCountdown(30);
      setOtpValue("");
    } catch {
      setError(ar ? "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u0627\u062A\u0635\u0627\u0644. \u064A\u0631\u062C\u0649 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649." : "Connection error. Please try again.");
    } finally {
      setIsSendingOtp(false);
    }
  };
  const handleOtpComplete = useCallback(async (value) => {
    if (liveRef.current) {
      liveRef.current.textContent = ar ? "\u062C\u0627\u0631\u064D \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0631\u0645\u0632..." : "Submitting code...";
    }
    await handleOtpSubmit(value);
  }, [challengeToken, ar]);
  const handleOtpSubmit = async (codeOverride) => {
    const code = codeOverride ?? otpValue;
    if (code.length < 6) return;
    setError("");
    setIsVerifying(true);
    try {
      const result = await authClient.verifyOtp(email.trim(), code, challengeToken);
      if (result.challenge === "2fa") {
        on2FA?.(result.challenge_token);
      } else {
        onSuccess?.();
      }
    } catch (err) {
      const message = err?.message || "";
      setOtpValue("");
      if (message.includes("expired")) {
        setError(ar ? "\u0627\u0646\u062A\u0647\u062A \u0635\u0644\u0627\u062D\u064A\u0629 \u0627\u0644\u0631\u0645\u0632. \u0627\u0637\u0644\u0628 \u0631\u0645\u0632\u0627\u064B \u062C\u062F\u064A\u062F\u0627\u064B." : "Code has expired. Request a new one.");
      } else if (message.includes("too_many") || message.includes("attempts")) {
        setError(ar ? "\u0645\u062D\u0627\u0648\u0644\u0627\u062A \u0643\u062B\u064A\u0631\u0629 \u062C\u062F\u0627\u064B. \u064A\u0631\u062C\u0649 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0645\u0646 \u062C\u062F\u064A\u062F." : "Too many attempts. Please sign in again.");
        setTimeout(() => {
          setStep("email");
          setOtpValue("");
        }, 2500);
      } else {
        setError(ar ? "\u0627\u0644\u0631\u0645\u0632 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D. \u064A\u0631\u062C\u0649 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649." : "Incorrect code. Please try again.");
      }
    } finally {
      setIsVerifying(false);
    }
  };
  const handleResendOtp = async () => {
    if (countdown > 0) return;
    setError("");
    setIsSendingOtp(true);
    try {
      await authClient.sendOtp(email.trim());
      startCountdown(30);
      setOtpValue("");
    } catch {
      setError(ar ? "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u0627\u062A\u0635\u0627\u0644. \u064A\u0631\u062C\u0649 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649." : "Connection error. Please try again.");
    } finally {
      setIsSendingOtp(false);
    }
  };
  const handleDevLogin = async () => {
    if (!authClient.devLogin) return;
    setError("");
    setIsDevLoggingIn(true);
    try {
      await authClient.devLogin();
      onSuccess?.();
    } catch {
      setError(ar ? "\u062E\u0637\u0623 \u0641\u064A \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0643\u0645\u0637\u0648\u0651\u0631. \u064A\u0631\u062C\u0649 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649." : "Dev login failed. Please try again.");
    } finally {
      setIsDevLoggingIn(false);
    }
  };
  const handleOAuth = (provider) => {
    if (!authClient.getOAuthUrl) return;
    const url = authClient.getOAuthUrl(provider);
    if (!url) return;
    if (onOAuthRedirect) {
      onOAuthRedirect(url);
    } else {
      window.location.href = url;
    }
  };
  const hasEmailPassword = resolvedMethods.includes("email_password");
  const hasMagicLink = resolvedMethods.includes("magic_link");
  const hasEmailOtp = resolvedMethods.includes("otp");
  const hasGoogle = !hideSocialButtons && resolvedMethods.includes("google_oauth") && !!authClient.getOAuthUrl;
  const hasGitHub = !hideSocialButtons && resolvedMethods.includes("github") && !!authClient.getOAuthUrl;
  const hasAzure = !hideSocialButtons && resolvedMethods.includes("azure") && !!authClient.getOAuthUrl;
  const hasSocialButtons = hasGoogle || hasGitHub || hasAzure;
  const isBlocked = resolvedMethods.length === 0;
  const resetToEmail = () => {
    setStep("email");
    setError("");
    setPassword("");
    setOtpValue("");
    setHideSocialButtons(false);
  };
  if (step === "otp") {
    return /* @__PURE__ */ jsxs13("div", { className: "flex flex-col gap-6", children: [
      /* @__PURE__ */ jsx16(
        AuthStepHeader_default,
        {
          icon: /* @__PURE__ */ jsx16(Mail, { className: "h-7 w-7", "aria-hidden": "true" }),
          title: ar ? "\u062A\u062D\u0642\u0642 \u0645\u0646 \u0628\u0631\u064A\u062F\u0643 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A" : "Check your email",
          subtitle: /* @__PURE__ */ jsxs13(Fragment5, { children: [
            ar ? "\u0623\u0631\u0633\u0644\u0646\u0627 \u0631\u0645\u0632\u0627\u064B \u0645\u0643\u0648\u0646\u0627\u064B \u0645\u0646 6 \u0623\u0631\u0642\u0627\u0645 \u0625\u0644\u0649 " : "We sent a 6-digit code to ",
            /* @__PURE__ */ jsx16("span", { className: "font-medium text-foreground", dir: "ltr", children: email })
          ] }),
          centered: true
        }
      ),
      /* @__PURE__ */ jsx16("p", { ref: liveRef, "aria-live": "polite", "aria-atomic": "true", className: "sr-only" }),
      /* @__PURE__ */ jsx16(AuthErrorAlert_default, { error }),
      /* @__PURE__ */ jsxs13("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ jsx16(Label, { className: "sr-only", children: ar ? "\u0623\u062F\u062E\u0644 \u0627\u0644\u0631\u0645\u0632" : "Enter code" }),
        /* @__PURE__ */ jsx16(
          OTPBoxGroup_default,
          {
            value: otpValue,
            onChange: setOtpValue,
            onComplete: handleOtpComplete,
            disabled: isVerifying,
            ariaLabel: ar ? "\u0623\u062F\u062E\u0644 \u0627\u0644\u0631\u0645\u0632" : "Enter code",
            autoFocus: true
          }
        ),
        /* @__PURE__ */ jsx16("p", { className: "text-xs text-muted-foreground text-center tabular-nums", "aria-live": "polite", "aria-atomic": "true", children: ar ? "\u064A\u0646\u062A\u0647\u064A \u062E\u0644\u0627\u0644 5:00" : "Expires in 5:00" })
      ] }),
      /* @__PURE__ */ jsx16(
        Button,
        {
          type: "button",
          className: "w-full",
          disabled: otpValue.length < 6 || isVerifying,
          onClick: () => handleOtpSubmit(),
          children: isVerifying ? /* @__PURE__ */ jsxs13("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx16(Loader2, { className: "h-4 w-4 animate-spin", "aria-hidden": "true" }),
            ar ? "\u062C\u0627\u0631\u064D \u0627\u0644\u062A\u062D\u0642\u0642..." : "Verifying..."
          ] }) : ar ? "\u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0631\u0645\u0632" : "Verify code"
        }
      ),
      /* @__PURE__ */ jsxs13("div", { className: "flex flex-col items-center gap-1 text-center", children: [
        /* @__PURE__ */ jsx16("p", { className: "text-xs text-muted-foreground", children: ar ? "\u0644\u0645 \u062A\u0633\u062A\u0644\u0645\u0647\u061F" : "Didn't receive it?" }),
        /* @__PURE__ */ jsx16(
          "button",
          {
            type: "button",
            onClick: handleResendOtp,
            disabled: countdown > 0 || isSendingOtp,
            className: "text-xs font-medium text-primary hover:underline disabled:text-muted-foreground disabled:no-underline disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm",
            children: ar ? "\u0625\u0639\u0627\u062F\u0629 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0631\u0645\u0632" : "Resend code"
          }
        ),
        countdown > 0 && /* @__PURE__ */ jsx16("p", { className: "text-xs text-muted-foreground tabular-nums", "aria-live": "polite", "aria-atomic": "true", children: ar ? `\u0625\u0639\u0627\u062F\u0629 \u0625\u0631\u0633\u0627\u0644 \u0628\u0639\u062F ${countdown} \u062B\u0627\u0646\u064A\u0629` : `Resend in ${countdown}s` })
      ] }),
      /* @__PURE__ */ jsxs13(
        "button",
        {
          type: "button",
          onClick: () => {
            setStep("credentials");
            setError("");
            setOtpValue("");
          },
          "data-otp-source": otpSource,
          className: "flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors duration-fast ease-standard self-center mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm",
          children: [
            /* @__PURE__ */ jsx16(ArrowLeft, { className: "h-3.5 w-3.5 rtl:rotate-180", "aria-hidden": "true" }),
            ar ? "\u0627\u0644\u0639\u0648\u062F\u0629" : "Back"
          ]
        }
      )
    ] });
  }
  if (step === "credentials") {
    return /* @__PURE__ */ jsxs13("div", { className: "flex flex-col gap-6", children: [
      /* @__PURE__ */ jsx16(
        AuthStepHeader_default,
        {
          title: ar ? "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644" : "Sign in",
          subtitle: /* @__PURE__ */ jsxs13(Fragment5, { children: [
            ar ? "\u0643\u0640 " : "as ",
            /* @__PURE__ */ jsx16("span", { className: "font-medium text-foreground", dir: "ltr", children: email })
          ] })
        }
      ),
      /* @__PURE__ */ jsx16(AuthErrorAlert_default, { error }),
      isBlocked && /* @__PURE__ */ jsx16("p", { className: "text-sm text-muted-foreground text-center py-2", children: ar ? "\u0644\u0627 \u064A\u0645\u0643\u0646 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0628\u0647\u0630\u0627 \u0627\u0644\u062D\u0633\u0627\u0628 \u0647\u0646\u0627. \u062A\u0648\u0627\u0635\u0644 \u0645\u0639 \u0627\u0644\u0645\u0633\u0624\u0648\u0644." : "This account can't sign in here. Contact your administrator." }),
      !isBlocked && hasEmailPassword && /* @__PURE__ */ jsxs13("form", { noValidate: true, onSubmit: handleCredentialsSubmit, className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ jsxs13("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ jsxs13("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsx16(Label, { htmlFor: "login-password", className: "text-sm font-medium text-foreground text-start", children: ar ? "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631" : "Password" }),
            onForgotPassword ? /* @__PURE__ */ jsx16(
              "button",
              {
                type: "button",
                onClick: onForgotPassword,
                className: "text-xs text-primary hover:underline text-end self-end focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm",
                children: ar ? "\u0646\u0633\u064A\u062A \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631\u061F" : "Forgot password?"
              }
            ) : /* @__PURE__ */ jsx16("a", { href: "#", tabIndex: -1, className: "text-xs text-primary hover:underline text-end self-end focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm", children: ar ? "\u0646\u0633\u064A\u062A \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631\u061F" : "Forgot password?" })
          ] }),
          /* @__PURE__ */ jsx16(
            PasswordInput_default,
            {
              id: "login-password",
              language,
              autoComplete: "current-password",
              placeholder: ar ? "\u0623\u062F\u062E\u0644 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631" : "Enter your password",
              value: password,
              onChange: (e) => setPassword(e.target.value),
              disabled: isSubmitting,
              autoFocus: true
            }
          )
        ] }),
        showRememberMe && /* @__PURE__ */ jsxs13("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx16(
            Checkbox,
            {
              id: "login-remember-me",
              checked: rememberMe,
              onCheckedChange: (checked) => setRememberMe(checked === true),
              disabled: isSubmitting,
              "aria-label": ar ? "\u062A\u0630\u0643\u0631\u0646\u064A" : "Remember me"
            }
          ),
          /* @__PURE__ */ jsx16(Label, { htmlFor: "login-remember-me", className: "text-sm text-foreground cursor-pointer select-none ms-1", children: ar ? "\u062A\u0630\u0643\u0631\u0646\u064A" : "Remember me" })
        ] }),
        /* @__PURE__ */ jsx16(Button, { type: "submit", className: "w-full", disabled: isSubmitting, children: isSubmitting ? /* @__PURE__ */ jsxs13("span", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx16(Loader2, { className: "h-4 w-4 animate-spin", "aria-hidden": "true" }),
          ar ? "\u062C\u0627\u0631\u064D \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644..." : "Signing in..."
        ] }) : ar ? "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644" : "Sign in" })
      ] }),
      !isBlocked && hasEmailPassword && (hasMagicLink || hasEmailOtp || hasSocialButtons) && /* @__PURE__ */ jsxs13("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx16(Separator, { className: "flex-1" }),
        /* @__PURE__ */ jsx16("span", { className: "text-xs text-muted-foreground shrink-0", children: ar ? "\u0623\u0648 \u062A\u0627\u0628\u0639 \u0639\u0628\u0631" : "or continue with" }),
        /* @__PURE__ */ jsx16(Separator, { className: "flex-1" })
      ] }),
      !isBlocked && !hasEmailPassword && (hasMagicLink || hasEmailOtp || hasSocialButtons) && /* @__PURE__ */ jsx16("p", { className: "text-xs text-muted-foreground text-center", children: ar ? "\u0627\u062E\u062A\u0631 \u0637\u0631\u064A\u0642\u0629 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644" : "Choose a sign-in method" }),
      !isBlocked && (hasMagicLink || hasEmailOtp || hasSocialButtons) && /* @__PURE__ */ jsxs13("div", { className: "flex flex-col gap-2", children: [
        hasMagicLink && /* @__PURE__ */ jsxs13(Button, { type: "button", variant: "outline", className: "w-full gap-2", onClick: handleSendMagicLink, disabled: isSendingOtp || isSubmitting, children: [
          isSendingOtp ? /* @__PURE__ */ jsx16(Loader2, { className: "h-4 w-4 animate-spin", "aria-hidden": "true" }) : /* @__PURE__ */ jsx16(Mail, { className: "h-4 w-4", "aria-hidden": "true" }),
          ar ? "\u0625\u0631\u0633\u0627\u0644 \u0631\u0627\u0628\u0637 \u0627\u0644\u062F\u062E\u0648\u0644" : "Send magic link"
        ] }),
        hasEmailOtp && /* @__PURE__ */ jsxs13(Button, { type: "button", variant: "outline", className: "w-full gap-2", onClick: handleSendEmailCode, disabled: isSendingOtp || isSubmitting, children: [
          isSendingOtp ? /* @__PURE__ */ jsx16(Loader2, { className: "h-4 w-4 animate-spin", "aria-hidden": "true" }) : /* @__PURE__ */ jsx16(Mail, { className: "h-4 w-4", "aria-hidden": "true" }),
          ar ? "\u0623\u0631\u0633\u0644 \u0644\u064A \u0631\u0645\u0632\u0627\u064B \u0639\u0628\u0631 \u0627\u0644\u0628\u0631\u064A\u062F" : "Email me a code"
        ] }),
        hasGoogle && /* @__PURE__ */ jsxs13(Button, { type: "button", variant: "outline", className: "w-full gap-2", onClick: () => handleOAuth("google"), disabled: isSubmitting || isSendingOtp, children: [
          /* @__PURE__ */ jsx16(GoogleIcon, {}),
          ar ? "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0639\u0628\u0631 Google" : "Sign in with Google"
        ] }),
        hasGitHub && /* @__PURE__ */ jsxs13(Button, { type: "button", variant: "outline", className: "w-full gap-2", onClick: () => handleOAuth("github"), disabled: isSubmitting || isSendingOtp, children: [
          /* @__PURE__ */ jsx16(Github, { className: "h-4 w-4", "aria-hidden": "true" }),
          ar ? "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0639\u0628\u0631 GitHub" : "Sign in with GitHub"
        ] }),
        hasAzure && /* @__PURE__ */ jsxs13(Button, { type: "button", variant: "outline", className: "w-full gap-2", onClick: () => handleOAuth("azure"), disabled: isSubmitting || isSendingOtp, children: [
          /* @__PURE__ */ jsx16(MicrosoftIcon, {}),
          ar ? "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0639\u0628\u0631 Microsoft" : "Sign in with Microsoft"
        ] })
      ] }),
      /* @__PURE__ */ jsxs13(
        "button",
        {
          type: "button",
          onClick: resetToEmail,
          className: "flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors duration-fast ease-standard self-center mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm",
          children: [
            /* @__PURE__ */ jsx16(ArrowLeft, { className: "h-3.5 w-3.5 rtl:rotate-180", "aria-hidden": "true" }),
            ar ? "\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0628\u0631\u064A\u062F \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0645\u062E\u062A\u0644\u0641" : "Use a different email"
          ]
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxs13("div", { className: "flex flex-col gap-6", children: [
    !!authClient.devLogin && /* @__PURE__ */ jsxs13(Fragment5, { children: [
      /* @__PURE__ */ jsxs13(
        Button,
        {
          type: "button",
          variant: "outline",
          className: "w-full gap-2 border-dashed text-muted-foreground hover:text-foreground hover:border-solid",
          onClick: handleDevLogin,
          disabled: isDevLoggingIn,
          "aria-label": ar ? "\u0627\u0644\u062F\u062E\u0648\u0644 \u0643\u0645\u0637\u0648\u0651\u0631" : "Continue as dev",
          children: [
            isDevLoggingIn ? /* @__PURE__ */ jsx16(Loader2, { className: "h-4 w-4 animate-spin", "aria-hidden": "true" }) : /* @__PURE__ */ jsx16(Terminal, { className: "h-4 w-4", "aria-hidden": "true" }),
            ar ? "\u0627\u0644\u062F\u062E\u0648\u0644 \u0643\u0645\u0637\u0648\u0651\u0631" : "Continue as dev"
          ]
        }
      ),
      /* @__PURE__ */ jsxs13("div", { className: "flex items-center gap-3", "aria-hidden": "true", children: [
        /* @__PURE__ */ jsx16(Separator, { className: "flex-1" }),
        /* @__PURE__ */ jsx16("span", { className: "text-xs text-muted-foreground shrink-0", children: ar ? "\u0623\u0648 \u0633\u062C\u0651\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0628\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A" : "or sign in with email" }),
        /* @__PURE__ */ jsx16(Separator, { className: "flex-1" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs13("form", { noValidate: true, onSubmit: handleEmailContinue, className: "flex flex-col gap-6", children: [
      /* @__PURE__ */ jsx16(
        AuthStepHeader_default,
        {
          title: ar ? "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644" : "Sign in",
          subtitle: ar ? "\u0623\u062F\u062E\u0644 \u0628\u0631\u064A\u062F\u0643 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0644\u0644\u0645\u062A\u0627\u0628\u0639\u0629" : "Enter your email to continue"
        }
      ),
      /* @__PURE__ */ jsx16(AuthErrorAlert_default, { error }),
      /* @__PURE__ */ jsxs13("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ jsx16(Label, { htmlFor: "login-email", className: "text-sm font-medium text-foreground text-start", children: ar ? "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A" : "Email address" }),
        /* @__PURE__ */ jsx16(
          Input,
          {
            id: "login-email",
            type: "email",
            dir: "ltr",
            autoComplete: "email",
            placeholder: "you@example.com",
            value: email,
            onChange: (e) => {
              setEmail(e.target.value);
              setEmailError("");
            },
            disabled: isResolvingMethods,
            "aria-invalid": !!emailError,
            "aria-describedby": emailError ? "login-email-error" : void 0,
            className: `${ar ? "text-end" : ""} ${emailError ? "border-destructive ring-destructive/30" : ""}`,
            autoFocus: true
          }
        ),
        emailError && /* @__PURE__ */ jsx16("p", { id: "login-email-error", role: "alert", className: "text-xs text-destructive mt-1", children: emailError })
      ] }),
      /* @__PURE__ */ jsx16(Button, { type: "submit", className: "w-full", disabled: isResolvingMethods, children: isResolvingMethods ? /* @__PURE__ */ jsxs13("span", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx16(Loader2, { className: "h-4 w-4 animate-spin", "aria-hidden": "true" }),
        ar ? "\u062C\u0627\u0631\u064D \u0627\u0644\u062A\u062D\u0642\u0642..." : "Checking..."
      ] }) : ar ? "\u0645\u062A\u0627\u0628\u0639\u0629" : "Continue" }),
      !hideSocialButtons && !!authClient.getOAuthUrl && /* @__PURE__ */ jsxs13(Fragment5, { children: [
        /* @__PURE__ */ jsxs13("div", { className: "flex items-center gap-3", "aria-hidden": "true", children: [
          /* @__PURE__ */ jsx16(Separator, { className: "flex-1" }),
          /* @__PURE__ */ jsx16("span", { className: "text-xs text-muted-foreground", children: ar ? "\u0623\u0648 \u062A\u0627\u0628\u0639 \u0639\u0628\u0631" : "or continue with" }),
          /* @__PURE__ */ jsx16(Separator, { className: "flex-1" })
        ] }),
        /* @__PURE__ */ jsx16("div", { className: "flex flex-col gap-2.5", children: /* @__PURE__ */ jsxs13(Button, { type: "button", variant: "outline", className: "w-full gap-2", onClick: () => handleOAuth("google"), disabled: isResolvingMethods, children: [
          /* @__PURE__ */ jsx16(GoogleIcon, {}),
          ar ? "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0639\u0628\u0631 Google" : "Sign in with Google"
        ] }) })
      ] }),
      /* @__PURE__ */ jsx16("p", { className: "text-xs text-muted-foreground text-center", children: ar ? "\u0645\u0633\u062A\u062E\u062F\u0645 \u062C\u062F\u064A\u062F\u061F \u062A\u0648\u0627\u0635\u0644 \u0645\u0639 \u0627\u0644\u0645\u0633\u0624\u0648\u0644." : "New here? Contact your administrator." })
    ] })
  ] });
};
LoginForm.displayName = "LoginForm";
var LoginForm_default = LoginForm;

// src/components/auth/ForgotForm.tsx
import { useState as useState6 } from "react";
import { Mail as Mail2, ArrowLeft as ArrowLeft2, Loader2 as Loader22 } from "lucide-react";
import { jsx as jsx17, jsxs as jsxs14 } from "react/jsx-runtime";
var ForgotForm = ({ authClient, onBack, language = "en" }) => {
  const ar = language === "ar";
  const [formState, setFormState] = useState6("form");
  const [email, setEmail] = useState6("");
  const [emailError, setEmailError] = useState6("");
  const [error, setError] = useState6("");
  const [isPending, setIsPending] = useState6(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setEmailError("");
    if (!email || !email.includes("@")) {
      setEmailError(ar ? "\u064A\u0631\u062C\u0649 \u0625\u062F\u062E\u0627\u0644 \u0628\u0631\u064A\u062F \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0635\u062D\u064A\u062D." : "Please enter a valid email address.");
      return;
    }
    setIsPending(true);
    try {
      await authClient.forgotPassword(email);
      setFormState("sent");
    } catch (err) {
      const message = err?.message || "";
      if (message.toLowerCase().includes("network") || message.toLowerCase().includes("fetch")) {
        setError(ar ? "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u0627\u062A\u0635\u0627\u0644. \u064A\u0631\u062C\u0649 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649." : "Connection error. Please try again.");
      } else {
        setFormState("sent");
      }
    } finally {
      setIsPending(false);
    }
  };
  const handleBack = () => {
    if (onBack) {
      onBack();
    }
  };
  if (formState === "sent") {
    return /* @__PURE__ */ jsxs14("div", { className: "flex flex-col gap-6", children: [
      /* @__PURE__ */ jsx17(
        AuthStepHeader_default,
        {
          icon: /* @__PURE__ */ jsx17(Mail2, { className: "h-7 w-7", "aria-hidden": "true" }),
          title: ar ? "\u062A\u062D\u0642\u0642 \u0645\u0646 \u0628\u0631\u064A\u062F\u0643 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A" : "Check your email",
          subtitle: ar ? "\u0625\u0630\u0627 \u0643\u0627\u0646 \u0647\u0646\u0627\u0643 \u062D\u0633\u0627\u0628 \u0628\u0647\u0630\u0627 \u0627\u0644\u0628\u0631\u064A\u062F\u060C \u0633\u062A\u0633\u062A\u0644\u0645 \u0631\u0627\u0628\u0637 \u0627\u0644\u0625\u0639\u0627\u062F\u0629 \u0642\u0631\u064A\u0628\u0627\u064B." : "If an account with that email exists, you'll receive a reset link shortly.",
          centered: true
        }
      ),
      /* @__PURE__ */ jsx17("p", { className: "text-xs text-muted-foreground text-center", children: ar ? "\u064A\u0646\u062A\u0647\u064A \u0627\u0644\u0631\u0627\u0628\u0637 \u062E\u0644\u0627\u0644 15 \u062F\u0642\u064A\u0642\u0629." : "The link expires in 15 minutes." }),
      /* @__PURE__ */ jsx17(Button, { variant: "outline", className: "w-full", asChild: true, children: /* @__PURE__ */ jsx17("a", { href: "mailto:", "aria-label": ar ? "\u0641\u062A\u062D \u062A\u0637\u0628\u064A\u0642 \u0627\u0644\u0628\u0631\u064A\u062F" : "Open email app", children: ar ? "\u0641\u062A\u062D \u062A\u0637\u0628\u064A\u0642 \u0627\u0644\u0628\u0631\u064A\u062F" : "Open email app" }) }),
      /* @__PURE__ */ jsxs14("p", { className: "text-xs text-muted-foreground text-center", children: [
        ar ? "\u0644\u0645 \u062A\u0633\u062A\u0644\u0645\u0647\u061F \u062A\u062D\u0642\u0642 \u0645\u0646 \u0645\u062C\u0644\u062F \u0627\u0644\u0628\u0631\u064A\u062F \u063A\u064A\u0631 \u0627\u0644\u0645\u0631\u063A\u0648\u0628 \u0623\u0648 " : "Didn't receive it? Check your spam folder or ",
        /* @__PURE__ */ jsx17(
          "button",
          {
            type: "button",
            onClick: () => setFormState("form"),
            className: "text-xs text-primary hover:underline cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm",
            children: ar ? "\u062D\u0627\u0648\u0644 \u0645\u062C\u062F\u062F\u0627\u064B" : "try again"
          }
        )
      ] }),
      onBack && /* @__PURE__ */ jsxs14(
        "button",
        {
          type: "button",
          onClick: handleBack,
          className: "flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors duration-fast ease-standard self-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm",
          children: [
            /* @__PURE__ */ jsx17(ArrowLeft2, { className: "h-3.5 w-3.5 rtl:rotate-180", "aria-hidden": "true" }),
            ar ? "\u0627\u0644\u0639\u0648\u062F\u0629 \u0625\u0644\u0649 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644" : "Back to sign in"
          ]
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxs14("form", { noValidate: true, onSubmit: handleSubmit, className: "flex flex-col gap-6", children: [
    /* @__PURE__ */ jsx17(
      AuthStepHeader_default,
      {
        title: ar ? "\u0646\u0633\u064A\u062A \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631\u061F" : "Forgot your password?",
        subtitle: ar ? "\u0623\u062F\u062E\u0644 \u0628\u0631\u064A\u062F\u0643 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0648\u0633\u0646\u0631\u0633\u0644 \u0631\u0627\u0628\u0637 \u0627\u0644\u0625\u0639\u0627\u062F\u0629 \u0625\u0630\u0627 \u0643\u0627\u0646 \u0627\u0644\u062D\u0633\u0627\u0628 \u0645\u0648\u062C\u0648\u062F\u0627\u064B." : "Enter your email and we'll send a reset link if an account exists."
      }
    ),
    /* @__PURE__ */ jsx17(AuthErrorAlert_default, { error }),
    /* @__PURE__ */ jsxs14("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ jsx17(Label, { htmlFor: "forgot-email", className: "text-sm font-medium text-foreground text-start", children: ar ? "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A" : "Email address" }),
      /* @__PURE__ */ jsx17(
        Input,
        {
          id: "forgot-email",
          type: "email",
          dir: "ltr",
          autoComplete: "email",
          placeholder: "you@example.com",
          value: email,
          onChange: (e) => {
            setEmail(e.target.value);
            setEmailError("");
          },
          disabled: isPending,
          "aria-invalid": !!emailError,
          "aria-describedby": emailError ? "forgot-email-error" : void 0,
          className: `${ar ? "text-end" : ""} ${emailError ? "border-destructive ring-destructive/30" : ""}`
        }
      ),
      emailError && /* @__PURE__ */ jsx17("p", { id: "forgot-email-error", role: "alert", className: "text-xs text-destructive mt-1", children: emailError })
    ] }),
    /* @__PURE__ */ jsx17(Button, { type: "submit", className: "w-full", disabled: isPending, children: isPending ? /* @__PURE__ */ jsxs14("span", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx17(Loader22, { className: "h-4 w-4 animate-spin", "aria-hidden": "true" }),
      ar ? "\u062C\u0627\u0631\u064D \u0627\u0644\u0625\u0631\u0633\u0627\u0644..." : "Sending..."
    ] }) : ar ? "\u0625\u0631\u0633\u0627\u0644 \u0631\u0627\u0628\u0637 \u0627\u0644\u0625\u0639\u0627\u062F\u0629" : "Send reset link" }),
    onBack && /* @__PURE__ */ jsxs14(
      "button",
      {
        type: "button",
        onClick: handleBack,
        className: "flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors duration-fast ease-standard self-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm",
        children: [
          /* @__PURE__ */ jsx17(ArrowLeft2, { className: "h-3.5 w-3.5 rtl:rotate-180", "aria-hidden": "true" }),
          ar ? "\u0627\u0644\u0639\u0648\u062F\u0629 \u0625\u0644\u0649 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644" : "Back to sign in"
        ]
      }
    )
  ] });
};
ForgotForm.displayName = "ForgotForm";
var ForgotForm_default = ForgotForm;

// src/components/auth/ResetForm.tsx
import { useState as useState7 } from "react";
import { Lock, Check as Check2, Loader2 as Loader23, ArrowLeft as ArrowLeft3 } from "lucide-react";

// src/components/auth/PasswordStrengthMeter.tsx
import { Check, Minus } from "lucide-react";
import { jsx as jsx18, jsxs as jsxs15 } from "react/jsx-runtime";
function computeRules(password) {
  return [
    {
      id: "rule-length",
      label_en: "At least 12 characters",
      label_ar: "12 \u062D\u0631\u0641\u0627\u064B \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644",
      met: password.length >= 12
    },
    {
      id: "rule-upper",
      label_en: "Uppercase letter",
      label_ar: "\u062D\u0631\u0641 \u0643\u0628\u064A\u0631",
      met: /[A-Z]/.test(password)
    },
    {
      id: "rule-lower",
      label_en: "Lowercase letter",
      label_ar: "\u062D\u0631\u0641 \u0635\u063A\u064A\u0631",
      met: /[a-z]/.test(password)
    },
    {
      id: "rule-digit",
      label_en: "Number",
      label_ar: "\u0631\u0642\u0645",
      met: /[0-9]/.test(password)
    },
    {
      id: "rule-symbol",
      label_en: "Symbol",
      label_ar: "\u0631\u0645\u0632",
      met: /[^A-Za-z0-9]/.test(password)
    }
  ];
}
function computeScore(rules) {
  const lengthMet = rules.find((r) => r.id === "rule-length")?.met ?? false;
  if (!lengthMet) return 0;
  const bonusMet = rules.filter((r) => r.id !== "rule-length" && r.met).length;
  return Math.min(4, 1 + bonusMet);
}
var SCORE_CONFIG = [
  { width: "w-0", color: "bg-destructive", label_en: "Too weak", label_ar: "\u0636\u0639\u064A\u0641\u0629 \u062C\u062F\u0627\u064B" },
  { width: "w-1/4", color: "bg-destructive", label_en: "Weak", label_ar: "\u0636\u0639\u064A\u0641\u0629" },
  { width: "w-2/4", color: "bg-yellow-500", label_en: "Fair", label_ar: "\u0645\u0642\u0628\u0648\u0644\u0629" },
  { width: "w-3/4", color: "bg-accent", label_en: "Strong", label_ar: "\u0642\u0648\u064A\u0629" },
  { width: "w-full", color: "bg-green-500", label_en: "Very strong", label_ar: "\u0642\u0648\u064A\u0629 \u062C\u062F\u0627\u064B" }
];
var PasswordStrengthMeter = ({ password, language = "en" }) => {
  const rules = computeRules(password);
  const score = computeScore(rules);
  const cfg = SCORE_CONFIG[score];
  const strengthLabel = language === "ar" ? cfg.label_ar : cfg.label_en;
  const ariaLabel = language === "ar" ? "\u0642\u0648\u0629 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631" : "Password strength";
  return /* @__PURE__ */ jsxs15("div", { className: "flex flex-col gap-2 mt-1", children: [
    /* @__PURE__ */ jsxs15("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx18("div", { className: "h-1.5 flex-1 rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsx18(
        "div",
        {
          className: `h-full rounded-full transition-[width] duration-300 ease-in-out ${cfg.width} ${cfg.color}`,
          role: "progressbar",
          "aria-valuenow": score * 25,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-label": ariaLabel
        }
      ) }),
      /* @__PURE__ */ jsx18("span", { className: "text-xs text-muted-foreground text-end shrink-0 min-w-[4.5rem]", children: strengthLabel })
    ] }),
    /* @__PURE__ */ jsx18(
      "ul",
      {
        className: "flex flex-col gap-0.5 mt-1",
        "aria-live": "polite",
        "aria-label": language === "ar" ? "\u0645\u062A\u0637\u0644\u0628\u0627\u062A \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631" : "Password requirements",
        children: rules.map((rule) => /* @__PURE__ */ jsxs15(
          "li",
          {
            className: `flex items-center gap-1.5 text-xs ${rule.met ? "text-green-600" : "text-muted-foreground"}`,
            "aria-checked": rule.met,
            children: [
              rule.met ? /* @__PURE__ */ jsx18(Check, { className: "h-3 w-3 shrink-0", "aria-hidden": "true" }) : /* @__PURE__ */ jsx18(Minus, { className: "h-3 w-3 shrink-0", "aria-hidden": "true" }),
              language === "ar" ? rule.label_ar : rule.label_en
            ]
          },
          rule.id
        ))
      }
    )
  ] });
};
PasswordStrengthMeter.displayName = "PasswordStrengthMeter";
var PasswordStrengthMeter_default = PasswordStrengthMeter;

// src/components/auth/ResetForm.tsx
import { jsx as jsx19, jsxs as jsxs16 } from "react/jsx-runtime";
var ResetForm = ({
  token,
  authClient,
  onSuccess,
  onRequestNewLink,
  language = "en"
}) => {
  const ar = language === "ar";
  const [state, setState] = useState7("form");
  const [newPassword, setNewPassword] = useState7("");
  const [confirmPassword, setConfirmPassword] = useState7("");
  const [confirmError, setConfirmError] = useState7("");
  const [error, setError] = useState7("");
  const [isPending, setIsPending] = useState7(false);
  const rules = computeRules(newPassword);
  const score = computeScore(rules);
  void score;
  const allRulesMet = rules.every((r) => r.met);
  const passwordsMatch = newPassword === confirmPassword;
  const canSubmit = allRulesMet && passwordsMatch && newPassword.length > 0 && confirmPassword.length > 0;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setConfirmError("");
    if (!allRulesMet) {
      setError(ar ? "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0644\u0627 \u062A\u0633\u062A\u0648\u0641\u064A \u0645\u062A\u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0642\u0648\u0629." : "Password does not meet strength requirements.");
      return;
    }
    if (!passwordsMatch) {
      setConfirmError(ar ? "\u0643\u0644\u0645\u062A\u0627 \u0627\u0644\u0645\u0631\u0648\u0631 \u063A\u064A\u0631 \u0645\u062A\u0637\u0627\u0628\u0642\u062A\u064A\u0646." : "Passwords do not match.");
      return;
    }
    setIsPending(true);
    try {
      await authClient.resetPassword(token, newPassword);
      setState("success");
    } catch (err) {
      const status = err?.status;
      const message = err?.message || "";
      if (status === 401 || status === 400 || message.includes("invalid") || message.includes("expired")) {
        setState("invalid");
      } else if (message.toLowerCase().includes("network") || message.toLowerCase().includes("fetch")) {
        setError(ar ? "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u0627\u062A\u0635\u0627\u0644. \u064A\u0631\u062C\u0649 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649." : "Connection error. Please try again.");
      } else {
        setError(ar ? "\u062D\u062F\u062B \u062E\u0637\u0623 \u0645\u0627. \u064A\u0631\u062C\u0649 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649." : "Something went wrong. Please try again.");
      }
    } finally {
      setIsPending(false);
    }
  };
  if (state === "success") {
    return /* @__PURE__ */ jsxs16("div", { className: "flex flex-col gap-6", children: [
      /* @__PURE__ */ jsx19("div", { className: "mx-auto mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-green-500/10 text-green-600", children: /* @__PURE__ */ jsx19(Check2, { className: "h-7 w-7", "aria-hidden": "true" }) }),
      /* @__PURE__ */ jsx19(
        AuthStepHeader_default,
        {
          title: ar ? "\u062A\u0645 \u062A\u062D\u062F\u064A\u062B \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631" : "Password updated",
          subtitle: ar ? "\u062A\u0645 \u062A\u063A\u064A\u064A\u0631 \u0643\u0644\u0645\u0629 \u0645\u0631\u0648\u0631\u0643 \u0628\u0646\u062C\u0627\u062D. \u064A\u0645\u0643\u0646\u0643 \u0627\u0644\u0622\u0646 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644." : "Your password has been changed successfully. You can now sign in.",
          centered: true
        }
      ),
      /* @__PURE__ */ jsx19(Button, { className: "w-full", onClick: onSuccess, children: ar ? "\u0627\u0644\u0627\u0646\u062A\u0642\u0627\u0644 \u0625\u0644\u0649 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644" : "Go to sign in" })
    ] });
  }
  if (state === "invalid") {
    return /* @__PURE__ */ jsxs16("div", { className: "flex flex-col gap-6", children: [
      /* @__PURE__ */ jsx19(
        AuthStepHeader_default,
        {
          icon: /* @__PURE__ */ jsx19(Lock, { className: "h-7 w-7", "aria-hidden": "true" }),
          title: ar ? "\u062A\u0639\u064A\u064A\u0646 \u0643\u0644\u0645\u0629 \u0645\u0631\u0648\u0631 \u062C\u062F\u064A\u062F\u0629" : "Set a new password"
        }
      ),
      /* @__PURE__ */ jsx19(
        AuthErrorAlert_default,
        {
          error: ar ? "\u0647\u0630\u0627 \u0627\u0644\u0631\u0627\u0628\u0637 \u063A\u064A\u0631 \u0635\u0627\u0644\u062D \u0623\u0648 \u0645\u0646\u062A\u0647\u064A \u0627\u0644\u0635\u0644\u0627\u062D\u064A\u0629. \u064A\u0631\u062C\u0649 \u0637\u0644\u0628 \u0631\u0627\u0628\u0637 \u062C\u062F\u064A\u062F." : "This link is invalid or has expired. Please request a new one."
        }
      ),
      onRequestNewLink && /* @__PURE__ */ jsxs16(
        "button",
        {
          type: "button",
          onClick: onRequestNewLink,
          className: "flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors duration-fast ease-standard self-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm",
          children: [
            /* @__PURE__ */ jsx19(ArrowLeft3, { className: "h-3.5 w-3.5 rtl:rotate-180", "aria-hidden": "true" }),
            ar ? "\u0637\u0644\u0628 \u0631\u0627\u0628\u0637 \u062C\u062F\u064A\u062F" : "Request a new link"
          ]
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxs16("form", { noValidate: true, onSubmit: handleSubmit, className: "flex flex-col gap-6", children: [
    /* @__PURE__ */ jsx19(
      AuthStepHeader_default,
      {
        icon: /* @__PURE__ */ jsx19(Lock, { className: "h-7 w-7", "aria-hidden": "true" }),
        title: ar ? "\u062A\u0639\u064A\u064A\u0646 \u0643\u0644\u0645\u0629 \u0645\u0631\u0648\u0631 \u062C\u062F\u064A\u062F\u0629" : "Set a new password",
        subtitle: ar ? "\u0627\u062E\u062A\u0631 \u0643\u0644\u0645\u0629 \u0645\u0631\u0648\u0631 \u0642\u0648\u064A\u0629 \u0644\u062D\u0633\u0627\u0628\u0643." : "Choose a strong password for your account."
      }
    ),
    /* @__PURE__ */ jsx19(AuthErrorAlert_default, { error }),
    /* @__PURE__ */ jsxs16("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ jsx19(Label, { htmlFor: "new-password", className: "text-sm font-medium text-foreground text-start", children: ar ? "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062C\u062F\u064A\u062F\u0629" : "New password" }),
      /* @__PURE__ */ jsx19(
        PasswordInput_default,
        {
          id: "new-password",
          language,
          autoComplete: "new-password",
          value: newPassword,
          onChange: (e) => setNewPassword(e.target.value),
          disabled: isPending,
          "aria-invalid": newPassword.length > 0 && !allRulesMet
        }
      ),
      newPassword.length > 0 && /* @__PURE__ */ jsx19(PasswordStrengthMeter_default, { password: newPassword, language })
    ] }),
    /* @__PURE__ */ jsxs16("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ jsx19(Label, { htmlFor: "confirm-password", className: "text-sm font-medium text-foreground text-start", children: ar ? "\u062A\u0623\u0643\u064A\u062F \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631" : "Confirm password" }),
      /* @__PURE__ */ jsx19(
        PasswordInput_default,
        {
          id: "confirm-password",
          language,
          autoComplete: "new-password",
          value: confirmPassword,
          onChange: (e) => {
            setConfirmPassword(e.target.value);
            setConfirmError("");
          },
          disabled: isPending,
          "aria-invalid": !!confirmError,
          "aria-describedby": confirmError ? "confirm-password-error" : void 0,
          className: confirmError ? "border-destructive ring-destructive/30" : ""
        }
      ),
      confirmError && /* @__PURE__ */ jsx19("p", { id: "confirm-password-error", role: "alert", className: "text-xs text-destructive mt-1", children: confirmError })
    ] }),
    /* @__PURE__ */ jsx19(Button, { type: "submit", className: "w-full", disabled: !canSubmit || isPending, children: isPending ? /* @__PURE__ */ jsxs16("span", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx19(Loader23, { className: "h-4 w-4 animate-spin", "aria-hidden": "true" }),
      ar ? "\u062C\u0627\u0631\u064D \u0627\u0644\u062A\u062D\u062F\u064A\u062B..." : "Updating..."
    ] }) : ar ? "\u062A\u0639\u064A\u064A\u0646 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631" : "Set new password" })
  ] });
};
ResetForm.displayName = "ResetForm";
var ResetForm_default = ResetForm;

// src/components/auth/TwoFAForm.tsx
import { useState as useState8, useCallback as useCallback2 } from "react";
import { Shield, KeyRound, ArrowLeft as ArrowLeft4, Loader2 as Loader24 } from "lucide-react";
import { jsx as jsx20, jsxs as jsxs17 } from "react/jsx-runtime";
var TwoFAForm = ({
  authClient,
  challengeToken,
  onSuccess,
  onTooManyAttempts,
  language = "en"
}) => {
  const ar = language === "ar";
  const [view, setView] = useState8("totp");
  const [totpValue, setTotpValue] = useState8("");
  const [recoveryCode, setRecoveryCode] = useState8("");
  const [error, setError] = useState8("");
  const [isVerifying, setIsVerifying] = useState8(false);
  const submitVerify = useCallback2(async (codeOverride) => {
    const code = codeOverride ?? (view === "totp" ? totpValue : recoveryCode);
    if (!code) return;
    setError("");
    setIsVerifying(true);
    try {
      await authClient.verify2FA(code, challengeToken);
      onSuccess?.();
    } catch (err) {
      const message = err?.message || "";
      if (view === "totp") setTotpValue("");
      else setRecoveryCode("");
      if (message.includes("too_many") || message.includes("attempts")) {
        setError(ar ? "\u0645\u062D\u0627\u0648\u0644\u0627\u062A \u0643\u062B\u064A\u0631\u0629 \u062C\u062F\u0627\u064B. \u064A\u0631\u062C\u0649 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0645\u0646 \u062C\u062F\u064A\u062F." : "Too many attempts. Please sign in again.");
        setTimeout(() => onTooManyAttempts?.(), 2500);
      } else if (message.includes("used")) {
        setError(ar ? "\u062A\u0645 \u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0647\u0630\u0627 \u0627\u0644\u0631\u0645\u0632 \u0645\u0633\u0628\u0642\u0627\u064B." : "This code has already been used.");
      } else if (view === "recovery") {
        setError(ar ? "\u0631\u0645\u0632 \u0627\u0644\u0627\u0633\u062A\u0631\u062F\u0627\u062F \u063A\u064A\u0631 \u0645\u0639\u0631\u0648\u0641." : "Recovery code not recognised.");
      } else {
        setError(ar ? "\u0627\u0644\u0631\u0645\u0632 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D. \u064A\u0631\u062C\u0649 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649." : "Code incorrect. Please try again.");
      }
    } finally {
      setIsVerifying(false);
    }
  }, [view, totpValue, recoveryCode, challengeToken, ar, authClient, onSuccess, onTooManyAttempts]);
  const handleTotpComplete = useCallback2(async (value) => {
    await submitVerify(value);
  }, [submitVerify]);
  if (view === "recovery") {
    return /* @__PURE__ */ jsxs17("div", { className: "flex flex-col gap-6", children: [
      /* @__PURE__ */ jsx20(
        AuthStepHeader_default,
        {
          icon: /* @__PURE__ */ jsx20(KeyRound, { className: "h-7 w-7", "aria-hidden": "true" }),
          title: ar ? "\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0631\u0645\u0632 \u0627\u0644\u0627\u0633\u062A\u0631\u062F\u0627\u062F" : "Use a recovery code",
          subtitle: ar ? "\u0623\u062F\u062E\u0644 \u0623\u062D\u062F \u0631\u0645\u0648\u0632 \u0627\u0644\u0627\u0633\u062A\u0631\u062F\u0627\u062F \u0627\u0644\u0645\u062D\u0641\u0648\u0638\u0629. \u064A\u0645\u0643\u0646 \u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0643\u0644 \u0631\u0645\u0632 \u0645\u0631\u0629 \u0648\u0627\u062D\u062F\u0629 \u0641\u0642\u0637." : "Enter one of your saved recovery codes. Each code can only be used once.",
          centered: true
        }
      ),
      /* @__PURE__ */ jsx20(AuthErrorAlert_default, { error }),
      /* @__PURE__ */ jsxs17("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ jsx20(Label, { htmlFor: "recovery-code", className: "text-sm font-medium text-foreground text-start", children: ar ? "\u0631\u0645\u0632 \u0627\u0644\u0627\u0633\u062A\u0631\u062F\u0627\u062F" : "Recovery code" }),
        /* @__PURE__ */ jsx20(
          Input,
          {
            id: "recovery-code",
            type: "text",
            dir: "ltr",
            autoComplete: "off",
            placeholder: "XXXX-XXXXXX",
            value: recoveryCode,
            onChange: (e) => setRecoveryCode(e.target.value),
            disabled: isVerifying,
            className: `font-mono ${ar ? "text-end" : ""}`
          }
        )
      ] }),
      /* @__PURE__ */ jsx20(
        Button,
        {
          type: "button",
          className: "w-full",
          disabled: !recoveryCode.trim() || isVerifying,
          onClick: () => submitVerify(),
          children: isVerifying ? /* @__PURE__ */ jsxs17("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx20(Loader24, { className: "h-4 w-4 animate-spin", "aria-hidden": "true" }),
            ar ? "\u062C\u0627\u0631\u064D \u0627\u0644\u062A\u062D\u0642\u0642..." : "Verifying..."
          ] }) : ar ? "\u062A\u062D\u0642\u0642" : "Verify"
        }
      ),
      /* @__PURE__ */ jsxs17(
        "button",
        {
          type: "button",
          onClick: () => {
            setView("totp");
            setError("");
            setRecoveryCode("");
          },
          className: "flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors duration-fast ease-standard self-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm",
          children: [
            /* @__PURE__ */ jsx20(ArrowLeft4, { className: "h-3.5 w-3.5 rtl:rotate-180", "aria-hidden": "true" }),
            ar ? "\u0627\u0644\u0639\u0648\u062F\u0629 \u0625\u0644\u0649 \u0631\u0645\u0632 \u0627\u0644\u0645\u0635\u0627\u062F\u0642\u0629" : "Back to authenticator code"
          ]
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxs17("div", { className: "flex flex-col gap-6", children: [
    /* @__PURE__ */ jsx20(
      AuthStepHeader_default,
      {
        icon: /* @__PURE__ */ jsx20(Shield, { className: "h-7 w-7", "aria-hidden": "true" }),
        title: ar ? "\u0627\u0644\u062A\u062D\u0642\u0642 \u0628\u062E\u0637\u0648\u062A\u064A\u0646" : "Two-factor authentication",
        subtitle: ar ? "\u0623\u062F\u062E\u0644 \u0627\u0644\u0631\u0645\u0632 \u0627\u0644\u0645\u0643\u0648\u0651\u0646 \u0645\u0646 6 \u0623\u0631\u0642\u0627\u0645 \u0645\u0646 \u062A\u0637\u0628\u064A\u0642 \u0627\u0644\u0645\u0635\u0627\u062F\u0642\u0629." : "Enter the 6-digit code from your authenticator app.",
        centered: true
      }
    ),
    /* @__PURE__ */ jsx20(AuthErrorAlert_default, { error }),
    /* @__PURE__ */ jsxs17("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ jsx20(Label, { className: "sr-only", children: ar ? "\u0631\u0645\u0632 \u0627\u0644\u0645\u0635\u0627\u062F\u0642\u0629" : "Authenticator code" }),
      /* @__PURE__ */ jsx20(
        OTPBoxGroup_default,
        {
          value: totpValue,
          onChange: setTotpValue,
          onComplete: handleTotpComplete,
          disabled: isVerifying,
          ariaLabel: ar ? "\u0627\u0644\u062A\u062D\u0642\u0642 \u0628\u062E\u0637\u0648\u062A\u064A\u0646" : "Two-factor authentication",
          autoFocus: true
        }
      )
    ] }),
    /* @__PURE__ */ jsx20(
      Button,
      {
        type: "button",
        className: "w-full",
        disabled: totpValue.length < 6 || isVerifying,
        onClick: () => submitVerify(),
        children: isVerifying ? /* @__PURE__ */ jsxs17("span", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx20(Loader24, { className: "h-4 w-4 animate-spin", "aria-hidden": "true" }),
          ar ? "\u062C\u0627\u0631\u064D \u0627\u0644\u062A\u062D\u0642\u0642..." : "Verifying..."
        ] }) : ar ? "\u062A\u062D\u0642\u0642" : "Verify"
      }
    ),
    /* @__PURE__ */ jsxs17("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx20("p", { className: "text-xs text-muted-foreground", children: ar ? "\u0641\u0642\u062F\u062A \u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u062A\u0637\u0628\u064A\u0642 \u0627\u0644\u0645\u0635\u0627\u062F\u0642\u0629\u061F" : "Lost access to your authenticator?" }),
      /* @__PURE__ */ jsx20(
        "button",
        {
          type: "button",
          onClick: () => {
            setView("recovery");
            setError("");
            setTotpValue("");
          },
          className: "text-xs text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm",
          children: ar ? "\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0631\u0645\u0632 \u0627\u0644\u0627\u0633\u062A\u0631\u062F\u0627\u062F \u0628\u062F\u0644\u0627\u064B \u0645\u0646 \u0630\u0644\u0643" : "Use a recovery code instead"
        }
      )
    ] })
  ] });
};
TwoFAForm.displayName = "TwoFAForm";
var TwoFAForm_default = TwoFAForm;

// src/components/auth/AuthFlow.tsx
import { Fragment as Fragment6, jsx as jsx21, jsxs as jsxs18 } from "react/jsx-runtime";
var AuthFlow = ({
  authClient,
  resetToken,
  onSuccess,
  language: languageProp = "en",
  onLanguageToggle,
  brand,
  layout = "split",
  withCard = true,
  showRememberMe = true,
  // emailFirst is accepted but ignored — email-first is now always on
  emailFirst: _emailFirst = false
}) => {
  const [internalLanguage, setInternalLanguage] = useState9(languageProp);
  useEffect5(() => {
    setInternalLanguage(languageProp);
  }, [languageProp]);
  const effectiveLanguage = internalLanguage;
  const [step, setStep] = useState9(
    resetToken ? { name: "reset", token: resetToken } : { name: "login" }
  );
  const [isRedirecting, setIsRedirecting] = useState9(false);
  const handleAuthSuccess = () => {
    setIsRedirecting(true);
    onSuccess?.();
  };
  const handleToggleLanguage = () => {
    setInternalLanguage((prev) => prev === "en" ? "ar" : "en");
  };
  const languageToggleCallback = onLanguageToggle === null ? void 0 : onLanguageToggle ?? handleToggleLanguage;
  const content = (() => {
    if (isRedirecting) {
      return /* @__PURE__ */ jsxs18(
        "div",
        {
          className: "flex min-h-[280px] flex-col items-center justify-center gap-4 text-center",
          role: "status",
          "aria-live": "polite",
          children: [
            /* @__PURE__ */ jsx21(Loader25, { className: "h-8 w-8 animate-spin text-primary", "aria-hidden": "true" }),
            /* @__PURE__ */ jsxs18("div", { className: "flex flex-col gap-1", children: [
              /* @__PURE__ */ jsx21("p", { className: "text-base font-semibold text-foreground", children: effectiveLanguage === "ar" ? "\u062C\u0627\u0631\u064D \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644..." : "Signing you in..." }),
              /* @__PURE__ */ jsx21("p", { className: "text-sm text-muted-foreground", children: effectiveLanguage === "ar" ? "\u0644\u062D\u0638\u0627\u062A \u0645\u0646 \u0641\u0636\u0644\u0643 \u2014 \u064A\u062A\u0645 \u062A\u062C\u0647\u064A\u0632 \u0644\u0648\u062D\u062A\u0643." : "One moment \u2014 preparing your dashboard." })
            ] })
          ]
        }
      );
    }
    if (step.name === "reset" && step.token) {
      return /* @__PURE__ */ jsx21(
        ResetForm_default,
        {
          token: step.token,
          authClient,
          language: effectiveLanguage,
          onSuccess: () => setStep({ name: "login" }),
          onRequestNewLink: () => setStep({ name: "forgot" })
        }
      );
    }
    if (step.name === "forgot") {
      return /* @__PURE__ */ jsx21(
        ForgotForm_default,
        {
          authClient,
          language: effectiveLanguage,
          onBack: () => setStep({ name: "login" })
        }
      );
    }
    if (step.name === "twofa") {
      return /* @__PURE__ */ jsx21(
        TwoFAForm_default,
        {
          authClient,
          challengeToken: step.challengeToken,
          language: effectiveLanguage,
          onSuccess: handleAuthSuccess,
          onTooManyAttempts: () => setStep({ name: "login" })
        }
      );
    }
    return /* @__PURE__ */ jsx21(
      LoginForm_default,
      {
        authClient,
        language: effectiveLanguage,
        onSuccess: handleAuthSuccess,
        on2FA: (challengeToken) => setStep({ name: "twofa", challengeToken }),
        onForgotPassword: () => setStep({ name: "forgot" }),
        showRememberMe
      }
    );
  })();
  if (!withCard) return /* @__PURE__ */ jsx21(Fragment6, { children: content });
  return /* @__PURE__ */ jsx21(
    AuthCard_default,
    {
      language: effectiveLanguage,
      layout,
      onLanguageToggle: languageToggleCallback,
      brand,
      children: content
    }
  );
};
AuthFlow.displayName = "AuthFlow";
var AuthFlow_default = AuthFlow;

// src/components/auth/LockScreen.tsx
import { useCallback as useCallback3, useEffect as useEffect6, useRef as useRef4, useState as useState10 } from "react";
import { Lock as Lock2, LogOut } from "lucide-react";
import { jsx as jsx22, jsxs as jsxs19 } from "react/jsx-runtime";
var STRINGS2 = {
  locked: { en: "Screen Locked", ar: "\u0627\u0644\u0634\u0627\u0634\u0629 \u0645\u0642\u0641\u0644\u0629" },
  enterPin: { en: "Enter your PIN to continue", ar: "\u0623\u062F\u062E\u0644 \u0631\u0645\u0632 PIN \u0644\u0644\u0645\u062A\u0627\u0628\u0639\u0629" },
  unlock: { en: "Unlock", ar: "\u0641\u062A\u062D \u0627\u0644\u0642\u0641\u0644" },
  unlocking: { en: "Verifying\u2026", ar: "\u062C\u0627\u0631\u064D \u0627\u0644\u062A\u062D\u0642\u0642\u2026" },
  wrongPin: { en: "Incorrect PIN. Please try again.", ar: "\u0631\u0645\u0632 PIN \u063A\u064A\u0631 \u0635\u062D\u064A\u062D. \u062D\u0627\u0648\u0644 \u0645\u062C\u062F\u062F\u064B\u0627." },
  attemptsLeft: {
    en: (n) => `${n} attempt${n === 1 ? "" : "s"} remaining.`,
    ar: (n) => `\u0645\u062A\u0628\u0642\u064D ${n} ${n === 1 ? "\u0645\u062D\u0627\u0648\u0644\u0629" : "\u0645\u062D\u0627\u0648\u0644\u0627\u062A"}.`
  },
  tooManyAttempts: {
    en: "Too many failed attempts. Please sign out and sign in again.",
    ar: "\u0645\u062D\u0627\u0648\u0644\u0627\u062A \u062E\u0627\u0637\u0626\u0629 \u0643\u062B\u064A\u0631\u0629. \u064A\u064F\u0631\u062C\u0649 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C \u0648\u0625\u0639\u0627\u062F\u0629 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644."
  },
  signOut: { en: "Not you? Sign out", ar: "\u0644\u0633\u062A \u0623\u0646\u062A\u061F \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C" }
};
function tr(key, lang) {
  const val = STRINGS2[key][lang];
  return typeof val === "string" ? val : "";
}
function computeInitials(name, email) {
  if (name) {
    return name.split(" ").slice(0, 2).map((w) => w[0] ?? "").join("").toUpperCase() || "?";
  }
  return (email?.[0] ?? "?").toUpperCase();
}
var LockScreen = ({
  user,
  onUnlock,
  onSignOut,
  language = "en",
  pinLength = 6,
  maxAttempts = 5,
  className
}) => {
  const isRTL = language === "ar";
  const dir = isRTL ? "rtl" : "ltr";
  const [pin, setPin] = useState10("");
  const [isSubmitting, setIsSubmitting] = useState10(false);
  const [errorMsg, setErrorMsg] = useState10(null);
  const [failedAttempts, setFailedAttempts] = useState10(0);
  const isLockedOut = failedAttempts >= maxAttempts;
  const containerRef = useRef4(null);
  useEffect6(() => {
    const timer = setTimeout(() => {
      const firstInput = containerRef.current?.querySelector(
        'input[type="text"], input[inputmode="numeric"]'
      );
      firstInput?.focus();
    }, 80);
    return () => clearTimeout(timer);
  }, []);
  const handleSubmit = useCallback3(
    async (submittedPin) => {
      if (isLockedOut || isSubmitting) return;
      if (submittedPin.length < pinLength) return;
      setIsSubmitting(true);
      setErrorMsg(null);
      try {
        await onUnlock(submittedPin);
      } catch {
        const newFailed = failedAttempts + 1;
        setFailedAttempts(newFailed);
        setPin("");
        if (newFailed >= maxAttempts) {
          setErrorMsg(tr("tooManyAttempts", language));
        } else {
          const left = maxAttempts - newFailed;
          const attemptsStr = language === "en" ? STRINGS2.attemptsLeft.en(left) : STRINGS2.attemptsLeft.ar(left);
          setErrorMsg(`${tr("wrongPin", language)} ${attemptsStr}`);
        }
      } finally {
        setIsSubmitting(false);
      }
    },
    [isLockedOut, isSubmitting, pinLength, onUnlock, failedAttempts, maxAttempts, language]
  );
  const handlePinComplete = useCallback3(
    (value) => {
      void handleSubmit(value);
    },
    [handleSubmit]
  );
  const handleUnlockClick = useCallback3(() => {
    void handleSubmit(pin);
  }, [handleSubmit, pin]);
  const initials2 = computeInitials(user.name, user.email);
  const displayName = user.name ?? user.email;
  return (
    // Full-screen overlay — sits above everything via z-[9999].
    /* @__PURE__ */ jsx22(
      "div",
      {
        dir,
        role: "dialog",
        "aria-modal": "true",
        "aria-label": tr("locked", language),
        className: cn(
          "fixed inset-0 z-[9999] flex flex-col items-center justify-center",
          "bg-background/95 backdrop-blur-sm",
          className
        ),
        ref: containerRef,
        children: /* @__PURE__ */ jsxs19("div", { className: "flex w-full max-w-sm flex-col items-center gap-6 rounded-2xl border border-border bg-background-surface p-8 shadow-2xl", children: [
          /* @__PURE__ */ jsx22("div", { className: "flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary", "aria-hidden": "true", children: /* @__PURE__ */ jsx22(Lock2, { className: "h-7 w-7", strokeWidth: 1.75 }) }),
          /* @__PURE__ */ jsxs19("div", { className: "flex flex-col items-center gap-1 text-center", children: [
            /* @__PURE__ */ jsx22("h2", { className: "text-xl font-bold text-foreground", children: tr("locked", language) }),
            /* @__PURE__ */ jsx22("p", { className: "text-sm text-muted-foreground", children: tr("enterPin", language) })
          ] }),
          /* @__PURE__ */ jsxs19("div", { className: "flex items-center gap-3", "aria-label": `${displayName} ${user.email}`, children: [
            /* @__PURE__ */ jsxs19(Avatar, { className: "h-11 w-11 shrink-0", children: [
              user.avatarUrl && /* @__PURE__ */ jsx22(AvatarImage, { src: user.avatarUrl, alt: displayName }),
              /* @__PURE__ */ jsx22(AvatarFallback, { className: "text-sm font-semibold", "aria-hidden": "true", children: initials2 })
            ] }),
            /* @__PURE__ */ jsxs19("div", { className: "flex min-w-0 flex-col", children: [
              /* @__PURE__ */ jsx22("span", { className: "truncate text-sm font-medium text-foreground", children: displayName }),
              /* @__PURE__ */ jsx22("span", { className: "truncate text-xs text-muted-foreground", dir: "ltr", children: user.email })
            ] })
          ] }),
          /* @__PURE__ */ jsx22("div", { className: "w-full", children: /* @__PURE__ */ jsx22(
            OTPBoxGroup_default,
            {
              value: pin,
              onChange: setPin,
              onComplete: handlePinComplete,
              disabled: isSubmitting || isLockedOut,
              ariaLabel: tr("enterPin", language),
              autoFocus: true
            }
          ) }),
          errorMsg && /* @__PURE__ */ jsx22(
            "p",
            {
              role: "alert",
              className: cn(
                "text-center text-sm",
                isLockedOut ? "font-medium text-destructive" : "text-destructive"
              ),
              children: errorMsg
            }
          ),
          !isLockedOut && /* @__PURE__ */ jsx22(
            Button,
            {
              type: "button",
              className: "w-full",
              onClick: handleUnlockClick,
              disabled: pin.length < pinLength || isSubmitting,
              "aria-busy": isSubmitting,
              children: isSubmitting ? tr("unlocking", language) : tr("unlock", language)
            }
          ),
          /* @__PURE__ */ jsxs19(
            "button",
            {
              type: "button",
              onClick: onSignOut,
              className: "flex items-center gap-1.5 text-xs text-muted-foreground transition-colors duration-fast ease-standard hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:rounded-sm",
              children: [
                /* @__PURE__ */ jsx22(LogOut, { className: "h-3.5 w-3.5", "aria-hidden": "true" }),
                tr("signOut", language)
              ]
            }
          )
        ] })
      }
    )
  );
};
LockScreen.displayName = "LockScreen";
var LockScreen_default = LockScreen;

// src/components/auth/PasswordLockScreen.tsx
import { useCallback as useCallback4, useEffect as useEffect7, useRef as useRef5, useState as useState11 } from "react";
import { Lock as Lock3, LogOut as LogOut2, ShieldCheck as ShieldCheck2 } from "lucide-react";
import { jsx as jsx23, jsxs as jsxs20 } from "react/jsx-runtime";
var STRINGS3 = {
  locked: { en: "Screen Locked", ar: "\u0627\u0644\u0634\u0627\u0634\u0629 \u0645\u0642\u0641\u0644\u0629" },
  lockedDesc: {
    en: "Enter your password to continue",
    ar: "\u0623\u062F\u062E\u0644 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0644\u0644\u0645\u062A\u0627\u0628\u0639\u0629"
  },
  password: { en: "Password", ar: "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631" },
  totpLabel: { en: "Two-factor code", ar: "\u0631\u0645\u0632 \u0627\u0644\u062A\u062D\u0642\u0642 \u0627\u0644\u062B\u0646\u0627\u0626\u064A" },
  totpPlaceholder: { en: "6-digit code", ar: "\u0631\u0645\u0632 \u0645\u0643\u0648\u0651\u0646 \u0645\u0646 6 \u0623\u0631\u0642\u0627\u0645" },
  unlock: { en: "Unlock", ar: "\u0641\u062A\u062D \u0627\u0644\u0642\u0641\u0644" },
  unlocking: { en: "Verifying\u2026", ar: "\u062C\u0627\u0631\u064D \u0627\u0644\u062A\u062D\u0642\u0642\u2026" },
  switchAccount: { en: "Switch account", ar: "\u062A\u0628\u062F\u064A\u0644 \u0627\u0644\u062D\u0633\u0627\u0628" },
  // Error messages
  errInvalidCredentials: {
    en: "Incorrect password. Please try again.",
    ar: "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629. \u062D\u0627\u0648\u0644 \u0645\u062C\u062F\u062F\u064B\u0627."
  },
  errTotpRequired: {
    en: "Enter your two-factor code to continue.",
    ar: "\u0623\u062F\u062E\u0644 \u0631\u0645\u0632 \u0627\u0644\u062A\u062D\u0642\u0642 \u0627\u0644\u062B\u0646\u0627\u0626\u064A \u0644\u0644\u0645\u062A\u0627\u0628\u0639\u0629."
  },
  errInvalidTotp: {
    en: "Incorrect two-factor code. Please try again.",
    ar: "\u0631\u0645\u0632 \u0627\u0644\u062A\u062D\u0642\u0642 \u0627\u0644\u062B\u0646\u0627\u0626\u064A \u063A\u064A\u0631 \u0635\u062D\u064A\u062D. \u062D\u0627\u0648\u0644 \u0645\u062C\u062F\u062F\u064B\u0627."
  },
  errTooMany: {
    en: "Too many failed attempts. You have been signed out for security.",
    ar: "\u0645\u062D\u0627\u0648\u0644\u0627\u062A \u0641\u0627\u0634\u0644\u0629 \u0643\u062B\u064A\u0631\u0629. \u062A\u0645 \u062A\u0633\u062C\u064A\u0644 \u062E\u0631\u0648\u062C\u0643 \u0644\u0623\u0633\u0628\u0627\u0628 \u0623\u0645\u0646\u064A\u0629."
  },
  errServer: {
    en: "An error occurred. Please try again.",
    ar: "\u062D\u062F\u062B \u062E\u0637\u0623. \u062D\u0627\u0648\u0644 \u0645\u062C\u062F\u062F\u064B\u0627."
  },
  attemptsLeft: {
    en: (n) => `${n} attempt${n === 1 ? "" : "s"} remaining.`,
    ar: (n) => `\u0645\u062A\u0628\u0642\u064D ${n} ${n === 1 ? "\u0645\u062D\u0627\u0648\u0644\u0629" : "\u0645\u062D\u0627\u0648\u0644\u0627\u062A"}.`
  }
};
function t(key, lang) {
  const val = STRINGS3[key][lang];
  return typeof val === "string" ? val : "";
}
function initials(name, email) {
  if (name) {
    return name.split(" ").slice(0, 2).map((w) => w[0] ?? "").join("").toUpperCase() || "?";
  }
  return (email?.[0] ?? "?").toUpperCase();
}
function resolveError(code, lang, attemptsLeft, maxAttempts) {
  const baseMsg = (() => {
    switch (code) {
      case "invalid_credentials":
        return t("errInvalidCredentials", lang);
      case "totp_required":
        return t("errTotpRequired", lang);
      case "invalid_totp":
        return t("errInvalidTotp", lang);
      case "too_many_attempts":
        return t("errTooMany", lang);
      default:
        return t("errServer", lang);
    }
  })();
  if (attemptsLeft > 0 && attemptsLeft < maxAttempts && code !== "too_many_attempts" && code !== "totp_required") {
    const suffix = lang === "en" ? STRINGS3.attemptsLeft.en(attemptsLeft) : STRINGS3.attemptsLeft.ar(attemptsLeft);
    return `${baseMsg} ${suffix}`;
  }
  return baseMsg;
}
var PasswordLockScreen = ({
  user,
  onUnlock,
  onSignOut,
  onForceLogout,
  language = "en",
  maxAttempts = 5,
  hasTOTP: hasTOTPProp = false,
  className
}) => {
  const isRTL = language === "ar";
  const dir = isRTL ? "rtl" : "ltr";
  const [password, setPassword] = useState11("");
  const [totp, setTotp] = useState11("");
  const [showTOTP, setShowTOTP] = useState11(hasTOTPProp);
  const [isSubmitting, setIsSubmitting] = useState11(false);
  const [errorMsg, setErrorMsg] = useState11(null);
  const [failedAttempts, setFailedAttempts] = useState11(0);
  const [isForceLoggedOut, setIsForceLoggedOut] = useState11(false);
  const isLockedOut = failedAttempts >= maxAttempts;
  const passwordRef = useRef5(null);
  useEffect7(() => {
    const timer = setTimeout(() => passwordRef.current?.focus(), 80);
    return () => clearTimeout(timer);
  }, []);
  const handleSubmit = useCallback4(
    async (e) => {
      e?.preventDefault();
      if (isLockedOut || isSubmitting || isForceLoggedOut) return;
      if (!password) return;
      setIsSubmitting(true);
      setErrorMsg(null);
      try {
        const creds = { password };
        if (showTOTP && totp.length === 6) {
          creds.totp = totp;
        }
        await onUnlock(creds);
      } catch (err) {
        const code = err instanceof Error ? err.message : "server_error";
        if (code === "totp_required") {
          setShowTOTP(true);
          setErrorMsg(t("errTotpRequired", language));
          setIsSubmitting(false);
          return;
        }
        if (code === "too_many_attempts") {
          setIsForceLoggedOut(true);
          setErrorMsg(t("errTooMany", language));
          onForceLogout?.();
          setIsSubmitting(false);
          return;
        }
        const newFailed = failedAttempts + 1;
        setFailedAttempts(newFailed);
        setPassword("");
        setTotp("");
        const left = maxAttempts - newFailed;
        setErrorMsg(resolveError(code, language, left, maxAttempts));
      } finally {
        setIsSubmitting(false);
      }
    },
    [
      isLockedOut,
      isSubmitting,
      isForceLoggedOut,
      password,
      showTOTP,
      totp,
      onUnlock,
      failedAttempts,
      maxAttempts,
      language,
      onForceLogout
    ]
  );
  const handleTOTPComplete = useCallback4(
    (value) => {
      setTotp(value);
      if (value.length === 6 && password) {
        void (async () => {
          setIsSubmitting(true);
          setErrorMsg(null);
          try {
            await onUnlock({ password, totp: value });
          } catch (err) {
            const code = err instanceof Error ? err.message : "server_error";
            if (code === "too_many_attempts") {
              setIsForceLoggedOut(true);
              setErrorMsg(t("errTooMany", language));
              onForceLogout?.();
              return;
            }
            const newFailed = failedAttempts + 1;
            setFailedAttempts(newFailed);
            setPassword("");
            setTotp("");
            setErrorMsg(resolveError(code, language, maxAttempts - newFailed, maxAttempts));
          } finally {
            setIsSubmitting(false);
          }
        })();
      }
    },
    [password, onUnlock, failedAttempts, maxAttempts, language, onForceLogout]
  );
  const userInitials = initials(user.name, user.email);
  const displayName = user.name ?? user.email;
  return /* @__PURE__ */ jsx23(
    "div",
    {
      dir,
      role: "dialog",
      "aria-modal": "true",
      "aria-label": t("locked", language),
      className: cn(
        "fixed inset-0 z-[9999] flex flex-col items-center justify-center",
        "bg-background/95 backdrop-blur-sm",
        className
      ),
      children: /* @__PURE__ */ jsxs20("div", { className: "flex w-full max-w-sm flex-col items-center gap-5 rounded-2xl border border-border bg-background-surface p-8 shadow-2xl", children: [
        /* @__PURE__ */ jsx23(
          "div",
          {
            className: "flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary",
            "aria-hidden": "true",
            children: /* @__PURE__ */ jsx23(Lock3, { className: "h-7 w-7", strokeWidth: 1.75 })
          }
        ),
        /* @__PURE__ */ jsxs20("div", { className: "flex flex-col items-center gap-1 text-center", children: [
          /* @__PURE__ */ jsx23("h2", { className: "text-xl font-bold text-foreground", children: t("locked", language) }),
          /* @__PURE__ */ jsx23("p", { className: "text-sm text-muted-foreground", children: t("lockedDesc", language) })
        ] }),
        /* @__PURE__ */ jsxs20(
          "div",
          {
            className: "flex items-center gap-3",
            "aria-label": displayName,
            children: [
              /* @__PURE__ */ jsxs20(Avatar, { className: "h-11 w-11 shrink-0", children: [
                user.avatarUrl && /* @__PURE__ */ jsx23(AvatarImage, { src: user.avatarUrl, alt: displayName }),
                /* @__PURE__ */ jsx23(AvatarFallback, { className: "text-sm font-semibold", "aria-hidden": "true", children: userInitials })
              ] }),
              /* @__PURE__ */ jsxs20("div", { className: "flex min-w-0 flex-col", children: [
                /* @__PURE__ */ jsx23("span", { className: "truncate text-sm font-medium text-foreground", children: displayName }),
                /* @__PURE__ */ jsx23("span", { className: "truncate text-xs text-muted-foreground", dir: "ltr", children: user.email })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs20(
          "form",
          {
            className: "flex w-full flex-col gap-4",
            onSubmit: (e) => void handleSubmit(e),
            "aria-disabled": isForceLoggedOut || isLockedOut,
            children: [
              /* @__PURE__ */ jsxs20("div", { className: "flex flex-col gap-1.5", children: [
                /* @__PURE__ */ jsx23(Label, { htmlFor: "unlock-password", className: "text-sm font-medium", children: t("password", language) }),
                /* @__PURE__ */ jsx23(
                  PasswordInput_default,
                  {
                    id: "unlock-password",
                    ref: passwordRef,
                    value: password,
                    onChange: (e) => setPassword(e.target.value),
                    disabled: isSubmitting || isLockedOut || isForceLoggedOut,
                    autoComplete: "current-password",
                    lang: language
                  }
                )
              ] }),
              showTOTP && /* @__PURE__ */ jsxs20("div", { className: "flex flex-col gap-2", children: [
                /* @__PURE__ */ jsxs20(Label, { className: "flex items-center gap-1.5 text-sm font-medium", children: [
                  /* @__PURE__ */ jsx23(ShieldCheck2, { className: "h-3.5 w-3.5 text-muted-foreground", "aria-hidden": "true" }),
                  t("totpLabel", language)
                ] }),
                /* @__PURE__ */ jsx23(
                  OTPBoxGroup_default,
                  {
                    value: totp,
                    onChange: setTotp,
                    onComplete: handleTOTPComplete,
                    disabled: isSubmitting || isLockedOut || isForceLoggedOut,
                    ariaLabel: t("totpLabel", language)
                  }
                )
              ] }),
              errorMsg && /* @__PURE__ */ jsx23(
                "p",
                {
                  role: "alert",
                  className: cn(
                    "text-center text-sm",
                    isLockedOut || isForceLoggedOut ? "font-medium text-destructive" : "text-destructive"
                  ),
                  children: errorMsg
                }
              ),
              !isLockedOut && !isForceLoggedOut && /* @__PURE__ */ jsx23(
                Button,
                {
                  type: "submit",
                  className: "w-full",
                  disabled: !password || isSubmitting,
                  "aria-busy": isSubmitting,
                  children: isSubmitting ? t("unlocking", language) : t("unlock", language)
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxs20(
          "button",
          {
            type: "button",
            onClick: onSignOut,
            className: "flex items-center gap-1.5 text-xs text-muted-foreground transition-colors duration-fast ease-standard hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:rounded-sm",
            children: [
              /* @__PURE__ */ jsx23(LogOut2, { className: "h-3.5 w-3.5", "aria-hidden": "true" }),
              t("switchAccount", language)
            ]
          }
        )
      ] })
    }
  );
};
PasswordLockScreen.displayName = "PasswordLockScreen";
var PasswordLockScreen_default = PasswordLockScreen;

// src/components/layout/AppSidebar.tsx
import { useState as useState12 } from "react";
import {
  PanelLeftClose,
  PanelLeftOpen,
  LogOut as LogOut3,
  Shield as Shield2,
  ChevronDown as ChevronDown2,
  Sparkles,
  ChartArea,
  Search as Search3,
  SquarePen,
  MessageCircle
} from "lucide-react";
import { Fragment as Fragment7, jsx as jsx24, jsxs as jsxs21 } from "react/jsx-runtime";
var isArabicText = (text) => /[؀-ۿ]/.test(text);
var getUserInitials = (displayName, email) => {
  if (displayName) {
    return displayName.split(" ").map((n) => n.charAt(0)).join("").toUpperCase().slice(0, 2);
  }
  if (email) return email.charAt(0).toUpperCase();
  return "U";
};
var SidebarLogo = ({
  appName,
  logo,
  onNavigate,
  assistantHref,
  language = "en"
}) => {
  const { open, isMobile, toggleSidebar } = useSidebar();
  const isSidebarOpen = open || isMobile;
  const initial = (appName[0] || "S").toUpperCase();
  const handleLogoClick = (e) => {
    e.preventDefault();
    onNavigate?.(assistantHref);
  };
  if (isSidebarOpen) {
    return /* @__PURE__ */ jsxs21("header", { className: "flex items-center justify-between w-full", children: [
      /* @__PURE__ */ jsxs21(
        "a",
        {
          href: assistantHref,
          onClick: handleLogoClick,
          className: "flex items-center gap-2 min-w-0",
          children: [
            logo ? /* @__PURE__ */ jsx24("div", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white px-0.5", children: /* @__PURE__ */ jsx24(
              "img",
              {
                src: logo,
                alt: appName,
                className: "max-h-6 max-w-full object-contain",
                onError: (e) => {
                  ;
                  e.currentTarget.style.display = "none";
                }
              }
            ) }) : /* @__PURE__ */ jsx24("div", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary", children: /* @__PURE__ */ jsx24(Shield2, { className: "h-4 w-4 text-primary-foreground" }) }),
            /* @__PURE__ */ jsx24("span", { className: "text-base font-semibold tracking-tight truncate", children: appName })
          ]
        }
      ),
      /* @__PURE__ */ jsx24(
        Button,
        {
          variant: "ghost",
          size: "sm",
          className: "h-8 w-8 shrink-0 p-0 hover:bg-muted cursor-pointer",
          onClick: toggleSidebar,
          "aria-label": language === "ar" ? "\u0637\u064A \u0627\u0644\u0634\u0631\u064A\u0637 \u0627\u0644\u062C\u0627\u0646\u0628\u064A" : "Collapse sidebar",
          children: /* @__PURE__ */ jsx24(PanelLeftClose, { className: "h-4 w-4 text-muted-foreground" })
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxs21("header", { className: "flex flex-col items-center justify-center gap-2", children: [
    /* @__PURE__ */ jsx24(
      "a",
      {
        href: assistantHref,
        onClick: handleLogoClick,
        className: "flex items-center justify-center",
        "aria-label": appName,
        children: logo ? /* @__PURE__ */ jsx24("div", { className: "flex h-8 w-8 items-center justify-center rounded-md bg-white px-0.5", children: /* @__PURE__ */ jsx24(
          "img",
          {
            src: logo,
            alt: appName,
            className: "max-h-6 max-w-full object-contain",
            onError: (e) => {
              ;
              e.currentTarget.style.display = "none";
            }
          }
        ) }) : /* @__PURE__ */ jsx24("div", { className: "flex h-8 w-8 items-center justify-center rounded-md bg-primary", children: /* @__PURE__ */ jsx24("span", { className: "text-xs font-bold text-primary-foreground", children: initial }) })
      }
    ),
    /* @__PURE__ */ jsx24(
      Button,
      {
        variant: "ghost",
        size: "sm",
        className: "h-8 w-8 p-0 hover:bg-muted cursor-pointer",
        onClick: toggleSidebar,
        "aria-label": language === "ar" ? "\u062A\u0648\u0633\u064A\u0639 \u0627\u0644\u0634\u0631\u064A\u0637 \u0627\u0644\u062C\u0627\u0646\u0628\u064A" : "Expand sidebar",
        children: /* @__PURE__ */ jsx24(PanelLeftOpen, { className: "h-4 w-4 text-muted-foreground" })
      }
    )
  ] });
};
SidebarLogo.displayName = "SidebarLogo";
var NavigationTabs = ({
  activeTab,
  onTabChange,
  language,
  isRTL,
  onNavigate,
  assistantHref,
  analysisHref
}) => {
  const { open, isMobile } = useSidebar();
  const isSidebarOpen = open || isMobile;
  const tabs = [
    { id: "assistant", labelEn: "Assistant", labelAr: "\u0627\u0644\u0645\u0633\u0627\u0639\u062F", icon: Sparkles, href: assistantHref },
    { id: "analysis", labelEn: "Analysis", labelAr: "\u0627\u0644\u062A\u062D\u0644\u064A\u0644", icon: ChartArea, href: analysisHref }
  ];
  return /* @__PURE__ */ jsx24("nav", { "aria-label": "Primary navigation", children: /* @__PURE__ */ jsx24(
    "div",
    {
      className: cn(
        isSidebarOpen ? "flex flex-row gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-sm" : "flex flex-col gap-1"
      ),
      children: tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        const label = language === "ar" ? tab.labelAr : tab.labelEn;
        const handleClick = (e) => {
          e.preventDefault();
          onTabChange(tab.id);
          onNavigate?.(tab.href);
        };
        const tabContent = /* @__PURE__ */ jsxs21(
          "a",
          {
            href: tab.href,
            onClick: handleClick,
            className: cn(
              "flex items-center justify-center rounded-md py-2 transition-colors duration-fast ease-standard",
              isSidebarOpen ? "flex-1 gap-2 px-3" : "w-full px-2",
              isActive ? "bg-background text-primary shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-background/60"
            ),
            "aria-current": isActive ? "page" : void 0,
            children: [
              /* @__PURE__ */ jsx24(Icon, { className: "h-4 w-4 shrink-0" }),
              isSidebarOpen && /* @__PURE__ */ jsx24("span", { className: cn("text-sm font-medium", isRTL ? "text-right" : "text-left"), children: label })
            ]
          }
        );
        if (!isSidebarOpen) {
          return /* @__PURE__ */ jsxs21(Tooltip, { children: [
            /* @__PURE__ */ jsx24(TooltipTrigger, { asChild: true, children: tabContent }),
            /* @__PURE__ */ jsx24(
              TooltipContent,
              {
                side: isRTL ? "left" : "right",
                className: "bg-popover text-popover-foreground border border-border text-sm",
                children: label
              }
            )
          ] }, tab.id);
        }
        return /* @__PURE__ */ jsx24("div", { children: tabContent }, tab.id);
      })
    }
  ) });
};
NavigationTabs.displayName = "NavigationTabs";
var SearchAndReports = ({
  language,
  isRTL,
  onNavigate,
  assistantHref
}) => {
  const { open, isMobile } = useSidebar();
  const isSidebarOpen = open || isMobile;
  const items = [
    {
      id: "search",
      labelEn: "Search",
      labelAr: "\u0627\u0644\u0628\u062D\u062B",
      icon: Search3,
      href: `${assistantHref}?mode=search`
    },
    {
      id: "new-chat",
      labelEn: "New Chat",
      labelAr: "\u0645\u062D\u0627\u062F\u062B\u0629 \u062C\u062F\u064A\u062F\u0629",
      icon: SquarePen,
      href: assistantHref
    }
  ];
  return /* @__PURE__ */ jsx24("div", { className: "flex flex-col gap-1", children: items.map((item) => {
    const Icon = item.icon;
    const label = language === "ar" ? item.labelAr : item.labelEn;
    const handleClick = (e) => {
      e.preventDefault();
      onNavigate?.(item.href);
    };
    const content = /* @__PURE__ */ jsxs21(
      "a",
      {
        href: item.href,
        onClick: handleClick,
        className: cn(
          "flex items-center rounded-md transition-colors duration-fast ease-standard hover:bg-muted cursor-pointer w-full",
          isSidebarOpen ? "gap-2 p-2" : "justify-center p-2"
        ),
        children: [
          /* @__PURE__ */ jsx24(Icon, { className: cn("shrink-0", isSidebarOpen ? "h-4 w-4" : "h-5 w-5") }),
          isSidebarOpen && /* @__PURE__ */ jsx24("span", { className: cn("text-sm text-foreground", isRTL ? "text-right" : "text-left"), children: label })
        ]
      },
      item.id
    );
    if (!isSidebarOpen) {
      return /* @__PURE__ */ jsxs21(Tooltip, { children: [
        /* @__PURE__ */ jsx24(TooltipTrigger, { asChild: true, children: content }),
        /* @__PURE__ */ jsx24(
          TooltipContent,
          {
            side: isRTL ? "left" : "right",
            className: "bg-popover text-popover-foreground border border-border text-sm",
            children: label
          }
        )
      ] }, item.id);
    }
    return content;
  }) });
};
SearchAndReports.displayName = "SearchAndReports";
var ChatsSection = ({
  language,
  conversations,
  isLoading,
  currentPathname,
  onNavigate,
  chatBaseHref
}) => {
  const [isCollapsed, setIsCollapsed] = useState12(false);
  const handleToggleCollapse = () => {
    setIsCollapsed((prev) => !prev);
  };
  return /* @__PURE__ */ jsxs21("section", { className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ jsxs21(
      "button",
      {
        onClick: handleToggleCollapse,
        className: "flex items-center gap-2 px-1 text-xs text-muted-foreground hover:text-foreground transition-colors duration-fast ease-standard cursor-pointer",
        "aria-expanded": !isCollapsed,
        "aria-label": isCollapsed ? "Expand conversations" : "Collapse conversations",
        children: [
          /* @__PURE__ */ jsx24("span", { className: "flex-1 text-start", children: language === "ar" ? "\u0627\u0644\u0645\u062D\u0627\u062F\u062B\u0627\u062A \u0627\u0644\u0623\u062E\u064A\u0631\u0629" : "Recent Conversations" }),
          /* @__PURE__ */ jsx24(
            ChevronDown2,
            {
              className: cn(
                "h-3 w-3 shrink-0 transition-transform duration-200",
                isCollapsed ? "-rotate-90" : "rotate-0"
              )
            }
          )
        ]
      }
    ),
    !isCollapsed && /* @__PURE__ */ jsxs21("div", { className: "flex flex-col gap-0.5", children: [
      isLoading && Array.from({ length: 6 }).map((_, i) => /* @__PURE__ */ jsx24(Skeleton, { className: "h-7 w-full rounded-md" }, i)),
      !isLoading && conversations?.map((chat) => {
        const title = language === "ar" && chat.title_ar ? chat.title_ar : chat.title_en;
        const isArabic = isArabicText(title);
        const href = `${chatBaseHref}/${chat.id}`;
        const isActive = currentPathname === href || currentPathname?.startsWith(`${href}/`);
        const handleClick = (e) => {
          e.preventDefault();
          onNavigate?.(href);
        };
        return /* @__PURE__ */ jsxs21(
          "a",
          {
            href,
            onClick: handleClick,
            className: cn(
              "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors duration-fast ease-standard group",
              isActive ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted hover:text-foreground"
            ),
            children: [
              /* @__PURE__ */ jsx24(MessageCircle, { className: "h-3.5 w-3.5 shrink-0" }),
              /* @__PURE__ */ jsx24("span", { className: "truncate text-xs", dir: isArabic ? "rtl" : "ltr", children: title })
            ]
          },
          chat.id
        );
      }),
      !isLoading && (!conversations || conversations.length === 0) && /* @__PURE__ */ jsx24("p", { className: "px-2 py-1.5 text-xs text-muted-foreground", children: language === "ar" ? "\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u062D\u0627\u062F\u062B\u0627\u062A \u0628\u0639\u062F" : "No conversations yet" })
    ] })
  ] });
};
ChatsSection.displayName = "ChatsSection";
var UserProfile = ({
  user,
  isLoading,
  onSignOut,
  isRTL
}) => {
  const { open, isMobile } = useSidebar();
  const [isSigningOut, setIsSigningOut] = useState12(false);
  const isSidebarOpen = open || isMobile;
  const handleSignOut = async () => {
    setIsSigningOut(true);
    try {
      await onSignOut?.();
    } catch (error) {
      console.error("[UserProfile]", "Sign out error", error);
      setIsSigningOut(false);
    }
  };
  if (isLoading) {
    return /* @__PURE__ */ jsxs21(
      "div",
      {
        className: cn(
          "flex items-center rounded-lg border border-border",
          isSidebarOpen ? "justify-between p-3" : "justify-center p-1"
        ),
        children: [
          /* @__PURE__ */ jsxs21("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx24(Skeleton, { className: "h-8 w-8 rounded-full" }),
            isSidebarOpen && /* @__PURE__ */ jsxs21("div", { className: "flex flex-col gap-1", children: [
              /* @__PURE__ */ jsx24(Skeleton, { className: "h-4 w-24" }),
              /* @__PURE__ */ jsx24(Skeleton, { className: "h-3 w-32" })
            ] })
          ] }),
          isSidebarOpen && /* @__PURE__ */ jsx24(Skeleton, { className: "h-8 w-8 rounded" })
        ]
      }
    );
  }
  const displayName = user?.displayName ?? null;
  const email = user?.email ?? null;
  const avatarUrl = user?.avatarUrl ?? "";
  return /* @__PURE__ */ jsxs21(
    "div",
    {
      className: cn(
        "flex items-center rounded-lg border border-border bg-card",
        isSidebarOpen ? "justify-between p-3" : "justify-center p-1"
      ),
      children: [
        /* @__PURE__ */ jsxs21("div", { className: "flex items-center gap-3 min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxs21(Avatar, { className: "h-8 w-8 shrink-0", children: [
            /* @__PURE__ */ jsx24(AvatarImage, { src: avatarUrl, alt: "User avatar" }),
            /* @__PURE__ */ jsx24(AvatarFallback, { className: "text-xs", children: getUserInitials(displayName, email) })
          ] }),
          isSidebarOpen && /* @__PURE__ */ jsxs21("div", { className: "flex flex-col min-w-0", children: [
            /* @__PURE__ */ jsx24("span", { className: "text-sm font-medium truncate text-foreground", children: displayName ?? (isRTL ? "\u0645\u0633\u062A\u062E\u062F\u0645" : "User") }),
            /* @__PURE__ */ jsxs21(Tooltip, { children: [
              /* @__PURE__ */ jsx24(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx24(
                "span",
                {
                  className: "text-xs text-muted-foreground truncate cursor-default",
                  dir: "ltr",
                  children: email
                }
              ) }),
              /* @__PURE__ */ jsx24(TooltipContent, { className: "bg-popover text-popover-foreground border border-border text-sm max-w-[280px] break-all", children: email })
            ] })
          ] })
        ] }),
        isSidebarOpen && /* @__PURE__ */ jsx24(
          Button,
          {
            variant: "ghost",
            size: "sm",
            className: "h-8 w-8 shrink-0 p-0 ms-2 cursor-pointer",
            onClick: handleSignOut,
            disabled: isSigningOut,
            title: isRTL ? "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C" : "Sign out",
            children: /* @__PURE__ */ jsx24(
              LogOut3,
              {
                className: cn("h-4 w-4 text-muted-foreground", isRTL && "rotate-180")
              }
            )
          }
        )
      ]
    }
  );
};
UserProfile.displayName = "UserProfile";
var AppSidebar = ({
  language,
  isRTL,
  appName = "Sentra",
  logo,
  user,
  isAuthLoading,
  onSignOut,
  onNavigate,
  currentPathname,
  conversations,
  isConversationsLoading,
  assistantHref = "/chat",
  analysisHref = "/analysis"
}) => {
  const { open, isMobile } = useSidebar();
  const isSidebarOpen = open || isMobile;
  const getActiveTab = () => {
    if (currentPathname?.startsWith("/analysis")) return "analysis";
    return "assistant";
  };
  const [activeTab, setActiveTab] = useState12(getActiveTab);
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return /* @__PURE__ */ jsxs21(
    Sidebar,
    {
      side: isRTL ? "right" : "left",
      collapsible: "icon",
      className: cn("border-border bg-card", isSidebarOpen ? "px-3" : "px-1", "py-4"),
      children: [
        /* @__PURE__ */ jsx24(SidebarHeader, { className: "py-3 px-0 border-b border-border", children: /* @__PURE__ */ jsx24(
          SidebarLogo,
          {
            appName,
            logo,
            onNavigate,
            assistantHref,
            language
          }
        ) }),
        /* @__PURE__ */ jsxs21(
          SidebarContent,
          {
            className: cn(
              "pt-4 space-y-3",
              "[&::-webkit-scrollbar]:w-1.5",
              "[&::-webkit-scrollbar-track]:rounded-full",
              "[&::-webkit-scrollbar-track]:bg-transparent",
              "[&::-webkit-scrollbar-thumb]:rounded-full",
              "[&::-webkit-scrollbar-thumb]:bg-border"
            ),
            children: [
              /* @__PURE__ */ jsx24(
                NavigationTabs,
                {
                  activeTab,
                  onTabChange: handleTabChange,
                  language,
                  isRTL,
                  onNavigate,
                  assistantHref,
                  analysisHref
                }
              ),
              activeTab === "assistant" && /* @__PURE__ */ jsxs21(Fragment7, { children: [
                /* @__PURE__ */ jsx24(
                  SearchAndReports,
                  {
                    language,
                    isRTL,
                    onNavigate,
                    assistantHref
                  }
                ),
                isSidebarOpen && /* @__PURE__ */ jsx24("div", { className: "pt-2 border-t border-border", children: /* @__PURE__ */ jsx24(
                  ChatsSection,
                  {
                    language,
                    conversations,
                    isLoading: isConversationsLoading,
                    currentPathname,
                    onNavigate,
                    chatBaseHref: assistantHref
                  }
                ) })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsx24(SidebarFooter, { className: "px-0 pt-3 border-t border-border", children: /* @__PURE__ */ jsx24(
          UserProfile,
          {
            user,
            isLoading: isAuthLoading,
            onSignOut,
            isRTL
          }
        ) })
      ]
    }
  );
};
AppSidebar.displayName = "AppSidebar";

// src/components/layout/AppPageShell.tsx
import React3 from "react";
import { jsx as jsx25, jsxs as jsxs22 } from "react/jsx-runtime";
var AppPageShell = ({
  children,
  isRTL,
  isAuthenticated,
  isAuthLoading,
  onUnauthenticated,
  topNavSlot,
  realtimeSlotsTop,
  realtimeSlotBottom,
  // copilotSeeds accepted for backward-compat but not used
  copilotSeeds: _copilotSeeds
}) => {
  React3.useEffect(() => {
    if (!isAuthLoading && isAuthenticated === false) {
      onUnauthenticated?.();
    }
  }, [isAuthLoading, isAuthenticated, onUnauthenticated]);
  if (isAuthLoading) {
    return /* @__PURE__ */ jsx25("div", { className: "h-screen flex items-center justify-center bg-background", children: /* @__PURE__ */ jsx25("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto" }) });
  }
  if (isAuthenticated === false) {
    return null;
  }
  return /* @__PURE__ */ jsxs22("div", { className: "min-h-screen bg-background flex flex-col", dir: isRTL ? "rtl" : "ltr", children: [
    topNavSlot,
    realtimeSlotsTop,
    /* @__PURE__ */ jsx25("main", { className: "flex-1 overflow-y-auto", children }),
    realtimeSlotBottom
  ] });
};
AppPageShell.displayName = "AppPageShell";

// src/components/layout/ViewToggle.tsx
import { LayoutGrid, Star, FolderKanban } from "lucide-react";
import { jsx as jsx26, jsxs as jsxs23 } from "react/jsx-runtime";
var VIEWS = [
  { id: "foryou", icon: Star, labelEn: "For You", labelAr: "\u0644\u0643", path: "/for-you" },
  { id: "dashboard", icon: LayoutGrid, labelEn: "Dashboard", labelAr: "\u0627\u0644\u0644\u0648\u062D\u0629", path: "/dashboard" },
  { id: "projects", icon: FolderKanban, labelEn: "Projects", labelAr: "\u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639", path: "/projects" }
];
var ViewToggle = ({
  language,
  isMobile,
  currentPathname,
  currentView,
  onViewChange,
  onNavigate
}) => {
  const activeView = VIEWS.find((v) => currentPathname?.startsWith(v.path))?.id ?? currentView ?? "dashboard";
  const handleClick = (view) => {
    onNavigate?.(view.path);
    if (activeView !== view.id) {
      onViewChange(view.id);
    }
  };
  return /* @__PURE__ */ jsx26("div", { className: "flex items-center gap-0.5 bg-muted/50 rounded-lg p-0.5", children: VIEWS.map((view) => {
    const Icon = view.icon;
    const isActive = activeView === view.id;
    const label = language === "ar" ? view.labelAr : view.labelEn;
    return /* @__PURE__ */ jsxs23(
      "button",
      {
        onClick: () => handleClick(view),
        className: cn(
          "relative flex items-center gap-1.5 px-2 sm:px-3 py-1.5 text-sm font-medium rounded-md transition-colors duration-fast ease-standard",
          isActive ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
        ),
        children: [
          /* @__PURE__ */ jsx26(Icon, { className: "relative z-10 w-4 h-4" }),
          !isMobile && /* @__PURE__ */ jsx26("span", { className: "relative z-10", children: label })
        ]
      },
      view.id
    );
  }) });
};
ViewToggle.displayName = "ViewToggle";

// src/components/layout/RouteProgress.tsx
import { useEffect as useEffect8, useRef as useRef6, useState as useState13 } from "react";
import { jsx as jsx27 } from "react/jsx-runtime";
var RouteProgress = ({ pathname, height = 2 }) => {
  const [visible, setVisible] = useState13(false);
  const [width, setWidth] = useState13(0);
  const firstRender = useRef6(true);
  const timers = useRef6([]);
  useEffect8(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setVisible(true);
    setWidth(10);
    timers.current.push(setTimeout(() => setWidth(70), 50));
    timers.current.push(setTimeout(() => setWidth(90), 250));
    timers.current.push(setTimeout(() => setWidth(100), 500));
    timers.current.push(
      setTimeout(() => {
        setVisible(false);
        setWidth(0);
      }, 750)
    );
    return () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };
  }, [pathname]);
  return /* @__PURE__ */ jsx27(
    "div",
    {
      "aria-hidden": "true",
      style: {
        position: "fixed",
        top: 0,
        insetInlineStart: 0,
        width: `${width}%`,
        height: `${height}px`,
        opacity: visible ? 1 : 0,
        transition: "width 200ms ease-out, opacity 200ms ease-out",
        zIndex: 9999,
        pointerEvents: "none"
      },
      className: "bg-primary"
    }
  );
};
RouteProgress.displayName = "RouteProgress";

// src/components/nav/DynamicIcon.tsx
import * as Icons from "lucide-react";
import { Sparkles as Sparkles2 } from "lucide-react";
import { jsx as jsx28 } from "react/jsx-runtime";
var DynamicIcon = ({ name, className, size, strokeWidth }) => {
  if (!name) {
    return /* @__PURE__ */ jsx28(Sparkles2, { className, size, strokeWidth });
  }
  if (name.startsWith("http://") || name.startsWith("https://") || name.startsWith("/")) {
    const px = size ?? hClassToPx(className) ?? 24;
    return /* @__PURE__ */ jsx28(
      "img",
      {
        src: name,
        alt: "",
        className,
        style: { width: px, height: px, objectFit: "contain", display: "inline-block" },
        "aria-hidden": "true"
      }
    );
  }
  let bxClass = null;
  if (name.startsWith("bxl:") || name.startsWith("bx:")) {
    const colonIdx = name.indexOf(":");
    const prefix = name.slice(0, colonIdx);
    const iconName = name.slice(colonIdx + 1);
    bxClass = `${prefix}-${iconName}`;
  } else if (name.startsWith("bxl-") || name.startsWith("bx-")) {
    bxClass = name;
  }
  if (bxClass !== null) {
    const fontSize = size ?? hClassToPx(className) ?? "1em";
    return /* @__PURE__ */ jsx28(
      "i",
      {
        className: `bx ${bxClass}${className ? ` ${className}` : ""}`,
        style: { fontSize, color: "currentColor", lineHeight: 1 },
        "aria-hidden": "true"
      }
    );
  }
  let lucideName = name;
  if (name.startsWith("lucide:")) {
    const iconSlug = name.slice(7);
    lucideName = iconSlug.split("-").map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join("");
  }
  const Cmp = Icons[lucideName];
  if (!Cmp) {
    return /* @__PURE__ */ jsx28(Sparkles2, { className, size, strokeWidth });
  }
  return /* @__PURE__ */ jsx28(Cmp, { className, size, strokeWidth });
};
DynamicIcon.displayName = "DynamicIcon";
var H_CLASS_PX = {
  "h-3": 12,
  "h-4": 16,
  "h-5": 20,
  "h-6": 24,
  "h-7": 28,
  "h-8": 32,
  "h-9": 36,
  "h-10": 40,
  "h-12": 48,
  "h-14": 56,
  "h-16": 64
};
function hClassToPx(className) {
  if (!className) return void 0;
  for (const cls of className.split(/\s+/)) {
    const px = H_CLASS_PX[cls];
    if (px !== void 0) return px;
  }
  return void 0;
}

// src/components/profile/ProfileView.tsx
import * as React4 from "react";
import { ShieldCheck as ShieldCheck3, Monitor, LogOut as LogOut4 } from "lucide-react";
import { jsx as jsx29, jsxs as jsxs24 } from "react/jsx-runtime";
var T = {
  en: {
    account: "Account",
    security: "Security",
    sessions: "Sessions",
    name: "Name",
    email: "Email",
    save: "Save changes",
    password: "Password",
    changePassword: "Change password",
    twoFA: "Two-factor authentication",
    twoFADesc: "Add an extra layer of security to your account.",
    current: "This device",
    revoke: "Revoke",
    active: "Active sessions"
  },
  ar: {
    account: "\u0627\u0644\u062D\u0633\u0627\u0628",
    security: "\u0627\u0644\u0623\u0645\u0627\u0646",
    sessions: "\u0627\u0644\u062C\u0644\u0633\u0627\u062A",
    name: "\u0627\u0644\u0627\u0633\u0645",
    email: "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A",
    save: "\u062D\u0641\u0638 \u0627\u0644\u062A\u063A\u064A\u064A\u0631\u0627\u062A",
    password: "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631",
    changePassword: "\u062A\u063A\u064A\u064A\u0631 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631",
    twoFA: "\u0627\u0644\u0645\u0635\u0627\u062F\u0642\u0629 \u0627\u0644\u062B\u0646\u0627\u0626\u064A\u0629",
    twoFADesc: "\u0623\u0636\u0641 \u0637\u0628\u0642\u0629 \u062D\u0645\u0627\u064A\u0629 \u0625\u0636\u0627\u0641\u064A\u0629 \u0644\u062D\u0633\u0627\u0628\u0643.",
    current: "\u0647\u0630\u0627 \u0627\u0644\u062C\u0647\u0627\u0632",
    revoke: "\u0625\u0646\u0647\u0627\u0621",
    active: "\u0627\u0644\u062C\u0644\u0633\u0627\u062A \u0627\u0644\u0646\u0634\u0637\u0629"
  }
};
function ProfileView({
  user,
  language = "en",
  sessions = [],
  twoFactorEnabled = false,
  onSave,
  onChangePassword,
  onToggle2FA,
  onRevokeSession
}) {
  const t2 = T[language];
  const [name, setName] = React4.useState(user.name ?? "");
  const [email, setEmail] = React4.useState(user.email);
  const initial = (user.name || user.email || "?").charAt(0).toUpperCase();
  return /* @__PURE__ */ jsxs24("div", { className: "mx-auto max-w-3xl p-6", children: [
    /* @__PURE__ */ jsxs24("div", { className: "mb-6 flex items-center gap-4", children: [
      /* @__PURE__ */ jsxs24(Avatar, { className: "h-16 w-16", children: [
        user.avatarUrl && /* @__PURE__ */ jsx29(AvatarImage, { src: user.avatarUrl, alt: user.name ?? user.email }),
        /* @__PURE__ */ jsx29(AvatarFallback, { className: "text-lg", children: initial })
      ] }),
      /* @__PURE__ */ jsxs24("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsx29("h1", { className: "truncate text-xl font-semibold", children: user.name || user.email }),
        /* @__PURE__ */ jsx29("p", { className: "truncate text-sm text-muted-foreground", children: user.email }),
        user.roles && user.roles.length > 0 && /* @__PURE__ */ jsx29("div", { className: "mt-1.5 flex flex-wrap gap-1.5", children: user.roles.map((r) => /* @__PURE__ */ jsx29(StatusBadge, { tone: "info", children: r }, r)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs24(Tabs, { defaultValue: "account", children: [
      /* @__PURE__ */ jsxs24(TabsList, { children: [
        /* @__PURE__ */ jsx29(TabsTrigger, { value: "account", children: t2.account }),
        /* @__PURE__ */ jsx29(TabsTrigger, { value: "security", children: t2.security }),
        /* @__PURE__ */ jsx29(TabsTrigger, { value: "sessions", children: t2.sessions })
      ] }),
      /* @__PURE__ */ jsx29(TabsContent, { value: "account", children: /* @__PURE__ */ jsx29(Card, { children: /* @__PURE__ */ jsxs24(CardContent, { className: "space-y-4 pt-6", children: [
        /* @__PURE__ */ jsxs24("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsx29(Label, { htmlFor: "pv-name", children: t2.name }),
          /* @__PURE__ */ jsx29(Input, { id: "pv-name", value: name, onChange: (e) => setName(e.target.value) })
        ] }),
        /* @__PURE__ */ jsxs24("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsx29(Label, { htmlFor: "pv-email", children: t2.email }),
          /* @__PURE__ */ jsx29(Input, { id: "pv-email", type: "email", value: email, onChange: (e) => setEmail(e.target.value) })
        ] }),
        /* @__PURE__ */ jsx29(Button, { onClick: () => onSave?.({ name, email }), children: t2.save })
      ] }) }) }),
      /* @__PURE__ */ jsx29(TabsContent, { value: "security", children: /* @__PURE__ */ jsx29(Card, { children: /* @__PURE__ */ jsxs24(CardContent, { className: "space-y-5 pt-6", children: [
        /* @__PURE__ */ jsxs24("div", { className: "flex items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsx29("div", { children: /* @__PURE__ */ jsx29("p", { className: "text-sm font-medium", children: t2.password }) }),
          /* @__PURE__ */ jsx29(Button, { variant: "outline", onClick: onChangePassword, children: t2.changePassword })
        ] }),
        /* @__PURE__ */ jsx29(Separator, {}),
        /* @__PURE__ */ jsxs24("div", { className: "flex items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsxs24("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx29(ShieldCheck3, { className: "mt-0.5 h-5 w-5 text-muted-foreground" }),
            /* @__PURE__ */ jsxs24("div", { children: [
              /* @__PURE__ */ jsx29("p", { className: "text-sm font-medium", children: t2.twoFA }),
              /* @__PURE__ */ jsx29("p", { className: "text-sm text-muted-foreground", children: t2.twoFADesc })
            ] })
          ] }),
          /* @__PURE__ */ jsx29(Switch, { checked: twoFactorEnabled, onCheckedChange: (v) => onToggle2FA?.(v) })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx29(TabsContent, { value: "sessions", children: /* @__PURE__ */ jsxs24(Card, { children: [
        /* @__PURE__ */ jsxs24(CardHeader, { children: [
          /* @__PURE__ */ jsx29(CardTitle, { className: "text-base", children: t2.active }),
          /* @__PURE__ */ jsx29(CardDescription, { children: sessions.length })
        ] }),
        /* @__PURE__ */ jsx29(CardContent, { className: "space-y-3", children: sessions.map((s) => /* @__PURE__ */ jsxs24("div", { className: "flex items-center justify-between gap-4 rounded-lg border border-border p-3", children: [
          /* @__PURE__ */ jsxs24("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx29(Monitor, { className: "h-4 w-4 text-muted-foreground" }),
            /* @__PURE__ */ jsxs24("div", { children: [
              /* @__PURE__ */ jsxs24("p", { className: "text-sm font-medium", children: [
                s.device,
                s.current && /* @__PURE__ */ jsx29(StatusBadge, { tone: "success", className: "ms-2", children: t2.current })
              ] }),
              /* @__PURE__ */ jsx29("p", { className: "text-xs text-muted-foreground", children: [s.location, s.lastActive].filter(Boolean).join(" \xB7 ") })
            ] })
          ] }),
          !s.current && /* @__PURE__ */ jsxs24(Button, { variant: "ghost", size: "sm", onClick: () => onRevokeSession?.(s.id), children: [
            /* @__PURE__ */ jsx29(LogOut4, { className: "h-4 w-4" }),
            " ",
            t2.revoke
          ] })
        ] }, s.id)) })
      ] }) })
    ] })
  ] });
}

// src/components/pickers/ColorPicker.tsx
import * as React5 from "react";
import { jsx as jsx30, jsxs as jsxs25 } from "react/jsx-runtime";
var DEFAULT_PRESETS = [
  "#7c3aed",
  "#931535",
  "#2563eb",
  "#0891b2",
  "#059669",
  "#16a34a",
  "#ca8a04",
  "#ea580c",
  "#dc2626",
  "#db2777",
  "#475569",
  "#0f172a"
];
function normalizeHex(v) {
  let h = v.trim();
  if (h && !h.startsWith("#")) h = "#" + h;
  return h;
}
function ColorPicker({
  value,
  onChange,
  presets = DEFAULT_PRESETS,
  className,
  disabled,
  ...rest
}) {
  const [text, setText] = React5.useState(value);
  React5.useEffect(() => setText(value), [value]);
  const commitText = () => {
    const h = normalizeHex(text);
    if (/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(h)) onChange(h);
    else setText(value);
  };
  return /* @__PURE__ */ jsxs25(Popover, { children: [
    /* @__PURE__ */ jsxs25(
      PopoverTrigger,
      {
        disabled,
        "aria-label": rest["aria-label"] ?? "Pick a color",
        className: cn(
          "inline-flex items-center gap-2 rounded-lg border border-input bg-background px-2.5 py-1.5 text-sm outline-none transition hover:bg-accent disabled:opacity-50",
          className
        ),
        children: [
          /* @__PURE__ */ jsx30("span", { className: "h-5 w-5 shrink-0 rounded-md border border-border", style: { background: value } }),
          /* @__PURE__ */ jsx30("span", { className: "font-mono text-xs uppercase text-muted-foreground", children: value })
        ]
      }
    ),
    /* @__PURE__ */ jsxs25(PopoverContent, { className: "w-60 space-y-3", align: "start", children: [
      /* @__PURE__ */ jsxs25("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx30(
          "input",
          {
            type: "color",
            value: /^#[0-9a-fA-F]{6}$/.test(value) ? value : "#000000",
            onChange: (e) => onChange(e.target.value),
            className: "h-9 w-9 shrink-0 cursor-pointer rounded-md border border-input bg-transparent p-0.5",
            "aria-label": "Color wheel"
          }
        ),
        /* @__PURE__ */ jsx30(
          Input,
          {
            value: text,
            onChange: (e) => setText(e.target.value),
            onBlur: commitText,
            onKeyDown: (e) => e.key === "Enter" && commitText(),
            className: "font-mono uppercase",
            placeholder: "#000000"
          }
        )
      ] }),
      /* @__PURE__ */ jsx30("div", { className: "grid grid-cols-6 gap-1.5", children: presets.map((p) => /* @__PURE__ */ jsx30(
        "button",
        {
          type: "button",
          onClick: () => onChange(p),
          "aria-label": p,
          className: cn(
            "h-7 w-7 rounded-md border border-border transition hover:scale-110",
            value.toLowerCase() === p.toLowerCase() && "ring-2 ring-ring ring-offset-1 ring-offset-background"
          ),
          style: { background: p }
        },
        p
      )) })
    ] })
  ] });
}

// src/components/pickers/IconPicker.tsx
import * as React6 from "react";
import * as Icons2 from "lucide-react";
import { jsx as jsx31, jsxs as jsxs26 } from "react/jsx-runtime";
var COMMON = [
  "Activity",
  "AlertCircle",
  "Archive",
  "ArrowRight",
  "Bell",
  "Bookmark",
  "Box",
  "Calendar",
  "Camera",
  "Check",
  "CheckCircle",
  "ChevronRight",
  "Circle",
  "Clipboard",
  "Clock",
  "Cloud",
  "Code",
  "Cog",
  "Command",
  "Compass",
  "Copy",
  "CreditCard",
  "Database",
  "Download",
  "Edit",
  "Eye",
  "File",
  "FileText",
  "Filter",
  "Flag",
  "Folder",
  "Gift",
  "Globe",
  "Grid",
  "Hash",
  "Heart",
  "Home",
  "Image",
  "Inbox",
  "Info",
  "Key",
  "Layers",
  "Layout",
  "Link",
  "List",
  "Lock",
  "Mail",
  "Map",
  "MapPin",
  "Menu",
  "MessageSquare",
  "Mic",
  "Monitor",
  "Moon",
  "MoreHorizontal",
  "Move",
  "Music",
  "Package",
  "Paperclip",
  "Pencil",
  "Phone",
  "PieChart",
  "Play",
  "Plus",
  "Power",
  "Printer",
  "Radio",
  "RefreshCw",
  "Rocket",
  "Save",
  "Search",
  "Send",
  "Server",
  "Settings",
  "Share2",
  "Shield",
  "ShieldCheck",
  "ShoppingCart",
  "Sparkles",
  "Star",
  "Sun",
  "Tag",
  "Target",
  "Terminal",
  "Trash2",
  "TrendingUp",
  "Truck",
  "Upload",
  "User",
  "Users",
  "Video",
  "Wallet",
  "Wifi",
  "Workflow",
  "Wrench",
  "Zap"
];
function Glyph({ name, className }) {
  const Cmp = Icons2[name] ?? Icons2.Sparkles;
  return /* @__PURE__ */ jsx31(Cmp, { className });
}
function IconPicker({ value, onChange, icons = COMMON, className, disabled }) {
  const [q, setQ] = React6.useState("");
  const filtered = React6.useMemo(
    () => q ? icons.filter((n) => n.toLowerCase().includes(q.toLowerCase())) : icons,
    [q, icons]
  );
  return /* @__PURE__ */ jsxs26(Popover, { children: [
    /* @__PURE__ */ jsxs26(
      PopoverTrigger,
      {
        disabled,
        "aria-label": "Pick an icon",
        className: cn(
          "inline-flex items-center gap-2 rounded-lg border border-input bg-background px-2.5 py-1.5 text-sm outline-none transition hover:bg-accent disabled:opacity-50",
          className
        ),
        children: [
          /* @__PURE__ */ jsx31(Glyph, { name: value ?? "Sparkles", className: "h-4 w-4" }),
          /* @__PURE__ */ jsx31("span", { className: "text-xs text-muted-foreground", children: value ?? "Choose icon" })
        ]
      }
    ),
    /* @__PURE__ */ jsxs26(PopoverContent, { className: "w-64 space-y-2", align: "start", children: [
      /* @__PURE__ */ jsx31(Input, { value: q, onChange: (e) => setQ(e.target.value), placeholder: "Search icons\u2026", autoFocus: true }),
      /* @__PURE__ */ jsx31(ScrollArea, { className: "h-56", children: /* @__PURE__ */ jsxs26("div", { className: "grid grid-cols-6 gap-1 pe-2", children: [
        filtered.map((n) => /* @__PURE__ */ jsx31(
          "button",
          {
            type: "button",
            title: n,
            onClick: () => onChange(n),
            className: cn(
              "flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition hover:bg-accent hover:text-foreground",
              value === n && "bg-primary/15 text-primary ring-1 ring-primary/40"
            ),
            children: /* @__PURE__ */ jsx31(Glyph, { name: n, className: "h-4 w-4" })
          },
          n
        )),
        filtered.length === 0 && /* @__PURE__ */ jsx31("p", { className: "col-span-6 py-6 text-center text-xs text-muted-foreground", children: "No icons found" })
      ] }) })
    ] })
  ] });
}

// src/components/map/MapView.tsx
import * as React7 from "react";
import { jsx as jsx32 } from "react/jsx-runtime";
var LEAFLET_CSS = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
function ensureLeafletCss() {
  if (typeof document === "undefined") return;
  if (document.querySelector(`link[data-togo-leaflet]`)) return;
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = LEAFLET_CSS;
  link.setAttribute("data-togo-leaflet", "");
  document.head.appendChild(link);
}
function MapView({
  center,
  zoom = 12,
  markers = [],
  height = 360,
  className,
  attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}) {
  const ref = React7.useRef(null);
  const mapRef = React7.useRef(null);
  const layerRef = React7.useRef(null);
  React7.useEffect(() => {
    let cancelled = false;
    ensureLeafletCss();
    (async () => {
      const L = (await import("leaflet")).default ?? await import("leaflet");
      if (cancelled || !ref.current) return;
      if (!mapRef.current) {
        mapRef.current = L.map(ref.current, { attributionControl: true }).setView(center, zoom);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution,
          maxZoom: 19
        }).addTo(mapRef.current);
        layerRef.current = L.layerGroup().addTo(mapRef.current);
      } else {
        mapRef.current.setView(center, zoom);
      }
      layerRef.current.clearLayers();
      for (const m of markers) {
        const color = m.color ?? "hsl(345 75% 33%)";
        const icon = L.divIcon({
          className: "",
          html: `<span style="display:block;width:14px;height:14px;border-radius:9999px;background:${color};border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,.4)"></span>`,
          iconSize: [14, 14],
          iconAnchor: [7, 7]
        });
        const mk = L.marker([m.lat, m.lng], { icon }).addTo(layerRef.current);
        if (m.label) mk.bindPopup(m.label);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [center[0], center[1], zoom, JSON.stringify(markers)]);
  React7.useEffect(() => () => {
    if (mapRef.current) {
      mapRef.current.remove();
      mapRef.current = null;
    }
  }, []);
  return /* @__PURE__ */ jsx32(
    "div",
    {
      ref,
      className: cn("overflow-hidden rounded-xl border border-border bg-muted", className),
      style: { height: typeof height === "number" ? `${height}px` : height, width: "100%" }
    }
  );
}

// src/components/map/MapLegend.tsx
import { useState as useState17 } from "react";
import { Info, ChevronDown as ChevronDown3 } from "lucide-react";

// src/components/map/mapDefaults.ts
var MARKER_COLORS = {
  strike: "#ef4444",
  // red-500
  launch_site: "#f97316",
  // orange-500
  proxy_force: "#a855f7",
  // purple-500
  military_base: "#3b82f6",
  // blue-500
  air_defense: "#06b6d4",
  // cyan-500
  nuclear: "#eab308",
  // yellow-500
  naval: "#14b8a6",
  // teal-500
  infrastructure: "#6b7280"
  // gray-500
};
var MARKER_LABELS = {
  strike: { en: "Strike / Attack", ar: "\u0636\u0631\u0628\u0629 / \u0647\u062C\u0648\u0645" },
  launch_site: { en: "Launch Site", ar: "\u0645\u0648\u0642\u0639 \u0627\u0644\u0625\u0637\u0644\u0627\u0642" },
  proxy_force: { en: "Proxy Force", ar: "\u0642\u0648\u0629 \u0648\u0643\u064A\u0644\u0629" },
  military_base: { en: "Military Base", ar: "\u0642\u0627\u0639\u062F\u0629 \u0639\u0633\u0643\u0631\u064A\u0629" },
  air_defense: { en: "Air Defense", ar: "\u062F\u0641\u0627\u0639 \u062C\u0648\u064A" },
  nuclear: { en: "Nuclear Site", ar: "\u0645\u0648\u0642\u0639 \u0646\u0648\u0648\u064A" },
  naval: { en: "Naval Chokepoint", ar: "\u0646\u0642\u0637\u0629 \u062E\u0646\u0642 \u0628\u062D\u0631\u064A\u0629" },
  infrastructure: { en: "Critical Infra.", ar: "\u0628\u0646\u064A\u0629 \u062A\u062D\u062A\u064A\u0629 \u062D\u0631\u062C\u0629" }
};
var DEFAULT_LEGEND_GROUPS = [
  {
    label: "Threats",
    label_ar: "\u0627\u0644\u062A\u0647\u062F\u064A\u062F\u0627\u062A",
    items: [
      { type: "strike", shape: "diamond" },
      { type: "launch_site", shape: "burst" },
      { type: "proxy_force", shape: "chevron" }
    ]
  },
  {
    label: "Assets",
    label_ar: "\u0627\u0644\u0623\u0635\u0648\u0644",
    items: [
      { type: "military_base", shape: "triangle" },
      { type: "air_defense", shape: "hexagon" },
      { type: "nuclear", shape: "ring" }
    ]
  },
  {
    label: "Infrastructure",
    label_ar: "\u0627\u0644\u0628\u0646\u064A\u0629 \u0627\u0644\u062A\u062D\u062A\u064A\u0629",
    items: [
      { type: "naval", shape: "pill" },
      { type: "infrastructure", shape: "square" }
    ]
  }
];
var DEFAULT_REGION_PRESETS = [
  { key: "global", label: "Global", label_ar: "\u0639\u0627\u0644\u0645\u064A", latitude: 25.3, longitude: 51.5, zoom: 2.8 },
  { key: "mena", label: "MENA", label_ar: "\u0627\u0644\u0634\u0631\u0642 \u0627\u0644\u0623\u0648\u0633\u0637", latitude: 28, longitude: 45, zoom: 3.5 },
  { key: "gulf", label: "Gulf", label_ar: "\u0627\u0644\u062E\u0644\u064A\u062C", latitude: 26, longitude: 52, zoom: 5.5 },
  { key: "levant", label: "Levant", label_ar: "\u0627\u0644\u0645\u0634\u0631\u0642", latitude: 33, longitude: 36, zoom: 5.5 },
  { key: "iran", label: "Iran", label_ar: "\u0625\u064A\u0631\u0627\u0646", latitude: 32.5, longitude: 53, zoom: 5 },
  { key: "redSea", label: "Red Sea", label_ar: "\u0627\u0644\u0628\u062D\u0631 \u0627\u0644\u0623\u062D\u0645\u0631", latitude: 18, longitude: 42, zoom: 4.5 }
];
var DEFAULT_LAYERS = [
  { id: "iranStrikes", label: "Iran Strikes", label_ar: "\u0636\u0631\u0628\u0627\u062A \u0625\u064A\u0631\u0627\u0646", enabled: true, color: MARKER_COLORS.strike },
  { id: "usBases", label: "US Bases", label_ar: "\u0627\u0644\u0642\u0648\u0627\u0639\u062F \u0627\u0644\u0623\u0645\u0631\u064A\u0643\u064A\u0629", enabled: true, color: MARKER_COLORS.military_base },
  { id: "iranianProxies", label: "Iranian Proxies", label_ar: "\u0627\u0644\u0648\u0643\u0644\u0627\u0621 \u0627\u0644\u0625\u064A\u0631\u0627\u0646\u064A\u0648\u0646", enabled: true, color: MARKER_COLORS.proxy_force },
  { id: "nuclearSites", label: "Nuclear Sites", label_ar: "\u0627\u0644\u0645\u0648\u0627\u0642\u0639 \u0627\u0644\u0646\u0648\u0648\u064A\u0629", enabled: true, color: MARKER_COLORS.nuclear },
  { id: "airDefense", label: "Air Defense", label_ar: "\u0627\u0644\u062F\u0641\u0627\u0639 \u0627\u0644\u062C\u0648\u064A", enabled: false, color: MARKER_COLORS.air_defense },
  { id: "navalChokepoints", label: "Naval Chokepoints", label_ar: "\u0646\u0642\u0627\u0637 \u0627\u0644\u062E\u0646\u0642 \u0627\u0644\u0628\u062D\u0631\u064A\u0629", enabled: false, color: MARKER_COLORS.naval },
  { id: "criticalInfra", label: "Critical Infra.", label_ar: "\u0627\u0644\u0628\u0646\u064A\u0629 \u0627\u0644\u062A\u062D\u062A\u064A\u0629 \u0627\u0644\u062D\u0631\u062C\u0629", enabled: false, color: MARKER_COLORS.infrastructure },
  { id: "conflictZones", label: "Conflict Zones", label_ar: "\u0645\u0646\u0627\u0637\u0642 \u0627\u0644\u0646\u0632\u0627\u0639", enabled: true, color: "#dc2626" }
];

// src/components/map/MapLegend.tsx
import { jsx as jsx33, jsxs as jsxs27 } from "react/jsx-runtime";
var ShapeIcon = ({ shape, color }) => {
  const size = 12;
  return /* @__PURE__ */ jsxs27("svg", { width: size, height: size, viewBox: "0 0 12 12", className: "shrink-0", "aria-hidden": "true", children: [
    shape === "diamond" && /* @__PURE__ */ jsx33("rect", { x: "2", y: "2", width: "8", height: "8", rx: "1", fill: color, transform: "rotate(45 6 6)" }),
    shape === "burst" && /* @__PURE__ */ jsx33(
      "polygon",
      {
        points: "6,0.5 7.5,4 11.5,4 8.5,6.5 9.5,10.5 6,8 2.5,10.5 3.5,6.5 0.5,4 4.5,4",
        fill: color
      }
    ),
    shape === "chevron" && /* @__PURE__ */ jsx33(
      "path",
      {
        d: "M2 8 L6 3 L10 8",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ),
    shape === "triangle" && /* @__PURE__ */ jsx33("polygon", { points: "6,1.5 11,10.5 1,10.5", fill: color }),
    shape === "hexagon" && /* @__PURE__ */ jsx33("polygon", { points: "6,1 10.5,3.5 10.5,8.5 6,11 1.5,8.5 1.5,3.5", fill: color }),
    shape === "ring" && /* @__PURE__ */ jsx33("circle", { cx: "6", cy: "6", r: "4.5", fill: "none", stroke: color, strokeWidth: "2" }),
    shape === "pill" && /* @__PURE__ */ jsx33("rect", { x: "1", y: "3.5", width: "10", height: "5", rx: "2.5", fill: color }),
    shape === "square" && /* @__PURE__ */ jsx33("rect", { x: "2", y: "2", width: "8", height: "8", rx: "1.5", fill: color })
  ] });
};
ShapeIcon.displayName = "ShapeIcon";
var MapLegend = ({
  language = "en",
  groups = DEFAULT_LEGEND_GROUPS,
  markerColors,
  markerLabels,
  className,
  defaultCollapsed = false
}) => {
  const [collapsed, setCollapsed] = useState17(defaultCollapsed);
  const isAr = language === "ar";
  const resolvedColors = { ...MARKER_COLORS, ...markerColors };
  const resolvedLabels = { ...MARKER_LABELS, ...markerLabels };
  const handleToggle = () => setCollapsed((prev) => !prev);
  return /* @__PURE__ */ jsx33(
    "div",
    {
      className: cn(
        "absolute bottom-8 z-10",
        isAr ? "start-14" : "end-14",
        className
      ),
      children: /* @__PURE__ */ jsxs27("div", { className: "bg-[hsl(var(--warroom-card)/0.95)] backdrop-blur-md border border-[hsl(var(--warroom-border))] rounded-lg shadow-sm overflow-hidden min-w-[160px]", children: [
        /* @__PURE__ */ jsxs27(
          "button",
          {
            type: "button",
            onClick: handleToggle,
            "aria-expanded": !collapsed,
            "aria-label": isAr ? "\u062A\u0628\u062F\u064A\u0644 \u0645\u0641\u062A\u0627\u062D \u0627\u0644\u062E\u0631\u064A\u0637\u0629" : "Toggle map legend",
            className: "w-full flex items-center justify-between px-3 py-2 hover:bg-[hsl(var(--warroom-border)/0.3)] transition-colors duration-fast ease-standard",
            children: [
              /* @__PURE__ */ jsxs27("div", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsx33(Info, { className: "h-3 w-3 text-[hsl(var(--brand-primary))]", "aria-hidden": "true" }),
                /* @__PURE__ */ jsx33("span", { className: "text-[11px] font-semibold text-foreground", children: isAr ? "\u0645\u0641\u062A\u0627\u062D \u0627\u0644\u062E\u0631\u064A\u0637\u0629" : "Legend" })
              ] }),
              /* @__PURE__ */ jsx33(
                ChevronDown3,
                {
                  className: cn(
                    "h-3 w-3 text-muted-foreground transition-transform duration-fast ease-standard",
                    collapsed && "-rotate-90"
                  ),
                  "aria-hidden": "true"
                }
              )
            ]
          }
        ),
        !collapsed && /* @__PURE__ */ jsxs27("div", { className: "px-3 pb-2.5 space-y-2", dir: isAr ? "rtl" : "ltr", children: [
          groups.map((group) => /* @__PURE__ */ jsxs27("div", { children: [
            /* @__PURE__ */ jsx33("span", { className: "text-[9px] font-semibold uppercase tracking-wider text-muted-foreground/50 block mb-1", children: isAr ? group.label_ar : group.label }),
            /* @__PURE__ */ jsx33("div", { className: "space-y-1", children: group.items.map(({ type, shape }) => {
              const label = resolvedLabels[type];
              const color = resolvedColors[type] ?? "#888";
              return /* @__PURE__ */ jsxs27("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx33(ShapeIcon, { shape, color }),
                /* @__PURE__ */ jsx33("span", { className: "text-[10px] text-muted-foreground leading-none", children: label ? isAr ? label.ar : label.en : type })
              ] }, type);
            }) })
          ] }, group.label)),
          /* @__PURE__ */ jsxs27("div", { children: [
            /* @__PURE__ */ jsx33("span", { className: "text-[9px] font-semibold uppercase tracking-wider text-muted-foreground/50 block mb-1", children: isAr ? "\u0627\u0644\u062E\u0637\u0648\u0631\u0629" : "Severity" }),
            /* @__PURE__ */ jsx33("div", { className: "flex items-center gap-1", children: /* @__PURE__ */ jsx33(
              "div",
              {
                className: "flex-1 h-1.5 rounded-full",
                style: { background: "linear-gradient(to right, #eab308, #f97316, #dc2626)" }
              }
            ) }),
            /* @__PURE__ */ jsxs27("div", { className: cn("flex justify-between mt-0.5", isAr && "flex-row-reverse"), children: [
              /* @__PURE__ */ jsx33("span", { className: "text-[8px] text-muted-foreground/50", children: isAr ? "\u0645\u062A\u0635\u0627\u0639\u062F" : "Elevated" }),
              /* @__PURE__ */ jsx33("span", { className: "text-[8px] text-muted-foreground/50", children: isAr ? "\u062D\u0631\u062C" : "Critical" })
            ] })
          ] })
        ] })
      ] })
    }
  );
};
MapLegend.displayName = "MapLegend";

// src/components/map/MapLayersPanel.tsx
import { useState as useState18 } from "react";
import { Layers, ChevronDown as ChevronDown4 } from "lucide-react";
import { jsx as jsx34, jsxs as jsxs28 } from "react/jsx-runtime";
var MapLayersPanel = ({
  layers = DEFAULT_LAYERS,
  language = "en",
  onToggle,
  className
}) => {
  const [collapsed, setCollapsed] = useState18(false);
  const isAr = language === "ar";
  const handleToggle = () => setCollapsed((prev) => !prev);
  return /* @__PURE__ */ jsx34(
    "div",
    {
      className: cn(
        "absolute top-3 z-10",
        isAr ? "end-3" : "start-3",
        className
      ),
      children: /* @__PURE__ */ jsxs28("div", { className: "bg-[hsl(var(--warroom-card)/0.95)] backdrop-blur-md border border-[hsl(var(--warroom-border))] rounded-lg shadow-sm overflow-hidden min-w-[160px]", children: [
        /* @__PURE__ */ jsxs28(
          "button",
          {
            type: "button",
            onClick: handleToggle,
            "aria-expanded": !collapsed,
            "aria-label": isAr ? "\u062A\u0628\u062F\u064A\u0644 \u0644\u0648\u062D\u0629 \u0627\u0644\u0637\u0628\u0642\u0627\u062A" : "Toggle layers panel",
            className: "w-full flex items-center justify-between px-3 py-2 hover:bg-[hsl(var(--warroom-border)/0.3)] transition-colors duration-fast ease-standard",
            children: [
              /* @__PURE__ */ jsxs28("div", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsx34(Layers, { className: "h-3 w-3 text-[hsl(var(--brand-primary))]", "aria-hidden": "true" }),
                /* @__PURE__ */ jsx34("span", { className: "text-[11px] font-semibold text-foreground", children: isAr ? "\u0627\u0644\u0637\u0628\u0642\u0627\u062A" : "Layers" })
              ] }),
              /* @__PURE__ */ jsx34(
                ChevronDown4,
                {
                  className: cn(
                    "h-3 w-3 text-muted-foreground transition-transform duration-fast ease-standard",
                    collapsed && "-rotate-90"
                  ),
                  "aria-hidden": "true"
                }
              )
            ]
          }
        ),
        !collapsed && /* @__PURE__ */ jsx34("div", { className: "px-3 pb-2.5 space-y-1.5", dir: isAr ? "rtl" : "ltr", children: layers.map((layer) => /* @__PURE__ */ jsxs28(
          "label",
          {
            className: "flex items-center gap-2 cursor-pointer group",
            children: [
              /* @__PURE__ */ jsx34(
                "input",
                {
                  type: "checkbox",
                  checked: layer.enabled,
                  onChange: () => onToggle?.(layer.id, !layer.enabled),
                  className: "sr-only",
                  "aria-label": isAr ? layer.label_ar : layer.label
                }
              ),
              /* @__PURE__ */ jsx34(
                "span",
                {
                  className: cn(
                    "w-3 h-3 rounded-sm border shrink-0 flex items-center justify-center transition-colors duration-fast ease-standard",
                    layer.enabled ? "border-transparent" : "border-muted-foreground/40 bg-transparent"
                  ),
                  style: layer.enabled && layer.color ? { backgroundColor: layer.color } : void 0,
                  "aria-hidden": "true",
                  children: layer.enabled && /* @__PURE__ */ jsx34("svg", { width: "8", height: "8", viewBox: "0 0 8 8", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ jsx34("path", { d: "M1.5 4L3.5 6L6.5 2", stroke: "white", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })
                }
              ),
              /* @__PURE__ */ jsx34("span", { className: "text-[10px] text-muted-foreground group-hover:text-foreground transition-colors duration-fast ease-standard leading-none", children: isAr ? layer.label_ar : layer.label })
            ]
          },
          layer.id
        )) })
      ] })
    }
  );
};
MapLayersPanel.displayName = "MapLayersPanel";

// src/components/map/MapPanel.tsx
import React8, { useState as useState19, useCallback as useCallback5, useMemo as useMemo4 } from "react";
import { Fragment as Fragment8, jsx as jsx35, jsxs as jsxs29 } from "react/jsx-runtime";
var ALERT_SEVERITY_COLORS = {
  critical: "#dc2626",
  high: "#ea580c",
  medium: "#d97706",
  low: "#16a34a"
};
var TIME_RANGES = [
  { key: "24h", ms: 864e5, label_en: "24h", label_ar: "24 \u0633" },
  { key: "7d", ms: 7 * 864e5, label_en: "7d", label_ar: "7 \u0623\u064A\u0627\u0645" },
  { key: "30d", ms: 30 * 864e5, label_en: "30d", label_ar: "30 \u064A\u0648\u0645" },
  { key: "all", ms: Infinity, label_en: "All", label_ar: "\u0627\u0644\u0643\u0644" }
];
var MapPlaceholder = ({ isDark }) => /* @__PURE__ */ jsxs29(
  "div",
  {
    className: cn(
      "w-full h-full flex flex-col items-center justify-center gap-3",
      isDark ? "bg-[#0a0e1a]" : "bg-slate-100"
    ),
    role: "img",
    "aria-label": "Map placeholder \u2014 supply renderMap prop to render the actual map",
    children: [
      /* @__PURE__ */ jsxs29(
        "svg",
        {
          width: "80",
          height: "60",
          viewBox: "0 0 80 60",
          fill: "none",
          "aria-hidden": "true",
          className: "opacity-30",
          children: [
            /* @__PURE__ */ jsx35("rect", { width: "80", height: "60", rx: "4", fill: isDark ? "#1e293b" : "#cbd5e1" }),
            [10, 20, 30, 40, 50].map((y) => /* @__PURE__ */ jsx35("line", { x1: "0", y1: y, x2: "80", y2: y, stroke: isDark ? "#334155" : "#94a3b8", strokeWidth: "0.5" }, y)),
            [16, 32, 48, 64].map((x) => /* @__PURE__ */ jsx35("line", { x1: x, y1: "0", x2: x, y2: "60", stroke: isDark ? "#334155" : "#94a3b8", strokeWidth: "0.5" }, x)),
            /* @__PURE__ */ jsx35("ellipse", { cx: "40", cy: "30", rx: "22", ry: "14", fill: isDark ? "#1e3a5f" : "#bfdbfe", opacity: "0.6" }),
            /* @__PURE__ */ jsx35("circle", { cx: "35", cy: "26", r: "3", fill: "#ef4444" }),
            /* @__PURE__ */ jsx35("circle", { cx: "48", cy: "33", r: "2.5", fill: "#f97316" }),
            /* @__PURE__ */ jsx35("circle", { cx: "28", cy: "34", r: "2", fill: "#3b82f6" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs29("p", { className: "text-[11px] text-muted-foreground text-center px-4 max-w-[200px]", children: [
        "Supply a ",
        /* @__PURE__ */ jsx35("code", { className: "font-mono text-[10px]", children: "renderMap" }),
        " prop to render the map engine."
      ] })
    ]
  }
);
MapPlaceholder.displayName = "MapPlaceholder";
var MapPanel = ({
  renderMap,
  markers = [],
  alerts = [],
  regionPresets = DEFAULT_REGION_PRESETS,
  layers: layersProp,
  initialRegion = "global",
  language = "en",
  isDark = true,
  onLayerToggle,
  onAlertCountChange,
  className
}) => {
  const isAr = language === "ar";
  const [activeRegionKey, setActiveRegionKey] = useState19(initialRegion);
  const handleRegionSelect = useCallback5((key) => {
    setActiveRegionKey(key);
  }, []);
  const activeRegion = useMemo4(
    () => regionPresets.find((r) => r.key === activeRegionKey) ?? regionPresets[0] ?? DEFAULT_REGION_PRESETS[0],
    [activeRegionKey, regionPresets]
  );
  const [timeRange, setTimeRange] = useState19("all");
  const filteredAlerts = useMemo4(() => {
    if (!alerts.length) return [];
    const range = TIME_RANGES.find((t2) => t2.key === timeRange);
    if (!range || range.ms === Infinity) return alerts;
    const cutoff = Date.now() - range.ms;
    return alerts.filter((a) => new Date(a.updated_at).getTime() >= cutoff);
  }, [alerts, timeRange]);
  const alertCount = filteredAlerts.length;
  const prevAlertCountRef = React8.useRef(alertCount);
  if (prevAlertCountRef.current !== alertCount) {
    prevAlertCountRef.current = alertCount;
    onAlertCountChange?.(alertCount);
  }
  const [sidebarOpen, setSidebarOpen] = useState19(false);
  const handleSidebarOpen = useCallback5(() => setSidebarOpen(true), []);
  const handleSidebarClose = useCallback5(() => setSidebarOpen(false), []);
  const resolvedLayerDefs = layersProp ?? DEFAULT_LAYERS;
  const [layerEnabled, setLayerEnabled] = useState19(
    () => Object.fromEntries(resolvedLayerDefs.map((l) => [l.id, l.enabled]))
  );
  const handleLayerToggle = useCallback5((layerId, enabled) => {
    setLayerEnabled((prev) => ({ ...prev, [layerId]: enabled }));
    onLayerToggle?.(layerId, enabled);
  }, [onLayerToggle]);
  const mergedLayers = useMemo4(
    () => resolvedLayerDefs.map((l) => ({ ...l, enabled: layerEnabled[l.id] ?? l.enabled })),
    [resolvedLayerDefs, layerEnabled]
  );
  const mapCtx = {
    layers: layerEnabled,
    markers,
    alerts: filteredAlerts,
    activeRegion,
    language,
    dir: isAr ? "rtl" : "ltr",
    isDark
  };
  return /* @__PURE__ */ jsxs29("div", { className: cn("w-full h-full relative overflow-hidden", className), children: [
    /* @__PURE__ */ jsx35("div", { className: "absolute inset-0", children: renderMap ? renderMap(mapCtx) : /* @__PURE__ */ jsx35(MapPlaceholder, { isDark }) }),
    /* @__PURE__ */ jsx35(
      "div",
      {
        className: cn(
          "absolute top-3 z-10 flex items-center gap-0.5",
          "bg-[hsl(var(--warroom-card)/0.95)] backdrop-blur-md",
          "border border-[hsl(var(--warroom-border))] rounded-lg p-0.5 shadow-sm",
          // Position next to layers panel on the opposite side
          isAr ? "end-[11rem]" : "start-[11rem]"
        ),
        role: "toolbar",
        "aria-label": isAr ? "\u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u0645\u0646\u0637\u0642\u0629" : "Region selector",
        children: regionPresets.map((preset) => /* @__PURE__ */ jsx35(
          "button",
          {
            type: "button",
            onClick: () => handleRegionSelect(preset.key),
            "aria-pressed": activeRegionKey === preset.key,
            className: cn(
              "px-2.5 py-1 text-[11px] font-medium rounded-md transition-all duration-fast ease-standard",
              activeRegionKey === preset.key ? "bg-[hsl(var(--brand-primary))] text-white shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-[hsl(var(--warroom-border)/0.5)]"
            ),
            children: isAr ? preset.label_ar : preset.label
          },
          preset.key
        ))
      }
    ),
    /* @__PURE__ */ jsxs29(
      "div",
      {
        className: cn(
          "absolute bottom-10 z-10 flex items-center gap-0.5",
          "bg-[hsl(var(--warroom-card)/0.95)] backdrop-blur-md",
          "border border-[hsl(var(--warroom-border))] rounded-lg p-0.5 shadow-sm",
          isAr ? "end-14" : "start-14"
        ),
        role: "toolbar",
        "aria-label": isAr ? "\u062A\u0635\u0641\u064A\u0629 \u0627\u0644\u0646\u0637\u0627\u0642 \u0627\u0644\u0632\u0645\u0646\u064A" : "Time range filter",
        children: [
          /* @__PURE__ */ jsx35("span", { className: "text-[10px] text-muted-foreground px-1.5", children: isAr ? "\u0627\u0644\u0646\u0637\u0627\u0642 \u0627\u0644\u0632\u0645\u0646\u064A" : "Time range" }),
          TIME_RANGES.map((t2) => /* @__PURE__ */ jsx35(
            "button",
            {
              type: "button",
              onClick: () => setTimeRange(t2.key),
              "aria-pressed": timeRange === t2.key,
              className: cn(
                "px-2.5 py-1 text-[10px] font-medium rounded-md transition-all duration-fast ease-standard",
                timeRange === t2.key ? "bg-[hsl(var(--brand-primary))] text-white shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-[hsl(var(--warroom-border)/0.5)]"
              ),
              children: isAr ? t2.label_ar : t2.label_en
            },
            t2.key
          ))
        ]
      }
    ),
    /* @__PURE__ */ jsxs29(
      "button",
      {
        type: "button",
        onClick: handleSidebarOpen,
        "aria-label": isAr ? "\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062A\u0646\u0628\u064A\u0647\u0627\u062A" : "Alert list",
        className: cn(
          "absolute top-3 z-20 flex items-center gap-1.5 px-2.5 py-1.5",
          "bg-[hsl(var(--warroom-card)/0.95)] backdrop-blur-md",
          "border border-[hsl(var(--warroom-border))] rounded-lg",
          "text-foreground hover:bg-[hsl(var(--warroom-border)/0.5)] transition-all duration-fast ease-standard shadow-sm",
          isAr ? "start-16" : "end-3"
        ),
        children: [
          /* @__PURE__ */ jsx35("span", { className: "text-[11px] font-medium", children: isAr ? `\u0627\u0644\u062A\u0646\u0628\u064A\u0647\u0627\u062A (${alertCount})` : `Alerts (${alertCount})` }),
          alertCount > 0 && /* @__PURE__ */ jsx35(
            "span",
            {
              className: "flex items-center justify-center w-4 h-4 rounded-full bg-red-600 text-[9px] font-bold text-white",
              "aria-hidden": "true",
              children: alertCount > 99 ? "99+" : alertCount
            }
          )
        ]
      }
    ),
    sidebarOpen && /* @__PURE__ */ jsxs29(Fragment8, { children: [
      /* @__PURE__ */ jsx35(
        "div",
        {
          className: "absolute inset-0 z-20 bg-black/10",
          onClick: handleSidebarClose,
          "aria-hidden": "true"
        }
      ),
      /* @__PURE__ */ jsxs29(
        "aside",
        {
          className: cn(
            "absolute top-0 bottom-0 z-30 w-[300px] flex flex-col",
            "bg-[hsl(var(--warroom-card)/0.97)] backdrop-blur-xl",
            "border-[hsl(var(--warroom-border))] shadow-xl",
            isAr ? "start-0 border-e animate-in slide-in-from-left duration-200" : "end-0 border-s animate-in slide-in-from-right duration-200"
          ),
          dir: isAr ? "rtl" : "ltr",
          "aria-label": isAr ? "\u0627\u0644\u062A\u0646\u0628\u064A\u0647\u0627\u062A \u0627\u0644\u062D\u0627\u0644\u064A\u0629" : "Current Alerts",
          children: [
            /* @__PURE__ */ jsxs29(
              "div",
              {
                className: cn(
                  "flex items-center justify-between px-4 py-3 border-b border-[hsl(var(--warroom-border))]",
                  isAr && "flex-row-reverse"
                ),
                children: [
                  /* @__PURE__ */ jsx35("span", { className: "text-sm font-semibold text-foreground", children: isAr ? "\u0627\u0644\u062A\u0646\u0628\u064A\u0647\u0627\u062A \u0627\u0644\u062D\u0627\u0644\u064A\u0629" : "Current Alerts" }),
                  /* @__PURE__ */ jsx35(
                    "button",
                    {
                      type: "button",
                      onClick: handleSidebarClose,
                      "aria-label": isAr ? "\u0625\u063A\u0644\u0627\u0642" : "Close",
                      className: "p-1 rounded-md hover:bg-[hsl(var(--warroom-border)/0.5)] text-muted-foreground",
                      children: "\u2715"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsx35("div", { className: "flex-1 overflow-y-auto divide-y divide-border/30", children: filteredAlerts.length === 0 ? /* @__PURE__ */ jsx35("div", { className: "p-6 text-center text-sm text-muted-foreground", children: isAr ? "\u0644\u0627 \u062A\u0648\u062C\u062F \u062A\u0646\u0628\u064A\u0647\u0627\u062A" : "No alerts" }) : filteredAlerts.map((alert) => {
              const sev = alert.severity ?? "medium";
              const sevColor = ALERT_SEVERITY_COLORS[sev] ?? ALERT_SEVERITY_COLORS.medium;
              const title = isAr && alert.title_ar ? alert.title_ar : alert.title_en;
              return /* @__PURE__ */ jsxs29(
                "a",
                {
                  href: `/alert/${alert.slug}`,
                  className: "flex items-start gap-2.5 px-4 py-3 hover:bg-muted/30 transition-colors duration-fast ease-standard group border-s-2",
                  style: { borderInlineStartColor: sevColor },
                  children: [
                    /* @__PURE__ */ jsx35(
                      "span",
                      {
                        className: "w-2 h-2 rounded-full shrink-0 mt-1.5",
                        style: { backgroundColor: sevColor },
                        "aria-hidden": "true"
                      }
                    ),
                    /* @__PURE__ */ jsxs29("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsx35("p", { className: "text-[12px] font-medium text-foreground line-clamp-2 leading-snug group-hover:text-primary", children: title }),
                      /* @__PURE__ */ jsxs29("p", { className: "text-[10px] text-muted-foreground mt-0.5 capitalize", children: [
                        alert.mode,
                        " \xB7 ",
                        sev
                      ] })
                    ] })
                  ]
                },
                alert.slug
              );
            }) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx35(
      MapLayersPanel,
      {
        layers: mergedLayers,
        language,
        onToggle: handleLayerToggle
      }
    ),
    /* @__PURE__ */ jsx35(MapLegend, { language })
  ] });
};
MapPanel.displayName = "MapPanel";

// src/components/map/EventMapPanel.tsx
import { MapPin } from "lucide-react";
import { jsx as jsx36, jsxs as jsxs30 } from "react/jsx-runtime";
var EventMapPanel = ({ location, language = "en" }) => {
  if (!location) return null;
  const isAr = language === "ar";
  return /* @__PURE__ */ jsxs30(Card, { children: [
    /* @__PURE__ */ jsx36(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxs30(CardTitle, { className: "text-base flex items-center gap-2", children: [
      /* @__PURE__ */ jsx36(MapPin, { className: "w-4 h-4 text-primary", "aria-hidden": "true" }),
      isAr ? "\u0627\u0644\u0645\u0648\u0642\u0639" : "Location"
    ] }) }),
    /* @__PURE__ */ jsx36(CardContent, { children: /* @__PURE__ */ jsx36(
      "p",
      {
        className: "text-sm text-foreground p-3 bg-muted/30 rounded-lg",
        dir: isAr ? "rtl" : "ltr",
        children: location
      }
    ) })
  ] });
};
EventMapPanel.displayName = "EventMapPanel";

// src/components/entity/NetworkGraph.tsx
import * as React9 from "react";
import { jsx as jsx37, jsxs as jsxs31 } from "react/jsx-runtime";
var PALETTE = [
  "hsl(345 75% 45%)",
  "hsl(217 91% 60%)",
  "hsl(160 84% 39%)",
  "hsl(38 92% 50%)",
  "hsl(263 70% 60%)",
  "hsl(199 89% 48%)"
];
function NetworkGraph({
  nodes,
  links,
  width = 640,
  height = 420,
  className,
  groupColor,
  nodeRadius = 11,
  onNodeClick
}) {
  const svgRef = React9.useRef(null);
  const sim = React9.useRef(/* @__PURE__ */ new Map());
  const alpha = React9.useRef(1);
  const raf = React9.useRef(null);
  const drag = React9.useRef(null);
  const [, tick] = React9.useReducer((c) => c + 1, 0);
  const [hover, setHover] = React9.useState(null);
  const groups = React9.useMemo(() => Array.from(new Set(nodes.map((n) => n.group ?? "default"))), [nodes]);
  const colorOf = (g) => groupColor?.(g) ?? PALETTE[Math.max(0, groups.indexOf(g ?? "default")) % PALETTE.length];
  const stop = React9.useCallback(() => {
    if (raf.current != null) {
      cancelAnimationFrame(raf.current);
      raf.current = null;
    }
  }, []);
  const step = React9.useCallback(() => {
    const m2 = sim.current;
    const ids = Array.from(m2.keys());
    const a = alpha.current;
    for (let i = 0; i < ids.length; i++) {
      for (let j = i + 1; j < ids.length; j++) {
        const p = m2.get(ids[i]), q = m2.get(ids[j]);
        let dx = p.x - q.x, dy = p.y - q.y;
        const d2 = dx * dx + dy * dy || 0.01;
        const d = Math.sqrt(d2);
        const f = 3200 / d2 * a;
        dx /= d;
        dy /= d;
        p.vx += dx * f;
        p.vy += dy * f;
        q.vx -= dx * f;
        q.vy -= dy * f;
      }
    }
    for (const l of links) {
      const p = m2.get(l.source), q = m2.get(l.target);
      if (!p || !q) continue;
      let dx = q.x - p.x, dy = q.y - p.y;
      const d = Math.sqrt(dx * dx + dy * dy) || 0.01;
      const f = (d - 100) * 0.045 * a;
      dx /= d;
      dy /= d;
      p.vx += dx * f;
      p.vy += dy * f;
      q.vx -= dx * f;
      q.vy -= dy * f;
    }
    for (const p of m2.values()) {
      if (p.fx != null) {
        p.x = p.fx;
        p.y = p.fy;
        p.vx = 0;
        p.vy = 0;
        continue;
      }
      p.vx += (width / 2 - p.x) * 15e-4 * a;
      p.vy += (height / 2 - p.y) * 15e-4 * a;
      p.vx *= 0.86;
      p.vy *= 0.86;
      p.x = Math.max(nodeRadius + 4, Math.min(width - nodeRadius - 4, p.x + p.vx));
      p.y = Math.max(nodeRadius + 4, Math.min(height - nodeRadius - 4, p.y + p.vy));
    }
    alpha.current = drag.current ? Math.max(a, 0.3) : a * 0.99;
    tick();
    if (alpha.current > 0.02 || drag.current) raf.current = requestAnimationFrame(step);
    else raf.current = null;
  }, [links, width, height, nodeRadius]);
  const start = React9.useCallback(() => {
    if (raf.current == null) raf.current = requestAnimationFrame(step);
  }, [step]);
  React9.useEffect(() => {
    const prev = sim.current;
    const next = /* @__PURE__ */ new Map();
    const n = nodes.length || 1;
    nodes.forEach((node, i) => {
      const old = prev.get(node.id);
      if (old) next.set(node.id, old);
      else {
        const ang = i / n * Math.PI * 2;
        const R = Math.min(width, height) / 3;
        next.set(node.id, { x: width / 2 + R * Math.cos(ang), y: height / 2 + R * Math.sin(ang), vx: 0, vy: 0 });
      }
    });
    sim.current = next;
    alpha.current = 1;
    start();
    return stop;
  }, [nodes, links, width, height, start, stop]);
  function toSvg(e) {
    const svg = svgRef.current;
    if (!svg) return { x: 0, y: 0 };
    const pt = svg.createSVGPoint();
    pt.x = e.clientX;
    pt.y = e.clientY;
    const ctm = svg.getScreenCTM();
    if (!ctm) return { x: 0, y: 0 };
    const p = pt.matrixTransform(ctm.inverse());
    return { x: p.x, y: p.y };
  }
  function onDown(id, e) {
    e.stopPropagation();
    e.currentTarget.setPointerCapture?.(e.pointerId);
    const p = sim.current.get(id);
    if (p) {
      const m2 = toSvg(e);
      p.fx = m2.x;
      p.fy = m2.y;
    }
    drag.current = { id, moved: false };
    alpha.current = Math.max(alpha.current, 0.5);
    start();
  }
  function onMove(e) {
    const d = drag.current;
    if (!d) return;
    const p = sim.current.get(d.id);
    if (p) {
      const m2 = toSvg(e);
      p.fx = m2.x;
      p.fy = m2.y;
      d.moved = true;
    }
  }
  function onUp(e) {
    const d = drag.current;
    if (!d) return;
    const p = sim.current.get(d.id);
    if (p) {
      p.fx = null;
      p.fy = null;
    }
    if (!d.moved) {
      const node = nodes.find((n) => n.id === d.id);
      if (node) onNodeClick?.(node);
    }
    drag.current = null;
    alpha.current = Math.max(alpha.current, 0.3);
    start();
  }
  const m = sim.current;
  return /* @__PURE__ */ jsxs31(
    "svg",
    {
      ref: svgRef,
      viewBox: `0 0 ${width} ${height}`,
      className: cn("w-full touch-none select-none rounded-xl border border-border bg-card", className),
      role: "img",
      "aria-label": "Network graph (drag nodes to rearrange)",
      onPointerMove: onMove,
      onPointerUp: onUp,
      onPointerLeave: onUp,
      children: [
        links.map((l, i) => {
          const a = m.get(l.source), b = m.get(l.target);
          if (!a || !b) return null;
          const active = hover != null && (l.source === hover || l.target === hover);
          return /* @__PURE__ */ jsx37(
            "line",
            {
              x1: a.x,
              y1: a.y,
              x2: b.x,
              y2: b.y,
              stroke: active ? "hsl(var(--primary))" : "hsl(var(--border))",
              strokeWidth: active ? 2 : 1.5,
              strokeOpacity: hover != null && !active ? 0.4 : 1
            },
            i
          );
        }),
        nodes.map((n) => {
          const p = m.get(n.id);
          if (!p) return null;
          const dim = hover != null && hover !== n.id;
          return /* @__PURE__ */ jsxs31(
            "g",
            {
              transform: `translate(${p.x},${p.y})`,
              style: { cursor: "grab", opacity: dim ? 0.45 : 1 },
              onPointerDown: (e) => onDown(n.id, e),
              onPointerEnter: () => setHover(n.id),
              onPointerLeave: () => setHover(null),
              children: [
                /* @__PURE__ */ jsx37("circle", { r: nodeRadius, fill: colorOf(n.group), stroke: "hsl(var(--background))", strokeWidth: 2 }),
                /* @__PURE__ */ jsx37("text", { y: nodeRadius + 14, textAnchor: "middle", className: "fill-foreground", style: { fontSize: 11, pointerEvents: "none" }, children: n.label ?? n.id })
              ]
            },
            n.id
          );
        })
      ]
    }
  );
}

// src/components/entity/EntityNetworkGraph.tsx
import { Loader2 as Loader26, AlertCircle, RotateCcw } from "lucide-react";
import { jsx as jsx38, jsxs as jsxs32 } from "react/jsx-runtime";
var SENTIMENT_COLORS = {
  positive: "#34d399",
  // emerald-400
  neutral: "#94a3b8",
  // slate-400
  negative: "#f87171"
  // red-400
};
var SENTIMENT_LEGEND = [
  { key: "positive", en: "Positive", ar: "\u0625\u064A\u062C\u0627\u0628\u064A" },
  { key: "neutral", en: "Neutral", ar: "\u0645\u062D\u0627\u064A\u062F" },
  { key: "negative", en: "Negative", ar: "\u0633\u0644\u0628\u064A" }
];
var EntityNetworkGraph = ({
  renderGraph,
  network,
  isLoading,
  isError,
  onRetry,
  language = "en",
  isRTL = false
}) => {
  if (isLoading) {
    return /* @__PURE__ */ jsxs32(
      "div",
      {
        className: "flex flex-col items-center justify-center w-full min-h-[480px] gap-3 text-muted-foreground",
        dir: isRTL ? "rtl" : "ltr",
        children: [
          /* @__PURE__ */ jsx38(Loader26, { className: "w-6 h-6 animate-spin" }),
          /* @__PURE__ */ jsx38("span", { className: "text-xs", children: language === "ar" ? "\u062C\u0627\u0631\u064D \u062A\u062D\u0645\u064A\u0644 \u0634\u0628\u0643\u0629 \u0627\u0644\u062C\u0647\u0629..." : "Loading entity network..." }),
          /* @__PURE__ */ jsxs32("div", { className: "w-full max-w-md space-y-2 px-4", children: [
            /* @__PURE__ */ jsx38(Skeleton, { className: "h-3 w-full rounded" }),
            /* @__PURE__ */ jsx38(Skeleton, { className: "h-3 w-5/6 rounded" }),
            /* @__PURE__ */ jsx38(Skeleton, { className: "h-3 w-4/6 rounded" })
          ] })
        ]
      }
    );
  }
  if (isError) {
    return /* @__PURE__ */ jsxs32(
      "div",
      {
        className: "flex flex-col items-center justify-center w-full min-h-[480px] gap-3",
        dir: isRTL ? "rtl" : "ltr",
        children: [
          /* @__PURE__ */ jsx38(AlertCircle, { className: "w-8 h-8 text-destructive/70" }),
          /* @__PURE__ */ jsxs32("div", { className: "text-center space-y-1", children: [
            /* @__PURE__ */ jsx38("p", { className: "text-sm font-medium text-foreground", children: language === "ar" ? "\u062A\u0639\u0630\u0651\u0631 \u062A\u062D\u0645\u064A\u0644 \u0634\u0628\u0643\u0629 \u0627\u0644\u062C\u0647\u0629" : "Could not load entity network" }),
            /* @__PURE__ */ jsx38("p", { className: "text-xs text-muted-foreground", children: language === "ar" ? "\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u062C\u0644\u0628 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A." : "An error occurred while fetching data." })
          ] }),
          onRetry && /* @__PURE__ */ jsxs32(
            "button",
            {
              onClick: onRetry,
              className: "flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors duration-fast ease-standard mt-1",
              children: [
                /* @__PURE__ */ jsx38(RotateCcw, { className: "w-3.5 h-3.5" }),
                language === "ar" ? "\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629" : "Try again"
              ]
            }
          )
        ]
      }
    );
  }
  if (!network || network.nodes.length === 0) {
    return /* @__PURE__ */ jsxs32(
      "div",
      {
        className: "flex flex-col items-center justify-center w-full min-h-[480px] gap-3 px-6",
        dir: isRTL ? "rtl" : "ltr",
        children: [
          /* @__PURE__ */ jsx38("div", { className: "w-14 h-14 rounded-full bg-muted/50 flex items-center justify-center", children: /* @__PURE__ */ jsxs32(
            "svg",
            {
              className: "w-7 h-7 text-muted-foreground/50",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              strokeWidth: 1.5,
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ jsx38("circle", { cx: "5", cy: "12", r: "2" }),
                /* @__PURE__ */ jsx38("circle", { cx: "19", cy: "5", r: "2" }),
                /* @__PURE__ */ jsx38("circle", { cx: "19", cy: "19", r: "2" }),
                /* @__PURE__ */ jsx38("line", { x1: "7", y1: "12", x2: "17", y2: "6" }),
                /* @__PURE__ */ jsx38("line", { x1: "7", y1: "12", x2: "17", y2: "18" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxs32("div", { className: "text-center space-y-1 max-w-md", children: [
            /* @__PURE__ */ jsx38("p", { className: "text-sm font-medium text-foreground", children: language === "ar" ? "\u0644\u0627 \u062A\u0648\u062C\u062F \u0639\u0644\u0627\u0642\u0627\u062A \u0645\u0633\u062C\u0651\u0644\u0629 \u0644\u0647\u0630\u0647 \u0627\u0644\u062C\u0647\u0629" : "No relationships recorded for this entity" }),
            /* @__PURE__ */ jsx38("p", { className: "text-xs text-muted-foreground", children: language === "ar" ? "\u0633\u062A\u0638\u0647\u0631 \u0627\u0644\u0639\u0644\u0627\u0642\u0627\u062A \u0647\u0646\u0627 \u0639\u0646\u062F \u0627\u0643\u062A\u0634\u0627\u0641\u0647\u0627 \u0645\u0646 \u062E\u0644\u0627\u0644 \u062A\u062D\u0644\u064A\u0644 \u0627\u0644\u0645\u062D\u062A\u0648\u0649." : "Relationships will appear here as content analysis discovers them." })
          ] })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxs32(
    "div",
    {
      className: "relative overflow-hidden w-full bg-background",
      style: { height: 480, minHeight: 480 },
      dir: "ltr",
      children: [
        renderGraph ? renderGraph(network) : /* @__PURE__ */ jsx38("div", { className: "absolute inset-0 flex items-center justify-center bg-muted/20 text-xs text-muted-foreground", children: language === "ar" ? "\u0639\u0627\u0631\u0636 \u0627\u0644\u0631\u0633\u0645 \u0627\u0644\u0628\u064A\u0627\u0646\u064A \u063A\u064A\u0631 \u0645\u062A\u0627\u062D" : "Graph renderer not provided" }),
        /* @__PURE__ */ jsxs32(
          "div",
          {
            className: "absolute top-3 end-3 z-20 flex items-center gap-2 bg-card/90 backdrop-blur-md border border-border/50 rounded-full px-3 py-1.5 text-[10px] text-muted-foreground font-medium",
            dir: isRTL ? "rtl" : "ltr",
            children: [
              /* @__PURE__ */ jsxs32("span", { children: [
                network.nodes.length,
                " ",
                language === "ar" ? "\u062C\u0647\u0629" : "entities"
              ] }),
              /* @__PURE__ */ jsx38("span", { className: "opacity-40", children: "\xB7" }),
              /* @__PURE__ */ jsxs32("span", { children: [
                network.edges.length,
                " ",
                language === "ar" ? "\u0631\u0627\u0628\u0637" : "edges"
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsx38(
          "div",
          {
            className: "absolute top-3 start-3 z-10 text-[10px] text-muted-foreground/60",
            dir: isRTL ? "rtl" : "ltr",
            children: isRTL ? "\u0627\u0633\u062D\u0628 \u0627\u0644\u0639\u0642\u062F \xB7 \u0645\u0631\u0651\u0631 \u0644\u0644\u062A\u0643\u0628\u064A\u0631 \xB7 \u0627\u0646\u0642\u0631 \u0644\u0644\u0627\u0646\u062A\u0642\u0627\u0644" : "Drag \xB7 Scroll to zoom \xB7 Click to navigate"
          }
        ),
        /* @__PURE__ */ jsx38(
          "div",
          {
            className: "absolute bottom-3 end-3 z-20 flex items-center gap-2 bg-card/80 backdrop-blur-md border border-border/30 rounded-full px-3 py-1.5",
            dir: isRTL ? "rtl" : "ltr",
            children: SENTIMENT_LEGEND.map(({ key, en, ar }) => /* @__PURE__ */ jsxs32("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx38(
                "div",
                {
                  className: "w-2 h-2 rounded-full shrink-0",
                  style: { background: SENTIMENT_COLORS[key] }
                }
              ),
              /* @__PURE__ */ jsx38("span", { className: "text-[10px] text-muted-foreground", children: language === "ar" ? ar : en })
            ] }, key))
          }
        )
      ]
    }
  );
};
EntityNetworkGraph.displayName = "EntityNetworkGraph";

// src/components/plugin/PluginCard.tsx
import { useMemo as useMemo6, useCallback as useCallback7, useEffect as useEffect12, useRef as useRef9, useState as useState21 } from "react";
import { Settings2, ExternalLink, CircleDot } from "lucide-react";

// src/components/plugin/PluginSparkline.tsx
import { Area, AreaChart, ResponsiveContainer } from "recharts";
import { jsx as jsx39, jsxs as jsxs33 } from "react/jsx-runtime";
var PluginSparkline = ({
  pluginId,
  seriesData,
  hasSeriesData,
  color
}) => {
  if (!hasSeriesData) {
    return /* @__PURE__ */ jsx39("div", { className: "h-12 w-full", "aria-hidden": "true" });
  }
  const gradId = `pluginspark-${pluginId}`;
  return /* @__PURE__ */ jsx39("div", { className: "h-12 w-full", children: /* @__PURE__ */ jsx39(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxs33(AreaChart, { data: seriesData, margin: { top: 4, right: 0, bottom: 0, left: 0 }, children: [
    /* @__PURE__ */ jsx39("defs", { children: /* @__PURE__ */ jsxs33("linearGradient", { id: gradId, x1: "0", y1: "0", x2: "0", y2: "1", children: [
      /* @__PURE__ */ jsx39("stop", { offset: "0%", stopColor: color, stopOpacity: 0.45 }),
      /* @__PURE__ */ jsx39("stop", { offset: "100%", stopColor: color, stopOpacity: 0 })
    ] }) }),
    /* @__PURE__ */ jsx39(
      Area,
      {
        type: "monotone",
        dataKey: "n",
        stroke: color,
        strokeWidth: 1.5,
        strokeOpacity: 1,
        fill: `url(#${gradId})`,
        isAnimationActive: false,
        dot: false
      }
    )
  ] }) }) });
};
PluginSparkline.displayName = "PluginSparkline";

// src/components/plugin/PluginCard.tsx
import { jsx as jsx40, jsxs as jsxs34 } from "react/jsx-runtime";
var TYPE_LABELS = {
  capability: { en: "Capability", ar: "\u0642\u062F\u0631\u0629" },
  source: { en: "Source", ar: "\u0645\u0635\u062F\u0631" },
  ai_provider: { en: "AI Provider", ar: "\u0645\u0632\u0648\u0651\u062F \u0630\u0643\u0627\u0621" },
  adk_artifact: { en: "ADK Artifact", ar: "\u0642\u0637\u0639\u0629 ADK" },
  pipeline: { en: "Pipeline", ar: "\u062E\u0637\u0651 \u0645\u0639\u0627\u0644\u062C\u0629" },
  enrichment: { en: "Enrichment", ar: "\u0625\u062B\u0631\u0627\u0621" },
  copilot: { en: "Copilot", ar: "\u0645\u0633\u0627\u0639\u062F" },
  "system-base": { en: "System", ar: "\u0646\u0638\u0627\u0645" },
  adk_tool: { en: "Tool", ar: "\u0623\u062F\u0627\u0629" },
  core: { en: "Core", ar: "\u0623\u0633\u0627\u0633" },
  // adk_kind values — shown in place of "adk_artifact" when present
  tool: { en: "Tool", ar: "\u0623\u062F\u0627\u0629" },
  skill: { en: "Skill", ar: "\u0645\u0647\u0627\u0631\u0629" },
  agent: { en: "Agent", ar: "\u0648\u0643\u064A\u0644" },
  mcp: { en: "MCP", ar: "MCP" },
  memory: { en: "Memory", ar: "\u0630\u0627\u0643\u0631\u0629" },
  persona: { en: "Persona", ar: "\u0634\u062E\u0635\u064A\u0629" }
};
var DEFAULT_COLOR = "#64748b";
function formatCount(n) {
  if (n == null) return "0";
  if (n < 1e3) return String(n);
  if (n < 1e6) return `${(n / 1e3).toFixed(n < 1e4 ? 1 : 0)}K`;
  if (n < 1e9)
    return `${(n / 1e6).toFixed(n < 1e7 ? 1 : 0)}M`;
  return `${(n / 1e9).toFixed(1)}B`;
}
function formatRelative(iso, isRTL) {
  if (!iso) return isRTL ? "\u0644\u0627 \u0646\u0634\u0627\u0637" : "No activity";
  const t2 = Date.parse(iso);
  if (Number.isNaN(t2)) return isRTL ? "\u0644\u0627 \u0646\u0634\u0627\u0637" : "No activity";
  const diffSec = Math.max(0, Math.round((Date.now() - t2) / 1e3));
  if (diffSec < 60) return isRTL ? "\u0642\u0628\u0644 \u062B\u0648\u0627\u0646\u064D" : "just now";
  const m = Math.round(diffSec / 60);
  if (m < 60) return isRTL ? `\u0642\u0628\u0644 ${m} \u062F` : `${m}m ago`;
  const h = Math.round(diffSec / 3600);
  if (h < 48) return isRTL ? `\u0642\u0628\u0644 ${h} \u0633` : `${h}h ago`;
  const d = Math.round(diffSec / 86400);
  if (d < 30) return isRTL ? `\u0642\u0628\u0644 ${d} \u064A\u0648\u0645` : `${d}d ago`;
  const mo = Math.round(d / 30);
  if (mo < 12) return isRTL ? `\u0642\u0628\u0644 ${mo} \u0634\u0647\u0631` : `${mo}mo ago`;
  const y = Math.round(d / 365);
  return isRTL ? `\u0642\u0628\u0644 ${y} \u0633\u0646\u0629` : `${y}y ago`;
}
function countLabel(pluginType, isRTL) {
  switch (pluginType) {
    case "source":
      return isRTL ? "\u0645\u063A\u0644\u0651\u0641\u0627\u062A" : "envelopes";
    case "ai_provider":
      return isRTL ? "\u0631\u0645\u0648\u0632" : "tokens";
    case "adk_artifact":
    case "adk_tool":
      return isRTL ? "\u0627\u0633\u062A\u062F\u0639\u0627\u0621\u0627\u062A" : "invocations";
    case "pipeline":
    case "enrichment":
      return isRTL ? "\u0645\u0647\u0627\u0645 \u0646\u0634\u0637\u0629" : "active jobs";
    default:
      return isRTL ? "\u0633\u062C\u0644\u0627\u062A" : "records";
  }
}
function activityState(iso) {
  if (!iso) return "red";
  const t2 = Date.parse(iso);
  if (Number.isNaN(t2)) return "red";
  const ageMin = (Date.now() - t2) / 6e4;
  if (ageMin <= 60) return "green";
  if (ageMin <= 60 * 24) return "yellow";
  return "red";
}
var STATE_CLASSES = {
  green: {
    chip: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
    dot: "bg-emerald-500"
  },
  yellow: {
    chip: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30",
    dot: "bg-amber-500"
  },
  red: {
    chip: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/30",
    dot: "bg-red-500"
  }
};
function useLongPress(callback, { delay = 500 } = {}) {
  const timerRef = useRef9(null);
  const start = useCallback7(() => {
    timerRef.current = setTimeout(callback, delay);
  }, [callback, delay]);
  const cancel = useCallback7(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);
  return {
    onMouseDown: start,
    onMouseUp: cancel,
    onMouseLeave: cancel,
    onTouchStart: start,
    onTouchEnd: cancel
  };
}
function useInView(rootMargin = "200px") {
  const ref = useRef9(null);
  const [inView, setInView] = useState21(false);
  useEffect12(() => {
    const el = ref.current;
    if (!el || inView) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { rootMargin }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [inView, rootMargin]);
  return [ref, inView];
}
var PluginCard = ({
  plugin,
  isRTL,
  iconComponent: Icon,
  selectable = false,
  selected = false,
  onSelectChange,
  onDetailClick,
  onPageClick
}) => {
  const name = (isRTL ? plugin.name_ar : plugin.name_en) || plugin.name_en || plugin.name || plugin.slug || plugin.id;
  const description = (isRTL ? plugin.description_ar : plugin.description_en) || plugin.description_en || plugin.description || "";
  const rawTypeKey = String(plugin.plugin_type ?? "");
  const typeKey = rawTypeKey === "adk_artifact" && plugin.adk_kind ? String(plugin.adk_kind) : rawTypeKey;
  const typeLabel2 = TYPE_LABELS[typeKey] ?? {
    en: typeKey || "Plugin",
    ar: typeKey || "\u0625\u0636\u0627\u0641\u0629"
  };
  const color = plugin.nav_color || DEFAULT_COLOR;
  const enabled = plugin.enabled_globally !== false;
  const lastActiveISO = plugin.last_active_at ?? null;
  const state = activityState(lastActiveISO);
  const stateClasses = STATE_CLASSES[state];
  const countLabelText = countLabel(rawTypeKey, isRTL);
  const seriesData = useMemo6(() => {
    const series = plugin.activity_series ?? [];
    if (series.length === 0) {
      return Array.from({ length: 24 }, () => ({ n: 0 }));
    }
    return series.map((b) => ({ n: b.n }));
  }, [plugin.activity_series]);
  const hasSeriesData = seriesData.some((d) => d.n > 0);
  const [cardRef, chartInView] = useInView("200px");
  const externalRoute = typeof plugin.route === "string" && plugin.route.trim() !== "" ? plugin.route : null;
  const handleBodyClick = (e) => {
    if (!selectable) return;
    const target = e.target;
    if (target.closest("a, button, input, [role='button']")) return;
    onSelectChange?.(plugin.id, !selected);
  };
  const handleLongPress = useCallback7(() => {
    onSelectChange?.(plugin.id, true);
  }, [onSelectChange, plugin.id]);
  const longPressHandlers = useLongPress(handleLongPress, { delay: 500 });
  const slugOrId = plugin.slug ?? plugin.id;
  return /* @__PURE__ */ jsxs34(
    "div",
    {
      ref: cardRef,
      className: [
        "h-full rounded-lg border bg-card transition-all duration-fast ease-standard hover:shadow-md flex flex-col",
        selected ? "border-primary ring-2 ring-primary/40" : "border-border hover:border-primary/40",
        selectable ? "cursor-pointer select-none" : ""
      ].join(" "),
      "data-selected": selected ? "true" : void 0,
      onClick: handleBodyClick,
      onContextMenu: (e) => {
        if (selected || selectable) e.preventDefault();
      },
      ...longPressHandlers,
      children: [
        /* @__PURE__ */ jsxs34("div", { className: "p-4 flex flex-col gap-3 flex-1", children: [
          /* @__PURE__ */ jsxs34("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx40(
              "div",
              {
                className: "flex h-11 w-11 flex-none items-center justify-center rounded-md text-white",
                style: { backgroundColor: color },
                "aria-hidden": "true",
                children: Icon && /* @__PURE__ */ jsx40(Icon, { className: "h-5 w-5" })
              }
            ),
            /* @__PURE__ */ jsxs34("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ jsxs34("div", { className: "flex items-start justify-between gap-2", children: [
                /* @__PURE__ */ jsx40(
                  "h3",
                  {
                    className: "text-sm font-semibold text-foreground truncate min-w-0",
                    title: name ?? void 0,
                    children: name
                  }
                ),
                /* @__PURE__ */ jsxs34(
                  "span",
                  {
                    className: [
                      "inline-flex items-center gap-1 flex-none px-1.5 py-0.5 rounded-full text-[10px] font-medium border",
                      stateClasses.chip
                    ].join(" "),
                    title: lastActiveISO ?? (isRTL ? "\u0644\u0627 \u0646\u0634\u0627\u0637" : "No activity"),
                    "aria-label": isRTL ? `\u0622\u062E\u0631 \u0646\u0634\u0627\u0637: ${formatRelative(lastActiveISO, isRTL)}` : `Last active: ${formatRelative(lastActiveISO, isRTL)}`,
                    children: [
                      /* @__PURE__ */ jsx40(
                        "span",
                        {
                          className: [
                            "h-1.5 w-1.5 rounded-full flex-none",
                            stateClasses.dot
                          ].join(" ")
                        }
                      ),
                      /* @__PURE__ */ jsx40("span", { className: "truncate", children: formatRelative(lastActiveISO, isRTL) })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs34("div", { className: "mt-1 flex items-center gap-2 flex-wrap", children: [
                /* @__PURE__ */ jsx40(
                  Badge,
                  {
                    variant: "secondary",
                    className: "text-[10px] font-normal uppercase tracking-wide",
                    children: isRTL ? typeLabel2.ar : typeLabel2.en
                  }
                ),
                /* @__PURE__ */ jsxs34(
                  "span",
                  {
                    className: [
                      "inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[10px] font-medium",
                      enabled ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "bg-muted text-muted-foreground"
                    ].join(" "),
                    "aria-label": enabled ? "Enabled" : "Disabled",
                    children: [
                      /* @__PURE__ */ jsx40(CircleDot, { className: "h-3 w-3 opacity-70" }),
                      enabled ? isRTL ? "\u0645\u0641\u0639\u0651\u0644" : "Enabled" : isRTL ? "\u0645\u0639\u0637\u0651\u0644" : "Disabled"
                    ]
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx40("p", { className: "text-xs text-muted-foreground line-clamp-2 min-h-[2rem]", children: description || (isRTL ? "\u0644\u0627 \u064A\u0648\u062C\u062F \u0648\u0635\u0641." : "No description.") })
        ] }),
        /* @__PURE__ */ jsxs34("div", { className: "border-t border-border/60 bg-muted/20", children: [
          /* @__PURE__ */ jsxs34("div", { className: "px-4 pt-3 pb-1", children: [
            /* @__PURE__ */ jsx40("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: countLabelText }),
            /* @__PURE__ */ jsx40(
              "div",
              {
                className: "text-2xl font-semibold text-foreground leading-tight",
                title: String(plugin.activity_count ?? 0),
                children: formatCount(plugin.activity_count ?? 0)
              }
            )
          ] }),
          chartInView ? /* @__PURE__ */ jsx40(
            PluginSparkline,
            {
              pluginId: plugin.id,
              seriesData,
              hasSeriesData,
              color
            }
          ) : /* @__PURE__ */ jsx40("div", { className: "h-12 w-full", "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ jsxs34("div", { className: "px-3 py-2 flex items-center justify-between gap-2 text-xs border-t border-border/40", children: [
          /* @__PURE__ */ jsx40(
            "span",
            {
              className: "font-mono opacity-60 truncate text-muted-foreground",
              title: slugOrId,
              children: slugOrId
            }
          ),
          /* @__PURE__ */ jsxs34("div", { className: "inline-flex items-center gap-1 flex-none", children: [
            externalRoute && onPageClick && /* @__PURE__ */ jsxs34(
              "button",
              {
                type: "button",
                onClick: (e) => {
                  e.stopPropagation();
                  onPageClick(externalRoute);
                },
                className: "inline-flex items-center gap-1 px-2 py-1 rounded-md text-[11px] font-medium text-foreground hover:bg-muted transition-colors duration-fast ease-standard",
                title: isRTL ? "\u0641\u062A\u062D \u0635\u0641\u062D\u0629 \u0627\u0644\u0642\u062F\u0631\u0629" : "Open capability page",
                children: [
                  /* @__PURE__ */ jsx40(ExternalLink, { className: "h-3 w-3" }),
                  isRTL ? "\u0627\u0644\u0635\u0641\u062D\u0629" : "Page"
                ]
              }
            ),
            /* @__PURE__ */ jsxs34(
              "button",
              {
                type: "button",
                onClick: (e) => {
                  e.stopPropagation();
                  onDetailClick?.(slugOrId);
                },
                className: "inline-flex items-center gap-1 px-2 py-1 rounded-md text-[11px] font-medium text-primary hover:bg-primary/10 transition-colors duration-fast ease-standard",
                title: isRTL ? "\u0641\u062A\u062D \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0625\u0636\u0627\u0641\u0629" : "Open plugin details",
                children: [
                  /* @__PURE__ */ jsx40(Settings2, { className: "h-3 w-3" }),
                  isRTL ? "\u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644" : "Details"
                ]
              }
            )
          ] })
        ] })
      ]
    }
  );
};
PluginCard.displayName = "PluginCard";

// src/components/plugin/PluginPageHeader.tsx
import { jsx as jsx41, jsxs as jsxs35 } from "react/jsx-runtime";
var PluginPageHeader = ({
  icon: Icon,
  title_en,
  title_ar,
  subtitle_en,
  subtitle_ar,
  actions,
  language
}) => {
  const isRTL = language === "ar";
  const title = isRTL ? title_ar : title_en;
  const subtitle = isRTL ? subtitle_ar : subtitle_en;
  return /* @__PURE__ */ jsxs35("div", { className: "mb-1", children: [
    /* @__PURE__ */ jsxs35("div", { className: "flex items-center gap-2", children: [
      Icon && /* @__PURE__ */ jsx41(
        Icon,
        {
          className: "h-5 w-5 text-muted-foreground shrink-0",
          "aria-hidden": "true"
        }
      ),
      /* @__PURE__ */ jsx41("h1", { className: "text-xl font-semibold text-foreground", children: title }),
      actions && /* @__PURE__ */ jsx41("div", { className: "ms-auto flex items-center gap-2", children: actions })
    ] }),
    subtitle && /* @__PURE__ */ jsx41("p", { className: "mt-1 text-sm text-muted-foreground text-start", children: subtitle })
  ] });
};
PluginPageHeader.displayName = "PluginPageHeader";

// src/components/plugin/PluginSectionCard.tsx
import { jsx as jsx42, jsxs as jsxs36 } from "react/jsx-runtime";
var PluginSectionCard = ({
  icon: Icon,
  title_en,
  title_ar,
  description_en,
  description_ar,
  actions,
  destructive,
  className,
  children,
  language
}) => {
  const isRTL = language === "ar";
  const title = isRTL ? title_ar : title_en;
  const description = isRTL ? description_ar : description_en;
  return /* @__PURE__ */ jsxs36(
    Card,
    {
      dir: isRTL ? "rtl" : "ltr",
      className: cn(destructive && "border-destructive/30", className),
      children: [
        /* @__PURE__ */ jsxs36(CardHeader, { className: "pb-3", children: [
          /* @__PURE__ */ jsxs36(
            CardTitle,
            {
              className: cn(
                "flex items-center gap-2 text-base font-medium",
                destructive && "text-destructive"
              ),
              children: [
                Icon && /* @__PURE__ */ jsx42(
                  Icon,
                  {
                    className: "h-4 w-4 shrink-0 text-muted-foreground",
                    "aria-hidden": "true"
                  }
                ),
                /* @__PURE__ */ jsx42("span", { className: "flex-1 text-start", children: title }),
                actions && /* @__PURE__ */ jsx42("span", { className: "flex items-center gap-2", children: actions })
              ]
            }
          ),
          description && /* @__PURE__ */ jsx42("p", { className: "text-sm text-muted-foreground text-start", children: description })
        ] }),
        /* @__PURE__ */ jsx42(CardContent, { className: "space-y-4", children })
      ]
    }
  );
};
PluginSectionCard.displayName = "PluginSectionCard";

// src/components/plugin/SourceBadge.tsx
import { Fragment as Fragment9, jsx as jsx43, jsxs as jsxs37 } from "react/jsx-runtime";
var SIZE_ICON = {
  xs: "h-2.5 w-2.5",
  sm: "h-3 w-3",
  md: "h-3.5 w-3.5"
};
var SIZE_TEXT = {
  xs: "text-[10px]",
  sm: "text-xs",
  md: "text-sm"
};
var SourceBadge = ({
  label,
  navIcon,
  color,
  variant = "pill",
  href,
  size = "sm",
  className
}) => {
  const inner = /* @__PURE__ */ jsxs37(Fragment9, { children: [
    /* @__PURE__ */ jsx43(
      "span",
      {
        className: "flex shrink-0 items-center justify-center",
        style: color ? { color } : void 0,
        children: /* @__PURE__ */ jsx43(DynamicIcon, { name: navIcon ?? null, className: cn(SIZE_ICON[size], "shrink-0") })
      }
    ),
    variant !== "compact" && /* @__PURE__ */ jsx43("span", { className: cn(SIZE_TEXT[size], "font-medium leading-none"), children: label })
  ] });
  const baseClass = cn(
    "inline-flex items-center gap-1.5 rounded-full bg-muted/40 px-2.5 py-1 transition-colors duration-fast ease-standard",
    "border border-border/40",
    href && "cursor-pointer hover:bg-muted hover:ring-2 hover:ring-primary/20",
    className
  );
  const a11yLabel = variant === "compact" ? label : void 0;
  if (href) {
    return /* @__PURE__ */ jsx43(
      "a",
      {
        href,
        target: "_blank",
        rel: "noopener noreferrer",
        className: baseClass,
        title: a11yLabel,
        "aria-label": a11yLabel,
        children: inner
      }
    );
  }
  return /* @__PURE__ */ jsx43("span", { className: baseClass, title: a11yLabel, "aria-label": a11yLabel, children: inner });
};
SourceBadge.displayName = "SourceBadge";

// src/components/plugin-detail/icon-resolver.ts
import * as React10 from "react";
import * as LucideIcons from "lucide-react";
import { Box } from "lucide-react";
import * as SimpleIcons from "react-icons/si";
import * as Fa6Icons from "react-icons/fa6";
var FALLBACK = { Component: Box, kind: "fallback" };
var toSimpleIconsName = (slug) => {
  const stripped = slug.replace(/[^a-z0-9]/gi, "").toLowerCase();
  if (!stripped) return "";
  return "Si" + stripped.charAt(0).toUpperCase() + stripped.slice(1);
};
var toFaName = (slug) => {
  const stripped = slug.replace(/[^a-z0-9]/gi, "").toLowerCase();
  if (!stripped) return "";
  return "Fa" + stripped.charAt(0).toUpperCase() + stripped.slice(1);
};
var makeBoxiconsComponent = (cls) => {
  const Cmp = ({ className = "" }) => React10.createElement("i", {
    className: ["bx", cls, className].filter(Boolean).join(" "),
    "aria-hidden": true
  });
  Cmp.displayName = `BoxIcon(${cls})`;
  return Cmp;
};
var resolveIcon = (navIcon) => {
  if (!navIcon || typeof navIcon !== "string") return FALLBACK;
  const trimmed = navIcon.trim();
  if (!trimmed) return FALLBACK;
  const colonIdx = trimmed.indexOf(":");
  if (colonIdx > 0) {
    const scheme = trimmed.slice(0, colonIdx).toLowerCase();
    const value = trimmed.slice(colonIdx + 1).trim();
    if (!value) return FALLBACK;
    switch (scheme) {
      case "si": {
        const name = toSimpleIconsName(value);
        const Cmp = SimpleIcons[name];
        if (Cmp) return { Component: Cmp, kind: "react-icons" };
        return FALLBACK;
      }
      case "fa6":
      case "fa": {
        const name = toFaName(value);
        const Cmp = Fa6Icons[name];
        if (Cmp) return { Component: Cmp, kind: "react-icons" };
        return FALLBACK;
      }
      case "bxl":
      case "bxs":
      case "bx": {
        const cls = `${scheme}-${value.replace(/[^a-z0-9-]/gi, "").toLowerCase()}`;
        return { Component: makeBoxiconsComponent(cls), kind: "boxicons" };
      }
      case "lucide": {
        const pascal = value.charAt(0).toUpperCase() + value.slice(1);
        const candidates = [
          value,
          pascal,
          value.replace(/(^|-)([a-z])/g, (_, _dash, ch) => ch.toUpperCase())
        ];
        for (const candidate of candidates) {
          const Cmp = LucideIcons[candidate];
          if (Cmp) return { Component: Cmp, kind: "lucide" };
        }
        return FALLBACK;
      }
      default:
        break;
    }
  }
  const Lucide = LucideIcons[trimmed];
  if (Lucide) return { Component: Lucide, kind: "lucide" };
  return FALLBACK;
};

// src/components/plugin-detail/WorkflowStepNode.tsx
import { useState as useState22 } from "react";
import {
  Clock,
  GitBranch,
  Database,
  Repeat,
  Sparkles as Sparkles4,
  Code,
  Languages,
  Globe,
  PanelRightOpen,
  ChevronDown as ChevronDown5,
  ChevronUp as ChevronUp2,
  ChevronRight as ChevronRight2,
  BarChart2,
  ArrowDown,
  Trash2
} from "lucide-react";
import { Fragment as Fragment10, jsx as jsx44, jsxs as jsxs38 } from "react/jsx-runtime";
var pathKey = (p) => p.join(".");
var parseFromTable = (query) => {
  if (!query) return null;
  const m = query.match(/FROM\s+([\w."]+)/i);
  if (!m) return null;
  return m[1].replace(/['"]/g, "");
};
var trunc = (s, max = 60) => s.length > max ? s.slice(0, max) + "\u2026" : s;
var parseLimit = (query) => {
  const m = query.match(/LIMIT\s+(\d+)/i);
  return m ? parseInt(m[1], 10) : null;
};
var getCategory = (kind) => {
  switch (kind) {
    case "cron_trigger":
      return "trigger";
    case "if":
      return "condition";
    case "sql_select":
      return "query";
    case "for_each":
      return "loop";
    case "gemini_call":
    case "adk_call":
      return "ai";
    case "sql_insert":
    case "sql_update":
      return "output";
    case "json_extract":
    case "translate":
      return "transform";
    default:
      return "generic";
  }
};
var CATEGORY_STYLES = {
  trigger: { badge: "bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300", border: "border-s-violet-400", icon: "text-violet-500" },
  condition: { badge: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300", border: "border-s-amber-400", icon: "text-amber-500" },
  query: { badge: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300", border: "border-s-blue-400", icon: "text-blue-500" },
  loop: { badge: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/40 dark:text-cyan-300", border: "border-s-cyan-400", icon: "text-cyan-500" },
  ai: { badge: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300", border: "border-s-emerald-400", icon: "text-emerald-500" },
  output: { badge: "bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300", border: "border-s-rose-400", icon: "text-rose-500" },
  transform: { badge: "bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300", border: "border-s-teal-400", icon: "text-teal-500" },
  generic: { badge: "bg-muted text-muted-foreground", border: "border-s-border", icon: "text-muted-foreground" }
};
var STEP_ICONS = {
  cron_trigger: Clock,
  if: GitBranch,
  sql_select: Database,
  sql_insert: Database,
  sql_update: Database,
  for_each: Repeat,
  gemini_call: Sparkles4,
  adk_call: Sparkles4,
  json_extract: Code,
  translate: Languages,
  http_call: Globe
};
var CATEGORY_LABEL = {
  trigger: ["Schedule", "\u0627\u0644\u062C\u062F\u0648\u0644\u0629"],
  condition: ["Condition", "\u0634\u0631\u0637"],
  query: ["Read data", "\u0642\u0631\u0627\u0621\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A"],
  loop: ["Repeat", "\u062A\u0643\u0631\u0627\u0631"],
  ai: ["AI", "\u0630\u0643\u0627\u0621 \u0627\u0635\u0637\u0646\u0627\u0639\u064A"],
  output: ["Save", "\u062D\u0641\u0638"],
  transform: ["Transform", "\u062A\u062D\u0648\u064A\u0644"],
  generic: ["Step", "\u062E\u0637\u0648\u0629"]
};
var friendlyStepNo = (id, isRTL) => {
  const n = /(\d+)\s*$/.exec(String(id))?.[1];
  if (!n) return "";
  return isRTL ? `\u0627\u0644\u062E\u0637\u0648\u0629 ${n}` : `Step ${n}`;
};
var humanSchedule = (raw, isRTL) => {
  const m = /^(\d+)\s*([smhd])$/.exec(String(raw ?? "").trim());
  if (!m) return String(raw ?? "");
  const n = Number(m[1]);
  const U = {
    s: ["second", "seconds", "\u062B\u0627\u0646\u064A\u0629", "\u062B\u0648\u0627\u0646\u064D"],
    m: ["minute", "minutes", "\u062F\u0642\u064A\u0642\u0629", "\u062F\u0642\u0627\u0626\u0642"],
    h: ["hour", "hours", "\u0633\u0627\u0639\u0629", "\u0633\u0627\u0639\u0627\u062A"],
    d: ["day", "days", "\u064A\u0648\u0645", "\u0623\u064A\u0627\u0645"]
  };
  const u = U[m[2]];
  if (isRTL) return `${n} ${n === 1 ? u[2] : u[3]}`;
  return n === 1 ? u[0] : `${n} ${u[1]}`;
};
var humanName = (s) => String(s ?? "").replace(/^\$/, "").replace(/^[a-z0-9]+\./i, "").replace(/[_-]+/g, " ").trim();
function humanStepSummary(step, isRTL) {
  const kind = step.kind ?? step.type ?? "?";
  const t2 = (en, ar) => isRTL ? ar : en;
  switch (kind) {
    case "cron_trigger": {
      const s = humanSchedule(step.schedule ?? step.interval, isRTL);
      return t2(`Runs automatically every ${s}`, `\u064A\u0639\u0645\u0644 \u062A\u0644\u0642\u0627\u0626\u064A\u064B\u0627 \u0643\u0644 ${s}`);
    }
    case "if":
      return t2("Continues only when the condition is met", "\u064A\u0643\u0645\u0644 \u0641\u0642\u0637 \u0639\u0646\u062F \u062A\u062D\u0642\u0651\u0642 \u0627\u0644\u0634\u0631\u0637");
    case "for_each":
      return t2("Repeats the next steps for each item", "\u064A\u0643\u0631\u0651\u0631 \u0627\u0644\u062E\u0637\u0648\u0627\u062A \u0627\u0644\u062A\u0627\u0644\u064A\u0629 \u0644\u0643\u0644 \u0639\u0646\u0635\u0631");
    case "sql_select": {
      const from = humanName(parseFromTable(step.query ?? "") ?? "");
      const lim = parseLimit(step.query ?? "");
      const count = lim != null ? t2(`up to ${lim} records`, `\u062D\u062A\u0649 ${lim} \u0633\u062C\u0644`) : t2("records", "\u0627\u0644\u0633\u062C\u0644\u0627\u062A");
      return from ? t2(`Looks up ${count} from ${from}`, `\u064A\u062C\u0644\u0628 ${count} \u0645\u0646 ${from}`) : t2(`Looks up ${count}`, `\u064A\u062C\u0644\u0628 ${count}`);
    }
    case "sql_insert": {
      const tb = humanName(step.table);
      return tb ? t2(`Saves the results as ${tb}`, `\u064A\u062D\u0641\u0638 \u0627\u0644\u0646\u062A\u0627\u0626\u062C \u0643\u0640 ${tb}`) : t2("Saves the results", "\u064A\u062D\u0641\u0638 \u0627\u0644\u0646\u062A\u0627\u0626\u062C");
    }
    case "sql_update": {
      const tb = humanName(step.table);
      return t2(`Updates ${tb || "the records"}`, `\u064A\u062D\u062F\u0651\u062B ${tb || "\u0627\u0644\u0633\u062C\u0644\u0627\u062A"}`);
    }
    case "gemini_call":
    case "adk_call": {
      const task = humanName(step.prompt_slug ?? step.prompt_id ?? "");
      return task ? t2(`Uses AI to ${task}`, `\u064A\u0633\u062A\u062E\u062F\u0645 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A \u0644\u0640 ${task}`) : t2("Uses AI to analyze the data", "\u064A\u0633\u062A\u062E\u062F\u0645 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A \u0644\u062A\u062D\u0644\u064A\u0644 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A");
    }
    case "http_request":
    case "http_call":
      return t2("Calls an external service", "\u064A\u0633\u062A\u062F\u0639\u064A \u062E\u062F\u0645\u0629 \u062E\u0627\u0631\u062C\u064A\u0629");
    case "send_email":
    case "email":
      return t2("Sends an email notification", "\u064A\u0631\u0633\u0644 \u0625\u0634\u0639\u0627\u0631\u064B\u0627 \u0639\u0628\u0631 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A");
    case "webhook":
      return t2("Sends a webhook notification", "\u064A\u0631\u0633\u0644 \u0625\u0634\u0639\u0627\u0631 \u0648\u064A\u0628 \u0647\u0648\u0643");
    default:
      return t2(`Runs the \u201C${humanName(kind)}\u201D step`, `\u064A\u0646\u0641\u0651\u0630 \u062E\u0637\u0648\u0629 \xAB${humanName(kind)}\xBB`);
  }
}
var StepSummary = ({ step, isRTL, humanize }) => {
  const lbl = (en, ar) => isRTL ? ar : en;
  const [showQuery, setShowQuery] = useState22(false);
  const kind = step.kind ?? "?";
  if (humanize) {
    return /* @__PURE__ */ jsx44("span", { className: "text-xs text-foreground/80", children: humanStepSummary(step, isRTL) });
  }
  if (kind === "cron_trigger") {
    const schedule = step.schedule ?? step.interval ?? "?";
    const minSec = step.min_interval_sec;
    return /* @__PURE__ */ jsxs38("span", { className: "text-xs text-muted-foreground font-mono", children: [
      lbl("every", "\u0643\u0644"),
      " ",
      /* @__PURE__ */ jsx44("span", { className: "text-foreground font-medium", children: schedule }),
      minSec != null && /* @__PURE__ */ jsxs38("span", { className: "ms-1 opacity-60", children: [
        "(min ",
        minSec,
        "s)"
      ] })
    ] });
  }
  if (kind === "if") {
    const cond = step.condition ?? "?";
    return /* @__PURE__ */ jsxs38("span", { className: "text-xs text-muted-foreground", children: [
      lbl("if", "\u0625\u0630\u0627"),
      " ",
      /* @__PURE__ */ jsx44("code", { className: "text-foreground bg-muted rounded px-1 py-0.5 text-[11px]", children: trunc(String(cond), 80) })
    ] });
  }
  if (kind === "sql_select") {
    const query = step.query ?? "";
    const fromTable = parseFromTable(query) ?? "?";
    const output = step.output ?? step.target_field ?? "?";
    const limit = parseLimit(query);
    return /* @__PURE__ */ jsxs38("div", { className: "text-xs text-muted-foreground space-y-1", children: [
      /* @__PURE__ */ jsxs38("div", { children: [
        lbl("SELECT from", "\u0627\u062E\u062A\u064A\u0627\u0631 \u0645\u0646"),
        " ",
        /* @__PURE__ */ jsx44("code", { className: "text-foreground bg-muted rounded px-1 py-0.5 text-[11px]", children: fromTable }),
        " \u2192 ",
        /* @__PURE__ */ jsxs38("code", { className: "text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 rounded px-1 py-0.5 text-[11px]", children: [
          "$",
          output
        ] }),
        limit != null && /* @__PURE__ */ jsxs38("span", { className: "ms-1 opacity-60", children: [
          "(LIMIT ",
          limit,
          ")"
        ] })
      ] }),
      query && /* @__PURE__ */ jsx44(
        "button",
        {
          type: "button",
          className: "flex items-center gap-1 text-[10px] text-primary/70 hover:text-primary underline-offset-2 hover:underline",
          onClick: () => setShowQuery((v) => !v),
          children: showQuery ? /* @__PURE__ */ jsxs38(Fragment10, { children: [
            /* @__PURE__ */ jsx44(ChevronDown5, { className: "h-3 w-3" }),
            lbl("hide query", "\u0625\u062E\u0641\u0627\u0621 \u0627\u0644\u0627\u0633\u062A\u0639\u0644\u0627\u0645")
          ] }) : /* @__PURE__ */ jsxs38(Fragment10, { children: [
            /* @__PURE__ */ jsx44(ChevronRight2, { className: "h-3 w-3 rtl:rotate-180" }),
            lbl("show query", "\u0639\u0631\u0636 \u0627\u0644\u0627\u0633\u062A\u0639\u0644\u0627\u0645")
          ] })
        }
      ),
      showQuery && /* @__PURE__ */ jsx44("pre", { className: "mt-1 rounded bg-muted p-2 text-[10px] leading-relaxed whitespace-pre-wrap break-all max-h-40 overflow-y-auto font-mono", dir: "ltr", children: query })
    ] });
  }
  if (kind === "for_each") {
    const over = step.over ?? step.items ?? "?";
    return /* @__PURE__ */ jsxs38("span", { className: "text-xs text-muted-foreground", children: [
      lbl("for each", "\u0644\u0643\u0644"),
      " ",
      /* @__PURE__ */ jsx44("code", { className: "text-foreground bg-muted rounded px-1 py-0.5 text-[11px]", children: String(over) }),
      " \u2192"
    ] });
  }
  if (kind === "sql_insert") {
    const table = step.table ?? "?";
    const cols = Array.isArray(step.columns) ? step.columns : [];
    const onConflict = step.on_conflict;
    return /* @__PURE__ */ jsxs38("span", { className: "text-xs text-muted-foreground", children: [
      lbl("INSERT into", "\u0625\u062F\u0631\u0627\u062C \u0641\u064A"),
      " ",
      /* @__PURE__ */ jsx44("code", { className: "text-foreground bg-muted rounded px-1 py-0.5 text-[11px]", children: table }),
      cols.length > 0 && /* @__PURE__ */ jsxs38("span", { className: "ms-1 opacity-70", children: [
        "(",
        cols.length,
        " ",
        lbl("columns", "\u0623\u0639\u0645\u062F\u0629"),
        ")"
      ] }),
      onConflict && /* @__PURE__ */ jsxs38("span", { className: "ms-1 opacity-60 text-[10px]", children: [
        "ON CONFLICT ",
        trunc(String(onConflict), 30)
      ] })
    ] });
  }
  if (kind === "sql_update") {
    const table = step.table ?? "?";
    const setKeys = step.set && typeof step.set === "object" ? Object.keys(step.set) : [];
    return /* @__PURE__ */ jsxs38("span", { className: "text-xs text-muted-foreground", children: [
      lbl("UPDATE", "\u062A\u062D\u062F\u064A\u062B"),
      " ",
      /* @__PURE__ */ jsx44("code", { className: "text-foreground bg-muted rounded px-1 py-0.5 text-[11px]", children: table }),
      setKeys.length > 0 && /* @__PURE__ */ jsxs38("span", { className: "ms-1 opacity-70", children: [
        "SET ",
        setKeys.slice(0, 4).join(", "),
        setKeys.length > 4 ? "\u2026" : ""
      ] })
    ] });
  }
  if (kind === "gemini_call") {
    const prompt = step.prompt_slug ?? step.prompt_id ?? step.model ?? "?";
    const target = step.target_field ?? step.output ?? "";
    return /* @__PURE__ */ jsxs38("span", { className: "text-xs text-muted-foreground", children: [
      lbl("Gemini: prompt=", "Gemini: \u0646\u0645\u0648\u0630\u062C="),
      /* @__PURE__ */ jsx44("code", { className: "text-foreground bg-muted rounded px-1 py-0.5 text-[11px]", children: String(prompt) }),
      target && /* @__PURE__ */ jsxs38(Fragment10, { children: [
        " ",
        " \u2192 ",
        /* @__PURE__ */ jsxs38("code", { className: "text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 rounded px-1 py-0.5 text-[11px]", children: [
          "$",
          target
        ] })
      ] })
    ] });
  }
  if (kind === "adk_call") {
    const hasInline = !!step.prompt_inline;
    const promptLabel = hasInline ? lbl("inline prompt", "\u0646\u0635 \u0645\u0636\u0645\u0651\u0646") : step.prompt_slug ?? step.prompt_id ?? "?";
    const modelLabel = step.model ?? "gemini-2.5-flash";
    const target = step.target_field ?? "adk_response";
    return /* @__PURE__ */ jsxs38("span", { className: "text-xs text-muted-foreground", children: [
      lbl("ADK: ", "ADK: "),
      /* @__PURE__ */ jsx44("code", { className: "text-foreground bg-muted rounded px-1 py-0.5 text-[11px]", children: hasInline ? /* @__PURE__ */ jsx44("em", { children: promptLabel }) : String(promptLabel) }),
      /* @__PURE__ */ jsx44("span", { className: "ms-1 opacity-60 text-[10px]", children: modelLabel }),
      " \u2192 ",
      /* @__PURE__ */ jsxs38("code", { className: "text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 rounded px-1 py-0.5 text-[11px]", children: [
        "$",
        target
      ] })
    ] });
  }
  if (kind === "json_extract") {
    const exprs = Array.isArray(step.expressions) ? step.expressions : [];
    const source = step.source ?? step.from ?? "";
    return /* @__PURE__ */ jsxs38("span", { className: "text-xs text-muted-foreground", children: [
      lbl("extract", "\u0627\u0633\u062A\u062E\u0631\u0627\u062C"),
      " ",
      /* @__PURE__ */ jsx44("span", { className: "text-foreground", children: exprs.length > 0 ? exprs.slice(0, 3).join(", ") : "?" }),
      source && /* @__PURE__ */ jsxs38(Fragment10, { children: [
        " ",
        lbl("from", "\u0645\u0646"),
        " ",
        /* @__PURE__ */ jsxs38("code", { className: "bg-muted rounded px-1 py-0.5 text-[11px]", children: [
          "$",
          source
        ] })
      ] })
    ] });
  }
  if (kind === "translate") {
    const textExpr = step.text ?? step.source_field ?? "?";
    const target = step.target_field ?? "?";
    const srcLang = step.source_lang ?? "en";
    const tgtLang = step.target_lang ?? "ar";
    return /* @__PURE__ */ jsxs38("span", { className: "text-xs text-muted-foreground", children: [
      lbl("translate", "\u062A\u0631\u062C\u0645\u0629"),
      " ",
      /* @__PURE__ */ jsx44("code", { className: "bg-muted rounded px-1 py-0.5 text-[11px]", children: String(textExpr) }),
      " \u2192 ",
      /* @__PURE__ */ jsxs38("code", { className: "text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 rounded px-1 py-0.5 text-[11px]", children: [
        "$",
        target
      ] }),
      /* @__PURE__ */ jsxs38("span", { className: "ms-1 opacity-60", children: [
        "(",
        srcLang,
        "\u2192",
        tgtLang,
        ")"
      ] })
    ] });
  }
  if (kind === "http_call") {
    const method = step.method ?? "GET";
    const url = step.url ?? "";
    let host = url;
    try {
      host = new URL(url).hostname;
    } catch {
    }
    return /* @__PURE__ */ jsxs38("span", { className: "text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsx44(Badge, { variant: "outline", className: "me-1 font-mono text-[10px] h-4", children: method }),
      /* @__PURE__ */ jsx44("span", { className: "text-foreground", children: trunc(host, 50) })
    ] });
  }
  const label = step.label_en ?? step.label ?? "";
  if (label) {
    return /* @__PURE__ */ jsx44("span", { className: "text-xs text-muted-foreground", children: trunc(String(label), 80) });
  }
  return null;
};
StepSummary.displayName = "StepSummary";
var MetricsChip = ({ runs, errors }) => {
  const okPct = runs > 0 ? Math.round((runs - errors) / runs * 100) : 100;
  return /* @__PURE__ */ jsxs38("div", { className: "flex items-center gap-1 rounded-full border bg-muted/50 px-2 py-0.5 text-[10px] text-muted-foreground", children: [
    /* @__PURE__ */ jsx44(BarChart2, { className: "h-3 w-3" }),
    /* @__PURE__ */ jsxs38("span", { children: [
      runs,
      "r / ",
      okPct,
      "%ok"
    ] })
  ] });
};
MetricsChip.displayName = "MetricsChip";
var StepConnector = () => /* @__PURE__ */ jsx44("div", { className: "flex justify-center py-0.5", children: /* @__PURE__ */ jsx44(ArrowDown, { className: "h-3.5 w-3.5 text-border", "aria-hidden": true }) });
StepConnector.displayName = "StepConnector";
var NestedAddControl = ({ isRTL, addableKinds, onAdd }) => {
  const lbl = (en, ar) => isRTL ? ar : en;
  const [kind, setKind] = useState22("");
  return /* @__PURE__ */ jsxs38("div", { className: "flex items-center gap-1.5 pt-1", children: [
    /* @__PURE__ */ jsxs38(Select, { value: kind, onValueChange: setKind, children: [
      /* @__PURE__ */ jsx44(SelectTrigger, { className: "h-6 w-36 text-[11px]", children: /* @__PURE__ */ jsx44(SelectValue, { placeholder: lbl("+ add\u2026", "+ \u0625\u0636\u0627\u0641\u0629\u2026") }) }),
      /* @__PURE__ */ jsx44(SelectContent, { children: addableKinds.map((k) => /* @__PURE__ */ jsx44(SelectItem, { value: k, className: "text-[11px] font-mono", children: k }, k)) })
    ] }),
    /* @__PURE__ */ jsx44(
      Button,
      {
        size: "sm",
        variant: "ghost",
        className: "h-6 px-1.5 text-[11px]",
        disabled: !kind,
        onClick: () => {
          if (kind) {
            onAdd(kind);
            setKind("");
          }
        },
        children: lbl("Add", "\u0625\u0636\u0627\u0641\u0629")
      }
    )
  ] });
};
NestedAddControl.displayName = "NestedAddControl";
var WorkflowStepNode = ({
  step,
  path,
  depth,
  isRTL,
  metrics,
  editingPath,
  onEditRequest,
  onDelete,
  onMove,
  onAdd,
  addableKinds = [],
  renderEditor,
  humanize = true
}) => {
  const lbl = (en, ar) => isRTL ? ar : en;
  const kind = step.kind ?? step.type ?? "?";
  const stepId = step.id ?? "";
  const category = getCategory(kind);
  const styles = CATEGORY_STYLES[category];
  const IconCmp = STEP_ICONS[kind] ?? PanelRightOpen;
  const thenSteps = Array.isArray(step.then) ? step.then : [];
  const elseSteps = Array.isArray(step.else) ? step.else : [];
  const loopSteps = Array.isArray(step.steps) ? step.steps : [];
  const m = metrics && stepId ? metrics[stepId] : void 0;
  const isEditing = editingPath != null && editingPath === pathKey(path);
  const renderBranch = (children, arrName, railColor, label) => /* @__PURE__ */ jsxs38("div", { className: cn("mt-2 ms-6 space-y-1.5 border-s-2 border-dashed ps-3", railColor), children: [
    /* @__PURE__ */ jsx44("div", { className: "text-[10px] text-muted-foreground font-medium uppercase tracking-wide mb-1", children: label }),
    children.map((child, ci) => /* @__PURE__ */ jsxs38("div", { children: [
      ci > 0 && /* @__PURE__ */ jsx44(StepConnector, {}),
      /* @__PURE__ */ jsx44(
        WorkflowStepNode,
        {
          step: child,
          path: [...path, arrName, ci],
          depth: depth + 1,
          isRTL,
          metrics,
          editingPath,
          onEditRequest,
          onDelete,
          onMove,
          onAdd,
          addableKinds,
          renderEditor,
          humanize
        }
      )
    ] }, child.id ?? ci)),
    onAdd && /* @__PURE__ */ jsx44(NestedAddControl, { isRTL, addableKinds, onAdd: (k) => onAdd([...path, arrName], k) })
  ] });
  return /* @__PURE__ */ jsxs38("div", { className: "relative", children: [
    depth > 0 && /* @__PURE__ */ jsx44("div", { className: "absolute start-0 top-0 bottom-0 w-px bg-border/60", style: { insetInlineStart: "-12px" }, "aria-hidden": true }),
    /* @__PURE__ */ jsxs38(
      "div",
      {
        className: cn(
          "rounded-md border border-s-2 bg-card shadow-sm",
          styles.border,
          isEditing && "ring-1 ring-primary/40"
        ),
        children: [
          /* @__PURE__ */ jsxs38("div", { className: "flex items-start gap-2 px-3 py-2", children: [
            /* @__PURE__ */ jsx44("div", { className: cn("mt-0.5 shrink-0", styles.icon), children: /* @__PURE__ */ jsx44(IconCmp, { className: "h-3.5 w-3.5", "aria-hidden": true }) }),
            /* @__PURE__ */ jsxs38("div", { className: "flex-1 min-w-0 space-y-1", children: [
              /* @__PURE__ */ jsxs38("div", { className: "flex items-center gap-1.5 flex-wrap", children: [
                /* @__PURE__ */ jsx44(Badge, { variant: "secondary", className: cn("h-4 rounded-sm text-[10px] px-1", !humanize && "font-mono", styles.badge), children: humanize ? lbl(CATEGORY_LABEL[category][0], CATEGORY_LABEL[category][1]) : kind }),
                stepId && /* @__PURE__ */ jsx44("span", { className: cn("text-[10px] text-muted-foreground/50", !humanize && "font-mono"), children: humanize ? friendlyStepNo(stepId, isRTL) : stepId }),
                m && /* @__PURE__ */ jsx44(MetricsChip, { runs: m.runs, errors: m.errors })
              ] }),
              /* @__PURE__ */ jsx44(StepSummary, { step, isRTL, humanize })
            ] }),
            /* @__PURE__ */ jsxs38("div", { className: "flex items-center gap-0.5 shrink-0", children: [
              onMove && /* @__PURE__ */ jsxs38(Fragment10, { children: [
                /* @__PURE__ */ jsx44(Button, { type: "button", size: "sm", variant: "ghost", className: "h-6 w-6 p-0", title: lbl("Move up", "\u0644\u0623\u0639\u0644\u0649"), onClick: () => onMove(path, -1), children: /* @__PURE__ */ jsx44(ChevronUp2, { className: "h-3 w-3" }) }),
                /* @__PURE__ */ jsx44(Button, { type: "button", size: "sm", variant: "ghost", className: "h-6 w-6 p-0", title: lbl("Move down", "\u0644\u0623\u0633\u0641\u0644"), onClick: () => onMove(path, 1), children: /* @__PURE__ */ jsx44(ChevronDown5, { className: "h-3 w-3" }) })
              ] }),
              onEditRequest && /* @__PURE__ */ jsx44(Button, { type: "button", size: "sm", variant: "ghost", className: "h-6 px-2 text-[11px]", onClick: () => onEditRequest(path), children: isEditing ? lbl("Close", "\u0625\u063A\u0644\u0627\u0642") : lbl("Edit", "\u062A\u0639\u062F\u064A\u0644") }),
              onDelete && /* @__PURE__ */ jsx44(Button, { type: "button", size: "sm", variant: "ghost", className: "h-6 w-6 p-0 text-destructive/70 hover:text-destructive", title: lbl("Delete", "\u062D\u0630\u0641"), onClick: () => onDelete(path), children: /* @__PURE__ */ jsx44(Trash2, { className: "h-3 w-3" }) })
            ] })
          ] }),
          isEditing && renderEditor && /* @__PURE__ */ jsx44("div", { className: "border-t px-3 pb-3 pt-2", children: renderEditor(step, path) })
        ]
      }
    ),
    (loopSteps.length > 0 || onAdd && kind === "for_each") && renderBranch(loopSteps, "steps", "border-cyan-300/60", lbl("loop body", "\u062C\u0633\u0645 \u0627\u0644\u062D\u0644\u0642\u0629")),
    (thenSteps.length > 0 || onAdd && kind === "if") && renderBranch(thenSteps, "then", "border-amber-300/60", lbl("then", "\u0639\u0646\u062F\u0647\u0627")),
    elseSteps.length > 0 && renderBranch(elseSteps, "else", "border-slate-300/60", lbl("else", "\u0648\u0625\u0644\u0627"))
  ] });
};
WorkflowStepNode.displayName = "WorkflowStepNode";

// src/components/plugin-detail/WorkflowPipeline.tsx
import { ChevronRight as ChevronRight3 } from "lucide-react";
import { jsx as jsx45, jsxs as jsxs39 } from "react/jsx-runtime";
var PIPELINE_STAGES = [
  { key: "fetch", label_en: "Fetch", label_ar: "\u062C\u0644\u0628" },
  { key: "parse", label_en: "Parse", label_ar: "\u062A\u062D\u0644\u064A\u0644" },
  { key: "enrich", label_en: "Enrich", label_ar: "\u0625\u062B\u0631\u0627\u0621" },
  { key: "enhance", label_en: "Enhance", label_ar: "\u062A\u062D\u0633\u064A\u0646" },
  { key: "save", label_en: "Save", label_ar: "\u062D\u0641\u0638" }
];
var svcBadgeVariant = (svc) => {
  if (!svc || svc === "direct (HTTP)" || svc === "unknown" || svc === "direct") {
    return "secondary";
  }
  return "default";
};
var MetricsPill = ({ ok_rate, p50_ms, last_error, isRTL }) => {
  const bad = ok_rate < 0.5;
  const pct = Math.round(ok_rate * 100);
  return /* @__PURE__ */ jsx45(TooltipProvider, { children: /* @__PURE__ */ jsxs39(Tooltip, { children: [
    /* @__PURE__ */ jsx45(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsxs39(
      "div",
      {
        className: cn(
          "flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-mono tabular-nums w-fit",
          bad ? "bg-destructive/10 text-destructive" : "bg-green-50 text-green-700 dark:bg-green-950/30 dark:text-green-400"
        ),
        children: [
          /* @__PURE__ */ jsxs39("span", { children: [
            pct,
            "%"
          ] }),
          /* @__PURE__ */ jsx45("span", { className: "text-muted-foreground", children: "\xB7" }),
          /* @__PURE__ */ jsxs39("span", { children: [
            p50_ms,
            "ms"
          ] })
        ]
      }
    ) }),
    last_error && /* @__PURE__ */ jsxs39(TooltipContent, { side: "bottom", dir: isRTL ? "rtl" : "ltr", className: "max-w-xs text-xs", children: [
      isRTL ? "\u0622\u062E\u0631 \u062E\u0637\u0623: " : "Last error: ",
      last_error
    ] })
  ] }) });
};
MetricsPill.displayName = "MetricsPill";
var PipelineCardView = ({ card, isRTL }) => {
  const title = isRTL ? card.title_ar : card.title_en;
  return /* @__PURE__ */ jsx45(
    Card,
    {
      className: cn(
        "w-full border transition-all duration-fast ease-standard",
        card.isSynthetic ? "border-dashed border-muted-foreground/40 bg-muted/20" : "bg-card"
      ),
      children: /* @__PURE__ */ jsxs39(CardContent, { className: "px-3 py-2.5 space-y-1.5", children: [
        /* @__PURE__ */ jsxs39("div", { className: "flex items-start gap-2 flex-wrap", children: [
          /* @__PURE__ */ jsx45("span", { className: "text-xs font-semibold leading-snug flex-1 min-w-0 break-words", children: title }),
          card.isSynthetic && /* @__PURE__ */ jsx45(Badge, { variant: "outline", className: "text-[10px] shrink-0 text-muted-foreground", children: isRTL ? "\u0645\u0634\u062A\u0642" : "derived" })
        ] }),
        card.svc && /* @__PURE__ */ jsx45(
          Badge,
          {
            variant: svcBadgeVariant(card.svc),
            className: "text-[10px] font-mono truncate max-w-full",
            title: card.svc,
            children: card.svc
          }
        ),
        card.summary.length > 0 && /* @__PURE__ */ jsx45("dl", { className: "space-y-0.5", children: card.summary.map(({ label, value }) => /* @__PURE__ */ jsxs39("div", { className: "flex items-start gap-1 text-[10px]", children: [
          /* @__PURE__ */ jsxs39("dt", { className: "text-muted-foreground shrink-0", children: [
            label,
            ":"
          ] }),
          /* @__PURE__ */ jsx45("dd", { className: "font-mono text-foreground truncate", dir: "ltr", title: value, children: value })
        ] }, label)) }),
        card.metrics && /* @__PURE__ */ jsx45(
          MetricsPill,
          {
            ok_rate: card.metrics.ok_rate,
            p50_ms: card.metrics.p50_ms,
            last_error: card.metrics.last_error,
            isRTL
          }
        )
      ] })
    }
  );
};
PipelineCardView.displayName = "PipelineCardView";
var LaneColumn = ({ lane, isRTL, isLast }) => {
  const label = isRTL ? lane.label_ar : lane.label_en;
  return /* @__PURE__ */ jsxs39("div", { className: "flex items-stretch gap-0 flex-1 min-w-0", children: [
    /* @__PURE__ */ jsxs39("div", { className: "flex flex-col gap-0 flex-1 min-w-0", children: [
      /* @__PURE__ */ jsx45("div", { className: "rounded-t-lg border border-b-0 bg-muted/40 px-3 py-1.5", children: /* @__PURE__ */ jsx45("span", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider", children: label }) }),
      /* @__PURE__ */ jsx45("div", { className: "flex-1 rounded-b-lg border bg-muted/10 px-2 py-2 space-y-2 min-h-[80px]", children: lane.cards.length === 0 ? /* @__PURE__ */ jsx45("div", { className: "flex items-center justify-center h-full min-h-[60px]", children: /* @__PURE__ */ jsx45("span", { className: "text-[10px] text-muted-foreground/50", children: "\u2014" }) }) : lane.cards.map((card) => /* @__PURE__ */ jsx45(PipelineCardView, { card, isRTL }, card.id)) })
    ] }),
    !isLast && /* @__PURE__ */ jsx45("div", { className: "flex items-center justify-center px-1 shrink-0 self-stretch", children: /* @__PURE__ */ jsx45(
      ChevronRight3,
      {
        className: cn(
          "h-4 w-4 text-muted-foreground/50 shrink-0",
          isRTL && "rotate-180"
        ),
        "aria-hidden": "true"
      }
    ) })
  ] });
};
LaneColumn.displayName = "LaneColumn";
var BranchLegend = ({ fetchBranches, isRTL }) => {
  if (fetchBranches.length <= 1) return null;
  return /* @__PURE__ */ jsxs39("div", { className: "flex flex-wrap items-center gap-2 text-[11px] text-muted-foreground", children: [
    /* @__PURE__ */ jsx45("span", { className: "font-medium", children: isRTL ? "\u0641\u0631\u0648\u0639 \u0627\u0644\u062C\u0644\u0628 \u0627\u0644\u0645\u062A\u0648\u0627\u0632\u064A\u0629:" : "Parallel fetch branches:" }),
    fetchBranches.map((card) => /* @__PURE__ */ jsxs39(
      "span",
      {
        className: "inline-flex items-center gap-1 rounded-full bg-muted px-2 py-0.5",
        children: [
          /* @__PURE__ */ jsx45("span", { className: "h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" }),
          /* @__PURE__ */ jsx45("span", { children: isRTL ? card.title_ar : card.title_en })
        ]
      },
      card.id
    )),
    /* @__PURE__ */ jsx45("span", { className: "text-muted-foreground/60", children: isRTL ? "\u2190 \u062A\u062A\u0642\u0627\u0631\u0639 \u0641\u064A Enhance + Save" : "\u2192 converge on Enhance + Save" })
  ] });
};
BranchLegend.displayName = "BranchLegend";
var WorkflowPipeline = ({ model, isRTL = false }) => {
  const hasContent = model.stages.some((l) => l.cards.length > 0);
  return /* @__PURE__ */ jsxs39("div", { dir: isRTL ? "rtl" : "ltr", className: "space-y-4", children: [
    model.fetchBranches.length > 1 && /* @__PURE__ */ jsx45(BranchLegend, { fetchBranches: model.fetchBranches, isRTL }),
    hasContent ? /* @__PURE__ */ jsx45(
      "div",
      {
        className: "rounded-xl border bg-background p-4 overflow-x-auto",
        style: {
          backgroundImage: "radial-gradient(circle, var(--border) 1px, transparent 1px)",
          backgroundSize: "16px 16px"
        },
        children: /* @__PURE__ */ jsx45("div", { className: "flex items-stretch gap-0 pb-2 min-w-fit", children: PIPELINE_STAGES.map((stage, idx) => {
          const lane = model.stages.find((l) => l.key === stage.key);
          if (!lane) return null;
          return /* @__PURE__ */ jsx45(
            LaneColumn,
            {
              lane,
              isRTL,
              isLast: idx === PIPELINE_STAGES.length - 1
            },
            stage.key
          );
        }) })
      }
    ) : /* @__PURE__ */ jsx45("div", { className: "flex items-center justify-center rounded-lg border border-dashed bg-muted/20 h-40", children: /* @__PURE__ */ jsx45("p", { className: "text-sm text-muted-foreground", children: isRTL ? "\u0644\u0627 \u062A\u0648\u062C\u062F \u062E\u0637\u0648\u0627\u062A \u0641\u064A \u0633\u064A\u0631 \u0627\u0644\u0639\u0645\u0644" : "No workflow steps configured" }) })
  ] });
};
WorkflowPipeline.displayName = "WorkflowPipeline";

// src/components/plugin-detail/WorkflowEditor.tsx
import { useState as useState25, useCallback as useCallback8, useMemo as useMemo8 } from "react";
import {
  DndContext as DndContext2,
  closestCenter as closestCenter2,
  KeyboardSensor as KeyboardSensor2,
  PointerSensor as PointerSensor2,
  useSensor as useSensor2,
  useSensors as useSensors2
} from "@dnd-kit/core";
import {
  SortableContext as SortableContext2,
  sortableKeyboardCoordinates as sortableKeyboardCoordinates2,
  useSortable as useSortable2,
  verticalListSortingStrategy as verticalListSortingStrategy2,
  arrayMove
} from "@dnd-kit/sortable";
import { CSS as CSS2 } from "@dnd-kit/utilities";
import {
  Save,
  RotateCcw as RotateCcw2,
  Plus,
  Trash2 as Trash23,
  AlertTriangle,
  Pencil,
  GripVertical as GripVertical2,
  Database as Database3,
  Search as Search4,
  Rss,
  Globe as Globe3,
  Code as Code2,
  Info as Info2,
  ExternalLink as ExternalLink2
} from "lucide-react";
import { toast as toast2 } from "sonner";

// src/components/plugin-detail/NestedStepsEditor.tsx
import * as React11 from "react";
import {
  DndContext,
  DragOverlay,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  useDroppable
} from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical, Settings2 as Settings22, Trash2 as Trash22, GitBranch as GitBranch2, Repeat as Repeat2, Clock as Clock2, Database as Database2, Sparkles as Sparkles5, Globe as Globe2, ChevronRight as ChevronRight4 } from "lucide-react";
import { jsx as jsx46, jsxs as jsxs40 } from "react/jsx-runtime";
var _seq = 0;
var newUid = () => `s${(_seq++).toString(36)}-${Date.now().toString(36)}`;
function ensureUids(steps) {
  return steps.map((s) => {
    const next = { ...s, _uid: s._uid ?? newUid() };
    for (const k of ["then", "else", "steps"]) if (Array.isArray(next[k])) next[k] = ensureUids(next[k]);
    return next;
  });
}
var BRANCH_KEYS = ["then", "else", "steps"];
function branchesFor(step) {
  const kind = step.kind;
  if (kind === "if") return ["then", "else"];
  if (kind === "for_each" || kind === "loop" || Array.isArray(step.steps)) return ["steps"];
  return [];
}
function findPath(steps, uid, prefix = []) {
  for (let i = 0; i < steps.length; i++) {
    const s = steps[i];
    if (s._uid === uid) return [...prefix, i];
    for (const k of BRANCH_KEYS) {
      if (Array.isArray(s[k])) {
        const r = findPath(s[k], uid, [...prefix, i, k]);
        if (r) return r;
      }
    }
  }
  return null;
}
function getContainer(root, containerPath) {
  let arr = root;
  let node = null;
  for (const tok of containerPath) {
    if (typeof tok === "number") node = arr[tok];
    else {
      if (!Array.isArray(node[tok])) node[tok] = [];
      arr = node[tok];
    }
  }
  return arr;
}
var samePath = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]);
var startsWith = (p, prefix) => prefix.length <= p.length && prefix.every((v, i) => v === p[i]);
var KIND_ICON = {
  cron_trigger: Clock2,
  if: GitBranch2,
  for_each: Repeat2,
  loop: Repeat2,
  sql_select: Database2,
  sql_insert: Database2,
  sql_update: Database2,
  gemini_call: Sparkles5,
  adk_call: Sparkles5,
  http_call: Globe2,
  http_request: Globe2,
  webhook: Globe2
};
function kindLabel(kind, isRTL) {
  const m = {
    cron_trigger: ["Schedule", "\u062C\u062F\u0648\u0644\u0629"],
    if: ["Condition", "\u0634\u0631\u0637"],
    for_each: ["Repeat", "\u062A\u0643\u0631\u0627\u0631"],
    sql_select: ["Read data", "\u0642\u0631\u0627\u0621\u0629"],
    sql_insert: ["Save", "\u062D\u0641\u0638"],
    sql_update: ["Update", "\u062A\u062D\u062F\u064A\u062B"],
    gemini_call: ["AI", "\u0630\u0643\u0627\u0621"],
    adk_call: ["AI", "\u0630\u0643\u0627\u0621"],
    http_call: ["HTTP", "HTTP"]
  };
  return m[kind] ? isRTL ? m[kind][1] : m[kind][0] : kind.replace(/[_-]+/g, " ");
}
var BRANCH_LABEL = {
  then: ["THEN", "\u0639\u0646\u062F\u0647\u0627"],
  else: ["ELSE", "\u0648\u0625\u0644\u0627"],
  steps: ["LOOP BODY", "\u062C\u0633\u0645 \u0627\u0644\u062D\u0644\u0642\u0629"]
};
function StepRow({
  step,
  isRTL,
  depth,
  onEditStep,
  onDeleteStep,
  renderBranches
}) {
  const uid = String(step._uid);
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: uid });
  const Icon = KIND_ICON[step.kind] ?? ChevronRight4;
  const style = { transform: CSS.Transform.toString(transform), transition };
  return /* @__PURE__ */ jsxs40("div", { ref: setNodeRef, style, className: cn(isDragging && "opacity-50"), children: [
    /* @__PURE__ */ jsxs40("div", { className: "flex items-center gap-2 rounded-md border border-border bg-card px-2 py-1.5 shadow-sm", children: [
      /* @__PURE__ */ jsx46(
        "button",
        {
          type: "button",
          className: "shrink-0 cursor-grab touch-none text-muted-foreground/60 hover:text-foreground active:cursor-grabbing",
          "aria-label": isRTL ? "\u0627\u0633\u062D\u0628" : "Drag",
          ...attributes,
          ...listeners,
          children: /* @__PURE__ */ jsx46(GripVertical, { className: "h-4 w-4" })
        }
      ),
      /* @__PURE__ */ jsx46(Icon, { className: "h-3.5 w-3.5 shrink-0 text-muted-foreground" }),
      /* @__PURE__ */ jsx46(Badge, { variant: "secondary", className: "h-4 rounded-sm px-1 text-[10px]", children: kindLabel(step.kind ?? "?", isRTL) }),
      /* @__PURE__ */ jsx46("span", { className: "min-w-0 flex-1 truncate text-xs text-muted-foreground", children: compactSummary(step, isRTL) }),
      /* @__PURE__ */ jsx46(
        "button",
        {
          type: "button",
          onClick: () => onEditStep?.(step),
          className: "shrink-0 rounded p-1 text-muted-foreground hover:bg-accent hover:text-foreground",
          "aria-label": isRTL ? "\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A" : "Settings",
          children: /* @__PURE__ */ jsx46(Settings22, { className: "h-3.5 w-3.5" })
        }
      ),
      /* @__PURE__ */ jsx46(
        "button",
        {
          type: "button",
          onClick: () => onDeleteStep?.(uid),
          className: "shrink-0 rounded p-1 text-muted-foreground hover:bg-destructive/10 hover:text-destructive",
          "aria-label": isRTL ? "\u062D\u0630\u0641" : "Delete",
          children: /* @__PURE__ */ jsx46(Trash22, { className: "h-3.5 w-3.5" })
        }
      )
    ] }),
    renderBranches(step)
  ] });
}
function compactSummary(step, isRTL) {
  switch (step.kind) {
    case "cron_trigger":
      return isRTL ? `\u0643\u0644 ${step.schedule ?? "?"}` : `every ${step.schedule ?? "?"}`;
    case "if":
      return isRTL ? "\u062D\u0633\u0628 \u0627\u0644\u0634\u0631\u0637" : "when condition is met";
    case "for_each":
      return isRTL ? `\u0644\u0643\u0644 ${humanVar(step.over)}` : `for each ${humanVar(step.over)}`;
    case "sql_select":
      return isRTL ? "\u0642\u0631\u0627\u0621\u0629 \u0633\u062C\u0644\u0627\u062A" : "reads records";
    case "sql_insert":
      return isRTL ? "\u062D\u0641\u0638 \u0627\u0644\u0646\u062A\u0627\u0626\u062C" : "saves results";
    case "adk_call":
    case "gemini_call":
      return isRTL ? "\u062E\u0637\u0648\u0629 \u0630\u0643\u0627\u0621 \u0627\u0635\u0637\u0646\u0627\u0639\u064A" : "AI step";
    default:
      return String(step.kind ?? "").replace(/[_-]+/g, " ");
  }
}
var humanVar = (v) => String(v ?? "item").replace(/^\$/, "").replace(/[_-]+/g, " ");
function EmptyDrop({ id, label }) {
  const { setNodeRef, isOver } = useDroppable({ id });
  return /* @__PURE__ */ jsx46(
    "div",
    {
      ref: setNodeRef,
      className: cn(
        "rounded-md border border-dashed px-3 py-2 text-center text-[11px] text-muted-foreground transition",
        isOver ? "border-primary bg-primary/5 text-primary" : "border-border"
      ),
      children: label
    }
  );
}
function NestedStepsEditor({
  steps,
  language = "en",
  onChange,
  onEditStep,
  onDeleteStep,
  className
}) {
  const isRTL = language === "ar";
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 4 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );
  const [activeStep, setActiveStep] = React11.useState(null);
  const tree = React11.useMemo(() => ensureUids(steps), [steps]);
  const emptyDropId = (containerPath) => `drop::${containerPath.join("::")}`;
  const parseEmptyDrop = (id) => {
    if (!id.startsWith("drop::")) return null;
    return id.slice(6).split("::").filter(Boolean).map((t2) => /^\d+$/.test(t2) ? Number(t2) : t2);
  };
  const onDragStart = (e) => {
    const p = findPath(tree, String(e.active.id));
    if (p) {
      const cont = getContainer(tree, p.slice(0, -1));
      setActiveStep(cont[p[p.length - 1]]);
    }
  };
  const onDragEnd = (e) => {
    setActiveStep(null);
    const { active, over } = e;
    if (!over || active.id === over.id) return;
    const root = JSON.parse(JSON.stringify(tree));
    const fromPath = findPath(root, String(active.id));
    if (!fromPath) return;
    let toContainerPath;
    let toIndex;
    const overEmpty = parseEmptyDrop(String(over.id));
    if (overEmpty) {
      toContainerPath = overEmpty;
      toIndex = getContainer(root, toContainerPath).length;
    } else {
      const overPath = findPath(root, String(over.id));
      if (!overPath) return;
      toContainerPath = overPath.slice(0, -1);
      toIndex = overPath[overPath.length - 1];
    }
    if (startsWith(toContainerPath, fromPath)) return;
    const fromContainerPath = fromPath.slice(0, -1);
    const fromIdx = fromPath[fromPath.length - 1];
    const fromArr = getContainer(root, fromContainerPath);
    const [moved] = fromArr.splice(fromIdx, 1);
    if (!moved) return;
    if (samePath(fromContainerPath, toContainerPath) && fromIdx < toIndex) toIndex -= 1;
    const toArr = getContainer(root, toContainerPath);
    toArr.splice(Math.max(0, Math.min(toIndex, toArr.length)), 0, moved);
    onChange(root);
  };
  const renderBranch = (arr, containerPath, depth, label) => /* @__PURE__ */ jsxs40("div", { className: cn(depth > 0 && "ms-5 border-s-2 border-dashed border-border ps-3"), children: [
    label && /* @__PURE__ */ jsx46("div", { className: "mb-1 mt-1.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground", children: label }),
    /* @__PURE__ */ jsx46(SortableContext, { items: arr.map((s) => String(s._uid)), strategy: verticalListSortingStrategy, children: /* @__PURE__ */ jsx46("div", { className: "space-y-1.5", children: arr.length === 0 ? /* @__PURE__ */ jsx46(EmptyDrop, { id: emptyDropId(containerPath), label: isRTL ? "\u0623\u0641\u0644\u062A \u062E\u0637\u0648\u0629 \u0647\u0646\u0627" : "Drop a step here" }) : arr.map((s, i) => /* @__PURE__ */ jsx46(
      StepRow,
      {
        step: s,
        isRTL,
        depth,
        onEditStep,
        onDeleteStep,
        renderBranches: (step) => {
          const bks = branchesFor(step);
          if (bks.length === 0) return null;
          return /* @__PURE__ */ jsx46("div", { className: "mt-1.5 space-y-1", children: bks.map(
            (bk) => renderBranch(
              Array.isArray(step[bk]) ? step[bk] : [],
              [...containerPath, i, bk],
              depth + 1,
              isRTL ? BRANCH_LABEL[bk][1] : BRANCH_LABEL[bk][0]
            )
          ) });
        }
      },
      String(s._uid)
    )) }) })
  ] });
  return /* @__PURE__ */ jsx46("div", { className: cn("text-sm", className), dir: isRTL ? "rtl" : "ltr", children: /* @__PURE__ */ jsxs40(DndContext, { sensors, collisionDetection: closestCenter, onDragStart, onDragEnd, children: [
    renderBranch(tree, [], 0),
    /* @__PURE__ */ jsx46(DragOverlay, { children: activeStep ? /* @__PURE__ */ jsxs40("div", { className: "flex items-center gap-2 rounded-md border border-primary/40 bg-card px-2 py-1.5 shadow-lg", children: [
      /* @__PURE__ */ jsx46(GripVertical, { className: "h-4 w-4 text-muted-foreground/60" }),
      /* @__PURE__ */ jsx46(Badge, { variant: "secondary", className: "h-4 rounded-sm px-1 text-[10px]", children: kindLabel(activeStep.kind ?? "?", isRTL) }),
      /* @__PURE__ */ jsx46("span", { className: "text-xs text-muted-foreground", children: compactSummary(activeStep, isRTL) })
    ] }) : null })
  ] }) });
}
NestedStepsEditor.displayName = "NestedStepsEditor";

// src/components/plugin-detail/StepOptionsDialog.tsx
import * as React12 from "react";
import { jsx as jsx47, jsxs as jsxs41 } from "react/jsx-runtime";
var MODELS = ["gemini-2.5-flash", "gemini-2.5-pro", "gpt-4o", "gpt-4o-mini", "claude-sonnet-4-6"].map((m) => ({ value: m, label: m }));
var STEP_FIELD_REGISTRY = {
  cron_trigger: [
    { key: "schedule", type: "text", label_en: "Schedule", label_ar: "\u0627\u0644\u062C\u062F\u0648\u0644\u0629", placeholder: "e.g. 15m, 1h, 1d" },
    { key: "min_interval_sec", type: "number", label_en: "Min interval (seconds)", label_ar: "\u0623\u062F\u0646\u0649 \u0641\u0627\u0635\u0644 (\u062B\u0648\u0627\u0646\u064D)" }
  ],
  if: [
    { key: "condition", type: "text", label_en: "Condition", label_ar: "\u0627\u0644\u0634\u0631\u0637", placeholder: "$cron_due" }
  ],
  for_each: [
    { key: "over", type: "text", label_en: "For each item in", label_ar: "\u0644\u0643\u0644 \u0639\u0646\u0635\u0631 \u0641\u064A", placeholder: "$candidates" }
  ],
  sql_select: [
    { key: "table", type: "text", label_en: "Table", label_ar: "\u0627\u0644\u062C\u062F\u0648\u0644", placeholder: "public.raw_envelopes" },
    { key: "query", type: "textarea", label_en: "Query", label_ar: "\u0627\u0644\u0627\u0633\u062A\u0639\u0644\u0627\u0645", placeholder: "SELECT \u2026" },
    { key: "limit", type: "number", label_en: "Limit", label_ar: "\u0627\u0644\u062D\u062F" },
    { key: "output", type: "text", label_en: "Output variable", label_ar: "\u0645\u062A\u063A\u064A\u0631 \u0627\u0644\u0625\u062E\u0631\u0627\u062C", placeholder: "candidates" }
  ],
  sql_insert: [
    { key: "table", type: "text", label_en: "Table", label_ar: "\u0627\u0644\u062C\u062F\u0648\u0644" },
    { key: "columns", type: "csv", label_en: "Columns", label_ar: "\u0627\u0644\u0623\u0639\u0645\u062F\u0629", placeholder: "title, severity, entity_id" },
    { key: "rows_field", type: "text", label_en: "Rows from", label_ar: "\u0627\u0644\u0635\u0641\u0648\u0641 \u0645\u0646" },
    { key: "on_conflict", type: "text", label_en: "On conflict", label_ar: "\u0639\u0646\u062F \u0627\u0644\u062A\u0639\u0627\u0631\u0636" },
    { key: "skip_on_empty", type: "switch", label_en: "Skip when empty", label_ar: "\u062A\u062E\u0637\u064D\u0651 \u0639\u0646\u062F \u0627\u0644\u0641\u0631\u0627\u063A" }
  ],
  sql_update: [
    { key: "table", type: "text", label_en: "Table", label_ar: "\u0627\u0644\u062C\u062F\u0648\u0644" },
    { key: "set", type: "json", label_en: "Set (JSON)", label_ar: "\u062A\u0639\u064A\u064A\u0646 (JSON)" }
  ],
  gemini_call: [
    { key: "prompt_slug", type: "text", label_en: "Prompt", label_ar: "\u0627\u0644\u0645\u0648\u062C\u0651\u0647", placeholder: "alert-classify" },
    { key: "model", type: "select", label_en: "Model", label_ar: "\u0627\u0644\u0646\u0645\u0648\u0630\u062C", options: MODELS },
    { key: "target_field", type: "text", label_en: "Save result to", label_ar: "\u062D\u0641\u0638 \u0627\u0644\u0646\u062A\u064A\u062C\u0629 \u0641\u064A" }
  ],
  adk_call: [
    { key: "prompt_slug", type: "text", label_en: "Prompt", label_ar: "\u0627\u0644\u0645\u0648\u062C\u0651\u0647", placeholder: "alert-classify" },
    { key: "prompt_inline", type: "textarea", label_en: "Inline prompt (optional)", label_ar: "\u0645\u0648\u062C\u0651\u0647 \u0645\u0636\u0645\u0651\u0646 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)" },
    { key: "model", type: "select", label_en: "Model", label_ar: "\u0627\u0644\u0646\u0645\u0648\u0630\u062C", options: MODELS },
    { key: "target_field", type: "text", label_en: "Save result to", label_ar: "\u062D\u0641\u0638 \u0627\u0644\u0646\u062A\u064A\u062C\u0629 \u0641\u064A" }
  ],
  http_call: [
    { key: "url", type: "text", label_en: "URL", label_ar: "\u0627\u0644\u0631\u0627\u0628\u0637", placeholder: "https://\u2026" },
    { key: "method", type: "select", label_en: "Method", label_ar: "\u0627\u0644\u0637\u0631\u064A\u0642\u0629", options: [{ value: "GET", label: "GET" }, { value: "POST", label: "POST" }] },
    { key: "target_field", type: "text", label_en: "Save response to", label_ar: "\u062D\u0641\u0638 \u0627\u0644\u0627\u0633\u062A\u062C\u0627\u0628\u0629 \u0641\u064A" },
    { key: "timeout_sec", type: "number", label_en: "Timeout (seconds)", label_ar: "\u0627\u0644\u0645\u0647\u0644\u0629 (\u062B\u0648\u0627\u0646\u064D)" },
    { key: "headers", type: "json", label_en: "Headers (JSON)", label_ar: "\u0627\u0644\u062A\u0631\u0648\u064A\u0633\u0627\u062A (JSON)" },
    { key: "body_json", type: "json", label_en: "Body (JSON)", label_ar: "\u0627\u0644\u062C\u0633\u0645 (JSON)" }
  ],
  webhook: [
    { key: "url", type: "text", label_en: "Webhook URL", label_ar: "\u0631\u0627\u0628\u0637 \u0627\u0644\u0648\u064A\u0628 \u0647\u0648\u0643", placeholder: "https://\u2026" },
    { key: "method", type: "select", label_en: "Method", label_ar: "\u0627\u0644\u0637\u0631\u064A\u0642\u0629", options: [{ value: "POST", label: "POST" }, { value: "GET", label: "GET" }] }
  ],
  send_email: [
    { key: "to", type: "text", label_en: "To", label_ar: "\u0625\u0644\u0649" },
    { key: "subject", type: "text", label_en: "Subject", label_ar: "\u0627\u0644\u0645\u0648\u0636\u0648\u0639" },
    { key: "body", type: "textarea", label_en: "Body", label_ar: "\u0627\u0644\u0646\u0635" }
  ],
  search_query: [
    { key: "queries", type: "lines", label_en: "Queries (one per line)", label_ar: "\u0627\u0644\u0627\u0633\u062A\u0639\u0644\u0627\u0645\u0627\u062A (\u0648\u0627\u062D\u062F \u0628\u0643\u0644 \u0633\u0637\u0631)" },
    { key: "engines", type: "csv", label_en: "Engines", label_ar: "\u0627\u0644\u0645\u062D\u0631\u0651\u0643\u0627\u062A" }
  ],
  rss_poll: [
    { key: "urls", type: "lines", label_en: "Feed URLs (one per line)", label_ar: "\u0631\u0648\u0627\u0628\u0637 \u0627\u0644\u062E\u0644\u0627\u0635\u0627\u062A (\u0648\u0627\u062D\u062F \u0628\u0643\u0644 \u0633\u0637\u0631)" },
    { key: "freshness_hours", type: "number", label_en: "Freshness (hours)", label_ar: "\u0627\u0644\u062D\u062F\u0627\u062B\u0629 (\u0633\u0627\u0639\u0627\u062A)" }
  ],
  web_scrape: [
    { key: "url", type: "text", label_en: "URL", label_ar: "\u0627\u0644\u0631\u0627\u0628\u0637" },
    { key: "target_field", type: "text", label_en: "Save to", label_ar: "\u062D\u0641\u0638 \u0641\u064A" },
    { key: "timeout_sec", type: "number", label_en: "Timeout (seconds)", label_ar: "\u0627\u0644\u0645\u0647\u0644\u0629 (\u062B\u0648\u0627\u0646\u064D)" },
    { key: "user_agent", type: "text", label_en: "User agent", label_ar: "\u0648\u0643\u064A\u0644 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645" }
  ]
};
STEP_FIELD_REGISTRY.http_request = STEP_FIELD_REGISTRY.http_call;
STEP_FIELD_REGISTRY.email = STEP_FIELD_REGISTRY.send_email;
var isContainerKey = (k) => k === "then" || k === "else" || k === "steps" || k === "_uid" || k === "id" || k === "kind";
function StepOptionsDialog({ open, step, language = "en", onClose, onSave }) {
  const isRTL = language === "ar";
  const t2 = (en, ar) => isRTL ? ar : en;
  const kind = step?.kind ?? "unknown";
  const fields = STEP_FIELD_REGISTRY[kind];
  const isKnown = Array.isArray(fields);
  const [form, setForm] = React12.useState({});
  const [rawJson, setRawJson] = React12.useState("");
  const [err, setErr] = React12.useState(null);
  React12.useEffect(() => {
    if (!step) return;
    setErr(null);
    if (!isKnown) {
      setRawJson(JSON.stringify(step, (k, v) => k === "_uid" ? void 0 : v, 2));
      return;
    }
    const next = {};
    for (const f of fields) {
      const v = step[f.key];
      if (f.type === "lines") next[f.key] = Array.isArray(v) ? v.join("\n") : v ?? "";
      else if (f.type === "csv") next[f.key] = Array.isArray(v) ? v.join(", ") : v ?? "";
      else if (f.type === "json") next[f.key] = v == null ? "" : JSON.stringify(v, null, 2);
      else if (f.type === "switch") next[f.key] = v ? "1" : "";
      else next[f.key] = v == null ? "" : String(v);
    }
    setForm(next);
  }, [step, kind]);
  const set = (k, v) => setForm((p) => ({ ...p, [k]: v }));
  const handleSave = () => {
    if (!step) return;
    setErr(null);
    if (!isKnown) {
      try {
        const parsed = JSON.parse(rawJson);
        onSave({ ...parsed, _uid: step._uid, kind: parsed.kind ?? step.kind });
        onClose();
      } catch (e) {
        setErr(t2("Invalid JSON: ", "JSON \u063A\u064A\u0631 \u0635\u0627\u0644\u062D: ") + (e?.message ?? ""));
      }
      return;
    }
    const next = {};
    for (const k of Object.keys(step)) if (isContainerKey(k)) next[k] = step[k];
    next.kind = step.kind;
    for (const f of fields) {
      const raw = (form[f.key] ?? "").trim();
      if (f.type === "switch") {
        next[f.key] = form[f.key] === "1";
        continue;
      }
      if (raw === "") continue;
      if (f.type === "number") {
        const n = Number(raw);
        if (!Number.isNaN(n)) next[f.key] = n;
        continue;
      }
      if (f.type === "lines") {
        next[f.key] = raw.split("\n").map((s) => s.trim()).filter(Boolean);
        continue;
      }
      if (f.type === "csv") {
        next[f.key] = raw.split(",").map((s) => s.trim()).filter(Boolean);
        continue;
      }
      if (f.type === "json") {
        try {
          next[f.key] = JSON.parse(raw);
        } catch (e) {
          setErr(`${f.label_en}: ${e?.message ?? "invalid JSON"}`);
          return;
        }
        continue;
      }
      next[f.key] = raw;
    }
    onSave(next);
    onClose();
  };
  const title = humanKind(kind, isRTL);
  return /* @__PURE__ */ jsx47(Dialog, { open, onOpenChange: (o) => !o && onClose(), children: /* @__PURE__ */ jsxs41(DialogContent, { className: "max-w-lg", dir: isRTL ? "rtl" : "ltr", children: [
    /* @__PURE__ */ jsxs41(DialogHeader, { children: [
      /* @__PURE__ */ jsxs41(DialogTitle, { children: [
        t2("Step settings", "\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u062E\u0637\u0648\u0629"),
        " \xB7 ",
        title
      ] }),
      /* @__PURE__ */ jsx47(DialogDescription, { children: t2("Configure what this step does.", "\u0627\u0636\u0628\u0637 \u0645\u0627 \u062A\u0642\u0648\u0645 \u0628\u0647 \u0647\u0630\u0647 \u0627\u0644\u062E\u0637\u0648\u0629.") })
    ] }),
    /* @__PURE__ */ jsxs41("div", { className: "max-h-[60vh] space-y-4 overflow-y-auto py-1", children: [
      err && /* @__PURE__ */ jsx47("p", { className: "rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive", children: err }),
      !isKnown ? /* @__PURE__ */ jsxs41("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsx47(Label, { children: t2("Raw step (JSON)", "\u0627\u0644\u062E\u0637\u0648\u0629 \u0627\u0644\u062E\u0627\u0645 (JSON)") }),
        /* @__PURE__ */ jsx47(Textarea, { value: rawJson, onChange: (e) => setRawJson(e.target.value), rows: 12, className: "font-mono text-xs", dir: "ltr" })
      ] }) : fields.map((f) => /* @__PURE__ */ jsxs41("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsx47(Label, { htmlFor: `opt-${f.key}`, children: t2(f.label_en, f.label_ar) }),
        f.type === "switch" ? /* @__PURE__ */ jsx47("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsx47(Switch, { id: `opt-${f.key}`, checked: form[f.key] === "1", onCheckedChange: (v) => set(f.key, v ? "1" : "") }) }) : f.type === "select" ? /* @__PURE__ */ jsxs41(Select, { value: form[f.key] || void 0, onValueChange: (v) => set(f.key, v), children: [
          /* @__PURE__ */ jsx47(SelectTrigger, { id: `opt-${f.key}`, children: /* @__PURE__ */ jsx47(SelectValue, { placeholder: t2("Select\u2026", "\u0627\u062E\u062A\u0631\u2026") }) }),
          /* @__PURE__ */ jsx47(SelectContent, { children: f.options?.map((o) => /* @__PURE__ */ jsx47(SelectItem, { value: o.value, children: o.label }, o.value)) })
        ] }) : f.type === "textarea" || f.type === "lines" || f.type === "csv" || f.type === "json" ? /* @__PURE__ */ jsx47(
          Textarea,
          {
            id: `opt-${f.key}`,
            value: form[f.key] ?? "",
            onChange: (e) => set(f.key, e.target.value),
            placeholder: f.placeholder,
            rows: f.type === "json" || f.type === "textarea" ? 5 : 3,
            className: f.type === "json" ? "font-mono text-xs" : void 0,
            dir: f.type === "json" ? "ltr" : void 0
          }
        ) : /* @__PURE__ */ jsx47(
          Input,
          {
            id: `opt-${f.key}`,
            type: f.type === "number" ? "number" : "text",
            value: form[f.key] ?? "",
            onChange: (e) => set(f.key, e.target.value),
            placeholder: f.placeholder
          }
        )
      ] }, f.key))
    ] }),
    /* @__PURE__ */ jsxs41(DialogFooter, { children: [
      /* @__PURE__ */ jsx47(Button, { variant: "outline", onClick: onClose, children: t2("Cancel", "\u0625\u0644\u063A\u0627\u0621") }),
      /* @__PURE__ */ jsx47(Button, { onClick: handleSave, children: t2("Save", "\u062D\u0641\u0638") })
    ] })
  ] }) });
}
function humanKind(kind, isRTL) {
  const map = {
    cron_trigger: ["Schedule", "\u062C\u062F\u0648\u0644\u0629"],
    if: ["Condition", "\u0634\u0631\u0637"],
    for_each: ["Repeat", "\u062A\u0643\u0631\u0627\u0631"],
    sql_select: ["Read data", "\u0642\u0631\u0627\u0621\u0629"],
    sql_insert: ["Save", "\u062D\u0641\u0638"],
    sql_update: ["Update", "\u062A\u062D\u062F\u064A\u062B"],
    gemini_call: ["AI", "\u0630\u0643\u0627\u0621 \u0627\u0635\u0637\u0646\u0627\u0639\u064A"],
    adk_call: ["AI", "\u0630\u0643\u0627\u0621 \u0627\u0635\u0637\u0646\u0627\u0639\u064A"],
    http_call: ["HTTP", "HTTP"],
    http_request: ["HTTP", "HTTP"],
    webhook: ["Webhook", "\u0648\u064A\u0628 \u0647\u0648\u0643"],
    send_email: ["Email", "\u0628\u0631\u064A\u062F"],
    search_query: ["Search", "\u0628\u062D\u062B"],
    rss_poll: ["RSS", "RSS"],
    web_scrape: ["Scrape", "\u062C\u0644\u0628"]
  };
  const m = map[kind];
  if (m) return isRTL ? m[1] : m[0];
  return kind.replace(/[_-]+/g, " ");
}
StepOptionsDialog.displayName = "StepOptionsDialog";

// src/components/plugin-detail/WorkflowEditor.tsx
import { useEffect as useEffect14 } from "react";
import { Fragment as Fragment11, jsx as jsx48, jsxs as jsxs42 } from "react/jsx-runtime";
var BR = ["then", "else", "steps"];
var _wid = 0;
function assignUids(steps) {
  return (steps ?? []).map((s) => {
    const n = { ...s, _uid: s._uid ?? `wstep-${_wid++}` };
    for (const k of BR) if (Array.isArray(n[k])) n[k] = assignUids(n[k]);
    return n;
  });
}
function updateByUid(steps, uid, next) {
  return steps.map((s) => {
    if (String(s._uid) === uid) return { ...next, _uid: s._uid };
    let changed = false;
    const c = { ...s };
    for (const k of BR) if (Array.isArray(c[k])) {
      const r = updateByUid(c[k], uid, next);
      if (r !== c[k]) {
        c[k] = r;
        changed = true;
      }
    }
    return changed ? c : s;
  });
}
function deleteByUid(steps, uid) {
  const out = [];
  for (const s of steps) {
    if (String(s._uid) === uid) continue;
    const c = { ...s };
    for (const k of BR) if (Array.isArray(c[k])) c[k] = deleteByUid(c[k], uid);
    out.push(c);
  }
  return out;
}
function stripUidsDeep(o) {
  if (Array.isArray(o)) return o.map(stripUidsDeep);
  if (o && typeof o === "object") {
    const { _uid, ...rest } = o;
    const r = {};
    for (const k of Object.keys(rest)) r[k] = stripUidsDeep(rest[k]);
    return r;
  }
  return o;
}
var PROTO_POLLUTION_KEYS = ["__proto__", "constructor", "prototype"];
var SOURCE_TYPES = [
  { type: "searxng_social", label_en: "SearxNG Social", label_ar: "\u0633\u064A\u0631\u0643\u0633 \u0627\u062C\u062A\u0645\u0627\u0639\u064A" },
  { type: "crawler", label_en: "Web Crawler", label_ar: "\u0632\u0627\u062D\u0641 \u0627\u0644\u0648\u064A\u0628" },
  { type: "http", label_en: "HTTP Source", label_ar: "\u0645\u0635\u062F\u0631 HTTP" },
  { type: "api", label_en: "API Source", label_ar: "\u0645\u0635\u062F\u0631 API" },
  { type: "meltwater", label_en: "Meltwater", label_ar: "\u0645\u064A\u0644\u062A \u0648\u0648\u062A\u0631" }
];
var STEP_KINDS = [
  { kind: "rss_poll", label_en: "RSS Poll", label_ar: "\u0627\u0633\u062A\u0637\u0644\u0627\u0639 RSS" },
  { kind: "search_query", label_en: "Search Query", label_ar: "\u0627\u0633\u062A\u0639\u0644\u0627\u0645 \u0628\u062D\u062B" },
  { kind: "http_call", label_en: "HTTP Call", label_ar: "\u0637\u0644\u0628 HTTP" },
  { kind: "web_scrape", label_en: "Web Scrape", label_ar: "\u062C\u0644\u0628 \u0635\u0641\u062D\u0627\u062A" },
  { kind: "sql_insert", label_en: "SQL Insert", label_ar: "\u0625\u062F\u0631\u0627\u062C SQL" }
];
var STEP_LABELS = {
  rss_poll: { en: "RSS Poll", ar: "\u0627\u0633\u062A\u0637\u0644\u0627\u0639 RSS" },
  search_query: { en: "Search Query", ar: "\u0627\u0633\u062A\u0639\u0644\u0627\u0645 \u0628\u062D\u062B" },
  http_call: { en: "HTTP Call", ar: "\u0637\u0644\u0628 HTTP" },
  web_scrape: { en: "Web Scrape", ar: "\u062C\u0644\u0628 \u0635\u0641\u062D\u0627\u062A" },
  sql_insert: { en: "SQL Insert", ar: "\u0625\u062F\u0631\u0627\u062C SQL" }
};
var hasProtoPollutionKey = (obj) => {
  if (!obj || typeof obj !== "object") return false;
  return Object.keys(obj).some((k) => PROTO_POLLUTION_KEYS.includes(k));
};
var parseJSONField = (txt) => {
  const t2 = txt.trim();
  if (t2 === "") return [void 0, null];
  try {
    return [JSON.parse(t2), null];
  } catch (e) {
    return [void 0, e instanceof Error ? e.message : "invalid JSON"];
  }
};
var SortableRow = ({
  id,
  icon: Icon,
  title,
  subtitle,
  badge,
  disabled,
  isRTL,
  checked,
  onToggle,
  onEdit,
  onDelete
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable2({ id });
  const style = {
    transform: CSS2.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 10 : void 0
  };
  return /* @__PURE__ */ jsxs42(
    "div",
    {
      ref: setNodeRef,
      style,
      className: cn(
        "flex items-center gap-2 bg-card px-2 py-2.5",
        isDragging && "opacity-80 shadow-lg rounded-md",
        disabled && "opacity-55"
      ),
      children: [
        /* @__PURE__ */ jsx48(
          "button",
          {
            ref: setActivatorNodeRef,
            ...attributes,
            ...listeners,
            type: "button",
            "aria-label": isRTL ? "\u0627\u0633\u062D\u0628 \u0644\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u062A\u0631\u062A\u064A\u0628" : "Drag to reorder",
            className: "flex h-9 w-6 shrink-0 cursor-grab active:cursor-grabbing items-center justify-center text-muted-foreground/40 hover:text-muted-foreground transition-colors duration-fast ease-standard",
            children: /* @__PURE__ */ jsx48(GripVertical2, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ jsx48("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-muted", children: /* @__PURE__ */ jsx48(Icon, { className: "h-4 w-4 text-muted-foreground" }) }),
        /* @__PURE__ */ jsxs42("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxs42("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx48("span", { className: "truncate text-sm font-medium", children: title }),
            badge && /* @__PURE__ */ jsx48(Badge, { variant: "secondary", className: "shrink-0 text-[10px] tabular-nums", children: badge }),
            disabled && /* @__PURE__ */ jsx48(Badge, { variant: "outline", className: "shrink-0 text-[10px] text-muted-foreground", children: isRTL ? "\u0645\u0639\u0637\u0651\u0644" : "off" })
          ] }),
          subtitle && /* @__PURE__ */ jsx48("p", { className: "truncate text-xs text-muted-foreground", children: subtitle })
        ] }),
        /* @__PURE__ */ jsxs42("div", { className: "flex shrink-0 items-center gap-1", children: [
          /* @__PURE__ */ jsx48(
            Switch,
            {
              checked,
              onCheckedChange: onToggle,
              className: "scale-90",
              "aria-label": isRTL ? "\u062A\u0641\u0639\u064A\u0644/\u062A\u0639\u0637\u064A\u0644" : "Enable/disable"
            }
          ),
          onEdit && /* @__PURE__ */ jsxs42(Button, { size: "sm", variant: "ghost", className: "h-8 px-2", onClick: onEdit, title: isRTL ? "\u062A\u0639\u062F\u064A\u0644" : "Edit", children: [
            /* @__PURE__ */ jsx48(Pencil, { className: "h-3.5 w-3.5 me-1" }),
            isRTL ? "\u062A\u0639\u062F\u064A\u0644" : "Edit"
          ] }),
          /* @__PURE__ */ jsx48(
            Button,
            {
              size: "sm",
              variant: "ghost",
              className: "h-8 w-8 p-0 text-destructive hover:text-destructive",
              onClick: onDelete,
              title: isRTL ? "\u062D\u0630\u0641" : "Delete",
              children: /* @__PURE__ */ jsx48(Trash23, { className: "h-3.5 w-3.5" })
            }
          )
        ] })
      ]
    }
  );
};
SortableRow.displayName = "SortableRow";
var AddItemDialog = ({ open, onClose, onAddStep, onAddSource, palette, isRTL }) => {
  const [mode, setMode] = useState25("step");
  const [selectedKind, setSelectedKind] = useState25("");
  const [selectedType, setSelectedType] = useState25("");
  const handleAdd = () => {
    if (mode === "step" && selectedKind) {
      const obj = { kind: selectedKind };
      if (hasProtoPollutionKey(obj)) return;
      onAddStep(obj);
      setSelectedKind("");
      onClose();
    } else if (mode === "source" && selectedType) {
      const obj = { type: selectedType, enabled: true };
      if (hasProtoPollutionKey(obj)) return;
      onAddSource(obj);
      setSelectedType("");
      onClose();
    }
  };
  return /* @__PURE__ */ jsx48(Dialog, { open, onOpenChange: (v) => !v && onClose(), children: /* @__PURE__ */ jsxs42(DialogContent, { className: "max-w-sm", dir: isRTL ? "rtl" : "ltr", children: [
    /* @__PURE__ */ jsx48(DialogHeader, { children: /* @__PURE__ */ jsx48(DialogTitle, { children: isRTL ? "\u0625\u0636\u0627\u0641\u0629 \u0639\u0646\u0635\u0631" : "Add item" }) }),
    /* @__PURE__ */ jsxs42("div", { className: "space-y-4 py-2", children: [
      /* @__PURE__ */ jsxs42("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsx48(Button, { size: "sm", variant: mode === "step" ? "default" : "outline", onClick: () => setMode("step"), children: isRTL ? "\u062E\u0637\u0648\u0629" : "Step" }),
        /* @__PURE__ */ jsx48(Button, { size: "sm", variant: mode === "source" ? "default" : "outline", onClick: () => setMode("source"), children: isRTL ? "\u0645\u0635\u062F\u0631" : "Source" })
      ] }),
      mode === "step" && /* @__PURE__ */ jsxs42(Select, { value: selectedKind, onValueChange: setSelectedKind, children: [
        /* @__PURE__ */ jsx48(SelectTrigger, { children: /* @__PURE__ */ jsx48(SelectValue, { placeholder: isRTL ? "\u0627\u062E\u062A\u0631 \u0646\u0648\u0639 \u0627\u0644\u062E\u0637\u0648\u0629" : "Select step kind" }) }),
        /* @__PURE__ */ jsxs42(SelectContent, { children: [
          STEP_KINDS.map((k) => /* @__PURE__ */ jsx48(SelectItem, { value: k.kind, children: isRTL ? k.label_ar : k.label_en }, k.kind)),
          (palette?.svc ?? []).map((s) => /* @__PURE__ */ jsx48(SelectItem, { value: s.slug, children: isRTL ? s.name_ar : s.name_en }, `svc-${s.slug}`))
        ] })
      ] }),
      mode === "source" && /* @__PURE__ */ jsxs42(Select, { value: selectedType, onValueChange: setSelectedType, children: [
        /* @__PURE__ */ jsx48(SelectTrigger, { children: /* @__PURE__ */ jsx48(SelectValue, { placeholder: isRTL ? "\u0627\u062E\u062A\u0631 \u0646\u0648\u0639 \u0627\u0644\u0645\u0635\u062F\u0631" : "Select source type" }) }),
        /* @__PURE__ */ jsx48(SelectContent, { children: SOURCE_TYPES.map((t2) => /* @__PURE__ */ jsx48(SelectItem, { value: t2.type, children: isRTL ? t2.label_ar : t2.label_en }, t2.type)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs42(DialogFooter, { children: [
      /* @__PURE__ */ jsx48(Button, { variant: "outline", size: "sm", onClick: onClose, children: isRTL ? "\u0625\u0644\u063A\u0627\u0621" : "Cancel" }),
      /* @__PURE__ */ jsx48(Button, { size: "sm", onClick: handleAdd, disabled: mode === "step" ? !selectedKind : !selectedType, children: isRTL ? "\u0625\u0636\u0627\u0641\u0629" : "Add" })
    ] })
  ] }) });
};
AddItemDialog.displayName = "AddItemDialog";
var EditStepDialog = ({ open, step, onClose, onSave, isRTL }) => {
  const kind = step?.kind ?? "";
  const lbl = (en, ar) => isRTL ? ar : en;
  const [queriesTxt, setQueriesTxt] = useState25("");
  const [enginesTxt, setEnginesTxt] = useState25("");
  const [urlsTxt, setUrlsTxt] = useState25("");
  const [freshnessHours, setFreshnessHours] = useState25("");
  const [url, setUrl] = useState25("");
  const [method, setMethod] = useState25("GET");
  const [resultPath, setResultPath] = useState25("");
  const [targetField, setTargetField] = useState25("");
  const [timeoutSec, setTimeoutSec] = useState25("");
  const [headersTxt, setHeadersTxt] = useState25("");
  const [bodyJsonTxt, setBodyJsonTxt] = useState25("");
  const [userAgent, setUserAgent] = useState25("");
  const [extractTxt, setExtractTxt] = useState25("");
  const [table, setTable] = useState25("");
  const [rowsField, setRowsField] = useState25("");
  const [onConflict, setOnConflict] = useState25("");
  const [skipOnEmpty, setSkipOnEmpty] = useState25(false);
  const [fieldMapTxt, setFieldMapTxt] = useState25("");
  const [jsonErr, setJsonErr] = useState25(null);
  useEffect14(() => {
    if (!step) return;
    setJsonErr(null);
    const jstr = (v) => v == null ? "" : JSON.stringify(v, null, 2);
    if (kind === "search_query") {
      setQueriesTxt(Array.isArray(step.queries) ? step.queries.join("\n") : "");
      setEnginesTxt(Array.isArray(step.engines) ? step.engines.join(", ") : "");
    } else if (kind === "rss_poll") {
      setUrlsTxt(Array.isArray(step.urls) ? step.urls.join("\n") : step.url ? String(step.url) : "");
      setFreshnessHours(step.freshness_hours != null ? String(step.freshness_hours) : "");
    } else if (kind === "http_call") {
      setUrl(step.url ?? "");
      setMethod(step.method === "POST" ? "POST" : "GET");
      setResultPath(step.result_path ?? "");
      setTargetField(step.target_field ?? "");
      setTimeoutSec(step.timeout_sec != null ? String(step.timeout_sec) : "");
      setHeadersTxt(jstr(step.headers));
      setBodyJsonTxt(jstr(step.body_json));
    } else if (kind === "web_scrape") {
      setUrl(step.url ?? "");
      setTargetField(step.target_field ?? "");
      setTimeoutSec(step.timeout_sec != null ? String(step.timeout_sec) : "");
      setUserAgent(step.user_agent ?? "");
      setExtractTxt(jstr(step.extract));
    } else if (kind === "sql_insert") {
      setTable(step.table ?? "");
      setRowsField(step.rows_field ?? "");
      setOnConflict(step.on_conflict ?? "");
      setSkipOnEmpty(!!step.skip_on_empty);
      setFieldMapTxt(jstr(step.field_map));
    }
  }, [step, kind]);
  const numOrSkip = (s) => {
    const t2 = s.trim();
    return t2 !== "" && !isNaN(Number(t2)) ? Number(t2) : void 0;
  };
  const handleApply = () => {
    if (!step) return;
    setJsonErr(null);
    if (kind === "search_query") {
      const queries = queriesTxt.split("\n").map((q) => q.trim()).filter(Boolean);
      const engines = enginesTxt.split(",").map((e) => e.trim()).filter(Boolean);
      onSave({ queries, engines: engines.length > 0 ? engines : void 0 });
    } else if (kind === "rss_poll") {
      const urls = urlsTxt.split("\n").map((u) => u.trim()).filter(Boolean);
      const fh = numOrSkip(freshnessHours);
      onSave({ urls, ...fh != null ? { freshness_hours: fh } : {} });
    } else if (kind === "http_call") {
      const [headers, hErr] = parseJSONField(headersTxt);
      const [bodyJson, bErr] = parseJSONField(bodyJsonTxt);
      if (hErr) {
        setJsonErr(`headers: ${hErr}`);
        return;
      }
      if (bErr) {
        setJsonErr(`body_json: ${bErr}`);
        return;
      }
      onSave({
        url: url.trim(),
        method,
        ...resultPath.trim() ? { result_path: resultPath.trim() } : {},
        ...targetField.trim() ? { target_field: targetField.trim() } : {},
        ...numOrSkip(timeoutSec) != null ? { timeout_sec: numOrSkip(timeoutSec) } : {},
        ...headers !== void 0 ? { headers } : {},
        ...bodyJson !== void 0 ? { body_json: bodyJson } : {}
      });
    } else if (kind === "web_scrape") {
      const [extract, eErr] = parseJSONField(extractTxt);
      if (eErr) {
        setJsonErr(`extract: ${eErr}`);
        return;
      }
      onSave({
        url: url.trim(),
        ...targetField.trim() ? { target_field: targetField.trim() } : {},
        ...numOrSkip(timeoutSec) != null ? { timeout_sec: numOrSkip(timeoutSec) } : {},
        ...userAgent.trim() ? { user_agent: userAgent.trim() } : {},
        ...extract !== void 0 ? { extract } : {}
      });
    } else if (kind === "sql_insert") {
      const [fieldMap, fErr] = parseJSONField(fieldMapTxt);
      if (fErr) {
        setJsonErr(`field_map: ${fErr}`);
        return;
      }
      onSave({
        table: table.trim(),
        ...rowsField.trim() ? { rows_field: rowsField.trim() } : {},
        ...onConflict.trim() ? { on_conflict: onConflict.trim() } : {},
        skip_on_empty: skipOnEmpty,
        ...fieldMap !== void 0 ? { field_map: fieldMap } : {}
      });
    } else {
      onClose();
      return;
    }
    onClose();
  };
  if (!step) return null;
  const knownKind = ["search_query", "rss_poll", "http_call", "web_scrape", "sql_insert"].includes(kind);
  return /* @__PURE__ */ jsx48(Dialog, { open, onOpenChange: (v) => !v && onClose(), children: /* @__PURE__ */ jsxs42(DialogContent, { className: "max-w-md max-h-[85vh] overflow-y-auto", dir: isRTL ? "rtl" : "ltr", children: [
    /* @__PURE__ */ jsx48(DialogHeader, { children: /* @__PURE__ */ jsxs42(DialogTitle, { children: [
      lbl("Edit step", "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u062E\u0637\u0648\u0629"),
      " ",
      /* @__PURE__ */ jsx48("span", { className: "font-mono text-sm text-muted-foreground", children: kind })
    ] }) }),
    /* @__PURE__ */ jsxs42("div", { className: "space-y-4 py-2", children: [
      kind === "search_query" && /* @__PURE__ */ jsxs42(Fragment11, { children: [
        /* @__PURE__ */ jsxs42("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsx48(Label, { className: "text-sm font-medium", children: lbl("Queries (one per line)", "\u0627\u0644\u0627\u0633\u062A\u0639\u0644\u0627\u0645\u0627\u062A (\u0633\u0637\u0631 \u0644\u0643\u0644 \u0627\u0633\u062A\u0639\u0644\u0627\u0645)") }),
          /* @__PURE__ */ jsx48(Textarea, { dir: isRTL ? "rtl" : "ltr", placeholder: isRTL ? "\u0635\u062D\u0627\u0641\u0629\n\u0633\u064A\u0627\u0633\u0629" : "press release\nbreaking news", value: queriesTxt, onChange: (e) => setQueriesTxt(e.target.value), rows: 6, className: "font-mono text-sm resize-y" })
        ] }),
        /* @__PURE__ */ jsxs42("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsx48(Label, { className: "text-sm font-medium", children: lbl("Engines (comma-separated)", "\u0645\u062D\u0631\u0643\u0627\u062A \u0627\u0644\u0628\u062D\u062B (\u0645\u0641\u0635\u0648\u0644\u0629 \u0628\u0641\u0648\u0627\u0635\u0644)") }),
          /* @__PURE__ */ jsx48(Input, { dir: "ltr", placeholder: "google, bing, duckduckgo", value: enginesTxt, onChange: (e) => setEnginesTxt(e.target.value), className: "font-mono text-sm" })
        ] })
      ] }),
      kind === "rss_poll" && /* @__PURE__ */ jsxs42(Fragment11, { children: [
        /* @__PURE__ */ jsxs42("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsx48(Label, { className: "text-sm font-medium", children: lbl("Feed URLs (one per line)", "\u0631\u0648\u0627\u0628\u0637 RSS (\u0633\u0637\u0631 \u0644\u0643\u0644 \u0631\u0627\u0628\u0637)") }),
          /* @__PURE__ */ jsx48(Textarea, { dir: "ltr", placeholder: "https://example.com/feed.rss", value: urlsTxt, onChange: (e) => setUrlsTxt(e.target.value), rows: 5, className: "font-mono text-sm resize-y" })
        ] }),
        /* @__PURE__ */ jsxs42("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsx48(Label, { className: "text-sm font-medium", children: lbl("Freshness (hours)", "\u0627\u0644\u062D\u062F\u0627\u062B\u0629 (\u0628\u0627\u0644\u0633\u0627\u0639\u0627\u062A)") }),
          /* @__PURE__ */ jsx48(Input, { dir: "ltr", type: "number", placeholder: "24", value: freshnessHours, onChange: (e) => setFreshnessHours(e.target.value), className: "w-28" })
        ] })
      ] }),
      kind === "http_call" && /* @__PURE__ */ jsxs42(Fragment11, { children: [
        /* @__PURE__ */ jsxs42("div", { className: "grid grid-cols-[1fr_auto] gap-2", children: [
          /* @__PURE__ */ jsxs42("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsx48(Label, { className: "text-sm font-medium", children: lbl("URL", "\u0627\u0644\u0631\u0627\u0628\u0637") }),
            /* @__PURE__ */ jsx48(Input, { dir: "ltr", placeholder: "https://api.example.com/v1/items", value: url, onChange: (e) => setUrl(e.target.value), className: "font-mono text-sm" })
          ] }),
          /* @__PURE__ */ jsxs42("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsx48(Label, { className: "text-sm font-medium", children: lbl("Method", "\u0627\u0644\u0637\u0631\u064A\u0642\u0629") }),
            /* @__PURE__ */ jsxs42(Select, { value: method, onValueChange: (v) => setMethod(v), children: [
              /* @__PURE__ */ jsx48(SelectTrigger, { className: "w-24", children: /* @__PURE__ */ jsx48(SelectValue, {}) }),
              /* @__PURE__ */ jsxs42(SelectContent, { children: [
                /* @__PURE__ */ jsx48(SelectItem, { value: "GET", children: "GET" }),
                /* @__PURE__ */ jsx48(SelectItem, { value: "POST", children: "POST" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs42("div", { className: "grid grid-cols-2 gap-2", children: [
          /* @__PURE__ */ jsxs42("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsx48(Label, { className: "text-sm font-medium", children: lbl("Result path", "\u0645\u0633\u0627\u0631 \u0627\u0644\u0646\u062A\u064A\u062C\u0629") }),
            /* @__PURE__ */ jsx48(Input, { dir: "ltr", placeholder: "$.data.items", value: resultPath, onChange: (e) => setResultPath(e.target.value), className: "font-mono text-sm" })
          ] }),
          /* @__PURE__ */ jsxs42("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsx48(Label, { className: "text-sm font-medium", children: lbl("Target field", "\u0627\u0644\u062D\u0642\u0644 \u0627\u0644\u0647\u062F\u0641") }),
            /* @__PURE__ */ jsx48(Input, { dir: "ltr", placeholder: "envelopes", value: targetField, onChange: (e) => setTargetField(e.target.value), className: "font-mono text-sm" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs42("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsx48(Label, { className: "text-sm font-medium", children: lbl("Timeout (seconds)", "\u0627\u0644\u0645\u0647\u0644\u0629 (\u062B\u0648\u0627\u0646\u064A)") }),
          /* @__PURE__ */ jsx48(Input, { dir: "ltr", type: "number", placeholder: "15", value: timeoutSec, onChange: (e) => setTimeoutSec(e.target.value), className: "w-28" })
        ] }),
        /* @__PURE__ */ jsxs42("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsx48(Label, { className: "text-sm font-medium", children: lbl("Headers (JSON)", "\u0627\u0644\u062A\u0631\u0648\u064A\u0633\u0627\u062A (JSON)") }),
          /* @__PURE__ */ jsx48(Textarea, { dir: "ltr", placeholder: '{"Authorization": "Bearer {{secret:token}}"}', value: headersTxt, onChange: (e) => setHeadersTxt(e.target.value), rows: 3, className: "font-mono text-xs resize-y" })
        ] }),
        /* @__PURE__ */ jsxs42("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsx48(Label, { className: "text-sm font-medium", children: lbl("Body JSON (POST)", "\u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u0637\u0644\u0628 JSON (POST)") }),
          /* @__PURE__ */ jsx48(Textarea, { dir: "ltr", placeholder: '{"query": "..."}', value: bodyJsonTxt, onChange: (e) => setBodyJsonTxt(e.target.value), rows: 3, className: "font-mono text-xs resize-y" })
        ] })
      ] }),
      kind === "web_scrape" && /* @__PURE__ */ jsxs42(Fragment11, { children: [
        /* @__PURE__ */ jsxs42("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsx48(Label, { className: "text-sm font-medium", children: lbl("URL", "\u0627\u0644\u0631\u0627\u0628\u0637") }),
          /* @__PURE__ */ jsx48(Input, { dir: "ltr", placeholder: "https://example.com/page", value: url, onChange: (e) => setUrl(e.target.value), className: "font-mono text-sm" })
        ] }),
        /* @__PURE__ */ jsxs42("div", { className: "grid grid-cols-2 gap-2", children: [
          /* @__PURE__ */ jsxs42("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsx48(Label, { className: "text-sm font-medium", children: lbl("Target field", "\u0627\u0644\u062D\u0642\u0644 \u0627\u0644\u0647\u062F\u0641") }),
            /* @__PURE__ */ jsx48(Input, { dir: "ltr", placeholder: "envelopes", value: targetField, onChange: (e) => setTargetField(e.target.value), className: "font-mono text-sm" })
          ] }),
          /* @__PURE__ */ jsxs42("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsx48(Label, { className: "text-sm font-medium", children: lbl("Timeout (seconds)", "\u0627\u0644\u0645\u0647\u0644\u0629 (\u062B\u0648\u0627\u0646\u064A)") }),
            /* @__PURE__ */ jsx48(Input, { dir: "ltr", type: "number", placeholder: "20", value: timeoutSec, onChange: (e) => setTimeoutSec(e.target.value), className: "w-full" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs42("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsx48(Label, { className: "text-sm font-medium", children: lbl("User agent", "\u0648\u0643\u064A\u0644 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645") }),
          /* @__PURE__ */ jsx48(Input, { dir: "ltr", placeholder: "Mozilla/5.0 ...", value: userAgent, onChange: (e) => setUserAgent(e.target.value), className: "font-mono text-xs" })
        ] }),
        /* @__PURE__ */ jsxs42("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsx48(Label, { className: "text-sm font-medium", children: lbl("Extract rules (JSON)", "\u0642\u0648\u0627\u0639\u062F \u0627\u0644\u0627\u0633\u062A\u062E\u0631\u0627\u062C (JSON)") }),
          /* @__PURE__ */ jsx48(Textarea, { dir: "ltr", placeholder: '{"title": "h1", "content": ".article-body"}', value: extractTxt, onChange: (e) => setExtractTxt(e.target.value), rows: 4, className: "font-mono text-xs resize-y" })
        ] })
      ] }),
      kind === "sql_insert" && /* @__PURE__ */ jsxs42(Fragment11, { children: [
        /* @__PURE__ */ jsxs42("div", { className: "grid grid-cols-2 gap-2", children: [
          /* @__PURE__ */ jsxs42("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsx48(Label, { className: "text-sm font-medium", children: lbl("Table", "\u0627\u0644\u062C\u062F\u0648\u0644") }),
            /* @__PURE__ */ jsx48(Input, { dir: "ltr", placeholder: "public.raw_envelopes", value: table, onChange: (e) => setTable(e.target.value), className: "font-mono text-sm" })
          ] }),
          /* @__PURE__ */ jsxs42("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsx48(Label, { className: "text-sm font-medium", children: lbl("Rows field", "\u062D\u0642\u0644 \u0627\u0644\u0635\u0641\u0648\u0641") }),
            /* @__PURE__ */ jsx48(Input, { dir: "ltr", placeholder: "$envelopes", value: rowsField, onChange: (e) => setRowsField(e.target.value), className: "font-mono text-sm" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs42("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsx48(Label, { className: "text-sm font-medium", children: lbl("On conflict", "\u0639\u0646\u062F \u0627\u0644\u062A\u0639\u0627\u0631\u0636") }),
          /* @__PURE__ */ jsx48(Input, { dir: "ltr", placeholder: "content_hash", value: onConflict, onChange: (e) => setOnConflict(e.target.value), className: "font-mono text-sm" })
        ] }),
        /* @__PURE__ */ jsxs42("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx48(Switch, { checked: skipOnEmpty, onCheckedChange: setSkipOnEmpty, className: "scale-90" }),
          /* @__PURE__ */ jsx48(Label, { className: "text-sm", children: lbl("Skip on empty", "\u062A\u062E\u0637\u064D\u0651 \u0625\u0630\u0627 \u0641\u0627\u0631\u063A") })
        ] }),
        /* @__PURE__ */ jsxs42("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsx48(Label, { className: "text-sm font-medium", children: lbl("Field map (JSON)", "\u062E\u0631\u064A\u0637\u0629 \u0627\u0644\u062D\u0642\u0648\u0644 (JSON)") }),
          /* @__PURE__ */ jsx48(Textarea, { dir: "ltr", placeholder: '{"content_en": "title", "url": "link"}', value: fieldMapTxt, onChange: (e) => setFieldMapTxt(e.target.value), rows: 5, className: "font-mono text-xs resize-y" })
        ] })
      ] }),
      !knownKind && /* @__PURE__ */ jsx48("div", { className: "rounded-md bg-muted px-3 py-2 text-[11px] text-muted-foreground font-mono whitespace-pre-wrap break-all", children: JSON.stringify(step, (k) => k === "_uid" ? void 0 : step[k], 2) }),
      jsonErr && /* @__PURE__ */ jsxs42("div", { className: "flex items-start gap-2 rounded-md border border-destructive/40 bg-destructive/10 px-3 py-2 text-xs text-destructive", children: [
        /* @__PURE__ */ jsx48(AlertTriangle, { className: "h-3.5 w-3.5 shrink-0 mt-0.5" }),
        /* @__PURE__ */ jsxs42("span", { children: [
          lbl("Invalid JSON", "JSON \u063A\u064A\u0631 \u0635\u0627\u0644\u062D"),
          ": ",
          jsonErr
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs42(DialogFooter, { children: [
      /* @__PURE__ */ jsx48(Button, { variant: "outline", size: "sm", onClick: onClose, children: lbl("Cancel", "\u0625\u0644\u063A\u0627\u0621") }),
      knownKind && /* @__PURE__ */ jsx48(Button, { size: "sm", onClick: handleApply, children: lbl("Apply", "\u062A\u0637\u0628\u064A\u0642") })
    ] })
  ] }) });
};
EditStepDialog.displayName = "EditStepDialog";
var SecretRefNote = ({ isRTL, pluginSlug, secretKey }) => /* @__PURE__ */ jsxs42("div", { className: "flex flex-wrap items-start gap-2 rounded-md border border-amber-200 bg-amber-50 px-3 py-2 dark:border-amber-800 dark:bg-amber-950", children: [
  /* @__PURE__ */ jsx48(Info2, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-600 dark:text-amber-400" }),
  /* @__PURE__ */ jsxs42("div", { className: "flex-1 space-y-1 text-[11px] leading-snug text-amber-700 dark:text-amber-300", children: [
    /* @__PURE__ */ jsx48("p", { children: isRTL ? "\u064A\u064F\u0633\u062A\u062E\u062F\u0645 \u0627\u0644\u0645\u0631\u062C\u0639 \u0627\u0644\u062A\u0627\u0644\u064A \u0641\u064A \u0627\u0644\u0625\u0639\u062F\u0627\u062F \u2014 \u0644\u0627 \u062A\u0644\u0635\u0642 \u0627\u0644\u0631\u0645\u0632 \u0627\u0644\u0633\u0631\u064A \u0647\u0646\u0627 \u0623\u0628\u062F\u0627\u064B:" : "This reference is used in the config \u2014 never paste the actual secret here:" }),
    /* @__PURE__ */ jsx48("code", { className: "rounded bg-amber-100 px-1 py-0.5 font-mono text-[10px] text-amber-800 dark:bg-amber-900 dark:text-amber-200", children: `{{secret:${secretKey}}}` }),
    /* @__PURE__ */ jsxs42("p", { children: [
      isRTL ? "\u0633\u062C\u0651\u0644 \u0627\u0644\u0642\u064A\u0645\u0629 \u0627\u0644\u0641\u0639\u0644\u064A\u0629 \u0641\u064A " : "Store the real value in ",
      /* @__PURE__ */ jsxs42(
        "a",
        {
          href: `../plugins/${pluginSlug}/credentials`,
          className: "inline-flex items-center gap-0.5 underline underline-offset-2 hover:no-underline",
          children: [
            isRTL ? "\u062A\u0628\u0648\u064A\u0628 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0627\u0639\u062A\u0645\u0627\u062F" : "the Credentials tab",
            /* @__PURE__ */ jsx48(ExternalLink2, { className: "h-2.5 w-2.5" })
          ]
        }
      )
    ] })
  ] })
] });
SecretRefNote.displayName = "SecretRefNote";
var EditSourceDialog = ({ open, source, pluginSlug, onClose, onSave, isRTL }) => {
  const sourceType = source?.type ?? "";
  const lbl = (en, ar) => isRTL ? ar : en;
  const [sxLanguage, setSxLanguage] = useState25("ar");
  const [sxSite, setSxSite] = useState25("");
  const [sxCategories, setSxCategories] = useState25("news");
  const [sxTimeRange, setSxTimeRange] = useState25("");
  const [sxMaxPerQuery, setSxMaxPerQuery] = useState25("10");
  const [httpEndpoint, setHttpEndpoint] = useState25("");
  const [httpMethod, setHttpMethod] = useState25("GET");
  const [httpResultPath, setHttpResultPath] = useState25("");
  const [httpHeaders, setHttpHeaders] = useState25("");
  const [httpTimeout, setHttpTimeout] = useState25("");
  const [crUrl, setCrUrl] = useState25("");
  const [crProfileId, setCrProfileId] = useState25("");
  const [crSelectorsTxt, setCrSelectorsTxt] = useState25("");
  const [apiTrackHandle, setApiTrackHandle] = useState25("");
  const [apiLang, setApiLang] = useState25("ar");
  const [apiMaxResults, setApiMaxResults] = useState25("100");
  const [mwSearchId, setMwSearchId] = useState25("");
  const [mwQuery, setMwQuery] = useState25("");
  const [mwPlatform, setMwPlatform] = useState25("");
  const [mwPageSize, setMwPageSize] = useState25("50");
  const [jsonErr, setJsonErr] = useState25(null);
  useEffect14(() => {
    if (!source) return;
    setJsonErr(null);
    const jstr = (v) => v == null ? "" : JSON.stringify(v, null, 2);
    setSxLanguage(source.language === "en" || source.language === "auto" ? source.language : "ar");
    setSxSite(typeof source.site === "string" ? source.site : "");
    setSxCategories(Array.isArray(source.categories) ? source.categories.join(", ") : "news");
    setSxTimeRange(typeof source.time_range === "string" ? source.time_range : "");
    setSxMaxPerQuery(source.max_per_query != null ? String(source.max_per_query) : "10");
    setHttpEndpoint(typeof source.endpoint_template === "string" ? source.endpoint_template : "");
    setHttpMethod(source.method === "POST" ? "POST" : "GET");
    setHttpResultPath(typeof source.result_path === "string" ? source.result_path : "");
    setHttpHeaders(source.headers != null ? jstr(source.headers) : "");
    setHttpTimeout(source.timeout_sec != null ? String(source.timeout_sec) : "");
    setCrUrl(typeof source.url === "string" ? source.url : "");
    setCrProfileId(typeof source.profile_id === "string" ? source.profile_id : "");
    setCrSelectorsTxt(Array.isArray(source.selectors) ? source.selectors.join("\n") : "");
    setApiTrackHandle(typeof source.track_handle === "string" ? source.track_handle : "");
    setApiLang(source.lang === "en" || source.lang === "auto" ? source.lang : "ar");
    setApiMaxResults(source.max_results != null ? String(source.max_results) : "100");
    setMwSearchId(typeof source.search_id === "string" ? source.search_id : "");
    setMwQuery(typeof source.query === "string" ? source.query : "");
    setMwPlatform(typeof source.platform === "string" ? source.platform : "");
    setMwPageSize(source.page_size != null ? String(source.page_size) : "50");
  }, [source]);
  const numOrSkip = (s) => {
    const t2 = s.trim();
    return t2 !== "" && !isNaN(Number(t2)) ? Number(t2) : void 0;
  };
  const handleApply = () => {
    if (!source) return;
    setJsonErr(null);
    let patch = {};
    if (sourceType === "searxng_social") {
      const categories = sxCategories.split(",").map((c) => c.trim()).filter(Boolean);
      patch = {
        language: sxLanguage,
        ...sxSite.trim() ? { site: sxSite.trim() } : {},
        categories: categories.length > 0 ? categories : ["news"],
        ...sxTimeRange ? { time_range: sxTimeRange } : {},
        ...numOrSkip(sxMaxPerQuery) != null ? { max_per_query: numOrSkip(sxMaxPerQuery) } : {}
      };
    } else if (sourceType === "http") {
      const [headers, hErr] = parseJSONField(httpHeaders);
      if (hErr) {
        setJsonErr(`headers: ${hErr}`);
        return;
      }
      patch = {
        endpoint_template: httpEndpoint.trim() || void 0,
        method: httpMethod,
        ...httpResultPath.trim() ? { result_path: httpResultPath.trim() } : {},
        ...headers !== void 0 ? { headers } : {},
        ...numOrSkip(httpTimeout) != null ? { timeout_sec: numOrSkip(httpTimeout) } : {}
      };
    } else if (sourceType === "crawler") {
      const selectors = crSelectorsTxt.split("\n").map((s) => s.trim()).filter(Boolean);
      patch = {
        url: crUrl.trim() || void 0,
        ...crProfileId.trim() ? { profile_id: crProfileId.trim() } : {},
        ...selectors.length > 0 ? { selectors } : {}
      };
    } else if (sourceType === "api") {
      patch = {
        ...apiTrackHandle.trim() ? { track_handle: apiTrackHandle.trim() } : {},
        lang: apiLang,
        ...numOrSkip(apiMaxResults) != null ? { max_results: numOrSkip(apiMaxResults) } : {},
        headers: { Authorization: "{{secret:bearer_token}}" }
      };
    } else if (sourceType === "meltwater") {
      patch = {
        ...mwSearchId.trim() ? { search_id: mwSearchId.trim() } : {},
        ...mwQuery.trim() ? { query: mwQuery.trim() } : {},
        ...mwPlatform.trim() ? { platform: mwPlatform.trim() } : {},
        ...numOrSkip(mwPageSize) != null ? { page_size: numOrSkip(mwPageSize) } : {},
        api_token: "{{secret:api_token}}"
      };
    }
    onSave(patch);
    onClose();
  };
  if (!source) return null;
  const knownType = ["searxng_social", "http", "crawler", "api", "meltwater"].includes(sourceType);
  return /* @__PURE__ */ jsx48(Dialog, { open, onOpenChange: (v) => !v && onClose(), children: /* @__PURE__ */ jsxs42(DialogContent, { className: "max-w-lg max-h-[85vh] overflow-y-auto", dir: isRTL ? "rtl" : "ltr", children: [
    /* @__PURE__ */ jsx48(DialogHeader, { children: /* @__PURE__ */ jsxs42(DialogTitle, { children: [
      lbl("Edit source", "\u062A\u0639\u062F\u064A\u0644 \u0645\u0635\u062F\u0631"),
      " ",
      /* @__PURE__ */ jsx48("span", { className: "font-mono text-sm text-muted-foreground", children: sourceType })
    ] }) }),
    /* @__PURE__ */ jsxs42("div", { className: "space-y-4 py-2", children: [
      sourceType === "searxng_social" && /* @__PURE__ */ jsxs42(Fragment11, { children: [
        /* @__PURE__ */ jsxs42("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsx48(Label, { className: "text-xs font-medium", children: lbl("Language", "\u0627\u0644\u0644\u063A\u0629") }),
          /* @__PURE__ */ jsxs42(Select, { value: sxLanguage, onValueChange: (v) => setSxLanguage(v), children: [
            /* @__PURE__ */ jsx48(SelectTrigger, { className: "w-40 text-sm", children: /* @__PURE__ */ jsx48(SelectValue, {}) }),
            /* @__PURE__ */ jsxs42(SelectContent, { children: [
              /* @__PURE__ */ jsx48(SelectItem, { value: "ar", children: lbl("Arabic (ar)", "\u0627\u0644\u0639\u0631\u0628\u064A\u0629") }),
              /* @__PURE__ */ jsx48(SelectItem, { value: "en", children: lbl("English (en)", "\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A\u0629") }),
              /* @__PURE__ */ jsx48(SelectItem, { value: "auto", children: lbl("Auto", "\u062A\u0644\u0642\u0627\u0626\u064A") })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs42("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsx48(Label, { className: "text-xs font-medium", children: lbl("Site filter (optional)", "\u062A\u0635\u0641\u064A\u0629 \u0628\u0627\u0644\u0645\u0648\u0642\u0639 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)") }),
          /* @__PURE__ */ jsx48(Input, { dir: "ltr", placeholder: "facebook.com", value: sxSite, onChange: (e) => setSxSite(e.target.value), className: "font-mono text-sm" })
        ] }),
        /* @__PURE__ */ jsxs42("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsx48(Label, { className: "text-xs font-medium", children: lbl("Categories (comma-separated)", "\u0627\u0644\u0641\u0626\u0627\u062A (\u0645\u0641\u0635\u0648\u0644\u0629 \u0628\u0641\u0648\u0627\u0635\u0644)") }),
          /* @__PURE__ */ jsx48(Input, { dir: "ltr", placeholder: "news, social media", value: sxCategories, onChange: (e) => setSxCategories(e.target.value), className: "font-mono text-sm" })
        ] }),
        /* @__PURE__ */ jsxs42("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsx48(Label, { className: "text-xs font-medium", children: lbl("Results per query", "\u0646\u062A\u0627\u0626\u062C \u0644\u0643\u0644 \u0627\u0633\u062A\u0639\u0644\u0627\u0645") }),
          /* @__PURE__ */ jsx48(Input, { dir: "ltr", type: "number", placeholder: "10", value: sxMaxPerQuery, onChange: (e) => setSxMaxPerQuery(e.target.value), className: "w-28 text-sm" })
        ] })
      ] }),
      sourceType === "http" && /* @__PURE__ */ jsxs42(Fragment11, { children: [
        /* @__PURE__ */ jsxs42("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsx48(Label, { className: "text-xs font-medium", children: lbl("Endpoint URL template", "\u0642\u0627\u0644\u0628 \u0631\u0627\u0628\u0637 \u0627\u0644\u0646\u0642\u0637\u0629") }),
          /* @__PURE__ */ jsx48(Input, { dir: "ltr", placeholder: "https://api.example.com/{query}", value: httpEndpoint, onChange: (e) => setHttpEndpoint(e.target.value), className: "font-mono text-sm" })
        ] }),
        /* @__PURE__ */ jsxs42("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsx48(Label, { className: "text-xs font-medium", children: lbl("Headers (JSON)", "\u0627\u0644\u062A\u0631\u0648\u064A\u0633\u0627\u062A (JSON)") }),
          /* @__PURE__ */ jsxs42("div", { className: "flex items-start gap-1.5 rounded-md border border-amber-200 bg-amber-50 px-2.5 py-1.5 dark:border-amber-800 dark:bg-amber-950", children: [
            /* @__PURE__ */ jsx48(Info2, { className: "mt-0.5 h-3 w-3 shrink-0 text-amber-600 dark:text-amber-400" }),
            /* @__PURE__ */ jsx48("p", { className: "text-[10px] leading-snug text-amber-700 dark:text-amber-300", children: lbl("Use {{secret:KEY}} for tokens. Never paste plaintext.", "\u0627\u0633\u062A\u062E\u062F\u0645 {{secret:KEY}} \u0644\u0644\u0631\u0645\u0648\u0632. \u0644\u0627 \u062A\u0644\u0635\u0642 \u0627\u0644\u0631\u0645\u0632 \u0647\u0646\u0627.") })
          ] }),
          /* @__PURE__ */ jsx48(Textarea, { dir: "ltr", placeholder: '{\n  "Authorization": "Bearer {{secret:api_token}}"\n}', value: httpHeaders, onChange: (e) => setHttpHeaders(e.target.value), rows: 4, className: "font-mono text-xs resize-y" })
        ] })
      ] }),
      sourceType === "crawler" && /* @__PURE__ */ jsxs42(Fragment11, { children: [
        /* @__PURE__ */ jsxs42("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsx48(Label, { className: "text-xs font-medium", children: lbl("Start URL", "\u0631\u0627\u0628\u0637 \u0627\u0644\u0628\u062F\u0627\u064A\u0629") }),
          /* @__PURE__ */ jsx48(Input, { dir: "ltr", placeholder: "https://example.com/articles/", value: crUrl, onChange: (e) => setCrUrl(e.target.value), className: "font-mono text-sm" })
        ] }),
        /* @__PURE__ */ jsxs42("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsx48(Label, { className: "text-xs font-medium", children: lbl("Profile ID (optional)", "\u0645\u0639\u0631\u0651\u0641 \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0634\u062E\u0635\u064A (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)") }),
          /* @__PURE__ */ jsx48(Input, { dir: "ltr", placeholder: "profile-abc123", value: crProfileId, onChange: (e) => setCrProfileId(e.target.value), className: "font-mono text-sm" })
        ] }),
        /* @__PURE__ */ jsxs42("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsx48(Label, { className: "text-xs font-medium", children: lbl("CSS selectors (one per line)", "\u0645\u062D\u062F\u0651\u062F\u0627\u062A CSS (\u0633\u0637\u0631 \u0644\u0643\u0644 \u0645\u062D\u062F\u0651\u062F)") }),
          /* @__PURE__ */ jsx48(Textarea, { dir: "ltr", placeholder: ".article-body", value: crSelectorsTxt, onChange: (e) => setCrSelectorsTxt(e.target.value), rows: 3, className: "font-mono text-sm resize-y" })
        ] })
      ] }),
      sourceType === "api" && /* @__PURE__ */ jsxs42(Fragment11, { children: [
        /* @__PURE__ */ jsx48(SecretRefNote, { isRTL, pluginSlug, secretKey: "bearer_token" }),
        /* @__PURE__ */ jsx48(Separator, {}),
        /* @__PURE__ */ jsxs42("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsx48(Label, { className: "text-xs font-medium", children: lbl("Track handle", "\u0627\u0644\u0645\u0642\u0628\u0636 \u0627\u0644\u0645\u062A\u062A\u0628\u064E\u0651\u0639") }),
          /* @__PURE__ */ jsx48(Input, { dir: "ltr", placeholder: "BBCWorld", value: apiTrackHandle, onChange: (e) => setApiTrackHandle(e.target.value), className: "font-mono text-sm" })
        ] }),
        /* @__PURE__ */ jsxs42("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsx48(Label, { className: "text-xs font-medium", children: lbl("Max results per run", "\u0623\u0642\u0635\u0649 \u0639\u062F\u062F \u0646\u062A\u0627\u0626\u062C") }),
          /* @__PURE__ */ jsx48(Input, { dir: "ltr", type: "number", placeholder: "100", value: apiMaxResults, onChange: (e) => setApiMaxResults(e.target.value), className: "w-28 text-sm" })
        ] })
      ] }),
      sourceType === "meltwater" && /* @__PURE__ */ jsxs42(Fragment11, { children: [
        /* @__PURE__ */ jsx48(SecretRefNote, { isRTL, pluginSlug, secretKey: "api_token" }),
        /* @__PURE__ */ jsx48(Separator, {}),
        /* @__PURE__ */ jsxs42("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsx48(Label, { className: "text-xs font-medium", children: lbl("Search ID (saved search)", "\u0645\u0639\u0631\u0651\u0641 \u0627\u0644\u0628\u062D\u062B") }),
          /* @__PURE__ */ jsx48(Input, { dir: "ltr", placeholder: "search-abc123", value: mwSearchId, onChange: (e) => setMwSearchId(e.target.value), className: "font-mono text-sm" })
        ] }),
        /* @__PURE__ */ jsxs42("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsx48(Label, { className: "text-xs font-medium", children: lbl("Query (ad-hoc)", "\u0627\u0633\u062A\u0639\u0644\u0627\u0645 \u0645\u0628\u0627\u0634\u0631") }),
          /* @__PURE__ */ jsx48(Input, { dir: "ltr", placeholder: 'site:twitter.com "\u062E\u0637\u0627\u0628 \u0633\u064A\u0627\u0633\u064A"', value: mwQuery, onChange: (e) => setMwQuery(e.target.value), className: "font-mono text-sm" })
        ] }),
        /* @__PURE__ */ jsxs42("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsx48(Label, { className: "text-xs font-medium", children: lbl("Page size", "\u062D\u062C\u0645 \u0627\u0644\u0635\u0641\u062D\u0629") }),
          /* @__PURE__ */ jsx48(Input, { dir: "ltr", type: "number", placeholder: "50", value: mwPageSize, onChange: (e) => setMwPageSize(e.target.value), className: "w-28 text-sm" })
        ] })
      ] }),
      !knownType && /* @__PURE__ */ jsx48("div", { className: "rounded-md bg-muted px-3 py-2 text-[11px] text-muted-foreground font-mono whitespace-pre-wrap break-all", children: JSON.stringify(source, (k) => k === "_uid" ? void 0 : source[k], 2) }),
      jsonErr && /* @__PURE__ */ jsxs42("div", { className: "flex items-start gap-2 rounded-md border border-destructive/40 bg-destructive/10 px-3 py-2 text-xs text-destructive", children: [
        /* @__PURE__ */ jsx48(AlertTriangle, { className: "h-3.5 w-3.5 shrink-0 mt-0.5" }),
        /* @__PURE__ */ jsxs42("span", { children: [
          lbl("Invalid JSON", "JSON \u063A\u064A\u0631 \u0635\u0627\u0644\u062D"),
          ": ",
          jsonErr
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs42(DialogFooter, { children: [
      /* @__PURE__ */ jsx48(Button, { variant: "outline", size: "sm", onClick: onClose, children: lbl("Cancel", "\u0625\u0644\u063A\u0627\u0621") }),
      knownType && /* @__PURE__ */ jsx48(Button, { size: "sm", onClick: handleApply, children: lbl("Apply", "\u062A\u0637\u0628\u064A\u0642") })
    ] })
  ] }) });
};
EditSourceDialog.displayName = "EditSourceDialog";
var WorkflowEditor = ({
  workflowSteps,
  workflowSources,
  pluginSlug,
  language,
  palette,
  onSave
}) => {
  const isRTL = language === "ar";
  const initialSteps = useMemo8(
    () => assignUids(workflowSteps),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  const initialSources = useMemo8(
    () => workflowSources.map((s, i) => ({ ...s, _uid: `source-${i}` })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  const [uidSeq, setUidSeq] = useState25(1e3);
  const [editSteps, setEditSteps] = useState25(initialSteps);
  const [editSources, setEditSources] = useState25(initialSources);
  const [addDialogOpen, setAddDialogOpen] = useState25(false);
  const [isSaving, setIsSaving] = useState25(false);
  const [dirty, setDirty] = useState25(false);
  const [editingStep, setEditingStep] = useState25(null);
  const [editStepDialogOpen, setEditStepDialogOpen] = useState25(false);
  const [editingSource, setEditingSource] = useState25(null);
  const [editSourceDialogOpen, setEditSourceDialogOpen] = useState25(false);
  const markDirty = () => setDirty(true);
  const sensors = useSensors2(
    useSensor2(PointerSensor2, { activationConstraint: { distance: 5 } }),
    useSensor2(KeyboardSensor2, { coordinateGetter: sortableKeyboardCoordinates2 })
  );
  const handleStepDragEnd = useCallback8((event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    setEditSteps((prev) => {
      const oldIdx = prev.findIndex((s) => String(s._uid) === active.id);
      const newIdx = prev.findIndex((s) => String(s._uid) === over.id);
      if (oldIdx === -1 || newIdx === -1) return prev;
      return arrayMove(prev, oldIdx, newIdx);
    });
    markDirty();
  }, []);
  const handleSourceDragEnd = useCallback8((event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    setEditSources((prev) => {
      const oldIdx = prev.findIndex((s) => String(s._uid) === active.id);
      const newIdx = prev.findIndex((s) => String(s._uid) === over.id);
      if (oldIdx === -1 || newIdx === -1) return prev;
      return arrayMove(prev, oldIdx, newIdx);
    });
    markDirty();
  }, []);
  const handleToggleStep = useCallback8((id) => {
    setEditSteps((prev) => prev.map((s) => String(s._uid) === id ? { ...s, disabled: !s.disabled } : s));
    markDirty();
  }, []);
  const handleDeleteStep = useCallback8((id) => {
    setEditSteps((prev) => deleteByUid(prev, id));
    markDirty();
  }, []);
  const handleEditStep = useCallback8((step) => {
    setEditingStep(step);
    setEditStepDialogOpen(true);
  }, []);
  const handleStepOptionsSave = useCallback8(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (next) => {
      setEditSteps((prev) => updateByUid(prev, String(next._uid), next));
      markDirty();
    },
    []
  );
  const handleToggleSource = useCallback8((id) => {
    setEditSources((prev) => prev.map((s) => String(s._uid) === id ? { ...s, enabled: s.enabled === false } : s));
    markDirty();
  }, []);
  const handleDeleteSource = useCallback8((id) => {
    setEditSources((prev) => prev.filter((s) => String(s._uid) !== id));
    markDirty();
  }, []);
  const handleOpenEditSource = useCallback8((id) => {
    setEditSources((prev) => {
      const source = prev.find((s) => String(s._uid) === id);
      if (source) {
        setEditingSource(source);
        setEditSourceDialogOpen(true);
      }
      return prev;
    });
  }, []);
  const handleEditSourceSave = useCallback8(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (patch) => {
      if (!editingSource) return;
      setEditSources((prev) => prev.map((s) => String(s._uid) === String(editingSource._uid) ? { ...s, ...patch } : s));
      markDirty();
    },
    [editingSource]
  );
  const handleAddStep = useCallback8(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (step) => {
      if (hasProtoPollutionKey(step)) {
        toast2.error(isRTL ? "\u0625\u062F\u062E\u0627\u0644 \u063A\u064A\u0631 \u0622\u0645\u0646" : "Unsafe input blocked");
        return;
      }
      setUidSeq((n) => n + 1);
      setEditSteps((prev) => [...prev, { ...step, _uid: `step-new-${uidSeq}` }]);
      markDirty();
    },
    [isRTL, uidSeq]
  );
  const handleAddSource = useCallback8(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (src) => {
      if (hasProtoPollutionKey(src)) {
        toast2.error(isRTL ? "\u0625\u062F\u062E\u0627\u0644 \u063A\u064A\u0631 \u0622\u0645\u0646" : "Unsafe input blocked");
        return;
      }
      setUidSeq((n) => n + 1);
      setEditSources((prev) => [...prev, { ...src, _uid: `source-new-${uidSeq}` }]);
      markDirty();
    },
    [isRTL, uidSeq]
  );
  const handleReset = useCallback8(() => {
    setEditSteps(initialSteps);
    setEditSources(initialSources);
    setDirty(false);
  }, [initialSteps, initialSources]);
  const handleSave = useCallback8(async () => {
    for (const s of editSteps) {
      if (hasProtoPollutionKey(s)) {
        toast2.error(isRTL ? "\u062E\u0637\u0648\u0629 \u062A\u062D\u062A\u0648\u064A \u0639\u0644\u0649 \u0645\u0641\u0627\u062A\u064A\u062D \u063A\u064A\u0631 \u0645\u0633\u0645\u0648\u062D \u0628\u0647\u0627" : "Step contains blocked keys");
        return;
      }
    }
    for (const s of editSources) {
      if (hasProtoPollutionKey(s)) {
        toast2.error(isRTL ? "\u0645\u0635\u062F\u0631 \u064A\u062D\u062A\u0648\u064A \u0639\u0644\u0649 \u0645\u0641\u0627\u062A\u064A\u062D \u063A\u064A\u0631 \u0645\u0633\u0645\u0648\u062D \u0628\u0647\u0627" : "Source contains blocked keys");
        return;
      }
    }
    const cleanSteps = stripUidsDeep(editSteps);
    const cleanSources = editSources.map((s) => {
      const { _uid, ...rest } = s;
      return { ...rest, enabled: typeof rest.enabled === "boolean" ? rest.enabled : true, type: rest.type ?? "searxng_social" };
    });
    setIsSaving(true);
    try {
      await onSave(cleanSteps, cleanSources);
      toast2.success(isRTL ? "\u062A\u0645 \u062D\u0641\u0638 \u0633\u064A\u0631 \u0627\u0644\u0639\u0645\u0644" : "Workflow saved");
      setDirty(false);
    } catch (err) {
      const msg = err instanceof Error ? err.message : null;
      toast2.error(msg ? isRTL ? `\u0641\u0634\u0644 \u0627\u0644\u062D\u0641\u0638: ${msg}` : `Save failed: ${msg}` : isRTL ? "\u0641\u0634\u0644 \u0627\u0644\u062D\u0641\u0638" : "Save failed");
    } finally {
      setIsSaving(false);
    }
  }, [editSteps, editSources, onSave, isRTL]);
  const stepLabel = (kind) => STEP_LABELS[kind] ? isRTL ? STEP_LABELS[kind].ar : STEP_LABELS[kind].en : kind;
  return /* @__PURE__ */ jsxs42("div", { className: "space-y-5", dir: isRTL ? "rtl" : "ltr", children: [
    /* @__PURE__ */ jsxs42("div", { className: "flex flex-wrap items-center gap-2", children: [
      /* @__PURE__ */ jsxs42(Button, { size: "sm", onClick: handleSave, disabled: isSaving || !dirty, children: [
        /* @__PURE__ */ jsx48(Save, { className: "h-3.5 w-3.5 me-1.5" }),
        isRTL ? "\u062D\u0641\u0638" : "Save"
      ] }),
      /* @__PURE__ */ jsxs42(Button, { size: "sm", variant: "outline", onClick: handleReset, disabled: !dirty, children: [
        /* @__PURE__ */ jsx48(RotateCcw2, { className: "h-3.5 w-3.5 me-1.5" }),
        isRTL ? "\u0625\u0639\u0627\u062F\u0629 \u0636\u0628\u0637" : "Reset"
      ] }),
      /* @__PURE__ */ jsxs42(Button, { size: "sm", variant: "outline", onClick: () => setAddDialogOpen(true), className: "ms-auto", children: [
        /* @__PURE__ */ jsx48(Plus, { className: "h-3.5 w-3.5 me-1.5" }),
        isRTL ? "\u0625\u0636\u0627\u0641\u0629" : "Add"
      ] })
    ] }),
    /* @__PURE__ */ jsxs42("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxs42("h3", { className: "text-sm font-semibold text-muted-foreground", children: [
        isRTL ? "\u0627\u0644\u062E\u0637\u0648\u0627\u062A" : "Steps",
        " ",
        /* @__PURE__ */ jsxs42("span", { className: "text-xs font-normal", children: [
          "(",
          editSteps.length,
          ") \u2014 ",
          isRTL ? "\u0627\u0633\u062D\u0628 \u0644\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u062A\u0631\u062A\u064A\u0628" : "drag to reorder"
        ] })
      ] }),
      editSteps.length === 0 ? /* @__PURE__ */ jsx48("div", { className: "rounded-lg border border-dashed bg-muted/20 px-4 py-6 text-center text-sm text-muted-foreground", children: isRTL ? "\u0644\u0627 \u062A\u0648\u062C\u062F \u062E\u0637\u0648\u0627\u062A \u2014 \u0623\u0636\u0641 \u062E\u0637\u0648\u0629" : "No steps \u2014 add one" }) : /* @__PURE__ */ jsx48("div", { className: "rounded-lg border border-border bg-muted/10 p-2", children: /* @__PURE__ */ jsx48(
        NestedStepsEditor,
        {
          steps: editSteps,
          language: isRTL ? "ar" : "en",
          onChange: (next) => {
            setEditSteps(next);
            markDirty();
          },
          onEditStep: handleEditStep,
          onDeleteStep: handleDeleteStep
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs42("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxs42("h3", { className: "text-sm font-semibold text-muted-foreground", children: [
        isRTL ? "\u0627\u0644\u0645\u0635\u0627\u062F\u0631" : "Sources",
        " ",
        /* @__PURE__ */ jsxs42("span", { className: "text-xs font-normal", children: [
          "(",
          editSources.length,
          ")"
        ] })
      ] }),
      editSources.length === 0 ? /* @__PURE__ */ jsx48("div", { className: "rounded-lg border border-dashed bg-muted/20 px-4 py-6 text-center text-sm text-muted-foreground", children: isRTL ? "\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0635\u0627\u062F\u0631" : "No sources" }) : /* @__PURE__ */ jsx48(DndContext2, { sensors, collisionDetection: closestCenter2, onDragEnd: handleSourceDragEnd, children: /* @__PURE__ */ jsx48(SortableContext2, { items: editSources.map((s) => String(s._uid)), strategy: verticalListSortingStrategy2, children: /* @__PURE__ */ jsx48("div", { className: "overflow-hidden rounded-lg border border-border divide-y divide-border", children: editSources.map((s) => {
        const subParts = [];
        if (s.site) subParts.push(`site:${s.site}`);
        if (s.endpoint_template) subParts.push(s.endpoint_template);
        if (s.url) subParts.push(s.url);
        if (s.track_handle) subParts.push(`@${s.track_handle}`);
        if (s.search_id) subParts.push(`search:${s.search_id}`);
        else if (s.query) subParts.push(s.query.slice(0, 40));
        subParts.push(isRTL ? "\u064A\u0633\u062A\u062E\u062F\u0645 \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0643\u0644\u0645\u0627\u062A \u0627\u0644\u0645\u0641\u062A\u0627\u062D\u064A\u0629" : "uses keyword list");
        const sub = subParts.join(" \xB7 ");
        return /* @__PURE__ */ jsx48(
          SortableRow,
          {
            id: String(s._uid),
            icon: Globe3,
            title: s.type ?? "source",
            subtitle: sub,
            disabled: s.enabled === false,
            checked: s.enabled !== false,
            isRTL,
            onToggle: () => handleToggleSource(String(s._uid)),
            onEdit: () => handleOpenEditSource(String(s._uid)),
            onDelete: () => handleDeleteSource(String(s._uid))
          },
          String(s._uid)
        );
      }) }) }) })
    ] }),
    /* @__PURE__ */ jsxs42("div", { className: "flex items-start gap-2 text-[11px] text-amber-600 dark:text-amber-400", children: [
      /* @__PURE__ */ jsx48(AlertTriangle, { className: "h-3.5 w-3.5 shrink-0 mt-0.5" }),
      /* @__PURE__ */ jsx48("span", { children: isRTL ? "\u0645\u0644\u0627\u062D\u0638\u0629: \u062A\u0639\u0637\u064A\u0644 \u0627\u0644\u0645\u0635\u062F\u0631 \u064A\u064F\u062D\u062A\u0631\u0645 \u0645\u0646 \u0627\u0644\u0645\u064F\u0646\u0641\u0650\u0651\u0630. \u062A\u0639\u0637\u064A\u0644 \u0627\u0644\u062E\u0637\u0648\u0629 \u062A\u062C\u0645\u064A\u0644\u064A \u062D\u0627\u0644\u064A\u0627\u064B." : "Note: disabling a SOURCE is honoured by the executor. Disabling a STEP is currently cosmetic." })
    ] }),
    /* @__PURE__ */ jsx48(
      AddItemDialog,
      {
        open: addDialogOpen,
        onClose: () => setAddDialogOpen(false),
        onAddStep: handleAddStep,
        onAddSource: handleAddSource,
        palette,
        isRTL
      }
    ),
    /* @__PURE__ */ jsx48(
      StepOptionsDialog,
      {
        open: editStepDialogOpen,
        step: editingStep,
        language: isRTL ? "ar" : "en",
        onClose: () => setEditStepDialogOpen(false),
        onSave: handleStepOptionsSave
      }
    ),
    /* @__PURE__ */ jsx48(
      EditSourceDialog,
      {
        open: editSourceDialogOpen,
        source: editingSource,
        pluginSlug,
        onClose: () => setEditSourceDialogOpen(false),
        onSave: handleEditSourceSave,
        isRTL
      }
    )
  ] });
};
WorkflowEditor.displayName = "WorkflowEditor";

// src/components/plugin-detail/PluginAppearanceSection.tsx
import { useState as useState26, useEffect as useEffect15 } from "react";
import { Fragment as Fragment12, jsx as jsx49, jsxs as jsxs43 } from "react/jsx-runtime";
var PLACEMENT_OPTIONS = [
  {
    value: "sidebar",
    label_en: "Sidebar",
    label_ar: "\u0627\u0644\u0634\u0631\u064A\u0637 \u0627\u0644\u062C\u0627\u0646\u0628\u064A",
    desc_en: "Appears as a navigation item in the main sidebar.",
    desc_ar: "\u064A\u0638\u0647\u0631 \u0643\u0639\u0646\u0635\u0631 \u062A\u0646\u0642\u0644 \u0641\u064A \u0627\u0644\u0634\u0631\u064A\u0637 \u0627\u0644\u062C\u0627\u0646\u0628\u064A \u0627\u0644\u0631\u0626\u064A\u0633\u064A.",
    capabilityOnly: false
  },
  {
    value: "header",
    label_en: "Header",
    label_ar: "\u0627\u0644\u0631\u0623\u0633",
    desc_en: "Appears in the top header bar, next to notifications.",
    desc_ar: "\u064A\u0638\u0647\u0631 \u0641\u064A \u0634\u0631\u064A\u0637 \u0627\u0644\u0631\u0623\u0633 \u0627\u0644\u0639\u0644\u0648\u064A \u0628\u062C\u0627\u0646\u0628 \u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062A.",
    capabilityOnly: false
  },
  {
    value: "sideover",
    label_en: "Sideover panel",
    label_ar: "\u0644\u0648\u062D\u0629 \u062C\u0627\u0646\u0628\u064A\u0629",
    desc_en: "Opens as a slide-over sheet from a global icon button. Capability only.",
    desc_ar: "\u064A\u0641\u062A\u062D \u0643\u0644\u0648\u062D\u0629 \u0645\u0646\u0632\u0644\u0642\u0629 \u0645\u0646 \u0632\u0631 \u0627\u0644\u0623\u064A\u0642\u0648\u0646\u0629 \u0627\u0644\u0639\u0627\u0645\u0629. \u0644\u0644\u0642\u062F\u0631\u0627\u062A \u0641\u0642\u0637.",
    capabilityOnly: true
  },
  {
    value: "fixed",
    label_en: "Fixed overlay",
    label_ar: "\u062A\u0631\u0627\u0643\u0628 \u062B\u0627\u0628\u062A",
    desc_en: "Mounts as a floating widget on every page (copilot-style). Capability only.",
    desc_ar: "\u064A\u064F\u062B\u0628\u064E\u0651\u062A \u0643\u0623\u062F\u0627\u0629 \u0639\u0627\u0626\u0645\u0629 \u0641\u064A \u0643\u0644 \u0635\u0641\u062D\u0629 (\u0646\u0645\u0637 \u0627\u0644\u0645\u0633\u0627\u0639\u062F). \u0644\u0644\u0642\u062F\u0631\u0627\u062A \u0641\u0642\u0637.",
    capabilityOnly: true
  },
  {
    value: "hidden",
    label_en: "Hidden",
    label_ar: "\u0645\u062E\u0641\u064A",
    desc_en: "Not rendered anywhere in the app shell.",
    desc_ar: "\u0644\u0627 \u064A\u0638\u0647\u0631 \u0641\u064A \u0623\u064A \u0645\u0643\u0627\u0646 \u0645\u0646 \u0648\u0627\u062C\u0647\u0629 \u0627\u0644\u062A\u0637\u0628\u064A\u0642.",
    capabilityOnly: false
  }
];
var canBeDefaultPage = (mode) => mode === "sidebar" || mode === "header";
var PluginAppearanceSection = ({
  appearance,
  onSave,
  isPending = false,
  isError = false,
  errorMessage,
  language
}) => {
  const isRTL = language === "ar";
  const isCapability = appearance.plugin_type === "capability";
  const [mode, setMode] = useState26(appearance.appearance_mode);
  const [order, setOrder] = useState26(appearance.nav_order);
  const [isDefaultPage, setIsDefaultPage] = useState26(appearance.is_default_page ?? false);
  const [dirty, setDirty] = useState26(false);
  useEffect15(() => {
    setMode(appearance.appearance_mode);
    setOrder(appearance.nav_order);
    setIsDefaultPage(appearance.is_default_page ?? false);
    setDirty(false);
  }, [appearance]);
  const handleModeChange = (value) => {
    const next = value;
    setMode(next);
    if (!canBeDefaultPage(next)) setIsDefaultPage(false);
    setDirty(true);
  };
  const handleOrderChange = (e) => {
    const parsed = parseInt(e.target.value, 10);
    setOrder(Number.isNaN(parsed) ? 0 : parsed);
    setDirty(true);
  };
  const handleDefaultPageChange = (checked) => {
    setIsDefaultPage(checked);
    setDirty(true);
  };
  const handleSave = () => {
    const payload = {};
    if (mode !== appearance.appearance_mode) payload.appearance_mode = mode;
    if (order !== appearance.nav_order) payload.nav_order = order;
    if (isCapability && isDefaultPage !== (appearance.is_default_page ?? false)) {
      payload.is_default_page = isDefaultPage;
    }
    if (Object.keys(payload).length === 0) {
      setDirty(false);
      return;
    }
    onSave(payload);
  };
  return /* @__PURE__ */ jsx49(TooltipProvider, { children: /* @__PURE__ */ jsxs43(Card, { className: "mt-4", children: [
    /* @__PURE__ */ jsx49(CardHeader, { children: /* @__PURE__ */ jsx49(CardTitle, { className: "text-base font-semibold", children: isRTL ? "\u0627\u0644\u0645\u0638\u0647\u0631 \u0648\u0627\u0644\u062A\u0648\u0636\u0639" : "Appearance & Placement" }) }),
    /* @__PURE__ */ jsxs43(CardContent, { className: "space-y-8", children: [
      /* @__PURE__ */ jsxs43("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsx49("p", { className: "text-sm font-medium text-foreground", children: isRTL ? "\u0627\u0644\u062A\u0648\u0636\u0639" : "Placement" }),
        /* @__PURE__ */ jsx49(
          RadioGroup,
          {
            value: mode,
            onValueChange: handleModeChange,
            className: "space-y-2",
            dir: isRTL ? "rtl" : "ltr",
            children: PLACEMENT_OPTIONS.map((opt) => {
              const disabled = opt.capabilityOnly && !isCapability;
              const label = isRTL ? opt.label_ar : opt.label_en;
              const desc = isRTL ? opt.desc_ar : opt.desc_en;
              return /* @__PURE__ */ jsx49("div", { className: "flex items-start gap-3", children: disabled ? /* @__PURE__ */ jsxs43(Tooltip, { children: [
                /* @__PURE__ */ jsx49(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsxs43("span", { className: "inline-flex items-start gap-3 opacity-40 cursor-not-allowed", children: [
                  /* @__PURE__ */ jsx49(RadioGroupItem, { value: opt.value, id: `placement-${opt.value}`, disabled: true, className: "mt-0.5 shrink-0" }),
                  /* @__PURE__ */ jsxs43("div", { className: "space-y-0.5", children: [
                    /* @__PURE__ */ jsx49(Label, { htmlFor: `placement-${opt.value}`, className: "text-sm font-medium cursor-not-allowed", children: label }),
                    /* @__PURE__ */ jsx49("p", { className: "text-xs text-muted-foreground", children: desc })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsx49(TooltipContent, { side: "right", dir: isRTL ? "rtl" : "ltr", children: isRTL ? "\u0645\u062A\u0627\u062D \u0641\u0642\u0637 \u0644\u0646\u0648\u0639 \u0627\u0644\u0642\u062F\u0631\u0627\u062A" : "Available for capability plugins only" })
              ] }) : /* @__PURE__ */ jsxs43(Fragment12, { children: [
                /* @__PURE__ */ jsx49(RadioGroupItem, { value: opt.value, id: `placement-${opt.value}`, className: "mt-0.5 shrink-0" }),
                /* @__PURE__ */ jsxs43("div", { className: "space-y-0.5", children: [
                  /* @__PURE__ */ jsx49(Label, { htmlFor: `placement-${opt.value}`, className: "text-sm font-medium cursor-pointer", children: label }),
                  /* @__PURE__ */ jsx49("p", { className: "text-xs text-muted-foreground", children: desc })
                ] })
              ] }) }, opt.value);
            })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs43("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxs43(Tooltip, { children: [
          /* @__PURE__ */ jsx49(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx49(Label, { htmlFor: "nav-order", className: "text-sm font-medium cursor-help", children: isRTL ? "\u0627\u0644\u062A\u0631\u062A\u064A\u0628" : "Order" }) }),
          /* @__PURE__ */ jsx49(TooltipContent, { side: "right", dir: isRTL ? "rtl" : "ltr", className: "max-w-xs", children: isRTL ? "\u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u0623\u0635\u063A\u0631 \u062A\u0638\u0647\u0631 \u0623\u0648\u0644\u0627\u064B." : "Lower numbers appear first." })
        ] }),
        /* @__PURE__ */ jsx49(
          Input,
          {
            id: "nav-order",
            type: "number",
            value: order,
            onChange: handleOrderChange,
            min: 0,
            className: "w-28",
            dir: "ltr"
          }
        )
      ] }),
      isCapability && /* @__PURE__ */ jsxs43("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ jsxs43(Tooltip, { children: [
          /* @__PURE__ */ jsx49(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx49(
            Switch,
            {
              id: "default-page",
              checked: isDefaultPage,
              onCheckedChange: handleDefaultPageChange,
              disabled: !canBeDefaultPage(mode),
              "aria-describedby": "default-page-desc"
            }
          ) }),
          !canBeDefaultPage(mode) && /* @__PURE__ */ jsx49(TooltipContent, { side: "right", dir: isRTL ? "rtl" : "ltr", className: "max-w-xs", children: isRTL ? "\u0644\u0627 \u064A\u0645\u0643\u0646 \u062A\u0639\u064A\u064A\u0646 \u0635\u0641\u062D\u0629 \u0627\u0641\u062A\u0631\u0627\u0636\u064A\u0629 \u0639\u0646\u062F\u0645\u0627 \u064A\u0643\u0648\u0646 \u0627\u0644\u0648\u0636\u0639 \u0645\u062E\u0641\u064A\u0627\u064B \u0623\u0648 \u0644\u0648\u062D\u0629 \u062C\u0627\u0646\u0628\u064A\u0629 \u0623\u0648 \u062A\u0631\u0627\u0643\u0628\u0627\u064B \u062B\u0627\u0628\u062A\u0627\u064B." : "Cannot set as default page when mode is hidden, sideover, or fixed." })
        ] }),
        /* @__PURE__ */ jsxs43("div", { className: "space-y-0.5", children: [
          /* @__PURE__ */ jsx49(
            Label,
            {
              htmlFor: "default-page",
              className: cn(
                "text-sm font-medium",
                !canBeDefaultPage(mode) && "opacity-40 cursor-not-allowed"
              ),
              children: isRTL ? "\u062A\u0639\u064A\u064A\u0646 \u0643\u0635\u0641\u062D\u0629 \u0627\u0644\u0648\u0635\u0648\u0644 \u0627\u0644\u0627\u0641\u062A\u0631\u0627\u0636\u064A\u0629" : "Set as default landing page"
            }
          ),
          /* @__PURE__ */ jsx49("p", { id: "default-page-desc", className: "text-xs text-muted-foreground", children: isRTL ? "\u064A\u0648\u062C\u0651\u0647 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646 \u0625\u0644\u0649 \u0647\u0630\u0647 \u0627\u0644\u0642\u062F\u0631\u0629 \u0639\u0646\u062F \u0641\u062A\u062D \u0627\u0644\u062A\u0637\u0628\u064A\u0642." : "Redirects users to this capability on app open." })
        ] })
      ] }),
      isError && /* @__PURE__ */ jsx49("p", { className: "text-sm text-destructive", role: "alert", children: isRTL ? `\u0641\u0634\u0644 \u0627\u0644\u062D\u0641\u0638: ${errorMessage ?? "\u062E\u0637\u0623 \u063A\u064A\u0631 \u0645\u0639\u0631\u0648\u0641"}` : `Save failed: ${errorMessage ?? "Unknown error"}` }),
      /* @__PURE__ */ jsx49("div", { className: cn("flex", isRTL ? "justify-start" : "justify-end"), children: /* @__PURE__ */ jsx49(Button, { onClick: handleSave, disabled: !dirty || isPending, size: "sm", children: isPending ? isRTL ? "\u062C\u0627\u0631\u064D \u0627\u0644\u062D\u0641\u0638\u2026" : "Saving\u2026" : isRTL ? "\u062D\u0641\u0638 \u0627\u0644\u062A\u063A\u064A\u064A\u0631\u0627\u062A" : "Save changes" }) })
    ] })
  ] }) });
};
PluginAppearanceSection.displayName = "PluginAppearanceSection";

// src/components/plugin-detail/TestRunPanel.tsx
import { useState as useState27, useRef as useRef10, useCallback as useCallback9 } from "react";
import {
  Play,
  Square,
  CheckCircle2,
  XCircle,
  MinusCircle,
  Loader2 as Loader27,
  ExternalLink as ExternalLink3,
  ChevronDown as ChevronDown6,
  ChevronUp as ChevronUp3,
  FileText
} from "lucide-react";
import { Fragment as Fragment13, jsx as jsx50, jsxs as jsxs44 } from "react/jsx-runtime";
var StepRow2 = ({ step, isRTL }) => {
  const Icon = step.status === "ok" ? CheckCircle2 : step.status === "error" ? XCircle : step.status === "skipped" ? MinusCircle : Loader27;
  const iconClass = cn(
    "h-4 w-4 shrink-0",
    step.status === "ok" && "text-emerald-500",
    step.status === "error" && "text-destructive",
    step.status === "skipped" && "text-muted-foreground",
    step.status !== "ok" && step.status !== "error" && step.status !== "skipped" && "animate-spin text-muted-foreground"
  );
  return /* @__PURE__ */ jsxs44("div", { className: "flex items-start gap-3 py-2 text-sm", children: [
    /* @__PURE__ */ jsx50(Icon, { className: cn(iconClass, "mt-0.5"), "aria-hidden": true }),
    /* @__PURE__ */ jsxs44("div", { className: "min-w-0 flex-1 space-y-0.5", children: [
      /* @__PURE__ */ jsxs44("div", { className: "flex items-center gap-2 flex-wrap", children: [
        /* @__PURE__ */ jsx50("span", { className: "font-mono font-medium", children: step.name }),
        typeof step.count === "number" && step.count > 0 && /* @__PURE__ */ jsx50(Badge, { variant: "secondary", className: "text-[10px] tabular-nums", children: step.count }),
        typeof step.duration_ms === "number" && /* @__PURE__ */ jsx50("span", { className: "text-[11px] text-muted-foreground tabular-nums", children: step.duration_ms < 1e3 ? `${step.duration_ms}ms` : `${(step.duration_ms / 1e3).toFixed(1)}s` })
      ] }),
      step.detail && /* @__PURE__ */ jsx50("p", { className: "text-[11px] text-muted-foreground truncate", title: step.detail, children: step.detail }),
      step.error && /* @__PURE__ */ jsx50("p", { className: "text-[11px] text-destructive break-words", children: step.error })
    ] }),
    /* @__PURE__ */ jsx50("span", { className: cn(
      "shrink-0 text-[10px] font-medium uppercase tracking-wide",
      step.status === "ok" && "text-emerald-500",
      step.status === "error" && "text-destructive",
      step.status === "skipped" && "text-muted-foreground"
    ), children: isRTL ? step.status === "ok" ? "\u0646\u0627\u062C\u062D" : step.status === "error" ? "\u062E\u0637\u0623" : step.status === "skipped" ? "\u0645\u062A\u062E\u0637\u0651\u0649" : "..." : step.status })
  ] });
};
StepRow2.displayName = "StepRow";
var SavedItem = ({ item, isRTL }) => {
  const [rawOpen, setRawOpen] = useState27(false);
  const bodyText = isRTL ? item.content_ar || item.content_en || "" : item.content_en || item.content_ar || "";
  const handleToggleRaw = () => setRawOpen((v) => !v);
  return /* @__PURE__ */ jsxs44("div", { className: "space-y-2 py-3", children: [
    /* @__PURE__ */ jsxs44("div", { className: "flex items-start gap-1.5", children: [
      /* @__PURE__ */ jsx50("div", { className: "min-w-0 flex-1", children: item.url ? /* @__PURE__ */ jsx50(
        "a",
        {
          href: item.url,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "text-sm font-medium text-foreground hover:text-primary hover:underline",
          dir: "auto",
          children: item.title || item.url || "(untitled)"
        }
      ) : /* @__PURE__ */ jsx50("span", { className: "text-sm font-medium text-foreground", dir: "auto", children: item.title || "(untitled)" }) }),
      item.url && /* @__PURE__ */ jsx50(
        "a",
        {
          href: item.url,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "shrink-0 text-muted-foreground hover:text-primary mt-0.5",
          children: /* @__PURE__ */ jsx50(ExternalLink3, { className: "h-3 w-3" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxs44("div", { className: "flex flex-wrap items-center gap-2", children: [
      item.language && /* @__PURE__ */ jsx50(Badge, { variant: "outline", className: "text-[10px] uppercase", children: item.language }),
      item.region && /* @__PURE__ */ jsx50(Badge, { variant: "outline", className: "text-[10px]", children: item.region }),
      item.published_at && /* @__PURE__ */ jsx50("span", { className: "text-[10px] text-muted-foreground tabular-nums", children: new Date(item.published_at).toLocaleString(isRTL ? "ar-SA" : "en-US", { dateStyle: "medium", timeStyle: "short" }) }),
      item.content_hash && /* @__PURE__ */ jsx50("span", { className: "text-[9px] font-mono text-muted-foreground/50 hidden sm:block", children: item.content_hash.slice(0, 8) })
    ] }),
    bodyText && /* @__PURE__ */ jsx50("p", { className: "text-xs text-muted-foreground leading-relaxed line-clamp-4 whitespace-pre-line", dir: isRTL ? "rtl" : "ltr", children: bodyText }),
    item.raw_payload != null && /* @__PURE__ */ jsxs44("div", { children: [
      /* @__PURE__ */ jsxs44(
        "button",
        {
          type: "button",
          onClick: handleToggleRaw,
          className: "flex items-center gap-1 text-[10px] text-muted-foreground hover:text-foreground transition-colors duration-fast ease-standard",
          children: [
            /* @__PURE__ */ jsx50(FileText, { className: "h-3 w-3" }),
            rawOpen ? isRTL ? "\u0625\u062E\u0641\u0627\u0621 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062E\u0627\u0645" : "Hide raw payload" : isRTL ? "\u0639\u0631\u0636 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062E\u0627\u0645" : "Show raw payload",
            rawOpen ? /* @__PURE__ */ jsx50(ChevronUp3, { className: "h-3 w-3" }) : /* @__PURE__ */ jsx50(ChevronDown6, { className: "h-3 w-3" })
          ]
        }
      ),
      rawOpen && /* @__PURE__ */ jsx50("pre", { className: "mt-1.5 max-h-48 overflow-y-auto rounded-md bg-muted/60 px-3 py-2 text-[10px] font-mono text-muted-foreground whitespace-pre-wrap break-all", children: JSON.stringify(item.raw_payload, null, 2) })
    ] })
  ] });
};
SavedItem.displayName = "SavedItem";
var TestRunPanel = ({
  slug,
  maxEnvelopes = 5,
  inline = false,
  language,
  onRunRequest
}) => {
  const isRTL = language === "ar";
  const [runState, setRunState] = useState27("idle");
  const [steps, setSteps] = useState27([]);
  const [complete, setComplete] = useState27(null);
  const [errorMsg, setErrorMsg] = useState27(null);
  const [savedExpanded, setSavedExpanded] = useState27(true);
  const abortRef = useRef10(null);
  const handleStart = useCallback9(() => {
    setSteps([]);
    setComplete(null);
    setErrorMsg(null);
    setSavedExpanded(true);
    setRunState("running");
    abortRef.current = onRunRequest(slug, maxEnvelopes, {
      onStep: (step) => setSteps((prev) => [...prev, step]),
      onComplete: (payload) => {
        setComplete(payload);
        setRunState("done");
      },
      onError: (err) => {
        setErrorMsg(err.error);
        setRunState("error");
      }
    });
  }, [slug, maxEnvelopes, onRunRequest]);
  const handleStop = useCallback9(() => {
    abortRef.current?.abort();
    setRunState("idle");
  }, []);
  const isRunning = runState === "running";
  const content = /* @__PURE__ */ jsxs44("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxs44("div", { className: "flex items-center gap-3", children: [
      isRunning ? /* @__PURE__ */ jsxs44(Button, { variant: "destructive", size: "sm", onClick: handleStop, className: "gap-1.5", children: [
        /* @__PURE__ */ jsx50(Square, { className: "h-3.5 w-3.5" }),
        isRTL ? "\u0625\u064A\u0642\u0627\u0641" : "Stop"
      ] }) : /* @__PURE__ */ jsxs44(Button, { size: "sm", onClick: handleStart, className: "gap-1.5", children: [
        /* @__PURE__ */ jsx50(Play, { className: "h-3.5 w-3.5" }),
        isRTL ? "\u062A\u0634\u063A\u064A\u0644 \u0627\u062E\u062A\u0628\u0627\u0631\u064A" : "Test run"
      ] }),
      isRunning && /* @__PURE__ */ jsxs44("span", { className: "flex items-center gap-1.5 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsx50(Loader27, { className: "h-3.5 w-3.5 animate-spin", "aria-hidden": true }),
        isRTL ? "\u062C\u0627\u0631\u064D \u0627\u0644\u062A\u0634\u063A\u064A\u0644\u2026" : "Running\u2026"
      ] }),
      runState === "done" && complete && /* @__PURE__ */ jsx50("span", { className: "text-xs text-emerald-600 dark:text-emerald-400 font-medium", children: isRTL ? `\u062A\u0645\u0651 \u062D\u0641\u0638 ${complete.envelopes_saved} \u0645\u063A\u0644\u0651\u0641` : `${complete.envelopes_saved} envelope${complete.envelopes_saved !== 1 ? "s" : ""} saved` }),
      runState === "error" && /* @__PURE__ */ jsx50("span", { className: "text-xs text-destructive font-medium", children: isRTL ? "\u0641\u0634\u0644 \u0627\u0644\u062A\u0634\u063A\u064A\u0644" : "Run failed" })
    ] }),
    steps.length > 0 && /* @__PURE__ */ jsx50("div", { className: "rounded-md border bg-muted/30 px-4 divide-y divide-border/50", children: steps.map((step, i) => /* @__PURE__ */ jsx50(StepRow2, { step, isRTL }, `${step.name}-${i}`)) }),
    runState === "error" && errorMsg && /* @__PURE__ */ jsxs44("div", { className: "flex items-center gap-2 rounded-md border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive", children: [
      /* @__PURE__ */ jsx50(XCircle, { className: "h-4 w-4 shrink-0", "aria-hidden": true }),
      /* @__PURE__ */ jsx50("span", { children: errorMsg })
    ] }),
    runState === "done" && complete && /* @__PURE__ */ jsxs44("div", { className: "rounded-md border", children: [
      /* @__PURE__ */ jsxs44(
        "button",
        {
          type: "button",
          onClick: () => setSavedExpanded((v) => !v),
          className: "flex w-full items-center justify-between px-4 py-2.5 text-sm font-medium hover:bg-muted/40 transition-colors duration-fast ease-standard",
          children: [
            /* @__PURE__ */ jsxs44("span", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx50(CheckCircle2, { className: "h-4 w-4 text-emerald-500", "aria-hidden": true }),
              isRTL ? `\u0627\u0644\u0645\u063A\u0644\u0651\u0641\u0627\u062A \u0627\u0644\u0645\u062D\u0641\u0648\u0638\u0629 (${complete.envelopes_saved})` : `Saved envelopes (${complete.envelopes_saved})`
            ] }),
            savedExpanded ? /* @__PURE__ */ jsx50(ChevronUp3, { className: "h-4 w-4 text-muted-foreground", "aria-hidden": true }) : /* @__PURE__ */ jsx50(ChevronDown6, { className: "h-4 w-4 text-muted-foreground", "aria-hidden": true })
          ]
        }
      ),
      savedExpanded && /* @__PURE__ */ jsxs44(Fragment13, { children: [
        /* @__PURE__ */ jsx50(Separator, {}),
        /* @__PURE__ */ jsx50("div", { className: "px-4 divide-y divide-border/50", children: complete.saved.length === 0 ? /* @__PURE__ */ jsx50("p", { className: "py-3 text-sm text-muted-foreground", children: isRTL ? "\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u063A\u0644\u0651\u0641\u0627\u062A" : "No envelopes" }) : complete.saved.map((item, i) => /* @__PURE__ */ jsx50(
          SavedItem,
          {
            item,
            isRTL
          },
          (item.content_hash || item.envelope_id || item.url || "") + i
        )) })
      ] })
    ] })
  ] });
  if (inline) return content;
  return /* @__PURE__ */ jsxs44(Card, { children: [
    /* @__PURE__ */ jsx50(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxs44(CardTitle, { className: "text-base flex items-center gap-2", children: [
      /* @__PURE__ */ jsx50(Play, { className: "h-4 w-4 text-muted-foreground", "aria-hidden": true }),
      isRTL ? "\u062A\u0634\u063A\u064A\u0644 \u0627\u062E\u062A\u0628\u0627\u0631\u064A" : "Test Run"
    ] }) }),
    /* @__PURE__ */ jsx50(CardContent, { children: content })
  ] });
};
TestRunPanel.displayName = "TestRunPanel";

// src/components/plugin-detail/PluginDetailLayout.tsx
import { useMemo as useMemo9 } from "react";
import { CircleDot as CircleDot2 } from "lucide-react";
import { Area as Area2, AreaChart as AreaChart2, ResponsiveContainer as ResponsiveContainer2 } from "recharts";
import { jsx as jsx51, jsxs as jsxs45 } from "react/jsx-runtime";
var TYPE_LABELS2 = {
  capability: { en: "Capability", ar: "\u0642\u062F\u0631\u0629" },
  source: { en: "Source", ar: "\u0645\u0635\u062F\u0631" },
  ai_provider: { en: "AI Provider", ar: "\u0645\u0632\u0648\u0651\u062F \u0630\u0643\u0627\u0621" },
  adk_artifact: { en: "AI", ar: "\u0630\u0643\u0627\u0621 \u0627\u0635\u0637\u0646\u0627\u0639\u064A" },
  pipeline: { en: "Pipeline", ar: "\u062E\u0637\u0651 \u0645\u0639\u0627\u0644\u062C\u0629" },
  enrichment: { en: "Enrichment", ar: "\u0625\u062B\u0631\u0627\u0621" },
  copilot: { en: "Copilot", ar: "\u0645\u0633\u0627\u0639\u062F" },
  "system-base": { en: "System", ar: "\u0646\u0638\u0627\u0645" },
  adk_tool: { en: "ADK Tool", ar: "\u0623\u062F\u0627\u0629 ADK" },
  core: { en: "Core", ar: "\u0627\u0644\u0623\u0633\u0627\u0633" }
};
var DEFAULT_COLOR2 = "#64748b";
var formatCount2 = (n) => {
  if (n == null) return "0";
  if (n < 1e3) return String(n);
  if (n < 1e6) return `${(n / 1e3).toFixed(n < 1e4 ? 1 : 0)}K`;
  if (n < 1e9) return `${(n / 1e6).toFixed(n < 1e7 ? 1 : 0)}M`;
  return `${(n / 1e9).toFixed(1)}B`;
};
var countLabel2 = (pluginType, isRTL) => {
  switch (pluginType) {
    case "source":
      return isRTL ? "\u0645\u063A\u0644\u0651\u0641\u0627\u062A" : "envelopes";
    case "ai_provider":
      return isRTL ? "\u0631\u0645\u0648\u0632" : "tokens";
    case "adk_artifact":
    case "adk_tool":
      return isRTL ? "\u0627\u0633\u062A\u062F\u0639\u0627\u0621\u0627\u062A" : "invocations";
    case "pipeline":
    case "enrichment":
      return isRTL ? "\u0645\u0647\u0627\u0645 \u0646\u0634\u0637\u0629" : "active jobs";
    case "core":
      return isRTL ? "\u062D\u0627\u0644\u0629" : "status";
    default:
      return isRTL ? "\u0633\u062C\u0644\u0627\u062A" : "records";
  }
};
var formatRelative2 = (iso, isRTL) => {
  if (!iso) return isRTL ? "\u0644\u0627 \u0646\u0634\u0627\u0637" : "No activity";
  const t2 = Date.parse(iso);
  if (Number.isNaN(t2)) return isRTL ? "\u0644\u0627 \u0646\u0634\u0627\u0637" : "No activity";
  const diffSec = Math.max(0, Math.round((Date.now() - t2) / 1e3));
  if (diffSec < 60) return isRTL ? "\u0642\u0628\u0644 \u062B\u0648\u0627\u0646\u064D" : "just now";
  const m = Math.round(diffSec / 60);
  if (m < 60) return isRTL ? `\u0642\u0628\u0644 ${m} \u062F` : `${m}m ago`;
  const h = Math.round(diffSec / 3600);
  if (h < 48) return isRTL ? `\u0642\u0628\u0644 ${h} \u0633` : `${h}h ago`;
  const d = Math.round(diffSec / 86400);
  if (d < 30) return isRTL ? `\u0642\u0628\u0644 ${d} \u064A\u0648\u0645` : `${d}d ago`;
  const mo = Math.round(d / 30);
  if (mo < 12) return isRTL ? `\u0642\u0628\u0644 ${mo} \u0634\u0647\u0631` : `${mo}mo ago`;
  const y = Math.round(d / 365);
  return isRTL ? `\u0642\u0628\u0644 ${y} \u0633\u0646\u0629` : `${y}y ago`;
};
var activityState2 = (iso) => {
  if (!iso) return "red";
  const t2 = Date.parse(iso);
  if (Number.isNaN(t2)) return "red";
  const ageMin = (Date.now() - t2) / 6e4;
  if (ageMin <= 60) return "green";
  if (ageMin <= 60 * 24) return "yellow";
  return "red";
};
var STATE_CLASSES2 = {
  green: { chip: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30", dot: "bg-emerald-500" },
  yellow: { chip: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30", dot: "bg-amber-500" },
  red: { chip: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/30", dot: "bg-red-500" }
};
var PluginHeroSkeleton = () => /* @__PURE__ */ jsx51("div", { className: "w-full border-b border-border bg-card px-6 py-6", children: /* @__PURE__ */ jsxs45("div", { className: "flex items-center gap-5", children: [
  /* @__PURE__ */ jsx51(Skeleton, { className: "h-20 w-20 rounded-xl" }),
  /* @__PURE__ */ jsxs45("div", { className: "flex-1 space-y-3", children: [
    /* @__PURE__ */ jsx51(Skeleton, { className: "h-6 w-64" }),
    /* @__PURE__ */ jsx51(Skeleton, { className: "h-4 w-96" }),
    /* @__PURE__ */ jsx51(Skeleton, { className: "h-4 w-40" })
  ] }),
  /* @__PURE__ */ jsx51(Skeleton, { className: "h-20 w-48 rounded-lg" })
] }) });
PluginHeroSkeleton.displayName = "PluginHeroSkeleton";
var PluginHero = ({ plugin, activity, isRTL }) => {
  const name = (isRTL ? plugin.name_ar : plugin.name_en) || plugin.name_en || plugin.name || plugin.slug || "";
  const description = (isRTL ? plugin.description_ar : plugin.description_en) || plugin.description_en || plugin.description || "";
  const typeKey = String(plugin.plugin_type ?? "");
  const typeLabel2 = TYPE_LABELS2[typeKey] ?? { en: typeKey || "Plugin", ar: typeKey || "\u0625\u0636\u0627\u0641\u0629" };
  const color = plugin.nav_color || DEFAULT_COLOR2;
  const { Component: Icon } = resolveIcon(plugin.nav_icon);
  const enabled = plugin.enabled_globally !== false;
  const lastActiveISO = activity?.last_active_at ?? null;
  const state = activityState2(lastActiveISO);
  const stateClasses = STATE_CLASSES2[state];
  const activityCount = activity?.activity_count ?? 0;
  const seriesData = useMemo9(() => {
    const series = activity?.activity_series ?? [];
    if (series.length === 0) return Array.from({ length: 24 }, () => ({ n: 0 }));
    return series.map((b) => ({ n: b.n }));
  }, [activity?.activity_series]);
  const hasSeriesData = seriesData.some((d) => d.n > 0);
  const gradId = `herospark-${plugin.slug ?? "plugin"}`;
  return /* @__PURE__ */ jsx51("header", { className: "w-full border-b border-border bg-card px-6 py-6", children: /* @__PURE__ */ jsxs45("div", { className: "flex flex-col lg:flex-row lg:items-stretch gap-6", children: [
    /* @__PURE__ */ jsxs45("div", { className: "flex items-start gap-5 flex-1 min-w-0", children: [
      /* @__PURE__ */ jsx51(
        "div",
        {
          className: "flex h-20 w-20 flex-none items-center justify-center rounded-xl text-white shadow-sm",
          style: { backgroundColor: color },
          "aria-hidden": "true",
          children: /* @__PURE__ */ jsx51(Icon, { className: "h-9 w-9" })
        }
      ),
      /* @__PURE__ */ jsxs45("div", { className: "min-w-0 flex-1", children: [
        /* @__PURE__ */ jsxs45("div", { className: "flex items-center gap-3 flex-wrap", children: [
          /* @__PURE__ */ jsx51("h1", { className: "text-2xl font-semibold text-foreground leading-none", children: name }),
          /* @__PURE__ */ jsxs45(
            "span",
            {
              className: cn(
                "inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium border",
                stateClasses.chip
              ),
              title: lastActiveISO ?? (isRTL ? "\u0644\u0627 \u0646\u0634\u0627\u0637" : "No activity"),
              children: [
                /* @__PURE__ */ jsx51("span", { className: cn("h-2 w-2 rounded-full flex-none", stateClasses.dot) }),
                formatRelative2(lastActiveISO, isRTL)
              ]
            }
          )
        ] }),
        description && /* @__PURE__ */ jsx51("p", { className: "mt-2.5 text-sm text-muted-foreground max-w-3xl", children: description }),
        /* @__PURE__ */ jsxs45("div", { className: "mt-3 flex items-center gap-2 flex-wrap", children: [
          /* @__PURE__ */ jsx51(Badge, { variant: "secondary", className: "text-[10px] uppercase tracking-wide", children: isRTL ? typeLabel2.ar : typeLabel2.en }),
          plugin.slug && /* @__PURE__ */ jsx51(Badge, { variant: "outline", className: "text-[10px] font-mono", children: plugin.slug }),
          plugin.version && /* @__PURE__ */ jsxs45(Badge, { variant: "outline", className: "text-[10px] font-mono", children: [
            "v",
            plugin.version
          ] }),
          /* @__PURE__ */ jsxs45(
            "span",
            {
              className: cn(
                "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium",
                enabled ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "bg-muted text-muted-foreground"
              ),
              children: [
                /* @__PURE__ */ jsx51(CircleDot2, { className: "h-3 w-3 opacity-70" }),
                enabled ? isRTL ? "\u0645\u0641\u0639\u0651\u0644" : "Enabled" : isRTL ? "\u0645\u0639\u0637\u0651\u0644" : "Disabled"
              ]
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs45("div", { className: "flex-none w-full lg:w-72 rounded-lg border border-border/70 bg-muted/20 overflow-hidden", children: [
      /* @__PURE__ */ jsxs45("div", { className: "px-4 pt-3 pb-1", children: [
        /* @__PURE__ */ jsx51("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: countLabel2(typeKey, isRTL) }),
        /* @__PURE__ */ jsx51("div", { className: "text-3xl font-semibold text-foreground leading-tight", title: String(activityCount), children: formatCount2(activityCount) })
      ] }),
      /* @__PURE__ */ jsx51("div", { className: "h-16 w-full", children: /* @__PURE__ */ jsx51(ResponsiveContainer2, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxs45(AreaChart2, { data: seriesData, margin: { top: 4, right: 0, bottom: 0, left: 0 }, children: [
        /* @__PURE__ */ jsx51("defs", { children: /* @__PURE__ */ jsxs45("linearGradient", { id: gradId, x1: "0", y1: "0", x2: "0", y2: "1", children: [
          /* @__PURE__ */ jsx51("stop", { offset: "0%", stopColor: color, stopOpacity: hasSeriesData ? 0.45 : 0.12 }),
          /* @__PURE__ */ jsx51("stop", { offset: "100%", stopColor: color, stopOpacity: 0 })
        ] }) }),
        /* @__PURE__ */ jsx51(
          Area2,
          {
            type: "monotone",
            dataKey: "n",
            stroke: color,
            strokeWidth: 1.5,
            strokeOpacity: hasSeriesData ? 1 : 0.35,
            fill: `url(#${gradId})`,
            isAnimationActive: false,
            dot: false
          }
        )
      ] }) }) })
    ] })
  ] }) });
};
PluginHero.displayName = "PluginHero";
var SubSidebar = ({ tabs, activeTab, onTabChange, isRTL }) => {
  const renderTab = (tab) => {
    const Icon = tab.icon;
    const label = isRTL ? tab.label_ar : tab.label_en;
    const isActive = activeTab === tab.key;
    return /* @__PURE__ */ jsxs45(
      "button",
      {
        type: "button",
        onClick: () => onTabChange(tab.key),
        className: cn(
          "flex items-center gap-2.5 rounded-md px-3 py-2 text-sm transition-colors duration-fast ease-standard text-start w-full",
          isActive ? "bg-accent text-accent-foreground font-medium" : "text-muted-foreground hover:bg-muted hover:text-foreground"
        ),
        "aria-current": isActive ? "page" : void 0,
        children: [
          Icon && /* @__PURE__ */ jsx51(Icon, { className: "h-4 w-4 shrink-0", "aria-hidden": true }),
          /* @__PURE__ */ jsx51("span", { className: "truncate", children: label })
        ]
      },
      tab.key
    );
  };
  const order = [];
  const groups = /* @__PURE__ */ new Map();
  for (const tab of tabs) {
    const key = tab.section_en ?? "";
    if (!groups.has(key)) {
      groups.set(key, []);
      order.push(key);
    }
    groups.get(key).push(tab);
  }
  const hasSections = tabs.some((t2) => t2.section_en);
  return /* @__PURE__ */ jsx51(
    "nav",
    {
      "aria-label": isRTL ? "\u062A\u0646\u0642\u0644 \u0627\u0644\u062A\u0628\u0648\u064A\u0628\u0627\u062A \u0627\u0644\u0641\u0631\u0639\u064A\u0629" : "Plugin detail sub-navigation",
      className: "flex flex-col gap-4 p-3",
      children: order.map((sectionKey) => {
        const sectionTabs = groups.get(sectionKey);
        const header = sectionKey ? isRTL ? sectionTabs[0].section_ar || sectionKey : sectionKey : null;
        return /* @__PURE__ */ jsxs45("div", { className: "flex flex-col gap-0.5", children: [
          hasSections && header && /* @__PURE__ */ jsx51(
            "p",
            {
              className: cn(
                "px-3 mb-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/60",
                isRTL ? "text-right" : "text-left"
              ),
              children: header
            }
          ),
          sectionTabs.map(renderTab)
        ] }, sectionKey || "_");
      })
    }
  );
};
SubSidebar.displayName = "SubSidebar";
var PluginDetailLayout = ({
  tabs,
  activeTab,
  onTabChange,
  children,
  plugin,
  activity,
  isLoading = false,
  isError = false,
  language
}) => {
  const isRTL = language === "ar";
  return (
    // Two-sidebar plugin detail rendered INSIDE the product's AdminLayout content
    // (operator 2026-06-05: keep the dashboard menu; plugin tabs are a SECOND
    // sub-sidebar next to it). Full-bleed: cancel AdminLayout's <main> padding
    // (p-3 sm:p-4 md:p-6) with matching negative margins so the sub-sidebar sits
    // flush against the dashboard sidebar and the content has no outer gap.
    // NOTE: no min-h-screen / no sticky here — those fight AdminLayout's own
    // scrolling <main> and broke the layout. The hero scrolls with the content.
    // Reference layout (mofa-dev /superadmin/plugins/<slug>): a single flex ROW
    // — the plugin sub-sidebar sits flush at the TOP next to the dashboard
    // sidebar (full height), and the content column (hero + tab content stacked)
    // is beside it. NOT hero-on-top-spanning-both. Full-bleed: cancel
    // AdminLayout's <main> padding so the sub-sidebar borders the dashboard nav.
    /* @__PURE__ */ jsxs45(
      "div",
      {
        className: "flex items-stretch min-h-full h-full -m-3 sm:-m-4 md:-m-6",
        dir: isRTL ? "rtl" : "ltr",
        children: [
          /* @__PURE__ */ jsx51("aside", { className: "hidden md:flex flex-col w-56 shrink-0 self-stretch border-e border-border bg-card overflow-y-auto", children: /* @__PURE__ */ jsx51(
            SubSidebar,
            {
              tabs,
              activeTab,
              onTabChange,
              isRTL
            }
          ) }),
          /* @__PURE__ */ jsxs45("div", { className: "flex-1 min-w-0 flex flex-col overflow-y-auto", children: [
            /* @__PURE__ */ jsx51("div", { className: "md:hidden w-full border-b border-border bg-card px-3 py-2 overflow-x-auto", children: /* @__PURE__ */ jsx51("div", { className: "flex gap-1 min-w-max", children: tabs.map((tab) => {
              const Icon = tab.icon;
              const label = isRTL ? tab.label_ar : tab.label_en;
              const isActive = activeTab === tab.key;
              return /* @__PURE__ */ jsxs45(
                "button",
                {
                  type: "button",
                  onClick: () => onTabChange(tab.key),
                  className: cn(
                    "flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs transition-colors duration-fast ease-standard whitespace-nowrap",
                    isActive ? "bg-accent text-accent-foreground font-medium" : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  ),
                  "aria-current": isActive ? "page" : void 0,
                  children: [
                    Icon && /* @__PURE__ */ jsx51(Icon, { className: "h-3.5 w-3.5 shrink-0", "aria-hidden": true }),
                    label
                  ]
                },
                tab.key
              );
            }) }) }),
            isLoading && /* @__PURE__ */ jsx51(PluginHeroSkeleton, {}),
            isError && /* @__PURE__ */ jsx51("div", { className: "rounded-lg border border-destructive/30 bg-destructive/5 p-4 m-6 text-sm text-destructive", children: isRTL ? "\u062A\u0639\u0630\u0651\u0631 \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0625\u0636\u0627\u0641\u0629." : "Failed to load this plugin." }),
            !isLoading && !isError && /* @__PURE__ */ jsx51(PluginHero, { plugin, activity, isRTL }),
            /* @__PURE__ */ jsx51("main", { className: "flex-1 min-w-0 p-3 sm:p-4 md:p-6", children })
          ] })
        ]
      }
    )
  );
};
PluginDetailLayout.displayName = "PluginDetailLayout";

// src/components/plugin-detail/Workflow.tsx
import * as React13 from "react";
import { ListTree, GitBranch as GitBranch3, Pencil as Pencil2, ArrowRight } from "lucide-react";
import { jsx as jsx52, jsxs as jsxs46 } from "react/jsx-runtime";
var LABELS = {
  en: { steps: "Steps", pipeline: "Pipeline", editor: "Editor", empty: "No steps yet." },
  ar: { steps: "\u0627\u0644\u062E\u0637\u0648\u0627\u062A", pipeline: "\u0627\u0644\u0645\u0633\u0627\u0631", editor: "\u0645\u062D\u0631\u0651\u0631", empty: "\u0644\u0627 \u062A\u0648\u062C\u062F \u062E\u0637\u0648\u0627\u062A \u0628\u0639\u062F." }
};
var VIEW_ICON = {
  steps: ListTree,
  pipeline: GitBranch3,
  editor: Pencil2
};
function Workflow({
  steps,
  view,
  defaultView = "steps",
  onViewChange,
  language = "en",
  humanize = true,
  onChange,
  onEditStep,
  className
}) {
  const isRTL = language === "ar";
  const t2 = LABELS[language];
  const [internal, setInternal] = React13.useState(defaultView);
  const active = view ?? internal;
  const setView = (v) => {
    setInternal(v);
    onViewChange?.(v);
  };
  const views = onChange ? ["steps", "pipeline", "editor"] : ["steps", "pipeline"];
  return /* @__PURE__ */ jsxs46("div", { dir: isRTL ? "rtl" : "ltr", className: cn("flex flex-col gap-3", className), children: [
    /* @__PURE__ */ jsx52("div", { className: "inline-flex w-fit items-center gap-1 self-start rounded-lg border border-border bg-card p-1", children: views.map((v) => {
      const Icon = VIEW_ICON[v];
      return /* @__PURE__ */ jsxs46(
        Button,
        {
          type: "button",
          size: "sm",
          variant: active === v ? "secondary" : "ghost",
          className: "h-7 gap-1.5 px-2.5",
          "aria-pressed": active === v,
          onClick: () => setView(v),
          children: [
            /* @__PURE__ */ jsx52(Icon, { className: "h-3.5 w-3.5" }),
            t2[v]
          ]
        },
        v
      );
    }) }),
    steps.length === 0 ? /* @__PURE__ */ jsx52("p", { className: "rounded-lg border border-dashed border-border p-6 text-center text-sm text-muted-foreground", children: t2.empty }) : active === "editor" && onChange ? /* @__PURE__ */ jsx52(
      NestedStepsEditor,
      {
        steps,
        language,
        onChange: (s) => onChange(s),
        onEditStep
      }
    ) : active === "pipeline" ? /* @__PURE__ */ jsx52("div", { className: "flex items-stretch gap-2 overflow-x-auto pb-2", children: steps.map((step, i) => /* @__PURE__ */ jsxs46(React13.Fragment, { children: [
      i > 0 && /* @__PURE__ */ jsx52("div", { className: "flex shrink-0 items-center text-muted-foreground", children: /* @__PURE__ */ jsx52(ArrowRight, { className: "h-4 w-4 rtl:rotate-180" }) }),
      /* @__PURE__ */ jsx52("div", { className: "w-72 shrink-0", children: /* @__PURE__ */ jsx52(WorkflowStepNode, { step, path: [i], depth: 0, isRTL, humanize }) })
    ] }, i)) }) : /* @__PURE__ */ jsx52("div", { className: "space-y-2", children: steps.map((step, i) => /* @__PURE__ */ jsx52(WorkflowStepNode, { step, path: [i], depth: 0, isRTL, humanize }, i)) })
  ] });
}

// src/components/logs/LogsView.tsx
import React14, { useState as useState30, useCallback as useCallback10 } from "react";
import { ChevronDown as ChevronDown7, ChevronRight as ChevronRight5, RefreshCw, Search as Search5, X as X2 } from "lucide-react";

// src/hooks/useDebounce.ts
import { useState as useState29, useEffect as useEffect16 } from "react";
function useDebounce(value, delay = 300) {
  const [debounced, setDebounced] = useState29(value);
  useEffect16(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debounced;
}

// src/hooks/useInfiniteScroll.ts
import { useEffect as useEffect17, useRef as useRef11 } from "react";
function useInfiniteScroll({
  onLoadMore,
  hasMore,
  isLoading,
  threshold = 0.1
}) {
  const sentinelRef = useRef11(null);
  useEffect17(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          onLoadMore();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [hasMore, isLoading, onLoadMore, threshold]);
  return { sentinelRef };
}

// src/components/logs/LogsView.tsx
import { Fragment as Fragment15, jsx as jsx53, jsxs as jsxs47 } from "react/jsx-runtime";
var LABELS2 = {
  en: {
    level: "Level",
    service: "Service",
    component: "Component",
    search: "Search messages\u2026",
    since: "Since",
    until: "Until",
    allLevels: "All levels",
    allServices: "All services",
    allComponents: "All components",
    liveTail: "Live",
    loadMore: "Load more",
    noLogs: "No log entries found.",
    noLogsHint: "Try adjusting the filters or time range.",
    loading: "Loading logs\u2026",
    traceId: "Trace ID",
    requestId: "Request ID",
    userId: "User ID",
    attrs: "Attributes",
    clear: "Clear",
    filterBy: "Filter by level"
  },
  ar: {
    level: "\u0627\u0644\u0645\u0633\u062A\u0648\u0649",
    service: "\u0627\u0644\u062E\u062F\u0645\u0629",
    component: "\u0627\u0644\u0645\u0643\u0648\u0651\u0646",
    search: "\u0628\u062D\u062B \u0641\u064A \u0627\u0644\u0631\u0633\u0627\u0626\u0644\u2026",
    since: "\u0645\u0646\u0630",
    until: "\u062D\u062A\u0649",
    allLevels: "\u062C\u0645\u064A\u0639 \u0627\u0644\u0645\u0633\u062A\u0648\u064A\u0627\u062A",
    allServices: "\u062C\u0645\u064A\u0639 \u0627\u0644\u062E\u062F\u0645\u0627\u062A",
    allComponents: "\u062C\u0645\u064A\u0639 \u0627\u0644\u0645\u0643\u0648\u0646\u0627\u062A",
    liveTail: "\u0645\u0628\u0627\u0634\u0631",
    loadMore: "\u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0645\u0632\u064A\u062F",
    noLogs: "\u0644\u0627 \u062A\u0648\u062C\u062F \u0633\u062C\u0644\u0627\u062A.",
    noLogsHint: "\u062D\u0627\u0648\u0644 \u0636\u0628\u0637 \u0627\u0644\u0641\u0644\u0627\u062A\u0631 \u0623\u0648 \u0627\u0644\u0646\u0637\u0627\u0642 \u0627\u0644\u0632\u0645\u0646\u064A.",
    loading: "\u062C\u0627\u0631\u064D \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0633\u062C\u0644\u0627\u062A\u2026",
    traceId: "\u0645\u0639\u0631\u0641 \u0627\u0644\u062A\u062A\u0628\u0639",
    requestId: "\u0645\u0639\u0631\u0641 \u0627\u0644\u0637\u0644\u0628",
    userId: "\u0645\u0639\u0631\u0641 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645",
    attrs: "\u0627\u0644\u062E\u0635\u0627\u0626\u0635",
    clear: "\u0645\u0633\u062D",
    filterBy: "\u062A\u0635\u0641\u064A\u0629 \u062D\u0633\u0628 \u0627\u0644\u0645\u0633\u062A\u0648\u0649"
  }
};
var LEVEL_CLASSES = {
  error: "bg-destructive/15 text-destructive border-destructive/30",
  warn: "bg-alert-amber/15 text-alert-amber border-alert-amber/30",
  info: "bg-info/15 text-info border-info/30",
  debug: "bg-muted text-muted-foreground border-border"
};
var LevelBadge = ({ level }) => /* @__PURE__ */ jsx53(
  Badge,
  {
    className: cn(
      "font-mono text-[10px] uppercase tracking-wide border",
      LEVEL_CLASSES[level] ?? LEVEL_CLASSES.debug
    ),
    children: level
  }
);
LevelBadge.displayName = "LevelBadge";
var ALL_LEVELS = ["error", "warn", "info", "debug"];
var LevelFilter = ({ selected, onChange, ariaLabel }) => {
  const handleToggle = useCallback10(
    (level) => {
      if (selected.includes(level)) {
        onChange(selected.filter((l) => l !== level));
      } else {
        onChange([...selected, level]);
      }
    },
    [selected, onChange]
  );
  return /* @__PURE__ */ jsx53("div", { className: "flex flex-wrap gap-1.5", role: "group", "aria-label": ariaLabel, children: ALL_LEVELS.map((level) => {
    const active = selected.length === 0 || selected.includes(level);
    return /* @__PURE__ */ jsx53(
      "button",
      {
        type: "button",
        onClick: () => handleToggle(level),
        "aria-pressed": selected.includes(level),
        className: cn(
          "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold",
          "transition-opacity duration-fast ease-standard cursor-pointer",
          LEVEL_CLASSES[level],
          !active && "opacity-30"
        ),
        children: level
      },
      level
    );
  }) });
};
LevelFilter.displayName = "LevelFilter";
var ExpandedRow = ({ row, labels }) => {
  const meta = [
    row.traceId ? [labels.traceId, row.traceId] : null,
    row.requestId ? [labels.requestId, row.requestId] : null,
    row.userId ? [labels.userId, row.userId] : null
  ].filter(Boolean);
  const hasAttrs = row.attrs && Object.keys(row.attrs).length > 0;
  return /* @__PURE__ */ jsxs47("div", { className: "px-4 py-3 bg-muted/30 rounded-b-md border-t border-border space-y-3 text-xs", children: [
    /* @__PURE__ */ jsx53("p", { className: "font-mono text-foreground break-all whitespace-pre-wrap leading-relaxed", children: row.msg }),
    meta.length > 0 && /* @__PURE__ */ jsx53("dl", { className: "grid grid-cols-[auto_1fr] gap-x-3 gap-y-0.5", children: meta.map(([key, val]) => /* @__PURE__ */ jsxs47(React14.Fragment, { children: [
      /* @__PURE__ */ jsx53("dt", { className: "text-muted-foreground font-medium", children: key }),
      /* @__PURE__ */ jsx53("dd", { className: "font-mono text-foreground truncate", children: val })
    ] }, key)) }),
    hasAttrs && /* @__PURE__ */ jsxs47("div", { children: [
      /* @__PURE__ */ jsx53("p", { className: "text-muted-foreground font-medium mb-1", children: labels.attrs }),
      /* @__PURE__ */ jsx53("pre", { className: "bg-card rounded p-2 overflow-x-auto text-foreground/80 border border-border leading-relaxed", children: JSON.stringify(row.attrs, null, 2) })
    ] })
  ] });
};
ExpandedRow.displayName = "ExpandedRow";
var LogsTableSkeleton = () => /* @__PURE__ */ jsx53("div", { className: "space-y-2 p-4", children: Array.from({ length: 8 }).map((_, i) => /* @__PURE__ */ jsxs47("div", { className: "flex items-center gap-3", children: [
  /* @__PURE__ */ jsx53(Skeleton, { className: "h-5 w-14 rounded-full" }),
  /* @__PURE__ */ jsx53(Skeleton, { className: "h-4 w-20" }),
  /* @__PURE__ */ jsx53(Skeleton, { className: "h-4 w-24" }),
  /* @__PURE__ */ jsx53(Skeleton, { className: "h-4 flex-1" })
] }, i)) });
LogsTableSkeleton.displayName = "LogsTableSkeleton";
var EmptyState2 = ({ label, hint }) => /* @__PURE__ */ jsxs47("div", { className: "flex flex-col items-center justify-center py-16 gap-2 text-center", children: [
  /* @__PURE__ */ jsx53(Search5, { className: "h-8 w-8 text-muted-foreground/40", "aria-hidden": true }),
  /* @__PURE__ */ jsx53("p", { className: "text-sm font-medium text-muted-foreground", children: label }),
  /* @__PURE__ */ jsx53("p", { className: "text-xs text-muted-foreground/60", children: hint })
] });
EmptyState2.displayName = "EmptyState";
var LogsView = ({
  logs,
  filters,
  onFilterChange,
  language,
  loading = false,
  onLoadMore,
  hasMore = false,
  services = [],
  components: components2 = [],
  liveTail = false,
  onToggleLiveTail,
  className
}) => {
  const t2 = LABELS2[language];
  const isRtl = language === "ar";
  const [expanded, setExpanded] = useState30(/* @__PURE__ */ new Set());
  const [localQ, setLocalQ] = useState30(filters.q ?? "");
  const debouncedQ = useDebounce(localQ, 300);
  const prevDebouncedQ = React14.useRef(debouncedQ);
  React14.useEffect(() => {
    if (debouncedQ !== prevDebouncedQ.current) {
      prevDebouncedQ.current = debouncedQ;
      onFilterChange({ ...filters, q: debouncedQ || void 0 });
    }
  }, [debouncedQ, filters, onFilterChange]);
  const { sentinelRef } = useInfiniteScroll({
    onLoadMore: onLoadMore ?? (() => {
    }),
    hasMore: hasMore && !loading,
    isLoading: loading
  });
  const handleToggleRow = useCallback10((id) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);
  const handleLevelChange = useCallback10(
    (levels) => {
      onFilterChange({ ...filters, levels: levels.length ? levels : void 0 });
    },
    [filters, onFilterChange]
  );
  const handleServiceChange = useCallback10(
    (val) => {
      onFilterChange({ ...filters, service: val === "__all__" ? void 0 : val });
    },
    [filters, onFilterChange]
  );
  const handleComponentChange = useCallback10(
    (val) => {
      onFilterChange({ ...filters, component: val === "__all__" ? void 0 : val });
    },
    [filters, onFilterChange]
  );
  const handleSinceChange = useCallback10(
    (e) => {
      onFilterChange({ ...filters, since: e.target.value || void 0 });
    },
    [filters, onFilterChange]
  );
  const handleUntilChange = useCallback10(
    (e) => {
      onFilterChange({ ...filters, until: e.target.value || void 0 });
    },
    [filters, onFilterChange]
  );
  const handleSearchChange = useCallback10((e) => {
    setLocalQ(e.target.value);
  }, []);
  const handleClearSearch = useCallback10(() => {
    setLocalQ("");
    onFilterChange({ ...filters, q: void 0 });
  }, [filters, onFilterChange]);
  const handleToggleLiveTail = useCallback10(() => {
    onToggleLiveTail?.(!liveTail);
  }, [liveTail, onToggleLiveTail]);
  return /* @__PURE__ */ jsxs47(
    "div",
    {
      className: cn("flex flex-col gap-4", className),
      dir: isRtl ? "rtl" : "ltr",
      children: [
        /* @__PURE__ */ jsxs47("div", { className: "flex flex-wrap items-center gap-3 rounded-lg border border-border bg-card px-4 py-3", children: [
          /* @__PURE__ */ jsxs47("div", { className: "flex flex-col gap-1 min-w-0", children: [
            /* @__PURE__ */ jsx53("span", { className: "text-xs text-muted-foreground font-medium", children: t2.level }),
            /* @__PURE__ */ jsx53(
              LevelFilter,
              {
                selected: filters.levels ?? [],
                onChange: handleLevelChange,
                ariaLabel: t2.filterBy
              }
            )
          ] }),
          /* @__PURE__ */ jsx53("div", { className: "h-8 w-px bg-border hidden sm:block", "aria-hidden": true }),
          services.length > 0 && /* @__PURE__ */ jsxs47("div", { className: "flex flex-col gap-1 min-w-[130px]", children: [
            /* @__PURE__ */ jsx53("span", { className: "text-xs text-muted-foreground font-medium", children: t2.service }),
            /* @__PURE__ */ jsxs47(
              Select,
              {
                value: filters.service ?? "__all__",
                onValueChange: handleServiceChange,
                children: [
                  /* @__PURE__ */ jsx53(SelectTrigger, { className: "h-8 text-xs", children: /* @__PURE__ */ jsx53(SelectValue, { placeholder: t2.allServices }) }),
                  /* @__PURE__ */ jsxs47(SelectContent, { children: [
                    /* @__PURE__ */ jsx53(SelectItem, { value: "__all__", children: t2.allServices }),
                    services.map((svc) => /* @__PURE__ */ jsx53(SelectItem, { value: svc, children: svc }, svc))
                  ] })
                ]
              }
            )
          ] }),
          components2.length > 0 && /* @__PURE__ */ jsxs47("div", { className: "flex flex-col gap-1 min-w-[130px]", children: [
            /* @__PURE__ */ jsx53("span", { className: "text-xs text-muted-foreground font-medium", children: t2.component }),
            /* @__PURE__ */ jsxs47(
              Select,
              {
                value: filters.component ?? "__all__",
                onValueChange: handleComponentChange,
                children: [
                  /* @__PURE__ */ jsx53(SelectTrigger, { className: "h-8 text-xs", children: /* @__PURE__ */ jsx53(SelectValue, { placeholder: t2.allComponents }) }),
                  /* @__PURE__ */ jsxs47(SelectContent, { children: [
                    /* @__PURE__ */ jsx53(SelectItem, { value: "__all__", children: t2.allComponents }),
                    components2.map((c) => /* @__PURE__ */ jsx53(SelectItem, { value: c, children: c }, c))
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs47("div", { className: "flex flex-col gap-1", children: [
            /* @__PURE__ */ jsx53("span", { className: "text-xs text-muted-foreground font-medium", children: t2.since }),
            /* @__PURE__ */ jsx53(
              Input,
              {
                type: "datetime-local",
                className: "h-8 text-xs w-[160px]",
                value: filters.since ?? "",
                onChange: handleSinceChange
              }
            )
          ] }),
          /* @__PURE__ */ jsxs47("div", { className: "flex flex-col gap-1", children: [
            /* @__PURE__ */ jsx53("span", { className: "text-xs text-muted-foreground font-medium", children: t2.until }),
            /* @__PURE__ */ jsx53(
              Input,
              {
                type: "datetime-local",
                className: "h-8 text-xs w-[160px]",
                value: filters.until ?? "",
                onChange: handleUntilChange
              }
            )
          ] }),
          /* @__PURE__ */ jsxs47("div", { className: "flex flex-col gap-1 flex-1 min-w-[160px]", children: [
            /* @__PURE__ */ jsx53("span", { className: "text-xs text-muted-foreground font-medium", children: t2.search.replace("\u2026", "") }),
            /* @__PURE__ */ jsxs47("div", { className: "relative", children: [
              /* @__PURE__ */ jsx53(Search5, { className: "absolute start-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground pointer-events-none", "aria-hidden": true }),
              /* @__PURE__ */ jsx53(
                Input,
                {
                  className: cn("h-8 text-xs ps-7 pe-7", isRtl && "text-end"),
                  placeholder: t2.search,
                  value: localQ,
                  onChange: handleSearchChange,
                  "aria-label": t2.search
                }
              ),
              localQ && /* @__PURE__ */ jsx53(
                "button",
                {
                  type: "button",
                  onClick: handleClearSearch,
                  className: "absolute end-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors duration-fast ease-standard",
                  "aria-label": t2.clear,
                  children: /* @__PURE__ */ jsx53(X2, { className: "h-3.5 w-3.5" })
                }
              )
            ] })
          ] }),
          onToggleLiveTail && /* @__PURE__ */ jsxs47("div", { className: "flex items-center gap-2 ms-auto", children: [
            /* @__PURE__ */ jsx53(
              RefreshCw,
              {
                className: cn(
                  "h-3.5 w-3.5 text-muted-foreground transition-transform duration-fast ease-standard",
                  liveTail && "animate-spin text-success"
                ),
                "aria-hidden": true
              }
            ),
            /* @__PURE__ */ jsx53("span", { className: "text-xs text-muted-foreground font-medium", children: t2.liveTail }),
            /* @__PURE__ */ jsx53(
              Switch,
              {
                checked: liveTail,
                onCheckedChange: handleToggleLiveTail,
                "aria-label": t2.liveTail,
                className: "data-[state=checked]:bg-success"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx53("div", { className: "rounded-lg border border-border bg-card overflow-hidden", children: loading && logs.length === 0 ? /* @__PURE__ */ jsxs47(Fragment15, { children: [
          /* @__PURE__ */ jsx53("div", { className: "px-4 py-2 text-xs text-muted-foreground border-b border-border", children: t2.loading }),
          /* @__PURE__ */ jsx53(LogsTableSkeleton, {})
        ] }) : logs.length === 0 ? /* @__PURE__ */ jsx53(EmptyState2, { label: t2.noLogs, hint: t2.noLogsHint }) : /* @__PURE__ */ jsxs47(ScrollArea, { className: "max-h-[65vh]", children: [
          /* @__PURE__ */ jsxs47(Table, { children: [
            /* @__PURE__ */ jsx53(TableHeader, { children: /* @__PURE__ */ jsxs47(TableRow, { className: "hover:bg-transparent", children: [
              /* @__PURE__ */ jsx53(TableHead, { className: "w-6 ps-3" }),
              /* @__PURE__ */ jsx53(TableHead, { className: "w-[80px]", children: t2.level }),
              /* @__PURE__ */ jsx53(TableHead, { className: "w-[110px] text-muted-foreground font-medium" }),
              /* @__PURE__ */ jsx53(TableHead, { className: "w-[120px]", children: t2.service }),
              /* @__PURE__ */ jsx53(TableHead, { className: "w-[110px] hidden md:table-cell", children: t2.component }),
              /* @__PURE__ */ jsx53(TableHead, {})
            ] }) }),
            /* @__PURE__ */ jsx53(TableBody, { children: logs.map((row) => {
              const isOpen = expanded.has(row.id);
              const hasDetail = row.traceId || row.requestId || row.userId || row.attrs && Object.keys(row.attrs).length > 0;
              return /* @__PURE__ */ jsxs47(React14.Fragment, { children: [
                /* @__PURE__ */ jsxs47(
                  TableRow,
                  {
                    className: cn(
                      "cursor-pointer transition-colors duration-fast ease-standard",
                      isOpen && "bg-muted/30",
                      row.level === "error" && "bg-destructive/5 hover:bg-destructive/10",
                      row.level === "warn" && "bg-alert-amber/5 hover:bg-alert-amber/10"
                    ),
                    onClick: () => handleToggleRow(row.id),
                    "aria-expanded": isOpen,
                    children: [
                      /* @__PURE__ */ jsx53(TableCell, { className: "ps-3 pe-0 w-6", children: hasDetail ? isOpen ? /* @__PURE__ */ jsx53(ChevronDown7, { className: "h-3.5 w-3.5 text-muted-foreground", "aria-hidden": true }) : /* @__PURE__ */ jsx53(ChevronRight5, { className: "h-3.5 w-3.5 text-muted-foreground rtl:rotate-180", "aria-hidden": true }) : null }),
                      /* @__PURE__ */ jsx53(TableCell, { className: "pe-2", children: /* @__PURE__ */ jsx53(LevelBadge, { level: row.level }) }),
                      /* @__PURE__ */ jsx53(TableCell, { className: "text-xs text-muted-foreground whitespace-nowrap font-mono pe-2", children: /* @__PURE__ */ jsx53("time", { dateTime: row.ts, title: row.ts, children: formatRelativeTime(row.ts) }) }),
                      /* @__PURE__ */ jsx53(TableCell, { className: "text-xs font-medium text-foreground/80 pe-2 whitespace-nowrap", children: row.service }),
                      /* @__PURE__ */ jsx53(TableCell, { className: "text-xs text-muted-foreground pe-2 whitespace-nowrap hidden md:table-cell", children: row.component ?? "\u2014" }),
                      /* @__PURE__ */ jsx53(TableCell, { className: "text-xs text-foreground max-w-0", children: /* @__PURE__ */ jsx53("p", { className: "truncate", children: row.msg }) })
                    ]
                  }
                ),
                isOpen && /* @__PURE__ */ jsx53(TableRow, { className: "hover:bg-transparent", children: /* @__PURE__ */ jsx53(TableCell, { colSpan: 6, className: "p-0", children: /* @__PURE__ */ jsx53(ExpandedRow, { row, labels: t2 }) }) })
              ] }, row.id);
            }) })
          ] }),
          onLoadMore && /* @__PURE__ */ jsx53("div", { ref: sentinelRef, className: "h-1", "aria-hidden": true }),
          hasMore && !loading && onLoadMore && /* @__PURE__ */ jsx53("div", { className: "flex justify-center py-4", children: /* @__PURE__ */ jsx53(
            Button,
            {
              variant: "outline",
              size: "sm",
              onClick: onLoadMore,
              className: "text-xs",
              children: t2.loadMore
            }
          ) }),
          loading && logs.length > 0 && /* @__PURE__ */ jsxs47("div", { className: "flex items-center justify-center gap-2 py-4", children: [
            /* @__PURE__ */ jsx53(RefreshCw, { className: "h-4 w-4 animate-spin text-muted-foreground", "aria-hidden": true }),
            /* @__PURE__ */ jsx53("span", { className: "text-xs text-muted-foreground", children: t2.loading })
          ] })
        ] }) })
      ]
    }
  );
};
LogsView.displayName = "LogsView";

// src/components/errors/IssuesList.tsx
import { Search as Search6 } from "lucide-react";

// src/components/errors/shared.ts
function levelTone(level) {
  switch (level) {
    case "fatal":
    case "error":
      return "danger";
    case "warning":
      return "warning";
    case "info":
      return "info";
    default:
      return "neutral";
  }
}
function relTime(iso) {
  try {
    return formatRelativeTime(iso);
  } catch {
    return iso;
  }
}
var STR = {
  en: {
    issues: "Issues",
    search: "Search errors\u2026",
    allLevels: "All levels",
    environment: "Environment",
    allEnvs: "All environments",
    range: "Time range",
    events: "Events",
    users: "Users",
    lastSeen: "Last seen",
    firstSeen: "First seen",
    assignee: "Assignee",
    noIssues: "No errors \u{1F389}",
    resolve: "Resolve",
    ignore: "Ignore",
    resolved: "Resolved",
    ignored: "Ignored",
    unresolved: "Unresolved",
    stackTrace: "Stack trace",
    breadcrumbs: "Breadcrumbs",
    tags: "Tags",
    overview: "Overview",
    occurrences: "Occurrences",
    inApp: "In app",
    selectIssue: "Select an issue to see details",
    sortLastSeen: "Last seen",
    sortFirstSeen: "First seen",
    sortEvents: "Events",
    sortUsers: "Users",
    title: "Error",
    culprit: "Location"
  },
  ar: {
    issues: "\u0627\u0644\u0623\u062E\u0637\u0627\u0621",
    search: "\u0627\u0628\u062D\u062B \u0641\u064A \u0627\u0644\u0623\u062E\u0637\u0627\u0621\u2026",
    allLevels: "\u0643\u0644 \u0627\u0644\u0645\u0633\u062A\u0648\u064A\u0627\u062A",
    environment: "\u0627\u0644\u0628\u064A\u0626\u0629",
    allEnvs: "\u0643\u0644 \u0627\u0644\u0628\u064A\u0626\u0627\u062A",
    range: "\u0627\u0644\u0646\u0637\u0627\u0642 \u0627\u0644\u0632\u0645\u0646\u064A",
    events: "\u0627\u0644\u0623\u062D\u062F\u0627\u062B",
    users: "\u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u0648\u0646",
    lastSeen: "\u0622\u062E\u0631 \u0638\u0647\u0648\u0631",
    firstSeen: "\u0623\u0648\u0644 \u0638\u0647\u0648\u0631",
    assignee: "\u0627\u0644\u0645\u064F\u0633\u0646\u064E\u062F",
    noIssues: "\u0644\u0627 \u0623\u062E\u0637\u0627\u0621 \u{1F389}",
    resolve: "\u062D\u0644\u0651",
    ignore: "\u062A\u062C\u0627\u0647\u0644",
    resolved: "\u0645\u064F\u062D\u064E\u0644",
    ignored: "\u0645\u064F\u062A\u062C\u0627\u0647\u064E\u0644",
    unresolved: "\u063A\u064A\u0631 \u0645\u064F\u062D\u064E\u0644",
    stackTrace: "\u062A\u062A\u0628\u0651\u0639 \u0627\u0644\u0645\u0643\u062F\u0651\u0633",
    breadcrumbs: "\u0641\u062A\u0627\u062A \u0627\u0644\u062A\u062A\u0628\u0651\u0639",
    tags: "\u0627\u0644\u0648\u0633\u0648\u0645",
    overview: "\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629",
    occurrences: "\u0645\u0631\u0627\u062A \u0627\u0644\u062D\u062F\u0648\u062B",
    inApp: "\u062F\u0627\u062E\u0644 \u0627\u0644\u062A\u0637\u0628\u064A\u0642",
    selectIssue: "\u0627\u062E\u062A\u0631 \u062E\u0637\u0623\u064B \u0644\u0639\u0631\u0636 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644",
    sortLastSeen: "\u0622\u062E\u0631 \u0638\u0647\u0648\u0631",
    sortFirstSeen: "\u0623\u0648\u0644 \u0638\u0647\u0648\u0631",
    sortEvents: "\u0627\u0644\u0623\u062D\u062F\u0627\u062B",
    sortUsers: "\u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u0648\u0646",
    title: "\u0627\u0644\u062E\u0637\u0623",
    culprit: "\u0627\u0644\u0645\u0648\u0642\u0639"
  }
};

// src/components/errors/IssuesList.tsx
import { jsx as jsx54, jsxs as jsxs48 } from "react/jsx-runtime";
var LEVELS = ["fatal", "error", "warning", "info", "debug"];
function Spark({ values }) {
  if (!values || values.length === 0) return /* @__PURE__ */ jsx54("div", { className: "h-7 w-20" });
  const max = Math.max(...values, 1);
  return /* @__PURE__ */ jsx54("div", { className: "flex h-7 w-20 items-end gap-px", "aria-hidden": true, children: values.map((v, i) => /* @__PURE__ */ jsx54("span", { className: "flex-1 rounded-sm bg-muted-foreground/40", style: { height: `${Math.max(8, v / max * 100)}%` } }, i)) });
}
function IssuesList({
  issues,
  selectedId,
  onSelectIssue,
  language = "en",
  filter = {},
  onFilterChange,
  sort = "lastSeen",
  onSortChange,
  environments = [],
  className
}) {
  const t2 = STR[language];
  const dir = language === "ar" ? "rtl" : "ltr";
  const setFilter = (patch) => onFilterChange?.({ ...filter, ...patch });
  return /* @__PURE__ */ jsxs48("div", { dir, className: cn("flex h-full flex-col", className), children: [
    /* @__PURE__ */ jsxs48("div", { className: "flex flex-wrap items-center gap-2 border-b border-border p-3", children: [
      /* @__PURE__ */ jsxs48("div", { className: "relative min-w-[180px] flex-1", children: [
        /* @__PURE__ */ jsx54(Search6, { className: "pointer-events-none absolute top-1/2 size-4 -translate-y-1/2 text-muted-foreground ltr:left-2.5 rtl:right-2.5" }),
        /* @__PURE__ */ jsx54(
          Input,
          {
            value: filter.q ?? "",
            onChange: (e) => setFilter({ q: e.target.value }),
            placeholder: t2.search,
            className: "ltr:pl-8 rtl:pr-8"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs48(Select, { value: filter.levels?.[0] ?? "all", onValueChange: (v) => setFilter({ levels: v === "all" ? void 0 : [v] }), children: [
        /* @__PURE__ */ jsx54(SelectTrigger, { className: "w-[130px]", children: /* @__PURE__ */ jsx54(SelectValue, { placeholder: t2.allLevels }) }),
        /* @__PURE__ */ jsxs48(SelectContent, { children: [
          /* @__PURE__ */ jsx54(SelectItem, { value: "all", children: t2.allLevels }),
          LEVELS.map((l) => /* @__PURE__ */ jsx54(SelectItem, { value: l, className: "capitalize", children: l }, l))
        ] })
      ] }),
      environments.length > 0 && /* @__PURE__ */ jsxs48(Select, { value: filter.environment ?? "all", onValueChange: (v) => setFilter({ environment: v === "all" ? void 0 : v }), children: [
        /* @__PURE__ */ jsx54(SelectTrigger, { className: "w-[150px]", children: /* @__PURE__ */ jsx54(SelectValue, { placeholder: t2.allEnvs }) }),
        /* @__PURE__ */ jsxs48(SelectContent, { children: [
          /* @__PURE__ */ jsx54(SelectItem, { value: "all", children: t2.allEnvs }),
          environments.map((e) => /* @__PURE__ */ jsx54(SelectItem, { value: e, children: e }, e))
        ] })
      ] }),
      /* @__PURE__ */ jsxs48(Select, { value: sort, onValueChange: (v) => onSortChange?.(v), children: [
        /* @__PURE__ */ jsx54(SelectTrigger, { className: "w-[140px]", children: /* @__PURE__ */ jsx54(SelectValue, {}) }),
        /* @__PURE__ */ jsxs48(SelectContent, { children: [
          /* @__PURE__ */ jsx54(SelectItem, { value: "lastSeen", children: t2.sortLastSeen }),
          /* @__PURE__ */ jsx54(SelectItem, { value: "firstSeen", children: t2.sortFirstSeen }),
          /* @__PURE__ */ jsx54(SelectItem, { value: "count", children: t2.sortEvents }),
          /* @__PURE__ */ jsx54(SelectItem, { value: "userCount", children: t2.sortUsers })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs48("div", { className: "hidden items-center gap-3 border-b border-border bg-muted/30 px-4 py-2 text-xs font-medium uppercase tracking-wide text-muted-foreground md:flex", children: [
      /* @__PURE__ */ jsx54("span", { className: "flex-1", children: t2.title }),
      /* @__PURE__ */ jsx54("span", { className: "w-20 text-center", children: t2.events }),
      /* @__PURE__ */ jsxs48("span", { className: "w-24 text-center", children: [
        t2.events,
        " / ",
        t2.users
      ] }),
      /* @__PURE__ */ jsx54("span", { className: "w-24 text-end", children: t2.lastSeen })
    ] }),
    /* @__PURE__ */ jsx54("div", { className: "min-h-0 flex-1 overflow-auto", children: issues.length === 0 ? /* @__PURE__ */ jsx54("div", { className: "p-10 text-center text-sm text-muted-foreground", children: t2.noIssues }) : issues.map((iss) => {
      const active = iss.id === selectedId;
      const initial = (iss.assignee?.name || iss.assignee?.email || "?").charAt(0).toUpperCase();
      return /* @__PURE__ */ jsxs48(
        "button",
        {
          onClick: () => onSelectIssue?.(iss),
          className: cn(
            "flex w-full items-center gap-3 border-b border-border/60 px-4 py-3 text-start transition hover:bg-muted/40",
            active && "bg-primary/5 ltr:border-s-2 ltr:border-s-primary rtl:border-e-2 rtl:border-e-primary"
          ),
          children: [
            /* @__PURE__ */ jsxs48("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ jsxs48("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx54(StatusBadge, { tone: levelTone(iss.level), children: /* @__PURE__ */ jsx54("span", { className: "uppercase", children: iss.level }) }),
                /* @__PURE__ */ jsx54("span", { className: "truncate text-sm font-semibold", children: iss.title })
              ] }),
              iss.culprit && /* @__PURE__ */ jsx54("p", { className: "mt-0.5 truncate font-mono text-xs text-muted-foreground", children: iss.culprit }),
              /* @__PURE__ */ jsxs48("div", { className: "mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground", children: [
                iss.environment && /* @__PURE__ */ jsx54("span", { children: iss.environment }),
                iss.status && iss.status !== "unresolved" && /* @__PURE__ */ jsx54("span", { className: "capitalize", children: iss.status === "resolved" ? t2.resolved : t2.ignored }),
                /* @__PURE__ */ jsx54("span", { className: "md:hidden", children: relTime(iss.lastSeen) })
              ] })
            ] }),
            /* @__PURE__ */ jsx54("div", { className: "hidden md:block", children: /* @__PURE__ */ jsx54(Spark, { values: iss.frequency }) }),
            /* @__PURE__ */ jsxs48("div", { className: "hidden w-20 text-center md:block", children: [
              /* @__PURE__ */ jsx54("div", { className: "text-sm font-semibold tabular-nums", children: iss.count.toLocaleString() }),
              /* @__PURE__ */ jsx54("div", { className: "text-[11px] text-muted-foreground", children: t2.events })
            ] }),
            /* @__PURE__ */ jsxs48("div", { className: "hidden w-24 text-center md:block", children: [
              /* @__PURE__ */ jsx54("div", { className: "text-sm font-semibold tabular-nums", children: (iss.userCount ?? 0).toLocaleString() }),
              /* @__PURE__ */ jsx54("div", { className: "text-[11px] text-muted-foreground", children: t2.users })
            ] }),
            /* @__PURE__ */ jsxs48("div", { className: "hidden w-24 items-center justify-end gap-2 md:flex", children: [
              /* @__PURE__ */ jsx54("span", { className: "text-xs text-muted-foreground", children: relTime(iss.lastSeen) }),
              iss.assignee && /* @__PURE__ */ jsxs48(Avatar, { className: "size-6", children: [
                iss.assignee.avatarUrl && /* @__PURE__ */ jsx54(AvatarImage, { src: iss.assignee.avatarUrl, alt: initial }),
                /* @__PURE__ */ jsx54(AvatarFallback, { className: "text-[10px]", children: initial })
              ] })
            ] })
          ]
        },
        iss.id
      );
    }) })
  ] });
}

// src/components/errors/IssueDetail.tsx
import * as React15 from "react";
import { ChevronRight as ChevronRight6, CheckCircle2 as CheckCircle22, BellOff } from "lucide-react";
import { jsx as jsx55, jsxs as jsxs49 } from "react/jsx-runtime";
function Stat({ label, value }) {
  return /* @__PURE__ */ jsxs49("div", { className: "rounded-lg border border-border bg-card px-3 py-2", children: [
    /* @__PURE__ */ jsx55("div", { className: "text-[11px] uppercase tracking-wide text-muted-foreground", children: label }),
    /* @__PURE__ */ jsx55("div", { className: "text-sm font-semibold tabular-nums", children: value })
  ] });
}
function Frame({ frame }) {
  const [open, setOpen] = React15.useState(Boolean(frame.inApp && frame.context?.length));
  const loc = [frame.filename, frame.lineno].filter(Boolean).join(":") + (frame.colno ? `:${frame.colno}` : "");
  return /* @__PURE__ */ jsxs49(Collapsible, { open, onOpenChange: setOpen, className: cn("border-b border-border/60", !frame.inApp && "opacity-70"), children: [
    /* @__PURE__ */ jsxs49(CollapsibleTrigger, { className: "flex w-full items-center gap-2 px-3 py-2 text-start hover:bg-muted/40", children: [
      /* @__PURE__ */ jsx55(ChevronRight6, { className: cn("size-3.5 shrink-0 text-muted-foreground transition-transform", open && "rotate-90") }),
      /* @__PURE__ */ jsxs49("span", { className: "truncate font-mono text-xs", children: [
        /* @__PURE__ */ jsx55("span", { className: "text-foreground", children: loc }),
        frame.function && /* @__PURE__ */ jsxs49("span", { className: "text-muted-foreground", children: [
          " in ",
          frame.function
        ] })
      ] }),
      frame.inApp && /* @__PURE__ */ jsx55(Badge, { className: "ms-auto shrink-0 text-[10px]", children: "in app" })
    ] }),
    frame.context && frame.context.length > 0 && /* @__PURE__ */ jsx55(CollapsibleContent, { children: /* @__PURE__ */ jsx55("pre", { className: "overflow-auto bg-muted/30 px-3 py-2 font-mono text-xs leading-5", children: frame.context.map((c) => /* @__PURE__ */ jsxs49("div", { className: cn("flex gap-3", c.current && "-mx-3 bg-destructive/10 px-3"), children: [
      /* @__PURE__ */ jsx55("span", { className: "w-8 shrink-0 select-none text-end text-muted-foreground", children: c.line }),
      /* @__PURE__ */ jsx55("span", { className: cn(c.current ? "text-foreground" : "text-muted-foreground"), children: c.text })
    ] }, c.line)) }) })
  ] });
}
function BreadcrumbRow({ b }) {
  return /* @__PURE__ */ jsxs49("div", { className: "flex items-start gap-3 border-b border-border/60 px-3 py-2 text-xs", children: [
    /* @__PURE__ */ jsx55("span", { className: "w-16 shrink-0 font-mono text-muted-foreground", children: relTime(b.timestamp) }),
    b.category && /* @__PURE__ */ jsx55(Badge, { className: "shrink-0 text-[10px]", children: b.category }),
    /* @__PURE__ */ jsx55("span", { className: "min-w-0 flex-1 break-words text-foreground", children: b.message })
  ] });
}
function IssueDetail({ issue, language = "en", onResolve, onIgnore, className }) {
  const t2 = STR[language];
  const dir = language === "ar" ? "rtl" : "ltr";
  const chart = (issue.frequency ?? []).map((value, i) => ({ label: String(i), value }));
  return /* @__PURE__ */ jsxs49("div", { dir, className: cn("flex h-full flex-col", className), children: [
    /* @__PURE__ */ jsxs49("div", { className: "border-b border-border p-4", children: [
      /* @__PURE__ */ jsxs49("div", { className: "flex items-start justify-between gap-4", children: [
        /* @__PURE__ */ jsxs49("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxs49("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx55(StatusBadge, { tone: levelTone(issue.level), children: /* @__PURE__ */ jsx55("span", { className: "uppercase", children: issue.level }) }),
            /* @__PURE__ */ jsx55("h2", { className: "truncate text-base font-semibold", children: issue.title })
          ] }),
          issue.culprit && /* @__PURE__ */ jsx55("p", { className: "mt-1 truncate font-mono text-xs text-muted-foreground", children: issue.culprit })
        ] }),
        /* @__PURE__ */ jsxs49("div", { className: "flex shrink-0 gap-2", children: [
          /* @__PURE__ */ jsxs49(Button, { variant: "outline", size: "sm", onClick: () => onResolve?.(issue), children: [
            /* @__PURE__ */ jsx55(CheckCircle22, { className: "size-4" }),
            " ",
            t2.resolve
          ] }),
          /* @__PURE__ */ jsxs49(Button, { variant: "ghost", size: "sm", onClick: () => onIgnore?.(issue), children: [
            /* @__PURE__ */ jsx55(BellOff, { className: "size-4" }),
            " ",
            t2.ignore
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs49("div", { className: "mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4", children: [
        /* @__PURE__ */ jsx55(Stat, { label: t2.events, value: issue.count.toLocaleString() }),
        /* @__PURE__ */ jsx55(Stat, { label: t2.users, value: (issue.userCount ?? 0).toLocaleString() }),
        /* @__PURE__ */ jsx55(Stat, { label: t2.firstSeen, value: relTime(issue.firstSeen) }),
        /* @__PURE__ */ jsx55(Stat, { label: t2.lastSeen, value: relTime(issue.lastSeen) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs49("div", { className: "min-h-0 flex-1 overflow-auto p-4", children: [
      chart.length > 0 && /* @__PURE__ */ jsxs49("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsx55("div", { className: "mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground", children: t2.occurrences }),
        /* @__PURE__ */ jsx55(MiniBarChart, { data: chart, height: 120 })
      ] }),
      /* @__PURE__ */ jsxs49(Tabs, { defaultValue: "stack", children: [
        /* @__PURE__ */ jsxs49(TabsList, { children: [
          /* @__PURE__ */ jsx55(TabsTrigger, { value: "stack", children: t2.stackTrace }),
          /* @__PURE__ */ jsx55(TabsTrigger, { value: "breadcrumbs", children: t2.breadcrumbs }),
          /* @__PURE__ */ jsx55(TabsTrigger, { value: "tags", children: t2.tags })
        ] }),
        /* @__PURE__ */ jsx55(TabsContent, { value: "stack", children: /* @__PURE__ */ jsx55("div", { className: "overflow-hidden rounded-lg border border-border", children: (issue.stack ?? []).length === 0 ? /* @__PURE__ */ jsx55("p", { className: "p-4 text-sm text-muted-foreground", children: "\u2014" }) : issue.stack.map((f, i) => /* @__PURE__ */ jsx55(Frame, { frame: f }, i)) }) }),
        /* @__PURE__ */ jsx55(TabsContent, { value: "breadcrumbs", children: /* @__PURE__ */ jsx55("div", { className: "overflow-hidden rounded-lg border border-border", children: (issue.breadcrumbs ?? []).length === 0 ? /* @__PURE__ */ jsx55("p", { className: "p-4 text-sm text-muted-foreground", children: "\u2014" }) : issue.breadcrumbs.map((b, i) => /* @__PURE__ */ jsx55(BreadcrumbRow, { b }, i)) }) }),
        /* @__PURE__ */ jsx55(TabsContent, { value: "tags", children: /* @__PURE__ */ jsx55("div", { className: "flex flex-wrap gap-2", children: (issue.tags ?? []).length === 0 ? /* @__PURE__ */ jsx55("p", { className: "text-sm text-muted-foreground", children: "\u2014" }) : issue.tags.map((tag) => /* @__PURE__ */ jsxs49("span", { className: "inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-2 py-1 text-xs", children: [
          /* @__PURE__ */ jsx55("span", { className: "text-muted-foreground", children: tag.key }),
          /* @__PURE__ */ jsx55("span", { className: "font-medium", children: tag.value })
        ] }, tag.key)) }) })
      ] })
    ] })
  ] });
}

// src/components/errors/ErrorTrackingPage.tsx
import * as React16 from "react";
import { ArrowLeft as ArrowLeft5 } from "lucide-react";
import { jsx as jsx56, jsxs as jsxs50 } from "react/jsx-runtime";
function ErrorTrackingPage({
  issues,
  language = "en",
  filter,
  onFilterChange,
  sort,
  onSortChange,
  environments,
  onResolve,
  onIgnore,
  selectedId,
  onSelectIssue,
  className
}) {
  const t2 = STR[language];
  const dir = language === "ar" ? "rtl" : "ltr";
  const [internal, setInternal] = React16.useState(null);
  const activeId = selectedId !== void 0 ? selectedId : internal;
  const active = issues.find((i) => i.id === activeId) ?? null;
  const select = (iss) => {
    if (selectedId === void 0) setInternal(iss.id);
    onSelectIssue?.(iss);
  };
  return /* @__PURE__ */ jsxs50("div", { dir, className: cn("flex h-[100vh] max-h-full overflow-hidden bg-background text-foreground", className), children: [
    /* @__PURE__ */ jsx56(
      "div",
      {
        className: cn(
          "min-w-0 flex-col border-border",
          active ? "hidden md:flex md:max-w-md md:flex-none md:border-e lg:max-w-lg" : "flex flex-1"
        ),
        children: /* @__PURE__ */ jsx56(
          IssuesList,
          {
            issues,
            selectedId: activeId,
            onSelectIssue: select,
            language,
            filter,
            onFilterChange,
            sort,
            onSortChange,
            environments
          }
        )
      }
    ),
    /* @__PURE__ */ jsx56("div", { className: cn("min-w-0 flex-1", !active && "hidden"), children: active ? /* @__PURE__ */ jsxs50("div", { className: "flex h-full flex-col", children: [
      /* @__PURE__ */ jsx56("div", { className: "border-b border-border p-2 md:hidden", children: /* @__PURE__ */ jsxs50(Button, { variant: "ghost", size: "sm", onClick: () => selectedId === void 0 ? setInternal(null) : onSelectIssue?.(active), children: [
        /* @__PURE__ */ jsx56(ArrowLeft5, { className: "size-4 rtl:rotate-180" }),
        " ",
        t2.issues
      ] }) }),
      /* @__PURE__ */ jsx56(IssueDetail, { issue: active, language, onResolve, onIgnore, className: "min-h-0 flex-1" })
    ] }) : /* @__PURE__ */ jsx56("p", { className: "hidden p-10 text-center text-sm text-muted-foreground md:block", children: t2.selectIssue }) })
  ] });
}

// src/components/ui/sentra-loading.tsx
import * as LucideIcons2 from "lucide-react";
import { jsx as jsx57, jsxs as jsxs51 } from "react/jsx-runtime";
var SentraLoading = ({
  language = "en",
  dir = "ltr",
  iconName,
  productNameEn,
  productNameAr,
  productName
}) => {
  const isAr = language === "ar";
  const name = productName ?? (isAr ? productNameAr || productNameEn : productNameEn) ?? "Sentra";
  let Icon;
  if (iconName) {
    Icon = LucideIcons2[iconName];
  }
  return /* @__PURE__ */ jsxs51(
    "div",
    {
      className: "min-h-screen flex flex-col items-center justify-center gap-6 bg-background",
      dir,
      "aria-label": isAr ? "\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644" : "Loading",
      role: "status",
      children: [
        /* @__PURE__ */ jsxs51("div", { className: "relative flex h-24 w-24 items-center justify-center", children: [
          /* @__PURE__ */ jsx57("span", { className: "absolute h-20 w-20 rounded-full bg-primary/20 blur-xl animate-pulse" }),
          /* @__PURE__ */ jsx57(
            "span",
            {
              className: "absolute h-24 w-24 rounded-full border border-primary/25 border-t-primary/90 animate-spin",
              style: { animationDuration: "2.5s" }
            }
          ),
          /* @__PURE__ */ jsx57(
            "span",
            {
              className: "absolute h-[4.2rem] w-[4.2rem] rounded-full border border-primary/15 border-b-primary/60 animate-spin",
              style: { animationDuration: "1.8s", animationDirection: "reverse" }
            }
          ),
          Icon ? /* @__PURE__ */ jsx57(Icon, { className: "relative h-10 w-10 text-primary animate-pulse", "aria-hidden": true }) : null
        ] }),
        /* @__PURE__ */ jsx57("h1", { className: "text-xl font-semibold text-foreground tracking-wide", children: name }),
        /* @__PURE__ */ jsxs51("div", { className: "flex items-center gap-1.5", "aria-hidden": true, children: [
          /* @__PURE__ */ jsx57("span", { className: "h-1.5 w-1.5 rounded-full bg-primary/80 animate-bounce", style: { animationDelay: "-0.3s" } }),
          /* @__PURE__ */ jsx57("span", { className: "h-1.5 w-1.5 rounded-full bg-primary/60 animate-bounce", style: { animationDelay: "-0.15s" } }),
          /* @__PURE__ */ jsx57("span", { className: "h-1.5 w-1.5 rounded-full bg-primary/40 animate-bounce" })
        ] }),
        /* @__PURE__ */ jsx57("span", { className: "sr-only", children: isAr ? "\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644..." : "Loading..." })
      ]
    }
  );
};
SentraLoading.displayName = "SentraLoading";
var sentra_loading_default = SentraLoading;

// src/components/ui/contextual-skeleton.tsx
import { Loader2 as Loader28 } from "lucide-react";
import { jsx as jsx58, jsxs as jsxs52 } from "react/jsx-runtime";
var LINE_WIDTHS = ["w-full", "w-5/6", "w-4/6", "w-3/4", "w-2/3"];
var DefaultBody = ({ lines }) => /* @__PURE__ */ jsx58("div", { className: "space-y-3", children: Array.from({ length: lines }, (_, i) => /* @__PURE__ */ jsx58(Skeleton, { className: `h-4 ${LINE_WIDTHS[i % LINE_WIDTHS.length]}` }, i)) });
var GridBody = () => /* @__PURE__ */ jsx58("div", { className: "space-y-3", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsx58(Skeleton, { className: "h-16 w-full" }, i)) });
var TimelineBody = () => /* @__PURE__ */ jsx58("div", { className: "space-y-4", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxs52("div", { className: "flex gap-3", children: [
  /* @__PURE__ */ jsx58(Skeleton, { className: "w-2.5 h-2.5 rounded-full mt-1.5 shrink-0" }),
  /* @__PURE__ */ jsxs52("div", { className: "flex-1 space-y-1", children: [
    /* @__PURE__ */ jsx58(Skeleton, { className: "h-3 w-20" }),
    /* @__PURE__ */ jsx58(Skeleton, { className: "h-4 w-full" })
  ] })
] }, i)) });
var ContextualSkeleton = ({
  description,
  variant = "default",
  lines = 3,
  language = "en"
}) => {
  const lang = language === "ar" ? "ar" : "en";
  return /* @__PURE__ */ jsxs52("div", { className: "space-y-3", "aria-busy": "true", children: [
    /* @__PURE__ */ jsxs52("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsx58(Loader28, { className: "w-3.5 h-3.5 animate-spin text-primary", "aria-hidden": "true" }),
      /* @__PURE__ */ jsx58("span", { children: description[lang] })
    ] }),
    variant === "timeline" ? /* @__PURE__ */ jsx58(TimelineBody, {}) : variant === "grid" ? /* @__PURE__ */ jsx58(GridBody, {}) : /* @__PURE__ */ jsx58(DefaultBody, { lines })
  ] });
};
ContextualSkeleton.displayName = "ContextualSkeleton";

// src/components/ui/section-skeleton.tsx
import { jsx as jsx59, jsxs as jsxs53 } from "react/jsx-runtime";
var SectionSkeleton = ({ title, rows = 3 }) => {
  return /* @__PURE__ */ jsxs53(
    Card,
    {
      className: "bg-card border-border",
      "aria-busy": "true",
      "aria-label": title || "Loading",
      "data-testid": title ? `section-skeleton-${title.toLowerCase().replace(/\s+/g, "-")}` : "section-skeleton",
      children: [
        title && /* @__PURE__ */ jsx59(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsx59(Skeleton, { className: "h-4 w-40" }) }),
        /* @__PURE__ */ jsx59(CardContent, { className: "space-y-2 pt-4", children: Array.from({ length: rows }).map((_, i) => /* @__PURE__ */ jsx59(
          Skeleton,
          {
            className: "h-4 rounded-md",
            style: { width: `${100 - i * 10}%` }
          },
          i
        )) })
      ]
    }
  );
};
SectionSkeleton.displayName = "SectionSkeleton";

// src/theme/brand.ts
function isHSL(value) {
  return /^\d+(\.\d+)?\s+\d+(\.\d+)?%\s+\d+(\.\d+)?%$/.test(value.trim());
}
function isValidColor(value) {
  const t2 = value.trim();
  return isHSL(t2) || /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(t2);
}
function hexToHSL(hex) {
  let h = hex.replace("#", "").trim();
  if (h.length === 3) h = h.split("").map((c) => c + c).join("");
  if (h.length !== 6) return "";
  const r = parseInt(h.substring(0, 2), 16) / 255;
  const g = parseInt(h.substring(2, 4), 16) / 255;
  const b = parseInt(h.substring(4, 6), 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  if (max === min) return `0 0% ${Math.round(l * 100)}%`;
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let hue = 0;
  if (max === r) hue = ((g - b) / d + (g < b ? 6 : 0)) / 6;
  else if (max === g) hue = ((b - r) / d + 2) / 6;
  else hue = ((r - g) / d + 4) / 6;
  return `${Math.round(hue * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
}
function toHSLSafe(color) {
  if (!color) return null;
  const t2 = color.trim();
  if (isHSL(t2)) return t2;
  const result = hexToHSL(t2);
  return result !== "" ? result : null;
}
function nudgeL(hsl, delta) {
  const parts = hsl.trim().split(/\s+/);
  if (parts.length < 3) return hsl;
  const l = parseFloat(parts[2] ?? "0");
  const newL = Math.max(0, Math.min(100, l + delta));
  return `${parts[0]} ${parts[1]} ${Math.round(newL)}%`;
}
var SENTRA_BRAND = {
  /** Brand primary: Sentra crimson (--primary 345 75% 33%). */
  primaryHex: "#931535",
  /** Brand accent: Tailwind violet-500. */
  accentHex: "#daab4e",
  /** Logo path — products serve this from their own /public directory. */
  logoUrl: "/sentra-logo-full.png"
};
var SENTRA_PRIMARY_HSL = toHSLSafe(SENTRA_BRAND.primaryHex);
var SENTRA_ACCENT_HSL = toHSLSafe(SENTRA_BRAND.accentHex);
function applyBrand(root, tokens = {}) {
  const primaryHSL = (tokens.primaryHex ? toHSLSafe(tokens.primaryHex) : null) ?? SENTRA_PRIMARY_HSL;
  root.style.setProperty("--primary", primaryHSL);
  root.style.setProperty("--brand-primary", primaryHSL);
  root.style.setProperty("--brand-primary-glow", nudgeL(primaryHSL, 7));
  root.style.setProperty("--ring", primaryHSL);
  root.style.setProperty("--sidebar-primary", primaryHSL);
  root.style.setProperty("--sidebar-ring", primaryHSL);
  root.style.setProperty("--ai-glow", primaryHSL);
  const accentHSL = (tokens.accentHex ? toHSLSafe(tokens.accentHex) : null) ?? SENTRA_ACCENT_HSL;
  root.style.setProperty("--accent-muted", nudgeL(accentHSL, -13));
  const rawLogo = tokens.logoUrl;
  if (rawLogo && rawLogo.trim() !== "") {
    root.style.setProperty("--logo-url", `url("${rawLogo}")`);
  } else {
    root.style.setProperty("--logo-url", "none");
  }
}

// src/theme/BrandingProvider.tsx
import { createContext, useContext, useEffect as useEffect18 } from "react";
import { jsx as jsx60 } from "react/jsx-runtime";
var BrandContext = createContext({
  primaryHex: SENTRA_BRAND.primaryHex,
  accentHex: SENTRA_BRAND.accentHex,
  logoUrl: null,
  iconName: null,
  productName: ""
});
function useBrand() {
  return useContext(BrandContext);
}
var BrandingProvider = ({
  primaryHex,
  accentHex,
  logoUrl,
  iconName,
  productName,
  children
}) => {
  useEffect18(() => {
    if (typeof document === "undefined") return;
    applyBrand(document.documentElement, { primaryHex, accentHex, logoUrl });
  }, [primaryHex, accentHex, logoUrl]);
  const contextValue = {
    primaryHex: primaryHex ?? SENTRA_BRAND.primaryHex,
    accentHex: accentHex ?? SENTRA_BRAND.accentHex,
    // RAW logo: null when the tenant has none (empty/whitespace counts as none),
    // so consumers fall back to the icon mark instead of the Sentra default PNG.
    logoUrl: logoUrl && logoUrl.trim() !== "" ? logoUrl : null,
    iconName: iconName ?? null,
    productName: productName ?? ""
  };
  return /* @__PURE__ */ jsx60(BrandContext.Provider, { value: contextValue, children });
};
BrandingProvider.displayName = "BrandingProvider";

// src/i18n/LanguageProvider.tsx
import {
  createContext as createContext2,
  useContext as useContext2,
  useState as useState33,
  useCallback as useCallback11,
  useEffect as useEffect19
} from "react";

// src/i18n/index.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// src/i18n/locales/en.json
var en_default = {
  common: {
    refresh: "Refresh",
    save: "Save",
    cancel: "Cancel",
    delete: "Delete",
    confirm: "Confirm",
    close: "Close",
    search: "Search...",
    loading: "Loading...",
    error: "Error loading data",
    empty: "No data available",
    viewAll: "View All",
    create: "Create",
    edit: "Edit",
    remove: "Remove",
    add: "Add",
    copy: "Copy",
    share: "Share",
    back: "Back",
    next: "Next",
    submit: "Submit",
    reset: "Reset",
    yes: "Yes",
    no: "No"
  },
  header: {
    search: "Search...",
    liveMonitoring: "Live Monitoring",
    updated: "Updated {{time}}",
    refresh: "Refresh",
    switchLanguage: "Switch language"
  },
  profile: {
    profile: "Profile",
    settings: "Settings",
    lockScreen: "Lock screen",
    signOut: "Sign out",
    admin: "Admin",
    superAdmin: "Super Admin"
  },
  nav: {
    dashboard: "Dashboard",
    alerts: "Alerts",
    narratives: "Narratives",
    events: "Events",
    entities: "Entities",
    briefings: "Briefings",
    tasks: "Tasks",
    copilot: "Copilot",
    compare: "Compare",
    map: "Map"
  },
  copilot: {
    placeholder: "Ask follow-up...",
    placeholderAsk: "Ask {{name}}...",
    aiName: "Sentra AI",
    thinking: "Thinking",
    fast: "Fast",
    thinkingIndicator: "Thinking...",
    dockPosition: "Dock Position",
    dockLeft: "Dock Left",
    dockRight: "Dock Right",
    dockBottom: "Dock Bottom",
    history: "History",
    conversationHistory: "Conversation History",
    noPreviousConversations: "No previous conversations",
    deleteConversation: "Delete conversation",
    newChat: "New Chat",
    fullView: "Full View",
    dropFiles: "Drop files here",
    aiPersonaSimulation: "AI Persona Simulation",
    digitalTwin: "Digital Twin",
    twinDisclaimer: "This is an AI simulation based on known intelligence profiles. Not real communication.",
    noDataAvailable: "No data available at the moment",
    comparisonFactorsAccepted: "Comparison factors accepted",
    insightFromDashboard: "Insight from dashboard",
    copyResponse: "Copy",
    shareResponse: "Share"
  },
  auth: {
    signIn: "Sign In",
    signOut: "Sign Out",
    email: "Email",
    password: "Password",
    forgotPassword: "Forgot Password?",
    resetPassword: "Reset Password",
    twoFactor: "Two-Factor Authentication",
    enterOTP: "Enter OTP",
    backToLogin: "Back to Login",
    sendResetLink: "Send Reset Link",
    newPassword: "New Password",
    confirmPassword: "Confirm Password"
  }
};

// src/i18n/locales/ar.json
var ar_default = {
  common: {
    refresh: "\u062A\u062D\u062F\u064A\u062B",
    save: "\u062D\u0641\u0638",
    cancel: "\u0625\u0644\u063A\u0627\u0621",
    delete: "\u062D\u0630\u0641",
    confirm: "\u062A\u0623\u0643\u064A\u062F",
    close: "\u0625\u063A\u0644\u0627\u0642",
    search: "\u0628\u062D\u062B...",
    loading: "\u062C\u0627\u0631\u064D \u0627\u0644\u062A\u062D\u0645\u064A\u0644...",
    error: "\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A",
    empty: "\u0644\u0627 \u062A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A",
    viewAll: "\u0639\u0631\u0636 \u0627\u0644\u0643\u0644",
    create: "\u0625\u0646\u0634\u0627\u0621",
    edit: "\u062A\u0639\u062F\u064A\u0644",
    remove: "\u0625\u0632\u0627\u0644\u0629",
    add: "\u0625\u0636\u0627\u0641\u0629",
    copy: "\u0646\u0633\u062E",
    share: "\u0645\u0634\u0627\u0631\u0643\u0629",
    back: "\u0631\u062C\u0648\u0639",
    next: "\u0627\u0644\u062A\u0627\u0644\u064A",
    submit: "\u0625\u0631\u0633\u0627\u0644",
    reset: "\u0625\u0639\u0627\u062F\u0629 \u062A\u0639\u064A\u064A\u0646",
    yes: "\u0646\u0639\u0645",
    no: "\u0644\u0627"
  },
  header: {
    search: "\u0628\u062D\u062B...",
    liveMonitoring: "\u0627\u0644\u0645\u0631\u0627\u0642\u0628\u0629 \u0627\u0644\u0645\u0628\u0627\u0634\u0631\u0629",
    updated: "\u0622\u062E\u0631 \u062A\u062D\u062F\u064A\u062B {{time}}",
    refresh: "\u062A\u062D\u062F\u064A\u062B",
    switchLanguage: "\u062A\u0628\u062F\u064A\u0644 \u0627\u0644\u0644\u063A\u0629"
  },
  profile: {
    profile: "\u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0634\u062E\u0635\u064A",
    settings: "\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A",
    lockScreen: "\u0642\u0641\u0644 \u0627\u0644\u0634\u0627\u0634\u0629",
    signOut: "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C",
    admin: "\u0644\u0648\u062D\u0629 \u0627\u0644\u0625\u062F\u0627\u0631\u0629",
    superAdmin: "\u0627\u0644\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0639\u0644\u064A\u0627"
  },
  nav: {
    dashboard: "\u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645",
    alerts: "\u0627\u0644\u062A\u0646\u0628\u064A\u0647\u0627\u062A",
    narratives: "\u0627\u0644\u0633\u0631\u062F\u064A\u0627\u062A",
    events: "\u0627\u0644\u0623\u062D\u062F\u0627\u062B",
    entities: "\u0627\u0644\u0643\u064A\u0627\u0646\u0627\u062A",
    briefings: "\u0627\u0644\u0625\u062D\u0627\u0637\u0627\u062A",
    tasks: "\u0627\u0644\u0645\u0647\u0627\u0645",
    copilot: "\u0627\u0644\u0645\u0633\u0627\u0639\u062F \u0627\u0644\u0630\u0643\u064A",
    compare: "\u0645\u0642\u0627\u0631\u0646\u0629",
    map: "\u0627\u0644\u062E\u0631\u064A\u0637\u0629"
  },
  copilot: {
    placeholder: "\u0627\u0633\u0623\u0644 \u0627\u0644\u0645\u0633\u0627\u0639\u062F...",
    placeholderAsk: "\u0627\u0633\u0623\u0644 {{name}}...",
    aiName: "\u0633\u0646\u062A\u0631\u0627 \u0627\u0644\u0630\u0643\u064A",
    thinking: "\u062A\u0641\u0643\u064A\u0631",
    fast: "\u0633\u0631\u064A\u0639",
    thinkingIndicator: "\u062C\u0627\u0631\u064D \u0627\u0644\u062A\u0641\u0643\u064A\u0631...",
    dockPosition: "\u0645\u0648\u0636\u0639 \u0627\u0644\u0646\u0627\u0641\u0630\u0629",
    dockLeft: "\u062A\u062B\u0628\u064A\u062A \u064A\u0633\u0627\u0631",
    dockRight: "\u062A\u062B\u0628\u064A\u062A \u064A\u0645\u064A\u0646",
    dockBottom: "\u062A\u062B\u0628\u064A\u062A \u0623\u0633\u0641\u0644",
    history: "\u0627\u0644\u0633\u062C\u0644",
    conversationHistory: "\u0627\u0644\u0645\u062D\u0627\u062F\u062B\u0627\u062A \u0627\u0644\u0633\u0627\u0628\u0642\u0629",
    noPreviousConversations: "\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u062D\u0627\u062F\u062B\u0627\u062A \u0633\u0627\u0628\u0642\u0629",
    deleteConversation: "\u062D\u0630\u0641 \u0627\u0644\u0645\u062D\u0627\u062F\u062B\u0629",
    newChat: "\u0645\u062D\u0627\u062F\u062B\u0629 \u062C\u062F\u064A\u062F\u0629",
    fullView: "\u0639\u0631\u0636 \u0643\u0627\u0645\u0644",
    dropFiles: "\u0623\u0641\u0644\u062A \u0627\u0644\u0645\u0644\u0641\u0627\u062A \u0647\u0646\u0627",
    aiPersonaSimulation: "\u0645\u062D\u0627\u0643\u0627\u0629 \u0630\u0643\u0627\u0621 \u0627\u0635\u0637\u0646\u0627\u0639\u064A",
    digitalTwin: "\u062A\u0648\u0623\u0645 \u0631\u0642\u0645\u064A",
    twinDisclaimer: "\u0647\u0630\u0647 \u0645\u062D\u0627\u0643\u0627\u0629 \u0630\u0643\u0627\u0621 \u0627\u0635\u0637\u0646\u0627\u0639\u064A \u0645\u0628\u0646\u064A\u0629 \u0639\u0644\u0649 \u0645\u0644\u0641\u0627\u062A \u0627\u0633\u062A\u062E\u0628\u0627\u0631\u0627\u062A\u064A\u0629 \u0645\u0639\u0631\u0648\u0641\u0629. \u0644\u064A\u0633\u062A \u062A\u0648\u0627\u0635\u0644\u0627\u064B \u062D\u0642\u064A\u0642\u064A\u0627\u064B.",
    noDataAvailable: "\u0644\u0627 \u062A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A \u0645\u062A\u0627\u062D\u0629 \u062D\u0627\u0644\u064A\u0627\u064B",
    comparisonFactorsAccepted: "\u062A\u0645 \u0642\u0628\u0648\u0644 \u0639\u0648\u0627\u0645\u0644 \u0627\u0644\u0645\u0642\u0627\u0631\u0646\u0629",
    insightFromDashboard: "\u0631\u0624\u064A\u0629 \u0645\u0646 \u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645",
    copyResponse: "\u0646\u0633\u062E",
    shareResponse: "\u0645\u0634\u0627\u0631\u0643\u0629"
  },
  auth: {
    signIn: "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644",
    signOut: "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C",
    email: "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A",
    password: "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631",
    forgotPassword: "\u0646\u0633\u064A\u062A \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631\u061F",
    resetPassword: "\u0625\u0639\u0627\u062F\u0629 \u062A\u0639\u064A\u064A\u0646 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631",
    twoFactor: "\u0627\u0644\u062A\u062D\u0642\u0642 \u0628\u062E\u0637\u0648\u062A\u064A\u0646",
    enterOTP: "\u0623\u062F\u062E\u0644 \u0631\u0645\u0632 \u0627\u0644\u062A\u062D\u0642\u0642",
    backToLogin: "\u0627\u0644\u0639\u0648\u062F\u0629 \u0644\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644",
    sendResetLink: "\u0625\u0631\u0633\u0627\u0644 \u0631\u0627\u0628\u0637 \u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u062A\u0639\u064A\u064A\u0646",
    newPassword: "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062C\u062F\u064A\u062F\u0629",
    confirmPassword: "\u062A\u0623\u0643\u064A\u062F \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631"
  }
};

// src/i18n/index.ts
var resources = {
  en: {
    common: en_default.common,
    header: en_default.header,
    profile: en_default.profile,
    nav: en_default.nav,
    copilot: en_default.copilot,
    auth: en_default.auth
  },
  ar: {
    common: ar_default.common,
    header: ar_default.header,
    profile: ar_default.profile,
    nav: ar_default.nav,
    copilot: ar_default.copilot,
    auth: ar_default.auth
  }
};
function initI18n() {
  if (i18n.isInitialized) return;
  i18n.use(initReactI18next).init({
    /**
     * DEFAULT LANGUAGE = EN. This is the bug fix: all panels default to
     * English. Arabic is only rendered when the user explicitly switches or
     * the app seeds the provider with `initialLanguage="ar"` from a Fort
     * profile (post-login).
     */
    lng: "en",
    fallbackLng: "en",
    supportedLngs: ["en", "ar"],
    defaultNS: "common",
    ns: ["common", "header", "profile", "nav", "copilot", "auth"],
    resources,
    interpolation: {
      escapeValue: false
      // React already escapes
    },
    // Disable auto-detection — language is controlled exclusively via
    // LanguageProvider.setLanguage (reads Fort profile.lang post-login).
    detection: void 0
  });
}
var i18n_default = i18n;

// src/i18n/LanguageProvider.tsx
import { useTranslation } from "react-i18next";
import { jsx as jsx61 } from "react/jsx-runtime";
var LanguageContext = createContext2(null);
initI18n();
var LANG_STORAGE_KEY = "sentra:lang";
var LANG_COOKIE_NAME = "sentra_lang";
var readCachedLang = () => {
  if (typeof window === "undefined") return null;
  try {
    const v = window.localStorage.getItem(LANG_STORAGE_KEY);
    return v === "en" || v === "ar" ? v : null;
  } catch {
    return null;
  }
};
var writeLangCookie = (l) => {
  if (typeof document === "undefined") return;
  document.cookie = `${LANG_COOKIE_NAME}=${l}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
};
var LanguageProvider = ({
  children,
  initialLanguage = "en",
  onLanguageChange
}) => {
  const [language, setLanguageState] = useState33(initialLanguage);
  const applyDirToDocument = useCallback11((l) => {
    if (typeof document === "undefined") return;
    document.documentElement.dir = l === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = l;
  }, []);
  useEffect19(() => {
    const cached = readCachedLang();
    const resolved = cached ?? initialLanguage;
    if (resolved !== language) setLanguageState(resolved);
    applyDirToDocument(resolved);
    writeLangCookie(resolved);
    if (i18n_default.language !== resolved) {
      i18n_default.changeLanguage(resolved);
    }
  }, []);
  const setLanguage = useCallback11(
    (l) => {
      setLanguageState(l);
      applyDirToDocument(l);
      i18n_default.changeLanguage(l);
      try {
        if (typeof window !== "undefined") window.localStorage.setItem(LANG_STORAGE_KEY, l);
      } catch {
      }
      writeLangCookie(l);
      onLanguageChange?.(l);
    },
    [applyDirToDocument, onLanguageChange]
  );
  const seedLanguage = useCallback11(
    (l) => {
      if (readCachedLang()) return;
      setLanguageState(l);
      applyDirToDocument(l);
      i18n_default.changeLanguage(l);
    },
    [applyDirToDocument]
  );
  const t2 = useCallback11(
    (key, vars) => {
      return i18n_default.t(key, { ...vars, lng: language });
    },
    [language]
  );
  const value = {
    language,
    lang: language,
    isRTL: language === "ar",
    setLanguage,
    seedLanguage,
    t: t2
  };
  return /* @__PURE__ */ jsx61(LanguageContext.Provider, { value, children });
};
LanguageProvider.displayName = "LanguageProvider";
var useT2 = () => {
  const ctx = useContext2(LanguageContext);
  if (!ctx) {
    throw new Error("[useT] Must be used inside <LanguageProvider> from @prism/ui");
  }
  return ctx;
};
var useLanguage = () => useT2();

// src/components/copilot/artifacts/ArtifactTable.tsx
import { jsx as jsx62, jsxs as jsxs54 } from "react/jsx-runtime";
var ArtifactTable = ({ data, language = "en", dir }) => {
  const resolvedDir = dir ?? (language === "ar" ? "rtl" : "ltr");
  const rawCols = data?.columns ?? [];
  const cols = rawCols.map(
    (c, i) => typeof c === "string" ? { key: String(i), label_en: c, label_ar: c } : c
  );
  const rawRows = data?.rows ?? [];
  const cellOf = (row, col, colIdx) => Array.isArray(row) ? row[colIdx] : row?.[col.key];
  if (cols.length === 0) {
    return /* @__PURE__ */ jsx62("p", { className: "text-xs text-muted-foreground italic", children: language === "ar" ? "\u0644\u0627 \u062A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A" : "No data" });
  }
  return /* @__PURE__ */ jsx62("div", { className: "overflow-x-auto rounded-md border border-border", dir: resolvedDir, children: /* @__PURE__ */ jsxs54(Table, { children: [
    /* @__PURE__ */ jsx62(TableHeader, { children: /* @__PURE__ */ jsx62(TableRow, { children: cols.map((col, colIdx) => /* @__PURE__ */ jsx62(
      TableHead,
      {
        className: "text-start text-xs font-semibold text-muted-foreground bg-muted/40 px-3 py-2",
        children: language === "ar" && col.label_ar ? col.label_ar : col.label_en
      },
      col.key ?? colIdx
    )) }) }),
    /* @__PURE__ */ jsx62(TableBody, { children: rawRows.length === 0 ? /* @__PURE__ */ jsx62(TableRow, { children: /* @__PURE__ */ jsx62(
      TableCell,
      {
        colSpan: cols.length,
        className: "text-center text-xs text-muted-foreground py-4",
        children: language === "ar" ? "\u0644\u0627 \u062A\u0648\u062C\u062F \u0635\u0641\u0648\u0641" : "No rows"
      }
    ) }) : rawRows.map((row, rowIdx) => /* @__PURE__ */ jsx62(TableRow, { className: "hover:bg-muted/30 transition-colors duration-fast ease-standard", children: cols.map((col, colIdx) => {
      const v = cellOf(row, col, colIdx);
      return /* @__PURE__ */ jsx62(
        TableCell,
        {
          className: "text-start text-xs text-foreground px-3 py-2",
          children: v !== void 0 && v !== null ? String(v) : "\u2014"
        },
        col.key ?? colIdx
      );
    }) }, rowIdx)) })
  ] }) });
};
ArtifactTable.displayName = "ArtifactTable";

// src/components/copilot/artifacts/ArtifactChart.tsx
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip as Tooltip2,
  Legend,
  ResponsiveContainer as ResponsiveContainer3
} from "recharts";
import { jsx as jsx63, jsxs as jsxs55 } from "react/jsx-runtime";
var CHART_PALETTE = [
  "hsl(var(--primary))",
  "hsl(var(--gold, 45 90% 58%))",
  "hsl(var(--alert-amber))",
  "hsl(var(--success))",
  "hsl(var(--alert-cyan))",
  "#7E96BA",
  // sentra-navy-300 (fallback)
  "#B38A22"
  // sentra-gold-600 (fallback)
];
function seriesLabel(s, language) {
  return language === "ar" && s.label_ar ? s.label_ar : s.label_en;
}
var BarChartView = ({ series, language }) => {
  const allX = Array.from(new Set(series.flatMap((s) => s.points.map((p) => String(p.x)))));
  const chartData = allX.map((x) => {
    const row = { x };
    series.forEach((s, i) => {
      const pt = s.points.find((p) => String(p.x) === x);
      row[`s${i}`] = pt ? pt.y : 0;
    });
    return row;
  });
  return /* @__PURE__ */ jsx63(ResponsiveContainer3, { width: "100%", height: 180, children: /* @__PURE__ */ jsxs55(BarChart, { data: chartData, margin: { top: 4, right: 4, left: -16, bottom: 0 }, children: [
    /* @__PURE__ */ jsx63(XAxis, { dataKey: "x", tick: { fontSize: 10, fill: "hsl(var(--muted-foreground))" } }),
    /* @__PURE__ */ jsx63(YAxis, { tick: { fontSize: 10, fill: "hsl(var(--muted-foreground))" } }),
    /* @__PURE__ */ jsx63(
      Tooltip2,
      {
        contentStyle: { background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", fontSize: 11 },
        labelStyle: { color: "hsl(var(--foreground))" }
      }
    ),
    series.length > 1 && /* @__PURE__ */ jsx63(
      Legend,
      {
        formatter: (value) => {
          const idx = Number(value.slice(1));
          return seriesLabel(series[idx], language);
        },
        wrapperStyle: { fontSize: 10 }
      }
    ),
    series.map((s, i) => /* @__PURE__ */ jsx63(Bar, { dataKey: `s${i}`, fill: CHART_PALETTE[i % CHART_PALETTE.length], radius: [2, 2, 0, 0] }, `s${i}`))
  ] }) });
};
BarChartView.displayName = "BarChartView";
var LineChartView = ({ series, language }) => {
  const allX = Array.from(new Set(series.flatMap((s) => s.points.map((p) => String(p.x)))));
  const chartData = allX.map((x) => {
    const row = { x };
    series.forEach((s, i) => {
      const pt = s.points.find((p) => String(p.x) === x);
      row[`s${i}`] = pt ? pt.y : 0;
    });
    return row;
  });
  return /* @__PURE__ */ jsx63(ResponsiveContainer3, { width: "100%", height: 180, children: /* @__PURE__ */ jsxs55(LineChart, { data: chartData, margin: { top: 4, right: 4, left: -16, bottom: 0 }, children: [
    /* @__PURE__ */ jsx63(XAxis, { dataKey: "x", tick: { fontSize: 10, fill: "hsl(var(--muted-foreground))" } }),
    /* @__PURE__ */ jsx63(YAxis, { tick: { fontSize: 10, fill: "hsl(var(--muted-foreground))" } }),
    /* @__PURE__ */ jsx63(
      Tooltip2,
      {
        contentStyle: { background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", fontSize: 11 },
        labelStyle: { color: "hsl(var(--foreground))" }
      }
    ),
    series.length > 1 && /* @__PURE__ */ jsx63(
      Legend,
      {
        formatter: (value) => {
          const idx = Number(value.slice(1));
          return seriesLabel(series[idx], language);
        },
        wrapperStyle: { fontSize: 10 }
      }
    ),
    series.map((s, i) => /* @__PURE__ */ jsx63(
      Line,
      {
        type: "monotone",
        dataKey: `s${i}`,
        stroke: CHART_PALETTE[i % CHART_PALETTE.length],
        dot: false,
        strokeWidth: 2
      },
      `s${i}`
    ))
  ] }) });
};
LineChartView.displayName = "LineChartView";
var PieChartView = ({ series, language }) => {
  const first = series[0];
  if (!first) return null;
  const pieData = first.points.map((p) => ({
    name: String(p.x),
    value: p.y
  }));
  return /* @__PURE__ */ jsx63(ResponsiveContainer3, { width: "100%", height: 180, children: /* @__PURE__ */ jsxs55(PieChart, { children: [
    /* @__PURE__ */ jsx63(
      Pie,
      {
        data: pieData,
        cx: "50%",
        cy: "50%",
        innerRadius: 40,
        outerRadius: 70,
        paddingAngle: 2,
        dataKey: "value",
        label: ({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`,
        labelLine: false,
        children: pieData.map((_, idx) => /* @__PURE__ */ jsx63(Cell, { fill: CHART_PALETTE[idx % CHART_PALETTE.length] }, `cell-${idx}`))
      }
    ),
    /* @__PURE__ */ jsx63(
      Tooltip2,
      {
        contentStyle: { background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", fontSize: 11 }
      }
    ),
    series.length > 1 && /* @__PURE__ */ jsx63(
      Legend,
      {
        wrapperStyle: { fontSize: 10 }
      }
    ),
    series.length === 1 && first.label_ar && language === "ar" && first.label_ar !== first.label_en && /* @__PURE__ */ jsx63(Legend, { wrapperStyle: { fontSize: 10 } })
  ] }) });
};
PieChartView.displayName = "PieChartView";
var ArtifactChart = ({ data, language = "en" }) => {
  const raw = data;
  const type = raw.type === "line" || raw.type === "pie" ? raw.type : "bar";
  let series = Array.isArray(raw.series) ? raw.series : [];
  if (series.length === 0 && Array.isArray(raw.datasets) && Array.isArray(raw.labels)) {
    const labels = raw.labels;
    series = raw.datasets.map((ds, di) => ({
      label_en: ds.label ?? `Series ${di + 1}`,
      points: (ds.data ?? []).map((y, i) => ({ x: labels[i] ?? i, y }))
    }));
  }
  if (series.length === 0) {
    return /* @__PURE__ */ jsx63("p", { className: "text-xs text-muted-foreground italic", children: language === "ar" ? "\u0644\u0627 \u062A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A" : "No data" });
  }
  return /* @__PURE__ */ jsxs55("div", { className: "w-full", dir: "ltr", children: [
    type === "bar" && /* @__PURE__ */ jsx63(BarChartView, { series, language }),
    type === "line" && /* @__PURE__ */ jsx63(LineChartView, { series, language }),
    type === "pie" && /* @__PURE__ */ jsx63(PieChartView, { series, language })
  ] });
};
ArtifactChart.displayName = "ArtifactChart";

// src/components/intel/SeverityChip.tsx
import { jsx as jsx64, jsxs as jsxs56 } from "react/jsx-runtime";
var SEVERITY_LABELS = {
  critical: { en: "Critical", ar: "\u062D\u0631\u062C" },
  high: { en: "High", ar: "\u0645\u0631\u062A\u0641\u0639" },
  medium: { en: "Medium", ar: "\u0645\u062A\u0648\u0633\u0637" },
  low: { en: "Low", ar: "\u0645\u0646\u062E\u0641\u0636" }
};
var SEVERITY_DOT = {
  critical: "bg-destructive",
  high: "bg-destructive/70",
  medium: "bg-amber-400",
  low: "bg-green-500"
};
var SEVERITY_BADGE = {
  critical: "bg-destructive/10 text-destructive border-destructive/25",
  high: "bg-destructive/8  text-destructive border-destructive/18",
  medium: "bg-amber-400/10   text-amber-600   border-amber-400/25  dark:text-amber-400",
  low: "bg-green-500/10   text-green-700   border-green-500/25  dark:text-green-400"
};
var SeverityChip = ({ severity, scopeName, language = "en", className }) => {
  const label = language === "ar" ? SEVERITY_LABELS[severity].ar : SEVERITY_LABELS[severity].en;
  return /* @__PURE__ */ jsxs56(
    "span",
    {
      className: cn("inline-flex items-center gap-2 flex-wrap", className),
      "aria-label": `${label}${scopeName ? ` \xB7 ${scopeName}` : ""}`,
      children: [
        /* @__PURE__ */ jsxs56(
          "span",
          {
            className: cn(
              "inline-flex items-center gap-1 rounded-md border px-1.5 py-0.5 text-[10px] font-semibold leading-none tracking-wide uppercase",
              SEVERITY_BADGE[severity]
            ),
            "aria-hidden": "true",
            children: [
              /* @__PURE__ */ jsx64(
                "span",
                {
                  className: cn("size-1.5 rounded-full shrink-0", SEVERITY_DOT[severity]),
                  "aria-hidden": "true"
                }
              ),
              label
            ]
          }
        ),
        scopeName && /* @__PURE__ */ jsx64(
          "span",
          {
            className: "inline-flex items-center rounded-md border border-border/60 bg-muted/40 px-1.5 py-0.5 text-[10px] font-medium leading-none text-muted-foreground",
            "aria-hidden": "true",
            children: scopeName
          }
        )
      ]
    }
  );
};
SeverityChip.displayName = "SeverityChip";

// src/components/copilot/artifacts/ArtifactCard.tsx
import { jsx as jsx65, jsxs as jsxs57 } from "react/jsx-runtime";
var ArtifactCard = ({ data, artifactTitle, language = "en", dir }) => {
  const resolvedDir = dir ?? (language === "ar" ? "rtl" : "ltr");
  const cardTitle = language === "ar" ? data.title_ar || data.title_en || artifactTitle || "" : data.title_en || artifactTitle || "";
  const cardBody = language === "ar" ? data.body_ar || data.body_en || "" : data.body_en || "";
  const validSeverities = ["critical", "high", "medium", "low"];
  const severity = data.severity && validSeverities.includes(data.severity) ? data.severity : null;
  return /* @__PURE__ */ jsxs57(
    "div",
    {
      className: "rounded-lg border border-border bg-card text-foreground p-3 space-y-2",
      dir: resolvedDir,
      children: [
        (cardTitle || severity) && /* @__PURE__ */ jsxs57("div", { className: "flex items-start justify-between gap-2", children: [
          cardTitle && /* @__PURE__ */ jsx65("p", { className: "text-sm font-semibold text-foreground leading-snug flex-1 min-w-0", children: cardTitle }),
          severity && /* @__PURE__ */ jsx65(
            SeverityChip,
            {
              severity,
              language,
              className: "shrink-0 mt-0.5"
            }
          )
        ] }),
        cardBody && /* @__PURE__ */ jsx65("p", { className: "text-xs text-muted-foreground leading-relaxed", dir: "auto", children: cardBody }),
        data.fields && data.fields.length > 0 && /* @__PURE__ */ jsx65("dl", { className: "space-y-1 border-t border-border/50 pt-2 mt-2", children: data.fields.map((field, i) => /* @__PURE__ */ jsxs57("div", { className: "flex items-start gap-2 text-xs", children: [
          /* @__PURE__ */ jsx65("dt", { className: "text-muted-foreground shrink-0 min-w-[6rem] max-w-[8rem] truncate font-medium", children: field.label }),
          /* @__PURE__ */ jsx65("dd", { className: "text-foreground flex-1 min-w-0 break-words", dir: "auto", children: String(field.value) })
        ] }, i)) })
      ]
    }
  );
};
ArtifactCard.displayName = "ArtifactCard";

// src/components/copilot/artifacts/ArtifactActions.tsx
import { jsx as jsx66 } from "react/jsx-runtime";
var ArtifactActions = ({ data, onAction, language = "en", dir }) => {
  const resolvedDir = dir ?? (language === "ar" ? "rtl" : "ltr");
  if (!data.items || data.items.length === 0) {
    return null;
  }
  const handleClick = (item) => {
    onAction?.(item);
  };
  return /* @__PURE__ */ jsx66(
    "div",
    {
      className: "flex flex-wrap gap-2",
      dir: resolvedDir,
      role: "group",
      "aria-label": language === "ar" ? "\u0625\u062C\u0631\u0627\u0621\u0627\u062A \u0645\u0642\u062A\u0631\u062D\u0629" : "Suggested actions",
      children: data.items.map((item) => {
        const label = language === "ar" && item.label_ar ? item.label_ar : item.label_en;
        return /* @__PURE__ */ jsx66(
          "button",
          {
            type: "button",
            onClick: () => handleClick(item),
            className: "inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary hover:bg-primary/20 hover:border-primary/50 transition-colors duration-fast ease-standard focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1",
            "aria-label": label,
            children: label
          },
          item.id
        );
      })
    }
  );
};
ArtifactActions.displayName = "ArtifactActions";

// src/components/chat/MarkdownContent.tsx
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { jsx as jsx67 } from "react/jsx-runtime";
var components = {
  p: ({ node: _node, ref: _ref, ...props }) => /* @__PURE__ */ jsx67("p", { className: "my-1.5 leading-relaxed", ...props }),
  a: ({ node: _node, ref: _ref, ...props }) => /* @__PURE__ */ jsx67(
    "a",
    {
      target: "_blank",
      rel: "noopener noreferrer",
      className: "text-primary underline underline-offset-2 break-words hover:opacity-80 transition-opacity duration-fast ease-standard",
      ...props
    }
  ),
  ul: ({ node: _node, ref: _ref, ...props }) => /* @__PURE__ */ jsx67("ul", { className: "my-1.5 list-disc ps-5 space-y-1", ...props }),
  ol: ({ node: _node, ref: _ref, ...props }) => /* @__PURE__ */ jsx67("ol", { className: "my-1.5 list-decimal ps-5 space-y-1", ...props }),
  li: ({ node: _node, ref: _ref, ...props }) => /* @__PURE__ */ jsx67("li", { className: "leading-relaxed", ...props }),
  blockquote: ({ node: _node, ref: _ref, ...props }) => /* @__PURE__ */ jsx67(
    "blockquote",
    {
      className: "my-2 border-s-2 border-border ps-3 text-muted-foreground italic",
      ...props
    }
  ),
  // Block code: <pre> owns the box; forced LTR + start-aligned so code never
  // mirrors inside an RTL message bubble.
  pre: ({ node: _node, ref: _ref, ...props }) => /* @__PURE__ */ jsx67(
    "pre",
    {
      dir: "ltr",
      className: "my-2 overflow-x-auto rounded-md border border-border bg-background/70 p-3 font-mono text-xs leading-relaxed text-start",
      ...props
    }
  ),
  // Inline code gets a subtle chip; fenced code (inside <pre>, detectable via
  // the language- class) stays transparent so it doesn't double-box.
  code: ({ node: _node, ref: _ref, className, ...props }) => {
    const isBlock = /language-/.test(className ?? "");
    return /* @__PURE__ */ jsx67(
      "code",
      {
        dir: "ltr",
        className: cn(
          "font-mono",
          isBlock ? className : "rounded bg-background/70 px-1 py-0.5 text-[0.85em]"
        ),
        ...props
      }
    );
  },
  h1: ({ node: _node, ref: _ref, ...props }) => /* @__PURE__ */ jsx67("h1", { className: "mt-3 mb-1.5 text-base font-bold text-foreground", ...props }),
  h2: ({ node: _node, ref: _ref, ...props }) => /* @__PURE__ */ jsx67("h2", { className: "mt-3 mb-1 text-sm font-bold text-foreground", ...props }),
  h3: ({ node: _node, ref: _ref, ...props }) => /* @__PURE__ */ jsx67("h3", { className: "mt-2 mb-1 text-sm font-semibold text-foreground", ...props }),
  h4: ({ node: _node, ref: _ref, ...props }) => /* @__PURE__ */ jsx67("h4", { className: "mt-2 mb-0.5 text-sm font-semibold text-foreground", ...props }),
  h5: ({ node: _node, ref: _ref, ...props }) => /* @__PURE__ */ jsx67("h5", { className: "mt-2 mb-0.5 text-xs font-semibold text-foreground", ...props }),
  h6: ({ node: _node, ref: _ref, ...props }) => /* @__PURE__ */ jsx67("h6", { className: "mt-2 mb-0.5 text-xs font-semibold text-muted-foreground", ...props }),
  table: ({ node: _node, ref: _ref, ...props }) => /* @__PURE__ */ jsx67("div", { className: "my-2 w-full overflow-x-auto", children: /* @__PURE__ */ jsx67("table", { className: "w-full border-collapse text-xs", ...props }) }),
  th: ({ node: _node, ref: _ref, ...props }) => /* @__PURE__ */ jsx67(
    "th",
    {
      className: "border border-border bg-muted/50 px-2 py-1 text-start font-semibold",
      ...props
    }
  ),
  td: ({ node: _node, ref: _ref, ...props }) => /* @__PURE__ */ jsx67("td", { className: "border border-border px-2 py-1 text-start align-top", ...props }),
  hr: ({ node: _node, ref: _ref, ...props }) => /* @__PURE__ */ jsx67("hr", { className: "my-3 border-border", ...props }),
  strong: ({ node: _node, ref: _ref, ...props }) => /* @__PURE__ */ jsx67("strong", { className: "font-semibold text-foreground", ...props })
};
var MarkdownContent = ({ content, dir = "ltr", className }) => {
  return /* @__PURE__ */ jsx67(
    "div",
    {
      dir,
      className: cn(
        "break-words text-sm [&>*:first-child]:mt-0 [&>*:last-child]:mb-0",
        className
      ),
      children: /* @__PURE__ */ jsx67(ReactMarkdown, { remarkPlugins: [remarkGfm], skipHtml: true, components, children: content })
    }
  );
};
MarkdownContent.displayName = "MarkdownContent";
var MarkdownContent_default = MarkdownContent;

// src/components/copilot/artifacts/ArtifactMarkdown.tsx
import { jsx as jsx68 } from "react/jsx-runtime";
var ArtifactMarkdown = ({ data, language = "en", dir }) => {
  const resolvedDir = dir ?? (language === "ar" ? "rtl" : "ltr");
  if (!data.content) {
    return null;
  }
  return /* @__PURE__ */ jsx68("div", { className: "rounded-md bg-muted/30 border border-border/60 p-3", dir: resolvedDir, children: /* @__PURE__ */ jsx68(MarkdownContent_default, { content: data.content, dir: resolvedDir }) });
};
ArtifactMarkdown.displayName = "ArtifactMarkdown";

// src/components/copilot/artifacts/ArtifactClientCandidates.tsx
import { jsx as jsx69, jsxs as jsxs58 } from "react/jsx-runtime";
var ArtifactClientCandidates = ({
  data,
  onInteract,
  language = "en",
  dir
}) => {
  const resolvedDir = dir ?? (language === "ar" ? "rtl" : "ltr");
  if (!data.candidates || data.candidates.length === 0) return null;
  const handleSelect = (candidate) => {
    const payload = { name: candidate.name };
    if (candidate.website_url) payload.website_url = candidate.website_url;
    if (candidate.sector) payload.sector = candidate.sector;
    onInteract?.({ kind: "select_candidate", payload });
  };
  const chooseLabel = language === "ar" ? "\u0627\u062E\u062A\u0631 \u0647\u0630\u0627 \u0627\u0644\u0639\u0645\u064A\u0644" : "Select this client";
  return /* @__PURE__ */ jsxs58(
    "div",
    {
      className: "space-y-2",
      dir: resolvedDir,
      role: "list",
      "aria-label": language === "ar" ? "\u0639\u0645\u0644\u0627\u0621 \u0645\u0631\u0634\u062D\u0648\u0646" : "Candidate clients",
      children: [
        data.prompt && /* @__PURE__ */ jsx69("p", { className: "text-xs text-muted-foreground mb-2", dir: "auto", children: data.prompt }),
        data.candidates.map((candidate, idx) => /* @__PURE__ */ jsxs58(
          "button",
          {
            type: "button",
            role: "listitem",
            onClick: () => handleSelect(candidate),
            className: "w-full text-start rounded-lg border border-border bg-card hover:bg-accent/50 hover:border-primary/40 px-3 py-2.5 transition-colors duration-fast ease-standard focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1",
            "aria-label": `${chooseLabel}: ${candidate.name}`,
            children: [
              /* @__PURE__ */ jsx69("p", { className: "text-sm font-semibold text-foreground leading-snug", children: candidate.name }),
              candidate.website_url && /* @__PURE__ */ jsx69("p", { className: "text-xs text-muted-foreground mt-0.5 truncate", children: candidate.website_url }),
              candidate.sector && /* @__PURE__ */ jsx69("span", { className: "mt-1 inline-block text-[10px] px-1.5 py-0.5 rounded-full bg-primary/10 text-primary font-medium", children: candidate.sector }),
              candidate.summary && /* @__PURE__ */ jsx69("p", { className: "text-xs text-foreground/70 mt-1.5 line-clamp-2 leading-relaxed", dir: "auto", children: candidate.summary })
            ]
          },
          idx
        ))
      ]
    }
  );
};
ArtifactClientCandidates.displayName = "ArtifactClientCandidates";

// src/components/copilot/artifacts/ArtifactClientFieldPicker.tsx
import { useState as useState34 } from "react";
import { jsx as jsx70, jsxs as jsxs59 } from "react/jsx-runtime";
var ArtifactClientFieldPicker = ({
  data,
  onInteract,
  language = "en",
  dir
}) => {
  const resolvedDir = dir ?? (language === "ar" ? "rtl" : "ltr");
  const [selected, setSelected] = useState34(
    new Set((data.fields ?? []).map((f) => f.key))
  );
  if (!data.fields || data.fields.length === 0) return null;
  const handleToggle = (key) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };
  const handleConfirm = () => {
    const fields = data.fields.filter((f) => selected.has(f.key)).map((f) => f.key);
    onInteract?.({ kind: "pick_fields", payload: { fields } });
  };
  const confirmLabel = language === "ar" ? "\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u062D\u0642\u0648\u0644 \u0627\u0644\u0645\u062E\u062A\u0627\u0631\u0629" : "Confirm selected fields";
  const currentLabel = language === "ar" ? "\u0627\u0644\u062D\u0627\u0644\u064A:" : "Current:";
  const suggestedLabel = language === "ar" ? "\u0645\u0642\u062A\u0631\u062D:" : "Suggested:";
  return /* @__PURE__ */ jsxs59("div", { className: "space-y-1.5", dir: resolvedDir, children: [
    data.fields.map((field) => {
      const label = language === "ar" && field.label_ar ? field.label_ar : field.label_en;
      const isChecked = selected.has(field.key);
      return /* @__PURE__ */ jsx70(
        "button",
        {
          type: "button",
          onClick: () => handleToggle(field.key),
          "aria-pressed": isChecked,
          className: `w-full text-start rounded-lg border px-3 py-2 transition-colors duration-fast ease-standard focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 ${isChecked ? "border-primary/40 bg-primary/5" : "border-border bg-card hover:bg-muted/40"}`,
          children: /* @__PURE__ */ jsxs59("div", { className: "flex items-start gap-2.5", children: [
            /* @__PURE__ */ jsx70(
              "span",
              {
                className: `mt-0.5 w-4 h-4 rounded shrink-0 flex items-center justify-center border transition-colors duration-fast ease-standard ${isChecked ? "bg-primary border-primary" : "border-border bg-background"}`,
                "aria-hidden": "true",
                children: isChecked && /* @__PURE__ */ jsx70(
                  "svg",
                  {
                    className: "w-2.5 h-2.5 text-primary-foreground",
                    fill: "none",
                    viewBox: "0 0 12 12",
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ jsx70(
                      "path",
                      {
                        d: "M2 6l3 3 5-5",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      }
                    )
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxs59("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ jsx70("p", { className: "text-xs font-medium text-foreground leading-snug", children: label }),
              field.current && /* @__PURE__ */ jsxs59("p", { className: "text-[10px] text-muted-foreground mt-0.5 truncate", children: [
                /* @__PURE__ */ jsx70("span", { className: "font-medium", children: currentLabel }),
                " ",
                field.current
              ] }),
              field.suggested && /* @__PURE__ */ jsxs59("p", { className: "text-[10px] text-primary mt-0.5 truncate", children: [
                /* @__PURE__ */ jsx70("span", { className: "font-medium", children: suggestedLabel }),
                " ",
                field.suggested
              ] })
            ] })
          ] })
        },
        field.key
      );
    }),
    /* @__PURE__ */ jsx70(
      "button",
      {
        type: "button",
        onClick: handleConfirm,
        disabled: selected.size === 0,
        className: "mt-2 w-full rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-fast ease-standard focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1",
        children: confirmLabel
      }
    )
  ] });
};
ArtifactClientFieldPicker.displayName = "ArtifactClientFieldPicker";

// src/components/copilot/artifacts/ArtifactClientDiffConfirm.tsx
import { jsx as jsx71, jsxs as jsxs60 } from "react/jsx-runtime";
var ArtifactClientDiffConfirm = ({
  data,
  onInteract,
  language = "en",
  dir
}) => {
  const resolvedDir = dir ?? (language === "ar" ? "rtl" : "ltr");
  if (!data.rows || data.rows.length === 0) return null;
  const title = language === "ar" && data.title_ar ? data.title_ar : data.title_en;
  const confirmLabel = language === "ar" && data.confirm_label_ar ? data.confirm_label_ar : data.confirm_label_en;
  const cancelLabel = language === "ar" ? "\u0625\u0644\u063A\u0627\u0621" : "Cancel";
  const oldColLabel = language === "ar" ? "\u0627\u0644\u0642\u062F\u064A\u0645" : "Before";
  const newColLabel = language === "ar" ? "\u0627\u0644\u062C\u062F\u064A\u062F" : "After";
  const handleConfirm = () => {
    onInteract?.({ kind: "confirm_diff", payload: { confirmed: true } });
  };
  const handleCancel = () => {
    onInteract?.({ kind: "confirm_diff", payload: { confirmed: false } });
  };
  return /* @__PURE__ */ jsxs60(
    "div",
    {
      className: "rounded-lg border border-border bg-card overflow-hidden",
      dir: resolvedDir,
      children: [
        title && /* @__PURE__ */ jsx71("div", { className: "px-3 py-2 border-b border-border bg-muted/40", children: /* @__PURE__ */ jsx71("p", { className: "text-xs font-semibold text-foreground", dir: "auto", children: title }) }),
        /* @__PURE__ */ jsxs60("div", { className: "divide-y divide-border", children: [
          /* @__PURE__ */ jsxs60("div", { className: "grid grid-cols-[1fr_1fr_1fr] gap-2 px-3 py-1.5 bg-muted/20 text-[10px] font-semibold text-muted-foreground uppercase tracking-wide", children: [
            /* @__PURE__ */ jsx71("span", { children: language === "ar" ? "\u0627\u0644\u062D\u0642\u0644" : "Field" }),
            /* @__PURE__ */ jsx71("span", { children: oldColLabel }),
            /* @__PURE__ */ jsx71("span", { className: "text-success", children: newColLabel })
          ] }),
          data.rows.map((row) => {
            const label = language === "ar" && row.label_ar ? row.label_ar : row.label_en;
            return /* @__PURE__ */ jsxs60(
              "div",
              {
                className: "grid grid-cols-[1fr_1fr_1fr] gap-2 items-start px-3 py-2 text-xs",
                children: [
                  /* @__PURE__ */ jsx71("span", { className: "text-muted-foreground font-medium leading-snug", children: label }),
                  /* @__PURE__ */ jsx71(
                    "span",
                    {
                      className: "text-foreground/50 line-through truncate leading-snug",
                      "aria-label": oldColLabel,
                      children: row.old !== void 0 && row.old !== "" ? row.old : "\u2014"
                    }
                  ),
                  /* @__PURE__ */ jsx71(
                    "span",
                    {
                      className: "text-success font-medium truncate leading-snug",
                      "aria-label": newColLabel,
                      children: row.new
                    }
                  )
                ]
              },
              row.field
            );
          })
        ] }),
        /* @__PURE__ */ jsxs60(
          "div",
          {
            className: "px-3 py-2.5 border-t border-border bg-muted/20 flex items-center gap-2 justify-end",
            dir: resolvedDir,
            children: [
              /* @__PURE__ */ jsx71(
                "button",
                {
                  type: "button",
                  onClick: handleCancel,
                  className: "rounded-md border border-border bg-transparent px-3 py-1.5 text-xs font-medium text-muted-foreground hover:bg-muted transition-colors duration-fast ease-standard focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1",
                  children: cancelLabel
                }
              ),
              /* @__PURE__ */ jsx71(
                "button",
                {
                  type: "button",
                  onClick: handleConfirm,
                  className: "rounded-md bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground hover:bg-primary/90 transition-colors duration-fast ease-standard focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1",
                  children: confirmLabel
                }
              )
            ]
          }
        )
      ]
    }
  );
};
ArtifactClientDiffConfirm.displayName = "ArtifactClientDiffConfirm";

// src/components/copilot/artifacts/ArtifactPersonaStarters.tsx
import { jsx as jsx72 } from "react/jsx-runtime";
var ArtifactPersonaStarters = ({
  data,
  onInteract,
  language = "en",
  dir
}) => {
  const resolvedDir = dir ?? (language === "ar" ? "rtl" : "ltr");
  if (!data.starters || data.starters.length === 0) return null;
  const handleClick = (prompt) => {
    onInteract?.({ kind: "persona_start", payload: { prompt } });
  };
  return /* @__PURE__ */ jsx72(
    "div",
    {
      className: "flex flex-wrap gap-2",
      dir: resolvedDir,
      role: "group",
      "aria-label": language === "ar" ? "\u0623\u0633\u0626\u0644\u0629 \u0627\u0641\u062A\u062A\u0627\u062D\u064A\u0629 \u0645\u0642\u062A\u0631\u062D\u0629" : "Suggested opening questions",
      children: data.starters.map((starter, idx) => {
        const label = language === "ar" && starter.label_ar ? starter.label_ar : starter.label_en;
        return /* @__PURE__ */ jsx72(
          "button",
          {
            type: "button",
            onClick: () => handleClick(starter.prompt),
            className: "inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary hover:bg-primary/20 hover:border-primary/50 transition-colors duration-fast ease-standard focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1",
            "aria-label": label,
            children: label
          },
          idx
        );
      })
    }
  );
};
ArtifactPersonaStarters.displayName = "ArtifactPersonaStarters";

// src/components/copilot/artifacts/ArtifactRenderer.tsx
import { jsx as jsx73, jsxs as jsxs61 } from "react/jsx-runtime";
var UnknownArtifact = ({ artifact, language }) => /* @__PURE__ */ jsxs61("details", { className: "rounded-md border border-dashed border-border bg-muted/30 p-3 text-xs", children: [
  /* @__PURE__ */ jsx73("summary", { className: "cursor-pointer text-muted-foreground font-medium select-none", children: language === "ar" ? `\u0639\u0646\u0635\u0631 \u063A\u064A\u0631 \u0645\u0639\u0631\u0648\u0641: ${artifact.kind}` : `Unknown artifact kind: ${artifact.kind}` }),
  /* @__PURE__ */ jsx73("pre", { className: "mt-2 text-foreground/70 overflow-auto max-h-48 whitespace-pre-wrap break-all", children: JSON.stringify(artifact.data, null, 2) })
] });
UnknownArtifact.displayName = "UnknownArtifact";
var ArtifactRenderer = ({
  artifact,
  onAction,
  onInteract,
  language = "en",
  dir
}) => {
  const resolvedDir = dir ?? (language === "ar" ? "rtl" : "ltr");
  const titleText = language === "ar" ? artifact.title_ar || artifact.title_en || "" : artifact.title_en || "";
  const renderBody = () => {
    switch (artifact.kind) {
      case "table":
        return /* @__PURE__ */ jsx73(
          ArtifactTable,
          {
            data: artifact.data,
            language,
            dir: resolvedDir
          }
        );
      case "chart":
        return /* @__PURE__ */ jsx73(
          ArtifactChart,
          {
            data: artifact.data,
            language,
            dir: resolvedDir
          }
        );
      case "card":
        return /* @__PURE__ */ jsx73(
          ArtifactCard,
          {
            data: artifact.data,
            artifactTitle: titleText,
            language,
            dir: resolvedDir
          }
        );
      case "actions":
        return /* @__PURE__ */ jsx73(
          ArtifactActions,
          {
            data: artifact.data,
            onAction,
            language,
            dir: resolvedDir
          }
        );
      case "markdown":
        return /* @__PURE__ */ jsx73(
          ArtifactMarkdown,
          {
            data: artifact.data,
            language,
            dir: resolvedDir
          }
        );
      case "client_candidates":
        return /* @__PURE__ */ jsx73(
          ArtifactClientCandidates,
          {
            data: artifact.data,
            onInteract,
            language,
            dir: resolvedDir
          }
        );
      case "client_field_picker":
        return /* @__PURE__ */ jsx73(
          ArtifactClientFieldPicker,
          {
            data: artifact.data,
            onInteract,
            language,
            dir: resolvedDir
          }
        );
      case "client_diff_confirm":
        return /* @__PURE__ */ jsx73(
          ArtifactClientDiffConfirm,
          {
            data: artifact.data,
            onInteract,
            language,
            dir: resolvedDir
          }
        );
      case "persona_starters":
        return /* @__PURE__ */ jsx73(
          ArtifactPersonaStarters,
          {
            data: artifact.data,
            onInteract,
            language,
            dir: resolvedDir
          }
        );
      default:
        return /* @__PURE__ */ jsx73(UnknownArtifact, { artifact, language });
    }
  };
  return /* @__PURE__ */ jsxs61(
    "div",
    {
      className: "mt-2 space-y-1.5",
      dir: resolvedDir,
      "data-artifact-kind": artifact.kind,
      "data-artifact-version": artifact.version,
      children: [
        titleText && artifact.kind !== "card" && /* @__PURE__ */ jsx73("p", { className: "text-xs font-semibold text-foreground/70 leading-none px-0.5", children: titleText }),
        renderBody()
      ]
    }
  );
};
ArtifactRenderer.displayName = "ArtifactRenderer";

// src/components/feedback/FeedbackButton.tsx
import * as React17 from "react";
import { MessageSquarePlus } from "lucide-react";
import { cva as cva3 } from "class-variance-authority";
import { jsx as jsx74, jsxs as jsxs62 } from "react/jsx-runtime";
var feedbackButtonVariants = cva3(
  "inline-flex items-center gap-1.5 font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background",
  {
    variants: {
      variant: {
        floating: "fixed bottom-5 end-5 z-40 rounded-full bg-primary px-4 py-3 text-sm text-primary-foreground shadow-lg hover:bg-primary/90",
        inline: "rounded-md px-2.5 py-1.5 text-xs text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
      }
    },
    defaultVariants: { variant: "floating" }
  }
);
var FeedbackButton = React17.forwardRef(
  ({ variant, language = "en", count, label, onOpen, onClick, className, ...props }, ref) => {
    const ar = language === "ar";
    const text = label ?? (ar ? "\u0645\u0644\u0627\u062D\u0638\u0627\u062A" : "Feedback");
    const handleClick = (e) => {
      onClick?.(e);
      onOpen?.();
    };
    return /* @__PURE__ */ jsxs62(
      "button",
      {
        ref,
        type: "button",
        onClick: handleClick,
        "aria-label": text,
        className: cn(feedbackButtonVariants({ variant }), "relative", className),
        ...props,
        children: [
          /* @__PURE__ */ jsx74(MessageSquarePlus, { size: variant === "inline" ? 15 : 18 }),
          /* @__PURE__ */ jsx74("span", { className: cn(variant === "inline" && "hidden sm:inline"), children: text }),
          count && count > 0 ? /* @__PURE__ */ jsx74("span", { className: "ms-1 inline-flex min-w-4 items-center justify-center rounded-full bg-destructive px-1 text-[10px] font-semibold text-destructive-foreground", children: count > 99 ? "99+" : count }) : null
        ]
      }
    );
  }
);
FeedbackButton.displayName = "FeedbackButton";

// src/components/feedback/FeedbackHub.tsx
import { Plus as Plus2, MessageSquarePlus as MessageSquarePlus2 } from "lucide-react";

// src/components/issues/meta.ts
var STATUS_COLUMNS = [
  { key: "todo", en: "To do", ar: "\u0644\u0644\u062A\u0646\u0641\u064A\u0630" },
  { key: "in_progress", en: "In progress", ar: "\u0642\u064A\u062F \u0627\u0644\u062A\u0646\u0641\u064A\u0630" },
  { key: "blocked", en: "Blocked", ar: "\u0645\u062D\u0638\u0648\u0631" },
  { key: "ready_for_review", en: "Review", ar: "\u0644\u0644\u0645\u0631\u0627\u062C\u0639\u0629" },
  { key: "done", en: "Done", ar: "\u0645\u0643\u062A\u0645\u0644" }
];
var statusLabel = (s, lang) => {
  const col = STATUS_COLUMNS.find((c) => c.key === s);
  if (!col) return s;
  return lang === "ar" ? col.ar : col.en;
};
var STATUS_TONE = {
  todo: "neutral",
  in_progress: "info",
  blocked: "danger",
  ready_for_review: "warning",
  done: "success"
};
var TYPE_LABEL = {
  bug: { en: "Bug", ar: "\u062E\u0644\u0644" },
  change: { en: "Feature", ar: "\u0645\u064A\u0632\u0629" },
  question: { en: "Question", ar: "\u0633\u0624\u0627\u0644" },
  discussion: { en: "Discussion", ar: "\u0646\u0642\u0627\u0634" }
};
var typeLabel = (t2, lang) => lang === "ar" ? TYPE_LABEL[t2].ar : TYPE_LABEL[t2].en;
var ATTACHMENT_MAX_BYTES = 10 * 1024 * 1024;
var formatTimestamp = (iso, lang) => new Date(iso).toLocaleString(lang === "ar" ? "ar" : void 0, {
  month: "short",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit"
});

// src/components/feedback/FeedbackHub.tsx
import { Fragment as Fragment16, jsx as jsx75, jsxs as jsxs63 } from "react/jsx-runtime";
var FeedbackHub = ({
  open,
  onOpenChange,
  issues,
  language = "en",
  route,
  loading = false,
  onNewIssue,
  onSelectIssue,
  title
}) => {
  const ar = language === "ar";
  const heading = title ?? (ar ? "\u0645\u0644\u0627\u062D\u0638\u0627\u062A" : "Feedback");
  const onThisPage = route ? issues.filter((i) => i.route === route) : [];
  const elsewhere = route ? issues.filter((i) => i.route !== route) : issues;
  return /* @__PURE__ */ jsx75(Sheet, { open, onOpenChange, children: /* @__PURE__ */ jsxs63(SheetContent, { side: "right", className: "flex w-full max-w-md flex-col gap-0 p-0 sm:max-w-md", children: [
    /* @__PURE__ */ jsx75(SheetHeader, { className: "border-b border-border/50 px-5 py-3 text-start", children: /* @__PURE__ */ jsx75(SheetTitle, { className: "text-sm font-semibold", children: heading }) }),
    /* @__PURE__ */ jsxs63("div", { className: "flex-1 space-y-4 overflow-y-auto p-4", children: [
      /* @__PURE__ */ jsxs63(Button, { size: "sm", className: "w-full", onClick: onNewIssue, children: [
        /* @__PURE__ */ jsx75(Plus2, { size: 14 }),
        " ",
        ar ? "\u0623\u0628\u0644\u063A \u0639\u0646 \u0634\u064A\u0621 \u062C\u062F\u064A\u062F" : "Report something new"
      ] }),
      loading ? /* @__PURE__ */ jsx75("div", { className: "space-y-2", children: [0, 1, 2].map((k) => /* @__PURE__ */ jsx75("div", { className: "h-16 animate-pulse rounded-lg bg-secondary" }, k)) }) : issues.length === 0 ? /* @__PURE__ */ jsx75(
        EmptyState,
        {
          icon: /* @__PURE__ */ jsx75(MessageSquarePlus2, {}),
          title: ar ? "\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0644\u0627\u062D\u0638\u0627\u062A \u0628\u0639\u062F" : "No feedback yet",
          description: ar ? "\u0644\u0645 \u062A\u064F\u0628\u0644\u0650\u0651\u063A \u0639\u0646 \u0623\u064A \u0634\u064A\u0621 \u062D\u062A\u0649 \u0627\u0644\u0622\u0646. \u0627\u0628\u062F\u0623 \u0628\u0627\u0644\u0632\u0631 \u0623\u0639\u0644\u0627\u0647." : "You haven't reported anything yet. Start with the button above."
        }
      ) : /* @__PURE__ */ jsxs63(Fragment16, { children: [
        route && onThisPage.length > 0 ? /* @__PURE__ */ jsx75(
          FeedbackGroup,
          {
            label: ar ? "\u0641\u064A \u0647\u0630\u0647 \u0627\u0644\u0635\u0641\u062D\u0629" : "On this page",
            items: onThisPage,
            language,
            onSelect: onSelectIssue
          }
        ) : null,
        elsewhere.length > 0 ? /* @__PURE__ */ jsx75(
          FeedbackGroup,
          {
            label: route ? ar ? "\u0641\u064A \u0623\u0645\u0627\u0643\u0646 \u0623\u062E\u0631\u0649" : "Elsewhere" : ar ? "\u0645\u0644\u0627\u062D\u0638\u0627\u062A\u0643" : "Your reports",
            items: elsewhere,
            language,
            onSelect: onSelectIssue
          }
        ) : null
      ] })
    ] })
  ] }) });
};
FeedbackHub.displayName = "FeedbackHub";
var FeedbackGroup = ({
  label,
  items,
  language,
  onSelect
}) => /* @__PURE__ */ jsxs63("div", { children: [
  /* @__PURE__ */ jsx75("p", { className: "mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: label }),
  /* @__PURE__ */ jsx75("ul", { className: "space-y-2", children: items.map((issue) => /* @__PURE__ */ jsx75("li", { children: /* @__PURE__ */ jsxs63(
    "button",
    {
      type: "button",
      onClick: () => onSelect?.(issue.id),
      className: cn(
        "block w-full rounded-lg border border-border/60 bg-card p-3 text-start transition",
        "hover:border-primary/40 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      ),
      children: [
        /* @__PURE__ */ jsxs63("div", { className: "mb-1 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxs63("span", { className: "font-mono text-xs text-muted-foreground", children: [
            "#",
            issue.number
          ] }),
          /* @__PURE__ */ jsx75(StatusBadge, { tone: STATUS_TONE[issue.status], className: "text-[10px]", children: statusLabel(issue.status, language) }),
          /* @__PURE__ */ jsx75("span", { className: "ms-auto text-[10px] uppercase tracking-wider text-muted-foreground", children: typeLabel(issue.type, language) })
        ] }),
        /* @__PURE__ */ jsx75("p", { className: "line-clamp-2 text-sm font-medium text-foreground", children: issue.title }),
        /* @__PURE__ */ jsx75("p", { className: "mt-1 text-[11px] text-muted-foreground", children: formatTimestamp(issue.createdAt, language) })
      ]
    }
  ) }, issue.id)) })
] });
FeedbackGroup.displayName = "FeedbackHubGroup";

// src/components/feedback/MotorFeedbackLauncher.tsx
import * as React18 from "react";
import { MessageSquarePlus as MessageSquarePlus3 } from "lucide-react";
import { jsx as jsx76, jsxs as jsxs64 } from "react/jsx-runtime";
var FAB_W = 132;
var FAB_H = 48;
var DRAG_THRESHOLD = 5;
var clampToViewport = (left, top) => {
  if (typeof window === "undefined") return { left, top };
  const maxLeft = Math.max(0, window.innerWidth - FAB_W);
  const maxTop = Math.max(0, window.innerHeight - FAB_H);
  return {
    left: Math.min(Math.max(0, left), maxLeft),
    top: Math.min(Math.max(0, top), maxTop)
  };
};
var MotorFeedbackLauncher = ({
  project,
  publishableKey,
  apiBase,
  language = "en",
  sdkSrc = "/motor-feedback.js",
  theme = "auto",
  defaultType = "bug",
  reporterEmail,
  reporterName,
  label
}) => {
  const ar = language === "ar";
  const text = label ?? (ar ? "\u0645\u0644\u0627\u062D\u0638\u0627\u062A" : "Feedback");
  const storageKey = `motor-feedback-fab:${project}`;
  const triggerRef = React18.useRef(null);
  const handleRef = React18.useRef(null);
  const [pos, setPos] = React18.useState(null);
  const drag = React18.useRef({
    active: false,
    moved: false,
    startX: 0,
    startY: 0,
    dx: 0,
    dy: 0
  });
  const active = Boolean(project && publishableKey && apiBase);
  React18.useEffect(() => {
    if (!active || typeof window === "undefined") return;
    try {
      const raw = window.localStorage.getItem(storageKey);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (typeof parsed.left === "number" && typeof parsed.top === "number") {
          setPos(clampToViewport(parsed.left, parsed.top));
        }
      }
    } catch {
    }
  }, [active, storageKey]);
  React18.useEffect(() => {
    if (!active) return;
    let cancelled = false;
    const mount = () => {
      if (cancelled || handleRef.current || !window.MotorFeedback || !triggerRef.current) return;
      handleRef.current = window.MotorFeedback.mountFeedbackHub({
        trigger: triggerRef.current,
        project,
        publishableKey,
        apiBase,
        theme,
        defaultType,
        title: text,
        reporterEmail,
        reporterName
      });
    };
    if (window.MotorFeedback) {
      mount();
    } else {
      let script = document.querySelector(`script[src="${sdkSrc}"]`);
      if (!script) {
        script = document.createElement("script");
        script.src = sdkSrc;
        script.async = true;
        document.body.appendChild(script);
      }
      script.addEventListener("load", mount);
    }
    return () => {
      cancelled = true;
      handleRef.current?.destroy();
      handleRef.current = null;
    };
  }, [active, project, publishableKey, apiBase, theme, defaultType, text, reporterEmail, reporterName, sdkSrc]);
  const handlePointerDown = (e) => {
    if (!triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    drag.current = {
      active: true,
      moved: false,
      startX: e.clientX,
      startY: e.clientY,
      dx: e.clientX - rect.left,
      dy: e.clientY - rect.top
    };
    try {
      triggerRef.current.setPointerCapture(e.pointerId);
    } catch {
    }
  };
  const handlePointerMove = (e) => {
    const d = drag.current;
    if (!d.active) return;
    if (!d.moved) {
      if (Math.abs(e.clientX - d.startX) <= DRAG_THRESHOLD && Math.abs(e.clientY - d.startY) <= DRAG_THRESHOLD) {
        return;
      }
      d.moved = true;
    }
    setPos(clampToViewport(e.clientX - d.dx, e.clientY - d.dy));
  };
  const handlePointerUp = (e) => {
    const d = drag.current;
    if (!d.active) return;
    d.active = false;
    try {
      triggerRef.current?.releasePointerCapture(e.pointerId);
    } catch {
    }
    if (d.moved) {
      setPos((cur) => {
        if (cur && typeof window !== "undefined") {
          try {
            window.localStorage.setItem(storageKey, JSON.stringify(cur));
          } catch {
          }
        }
        return cur;
      });
    }
  };
  const handleClickCapture = (e) => {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      drag.current.moved = false;
    }
  };
  if (!active) return null;
  const positioned = pos !== null;
  const style = positioned ? { left: pos.left, top: pos.top, right: "auto", bottom: "auto", touchAction: "none" } : { touchAction: "none" };
  return /* @__PURE__ */ jsxs64(
    "button",
    {
      ref: triggerRef,
      type: "button",
      "aria-label": text,
      title: ar ? "\u0627\u0633\u062D\u0628 \u0644\u062A\u062D\u0631\u064A\u0643 \u0627\u0644\u0632\u0631" : "Drag to move",
      onPointerDown: handlePointerDown,
      onPointerMove: handlePointerMove,
      onPointerUp: handlePointerUp,
      onClickCapture: handleClickCapture,
      style,
      className: cn(
        "fixed z-[2147483000] inline-flex cursor-grab items-center gap-1.5 rounded-full",
        "bg-primary px-4 py-3 text-sm font-medium text-primary-foreground shadow-lg transition-colors duration-fast ease-standard",
        "hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        "focus-visible:ring-offset-2 ring-offset-background active:cursor-grabbing select-none",
        !positioned && "bottom-5 end-5"
      ),
      children: [
        /* @__PURE__ */ jsx76(MessageSquarePlus3, { size: 18 }),
        /* @__PURE__ */ jsx76("span", { children: text })
      ]
    }
  );
};
MotorFeedbackLauncher.displayName = "MotorFeedbackLauncher";

// src/components/feedback/FeedbackWidget.tsx
import * as React19 from "react";
import { MessageSquarePlus as MessageSquarePlus4, X as X3, MapPin as MapPin2, Paperclip, Camera, ChevronLeft as ChevronLeft2, ChevronRight as ChevronRight7 } from "lucide-react";
import { Fragment as Fragment17, jsx as jsx77, jsxs as jsxs65 } from "react/jsx-runtime";
var KINDS = [
  { key: "bug", en: "Bug", ar: "\u062E\u0637\u0623", cls: "text-red-500", sel: "border-red-500 bg-red-500/10 text-red-500" },
  { key: "feature", en: "Feature", ar: "\u0645\u064A\u0632\u0629", cls: "text-blue-500", sel: "border-blue-500 bg-blue-500/10 text-blue-500" },
  { key: "question", en: "Question", ar: "\u0633\u0624\u0627\u0644", cls: "text-amber-500", sel: "border-amber-500 bg-amber-500/10 text-amber-500" },
  { key: "discussion", en: "Discussion", ar: "\u0646\u0642\u0627\u0634", cls: "text-purple-500", sel: "border-purple-500 bg-purple-500/10 text-purple-500" }
];
var kindOf = (k) => KINDS.find((x) => x.key === k);
var T2 = {
  en: {
    title: "Feedback",
    intro: "Found a bug, have an idea, or want to ask something about this page? It's attached to the page you are on.",
    report: "Report an issue",
    onPage: "On this page",
    issues: (n) => `${n} issue${n === 1 ? "" : "s"} on this page`,
    type: "Type",
    titleL: "Title",
    brief: "Brief description",
    details: "Details",
    detailsPh: "Steps to reproduce, expected vs actual, etc.",
    url: "Page URL",
    location: "Location",
    pin: "Pin location",
    attach: "Attachments",
    addFile: "Add file",
    screenshot: "Screenshot",
    submit: "Submit",
    picking: "Click any element to pin it \xB7 Esc to cancel",
    empty: "No issues yet on this page.",
    repin: "Re-pin",
    clear: "Clear"
  },
  ar: {
    title: "\u0627\u0644\u0645\u0644\u0627\u062D\u0638\u0627\u062A",
    intro: "\u0648\u062C\u062F\u062A \u062E\u0637\u0623 \u0623\u0648 \u0644\u062F\u064A\u0643 \u0641\u0643\u0631\u0629 \u0623\u0648 \u0633\u0624\u0627\u0644 \u062D\u0648\u0644 \u0647\u0630\u0647 \u0627\u0644\u0635\u0641\u062D\u0629\u061F \u0633\u064A\u064F\u0631\u0641\u0642 \u0628\u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u062D\u0627\u0644\u064A\u0629.",
    report: "\u0623\u0628\u0644\u063A \u0639\u0646 \u0645\u0634\u0643\u0644\u0629",
    onPage: "\u0639\u0644\u0649 \u0647\u0630\u0647 \u0627\u0644\u0635\u0641\u062D\u0629",
    issues: (n) => `${n} \u0645\u0634\u0643\u0644\u0629 \u0639\u0644\u0649 \u0647\u0630\u0647 \u0627\u0644\u0635\u0641\u062D\u0629`,
    type: "\u0627\u0644\u0646\u0648\u0639",
    titleL: "\u0627\u0644\u0639\u0646\u0648\u0627\u0646",
    brief: "\u0648\u0635\u0641 \u0645\u062E\u062A\u0635\u0631",
    details: "\u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644",
    detailsPh: "\u062E\u0637\u0648\u0627\u062A \u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u0625\u0646\u062A\u0627\u062C\u060C \u0627\u0644\u0645\u062A\u0648\u0642\u0639 \u0645\u0642\u0627\u0628\u0644 \u0627\u0644\u0641\u0639\u0644\u064A\u2026",
    url: "\u0631\u0627\u0628\u0637 \u0627\u0644\u0635\u0641\u062D\u0629",
    location: "\u0627\u0644\u0645\u0648\u0642\u0639",
    pin: "\u062A\u062B\u0628\u064A\u062A \u0645\u0648\u0642\u0639",
    attach: "\u0627\u0644\u0645\u0631\u0641\u0642\u0627\u062A",
    addFile: "\u0625\u0636\u0627\u0641\u0629 \u0645\u0644\u0641",
    screenshot: "\u0644\u0642\u0637\u0629 \u0634\u0627\u0634\u0629",
    submit: "\u0625\u0631\u0633\u0627\u0644",
    picking: "\u0627\u0646\u0642\u0631 \u0623\u064A \u0639\u0646\u0635\u0631 \u0644\u062A\u062B\u0628\u064A\u062A\u0647 \xB7 Esc \u0644\u0644\u0625\u0644\u063A\u0627\u0621",
    empty: "\u0644\u0627 \u0645\u0634\u0643\u0644\u0627\u062A \u0639\u0644\u0649 \u0647\u0630\u0647 \u0627\u0644\u0635\u0641\u062D\u0629 \u0628\u0639\u062F.",
    repin: "\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u062A\u062B\u0628\u064A\u062A",
    clear: "\u0645\u0633\u062D"
  }
};
function cssPath(el) {
  const parts = [];
  let node = el;
  while (node && node.nodeType === 1 && parts.length < 5 && node !== document.body) {
    let part = node.tagName.toLowerCase();
    if (node.id) {
      part += `#${node.id}`;
      parts.unshift(part);
      break;
    }
    const cls = (node.getAttribute("class") || "").trim().split(/\s+/).filter(Boolean).slice(0, 2);
    if (cls.length) part += "." + cls.join(".");
    parts.unshift(part);
    node = node.parentElement;
  }
  return parts.join(" > ");
}
function FeedbackWidget({
  items = [],
  pageUrl,
  onSubmit,
  onSelectIssue,
  onScreenshot,
  language = "en",
  open: openProp,
  onOpenChange,
  className,
  pageSize = 5
}) {
  const t2 = T2[language];
  const isRTL = language === "ar";
  const [internalOpen, setInternalOpen] = React19.useState(false);
  const open = openProp ?? internalOpen;
  const setOpen = (v) => {
    setInternalOpen(v);
    onOpenChange?.(v);
  };
  const [reporting, setReporting] = React19.useState(false);
  const [kind, setKind] = React19.useState("bug");
  const [title, setTitle] = React19.useState("");
  const [details, setDetails] = React19.useState("");
  const [location, setLocation] = React19.useState(null);
  const [attachments, setAttachments] = React19.useState([]);
  const [selectedId, setSelectedId] = React19.useState(items[0]?.id ?? null);
  const [page, setPage] = React19.useState(0);
  const [picking, setPicking] = React19.useState(false);
  const [hl, setHl] = React19.useState(null);
  const fileRef = React19.useRef(null);
  const url = pageUrl ?? (typeof window !== "undefined" ? window.location.href : "");
  React19.useEffect(() => {
    if (!picking) return;
    const ignore = (el) => !el || el.closest("[data-feedback-ui]");
    const move = (e) => {
      const el = document.elementFromPoint(e.clientX, e.clientY);
      setHl(ignore(el) ? null : el.getBoundingClientRect());
    };
    const click = (e) => {
      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (ignore(el)) return;
      e.preventDefault();
      e.stopPropagation();
      setLocation({ selector: cssPath(el), tag: el.tagName.toLowerCase(), label: (el.textContent || "").trim().slice(0, 40) || void 0 });
      setPicking(false);
      setHl(null);
      setReporting(true);
    };
    const key = (e) => {
      if (e.key === "Escape") {
        setPicking(false);
        setHl(null);
        setReporting(true);
      }
    };
    document.addEventListener("mousemove", move, true);
    document.addEventListener("click", click, true);
    document.addEventListener("keydown", key, true);
    const prev = document.body.style.cursor;
    document.body.style.cursor = "crosshair";
    return () => {
      document.removeEventListener("mousemove", move, true);
      document.removeEventListener("click", click, true);
      document.removeEventListener("keydown", key, true);
      document.body.style.cursor = prev;
    };
  }, [picking]);
  function startPin() {
    setReporting(false);
    setPicking(true);
  }
  async function takeScreenshot() {
    const name = await onScreenshot?.() ?? "screenshot.png";
    if (name) setAttachments((a) => [...a, { name, kind: "screenshot" }]);
  }
  function onFiles(e) {
    const files = Array.from(e.target.files ?? []);
    setAttachments((a) => [...a, ...files.map((f) => ({ name: f.name, kind: "file" }))]);
    e.target.value = "";
  }
  function submit() {
    if (!title.trim()) return;
    onSubmit?.({ kind, title: title.trim(), details: details.trim() || void 0, pageUrl: url, location: location ?? void 0, attachments });
    setTitle("");
    setDetails("");
    setLocation(null);
    setAttachments([]);
    setKind("bug");
    setReporting(false);
  }
  const pages = Math.max(1, Math.ceil(items.length / pageSize));
  const shown = items.slice(page * pageSize, page * pageSize + pageSize);
  return /* @__PURE__ */ jsxs65("div", { "data-feedback-ui": true, dir: isRTL ? "rtl" : "ltr", className, children: [
    picking && /* @__PURE__ */ jsxs65(Fragment17, { children: [
      /* @__PURE__ */ jsxs65("div", { className: "fixed inset-x-0 top-0 z-[10001] bg-primary px-4 py-2 text-center text-sm font-medium text-primary-foreground", children: [
        /* @__PURE__ */ jsx77(MapPin2, { className: "me-2 inline h-4 w-4" }),
        t2.picking
      ] }),
      hl && /* @__PURE__ */ jsx77("div", { className: "pointer-events-none fixed z-[10000] rounded border-2 border-primary bg-primary/10", style: { top: hl.top, left: hl.left, width: hl.width, height: hl.height } })
    ] }),
    openProp === void 0 && !open && !picking && /* @__PURE__ */ jsx77(
      "button",
      {
        onClick: () => setOpen(true),
        "aria-label": t2.title,
        className: "fixed bottom-5 end-5 z-[9990] flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition hover:opacity-90",
        children: /* @__PURE__ */ jsx77(MessageSquarePlus4, { className: "h-5 w-5" })
      }
    ),
    open && !picking && /* @__PURE__ */ jsxs65(Fragment17, { children: [
      /* @__PURE__ */ jsx77("div", { className: "fixed inset-0 z-[9991] bg-black/40", onClick: () => setOpen(false) }),
      /* @__PURE__ */ jsxs65("aside", { className: "fixed inset-y-0 end-0 z-[9992] flex w-[380px] max-w-[90vw] flex-col border-s border-border bg-card text-card-foreground shadow-2xl", children: [
        /* @__PURE__ */ jsxs65("div", { className: "flex items-center justify-between border-b border-border px-5 py-3.5", children: [
          /* @__PURE__ */ jsx77("span", { className: "text-lg font-semibold", children: t2.title }),
          /* @__PURE__ */ jsx77("button", { onClick: () => setOpen(false), className: "rounded p-1 text-muted-foreground hover:bg-accent hover:text-foreground", children: /* @__PURE__ */ jsx77(X3, { className: "h-4 w-4" }) })
        ] }),
        /* @__PURE__ */ jsxs65("div", { className: "flex-1 overflow-y-auto p-5", children: [
          /* @__PURE__ */ jsx77("p", { className: "mb-4 text-sm text-muted-foreground", children: t2.intro }),
          /* @__PURE__ */ jsx77(Button, { className: "w-full", onClick: () => setReporting(true), children: t2.report }),
          /* @__PURE__ */ jsx77("p", { className: "mb-2 mt-6 text-xs font-medium uppercase tracking-wide text-muted-foreground", children: t2.onPage }),
          /* @__PURE__ */ jsxs65("div", { className: "mb-2 flex items-center justify-between", children: [
            /* @__PURE__ */ jsx77("span", { className: "text-sm text-muted-foreground", children: t2.issues(items.length) }),
            pages > 1 && /* @__PURE__ */ jsxs65("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx77(Button, { size: "sm", variant: "outline", className: "h-6 w-6 p-0", disabled: page === 0, onClick: () => setPage((p) => p - 1), children: /* @__PURE__ */ jsx77(ChevronLeft2, { className: "h-3.5 w-3.5 rtl:rotate-180" }) }),
              /* @__PURE__ */ jsxs65("span", { className: "text-xs text-muted-foreground", children: [
                page + 1,
                "/",
                pages
              ] }),
              /* @__PURE__ */ jsx77(Button, { size: "sm", variant: "outline", className: "h-6 w-6 p-0", disabled: page >= pages - 1, onClick: () => setPage((p) => p + 1), children: /* @__PURE__ */ jsx77(ChevronRight7, { className: "h-3.5 w-3.5 rtl:rotate-180" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsx77("div", { className: "space-y-1.5", children: shown.length === 0 ? /* @__PURE__ */ jsx77("p", { className: "py-6 text-center text-sm text-muted-foreground", children: t2.empty }) : shown.map((it) => {
            const k = kindOf(it.kind);
            return /* @__PURE__ */ jsxs65(
              "button",
              {
                onClick: () => {
                  setSelectedId(it.id);
                  onSelectIssue?.(it.id);
                },
                className: cn(
                  "flex w-full items-center gap-2.5 rounded-lg border px-3 py-2 text-start transition hover:bg-accent",
                  selectedId === it.id ? "border-primary bg-primary/5" : "border-border"
                ),
                children: [
                  /* @__PURE__ */ jsxs65("span", { className: "font-mono text-[11px] text-muted-foreground", children: [
                    "#",
                    it.id
                  ] }),
                  /* @__PURE__ */ jsx77("span", { className: cn("rounded px-1.5 py-0.5 text-[10px] font-semibold", k.cls, "bg-current/10"), style: { backgroundColor: "transparent" }, children: /* @__PURE__ */ jsx77("span", { className: k.cls, children: isRTL ? k.ar : k.en }) }),
                  /* @__PURE__ */ jsx77("span", { className: "min-w-0 flex-1 truncate text-sm", children: it.title })
                ]
              },
              it.id
            );
          }) })
        ] })
      ] })
    ] }),
    reporting && !picking && /* @__PURE__ */ jsxs65("div", { className: "fixed inset-0 z-[9995] flex items-center justify-center p-4", onClick: () => setReporting(false), children: [
      /* @__PURE__ */ jsx77("div", { className: "absolute inset-0 bg-black/60" }),
      /* @__PURE__ */ jsxs65("div", { className: "relative flex max-h-[90vh] w-full max-w-md flex-col overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-2xl", onClick: (e) => e.stopPropagation(), children: [
        /* @__PURE__ */ jsxs65("div", { className: "flex items-center justify-between border-b border-border px-5 py-3.5", children: [
          /* @__PURE__ */ jsx77("span", { className: "text-lg font-semibold", children: t2.report }),
          /* @__PURE__ */ jsx77("button", { onClick: () => setReporting(false), className: "rounded p-1 text-muted-foreground hover:bg-accent hover:text-foreground", children: /* @__PURE__ */ jsx77(X3, { className: "h-4 w-4" }) })
        ] }),
        /* @__PURE__ */ jsxs65("div", { className: "space-y-4 overflow-y-auto px-5 py-4", children: [
          /* @__PURE__ */ jsxs65("div", { children: [
            /* @__PURE__ */ jsx77(Label, { className: "mb-1.5 block text-xs uppercase tracking-wide text-muted-foreground", children: t2.type }),
            /* @__PURE__ */ jsx77("div", { className: "flex flex-wrap gap-2", children: KINDS.map((k) => /* @__PURE__ */ jsx77(
              "button",
              {
                onClick: () => setKind(k.key),
                className: cn("rounded-full border px-3 py-1 text-sm font-medium transition", kind === k.key ? k.sel : cn("border-border", k.cls, "opacity-80 hover:opacity-100")),
                children: isRTL ? k.ar : k.en
              },
              k.key
            )) })
          ] }),
          /* @__PURE__ */ jsxs65("div", { children: [
            /* @__PURE__ */ jsxs65(Label, { htmlFor: "fb-title", className: "mb-1.5 block text-xs uppercase tracking-wide text-muted-foreground", children: [
              t2.titleL,
              " *"
            ] }),
            /* @__PURE__ */ jsx77(Input, { id: "fb-title", value: title, onChange: (e) => setTitle(e.target.value), placeholder: t2.brief })
          ] }),
          /* @__PURE__ */ jsxs65("div", { children: [
            /* @__PURE__ */ jsx77(Label, { htmlFor: "fb-details", className: "mb-1.5 block text-xs uppercase tracking-wide text-muted-foreground", children: t2.details }),
            /* @__PURE__ */ jsx77(Textarea, { id: "fb-details", rows: 4, value: details, onChange: (e) => setDetails(e.target.value), placeholder: t2.detailsPh })
          ] }),
          /* @__PURE__ */ jsxs65("div", { children: [
            /* @__PURE__ */ jsx77(Label, { className: "mb-1.5 block text-xs uppercase tracking-wide text-muted-foreground", children: t2.url }),
            /* @__PURE__ */ jsx77(Input, { value: url, readOnly: true, className: "font-mono text-xs text-muted-foreground" })
          ] }),
          /* @__PURE__ */ jsxs65("div", { children: [
            /* @__PURE__ */ jsx77(Label, { className: "mb-1.5 block text-xs uppercase tracking-wide text-muted-foreground", children: t2.location }),
            location ? /* @__PURE__ */ jsxs65("div", { className: "flex items-center gap-2 rounded-lg border border-border bg-muted/40 p-2", children: [
              /* @__PURE__ */ jsx77("span", { className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary", children: /* @__PURE__ */ jsx77(MapPin2, { className: "h-4 w-4" }) }),
              /* @__PURE__ */ jsxs65("span", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ jsx77("span", { className: "block truncate text-sm font-medium", children: location.label || `<${location.tag}>` }),
                /* @__PURE__ */ jsxs65("span", { className: "block truncate font-mono text-[10px] text-muted-foreground", children: [
                  location.tag,
                  " \xB7 ",
                  location.selector
                ] })
              ] }),
              /* @__PURE__ */ jsx77(Button, { variant: "ghost", size: "sm", className: "h-7 shrink-0 px-2 text-xs", onClick: startPin, children: t2.repin }),
              /* @__PURE__ */ jsx77(
                "button",
                {
                  onClick: () => setLocation(null),
                  "aria-label": t2.clear,
                  className: "shrink-0 rounded p-1 text-muted-foreground hover:bg-accent hover:text-destructive",
                  children: /* @__PURE__ */ jsx77(X3, { className: "h-4 w-4" })
                }
              )
            ] }) : /* @__PURE__ */ jsxs65(Button, { variant: "outline", size: "sm", className: "gap-1.5", onClick: startPin, children: [
              /* @__PURE__ */ jsx77(MapPin2, { className: "h-3.5 w-3.5" }),
              t2.pin
            ] })
          ] }),
          /* @__PURE__ */ jsxs65("div", { children: [
            /* @__PURE__ */ jsx77(Label, { className: "mb-1.5 block text-xs uppercase tracking-wide text-muted-foreground", children: t2.attach }),
            /* @__PURE__ */ jsxs65("div", { className: "flex flex-wrap items-center gap-2", children: [
              /* @__PURE__ */ jsx77("input", { ref: fileRef, type: "file", multiple: true, className: "hidden", onChange: onFiles }),
              /* @__PURE__ */ jsxs65(Button, { variant: "outline", size: "sm", className: "gap-1.5", onClick: () => fileRef.current?.click(), children: [
                /* @__PURE__ */ jsx77(Paperclip, { className: "h-3.5 w-3.5" }),
                t2.addFile
              ] }),
              /* @__PURE__ */ jsxs65(Button, { variant: "outline", size: "sm", className: "gap-1.5", onClick: takeScreenshot, children: [
                /* @__PURE__ */ jsx77(Camera, { className: "h-3.5 w-3.5" }),
                t2.screenshot
              ] }),
              attachments.map((a, i) => /* @__PURE__ */ jsx77("span", { className: "rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground", children: a.name }, i))
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx77("div", { className: "border-t border-border p-4", children: /* @__PURE__ */ jsx77(Button, { className: "w-full", disabled: !title.trim(), onClick: submit, children: t2.submit }) })
      ] })
    ] })
  ] });
}

// src/components/sections/SectionBoard.tsx
import * as React20 from "react";
import {
  DndContext as DndContext3,
  DragOverlay as DragOverlay2,
  closestCenter as closestCenter3,
  KeyboardSensor as KeyboardSensor3,
  PointerSensor as PointerSensor3,
  useSensor as useSensor3,
  useSensors as useSensors3
} from "@dnd-kit/core";
import {
  SortableContext as SortableContext3,
  sortableKeyboardCoordinates as sortableKeyboardCoordinates3,
  useSortable as useSortable3,
  verticalListSortingStrategy as verticalListSortingStrategy3,
  arrayMove as arrayMove2
} from "@dnd-kit/sortable";
import { CSS as CSS3 } from "@dnd-kit/utilities";
import { GripVertical as GripVertical3, Settings2 as Settings23, Trash2 as Trash24, Plus as Plus3 } from "lucide-react";
import { Fragment as Fragment18, jsx as jsx78, jsxs as jsxs66 } from "react/jsx-runtime";
var T3 = {
  en: {
    edit: "Edit section",
    prompt: "Prompt",
    model: "Model",
    settings: "Settings",
    addSetting: "Add setting",
    key: "Key",
    value: "Value",
    save: "Save",
    cancel: "Cancel",
    addSection: "Add section",
    noModel: "Default model",
    empty: "No content."
  },
  ar: {
    edit: "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0642\u0633\u0645",
    prompt: "\u0627\u0644\u062A\u0648\u062C\u064A\u0647",
    model: "\u0627\u0644\u0646\u0645\u0648\u0630\u062C",
    settings: "\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A",
    addSetting: "\u0625\u0636\u0627\u0641\u0629 \u0625\u0639\u062F\u0627\u062F",
    key: "\u0627\u0644\u0645\u0641\u062A\u0627\u062D",
    value: "\u0627\u0644\u0642\u064A\u0645\u0629",
    save: "\u062D\u0641\u0638",
    cancel: "\u0625\u0644\u063A\u0627\u0621",
    addSection: "\u0625\u0636\u0627\u0641\u0629 \u0642\u0633\u0645",
    noModel: "\u0627\u0644\u0646\u0645\u0648\u0630\u062C \u0627\u0644\u0627\u0641\u062A\u0631\u0627\u0636\u064A",
    empty: "\u0644\u0627 \u064A\u0648\u062C\u062F \u0645\u062D\u062A\u0648\u0649."
  }
};
function SectionEditor({
  open,
  section,
  models,
  language,
  onClose,
  onSave
}) {
  const t2 = T3[language];
  const [draft, setDraft] = React20.useState(section);
  React20.useEffect(() => {
    if (open) setDraft(section);
  }, [open, section]);
  const settings = Object.entries(draft.settings ?? {});
  const setSetting = (i, key, value) => {
    const next = [...settings];
    next[i] = [key, value];
    setDraft({ ...draft, settings: Object.fromEntries(next.filter(([k]) => k)) });
  };
  const addSetting = () => setDraft({ ...draft, settings: { ...draft.settings ?? {}, "": "" } });
  return /* @__PURE__ */ jsx78(Dialog, { open, onOpenChange: (o) => !o && onClose(), children: /* @__PURE__ */ jsxs66(DialogContent, { children: [
    /* @__PURE__ */ jsx78(DialogHeader, { children: /* @__PURE__ */ jsx78(DialogTitle, { children: draft.title || t2.edit }) }),
    /* @__PURE__ */ jsxs66("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxs66("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsx78(Label, { htmlFor: "sec-prompt", children: t2.prompt }),
        /* @__PURE__ */ jsx78(
          Textarea,
          {
            id: "sec-prompt",
            rows: 4,
            value: draft.prompt ?? "",
            onChange: (e) => setDraft({ ...draft, prompt: e.target.value })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs66("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsx78(Label, { children: t2.model }),
        /* @__PURE__ */ jsxs66(Select, { value: draft.model ?? "", onValueChange: (v) => setDraft({ ...draft, model: v }), children: [
          /* @__PURE__ */ jsx78(SelectTrigger, { children: /* @__PURE__ */ jsx78(SelectValue, { placeholder: t2.noModel }) }),
          /* @__PURE__ */ jsx78(SelectContent, { children: models.map((m) => /* @__PURE__ */ jsx78(SelectItem, { value: m.value, children: m.label ?? m.value }, m.value)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs66("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsx78(Label, { children: t2.settings }),
        /* @__PURE__ */ jsxs66("div", { className: "space-y-2", children: [
          settings.map(([k, v], i) => /* @__PURE__ */ jsxs66("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx78(Input, { placeholder: t2.key, value: k, onChange: (e) => setSetting(i, e.target.value, v) }),
            /* @__PURE__ */ jsx78(Input, { placeholder: t2.value, value: v, onChange: (e) => setSetting(i, k, e.target.value) })
          ] }, i)),
          /* @__PURE__ */ jsxs66(Button, { type: "button", variant: "ghost", size: "sm", onClick: addSetting, children: [
            /* @__PURE__ */ jsx78(Plus3, { className: "h-3.5 w-3.5" }),
            " ",
            t2.addSetting
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs66(DialogFooter, { children: [
      /* @__PURE__ */ jsx78(Button, { variant: "secondary", onClick: onClose, children: t2.cancel }),
      /* @__PURE__ */ jsx78(Button, { onClick: () => onSave(draft), children: t2.save })
    ] })
  ] }) });
}
function DynamicSection({
  section,
  editMode,
  models = [],
  language = "en",
  onChange,
  onRemove,
  handleProps,
  className
}) {
  const t2 = T3[language];
  const [editing, setEditing] = React20.useState(false);
  return /* @__PURE__ */ jsxs66(Card, { className: cn("space-y-3 p-4", className), children: [
    /* @__PURE__ */ jsxs66("div", { className: "flex items-center gap-2", children: [
      editMode && /* @__PURE__ */ jsx78(
        "button",
        {
          type: "button",
          "aria-label": "Drag to reorder",
          className: "shrink-0 cursor-grab text-muted-foreground hover:text-foreground",
          ...handleProps,
          children: /* @__PURE__ */ jsx78(GripVertical3, { className: "h-4 w-4" })
        }
      ),
      /* @__PURE__ */ jsx78("h3", { className: "min-w-0 flex-1 truncate text-sm font-semibold", children: section.title }),
      section.badge && /* @__PURE__ */ jsx78(Badge, { children: section.badge }),
      editMode && /* @__PURE__ */ jsxs66(Fragment18, { children: [
        /* @__PURE__ */ jsx78(Button, { variant: "ghost", size: "sm", className: "h-7 w-7 p-0", "aria-label": t2.edit, onClick: () => setEditing(true), children: /* @__PURE__ */ jsx78(Settings23, { className: "h-4 w-4" }) }),
        onRemove && /* @__PURE__ */ jsx78(Button, { variant: "ghost", size: "sm", className: "h-7 w-7 p-0 text-destructive", "aria-label": "Remove", onClick: onRemove, children: /* @__PURE__ */ jsx78(Trash24, { className: "h-4 w-4" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx78("div", { className: "text-sm text-muted-foreground", children: section.content ?? /* @__PURE__ */ jsx78("span", { className: "italic opacity-70", children: t2.empty }) }),
    editMode && (section.model || section.prompt) && /* @__PURE__ */ jsxs66("div", { className: "flex flex-wrap items-center gap-2 border-t border-border pt-2 text-[11px] text-muted-foreground", children: [
      section.model && /* @__PURE__ */ jsx78(Badge, { variant: "outline", children: section.model }),
      section.prompt && /* @__PURE__ */ jsx78("span", { className: "line-clamp-1 flex-1 font-mono opacity-70", children: section.prompt })
    ] }),
    /* @__PURE__ */ jsx78(
      SectionEditor,
      {
        open: editing,
        section,
        models,
        language,
        onClose: () => setEditing(false),
        onSave: (next) => {
          onChange?.(next);
          setEditing(false);
        }
      }
    )
  ] });
}
function SortableSection(props) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable3({ id: props.id });
  const style = { transform: CSS3.Transform.toString(transform), transition, opacity: isDragging ? 0.5 : 1 };
  return /* @__PURE__ */ jsx78("div", { ref: setNodeRef, style, children: /* @__PURE__ */ jsx78(DynamicSection, { ...props, handleProps: { ...attributes, ...listeners } }) });
}
function SectionBoard({
  sections,
  editMode,
  models = [],
  language = "en",
  columns = 1,
  onChange,
  onAddSection,
  className
}) {
  const t2 = T3[language];
  const isRTL = language === "ar";
  const [activeId, setActiveId] = React20.useState(null);
  const sensors = useSensors3(
    useSensor3(PointerSensor3, { activationConstraint: { distance: 4 } }),
    useSensor3(KeyboardSensor3, { coordinateGetter: sortableKeyboardCoordinates3 })
  );
  const update = (id, next) => onChange?.(sections.map((s) => s.id === id ? next : s));
  const remove = (id) => onChange?.(sections.filter((s) => s.id !== id));
  const onDragEnd = (e) => {
    setActiveId(null);
    const { active: active2, over } = e;
    if (!over || active2.id === over.id) return;
    const from = sections.findIndex((s) => s.id === active2.id);
    const to = sections.findIndex((s) => s.id === over.id);
    if (from < 0 || to < 0) return;
    onChange?.(arrayMove2(sections, from, to));
  };
  const grid = cn("grid gap-3", columns === 2 ? "sm:grid-cols-2" : "grid-cols-1");
  const active = sections.find((s) => s.id === activeId);
  if (!editMode) {
    return /* @__PURE__ */ jsx78("div", { dir: isRTL ? "rtl" : "ltr", className: cn(grid, className), children: sections.map((s) => /* @__PURE__ */ jsx78(DynamicSection, { section: s, language, models }, s.id)) });
  }
  return /* @__PURE__ */ jsxs66("div", { dir: isRTL ? "rtl" : "ltr", className: cn("space-y-3", className), children: [
    /* @__PURE__ */ jsxs66(
      DndContext3,
      {
        sensors,
        collisionDetection: closestCenter3,
        onDragStart: (e) => setActiveId(String(e.active.id)),
        onDragEnd,
        onDragCancel: () => setActiveId(null),
        children: [
          /* @__PURE__ */ jsx78(SortableContext3, { items: sections.map((s) => s.id), strategy: verticalListSortingStrategy3, children: /* @__PURE__ */ jsx78("div", { className: grid, children: sections.map((s) => /* @__PURE__ */ jsx78(
            SortableSection,
            {
              id: s.id,
              section: s,
              editMode: true,
              models,
              language,
              onChange: (next) => update(s.id, next),
              onRemove: () => remove(s.id)
            },
            s.id
          )) }) }),
          /* @__PURE__ */ jsx78(DragOverlay2, { children: active ? /* @__PURE__ */ jsx78(DynamicSection, { section: active, editMode: true, models, language, className: "shadow-lg" }) : null })
        ]
      }
    ),
    onAddSection && /* @__PURE__ */ jsxs66(Button, { variant: "outline", className: "w-full border-dashed", onClick: onAddSection, children: [
      /* @__PURE__ */ jsx78(Plus3, { className: "h-4 w-4" }),
      " ",
      t2.addSection
    ] })
  ] });
}

// src/components/markdown/MarkdownRenderer.tsx
import * as React21 from "react";
import ReactMarkdown2 from "react-markdown";
import remarkGfm2 from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { jsx as jsx79, jsxs as jsxs67 } from "react/jsx-runtime";
var _mermaidPromise = null;
function loadMermaid() {
  if (!_mermaidPromise) {
    _mermaidPromise = import("mermaid").then((m) => {
      m.default.initialize({ startOnLoad: false, securityLevel: "strict", theme: "neutral" });
      return m.default;
    });
  }
  return _mermaidPromise;
}
var _mermaidSeq = 0;
function MermaidBlock({ code }) {
  const ref = React21.useRef(null);
  const [error, setError] = React21.useState(null);
  React21.useEffect(() => {
    let cancelled = false;
    loadMermaid().then(async (mermaid) => {
      const id = `tg-mermaid-${++_mermaidSeq}`;
      const { svg } = await mermaid.render(id, code);
      if (!cancelled && ref.current) ref.current.innerHTML = svg;
    }).catch((e) => !cancelled && setError(String(e?.message || e)));
    return () => {
      cancelled = true;
    };
  }, [code]);
  if (error) {
    return /* @__PURE__ */ jsxs67("pre", { className: "overflow-auto rounded-lg border border-destructive/40 bg-destructive/10 p-3 text-xs text-destructive", children: [
      "Mermaid error: ",
      error,
      "\n\n",
      code
    ] });
  }
  return /* @__PURE__ */ jsx79("div", { ref, className: "my-3 flex justify-center overflow-x-auto rounded-lg border border-border bg-card p-3" });
}
function MarkdownRenderer({ content, language = "en", className }) {
  const isRTL = language === "ar";
  return /* @__PURE__ */ jsx79("div", { dir: isRTL ? "rtl" : "ltr", className: cn("tg-md text-sm leading-relaxed text-foreground", className), children: /* @__PURE__ */ jsx79(
    ReactMarkdown2,
    {
      remarkPlugins: [remarkGfm2],
      rehypePlugins: [[rehypeHighlight, { detect: true, ignoreMissing: true }]],
      components: {
        h1: (p) => /* @__PURE__ */ jsx79("h1", { className: "mb-3 mt-5 text-2xl font-bold", ...p }),
        h2: (p) => /* @__PURE__ */ jsx79("h2", { className: "mb-2 mt-5 border-b border-border pb-1 text-xl font-semibold", ...p }),
        h3: (p) => /* @__PURE__ */ jsx79("h3", { className: "mb-2 mt-4 text-lg font-semibold", ...p }),
        p: (p) => /* @__PURE__ */ jsx79("p", { className: "my-2.5", ...p }),
        a: (p) => /* @__PURE__ */ jsx79("a", { className: "font-medium text-primary underline-offset-2 hover:underline", ...p }),
        ul: (p) => /* @__PURE__ */ jsx79("ul", { className: "my-2.5 list-disc space-y-1 ps-6", ...p }),
        ol: (p) => /* @__PURE__ */ jsx79("ol", { className: "my-2.5 list-decimal space-y-1 ps-6", ...p }),
        li: (p) => /* @__PURE__ */ jsx79("li", { className: "marker:text-muted-foreground", ...p }),
        blockquote: (p) => /* @__PURE__ */ jsx79("blockquote", { className: "my-3 border-s-4 border-primary/40 ps-4 text-muted-foreground", ...p }),
        hr: () => /* @__PURE__ */ jsx79("hr", { className: "my-5 border-border" }),
        table: (p) => /* @__PURE__ */ jsx79("div", { className: "my-3 overflow-x-auto rounded-lg border border-border", children: /* @__PURE__ */ jsx79("table", { className: "w-full text-start text-sm", ...p }) }),
        thead: (p) => /* @__PURE__ */ jsx79("thead", { className: "bg-muted/50 text-muted-foreground", ...p }),
        th: (p) => /* @__PURE__ */ jsx79("th", { className: "border-b border-border px-3 py-2 text-start font-medium", ...p }),
        td: (p) => /* @__PURE__ */ jsx79("td", { className: "border-t border-border px-3 py-2", ...p }),
        code(props) {
          const { children, className: cls, node, ...rest } = props;
          const text = String(children ?? "");
          const lang = /language-(\w+)/.exec(cls || "")?.[1];
          const inline = !node || node.position?.start.line === node.position?.end.line;
          if (lang === "mermaid") return /* @__PURE__ */ jsx79(MermaidBlock, { code: text.replace(/\n$/, "") });
          if (inline && !cls) return /* @__PURE__ */ jsx79("code", { className: "rounded bg-muted px-1.5 py-0.5 font-mono text-[0.85em] text-foreground", ...rest, children });
          return /* @__PURE__ */ jsx79("code", { className: cn("hljs", cls), ...rest, children });
        },
        pre: (p) => /* @__PURE__ */ jsx79("pre", { className: "my-3 overflow-x-auto rounded-lg border border-border bg-muted/40 p-3 text-[0.8rem] leading-relaxed [&>code]:bg-transparent [&>code]:p-0", dir: "ltr", ...p })
      },
      children: content
    }
  ) });
}

// src/components/markdown/MarkdownEditor.tsx
import * as React22 from "react";
import { Bold, Italic, Heading1, Heading2, Heading3, List, ListOrdered, Link2, Code as Code3, Code2 as Code22, Quote, Eye as Eye3, Pencil as Pencil3, Columns2 } from "lucide-react";
import { jsx as jsx80, jsxs as jsxs68 } from "react/jsx-runtime";
var TOOLBAR = [
  { icon: Bold, title: { en: "Bold", ar: "\u063A\u0627\u0645\u0642" }, act: { wrap: "**" } },
  { icon: Italic, title: { en: "Italic", ar: "\u0645\u0627\u0626\u0644" }, act: { wrap: "_" } },
  { icon: Heading1, title: { en: "Heading 1", ar: "\u0639\u0646\u0648\u0627\u0646 1" }, act: { line: "# " } },
  { icon: Heading2, title: { en: "Heading 2", ar: "\u0639\u0646\u0648\u0627\u0646 2" }, act: { line: "## " } },
  { icon: Heading3, title: { en: "Heading 3", ar: "\u0639\u0646\u0648\u0627\u0646 3" }, act: { line: "### " } },
  { icon: List, title: { en: "Bulleted list", ar: "\u0642\u0627\u0626\u0645\u0629" }, act: { line: "- " } },
  { icon: ListOrdered, title: { en: "Numbered list", ar: "\u0642\u0627\u0626\u0645\u0629 \u0645\u0631\u0642\u0645\u0629" }, act: { line: "1. " } },
  { icon: Quote, title: { en: "Quote", ar: "\u0627\u0642\u062A\u0628\u0627\u0633" }, act: { line: "> " } },
  { icon: Link2, title: { en: "Link", ar: "\u0631\u0627\u0628\u0637" }, act: { wrap: "[", end: "](https://)" } },
  { icon: Code3, title: { en: "Inline code", ar: "\u0643\u0648\u062F" }, act: { wrap: "`" } },
  { icon: Code22, title: { en: "Code block", ar: "\u0643\u062A\u0644\u0629 \u0643\u0648\u062F" }, act: { wrap: "\n```\n", end: "\n```\n" } }
];
var VIEWS2 = [
  { key: "write", icon: Pencil3, en: "Write", ar: "\u0643\u062A\u0627\u0628\u0629" },
  { key: "preview", icon: Eye3, en: "Preview", ar: "\u0645\u0639\u0627\u064A\u0646\u0629" },
  { key: "split", icon: Columns2, en: "Split", ar: "\u062A\u0642\u0633\u064A\u0645" }
];
function MarkdownEditor({
  value,
  defaultValue = "",
  onChange,
  view,
  defaultView = "split",
  onViewChange,
  language = "en",
  placeholder,
  minRows = 10,
  className
}) {
  const isRTL = language === "ar";
  const ref = React22.useRef(null);
  const [internal, setInternal] = React22.useState(defaultValue);
  const text = value ?? internal;
  const setText = (v) => {
    setInternal(v);
    onChange?.(v);
  };
  const [internalView, setInternalView] = React22.useState(defaultView);
  const activeView = view ?? internalView;
  const setView = (v) => {
    setInternalView(v);
    onViewChange?.(v);
  };
  function apply(act) {
    const el = ref.current;
    if (!el) return;
    const start = el.selectionStart, end = el.selectionEnd;
    const sel = text.slice(start, end);
    let next = text, caret = end;
    if ("wrap" in act) {
      const open = act.wrap, close = "end" in act ? act.end : act.wrap;
      next = text.slice(0, start) + open + sel + close + text.slice(end);
      caret = start + open.length + sel.length + close.length;
    } else if ("line" in act) {
      const lineStart = text.lastIndexOf("\n", start - 1) + 1;
      next = text.slice(0, lineStart) + act.line + text.slice(lineStart);
      caret = end + act.line.length;
    } else if ("insert" in act) {
      next = text.slice(0, start) + act.insert + text.slice(end);
      caret = start + act.insert.length;
    }
    setText(next);
    requestAnimationFrame(() => {
      el.focus();
      el.setSelectionRange(caret, caret);
    });
  }
  const t2 = (en, ar) => isRTL ? ar : en;
  return /* @__PURE__ */ jsxs68("div", { dir: isRTL ? "rtl" : "ltr", className: cn("flex flex-col overflow-hidden rounded-xl border border-border bg-card", className), children: [
    /* @__PURE__ */ jsxs68("div", { className: "flex flex-wrap items-center gap-0.5 border-b border-border p-1.5", children: [
      TOOLBAR.map(({ icon: Icon, title, act }, i) => /* @__PURE__ */ jsx80(
        Button,
        {
          type: "button",
          variant: "ghost",
          size: "sm",
          className: "h-7 w-7 p-0",
          title: t2(title.en, title.ar),
          "aria-label": t2(title.en, title.ar),
          disabled: activeView === "preview",
          onClick: () => apply(act),
          children: /* @__PURE__ */ jsx80(Icon, { className: "h-4 w-4" })
        },
        i
      )),
      /* @__PURE__ */ jsx80("div", { className: "ms-auto flex items-center gap-0.5", children: VIEWS2.map(({ key, icon: Icon, en, ar }) => /* @__PURE__ */ jsxs68(
        Button,
        {
          type: "button",
          size: "sm",
          variant: activeView === key ? "secondary" : "ghost",
          className: "h-7 gap-1.5 px-2",
          onClick: () => setView(key),
          children: [
            /* @__PURE__ */ jsx80(Icon, { className: "h-3.5 w-3.5" }),
            t2(en, ar)
          ]
        },
        key
      )) })
    ] }),
    /* @__PURE__ */ jsxs68("div", { className: cn("min-h-0 flex-1", activeView === "split" && "grid grid-cols-1 divide-y divide-border md:grid-cols-2 md:divide-x md:divide-y-0 rtl:md:divide-x-reverse"), children: [
      activeView !== "preview" && /* @__PURE__ */ jsx80(
        Textarea,
        {
          ref,
          value: text,
          onChange: (e) => setText(e.target.value),
          placeholder: placeholder ?? t2("Write markdown\u2026", "\u0627\u0643\u062A\u0628 \u0645\u0627\u0631\u0643\u062F\u0627\u0648\u0646\u2026"),
          rows: minRows,
          dir: isRTL ? "rtl" : "ltr",
          className: "min-h-[12rem] resize-y rounded-none border-0 font-mono text-sm focus-visible:ring-0"
        }
      ),
      activeView !== "write" && /* @__PURE__ */ jsx80("div", { className: "min-h-[12rem] overflow-auto p-4", children: text.trim() ? /* @__PURE__ */ jsx80(MarkdownRenderer, { content: text, language }) : /* @__PURE__ */ jsx80("p", { className: "text-sm text-muted-foreground", children: t2("Nothing to preview yet.", "\u0644\u0627 \u0634\u064A\u0621 \u0644\u0644\u0645\u0639\u0627\u064A\u0646\u0629 \u0628\u0639\u062F.") }) })
    ] })
  ] });
}

// src/components/copilot/CopilotProvider.tsx
import {
  createContext as createContext3,
  useCallback as useCallback15,
  useContext as useContext3,
  useEffect as useEffect27,
  useRef as useRef18,
  useState as useState45
} from "react";

// src/components/copilot/UnifiedCopilotDock.tsx
import { useState as useState44, useRef as useRef17, useEffect as useEffect26, useCallback as useCallback14, useMemo as useMemo11 } from "react";
import {
  Send,
  Sparkles as Sparkles7,
  User,
  Loader2 as Loader29,
  X as X6,
  ChevronUp as ChevronUp4,
  Clock as Clock4,
  Plus as Plus5,
  Maximize2,
  Users,
  AlertTriangle as AlertTriangle3,
  ExternalLink as ExternalLink5,
  MoreVertical,
  Brain as Brain3,
  Zap as Zap2,
  Lightbulb,
  PanelLeft,
  PanelRight,
  PanelBottom,
  Check as Check5,
  Copy,
  Share2,
  Wrench,
  ChevronDown as ChevronDown10,
  AtSign,
  Terminal as Terminal2,
  Trash2 as Trash25
} from "lucide-react";

// src/components/copilot/AgentSteps.tsx
import { useState as useState40, useMemo as useMemo10 } from "react";
import {
  Search as Search7,
  Database as Database4,
  Globe as Globe4,
  Sparkles as Sparkles6,
  Check as Check3,
  ChevronDown as ChevronDown8,
  ExternalLink as ExternalLink4,
  Brain,
  Microscope,
  Newspaper,
  FileText as FileText2,
  Clock as Clock3,
  X as XIcon,
  CircleDot as CircleDot3
} from "lucide-react";
import { jsx as jsx81, jsxs as jsxs69 } from "react/jsx-runtime";
var STEP_MSG_AR = {
  "Searching internal knowledge...": "\u0627\u0644\u0628\u062D\u062B \u0641\u064A \u0642\u0627\u0639\u062F\u0629 \u0627\u0644\u0645\u0639\u0631\u0641\u0629 \u0627\u0644\u062F\u0627\u062E\u0644\u064A\u0629...",
  "No internal matches found": "\u0644\u0627 \u062A\u0648\u062C\u062F \u0646\u062A\u0627\u0626\u062C \u062F\u0627\u062E\u0644\u064A\u0629",
  "Searching the web...": "\u0627\u0644\u0628\u062D\u062B \u0641\u064A \u0627\u0644\u0648\u064A\u0628...",
  "No web results found": "\u0644\u0627 \u062A\u0648\u062C\u062F \u0646\u062A\u0627\u0626\u062C \u0648\u064A\u0628",
  "Searching X/Twitter for public discourse...": "\u0627\u0644\u0628\u062D\u062B \u0641\u064A \u0645\u0646\u0635\u0629 X \u0639\u0646 \u0627\u0644\u062E\u0637\u0627\u0628 \u0627\u0644\u0639\u0627\u0645...",
  "No social posts found": "\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0646\u0634\u0648\u0631\u0627\u062A",
  "Searching latest news...": "\u0627\u0644\u0628\u062D\u062B \u0641\u064A \u0627\u0644\u0623\u062E\u0628\u0627\u0631 \u0627\u0644\u0623\u062E\u064A\u0631\u0629...",
  "No news results found": "\u0644\u0627 \u062A\u0648\u062C\u062F \u0646\u062A\u0627\u0626\u062C \u0625\u062E\u0628\u0627\u0631\u064A\u0629",
  "Composing response...": "\u0635\u064A\u0627\u063A\u0629 \u0627\u0644\u0631\u062F...",
  "Formulating response...": "\u0623\u0635\u0648\u063A \u0627\u0644\u0631\u062F...",
  "Answering from screen context...": "\u0627\u0644\u0625\u062C\u0627\u0628\u0629 \u0645\u0646 \u0633\u064A\u0627\u0642 \u0627\u0644\u0634\u0627\u0634\u0629...",
  "Files processed": "\u062A\u0645 \u0645\u0639\u0627\u0644\u062C\u0629 \u0627\u0644\u0645\u0644\u0641\u0627\u062A",
  "Documents loaded": "\u062A\u0645 \u0642\u0631\u0627\u0621\u0629 \u0627\u0644\u0645\u0633\u062A\u0646\u062F\u0627\u062A",
  "Recalling from memory...": "\u0623\u0633\u062A\u062D\u0636\u0631 \u0645\u0646 \u0627\u0644\u0630\u0627\u0643\u0631\u0629...",
  "Profile recalled": "\u062A\u0645 \u0627\u0633\u062A\u062D\u0636\u0627\u0631 \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0634\u062E\u0635\u064A",
  "Reflecting on public record...": "\u0623\u062A\u0623\u0645\u0644 \u0641\u064A \u0627\u0644\u0633\u062C\u0644 \u0627\u0644\u0639\u0627\u0645...",
  "No additional context needed": "\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0625\u0636\u0627\u0641\u064A\u0629",
  "Deep research in progress...": "\u0628\u062D\u062B \u0639\u0645\u064A\u0642 \u0642\u064A\u062F \u0627\u0644\u062A\u0646\u0641\u064A\u0630...",
  "No deep research results found": "\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0646\u062A\u0627\u0626\u062C",
  "Entity already exists": "\u0627\u0644\u062C\u0647\u0629 \u0645\u0648\u062C\u0648\u062F\u0629 \u0628\u0627\u0644\u0641\u0639\u0644",
  "New entity created": "\u062A\u0645 \u0625\u0646\u0634\u0627\u0621 \u062C\u0647\u0629 \u062C\u062F\u064A\u062F\u0629",
  "Narrative already exists": "\u0627\u0644\u0631\u0648\u0627\u064A\u0629 \u0645\u0648\u062C\u0648\u062F\u0629 \u0628\u0627\u0644\u0641\u0639\u0644",
  "New narrative added": "\u062A\u0645\u062A \u0625\u0636\u0627\u0641\u0629 \u0631\u0648\u0627\u064A\u0629 \u062C\u062F\u064A\u062F\u0629",
  "Narrative enhanced": "\u062A\u0645 \u062A\u062D\u0633\u064A\u0646 \u0627\u0644\u0631\u0648\u0627\u064A\u0629",
  "Narrative not found": "\u0627\u0644\u0631\u0648\u0627\u064A\u0629 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F\u0629",
  "Analysis complete": "\u0627\u0643\u062A\u0645\u0644 \u0627\u0644\u062A\u062D\u0644\u064A\u0644"
};
var STEP_MSG_AR_PATTERNS = [
  { pattern: /^Found (\d+) web sources?$/, replace: (m) => `\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 ${m[1]} \u0645\u0635\u062F\u0631` },
  { pattern: /^Found (\d+) social posts?$/, replace: (m) => `\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 ${m[1]} \u0645\u0646\u0634\u0648\u0631` },
  { pattern: /^Found (\d+) news sources?$/, replace: (m) => `\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 ${m[1]} \u0645\u0635\u062F\u0631 \u0625\u062E\u0628\u0627\u0631\u064A` },
  { pattern: /^Reviewed (\d+) sources?$/, replace: (m) => `\u062A\u0645 \u0645\u0631\u0627\u062C\u0639\u0629 ${m[1]} \u0645\u0635\u0627\u062F\u0631` },
  { pattern: /^(\d+) high-relevance.*$/, replace: (m) => `${m[1]} \u0646\u062A\u064A\u062C\u0629 \u0639\u0627\u0644\u064A\u0629 \u0627\u0644\u0635\u0644\u0629` },
  { pattern: /^Synthesizing from (\d+) sources?\.\.\.$/, replace: (m) => `\u062A\u062C\u0645\u064A\u0639 \u0645\u0646 ${m[1]} \u0645\u0635\u062F\u0631...` },
  { pattern: /^Processing (\d+) attached files?\.\.\.$/, replace: (m) => `\u0645\u0639\u0627\u0644\u062C\u0629 ${m[1]} \u0645\u0644\u0641 \u0645\u0631\u0641\u0642...` },
  { pattern: /^Reading (\d+) documents?\.\.\.$/, replace: (m) => `\u0642\u0631\u0627\u0621\u0629 ${m[1]} \u0645\u0633\u062A\u0646\u062F...` },
  { pattern: /^Profiling "(.+)" as (.+)\.\.\.$/, replace: (m) => `\u062C\u0627\u0631\u064D \u062A\u0633\u062C\u064A\u0644 "${m[1]}" \u0643\u0640 ${m[2]}...` },
  { pattern: /^Adding narrative "(.+)"\.\.\.$/, replace: (m) => `\u062C\u0627\u0631\u064D \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0631\u0648\u0627\u064A\u0629 "${m[1]}"...` },
  { pattern: /^Enhancing narrative\.\.\.$/, replace: () => "\u062C\u0627\u0631\u064D \u062A\u062D\u0633\u064A\u0646 \u0627\u0644\u0631\u0648\u0627\u064A\u0629..." },
  { pattern: /^Deep research complete: (\d+) sources? \((.+)\)$/, replace: (m) => `\u0628\u062D\u062B \u0639\u0645\u064A\u0642 \u0645\u0643\u062A\u0645\u0644: ${m[1]} \u0645\u0635\u062F\u0631 (${m[2]})` },
  { pattern: /^Scanned (\d+) social posts/, replace: (m) => `\u062A\u0645 \u0645\u0633\u062D ${m[1]} \u0645\u0646\u0634\u0648\u0631 \u0627\u062C\u062A\u0645\u0627\u0639\u064A` },
  { pattern: /^Re-profiling as (.+)$/, replace: (m) => `\u0625\u0639\u0627\u062F\u0629 \u062A\u0633\u062C\u064A\u0644 \u0643\u0640 ${m[1]}` },
  { pattern: /^Running (.+)\.\.\.$/, replace: (m) => `\u062C\u0627\u0631\u064D \u062A\u0634\u063A\u064A\u0644 ${m[1]}...` },
  { pattern: /^(.+) complete$/, replace: (m) => `\u0627\u0643\u062A\u0645\u0644 ${m[1]}` }
];
var SOURCE_LABEL_AR = {
  "Internal Narrative": "\u0633\u0631\u062F\u064A\u0629 \u062F\u0627\u062E\u0644\u064A\u0629",
  "Alert Record": "\u0633\u062C\u0644 \u0625\u0634\u0627\u0631\u0629",
  "Entity Profile": "\u0645\u0644\u0641 \u062C\u0647\u0629",
  "Internal Document": "\u0645\u0633\u062A\u0646\u062F \u062F\u0627\u062E\u0644\u064A"
};
function translateStepMessage(message, language) {
  if (language !== "ar") return message;
  if (STEP_MSG_AR[message]) return STEP_MSG_AR[message];
  for (const { pattern, replace } of STEP_MSG_AR_PATTERNS) {
    const match = message.match(pattern);
    if (match) return replace(match);
  }
  return message;
}
function translateSource(source, language) {
  if (language !== "ar") return source;
  return SOURCE_LABEL_AR[source] || source;
}
var STEP_ICONS2 = {
  rag_search: { active: Search7, complete: Database4 },
  rag_results: { active: Database4, complete: Database4 },
  web_search: { active: Globe4, complete: Globe4 },
  web_results: { active: Globe4, complete: Globe4 },
  news_search: { active: Newspaper, complete: Newspaper },
  news_results: { active: Newspaper, complete: Newspaper },
  social_search: { active: CircleDot3, complete: CircleDot3 },
  social_results: { active: CircleDot3, complete: CircleDot3 },
  deep_research: { active: Microscope, complete: Microscope },
  deep_research_searching: { active: Search7, complete: Search7 },
  deep_research_reading: { active: Globe4, complete: Globe4 },
  deep_research_thinking: { active: Brain, complete: Brain },
  deep_research_progress: { active: Clock3, complete: Clock3 },
  deep_research_results: { active: Microscope, complete: Microscope },
  file_processing: { active: FileText2, complete: FileText2 },
  tool_check: { active: Search7, complete: Check3 },
  profile_entity: { active: Search7, complete: Search7 },
  profile_result: { active: Search7, complete: Check3 },
  track_narrative: { active: Search7, complete: Search7 },
  narrative_result: { active: Search7, complete: Check3 },
  composing: { active: Sparkles6, complete: Sparkles6 },
  twin_recall: { active: Brain, complete: Brain },
  twin_reflect: { active: Globe4, complete: Globe4 },
  twin_composing: { active: Sparkles6, complete: Sparkles6 },
  compare_detect: { active: Search7, complete: Search7 },
  compare_profiling: { active: Clock3, complete: Check3 },
  compare_factors: { active: Sparkles6, complete: Sparkles6 },
  compare_running: { active: Clock3, complete: Clock3 },
  compare_result: { active: Check3, complete: Check3 },
  auto_profile: { active: Search7, complete: Check3 },
  compare_ready: { active: Check3, complete: Check3 }
};
function getStepState(step, allSteps, isStreaming) {
  if (isStreaming === false) return "complete";
  if (step.step.endsWith("_results") || step.step === "profile_result" || step.step === "narrative_result" || step.step === "deep_research_results") return "complete";
  if (step.step === "rag_search" && allSteps.some((s) => s.step === "rag_results")) return "complete";
  if (step.step === "web_search" && allSteps.some((s) => s.step === "web_results")) return "complete";
  if (step.step === "news_search" && allSteps.some((s) => s.step === "news_results")) return "complete";
  if (step.step === "social_search" && allSteps.some((s) => s.step === "social_results")) return "complete";
  if (step.step === "deep_research" && allSteps.some((s) => s.step === "deep_research_results")) return "complete";
  if (["deep_research_searching", "deep_research_reading", "deep_research_thinking", "deep_research_progress"].includes(step.step)) {
    const idx = allSteps.indexOf(step);
    if (allSteps.slice(idx + 1).some((s) => s.step.startsWith("deep_research_"))) return "complete";
  }
  if (step.step === "tool_check" && allSteps.some((s) => s.step === "composing" || s.step === "profile_entity" || s.step === "track_narrative")) return "complete";
  if (step.step === "profile_entity" && allSteps.some((s) => s.step === "profile_result")) return "complete";
  if (step.step === "track_narrative" && allSteps.some((s) => s.step === "narrative_result")) return "complete";
  if ((step.step === "twin_recall" || step.step === "twin_reflect" || step.step === "twin_composing" || step.step === "composing" || step.step === "auto_profile" || step.step === "file_processing") && step.done) return "complete";
  if (step.step === "compare_factors" || step.step === "compare_result") return "complete";
  if (step.step === "compare_detect" && allSteps.some((s) => s.step === "compare_factors" || s.step === "compare_ready")) return "complete";
  if (step.step === "compare_profiling" && allSteps.some((s) => s.step === "compare_factors")) return "complete";
  if (step.step === "compare_running" && allSteps.some((s) => s.step === "compare_result")) return "complete";
  if (step.done) return "complete";
  return "active";
}
function StepIndicator({ state, step }) {
  const icons = STEP_ICONS2[step] || { active: Sparkles6, complete: Sparkles6 };
  if (state === "error") return /* @__PURE__ */ jsx81(XIcon, { className: "w-3 h-3 text-destructive" });
  if (state === "complete") {
    return /* @__PURE__ */ jsx81(Check3, { className: "w-3 h-3 text-emerald-400" });
  }
  const Icon = icons.active;
  return /* @__PURE__ */ jsxs69("span", { className: "relative flex h-3 w-3 items-center justify-center", children: [
    /* @__PURE__ */ jsx81("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/40" }),
    /* @__PURE__ */ jsx81(Icon, { className: "relative w-2.5 h-2.5 text-emerald-400" })
  ] });
}
function TimingBadge({ ms }) {
  if (!ms) return null;
  const display = ms >= 1e3 ? `${(ms / 1e3).toFixed(1)}s` : `${ms}ms`;
  return /* @__PURE__ */ jsxs69("span", { className: "text-[10px] text-muted-foreground/60 tabular-nums ms-1", children: [
    "(",
    display,
    ")"
  ] });
}
function SourcePills({ sources, language }) {
  if (!sources || sources.length === 0) return null;
  return /* @__PURE__ */ jsx81("div", { className: "flex flex-wrap gap-1 mt-1", children: sources.slice(0, 4).map((s, i) => /* @__PURE__ */ jsx81("span", { className: "inline-flex items-center px-1.5 py-0.5 bg-muted/50 rounded text-[10px] text-muted-foreground leading-tight", children: translateSource(s, language) }, i)) });
}
function DomainPills({ domains, citations }) {
  if (!domains || domains.length === 0) return null;
  return /* @__PURE__ */ jsx81("div", { className: "flex flex-wrap gap-1 mt-1", children: domains.slice(0, 4).map((domain, i) => {
    const url = citations?.[i];
    return /* @__PURE__ */ jsxs69(
      "a",
      {
        href: url || "#",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "inline-flex items-center gap-0.5 px-1.5 py-0.5 bg-muted/50 rounded text-[10px] text-muted-foreground hover:text-foreground transition-colors duration-fast ease-standard leading-tight",
        children: [
          /* @__PURE__ */ jsx81(ExternalLink4, { className: "w-2 h-2" }),
          domain
        ]
      },
      i
    );
  }) });
}
function HandlePills({ handles }) {
  if (!handles || handles.length === 0) return null;
  return /* @__PURE__ */ jsx81("div", { className: "flex flex-wrap gap-1 mt-1", children: handles.slice(0, 4).map((h, i) => /* @__PURE__ */ jsxs69(
    "a",
    {
      href: `https://x.com/${h}`,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "inline-flex items-center px-1.5 py-0.5 bg-muted/50 rounded text-[10px] text-muted-foreground hover:text-foreground transition-colors duration-fast ease-standard leading-tight",
      children: [
        "@",
        h
      ]
    },
    i
  )) });
}
function StepLine({
  step,
  allSteps,
  isRTL,
  isStreaming,
  language
}) {
  const state = getStepState(step, allSteps, isStreaming);
  const isComplete = state === "complete";
  return /* @__PURE__ */ jsxs69("div", { className: `flex items-start gap-2 text-xs transition-opacity duration-300 ${isComplete ? "text-muted-foreground/70" : "text-muted-foreground"}`, children: [
    /* @__PURE__ */ jsx81("div", { className: "mt-0.5 flex-shrink-0", children: /* @__PURE__ */ jsx81(StepIndicator, { state, step: step.step }) }),
    /* @__PURE__ */ jsxs69("div", { className: `flex-1 min-w-0 text-start`, children: [
      /* @__PURE__ */ jsx81("span", { children: translateStepMessage(step.message, language) }),
      /* @__PURE__ */ jsx81(TimingBadge, { ms: step.duration_ms }),
      step.query && /* @__PURE__ */ jsxs69("span", { className: `ms-1 text-foreground/50 font-mono text-[10px]`, children: [
        '"',
        step.query,
        '"'
      ] }),
      step.subQuery && /* @__PURE__ */ jsxs69("span", { className: `ms-1 text-foreground/50 font-mono text-[10px]`, children: [
        '"',
        step.subQuery,
        '"'
      ] }),
      /* @__PURE__ */ jsx81(SourcePills, { sources: step.sources, language }),
      /* @__PURE__ */ jsx81(DomainPills, { domains: step.domains, citations: step.citations }),
      /* @__PURE__ */ jsx81(HandlePills, { handles: step.handles })
    ] })
  ] });
}
var AgentSteps = ({ steps, isStreaming, language = "en", dir }) => {
  const [isExpanded, setIsExpanded] = useState40(true);
  const isAr = language === "ar";
  const isRTL = dir === "rtl" || dir === void 0 && isAr;
  const displaySteps = useMemo10(() => {
    const resultTypes = new Set(steps.filter((s) => s.step.endsWith("_results")).map((s) => s.step.replace("_results", "_search")));
    const hasDeepResults = steps.some((s) => s.step === "deep_research_results");
    return steps.filter((s) => {
      if (s.step.endsWith("_search") && !s.step.startsWith("deep_research_") && resultTypes.has(s.step)) return false;
      if (s.step === "deep_research" && steps.some((ss) => ss.step.startsWith("deep_research_") && ss.step !== "deep_research" && ss.step !== "deep_research_results")) return false;
      if (hasDeepResults && ["deep_research_searching", "deep_research_reading", "deep_research_thinking", "deep_research_progress"].includes(s.step)) return false;
      return true;
    });
  }, [steps]);
  if (steps.length === 0) return null;
  const ragResult = steps.find((s) => s.step === "rag_results");
  const webResult = steps.find((s) => s.step === "web_results");
  const socialResult = steps.find((s) => s.step === "social_results");
  const summaryParts = [];
  if (ragResult?.count) summaryParts.push(isAr ? `${ragResult.count} \u062F\u0627\u062E\u0644\u064A` : `${ragResult.count} internal`);
  if (webResult?.count) summaryParts.push(isAr ? `${webResult.count} \u0648\u064A\u0628` : `${webResult.count} web`);
  if (socialResult?.count) summaryParts.push(isAr ? `${socialResult.count} \u062A\u0648\u0627\u0635\u0644` : `${socialResult.count} social`);
  const totalDuration = [ragResult, webResult, socialResult].reduce((sum, s) => sum + (s?.duration_ms || 0), 0);
  const allDone = !isStreaming || steps.some((s) => s.step === "composing" || s.step === "twin_composing");
  const summary = summaryParts.length > 0 ? isAr ? `\u062A\u0645 \u062A\u062D\u0644\u064A\u0644 ${summaryParts.join("\u060C ")} \u0645\u0635\u0627\u062F\u0631${totalDuration ? ` (${(totalDuration / 1e3).toFixed(1)}\u062B)` : ""}` : `Analyzed ${summaryParts.join(", ")} sources${totalDuration ? ` (${(totalDuration / 1e3).toFixed(1)}s)` : ""}` : allDone ? isAr ? "\u0627\u0643\u062A\u0645\u0644 \u0627\u0644\u062A\u062D\u0644\u064A\u0644" : "Analysis complete" : isAr ? "\u062C\u0627\u0631\u064D \u0627\u0644\u0628\u062D\u062B..." : "Searching...";
  const triggerIcon = !isStreaming || allDone ? /* @__PURE__ */ jsx81(Check3, { className: "w-3 h-3 text-emerald-400" }) : /* @__PURE__ */ jsxs69("span", { className: "relative flex h-3 w-3 items-center justify-center", children: [
    /* @__PURE__ */ jsx81("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/40" }),
    /* @__PURE__ */ jsx81(Search7, { className: "relative w-2.5 h-2.5 text-emerald-400" })
  ] });
  return (
    // dir set locally so flex order, borders, and text alignment mirror natively
    // in RTL without manual flex-row-reverse flips (which double-flip when an
    // ancestor already sets dir="rtl", e.g. inside UnifiedCopilotDock).
    /* @__PURE__ */ jsxs69(Collapsible, { open: isExpanded, onOpenChange: setIsExpanded, dir: isRTL ? "rtl" : "ltr", children: [
      /* @__PURE__ */ jsxs69(
        CollapsibleTrigger,
        {
          className: `flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors duration-fast ease-standard cursor-pointer py-1`,
          children: [
            triggerIcon,
            /* @__PURE__ */ jsx81("span", { children: summary }),
            /* @__PURE__ */ jsx81(ChevronDown8, { className: `w-3 h-3 transition-transform duration-fast ease-standard ${isExpanded ? "rotate-180" : ""}` })
          ]
        }
      ),
      /* @__PURE__ */ jsx81(CollapsibleContent, { children: /* @__PURE__ */ jsx81("div", { className: `mt-1 space-y-1.5 border-border ps-1 border-s-2 ms-1.5`, children: displaySteps.map((s, i) => /* @__PURE__ */ jsx81(
        StepLine,
        {
          step: s,
          allSteps: steps,
          isRTL,
          isStreaming,
          language
        },
        `${s.step}-${i}`
      )) }) })
    ] })
  );
};
AgentSteps.displayName = "AgentSteps";
var AgentSteps_default = AgentSteps;

// src/components/copilot/StreamErrorBanner.tsx
import { WifiOff, RefreshCw as RefreshCw2 } from "lucide-react";
import { Fragment as Fragment19, jsx as jsx82, jsxs as jsxs70 } from "react/jsx-runtime";
var StreamErrorBanner = ({ onRetry, isRetrying = false, language = "en", dir }) => {
  const isAR = language === "ar";
  const resolvedDir = dir ?? (isAR ? "rtl" : "ltr");
  const handleRetry = () => {
    if (!isRetrying) onRetry();
  };
  return /* @__PURE__ */ jsxs70(
    "div",
    {
      className: "flex items-start gap-3 px-3 py-2.5 rounded-xl bg-destructive/10 border border-destructive/30 text-sm",
      dir: resolvedDir,
      role: "alert",
      "aria-live": "polite",
      children: [
        /* @__PURE__ */ jsx82(WifiOff, { className: "w-4 h-4 text-destructive shrink-0 mt-0.5", "aria-hidden": "true" }),
        /* @__PURE__ */ jsxs70("div", { className: "flex-1 min-w-0 space-y-2", children: [
          /* @__PURE__ */ jsx82("p", { className: "text-destructive font-medium text-xs leading-snug", children: isAR ? "\u0627\u0646\u0642\u0637\u0639 \u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u0623\u062B\u0646\u0627\u0621 \u0627\u0633\u062A\u062C\u0627\u0628\u0629 \u0627\u0644\u0645\u0633\u0627\u0639\u062F" : "Connection interrupted during response" }),
          /* @__PURE__ */ jsx82("p", { className: "text-muted-foreground text-[11px] leading-snug", children: isAR ? "\u0627\u0646\u0642\u0637\u0639\u062A \u0627\u0644\u0628\u062B \u0628\u0633\u0628\u0628 \u0645\u0634\u0643\u0644\u0629 \u0641\u064A \u0627\u0644\u0634\u0628\u0643\u0629. \u064A\u0645\u0643\u0646\u0643 \u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629 \u0644\u0627\u0633\u062A\u0626\u0646\u0627\u0641 \u0627\u0644\u0645\u062D\u0627\u062F\u062B\u0629." : "The stream was interrupted due to a network issue. Retry to continue the conversation." }),
          /* @__PURE__ */ jsx82(
            Button,
            {
              type: "button",
              variant: "outline",
              size: "sm",
              className: "h-7 text-xs border-destructive/40 text-destructive hover:bg-destructive/10 hover:text-destructive",
              onClick: handleRetry,
              disabled: isRetrying,
              children: isRetrying ? /* @__PURE__ */ jsxs70(Fragment19, { children: [
                /* @__PURE__ */ jsx82(RefreshCw2, { className: "w-3 h-3 animate-spin me-1.5", "aria-hidden": "true" }),
                isAR ? "\u062C\u0627\u0631\u064D \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629..." : "Retrying..."
              ] }) : /* @__PURE__ */ jsxs70(Fragment19, { children: [
                /* @__PURE__ */ jsx82(RefreshCw2, { className: "w-3 h-3 me-1.5", "aria-hidden": "true" }),
                isAR ? "\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629" : "Retry"
              ] })
            }
          )
        ] })
      ]
    }
  );
};
StreamErrorBanner.displayName = "StreamErrorBanner";
var StreamErrorBanner_default = StreamErrorBanner;

// src/components/chat/ChatToolbar.tsx
import { useState as useState41, useRef as useRef16, useCallback as useCallback12, useEffect as useEffect24 } from "react";
import { Globe as Globe5, Newspaper as Newspaper2, Microscope as Microscope2, Paperclip as Paperclip2, ChevronDown as ChevronDown9, Brain as Brain2, Zap } from "lucide-react";

// src/components/chat/FilePreviewChip.tsx
import { X as X4, FileText as FileText3, Image, File } from "lucide-react";
import { jsx as jsx83, jsxs as jsxs71 } from "react/jsx-runtime";
function getFileIcon(type) {
  if (type.startsWith("image/")) return Image;
  if (type === "application/pdf" || type.startsWith("text/")) return FileText3;
  return File;
}
var FilePreviewChip = ({ attachment, onRemove, language = "en" }) => {
  const Icon = getFileIcon(attachment.type);
  const isImage = attachment.type.startsWith("image/");
  const previewSrc = attachment.data || attachment.url || "";
  return /* @__PURE__ */ jsxs71("div", { className: "inline-flex items-center gap-1.5 px-2 py-1 bg-muted border border-border rounded-lg text-xs max-w-[180px] group", children: [
    isImage ? (
      // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
      /* @__PURE__ */ jsx83("img", { src: previewSrc, alt: attachment.name, className: "w-5 h-5 rounded object-cover shrink-0" })
    ) : /* @__PURE__ */ jsx83(Icon, { className: "w-3.5 h-3.5 text-muted-foreground shrink-0" }),
    /* @__PURE__ */ jsx83("span", { className: "truncate text-foreground", children: attachment.name }),
    /* @__PURE__ */ jsx83(
      "button",
      {
        onClick: onRemove,
        className: "ms-auto shrink-0 p-0.5 rounded hover:bg-destructive/20 text-muted-foreground hover:text-destructive transition-colors duration-fast ease-standard",
        "aria-label": language === "ar" ? "\u0625\u0632\u0627\u0644\u0629" : "Remove",
        children: /* @__PURE__ */ jsx83(X4, { className: "w-3 h-3" })
      }
    )
  ] });
};
FilePreviewChip.displayName = "FilePreviewChip";
var FilePreviewChip_default = FilePreviewChip;

// src/components/chat/ChatToolbar.tsx
import { jsx as jsx84, jsxs as jsxs72 } from "react/jsx-runtime";
function XIcon2({ className }) {
  return /* @__PURE__ */ jsx84("svg", { viewBox: "0 0 24 24", className, fill: "currentColor", children: /* @__PURE__ */ jsx84("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" }) });
}
var ALLOWED_ATTACHMENT_MIMES = /* @__PURE__ */ new Set([
  "image/png",
  "image/jpeg",
  "image/webp",
  "image/gif",
  "image/heic",
  "image/heif",
  "application/pdf"
]);
var SEARCH_SOURCES = [
  { id: "web", label: "Web", labelAr: "\u0648\u064A\u0628", icon: Globe5 },
  { id: "news", label: "News", labelAr: "\u0623\u062E\u0628\u0627\u0631", icon: Newspaper2 },
  { id: "social", label: "Social", labelAr: "\u0627\u062C\u062A\u0645\u0627\u0639\u064A", icon: XIcon2 }
];
var ChatToolbar = ({
  forcedTools,
  onForcedToolsChange,
  attachments,
  onAttachmentsChange,
  thinkingMode,
  onThinkingModeChange,
  disabled,
  language = "en",
  onUploadReady
}) => {
  const fileInputRef = useRef16(null);
  const [uploading, setUploading] = useState41(false);
  const [uploadError, setUploadError] = useState41(null);
  const isAr = language === "ar";
  const isSearchActive = !!forcedTools.search;
  const isDeepResearchActive = !!forcedTools.deep_research;
  const toggleSearch = () => {
    if (isSearchActive) {
      onForcedToolsChange({ ...forcedTools, search: false, search_sources: void 0 });
    } else {
      onForcedToolsChange({ search: true, search_sources: ["web"], deep_research: false });
    }
  };
  const toggleDeepResearch = () => {
    if (isDeepResearchActive) {
      onForcedToolsChange({ ...forcedTools, deep_research: false });
    } else {
      onForcedToolsChange({ search: false, search_sources: void 0, deep_research: true });
    }
  };
  const toggleSource = (sourceId) => {
    const current = forcedTools.search_sources || ["web"];
    const isActive = current.includes(sourceId);
    let next;
    if (isActive) {
      next = current.filter((s) => s !== sourceId);
      if (next.length === 0) next = ["web"];
    } else {
      next = [...current, sourceId];
    }
    onForcedToolsChange({ ...forcedTools, search_sources: next });
  };
  const uploadFiles = useCallback12(async (files) => {
    if (files.length === 0) return;
    setUploading(true);
    setUploadError(null);
    const newAttachments = [];
    for (const file of files) {
      if (file.size > 10 * 1024 * 1024) {
        setUploadError(isAr ? "\u0627\u0644\u0645\u0644\u0641 \u0643\u0628\u064A\u0631 \u062C\u062F\u0627\u064B (\u0627\u0644\u062D\u062F 10 \u0645\u064A\u063A\u0627\u0628\u0627\u064A\u062A)" : "File too large (10MB limit)");
        continue;
      }
      const mimeType = file.type || "application/octet-stream";
      if (!ALLOWED_ATTACHMENT_MIMES.has(mimeType)) {
        setUploadError(isAr ? `\u0646\u0648\u0639 \u0627\u0644\u0645\u0644\u0641 \u063A\u064A\u0631 \u0645\u062F\u0639\u0648\u0645: ${mimeType}` : `Unsupported file type: ${mimeType}`);
        continue;
      }
      try {
        const data = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.onerror = () => reject(reader.error);
          reader.readAsDataURL(file);
        });
        newAttachments.push({ data, name: file.name, type: mimeType, size: file.size });
      } catch (err) {
        console.error("[ChatToolbar]", "File encode error", { file: file.name, err });
        setUploadError(isAr ? "\u0641\u0634\u0644 \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0645\u0644\u0641" : "Failed to load file");
      }
    }
    if (newAttachments.length > 0) {
      onAttachmentsChange([...attachments, ...newAttachments]);
    }
    setUploading(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }, [attachments, onAttachmentsChange, isAr]);
  const handleFileSelect = useCallback12(async (e) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    await uploadFiles(Array.from(files));
  }, [uploadFiles]);
  useEffect24(() => {
    onUploadReady?.(uploadFiles);
  }, [uploadFiles, onUploadReady]);
  const removeAttachment = (index) => {
    onAttachmentsChange(attachments.filter((_, i) => i !== index));
  };
  const activeSources = forcedTools.search_sources || ["web"];
  return /* @__PURE__ */ jsxs72("div", { className: "space-y-2", children: [
    uploadError && /* @__PURE__ */ jsx84("p", { className: "text-xs text-destructive px-1", children: uploadError }),
    attachments.length > 0 && /* @__PURE__ */ jsx84("div", { className: "flex flex-wrap gap-1.5", children: attachments.map((att, i) => /* @__PURE__ */ jsx84(
      FilePreviewChip_default,
      {
        attachment: att,
        onRemove: () => removeAttachment(i),
        language
      },
      i
    )) }),
    isSearchActive && /* @__PURE__ */ jsxs72("div", { className: "flex items-center gap-1.5 px-1", children: [
      /* @__PURE__ */ jsx84("span", { className: "text-[10px] text-muted-foreground font-medium uppercase tracking-wider shrink-0", children: isAr ? "\u0645\u0635\u0627\u062F\u0631" : "Sources" }),
      SEARCH_SOURCES.map((source) => {
        const isActive = activeSources.includes(source.id);
        const Icon = source.icon;
        return /* @__PURE__ */ jsxs72(
          "button",
          {
            onClick: () => toggleSource(source.id),
            disabled,
            className: `inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium transition-all duration-fast ease-standard border ${isActive ? "bg-primary/15 text-primary border-primary/30" : "bg-transparent text-muted-foreground border-transparent hover:bg-muted hover:border-border"}`,
            children: [
              /* @__PURE__ */ jsx84(Icon, { className: "w-3 h-3" }),
              isAr ? source.labelAr : source.label
            ]
          },
          source.id
        );
      })
    ] }),
    /* @__PURE__ */ jsxs72("div", { className: "flex items-center gap-1.5", children: [
      /* @__PURE__ */ jsxs72(
        "button",
        {
          onClick: () => onThinkingModeChange(!thinkingMode),
          disabled,
          className: `inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-fast ease-standard border ${thinkingMode ? "bg-amber-500/15 text-amber-400 border-amber-500/30" : "bg-cyan-500/15 text-cyan-400 border-cyan-500/30"}`,
          title: thinkingMode ? isAr ? "\u0648\u0636\u0639 \u0627\u0644\u062A\u0641\u0643\u064A\u0631 \u0627\u0644\u0639\u0645\u064A\u0642" : "Thinking mode \u2014 deeper analysis" : isAr ? "\u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u0633\u0631\u064A\u0639" : "Fast mode \u2014 quicker responses",
          children: [
            thinkingMode ? /* @__PURE__ */ jsx84(Brain2, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ jsx84(Zap, { className: "w-3.5 h-3.5" }),
            thinkingMode ? isAr ? "\u062A\u0641\u0643\u064A\u0631" : "Thinking" : isAr ? "\u0633\u0631\u064A\u0639" : "Fast"
          ]
        }
      ),
      /* @__PURE__ */ jsxs72(
        "button",
        {
          onClick: toggleSearch,
          disabled,
          className: `inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-fast ease-standard border ${isSearchActive ? "bg-primary/15 text-primary border-primary/30" : "bg-transparent text-muted-foreground border-border hover:bg-muted hover:text-foreground"}`,
          children: [
            /* @__PURE__ */ jsx84(Globe5, { className: "w-3.5 h-3.5" }),
            isAr ? "\u0628\u062D\u062B" : "Search",
            isSearchActive && /* @__PURE__ */ jsx84(ChevronDown9, { className: "w-3 h-3 rotate-180" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs72(
        "button",
        {
          onClick: toggleDeepResearch,
          disabled,
          className: `inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-fast ease-standard border ${isDeepResearchActive ? "bg-violet-500/15 text-violet-400 border-violet-500/30" : "bg-transparent text-muted-foreground border-border hover:bg-muted hover:text-foreground"}`,
          children: [
            /* @__PURE__ */ jsx84(Microscope2, { className: "w-3.5 h-3.5" }),
            isAr ? "\u0628\u062D\u062B \u0639\u0645\u064A\u0642" : "Deep Research"
          ]
        }
      ),
      /* @__PURE__ */ jsxs72(
        "button",
        {
          onClick: () => fileInputRef.current?.click(),
          disabled: disabled || uploading,
          className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-fast ease-standard border bg-transparent text-muted-foreground border-border hover:bg-muted hover:text-foreground",
          children: [
            /* @__PURE__ */ jsx84(Paperclip2, { className: `w-3.5 h-3.5 ${uploading ? "animate-spin" : ""}` }),
            attachments.length > 0 ? `${attachments.length}` : isAr ? "\u0625\u0631\u0641\u0627\u0642" : "Attach"
          ]
        }
      ),
      /* @__PURE__ */ jsx84(
        "input",
        {
          ref: fileInputRef,
          type: "file",
          multiple: true,
          accept: "image/png,image/jpeg,image/webp,image/gif,image/heic,image/heif,.pdf",
          className: "hidden",
          onChange: handleFileSelect
        }
      )
    ] })
  ] });
};
ChatToolbar.displayName = "ChatToolbar";
var ChatToolbar_default = ChatToolbar;

// src/components/chat/CompareFactorsCard.tsx
import { useState as useState42, useCallback as useCallback13 } from "react";
import { Scale, Plus as Plus4, X as X5, Check as Check4 } from "lucide-react";
import { jsx as jsx85, jsxs as jsxs73 } from "react/jsx-runtime";
var CompareFactorsCard = ({
  data,
  onAccept,
  disabled = false,
  language = "en"
}) => {
  const isAR = language === "ar";
  const [factors, setFactors] = useState42(data.factors);
  const [newFactorLabel, setNewFactorLabel] = useState42("");
  const [showAddInput, setShowAddInput] = useState42(false);
  const toggleFactor = useCallback13((id) => {
    if (disabled) return;
    setFactors((prev) => prev.map((f) => f.id === id ? { ...f, enabled: !f.enabled } : f));
  }, [disabled]);
  const updateWeight = useCallback13((id, weight) => {
    if (disabled) return;
    setFactors((prev) => prev.map((f) => f.id === id ? { ...f, weight } : f));
  }, [disabled]);
  const removeFactor = useCallback13((id) => {
    if (disabled) return;
    setFactors((prev) => prev.filter((f) => f.id !== id));
  }, [disabled]);
  const addCustomFactor = useCallback13(() => {
    if (!newFactorLabel.trim() || disabled) return;
    const id = `custom-${Date.now()}`;
    setFactors((prev) => [...prev, {
      id,
      label: newFactorLabel.trim(),
      description: "Custom factor",
      weight: "medium",
      enabled: true
    }]);
    setNewFactorLabel("");
    setShowAddInput(false);
  }, [newFactorLabel, disabled]);
  const weightLabel = (w) => {
    const labels = {
      high: { en: "High", ar: "\u0639\u0627\u0644\u064A" },
      medium: { en: "Medium", ar: "\u0645\u062A\u0648\u0633\u0637" },
      low: { en: "Low", ar: "\u0645\u0646\u062E\u0641\u0636" }
    };
    return labels[w]?.[isAR ? "ar" : "en"] || w;
  };
  const enabledCount = factors.filter((f) => f.enabled).length;
  return /* @__PURE__ */ jsxs73("div", { className: `mt-3 rounded-lg border border-border bg-card/80 overflow-hidden ${disabled ? "opacity-60 pointer-events-none" : ""}`, children: [
    /* @__PURE__ */ jsxs73("div", { className: "px-3 py-2.5 bg-muted/50 border-b border-border flex items-center gap-2", children: [
      /* @__PURE__ */ jsx85(Scale, { className: "w-4 h-4 text-primary shrink-0" }),
      /* @__PURE__ */ jsxs73("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ jsxs73("p", { className: "text-xs font-semibold text-foreground truncate", children: [
          data.subjectA.title,
          " ",
          /* @__PURE__ */ jsx85("span", { className: "text-muted-foreground font-normal", children: "vs" }),
          " ",
          data.subjectB.title
        ] }),
        /* @__PURE__ */ jsx85("p", { className: "text-[10px] text-muted-foreground", children: isAR ? `${enabledCount} \u0639\u0627\u0645\u0644 \u0645\u062D\u062F\u062F` : `${enabledCount} factors selected` })
      ] }),
      disabled && /* @__PURE__ */ jsx85(Check4, { className: "w-4 h-4 text-emerald-500 shrink-0" })
    ] }),
    /* @__PURE__ */ jsx85("div", { className: "divide-y divide-border/50", children: factors.map((factor) => /* @__PURE__ */ jsxs73("div", { className: "px-3 py-2 flex items-center gap-2 hover:bg-muted/30 transition-colors duration-fast ease-standard", children: [
      /* @__PURE__ */ jsx85(
        Checkbox,
        {
          checked: factor.enabled,
          onCheckedChange: () => toggleFactor(factor.id),
          className: "shrink-0"
        }
      ),
      /* @__PURE__ */ jsxs73("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ jsx85("p", { className: `text-xs font-medium ${factor.enabled ? "text-foreground" : "text-muted-foreground line-through"}`, children: factor.label }),
        factor.description && factor.description !== "Custom factor" && /* @__PURE__ */ jsx85("p", { className: "text-[10px] text-muted-foreground truncate", children: factor.description })
      ] }),
      /* @__PURE__ */ jsxs73(
        Select,
        {
          value: factor.weight,
          onValueChange: (v) => updateWeight(factor.id, v),
          children: [
            /* @__PURE__ */ jsx85(SelectTrigger, { className: "h-6 w-[80px] text-[10px] border-border/50", children: /* @__PURE__ */ jsx85(SelectValue, {}) }),
            /* @__PURE__ */ jsxs73(SelectContent, { children: [
              /* @__PURE__ */ jsx85(SelectItem, { value: "high", className: "text-xs", children: weightLabel("high") }),
              /* @__PURE__ */ jsx85(SelectItem, { value: "medium", className: "text-xs", children: weightLabel("medium") }),
              /* @__PURE__ */ jsx85(SelectItem, { value: "low", className: "text-xs", children: weightLabel("low") })
            ] })
          ]
        }
      ),
      factor.id.startsWith("custom-") && /* @__PURE__ */ jsx85(
        "button",
        {
          onClick: () => removeFactor(factor.id),
          className: "text-muted-foreground hover:text-destructive transition-colors duration-fast ease-standard",
          "aria-label": isAR ? "\u0625\u0632\u0627\u0644\u0629" : "Remove",
          children: /* @__PURE__ */ jsx85(X5, { className: "w-3 h-3" })
        }
      )
    ] }, factor.id)) }),
    /* @__PURE__ */ jsx85("div", { className: "px-3 py-2 border-t border-border/50", children: showAddInput ? /* @__PURE__ */ jsxs73("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx85(
        Input,
        {
          value: newFactorLabel,
          onChange: (e) => setNewFactorLabel(e.target.value),
          onKeyDown: (e) => {
            if (e.key === "Enter") addCustomFactor();
            if (e.key === "Escape") setShowAddInput(false);
          },
          placeholder: isAR ? "\u0627\u0633\u0645 \u0627\u0644\u0639\u0627\u0645\u0644..." : "Factor name...",
          className: "h-7 text-xs flex-1",
          autoFocus: true
        }
      ),
      /* @__PURE__ */ jsx85(Button, { size: "sm", variant: "ghost", className: "h-7 px-2", onClick: addCustomFactor, children: /* @__PURE__ */ jsx85(Check4, { className: "w-3 h-3" }) }),
      /* @__PURE__ */ jsx85(
        Button,
        {
          size: "sm",
          variant: "ghost",
          className: "h-7 px-2",
          onClick: () => {
            setShowAddInput(false);
            setNewFactorLabel("");
          },
          children: /* @__PURE__ */ jsx85(X5, { className: "w-3 h-3" })
        }
      )
    ] }) : /* @__PURE__ */ jsxs73(
      "button",
      {
        onClick: () => setShowAddInput(true),
        className: "flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors duration-fast ease-standard",
        children: [
          /* @__PURE__ */ jsx85(Plus4, { className: "w-3 h-3" }),
          isAR ? "\u0625\u0636\u0627\u0641\u0629 \u0639\u0627\u0645\u0644 \u0645\u062E\u0635\u0635" : "Add custom factor"
        ]
      }
    ) }),
    !disabled && /* @__PURE__ */ jsx85("div", { className: "px-3 py-2.5 border-t border-border bg-muted/30", children: /* @__PURE__ */ jsxs73(
      Button,
      {
        size: "sm",
        className: "w-full h-8 text-xs gap-1.5",
        onClick: () => onAccept(factors),
        disabled: enabledCount === 0,
        children: [
          /* @__PURE__ */ jsx85(Scale, { className: "w-3.5 h-3.5" }),
          isAR ? "\u0642\u0628\u0648\u0644 \u0648\u062A\u0634\u063A\u064A\u0644 \u0627\u0644\u0645\u0642\u0627\u0631\u0646\u0629" : "Accept & Run Comparison"
        ]
      }
    ) })
  ] });
};
CompareFactorsCard.displayName = "CompareFactorsCard";
var CompareFactorsCard_default = CompareFactorsCard;

// src/components/chat/ChatStructuredData.tsx
import { useState as useState43, useEffect as useEffect25 } from "react";
import {
  Globe as Globe6,
  AlertTriangle as AlertTriangle2,
  TrendingUp,
  BookOpen,
  Calendar as Calendar2,
  ChevronRight as ChevronRight8,
  Shield as Shield3,
  Building2,
  User as UserIcon,
  ArrowUpRight,
  ArrowDownRight,
  ArrowRight as ArrowRight2
} from "lucide-react";
import { jsx as jsx86, jsxs as jsxs74 } from "react/jsx-runtime";
function tryParseStructured(json) {
  try {
    const obj = JSON.parse(json);
    if (typeof obj !== "object" || obj === null || Array.isArray(obj)) return null;
    const knownKeys = ["entities", "alerts", "narratives", "events", "themes", "briefing", "relationships", "new_emerging_entities", "sentiment_analysis"];
    if (!knownKeys.some((k) => k in obj)) return null;
    return obj;
  } catch {
    return null;
  }
}
function extractStructuredBlocks(content) {
  const jsonBlockRegex = /```json\s*\n([\s\S]*?)```/g;
  const blocks = [];
  let cleaned = content;
  const matches = [];
  let match;
  while ((match = jsonBlockRegex.exec(content)) !== null) {
    matches.push({ full: match[0], body: match[1] });
  }
  for (const m of matches) {
    const parsed = tryParseStructured(m.body.trim());
    if (parsed) {
      blocks.push(parsed);
      cleaned = cleaned.replace(m.full, "");
    }
  }
  if (blocks.length === 0) return { markdown: content, structured: null };
  const merged = {};
  for (const b of blocks) {
    if (b.entities?.length) merged.entities = [...merged.entities || [], ...b.entities];
    if (b.alerts?.length) merged.alerts = [...merged.alerts || [], ...b.alerts];
    if (b.narratives?.length) merged.narratives = [...merged.narratives || [], ...b.narratives];
    if (b.events?.length) merged.events = [...merged.events || [], ...b.events];
    if (b.themes?.length) merged.themes = [...merged.themes || [], ...b.themes];
    if (b.new_emerging_entities?.length) merged.entities = [...merged.entities || [], ...b.new_emerging_entities];
    if (b.briefing && !merged.briefing) merged.briefing = b.briefing;
  }
  if (merged.entities) {
    const seen = /* @__PURE__ */ new Set();
    merged.entities = merged.entities.filter((e) => {
      const key = e.slug || e.name_en || e.name || "";
      if (!key || seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }
  return { markdown: cleaned.trim(), structured: merged };
}
var ENTITY_TYPE_CONFIG = {
  government: { icon: Shield3, color: "bg-blue-500/15 text-blue-400 border-blue-500/20" },
  institution: { icon: Building2, color: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20" },
  individual: { icon: UserIcon, color: "bg-violet-500/15 text-violet-400 border-violet-500/20" },
  media: { icon: Globe6, color: "bg-amber-500/15 text-amber-400 border-amber-500/20" }
};
var SEVERITY_CONFIG = {
  high: { color: "text-red-400", bg: "bg-red-500/10 border-red-500/20" },
  medium: { color: "text-amber-400", bg: "bg-amber-500/10 border-amber-500/20" },
  low: { color: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/20" }
};
var TREND_ICON = {
  rising: { icon: ArrowUpRight, color: "text-emerald-400" },
  declining: { icon: ArrowDownRight, color: "text-red-400" },
  stable: { icon: ArrowRight2, color: "text-muted-foreground" }
};
var EntityChip = ({
  entity,
  lang,
  onNavigate
}) => {
  const name = lang === "ar" ? entity.name_ar || entity.name_en || entity.name || "?" : entity.name_en || entity.name || entity.name_ar || "?";
  const slug = entity.slug;
  const typeConf = ENTITY_TYPE_CONFIG[entity.type || ""] || ENTITY_TYPE_CONFIG.institution;
  const Icon = typeConf.icon;
  const handleClick = () => {
    if (slug && onNavigate) onNavigate(`/entity/${slug}`);
  };
  return /* @__PURE__ */ jsxs74(
    "button",
    {
      onClick: handleClick,
      disabled: !slug || !onNavigate,
      className: cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-xs font-medium transition-all duration-fast ease-standard focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        typeConf.color,
        slug && onNavigate ? "cursor-pointer hover:brightness-125" : "cursor-default opacity-70"
      ),
      children: [
        /* @__PURE__ */ jsx86(Icon, { className: "w-3 h-3 shrink-0" }),
        /* @__PURE__ */ jsx86("span", { className: "truncate max-w-[140px]", children: name }),
        slug && onNavigate && /* @__PURE__ */ jsx86(ChevronRight8, { className: "w-3 h-3 shrink-0 opacity-50 rtl:rotate-180" })
      ]
    }
  );
};
EntityChip.displayName = "EntityChip";
var AlertCard = ({
  alert,
  lang,
  onNavigate
}) => {
  const title = lang === "ar" ? alert.title_ar || alert.title_en || "" : alert.title_en || alert.title_ar || "";
  const desc = lang === "ar" ? alert.description_ar || alert.description_en || "" : alert.description_en || alert.description_ar || "";
  const sev = SEVERITY_CONFIG[alert.severity || "low"] || SEVERITY_CONFIG.low;
  return /* @__PURE__ */ jsx86(
    "button",
    {
      onClick: () => alert.slug && onNavigate?.(`/alert/${alert.slug}`),
      disabled: !alert.slug || !onNavigate,
      className: cn(
        "w-full text-start rounded-lg border p-2.5 transition-all duration-fast ease-standard group",
        sev.bg,
        alert.slug && onNavigate ? "cursor-pointer hover:brightness-110" : "cursor-default"
      ),
      children: /* @__PURE__ */ jsxs74("div", { className: "flex items-start gap-2", children: [
        /* @__PURE__ */ jsx86(AlertTriangle2, { className: cn("w-3.5 h-3.5 shrink-0 mt-0.5", sev.color) }),
        /* @__PURE__ */ jsxs74("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsx86("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsx86("span", { className: cn("text-[10px] font-semibold uppercase tracking-wider", sev.color), children: alert.severity }) }),
          /* @__PURE__ */ jsx86("p", { className: "text-xs font-medium text-foreground mt-0.5 line-clamp-2", children: title }),
          desc && /* @__PURE__ */ jsx86("p", { className: "text-[11px] text-muted-foreground mt-1 line-clamp-2", children: desc })
        ] })
      ] })
    }
  );
};
AlertCard.displayName = "AlertCard";
var NarrativeCard = ({
  narrative,
  lang,
  onNavigate
}) => {
  const title = lang === "ar" ? narrative.title_ar || narrative.title_en || narrative.dominant_narratives || "" : narrative.title_en || narrative.dominant_narratives || narrative.title_ar || "";
  const slug = narrative.slug;
  return /* @__PURE__ */ jsx86(
    "button",
    {
      onClick: () => slug && onNavigate?.(`/narrative/${slug}`),
      className: cn(
        "w-full text-start rounded-lg border border-amber-500/20 bg-amber-500/5 p-2.5 transition-all duration-fast ease-standard group",
        "cursor-pointer hover:bg-amber-500/10"
      ),
      children: /* @__PURE__ */ jsxs74("div", { className: "flex items-start gap-2", children: [
        /* @__PURE__ */ jsx86(BookOpen, { className: "w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" }),
        /* @__PURE__ */ jsx86("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ jsx86("p", { className: "text-xs font-medium text-foreground line-clamp-2", children: title }) }),
        /* @__PURE__ */ jsx86(ChevronRight8, { className: "w-3.5 h-3.5 text-amber-400/50 shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-fast ease-standard rtl:rotate-180" })
      ] })
    }
  );
};
NarrativeCard.displayName = "NarrativeCard";
var EventChip = ({
  event,
  lang,
  onNavigate
}) => {
  const title = lang === "ar" ? event.title_ar || event.title_en || "" : event.title_en || event.title_ar || "";
  const slug = event.slug;
  return /* @__PURE__ */ jsxs74(
    "button",
    {
      onClick: () => slug && onNavigate?.(`/event/${slug}`),
      disabled: !slug || !onNavigate,
      className: cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-purple-500/20 bg-purple-500/10 text-purple-400 text-xs font-medium transition-all duration-fast ease-standard",
        slug && onNavigate ? "cursor-pointer hover:brightness-125" : "cursor-default"
      ),
      children: [
        /* @__PURE__ */ jsx86(Calendar2, { className: "w-3 h-3 shrink-0" }),
        /* @__PURE__ */ jsx86("span", { className: "truncate max-w-[200px]", children: title }),
        slug && onNavigate && /* @__PURE__ */ jsx86(ChevronRight8, { className: "w-3 h-3 shrink-0 opacity-50 rtl:rotate-180" })
      ]
    }
  );
};
EventChip.displayName = "EventChip";
var ThemeChip = ({ theme, lang }) => {
  const name = lang === "ar" ? theme.name_ar || theme.name_en || "" : theme.name_en || theme.name_ar || "";
  const trendConf = TREND_ICON[theme.trend || "stable"] || TREND_ICON.stable;
  const TrendIcon = trendConf.icon;
  return /* @__PURE__ */ jsxs74("span", { className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-border bg-muted/50 text-xs font-medium text-foreground", children: [
    /* @__PURE__ */ jsx86(TrendIcon, { className: cn("w-3 h-3 shrink-0", trendConf.color) }),
    /* @__PURE__ */ jsx86("span", { className: "truncate max-w-[180px]", children: name })
  ] });
};
ThemeChip.displayName = "ThemeChip";
function useExistingSlugs(data, onCheckSlugs) {
  const [existing, setExisting] = useState43(/* @__PURE__ */ new Set());
  useEffect25(() => {
    if (!onCheckSlugs) {
      const all = /* @__PURE__ */ new Set();
      (data.entities || []).forEach((e) => {
        if (e.slug) all.add(`entities:${e.slug}`);
      });
      (data.alerts || []).forEach((a) => {
        if (a.slug) all.add(`alerts:${a.slug}`);
      });
      (data.narratives || []).forEach((n) => {
        if (n.slug) all.add(`narratives:${n.slug}`);
      });
      (data.events || []).forEach((e) => {
        if (e.slug) all.add(`events:${e.slug}`);
      });
      setExisting(all);
      return;
    }
    const checks = [];
    const entitySlugs = (data.entities || []).map((e) => e.slug).filter(Boolean);
    if (entitySlugs.length) checks.push({ table: "entities", slugs: entitySlugs });
    const alertSlugs = (data.alerts || []).map((a) => a.slug).filter(Boolean);
    if (alertSlugs.length) checks.push({ table: "alerts", slugs: alertSlugs });
    const narrativeSlugs = (data.narratives || []).map((n) => n.slug).filter(Boolean);
    if (narrativeSlugs.length) checks.push({ table: "narratives", slugs: narrativeSlugs });
    const eventSlugs = (data.events || []).map((e) => e.slug).filter(Boolean);
    if (eventSlugs.length) checks.push({ table: "events", slugs: eventSlugs });
    if (checks.length === 0) return;
    let cancelled = false;
    Promise.all(
      checks.map(async ({ table, slugs }) => {
        const found = await onCheckSlugs(table, slugs).catch(() => []);
        return found.map((slug) => `${table}:${slug}`);
      })
    ).then((results) => {
      if (cancelled) return;
      setExisting(new Set(results.flat()));
    });
    return () => {
      cancelled = true;
    };
  }, [data, onCheckSlugs]);
  return existing;
}
var ChatStructuredData = ({
  data,
  language = "en",
  dir,
  onNavigate,
  onCheckSlugs
}) => {
  const lang = language;
  const isRTL = lang === "ar";
  const resolvedDir = dir ?? (isRTL ? "rtl" : "ltr");
  const existingSlugs = useExistingSlugs(data, onCheckSlugs);
  const validEntities = (data.entities || []).filter((e) => e.slug && existingSlugs.has(`entities:${e.slug}`));
  const validAlerts = (data.alerts || []).filter((a) => a.slug && existingSlugs.has(`alerts:${a.slug}`));
  const validNarratives = (data.narratives || []).filter((n) => n.slug && existingSlugs.has(`narratives:${n.slug}`));
  const validEvents = (data.events || []).filter((e) => e.slug && existingSlugs.has(`events:${e.slug}`));
  const themes = data.themes || [];
  const hasEntities = validEntities.length > 0;
  const hasAlerts = validAlerts.length > 0;
  const hasNarratives = validNarratives.length > 0;
  const hasEvents = validEvents.length > 0;
  const hasThemes = themes.length > 0;
  if (!hasEntities && !hasAlerts && !hasNarratives && !hasEvents && !hasThemes) return null;
  return /* @__PURE__ */ jsxs74("div", { className: "mt-3 space-y-3 not-prose", dir: resolvedDir, children: [
    hasEntities && /* @__PURE__ */ jsxs74("div", { children: [
      /* @__PURE__ */ jsxs74("div", { className: "flex items-center gap-1.5 mb-2", children: [
        /* @__PURE__ */ jsx86(Globe6, { className: "w-3.5 h-3.5 text-emerald-400" }),
        /* @__PURE__ */ jsx86("span", { className: "text-[11px] font-semibold text-muted-foreground uppercase tracking-wider", children: isRTL ? "\u0627\u0644\u062C\u0647\u0627\u062A \u0627\u0644\u0645\u0630\u0643\u0648\u0631\u0629" : "Mentioned Entities" })
      ] }),
      /* @__PURE__ */ jsx86("div", { className: "flex flex-wrap gap-1.5", children: validEntities.map((e, i) => /* @__PURE__ */ jsx86(EntityChip, { entity: e, lang, onNavigate }, e.slug || i)) })
    ] }),
    hasAlerts && /* @__PURE__ */ jsxs74("div", { children: [
      /* @__PURE__ */ jsxs74("div", { className: "flex items-center gap-1.5 mb-2", children: [
        /* @__PURE__ */ jsx86(AlertTriangle2, { className: "w-3.5 h-3.5 text-red-400" }),
        /* @__PURE__ */ jsx86("span", { className: "text-[11px] font-semibold text-muted-foreground uppercase tracking-wider", children: isRTL ? "\u0625\u0634\u0627\u0631\u0627\u062A" : "Alerts" })
      ] }),
      /* @__PURE__ */ jsx86("div", { className: "space-y-1.5", children: validAlerts.map((a, i) => /* @__PURE__ */ jsx86(AlertCard, { alert: a, lang, onNavigate }, a.slug || i)) })
    ] }),
    hasNarratives && /* @__PURE__ */ jsxs74("div", { children: [
      /* @__PURE__ */ jsxs74("div", { className: "flex items-center gap-1.5 mb-2", children: [
        /* @__PURE__ */ jsx86(BookOpen, { className: "w-3.5 h-3.5 text-amber-400" }),
        /* @__PURE__ */ jsx86("span", { className: "text-[11px] font-semibold text-muted-foreground uppercase tracking-wider", children: isRTL ? "\u0627\u0644\u0633\u0631\u062F\u064A\u0627\u062A" : "Narratives" })
      ] }),
      /* @__PURE__ */ jsx86("div", { className: "space-y-1.5", children: validNarratives.map((n, i) => /* @__PURE__ */ jsx86(NarrativeCard, { narrative: n, lang, onNavigate }, i)) })
    ] }),
    hasEvents && /* @__PURE__ */ jsxs74("div", { children: [
      /* @__PURE__ */ jsxs74("div", { className: "flex items-center gap-1.5 mb-2", children: [
        /* @__PURE__ */ jsx86(Calendar2, { className: "w-3.5 h-3.5 text-purple-400" }),
        /* @__PURE__ */ jsx86("span", { className: "text-[11px] font-semibold text-muted-foreground uppercase tracking-wider", children: isRTL ? "\u0627\u0644\u0623\u062D\u062F\u0627\u062B" : "Events" })
      ] }),
      /* @__PURE__ */ jsx86("div", { className: "flex flex-wrap gap-1.5", children: validEvents.map((e, i) => /* @__PURE__ */ jsx86(EventChip, { event: e, lang, onNavigate }, e.slug || i)) })
    ] }),
    hasThemes && /* @__PURE__ */ jsxs74("div", { children: [
      /* @__PURE__ */ jsxs74("div", { className: "flex items-center gap-1.5 mb-2", children: [
        /* @__PURE__ */ jsx86(TrendingUp, { className: "w-3.5 h-3.5 text-foreground/60" }),
        /* @__PURE__ */ jsx86("span", { className: "text-[11px] font-semibold text-muted-foreground uppercase tracking-wider", children: isRTL ? "\u0627\u0644\u0645\u0648\u0627\u0636\u064A\u0639" : "Themes" })
      ] }),
      /* @__PURE__ */ jsx86("div", { className: "flex flex-wrap gap-1.5", children: themes.map((th, i) => /* @__PURE__ */ jsx86(ThemeChip, { theme: th, lang }, i)) })
    ] })
  ] });
};
ChatStructuredData.displayName = "ChatStructuredData";
var ChatStructuredData_default = ChatStructuredData;

// src/components/copilot/UnifiedCopilotDock.tsx
import { Fragment as Fragment20, jsx as jsx87, jsxs as jsxs75 } from "react/jsx-runtime";
function useSafeT() {
  try {
    return useT2();
  } catch {
    return null;
  }
}
var SHOW_TOOLS_PANEL = false;
var PERSONAS = [
  { id: "analyst", label: "Analyst", labelAr: "\u0645\u062D\u0644\u0644", icon: "\u{1F52C}" },
  { id: "strategist", label: "Strategist", labelAr: "\u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A", icon: "\u265F\uFE0F" },
  { id: "advisor", label: "Advisor", labelAr: "\u0645\u0633\u062A\u0634\u0627\u0631", icon: "\u{1F4BC}" }
];
var PersonaPicker = ({
  value,
  onChange,
  disabled,
  language = "en",
  personas: personasProp
}) => {
  const list = personasProp && personasProp.length > 0 ? personasProp : PERSONAS;
  return /* @__PURE__ */ jsx87("div", { className: "flex items-center gap-1 flex-wrap", children: list.map((p) => /* @__PURE__ */ jsxs75(
    "button",
    {
      onClick: () => !disabled && onChange(p.id),
      disabled,
      className: `inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium transition-all duration-fast ease-standard border ${value === p.id ? "bg-primary/15 text-primary border-primary/30" : "bg-transparent text-muted-foreground border-border hover:bg-muted hover:text-foreground"}`,
      children: [
        p.icon && /* @__PURE__ */ jsx87("span", { children: p.icon }),
        language === "ar" ? p.labelAr : p.label
      ]
    },
    p.id
  )) });
};
PersonaPicker.displayName = "PersonaPicker";
var CONTEXT_BADGES = {
  dashboard: { label: "Dashboard", labelAr: "\u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645", color: "bg-blue-500/20 text-blue-400" },
  narrative: { label: "Narrative", labelAr: "\u0633\u0631\u062F\u064A\u0629", color: "bg-amber-500/20 text-amber-400" },
  entity: { label: "Entity", labelAr: "\u062C\u0647\u0629", color: "bg-emerald-500/20 text-emerald-400" },
  alert: { label: "Alert", labelAr: "\u0625\u0634\u0627\u0631\u0629", color: "bg-red-500/20 text-red-400" },
  task: { label: "Task", labelAr: "\u0645\u0647\u0645\u0629", color: "bg-purple-500/20 text-purple-400" },
  task_detail: { label: "Task", labelAr: "\u0645\u0647\u0645\u0629", color: "bg-purple-500/20 text-purple-400" },
  tasks: { label: "Tasks", labelAr: "\u0627\u0644\u0645\u0647\u0627\u0645", color: "bg-purple-500/20 text-purple-400" },
  digital_twin: { label: "Digital Twin", labelAr: "\u062A\u0648\u0623\u0645 \u0631\u0642\u0645\u064A", color: "bg-violet-500/20 text-violet-400" },
  breaking_news: { label: "Breaking News", labelAr: "\u062E\u0628\u0631 \u0639\u0627\u062C\u0644", color: "bg-orange-500/20 text-orange-400" }
};
function sanitizeAgentEmptyState(content, emptyMessage) {
  if (!content) return content;
  let stripped = content.replace(/```json[\s\S]*?```/g, "").trim();
  const reduced = stripped.replace(/NO_DATA_AVAILABLE/gi, "").replace(/\[\s*\]/g, "").replace(/[\s.,;:!?-]+/g, " ").trim();
  if (reduced.length === 0) return emptyMessage;
  return content;
}
var UnifiedCopilotDock = ({
  chatState,
  context,
  language: languageProp = "en",
  onNavigate,
  onCheckSlugs,
  onExpandToFullPage,
  pendingMessage,
  pendingAutoSend,
  onPendingMessageConsumed,
  followUpChips,
  defaultExpanded,
  seedGreeting,
  onClose,
  personas,
  allowedTools,
  allowedSkills,
  branding,
  uiConfig,
  pageContext: _pageContext,
  onArtifactAction,
  onArtifactInteract
}) => {
  const langCtx = useSafeT();
  const language = langCtx ? langCtx.language : languageProp;
  const t2 = langCtx ? langCtx.t : (key) => key;
  const isRTL = language === "ar";
  const handleArtifactAction = useCallback14(
    (item) => {
      if (onArtifactAction) {
        onArtifactAction(item);
        return;
      }
      if (item.prompt) {
        chatState.onSend(item.prompt);
      }
    },
    [onArtifactAction, chatState]
  );
  const handleArtifactInteract = useCallback14(
    (interaction) => {
      if (onArtifactInteract) {
        onArtifactInteract(interaction);
        return;
      }
      const text = `[interaction:${interaction.kind}]`;
      chatState.onSend(text, { hideUserMessage: true, interaction });
    },
    [onArtifactInteract, chatState]
  );
  const [isExpanded, setIsExpanded] = useState44(defaultExpanded ?? false);
  const [forcedTools, setForcedTools] = useState44({});
  const [attachments, setAttachments] = useState44([]);
  const [thinkingMode, setThinkingMode] = useState44(false);
  const [isDragging, setIsDragging] = useState44(false);
  const [persona, setPersona] = useState44("analyst");
  const [historyOpen, setHistoryOpen] = useState44(false);
  const [historyItems, setHistoryItems] = useState44([]);
  const [insightTriggered, setInsightTriggered] = useState44(false);
  const [snapshottedChips, setSnapshottedChips] = useState44();
  const [slashMenuOpen, setSlashMenuOpen] = useState44(false);
  const [atMenuOpen, setAtMenuOpen] = useState44(false);
  const [slashQuery, setSlashQuery] = useState44("");
  const [atQuery, setAtQuery] = useState44("");
  const slashMenuRef = useRef17(null);
  const atMenuRef = useRef17(null);
  const [toolsPanelOpen, setToolsPanelOpen] = useState44(false);
  const prevIsStreamingRef = useRef17(false);
  const messagesEndRef = useRef17(null);
  const inputRef = useRef17(null);
  const pendingAutoSendRef = useRef17(null);
  const dragCounterRef = useRef17(0);
  const toolbarUploadRef = useRef17(null);
  const getInitialDockPosition = () => {
    try {
      const saved = localStorage.getItem("sentra-copilot-dock-position");
      if (saved === "left" || saved === "right" || saved === "bottom") return saved;
    } catch {
    }
    return "bottom";
  };
  const [dockPosition, setDockPosition] = useState44(getInitialDockPosition);
  const handleDockPositionChange = (pos) => {
    setDockPosition(pos);
    try {
      localStorage.setItem("sentra-copilot-dock-position", pos);
    } catch {
    }
  };
  const effectiveDockPosition = useMemo11(() => {
    if (typeof window !== "undefined" && window.innerWidth < 640) return "bottom";
    return dockPosition;
  }, [dockPosition]);
  const dockClasses = useMemo11(() => {
    if (!isExpanded) return "fixed bottom-0 left-0 right-0 z-50 h-14 transition-all duration-300";
    switch (effectiveDockPosition) {
      case "left":
        return "fixed top-[3.5rem] left-0 bottom-0 w-full sm:w-[420px] z-50 transition-all duration-300";
      case "right":
        return "fixed top-[3.5rem] right-0 bottom-0 w-full sm:w-[420px] z-50 transition-all duration-300";
      case "bottom":
      default:
        return "fixed bottom-0 left-0 right-0 z-50 h-[calc(100vh-3.5rem)] sm:h-[60vh] transition-all duration-300";
    }
  }, [isExpanded, effectiveDockPosition]);
  const expandedBorderClass = useMemo11(() => {
    switch (effectiveDockPosition) {
      case "left":
        return "border-e";
      case "right":
        return "border-s";
      default:
        return "border-t";
    }
  }, [effectiveDockPosition]);
  const expandedShadowClass = useMemo11(() => {
    switch (effectiveDockPosition) {
      case "left":
        return "shadow-[4px_0_15px_rgba(0,0,0,0.12)]";
      case "right":
        return "shadow-[-4px_0_15px_rgba(0,0,0,0.12)]";
      default:
        return "shadow-2xl";
    }
  }, [effectiveDockPosition]);
  useEffect26(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatState.messages, chatState.agentSteps]);
  useEffect26(() => {
    if (pendingMessage) {
      if (pendingAutoSend) {
        pendingAutoSendRef.current = pendingMessage;
        setInsightTriggered(true);
        setSnapshottedChips(followUpChips);
        chatState.onNewConversation();
        setIsExpanded(true);
        onPendingMessageConsumed?.();
      } else {
        chatState.onInputChange(pendingMessage);
        setIsExpanded(true);
        onPendingMessageConsumed?.();
        setTimeout(() => inputRef.current?.focus(), 300);
      }
    }
  }, [pendingMessage, onPendingMessageConsumed]);
  useEffect26(() => {
    if (chatState.messages.length === 0) {
      if (pendingAutoSendRef.current && !chatState.isLoading) {
        const msg = pendingAutoSendRef.current;
        pendingAutoSendRef.current = null;
        chatState.onSend(msg, { thinkingMode, insight: true, hideUserMessage: true });
      } else if (!pendingAutoSendRef.current) {
        setInsightTriggered(false);
        setSnapshottedChips(void 0);
      }
    }
  }, [chatState.messages, chatState.isLoading]);
  useEffect26(() => {
    if (historyOpen && chatState.onFetchHistory) {
      chatState.onFetchHistory().then(setHistoryItems);
    } else if (historyOpen && chatState.conversationHistory) {
      setHistoryItems(chatState.conversationHistory);
    }
  }, [historyOpen, chatState]);
  useEffect26(() => {
    if (!isExpanded) return;
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setIsExpanded(false);
        onClose?.();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isExpanded, onClose]);
  useEffect26(() => {
    const wasStreaming = prevIsStreamingRef.current;
    prevIsStreamingRef.current = chatState.isStreaming;
    if (wasStreaming && !chatState.isStreaming && isExpanded && !slashMenuOpen && !atMenuOpen) {
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [chatState.isStreaming, isExpanded, slashMenuOpen, atMenuOpen]);
  const isTwin = chatState.effectiveMode === "digital_twin";
  const twinImg = context.entityImageUrl;
  const twinInitials = (context.title || "??").slice(0, 2).toUpperCase();
  const brandPlaceholder = isRTL ? branding?.placeholderAr : branding?.placeholder;
  const brandTitle = isRTL ? branding?.titleAr || branding?.title : branding?.title;
  const showTools = uiConfig?.showTools !== false;
  const showSkills = uiConfig?.showSkills !== false;
  const showAgents = uiConfig?.showAgents !== false;
  const effAllowedTools = showTools ? allowedTools : void 0;
  const effAllowedSkills = showSkills ? allowedSkills : void 0;
  const placeholder = brandPlaceholder ? brandPlaceholder : isTwin ? t2("copilot:placeholderAsk").replace("{{name}}", context.title) : t2("copilot:placeholder");
  const aiName = isTwin ? context.title : brandTitle || t2("copilot:aiName");
  const twinBadge = isTwin ? t2("copilot:digitalTwin") : null;
  const dockContextType = chatState.loadedContextType || context.type;
  const dockContextLabel = chatState.loadedContextLabel || context.title;
  const dockContextBadge = isTwin ? CONTEXT_BADGES["digital_twin"] : CONTEXT_BADGES[dockContextType] || null;
  const autoResize = (el) => {
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 120) + "px";
  };
  const handleExpand = () => {
    setIsExpanded(true);
    setTimeout(() => inputRef.current?.focus(), 300);
  };
  const handleSend = useCallback14(() => {
    if (!chatState.inputValue.trim()) return;
    const hasTools = Object.values(forcedTools).some(Boolean);
    const atts = attachments.length > 0 ? attachments.map((a) => ({ url: a.url, data: a.data, name: a.name, type: a.type })) : void 0;
    const opts = {
      thinkingMode,
      forcedTools: hasTools ? forcedTools : void 0,
      attachments: atts
    };
    setSlashMenuOpen(false);
    setAtMenuOpen(false);
    chatState.onSend(chatState.inputValue, opts);
    setAttachments([]);
    requestAnimationFrame(() => inputRef.current?.focus());
  }, [chatState, forcedTools, attachments, thinkingMode]);
  const handleKeyDown = (e) => {
    if (e.key === "Escape" && (slashMenuOpen || atMenuOpen)) {
      e.stopPropagation();
      setSlashMenuOpen(false);
      setAtMenuOpen(false);
      return;
    }
    if ((slashMenuOpen || atMenuOpen) && (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Enter" || e.key === "Home" || e.key === "End")) {
      if (e.key === "Enter" && e.shiftKey) {
      } else {
        const wrap = slashMenuOpen ? slashMenuRef.current : atMenuRef.current;
        const target = wrap?.querySelector("[cmdk-input]") ?? wrap?.querySelector("[cmdk-root]");
        if (target) {
          e.preventDefault();
          e.stopPropagation();
          target.dispatchEvent(new KeyboardEvent("keydown", { key: e.key, bubbles: true, cancelable: true }));
          return;
        }
      }
    }
    if (e.key === "Enter" && !e.shiftKey && (slashMenuOpen || atMenuOpen)) {
      return;
    }
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (chatState.inputValue.trim()) handleSend();
    }
  };
  const handleInputChange = useCallback14((value) => {
    chatState.onInputChange(value);
    const hasSlashItems = effAllowedTools && effAllowedTools.length > 0 || effAllowedSkills && effAllowedSkills.length > 0;
    if (hasSlashItems) {
      const slashMatch = value.match(/(?:^|\s)\/([^\s]*)$/);
      if (slashMatch) {
        setSlashQuery(slashMatch[1] ?? "");
        setSlashMenuOpen(true);
        setAtMenuOpen(false);
        return;
      }
    }
    const hasAtItems = showAgents && (personas !== void 0 && personas.length > 0 || personas === void 0);
    if (hasAtItems) {
      const atMatch = value.match(/(?:^|\s)@([^\s]*)$/);
      if (atMatch) {
        setAtQuery(atMatch[1] ?? "");
        setAtMenuOpen(true);
        setSlashMenuOpen(false);
        return;
      }
    }
    if (slashMenuOpen) setSlashMenuOpen(false);
    if (atMenuOpen) setAtMenuOpen(false);
  }, [chatState, effAllowedTools, effAllowedSkills, personas, showAgents, slashMenuOpen, atMenuOpen]);
  const handleSlashSelect = useCallback14((command) => {
    const value = chatState.inputValue;
    const updated = value.replace(/(?:^|\s)\/[^\s]*$/, (match) => {
      const prefix = match.startsWith(" ") ? " " : "";
      return `${prefix}/${command} `;
    });
    chatState.onInputChange(updated);
    setSlashMenuOpen(false);
    setSlashQuery("");
    requestAnimationFrame(() => inputRef.current?.focus());
  }, [chatState]);
  const handleAtSelect = useCallback14((name) => {
    const value = chatState.inputValue;
    const updated = value.replace(/(?:^|\s)@[^\s]*$/, (match) => {
      const prefix = match.startsWith(" ") ? " " : "";
      return `${prefix}@${name} `;
    });
    chatState.onInputChange(updated);
    setAtMenuOpen(false);
    setAtQuery("");
    requestAnimationFrame(() => inputRef.current?.focus());
  }, [chatState]);
  const handleDroppedFiles = useCallback14(async (files) => {
    const newAttachments = await Promise.all(
      files.map(
        (file) => new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = (ev) => {
            resolve({ data: ev.target?.result, name: file.name, type: file.type, size: file.size });
          };
          reader.onerror = () => {
            resolve({ name: file.name, type: file.type, size: file.size });
          };
          reader.readAsDataURL(file);
        })
      )
    );
    setAttachments((prev) => [...prev, ...newAttachments]);
  }, []);
  const handleLoadConversation = (id) => {
    chatState.onLoadConversation?.(id);
    setHistoryOpen(false);
    setInsightTriggered(false);
    setSnapshottedChips(void 0);
  };
  const handleDeleteConversation = async (id) => {
    if (!chatState.onDeleteConversation) return;
    setHistoryItems((prev) => prev.filter((c) => c.id !== id));
    if (id === chatState.conversationId) {
      chatState.onNewConversation();
    }
    try {
      await chatState.onDeleteConversation(id);
    } catch {
      if (chatState.onFetchHistory) chatState.onFetchHistory().then(setHistoryItems);
    }
  };
  const TwinAvatar = ({ size = "sm" }) => {
    const sizeClasses = size === "lg" ? "w-12 h-12" : size === "md" ? "w-8 h-8" : "w-6 h-6";
    const textSize = size === "lg" ? "text-sm" : size === "md" ? "text-[10px]" : "text-[8px]";
    const iconSize = size === "lg" ? "w-6 h-6" : size === "md" ? "w-4 h-4" : "w-3 h-3";
    const borderRadius = size === "lg" ? "rounded-xl" : size === "md" ? "rounded-lg" : "rounded-md";
    if (isTwin && twinImg) {
      return /* @__PURE__ */ jsxs75(Avatar, { className: `${sizeClasses} shrink-0`, children: [
        /* @__PURE__ */ jsx87(AvatarImage, { src: twinImg, alt: context.title }),
        /* @__PURE__ */ jsx87(AvatarFallback, { className: `bg-gradient-to-br from-violet-500 to-indigo-600 text-white ${textSize} font-bold`, children: twinInitials })
      ] });
    }
    if (isTwin) {
      return /* @__PURE__ */ jsx87("div", { className: `${sizeClasses} ${borderRadius} flex items-center justify-center shrink-0 bg-gradient-to-br from-violet-500 to-indigo-600`, children: /* @__PURE__ */ jsx87(Users, { className: `${iconSize} text-white` }) });
    }
    return /* @__PURE__ */ jsx87("div", { className: `${sizeClasses} ${borderRadius} flex items-center justify-center shrink-0 bg-gradient-to-br from-primary to-primary/70`, children: /* @__PURE__ */ jsx87(Sparkles7, { className: `${iconSize} text-primary-foreground` }) });
  };
  const emptyMessage = t2("copilot:noDataAvailable");
  return /* @__PURE__ */ jsxs75(Fragment20, { children: [
    /* @__PURE__ */ jsx87("div", { className: "h-16 w-full shrink-0", "aria-hidden": "true" }),
    /* @__PURE__ */ jsxs75(
      "div",
      {
        className: dockClasses,
        dir: isRTL ? "rtl" : "ltr",
        style: branding?.primaryColor ? { ["--primary"]: branding.primaryColor } : void 0,
        children: [
          !isExpanded && /* @__PURE__ */ jsxs75(
            "div",
            {
              className: "h-full bg-card/95 backdrop-blur-lg border-t border-border shadow-lg flex items-center gap-3 px-4 cursor-pointer hover:bg-accent/30 transition-colors duration-fast ease-standard",
              onClick: handleExpand,
              children: [
                /* @__PURE__ */ jsx87(TwinAvatar, { size: "md" }),
                /* @__PURE__ */ jsx87("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ jsx87(
                  "input",
                  {
                    type: "text",
                    value: chatState.inputValue,
                    onChange: (e) => {
                      e.stopPropagation();
                      chatState.onInputChange(e.target.value);
                    },
                    onClick: (e) => {
                      e.stopPropagation();
                      handleExpand();
                    },
                    onKeyDown: (e) => {
                      if (e.key === "Enter" && chatState.inputValue.trim()) {
                        e.preventDefault();
                        e.stopPropagation();
                        handleExpand();
                        handleSend();
                      }
                    },
                    placeholder,
                    className: "w-full bg-transparent text-base md:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                  }
                ) }),
                /* @__PURE__ */ jsx87(ChevronUp4, { className: "w-4 h-4 text-muted-foreground shrink-0" })
              ]
            }
          ),
          isExpanded && /* @__PURE__ */ jsxs75("div", { className: `h-full bg-card/95 backdrop-blur-lg ${expandedBorderClass} border-border ${expandedShadowClass} flex flex-col`, children: [
            /* @__PURE__ */ jsxs75("div", { className: "px-4 py-2.5 border-b border-border flex items-center justify-between shrink-0 bg-background/50", children: [
              /* @__PURE__ */ jsxs75("div", { className: "flex items-center gap-2.5", children: [
                /* @__PURE__ */ jsx87(TwinAvatar, { size: "md" }),
                /* @__PURE__ */ jsxs75("div", { children: [
                  /* @__PURE__ */ jsxs75("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx87("h3", { className: "text-sm font-semibold text-foreground", children: chatState.conversationTitle || aiName }),
                    twinBadge && /* @__PURE__ */ jsx87("span", { className: "text-[9px] px-1.5 py-0.5 rounded-full bg-violet-500/20 text-violet-400 font-medium", children: twinBadge }),
                    /* @__PURE__ */ jsxs75("span", { className: `text-[9px] px-1.5 py-0.5 rounded-full font-medium shrink-0 inline-flex items-center gap-0.5 ${thinkingMode ? "bg-amber-500/20 text-amber-400" : "bg-cyan-500/20 text-cyan-400"}`, children: [
                      thinkingMode ? /* @__PURE__ */ jsx87(Brain3, { className: "w-2.5 h-2.5" }) : /* @__PURE__ */ jsx87(Zap2, { className: "w-2.5 h-2.5" }),
                      thinkingMode ? t2("copilot:thinking") : t2("copilot:fast")
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx87("p", { className: "text-[10px] text-muted-foreground line-clamp-2", children: isTwin ? t2("copilot:aiPersonaSimulation") : dockContextLabel || context.title }),
                  dockContextBadge && /* @__PURE__ */ jsxs75(
                    "button",
                    {
                      onClick: dockContextBadge && onNavigate ? () => {
                        const ref = chatState.loadedContextRef || context.contextRef;
                        const type = chatState.loadedContextType || context.type;
                        onNavigate?.(`/${type}/${ref}`);
                      } : void 0,
                      className: `inline-flex items-center gap-1 text-[9px] px-1.5 py-0.5 rounded-full mt-0.5 transition-all duration-fast ease-standard border ${dockContextBadge.color} ${onNavigate ? "hover:brightness-125 cursor-pointer border-current/20" : "opacity-60 cursor-default border-transparent"}`,
                      children: [
                        onNavigate && /* @__PURE__ */ jsx87(ExternalLink5, { className: "w-2.5 h-2.5 shrink-0" }),
                        /* @__PURE__ */ jsxs75("span", { className: "truncate max-w-[150px] font-medium", children: [
                          language === "ar" ? dockContextBadge.labelAr : dockContextBadge.label,
                          dockContextLabel ? ` \xB7 ${dockContextLabel}` : ""
                        ] })
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxs75("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxs75(DropdownMenu, { dir: isRTL ? "rtl" : "ltr", children: [
                  /* @__PURE__ */ jsx87(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsx87(
                    Button,
                    {
                      variant: "ghost",
                      size: "icon",
                      className: "h-7 w-7",
                      "aria-label": language === "ar" ? "\u0645\u0648\u0636\u0639 \u0627\u0644\u0646\u0627\u0641\u0630\u0629" : "Dock position",
                      children: /* @__PURE__ */ jsx87(MoreVertical, { className: "w-3.5 h-3.5", "aria-hidden": "true" })
                    }
                  ) }),
                  /* @__PURE__ */ jsxs75(DropdownMenuContent, { align: "end", className: "w-52", children: [
                    /* @__PURE__ */ jsx87(DropdownMenuLabel, { className: "text-[10px] text-muted-foreground font-normal", dir: isRTL ? "rtl" : "ltr", children: t2("copilot:dockPosition") }),
                    /* @__PURE__ */ jsxs75(
                      DropdownMenuItem,
                      {
                        onClick: () => handleDockPositionChange("left"),
                        dir: isRTL ? "rtl" : "ltr",
                        className: dockPosition === "left" ? "text-primary" : "",
                        children: [
                          /* @__PURE__ */ jsx87(PanelLeft, { className: `w-3.5 h-3.5 me-2` }),
                          t2("copilot:dockLeft"),
                          dockPosition === "left" && /* @__PURE__ */ jsx87(Check5, { className: `w-3 h-3 ms-auto text-primary` })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxs75(
                      DropdownMenuItem,
                      {
                        onClick: () => handleDockPositionChange("right"),
                        dir: isRTL ? "rtl" : "ltr",
                        className: dockPosition === "right" ? "text-primary" : "",
                        children: [
                          /* @__PURE__ */ jsx87(PanelRight, { className: `w-3.5 h-3.5 me-2` }),
                          t2("copilot:dockRight"),
                          dockPosition === "right" && /* @__PURE__ */ jsx87(Check5, { className: `w-3 h-3 ms-auto text-primary` })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxs75(
                      DropdownMenuItem,
                      {
                        onClick: () => handleDockPositionChange("bottom"),
                        dir: isRTL ? "rtl" : "ltr",
                        className: dockPosition === "bottom" ? "text-primary" : "",
                        children: [
                          /* @__PURE__ */ jsx87(PanelBottom, { className: `w-3.5 h-3.5 me-2` }),
                          t2("copilot:dockBottom"),
                          dockPosition === "bottom" && /* @__PURE__ */ jsx87(Check5, { className: `w-3 h-3 ms-auto text-primary` })
                        ]
                      }
                    )
                  ] })
                ] }),
                (chatState.onFetchHistory || chatState.conversationHistory) && /* @__PURE__ */ jsxs75(Popover, { open: historyOpen, onOpenChange: setHistoryOpen, children: [
                  /* @__PURE__ */ jsx87(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsx87(Button, { variant: "ghost", size: "icon", className: "h-7 w-7", title: t2("copilot:history"), children: /* @__PURE__ */ jsx87(Clock4, { className: "w-3.5 h-3.5" }) }) }),
                  /* @__PURE__ */ jsxs75(PopoverContent, { align: "end", className: "w-72 p-0", dir: isRTL ? "rtl" : "ltr", children: [
                    /* @__PURE__ */ jsx87("div", { className: "p-3 border-b border-border", children: /* @__PURE__ */ jsx87("p", { className: "text-xs font-medium text-foreground", children: t2("copilot:conversationHistory") }) }),
                    /* @__PURE__ */ jsx87(ScrollArea, { className: "max-h-64", children: /* @__PURE__ */ jsx87("div", { className: "p-2 space-y-0.5", children: historyItems.length === 0 ? /* @__PURE__ */ jsx87("p", { className: "text-xs text-muted-foreground text-center py-4", children: t2("copilot:noPreviousConversations") }) : historyItems.map((conv) => /* @__PURE__ */ jsxs75(
                      "div",
                      {
                        className: `group flex items-center gap-1 rounded-lg transition-colors duration-fast ease-standard hover:bg-muted ${conv.id === chatState.conversationId ? "bg-primary/10" : ""}`,
                        children: [
                          /* @__PURE__ */ jsxs75(
                            "button",
                            {
                              onClick: () => handleLoadConversation(conv.id),
                              className: `flex-1 min-w-0 text-start px-2.5 py-2 text-xs`,
                              children: [
                                /* @__PURE__ */ jsx87("p", { className: "font-medium text-foreground line-clamp-1", children: conv.title || conv.context_label || "Untitled" }),
                                /* @__PURE__ */ jsx87("p", { className: "text-[10px] text-muted-foreground mt-0.5", children: new Date(conv.updated_at).toLocaleDateString(language === "ar" ? "ar-SA" : "en-US") })
                              ]
                            }
                          ),
                          chatState.onDeleteConversation && /* @__PURE__ */ jsx87(
                            "button",
                            {
                              onClick: () => handleDeleteConversation(conv.id),
                              className: "shrink-0 me-1.5 p-1 rounded text-muted-foreground opacity-0 group-hover:opacity-100 hover:text-destructive hover:bg-destructive/10 transition-all duration-fast ease-standard",
                              title: t2("copilot:deleteConversation"),
                              "aria-label": t2("copilot:deleteConversation"),
                              children: /* @__PURE__ */ jsx87(Trash25, { className: "w-3 h-3" })
                            }
                          )
                        ]
                      },
                      conv.id
                    )) }) })
                  ] })
                ] }),
                /* @__PURE__ */ jsx87(
                  Button,
                  {
                    variant: "ghost",
                    size: "icon",
                    className: "h-7 w-7",
                    onClick: () => {
                      chatState.onNewConversation();
                      setThinkingMode(false);
                    },
                    title: t2("copilot:newChat"),
                    children: /* @__PURE__ */ jsx87(Plus5, { className: "w-3.5 h-3.5" })
                  }
                ),
                onExpandToFullPage && /* @__PURE__ */ jsx87(
                  Button,
                  {
                    variant: "ghost",
                    size: "icon",
                    className: "h-7 w-7",
                    onClick: onExpandToFullPage,
                    title: t2("copilot:fullView"),
                    children: /* @__PURE__ */ jsx87(Maximize2, { className: "w-3.5 h-3.5" })
                  }
                ),
                /* @__PURE__ */ jsx87(
                  Button,
                  {
                    variant: "ghost",
                    size: "icon",
                    className: "h-7 w-7",
                    "aria-label": t2("common:close"),
                    onClick: () => {
                      setIsExpanded(false);
                      onClose?.();
                    },
                    children: /* @__PURE__ */ jsx87(X6, { className: "w-4 h-4", "aria-hidden": "true" })
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsx87(ScrollArea, { className: "flex-1 px-4 py-3", dir: isRTL ? "rtl" : "ltr", children: /* @__PURE__ */ jsxs75("div", { className: "space-y-3", children: [
              isTwin && chatState.messages.length === 0 && /* @__PURE__ */ jsxs75("div", { className: "mx-auto max-w-md mb-3 p-2.5 bg-amber-500/10 border border-amber-500/30 rounded-lg flex items-start gap-2", children: [
                /* @__PURE__ */ jsx87(AlertTriangle3, { className: "w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsx87("p", { className: "text-[11px] text-amber-500/90", children: t2("copilot:twinDisclaimer") })
              ] }),
              chatState.messages.length === 0 && !chatState.isLoading && /* @__PURE__ */ jsxs75("div", { className: "text-center py-6", children: [
                /* @__PURE__ */ jsx87("div", { className: "mx-auto mb-3 flex justify-center", children: /* @__PURE__ */ jsx87(TwinAvatar, { size: "lg" }) }),
                seedGreeting ? /* @__PURE__ */ jsx87("div", { className: "max-w-md mx-auto mb-4 p-3 bg-muted rounded-xl border border-border text-start", children: /* @__PURE__ */ jsx87("p", { className: "text-sm text-foreground", dir: "auto", children: seedGreeting }) }) : /* @__PURE__ */ jsx87("p", { className: "text-sm text-muted-foreground mb-4", children: placeholder }),
                /* @__PURE__ */ jsx87("div", { className: "flex flex-wrap justify-center gap-2 max-w-md mx-auto", children: context.suggestions.map((suggestion, i) => {
                  const text = typeof suggestion === "string" ? suggestion : language === "ar" ? suggestion.ar : suggestion.en;
                  return /* @__PURE__ */ jsx87(
                    "button",
                    {
                      onClick: () => chatState.onSend(text, { thinkingMode }),
                      className: "text-xs px-3 py-1.5 bg-muted hover:bg-accent text-muted-foreground hover:text-foreground rounded-full transition-colors duration-fast ease-standard border border-border hover:border-primary/30",
                      children: text
                    },
                    i
                  );
                }) })
              ] }),
              chatState.messages.map((message, msgIdx) => {
                const isLastAssistant = message.role === "assistant" && msgIdx === chatState.messages.length - 1;
                const compareFactorsStep = message.steps?.find(
                  (s) => s.step === "compare_factors" && s["factors"]
                );
                const compareFactorsData = compareFactorsStep ? {
                  factors: compareFactorsStep["factors"],
                  subjectA: compareFactorsStep["subjectA"],
                  subjectB: compareFactorsStep["subjectB"],
                  type: compareFactorsStep["type"]
                } : null;
                const handleAcceptFactors = (factors) => {
                  if (!compareFactorsData) return;
                  const payload = JSON.stringify({
                    factors,
                    type: compareFactorsData.type,
                    slugA: compareFactorsData.subjectA.slug,
                    slugB: compareFactorsData.subjectB.slug
                  });
                  chatState.onSend(`[COMPARE_ACCEPT]${payload}`, { thinkingMode });
                };
                const strippedContent = message.role === "assistant" ? message.content.replace(/\[COMPARE_FACTORS_STATE\][\s\S]*?\[\/COMPARE_FACTORS_STATE\]/g, "").trim() : message.content;
                const { markdown: cleanMarkdown, structured: structuredData } = message.role === "assistant" ? extractStructuredBlocks(strippedContent) : { markdown: strippedContent, structured: null };
                const renderedMarkdown = message.role === "assistant" ? sanitizeAgentEmptyState(cleanMarkdown, emptyMessage) : cleanMarkdown;
                const displayContent = message.role === "user" && message.content.startsWith("[COMPARE_ACCEPT]") ? t2("copilot:comparisonFactorsAccepted") : renderedMarkdown;
                if (message.hidden && message.role === "user") {
                  const insightText = message.content.match(/"([^"]+)"/)?.[1] || t2("copilot:insightFromDashboard");
                  return /* @__PURE__ */ jsx87("div", { className: "flex justify-center py-1", children: /* @__PURE__ */ jsxs75("div", { className: "inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/5 border border-primary/20 rounded-full text-[11px] text-primary/70 max-w-[90%]", children: [
                    /* @__PURE__ */ jsx87(Lightbulb, { className: "w-3 h-3 shrink-0" }),
                    /* @__PURE__ */ jsx87("span", { className: "truncate", dir: "auto", children: insightText })
                  ] }) }, message.id);
                }
                return /* @__PURE__ */ jsxs75("div", { children: [
                  message.role === "assistant" && message.steps && message.steps.length > 0 && /* @__PURE__ */ jsxs75("div", { className: "flex gap-2 mb-1 justify-start", children: [
                    /* @__PURE__ */ jsx87("div", { className: "mt-1 shrink-0", children: /* @__PURE__ */ jsx87(TwinAvatar, { size: "sm" }) }),
                    /* @__PURE__ */ jsx87("div", { className: "min-w-0 flex-1 max-w-[calc(85%-2rem)]", children: /* @__PURE__ */ jsx87(
                      AgentSteps_default,
                      {
                        steps: message.steps,
                        isStreaming: chatState.isStreaming && msgIdx === chatState.messages.length - 1,
                        language,
                        dir: isRTL ? "rtl" : "ltr"
                      }
                    ) })
                  ] }),
                  /* @__PURE__ */ jsxs75("div", { className: `flex gap-2 ${message.role === "user" ? "justify-end" : "justify-start"}`, children: [
                    message.role === "assistant" && /* @__PURE__ */ jsx87("div", { className: "mt-1 shrink-0", children: /* @__PURE__ */ jsx87(TwinAvatar, { size: "sm" }) }),
                    /* @__PURE__ */ jsx87("div", { className: `max-w-[85%] rounded-xl px-3 py-2 text-sm ${message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground border border-border"}`, children: message.role === "assistant" ? /* @__PURE__ */ jsxs75("div", { className: "max-w-none break-words", dir: isRTL ? "rtl" : "ltr", children: [
                      /* @__PURE__ */ jsx87(MarkdownContent_default, { content: displayContent, dir: isRTL ? "rtl" : "ltr" }),
                      structuredData && /* @__PURE__ */ jsx87(
                        ChatStructuredData_default,
                        {
                          data: structuredData,
                          language,
                          dir: isRTL ? "rtl" : "ltr",
                          onNavigate,
                          onCheckSlugs
                        }
                      ),
                      message.briefing && /* @__PURE__ */ jsx87(
                        ChatStructuredData_default,
                        {
                          data: message.briefing,
                          language,
                          dir: isRTL ? "rtl" : "ltr",
                          onNavigate,
                          onCheckSlugs
                        }
                      ),
                      compareFactorsData && /* @__PURE__ */ jsx87(
                        CompareFactorsCard_default,
                        {
                          data: compareFactorsData,
                          onAccept: handleAcceptFactors,
                          disabled: !isLastAssistant || chatState.isLoading,
                          language
                        }
                      ),
                      message.citations && message.citations.length > 0 && /* @__PURE__ */ jsx87("div", { className: "mt-2 pt-2 border-t border-border/50 flex flex-wrap gap-1", dir: isRTL ? "rtl" : "ltr", children: message.citations.map((c) => /* @__PURE__ */ jsxs75(
                        "button",
                        {
                          type: "button",
                          onClick: () => onNavigate?.(`/${c.type}/${c.slug}`),
                          className: "inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-primary/10 hover:bg-primary/20 text-primary text-[10px] font-medium transition-colors duration-fast ease-standard border border-primary/20",
                          title: c.description || c.title,
                          children: [
                            /* @__PURE__ */ jsx87("span", { className: "inline-flex items-center justify-center w-3.5 h-3.5 rounded-full bg-primary/20 text-primary text-[8px] font-bold", children: c.number }),
                            /* @__PURE__ */ jsx87("span", { className: "truncate max-w-[120px]", children: c.title })
                          ]
                        },
                        c.number
                      )) }),
                      message.a2uiArtifacts && message.a2uiArtifacts.length > 0 && /* @__PURE__ */ jsx87("div", { className: "mt-2 space-y-2", dir: isRTL ? "rtl" : "ltr", children: message.a2uiArtifacts.map((artifact, artIdx) => /* @__PURE__ */ jsx87(
                        ArtifactRenderer,
                        {
                          artifact,
                          onAction: handleArtifactAction,
                          onInteract: handleArtifactInteract,
                          language,
                          dir: isRTL ? "rtl" : "ltr"
                        },
                        artIdx
                      )) })
                    ] }) : displayContent }),
                    message.role === "user" && /* @__PURE__ */ jsx87("div", { className: "w-6 h-6 rounded-md bg-muted flex items-center justify-center shrink-0 mt-1", children: /* @__PURE__ */ jsx87(User, { className: "w-3 h-3 text-muted-foreground" }) })
                  ] }),
                  message.role === "assistant" && !message.id.startsWith("streaming-") && renderedMarkdown && /* @__PURE__ */ jsxs75("div", { className: "flex items-center gap-1 mt-1 justify-start ps-8", children: [
                    /* @__PURE__ */ jsxs75(
                      "button",
                      {
                        type: "button",
                        title: t2("copilot:copyResponse"),
                        onClick: () => navigator.clipboard.writeText(renderedMarkdown).catch(() => {
                        }),
                        className: "flex items-center gap-1 px-2 py-0.5 rounded text-[10px] text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors duration-fast ease-standard",
                        children: [
                          /* @__PURE__ */ jsx87(Copy, { className: "w-3 h-3" }),
                          /* @__PURE__ */ jsx87("span", { children: t2("copilot:copyResponse") })
                        ]
                      }
                    ),
                    typeof navigator !== "undefined" && "share" in navigator && /* @__PURE__ */ jsxs75(
                      "button",
                      {
                        type: "button",
                        title: t2("copilot:shareResponse"),
                        onClick: () => navigator.share({ title: "Copilot Response", text: renderedMarkdown }).catch(() => {
                        }),
                        className: "flex items-center gap-1 px-2 py-0.5 rounded text-[10px] text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors duration-fast ease-standard",
                        children: [
                          /* @__PURE__ */ jsx87(Share2, { className: "w-3 h-3" }),
                          /* @__PURE__ */ jsx87("span", { children: t2("copilot:shareResponse") })
                        ]
                      }
                    )
                  ] })
                ] }, message.id);
              }),
              chatState.streamError && /* @__PURE__ */ jsxs75("div", { className: "flex gap-2 justify-start", children: [
                /* @__PURE__ */ jsx87("div", { className: "mt-1 shrink-0", children: /* @__PURE__ */ jsx87(TwinAvatar, { size: "sm" }) }),
                /* @__PURE__ */ jsx87("div", { className: "min-w-0 flex-1 max-w-[calc(85%-2rem)]", children: /* @__PURE__ */ jsx87(
                  StreamErrorBanner_default,
                  {
                    onRetry: chatState.onRetry,
                    isRetrying: chatState.isLoading,
                    language
                  }
                ) })
              ] }),
              snapshottedChips && snapshottedChips.length > 0 && insightTriggered && chatState.messages.length === 2 && !chatState.isLoading && chatState.messages[1]?.role === "assistant" && /* @__PURE__ */ jsx87("div", { className: "flex flex-wrap justify-center gap-2 max-w-md mx-auto py-2", children: snapshottedChips.map((chip, i) => /* @__PURE__ */ jsx87(
                "button",
                {
                  onClick: () => {
                    chatState.onSend(chip, { thinkingMode });
                    setSnapshottedChips(void 0);
                    setInsightTriggered(false);
                  },
                  className: "text-xs px-3 py-1.5 bg-primary/10 hover:bg-primary/20 text-primary rounded-full transition-colors duration-fast ease-standard border border-primary/20",
                  children: chip
                },
                i
              )) }),
              (chatState.isLoading || chatState.isStreaming) && !chatState.isReceiving && chatState.agentSteps.length > 0 && /* @__PURE__ */ jsxs75("div", { className: "flex gap-2 justify-start", children: [
                /* @__PURE__ */ jsx87("div", { className: "mt-1 shrink-0", children: /* @__PURE__ */ jsx87(TwinAvatar, { size: "sm" }) }),
                /* @__PURE__ */ jsx87("div", { className: "min-w-0 flex-1 max-w-[calc(85%-2rem)]", children: /* @__PURE__ */ jsx87(AgentSteps_default, { steps: chatState.agentSteps, isStreaming: true, language, dir: isRTL ? "rtl" : "ltr" }) })
              ] }),
              (chatState.isLoading || chatState.isStreaming) && !chatState.isReceiving && chatState.agentSteps.length === 0 && /* @__PURE__ */ jsxs75("div", { className: "flex gap-2 justify-start", children: [
                /* @__PURE__ */ jsx87("div", { className: "w-6 h-6 rounded-md bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx87(Loader29, { className: "w-3 h-3 text-primary-foreground animate-spin" }) }),
                /* @__PURE__ */ jsx87("div", { className: "bg-muted rounded-xl px-3 py-2 border border-border", children: /* @__PURE__ */ jsx87("span", { className: "text-xs text-muted-foreground animate-pulse", children: t2("copilot:thinkingIndicator") }) })
              ] }),
              /* @__PURE__ */ jsx87("div", { dir: isRTL ? "rtl" : "ltr", ref: messagesEndRef })
            ] }) }),
            /* @__PURE__ */ jsxs75(
              "div",
              {
                className: "px-4 py-2.5 border-t border-border bg-background/50 shrink-0 space-y-2 relative",
                dir: isRTL ? "rtl" : "ltr",
                onDragEnter: (e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  dragCounterRef.current++;
                  setIsDragging(true);
                },
                onDragOver: (e) => {
                  e.preventDefault();
                  e.stopPropagation();
                },
                onDragLeave: (e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  dragCounterRef.current--;
                  if (dragCounterRef.current <= 0) {
                    setIsDragging(false);
                    dragCounterRef.current = 0;
                  }
                },
                onDrop: (e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsDragging(false);
                  dragCounterRef.current = 0;
                  const files = Array.from(e.dataTransfer.files);
                  if (files.length > 0) {
                    void handleDroppedFiles(files);
                    if (toolbarUploadRef.current) toolbarUploadRef.current(files);
                  }
                },
                children: [
                  isDragging && /* @__PURE__ */ jsx87("div", { className: "absolute inset-0 z-10 flex items-center justify-center bg-primary/5 border-2 border-dashed border-primary/40 rounded-lg backdrop-blur-sm", children: /* @__PURE__ */ jsx87("p", { className: "text-xs font-medium text-primary", children: t2("copilot:dropFiles") }) }),
                  /* @__PURE__ */ jsx87(
                    ChatToolbar_default,
                    {
                      forcedTools,
                      onForcedToolsChange: setForcedTools,
                      attachments,
                      onAttachmentsChange: setAttachments,
                      thinkingMode,
                      onThinkingModeChange: (enabled) => {
                        setThinkingMode(enabled);
                        try {
                          localStorage.setItem("sentra-thinking-mode", String(enabled));
                        } catch {
                        }
                      },
                      disabled: chatState.isLoading,
                      language,
                      onUploadReady: (fn) => {
                        toolbarUploadRef.current = fn;
                      }
                    }
                  ),
                  !isTwin && (personas === void 0 || (personas ?? PERSONAS).length > 0) && /* @__PURE__ */ jsx87(
                    PersonaPicker,
                    {
                      value: persona,
                      onChange: setPersona,
                      disabled: chatState.isLoading,
                      language,
                      personas
                    }
                  ),
                  SHOW_TOOLS_PANEL && /* @__PURE__ */ jsxs75(Collapsible, { open: toolsPanelOpen, onOpenChange: setToolsPanelOpen, children: [
                    /* @__PURE__ */ jsx87(CollapsibleTrigger, { asChild: true, children: /* @__PURE__ */ jsxs75(
                      "button",
                      {
                        type: "button",
                        className: "flex items-center gap-1.5 text-[11px] text-muted-foreground hover:text-foreground transition-colors duration-fast ease-standard",
                        "aria-expanded": toolsPanelOpen,
                        children: [
                          /* @__PURE__ */ jsx87(Wrench, { className: "w-3 h-3 shrink-0" }),
                          /* @__PURE__ */ jsx87("span", { children: language === "ar" ? "\u0627\u0644\u0623\u062F\u0648\u0627\u062A \u0648\u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062A" : "Tools & Skills" }),
                          /* @__PURE__ */ jsx87(ChevronDown10, { className: `w-3 h-3 transition-transform duration-fast ease-standard ${toolsPanelOpen ? "rotate-180" : ""}` })
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ jsx87(CollapsibleContent, { children: /* @__PURE__ */ jsxs75("div", { className: "mt-1.5 rounded-lg border border-border bg-muted/40 p-2 space-y-1", children: [
                      effAllowedTools && effAllowedTools.map((tool) => /* @__PURE__ */ jsxs75(
                        "div",
                        {
                          className: "flex items-center justify-between gap-2 rounded-md px-2 py-1 hover:bg-muted transition-colors duration-fast ease-standard",
                          children: [
                            /* @__PURE__ */ jsxs75("div", { className: "flex items-center gap-1.5 min-w-0", children: [
                              /* @__PURE__ */ jsx87(Terminal2, { className: "w-3 h-3 shrink-0 text-blue-400" }),
                              /* @__PURE__ */ jsx87("span", { className: "text-xs text-foreground truncate", children: tool.name })
                            ] }),
                            /* @__PURE__ */ jsx87(
                              "button",
                              {
                                type: "button",
                                onClick: () => {
                                  const cmd = `/${tool.function_name ?? tool.slug} `;
                                  chatState.onInputChange(chatState.inputValue + cmd);
                                  setToolsPanelOpen(false);
                                  requestAnimationFrame(() => inputRef.current?.focus());
                                },
                                className: "shrink-0 text-[10px] px-1.5 py-0.5 rounded bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-fast ease-standard",
                                title: language === "ar" ? "\u0623\u062F\u0631\u062C" : "Insert",
                                children: language === "ar" ? "\u0623\u062F\u0631\u062C" : "Insert"
                              }
                            )
                          ]
                        },
                        tool.slug
                      )),
                      effAllowedSkills && effAllowedSkills.map((skill) => /* @__PURE__ */ jsxs75(
                        "div",
                        {
                          className: "flex items-center justify-between gap-2 rounded-md px-2 py-1 hover:bg-muted transition-colors duration-fast ease-standard",
                          children: [
                            /* @__PURE__ */ jsxs75("div", { className: "flex items-center gap-1.5 min-w-0", children: [
                              /* @__PURE__ */ jsx87(Zap2, { className: "w-3 h-3 shrink-0 text-amber-400" }),
                              /* @__PURE__ */ jsx87("span", { className: "text-xs text-foreground truncate", children: skill.name })
                            ] }),
                            /* @__PURE__ */ jsx87(
                              "button",
                              {
                                type: "button",
                                onClick: () => {
                                  const cmd = `/skill ${skill.slug} `;
                                  chatState.onInputChange(chatState.inputValue + cmd);
                                  setToolsPanelOpen(false);
                                  requestAnimationFrame(() => inputRef.current?.focus());
                                },
                                className: "shrink-0 text-[10px] px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 transition-colors duration-fast ease-standard",
                                title: language === "ar" ? "\u0623\u062F\u0631\u062C" : "Insert",
                                children: language === "ar" ? "\u0623\u062F\u0631\u062C" : "Insert"
                              }
                            )
                          ]
                        },
                        skill.slug
                      ))
                    ] }) })
                  ] }),
                  attachments.length > 0 && /* @__PURE__ */ jsx87("div", { className: "flex flex-wrap gap-1.5", children: attachments.map((att, i) => /* @__PURE__ */ jsxs75(
                    "div",
                    {
                      className: "inline-flex items-center gap-1.5 px-2 py-1 bg-muted border border-border rounded-md text-[11px] text-foreground max-w-[160px]",
                      children: [
                        /* @__PURE__ */ jsx87("span", { className: "truncate font-medium", children: att.name }),
                        /* @__PURE__ */ jsx87(
                          "button",
                          {
                            type: "button",
                            onClick: () => setAttachments((prev) => prev.filter((_, idx) => idx !== i)),
                            className: "shrink-0 text-muted-foreground hover:text-foreground transition-colors duration-fast ease-standard",
                            "aria-label": language === "ar" ? `\u0625\u0632\u0627\u0644\u0629 ${att.name}` : `Remove ${att.name}`,
                            children: /* @__PURE__ */ jsx87(X6, { className: "w-3 h-3" })
                          }
                        )
                      ]
                    },
                    `${att.name}-${i}`
                  )) }),
                  /* @__PURE__ */ jsxs75("div", { className: "relative", children: [
                    slashMenuOpen && /* @__PURE__ */ jsx87(
                      "div",
                      {
                        ref: slashMenuRef,
                        className: "absolute bottom-full mb-1 start-0 w-72 z-50 rounded-lg border border-border bg-popover shadow-md overflow-hidden",
                        dir: isRTL ? "rtl" : "ltr",
                        children: /* @__PURE__ */ jsxs75(Command, { shouldFilter: false, children: [
                          /* @__PURE__ */ jsx87(
                            CommandInput,
                            {
                              value: slashQuery,
                              onValueChange: setSlashQuery,
                              placeholder: language === "ar" ? "\u0627\u0628\u062D\u062B \u0641\u064A \u0627\u0644\u0623\u0648\u0627\u0645\u0631\u2026" : "Search commands\u2026",
                              className: "h-8 text-xs",
                              autoFocus: false
                            }
                          ),
                          /* @__PURE__ */ jsxs75(CommandList, { className: "max-h-52", children: [
                            /* @__PURE__ */ jsx87(CommandEmpty, { className: "text-xs py-3", children: language === "ar" ? "\u0644\u0627 \u062A\u0648\u062C\u062F \u0623\u0648\u0627\u0645\u0631" : "No commands found" }),
                            effAllowedTools && effAllowedTools.length > 0 && /* @__PURE__ */ jsx87(CommandGroup, { heading: language === "ar" ? "\u0623\u062F\u0648\u0627\u062A" : "Tools", children: effAllowedTools.filter(
                              (t3) => !slashQuery || (t3.function_name ?? t3.slug).toLowerCase().includes(slashQuery.toLowerCase()) || t3.name.toLowerCase().includes(slashQuery.toLowerCase())
                            ).map((tool) => /* @__PURE__ */ jsxs75(
                              CommandItem,
                              {
                                value: tool.function_name ?? tool.slug,
                                onSelect: () => handleSlashSelect(tool.function_name ?? tool.slug),
                                className: "text-xs cursor-pointer",
                                children: [
                                  /* @__PURE__ */ jsx87(Terminal2, { className: "w-3 h-3 me-2 shrink-0 text-blue-400" }),
                                  /* @__PURE__ */ jsxs75("span", { className: "font-mono text-primary me-1.5", children: [
                                    "/",
                                    tool.function_name ?? tool.slug
                                  ] }),
                                  /* @__PURE__ */ jsx87("span", { className: "text-muted-foreground truncate", children: tool.name })
                                ]
                              },
                              tool.slug
                            )) }),
                            effAllowedSkills && effAllowedSkills.length > 0 && /* @__PURE__ */ jsx87(CommandGroup, { heading: language === "ar" ? "\u0645\u0647\u0627\u0631\u0627\u062A" : "Skills", children: effAllowedSkills.filter(
                              (s) => !slashQuery || s.slug.toLowerCase().includes(slashQuery.toLowerCase()) || s.name.toLowerCase().includes(slashQuery.toLowerCase())
                            ).map((skill) => /* @__PURE__ */ jsxs75(
                              CommandItem,
                              {
                                value: `skill-${skill.slug}`,
                                onSelect: () => handleSlashSelect(`skill ${skill.slug}`),
                                className: "text-xs cursor-pointer",
                                children: [
                                  /* @__PURE__ */ jsx87(Zap2, { className: "w-3 h-3 me-2 shrink-0 text-amber-400" }),
                                  /* @__PURE__ */ jsxs75("span", { className: "font-mono text-primary me-1.5", children: [
                                    "/skill ",
                                    skill.slug
                                  ] }),
                                  /* @__PURE__ */ jsx87("span", { className: "text-muted-foreground truncate", children: skill.name })
                                ]
                              },
                              skill.slug
                            )) })
                          ] })
                        ] })
                      }
                    ),
                    atMenuOpen && showAgents && /* @__PURE__ */ jsx87(
                      "div",
                      {
                        ref: atMenuRef,
                        className: "absolute bottom-full mb-1 start-0 w-64 z-50 rounded-lg border border-border bg-popover shadow-md overflow-hidden",
                        dir: isRTL ? "rtl" : "ltr",
                        children: /* @__PURE__ */ jsxs75(Command, { shouldFilter: false, children: [
                          /* @__PURE__ */ jsx87(
                            CommandInput,
                            {
                              value: atQuery,
                              onValueChange: setAtQuery,
                              placeholder: language === "ar" ? "\u0627\u0628\u062D\u062B \u0641\u064A \u0627\u0644\u0648\u0643\u0644\u0627\u0621\u2026" : "Search agents\u2026",
                              className: "h-8 text-xs",
                              autoFocus: false
                            }
                          ),
                          /* @__PURE__ */ jsxs75(CommandList, { className: "max-h-48", children: [
                            /* @__PURE__ */ jsx87(CommandEmpty, { className: "text-xs py-3", children: language === "ar" ? "\u0644\u0627 \u064A\u0648\u062C\u062F \u0648\u0643\u0644\u0627\u0621" : "No agents found" }),
                            /* @__PURE__ */ jsx87(CommandGroup, { heading: language === "ar" ? "\u0627\u0644\u0648\u0643\u0644\u0627\u0621" : "Agents", children: (personas ?? PERSONAS).filter(
                              (p) => !atQuery || p.label.toLowerCase().includes(atQuery.toLowerCase()) || p.id.toLowerCase().includes(atQuery.toLowerCase())
                            ).map((p) => /* @__PURE__ */ jsxs75(
                              CommandItem,
                              {
                                value: p.id,
                                onSelect: () => handleAtSelect(p.label),
                                className: "text-xs cursor-pointer",
                                children: [
                                  p.icon ? /* @__PURE__ */ jsx87("span", { className: "me-2 text-sm", children: p.icon }) : /* @__PURE__ */ jsx87(AtSign, { className: "w-3 h-3 me-2 shrink-0 text-emerald-400" }),
                                  /* @__PURE__ */ jsx87("span", { className: "text-foreground", children: p.label })
                                ]
                              },
                              p.id
                            )) })
                          ] })
                        ] })
                      }
                    ),
                    /* @__PURE__ */ jsxs75(
                      "form",
                      {
                        onSubmit: (e) => {
                          e.preventDefault();
                          handleSend();
                        },
                        className: "flex items-end gap-2",
                        children: [
                          /* @__PURE__ */ jsx87(
                            Textarea,
                            {
                              ref: inputRef,
                              value: chatState.inputValue,
                              onChange: (e) => {
                                handleInputChange(e.target.value);
                                autoResize(e.target);
                              },
                              onKeyDown: handleKeyDown,
                              placeholder,
                              disabled: chatState.isLoading,
                              rows: 1,
                              className: "flex-1 min-h-[36px] max-h-[120px] resize-none text-sm py-2"
                            }
                          ),
                          /* @__PURE__ */ jsx87(
                            Button,
                            {
                              type: "submit",
                              size: "icon",
                              disabled: chatState.isLoading || !chatState.inputValue.trim(),
                              className: "h-9 w-9 shrink-0",
                              "aria-label": language === "ar" ? "\u0625\u0631\u0633\u0627\u0644" : "Send",
                              children: /* @__PURE__ */ jsx87(Send, { className: "w-4 h-4", "aria-hidden": "true" })
                            }
                          )
                        ]
                      }
                    )
                  ] })
                ]
              }
            )
          ] })
        ]
      }
    )
  ] });
};
UnifiedCopilotDock.displayName = "UnifiedCopilotDock";
var UnifiedCopilotDock_default = UnifiedCopilotDock;

// src/components/copilot/CopilotProvider.tsx
import { jsx as jsx88, jsxs as jsxs76 } from "react/jsx-runtime";
function useSafeLanguage() {
  try {
    const ctx = useT2();
    return { language: ctx.language, isRTL: ctx.isRTL };
  } catch {
    return { language: "en", isRTL: false };
  }
}
function genId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}
function stripA2UI(text) {
  let out = text.replace(/```a2ui[\s\S]*?```/g, "");
  const open = out.indexOf("```a2ui");
  if (open !== -1) out = out.slice(0, open);
  return out.trim();
}
function genUUID() {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0;
    const v = c === "x" ? r : r & 3 | 8;
    return v.toString(16);
  });
}
var AGENT_AR_NAMES = {
  "agent-persona-analyst": "\u0645\u062D\u0644\u0644 \u0627\u0644\u0627\u0633\u062A\u062E\u0628\u0627\u0631\u0627\u062A",
  "agent-persona-media": "\u0645\u062D\u0644\u0644 \u0627\u0644\u0625\u0639\u0644\u0627\u0645",
  "agent-persona-diplomat": "\u0627\u0644\u062F\u0628\u0644\u0648\u0645\u0627\u0633\u064A",
  "agent-persona-osint": "\u0628\u0627\u062D\u062B OSINT"
};
var CopilotContext = createContext3(null);
var DEFAULT_CONTEXT = {
  type: "global",
  contextRef: "",
  title: "Copilot",
  mode: "global",
  suggestions: [
    { en: "Summarise recent alerts", ar: "\u0644\u062E\u0651\u0635 \u0627\u0644\u062A\u0646\u0628\u064A\u0647\u0627\u062A \u0627\u0644\u0623\u062E\u064A\u0631\u0629" },
    { en: "What are the key narratives this week?", ar: "\u0645\u0627 \u0623\u0628\u0631\u0632 \u0627\u0644\u0633\u0631\u062F\u064A\u0627\u062A \u0647\u0630\u0627 \u0627\u0644\u0623\u0633\u0628\u0648\u0639\u061F" },
    { en: "Show top entities by coverage", ar: "\u0627\u0639\u0631\u0636 \u0623\u0628\u0631\u0632 \u0627\u0644\u0643\u064A\u0627\u0646\u0627\u062A \u062D\u0633\u0628 \u0627\u0644\u062A\u063A\u0637\u064A\u0629" }
  ]
};
var CopilotProvider = ({
  children,
  baseUrl = "/api/v1",
  token,
  context = DEFAULT_CONTEXT,
  defaultOpen = false,
  pageContext,
  client: injectedClient
}) => {
  const { language } = useSafeLanguage();
  const [isOpen, setIsOpen] = useState45(defaultOpen);
  const [pendingMessage, setPendingMessage] = useState45(null);
  const [pendingAutoSend, setPendingAutoSend] = useState45(false);
  const [config, setConfig] = useState45(null);
  const [messages, setMessages] = useState45([]);
  const [inputValue, setInputValue] = useState45("");
  const [isLoading, setIsLoading] = useState45(false);
  const [isStreaming, setIsStreaming] = useState45(false);
  const [isReceiving, setIsReceiving] = useState45(false);
  const [streamingText, setStreamingText] = useState45("");
  const [agentSteps, setAgentSteps] = useState45([]);
  const [streamError, setStreamError] = useState45(null);
  const [sessionId, setSessionId] = useState45(null);
  const [sessionTitle, setSessionTitle] = useState45(void 0);
  const lastPayloadRef = useRef18(null);
  const abortRef = useRef18(null);
  const clientRef = useRef18(injectedClient ?? null);
  clientRef.current = injectedClient ?? null;
  useEffect27(() => {
    let cancelled = false;
    const fetchConfig = async () => {
      try {
        const configUrl = baseUrl.endsWith("/") ? `${baseUrl}copilot/config` : `${baseUrl}/copilot/config`;
        const headers = { "Content-Type": "application/json" };
        if (token) headers["Authorization"] = `Bearer ${token}`;
        const res = await fetch(configUrl, {
          method: "GET",
          headers,
          credentials: "include"
        });
        if (!res.ok || cancelled) return;
        const data = await res.json();
        if (!cancelled) setConfig(data);
      } catch {
      }
    };
    void fetchConfig();
    return () => {
      cancelled = true;
    };
  }, [baseUrl, token]);
  const mapStep = (s) => ({
    step: s.step,
    message: s.message,
    done: s.done,
    count: s.count,
    duration_ms: s.duration_ms,
    sources: s.sources,
    domains: s.domains,
    handles: s.handles,
    query: s.query
  });
  const handleSend = useCallback15(
    async (text, opts) => {
      if (!text.trim()) return;
      abortRef.current?.abort();
      const abort = new AbortController();
      abortRef.current = abort;
      lastPayloadRef.current = { text, opts };
      let activeSession = sessionId;
      if (!activeSession) {
        activeSession = genUUID();
        setSessionId(activeSession);
      }
      const userMsg = {
        id: genId(),
        role: "user",
        content: text,
        hidden: opts?.hideUserMessage
      };
      setMessages((prev) => [...prev, userMsg]);
      setInputValue("");
      setStreamError(null);
      setIsLoading(true);
      setIsStreaming(false);
      setIsReceiving(false);
      setAgentSteps([]);
      setStreamingText("");
      const assistantId = `streaming-${genId()}`;
      let accumulated = "";
      let finalSteps = [];
      let finalArtifacts = [];
      try {
        const client = clientRef.current;
        if (!client) {
          throw new Error("No CopilotClient provided");
        }
        const intelligenceCtx = pageContext ? { data_summary: pageContext } : void 0;
        const req = {
          messages: [
            // Pass the full history so the model has conversation context
            ...messages.map((m) => ({
              role: m.role,
              content: m.content
            })),
            { role: "user", content: text }
          ],
          language,
          mode: context.mode,
          thinking_mode: opts?.thinkingMode,
          forced_tools: opts?.forcedTools ? {
            deep_research: opts.forcedTools.deep_research ?? false,
            search_sources: opts.forcedTools.search_sources ?? []
          } : void 0,
          attachments: opts?.attachments,
          intelligenceContext: intelligenceCtx,
          // Wave D: persist this turn to the active session (backend upserts + auto-titles).
          session_id: activeSession,
          // Phase-3: structured interaction post-back from an interactive artifact.
          // Forwarded when handleArtifactInteract is the caller; absent for normal sends.
          interaction: opts?.interaction
        };
        if (!sessionTitle && messages.length === 0) {
          const t2 = text.length > 50 ? `${text.slice(0, 50)}\u2026` : text;
          setSessionTitle(t2);
        }
        for await (const event of client.copilotDispatch(req, { signal: abort.signal })) {
          if (abort.signal.aborted) break;
          switch (event.type) {
            case "delta": {
              accumulated += event.text;
              setIsStreaming(true);
              setIsReceiving(true);
              setStreamingText(stripA2UI(accumulated));
              break;
            }
            case "step": {
              const step = mapStep(event.step);
              finalSteps = [...finalSteps, step];
              setAgentSteps([...finalSteps]);
              setIsStreaming(true);
              break;
            }
            case "citations": {
              break;
            }
            case "artifact": {
              finalArtifacts = [...finalArtifacts, event.artifact];
              break;
            }
            case "done": {
              break;
            }
            default:
              break;
          }
        }
        const cleanContent = stripA2UI(accumulated);
        if (!abort.signal.aborted && (cleanContent || finalArtifacts.length > 0)) {
          const assistantMsg = {
            id: assistantId,
            role: "assistant",
            content: cleanContent,
            steps: finalSteps.length > 0 ? finalSteps : void 0,
            a2uiArtifacts: finalArtifacts.length > 0 ? finalArtifacts : void 0
          };
          setMessages((prev) => [...prev, assistantMsg]);
        }
      } catch (err) {
        if (abort.signal.aborted) {
          return;
        }
        console.error("[CopilotProvider]", "Stream error", err);
        const msg = err instanceof Error ? err.message : "Cortex is unreachable. Please try again.";
        setStreamError(msg);
      } finally {
        setIsLoading(false);
        setIsStreaming(false);
        setIsReceiving(false);
        setStreamingText("");
        setAgentSteps([]);
      }
    },
    // messages is included so each turn picks up the current history correctly.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [messages, language, context.mode, baseUrl, token, pageContext, sessionId, sessionTitle]
  );
  const handleRetry = useCallback15(() => {
    if (!lastPayloadRef.current) return;
    const { text, opts } = lastPayloadRef.current;
    setMessages(
      (prev) => prev.filter((m) => m.role !== "assistant" || prev.indexOf(m) < prev.length - 1)
    );
    setStreamError(null);
    void handleSend(text, opts);
  }, [handleSend]);
  const handleNewConversation = useCallback15(() => {
    abortRef.current?.abort();
    setMessages([]);
    setInputValue("");
    setStreamError(null);
    setIsLoading(false);
    setIsStreaming(false);
    setIsReceiving(false);
    setStreamingText("");
    setAgentSteps([]);
    lastPayloadRef.current = null;
    setSessionId(null);
    setSessionTitle(void 0);
  }, []);
  const handleFetchHistory = useCallback15(async () => {
    try {
      const url = baseUrl.endsWith("/") ? `${baseUrl}copilot/sessions` : `${baseUrl}/copilot/sessions`;
      const res = await fetch(url, {
        credentials: "include",
        headers: token ? { Authorization: `Bearer ${token}` } : void 0
      });
      if (!res.ok) return [];
      const data = await res.json();
      return (data.sessions ?? []).map((s) => ({
        id: s.id,
        title: s.title || "New chat",
        // dock expects an ISO/string updated_at; convert epoch-ms when present.
        updated_at: s.last_message_at ? new Date(s.last_message_at).toISOString() : s.created_at ? new Date(s.created_at).toISOString() : ""
      }));
    } catch {
      return [];
    }
  }, [baseUrl, token]);
  const handleDeleteConversation = useCallback15(
    async (id) => {
      const url = baseUrl.endsWith("/") ? `${baseUrl}copilot/sessions/${id}` : `${baseUrl}/copilot/sessions/${id}`;
      const res = await fetch(url, {
        method: "DELETE",
        credentials: "include",
        headers: token ? { Authorization: `Bearer ${token}` } : void 0
      });
      if (!res.ok && res.status !== 404) {
        throw new Error(`delete session failed: ${res.status}`);
      }
    },
    [baseUrl, token]
  );
  const handleLoadConversation = useCallback15(
    async (id) => {
      abortRef.current?.abort();
      try {
        const url = baseUrl.endsWith("/") ? `${baseUrl}copilot/sessions/${id}/messages` : `${baseUrl}/copilot/sessions/${id}/messages`;
        const res = await fetch(url, {
          credentials: "include",
          headers: token ? { Authorization: `Bearer ${token}` } : void 0
        });
        if (!res.ok) return;
        const data = await res.json();
        const loaded = (data.messages ?? []).filter((m) => m.role === "user" || m.role === "assistant").map((m) => ({
          id: genId(),
          role: m.role,
          content: m.content
        }));
        setMessages(loaded);
        setSessionId(id);
        setSessionTitle(data.title);
        setStreamError(null);
        setStreamingText("");
        setAgentSteps([]);
        setInputValue("");
      } catch {
      }
    },
    [baseUrl, token]
  );
  const handleStop = useCallback15(() => {
    abortRef.current?.abort();
    setIsLoading(false);
    setIsStreaming(false);
    setIsReceiving(false);
  }, []);
  const chatState = {
    messages,
    streamingText,
    isReceiving,
    isLoading,
    isStreaming,
    agentSteps,
    streamError,
    inputValue,
    onInputChange: setInputValue,
    onSend: (text, opts) => {
      void handleSend(text, opts);
    },
    onStop: handleStop,
    onRetry: handleRetry,
    onNewConversation: handleNewConversation,
    // Wave D: session management — activates the dock's history popover.
    conversationId: sessionId ?? void 0,
    conversationTitle: sessionTitle,
    onFetchHistory: handleFetchHistory,
    onLoadConversation: handleLoadConversation,
    onDeleteConversation: handleDeleteConversation
  };
  const dynamicPersonas = config && config.allowed_agents.length > 0 ? config.allowed_agents.map((a) => ({
    id: a.slug.replace(/^agent-persona-/, ""),
    label: a.name,
    // Prefer name_ar from the server payload (when the Go handler emits it),
    // then fall back to AGENT_AR_NAMES keyed by the full slug, then the EN name.
    labelAr: a.name_ar || AGENT_AR_NAMES[a.slug] || a.name,
    icon: void 0
  })) : void 0;
  const handleArtifactAction = useCallback15(
    (item) => {
      if (!item.prompt) return;
      setIsOpen(true);
      void handleSend(item.prompt);
    },
    [handleSend]
  );
  const handleArtifactInteract = useCallback15(
    (interaction) => {
      setIsOpen(true);
      const text = `[interaction:${interaction.kind}]`;
      void handleSend(text, {
        hideUserMessage: true,
        interaction
      });
    },
    [handleSend]
  );
  const handleOpen = useCallback15((opts) => {
    setIsOpen(true);
    if (opts?.message) {
      setPendingMessage(opts.message);
      setPendingAutoSend(opts.autoSend ?? false);
    }
  }, []);
  const handleClose = useCallback15(() => setIsOpen(false), []);
  const handlePendingMessageConsumed = useCallback15(() => {
    setPendingMessage(null);
    setPendingAutoSend(false);
  }, []);
  const contextValue = {
    open: handleOpen,
    close: handleClose,
    isOpen,
    config
  };
  return /* @__PURE__ */ jsxs76(CopilotContext.Provider, { value: contextValue, children: [
    children,
    /* @__PURE__ */ jsx88(
      UnifiedCopilotDock_default,
      {
        chatState,
        context,
        language,
        defaultExpanded: isOpen,
        onClose: handleClose,
        personas: dynamicPersonas,
        allowedTools: config?.allowed_tools,
        allowedSkills: config?.allowed_skills,
        branding: config?.branding,
        uiConfig: config?.ui,
        onArtifactAction: handleArtifactAction,
        onArtifactInteract: handleArtifactInteract,
        pendingMessage,
        pendingAutoSend,
        onPendingMessageConsumed: handlePendingMessageConsumed
      }
    )
  ] });
};
CopilotProvider.displayName = "CopilotProvider";
var useCopilot = () => {
  const ctx = useContext3(CopilotContext);
  if (!ctx) {
    throw new Error("[useCopilot] Must be used inside <CopilotProvider> from @prism/ui");
  }
  return ctx;
};

// src/components/copilot/CopilotLauncher.tsx
import { Sparkles as Sparkles8 } from "lucide-react";
import { jsx as jsx89, jsxs as jsxs77 } from "react/jsx-runtime";
function useSafeT2() {
  try {
    return useT2();
  } catch {
    return null;
  }
}
var CopilotLauncher = ({
  variant = "header",
  className,
  label
}) => {
  const { open, isOpen } = useCopilot();
  const ctx = useSafeT2();
  const language = ctx?.language ?? "en";
  const t2 = ctx?.t ?? ((key) => key);
  const resolvedLabel = label ?? t2("nav:copilot");
  const handleClick = () => {
    open();
  };
  if (variant === "fab") {
    return /* @__PURE__ */ jsx89(TooltipProvider, { children: /* @__PURE__ */ jsxs77(Tooltip, { children: [
      /* @__PURE__ */ jsx89(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx89(
        "button",
        {
          type: "button",
          onClick: handleClick,
          "aria-label": resolvedLabel,
          "data-testid": "copilot-launcher-fab",
          className: cn(
            "fixed bottom-20 end-4 z-40",
            "h-12 w-12 rounded-full",
            "bg-primary text-primary-foreground shadow-lg",
            "flex items-center justify-center",
            "hover:bg-primary/90 transition-colors duration-fast ease-standard",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            isOpen && "ring-2 ring-primary/30",
            className
          ),
          children: /* @__PURE__ */ jsx89(Sparkles8, { className: "h-5 w-5", "aria-hidden": "true" })
        }
      ) }),
      /* @__PURE__ */ jsx89(
        TooltipContent,
        {
          side: language === "ar" ? "left" : "right",
          className: "text-xs",
          children: resolvedLabel
        }
      )
    ] }) });
  }
  return /* @__PURE__ */ jsxs77(
    Button,
    {
      variant: "ghost",
      size: "sm",
      onClick: handleClick,
      "aria-label": resolvedLabel,
      "aria-pressed": isOpen,
      "data-testid": "copilot-launcher-header",
      className: cn(
        "flex items-center gap-1.5 h-8 px-2 text-xs font-medium text-muted-foreground hover:text-foreground",
        isOpen && "text-primary hover:text-primary",
        className
      ),
      children: [
        /* @__PURE__ */ jsx89(Sparkles8, { className: "h-4 w-4", "aria-hidden": "true" }),
        /* @__PURE__ */ jsx89("span", { className: "hidden sm:inline", children: resolvedLabel })
      ]
    }
  );
};
CopilotLauncher.displayName = "CopilotLauncher";

// src/components/copilot/ChatThread.tsx
import { useRef as useRef19, useEffect as useEffect28 } from "react";
import { User as User2, Sparkles as Sparkles10 } from "lucide-react";

// src/components/copilot/StreamingMessage.tsx
import { Loader2 as Loader210, Sparkles as Sparkles9 } from "lucide-react";
import { jsx as jsx90, jsxs as jsxs78 } from "react/jsx-runtime";
var StreamingMessage = ({ text, isStreaming, language = "en", dir }) => {
  const isAR = language === "ar";
  const resolvedDir = dir ?? (isAR ? "rtl" : "ltr");
  if (!text && isStreaming) {
    return /* @__PURE__ */ jsxs78("div", { className: "flex items-center gap-2 px-3 py-2 bg-muted rounded-xl border border-border", children: [
      /* @__PURE__ */ jsx90(Loader210, { className: "w-3.5 h-3.5 animate-spin text-muted-foreground shrink-0" }),
      /* @__PURE__ */ jsx90("span", { className: "text-xs text-muted-foreground animate-pulse", children: isAR ? "\u062C\u0627\u0631\u064D \u0627\u0644\u062A\u0641\u0643\u064A\u0631..." : "Thinking..." })
    ] });
  }
  return /* @__PURE__ */ jsxs78(
    "div",
    {
      className: "bg-muted rounded-xl px-3 py-2 border border-border text-sm text-foreground",
      dir: resolvedDir,
      children: [
        /* @__PURE__ */ jsx90(MarkdownContent_default, { content: text, dir: resolvedDir, className: "max-w-none" }),
        isStreaming && /* @__PURE__ */ jsx90("span", { className: "inline-block w-1.5 h-3.5 bg-primary animate-pulse rounded-sm ms-0.5 align-middle" })
      ]
    }
  );
};
StreamingMessage.displayName = "StreamingMessage";
var StreamingMessage_default = StreamingMessage;
var StreamingSpinner = ({ language = "en" }) => {
  return /* @__PURE__ */ jsxs78("div", { className: "flex gap-2 items-start", children: [
    /* @__PURE__ */ jsx90("div", { className: "w-6 h-6 rounded-md bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shrink-0 mt-0.5", children: /* @__PURE__ */ jsx90(Sparkles9, { className: "w-3.5 h-3.5 text-primary-foreground" }) }),
    /* @__PURE__ */ jsx90("div", { className: "bg-muted rounded-xl px-3 py-2 border border-border", children: /* @__PURE__ */ jsx90("span", { className: "text-xs text-muted-foreground animate-pulse", children: language === "ar" ? "\u062C\u0627\u0631\u064D \u0627\u0644\u062A\u062D\u0645\u064A\u0644..." : "Loading..." }) })
  ] });
};
StreamingSpinner.displayName = "StreamingSpinner";

// src/components/copilot/ArtifactViewer.tsx
import { jsx as jsx91, jsxs as jsxs79 } from "react/jsx-runtime";
var MapOfEventsArtifact = ({ data, language = "en" }) => /* @__PURE__ */ jsxs79("div", { className: "rounded-lg border border-border bg-muted/40 p-3", children: [
  /* @__PURE__ */ jsx91("p", { className: "text-xs font-medium text-muted-foreground mb-2", children: language === "ar" ? "\u062E\u0631\u064A\u0637\u0629 \u0627\u0644\u0623\u062D\u062F\u0627\u062B" : "Map of Events" }),
  /* @__PURE__ */ jsx91("pre", { className: "text-xs text-foreground/80 overflow-auto max-h-48 whitespace-pre-wrap break-all", children: JSON.stringify(data, null, 2) })
] });
MapOfEventsArtifact.displayName = "MapOfEventsArtifact";
var TimelineArtifact = ({ data, language = "en" }) => /* @__PURE__ */ jsxs79("div", { className: "rounded-lg border border-border bg-muted/40 p-3", children: [
  /* @__PURE__ */ jsx91("p", { className: "text-xs font-medium text-muted-foreground mb-2", children: language === "ar" ? "\u0627\u0644\u062C\u062F\u0648\u0644 \u0627\u0644\u0632\u0645\u0646\u064A" : "Timeline" }),
  /* @__PURE__ */ jsx91("pre", { className: "text-xs text-foreground/80 overflow-auto max-h-48 whitespace-pre-wrap break-all", children: JSON.stringify(data, null, 2) })
] });
TimelineArtifact.displayName = "TimelineArtifact";
var NetworkGraphArtifact = ({ data, language = "en" }) => /* @__PURE__ */ jsxs79("div", { className: "rounded-lg border border-border bg-muted/40 p-3", children: [
  /* @__PURE__ */ jsx91("p", { className: "text-xs font-medium text-muted-foreground mb-2", children: language === "ar" ? "\u0631\u0633\u0645 \u0627\u0644\u0634\u0628\u0643\u0629" : "Network Graph" }),
  /* @__PURE__ */ jsx91("pre", { className: "text-xs text-foreground/80 overflow-auto max-h-48 whitespace-pre-wrap break-all", children: JSON.stringify(data, null, 2) })
] });
NetworkGraphArtifact.displayName = "NetworkGraphArtifact";
var KpiCardArtifact = ({ data, language = "en" }) => /* @__PURE__ */ jsxs79("div", { className: "rounded-lg border border-border bg-muted/40 p-3", children: [
  /* @__PURE__ */ jsx91("p", { className: "text-xs font-medium text-muted-foreground mb-2", children: language === "ar" ? "\u0645\u0624\u0634\u0631\u0627\u062A \u0627\u0644\u0623\u062F\u0627\u0621" : "KPI Card" }),
  /* @__PURE__ */ jsx91("pre", { className: "text-xs text-foreground/80 overflow-auto max-h-48 whitespace-pre-wrap break-all", children: JSON.stringify(data, null, 2) })
] });
KpiCardArtifact.displayName = "KpiCardArtifact";
var FallbackArtifact = ({ slug, data, language = "en" }) => /* @__PURE__ */ jsxs79("div", { className: "rounded-lg border border-dashed border-border bg-muted/30 p-3", children: [
  /* @__PURE__ */ jsx91("p", { className: "text-xs font-medium text-muted-foreground mb-1", children: language === "ar" ? `\u0645\u0643\u0648\u0651\u0646: ${slug}` : `Artifact: ${slug}` }),
  /* @__PURE__ */ jsx91("pre", { className: "text-xs text-foreground/70 overflow-auto max-h-48 whitespace-pre-wrap break-all", children: JSON.stringify(data, null, 2) })
] });
FallbackArtifact.displayName = "FallbackArtifact";
var ArtifactViewer = ({ artifact, language = "en", dir }) => {
  const resolvedDir = dir ?? (language === "ar" ? "rtl" : "ltr");
  const title = language === "ar" ? artifact.title_ar || artifact.title || artifact.controller_slug : artifact.title || artifact.controller_slug;
  return /* @__PURE__ */ jsxs79("div", { className: "space-y-1.5", dir: resolvedDir, children: [
    title && /* @__PURE__ */ jsx91("p", { className: "text-xs font-semibold text-foreground/70 px-0.5", children: title }),
    (() => {
      switch (artifact.controller_slug) {
        case "map-of-events":
          return /* @__PURE__ */ jsx91(MapOfEventsArtifact, { data: artifact.data, language });
        case "timeline":
          return /* @__PURE__ */ jsx91(TimelineArtifact, { data: artifact.data, language });
        case "network-graph":
          return /* @__PURE__ */ jsx91(NetworkGraphArtifact, { data: artifact.data, language });
        case "kpi-card":
          return /* @__PURE__ */ jsx91(KpiCardArtifact, { data: artifact.data, language });
        default:
          return /* @__PURE__ */ jsx91(FallbackArtifact, { slug: artifact.controller_slug, data: artifact.data, language });
      }
    })()
  ] });
};
ArtifactViewer.displayName = "ArtifactViewer";
var ArtifactViewer_default = ArtifactViewer;

// src/components/copilot/ChatThread.tsx
import { jsx as jsx92, jsxs as jsxs80 } from "react/jsx-runtime";
var AssistantAvatar = () => /* @__PURE__ */ jsx92("div", { className: "w-6 h-6 rounded-md bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shrink-0 mt-1", children: /* @__PURE__ */ jsx92(Sparkles10, { className: "w-3.5 h-3.5 text-primary-foreground" }) });
AssistantAvatar.displayName = "AssistantAvatar";
var UserAvatar = () => /* @__PURE__ */ jsx92("div", { className: "w-6 h-6 rounded-md bg-muted flex items-center justify-center shrink-0 mt-1", children: /* @__PURE__ */ jsx92(User2, { className: "w-3.5 h-3.5 text-muted-foreground" }) });
UserAvatar.displayName = "UserAvatar";
var ChatThread = ({
  messages,
  streamingText = "",
  isStreaming = false,
  language = "en",
  dir
}) => {
  const isRTL = dir === "rtl" || dir === void 0 && language === "ar";
  const bottomRef = useRef19(null);
  useEffect28(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages.length, streamingText]);
  const isEmpty = messages.length === 0 && !isStreaming;
  return /* @__PURE__ */ jsx92(ScrollArea, { className: "flex-1 px-4 py-3", children: /* @__PURE__ */ jsxs80("div", { className: "space-y-3 min-h-full", dir: isRTL ? "rtl" : "ltr", children: [
    isEmpty && /* @__PURE__ */ jsxs80("div", { className: "flex flex-col items-center justify-center py-16 gap-3", children: [
      /* @__PURE__ */ jsx92("div", { className: "w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center", children: /* @__PURE__ */ jsx92(Sparkles10, { className: "w-5 h-5 text-primary-foreground" }) }),
      /* @__PURE__ */ jsx92("p", { className: "text-sm text-muted-foreground text-center max-w-xs", children: language === "ar" ? "\u0627\u0633\u0623\u0644 \u0627\u0644\u0645\u0633\u0627\u0639\u062F \u0623\u064A \u0633\u0624\u0627\u0644 \u0648\u0633\u064A\u0631\u062F \u0628\u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u062A\u064A \u062A\u062D\u062A\u0627\u062C\u0647\u0627" : "Ask the copilot anything \u2014 it will answer with the information you need" })
    ] }),
    messages.map((msg) => {
      const text = language === "ar" ? msg.text_ar || msg.text_en : msg.text_en;
      const isUser = msg.role === "user";
      return /* @__PURE__ */ jsxs80(
        "div",
        {
          className: `flex gap-2 ${isUser ? isRTL ? "justify-start flex-row-reverse" : "justify-end" : isRTL ? "justify-end flex-row-reverse" : "justify-start"}`,
          children: [
            !isUser && !isRTL && /* @__PURE__ */ jsx92(AssistantAvatar, {}),
            isUser && isRTL && /* @__PURE__ */ jsx92(UserAvatar, {}),
            /* @__PURE__ */ jsxs80("div", { className: "max-w-[85%] space-y-1.5", children: [
              isUser ? /* @__PURE__ */ jsx92("div", { className: "rounded-xl px-3 py-2 bg-primary text-primary-foreground text-sm", children: text }) : /* @__PURE__ */ jsx92(StreamingMessage_default, { text, isStreaming: false, language, dir: isRTL ? "rtl" : "ltr" }),
              msg.artifacts && msg.artifacts.length > 0 && /* @__PURE__ */ jsx92("div", { className: "space-y-2", children: msg.artifacts.map((artifact, idx) => /* @__PURE__ */ jsx92(
                ArtifactViewer_default,
                {
                  artifact,
                  language,
                  dir: isRTL ? "rtl" : "ltr"
                },
                `${msg.id}-artifact-${idx}`
              )) }),
              msg.a2uiArtifacts && msg.a2uiArtifacts.length > 0 && /* @__PURE__ */ jsx92("div", { className: "space-y-2", children: msg.a2uiArtifacts.map((artifact, idx) => /* @__PURE__ */ jsx92(
                ArtifactRenderer,
                {
                  artifact,
                  language,
                  dir: isRTL ? "rtl" : "ltr"
                },
                `${msg.id}-a2ui-${idx}`
              )) })
            ] }),
            !isUser && isRTL && /* @__PURE__ */ jsx92(AssistantAvatar, {}),
            isUser && !isRTL && /* @__PURE__ */ jsx92(UserAvatar, {})
          ]
        },
        msg.id
      );
    }),
    (isStreaming || streamingText) && /* @__PURE__ */ jsxs80("div", { className: `flex gap-2 ${isRTL ? "justify-end flex-row-reverse" : "justify-start"}`, children: [
      !isRTL && /* @__PURE__ */ jsx92(AssistantAvatar, {}),
      /* @__PURE__ */ jsx92("div", { className: "max-w-[85%]", children: /* @__PURE__ */ jsx92(
        StreamingMessage_default,
        {
          text: streamingText,
          isStreaming,
          language,
          dir: isRTL ? "rtl" : "ltr"
        }
      ) }),
      isRTL && /* @__PURE__ */ jsx92(AssistantAvatar, {})
    ] }),
    /* @__PURE__ */ jsx92("div", { ref: bottomRef })
  ] }) });
};
ChatThread.displayName = "ChatThread";
var ChatThread_default = ChatThread;
export {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  AgentSteps_default as AgentSteps,
  Alert,
  AlertDescription,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertTitle,
  AppPageShell,
  AppSidebar,
  ArtifactActions,
  ArtifactCard,
  ArtifactChart,
  ArtifactClientCandidates,
  ArtifactClientDiffConfirm,
  ArtifactClientFieldPicker,
  ArtifactMarkdown,
  ArtifactPersonaStarters,
  ArtifactRenderer,
  ArtifactTable,
  ArtifactViewer_default as ArtifactViewer,
  AspectRatio,
  AuthCard_default as AuthCard,
  AuthErrorAlert_default as AuthErrorAlert,
  AuthFlow_default as AuthFlow,
  AuthStepHeader_default as AuthStepHeader,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  BrandingProvider,
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  Calendar,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardGrid,
  CardHeader,
  CardTitle,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
  ChartTooltip,
  ChartTooltipContent,
  ChatThread_default as ChatThread,
  Checkbox,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  ColorPicker,
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandInputPrimitive,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuPortal,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
  ContextualSkeleton,
  CopilotLauncher,
  CopilotProvider,
  DEFAULT_LAYERS,
  DEFAULT_LEGEND_GROUPS,
  DEFAULT_REGION_PRESETS,
  DataState,
  DataTable,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  DirectionalArrow,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  DynamicIcon,
  DynamicSection,
  EmptyState,
  EntityNetworkGraph,
  ErrorTrackingPage,
  EventMapPanel,
  FeedbackButton,
  FeedbackHub,
  FeedbackWidget,
  ForgotForm_default as ForgotForm,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  IconPicker,
  Input,
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
  IssueDetail,
  IssuesList,
  LANG_COOKIE_NAME,
  Label,
  LanguageProvider,
  LinkifyText,
  LockScreen_default as LockScreen,
  LoginForm_default as LoginForm,
  LogsView,
  MARKER_COLORS,
  MARKER_LABELS,
  MapLayersPanel,
  MapLegend,
  MapPanel,
  MapView,
  MarkdownContent_default as MarkdownContent,
  MarkdownEditor,
  MarkdownRenderer,
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarPortal,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
  MiniBarChart,
  MotorFeedbackLauncher,
  NativeSelect,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  NestedStepsEditor,
  NetworkGraph,
  OTPBoxGroup_default as OTPBoxGroup,
  PIPELINE_STAGES,
  PageHeader,
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PasswordInput_default as PasswordInput,
  PasswordLockScreen_default as PasswordLockScreen,
  PasswordStrengthMeter_default as PasswordStrengthMeter,
  PluginAppearanceSection,
  PluginCard,
  PluginDetailLayout,
  PluginHero,
  PluginHeroSkeleton,
  PluginPageHeader,
  PluginSectionCard,
  PluginSparkline,
  Popover,
  PopoverContent,
  PopoverTrigger,
  ProfileView,
  Progress,
  RadioGroup,
  RadioGroupItem,
  ResetForm_default as ResetForm,
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
  RouteProgress,
  SENTRA_BRAND,
  STEP_FIELD_REGISTRY,
  ScrollArea,
  ScrollBar,
  SectionBoard,
  SectionSkeleton,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  sentra_loading_default as SentraLoading,
  Separator,
  ServiceUnavailable,
  SessionExpired,
  SeverityChip,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  Skeleton,
  Slider,
  SourceBadge,
  StatCard,
  StatusBadge,
  StepOptionsDialog,
  StreamingMessage_default as StreamingMessage,
  Switch,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  TestRunPanel,
  Textarea,
  Toaster,
  Toggle,
  ToggleGroup,
  ToggleGroupItem,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  TwoFAForm_default as TwoFAForm,
  UnifiedCopilotDock_default as UnifiedCopilotDock,
  ViewToggle,
  Workflow,
  WorkflowEditor,
  WorkflowPipeline,
  WorkflowStepNode,
  applyBrand,
  badgeVariants,
  buttonVariants,
  cn,
  computeRules,
  computeScore,
  feedbackButtonVariants,
  hexToHSL,
  isHSL,
  isValidColor,
  levelTone,
  navigationMenuTriggerStyle,
  nudgeL,
  resolveIcon,
  statValueVariants,
  statusBadgeVariants,
  toHSLSafe,
  toast,
  toggleVariants,
  useBrand,
  useCopilot,
  useFormField,
  useLanguage,
  useOptionalSidebar,
  useSidebar,
  useT2 as useT,
  useTranslation
};
//# sourceMappingURL=index.js.map