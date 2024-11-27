import LoginPage from "@/src/app/auth/login/page";
/**
 * The Login component is a visually complex shape that combines
 * various polygons and lines to create a unique design. It can be customized to
 * show different states, such as active or inactive.
 */
const meta = {
  title: "Components/Composite/Login/Login",
  component: LoginPage,
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
        story:
          "This is the default appearance of the PersonalisedWellgorithm component without any active lines.",
      },
    },
  },
};
