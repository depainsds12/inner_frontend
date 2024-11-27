import PersonalisedWellgorithm from "@/src/components/__old__/polygon/composite_components/personalised_wellgorithm/personalised_wellgorithm";

/**
 * The PersonalisedWellgorithm component is a visually complex shape that combines
 * various polygons and lines to create a unique design. It can be customized to
 * show different states, such as active or inactive.
 */
const meta = {
  title: "Components/Composite/PersonalisedWellgorithm",
  component: PersonalisedWellgorithm,
  tags: ["autodocs"],
  argTypes: {
    active: {
      control: "boolean",
      description: "Determines whether the active lines are displayed",
    },
  },
};

export default meta;

// Default story
export const Default = {
  args: {
    active: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "This is the default appearance of the PersonalisedWellgorithm component without any active lines.",
      },
    },
  },
};

// Active state story
export const ActiveState = {
  args: {
    active: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "This story showcases the PersonalisedWellgorithm component with active lines displayed, enhancing its visual complexity.",
      },
    },
  },
};
