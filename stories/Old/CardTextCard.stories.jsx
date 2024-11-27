"use client";

import TextCard from "@/src/components/__old__/cards/text_card";

// CSF3 format for the TextCard component
export default {
  title: "Old/CardTextCard",
  component: TextCard,
  tags: ["autodocs"],
  args: {
    children: "This is a sample text inside the TextCard.",
    angle: 6,
    innerangle: 15,
    className: "",
    align: { apply: false, value: 100 },
  },
  argTypes: {
    children: { control: "text" },
    angle: { control: { type: "number", min: 0, max: 90 } },
    innerangle: { control: { type: "number", min: 0, max: 90 } },
    className: { control: "text" },
    align: {
      control: "object",
      description:
        "Alignment object with 'apply' boolean and 'value' percentage",
    },
  },
};

// Default story
export const Default = {};

// Story with a custom angle
export const CustomAngle = {
  args: {
    angle: 10,
    innerangle: 20,
  },
};

// Story with alignment applied
export const WithAlignment = {
  args: {
    align: { apply: true, value: 75 },
  },
};

// Story with customized content
export const CustomContent = {
  args: {
    children: "Here's some customized text content for the TextCard.",
  },
};

// Story with additional custom className
export const CustomClassName = {
  args: {
    className: "bg-blue-500 text-white p-8 rounded-lg shadow-lg",
    children:
      "This TextCard has custom styling applied using Tailwind classes.",
  },
};
