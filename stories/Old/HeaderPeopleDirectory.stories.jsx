import Header from "@/src/components/__old__/header/people_directory";

export default {
  title: "Old/HeaderPeopleDirectory",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
    },
  },
};

// Mock the useSphereFilterStore
const MockSphereFilterStore = ({ sphereFilter, children }) => {
  return children({ sphereFilter, setSphereFilter: () => {} });
};

const Template = ({ pathname, sphereFilter }) => (
  <MockSphereFilterStore sphereFilter={sphereFilter}>
    {(storeProps) => (
      <div data-pathname={pathname}>
        <Header />
      </div>
    )}
  </MockSphereFilterStore>
);

export const Default = {
  render: (args) => <Template {...args} />,
  args: {
    pathname: "/",
    sphereFilter: "",
  },
};

export const WellgorithmsPage = {
  ...Default,
  args: {
    pathname: "/wellgorithms",
    sphereFilter: "",
  },
};

export const FlowersSelected = {
  ...Default,
  args: {
    pathname: "/",
    sphereFilter: "flowers",
  },
};

export const ShadowsSelected = {
  ...Default,
  args: {
    pathname: "/",
    sphereFilter: "shadows",
  },
};

export const RipplesSelected = {
  ...Default,
  args: {
    pathname: "/",
    sphereFilter: "ripples",
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
