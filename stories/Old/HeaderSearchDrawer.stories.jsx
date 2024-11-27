import SearchDrawer from "@/src/components/__old__/header/search_drawer";

export default {
  title: "Old/HeaderSearchDrawer",
  component: SearchDrawer,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
    },
  },
  argTypes: {
    handleSearchClick: { action: "handleSearchClick" },
  },
};

export const Default = {
  args: {},
};

export const WithJournalView = {
  args: {},
  render: (args) => {
    const [view, setView] = useState(1);
    return <SearchDrawer {...args} />;
  },
};

export const WithWellgorithmView = {
  args: {},
  render: (args) => {
    const [view, setView] = useState(2);
    return <SearchDrawer {...args} />;
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
