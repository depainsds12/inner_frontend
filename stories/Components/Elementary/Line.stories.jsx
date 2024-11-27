import Line from "@/src/components/__old__/line/line";

export default {
  title: "Components/Elementary/Line",
  component: Line,
  tags: ["autodocs"],
  argTypes: {
    color: { control: "color" },
    thickness: { control: "number" },
    style: { control: "object" }, // Control for custom styles
  },
};

export const Default = {
  args: {
    color: "black",
    thickness: 1,
    style: { width: "100%" }, // Default width
  },
};

export const CustomWidth = {
  args: {
    color: "blue",
    thickness: 2,
    style: { width: "50%" }, // Custom width
  },
};

export const ThickLine = {
  args: {
    color: "red",
    thickness: 5,
    style: { width: "75%" }, // Custom width
  },
};

export const WithCustomStyle = {
  args: {
    color: "green",
    thickness: 3,
    style: {
      margin: "20px auto",
      borderRadius: "5px",
      width: "100%",
    },
  },
};

export const GradientLine = {
  args: {
    thickness: 4,
    style: {
      backgroundImage:
        "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)",
      height: "4px",
      width: "100%",
      borderRadius: "5px",
    },
  },
};
