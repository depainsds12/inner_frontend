import AiHumanMeter from "@/src/components/__old__/ai_human_meter/AiHumanMeterV";
import { userEvent, within } from "@storybook/testing-library";

const meta = {
  title: "Old/AiHumanMeterV",
  component: AiHumanMeter,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "#1a1a1a" },
        { name: "light", value: "#ffffff" },
      ],
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="p-8">
        <Story />
      </div>
    ),
  ],
};

export default meta;

// Default state (50/50)
export const Default = {};

// AI Dominant state
export const AIDominant = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const slider = canvas.getByRole("slider") || canvas.getByTestId("slider");

    // Simulate dragging the slider up
    await userEvent.pointer([
      { keys: "[MouseLeft>]", target: slider },
      { coords: { x: 0, y: 25 } }, // Move up to increase AI percentage
      { keys: "[/MouseLeft]" },
    ]);
  },
};

// Human Dominant state
export const HumanDominant = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const slider = canvas.getByRole("slider") || canvas.getByTestId("slider");

    // Simulate dragging the slider down
    await userEvent.pointer([
      { keys: "[MouseLeft>]", target: slider },
      { coords: { x: 0, y: 75 } }, // Move down to increase Human percentage
      { keys: "[/MouseLeft]" },
    ]);
  },
};

// Zero state
export const ZeroState = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const slider = canvas.getByRole("slider") || canvas.getByTestId("slider");

    // Simulate dragging the slider to bottom
    await userEvent.pointer([
      { keys: "[MouseLeft>]", target: slider },
      { coords: { x: 0, y: 100 } }, // Move to bottom
      { keys: "[/MouseLeft]" },
    ]);
  },
};

// Interactive Dragging
export const InteractiveDragging = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const slider = canvas.getByRole("slider") || canvas.getByTestId("slider");

    // Simulate complex dragging pattern
    await userEvent.pointer([
      { keys: "[MouseLeft>]", target: slider },
      { coords: { x: 0, y: 25 } },
      { coords: { x: 0, y: 75 } },
      { coords: { x: 0, y: 50 } },
      { keys: "[/MouseLeft]" },
    ]);
  },
};

// Color Transition Demo
export const ColorTransitionDemo = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const slider = canvas.getByRole("slider") || canvas.getByTestId("slider");

    // Simulate dragging across the 50% threshold to show color transition
    for (let i = 0; i < 5; i++) {
      await userEvent.pointer([
        { keys: "[MouseLeft>]", target: slider },
        { coords: { x: 0, y: 45 } },
        { keys: "[/MouseLeft]" },
      ]);

      await new Promise((resolve) => setTimeout(resolve, 500));

      await userEvent.pointer([
        { keys: "[MouseLeft>]", target: slider },
        { coords: { x: 0, y: 55 } },
        { keys: "[/MouseLeft]" },
      ]);

      await new Promise((resolve) => setTimeout(resolve, 500));
    }
  },
};

// Mobile Touch Interaction
export const MobileTouch = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const slider = canvas.getByRole("slider") || canvas.getByTestId("slider");

    // Simulate touch interactions
    await userEvent.pointer([
      { pointerType: "touch", target: slider },
      { pointerType: "touch", coords: { x: 0, y: 25 } },
      { pointerType: "touch", coords: { x: 0, y: 75 } },
    ]);
  },
};

// Keyboard Navigation
export const KeyboardNavigation = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const slider = canvas.getByRole("slider") || canvas.getByTestId("slider");

    await userEvent.tab(); // Focus the slider
    await userEvent.keyboard("[ArrowUp]"); // Increase AI value
    await new Promise((resolve) => setTimeout(resolve, 500));
    await userEvent.keyboard("[ArrowDown]"); // Decrease AI value
  },
};

// Animation Speed Test
export const AnimationSpeedTest = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const slider = canvas.getByRole("slider") || canvas.getByTestId("slider");

    // Quick movements to test transition smoothness
    const positions = [25, 75, 50, 0, 100, 50];
    for (const position of positions) {
      await userEvent.pointer([
        { keys: "[MouseLeft>]", target: slider },
        { coords: { x: 0, y: position } },
        { keys: "[/MouseLeft]" },
      ]);
      await new Promise((resolve) => setTimeout(resolve, 200));
    }
  },
};
