'use client'

// PluginSectionCard — standard section-card wrapper for plugin detail sub-pages.
//
// ADAPTED from app/src/components/superadmin/plugins/PluginSectionCard.tsx:
//   - useLanguage hook → language prop
//   - @/components/ui/* → ../ui/*; @/lib/utils → ../../lib/utils

import type { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { cn } from "../../lib/utils";

export interface PluginSectionCardProps {
  icon?: LucideIcon;
  title_en: string;
  title_ar: string;
  description_en?: string;
  description_ar?: string;
  /** Optional actions slot at the inline-end of the title row. */
  actions?: React.ReactNode;
  /** Adds destructive accent border for dangerous sections. */
  destructive?: boolean;
  className?: string;
  children: React.ReactNode;
  /** Current UI language. */
  language: "en" | "ar";
}

export const PluginSectionCard = ({
  icon: Icon,
  title_en,
  title_ar,
  description_en,
  description_ar,
  actions,
  destructive,
  className,
  children,
  language,
}: PluginSectionCardProps) => {
  const isRTL = language === "ar";
  const title = isRTL ? title_ar : title_en;
  const description = isRTL ? description_ar : description_en;

  return (
    <Card
      dir={isRTL ? "rtl" : "ltr"}
      className={cn(destructive && "border-destructive/30", className)}
    >
      <CardHeader className="pb-3">
        <CardTitle
          className={cn(
            "flex items-center gap-2 text-base font-medium",
            destructive && "text-destructive"
          )}
        >
          {Icon && (
            <Icon
              className="h-4 w-4 shrink-0 text-muted-foreground"
              aria-hidden="true"
            />
          )}
          <span className="flex-1 text-start">{title}</span>
          {actions && (
            <span className="flex items-center gap-2">{actions}</span>
          )}
        </CardTitle>
        {description && (
          <p className="text-sm text-muted-foreground text-start">
            {description}
          </p>
        )}
      </CardHeader>
      <CardContent className="space-y-4">{children}</CardContent>
    </Card>
  );
};

PluginSectionCard.displayName = "PluginSectionCard";
