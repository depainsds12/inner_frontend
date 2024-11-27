// OctagonCounter.stories.js

import OctagonCounter from "@/src/components/__old__/octagon_counter";

export default {
  title: "Old/OctagonCounter",
  component: OctagonCounter,
};

export const DefaultView = {
  args: {
    count: 0, // Initial count
    onClick: () => alert("Octagon clicked!"), // Example click handler
    contClassName: "p-4", // Example container class
    className: "text-2xl", // Example text size
  },
  parameters: {
    viewport: { defaultViewport: "responsive" }, // Use responsive viewport
  },
};

export const WithCount = {
  args: {
    count: 5, // Set a specific count
    onClick: () => alert("Octagon clicked!"), // Example click handler
    contClassName: "p-4", // Example container class
    className: "text-2xl", // Example text size
  },
  parameters: {
    viewport: { defaultViewport: "lg" }, // Set to large viewport
  },
};

export const WithLargeCount = {
  args: {
    count: 100, // Set a larger count
    onClick: () => alert("Octagon clicked!"), // Example click handler
    contClassName: "p-4", // Example container class
    className: "text-2xl", // Example text size
  },
  parameters: {
    viewport: { defaultViewport: "sm" }, // Set to small viewport
  },
};
