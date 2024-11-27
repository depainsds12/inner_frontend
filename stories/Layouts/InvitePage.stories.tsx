// JoinUsPage.stories.tsx
import JoinUsPage from "@/src/app/__old__/invite/page";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof JoinUsPage> = {
  title: "Pages/JoinUsPage",
  component: JoinUsPage,
  parameters: {
    // Disable NextJS routing in Storybook
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/join-us",
      },
    },
    // Optional: Add layout parameters
    layout: "fullscreen",
    // Optional: Add viewport configurations
    viewport: {
      defaultViewport: "desktop",
    },
  },
};

export default meta;
type Story = StoryObj<typeof JoinUsPage>;

// Basic story
export const Default: Story = {
  render: () => <JoinUsPage />,
};
