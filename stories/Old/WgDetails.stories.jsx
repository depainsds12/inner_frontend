// Card.stories.js

import Card from "@/src/components/__old__/wg-details/card";

export default {
  title: "Old/WgDetailsCard",
  component: Card,
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
