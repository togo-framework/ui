'use client'

import ReactMarkdown, { type Components } from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { cn } from '../../lib/utils'

// ── Types ──────────────────────────────────────────────────────────────────────

export interface MarkdownContentProps {
  /** Markdown source — typically an assistant chat message. */
  content: string
  /**
   * Text direction. Drives RTL-safe layout (logical padding on lists and
   * blockquotes flips automatically; code blocks stay LTR regardless).
   * Defaults to 'ltr'.
   */
  dir?: 'ltr' | 'rtl'
  /** Extra classes merged onto the wrapper. */
  className?: string
}

// ── Element styling ────────────────────────────────────────────────────────────
//
// Styled with plain Tailwind utilities (NOT @tailwindcss/typography `prose`
// classes) so rendering is identical in every consuming product — the
// typography plugin is a product-level opt-in and cannot be assumed here.
//
// RTL safety: every directional space uses logical properties (ps-*, border-s,
// text-start) so the same markup mirrors correctly under dir="rtl".
// Code (inline + block) is always LTR — source code never mirrors.

const components: Components = {
  p: ({ node: _node, ref: _ref, ...props }) => (
    <p className="my-1.5 leading-relaxed" {...props} />
  ),
  a: ({ node: _node, ref: _ref, ...props }) => (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary underline underline-offset-2 break-words hover:opacity-80 transition-opacity duration-fast ease-standard"
      {...props}
    />
  ),
  ul: ({ node: _node, ref: _ref, ...props }) => (
    <ul className="my-1.5 list-disc ps-5 space-y-1" {...props} />
  ),
  ol: ({ node: _node, ref: _ref, ...props }) => (
    <ol className="my-1.5 list-decimal ps-5 space-y-1" {...props} />
  ),
  li: ({ node: _node, ref: _ref, ...props }) => (
    <li className="leading-relaxed" {...props} />
  ),
  blockquote: ({ node: _node, ref: _ref, ...props }) => (
    <blockquote
      className="my-2 border-s-2 border-border ps-3 text-muted-foreground italic"
      {...props}
    />
  ),
  // Block code: <pre> owns the box; forced LTR + start-aligned so code never
  // mirrors inside an RTL message bubble.
  pre: ({ node: _node, ref: _ref, ...props }) => (
    <pre
      dir="ltr"
      className="my-2 overflow-x-auto rounded-md border border-border bg-background/70 p-3 font-mono text-xs leading-relaxed text-start"
      {...props}
    />
  ),
  // Inline code gets a subtle chip; fenced code (inside <pre>, detectable via
  // the language- class) stays transparent so it doesn't double-box.
  code: ({ node: _node, ref: _ref, className, ...props }) => {
    const isBlock = /language-/.test(className ?? '')
    return (
      <code
        dir="ltr"
        className={cn(
          'font-mono',
          isBlock
            ? className
            : 'rounded bg-background/70 px-1 py-0.5 text-[0.85em]',
        )}
        {...props}
      />
    )
  },
  h1: ({ node: _node, ref: _ref, ...props }) => (
    <h1 className="mt-3 mb-1.5 text-base font-bold text-foreground" {...props} />
  ),
  h2: ({ node: _node, ref: _ref, ...props }) => (
    <h2 className="mt-3 mb-1 text-sm font-bold text-foreground" {...props} />
  ),
  h3: ({ node: _node, ref: _ref, ...props }) => (
    <h3 className="mt-2 mb-1 text-sm font-semibold text-foreground" {...props} />
  ),
  h4: ({ node: _node, ref: _ref, ...props }) => (
    <h4 className="mt-2 mb-0.5 text-sm font-semibold text-foreground" {...props} />
  ),
  h5: ({ node: _node, ref: _ref, ...props }) => (
    <h5 className="mt-2 mb-0.5 text-xs font-semibold text-foreground" {...props} />
  ),
  h6: ({ node: _node, ref: _ref, ...props }) => (
    <h6 className="mt-2 mb-0.5 text-xs font-semibold text-muted-foreground" {...props} />
  ),
  table: ({ node: _node, ref: _ref, ...props }) => (
    <div className="my-2 w-full overflow-x-auto">
      <table className="w-full border-collapse text-xs" {...props} />
    </div>
  ),
  th: ({ node: _node, ref: _ref, ...props }) => (
    <th
      className="border border-border bg-muted/50 px-2 py-1 text-start font-semibold"
      {...props}
    />
  ),
  td: ({ node: _node, ref: _ref, ...props }) => (
    <td className="border border-border px-2 py-1 text-start align-top" {...props} />
  ),
  hr: ({ node: _node, ref: _ref, ...props }) => (
    <hr className="my-3 border-border" {...props} />
  ),
  strong: ({ node: _node, ref: _ref, ...props }) => (
    <strong className="font-semibold text-foreground" {...props} />
  ),
}

// ── Component ──────────────────────────────────────────────────────────────────

/**
 * MarkdownContent
 *
 * Shared markdown renderer for assistant chat messages (copilot dock, chat
 * thread, project chat). GFM enabled (tables, strikethrough, task lists,
 * autolinks).
 *
 * Security: `skipHtml` — raw HTML in the markdown source is never rendered,
 * so no sanitizer is needed; links open in a new tab with rel="noopener".
 *
 * User messages should stay plain text — only assistant output goes through
 * this component.
 */
const MarkdownContent = ({ content, dir = 'ltr', className }: MarkdownContentProps) => {
  return (
    <div
      dir={dir}
      className={cn(
        'break-words text-sm [&>*:first-child]:mt-0 [&>*:last-child]:mb-0',
        className,
      )}
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]} skipHtml components={components}>
        {content}
      </ReactMarkdown>
    </div>
  )
}

MarkdownContent.displayName = 'MarkdownContent'

export default MarkdownContent
