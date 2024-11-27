import Controls from "@/src/components/__old__/awarenest/controls";

// Import mock SVGs for testing if needed

export default {
  title: "Old/Controls",
  component: Controls,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#333333" },
      ],
    },
    viewport: {
      defaultViewport: "responsive",
      viewports: {
        mobile: {
          name: "Mobile",
          styles: {
            width: "375px",
            height: "667px",
          },
        },
        tablet: {
          name: "Tablet",
          styles: {
            width: "768px",
            height: "1024px",
          },
        },
        desktop: {
          name: "Desktop",
          styles: {
            width: "1440px",
            height: "900px",
          },
        },
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="p-8">
        <Story />
      </div>
    ),
  ],
};

// Default story
export const Default = {
  render: () => <Controls />,
};

// Mobile view story
export const MobileView = {
  render: () => <Controls />,
  parameters: {
    viewport: {
      defaultViewport: "mobile",
    },
  },
};

// Tablet view story
export const TabletView = {
  render: () => <Controls />,
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
};

// Interactive story with state logging
export const Interactive = {
  render: () => {
    return (
      <div className="space-y-4">
        <Controls />
        <div className="mt-4 text-sm text-gray-600">
          Click the icons above to see the active state change
        </div>
      </div>
    );
  },
};

// Story with custom container width
export const CustomWidth = {
  render: () => (
    <div className="w-[200px]">
      <Controls />
    </div>
  ),
};

// Story showing all states simultaneously
export const AllStates = {
  render: () => (
    <div className="space-y-8">
      <div className="space-y-2">
        <p className="text-sm text-gray-600">Default State:</p>
        <Controls />
      </div>

      <div className="space-y-2">
        <p className="text-sm text-gray-600">Different Device Sizes:</p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="w-[200px]">
            <p className="mb-2 text-xs text-gray-500">Mobile</p>
            <Controls />
          </div>
          <div className="w-[300px]">
            <p className="mb-2 text-xs text-gray-500">Tablet</p>
            <Controls />
          </div>
          <div className="w-[400px]">
            <p className="mb-2 text-xs text-gray-500">Desktop</p>
            <Controls />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm text-gray-600">Focus/Hover States:</p>
        <div className="rounded-lg p-2 focus-within:outline-none focus-within:ring-2 focus-within:ring-purple-500">
          <Controls />
        </div>
      </div>
    </div>
  ),
};

// Story demonstrating keyboard navigation
export const KeyboardNavigation = {
  render: () => (
    <div className="space-y-4">
      <Controls />
      <div className="text-sm text-gray-600">
        <p>Tab through the buttons to see focus states</p>
        <ul className="mt-2 list-inside list-disc">
          <li>Use Tab to move between buttons</li>
          <li>Use Enter or Space to activate a button</li>
        </ul>
      </div>
    </div>
  ),
};

// Story with dark theme
export const DarkTheme = {
  render: () => (
    <div className="rounded-lg bg-gray-800 p-8">
      <Controls />
    </div>
  ),
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};
