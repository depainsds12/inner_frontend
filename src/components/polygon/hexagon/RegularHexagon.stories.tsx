import {
  RegularHexagon,
  RegularHexagonProps,
} from "@/src/components/polygon/hexagon/RegularHexagon";

const meta = {
  title: "Components/Polygon/Hexagon/RegularHexagon",
  component: RegularHexagon,
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
  render: (args: RegularHexagonProps) => <RegularHexagon {...args} />,
};
