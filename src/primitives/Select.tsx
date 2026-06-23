import * as React from "react";
import { cn } from "../lib/cn";
import { inputCls } from "./Input";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options?: { value: string; label?: string }[];
}

/** Select — a dark native select matching the kit's form styling. */
export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, options, children, ...props }, ref) => (
    <select ref={ref} className={cn(inputCls, className)} {...props}>
      {options
        ? options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label ?? o.value}
            </option>
          ))
        : children}
    </select>
  ),
);
Select.displayName = "Select";
