import Screen1 from "@/src/components/__old__/journal-spheres/screen1";
import { useBigTrapezoidStore } from "@/src/store/BigTrapezoidStore";

export default {
  title: "Old/JournalSpheresScreen1",
  component: Screen1,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div style={{ height: "100vh", width: "100vw" }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <Screen1 {...args} />;

export const Default = Template.bind({});

export const WithSelectedData = {
  decorators: [
    (Story) => {
      const mockSelectedData = {
        /* your mock data here */
      };
      return (
        <useBigTrapezoidStore.Provider
          value={{ selectedData: mockSelectedData }}
        >
          <Story />
        </useBigTrapezoidStore.Provider>
      );
    },
  ],
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

export const WithMockedDimensions = {
  ...Default,
  decorators: [
    (Story) => (
      <div style={{ width: "1440px", height: "900px" }}>
        <Story />
      </div>
    ),
  ],
};
