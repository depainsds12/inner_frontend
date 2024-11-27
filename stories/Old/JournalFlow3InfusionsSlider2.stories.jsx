import InfusionSlider2 from "@/src/components/__old__/journal-flow-3/infusionSlider2";

export default {
  title: "Old/JournalFlow3InfusionsSlider2",
  component: InfusionSlider2,
  tags: ["autodocs"],
};

export const Default = {
  render: () => <InfusionSlider2 />,
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
