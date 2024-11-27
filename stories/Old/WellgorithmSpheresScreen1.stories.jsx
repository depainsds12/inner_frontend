// Screen1.stories.js

import Screen1 from "@/src/components/__old__/welllgorithm-spheres/screen1";

export default {
  title: "Old/WellgorithmSpheresScreen1",
  component: Screen1,
};

export const DefaultView = {
  args: {},
  parameters: {
    viewport: { defaultViewport: "responsive" }, // Use responsive viewport
  },
};

export const WithLargeViewport = {
  args: {},
  parameters: {
    viewport: { defaultViewport: "lg" }, // Set to large viewport
  },
};

export const WithSmallViewport = {
  args: {},
  parameters: {
    viewport: { defaultViewport: "sm" }, // Set to small viewport
  },
};
