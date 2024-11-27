import Activations from "@/src/components/__old__/journal-flow-3/activations";

export default {
  title: "Old/JournalFlow3Activations",
  component: Activations,
  tags: ["autodocs"],
  argTypes: {
    setActivationsPage: { action: "setActivationsPage" },
    setPoints: { action: "setPoints" },
  },
};

const Template = (args) => <Activations {...args} />;

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

    // Click on positive toggles
    const positiveToggles = canvas.getAllByRole("button", {
      name: /positive/i,
    });
    await userEvent.click(positiveToggles[0]);
    await userEvent.click(positiveToggles[1]);

    // Click on negative toggles
    const negativeToggles = canvas.getAllByRole("button", {
      name: /negative/i,
    });
    await userEvent.click(negativeToggles[0]);

    // Click on refresh button
    const refreshButton = canvas.getByAltText("refresh");
    await userEvent.click(refreshButton);
  },
};
