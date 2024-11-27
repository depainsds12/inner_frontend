import StackedAreaCharts from "@/src/components/__old__/dashboard/lineChart";

const meta = {
  title: "Old/StackedAreaCharts",
  component: StackedAreaCharts,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A stacked area chart showing the relationship between flowers, shadows, and ripples over time.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    height: {
      control: "number",
      description: "Height of the chart container",
      defaultValue: 380,
    },
    darkMode: {
      control: "boolean",
      description: "Toggle dark/light mode",
      defaultValue: true,
    },
  },
};

export default meta;

// Default story
export const Default = {
  args: {
    height: 380,
    darkMode: true,
  },
};

// Light mode variant
export const LightMode = {
  args: {
    height: 380,
    darkMode: false,
  },
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

// Compact variant
export const Compact = {
  args: {
    height: 250,
    darkMode: true,
  },
};

// Modified StackedAreaCharts component to accept props
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend,
);
