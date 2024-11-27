import DashboardHeader from "@/src/components/__old__/header/dashboard_header";

export default {
  title: "Old/HeaderDashboardHeader",
  component: DashboardHeader,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
    },
  },
};

// Create a mock version of the useSphereFilterStore
const MockSphereFilterStore = ({ sphereFilter, children }) => {
  return children({ sphereFilter });
};

const Template = ({ pathname, sphereFilter }) => (
  <MockSphereFilterStore sphereFilter={sphereFilter}>
    {(storeProps) => (
      <div data-pathname={pathname}>
        <DashboardHeader />
      </div>
    )}
  </MockSphereFilterStore>
);

export const Default = {
  render: (args) => <Template {...args} />,
  args: {
    pathname: "/dashboard/my-sphere",
    sphereFilter: "",
  },
};

export const DifferentPath = {
  ...Default,
  args: {
    pathname: "/dashboard/other-sphere",
    sphereFilter: "",
  },
};

export const WithSphereFilter = {
  ...Default,
  args: {
    pathname: "/dashboard/my-sphere",
    sphereFilter: "personal",
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
