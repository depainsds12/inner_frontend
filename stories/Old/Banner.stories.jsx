// Banner.stories.js

import Banner from "@/src/components/__old__/banner";

export default {
  title: "Old/Banner",
  component: Banner,
};

export const DefaultView = {
  args: {
    shape: "rect", // Default shape
    angle: 0,
    innerangle: 0,
    imageurl: "", // You can set a default image URL if needed
    children: <p className="text-white">Welcome to the Banner!</p>, // Example child content
  },
  parameters: {
    viewport: { defaultViewport: "responsive" }, // Use responsive viewport
  },
};

export const HexagonShape = {
  args: {
    shape: "hexagon",
    angle: 30,
    children: <p className="text-white">Hexagon Banner!</p>,
  },
  parameters: {
    viewport: { defaultViewport: "lg" }, // Set to large viewport
  },
};

export const ArrowShape = {
  args: {
    shape: "arrow",
    angle: 45,
    children: <p className="text-white">Arrow Banner!</p>,
  },
  parameters: {
    viewport: { defaultViewport: "sm" }, // Set to small viewport
  },
};
