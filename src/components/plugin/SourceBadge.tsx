'use client'

/**
 * SourceBadge — branded pill for a source plugin (icon + label).
 *
 * Product-agnostic rewrite (Rule 25) of app/src/components/sources/SourceBadge.tsx:
 * the old version looked the label up via a translation registry and resolved
 * the icon via an app-only `plugin-icons` lib. Here the product passes the
 * already-resolved `label`, `navIcon` (a DynamicIcon name string), and optional
 * brand `color` — so the library carries no registry and no context dependency.
 *
 * Variants: pill (icon + label, default) · compact (icon only).
 * Sizes: xs · sm (default) · md.
 * When `href` is set the badge becomes an external link with a hover ring.
 *
 * Rules: 7 (displayName), 16 (semantic tokens, no hex literals in className).
 */

import { DynamicIcon } from '../nav/DynamicIcon'
import { cn } from '../../lib/utils'

export type SourceBadgeVariant = 'pill' | 'compact'
export type SourceBadgeSize = 'xs' | 'sm' | 'md'

export interface SourceBadgeProps {
  /** Display label (already localised by the product). */
  label: string
  /** DynamicIcon name string — "si:openai", "lucide:zap", "bxl:reddit", a URL, etc. */
  navIcon?: string | null
  /** Optional brand color (hex or CSS color) applied to the icon. */
  color?: string
  variant?: SourceBadgeVariant
  href?: string
  size?: SourceBadgeSize
  className?: string
}

const SIZE_ICON: Record<SourceBadgeSize, string> = {
  xs: 'h-2.5 w-2.5',
  sm: 'h-3 w-3',
  md: 'h-3.5 w-3.5',
}
const SIZE_TEXT: Record<SourceBadgeSize, string> = {
  xs: 'text-[10px]',
  sm: 'text-xs',
  md: 'text-sm',
}

export const SourceBadge = ({
  label,
  navIcon,
  color,
  variant = 'pill',
  href,
  size = 'sm',
  className,
}: SourceBadgeProps) => {
  const inner = (
    <>
      <span
        className="flex shrink-0 items-center justify-center"
        style={color ? { color } : undefined}
      >
        <DynamicIcon name={navIcon ?? null} className={cn(SIZE_ICON[size], 'shrink-0')} />
      </span>
      {variant !== 'compact' && (
        <span className={cn(SIZE_TEXT[size], 'font-medium leading-none')}>{label}</span>
      )}
    </>
  )

  const baseClass = cn(
    'inline-flex items-center gap-1.5 rounded-full bg-muted/40 px-2.5 py-1 transition-colors duration-fast ease-standard',
    'border border-border/40',
    href && 'cursor-pointer hover:bg-muted hover:ring-2 hover:ring-primary/20',
    className,
  )

  // In compact (icon-only) variant the visible label is hidden, so expose it to
  // assistive tech via title/aria-label — otherwise the badge/link has no name.
  const a11yLabel = variant === 'compact' ? label : undefined

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClass}
        title={a11yLabel}
        aria-label={a11yLabel}
      >
        {inner}
      </a>
    )
  }

  return (
    <span className={baseClass} title={a11yLabel} aria-label={a11yLabel}>
      {inner}
    </span>
  )
}

SourceBadge.displayName = 'SourceBadge'
export default SourceBadge
