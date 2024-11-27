import FlowSlider from "@/src/components/__old__/journal-flow-3/flow-slider";

export default {
  title: "Old/JournalFlow3FlowSlider",
  component: FlowSlider,
  tags: ["autodocs"],
  argTypes: {
    setFlowSliderPage: { action: "setFlowSliderPage" },
    setActivationsPage: { action: "setActivationsPage" },
  },
};

const Template = (args) => <FlowSlider {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: "",
};

export const WithCustomClass = Template.bind({});
WithCustomClass.args = {
  className: "custom-class",
};

export const InitialValueSet = {
  render: () => {
    const [value, setValue] = useState(7);
    return <FlowSlider initialValue={value} />;
  },
};

export const InteractiveSlider = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const slider = canvas.getByRole("slider");
    await userEvent.click(slider, { clientX: 100, clientY: 0 });
    await userEvent.click(slider, { clientX: 200, clientY: 0 });
  },
};

export const SwitchSelection = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const tranquiloidsSwitch = canvas.getByText("tranquiloids");
    const empathitesSwitch = canvas.getByText("empathites");
    const angeritesSwitch = canvas.getByText("angerites");

    await userEvent.click(tranquiloidsSwitch);
    await userEvent.click(empathitesSwitch);
    await userEvent.click(angeritesSwitch);
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
