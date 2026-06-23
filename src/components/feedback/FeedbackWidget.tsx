"use client";

import * as React from "react";
import { MessageSquarePlus, Crosshair, X, Trash2, Bug, Lightbulb, HelpCircle } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { StatusBadge } from "../status/StatusBadge";

export interface PickedElement {
  selector: string;
  tag: string;
  text?: string;
}
export type FeedbackKind = "bug" | "idea" | "question";
export interface FeedbackItem {
  id: string;
  kind: FeedbackKind;
  comment: string;
  element?: PickedElement;
  createdAt: string;
}
export interface FeedbackWidgetProps {
  /** Existing items to show in the list. */
  items?: FeedbackItem[];
  /** Called when a new item is submitted (the host persists it). */
  onSubmit?: (item: Omit<FeedbackItem, "id" | "createdAt">) => void;
  onDelete?: (id: string) => void;
  language?: "en" | "ar";
  /** Hide the floating button and control open state externally. */
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

const T = {
  en: { title: "Feedback", newTab: "New", listTab: "List", pick: "Pick an element", picking: "Click any element to attach it · Esc to cancel",
    attached: "Attached", clear: "Clear", comment: "What's the feedback?", placeholder: "Describe the bug, idea, or question…",
    submit: "Send feedback", empty: "No feedback yet.", kinds: { bug: "Bug", idea: "Idea", question: "Question" } },
  ar: { title: "ملاحظات", newTab: "جديد", listTab: "القائمة", pick: "اختر عنصرًا", picking: "انقر أي عنصر لإرفاقه · Esc للإلغاء",
    attached: "مُرفق", clear: "مسح", comment: "ما هي الملاحظة؟", placeholder: "صف الخطأ أو الفكرة أو السؤال…",
    submit: "إرسال", empty: "لا توجد ملاحظات بعد.", kinds: { bug: "خطأ", idea: "فكرة", question: "سؤال" } },
};

const KIND_ICON = { bug: Bug, idea: Lightbulb, question: HelpCircle };
const KIND_TONE = { bug: "danger", idea: "info", question: "warning" } as const;

// Build a reasonably-unique CSS selector path for an element.
function cssPath(el: Element): string {
  const parts: string[] = [];
  let node: Element | null = el;
  while (node && node.nodeType === 1 && parts.length < 5 && node !== document.body) {
    let part = node.tagName.toLowerCase();
    if ((node as HTMLElement).id) { part += `#${(node as HTMLElement).id}`; parts.unshift(part); break; }
    const cls = (node.getAttribute("class") || "").trim().split(/\s+/).filter(Boolean).slice(0, 2);
    if (cls.length) part += "." + cls.join(".");
    const parent = node.parentElement;
    if (parent) {
      const sibs = Array.from(parent.children).filter((c) => c.tagName === node!.tagName);
      if (sibs.length > 1) part += `:nth-of-type(${sibs.indexOf(node) + 1})`;
    }
    parts.unshift(part);
    node = node.parentElement;
  }
  return parts.join(" > ");
}

export function FeedbackWidget({
  items = [], onSubmit, onDelete, language = "en", open: openProp, onOpenChange, className,
}: FeedbackWidgetProps) {
  const t = T[language];
  const isRTL = language === "ar";
  const [internalOpen, setInternalOpen] = React.useState(false);
  const open = openProp ?? internalOpen;
  const setOpen = (v: boolean) => { setInternalOpen(v); onOpenChange?.(v); };

  const [tab, setTab] = React.useState<"new" | "list">("new");
  const [kind, setKind] = React.useState<FeedbackKind>("bug");
  const [comment, setComment] = React.useState("");
  const [picked, setPicked] = React.useState<PickedElement | null>(null);
  const [picking, setPicking] = React.useState(false);
  const [hl, setHl] = React.useState<DOMRect | null>(null);

  // Element picker — highlights the element under the cursor, click to attach.
  React.useEffect(() => {
    if (!picking) return;
    const ignore = (el: Element | null) => !el || el.closest("[data-feedback-ui]");
    const move = (e: MouseEvent) => {
      const el = document.elementFromPoint(e.clientX, e.clientY);
      setHl(ignore(el) ? null : el!.getBoundingClientRect());
    };
    const click = (e: MouseEvent) => {
      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (ignore(el)) return;
      e.preventDefault(); e.stopPropagation();
      setPicked({ selector: cssPath(el!), tag: el!.tagName.toLowerCase(), text: (el!.textContent || "").trim().slice(0, 60) || undefined });
      setPicking(false); setHl(null); setOpen(true);
    };
    const key = (e: KeyboardEvent) => { if (e.key === "Escape") { setPicking(false); setHl(null); setOpen(true); } };
    document.addEventListener("mousemove", move, true);
    document.addEventListener("click", click, true);
    document.addEventListener("keydown", key, true);
    const prevCursor = document.body.style.cursor;
    document.body.style.cursor = "crosshair";
    return () => {
      document.removeEventListener("mousemove", move, true);
      document.removeEventListener("click", click, true);
      document.removeEventListener("keydown", key, true);
      document.body.style.cursor = prevCursor;
    };
  }, [picking]);

  function startPicking() { setOpen(false); setPicking(true); }
  function submit() {
    if (!comment.trim()) return;
    onSubmit?.({ kind, comment: comment.trim(), element: picked ?? undefined });
    setComment(""); setPicked(null); setTab("list");
  }

  return (
    <div data-feedback-ui dir={isRTL ? "rtl" : "ltr"} className={className}>
      {/* Highlight overlay while picking */}
      {picking && (
        <>
          <div className="fixed inset-x-0 top-0 z-[10000] bg-primary px-4 py-2 text-center text-sm font-medium text-primary-foreground">
            <Crosshair className="me-2 inline h-4 w-4" />{t.picking}
          </div>
          {hl && (
            <div
              className="pointer-events-none fixed z-[9999] rounded border-2 border-primary bg-primary/10"
              style={{ top: hl.top, left: hl.left, width: hl.width, height: hl.height }}
            />
          )}
        </>
      )}

      {/* Floating trigger */}
      {openProp === undefined && !open && !picking && (
        <button
          onClick={() => setOpen(true)}
          aria-label={t.title}
          className="fixed bottom-5 end-5 z-[9990] flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition hover:opacity-90"
        >
          <MessageSquarePlus className="h-5 w-5" />
        </button>
      )}

      {/* Panel */}
      {open && (
        <div className="fixed bottom-5 end-5 z-[9991] flex max-h-[70vh] w-80 flex-col overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
          <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
            <span className="font-semibold">{t.title}</span>
            <button onClick={() => setOpen(false)} className="rounded p-1 text-muted-foreground hover:bg-accent hover:text-foreground">
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 border-b border-border p-1">
            {(["new", "list"] as const).map((tb) => (
              <Button key={tb} size="sm" variant={tab === tb ? "secondary" : "ghost"} className="h-7 flex-1"
                onClick={() => setTab(tb)}>
                {tb === "new" ? t.newTab : `${t.listTab} (${items.length})`}
              </Button>
            ))}
          </div>

          {tab === "new" ? (
            <div className="space-y-3 overflow-y-auto p-4">
              {/* Kind */}
              <div className="flex gap-1.5">
                {(["bug", "idea", "question"] as const).map((k) => {
                  const Icon = KIND_ICON[k];
                  return (
                    <Button key={k} size="sm" variant={kind === k ? "default" : "outline"} className="h-8 flex-1 gap-1.5"
                      onClick={() => setKind(k)}>
                      <Icon className="h-3.5 w-3.5" />{t.kinds[k]}
                    </Button>
                  );
                })}
              </div>

              {/* Element picker */}
              <div className="space-y-1.5">
                {picked ? (
                  <div className="flex items-center justify-between gap-2 rounded-lg border border-border bg-muted/40 p-2">
                    <span className="min-w-0">
                      <span className="block text-xs font-medium">{t.attached}: <code className="text-primary">&lt;{picked.tag}&gt;</code></span>
                      <span className="block truncate font-mono text-[10px] text-muted-foreground">{picked.selector}</span>
                    </span>
                    <button onClick={() => setPicked(null)} className="shrink-0 text-xs text-muted-foreground hover:text-destructive">{t.clear}</button>
                  </div>
                ) : (
                  <Button variant="outline" className="w-full gap-2" onClick={startPicking}>
                    <Crosshair className="h-4 w-4" />{t.pick}
                  </Button>
                )}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="fb-comment">{t.comment}</Label>
                <Textarea id="fb-comment" rows={4} value={comment} onChange={(e) => setComment(e.target.value)} placeholder={t.placeholder} />
              </div>

              <Button className="w-full" disabled={!comment.trim()} onClick={submit}>{t.submit}</Button>
            </div>
          ) : (
            <div className="space-y-2 overflow-y-auto p-3">
              {items.length === 0 ? (
                <p className="p-6 text-center text-sm text-muted-foreground">{t.empty}</p>
              ) : items.map((it) => {
                const Icon = KIND_ICON[it.kind];
                return (
                  <div key={it.id} className="rounded-lg border border-border p-2.5">
                    <div className="mb-1 flex items-center justify-between gap-2">
                      <StatusBadge tone={KIND_TONE[it.kind]}><Icon className="h-3 w-3" /> {t.kinds[it.kind]}</StatusBadge>
                      {onDelete && (
                        <button onClick={() => onDelete(it.id)} className="text-muted-foreground hover:text-destructive">
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      )}
                    </div>
                    <p className="text-sm">{it.comment}</p>
                    {it.element && <p className="mt-1 truncate font-mono text-[10px] text-muted-foreground">&lt;{it.element.tag}&gt; {it.element.selector}</p>}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
