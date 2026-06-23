import { formatRelativeTime } from "../../lib/utils";
import type { IssueLevel } from "./types";

export type Lang = "en" | "ar";

/** Map a Sentry-style level to a StatusBadge tone. */
export function levelTone(level: IssueLevel): "danger" | "warning" | "info" | "neutral" {
  switch (level) {
    case "fatal":
    case "error":
      return "danger";
    case "warning":
      return "warning";
    case "info":
      return "info";
    default:
      return "neutral";
  }
}

export function relTime(iso: string): string {
  try {
    return formatRelativeTime(iso);
  } catch {
    return iso;
  }
}

export const STR = {
  en: {
    issues: "Issues", search: "Search errors…", allLevels: "All levels", environment: "Environment",
    allEnvs: "All environments", range: "Time range", events: "Events", users: "Users",
    lastSeen: "Last seen", firstSeen: "First seen", assignee: "Assignee", noIssues: "No errors 🎉",
    resolve: "Resolve", ignore: "Ignore", resolved: "Resolved", ignored: "Ignored", unresolved: "Unresolved",
    stackTrace: "Stack trace", breadcrumbs: "Breadcrumbs", tags: "Tags", overview: "Overview",
    occurrences: "Occurrences", inApp: "In app", selectIssue: "Select an issue to see details",
    sortLastSeen: "Last seen", sortFirstSeen: "First seen", sortEvents: "Events", sortUsers: "Users",
    title: "Error", culprit: "Location",
  },
  ar: {
    issues: "الأخطاء", search: "ابحث في الأخطاء…", allLevels: "كل المستويات", environment: "البيئة",
    allEnvs: "كل البيئات", range: "النطاق الزمني", events: "الأحداث", users: "المستخدمون",
    lastSeen: "آخر ظهور", firstSeen: "أول ظهور", assignee: "المُسنَد", noIssues: "لا أخطاء 🎉",
    resolve: "حلّ", ignore: "تجاهل", resolved: "مُحَل", ignored: "مُتجاهَل", unresolved: "غير مُحَل",
    stackTrace: "تتبّع المكدّس", breadcrumbs: "فتات التتبّع", tags: "الوسوم", overview: "نظرة عامة",
    occurrences: "مرات الحدوث", inApp: "داخل التطبيق", selectIssue: "اختر خطأً لعرض التفاصيل",
    sortLastSeen: "آخر ظهور", sortFirstSeen: "أول ظهور", sortEvents: "الأحداث", sortUsers: "المستخدمون",
    title: "الخطأ", culprit: "الموقع",
  },
} as const;
