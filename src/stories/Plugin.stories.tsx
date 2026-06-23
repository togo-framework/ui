import type { Meta, StoryObj } from "@storybook/react";
import {
  Shield,
  Globe,
  Brain,
  Zap,
  Database,
  Cpu,
  type LucideIcon,
} from "lucide-react";
import { PluginCard } from "../components/plugin/PluginCard";
import { PluginSectionCard } from "../components/plugin/PluginSectionCard";
import { PluginPageHeader } from "../components/plugin/PluginPageHeader";
import { PluginSparkline } from "../components/plugin/PluginSparkline";
import { Button } from "../components/ui/button";
import type { PluginCatalogEntry } from "../components/plugin/types";

// ── Mock plugins ──────────────────────────────────────────────────────────────

const buildSeries = (max = 100) =>
  Array.from({ length: 24 }, (_, i) => ({
    n: Math.round(Math.random() * max),
  }));

const alertPlugin: PluginCatalogEntry = {
  id: "cap-alert",
  slug: "alert",
  name: "Alert Engine",
  name_en: "Alert Engine",
  name_ar: "محرك التنبيهات",
  description: "Generates and prioritises security alerts.",
  description_en: "Generates and prioritises security alerts.",
  description_ar: "يولّد التنبيهات الأمنية ويرتّب أولوياتها.",
  plugin_type: "capability",
  enabled_globally: true,
  nav_icon: "shield",
  nav_color: "#EF4444",
  last_active_at: new Date(Date.now() - 5 * 60_000).toISOString(),
  activity_count: 12340,
  activity_series: buildSeries(200),
  route: "/alerts",
};

const sourcePlugin: PluginCatalogEntry = {
  id: "src-rss",
  slug: "rss-crawler",
  name: "RSS Crawler",
  name_en: "RSS Crawler",
  name_ar: "زاحف RSS",
  description: "Collects news from RSS feeds across 400+ sources.",
  description_en: "Collects news from RSS feeds across 400+ sources.",
  description_ar: "يجمع الأخبار من خلاصات RSS عبر أكثر من 400 مصدر.",
  plugin_type: "source",
  enabled_globally: true,
  nav_icon: "globe",
  nav_color: "#3B82F6",
  last_active_at: new Date(Date.now() - 90 * 60_000).toISOString(),
  activity_count: 89210,
  activity_series: buildSeries(500),
  route: null,
};

const disabledPlugin: PluginCatalogEntry = {
  id: "cap-trend",
  slug: "trend-detector",
  name: "Trend Detector",
  name_en: "Trend Detector",
  name_ar: "كاشف الاتجاهات",
  description: null,
  description_en: null,
  description_ar: null,
  plugin_type: "pipeline",
  enabled_globally: false,
  nav_icon: "zap",
  nav_color: "#6B7280",
  last_active_at: new Date(Date.now() - 5 * 24 * 60 * 60_000).toISOString(),
  activity_count: 0,
  activity_series: [],
  route: null,
};

const aiPlugin: PluginCatalogEntry = {
  id: "ai-gemini",
  slug: "gemini-pro",
  name: "Gemini Pro",
  name_en: "Gemini Pro",
  name_ar: "جيميناي برو",
  description: "Google Gemini 2.0 Flash — primary reasoning model.",
  description_en: "Google Gemini 2.0 Flash — primary reasoning model.",
  description_ar: "نموذج المنطق الأساسي من Google Gemini 2.0 Flash.",
  plugin_type: "ai_provider",
  enabled_globally: true,
  nav_icon: "brain",
  nav_color: "#8B5CF6",
  last_active_at: new Date(Date.now() - 1000).toISOString(),
  activity_count: 4200000,
  activity_series: buildSeries(1000),
  route: null,
};

const ICON_MAP: Record<string, LucideIcon> = {
  "cap-alert": Shield,
  "src-rss": Globe,
  "ai-gemini": Brain,
  "cap-trend": Zap,
};

// ── Meta ──────────────────────────────────────────────────────────────────────

const meta: Meta = {
  title: 'Plugins/Catalog',
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

// ── PluginCard variants ───────────────────────────────────────────────────────

export const CardCapability: Story = {
  name: "PluginCard — Capability (active)",
  render: () => (
    <div className="w-[300px]">
      <PluginCard
        plugin={alertPlugin}
        isRTL={false}
        iconComponent={ICON_MAP[alertPlugin.id]}
        onDetailClick={(slug) => alert(`Detail: ${slug}`)}
        onPageClick={(route) => alert(`Page: ${route}`)}
      />
    </div>
  ),
};

export const CardSource: Story = {
  name: "PluginCard — Source (degraded)",
  render: () => (
    <div className="w-[300px]">
      <PluginCard
        plugin={sourcePlugin}
        isRTL={false}
        iconComponent={ICON_MAP[sourcePlugin.id]}
        onDetailClick={(slug) => alert(`Detail: ${slug}`)}
      />
    </div>
  ),
};

export const CardDisabled: Story = {
  name: "PluginCard — Disabled (no data)",
  render: () => (
    <div className="w-[300px]">
      <PluginCard
        plugin={disabledPlugin}
        isRTL={false}
        iconComponent={ICON_MAP[disabledPlugin.id]}
        onDetailClick={(slug) => alert(`Detail: ${slug}`)}
      />
    </div>
  ),
};

export const CardAI: Story = {
  name: "PluginCard — AI Provider (high count)",
  render: () => (
    <div className="w-[300px]">
      <PluginCard
        plugin={aiPlugin}
        isRTL={false}
        iconComponent={ICON_MAP[aiPlugin.id]}
        onDetailClick={(slug) => alert(`Detail: ${slug}`)}
      />
    </div>
  ),
};

export const CardRTL: Story = {
  name: "PluginCard — RTL (Arabic)",
  render: () => (
    <div className="w-[300px]" dir="rtl">
      <PluginCard
        plugin={alertPlugin}
        isRTL={true}
        iconComponent={Shield}
        onDetailClick={(slug) => alert(`تفاصيل: ${slug}`)}
        onPageClick={(route) => alert(`صفحة: ${route}`)}
      />
    </div>
  ),
};

export const CardGrid: Story = {
  name: "PluginCard — Grid (4 cards)",
  render: () => (
    <div className="grid grid-cols-2 gap-4 w-[640px]">
      {[alertPlugin, sourcePlugin, disabledPlugin, aiPlugin].map((p) => (
        <PluginCard
          key={p.id}
          plugin={p}
          isRTL={false}
          iconComponent={ICON_MAP[p.id]}
          onDetailClick={(slug) => alert(`Detail: ${slug}`)}
          onPageClick={(route) => alert(`Page: ${route}`)}
        />
      ))}
    </div>
  ),
};

export const CardSelectable: Story = {
  name: "PluginCard — Selectable mode",
  render: () => {
    const selected = new Set<string>();
    return (
      <div className="grid grid-cols-2 gap-4 w-[640px]">
        {[alertPlugin, sourcePlugin].map((p) => (
          <PluginCard
            key={p.id}
            plugin={p}
            isRTL={false}
            iconComponent={ICON_MAP[p.id]}
            selectable
            selected={selected.has(p.id)}
            onSelectChange={(id, next) => alert(`Select ${id}: ${next}`)}
            onDetailClick={(slug) => alert(`Detail: ${slug}`)}
          />
        ))}
      </div>
    );
  },
};

// ── PluginSectionCard ─────────────────────────────────────────────────────────

export const SectionCard: Story = {
  name: "PluginSectionCard — Standard",
  render: () => (
    <div className="w-[540px]">
      <PluginSectionCard
        icon={Database}
        title_en="Data Sources"
        title_ar="مصادر البيانات"
        description_en="Configure the ingestion channels for this plugin."
        description_ar="ضبط قنوات استيعاب البيانات لهذه الإضافة."
        language="en"
      >
        <p className="text-sm text-muted-foreground">
          Section content goes here — forms, tables, toggles.
        </p>
      </PluginSectionCard>
    </div>
  ),
};

export const SectionCardDestructive: Story = {
  name: "PluginSectionCard — Destructive",
  render: () => (
    <div className="w-[540px]">
      <PluginSectionCard
        icon={Zap}
        title_en="Danger Zone"
        title_ar="منطقة الخطر"
        description_en="These actions cannot be undone."
        description_ar="لا يمكن التراجع عن هذه الإجراءات."
        destructive
        language="en"
        actions={
          <Button variant="destructive" size="sm">
            Reset Plugin
          </Button>
        }
      >
        <p className="text-sm text-muted-foreground">
          Destructive section — red border accent, red title.
        </p>
      </PluginSectionCard>
    </div>
  ),
};

export const SectionCardRTL: Story = {
  name: "PluginSectionCard — RTL (Arabic)",
  render: () => (
    <div className="w-[540px]" dir="rtl">
      <PluginSectionCard
        icon={Cpu}
        title_en="Processing Settings"
        title_ar="إعدادات المعالجة"
        description_en="Configure processing parameters."
        description_ar="ضبط معاملات المعالجة."
        language="ar"
      >
        <p className="text-sm text-muted-foreground">محتوى القسم هنا.</p>
      </PluginSectionCard>
    </div>
  ),
};

// ── PluginPageHeader ──────────────────────────────────────────────────────────

export const PageHeader: Story = {
  name: "PluginPageHeader — LTR",
  render: () => (
    <div className="w-[540px]">
      <PluginPageHeader
        icon={Shield}
        title_en="Alert Engine"
        title_ar="محرك التنبيهات"
        subtitle_en="Configure severity thresholds and routing rules."
        subtitle_ar="ضبط حدود الخطورة وقواعد التوجيه."
        language="en"
        actions={
          <Button size="sm" variant="outline">
            Save Changes
          </Button>
        }
      />
    </div>
  ),
};

export const PageHeaderRTL: Story = {
  name: "PluginPageHeader — RTL (Arabic)",
  render: () => (
    <div className="w-[540px]" dir="rtl">
      <PluginPageHeader
        icon={Brain}
        title_en="AI Provider Settings"
        title_ar="إعدادات مزوّد الذكاء"
        subtitle_en="Configure API keys and model parameters."
        subtitle_ar="ضبط مفاتيح API ومعاملات النموذج."
        language="ar"
        actions={
          <Button size="sm" variant="outline">
            حفظ
          </Button>
        }
      />
    </div>
  ),
};

export const PageHeaderNoSubtitle: Story = {
  name: "PluginPageHeader — No subtitle",
  render: () => (
    <div className="w-[540px]">
      <PluginPageHeader
        title_en="Plugin Settings"
        title_ar="إعدادات الإضافة"
        language="en"
      />
    </div>
  ),
};

// ── PluginSparkline ───────────────────────────────────────────────────────────

export const Sparkline: Story = {
  name: "PluginSparkline — With data",
  render: () => (
    <div className="w-[300px] border rounded-lg p-4">
      <PluginSparkline
        pluginId="demo-plugin"
        seriesData={buildSeries(200)}
        hasSeriesData={true}
        color="#EF4444"
      />
    </div>
  ),
};

export const SparklineNoData: Story = {
  name: "PluginSparkline — No data (empty placeholder)",
  render: () => (
    <div className="w-[300px] border rounded-lg p-4">
      <PluginSparkline
        pluginId="demo-plugin-empty"
        seriesData={Array.from({ length: 24 }, () => ({ n: 0 }))}
        hasSeriesData={false}
        color="#6B7280"
      />
    </div>
  ),
};

export const SparklineColors: Story = {
  name: "PluginSparkline — Color variants",
  render: () => (
    <div className="flex flex-col gap-4 w-[300px]">
      {(
        [
          { color: "#EF4444", label: "Critical red" },
          { color: "#3B82F6", label: "Info blue" },
          { color: "#8B5CF6", label: "Purple AI" },
          { color: "#22C55E", label: "Success green" },
        ] as const
      ).map(({ color, label }) => (
        <div key={color} className="border rounded-lg p-3">
          <p className="text-xs text-muted-foreground mb-2">{label}</p>
          <PluginSparkline
            pluginId={`spark-${color}`}
            seriesData={buildSeries(300)}
            hasSeriesData={true}
            color={color}
          />
        </div>
      ))}
    </div>
  ),
};
