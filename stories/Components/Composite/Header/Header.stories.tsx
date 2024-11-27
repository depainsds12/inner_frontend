import Header from "@/src/components/header/profile-header";
/**
 * The Login component is a visually complex shape that combines
 * various polygons and lines to create a unique design. It can be customized to
 * show different states, such as active or inactive.
 */
const meta = {
  title: "Components/Composite/Header/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Default = {
  parameters: {
    docs: {
      description: {
        story: "This is the default appearance of the Header component",
      },
    },
  },
};
