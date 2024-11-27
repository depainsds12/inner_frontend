import MobileNav from "@/src/components/__old__/header/mobile_nav";

export default {
  title: "Old/HeaderMobileNav",
  component: MobileNav,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
    },
  },
  argTypes: {
    open: { control: "boolean" },
    moreDrawer: { control: "boolean" },
    handleMoreClick: { action: "handleMoreClick" },
    handleSearchClick: { action: "handleSearchClick" },
    handlePeopleClick: { action: "handlePeopleClick" },
  },
};

export const Default = {
  args: {
    open: false,
    moreDrawer: false,
  },
};

export const OpenNav = {
  args: {
    ...Default.args,
    open: true,
  },
};

export const WithMoreDrawerOpen = {
  args: {
    ...Default.args,
    open: true,
    moreDrawer: true,
  },
};

export const SubMoreOpen = {
  args: {
    ...Default.args,
    open: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const leafButton = canvas.getByAltText("more");
    await userEvent.click(leafButton);
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
