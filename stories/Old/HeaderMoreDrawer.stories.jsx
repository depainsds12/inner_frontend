import MoreDrawer from "@/src/components/__old__/header/more_drawer";

export default {
  title: "Old/HeaderMoreDrawer",
  component: MoreDrawer,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
    },
  },
  argTypes: {
    handleMoreClick: { action: "handleMoreClick" },
  },
};

export const Default = {
  args: {},
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

export const WithCustomCategories = {
  args: {
    cats: ["Nature", "Technology", "Art", "Science", "History"],
  },
};

export const WithScrollInteraction = {
  ...Default,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const scrollButton = canvas.getByAltText("move down");
    await userEvent.click(scrollButton);
  },
};
