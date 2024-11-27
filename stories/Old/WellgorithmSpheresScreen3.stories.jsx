// Screen3.stories.js

import Screen3 from "@/src/components/__old__/welllgorithm-spheres/screen3";

export default {
  title: "Old/WellgorithmSpheresScreen3",
  component: Screen3,
};

export const DefaultView = {
  args: {
    view: 1, // Default view
  },
  parameters: {
    viewport: { defaultViewport: "responsive" }, // Use responsive viewport
  },
};

export const WithTwoColumns = {
  args: {
    view: 2, // Set to view 2 for two columns
  },
  parameters: {
    viewport: { defaultViewport: "lg" }, // Set to large viewport
  },
};

export const WithSmallViewport = {
  args: {
    view: 1, // Default view for small viewport
  },
  parameters: {
    viewport: { defaultViewport: "sm" }, // Set to small viewport
  },
};
