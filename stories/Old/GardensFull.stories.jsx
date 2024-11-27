import Screen1 from "@/src/components/__old__/gardens-full/screen1";

export default {
  title: "Old/GardensFullScreen1",
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

export const LargeDesktopView = {
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
  },
};

export const WithCustomText = {
  args: {
    customText: "Custom text for the TextCard component can be passed here.",
  },
  render: (args) => <Screen1 {...args} />,
};
