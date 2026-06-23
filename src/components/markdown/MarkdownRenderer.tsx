"use client";

import * as React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { cn } from "../../lib/utils";

export interface MarkdownRendererProps {
  content: string;
  language?: "en" | "ar";
  className?: string;
}

// ── Mermaid diagram block (rendered client-side, lazily) ────────────────────────
let _mermaidPromise: Promise<typeof import("mermaid").default> | null = null;
function loadMermaid() {
  if (!_mermaidPromise) {
    _mermaidPromise = import("mermaid").then((m) => {
      m.default.initialize({ startOnLoad: false, securityLevel: "strict", theme: "neutral" });
      return m.default;
    });
  }
  return _mermaidPromise;
}

let _mermaidSeq = 0;
function MermaidBlock({ code }: { code: string }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [error, setError] = React.useState<string | null>(null);
  React.useEffect(() => {
    let cancelled = false;
    loadMermaid()
      .then(async (mermaid) => {
        const id = `tg-mermaid-${++_mermaidSeq}`;
        const { svg } = await mermaid.render(id, code);
        if (!cancelled && ref.current) ref.current.innerHTML = svg;
      })
      .catch((e) => !cancelled && setError(String(e?.message || e)));
    return () => { cancelled = true; };
  }, [code]);
  if (error) {
    return (
      <pre className="overflow-auto rounded-lg border border-destructive/40 bg-destructive/10 p-3 text-xs text-destructive">
        Mermaid error: {error}
        {"\n\n"}{code}
      </pre>
    );
  }
  return <div ref={ref} className="my-3 flex justify-center overflow-x-auto rounded-lg border border-border bg-card p-3" />;
}

/** MarkdownRenderer — GFM markdown with highlighted code, mermaid diagrams, and
 * token-themed prose (headings/lists/tables/code/quote/links). RTL-aware. */
export function MarkdownRenderer({ content, language = "en", className }: MarkdownRendererProps) {
  const isRTL = language === "ar";
  return (
    <div dir={isRTL ? "rtl" : "ltr"} className={cn("tg-md text-sm leading-relaxed text-foreground", className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[[rehypeHighlight, { detect: true, ignoreMissing: true }]]}
        components={{
          h1: (p) => <h1 className="mb-3 mt-5 text-2xl font-bold" {...p} />,
          h2: (p) => <h2 className="mb-2 mt-5 border-b border-border pb-1 text-xl font-semibold" {...p} />,
          h3: (p) => <h3 className="mb-2 mt-4 text-lg font-semibold" {...p} />,
          p: (p) => <p className="my-2.5" {...p} />,
          a: (p) => <a className="font-medium text-primary underline-offset-2 hover:underline" {...p} />,
          ul: (p) => <ul className="my-2.5 list-disc space-y-1 ps-6" {...p} />,
          ol: (p) => <ol className="my-2.5 list-decimal space-y-1 ps-6" {...p} />,
          li: (p) => <li className="marker:text-muted-foreground" {...p} />,
          blockquote: (p) => <blockquote className="my-3 border-s-4 border-primary/40 ps-4 text-muted-foreground" {...p} />,
          hr: () => <hr className="my-5 border-border" />,
          table: (p) => <div className="my-3 overflow-x-auto rounded-lg border border-border"><table className="w-full text-start text-sm" {...p} /></div>,
          thead: (p) => <thead className="bg-muted/50 text-muted-foreground" {...p} />,
          th: (p) => <th className="border-b border-border px-3 py-2 text-start font-medium" {...p} />,
          td: (p) => <td className="border-t border-border px-3 py-2" {...p} />,
          code(props) {
            const { children, className: cls, node, ...rest } = props as any;
            const text = String(children ?? "");
            const lang = /language-(\w+)/.exec(cls || "")?.[1];
            const inline = !node || node.position?.start.line === node.position?.end.line;
            if (lang === "mermaid") return <MermaidBlock code={text.replace(/\n$/, "")} />;
            if (inline && !cls) return <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.85em] text-foreground" {...rest}>{children}</code>;
            return <code className={cn("hljs", cls)} {...rest}>{children}</code>;
          },
          pre: (p) => <pre className="my-3 overflow-x-auto rounded-lg border border-border bg-muted/40 p-3 text-[0.8rem] leading-relaxed [&>code]:bg-transparent [&>code]:p-0" dir="ltr" {...p} />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
