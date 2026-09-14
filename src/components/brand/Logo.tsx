"use client";

import * as React from "react";
import { cn } from "../../lib/utils";

/**
 * The ToGO mark — the six-cube lattice from https://to-go.dev/en/brand.
 * Cells are [column, row] on a 4×4 lattice; each cube is 21 units on a 100-unit
 * canvas with 8 units of clear space, exactly as the brand's own SVG draws it.
 */
export const TOGO_MARK = {
  cells: [
    [0, 1],
    [1, 0],
    [1, 2],
    [2, 1],
    [2, 3],
    [3, 2],
  ],
  accentCells: [
    [2, 1],
    [2, 3],
    [3, 2],
  ],
} as const;

/** `mono` is kept as an alias of `mark`: the brand has one mark and no monogram. */
export type LogoVariant = "mark" | "mono";
/**
 * brand    — body follows the ground (navy on paper, paper on ink), teal accent
 * on-light — navy body, teal accent
 * on-dark  — paper body, teal accent (`white` is an alias)
 * knockout — every cube paper, for the mark on a teal ground
 * inherit  — every cube currentColor, to theme with surrounding text
 */
export type LogoTone = "brand" | "on-light" | "on-dark" | "white" | "knockout" | "inherit";

const COLOURS: Record<Exclude<LogoTone, "white">, { body: string; accent: string }> = {
  brand: { body: "var(--togo-color-mark-body, #0E1A3C)", accent: "var(--togo-teal, #1F8A99)" },
  "on-light": { body: "var(--togo-navy, #0E1A3C)", accent: "var(--togo-teal, #1F8A99)" },
  "on-dark": { body: "var(--togo-paper, #F0EBE1)", accent: "var(--togo-teal, #1F8A99)" },
  knockout: { body: "var(--togo-paper, #F0EBE1)", accent: "var(--togo-paper, #F0EBE1)" },
  inherit: { body: "currentColor", accent: "currentColor" },
};

export interface LogoProps extends Omit<React.SVGProps<SVGSVGElement>, "color"> {
  variant?: LogoVariant;
  tone?: LogoTone;
  /** Rendered size in px — the mark is square. */
  size?: number;
  title?: string;
}

/** ToGO Logo — the mark alone. The brand never locks it up with the wordmark; give it at
 * least one cube of clear space on every side. */
export function Logo({ variant: _variant, tone = "brand", size = 32, title = "ToGO", className, style, ...props }: LogoProps) {
  const c = COLOURS[tone === "white" ? "on-dark" : tone];
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      shapeRendering="crispEdges"
      className={cn("inline-block shrink-0", className)}
      style={style}
      {...props}
    >
      <title>{title}</title>
      {TOGO_MARK.cells.map(([col, row]) => {
        const accent = TOGO_MARK.accentCells.some(([ac, ar]) => ac === col && ar === row);
        return (
          <rect
            key={`${col}-${row}`}
            x={8 + col * 21}
            y={8 + row * 21}
            width={21}
            height={21}
            fill={accent ? c.accent : c.body}
          />
        );
      })}
    </svg>
  );
}
Logo.displayName = "Logo";
