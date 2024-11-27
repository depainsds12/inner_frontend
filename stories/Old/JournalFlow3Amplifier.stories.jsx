import Amplifier from "@/src/components/__old__/journal-flow-3/amplifier";

export default {
  title: "Old/JournalFlow3Amplifier",
  component: Amplifier,
  tags: ["autodocs"],
  argTypes: {
    setActivationsPage: { action: "setActivationsPage" },
    setPoints: { action: "setPoints" },
  },
};

const Template = (args) => <Amplifier {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: "",
  activationsPage: 1,
  points: 0,
};

export const WithPoints = Template.bind({});
WithPoints.args = {
  ...Default.args,
  points: 50,
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

export const WithInteractions = {
  ...Default,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Interact with AmplifierGauge components
    const gauges = canvas.getAllByRole("slider");
    await userEvent.change(gauges[0], { target: { value: 75 } });
    await userEvent.change(gauges[1], { target: { value: 25 } });

    // Click on the re-icon
    const reIcon = canvas.getAllByAltText("re-icon")[0];
    await userEvent.click(reIcon);
  },
};
