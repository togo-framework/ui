import * as React from "react";
import { cn } from "../lib/cn";

export type AvatarSize = "sm" | "md" | "lg";

const SIZES: Record<AvatarSize, string> = {
  sm: "h-8 w-8 text-sm rounded-full",
  md: "h-9 w-9 text-sm rounded-xl",
  lg: "h-12 w-12 text-lg rounded-2xl",
};

export interface AvatarProps {
  /** Text to derive the initial from (name/email), used when no `src`/`icon`. */
  text?: string;
  /** An image URL. */
  src?: string;
  /** An icon element (e.g. a brand glyph) shown instead of an initial. */
  icon?: React.ReactNode;
  size?: AvatarSize;
  /** Gradient base colour. */
  primary?: string;
  className?: string;
}

/** Avatar — a gradient initial/icon/image chip used by the brand, user menu, and
 * profile/record heroes. */
export function Avatar({ text, src, icon, size = "sm", primary = "#7c3aed", className }: AvatarProps) {
  const initial = (text ?? "?").charAt(0).toUpperCase();
  return (
    <span
      className={cn("flex shrink-0 items-center justify-center overflow-hidden font-semibold text-white", SIZES[size], className)}
      style={src ? undefined : { background: `linear-gradient(135deg, ${primary}, #4f46e5)` }}
    >
      {src ? <img src={src} alt="" className="h-full w-full object-cover" /> : icon ?? initial}
    </span>
  );
}
