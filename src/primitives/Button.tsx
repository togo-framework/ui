import * as React from "react";
import { cn } from "../lib/cn";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
export type ButtonSize = "sm" | "md";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Optional leading icon (e.g. a lucide-react icon element). */
  icon?: React.ReactNode;
}

const VARIANTS: Record<ButtonVariant, string> = {
  primary: "bg-violet-600 text-white hover:bg-violet-500",
  secondary: "border border-slate-700 text-slate-200 hover:bg-white/5",
  ghost: "text-slate-300 hover:bg-white/5",
  danger: "border border-red-900/60 text-red-400 hover:bg-red-500/10",
};

const SIZES: Record<ButtonSize, string> = {
  sm: "px-2.5 py-1.5 text-sm",
  md: "px-3 py-2 text-sm",
};

/** Button — the kit's primary action control (4 variants, 2 sizes). */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", icon, className, children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center gap-1.5 rounded-lg font-medium transition disabled:opacity-50 disabled:pointer-events-none",
        VARIANTS[variant],
        SIZES[size],
        className,
      )}
      {...props}
    >
      {icon}
      {children}
    </button>
  ),
);
Button.displayName = "Button";
