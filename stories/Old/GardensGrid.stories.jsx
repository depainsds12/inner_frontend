import Screen1 from "@/src/components/__old__/gardens-grid/screen1";

export default {
  title: "Old/GardensGridScreen1",
  component: Screen1,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export const Default = {};

export const MobileView = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

export const TabletView = {
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
};

export const DesktopView = {
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
  },
};

export const LargeDesktopView = {
  parameters: {
    viewport: {
      defaultViewport: "3xl",
    },
  },
};

export const WithCustomCardContent = {
  args: {
    cardContents: [
      { title: "Peace", text: "Custom text for the first card" },
      { title: "Love", text: "Custom text for the second card" },
      // ... add more custom card contents as needed
    ],
  },
  render: (args) => <Screen1 {...args} />,
};
