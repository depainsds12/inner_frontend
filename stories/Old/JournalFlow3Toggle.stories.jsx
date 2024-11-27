import Toggle from "@/src/components/__old__/journal-flow-3/toggle";
import { useAiMeterStore } from "@/src/store/AiMeterStore";

export default {
  title: "Old/JournalFlow3Toggle",
  component: Toggle,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ padding: "3rem" }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <Toggle {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: "",
};

export const CustomClass = Template.bind({});
CustomClass.args = {
  className: "custom-toggle-class",
};

export const InitialValueLeft = {
  ...Default,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const slider = canvas.getByRole("slider");
    await userEvent.click(slider, { clientX: 0 });
  },
};

export const InitialValueMiddle = {
  ...Default,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const slider = canvas.getByRole("slider");
    await userEvent.click(slider, { clientX: 56 });
  },
};

export const InitialValueRight = {
  ...Default,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const slider = canvas.getByRole("slider");
    await userEvent.click(slider, { clientX: 112 });
  },
};

export const DraggingInteraction = {
  ...Default,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const slider = canvas.getByRole("slider");
    await userEvent.pointer([
      { keys: "[MouseLeft>]", target: slider },
      { coords: { x: 0, y: 0 } },
      { coords: { x: 56, y: 0 } },
      { coords: { x: 112, y: 0 } },
      "[/MouseLeft]",
    ]);
  },
};

export const WithMockedStore = {
  ...Default,
  decorators: [
    (Story) => {
      const mockSetAiMeterValue = jest.fn();
      return (
        <useAiMeterStore.Provider
          value={{ setAiMeterValue: mockSetAiMeterValue }}
        >
          <Story />
        </useAiMeterStore.Provider>
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
