"use client";

import * as React from "react";
import { cn } from "../../lib/utils";
import type { LogoVariant } from "./Logo";

export interface WordmarkProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Font size of the wordmark in px. */
  size?: number;
  /** @deprecated Ignored — the brand never locks the mark up with the wordmark. */
  withMark?: boolean;
  /** @deprecated Ignored, together with `withMark`. */
  markVariant?: LogoVariant;
}

/** ToGO Wordmark — "To" in the mark's body colour (navy on paper, paper on ink) and "GO" in
 * the accent teal. It stands alone: place a <Logo /> separately, never as a lockup. */
export function Wordmark({ size = 24, withMark: _withMark, markVariant: _markVariant, className, style, ...props }: WordmarkProps) {
  return (
    <span className={cn("inline-flex items-center font-display font-medium tracking-tight", className)} style={style} {...props}>
      <span style={{ fontSize: size, lineHeight: 1 }} aria-label="ToGO">
        <span style={{ color: "var(--togo-color-mark-body, #0E1A3C)" }}>To</span>
        <span style={{ color: "var(--togo-teal, #1F8A99)" }}>GO</span>
      </span>
    </span>
  );
}
Wordmark.displayName = "Wordmark";
