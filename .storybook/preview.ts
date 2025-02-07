import type { Preview } from "@storybook/vue3";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "white",
      values: [
        { name: "white", value: "#ffffff" },
        { name: "light gray", value: "#f8f8f8" },
        { name: "dark", value: "#333333" },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
