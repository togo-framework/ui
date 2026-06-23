// src/components/ui/accordion.tsx
import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

// src/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/components/ui/accordion.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var Accordion = AccordionPrimitive.Root;
var AccordionItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Item, { ref, className: cn("border-b", className), ...props }));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxs(
  AccordionPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between rounded-sm py-4 font-medium transition-all duration-fast ease-standard hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 shrink-0 transition-transform duration-base ease-standard" })
    ]
  }
) }));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
var AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(
  AccordionPrimitive.Content,
  {
    ref,
    className: "overflow-hidden text-sm transition-all duration-fast ease-standard data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

// src/components/ui/alert.tsx
import * as React2 from "react";
import { cva } from "class-variance-authority";
import { jsx as jsx2 } from "react/jsx-runtime";
var alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 rtl:[&>svg~*]:pl-0 rtl:[&>svg~*]:pr-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 rtl:[&>svg]:left-auto rtl:[&>svg]:right-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var Alert = React2.forwardRef(({ className, variant, ...props }, ref) => /* @__PURE__ */ jsx2("div", { ref, role: "alert", className: cn(alertVariants({ variant }), className), ...props }));
Alert.displayName = "Alert";
var AlertTitle = React2.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx2("h5", { ref, className: cn("mb-1 font-medium leading-none tracking-tight", className), ...props })
);
AlertTitle.displayName = "AlertTitle";
var AlertDescription = React2.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx2("div", { ref, className: cn("text-sm [&_p]:leading-relaxed", className), ...props })
);
AlertDescription.displayName = "AlertDescription";

// src/components/ui/alert-dialog.tsx
import * as React4 from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

// src/components/ui/button.tsx
import * as React3 from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva as cva2 } from "class-variance-authority";
import { jsx as jsx3 } from "react/jsx-runtime";
var buttonVariants = cva2(
  // Prism v2: token-driven motion (duration-fast/ease-standard), tactile press
  // feedback (active:scale), elevation on solid variants, token focus ring.
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-fast ease-standard active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:shadow-md",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 hover:shadow-md",
        outline: "border border-input bg-background shadow-xs hover:bg-primary/10 hover:text-primary hover:border-primary/40",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-primary/10 hover:text-primary",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var Button = React3.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx3(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";

// src/components/ui/alert-dialog.tsx
import { jsx as jsx4, jsxs as jsxs2 } from "react/jsx-runtime";
var AlertDialog = AlertDialogPrimitive.Root;
var AlertDialogTrigger = AlertDialogPrimitive.Trigger;
var AlertDialogPortal = AlertDialogPrimitive.Portal;
var AlertDialogOverlay = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx4(
  AlertDialogPrimitive.Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;
var AlertDialogContent = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs2(AlertDialogPortal, { children: [
  /* @__PURE__ */ jsx4(AlertDialogOverlay, {}),
  /* @__PURE__ */ jsx4(
    AlertDialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props
    }
  )
] }));
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;
var AlertDialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsx4("div", { className: cn("flex flex-col space-y-2 text-center sm:text-start", className), ...props });
AlertDialogHeader.displayName = "AlertDialogHeader";
var AlertDialogFooter = ({ className, ...props }) => /* @__PURE__ */ jsx4("div", { className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className), ...props });
AlertDialogFooter.displayName = "AlertDialogFooter";
var AlertDialogTitle = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx4(AlertDialogPrimitive.Title, { ref, className: cn("text-lg font-semibold", className), ...props }));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;
var AlertDialogDescription = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx4(AlertDialogPrimitive.Description, { ref, className: cn("text-sm text-muted-foreground", className), ...props }));
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;
var AlertDialogAction = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx4(AlertDialogPrimitive.Action, { ref, className: cn(buttonVariants(), className), ...props }));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;
var AlertDialogCancel = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx4(
  AlertDialogPrimitive.Cancel,
  {
    ref,
    className: cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className),
    ...props
  }
));
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;

// src/components/ui/aspect-ratio.tsx
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";
var AspectRatio = AspectRatioPrimitive.Root;

// src/components/ui/avatar.tsx
import * as React5 from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { jsx as jsx5 } from "react/jsx-runtime";
var Avatar = React5.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx5(
  AvatarPrimitive.Root,
  {
    ref,
    className: cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className),
    ...props
  }
));
Avatar.displayName = AvatarPrimitive.Root.displayName;
var AvatarImage = React5.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx5(AvatarPrimitive.Image, { ref, className: cn("aspect-square h-full w-full", className), ...props }));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
var AvatarFallback = React5.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx5(
  AvatarPrimitive.Fallback,
  {
    ref,
    className: cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className),
    ...props
  }
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

// src/components/ui/badge.tsx
import { cva as cva3 } from "class-variance-authority";
import { jsx as jsx6 } from "react/jsx-runtime";
var badgeVariants = cva3(
  "inline-flex items-center gap-1 whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-all duration-fast ease-standard focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 [&_svg]:size-3 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var Badge = ({ className, variant, ...props }) => {
  return /* @__PURE__ */ jsx6("div", { className: cn(badgeVariants({ variant }), className), ...props });
};
Badge.displayName = "Badge";

// src/components/ui/breadcrumb.tsx
import * as React6 from "react";
import { Slot as Slot2 } from "@radix-ui/react-slot";
import { ChevronRight, MoreHorizontal } from "lucide-react";
import { jsx as jsx7, jsxs as jsxs3 } from "react/jsx-runtime";
var Breadcrumb = React6.forwardRef(({ ...props }, ref) => /* @__PURE__ */ jsx7("nav", { ref, "aria-label": "breadcrumb", ...props }));
Breadcrumb.displayName = "Breadcrumb";
var BreadcrumbList = React6.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx7("ol", { ref, className: cn("flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5", className), ...props })
);
BreadcrumbList.displayName = "BreadcrumbList";
var BreadcrumbItem = React6.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx7("li", { ref, className: cn("inline-flex items-center gap-1.5", className), ...props })
);
BreadcrumbItem.displayName = "BreadcrumbItem";
var BreadcrumbLink = React6.forwardRef(
  ({ asChild, className, ...props }, ref) => {
    const Comp = asChild ? Slot2 : "a";
    return /* @__PURE__ */ jsx7(Comp, { ref, className: cn("rounded-sm transition-colors duration-fast ease-standard hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className), ...props });
  }
);
BreadcrumbLink.displayName = "BreadcrumbLink";
var BreadcrumbPage = React6.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx7("span", { ref, role: "link", "aria-disabled": "true", "aria-current": "page", className: cn("font-normal text-foreground", className), ...props })
);
BreadcrumbPage.displayName = "BreadcrumbPage";
var BreadcrumbSeparator = ({ children, className, ...props }) => /* @__PURE__ */ jsx7("li", { role: "presentation", "aria-hidden": "true", className: cn("[&>svg]:size-3.5 [&>svg]:rtl:rotate-180", className), ...props, children: children ?? /* @__PURE__ */ jsx7(ChevronRight, {}) });
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
var BreadcrumbEllipsis = ({ className, ...props }) => /* @__PURE__ */ jsxs3("span", { role: "presentation", "aria-hidden": "true", className: cn("flex h-9 w-9 items-center justify-center", className), ...props, children: [
  /* @__PURE__ */ jsx7(MoreHorizontal, { className: "h-4 w-4" }),
  /* @__PURE__ */ jsx7("span", { className: "sr-only", children: "More" })
] });
BreadcrumbEllipsis.displayName = "BreadcrumbEllipsis";

// src/components/ui/calendar.tsx
import { ChevronLeft, ChevronRight as ChevronRight2 } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { jsx as jsx8 } from "react/jsx-runtime";
var Calendar = ({ className, classNames, showOutsideDays = true, ...props }) => {
  return /* @__PURE__ */ jsx8(
    DayPicker,
    {
      showOutsideDays,
      className: cn("p-3", className),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1 rtl:left-auto rtl:right-1",
        nav_button_next: "absolute right-1 rtl:right-auto rtl:left-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md rtl:[&:has([aria-selected].day-range-end)]:rounded-r-none rtl:[&:has([aria-selected].day-range-end)]:rounded-l-md [&:has([aria-selected].day-outside)]:bg-primary/10 [&:has([aria-selected])]:bg-primary/10 first:[&:has([aria-selected])]:rounded-l-md rtl:first:[&:has([aria-selected])]:rounded-l-none rtl:first:[&:has([aria-selected])]:rounded-r-md last:[&:has([aria-selected])]:rounded-r-md rtl:last:[&:has([aria-selected])]:rounded-r-none rtl:last:[&:has([aria-selected])]:rounded-l-md focus-within:relative focus-within:z-20",
        day: cn(buttonVariants({ variant: "ghost" }), "h-9 w-9 p-0 font-normal aria-selected:opacity-100"),
        day_range_end: "day-range-end",
        day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-primary/10 text-accent-foreground",
        day_outside: "day-outside text-muted-foreground opacity-50 aria-selected:bg-primary/10 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-primary/10 aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames
      },
      components: {
        IconLeft: ({ ..._props }) => /* @__PURE__ */ jsx8(ChevronLeft, { className: "h-4 w-4 rtl:rotate-180" }),
        IconRight: ({ ..._props }) => /* @__PURE__ */ jsx8(ChevronRight2, { className: "h-4 w-4 rtl:rotate-180" })
      },
      ...props
    }
  );
};
Calendar.displayName = "Calendar";

// src/components/ui/card.tsx
import * as React7 from "react";
import { jsx as jsx9 } from "react/jsx-runtime";
var Card = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx9("div", { ref, className: cn("rounded-lg border bg-card text-card-foreground shadow-sm transition-shadow duration-base ease-standard", className), ...props }));
Card.displayName = "Card";
var CardHeader = React7.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx9("div", { ref, className: cn("flex flex-col space-y-1.5 p-6", className), ...props })
);
CardHeader.displayName = "CardHeader";
var CardTitle = React7.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx9("h3", { ref, className: cn("text-2xl font-semibold leading-none tracking-tight", className), ...props })
);
CardTitle.displayName = "CardTitle";
var CardDescription = React7.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx9("p", { ref, className: cn("text-sm text-muted-foreground", className), ...props })
);
CardDescription.displayName = "CardDescription";
var CardContent = React7.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx9("div", { ref, className: cn("p-6 pt-0", className), ...props })
);
CardContent.displayName = "CardContent";
var CardFooter = React7.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx9("div", { ref, className: cn("flex items-center p-6 pt-0", className), ...props })
);
CardFooter.displayName = "CardFooter";

// src/components/ui/carousel.tsx
import * as React8 from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { jsx as jsx10, jsxs as jsxs4 } from "react/jsx-runtime";
var CarouselContext = React8.createContext(null);
var useCarousel = () => {
  const context = React8.useContext(CarouselContext);
  if (!context) throw new Error("useCarousel must be used within a <Carousel />");
  return context;
};
var Carousel = React8.forwardRef(
  ({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
    const [carouselRef, api] = useEmblaCarousel({ ...opts, axis: orientation === "horizontal" ? "x" : "y" }, plugins);
    const [canScrollPrev, setCanScrollPrev] = React8.useState(false);
    const [canScrollNext, setCanScrollNext] = React8.useState(false);
    const onSelect = React8.useCallback((api2) => {
      if (!api2) return;
      setCanScrollPrev(api2.canScrollPrev());
      setCanScrollNext(api2.canScrollNext());
    }, []);
    const scrollPrev = React8.useCallback(() => {
      api?.scrollPrev();
    }, [api]);
    const scrollNext = React8.useCallback(() => {
      api?.scrollNext();
    }, [api]);
    const handleKeyDown = React8.useCallback(
      (event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );
    React8.useEffect(() => {
      if (!api || !setApi) return;
      setApi(api);
    }, [api, setApi]);
    React8.useEffect(() => {
      if (!api) return;
      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);
      return () => {
        api?.off("select", onSelect);
      };
    }, [api, onSelect]);
    return /* @__PURE__ */ jsx10(
      CarouselContext.Provider,
      {
        value: { carouselRef, api, opts, orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"), scrollPrev, scrollNext, canScrollPrev, canScrollNext },
        children: /* @__PURE__ */ jsx10("div", { ref, onKeyDownCapture: handleKeyDown, className: cn("relative", className), role: "region", "aria-roledescription": "carousel", ...props, children })
      }
    );
  }
);
Carousel.displayName = "Carousel";
var CarouselContent = React8.forwardRef(
  ({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();
    return /* @__PURE__ */ jsx10("div", { ref: carouselRef, className: "overflow-hidden", children: /* @__PURE__ */ jsx10("div", { ref, className: cn("flex", orientation === "horizontal" ? "-ms-4" : "-mt-4 flex-col", className), ...props }) });
  }
);
CarouselContent.displayName = "CarouselContent";
var CarouselItem = React8.forwardRef(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarousel();
    return /* @__PURE__ */ jsx10("div", { ref, role: "group", "aria-roledescription": "slide", className: cn("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "ps-4" : "pt-4", className), ...props });
  }
);
CarouselItem.displayName = "CarouselItem";
var CarouselPrevious = React8.forwardRef(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();
    return /* @__PURE__ */ jsxs4(Button, { ref, variant, size, className: cn("absolute h-8 w-8 rounded-full", orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", className), disabled: !canScrollPrev, onClick: scrollPrev, ...props, children: [
      /* @__PURE__ */ jsx10(ArrowLeft, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsx10("span", { className: "sr-only", children: "Previous slide" })
    ] });
  }
);
CarouselPrevious.displayName = "CarouselPrevious";
var CarouselNext = React8.forwardRef(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();
    return /* @__PURE__ */ jsxs4(Button, { ref, variant, size, className: cn("absolute h-8 w-8 rounded-full", orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", className), disabled: !canScrollNext, onClick: scrollNext, ...props, children: [
      /* @__PURE__ */ jsx10(ArrowRight, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsx10("span", { className: "sr-only", children: "Next slide" })
    ] });
  }
);
CarouselNext.displayName = "CarouselNext";

// src/components/ui/chart.tsx
import * as React9 from "react";
import * as RechartsPrimitive from "recharts";
import { Fragment, jsx as jsx11, jsxs as jsxs5 } from "react/jsx-runtime";
var THEMES = { light: "", dark: ".dark" };
var ChartContext = React9.createContext(null);
var useChart = () => {
  const context = React9.useContext(ChartContext);
  if (!context) throw new Error("useChart must be used within a <ChartContainer />");
  return context;
};
var ChartContainer = React9.forwardRef(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React9.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;
  return /* @__PURE__ */ jsx11(ChartContext.Provider, { value: { config }, children: /* @__PURE__ */ jsxs5(
    "div",
    {
      "data-chart": chartId,
      ref,
      className: cn("flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none", className),
      ...props,
      children: [
        /* @__PURE__ */ jsx11(ChartStyle, { id: chartId, config }),
        /* @__PURE__ */ jsx11(RechartsPrimitive.ResponsiveContainer, { children })
      ]
    }
  ) });
});
ChartContainer.displayName = "Chart";
var ChartStyle = ({ id, config }) => {
  const colorConfig = Object.entries(config).filter(([, c]) => c.theme || c.color);
  if (!colorConfig.length) return null;
  return /* @__PURE__ */ jsx11("style", { dangerouslySetInnerHTML: {
    __html: Object.entries(THEMES).map(
      ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig.map(([key, itemConfig]) => {
        const color = itemConfig.theme?.[theme] || itemConfig.color;
        return color ? `  --color-${key}: ${color};` : null;
      }).join("\n")}
}`
    ).join("\n")
  } });
};
var ChartTooltip = RechartsPrimitive.Tooltip;
var ChartTooltipContent = React9.forwardRef(({ active, payload, className, indicator = "dot", hideLabel = false, hideIndicator = false, label, labelFormatter, labelClassName, formatter, color, nameKey, labelKey }, ref) => {
  const { config } = useChart();
  const tooltipLabel = React9.useMemo(() => {
    if (hideLabel || !payload?.length) return null;
    const [item] = payload;
    const key = `${labelKey || item.dataKey || item.name || "value"}`;
    const itemConfig = getPayloadConfigFromPayload(config, item, key);
    const value = !labelKey && typeof label === "string" ? config[label]?.label || label : itemConfig?.label;
    if (labelFormatter) return /* @__PURE__ */ jsx11("div", { className: cn("font-medium", labelClassName), children: labelFormatter(value, payload) });
    if (!value) return null;
    return /* @__PURE__ */ jsx11("div", { className: cn("font-medium", labelClassName), children: value });
  }, [label, labelFormatter, payload, hideLabel, labelClassName, config, labelKey]);
  if (!active || !payload?.length) return null;
  const nestLabel = payload.length === 1 && indicator !== "dot";
  return /* @__PURE__ */ jsxs5("div", { ref, className: cn("grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl", className), children: [
    !nestLabel ? tooltipLabel : null,
    /* @__PURE__ */ jsx11("div", { className: "grid gap-1.5", children: payload.map((item, index) => {
      const key = `${nameKey || item.name || item.dataKey || "value"}`;
      const itemConfig = getPayloadConfigFromPayload(config, item, key);
      const indicatorColor = color || item.payload.fill || item.color;
      return /* @__PURE__ */ jsx11("div", { className: cn("flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground", indicator === "dot" && "items-center"), children: formatter && item?.value !== void 0 && item.name ? formatter(item.value, item.name, item, index, item.payload) : /* @__PURE__ */ jsxs5(Fragment, { children: [
        itemConfig?.icon ? /* @__PURE__ */ jsx11(itemConfig.icon, {}) : !hideIndicator && /* @__PURE__ */ jsx11("div", { className: cn("shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]", { "h-2.5 w-2.5": indicator === "dot", "w-1": indicator === "line", "w-0 border-[1.5px] border-dashed bg-transparent": indicator === "dashed", "my-0.5": nestLabel && indicator === "dashed" }), style: { "--color-bg": indicatorColor, "--color-border": indicatorColor } }),
        /* @__PURE__ */ jsxs5("div", { className: cn("flex flex-1 justify-between leading-none", nestLabel ? "items-end" : "items-center"), children: [
          /* @__PURE__ */ jsxs5("div", { className: "grid gap-1.5", children: [
            nestLabel ? tooltipLabel : null,
            /* @__PURE__ */ jsx11("span", { className: "text-muted-foreground", children: itemConfig?.label || item.name })
          ] }),
          item.value && /* @__PURE__ */ jsx11("span", { className: "font-mono font-medium tabular-nums text-foreground", children: item.value.toLocaleString() })
        ] })
      ] }) }, item.dataKey);
    }) })
  ] });
});
ChartTooltipContent.displayName = "ChartTooltip";
var ChartLegend = RechartsPrimitive.Legend;
var ChartLegendContent = React9.forwardRef(({ className, hideIcon = false, payload, verticalAlign = "bottom", nameKey }, ref) => {
  const { config } = useChart();
  if (!payload?.length) return null;
  return /* @__PURE__ */ jsx11("div", { ref, className: cn("flex items-center justify-center gap-4", verticalAlign === "top" ? "pb-3" : "pt-3", className), children: payload.map((item) => {
    const key = `${nameKey || item.dataKey || "value"}`;
    const itemConfig = getPayloadConfigFromPayload(config, item, key);
    return /* @__PURE__ */ jsxs5("div", { className: cn("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"), children: [
      itemConfig?.icon && !hideIcon ? /* @__PURE__ */ jsx11(itemConfig.icon, {}) : /* @__PURE__ */ jsx11("div", { className: "h-2 w-2 shrink-0 rounded-[2px]", style: { backgroundColor: item.color } }),
      itemConfig?.label
    ] }, item.value);
  }) });
});
ChartLegendContent.displayName = "ChartLegend";
function getPayloadConfigFromPayload(config, payload, key) {
  if (typeof payload !== "object" || payload === null) return void 0;
  const payloadPayload = "payload" in payload && typeof payload.payload === "object" && payload.payload !== null ? payload.payload : void 0;
  let configLabelKey = key;
  if (key in payload && typeof payload[key] === "string") {
    configLabelKey = payload[key];
  } else if (payloadPayload && key in payloadPayload && typeof payloadPayload[key] === "string") {
    configLabelKey = payloadPayload[key];
  }
  return configLabelKey in config ? config[configLabelKey] : config[key];
}

// src/components/ui/checkbox.tsx
import * as React10 from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { jsx as jsx12 } from "react/jsx-runtime";
var Checkbox = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx12(
  CheckboxPrimitive.Root,
  {
    ref,
    className: cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background transition-all duration-fast ease-standard hover:border-ring/50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx12(CheckboxPrimitive.Indicator, { className: cn("flex items-center justify-center text-current"), children: /* @__PURE__ */ jsx12(Check, { className: "h-4 w-4 transition-transform duration-fast ease-standard" }) })
  }
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

// src/components/ui/collapsible.tsx
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
var Collapsible = CollapsiblePrimitive.Root;
var CollapsibleTrigger2 = CollapsiblePrimitive.CollapsibleTrigger;
var CollapsibleContent2 = CollapsiblePrimitive.CollapsibleContent;

// src/components/ui/command.tsx
import * as React12 from "react";
import { Command as CommandPrimitive } from "cmdk";
import { Search } from "lucide-react";

// src/components/ui/dialog.tsx
import * as React11 from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { jsx as jsx13, jsxs as jsxs6 } from "react/jsx-runtime";
var Dialog = DialogPrimitive.Root;
var DialogTrigger = DialogPrimitive.Trigger;
var DialogPortal = DialogPrimitive.Portal;
var DialogClose = DialogPrimitive.Close;
var DialogOverlay = React11.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx13(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
var DialogContent = React11.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs6(DialogPortal, { children: [
  /* @__PURE__ */ jsx13(DialogOverlay, {}),
  /* @__PURE__ */ jsxs6(
    DialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxs6(DialogPrimitive.Close, { className: "absolute right-4 rtl:right-auto rtl:left-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity duration-fast ease-standard data-[state=open]:bg-primary/10 data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none", children: [
          /* @__PURE__ */ jsx13(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx13("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = DialogPrimitive.Content.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsx13("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-start", className), ...props });
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ jsx13("div", { className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className), ...props });
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React11.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx13(
  DialogPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
var DialogDescription = React11.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx13(DialogPrimitive.Description, { ref, className: cn("text-sm text-muted-foreground", className), ...props }));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

// src/components/ui/command.tsx
import { jsx as jsx14, jsxs as jsxs7 } from "react/jsx-runtime";
var Command = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx14(
  CommandPrimitive,
  {
    ref,
    className: cn("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", className),
    ...props
  }
));
Command.displayName = CommandPrimitive.displayName;
var CommandDialog = ({ children, ...props }) => /* @__PURE__ */ jsx14(Dialog, { ...props, children: /* @__PURE__ */ jsx14(DialogContent, { className: "overflow-hidden p-0 shadow-lg", children: /* @__PURE__ */ jsx14(Command, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children }) }) });
var CommandInput = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs7("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ jsx14(Search, { className: "me-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ jsx14(
    CommandPrimitive.Input,
    {
      ref,
      className: cn("flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", className),
      ...props
    }
  )
] }));
CommandInput.displayName = CommandPrimitive.Input.displayName;
var CommandInputPrimitive = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx14(
  CommandPrimitive.Input,
  {
    ref,
    className: cn("flex h-full w-full rounded-md bg-transparent text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", className),
    ...props
  }
));
CommandInputPrimitive.displayName = "CommandInputPrimitive";
var CommandList = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx14(CommandPrimitive.List, { ref, className: cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className), ...props }));
CommandList.displayName = CommandPrimitive.List.displayName;
var CommandEmpty = React12.forwardRef((props, ref) => /* @__PURE__ */ jsx14(CommandPrimitive.Empty, { ref, className: "py-6 text-center text-sm", ...props }));
CommandEmpty.displayName = CommandPrimitive.Empty.displayName;
var CommandGroup = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx14(CommandPrimitive.Group, { ref, className: cn("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", className), ...props }));
CommandGroup.displayName = CommandPrimitive.Group.displayName;
var CommandSeparator = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx14(CommandPrimitive.Separator, { ref, className: cn("-mx-1 h-px bg-border", className), ...props }));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;
var CommandItem = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx14(CommandPrimitive.Item, { ref, className: cn("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-primary/10 data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50", className), ...props }));
CommandItem.displayName = CommandPrimitive.Item.displayName;
var CommandShortcut = ({ className, ...props }) => /* @__PURE__ */ jsx14("span", { className: cn("ms-auto text-xs tracking-widest text-muted-foreground", className), ...props });
CommandShortcut.displayName = "CommandShortcut";

// src/components/ui/context-menu.tsx
import * as React13 from "react";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { Check as Check2, ChevronRight as ChevronRight3, Circle } from "lucide-react";
import { jsx as jsx15, jsxs as jsxs8 } from "react/jsx-runtime";
var ContextMenu = ContextMenuPrimitive.Root;
var ContextMenuTrigger = ContextMenuPrimitive.Trigger;
var ContextMenuGroup = ContextMenuPrimitive.Group;
var ContextMenuPortal = ContextMenuPrimitive.Portal;
var ContextMenuSub = ContextMenuPrimitive.Sub;
var ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;
var ContextMenuSubTrigger = React13.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxs8(ContextMenuPrimitive.SubTrigger, { ref, className: cn("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-primary/10 data-[state=open]:text-accent-foreground focus:bg-primary/10 focus:text-primary", inset && "ps-8", className), ...props, children: [
  children,
  /* @__PURE__ */ jsx15(ChevronRight3, { className: "ms-auto h-4 w-4 rtl:rotate-180" })
] }));
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;
var ContextMenuSubContent = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx15(ContextMenuPrimitive.SubContent, { ref, className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className), ...props }));
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName;
var ContextMenuContent = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx15(ContextMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx15(ContextMenuPrimitive.Content, { ref, className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className), ...props }) }));
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;
var ContextMenuItem = React13.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx15(ContextMenuPrimitive.Item, { ref, className: cn("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-primary/10 focus:text-primary", inset && "ps-8", className), ...props }));
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;
var ContextMenuCheckboxItem = React13.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxs8(ContextMenuPrimitive.CheckboxItem, { ref, className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 ps-8 pe-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-primary/10 focus:text-primary", className), checked, ...props, children: [
  /* @__PURE__ */ jsx15("span", { className: "absolute start-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx15(ContextMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx15(Check2, { className: "h-4 w-4" }) }) }),
  children
] }));
ContextMenuCheckboxItem.displayName = ContextMenuPrimitive.CheckboxItem.displayName;
var ContextMenuRadioItem = React13.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs8(ContextMenuPrimitive.RadioItem, { ref, className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 ps-8 pe-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-primary/10 focus:text-primary", className), ...props, children: [
  /* @__PURE__ */ jsx15("span", { className: "absolute start-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx15(ContextMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx15(Circle, { className: "h-2 w-2 fill-current" }) }) }),
  children
] }));
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;
var ContextMenuLabel = React13.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx15(ContextMenuPrimitive.Label, { ref, className: cn("px-2 py-1.5 text-sm font-semibold text-foreground", inset && "ps-8", className), ...props }));
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;
var ContextMenuSeparator = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx15(ContextMenuPrimitive.Separator, { ref, className: cn("-mx-1 my-1 h-px bg-border", className), ...props }));
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName;
var ContextMenuShortcut = ({ className, ...props }) => /* @__PURE__ */ jsx15("span", { className: cn("ms-auto text-xs tracking-widest text-muted-foreground", className), ...props });
ContextMenuShortcut.displayName = "ContextMenuShortcut";

// src/components/ui/directional-arrow.tsx
import { ArrowLeft as ArrowLeft2, ArrowRight as ArrowRight2 } from "lucide-react";
import { jsx as jsx16 } from "react/jsx-runtime";
var DirectionalArrow = ({ isRTL = false, size = 16, className }) => {
  const IconComponent = isRTL ? ArrowLeft2 : ArrowRight2;
  return /* @__PURE__ */ jsx16(IconComponent, { size, className, "aria-hidden": "true" });
};
DirectionalArrow.displayName = "DirectionalArrow";

// src/components/ui/drawer.tsx
import * as React14 from "react";
import { Drawer as DrawerPrimitive } from "vaul";
import { jsx as jsx17, jsxs as jsxs9 } from "react/jsx-runtime";
var Drawer = ({ shouldScaleBackground = true, ...props }) => /* @__PURE__ */ jsx17(DrawerPrimitive.Root, { shouldScaleBackground, ...props });
Drawer.displayName = "Drawer";
var DrawerTrigger = DrawerPrimitive.Trigger;
var DrawerPortal = DrawerPrimitive.Portal;
var DrawerClose = DrawerPrimitive.Close;
var DrawerOverlay = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx17(DrawerPrimitive.Overlay, { ref, className: cn("fixed inset-0 z-50 bg-black/80", className), ...props }));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;
var DrawerContent = React14.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs9(DrawerPortal, { children: [
  /* @__PURE__ */ jsx17(DrawerOverlay, {}),
  /* @__PURE__ */ jsxs9(
    DrawerPrimitive.Content,
    {
      ref,
      className: cn("fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background", className),
      ...props,
      children: [
        /* @__PURE__ */ jsx17("div", { className: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" }),
        children
      ]
    }
  )
] }));
DrawerContent.displayName = "DrawerContent";
var DrawerHeader = ({ className, ...props }) => /* @__PURE__ */ jsx17("div", { className: cn("grid gap-1.5 p-4 text-center sm:text-start", className), ...props });
DrawerHeader.displayName = "DrawerHeader";
var DrawerFooter = ({ className, ...props }) => /* @__PURE__ */ jsx17("div", { className: cn("mt-auto flex flex-col gap-2 p-4", className), ...props });
DrawerFooter.displayName = "DrawerFooter";
var DrawerTitle = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx17(DrawerPrimitive.Title, { ref, className: cn("text-lg font-semibold leading-none tracking-tight", className), ...props }));
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;
var DrawerDescription = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx17(DrawerPrimitive.Description, { ref, className: cn("text-sm text-muted-foreground", className), ...props }));
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

// src/components/ui/dropdown-menu.tsx
import * as React15 from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check as Check3, ChevronRight as ChevronRight4, Circle as Circle2 } from "lucide-react";
import { jsx as jsx18, jsxs as jsxs10 } from "react/jsx-runtime";
var DropdownMenu = DropdownMenuPrimitive.Root;
var DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
var DropdownMenuGroup = DropdownMenuPrimitive.Group;
var DropdownMenuPortal = DropdownMenuPrimitive.Portal;
var DropdownMenuSub = DropdownMenuPrimitive.Sub;
var DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
var DropdownMenuSubTrigger = React15.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxs10(DropdownMenuPrimitive.SubTrigger, { ref, className: cn("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-primary/10 focus:bg-primary/10", inset && "ps-8", className), ...props, children: [
  children,
  /* @__PURE__ */ jsx18(ChevronRight4, { className: "ms-auto h-4 w-4 rtl:rotate-180" })
] }));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
var DropdownMenuSubContent = React15.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx18(DropdownMenuPrimitive.SubContent, { ref, className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className), ...props }));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
var DropdownMenuContent = React15.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx18(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx18(DropdownMenuPrimitive.Content, { ref, sideOffset, className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className), ...props }) }));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
var DropdownMenuItem = React15.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx18(DropdownMenuPrimitive.Item, { ref, className: cn("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors duration-fast ease-standard data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-primary/10 focus:text-primary", inset && "ps-8", className), ...props }));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
var DropdownMenuCheckboxItem = React15.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxs10(DropdownMenuPrimitive.CheckboxItem, { ref, className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 ps-8 pe-2 text-sm outline-none transition-colors duration-fast ease-standard data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-primary/10 focus:text-primary", className), checked, ...props, children: [
  /* @__PURE__ */ jsx18("span", { className: "absolute start-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx18(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx18(Check3, { className: "h-4 w-4" }) }) }),
  children
] }));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
var DropdownMenuRadioItem = React15.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs10(DropdownMenuPrimitive.RadioItem, { ref, className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 ps-8 pe-2 text-sm outline-none transition-colors duration-fast ease-standard data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-primary/10 focus:text-primary", className), ...props, children: [
  /* @__PURE__ */ jsx18("span", { className: "absolute start-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx18(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx18(Circle2, { className: "h-2 w-2 fill-current" }) }) }),
  children
] }));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
var DropdownMenuLabel = React15.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx18(DropdownMenuPrimitive.Label, { ref, className: cn("px-2 py-1.5 text-sm font-semibold", inset && "ps-8", className), ...props }));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
var DropdownMenuSeparator = React15.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx18(DropdownMenuPrimitive.Separator, { ref, className: cn("-mx-1 my-1 h-px bg-muted", className), ...props }));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
var DropdownMenuShortcut = ({ className, ...props }) => /* @__PURE__ */ jsx18("span", { className: cn("ms-auto text-xs tracking-widest opacity-60", className), ...props });
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

// src/components/ui/form.tsx
import * as React17 from "react";
import { Slot as Slot3 } from "@radix-ui/react-slot";
import { Controller, FormProvider, useFormContext } from "react-hook-form";

// src/components/ui/label.tsx
import * as React16 from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva as cva4 } from "class-variance-authority";
import { jsx as jsx19 } from "react/jsx-runtime";
var labelVariants = cva4(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
var Label3 = React16.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx19(LabelPrimitive.Root, { ref, className: cn(labelVariants(), className), ...props }));
Label3.displayName = LabelPrimitive.Root.displayName;

// src/components/ui/form.tsx
import { jsx as jsx20 } from "react/jsx-runtime";
var Form = FormProvider;
var FormFieldContext = React17.createContext({});
var FormField = ({ ...props }) => /* @__PURE__ */ jsx20(FormFieldContext.Provider, { value: { name: props.name }, children: /* @__PURE__ */ jsx20(Controller, { ...props }) });
var useFormField = () => {
  const fieldContext = React17.useContext(FormFieldContext);
  const itemContext = React17.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();
  const fieldState = getFieldState(fieldContext.name, formState);
  if (!fieldContext) throw new Error("useFormField should be used within <FormField>");
  const { id } = itemContext;
  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState
  };
};
var FormItemContext = React17.createContext({});
var FormItem = React17.forwardRef(
  ({ className, ...props }, ref) => {
    const id = React17.useId();
    return /* @__PURE__ */ jsx20(FormItemContext.Provider, { value: { id }, children: /* @__PURE__ */ jsx20("div", { ref, className: cn("space-y-2", className), ...props }) });
  }
);
FormItem.displayName = "FormItem";
var FormLabel = React17.forwardRef(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();
  return /* @__PURE__ */ jsx20(Label3, { ref, className: cn("transition-colors duration-fast ease-standard", error && "text-destructive", className), htmlFor: formItemId, ...props });
});
FormLabel.displayName = "FormLabel";
var FormControl = React17.forwardRef(
  ({ ...props }, ref) => {
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
    return /* @__PURE__ */ jsx20(
      Slot3,
      {
        ref,
        id: formItemId,
        "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
        "aria-invalid": !!error,
        ...props
      }
    );
  }
);
FormControl.displayName = "FormControl";
var FormDescription = React17.forwardRef(
  ({ className, ...props }, ref) => {
    const { formDescriptionId } = useFormField();
    return /* @__PURE__ */ jsx20("p", { ref, id: formDescriptionId, className: cn("text-sm text-muted-foreground", className), ...props });
  }
);
FormDescription.displayName = "FormDescription";
var FormMessage = React17.forwardRef(
  ({ className, children, ...props }, ref) => {
    const { error, formMessageId } = useFormField();
    const body = error ? String(error?.message) : children;
    if (!body) return null;
    return /* @__PURE__ */ jsx20("p", { ref, id: formMessageId, className: cn("text-sm font-medium text-destructive", className), ...props, children: body });
  }
);
FormMessage.displayName = "FormMessage";

// src/components/ui/hover-card.tsx
import * as React18 from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { jsx as jsx21 } from "react/jsx-runtime";
var HoverCard = HoverCardPrimitive.Root;
var HoverCardTrigger = HoverCardPrimitive.Trigger;
var HoverCardContent = React18.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx21(
  HoverCardPrimitive.Content,
  {
    ref,
    align,
    sideOffset,
    className: cn(
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

// src/components/ui/input.tsx
import * as React19 from "react";
import { jsx as jsx22 } from "react/jsx-runtime";
var Input = React19.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx22(
      "input",
      {
        type,
        className: cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background transition-colors duration-fast ease-standard hover:border-ring/50 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";

// src/components/ui/input-otp.tsx
import * as React20 from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { Dot } from "lucide-react";
import { jsx as jsx23, jsxs as jsxs11 } from "react/jsx-runtime";
var InputOTP = React20.forwardRef(({ className, containerClassName, ...props }, ref) => /* @__PURE__ */ jsx23(
  OTPInput,
  {
    ref,
    containerClassName: cn("flex items-center gap-2 has-[:disabled]:opacity-50", containerClassName),
    className: cn("disabled:cursor-not-allowed", className),
    ...props
  }
));
InputOTP.displayName = "InputOTP";
var InputOTPGroup = React20.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx23("div", { ref, className: cn("flex items-center", className), ...props })
);
InputOTPGroup.displayName = "InputOTPGroup";
var InputOTPSlot = React20.forwardRef(({ index, className, ...props }, ref) => {
  const inputOTPContext = React20.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];
  return /* @__PURE__ */ jsxs11(
    "div",
    {
      ref,
      className: cn(
        "relative flex h-10 w-10 items-center justify-center border-y border-e border-input text-sm transition-all duration-fast ease-standard hover:border-ring/50 first:rounded-s-md first:border-s last:rounded-e-md",
        isActive && "z-10 ring-2 ring-ring ring-offset-2 ring-offset-background",
        className
      ),
      ...props,
      children: [
        char,
        hasFakeCaret && /* @__PURE__ */ jsx23("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsx23("div", { className: "h-4 w-px animate-caret-blink bg-foreground duration-1000" }) })
      ]
    }
  );
});
InputOTPSlot.displayName = "InputOTPSlot";
var InputOTPSeparator = React20.forwardRef(
  ({ ...props }, ref) => /* @__PURE__ */ jsx23("div", { ref, role: "separator", ...props, children: /* @__PURE__ */ jsx23(Dot, {}) })
);
InputOTPSeparator.displayName = "InputOTPSeparator";

// src/components/ui/linkify-text.tsx
import { jsx as jsx24 } from "react/jsx-runtime";
var URL_REGEX = /(https?:\/\/[^\s<]+)|(www\.[^\s<]+\.[a-zA-Z]{2,}[^\s<]*)|((?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+(?:com|org|net|io|dev|co|me|info|biz|gov|edu|app|ai|uk|de|fr|sa|qa|ae|eg|ps|jo)\b(?:\/[^\s<]*)?)/gi;
var LinkifyText = ({ children, className }) => {
  if (!children) return null;
  const parts = [];
  let lastIndex = 0;
  let match;
  URL_REGEX.lastIndex = 0;
  while ((match = URL_REGEX.exec(children)) !== null) {
    const url = match[0];
    const index = match.index;
    if (index > lastIndex) parts.push(children.slice(lastIndex, index));
    const href = /^https?:\/\//i.test(url) ? url : `https://${url}`;
    parts.push(
      /* @__PURE__ */ jsx24(
        "a",
        {
          href,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "text-primary underline underline-offset-2 hover:text-primary/80 transition-colors duration-fast ease-standard",
          onClick: (e) => e.stopPropagation(),
          children: url
        },
        index
      )
    );
    lastIndex = index + url.length;
  }
  if (lastIndex < children.length) parts.push(children.slice(lastIndex));
  return /* @__PURE__ */ jsx24("span", { className, children: parts });
};
LinkifyText.displayName = "LinkifyText";

// src/components/ui/menubar.tsx
import * as React21 from "react";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { Check as Check4, ChevronRight as ChevronRight5, Circle as Circle3 } from "lucide-react";
import { jsx as jsx25, jsxs as jsxs12 } from "react/jsx-runtime";
var MenubarMenu = MenubarPrimitive.Menu;
var MenubarGroup = MenubarPrimitive.Group;
var MenubarPortal = MenubarPrimitive.Portal;
var MenubarSub = MenubarPrimitive.Sub;
var MenubarRadioGroup = MenubarPrimitive.RadioGroup;
var Menubar = React21.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx25(MenubarPrimitive.Root, { ref, className: cn("flex h-10 items-center space-x-1 rounded-md border bg-background p-1", className), ...props })
);
Menubar.displayName = MenubarPrimitive.Root.displayName;
var MenubarTrigger = React21.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx25(MenubarPrimitive.Trigger, { ref, className: cn("flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none data-[state=open]:bg-primary/10 data-[state=open]:text-primary focus:bg-primary/10 focus:text-primary", className), ...props })
);
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;
var MenubarSubTrigger = React21.forwardRef(
  ({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxs12(MenubarPrimitive.SubTrigger, { ref, className: cn("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-primary/10 data-[state=open]:text-primary focus:bg-primary/10 focus:text-primary", inset && "ps-8", className), ...props, children: [
    children,
    /* @__PURE__ */ jsx25(ChevronRight5, { className: "ms-auto h-4 w-4 rtl:rotate-180" })
  ] })
);
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;
var MenubarSubContent = React21.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx25(MenubarPrimitive.SubContent, { ref, className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className), ...props })
);
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;
var MenubarContent = React21.forwardRef(
  ({ className, align = "start", alignOffset = -4, sideOffset = 8, ...props }, ref) => /* @__PURE__ */ jsx25(MenubarPrimitive.Portal, { children: /* @__PURE__ */ jsx25(MenubarPrimitive.Content, { ref, align, alignOffset, sideOffset, className: cn("z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className), ...props }) })
);
MenubarContent.displayName = MenubarPrimitive.Content.displayName;
var MenubarItem = React21.forwardRef(
  ({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx25(MenubarPrimitive.Item, { ref, className: cn("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-primary/10 focus:text-primary", inset && "ps-8", className), ...props })
);
MenubarItem.displayName = MenubarPrimitive.Item.displayName;
var MenubarCheckboxItem = React21.forwardRef(
  ({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxs12(MenubarPrimitive.CheckboxItem, { ref, className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 ps-8 pe-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-primary/10 focus:text-primary", className), checked, ...props, children: [
    /* @__PURE__ */ jsx25("span", { className: "absolute start-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx25(MenubarPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx25(Check4, { className: "h-4 w-4" }) }) }),
    children
  ] })
);
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;
var MenubarRadioItem = React21.forwardRef(
  ({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs12(MenubarPrimitive.RadioItem, { ref, className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 ps-8 pe-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-primary/10 focus:text-primary", className), ...props, children: [
    /* @__PURE__ */ jsx25("span", { className: "absolute start-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx25(MenubarPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx25(Circle3, { className: "h-2 w-2 fill-current" }) }) }),
    children
  ] })
);
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;
var MenubarLabel = React21.forwardRef(
  ({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx25(MenubarPrimitive.Label, { ref, className: cn("px-2 py-1.5 text-sm font-semibold", inset && "ps-8", className), ...props })
);
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;
var MenubarSeparator = React21.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx25(MenubarPrimitive.Separator, { ref, className: cn("-mx-1 my-1 h-px bg-muted", className), ...props })
);
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;
var MenubarShortcut = ({ className, ...props }) => /* @__PURE__ */ jsx25("span", { className: cn("ms-auto text-xs tracking-widest text-muted-foreground", className), ...props });
MenubarShortcut.displayName = "MenubarShortcut";

// src/components/ui/native-select.tsx
import * as React22 from "react";
import { jsx as jsx26 } from "react/jsx-runtime";
var NativeSelect = React22.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx26(
  "select",
  {
    ref,
    className: cn(
      "flex h-9 w-full appearance-none rounded-md border border-input bg-background px-3 pe-8 text-sm text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      // chevron rendered as an inline SVG background, anchored to the end edge
      "bg-[length:1rem] bg-no-repeat bg-[right_0.5rem_center] rtl:bg-[left_0.5rem_center]",
      "bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22/%3E%3C/svg%3E')]",
      className
    ),
    ...props,
    children
  }
));
NativeSelect.displayName = "NativeSelect";

// src/components/ui/navigation-menu.tsx
import * as React23 from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva as cva5 } from "class-variance-authority";
import { ChevronDown as ChevronDown2 } from "lucide-react";
import { jsx as jsx27, jsxs as jsxs13 } from "react/jsx-runtime";
var NavigationMenu = React23.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs13(NavigationMenuPrimitive.Root, { ref, className: cn("relative z-10 flex max-w-max flex-1 items-center justify-center", className), ...props, children: [
  children,
  /* @__PURE__ */ jsx27(NavigationMenuViewport, {})
] }));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;
var NavigationMenuList = React23.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx27(NavigationMenuPrimitive.List, { ref, className: cn("group flex flex-1 list-none items-center justify-center space-x-1", className), ...props }));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;
var NavigationMenuItem = NavigationMenuPrimitive.Item;
var navigationMenuTriggerStyle = cva5(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors duration-fast ease-standard hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-primary/10 data-[state=open]:bg-primary/10"
);
var NavigationMenuTrigger = React23.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs13(NavigationMenuPrimitive.Trigger, { ref, className: cn(navigationMenuTriggerStyle(), "group", className), ...props, children: [
  children,
  " ",
  /* @__PURE__ */ jsx27(ChevronDown2, { className: "relative top-[1px] ms-1 h-3 w-3 transition duration-fast ease-standard group-data-[state=open]:rotate-180", "aria-hidden": "true" })
] }));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;
var NavigationMenuContent = React23.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx27(NavigationMenuPrimitive.Content, { ref, className: cn("left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto", className), ...props }));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;
var NavigationMenuLink = NavigationMenuPrimitive.Link;
var NavigationMenuViewport = React23.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx27("div", { className: cn("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ jsx27(
  NavigationMenuPrimitive.Viewport,
  {
    className: cn("origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]", className),
    ref,
    ...props
  }
) }));
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;
var NavigationMenuIndicator = React23.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx27(NavigationMenuPrimitive.Indicator, { ref, className: cn("top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in", className), ...props, children: /* @__PURE__ */ jsx27("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" }) }));
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;

// src/components/ui/pagination.tsx
import * as React24 from "react";
import { ChevronLeft as ChevronLeft2, ChevronRight as ChevronRight6, MoreHorizontal as MoreHorizontal2 } from "lucide-react";
import { jsx as jsx28, jsxs as jsxs14 } from "react/jsx-runtime";
var Pagination = ({ className, ...props }) => /* @__PURE__ */ jsx28("nav", { role: "navigation", "aria-label": "pagination", className: cn("mx-auto flex w-full justify-center", className), ...props });
Pagination.displayName = "Pagination";
var PaginationContent = React24.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx28("ul", { ref, className: cn("flex flex-row items-center gap-1", className), ...props })
);
PaginationContent.displayName = "PaginationContent";
var PaginationItem = React24.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx28("li", { ref, className: cn("", className), ...props }));
PaginationItem.displayName = "PaginationItem";
var PaginationLink = ({ className, isActive, size = "icon", ...props }) => /* @__PURE__ */ jsx28(
  "a",
  {
    "aria-current": isActive ? "page" : void 0,
    className: cn(buttonVariants({ variant: isActive ? "outline" : "ghost", size }), className),
    ...props
  }
);
PaginationLink.displayName = "PaginationLink";
var PaginationPrevious = ({ className, ...props }) => /* @__PURE__ */ jsxs14(PaginationLink, { "aria-label": "Go to previous page", size: "default", className: cn("gap-1 ps-2.5", className), ...props, children: [
  /* @__PURE__ */ jsx28(ChevronLeft2, { className: "h-4 w-4 rtl:rotate-180" }),
  /* @__PURE__ */ jsx28("span", { children: "Previous" })
] });
PaginationPrevious.displayName = "PaginationPrevious";
var PaginationNext = ({ className, ...props }) => /* @__PURE__ */ jsxs14(PaginationLink, { "aria-label": "Go to next page", size: "default", className: cn("gap-1 pe-2.5", className), ...props, children: [
  /* @__PURE__ */ jsx28("span", { children: "Next" }),
  /* @__PURE__ */ jsx28(ChevronRight6, { className: "h-4 w-4 rtl:rotate-180" })
] });
PaginationNext.displayName = "PaginationNext";
var PaginationEllipsis = ({ className, ...props }) => /* @__PURE__ */ jsxs14("span", { "aria-hidden": true, className: cn("flex h-9 w-9 items-center justify-center", className), ...props, children: [
  /* @__PURE__ */ jsx28(MoreHorizontal2, { className: "h-4 w-4" }),
  /* @__PURE__ */ jsx28("span", { className: "sr-only", children: "More pages" })
] });
PaginationEllipsis.displayName = "PaginationEllipsis";

// src/components/ui/popover.tsx
import * as React25 from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { jsx as jsx29 } from "react/jsx-runtime";
var Popover = PopoverPrimitive.Root;
var PopoverTrigger = PopoverPrimitive.Trigger;
var PopoverContent = React25.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx29(PopoverPrimitive.Portal, { children: /* @__PURE__ */ jsx29(
  PopoverPrimitive.Content,
  {
    ref,
    align,
    sideOffset,
    className: cn(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
) }));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

// src/components/ui/progress.tsx
import * as React26 from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { jsx as jsx30 } from "react/jsx-runtime";
var Progress = React26.forwardRef(({ className, value, ...props }, ref) => /* @__PURE__ */ jsx30(
  ProgressPrimitive.Root,
  {
    ref,
    className: cn("relative h-4 w-full overflow-hidden rounded-full bg-secondary", className),
    ...props,
    children: /* @__PURE__ */ jsx30(
      ProgressPrimitive.Indicator,
      {
        className: "h-full w-full flex-1 bg-primary transition-all duration-base ease-standard",
        style: { transform: `translateX(-${100 - (value || 0)}%)` }
      }
    )
  }
));
Progress.displayName = ProgressPrimitive.Root.displayName;

// src/components/ui/radio-group.tsx
import * as React27 from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle as Circle4 } from "lucide-react";
import { jsx as jsx31 } from "react/jsx-runtime";
var RadioGroup4 = React27.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx31(RadioGroupPrimitive.Root, { className: cn("grid gap-2", className), ...props, ref }));
RadioGroup4.displayName = RadioGroupPrimitive.Root.displayName;
var RadioGroupItem = React27.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx31(
  RadioGroupPrimitive.Item,
  {
    ref,
    className: cn(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background transition-all duration-fast ease-standard hover:border-ring/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx31(RadioGroupPrimitive.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx31(Circle4, { className: "h-2.5 w-2.5 fill-current text-current transition-transform duration-fast ease-standard" }) })
  }
));
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

// src/components/ui/resizable.tsx
import { GripVertical } from "lucide-react";
import * as ResizablePrimitive from "react-resizable-panels";
import { jsx as jsx32 } from "react/jsx-runtime";
var ResizablePanelGroup = ({ className, ...props }) => /* @__PURE__ */ jsx32(
  ResizablePrimitive.PanelGroup,
  {
    className: cn("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", className),
    ...props
  }
);
var ResizablePanel = ResizablePrimitive.Panel;
var ResizableHandle = ({
  withHandle,
  className,
  ...props
}) => /* @__PURE__ */ jsx32(
  ResizablePrimitive.PanelResizeHandle,
  {
    className: cn(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      className
    ),
    ...props,
    children: withHandle && /* @__PURE__ */ jsx32("div", { className: "z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border", children: /* @__PURE__ */ jsx32(GripVertical, { className: "h-2.5 w-2.5" }) })
  }
);

// src/components/ui/scroll-area.tsx
import * as React28 from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { jsx as jsx33, jsxs as jsxs15 } from "react/jsx-runtime";
var ScrollArea = React28.forwardRef(
  ({ className, children, dir, viewportRef, ...props }, ref) => /* @__PURE__ */ jsxs15(ScrollAreaPrimitive.Root, { ref, dir, className: cn("relative overflow-hidden", className), ...props, children: [
    /* @__PURE__ */ jsx33(ScrollAreaPrimitive.Viewport, { ref: viewportRef, dir, className: "h-full w-full rounded-[inherit]", children }),
    /* @__PURE__ */ jsx33(ScrollBar, {}),
    /* @__PURE__ */ jsx33(ScrollAreaPrimitive.Corner, {})
  ] })
);
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;
var ScrollBar = React28.forwardRef(({ className, orientation = "vertical", ...props }, ref) => /* @__PURE__ */ jsx33(
  ScrollAreaPrimitive.ScrollAreaScrollbar,
  {
    ref,
    orientation,
    className: cn(
      "flex touch-none select-none transition-colors duration-fast ease-standard",
      orientation === "vertical" && "h-full w-2.5 border-l rtl:border-l-0 rtl:border-r border-l-transparent rtl:border-r-transparent p-[1px]",
      orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx33(ScrollAreaPrimitive.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" })
  }
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

// src/components/ui/select.tsx
import * as React29 from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check as Check5, ChevronDown as ChevronDown3, ChevronUp } from "lucide-react";
import { jsx as jsx34, jsxs as jsxs16 } from "react/jsx-runtime";
var Select = SelectPrimitive.Root;
var SelectGroup = SelectPrimitive.Group;
var SelectValue = SelectPrimitive.Value;
var SelectTrigger = React29.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs16(
  SelectPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx34(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx34(ChevronDown3, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
var SelectScrollUpButton = React29.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx34(
  SelectPrimitive.ScrollUpButton,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsx34(ChevronUp, { className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
var SelectScrollDownButton = React29.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx34(
  SelectPrimitive.ScrollDownButton,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsx34(ChevronDown3, { className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
var SelectContent = React29.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsx34(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs16(
  SelectPrimitive.Content,
  {
    ref,
    className: cn(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ jsx34(SelectScrollUpButton, {}),
      /* @__PURE__ */ jsx34(
        SelectPrimitive.Viewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        }
      ),
      /* @__PURE__ */ jsx34(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = SelectPrimitive.Content.displayName;
var SelectLabel = React29.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx34(SelectPrimitive.Label, { ref, className: cn("py-1.5 ps-8 pe-2 text-sm font-semibold", className), ...props }));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
var SelectItem = React29.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs16(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 ps-8 pe-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-primary/10 focus:text-primary",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx34("span", { className: "absolute start-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx34(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx34(Check5, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsx34(SelectPrimitive.ItemText, { children })
    ]
  }
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
var SelectSeparator = React29.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx34(SelectPrimitive.Separator, { ref, className: cn("-mx-1 my-1 h-px bg-muted", className), ...props }));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

// src/components/ui/separator.tsx
import * as React30 from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { jsx as jsx35 } from "react/jsx-runtime";
var Separator5 = React30.forwardRef(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ jsx35(
  SeparatorPrimitive.Root,
  {
    ref,
    decorative,
    orientation,
    className: cn(
      "shrink-0 bg-border",
      orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
      className
    ),
    ...props
  }
));
Separator5.displayName = SeparatorPrimitive.Root.displayName;

// src/components/ui/sheet.tsx
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva as cva6 } from "class-variance-authority";
import { X as X2 } from "lucide-react";
import * as React31 from "react";
import { jsx as jsx36, jsxs as jsxs17 } from "react/jsx-runtime";
var Sheet = SheetPrimitive.Root;
var SheetTrigger = SheetPrimitive.Trigger;
var SheetClose = SheetPrimitive.Close;
var SheetPortal = SheetPrimitive.Portal;
var SheetOverlay = React31.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx36(
  SheetPrimitive.Overlay,
  {
    className: cn("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
    ...props,
    ref
  }
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
var sheetVariants = cva6(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: { side: "right" }
  }
);
var SheetContent = React31.forwardRef(
  ({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ jsxs17(SheetPortal, { children: [
    /* @__PURE__ */ jsx36(SheetOverlay, {}),
    /* @__PURE__ */ jsxs17(SheetPrimitive.Content, { ref, className: cn(sheetVariants({ side }), className), ...props, children: [
      children,
      /* @__PURE__ */ jsxs17(SheetPrimitive.Close, { className: "absolute end-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity duration-fast ease-standard data-[state=open]:bg-secondary hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none", children: [
        /* @__PURE__ */ jsx36(X2, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx36("span", { className: "sr-only", children: "Close" })
      ] })
    ] })
  ] })
);
SheetContent.displayName = SheetPrimitive.Content.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ jsx36("div", { className: cn("flex flex-col space-y-2 text-center sm:text-start", className), ...props });
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ jsx36("div", { className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className), ...props });
SheetFooter.displayName = "SheetFooter";
var SheetTitle = React31.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx36(SheetPrimitive.Title, { ref, className: cn("text-lg font-semibold text-foreground", className), ...props }));
SheetTitle.displayName = SheetPrimitive.Title.displayName;
var SheetDescription = React31.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx36(SheetPrimitive.Description, { ref, className: cn("text-sm text-muted-foreground", className), ...props }));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

// src/components/ui/sidebar.tsx
import * as React34 from "react";
import { Slot as Slot4 } from "@radix-ui/react-slot";
import { cva as cva7 } from "class-variance-authority";
import { PanelLeft } from "lucide-react";

// src/hooks/use-mobile.ts
import * as React32 from "react";
var MOBILE_BREAKPOINT = 768;
function useIsMobile() {
  const [isMobile, setIsMobile] = React32.useState(void 0);
  React32.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  return !!isMobile;
}

// src/components/ui/skeleton.tsx
import { jsx as jsx37 } from "react/jsx-runtime";
var Skeleton = ({ className, ...props }) => {
  return /* @__PURE__ */ jsx37("div", { "aria-hidden": "true", className: cn("motion-safe:animate-pulse rounded-md bg-muted", className), ...props });
};
Skeleton.displayName = "Skeleton";

// src/components/ui/tooltip.tsx
import * as React33 from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { jsx as jsx38 } from "react/jsx-runtime";
var TooltipProvider = TooltipPrimitive.Provider;
var Tooltip2 = TooltipPrimitive.Root;
var TooltipTrigger = TooltipPrimitive.Trigger;
var TooltipContent = React33.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx38(
  TooltipPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

// src/components/ui/sidebar.tsx
import { jsx as jsx39, jsxs as jsxs18 } from "react/jsx-runtime";
var SIDEBAR_COOKIE_NAME = "sidebar:state";
var SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
var SIDEBAR_WIDTH = "16rem";
var SIDEBAR_WIDTH_MOBILE = "18rem";
var SIDEBAR_WIDTH_ICON = "3rem";
var SIDEBAR_KEYBOARD_SHORTCUT = "b";
var SidebarContext = React34.createContext(null);
function useSidebar() {
  const context = React34.useContext(SidebarContext);
  if (!context) throw new Error("useSidebar must be used within a SidebarProvider.");
  return context;
}
function useOptionalSidebar() {
  return React34.useContext(SidebarContext);
}
var SidebarProvider = React34.forwardRef(({ defaultOpen = true, open: openProp, onOpenChange: setOpenProp, className, style, children, ...props }, ref) => {
  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = React34.useState(false);
  const [_open, _setOpen] = React34.useState(defaultOpen);
  const open = openProp ?? _open;
  const setOpen = React34.useCallback(
    (value) => {
      const openState = typeof value === "function" ? value(open) : value;
      if (setOpenProp) {
        setOpenProp(openState);
      } else {
        _setOpen(openState);
      }
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    },
    [setOpenProp, open]
  );
  const toggleSidebar = React34.useCallback(
    () => isMobile ? setOpenMobile((open2) => !open2) : setOpen((open2) => !open2),
    [isMobile, setOpen, setOpenMobile]
  );
  React34.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        toggleSidebar();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleSidebar]);
  const state = open ? "expanded" : "collapsed";
  const contextValue = React34.useMemo(
    () => ({ state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
  );
  return /* @__PURE__ */ jsx39(SidebarContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsx39(TooltipProvider, { delayDuration: 0, children: /* @__PURE__ */ jsx39("div", { style: { "--sidebar-width": SIDEBAR_WIDTH, "--sidebar-width-icon": SIDEBAR_WIDTH_ICON, ...style }, className: cn("group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar", className), ref, ...props, children }) }) });
});
SidebarProvider.displayName = "SidebarProvider";
var Sidebar = React34.forwardRef(({ side = "left", variant = "sidebar", collapsible = "offcanvas", className, children, ...props }, ref) => {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
  if (collapsible === "none") {
    return /* @__PURE__ */ jsx39("div", { className: cn("flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground", className), ref, ...props, children });
  }
  if (isMobile) {
    return /* @__PURE__ */ jsx39(Sheet, { open: openMobile, onOpenChange: setOpenMobile, ...props, children: /* @__PURE__ */ jsx39(SheetContent, { "data-sidebar": "sidebar", "data-mobile": "true", className: "w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden", style: { "--sidebar-width": SIDEBAR_WIDTH_MOBILE }, side, children: /* @__PURE__ */ jsx39("div", { className: "flex h-full w-full flex-col", children }) }) });
  }
  return /* @__PURE__ */ jsxs18("div", { ref, className: "group peer hidden text-sidebar-foreground md:block", "data-state": state, "data-collapsible": state === "collapsed" ? collapsible : "", "data-variant": variant, "data-side": side, children: [
    /* @__PURE__ */ jsx39("div", { className: cn("relative h-svh w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear", "group-data-[collapsible=offcanvas]:w-0", "group-data-[side=right]:rotate-180", variant === "floating" || variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]") }),
    /* @__PURE__ */ jsx39("div", { className: cn("fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] duration-200 ease-linear md:flex", side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]", variant === "floating" || variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l", className), ...props, children: /* @__PURE__ */ jsx39("div", { "data-sidebar": "sidebar", className: "flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow", children }) })
  ] });
});
Sidebar.displayName = "Sidebar";
var SidebarTrigger = React34.forwardRef(
  ({ className, onClick, ...props }, ref) => {
    const sidebar = useOptionalSidebar();
    if (!sidebar) return null;
    const { toggleSidebar } = sidebar;
    return /* @__PURE__ */ jsxs18(Button, { ref, "data-sidebar": "trigger", variant: "ghost", size: "icon", className: cn("h-7 w-7", className), onClick: (event) => {
      onClick?.(event);
      toggleSidebar();
    }, ...props, children: [
      /* @__PURE__ */ jsx39(PanelLeft, {}),
      /* @__PURE__ */ jsx39("span", { className: "sr-only", children: "Toggle Sidebar" })
    ] });
  }
);
SidebarTrigger.displayName = "SidebarTrigger";
var SidebarRail = React34.forwardRef(
  ({ className, ...props }, ref) => {
    const { toggleSidebar } = useSidebar();
    return /* @__PURE__ */ jsx39("button", { ref, "data-sidebar": "rail", "aria-label": "Toggle Sidebar", tabIndex: -1, onClick: toggleSidebar, title: "Toggle Sidebar", className: cn("absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all duration-fast ease-standard ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] group-data-[side=left]:-right-4 group-data-[side=right]:left-0 hover:after:bg-sidebar-border sm:flex", "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize", "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize", "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar", "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2", "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2", className), ...props });
  }
);
SidebarRail.displayName = "SidebarRail";
var SidebarInset = React34.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx39("main", { ref, className: cn("relative flex min-h-svh flex-1 flex-col bg-background", "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow", className), ...props }));
SidebarInset.displayName = "SidebarInset";
var SidebarInput = React34.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx39(Input, { ref, "data-sidebar": "input", className: cn("h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring", className), ...props })
);
SidebarInput.displayName = "SidebarInput";
var SidebarHeader = React34.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx39("div", { ref, "data-sidebar": "header", className: cn("flex flex-col gap-2 p-2", className), ...props }));
SidebarHeader.displayName = "SidebarHeader";
var SidebarFooter = React34.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx39("div", { ref, "data-sidebar": "footer", className: cn("flex flex-col gap-2 p-2", className), ...props }));
SidebarFooter.displayName = "SidebarFooter";
var SidebarSeparator = React34.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx39(Separator5, { ref, "data-sidebar": "separator", className: cn("mx-2 w-auto bg-sidebar-border", className), ...props })
);
SidebarSeparator.displayName = "SidebarSeparator";
var SidebarContent = React34.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx39("div", { ref, "data-sidebar": "content", className: cn("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", className), ...props }));
SidebarContent.displayName = "SidebarContent";
var SidebarGroup = React34.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx39("div", { ref, "data-sidebar": "group", className: cn("relative flex w-full min-w-0 flex-col p-2", className), ...props }));
SidebarGroup.displayName = "SidebarGroup";
var SidebarGroupLabel = React34.forwardRef(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot4 : "div";
    return /* @__PURE__ */ jsx39(Comp, { ref, "data-sidebar": "group-label", className: cn("flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0", className), ...props });
  }
);
SidebarGroupLabel.displayName = "SidebarGroupLabel";
var SidebarGroupAction = React34.forwardRef(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot4 : "button";
    return /* @__PURE__ */ jsx39(Comp, { ref, "data-sidebar": "group-action", className: cn("absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform duration-fast ease-standard hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "after:absolute after:-inset-2 after:md:hidden", "group-data-[collapsible=icon]:hidden", className), ...props });
  }
);
SidebarGroupAction.displayName = "SidebarGroupAction";
var SidebarGroupContent = React34.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx39("div", { ref, "data-sidebar": "group-content", className: cn("w-full text-sm", className), ...props })
);
SidebarGroupContent.displayName = "SidebarGroupContent";
var SidebarMenu = React34.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx39("ul", { ref, "data-sidebar": "menu", className: cn("flex w-full min-w-0 flex-col gap-1", className), ...props }));
SidebarMenu.displayName = "SidebarMenu";
var SidebarMenuItem = React34.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx39("li", { ref, "data-sidebar": "menu-item", className: cn("group/menu-item relative", className), ...props }));
SidebarMenuItem.displayName = "SidebarMenuItem";
var sidebarMenuButtonVariants = cva7(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-start text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
      },
      size: { default: "h-8 text-sm", sm: "h-7 text-xs", lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0" }
    },
    defaultVariants: { variant: "default", size: "default" }
  }
);
var SidebarMenuButton = React34.forwardRef(({ asChild = false, isActive = false, variant = "default", size = "default", tooltip, className, ...props }, ref) => {
  const Comp = asChild ? Slot4 : "button";
  const { isMobile, state } = useSidebar();
  const button = /* @__PURE__ */ jsx39(Comp, { ref, "data-sidebar": "menu-button", "data-size": size, "data-active": isActive, className: cn(sidebarMenuButtonVariants({ variant, size }), className), ...props });
  if (!tooltip) return button;
  if (typeof tooltip === "string") tooltip = { children: tooltip };
  return /* @__PURE__ */ jsxs18(Tooltip2, { children: [
    /* @__PURE__ */ jsx39(TooltipTrigger, { asChild: true, children: button }),
    /* @__PURE__ */ jsx39(TooltipContent, { side: "right", align: "center", hidden: state !== "collapsed" || isMobile, ...tooltip })
  ] });
});
SidebarMenuButton.displayName = "SidebarMenuButton";
var SidebarMenuAction = React34.forwardRef(
  ({ className, asChild = false, showOnHover = false, ...props }, ref) => {
    const Comp = asChild ? Slot4 : "button";
    return /* @__PURE__ */ jsx39(Comp, { ref, "data-sidebar": "menu-action", className: cn("absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform duration-fast ease-standard peer-hover/menu-button:text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "after:absolute after:-inset-2 after:md:hidden", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", showOnHover && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0", className), ...props });
  }
);
SidebarMenuAction.displayName = "SidebarMenuAction";
var SidebarMenuBadge = React34.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx39("div", { ref, "data-sidebar": "menu-badge", className: cn("pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground", "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", className), ...props })
);
SidebarMenuBadge.displayName = "SidebarMenuBadge";
var SidebarMenuSkeleton = React34.forwardRef(
  ({ className, showIcon = false, ...props }, ref) => {
    const width = React34.useMemo(() => `${Math.floor(Math.random() * 40) + 50}%`, []);
    return /* @__PURE__ */ jsxs18("div", { ref, "data-sidebar": "menu-skeleton", className: cn("flex h-8 items-center gap-2 rounded-md px-2", className), ...props, children: [
      showIcon && /* @__PURE__ */ jsx39(Skeleton, { className: "size-4 rounded-md", "data-sidebar": "menu-skeleton-icon" }),
      /* @__PURE__ */ jsx39(Skeleton, { className: "h-4 max-w-[--skeleton-width] flex-1", "data-sidebar": "menu-skeleton-text", style: { "--skeleton-width": width } })
    ] });
  }
);
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton";
var SidebarMenuSub = React34.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx39("ul", { ref, "data-sidebar": "menu-sub", className: cn("mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5", "group-data-[collapsible=icon]:hidden", className), ...props })
);
SidebarMenuSub.displayName = "SidebarMenuSub";
var SidebarMenuSubItem = React34.forwardRef(({ ...props }, ref) => /* @__PURE__ */ jsx39("li", { ref, ...props }));
SidebarMenuSubItem.displayName = "SidebarMenuSubItem";
var SidebarMenuSubButton = React34.forwardRef(
  ({ asChild = false, size = "md", isActive, className, ...props }, ref) => {
    const Comp = asChild ? Slot4 : "a";
    return /* @__PURE__ */ jsx39(Comp, { ref, "data-sidebar": "menu-sub-button", "data-size": size, "data-active": isActive, className: cn("flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring aria-disabled:pointer-events-none aria-disabled:opacity-50 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground", "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground", size === "sm" && "text-xs", size === "md" && "text-sm", "group-data-[collapsible=icon]:hidden", className), ...props });
  }
);
SidebarMenuSubButton.displayName = "SidebarMenuSubButton";

// src/components/ui/slider.tsx
import * as React35 from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { jsx as jsx40, jsxs as jsxs19 } from "react/jsx-runtime";
var Slider = React35.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs19(
  SliderPrimitive.Root,
  {
    ref,
    className: cn("relative flex w-full touch-none select-none items-center", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx40(SliderPrimitive.Track, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary", children: /* @__PURE__ */ jsx40(SliderPrimitive.Range, { className: "absolute h-full bg-primary" }) }),
      /* @__PURE__ */ jsx40(SliderPrimitive.Thumb, { className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-all duration-fast ease-standard hover:border-ring/50 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
Slider.displayName = SliderPrimitive.Root.displayName;

// src/components/ui/sonner.tsx
import { Toaster as Sonner, toast } from "sonner";
import { jsx as jsx41 } from "react/jsx-runtime";
var Toaster = ({ theme = "system", ...props }) => {
  return /* @__PURE__ */ jsx41(
    Sonner,
    {
      theme,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
Toaster.displayName = "Toaster";

// src/components/ui/switch.tsx
import * as React36 from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { jsx as jsx42 } from "react/jsx-runtime";
var Switch = React36.forwardRef(({ className, dir: propDirRaw, ...props }, ref) => {
  const propDir = propDirRaw === "rtl" ? "rtl" : propDirRaw === "ltr" ? "ltr" : void 0;
  const [resolvedDir, setResolvedDir] = React36.useState(propDir ?? "ltr");
  React36.useEffect(() => {
    if (propDir) {
      setResolvedDir(propDir);
      return;
    }
    if (typeof document !== "undefined") {
      const d = document.documentElement.getAttribute("dir") === "rtl" ? "rtl" : "ltr";
      setResolvedDir(d);
    }
  }, [propDir]);
  return /* @__PURE__ */ jsx42(
    SwitchPrimitives.Root,
    {
      dir: resolvedDir,
      className: cn(
        "peer relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-fast ease-standard data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      ref,
      children: /* @__PURE__ */ jsx42(
        SwitchPrimitives.Thumb,
        {
          className: cn(
            "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0",
            "absolute top-1/2 -translate-y-1/2",
            "start-0 transition-[inset-inline-start] duration-fast ease-standard",
            "data-[state=checked]:start-[1.25rem] data-[state=unchecked]:start-0"
          )
        }
      )
    }
  );
});
Switch.displayName = SwitchPrimitives.Root.displayName;

// src/components/ui/table.tsx
import * as React37 from "react";
import { jsx as jsx43 } from "react/jsx-runtime";
var Table = React37.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx43("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ jsx43("table", { ref, className: cn("w-full caption-bottom text-sm", className), ...props }) })
);
Table.displayName = "Table";
var TableHeader = React37.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx43("thead", { ref, className: cn("[&_tr]:border-b", className), ...props })
);
TableHeader.displayName = "TableHeader";
var TableBody = React37.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx43("tbody", { ref, className: cn("[&_tr:last-child]:border-0", className), ...props })
);
TableBody.displayName = "TableBody";
var TableFooter = React37.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx43("tfoot", { ref, className: cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className), ...props })
);
TableFooter.displayName = "TableFooter";
var TableRow = React37.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx43(
    "tr",
    {
      ref,
      className: cn("border-b transition-colors duration-fast ease-standard data-[state=selected]:bg-muted hover:bg-muted/50", className),
      ...props
    }
  )
);
TableRow.displayName = "TableRow";
var TableHead = React37.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx43(
    "th",
    {
      ref,
      className: cn(
        "h-12 px-4 text-start align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pe-0",
        className
      ),
      ...props
    }
  )
);
TableHead.displayName = "TableHead";
var TableCell = React37.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx43("td", { ref, className: cn("p-4 align-middle [&:has([role=checkbox])]:pe-0", className), ...props })
);
TableCell.displayName = "TableCell";
var TableCaption = React37.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx43("caption", { ref, className: cn("mt-4 text-sm text-muted-foreground", className), ...props })
);
TableCaption.displayName = "TableCaption";

// src/components/ui/tabs.tsx
import * as React38 from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { jsx as jsx44 } from "react/jsx-runtime";
var Tabs = TabsPrimitive.Root;
var TabsList = React38.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx44(
  TabsPrimitive.List,
  {
    ref,
    className: cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    ),
    ...props
  }
));
TabsList.displayName = TabsPrimitive.List.displayName;
var TabsTrigger = React38.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx44(
  TabsPrimitive.Trigger,
  {
    ref,
    className: cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all duration-fast ease-standard data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      className
    ),
    ...props
  }
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
var TabsContent = React38.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx44(
  TabsPrimitive.Content,
  {
    ref,
    className: cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    ),
    ...props
  }
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

// src/components/ui/textarea.tsx
import * as React39 from "react";
import { jsx as jsx45 } from "react/jsx-runtime";
var Textarea = React39.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx45(
    "textarea",
    {
      className: cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background transition-colors duration-fast ease-standard hover:border-ring/50 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ref,
      ...props
    }
  );
});
Textarea.displayName = "Textarea";

// src/components/ui/toggle.tsx
import * as React40 from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva as cva8 } from "class-variance-authority";
import { jsx as jsx46 } from "react/jsx-runtime";
var toggleVariants = cva8(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors duration-fast ease-standard hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-primary/10 data-[state=on]:text-accent-foreground",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent hover:border-ring/50 hover:bg-primary/10 hover:text-primary"
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5"
      }
    },
    defaultVariants: { variant: "default", size: "default" }
  }
);
var Toggle = React40.forwardRef(({ className, variant, size, ...props }, ref) => /* @__PURE__ */ jsx46(TogglePrimitive.Root, { ref, className: cn(toggleVariants({ variant, size, className })), ...props }));
Toggle.displayName = TogglePrimitive.Root.displayName;

// src/components/ui/toggle-group.tsx
import * as React41 from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { jsx as jsx47 } from "react/jsx-runtime";
var ToggleGroupContext = React41.createContext({
  size: "default",
  variant: "default"
});
var ToggleGroup = React41.forwardRef(({ className, variant, size, children, ...props }, ref) => /* @__PURE__ */ jsx47(ToggleGroupPrimitive.Root, { ref, className: cn("flex items-center justify-center gap-1", className), ...props, children: /* @__PURE__ */ jsx47(ToggleGroupContext.Provider, { value: { variant, size }, children }) }));
ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;
var ToggleGroupItem = React41.forwardRef(({ className, children, variant, size, ...props }, ref) => {
  const context = React41.useContext(ToggleGroupContext);
  return /* @__PURE__ */ jsx47(
    ToggleGroupPrimitive.Item,
    {
      ref,
      className: cn(toggleVariants({ variant: context.variant || variant, size: context.size || size }), className),
      ...props,
      children
    }
  );
});
ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export {
  cn,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Alert,
  AlertTitle,
  AlertDescription,
  buttonVariants,
  Button,
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
  AspectRatio,
  Avatar,
  AvatarImage,
  AvatarFallback,
  badgeVariants,
  Badge,
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
  Calendar,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  ChartContainer,
  ChartStyle,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  Checkbox,
  Collapsible,
  CollapsibleTrigger2 as CollapsibleTrigger,
  CollapsibleContent2 as CollapsibleContent,
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogClose,
  DialogOverlay,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  Command,
  CommandDialog,
  CommandInput,
  CommandInputPrimitive,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandSeparator,
  CommandItem,
  CommandShortcut,
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuRadioGroup,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  DirectionalArrow,
  Drawer,
  DrawerTrigger,
  DrawerPortal,
  DrawerClose,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuRadioGroup,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  Label3 as Label,
  Form,
  FormField,
  useFormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
  Input,
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
  LinkifyText,
  MenubarMenu,
  MenubarGroup,
  MenubarPortal,
  MenubarSub,
  MenubarRadioGroup,
  Menubar,
  MenubarTrigger,
  MenubarSubTrigger,
  MenubarSubContent,
  MenubarContent,
  MenubarItem,
  MenubarCheckboxItem,
  MenubarRadioItem,
  MenubarLabel,
  MenubarSeparator,
  MenubarShortcut,
  NativeSelect,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  navigationMenuTriggerStyle,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuViewport,
  NavigationMenuIndicator,
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Progress,
  RadioGroup4 as RadioGroup,
  RadioGroupItem,
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
  ScrollArea,
  ScrollBar,
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectScrollUpButton,
  SelectScrollDownButton,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  Separator5 as Separator,
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetPortal,
  SheetOverlay,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  Skeleton,
  TooltipProvider,
  Tooltip2 as Tooltip,
  TooltipTrigger,
  TooltipContent,
  useSidebar,
  useOptionalSidebar,
  SidebarProvider,
  Sidebar,
  SidebarTrigger,
  SidebarRail,
  SidebarInset,
  SidebarInput,
  SidebarHeader,
  SidebarFooter,
  SidebarSeparator,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  Slider,
  toast,
  Toaster,
  Switch,
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Textarea,
  toggleVariants,
  Toggle,
  ToggleGroup,
  ToggleGroupItem
};
//# sourceMappingURL=chunk-6W427NJL.js.map