"use client";

import womanImage from "@/public/assets/cards/butterfly.png";
import SquareCard from "@/src/components/__old__/cards/square_card";

// CSF3 format for the SquareCard component
export default {
  title: "Old/CardSquareCard",
  component: SquareCard,
  tags: ["autodocs"],
  args: {
    cardImage: womanImage,
    upperAngle: 5,
    lowerAngle: 7,
    text: "Welcome the crackling anxieties, knowing they’ll soon wither in the wind.",
    className: {
      main: "",
      image: "",
      text: "",
      internal: "",
      border: "",
    },
  },
  argTypes: {
    cardImage: { control: "file" },
    upperAngle: { control: { type: "number", min: 0, max: 90 } },
    lowerAngle: { control: { type: "number", min: 0, max: 90 } },
    text: { control: "text" },
    className: { control: "object" },
    cardRef: { control: false }, // We generally don't need to control refs in Storybook
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

// Story with custom text
export const CustomText = {
  args: {
    text: "Discover the serenity within, as the chaos subsides into tranquility.",
  },
};

// Story without any image
export const NoImage = {
  args: {
    cardImage: null,
    text: "This card has no image, only words to inspire and uplift.",
  },
};

// Story demonstrating customized class names
export const CustomClasses = {
  args: {
    className: {
      main: "custom-main-class",
      image: "custom-image-class",
      text: "custom-text-class",
      internal: "custom-internal-class",
      border: "custom-border-class",
    },
    text: "Styled with custom class names for a unique look!",
  },
};
