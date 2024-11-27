"use client";

import womanImage from "@/public/assets/banner/banner.png";
import WellgorithmCard from "@/src/components/__old__/cards/wellgorithm_card";

// CSF3 format for the WellgorithmCard component
export default {
  title: "Old/CardWellgorithmCard",
  component: WellgorithmCard,
  tags: ["autodocs"],
  args: {
    cardImage: womanImage,
    text: "Welcome the crackling anxieties, knowing they’ll soon wither in the wind.",
    upperAngle: 8,
    lowerAngle: 5,
    className: {
      main: "",
      image: "",
      text: "",
    },
    shadow: true,
    shape: "square",
  },
  argTypes: {
    cardImage: { control: "file" },
    text: { control: "text" },
    upperAngle: { control: { type: "number", min: 0, max: 90 } },
    lowerAngle: { control: { type: "number", min: 0, max: 90 } },
    shadow: { control: "boolean" },
    shape: { control: { type: "select", options: ["square", "rect"] } },
    className: { control: "object" },
  },
};

// Default story
export const Default = {};

// Story without shadow
export const NoShadow = {
  args: {
    shadow: false,
  },
};

// Story with rectangle shape
export const RectangleShape = {
  args: {
    shape: "rect",
  },
};

// Story with custom angles
export const CustomAngles = {
  args: {
    upperAngle: 15,
    lowerAngle: 10,
  },
};

// Story with custom text
export const CustomText = {
  args: {
    text: "Explore the world of well-being with a fresh perspective!",
  },
};
