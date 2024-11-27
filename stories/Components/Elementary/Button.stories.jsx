import AccessibleButton from "@/src/components/__old__/button/button";

// Default export with proper component annotation
export default {
  title: "Components/Elementary/AccessibleButton",
  component: AccessibleButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["blue", "purple", "green", "orange"],
      description: "The color theme of the button",
    },
    size: {
      control: "radio",
      options: ["small", "default", "large"],
      description: "The size variant of the button",
    },
    disabled: {
      control: "boolean",
      description: "Whether the button is disabled",
    },
    onClick: { action: "clicked" },
    children: {
      control: "text",
      description: "The content inside the button",
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply",
    },
    ariaLabel: {
      control: "text",
      description: "Aria label for accessibility",
    },
  },
};

// Template for stories
const Template = (args) => <AccessibleButton {...args} />;

// Base story
export const Default = Template.bind({});
Default.args = {
  children: "Click me",
  color: "blue",
  size: "default",
};

// Color variants
export const Blue = Template.bind({});
Blue.args = {
  ...Default.args,
  color: "blue",
  children: "Blue Button",
};

export const Purple = Template.bind({});
Purple.args = {
  ...Default.args,
  color: "purple",
  children: "Purple Button",
};

export const Green = Template.bind({});
Green.args = {
  ...Default.args,
  color: "green",
  children: "Green Button",
};

export const Orange = Template.bind({});
Orange.args = {
  ...Default.args,
  color: "orange",
  children: "Orange Button",
};

// Size variants
export const Small = Template.bind({});
Small.args = {
  ...Default.args,
  size: "small",
  children: "Small Button",
};

export const Large = Template.bind({});
Large.args = {
  ...Default.args,
  size: "large",
  children: "Large Button",
};

// State variants
export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
  children: "Disabled Button",
};

export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
  children: "Loading Button",
  onClick: () => new Promise((resolve) => setTimeout(resolve, 2000)),
};

// Complex example with icon
export const WithIcon = Template.bind({});
WithIcon.args = {
  ...Default.args,
  children: (
    <>
      <svg
        className="mr-2 h-4 w-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
        />
      </svg>
      Upload File
    </>
  ),
};

// Interactive example
export const AsyncAction = Template.bind({});
AsyncAction.args = {
  ...Default.args,
  children: "Save Changes",
  onClick: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Saved!");
  },
};

// Accessibility example
export const WithAriaLabel = Template.bind({});
WithAriaLabel.args = {
  ...Default.args,
  children: "→",
  ariaLabel: "Next page",
};

// Kitchen sink example
export const Kitchen = () => (
  <div className="flex flex-col gap-4">
    <AccessibleButton size="small" color="blue">
      Small Blue
    </AccessibleButton>
    <AccessibleButton size="default" color="purple">
      Default Purple
    </AccessibleButton>
    <AccessibleButton size="large" color="green">
      Large Green
    </AccessibleButton>
    <AccessibleButton color="orange" disabled>
      Disabled Orange
    </AccessibleButton>
    <AccessibleButton
      color="blue"
      onClick={async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }}
    >
      Async Action
    </AccessibleButton>
  </div>
);
