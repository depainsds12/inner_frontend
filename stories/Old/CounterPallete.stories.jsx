// CounterPalette.stories.js

import CounterPalette from "@/src/components/__old__/counter_palette";

export default {
  title: "Old/CounterPalette",
  component: CounterPalette,
};

export const DefaultView = {
  args: {
    countData: [1, 2, 3, 4, 5], // Example count data
  },
  parameters: {
    viewport: { defaultViewport: "responsive" }, // Use responsive viewport
  },
};

export const WithCustomData = {
  args: {
    countData: [5, 10, 15, 20], // Custom count data
  },
  parameters: {
    viewport: { defaultViewport: "lg" }, // Set to large viewport
  },
};

export const WithEmptyData = {
  args: {
    countData: [], // Empty count data
  },
  parameters: {
    viewport: { defaultViewport: "sm" }, // Set to small viewport
  },
};
