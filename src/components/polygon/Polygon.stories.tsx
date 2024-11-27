import Polygon, { PolygonProps } from "@/src/components/polygon/polygon";
import {
  generateHexagonPoints,
  generateParallelogramPoints,
} from "@/src/components/polygon/utils";

const meta = {
  title: "Components/Polygon/Polygon",
  component: Polygon,
  tags: ["autodocs"],
};

export default meta;

export const Default = {
  args: {
    style: {
      width: "400px",
    },
    points: generateHexagonPoints({ height: 400, width: 400 }),
    stroke: "darkblue",
    strokeWidth: 20,
    fill: "white",
    children: "Polygon Content",
  },
  render: (args: PolygonProps) => <Polygon {...args} />,
};

export const Specification = {
  args: {
    style: {
      width: "450px",
      backgroundColor: "rgba(255,0,0, .2)",
    },
    points: generateParallelogramPoints({ height: 200, width: 400 }),
    stroke: "rgba(255, 255, 255)",
    strokeWidth: 20,
    fill: "black",
    children: "Polygon Content",
  },
  render: (args: PolygonProps) => (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="relative flex flex-row gap-4">
        <div
          className="absolute"
          style={{
            width: 45,
            top: 0,
            left: -50,
            height: 20,
            background: "red",
          }}
        ></div>
        <div className="flex flex-col items-center gap-4">
          <Polygon {...args} overflow={true} className="bg-blue-500/70" />
          <span>With overflow</span>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Polygon {...args} className="bg-blue-500/70" />
          <span>Without overflow</span>
        </div>
      </div>
    </div>
  ),
};

export const BorderColors = {
  args: {
    ...Default.args,
    borderStyle: ["red", "blue", "green", "yellow", "purple", "orange"],
  },
};

export const DifferentBorderWidths = {
  args: {
    ...Default.args,
    points: [
      [0, 0],
      [400, 0],
      [350, 100],
      [50, 100],
    ],
    strokeWidth: 20,
    borderStyle: [
      { strokeWidth: 0 },
      { strokeWidth: 5 },
      { strokeWidth: 30 },
      { strokeWidth: 5 },
    ],
    children: <span className="text-white">Inner content still works</span>,
  },
};

export const LinearGradientFill = {
  args: {
    ...Default.args,
  },
  render: (args: PolygonProps) => (
    <Polygon
      {...args}
      fill={{
        type: "linear",
        stops: ["red", "blue"],
        angle: 180,
      }}
    />
  ),
};

export const RadialGradientFill = {
  args: {
    ...Default.args,
  },
  render: (args: PolygonProps) => (
    <Polygon
      {...args}
      fill={{
        type: "radial",
        stops: ["red", "blue"],
      }}
    />
  ),
};
