'use client'
// src/theme/index.ts — Theme barrel.
// Re-exports all theming utilities and components from this folder.
// 'use client' marks this barrel so Next.js does not try to render BrandingProvider
// (which uses createContext + useEffect) in the RSC server context.

export {
  hexToHSL,
  isHSL,
  isValidColor,
  nudgeL,
  toHSLSafe,
  applyBrand,
  SENTRA_BRAND,
  type BrandTokens,
} from "./brand";

export {
  BrandingProvider,
  useBrand,
  type BrandingProviderProps,
  type BrandContextValue,
} from "./BrandingProvider";
