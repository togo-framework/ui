"use client";

// TypingTerminal — a live CLI playback for marketing heroes. Types each command at
// a `❯` prompt, then streams its output lines, step by step, and finally reveals an
// `endSlot` (e.g. a screenshot of the resulting app). Prerender/SEO/no-JS safe: the
// initial render shows the COMPLETE final frame (all output + endSlot); on the client
// it resets and animates, unless `prefers-reduced-motion` is set.

import * as React from "react";
import { cn } from "../../lib/utils";

export interface TerminalStep {
  /** Command typed at the prompt (without the leading ❯). */
  cmd: string;
  /** Output lines streamed after the command. */
  out?: string[];
}

export interface TypingTerminalProps {
  steps: TerminalStep[];
  /** Revealed after the last step finishes (e.g. an app screenshot/mock). */
  endSlot?: React.ReactNode;
  title?: string;
  className?: string;
  /** ms per typed character. */
  typeMs?: number;
  /** ms between streamed output lines. */
  lineMs?: number;
  /** Loop the playback (default true). */
  loop?: boolean;
}

type Frame = { lines: React.ReactNode[]; showEnd: boolean };

function fullFrame(steps: TerminalStep[]): Frame {
  const lines: React.ReactNode[] = [];
  steps.forEach((s, i) => {
    lines.push(
      <div key={`c${i}`} className="whitespace-pre-wrap break-words">
        <span className="text-[#5CDDEC]">❯ </span>
        <span className="text-foreground">{s.cmd}</span>
      </div>,
    );
    (s.out || []).forEach((l, j) => lines.push(<div key={`o${i}-${j}`} className="whitespace-pre-wrap break-words text-muted-foreground">{l}</div>));
  });
  return { lines, showEnd: true };
}

// Keep the complete final frame when motion is unwanted OR under headless automation
// (the prerender crawler) so the static HTML ships the full transcript + endSlot for SEO.
const keepStaticFrame = () =>
  typeof window !== "undefined" &&
  (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches || (navigator as Navigator)?.webdriver === true);

export function TypingTerminal({ steps, endSlot, title = "~/myapp — togo", className, typeMs = 26, lineMs = 110, loop = true }: TypingTerminalProps) {
  // SSR / first paint = the complete final frame (crawlers + no-JS see everything).
  const [frame, setFrame] = React.useState<Frame>(() => fullFrame(steps));
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (keepStaticFrame()) return; // keep the static final frame (reduced-motion / prerender)
    let alive = true;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const wait = (ms: number) => new Promise<void>((res) => timers.push(setTimeout(res, ms)));

    async function run() {
      while (alive) {
        const lines: React.ReactNode[] = [];
        setFrame({ lines: [], showEnd: false });
        for (let i = 0; i < steps.length && alive; i++) {
          const s = steps[i];
          // type the command char by char
          for (let c = 1; c <= s.cmd.length && alive; c++) {
            const typed = s.cmd.slice(0, c);
            setFrame({
              lines: [...lines, <div key={`c${i}`} className="whitespace-pre-wrap break-words"><span className="text-[#5CDDEC]">❯ </span><span className="text-foreground">{typed}</span><span className="ml-0.5 inline-block w-2 -mb-0.5 h-4 bg-[#5CDDEC] animate-pulse" /></div>],
              showEnd: false,
            });
            await wait(typeMs);
          }
          lines.push(<div key={`c${i}`} className="whitespace-pre-wrap break-words"><span className="text-[#5CDDEC]">❯ </span><span className="text-foreground">{s.cmd}</span></div>);
          await wait(220);
          for (let j = 0; j < (s.out?.length || 0) && alive; j++) {
            lines.push(<div key={`o${i}-${j}`} className="whitespace-pre-wrap break-words text-muted-foreground">{s.out![j]}</div>);
            setFrame({ lines: [...lines], showEnd: false });
            if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
            await wait(lineMs);
          }
        }
        if (!alive) return;
        setFrame({ lines: [...lines], showEnd: true });
        if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        if (!loop) return;
        await wait(4200);
      }
    }
    run();
    return () => { alive = false; timers.forEach(clearTimeout); };
  }, [steps, typeMs, lineMs, loop]);

  return (
    <div className={cn("rounded-2xl border border-border overflow-hidden bg-[#080b0f] shadow-2xl", className)}>
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" /><span className="w-3 h-3 rounded-full bg-[#febc2e]" /><span className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ms-2 font-mono text-xs text-muted-foreground">{title}</span>
      </div>
      <div ref={scrollRef} className="p-5 font-mono text-[12.5px] sm:text-[13px] leading-[1.9] max-h-[340px] overflow-auto">
        {frame.lines}
        {frame.showEnd && endSlot ? <div className="mt-4 pt-4 border-t border-white/10">{endSlot}</div> : null}
      </div>
    </div>
  );
}
TypingTerminal.displayName = "TypingTerminal";
