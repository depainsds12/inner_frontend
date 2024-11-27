// UserAvatar.stories.js

import UserAvatar from "@/src/components/__old__/avatar";

export default {
  title: "Old/UserAvatar",
  component: UserAvatar,
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
