'use client'

// PluginPageHeader — standard section header for plugin-detail sub-pages.
//
// ADAPTED from app/src/components/superadmin/plugins/PluginPageHeader.tsx:
//   - useLanguage hook → language prop
//   - No other changes needed.

import type { LucideIcon } from "lucide-react";

export interface PluginPageHeaderProps {
  icon?: LucideIcon;
  title_en: string;
  title_ar: string;
  subtitle_en?: string;
  subtitle_ar?: string;
  actions?: React.ReactNode;
  /** Current UI language. */
  language: "en" | "ar";
}

export const PluginPageHeader = ({
  icon: Icon,
  title_en,
  title_ar,
  subtitle_en,
  subtitle_ar,
  actions,
  language,
}: PluginPageHeaderProps) => {
  const isRTL = language === "ar";
  const title = isRTL ? title_ar : title_en;
  const subtitle = isRTL ? subtitle_ar : subtitle_en;

  return (
    <div className="mb-1">
      <div className="flex items-center gap-2">
        {Icon && (
          <Icon
            className="h-5 w-5 text-muted-foreground shrink-0"
            aria-hidden="true"
          />
        )}
        <h1 className="text-xl font-semibold text-foreground">{title}</h1>
        {actions && (
          <div className="ms-auto flex items-center gap-2">{actions}</div>
        )}
      </div>
      {subtitle && (
        <p className="mt-1 text-sm text-muted-foreground text-start">
          {subtitle}
        </p>
      )}
    </div>
  );
};

PluginPageHeader.displayName = "PluginPageHeader";
