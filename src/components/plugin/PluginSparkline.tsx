'use client'

// PluginSparkline — recharts AreaChart sparkline for PluginCard.
//
// Ported verbatim from app/src/components/superadmin/plugins/PluginSparkline.tsx.
// Recharts is already in the package.json deps (v2.15.4).

import { Area, AreaChart, ResponsiveContainer } from "recharts";
import type { SparklinePoint } from "./types";

export interface PluginSparklineProps {
  pluginId: string;
  seriesData: SparklinePoint[];
  hasSeriesData: boolean;
  color: string;
}

export const PluginSparkline = ({
  pluginId,
  seriesData,
  hasSeriesData,
  color,
}: PluginSparklineProps) => {
  if (!hasSeriesData) {
    return <div className="h-12 w-full" aria-hidden="true" />;
  }

  const gradId = `pluginspark-${pluginId}`;

  return (
    <div className="h-12 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={seriesData} margin={{ top: 4, right: 0, bottom: 0, left: 0 }}>
          <defs>
            <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity={0.45} />
              <stop offset="100%" stopColor={color} stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="n"
            stroke={color}
            strokeWidth={1.5}
            strokeOpacity={1}
            fill={`url(#${gradId})`}
            isAnimationActive={false}
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

PluginSparkline.displayName = "PluginSparkline";
