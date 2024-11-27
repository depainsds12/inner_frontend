// RectWellgorithmCard.stories.js
import womanImage from "@/public/assets/banner/banner.png";
import WellgorithmBottom from "@/public/assets/wellgorithm_card/wellgorithm_card_bottom.png";
import RectWellgorithmCard from "@/src/components/__old__/cards/rect_wellgorithm_card";

// CSF3 format metadata
export default {
  title: "Old/RectWellgorithmCard",
  component: RectWellgorithmCard,
  tags: ["autodocs"],
  args: {
    cardImage: womanImage,
    text: "Welcome the crackling anxieties, knowing they’ll soon wither in the wind.",
    upperAngle: 8,
    lowerAngle: 5,
    shape: "rect",
    shadow: true,
    className: {
      main: "",
      image: "",
      text: "",
    },
  },
  argTypes: {
    cardImage: { control: "file" },
    text: { control: "text" },
    upperAngle: { control: { type: "number", min: 0, max: 90 } },
    lowerAngle: { control: { type: "number", min: 0, max: 90 } },
    shape: { control: { type: "select", options: ["rect", "square"] } },
    shadow: { control: "boolean" },
    className: { control: "object" },
  },
};

// Default story
export const Default = {};

// Story with square shape
export const SquareShape = {
  args: {
    shape: "square",
    upperAngle: 10,
    lowerAngle: 10,
  },
};

// Story without shadow
export const NoShadow = {
  args: {
    shadow: false,
  },
};

// Story with a custom text message
export const CustomText = {
  args: {
    text: "Discover, compare, and create your path to success!",
  },
};

// Story with a different card image
export const CustomCardImage = {
  args: {
    cardImage: WellgorithmBottom,
    text: "A new adventure awaits in the realm of wellness.",
  },
};
