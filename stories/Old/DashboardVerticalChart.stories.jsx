// SentimentChart.stories.js
import SentimentChart from "@/src/components/__old__/dashboard/verticalChart";

export default {
  title: "Old/DashboardSentimentChart",
  component: SentimentChart,
};

export const Default = {
  args: {
    data: {
      top: {
        switch_titles: ["Joy", "Hope", "Excitement", "Gratitude"],
        values: [30, 50, 40, 60],
      },
      bottom: {
        switch_titles: ["Fear", "Anger", "Sadness", "Anxiety"],
        values: [20, 35, 25, 45],
      },
    },
  },
};
