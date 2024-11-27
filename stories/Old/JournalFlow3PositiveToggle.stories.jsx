import PositiveToggle from "@/src/components/__old__/journal-flow-3/positiveToggle";

export default {
  title: "Old/JournalFlow3PositiveToggle",
  component: PositiveToggle,
  tags: ["autodocs"],
  argTypes: {
    className: { control: "text" },
    points: { control: "number" },
    setPoints: { action: "setPoints" },
  },
};

export const Default = {
  args: {
    className: "",
    points: 0,
  },
};

export const CustomClass = {
  args: {
    ...Default.args,
    className: "custom-class",
  },
};

export const WithPoints = {
  args: {
    ...Default.args,
    points: 50,
  },
};

export const InitialValueLeft = {
  args: {
    ...Default.args,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const slider = canvas.getByRole("slider");
    await userEvent.click(slider, { clientX: 0 });
  },
};

export const InitialValueRight = {
  args: {
    ...Default.args,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const slider = canvas.getByRole("slider");
    await userEvent.click(slider, { clientX: 150 });
  },
};

export const DraggingInteraction = {
  args: {
    ...Default.args,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const slider = canvas.getByRole("slider");
    await userEvent.pointer([
      { keys: "[MouseLeft>]", target: slider },
      { coords: { x: 0, y: 0 } },
      { coords: { x: 75, y: 0 } },
      { coords: { x: 150, y: 0 } },
      "[/MouseLeft]",
    ]);
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
