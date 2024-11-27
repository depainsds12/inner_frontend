import React from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
);

export default function RadarChart({ labels, data }) {
  const chartData = {
    labels: labels, // Removed duplicate "Hope" and added "Courage"
    datasets: [
      {
        data: data, // Pass data dynamically
        backgroundColor: "rgba(168, 94, 171, 0.8)", // Set transparency to 50%
        // borderColor: "#", // Border color matching the fill
        borderWidth: 0,
        fill: true, // Enable solid fill (no transparency)
        pointRadius: 0, // Hide the data points
        pointHoverRadius: 0, // Hide hover radius for data points
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        enabled: true, // Optional: Enable tooltips if needed
      },
    },
    scales: {
      r: {
        min: 0,
        max: 30,
        ticks: {
          beginAtZero: true,
          display: false, // Hide the ticks (labels) on the axes
        },
        grid: {
          display: false, // Hide the grid lines
        },
        angleLines: {
          display: false, // Optional: Hide the angle lines
        },
        pointLabels: {
          display: false, // Hide the labels around the radar
        },
      },
    },
  };

  return <Radar data={chartData} options={chartOptions} />;
}
