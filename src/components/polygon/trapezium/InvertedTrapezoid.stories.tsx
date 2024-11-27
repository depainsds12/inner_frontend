import {
  InvertedTrapezoid,
  InvertedTrapezoidProps,
} from "@/src/components/polygon/trapezium/inverted-trapezoid";

const meta = {
  title: "Components/Polygon/Trapezium/InvertedTrapezoid",
  component: InvertedTrapezoid,
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
  render: (args: InvertedTrapezoidProps) => <InvertedTrapezoid {...args} />,
};
