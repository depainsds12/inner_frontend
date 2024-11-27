import SelfieOctagon from "@/src/components/__old__/polygon/composite_components/login/selfie_octagon";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Composite/Login/SelfieOctagon",
  component: SelfieOctagon,
  parameters: {
    layout: "centered",
    componentSubtitle: "A nested octagonal component with selfie icon",
    docs: {
      description: {
        component:
          "SelfieOctagon is a decorative component that displays nested octagonal shapes with a selfie icon in the center. It features multiple layers with different sizes and subtle stroke effects.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SelfieOctagon>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default state
export const Default: Story = {};
