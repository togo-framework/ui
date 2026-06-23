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
  navigationMenuTriggerStyle,
  toast,
  toggleVariants,
  useFormField,
  useOptionalSidebar,
  useSidebar
} from "./chunk-6W427NJL.js";

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
import { createContext, useContext, useEffect as useEffect9 } from "react";
import { jsx as jsx30 } from "react/jsx-runtime";
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
  useEffect9(() => {
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
  return /* @__PURE__ */ jsx30(BrandContext.Provider, { value: contextValue, children });
};
BrandingProvider.displayName = "BrandingProvider";

// src/i18n/LanguageProvider.tsx
import {
  createContext as createContext2,
  useContext as useContext2,
  useState as useState15,
  useCallback as useCallback5,
  useEffect as useEffect10
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
import { jsx as jsx31 } from "react/jsx-runtime";
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
  const [language, setLanguageState] = useState15(initialLanguage);
  const applyDirToDocument = useCallback5((l) => {
    if (typeof document === "undefined") return;
    document.documentElement.dir = l === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = l;
  }, []);
  useEffect10(() => {
    const cached = readCachedLang();
    const resolved = cached ?? initialLanguage;
    if (resolved !== language) setLanguageState(resolved);
    applyDirToDocument(resolved);
    writeLangCookie(resolved);
    if (i18n_default.language !== resolved) {
      i18n_default.changeLanguage(resolved);
    }
  }, []);
  const setLanguage = useCallback5(
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
  const seedLanguage = useCallback5(
    (l) => {
      if (readCachedLang()) return;
      setLanguageState(l);
      applyDirToDocument(l);
      i18n_default.changeLanguage(l);
    },
    [applyDirToDocument]
  );
  const t2 = useCallback5(
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
  return /* @__PURE__ */ jsx31(LanguageContext.Provider, { value, children });
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
export {
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
  AppPageShell,
  AppSidebar,
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
  EmptyState,
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
  Input,
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
  LANG_COOKIE_NAME,
  Label,
  LanguageProvider,
  LinkifyText,
  LockScreen_default as LockScreen,
  LoginForm_default as LoginForm,
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
  NativeSelect,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  OTPBoxGroup_default as OTPBoxGroup,
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
  ServiceUnavailable,
  SessionExpired,
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
  StatCard,
  StatusBadge,
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
  TwoFAForm_default as TwoFAForm,
  ViewToggle,
  applyBrand,
  badgeVariants,
  buttonVariants,
  cn,
  computeRules,
  computeScore,
  hexToHSL,
  isHSL,
  isValidColor,
  navigationMenuTriggerStyle,
  nudgeL,
  statValueVariants,
  statusBadgeVariants,
  toHSLSafe,
  toast,
  toggleVariants,
  useBrand,
  useFormField,
  useLanguage,
  useOptionalSidebar,
  useSidebar,
  useT2 as useT,
  useTranslation
};
//# sourceMappingURL=index.js.map