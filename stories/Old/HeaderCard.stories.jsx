import womanImage from "@/public/assets/cards/butterfly.png";
import Card from "@/src/components/__old__/header/_components/cards";

export default {
  title: "Old/HeaderCard",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    upperAngle: { control: "number" },
    lowerAngle: { control: "number" },
    text: { control: "text" },
    cardImage: { control: "object" },
  },
};

export const Default = {
  args: {
    upperAngle: 5,
    lowerAngle: 7,
    text: "Welcome the crackling anxieties, knowing they'll soon wither in the wind.",
    cardImage: womanImage,
  },
};

export const CustomAngles = {
  args: {
    ...Default.args,
    upperAngle: 10,
    lowerAngle: 15,
  },
};

export const CustomText = {
  args: {
    ...Default.args,
    text: "Custom text for the card component.",
  },
};

export const WithoutImage = {
  args: {
    ...Default.args,
    cardImage: null,
  },
};

export const CustomClassName = {
  args: {
    ...Default.args,
    className: {
      main: "custom-main-class",
      image: "custom-image-class",
      text: "custom-text-class",
      internal: "custom-internal-class",
      border: "custom-border-class",
    },
  },
};

export const WithChildren = {
  args: {
    ...Default.args,
  },
  render: (args) => (
    <Card {...args}>
      <div className="absolute left-0 top-0 bg-red-500 p-2 text-white">
        Child Component
      </div>
    </Card>
  ),
};
