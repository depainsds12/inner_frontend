import Octagon from "@/src/components/__old__/octagons/Octagon";

/**
 * The Octagon component is a customizable, multi-layered octagonal shape.
 * It can be used for various visual representations or UI elements that require
 * an octagonal structure with adjustable size, gaps, and levels.
 */
const meta = {
  title: "Old/Octagon",
  component: Octagon,
  tags: ["autodocs"],
  argTypes: {
    radius: {
      control: "number",
      description: "The radius of the octagon in pixels",
    },
    gap: {
      control: "number",
      description: "The gap between octagon layers in pixels",
    },
    level: {
      control: "array",
      description: "An array of numbers representing the levels of the octagon",
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply to the octagon",
    },
  },
};

export default meta;

/**
 * The default configuration of the Octagon component.
 */
export const Default = {
  render: (args) => (
    <div className="p-4">
      <Octagon {...args} />
    </div>
  ),
  args: {
    radius: 100,
    gap: 10,
    level: [1, 2, 3],
    className: "",
  },
  parameters: {
    docs: {
      description: {
        story:
          "This is the default appearance of the Octagon component with standard settings.",
      },
    },
  },
};

/**
 * A larger version of the Octagon component with more levels.
 */
export const LargeOctagon = {
  render: (args) => (
    <div className="bg-gray-50 p-8">
      <Octagon {...args} />
    </div>
  ),
  args: {
    radius: 200,
    gap: 15,
    level: [1, 2, 3, 4],
    className: "large-octagon",
  },
  parameters: {
    docs: {
      description: {
        story:
          "This story showcases a larger octagon with increased radius, gap, and an additional level.",
      },
    },
  },
};

/**
 * A smaller version of the Octagon component with fewer levels.
 */
export const SmallOctagon = {
  render: (args) => (
    <div className="flex items-center justify-center p-2">
      <Octagon {...args} />
    </div>
  ),
  args: {
    radius: 50,
    gap: 5,
    level: [1, 2],
    className: "small-octagon",
  },
  parameters: {
    docs: {
      description: {
        story:
          "This story displays a smaller octagon with reduced radius, gap, and fewer levels.",
      },
    },
  },
};

/**
 * An Octagon component with a custom CSS class applied.
 */
export const CustomClass = {
  render: (args) => (
    <div className="rounded border border-gray-200 p-4">
      <Octagon {...args} />
    </div>
  ),
  args: {
    ...Default.args,
    className: "h-2",
  },
  parameters: {
    docs: {
      description: {
        story:
          "This story demonstrates how to apply a custom CSS class to the Octagon component.",
      },
    },
  },
};

/**
 * An Octagon component with maximum levels and larger gaps.
 */
export const MaxLevelsOctagon = {
  render: (args) => (
    <div className="flex items-center justify-center bg-gray-100 p-8">
      <Octagon {...args} />
    </div>
  ),
  args: {
    radius: 150,
    gap: 20,
    level: [1, 2, 3, 4, 5],
    className: "max-levels-octagon",
  },
  parameters: {
    docs: {
      description: {
        story:
          "This story shows an octagon with the maximum number of levels and larger gaps between layers.",
      },
    },
  },
};
