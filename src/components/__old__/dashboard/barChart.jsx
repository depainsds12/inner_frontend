// HorizontalBarChart.js

import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
);

// Register both custom plugins
//ChartJS.register(p1, p2);

const StackedBarChart = ({ data = null, heading = "" }) => {
  const fillColor =
    heading === "shadows"
      ? "#9C6400"
      : heading === "flowers"
        ? "#6D35BE"
        : heading === "ripples"
          ? "#578CD3"
          : "";

  const barHeight = 30; // Custom height for the bar

  const p1 = {
    id: "customPointyHorizontalBars",
    beforeDraw: (chart) => {
      const ctx = chart.ctx;
      const dataset = chart.data.datasets[0]; // Assuming one dataset
      const meta = chart.getDatasetMeta(0);

      meta.data.forEach((bar, index) => {
        const model = bar._model || bar; // Use the model for older versions or fallback to bar

        // Get bar dimensions
        const { x, y, base } = model;

        ctx.beginPath();

        // Draw the base rectangle part of the bar
        ctx.moveTo(base, y - barHeight / 2); // Bottom left corner of the bar
        ctx.lineTo(x, y - barHeight / 2); // Top left corner just before the point
        ctx.lineTo(x - 10, y); // Pointy tip (middle of the right side)
        ctx.lineTo(x, y + barHeight / 2); // Bottom left corner just before the point
        ctx.lineTo(base, y + barHeight / 2); // Bottom left corner

        ctx.closePath();
        ctx.fillStyle = "#848484";
        ctx.fill();
        ctx.strokeStyle = dataset.borderColor;
        ctx.lineWidth = dataset.borderWidth;
        ctx.stroke();
      });
    },
  };
  const p2 = {
    id: "customPointyHorizontalBars2",
    beforeDraw: (chart) => {
      const ctx = chart.ctx;
      const dataset = chart.data.datasets[0]; // Assuming one dataset
      const meta = chart.getDatasetMeta(0);

      meta.data.forEach((bar, index) => {
        const model = bar._model || bar; // Use the model for older versions or fallback to bar

        // Get bar dimensions
        const { x, y, base } = model;

        ctx.beginPath();

        // Draw the base rectangle part of the bar
        ctx.moveTo(base, y - barHeight / 2); // Bottom left corner of the bar
        ctx.lineTo(x, y - barHeight / 2); // Top left corner just before the point
        ctx.lineTo(x + 10, y); // Pointy tip (middle of the right side)
        ctx.lineTo(x, y + barHeight / 2); // Bottom left corner just before the point
        ctx.lineTo(base, y + barHeight / 2); // Bottom left corner

        ctx.closePath();
        ctx.fillStyle = fillColor;
        ctx.fill();
        ctx.strokeStyle = dataset.borderColor;
        ctx.lineWidth = dataset.borderWidth;
        ctx.stroke();
      });
    },
  };

  // Chart data
  const data1 = {
    labels: data.map((z) => z.name),
    datasets: [
      {
        label: "No switches",
        data: data.map((z) => z.no_switches),
        backgroundColor: ["transparent"],
        borderColor: ["transparent"],
        borderWidth: 1,
        barThickness: 30,
        categoryPercentage: 0.3,
      },
    ],
  };

  const data2 = {
    labels: data.map((z) => z.name),
    datasets: [
      {
        label: "Switches",
        data: data.map((z) => z.switches),
        backgroundColor: ["transparent"],
        borderColor: ["transparent"],
        borderWidth: 1,
        barThickness: 30,
        categoryPercentage: 0.3,
      },
    ],
  };

  // Chart options
  const options = {
    indexAxis: "y", // This makes the bar chart horizontal
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
    },
    scales: {
      y: {
        display: false,
      },
      x: {
        position: "top",
        beginAtZero: true,
        ticks: {
          color: "#fff",
          font: {
            padding: 10,
            size: 16, // Change x-axis tick labels text size
          },
        },
      },
    },
  };

  const optionsRev = {
    ...options,
    scales: {
      y: {
        display: false,
      },
      x: {
        ...options.scales.x,
        reverse: true, // Rever
      },
    },
  };

  return (
    <div className="relative flex h-[380px] w-full items-center justify-center">
      <section className="h-full w-1/2 overflow-hidden">
        <Bar data={data1} options={optionsRev} plugins={[p1]} />
      </section>
      <section className="absolute mt-9 flex h-fit w-1/2 flex-col gap-5 bg-gradient-to-r from-transparent via-[rgba(0,0,0,0.95)] to-transparent py-3 text-center">
        {/* bg-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,rgba(0,0,0,0.40)_0%,rgba(255,255,255,0.00)_100%)] */}
        {data
          .map((z) => z.name)
          .map((z, i) => (
            <p key={i} className="font-bold text-white">
              {z}
            </p>
          ))}
      </section>
      <section className="h-full w-1/2 overflow-hidden">
        <Bar data={data2} options={options} plugins={[p2]} />
      </section>
    </div>
  );
};

export default StackedBarChart;

// flower - purple
// shadow - orange
// ripple - blue
// ai - green
