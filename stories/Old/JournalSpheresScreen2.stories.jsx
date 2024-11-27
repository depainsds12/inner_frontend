import Screen2 from "@/src/components/__old__/journal-spheres/screen2";

export default {
  title: "Old/JournalSpheresScreen2",
  component: Screen2,
  tags: ["autodocs"],
  argTypes: {
    cutContent: { control: "boolean" },
  },
};

const Template = (args) => <Screen2 {...args} />;

export const Default = Template.bind({});
Default.args = {
  cutContent: false,
};

export const WithCutContent = Template.bind({});
WithCutContent.args = {
  cutContent: true,
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
  ...Default,
  decorators: [
    (Story) => (
      <div style={{ width: "100%", height: "100vh" }}>
        <Story />
      </div>
    ),
  ],
};
