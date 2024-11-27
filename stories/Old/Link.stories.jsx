// LinkComp.stories.js

import LinkComp from "@/src/components/__old__/link";

export default {
  title: "Old/LinkComp",
  component: LinkComp,
};

export const DefaultView = {
  args: {
    text: "Click Me", // Example text
    href: "#", // Example link
    className: "p-4 rounded", // Example additional class
  },
  parameters: {
    viewport: { defaultViewport: "responsive" }, // Use responsive viewport
  },
};

export const WithChildren = {
  args: {
    children: <span>Go to Dashboard</span>, // Example child content
    href: "/dashboard", // Example link
    className: "p-4 rounded", // Example additional class
  },
  parameters: {
    viewport: { defaultViewport: "lg" }, // Set to large viewport
  },
};

export const WithLongText = {
  args: {
    text: "This is a longer link text that demonstrates how the component handles longer strings.", // Long text example
    href: "#", // Example link
    className: "p-4 rounded", // Example additional class
  },
  parameters: {
    viewport: { defaultViewport: "sm" }, // Set to small viewport
  },
};
