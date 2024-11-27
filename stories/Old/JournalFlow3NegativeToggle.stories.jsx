import NegativeToggle from "@/src/components/__old__/journal-flow-3/negativeToggle";

export default {
  title: "Old/JournalFlow3NegativeToggle",
  component: NegativeToggle,
  tags: ["autodocs"],
};

export const Default = {
  render: () => <NegativeToggle />,
};

export const CustomClass = {
  render: () => <NegativeToggle className="custom-class" />,
};

export const InitialValueLeft = {
  render: () => <NegativeToggle />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const slider = canvas.getByRole("slider");
    await userEvent.click(slider, { clientX: 0 });
  },
};

export const InitialValueRight = {
  render: () => <NegativeToggle />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const slider = canvas.getByRole("slider");
    await userEvent.click(slider, { clientX: 150 });
  },
};

export const DraggingInteraction = {
  render: () => <NegativeToggle />,
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
