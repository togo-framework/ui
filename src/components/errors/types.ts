/**
 * Error-tracking data contract (Sentry-style). Product-agnostic: every component
 * is presentational — data arrives via props, no fetching, no app imports.
 */

export type IssueLevel = "fatal" | "error" | "warning" | "info" | "debug";

export interface StackFrameContextLine {
  line: number;
  text: string;
  /** the line where the error occurred */
  current?: boolean;
}

export interface StackFrame {
  filename: string;
  function?: string;
  lineno?: number;
  colno?: number;
  /** true = application frame (vs. node_modules / framework) */
  inApp?: boolean;
  /** optional source context around the frame */
  context?: StackFrameContextLine[];
}

export interface IssueBreadcrumb {
  /** ISO 8601 */
  timestamp: string;
  type?: "navigation" | "http" | "ui" | "log" | "error" | "info";
  category?: string;
  message: string;
  level?: IssueLevel;
}

export interface IssueTag {
  key: string;
  value: string;
}

export interface IssueAssignee {
  name?: string;
  email?: string;
  avatarUrl?: string;
}

export interface Issue {
  id: string;
  /** e.g. "TypeError: Cannot read properties of undefined (reading 'id')" */
  title: string;
  /** where it happened, e.g. "app/checkout/page.tsx in handleSubmit" */
  culprit?: string;
  level: IssueLevel;
  /** total events (occurrences) */
  count: number;
  /** distinct users affected */
  userCount?: number;
  /** ISO 8601 */
  firstSeen: string;
  lastSeen: string;
  status?: "unresolved" | "resolved" | "ignored";
  assignee?: IssueAssignee;
  environment?: string;
  project?: string;
  /** events-over-time buckets for the row sparkline / detail chart */
  frequency?: number[];

  // ── detail payload ──
  stack?: StackFrame[];
  breadcrumbs?: IssueBreadcrumb[];
  tags?: IssueTag[];
}

export interface ErrorFilter {
  /** empty/undefined = all levels */
  levels?: IssueLevel[];
  environment?: string;
  /** ISO lower bound (or a relative key the app resolves) */
  range?: string;
  status?: Issue["status"];
  /** full-text search on title/culprit */
  q?: string;
}

export type IssueSort = "lastSeen" | "firstSeen" | "count" | "userCount";
