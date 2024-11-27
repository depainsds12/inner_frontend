import WellgorithmBottom from "@/public/assets/wellgorithm_card/wellgorithm_card_bottom.png";
import LandingScreen from "@/src/components/__old__/container/landing_screen";
export default {
  title: "Old/ContainerLandingScreen",
  component: LandingScreen,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "Content to be displayed over the background image",
    },
    className: {
      control: "text",
      description: "Additional classes for the main container",
    },
    imgContClassName: {
      control: "text",
      description: "Additional classes for the image container",
    },
    image: {
      control: "text",
      description: "URL or path to the background image",
    },
    angle: {
      control: { type: "number", min: 0, max: 45 },
      description: "Angle for the basic rectangle clip",
    },
    clip: {
      control: "select",
      options: ["rectClip", "rectClipBanner", "authBannerClip"],
      description: "Type of clip path to apply",
    },
    outerAngle: {
      control: { type: "number", min: 0, max: 45 },
      description: "Outer angle for banner clips",
    },
    innerAngle: {
      control: { type: "number", min: 0, max: 45 },
      description: "Inner angle for banner clips",
    },
  },
};

const SampleContent = () => (
  <div className="flex h-full items-center justify-center">
    <h1 className="text-4xl font-bold text-white">Welcome to Our Platform</h1>
  </div>
);

export const Default = {
  render: () => (
    <LandingScreen image={WellgorithmBottom} angle={3} clip="rectClip">
      <SampleContent />
    </LandingScreen>
  ),
};

export const RectangleBanner = {
  render: () => (
    <LandingScreen
      image={WellgorithmBottom}
      clip="rectClipBanner"
      outerAngle={2}
      innerAngle={12}
    >
      <SampleContent />
    </LandingScreen>
  ),
};

export const AuthBanner = {
  render: () => (
    <LandingScreen
      image={WellgorithmBottom}
      clip="authBannerClip"
      outerAngle={2}
      innerAngle={12}
    >
      <SampleContent />
    </LandingScreen>
  ),
};

export const CustomStyling = {
  render: () => (
    <LandingScreen
      image={WellgorithmBottom}
      className="bg-gray-900"
      imgContClassName="opacity-75"
      angle={5}
      clip="rectClip"
    >
      <SampleContent />
    </LandingScreen>
  ),
};

export const WithDifferentContent = {
  render: () => (
    <LandingScreen image={WellgorithmBottom} clip="rectClip" angle={3}>
      <div className="flex h-full flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-bold text-white">Start Your Journey</h1>
        <p className="text-xl text-white">Discover amazing possibilities</p>
        <button className="rounded bg-blue-500 px-6 py-2 text-white hover:bg-blue-600">
          Get Started
        </button>
      </div>
    </LandingScreen>
  ),
};

// Template for creating new stories with args
const Template = (args) => <LandingScreen {...args} />;

// Story with args for Storybook controls
export const WithControls = Template.bind({});
WithControls.args = {
  children: <SampleContent />,
  image: WellgorithmBottom,
  angle: 3,
  clip: "rectClip",
  outerAngle: 2,
  innerAngle: 12,
};
