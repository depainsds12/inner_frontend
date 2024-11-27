// LabelComponent.stories.js

import LabelComponent from "@/src/components/__old__/label";

export default {
  title: "Old/LabelComponent",
  component: LabelComponent,
};

export const DefaultView = {
  args: {
    text: ["Example", "Label", "Subtitle"], // Example text
    children: <span>Additional Content</span>, // Example child content
    className: "custom-class", // Example additional class
    containerClassName: "mb-4", // Example container class
  },
  parameters: {
    viewport: { defaultViewport: "responsive" }, // Use responsive viewport
  },
};

export const HexagonShape = {
  args: {
    text: ["Hexagon", "Label", "Subtitle"],
    shape: "hexagon",
  },
  parameters: {
    viewport: { defaultViewport: "lg" }, // Set to large viewport
  },
};

export const ArrowShape = {
  args: {
    text: ["Arrow", "Label", "Subtitle"],
    shape: "arrow",
  },
  parameters: {
    viewport: { defaultViewport: "sm" }, // Set to small viewport
  },
};
