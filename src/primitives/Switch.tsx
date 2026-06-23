import * as React from "react";

export interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  "aria-label"?: string;
}

/** Switch — an RTL-aware toggle (the knob translates with the inline direction). */
export function Switch({ checked, onChange, disabled, ...rest }: SwitchProps) {
  return (
    <label className="relative inline-flex cursor-pointer items-center">
      <input
        type="checkbox"
        className="peer sr-only"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange(e.target.checked)}
        {...rest}
      />
      <div className="h-5 w-9 rounded-full bg-slate-700 transition-colors after:absolute after:start-0.5 after:top-0.5 after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-all peer-checked:bg-violet-600 peer-checked:after:translate-x-4 rtl:peer-checked:after:-translate-x-4" />
    </label>
  );
}

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {}

/** Checkbox — a violet-accented checkbox. */
export function Checkbox({ className, ...props }: CheckboxProps) {
  return <input type="checkbox" className={`h-4 w-4 accent-violet-600 ${className ?? ""}`} {...props} />;
}
