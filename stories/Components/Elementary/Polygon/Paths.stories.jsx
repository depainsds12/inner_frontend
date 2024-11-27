// This file is auto-generated. Do not edit directly.
import {
  LoginOctagonCoordinates,
  TrapeziumCoordinates,
  ReverseTrapeziumCoordinates,
  ParallelogramCoordinates,
  ReverseParallelogramCoordinates,
} from "@/src/components/__old__/polygon/paths";
import Polygon from "@/src/components/polygon/polygon";

// Wrapper component for consistent sizing and positioning
const PolygonWrapper = ({ children }) => (
  <div
    style={{
      width: "400px",
      height: "400px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto",
      border: "1px dashed #ccc",
      position: "relative",
    }}
  >
    {children}
  </div>
);

const meta = {
  title: "Components/Elementary/Polygon/Paths",
  component: Polygon,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <PolygonWrapper>
        <Story />
      </PolygonWrapper>
    ),
  ],
  argTypes: {
    className: {
      description: "classes for the polygon container",
      control: "text",
    },
    points: {
      description: "An array of coordinate pairs defining the polygon vertices",
      control: "object",
    },
    stroke: {
      description: "The color of the polygon outline",
      control: { type: "color" },
    },
    fill: {
      description: "The fill color of the polygon",
      control: { type: "color" },
    },
    children: {
      description: "Optional content to render inside the polygon",
      control: "text",
    },
    style: {
      description: "Additional inline styles for the polygon",
      control: "object",
    },
  },
};

export default meta;

const baseArgs = {
  stroke: "#000000",
  fill: "#FF5733",
  style: {
    width: "300px", // Adjusted to fit within wrapper
    maxWidth: "100%",
  },
};

/**
 * Original export name: LoginOctagonCoordinates
 *
 */
export const LoginOctagon = {
  args: {
    ...baseArgs,
    points: LoginOctagonCoordinates,
  },
};

/**
 * Original export name: TrapeziumCoordinates
 *
 */
export const Trapezium = {
  args: {
    ...baseArgs,
    points: TrapeziumCoordinates,
  },
};

/**
 * Original export name: ReverseTrapeziumCoordinates
 *
 */
export const ReverseTrapezium = {
  args: {
    ...baseArgs,
    points: ReverseTrapeziumCoordinates,
  },
};

/**
 * Original export name: ParallelogramCoordinates
 *
 */
export const Parallelogram = {
  args: {
    ...baseArgs,
    points: ParallelogramCoordinates,
  },
};

/**
 * Original export name: ReverseParallelogramCoordinates
 *
 */
export const ReverseParallelogram = {
  args: {
    ...baseArgs,
    points: ReverseParallelogramCoordinates,
  },
};
