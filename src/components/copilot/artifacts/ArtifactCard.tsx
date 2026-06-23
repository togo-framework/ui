'use client'

/**
 * ArtifactCard — renders an A2UI "card" artifact.
 *
 * Reuses SeverityChip for the severity token when severity is present.
 * Bilingual: title_en/ar, body_en/ar, field labels stay as-is (model provides them).
 * RTL-safe via logical CSS props.
 *
 * Rules: Rule 7 (displayName), Rule 8 (bilingual/RTL), Rule 16 (Sentra style).
 */

import { SeverityChip } from '../../intel/SeverityChip'
import type { IntelSeverity } from '../../intel/types'
import type { A2UICardData } from './types'

export interface ArtifactCardProps {
  data: A2UICardData
  /** Outer artifact title (title_en / title_ar from the A2UIArtifact envelope). */
  artifactTitle?: string
  language?: 'en' | 'ar'
  dir?: 'ltr' | 'rtl'
}

const ArtifactCard = ({ data, artifactTitle, language = 'en', dir }: ArtifactCardProps) => {
  const resolvedDir = dir ?? (language === 'ar' ? 'rtl' : 'ltr')

  // Prefer per-card title from data, fall back to artifact envelope title.
  const cardTitle =
    language === 'ar'
      ? (data.title_ar || data.title_en || artifactTitle || '')
      : (data.title_en || artifactTitle || '')

  const cardBody =
    language === 'ar'
      ? (data.body_ar || data.body_en || '')
      : (data.body_en || '')

  // Validate severity — only pass recognised values to SeverityChip.
  const validSeverities: IntelSeverity[] = ['critical', 'high', 'medium', 'low']
  const severity: IntelSeverity | null =
    data.severity && validSeverities.includes(data.severity as IntelSeverity)
      ? (data.severity as IntelSeverity)
      : null

  return (
    <div
      className="rounded-lg border border-border bg-card text-foreground p-3 space-y-2"
      dir={resolvedDir}
    >
      {/* Header row — title + severity chip */}
      {(cardTitle || severity) && (
        <div className="flex items-start justify-between gap-2">
          {cardTitle && (
            <p className="text-sm font-semibold text-foreground leading-snug flex-1 min-w-0">
              {cardTitle}
            </p>
          )}
          {severity && (
            <SeverityChip
              severity={severity}
              language={language}
              className="shrink-0 mt-0.5"
            />
          )}
        </div>
      )}

      {/* Body */}
      {cardBody && (
        <p className="text-xs text-muted-foreground leading-relaxed" dir="auto">
          {cardBody}
        </p>
      )}

      {/* Key/value fields */}
      {data.fields && data.fields.length > 0 && (
        <dl className="space-y-1 border-t border-border/50 pt-2 mt-2">
          {data.fields.map((field, i) => (
            <div key={i} className="flex items-start gap-2 text-xs">
              <dt className="text-muted-foreground shrink-0 min-w-[6rem] max-w-[8rem] truncate font-medium">
                {field.label}
              </dt>
              <dd className="text-foreground flex-1 min-w-0 break-words" dir="auto">
                {String(field.value)}
              </dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  )
}

ArtifactCard.displayName = 'ArtifactCard'

export { ArtifactCard }
