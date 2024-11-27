// LoadingScreen.stories.js

import LoadingScreen from "@/src/components/__old__/loading";

export default {
  title: "Old/LoadingScreen",
  component: LoadingScreen,
};

const Template = (args) => <LoadingScreen {...args} />;

export const DefaultView = {
  render: Template,
  parameters: {
    viewport: { defaultViewport: "responsive" }, // Use responsive viewport
  },
};

// Simulating loading state
export const LoadingState = {
  render: Template,
  parameters: {
    viewport: { defaultViewport: "lg" }, // Set to large viewport
    nextRouter: {
      pathname: "/loading", // Simulate a pathname change
    },
  },
};

// Simulating loaded state
export const LoadedState = {
  render: Template,
  parameters: {
    viewport: { defaultViewport: "sm" }, // Set to small viewport
    nextRouter: {
      pathname: "/home", // Simulate a different pathname
    },
  },
};
