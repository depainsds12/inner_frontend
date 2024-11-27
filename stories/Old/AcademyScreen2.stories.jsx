import Screen2 from "@/src/components/__old__/academy/screen2";

const meta = {
  title: "Old/AcademyScreen2",
  component: Screen2,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    data: {
      control: "object",
      description: "Array of data to be rendered",
      defaultValue: [],
    },
    setOpen: {
      control: "function",
      description: "Function to handle opening/closing state",
    },
    children: {
      control: "text",
      description: "Child components to be rendered",
    },
  },
};

export default meta;

// Default story
export const Default = {
  args: {
    data: [],
    setOpen: () => console.log("Toggle open state"),
    children: <div>Additional content goes here</div>,
  },
};

// Story with mock data
export const WithContent = {
  args: {
    data: [],
    setOpen: () => console.log("Toggle open state"),
    children: (
      <div className="p-4 text-center text-white">
        <h4 className="mb-4 text-2xl">Additional Content Section</h4>
        <p>This is where the main content would go</p>
      </div>
    ),
  },
};

// Story showing mobile layout
export const MobileView = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
  args: {
    ...Default.args,
  },
};

// Story showing tablet layout
export const TabletView = {
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
  args: {
    ...Default.args,
  },
};

// Story with custom styling
export const CustomStyling = {
  args: {
    ...Default.args,
    children: (
      <div className="bg-purple-bg-light rounded-lg p-8">
        <h4 className="mb-4 text-2xl text-yellow-dark">
          Custom Styled Content
        </h4>
        <p className="text-white">Content with custom background and styling</p>
      </div>
    ),
  },
};

// Story demonstrating card interaction
export const InteractiveCards = {
  args: {
    ...Default.args,
    setOpen: () => alert("Card clicked!"),
  },
};
