// Screen2.stories.js
import Screen2 from "@/src/components/__old__/dashboard/screen2";

export default {
  title: "Old/DashboardScreen2",
  component: Screen2,
};

export const Default = {
  args: {
    cutContent: false,
  },
};

export const CutContent = {
  args: {
    cutContent: true,
  },
};
