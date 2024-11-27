import Screen3 from "@/src/components/__old__/journal-spheres/screen3";

export default {
  title: "Old/JournalSpheresScreen3",
  component: Screen3,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export const Default = {
  render: () => <Screen3 />,
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

export const WithCustomImage = {
  render: () => <Screen3 cardImage="/path/to/custom/image.jpg" />,
};

export const WithScrollInteraction = {
  ...Default,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const scrollContainer = canvas.getAllByRole("region")[0];
    await userEvent.scroll(scrollContainer, { target: { y: 300 } });
  },
};
