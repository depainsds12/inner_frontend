import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Filler,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

const SentimentChart = ({ data = null }) => {
  // Positive sentiment dataset
  const positiveData = {
    labels: data.top.switch_titles,
    datasets: [
      {
        label: "Positive Sentiments",
        data: data.top.values, // Positive sentiment values
        backgroundColor: "#6D35BE33", ///'rgba(0, 168, 150, 0.3)', // Teal-like background color for smooth fill
        borderColor: "#6D35BE", // Teal-like line color
        tension: 0.4, // Smooth line
        pointRadius: 0,
        barThickness: 0,

        fill: true,
      },
      {
        label: "Positive Sentiments",
        data: data.top.values, // Positive sentiment values
        backgroundColor: "#6D35BE33", // Teal-like background color for smooth fill
        borderColor: "#6D35BE", // Teal-like line color
        tension: 0.4, // Smooth line
        pointRadius: 0,
        barThickness: 0,

        fill: true,
      },
      {
        label: "Positive Sentiments",
        data: data.top.values, // Positive sentiment values
        backgroundColor: "#6D35BE33", // Teal-like background color for smooth fill
        borderColor: "#6D35BE", // Teal-like line color
        tension: 0.4, // Smooth line
        pointRadius: 0,
        barThickness: 0,

        fill: true,
      },
    ],
  };

  // Negative sentiment dataset
  const negativeData = {
    labels: data.bottom.switch_titles,
    datasets: [
      {
        label: "Negative Sentiments",
        data: data.bottom.values, // Negative sentiment values
        backgroundColor: "#9C640033", // Purple-like fill color (opacity added)
        borderColor: "#9C6400", // Purple-like line color
        tension: 0.4, // Smooth line
        pointRadius: 0,
        barThickness: 0,
        fill: true,
      },
      {
        label: "Negative Sentiments",
        data: data.bottom.values, // Negative sentiment values
        backgroundColor: "#9C640033", // Purple-like fill color (opacity added)
        borderColor: "#9C6400", // Purple-like line color
        tension: 0.4, // Smooth line
        pointRadius: 0,
        barThickness: 0,
        fill: true,
      },
      {
        label: "Negative Sentiments",
        data: data.bottom.values, // Negative sentiment values
        backgroundColor: "#9C640033", // Purple-like fill color (opacity added)
        borderColor: "#9C6400", // Purple-like line color
        tension: 0.4, // Smooth line
        pointRadius: 0,
        barThickness: 0,
        fill: true,
      },
    ],
  };

  const options = {
    indexAxis: "y", // Makes the chart horizontal
    scales: {
      x: {
        beginAtZero: true,
        stacked: true, // Enable stacking
        grid: {
          display: false, // Hide the grid lines on x-axis
          borderWidth: 0, // Remove the x-axis border
          drawBorder: false,
        },
        ticks: {
          display: false, // Hide the x-axis labels (numbers)
        },
      },
      y: {
        stacked: true, // Enable stacking for the y-axis (horizontal stacking)
        grid: {
          display: false, // Hide the grid lines on y-axis
          borderWidth: 0, // Remove the y-axis border
        },
        ticks: {
          display: false, // Show the y-axis labels (text)
          font: {
            size: 14, // Adjust the size of the tick text (change this to desired size)
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hide the legend if not needed
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  // Clone the options for the negative chart and set y-axis labels to the right
  const negativeOptions = {
    ...options,
    scales: {
      ...options.scales,
      x: {
        ...options.scales.x,
        reverse: true, // Rever
      },
      y: {
        ...options.scales.y,
        position: "right", // Move the y-axis labels to the right side
        ticks: {
          ...options.scales.y.ticks,
          font: {
            size: 16, // Set a different size for the negative sentiment ticks
          },
        },
      },
    },
  };

  return (
    <div className="grid min-h-[400px] w-full gap-6">
      <div className="flex h-full w-full justify-self-end">
        <section className="flex w-1/2 flex-col items-end justify-between text-white">
          {positiveData?.labels?.map((z, i) => (
            <span key={i}>{z}</span>
          ))}
        </section>
        <section className="w-[52%]">
          <Line data={positiveData} options={options} />
        </section>
      </div>
      <div className="flex h-full w-full justify-self-end">
        <section className="w-[52%]">
          <Line data={negativeData} options={negativeOptions} />
        </section>
        <section className="flex w-1/2 flex-col items-start justify-between text-white">
          {negativeData?.labels?.map((z, i) => (
            <span key={i}>{z}</span>
          ))}
        </section>
      </div>
    </div>
  );
};

export default SentimentChart;
