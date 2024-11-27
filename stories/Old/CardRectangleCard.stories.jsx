// RectangleCard.stories.js
"use client";

import womanImage from "@/public/assets/banner/banner.png";
import RectangleCard from "@/src/components/__old__/cards/rectangle_card";

// CSF3 format for the RectangleCard component
export default {
  title: "Old/CardRectangleCard",
  component: RectangleCard,
  tags: ["autodocs"],
  args: {
    textContent:
      "This is a beautiful card showcasing elegant angles and style.",
    cardImage: womanImage,
    upperAngle: 5,
    lowerAngle: 7,
    className: {
      main: "",
      image: "",
      text: "",
      container: "",
    },
  },
  argTypes: {
    onClick: { action: "clicked" },
    textContent: { control: "text" },
    upperAngle: { control: { type: "number", min: 0, max: 90 } },
    lowerAngle: { control: { type: "number", min: 0, max: 90 } },
    className: { control: "object" },
    cardImage: { control: "file" },
  },
};

// Default story
export const Default = {};

// Story with custom angles
export const CustomAngles = {
  args: {
    upperAngle: 10,
    lowerAngle: 15,
  },
};

// Story with different text content
export const CustomText = {
  args: {
    textContent: "A customized message for unique storytelling.",
  },
};

// Story without an image
export const NoImage = {
  args: {
    cardImage: null,
  },
};

// Story with click action
export const ClickableCard = {
  args: {
    onClick: () => alert("Card clicked!"),
    textContent: "Click me to see the action!",
  },
};
