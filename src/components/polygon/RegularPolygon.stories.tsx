import {
  RegularPolygon,
  RegularPolygonProps,
} from "@/src/components/polygon/RegularPolygon";
import { Sides } from "@/src/components/polygon/utils";

const meta = {
  title: "Components/Polygon/RegularPolygon",
  component: RegularPolygon,
  tags: ["autodocs"],
};

export default meta;

export const Default = {
  args: {
    style: {
      width: "400px",
    },
    sides: 6,
    rotation: 90,
    strokeWidth: 5,
  },
  render: (args: RegularPolygonProps) => <RegularPolygon {...args} />,
};

export const All = {
  args: {
    style: {
      width: "150px",
    },
    rotation: 90,
    strokeWidth: 5,
  },
  render: (args: RegularPolygonProps) => (
    <div className="grid grid-cols-5 items-center gap-4">
      {Array.from({ length: 10 }).map((_, i) => (
        <RegularPolygon {...args} sides={(i + 3) as Sides} key={i}>
          {i + 3}
        </RegularPolygon>
      ))}
    </div>
  ),
};
