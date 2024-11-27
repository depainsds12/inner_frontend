import RadialPolygon, {
  RadialPolygonProps,
} from "@/src/components/polygon/radial-polygon/RadialPolygon";
import { Meta, StoryObj } from "@storybook/react";
import Image from "next/image";
/**
 * The Octagon component is a customizable, multi-layered octagonal shape.
 * It can be used for various visual representations or UI elements that require
 * an octagonal structure with adjustable size, gaps, and levels.
 */
const meta: Meta<typeof RadialPolygon> = {
  title: "Components/Polygon/RadialPolygon",
  component: RadialPolygon,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof RadialPolygon>;

const Template = (args: RadialPolygonProps) => (
  <div className="p-4">
    <RadialPolygon {...args} />
  </div>
);

/**
 * The default configuration of the Octagon component.
 */
export const Default: Story = {
  args: {
    width: 400,
    height: 400,
    sides: 8,
  },
  parameters: {
    docs: {
      description: {
        story:
          "This is the default appearance of the RadialPolygon component with standard settings.",
      },
    },
  },
};

export const WithCore: Story = {
  render: (args: RadialPolygonProps) => {
    return <RadialPolygon {...args} />;
  },
  args: {
    width: 400,
    height: 400,
    backgroundColor: "white",
    numLayers: 1,
    sides: 8,
    coreSize: 0.5,
    boundary: {
      outer: {
        stroke: "red",
        strokeWidth: 5,
      },
      radii: {
        strokeWidth: 2,
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story: "This is the RadialPolygon component with a core configuration.",
      },
    },
  },
};

export const WithLayers: Story = {
  args: {
    width: 400,
    height: 400,
    sides: 8,
    numLayers: 3,
  },
  parameters: {
    docs: {
      description: {
        story: "This is the RadialPolygon component with multiple layers",
      },
    },
  },
};

export const WithRotation: Story = {
  args: {
    width: 400,
    height: 400,
    sides: 8,
    rotation: 22.5,
  },
  parameters: {
    docs: {
      description: {
        story:
          "This is the RadialPolygon component with a rotation of 22.5 degrees.",
      },
    },
  },
};

export const BackgroundAndBoundaryColor: Story = {
  args: {
    width: 400,
    height: 400,
    backgroundColor: "pink",
    color: "black",
    boundary: {
      stroke: "red",
      strokeWidth: 10,
    },
    sides: 8,
  },
  parameters: {
    docs: {
      description: {
        story:
          "This is the RadialPolygon component with a custom background and boundary color.",
      },
    },
  },
};

export const DifferentBoundaryConfigurations: Story = {
  args: {
    width: 400,
    height: 400,
    sides: 8,
    coreSize: 0.5,
    boundary: {
      outer: {
        stroke: "red",
        strokeWidth: 5,
      },
      inner: {
        stroke: "blue",
        strokeWidth: 5,
      },
      radii: {
        stroke: "green",
        strokeWidth: 5,
      },
      chord: {
        stroke: "yellow",
        strokeWidth: 5,
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "This is the RadialPolygon component with different boundary configurations.",
      },
    },
  },
};

export const WithChordsOnly: Story = {
  args: {
    width: 400,
    height: 400,
    sides: 8,
    coreSize: 0.5,
    numLayers: 3,
    boundary: {
      radii: {
        strokeWidth: 0, // hide radii
      },
      chord: {
        stroke: "pink",
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "This is the RadialPolygon component with only the chords displayed.",
      },
    },
  },
};

export const WithNoChordsAndRadii: Story = {
  args: {
    width: 400,
    height: 400,
    sides: 8,
    coreSize: 0.5,
    numLayers: 2,
    boundary: {
      radii: {
        strokeWidth: 0,
      },
      chord: {
        strokeWidth: 0,
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "This is the RadialPolygon component with no radii and chords displayed.",
      },
    },
  },
};

export const WithData: Story = {
  render: (args: RadialPolygonProps) => {
    return (
      <div className="p-4">
        <RadialPolygon {...args} />
      </div>
    );
  },
  args: {
    width: 400,
    height: 400,
    backgroundColor: "#3e3576",
    color: "white",
    numLayers: 1,
    sides: 8,
    boundary: {
      chord: {
        stroke: "#655d91",
        strokeWidth: 3,
      },
      radii: {
        stroke: "#655d91",
        strokeWidth: 5,
      },
      outer: {
        stroke: "#b193d0",
        strokeWidth: 5,
      },
      inner: {
        stroke: "#fff200",
        strokeWidth: 4,
      },
    },
    coreSize: 0.5,
    children: (
      <Image
        alt="Background"
        src="/assets/avatar/vrAvatar.jpg"
        fill
        objectFit="cover"
        quality={100}
        priority={true}
        className="absolute"
      />
    ),
    data: [
      { segments: [{ content: "joy " }] },
      { segments: [{ content: "kindness " }] },
      { segments: [{ content: "love " }] },
      { segments: [{ content: "peace " }] },
      { segments: [{ content: "patience " }] },
      { segments: [{ content: "goodness " }] },
      { segments: [{ content: "faithfulness " }] },
      { segments: [{ content: "gentleness " }] },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: "This is the RadialPolygon component with a core configuration.",
      },
    },
  },
};

export const StyleAWedge: Story = {
  args: {
    width: 400,
    height: 400,
    backgroundColor: "#3e3576",
    color: "white",
    numLayers: 2,
    sides: 8,
    coreSize: 0.5,
    data: [
      {
        segments: [{ content: "joy" }],
        boundary: { stroke: "red", zIndex: 1 },
        fill: "pink",
        color: "blue",
        className: "hover:bg-red-500 cursor-pointer transition-all",
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: "Style a wedge with custom data and boundary configurations.",
      },
    },
  },
};

export const StyleASegment: Story = {
  args: {
    width: 400,
    height: 400,
    backgroundColor: "#3e3576",
    color: "white",
    numLayers: 2,
    sides: 8,
    coreSize: 0.5,
    data: [
      {
        segments: [
          { content: "joy" },
          { content: "peace", boundary: { stroke: "blue" }, fill: "cyan" },
        ],
        boundary: { stroke: "red", zIndex: 1 },
        fill: "pink",
        color: "blue",
        className: "hover:bg-red-500 cursor-pointer transition-all",
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: "Style a segment with custom data and boundary configurations.",
      },
    },
  },
};

export const CustomPoints: Story = {
  args: {
    width: 700,
    height: 400,
    backgroundColor: "#3e3576",
    color: "white",
    numLayers: 1,
    boundary: {
      chord: {
        stroke: "#655d91",
        strokeWidth: 3,
      },
      radii: {
        stroke: "#655d91",
        strokeWidth: 5,
      },
      outer: {
        stroke: "#b193d0",
        strokeWidth: 5,
      },
      inner: {
        stroke: "#fff200",
        strokeWidth: 4,
      },
    },
    coreSize: 0.5,
    children: (
      <img
        src="/assets/avatar/vrAvatar.jpg"
        style={{ objectFit: "cover", height: "100%" }}
      />
    ),
    data: [
      { segments: [{ content: "joy " }] },
      { segments: [{ content: "kindness " }] },
      { segments: [{ content: "love " }] },
      { segments: [{ content: "peace " }] },
      { segments: [{ content: "patience " }] },
      { segments: [{ content: "goodness " }] },
      { segments: [{ content: "faithfulness " }] },
      { segments: [{ content: "gentleness " }] },
    ],
    points: [
      [8, 0],
      [92, 0],
      [100, 50],
      [92, 100],
      [8, 100],
      [0, 50],
    ],
  },
  parameters: {
    docs: {
      description: {
        story: "This is the RadialPolygon component with a core configuration.",
      },
    },
  },
};

export const WithFloatingLayer: Story = {
  render: (args: RadialPolygonProps) => {
    return (
      <div className="p-4">
        <RadialPolygon {...args} />
      </div>
    );
  },
  args: {
    width: 400,
    height: 400,
    backgroundColor: "#3e3576",
    color: "white",
    numLayers: 2,
    sides: 8,
    boundary: {
      chord: {
        stroke: "#655d91",
        strokeWidth: 3,
      },
      radii: {
        stroke: "#655d91",
        strokeWidth: 5,
      },
      outer: {
        stroke: "#b193d0",
        strokeWidth: 5,
      },
      inner: {
        stroke: "#fff200",
        strokeWidth: 4,
      },
    },
    coreSize: 0.5,
    children: (
      <img
        src="/assets/avatar/vrAvatar.jpg"
        style={{ objectFit: "cover", height: "100%" }}
      />
    ),
    data: [
      {
        segments: [{ content: "joy " }],
        fill: "rgba(255,0,106,0.5)",
        floatingContent: (
          <div className="flex items-center justify-center p-4">
            <img src="/assets/icons/create.svg" className="z-1" />
          </div>
        ),
        floatingLayerFill: "rgba(255,0,106,0.5)",
      },
      {
        segments: [{ content: "kindness " }],
        floatingContent: (
          <div className="p-4">
            <img src="/assets/icons/create.svg" />
          </div>
        ),
      },
      {
        segments: [{ content: "love " }],
        floatingContent: (
          <div className="p-4">
            <img src="/assets/icons/create.svg" />
          </div>
        ),
      },
      {
        segments: [{ content: "peace " }],
        floatingContent: (
          <div className="p-4">
            <img src="/assets/icons/create.svg" />
          </div>
        ),
      },
      {
        segments: [{ content: "patience " }],
        floatingContent: (
          <div className="p-4">
            <img src="/assets/icons/create.svg" />
          </div>
        ),
      },
      {
        segments: [{ content: "goodness " }],
        floatingContent: (
          <div className="p-4">
            <img src="/assets/icons/create.svg" />
          </div>
        ),
      },
      {
        segments: [{ content: "faithfulness " }],
        floatingContent: (
          <div className="p-4">
            <img src="/assets/icons/create.svg" />
          </div>
        ),
      },
      {
        segments: [{ content: "gentleness " }],
        floatingContent: (
          <div className="p-4">
            <img src="/assets/icons/create.svg" />
          </div>
        ),
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: "This is the RadialPolygon component with a core configuration.",
      },
    },
  },
};
