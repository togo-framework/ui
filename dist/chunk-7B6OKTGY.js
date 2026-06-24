import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  cn
} from "./chunk-NRF3KNQX.js";

// src/theme/brand.ts
function isHSL(value) {
  return /^\d+(\.\d+)?\s+\d+(\.\d+)?%\s+\d+(\.\d+)?%$/.test(value.trim());
}
function isValidColor(value) {
  const t = value.trim();
  return isHSL(t) || /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(t);
}
function hexToHSL(hex) {
  let h = hex.replace("#", "").trim();
  if (h.length === 3) h = h.split("").map((c) => c + c).join("");
  if (h.length !== 6) return "";
  const r = parseInt(h.substring(0, 2), 16) / 255;
  const g = parseInt(h.substring(2, 4), 16) / 255;
  const b = parseInt(h.substring(4, 6), 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  if (max === min) return `0 0% ${Math.round(l * 100)}%`;
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let hue = 0;
  if (max === r) hue = ((g - b) / d + (g < b ? 6 : 0)) / 6;
  else if (max === g) hue = ((b - r) / d + 2) / 6;
  else hue = ((r - g) / d + 4) / 6;
  return `${Math.round(hue * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
}
function toHSLSafe(color) {
  if (!color) return null;
  const t = color.trim();
  if (isHSL(t)) return t;
  const result = hexToHSL(t);
  return result !== "" ? result : null;
}
function nudgeL(hsl, delta) {
  const parts = hsl.trim().split(/\s+/);
  if (parts.length < 3) return hsl;
  const l = parseFloat(parts[2] ?? "0");
  const newL = Math.max(0, Math.min(100, l + delta));
  return `${parts[0]} ${parts[1]} ${Math.round(newL)}%`;
}
var SENTRA_BRAND = {
  /** Brand primary: Sentra crimson (--primary 345 75% 33%). */
  primaryHex: "#931535",
  /** Brand accent: Tailwind violet-500. */
  accentHex: "#daab4e",
  /** Logo path — products serve this from their own /public directory. */
  logoUrl: "/sentra-logo-full.png"
};
var SENTRA_PRIMARY_HSL = toHSLSafe(SENTRA_BRAND.primaryHex);
var SENTRA_ACCENT_HSL = toHSLSafe(SENTRA_BRAND.accentHex);
function applyBrand(root, tokens = {}) {
  const primaryHSL = (tokens.primaryHex ? toHSLSafe(tokens.primaryHex) : null) ?? SENTRA_PRIMARY_HSL;
  root.style.setProperty("--primary", primaryHSL);
  root.style.setProperty("--brand-primary", primaryHSL);
  root.style.setProperty("--brand-primary-glow", nudgeL(primaryHSL, 7));
  root.style.setProperty("--ring", primaryHSL);
  root.style.setProperty("--sidebar-primary", primaryHSL);
  root.style.setProperty("--sidebar-ring", primaryHSL);
  root.style.setProperty("--ai-glow", primaryHSL);
  const accentHSL = (tokens.accentHex ? toHSLSafe(tokens.accentHex) : null) ?? SENTRA_ACCENT_HSL;
  root.style.setProperty("--accent-muted", nudgeL(accentHSL, -13));
  const rawLogo = tokens.logoUrl;
  if (rawLogo && rawLogo.trim() !== "") {
    root.style.setProperty("--logo-url", `url("${rawLogo}")`);
  } else {
    root.style.setProperty("--logo-url", "none");
  }
}

// src/theme/BrandingProvider.tsx
import { createContext, useContext, useEffect } from "react";
import { jsx } from "react/jsx-runtime";
var BrandContext = createContext({
  primaryHex: SENTRA_BRAND.primaryHex,
  accentHex: SENTRA_BRAND.accentHex,
  logoUrl: null,
  iconName: null,
  productName: ""
});
function useBrand() {
  return useContext(BrandContext);
}
var BrandingProvider = ({
  primaryHex,
  accentHex,
  logoUrl,
  iconName,
  productName,
  children
}) => {
  useEffect(() => {
    if (typeof document === "undefined") return;
    applyBrand(document.documentElement, { primaryHex, accentHex, logoUrl });
  }, [primaryHex, accentHex, logoUrl]);
  const contextValue = {
    primaryHex: primaryHex ?? SENTRA_BRAND.primaryHex,
    accentHex: accentHex ?? SENTRA_BRAND.accentHex,
    // RAW logo: null when the tenant has none (empty/whitespace counts as none),
    // so consumers fall back to the icon mark instead of the Sentra default PNG.
    logoUrl: logoUrl && logoUrl.trim() !== "" ? logoUrl : null,
    iconName: iconName ?? null,
    productName: productName ?? ""
  };
  return /* @__PURE__ */ jsx(BrandContext.Provider, { value: contextValue, children });
};
BrandingProvider.displayName = "BrandingProvider";

// src/theme/ThemeProvider.tsx
import * as React from "react";

// src/theme/themes.ts
var themes = [
  { id: "dark", label: "Dark", base: "dark", accent: "#1FC7DC" },
  { id: "light", label: "Light", base: "light", accent: "#1659C8" },
  { id: "purple", label: "Purple", base: "dark", accent: "#9B6DF5" },
  { id: "rose", label: "Rose", base: "dark", accent: "#F5427B" },
  { id: "emerald", label: "Emerald", base: "dark", accent: "#10B981" },
  { id: "purple-light", label: "Purple Light", base: "light", accent: "#7C3AED" },
  { id: "rose-light", label: "Rose Light", base: "light", accent: "#E11D48" },
  { id: "emerald-light", label: "Emerald Light", base: "light", accent: "#059669" }
];
function themeBase(id) {
  return themes.find((t) => t.id === id)?.base ?? "dark";
}
var STORAGE_KEY = "togo-theme";
var themeInitScript = `(function(){try{
var k=${JSON.stringify(STORAGE_KEY)};
var t=localStorage.getItem(k);
if(!t){t=window.matchMedia&&window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}
var d=document.documentElement;
d.setAttribute('data-theme',t);
d.classList.toggle('dark', t!=='light');
}catch(e){}})();`;

// src/theme/ThemeProvider.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var ThemeContext = React.createContext(null);
function applyToElement(el, theme, dir, overrides) {
  el.setAttribute("data-theme", theme);
  el.classList.toggle("dark", themeBase(theme) === "dark");
  el.setAttribute("dir", dir);
  if (overrides) for (const [k, v] of Object.entries(overrides)) el.style.setProperty(k, v);
}
function ThemeProvider({
  theme: themeProp,
  overrides,
  dir: dirProp,
  scope = "html",
  themes: themes2 = themes,
  persist = true,
  className,
  children
}) {
  const [theme, setThemeState] = React.useState(themeProp ?? "dark");
  const [dir, setDirState] = React.useState(dirProp ?? "ltr");
  const selfRef = React.useRef(null);
  React.useEffect(() => {
    if (themeProp != null || !persist || typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) setThemeState(stored);
    else if (window.matchMedia?.("(prefers-color-scheme: light)").matches) setThemeState("light");
  }, []);
  React.useEffect(() => {
    if (themeProp != null) setThemeState(themeProp);
  }, [themeProp]);
  React.useEffect(() => {
    if (dirProp != null) setDirState(dirProp);
  }, [dirProp]);
  const setTheme = React.useCallback((t) => {
    setThemeState(t);
    if (persist && typeof window !== "undefined") window.localStorage.setItem(STORAGE_KEY, String(t));
  }, [persist]);
  const setDir = React.useCallback((d) => setDirState(d), []);
  React.useEffect(() => {
    if (typeof document === "undefined") return;
    const el = scope === "self" ? selfRef.current : document.documentElement;
    if (el) applyToElement(el, String(theme), dir, overrides);
  }, [theme, dir, overrides, scope]);
  const value = React.useMemo(() => ({ theme, setTheme, themes: themes2, dir, setDir }), [theme, setTheme, themes2, dir, setDir]);
  return /* @__PURE__ */ jsx2(ThemeContext.Provider, { value, children: scope === "self" ? /* @__PURE__ */ jsx2(
    "div",
    {
      ref: selfRef,
      "data-theme": theme,
      dir,
      className: ["tg-root", themeBase(String(theme)) === "dark" ? "dark" : "", "bg-background text-foreground", className].filter(Boolean).join(" "),
      style: overrides,
      children
    }
  ) : children });
}
ThemeProvider.displayName = "ThemeProvider";
function useTheme() {
  const ctx = React.useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a <ThemeProvider>");
  return ctx;
}

// src/theme/ThemePicker.tsx
import { Palette } from "lucide-react";
import { jsx as jsx3, jsxs } from "react/jsx-runtime";
function Swatch({ color, className }) {
  if (!color) return null;
  return /* @__PURE__ */ jsx3(
    "span",
    {
      className: cn("inline-block h-3.5 w-3.5 shrink-0 rounded-full border border-white/20", className),
      style: { backgroundColor: color }
    }
  );
}
function ThemePicker({ themes: themes2 = themes, size = "default", className, label }) {
  const { theme, setTheme } = useTheme();
  const current = themes2.find((t) => t.id === theme) ?? themes2[0];
  const iconCls = size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4";
  const btnCls = size === "sm" ? "h-7 w-7" : "h-8 w-8";
  const dark = themes2.filter((t) => t.base === "dark");
  const light = themes2.filter((t) => t.base === "light");
  return /* @__PURE__ */ jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsx3(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsx3(
      Button,
      {
        variant: "ghost",
        size: "icon",
        className: cn(btnCls, "text-muted-foreground", className),
        "aria-label": "Switch theme",
        children: current?.accent ? /* @__PURE__ */ jsx3(Swatch, { color: current.accent, className: "h-4 w-4" }) : /* @__PURE__ */ jsx3(Palette, { className: iconCls })
      }
    ) }),
    /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "end", className: "w-44", children: [
      label && /* @__PURE__ */ jsx3("div", { className: "px-2 py-1.5 text-xs font-medium text-muted-foreground", children: label }),
      /* @__PURE__ */ jsx3("div", { className: "px-2 py-1 text-[10px] uppercase tracking-wider text-muted-foreground/70", children: "Dark" }),
      dark.map((t) => /* @__PURE__ */ jsx3(ThemeItem, { def: t, active: theme === t.id, onSelect: () => setTheme(t.id) }, t.id)),
      /* @__PURE__ */ jsx3(DropdownMenuSeparator, {}),
      /* @__PURE__ */ jsx3("div", { className: "px-2 py-1 text-[10px] uppercase tracking-wider text-muted-foreground/70", children: "Light" }),
      light.map((t) => /* @__PURE__ */ jsx3(ThemeItem, { def: t, active: theme === t.id, onSelect: () => setTheme(t.id) }, t.id))
    ] })
  ] });
}
function ThemeItem({ def, active, onSelect }) {
  return /* @__PURE__ */ jsxs(
    DropdownMenuItem,
    {
      role: "menuitemradio",
      "aria-checked": active,
      onClick: onSelect,
      className: cn("flex items-center gap-2", active && "font-medium text-foreground"),
      children: [
        /* @__PURE__ */ jsx3(Swatch, { color: def.accent }),
        /* @__PURE__ */ jsx3("span", { className: "flex-1", children: def.label }),
        active && /* @__PURE__ */ jsx3("span", { className: "text-xs text-muted-foreground", children: "\u2713" })
      ]
    }
  );
}
ThemePicker.displayName = "ThemePicker";

export {
  isHSL,
  isValidColor,
  hexToHSL,
  toHSLSafe,
  nudgeL,
  SENTRA_BRAND,
  applyBrand,
  useBrand,
  BrandingProvider,
  themes,
  themeBase,
  STORAGE_KEY,
  themeInitScript,
  ThemeProvider,
  useTheme,
  ThemePicker
};
//# sourceMappingURL=chunk-7B6OKTGY.js.map