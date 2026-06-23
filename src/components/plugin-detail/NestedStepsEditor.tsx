'use client'

/**
 * NestedStepsEditor — multi-level drag-and-drop editor for a workflow step TREE.
 *
 * Steps can be reordered within a branch AND moved across nesting levels
 * (top-level ↔ an `if`'s then/else ↔ a `for_each`'s loop body). Built on
 * @dnd-kit with one DndContext + a SortableContext per branch; drag-end resolves
 * the source/target branch by the dragged item's path and moves it immutably.
 * A gear button opens the per-step options modal (via onEditStep).
 */

import * as React from 'react'
import {
  DndContext, DragOverlay, closestCenter, KeyboardSensor, PointerSensor,
  useSensor, useSensors, useDroppable, type DragEndEvent, type DragStartEvent,
} from '@dnd-kit/core'
import {
  SortableContext, sortableKeyboardCoordinates, useSortable, verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { GripVertical, Settings2, Trash2, GitBranch, Repeat, Clock, Database, Sparkles, Globe, ChevronRight } from 'lucide-react'
import { cn } from '../../lib/utils'
import { Badge } from '../ui/badge'

export type Step = Record<string, any>

export interface NestedStepsEditorProps {
  steps: Step[]
  language?: 'en' | 'ar'
  onChange: (steps: Step[]) => void
  onEditStep?: (step: Step) => void
  onDeleteStep?: (uid: string) => void
  className?: string
}

// ── tree helpers ────────────────────────────────────────────────────────────
let _seq = 0
const newUid = () => `s${(_seq++).toString(36)}-${Date.now().toString(36)}`

function ensureUids(steps: Step[]): Step[] {
  return steps.map((s) => {
    const next: Step = { ...s, _uid: s._uid ?? newUid() }
    for (const k of ['then', 'else', 'steps']) if (Array.isArray(next[k])) next[k] = ensureUids(next[k])
    return next
  })
}

const BRANCH_KEYS = ['then', 'else', 'steps'] as const
type BranchKey = (typeof BRANCH_KEYS)[number]

function branchesFor(step: Step): BranchKey[] {
  const kind = step.kind
  if (kind === 'if') return ['then', 'else']
  if (kind === 'for_each' || kind === 'loop' || Array.isArray(step.steps)) return ['steps']
  return []
}

type Path = (string | number)[] // alternating [index, key, index, key, …, index]

function findPath(steps: Step[], uid: string, prefix: Path = []): Path | null {
  for (let i = 0; i < steps.length; i++) {
    const s = steps[i]
    if (s._uid === uid) return [...prefix, i]
    for (const k of BRANCH_KEYS) {
      if (Array.isArray(s[k])) {
        const r = findPath(s[k], uid, [...prefix, i, k])
        if (r) return r
      }
    }
  }
  return null
}

// returns the container array for a containerPath (path without trailing index)
function getContainer(root: Step[], containerPath: Path): Step[] {
  let arr: Step[] = root
  let node: Step | null = null
  for (const tok of containerPath) {
    if (typeof tok === 'number') node = arr[tok]
    else { if (!Array.isArray(node![tok])) node![tok] = []; arr = node![tok] }
  }
  return arr
}

const samePath = (a: Path, b: Path) => a.length === b.length && a.every((v, i) => v === b[i])
const startsWith = (p: Path, prefix: Path) => prefix.length <= p.length && prefix.every((v, i) => v === p[i])

// ── leaf summary (compact, human-ish) ───────────────────────────────────────
const KIND_ICON: Record<string, React.ElementType> = {
  cron_trigger: Clock, if: GitBranch, for_each: Repeat, loop: Repeat,
  sql_select: Database, sql_insert: Database, sql_update: Database,
  gemini_call: Sparkles, adk_call: Sparkles, http_call: Globe, http_request: Globe, webhook: Globe,
}
function kindLabel(kind: string, isRTL: boolean): string {
  const m: Record<string, [string, string]> = {
    cron_trigger: ['Schedule', 'جدولة'], if: ['Condition', 'شرط'], for_each: ['Repeat', 'تكرار'],
    sql_select: ['Read data', 'قراءة'], sql_insert: ['Save', 'حفظ'], sql_update: ['Update', 'تحديث'],
    gemini_call: ['AI', 'ذكاء'], adk_call: ['AI', 'ذكاء'], http_call: ['HTTP', 'HTTP'],
  }
  return m[kind] ? (isRTL ? m[kind][1] : m[kind][0]) : kind.replace(/[_-]+/g, ' ')
}
const BRANCH_LABEL: Record<BranchKey, [string, string]> = {
  then: ['THEN', 'عندها'], else: ['ELSE', 'وإلا'], steps: ['LOOP BODY', 'جسم الحلقة'],
}

// ── sortable row ────────────────────────────────────────────────────────────
function StepRow({
  step, isRTL, depth, onEditStep, onDeleteStep, renderBranches,
}: {
  step: Step; isRTL: boolean; depth: number
  onEditStep?: (s: Step) => void; onDeleteStep?: (uid: string) => void
  renderBranches: (step: Step) => React.ReactNode
}) {
  const uid = String(step._uid)
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: uid })
  const Icon = KIND_ICON[step.kind] ?? ChevronRight
  const style: React.CSSProperties = { transform: CSS.Transform.toString(transform), transition }

  return (
    <div ref={setNodeRef} style={style} className={cn(isDragging && 'opacity-50')}>
      <div className="flex items-center gap-2 rounded-md border border-border bg-card px-2 py-1.5 shadow-sm">
        <button
          type="button"
          className="shrink-0 cursor-grab touch-none text-muted-foreground/60 hover:text-foreground active:cursor-grabbing"
          aria-label={isRTL ? 'اسحب' : 'Drag'}
          {...attributes}
          {...listeners}
        >
          <GripVertical className="h-4 w-4" />
        </button>
        <Icon className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
        <Badge variant="secondary" className="h-4 rounded-sm px-1 text-[10px]">{kindLabel(step.kind ?? '?', isRTL)}</Badge>
        <span className="min-w-0 flex-1 truncate text-xs text-muted-foreground">{compactSummary(step, isRTL)}</span>
        <button
          type="button"
          onClick={() => onEditStep?.(step)}
          className="shrink-0 rounded p-1 text-muted-foreground hover:bg-accent hover:text-foreground"
          aria-label={isRTL ? 'الإعدادات' : 'Settings'}
        >
          <Settings2 className="h-3.5 w-3.5" />
        </button>
        <button
          type="button"
          onClick={() => onDeleteStep?.(uid)}
          className="shrink-0 rounded p-1 text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
          aria-label={isRTL ? 'حذف' : 'Delete'}
        >
          <Trash2 className="h-3.5 w-3.5" />
        </button>
      </div>
      {renderBranches(step)}
    </div>
  )
}

function compactSummary(step: Step, isRTL: boolean): string {
  switch (step.kind) {
    case 'cron_trigger': return isRTL ? `كل ${step.schedule ?? '?'}` : `every ${step.schedule ?? '?'}`
    case 'if': return isRTL ? 'حسب الشرط' : 'when condition is met'
    case 'for_each': return isRTL ? `لكل ${humanVar(step.over)}` : `for each ${humanVar(step.over)}`
    case 'sql_select': return isRTL ? 'قراءة سجلات' : 'reads records'
    case 'sql_insert': return isRTL ? 'حفظ النتائج' : 'saves results'
    case 'adk_call': case 'gemini_call': return isRTL ? 'خطوة ذكاء اصطناعي' : 'AI step'
    default: return String(step.kind ?? '').replace(/[_-]+/g, ' ')
  }
}
const humanVar = (v: any) => String(v ?? 'item').replace(/^\$/, '').replace(/[_-]+/g, ' ')

// ── empty-branch droppable ──────────────────────────────────────────────────
function EmptyDrop({ id, label }: { id: string; label: string }) {
  const { setNodeRef, isOver } = useDroppable({ id })
  return (
    <div
      ref={setNodeRef}
      className={cn(
        'rounded-md border border-dashed px-3 py-2 text-center text-[11px] text-muted-foreground transition',
        isOver ? 'border-primary bg-primary/5 text-primary' : 'border-border',
      )}
    >
      {label}
    </div>
  )
}

// ── main ────────────────────────────────────────────────────────────────────
export function NestedStepsEditor({
  steps, language = 'en', onChange, onEditStep, onDeleteStep, className,
}: NestedStepsEditorProps) {
  const isRTL = language === 'ar'
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 4 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  )
  const [activeStep, setActiveStep] = React.useState<Step | null>(null)

  // ensure uids once per identity change
  const tree = React.useMemo(() => ensureUids(steps), [steps])

  // droppable id for an empty branch encodes its container path: "drop::0::then"
  const emptyDropId = (containerPath: Path) => `drop::${containerPath.join('::')}`
  const parseEmptyDrop = (id: string): Path | null => {
    if (!id.startsWith('drop::')) return null
    return id.slice(6).split('::').filter(Boolean).map((t) => (/^\d+$/.test(t) ? Number(t) : t))
  }

  const onDragStart = (e: DragStartEvent) => {
    const p = findPath(tree, String(e.active.id))
    if (p) {
      const cont = getContainer(tree, p.slice(0, -1))
      setActiveStep(cont[p[p.length - 1] as number])
    }
  }

  const onDragEnd = (e: DragEndEvent) => {
    setActiveStep(null)
    const { active, over } = e
    if (!over || active.id === over.id) return
    const root: Step[] = JSON.parse(JSON.stringify(tree))
    const fromPath = findPath(root, String(active.id))
    if (!fromPath) return

    // resolve target container + index
    let toContainerPath: Path
    let toIndex: number
    const overEmpty = parseEmptyDrop(String(over.id))
    if (overEmpty) {
      toContainerPath = overEmpty
      toIndex = getContainer(root, toContainerPath).length
    } else {
      const overPath = findPath(root, String(over.id))
      if (!overPath) return
      toContainerPath = overPath.slice(0, -1)
      toIndex = overPath[overPath.length - 1] as number
    }

    // never drop a step into its own subtree
    if (startsWith(toContainerPath, fromPath)) return

    // remove from source
    const fromContainerPath = fromPath.slice(0, -1)
    const fromIdx = fromPath[fromPath.length - 1] as number
    const fromArr = getContainer(root, fromContainerPath)
    const [moved] = fromArr.splice(fromIdx, 1)
    if (!moved) return

    // adjust target index if same container and we removed an earlier sibling
    if (samePath(fromContainerPath, toContainerPath) && fromIdx < toIndex) toIndex -= 1

    const toArr = getContainer(root, toContainerPath)
    toArr.splice(Math.max(0, Math.min(toIndex, toArr.length)), 0, moved)
    onChange(root)
  }

  // recursive branch renderer
  const renderBranch = (arr: Step[], containerPath: Path, depth: number, label?: string): React.ReactNode => (
    <div className={cn(depth > 0 && 'ms-5 border-s-2 border-dashed border-border ps-3')}>
      {label && <div className="mb-1 mt-1.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">{label}</div>}
      <SortableContext items={arr.map((s) => String(s._uid))} strategy={verticalListSortingStrategy}>
        <div className="space-y-1.5">
          {arr.length === 0 ? (
            <EmptyDrop id={emptyDropId(containerPath)} label={isRTL ? 'أفلت خطوة هنا' : 'Drop a step here'} />
          ) : (
            arr.map((s, i) => (
              <StepRow
                key={String(s._uid)}
                step={s}
                isRTL={isRTL}
                depth={depth}
                onEditStep={onEditStep}
                onDeleteStep={onDeleteStep}
                renderBranches={(step) => {
                  const bks = branchesFor(step)
                  if (bks.length === 0) return null
                  return (
                    <div className="mt-1.5 space-y-1">
                      {bks.map((bk) =>
                        renderBranch(
                          Array.isArray(step[bk]) ? step[bk] : [],
                          [...containerPath, i, bk],
                          depth + 1,
                          isRTL ? BRANCH_LABEL[bk][1] : BRANCH_LABEL[bk][0],
                        ),
                      )}
                    </div>
                  )
                }}
              />
            ))
          )}
        </div>
      </SortableContext>
    </div>
  )

  return (
    <div className={cn('text-sm', className)} dir={isRTL ? 'rtl' : 'ltr'}>
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragStart={onDragStart} onDragEnd={onDragEnd}>
        {renderBranch(tree, [], 0)}
        <DragOverlay>
          {activeStep ? (
            <div className="flex items-center gap-2 rounded-md border border-primary/40 bg-card px-2 py-1.5 shadow-lg">
              <GripVertical className="h-4 w-4 text-muted-foreground/60" />
              <Badge variant="secondary" className="h-4 rounded-sm px-1 text-[10px]">{kindLabel(activeStep.kind ?? '?', isRTL)}</Badge>
              <span className="text-xs text-muted-foreground">{compactSummary(activeStep, isRTL)}</span>
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  )
}

NestedStepsEditor.displayName = 'NestedStepsEditor'
