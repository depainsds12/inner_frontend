import Infusions from "@/src/components/__old__/journal-flow-3/infusions";

export default {
  title: "Old/JournalFlow3Infusions",
  component: Infusions,
  tags: ["autodocs"],
  argTypes: {
    setActivationsPage: { action: "setActivationsPage" },
    setPoints: { action: "setPoints" },
  },
};

const Template = (args) => <Infusions {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: "",
  activationsPage: false,
  points: 0,
};

export const WithPoints = Template.bind({});
WithPoints.args = {
  ...Default.args,
  points: 50,
};

export const ActivePage = Template.bind({});
ActivePage.args = {
  ...Default.args,
  activationsPage: true,
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

    // Interact with InfusionSlider components
    const sliders = canvas.getAllByRole("slider");
    await userEvent.change(sliders[0], { target: { value: 75 } });
    await userEvent.change(sliders[1], { target: { value: 25 } });

    // Click on the re-icon
    const reIcon = canvas.getAllByAltText("re-icon")[0];
    await userEvent.click(reIcon);
  },
};
