"use client";

import * as React from "react";
import { cn } from "../../lib/utils";

export interface GraphNode {
  id: string;
  label?: string;
  group?: string;
}
export interface GraphLink {
  source: string;
  target: string;
}
export interface NetworkGraphProps {
  nodes: GraphNode[];
  links: GraphLink[];
  width?: number;
  height?: number;
  className?: string;
  /** Map a group → CSS color. Falls back to a token palette. */
  groupColor?: (group: string | undefined) => string;
}

const PALETTE = [
  "hsl(345 75% 45%)", "hsl(217 91% 60%)", "hsl(160 84% 39%)",
  "hsl(38 92% 50%)", "hsl(263 70% 60%)", "hsl(199 89% 48%)",
];

/** NetworkGraph — a dependency-free SVG graph with a deterministic force layout
 * (circular seed + fixed iterations; no randomness). Pass `nodes` + `links`. */
export function NetworkGraph({
  nodes, links, width = 640, height = 420, className, groupColor,
}: NetworkGraphProps) {
  const positions = React.useMemo(() => computeLayout(nodes, links, width, height), [nodes, links, width, height]);
  const groups = React.useMemo(() => Array.from(new Set(nodes.map((n) => n.group ?? "default"))), [nodes]);
  const colorOf = (g: string | undefined) =>
    groupColor?.(g) ?? PALETTE[Math.max(0, groups.indexOf(g ?? "default")) % PALETTE.length];

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={cn("w-full rounded-xl border border-border bg-card", className)}
      role="img"
      aria-label="Network graph"
    >
      {links.map((l, i) => {
        const a = positions[l.source], b = positions[l.target];
        if (!a || !b) return null;
        return <line key={i} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="hsl(var(--border))" strokeWidth={1.5} />;
      })}
      {nodes.map((n) => {
        const p = positions[n.id];
        if (!p) return null;
        return (
          <g key={n.id} transform={`translate(${p.x},${p.y})`}>
            <circle r={10} fill={colorOf(n.group)} stroke="hsl(var(--background))" strokeWidth={2} />
            <text y={24} textAnchor="middle" className="fill-foreground" style={{ fontSize: 11 }}>
              {n.label ?? n.id}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

// Deterministic layout: circular seed → fixed force iterations (repulsion + springs).
function computeLayout(nodes: GraphNode[], links: GraphLink[], w: number, h: number) {
  const cx = w / 2, cy = h / 2, R = Math.min(w, h) / 2 - 50;
  const pos: Record<string, { x: number; y: number }> = {};
  const n = nodes.length || 1;
  nodes.forEach((node, i) => {
    const a = (i / n) * Math.PI * 2;
    pos[node.id] = { x: cx + R * Math.cos(a), y: cy + R * Math.sin(a) };
  });
  const adj = links.filter((l) => pos[l.source] && pos[l.target]);
  for (let iter = 0; iter < 120; iter++) {
    const disp: Record<string, { x: number; y: number }> = {};
    for (const node of nodes) disp[node.id] = { x: 0, y: 0 };
    // repulsion
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = pos[nodes[i].id], b = pos[nodes[j].id];
        let dx = a.x - b.x, dy = a.y - b.y;
        let d2 = dx * dx + dy * dy || 0.01;
        const f = 2200 / d2;
        const d = Math.sqrt(d2);
        dx /= d; dy /= d;
        disp[nodes[i].id].x += dx * f; disp[nodes[i].id].y += dy * f;
        disp[nodes[j].id].x -= dx * f; disp[nodes[j].id].y -= dy * f;
      }
    }
    // springs
    for (const l of adj) {
      const a = pos[l.source], b = pos[l.target];
      let dx = b.x - a.x, dy = b.y - a.y;
      const d = Math.sqrt(dx * dx + dy * dy) || 0.01;
      const f = (d - 90) * 0.05;
      dx /= d; dy /= d;
      disp[l.source].x += dx * f; disp[l.source].y += dy * f;
      disp[l.target].x -= dx * f; disp[l.target].y -= dy * f;
    }
    for (const node of nodes) {
      const p = pos[node.id], dd = disp[node.id];
      p.x = Math.max(30, Math.min(w - 30, p.x + Math.max(-8, Math.min(8, dd.x))));
      p.y = Math.max(30, Math.min(h - 30, p.y + Math.max(-8, Math.min(8, dd.y))));
    }
  }
  return pos;
}
