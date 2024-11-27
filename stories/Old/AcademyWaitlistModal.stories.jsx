import WaitlistModal from "@/src/components/__old__/academy/waitlist_modal";

const meta = {
  title: "Old/WaitlistModal",
  component: WaitlistModal,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "#1a1a1a" },
        { name: "light", value: "#ffffff" },
      ],
    },
  },
  tags: ["autodocs"],
  argTypes: {
    open: {
      control: "boolean",
      description: "Controls the visibility of the modal",
      defaultValue: false,
    },
    data: {
      control: "object",
      description: "Array of data to be used in the modal",
      defaultValue: [],
    },
  },
  decorators: [
    (Story) => (
      <div className="relative min-h-screen w-full">
        <Story />
      </div>
    ),
  ],
};

export default meta;

// Default closed state
export const Closed = {
  args: {
    open: false,
    data: [],
  },
};

// Open state
export const Open = {
  args: {
    open: true,
    data: [],
  },
};

// With sample data
export const WithPrefilledData = {
  args: {
    open: true,
    data: [{ name: "John Doe", email: "john@example.com" }],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const nameInput = canvas.getByPlaceholderText("firstname");
    const emailInput = canvas.getByPlaceholderText("email");

    await userEvent.type(nameInput, "John Doe", { delay: 100 });
    await userEvent.type(emailInput, "john@example.com", { delay: 100 });
  },
};

// Mobile viewport
export const MobileView = {
  args: {
    open: true,
    data: [],
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

// Tablet viewport
export const TabletView = {
  args: {
    open: true,
    data: [],
  },
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
};

// Error state simulation
export const WithValidationErrors = {
  args: {
    open: true,
    data: [],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const joinButton = canvas.getByText("join the list");

    await userEvent.click(joinButton);
  },
};

// Focus states
export const FocusStates = {
  args: {
    open: true,
    data: [],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const nameInput = canvas.getByPlaceholderText("firstname");
    const emailInput = canvas.getByPlaceholderText("email");

    await userEvent.tab();
    await userEvent.tab();
    await userEvent.tab();
  },
};

// Long content handling
export const LongContent = {
  args: {
    open: true,
    data: [],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const nameInput = canvas.getByPlaceholderText("firstname");
    const emailInput = canvas.getByPlaceholderText("email");

    await userEvent.type(nameInput, "Very Long Name That Might Break Layout", {
      delay: 100,
    });
    await userEvent.type(
      emailInput,
      "very.long.email.address.that.might.break.layout@really.long.domain.com",
      { delay: 100 },
    );
  },
};
