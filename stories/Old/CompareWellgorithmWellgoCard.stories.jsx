"use client";

import WelgoCard from "@/src/components/__old__/compare-wellgorithm/wellgo-card";

// CSF3 format for the WelgoCard component
export default {
  title: "Old/CompareWellgorithmWelgoCard",
  component: WelgoCard,
  tags: ["autodocs"],
  args: {
    text: "This is a sample WelgoCard text, showcasing the clipped design and tags.",
    tags: {
      tag1: "love",
      tag2: "peace",
      tag3: "kindness",
    },
  },
  argTypes: {
    text: { control: "text" },
    tags: {
      control: "object",
      description:
        "An object containing up to three tags to display on the card",
    },
  },
};

// Default story
export const Default = {};

// Story with custom text
export const CustomText = {
  args: {
    text: "Explore the world of Welgo with style and inspiration!",
  },
};

// Story with different tags
export const CustomTags = {
  args: {
    tags: {
      tag1: "harmony",
      tag2: "joy",
      tag3: "unity",
    },
  },
};

// Story with only one tag
export const SingleTag = {
  args: {
    tags: {
      tag1: "courage",
      tag2: "",
      tag3: "",
    },
  },
};

// Story with long text content
export const LongText = {
  args: {
    text: "This is an example of a very long piece of text that might overflow or require special attention to how it wraps within the WelgoCard component. It should demonstrate how well the card adapts to different content lengths.",
  },
};
