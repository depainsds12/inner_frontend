import { HexBox, HexBoxProps } from "@/src/components/polygon/hexagon/HexBox";
import { RegularPolygon } from "@/src/components/polygon/RegularPolygon";

const meta = {
  title: "Components/Polygon/Hexagon/HexBox",
  component: HexBox,
  tags: ["autodocs"],
};

export default meta;

export const Default = {
  args: {
    style: {
      width: "400px",
    },
    strokeWidth: 5,
  },
  render: (args: HexBoxProps) => <HexBox {...args} />,
};

export const ComparisonWithOctagon = {
  args: {
    style: {
      width: "400px",
    },
    strokeWidth: 5,
  },
  render: (args: HexBoxProps) => (
    <div className="relative flex flex-col items-center gap-4">
      <div
        className="absolute left-0 top-0 z-10 h-[400px] w-[5px] bg-[red]"
        style={{
          top: -15,
          transform: "rotate(22.5deg) ",
        }}
      ></div>
      <div
        className="absolute z-10 h-[400px] w-[5px] bg-[red]"
        style={{
          left: 0,
          top: 250,
          transform: "rotate(22.5deg) ",
        }}
      ></div>
      <RegularPolygon
        sides={8}
        style={{
          width: "400px",
        }}
      />
      <HexBox {...args}>Content goes here</HexBox>
    </div>
  ),
};
