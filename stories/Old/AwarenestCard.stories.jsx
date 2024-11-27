import womanImage from "@/public/assets/cards/butterfly.png";
import HeaderAvatar from "@/public/assets/header/header_avatar.svg";
import Card from "@/src/components/__old__/awarenest/card";

export default {
  title: "Old/AwarenestCard",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    upperAngle: {
      control: { type: "range", min: 0, max: 20 },
      description: "Upper angle of the card clip path",
    },
    lowerAngle: {
      control: { type: "range", min: 0, max: 20 },
      description: "Lower angle of the card clip path",
    },
    text: {
      control: "text",
      description: "Card description text",
    },
    cardImage: {
      control: "text",
      description: "URL or path to the card image",
    },
    avatarIcon: {
      control: "text",
      description: "URL or path to the avatar icon",
    },
    className: {
      control: "object",
      description: "Custom classes for different card elements",
    },
  },
};

// Default story
export const Default = {
  render: (args) => <Card {...args} />,
  args: {
    text: "Welcome the crackling, anxieties, knowing they'll soon wither in the wind.",
    upperAngle: 5,
    lowerAngle: 7,
    cardImage: womanImage,
    avatarIcon: HeaderAvatar,
  },
};

// Story with custom angles
export const CustomAngles = {
  render: (args) => <Card {...args} />,
  args: {
    ...Default.args,
    upperAngle: 10,
    lowerAngle: 15,
  },
};

// Story with custom styling
export const CustomStyling = {
  render: (args) => <Card {...args} />,
  args: {
    ...Default.args,
    className: {
      main: "max-w-md",
      image: "h-64 object-cover",
      text: "text-xl font-semibold text-purple-700",
      internal: "bg-gray-50",
      border: "border-2 border-purple-300",
    },
  },
};

// Mobile view story
export const MobileView = {
  render: (args) => (
    <div className="max-w-sm">
      <Card {...args} />
    </div>
  ),
  args: {
    ...Default.args,
    upperAngle: 0,
    lowerAngle: 0,
  },
};

// Story with long text
export const LongText = {
  render: (args) => <Card {...args} />,
  args: {
    ...Default.args,
    text: "In the depths of contemplation, we find the strength to embrace our anxieties, understanding that like autumn leaves, they too shall pass with time's gentle breath.",
  },
};

// Story without avatars
export const NoAvatars = {
  render: (args) => <Card {...args} />,
  args: {
    ...Default.args,
    avatarIcon: null,
  },
};

// Story with custom child content
export const WithCustomContent = {
  render: (args) => (
    <Card {...args}>
      <div className="absolute bottom-4 right-4 rounded-full bg-white p-2 shadow-lg">
        <span className="text-purple-600">✨</span>
      </div>
    </Card>
  ),
  args: {
    ...Default.args,
  },
};

// Story with loading state placeholder
export const LoadingState = {
  render: (args) => <Card {...args} />,
  args: {
    ...Default.args,
    cardImage: null,
    text: "Loading...",
    className: {
      main: "opacity-50",
      image: "animate-pulse bg-gray-200 h-64",
      text: "animate-pulse",
    },
  },
};
