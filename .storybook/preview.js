import newViewports from "./viewports";
// Import global styles
import "@/src/styles/fonts.css";
import "@/src/styles/globals.css";
/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    layout: "centered",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: newViewports, // newViewports would be an ViewportMap. (see below for examples)
      defaultViewport: "someDefault",
    },
    viewportGroups: {
      mobile: {
        name: "Mobile devices",
        match: (device) => device.type === "mobile",
      },
      tablet: {
        name: "Tablets",
        match: (device) => device.type === "tablet",
      },
      desktop: {
        name: "Desktops",
        match: (device) => device.type === "desktop",
      },
      breakpoints: {
        name: "Breakpoints",
        match: (device) => device.type === "breakpoint",
      },
    },
    viewMode: "docs",
  },

  tags: ["autodocs"],
};

export default preview;
