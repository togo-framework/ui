import type { Meta, StoryObj } from "@storybook/react";
import { Logo, Wordmark } from "../components/brand";

const meta: Meta = {
  title: "Design System/Foundations",
  parameters: {
    layout: "fullscreen",
    fullBleed: true,
    docs: { story: { inline: false, height: "900px" } },
  },
};
export default meta;

function Section({ n, title, desc, children }: { n: string; title: string; desc?: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <div className="mb-5 flex items-baseline gap-3">
        <span className="font-mono text-sm font-medium text-primary">{n}</span>
        <h2 className="font-display text-2xl font-medium tracking-tight">{title}</h2>
      </div>
      {desc && <p className="mb-6 max-w-2xl text-sm text-muted-foreground">{desc}</p>}
      {children}
    </section>
  );
}

/** Swatch reads its color from the live CSS variable, so it reflects the active theme. */
function Swatch({ label, varName }: { label: string; varName: string }) {
  return (
    <div className="border border-border">
      <div style={{ background: `hsl(var(${varName}))`, height: 88 }} />
      <div className="border-t border-border bg-card px-3 py-2">
        <div className="text-sm font-medium">{label}</div>
        <div className="font-mono text-[11px] text-muted-foreground">{varName}</div>
      </div>
    </div>
  );
}

/** The four brand colours from https://to-go.dev/en/brand, by role. */
const BRAND = [
  { name: "Ink", varName: "--togo-ink", role: "The dark ground, and text on paper" },
  { name: "Paper", varName: "--togo-paper", role: "The light ground, and text on ink" },
  { name: "Navy", varName: "--togo-navy", role: "The mark's body on paper" },
  { name: "Teal", varName: "--togo-teal", role: "The accent cube, and the action colour" },
];

export const Foundations: StoryObj = {
  render: () => (
    <div className="min-h-screen bg-background px-8 py-10 text-foreground">
      <div className="mx-auto max-w-5xl">
        <header className="mb-12 border-b border-border pb-8">
          <Logo size={48} />
          <h1 className="mt-6 font-display text-4xl font-medium tracking-tight">Foundations</h1>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            The token-driven primitives every component is built from, laid out as a grid — square surfaces,
            hairline lines, no shadows. Flip the theme toolbar: every value below re-skins live.
          </p>
        </header>

        <Section n="01" title="Logo" desc="The six-cube lattice — the mark alone, never locked up with the wordmark. Give it at least one cube of clear space. tone='brand' follows the ground; the teal accent never changes.">
          <div className="grid gap-px border border-border bg-border sm:grid-cols-4">
            <div className="flex flex-col items-center gap-3 bg-card p-8"><Logo tone="brand" size={72} /><span className="font-mono text-[11px] text-muted-foreground">brand</span></div>
            <div className="flex flex-col items-center gap-3 p-8" style={{ background: "var(--togo-paper)" }}><Logo tone="on-light" size={72} /><span className="font-mono text-[11px]" style={{ color: "var(--togo-navy)" }}>on paper</span></div>
            <div className="flex flex-col items-center gap-3 p-8" style={{ background: "var(--togo-ink)" }}><Logo tone="on-dark" size={72} /><span className="font-mono text-[11px]" style={{ color: "var(--togo-paper)" }}>on ink</span></div>
            <div className="flex flex-col items-center gap-3 bg-primary p-8"><Logo tone="knockout" size={72} /><span className="font-mono text-[11px] text-primary-foreground">knockout</span></div>
          </div>
          <div className="mt-6 flex items-center gap-3 border border-border bg-card p-6">
            <Wordmark size={28} /><span className="font-mono text-[11px] text-muted-foreground">wordmark — set on its own, never beside the mark</span>
          </div>
        </Section>

        <Section n="02" title="Color" desc="ToGO is four colours. Components reference the semantic roles below, never raw hex.">
          <div className="mb-6 grid gap-px border border-border bg-border sm:grid-cols-4">
            {BRAND.map((c) => (
              <div key={c.name} className="bg-card">
                <div className="h-20" style={{ background: `var(${c.varName})` }} />
                <div className="border-t border-border px-3 py-2">
                  <div className="text-sm font-medium">{c.name}</div>
                  <div className="font-mono text-[11px] text-muted-foreground">{c.varName}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{c.role}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            <Swatch label="Primary / action" varName="--primary" />
            <Swatch label="Info" varName="--info" />
            <Swatch label="Background" varName="--background" />
            <Swatch label="Card" varName="--card" />
            <Swatch label="Muted" varName="--muted" />
            <Swatch label="Border" varName="--border" />
            <Swatch label="Success" varName="--success" />
            <Swatch label="Warning" varName="--warning" />
            <Swatch label="Destructive" varName="--destructive" />
            <Swatch label="Ring (focus)" varName="--ring" />
            <Swatch label="Foreground" varName="--foreground" />
            <Swatch label="Muted foreground" varName="--muted-foreground" />
          </div>
        </Section>

        <Section n="03" title="Typography" desc="Lusail for display and body — Arabic and Latin — at 300/400/500. JetBrains Mono for code, numbers and micro-labels.">
          <div className="space-y-5 border border-border bg-card p-8">
            <div><div className="tg-micro mb-1 text-muted-foreground">Display · Lusail 500</div><div className="font-display text-4xl font-medium tracking-tight">Ship the monolith</div></div>
            <div><div className="tg-micro mb-1 text-muted-foreground">Body · Lusail 400</div><div className="max-w-xl text-lg">One repo, one binary — your Go API and React UI compiled into a single deployable artifact.</div></div>
            <div><div className="tg-micro mb-1 text-muted-foreground">Code · JetBrains Mono</div><div className="font-mono text-lg text-primary">$ togo build --release</div></div>
          </div>
        </Section>

        <Section n="04" title="Radius, lines & spacing" desc="Surfaces are square, controls take 6px, floating surfaces 0.75rem. Hairlines and the hatch separate — never shadows.">
          <div className="grid gap-px border border-border bg-border sm:grid-cols-3">
            <div className="bg-card p-6">
              <div className="tg-micro mb-3 text-muted-foreground">Radius</div>
              <div className="flex items-end gap-3">
                <div className="h-14 w-14 rounded-lg border border-border bg-primary/20" /><div className="h-14 w-14 rounded-md bg-primary/30" /><div className="h-14 w-14 rounded-[var(--togo-radius-floating)] bg-primary/40" />
              </div>
            </div>
            <div className="bg-card p-6">
              <div className="tg-micro mb-3 text-muted-foreground">Lines</div>
              <div className="h-14 border border-border" />
              <div className="tg-hatch mt-3 h-6 border-y border-border" />
            </div>
            <div className="bg-card p-6">
              <div className="tg-micro mb-3 text-muted-foreground">Spacing</div>
              <div className="flex items-end gap-2">
                {[2, 3, 4, 6, 8].map((s) => <div key={s} className="bg-primary/30" style={{ width: 12, height: s * 4 }} />)}
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  ),
};
