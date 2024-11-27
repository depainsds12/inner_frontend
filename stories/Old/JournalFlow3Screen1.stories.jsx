import Screen1 from "@/src/components/__old__/journal-flow-3/screen1";

export default {
  title: "Old/JournalFlow3Screen1",
  component: Screen1,
  tags: ["autodocs"],
  argTypes: {
    setStep: { action: "setStep" },
  },
};

const Template = (args) => <Screen1 {...args} />;

export const Default = Template.bind({});

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

export const WithSearchValue = {
  ...Default,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const searchInput = canvas.getByPlaceholderText("| people search");
    await userEvent.type(searchInput, "John Doe");
  },
};

export const WithEyeActive = {
  ...Default,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const searchInput = canvas.getByPlaceholderText("| people search");
    await userEvent.type(searchInput, "John Doe");
    const eyeIcon = canvas.getByAltText("eye");
    await userEvent.click(eyeIcon);
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
