"use client";

// MascotMark — turns the ToGO head mark into a friendly "character": a gentle float,
// a periodic head-tilt, and a quick squash "nod" so it feels alive on the hero. Pure
// CSS keyframes (no JS), and fully disabled under `prefers-reduced-motion` so prerender
// + accessibility get a clean static mark.

import * as React from "react";
import { cn } from "../../lib/utils";

export interface MascotMarkProps {
  /** Source of the head mark SVG (defaults to /togo-mark.svg). */
  src?: string;
  alt?: string;
  className?: string;
}

const KEYFRAMES = `
@keyframes tgMascotFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
@keyframes tgMascotChar {
  0%,100%   { transform: rotate(0deg) scaleX(1) scaleY(1); }
  44%       { transform: rotate(0deg) scaleX(1) scaleY(1); }
  48%       { transform: rotate(-3deg) scaleX(1.04) scaleY(0.92); } /* squash nod */
  52%       { transform: rotate(-3deg) scaleX(0.98) scaleY(1.05); } /* stretch */
  60%       { transform: rotate(3deg)  scaleX(1) scaleY(1); }
  72%       { transform: rotate(0deg)  scaleX(1) scaleY(1); }
}
.tg-mascot { will-change: transform; animation: tgMascotFloat 6s ease-in-out infinite; }
.tg-mascot > img { display:block; width:100%; height:100%; transform-origin: 50% 70%; animation: tgMascotChar 5.5s ease-in-out infinite; }
@media (prefers-reduced-motion: reduce) {
  .tg-mascot, .tg-mascot > img { animation: none !important; }
}`;

export function MascotMark({ src = "/togo-mark.svg", alt = "ToGO", className }: MascotMarkProps) {
  return (
    <div className={cn("tg-mascot", className)}>
      <style>{KEYFRAMES}</style>
      <img src={src} alt={alt} draggable={false} />
    </div>
  );
}
MascotMark.displayName = "MascotMark";
