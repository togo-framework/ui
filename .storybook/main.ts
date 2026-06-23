import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-essentials"],
  framework: { name: "@storybook/react-vite", options: {} },
  staticDirs: ["../public"],
  async viteFinal(cfg) {
    const tailwind = (await import("@tailwindcss/vite")).default;
    cfg.plugins = cfg.plugins ?? [];
    cfg.plugins.push(tailwind());
    return cfg;
  },
};

export default config;
