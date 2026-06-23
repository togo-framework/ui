import * as React from "react";
import { Search } from "lucide-react";
import { cn } from "../lib/cn";

export const inputCls =
  "w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-violet-500/60";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

/** Input — a dark text input matching the kit's form styling. */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => (
  <input ref={ref} className={cn(inputCls, className)} {...props} />
));
Input.displayName = "Input";

export interface SearchInputProps extends InputProps {}

/** SearchInput — an Input with a leading magnifier (RTL-aware via logical props). */
export const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(({ className, ...props }, ref) => (
  <div className="relative">
    <Search className="pointer-events-none absolute start-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
    <input ref={ref} className={cn(inputCls, "ps-9 pe-3", className)} {...props} />
  </div>
));
SearchInput.displayName = "SearchInput";
