import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend,
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

const StackedAreaCharts = () => {
  // Chart Data for "seeds"
  const seedsData = {
    labels: ["m", "t", "w", "t", "f", "s", "s"], // Days of the week
    datasets: [
      {
        label: "flowers",
        data: [10, 20, 15, 30, 25, 40, 35], // Example data for flowers
        backgroundColor: "rgba(128, 0, 128, 0.7)", // Purple color
        borderColor: "rgba(128, 0, 128, 1)",
        borderWidth: 1,
        fill: true,
        tension: 0.4, // Make the line smoother
        pointRadius: 0, // Remove dots
      },
      {
        label: "shadows",
        data: [5, 15, 10, 25, 20, 35, 30], // Example data for shadows
        backgroundColor: "rgba(255, 165, 0, 0.7)", // Orange color
        borderColor: "rgba(255, 165, 0, 1)",
        borderWidth: 1,
        fill: true,
        tension: 0.4, // Make the line smoother
        pointRadius: 0, // Remove dots
      },
      {
        label: "ripples",
        data: [20, 30, 25, 40, 35, 50, 45], // Example data for ripples
        backgroundColor: "rgba(70, 130, 180, 0.7)", // Blue color
        borderColor: "rgba(70, 130, 180, 1)",
        borderWidth: 1,
        fill: true,
        tension: 0.4, // Make the line smoother
        pointRadius: 0, // Remove dots
      },
    ],
  };

  // Chart Options
  const options = {
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: false, // Hides the vertical grid lines
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: true, // Shows the horizontal grid lines
          color: "rgba(255, 255, 255, 0.1)", // Set the grid line color for better visibility
        },
        ticks: {
          stepSize: 20, // Set the step size to 20
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "bottom", // Move the legend below the graph
        labels: {
          usePointStyle: true, // Change legend shape to circle
          color: "rgba(255, 255, 255, 0.8)", // White color for the legend text
          boxWidth: 30, // Smaller box size (better for circular legends)
          padding: 20, // Adds space between legend labels
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="h-[380px] w-full">
      <Line data={seedsData} options={options} />
    </div>
  );
};

export default StackedAreaCharts;

// for text 4.5:1
// https://wave.webaim.org/
// https://www.npmjs.com/package/color-contrast-checker
