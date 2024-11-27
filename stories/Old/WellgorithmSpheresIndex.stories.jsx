// Index.stories.js

import Index from "@/src/components/__old__/welllgorithm-spheres/index";

export default {
  title: "Old/WellgorithmSpheresIndex",
  component: Index,
};

export const DefaultView = {
  args: {},
};

export const WithLargeViewport = {
  args: {},
  parameters: {
    viewport: { defaultViewport: "lg" }, // Use a predefined large viewport
  },
};
