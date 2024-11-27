// RadarChart.stories.js
import RadarChart from "@/src/components/__old__/dashboard/radarChart";

export default {
  title: "Old/DashboardRadarChart",
  component: RadarChart,
};

export const Default = {
  args: {
    labels: [
      "Strength",
      "Skill",
      "Endurance",
      "Intelligence",
      "Agility",
      "Courage",
    ],
    data: [20, 15, 25, 10, 18, 22],
  },
};
