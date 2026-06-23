'use client'

/**
 * PluginAppearanceSection — appearance/placement section (pure-UI port).
 *
 * ADAPTED from app/src/components/admin/plugin/sections/PluginAppearanceSection.tsx:
 *   - @/components/ui/* → ../ui/*
 *   - @/lib/utils       → ../../lib/utils
 *   - useLanguage hook  → language prop
 *   - usePluginDetail   → removed; initial state from props (appearance fields)
 *   - useUpdateAppearance → removed; onSave(fields) callback seam
 *
 * Seams:
 *   - appearance: PluginAppearanceFields (current server state, seeds form)
 *   - onSave(fields): called on Save button — host calls the bridge
 *   - isPending: true while host is saving
 *   - isError / errorMessage: error state from host
 *   - language: 'en' | 'ar'
 */

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Switch } from '../ui/switch'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Label } from '../ui/label'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip'
import { cn } from '../../lib/utils'
import type { AppearanceMode, PluginAppearanceFields } from './types'

// ── Placement option definitions ───────────────────────────────────────────────

type PlacementOption = {
  value: AppearanceMode
  label_en: string
  label_ar: string
  desc_en: string
  desc_ar: string
  capabilityOnly: boolean
}

const PLACEMENT_OPTIONS: PlacementOption[] = [
  {
    value: 'sidebar',
    label_en: 'Sidebar',
    label_ar: 'الشريط الجانبي',
    desc_en: 'Appears as a navigation item in the main sidebar.',
    desc_ar: 'يظهر كعنصر تنقل في الشريط الجانبي الرئيسي.',
    capabilityOnly: false,
  },
  {
    value: 'header',
    label_en: 'Header',
    label_ar: 'الرأس',
    desc_en: 'Appears in the top header bar, next to notifications.',
    desc_ar: 'يظهر في شريط الرأس العلوي بجانب الإشعارات.',
    capabilityOnly: false,
  },
  {
    value: 'sideover',
    label_en: 'Sideover panel',
    label_ar: 'لوحة جانبية',
    desc_en: 'Opens as a slide-over sheet from a global icon button. Capability only.',
    desc_ar: 'يفتح كلوحة منزلقة من زر الأيقونة العامة. للقدرات فقط.',
    capabilityOnly: true,
  },
  {
    value: 'fixed',
    label_en: 'Fixed overlay',
    label_ar: 'تراكب ثابت',
    desc_en: 'Mounts as a floating widget on every page (copilot-style). Capability only.',
    desc_ar: 'يُثبَّت كأداة عائمة في كل صفحة (نمط المساعد). للقدرات فقط.',
    capabilityOnly: true,
  },
  {
    value: 'hidden',
    label_en: 'Hidden',
    label_ar: 'مخفي',
    desc_en: 'Not rendered anywhere in the app shell.',
    desc_ar: 'لا يظهر في أي مكان من واجهة التطبيق.',
    capabilityOnly: false,
  },
]

const canBeDefaultPage = (mode: AppearanceMode): boolean =>
  mode === 'sidebar' || mode === 'header'

// ── Props ──────────────────────────────────────────────────────────────────────

export interface PluginAppearanceSectionProps {
  /** Current server state — seeds the form on mount / when changed. */
  appearance: PluginAppearanceFields
  /** Called when the operator saves. Return type intentionally void — host handles async. */
  onSave: (changed: Partial<PluginAppearanceFields>) => void
  /** Whether the host is currently persisting. */
  isPending?: boolean
  /** Whether the last save resulted in an error. */
  isError?: boolean
  errorMessage?: string
  /** Current UI language. */
  language: 'en' | 'ar'
}

// ── Component ──────────────────────────────────────────────────────────────────

export const PluginAppearanceSection = ({
  appearance,
  onSave,
  isPending = false,
  isError = false,
  errorMessage,
  language,
}: PluginAppearanceSectionProps) => {
  const isRTL = language === 'ar'
  const isCapability = appearance.plugin_type === 'capability'

  const [mode, setMode] = useState<AppearanceMode>(appearance.appearance_mode)
  const [order, setOrder] = useState<number>(appearance.nav_order)
  const [isDefaultPage, setIsDefaultPage] = useState<boolean>(appearance.is_default_page ?? false)
  const [dirty, setDirty] = useState(false)

  // Re-seed when server state changes (e.g. after successful save)
  useEffect(() => {
    setMode(appearance.appearance_mode)
    setOrder(appearance.nav_order)
    setIsDefaultPage(appearance.is_default_page ?? false)
    setDirty(false)
  }, [appearance])

  const handleModeChange = (value: string) => {
    const next = value as AppearanceMode
    setMode(next)
    if (!canBeDefaultPage(next)) setIsDefaultPage(false)
    setDirty(true)
  }

  const handleOrderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const parsed = parseInt(e.target.value, 10)
    setOrder(Number.isNaN(parsed) ? 0 : parsed)
    setDirty(true)
  }

  const handleDefaultPageChange = (checked: boolean) => {
    setIsDefaultPage(checked)
    setDirty(true)
  }

  const handleSave = () => {
    const payload: Partial<PluginAppearanceFields> = {}
    if (mode !== appearance.appearance_mode) payload.appearance_mode = mode
    if (order !== appearance.nav_order) payload.nav_order = order
    if (isCapability && isDefaultPage !== (appearance.is_default_page ?? false)) {
      payload.is_default_page = isDefaultPage
    }
    if (Object.keys(payload).length === 0) { setDirty(false); return }
    onSave(payload)
  }

  return (
    <TooltipProvider>
      <Card className="mt-4">
        <CardHeader>
          <CardTitle className="text-base font-semibold">
            {isRTL ? 'المظهر والتوضع' : 'Appearance & Placement'}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">

          {/* Placement radio group */}
          <div className="space-y-3">
            <p className="text-sm font-medium text-foreground">
              {isRTL ? 'التوضع' : 'Placement'}
            </p>
            <RadioGroup
              value={mode}
              onValueChange={handleModeChange}
              className="space-y-2"
              dir={isRTL ? 'rtl' : 'ltr'}
            >
              {PLACEMENT_OPTIONS.map((opt) => {
                const disabled = opt.capabilityOnly && !isCapability
                const label = isRTL ? opt.label_ar : opt.label_en
                const desc = isRTL ? opt.desc_ar : opt.desc_en

                return (
                  <div key={opt.value} className="flex items-start gap-3">
                    {disabled ? (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="inline-flex items-start gap-3 opacity-40 cursor-not-allowed">
                            <RadioGroupItem value={opt.value} id={`placement-${opt.value}`} disabled className="mt-0.5 shrink-0" />
                            <div className="space-y-0.5">
                              <Label htmlFor={`placement-${opt.value}`} className="text-sm font-medium cursor-not-allowed">{label}</Label>
                              <p className="text-xs text-muted-foreground">{desc}</p>
                            </div>
                          </span>
                        </TooltipTrigger>
                        <TooltipContent side="right" dir={isRTL ? 'rtl' : 'ltr'}>
                          {isRTL ? 'متاح فقط لنوع القدرات' : 'Available for capability plugins only'}
                        </TooltipContent>
                      </Tooltip>
                    ) : (
                      <>
                        <RadioGroupItem value={opt.value} id={`placement-${opt.value}`} className="mt-0.5 shrink-0" />
                        <div className="space-y-0.5">
                          <Label htmlFor={`placement-${opt.value}`} className="text-sm font-medium cursor-pointer">{label}</Label>
                          <p className="text-xs text-muted-foreground">{desc}</p>
                        </div>
                      </>
                    )}
                  </div>
                )
              })}
            </RadioGroup>
          </div>

          {/* Nav order */}
          <div className="space-y-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Label htmlFor="nav-order" className="text-sm font-medium cursor-help">
                  {isRTL ? 'الترتيب' : 'Order'}
                </Label>
              </TooltipTrigger>
              <TooltipContent side="right" dir={isRTL ? 'rtl' : 'ltr'} className="max-w-xs">
                {isRTL
                  ? 'الأرقام الأصغر تظهر أولاً.'
                  : 'Lower numbers appear first.'}
              </TooltipContent>
            </Tooltip>
            <Input
              id="nav-order"
              type="number"
              value={order}
              onChange={handleOrderChange}
              min={0}
              className="w-28"
              dir="ltr"
            />
          </div>

          {/* Default landing page (capability only) */}
          {isCapability && (
            <div className="flex items-start gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Switch
                    id="default-page"
                    checked={isDefaultPage}
                    onCheckedChange={handleDefaultPageChange}
                    disabled={!canBeDefaultPage(mode)}
                    aria-describedby="default-page-desc"
                  />
                </TooltipTrigger>
                {!canBeDefaultPage(mode) && (
                  <TooltipContent side="right" dir={isRTL ? 'rtl' : 'ltr'} className="max-w-xs">
                    {isRTL
                      ? 'لا يمكن تعيين صفحة افتراضية عندما يكون الوضع مخفياً أو لوحة جانبية أو تراكباً ثابتاً.'
                      : 'Cannot set as default page when mode is hidden, sideover, or fixed.'}
                  </TooltipContent>
                )}
              </Tooltip>
              <div className="space-y-0.5">
                <Label
                  htmlFor="default-page"
                  className={cn(
                    'text-sm font-medium',
                    !canBeDefaultPage(mode) && 'opacity-40 cursor-not-allowed',
                  )}
                >
                  {isRTL ? 'تعيين كصفحة الوصول الافتراضية' : 'Set as default landing page'}
                </Label>
                <p id="default-page-desc" className="text-xs text-muted-foreground">
                  {isRTL
                    ? 'يوجّه المستخدمين إلى هذه القدرة عند فتح التطبيق.'
                    : 'Redirects users to this capability on app open.'}
                </p>
              </div>
            </div>
          )}

          {/* Error feedback */}
          {isError && (
            <p className="text-sm text-destructive" role="alert">
              {isRTL
                ? `فشل الحفظ: ${errorMessage ?? 'خطأ غير معروف'}`
                : `Save failed: ${errorMessage ?? 'Unknown error'}`}
            </p>
          )}

          {/* Save button */}
          <div className={cn('flex', isRTL ? 'justify-start' : 'justify-end')}>
            <Button onClick={handleSave} disabled={!dirty || isPending} size="sm">
              {isPending
                ? (isRTL ? 'جارٍ الحفظ…' : 'Saving…')
                : (isRTL ? 'حفظ التغييرات' : 'Save changes')}
            </Button>
          </div>

        </CardContent>
      </Card>
    </TooltipProvider>
  )
}

PluginAppearanceSection.displayName = 'PluginAppearanceSection'

export default PluginAppearanceSection
