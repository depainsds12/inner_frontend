import Palette from "@/src/components/__old__/journal-creation/palette";

export default {
  title: "Old/JournalCreationPalette",
  component: Palette,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: {},
};

export const WithPreselectedImage = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const firstImage = canvas.getAllByAltText("image")[0];
    await userEvent.click(firstImage);
  },
};

export const WithPreselectedColor = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const firstColor = canvas.getAllByRole("div")[0];
    await userEvent.click(firstColor);
  },
};

export const WithInteraction = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const images = canvas.getAllByAltText("image");
    const colors = canvas.getAllByRole("div");

    // Click on the first image
    await userEvent.click(images[0]);

    // Click on the first color
    await userEvent.click(colors[0]);

    // Click on the last image
    await userEvent.click(images[images.length - 1]);

    // Click on the last color
    await userEvent.click(colors[colors.length - 1]);
  },
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
