// @togo-framework/ui — public API.

// primitives
export { Button } from "./primitives/Button";
export type { ButtonProps, ButtonVariant, ButtonSize } from "./primitives/Button";
export { Badge } from "./primitives/Badge";
export type { BadgeProps, BadgeTone } from "./primitives/Badge";
export { StatusPill } from "./primitives/StatusPill";
export type { StatusPillProps } from "./primitives/StatusPill";
export { Card, CardTitle } from "./primitives/Card";
export type { CardProps } from "./primitives/Card";
export { Input, SearchInput, inputCls } from "./primitives/Input";
export type { InputProps, SearchInputProps } from "./primitives/Input";
export { Field } from "./primitives/Field";
export type { FieldProps } from "./primitives/Field";
export { Select } from "./primitives/Select";
export type { SelectProps } from "./primitives/Select";
export { Switch, Checkbox } from "./primitives/Switch";
export type { SwitchProps, CheckboxProps } from "./primitives/Switch";

// overlays
export { Modal } from "./overlays/Modal";
export type { ModalProps } from "./overlays/Modal";

// charts
export { AreaChart, BarChart, Gauge } from "./charts/Charts";
export type { AreaChartProps, BarChartProps, GaugeProps, SeriesPoint, BarDatum } from "./charts/Charts";

// data
export { StatCard } from "./data/StatCard";
export type { StatCardProps } from "./data/StatCard";
export { DataTable } from "./data/DataTable";
export type { DataTableProps, Column, CellKind } from "./data/DataTable";
export { DetailGrid } from "./data/DetailGrid";
export type { DetailGridProps, DetailField } from "./data/DetailGrid";

// layout
export { AdminShell } from "./layout/AdminShell";
export type { AdminShellProps, NavItem, Brand } from "./layout/AdminShell";
export {
  RealtimeDot, LangToggle, UserMenu, PlatformSwitcher, PageHeader, Toast,
} from "./layout/Bits";
export type {
  RealtimeDotProps, LangToggleProps, UserMenuProps, UserMenuItem,
  PlatformSwitcherProps, PlatformOption, PageHeaderProps,
} from "./layout/Bits";

// utils
export { cn } from "./lib/cn";
