import InfusionSlider from "@/src/components/__old__/journal-flow-3/infusionSlider";

export default {
  title: "Old/JournalFlow3InfusionSlider",
  component: InfusionSlider,
  tags: ["autodocs"],
};

export const Default = {
  render: () => <InfusionSlider />,
};

export const MobileView = {
  ...Default,
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

export const TabletView = {
  ...Default,
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
};

export const DesktopView = {
  ...Default,
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
  },
};
