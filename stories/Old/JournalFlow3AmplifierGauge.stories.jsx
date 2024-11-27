import AmplifierGauge from "@/src/components/__old__/journal-flow-3/amplifierGauge";

export default {
  title: "Old/JournalFlow3AmplifierGauge",
  component: AmplifierGauge,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: {},
};

export const MinimumValue = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const slider = canvas.getByRole("slider");
    await userEvent.clear(slider);
    await userEvent.type(slider, "0");
  },
};

export const MaximumValue = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const slider = canvas.getByRole("slider");
    await userEvent.clear(slider);
    await userEvent.type(slider, "100");
  },
};

export const MidValue = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const slider = canvas.getByRole("slider");
    await userEvent.clear(slider);
    await userEvent.type(slider, "50");
  },
};

export const InteractiveSlider = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const slider = canvas.getByRole("slider");
    await userEvent.clear(slider);
    await userEvent.type(slider, "25");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await userEvent.clear(slider);
    await userEvent.type(slider, "75");
  },
};
