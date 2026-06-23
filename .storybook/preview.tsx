import * as React from "react";
import type { Preview } from "@storybook/react";
import "./tailwind.css";

// A global "Direction" toolbar toggle so every story can be viewed LTR or RTL.
const preview: Preview = {
  parameters: {
    backgrounds: { default: "dark", values: [{ name: "dark", value: "#020617" }] },
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
  },
  globalTypes: {
    direction: {
      description: "Text direction",
      defaultValue: "ltr",
      toolbar: {
        title: "Direction",
        icon: "transfer",
        items: [
          { value: "ltr", title: "LTR" },
          { value: "rtl", title: "RTL (عربي)" },
        ],
      },
    },
  },
  decorators: [
    (Story, ctx) => {
      const dir = ctx.globals.direction || "ltr";
      return (
        <div dir={dir} className="tg-root" style={{ padding: 24, minHeight: "100%" }}>
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
