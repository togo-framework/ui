// Plugin icon resolver.
//
// ADAPTED from app/src/components/superadmin/plugins/icon-resolver.ts:
//   - Ported si: / fa6: support using react-icons (added to sentra-ui deps).
//   - bxl: boxicons CSS-class component kept.
//   - lucide: + bare PascalCase kept.
//
// nav_icon value can take one of four shapes:
//
//   1. Prefixed brand reference (preferred for brand-name plugins):
//        "si:openai"        → react-icons/si → SiOpenai
//        "si:googlegemini"  → react-icons/si → SiGooglegemini
//        "fa6:linkedin"     → react-icons/fa6 → FaLinkedin
//        "bxl:reddit"       → boxicons class "bxl-reddit"  (CSS, legacy)
//        "lucide:zap"       → lucide-react → Zap
//
//   2. Bare Lucide PascalCase name (legacy, still supported):
//        "Facebook"         → lucide-react.Facebook
//
//   3. Empty / null / unresolved → fallback to Box icon.
//
// NOTE (bundle size): namespace imports for SimpleIcons and Fa6Icons pull
// the full library (~600 kB each minified). Acceptable for admin dashboards.
// A product that ships to end-users should use a curated fast-path map instead.

import * as React from 'react'
import * as LucideIcons from 'lucide-react'
import { Box } from 'lucide-react'
import * as SimpleIcons from 'react-icons/si'
import * as Fa6Icons from 'react-icons/fa6'

type IconKind = 'lucide' | 'react-icons' | 'boxicons' | 'fallback'

export interface ResolvedIcon {
  Component: React.ElementType
  kind: IconKind
}

const FALLBACK: ResolvedIcon = { Component: Box, kind: 'fallback' }

// Convert "openai" → "SiOpenai", "google-cloud" → "SiGooglecloud".
// Simple Icons uses the PascalCase of the stripped-lowercased slug.
const toSimpleIconsName = (slug: string): string => {
  const stripped = slug.replace(/[^a-z0-9]/gi, '').toLowerCase()
  if (!stripped) return ''
  return 'Si' + stripped.charAt(0).toUpperCase() + stripped.slice(1)
}

// Convert "linkedin" → "FaLinkedin", "github" → "FaGithub".
const toFaName = (slug: string): string => {
  const stripped = slug.replace(/[^a-z0-9]/gi, '').toLowerCase()
  if (!stripped) return ''
  return 'Fa' + stripped.charAt(0).toUpperCase() + stripped.slice(1)
}

// Box-icons logo component: wraps the global boxicons class in an <i> element.
// Boxicons CSS must be loaded globally for this to render correctly.
const makeBoxiconsComponent = (cls: string): React.ElementType => {
  const Cmp = ({ className = '' }: { className?: string }) =>
    React.createElement('i', {
      className: ['bx', cls, className].filter(Boolean).join(' '),
      'aria-hidden': true,
    })
  Cmp.displayName = `BoxIcon(${cls})`
  return Cmp
}

export const resolveIcon = (navIcon: string | null | undefined): ResolvedIcon => {
  if (!navIcon || typeof navIcon !== 'string') return FALLBACK
  const trimmed = navIcon.trim()
  if (!trimmed) return FALLBACK

  // Prefixed: "<scheme>:<slug>"
  const colonIdx = trimmed.indexOf(':')
  if (colonIdx > 0) {
    const scheme = trimmed.slice(0, colonIdx).toLowerCase()
    const value = trimmed.slice(colonIdx + 1).trim()
    if (!value) return FALLBACK

    switch (scheme) {
      case 'si': {
        const name = toSimpleIconsName(value)
        const Cmp = (SimpleIcons as unknown as Record<string, React.ElementType | undefined>)[name]
        if (Cmp) return { Component: Cmp, kind: 'react-icons' }
        return FALLBACK
      }
      case 'fa6':
      case 'fa': {
        const name = toFaName(value)
        const Cmp = (Fa6Icons as unknown as Record<string, React.ElementType | undefined>)[name]
        if (Cmp) return { Component: Cmp, kind: 'react-icons' }
        return FALLBACK
      }
      case 'bxl':
      case 'bxs':
      case 'bx': {
        const cls = `${scheme}-${value.replace(/[^a-z0-9-]/gi, '').toLowerCase()}`
        return { Component: makeBoxiconsComponent(cls), kind: 'boxicons' }
      }
      case 'lucide': {
        // Allow either PascalCase ("Zap") or kebab ("zap") after lucide:.
        const pascal = value.charAt(0).toUpperCase() + value.slice(1)
        const candidates = [
          value,
          pascal,
          value.replace(/(^|-)([a-z])/g, (_, _dash, ch) => ch.toUpperCase()),
        ]
        for (const candidate of candidates) {
          const Cmp = (LucideIcons as unknown as Record<string, React.ElementType | undefined>)[candidate]
          if (Cmp) return { Component: Cmp, kind: 'lucide' }
        }
        return FALLBACK
      }
      default:
        // Unknown scheme — fall through to bare lookup.
        break
    }
  }

  // Bare Lucide name fallback (legacy seed values like "Facebook").
  const Lucide = (LucideIcons as unknown as Record<string, React.ElementType | undefined>)[trimmed]
  if (Lucide) return { Component: Lucide, kind: 'lucide' }

  return FALLBACK
}
