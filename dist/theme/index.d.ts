import * as React from 'react';
import { ReactNode } from 'react';

/**
 * brand.ts — Sentra dynamic theming primitives.
 *
 * Pure utilities: no React, no app context, no bridge dependency.
 * A product imports these and wires its own org-settings fetch,
 * then calls applyBrand() to override the CSS var baseline at runtime.
 *
 * CSS variables written (same set as app/src/components/BrandingProvider.tsx):
 *   --primary              HSL "H S% L%"  — buttons, rings, active states
 *   --brand-primary        HSL "H S% L%"  — alias kept for Situation Room glow
 *   --brand-primary-glow   HSL with +7 lightness — glow variant
 *   --ring                 same as --primary
 *   --sidebar-primary      same as --primary
 *   --sidebar-ring         same as --primary
 *   --ai-glow              same as --primary
 *   --accent-muted         accent HSL with -13 lightness
 *   --logo-url             CSS url("…") string for background-image consumers
 */
/** Returns true for the HSL string form "H S% L%". */
declare function isHSL(value: string): boolean;
/** Returns true for "#RRGGBB" or "#RGB". */
declare function isValidColor(value: string): boolean;
/**
 * Converts "#RRGGBB" or "#RGB" to the HSL string form "H S% L%".
 * Returns an empty string when the input is not a valid hex color.
 */
declare function hexToHSL(hex: string): string;
/**
 * Normalises a hex or HSL value to the "H S% L%" form.
 * Returns null when the value is unrecognised — callers should skip setting
 * the var rather than writing a broken value.
 */
declare function toHSLSafe(color: string): string | null;
/**
 * Nudges the lightness of an "H S% L%" string by `delta` percentage points,
 * clamped to [0, 100].
 */
declare function nudgeL(hsl: string, delta: number): string;
/**
 * SENTRA_BRAND — the platform's own brand tokens.
 *
 * These are the values used when no tenant branding is configured.
 * BrandingProvider applies them on first render so the first paint is always
 * branded; a tenant override writes over them once org-settings resolves.
 */
declare const SENTRA_BRAND: {
    /** Brand primary: Sentra crimson (--primary 345 75% 33%). */
    readonly primaryHex: "#931535";
    /** Brand accent: Tailwind violet-500. */
    readonly accentHex: "#daab4e";
    /** Logo path — products serve this from their own /public directory. */
    readonly logoUrl: "/sentra-logo-full.png";
};
interface BrandTokens {
    /** Hex string ("#RRGGBB") or HSL string ("H S% L%") for the primary color. */
    primaryHex?: string;
    /** Hex string ("#RRGGBB") or HSL string ("H S% L%") for the accent color. */
    accentHex?: string;
    /** Absolute URL or relative path to the org logo image. */
    logoUrl?: string;
}
/**
 * applyBrand — writes brand CSS custom properties directly onto `root`
 * (typically `document.documentElement`).
 *
 * Call this inside a useEffect whenever org-settings data changes.
 * When a field is absent or invalid, the corresponding Sentra default fills
 * the gap — the product always has a styled baseline.
 *
 * @param root      The element to set properties on (usually document.documentElement).
 * @param tokens    The brand tokens from org-settings; all fields are optional.
 */
declare function applyBrand(root: HTMLElement, tokens?: BrandTokens): void;

interface BrandContextValue extends Omit<BrandTokens, 'logoUrl'> {
    /** The resolved primary hex/HSL that is currently active (may be the Sentra default). */
    primaryHex: string;
    /** The resolved accent hex/HSL that is currently active (may be the Sentra default). */
    accentHex: string;
    /**
     * The RAW logo URL the tenant set, or null when none is configured.
     * Intentionally NOT defaulted to the Sentra logo: consumers (AdminLayout,
     * AuthCard) use null to decide "no logo → render the icon mark instead".
     * (operator 2026-06-05: everything was showing /sentra-logo-full.png — the
     * default — instead of the platform icon when no DB logo exists.)
     * The `--logo-url` CSS var (set by applyBrand) still falls back to the Sentra
     * default for pure background-image consumers; this context value does not.
     */
    logoUrl: string | null;
    /** Lucide icon name (e.g. 'ShieldCheck') for the platform mark. Null if unset. */
    iconName: string | null;
    /** Resolved product/platform name (for the sidebar title). Empty if unset. */
    productName: string;
}
/**
 * useBrand — reads the currently-active brand tokens from context.
 *
 * Returns the Sentra defaults when no BrandingProvider is in the tree.
 * Only use this when a component genuinely needs to read the color values
 * (e.g. to pass them to a canvas API). For standard CSS theming the CSS
 * vars (hsl(var(--primary)) etc.) are always preferred.
 */
declare function useBrand(): BrandContextValue;
interface BrandingProviderProps extends BrandTokens {
    /** Lucide icon name for the platform mark (from Fort branding.icon). */
    iconName?: string | null;
    /** Product/platform display name (from Fort branding.product_name_*). */
    productName?: string;
    children: ReactNode;
}
/**
 * BrandingProvider — hot-applies org branding CSS vars and exposes the
 * active tokens via BrandContext.
 *
 * Renders no additional DOM nodes — it is a pure side-effect + context provider.
 *
 * Props (all optional — Sentra defaults fill any missing value):
 *   primaryHex   Hex "#RRGGBB" or HSL "H S% L%" for the brand primary color.
 *   accentHex    Hex "#RRGGBB" or HSL "H S% L%" for the brand accent color.
 *   logoUrl      Absolute URL or relative path to the org logo.
 */
declare const BrandingProvider: {
    ({ primaryHex, accentHex, logoUrl, iconName, productName, children, }: BrandingProviderProps): React.JSX.Element;
    displayName: string;
};

type ThemeBase = "dark" | "light";
interface ThemeDef {
    id: string;
    label: string;
    /** Whether this theme toggles the `.dark` class (keeps `dark:` utilities in sync). */
    base: ThemeBase;
}
declare const themes: ThemeDef[];
declare function themeBase(id: string): ThemeBase;
declare const STORAGE_KEY = "togo-theme";
/**
 * Inline this string in a <script> in <head> to set the theme before first paint
 * (no flash of the wrong theme). The framework injects it server-side.
 *
 *   <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
 */
declare const themeInitScript: string;

type TogoTheme = "dark" | "light" | (string & {});
type Dir = "ltr" | "rtl";
/** Per-app brand overrides: any `--togo-*` (or bridged) custom property → value. */
type ThemeOverrides = Record<string, string>;
interface ThemeContextValue {
    theme: TogoTheme;
    setTheme: (t: TogoTheme) => void;
    themes: ThemeDef[];
    dir: Dir;
    setDir: (d: Dir) => void;
}
interface ThemeProviderProps {
    theme?: TogoTheme;
    /** Per-app brand overrides applied as inline custom properties on the scope element. */
    overrides?: ThemeOverrides;
    dir?: Dir;
    /** "html" (default) themes <html>; "self" themes a wrapper div (so themes can coexist on one page). */
    scope?: "html" | "self";
    themes?: ThemeDef[];
    /** Persist theme/dir choice to localStorage and read it on first mount. */
    persist?: boolean;
    className?: string;
    children: React.ReactNode;
}
/**
 * ThemeProvider — runtime theming. Sets `data-theme` + toggles `.dark` + `dir` on its
 * scope (the <html> element, or a wrapper when scope="self"), applies per-app `overrides`
 * as inline custom properties, and exposes `useTheme()`. SSR-safe (no DOM access at module
 * top level; all mutations run in effects). For no-flash, also inline `themeInitScript`.
 */
declare function ThemeProvider({ theme: themeProp, overrides, dir: dirProp, scope, themes, persist, className, children, }: ThemeProviderProps): React.JSX.Element;
declare namespace ThemeProvider {
    var displayName: string;
}
declare function useTheme(): ThemeContextValue;

export { type BrandContextValue, type BrandTokens, BrandingProvider, type BrandingProviderProps, type Dir, SENTRA_BRAND, STORAGE_KEY, type ThemeBase, type ThemeContextValue, type ThemeDef, type ThemeOverrides, ThemeProvider, type ThemeProviderProps, type TogoTheme, applyBrand, hexToHSL, isHSL, isValidColor, nudgeL, themeBase, themeInitScript, themes, toHSLSafe, useBrand, useTheme };
