import Octagon from "@/src/components/__old__/auth/octogon";

const meta = {
  title: "Old/AuthOctagon",
  component: Octagon,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "#1a1a1a" },
        { name: "light", value: "#ffffff" },
      ],
    },
  },
  tags: ["autodocs"],
  argTypes: {
    outerBannerClass: {
      control: "text",
      description: "Additional classes for the outer banner container",
    },
    octagonContainerClass: {
      control: "text",
      description: "Additional classes for the octagon container",
    },
    octagonOuterContainerClass: {
      control: "text",
      description: "Additional classes for the outer octagon container",
    },
    bannerClass: {
      control: "text",
      description: "Additional classes for the banner element",
    },
    children: {
      control: "text",
      description: "Content to be rendered inside the octagon",
    },
  },
};

export default meta;

// Default story with simple content
export const Default = {
  args: {
    children: (
      <div className="text-center text-white">
        <h2 className="text-3xl font-bold">Welcome</h2>
        <p className="mt-4">This is the default octagon layout</p>
      </div>
    ),
  },
};

// With custom background
export const CustomBackground = {
  args: {
    bannerClass: 'bg-[url("/path/to/custom-background.jpg")]',
    children: (
      <div className="text-center text-white">
        <h2 className="text-3xl font-bold">Custom Background</h2>
        <p className="mt-4">Demonstrating custom background image</p>
      </div>
    ),
  },
};

// With form content
export const WithForm = {
  args: {
    children: (
      <form className="w-4/5 space-y-4 p-8">
        <div className="space-y-2">
          <label className="block text-white">Email</label>
          <input
            type="email"
            className="w-full rounded-md px-4 py-2"
            placeholder="Enter your email"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-white">Password</label>
          <input
            type="password"
            className="w-full rounded-md px-4 py-2"
            placeholder="Enter your password"
          />
        </div>
        <button className="w-full rounded-md bg-purple-600 py-2 text-white hover:bg-purple-700">
          Submit
        </button>
      </form>
    ),
  },
};

// Mobile viewport
export const Mobile = {
  args: {
    ...Default.args,
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

// Tablet viewport
export const Tablet = {
  args: {
    ...Default.args,
  },
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
};

// With custom styling
export const CustomStyling = {
  args: {
    outerBannerClass: "bg-gradient-to-r from-purple-600 to-blue-600",
    octagonContainerClass: "bg-opacity-90",
    octagonOuterContainerClass: "bg-black bg-opacity-50",
    bannerClass: "bg-opacity-75",
    children: (
      <div className="text-center text-white">
        <h2 className="text-4xl font-bold">Custom Styled</h2>
        <p className="mt-4">With gradient background and custom opacity</p>
      </div>
    ),
  },
};

// With rich content
export const RichContent = {
  args: {
    children: (
      <div className="flex flex-col items-center space-y-6 p-8 text-center text-white">
        <div className="h-20 w-20 rounded-full bg-purple-500"></div>
        <h2 className="text-3xl font-bold">Welcome Back!</h2>
        <p className="max-w-md text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="rounded-lg bg-white px-6 py-2 text-purple-600 hover:bg-gray-100">
          Get Started
        </button>
      </div>
    ),
  },
};

// With animation
export const WithAnimation = {
  args: {
    octagonContainerClass: "animate-pulse",
    children: (
      <div className="text-center text-white">
        <h2 className="text-3xl font-bold">Animated Octagon</h2>
        <p className="mt-4">With pulse animation</p>
      </div>
    ),
  },
};

// With custom clip path
export const CustomClipPath = {
  args: {
    octagonContainerClass: "custom-clip",
    children: (
      <div className="text-center text-white">
        <h2 className="text-3xl font-bold">Custom Clip Path</h2>
        <p className="mt-4">Demonstrating custom clipping</p>
      </div>
    ),
  },
};
