import React, { useEffect, useRef, useLayoutEffect, useState } from "react";
import * as d3 from "d3";

const StreamGraph = (arrdata = null) => {
  const ref = useRef();
  const [containerWidth, setContainerWidth] = useState(0);

  const data = arrdata.data;

  useLayoutEffect(() => {
    // Function to update the width
    const updateWidth = () => {
      if (ref.current) {
        setContainerWidth(ref.current.clientWidth);
      }
    };

    // Initial width
    updateWidth();

    // Resize observer to update width on window resize
    window.addEventListener("resize", updateWidth);

    // Cleanup event listener
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    if (containerWidth === 0) return; // Wait until the containerWidth is known

    // Set the dimensions of the graph
    const width = containerWidth;
    const height = 150;

    // Remove any previous content inside the ref element
    d3.select(ref.current).selectAll("*").remove();

    // Append the svg object to the ref element
    const svg = d3
      .select(ref.current)
      .append("svg")
      .attr("width", "100%")
      .attr("height", "100%")
      .attr("viewBox", `0 0 ${width} ${height * 2}`);

    // List of groups (keys) excluding 'day'
    const keys = Object.keys(data[0]).filter((key) => key !== "day");

    // Create scales
    const x = d3
      .scaleLinear()
      // .domain([3.5, 35])
      .domain(d3.extent(data, (d) => d.day))
      .range([0, width]);

    // Set a fixed maximum value for the y-axis domain
    const yMaxFixed = 20; // Adjust this value as needed
    const y = d3.scaleLinear().domain([0, yMaxFixed]).range([height, 0]);

    // Color palette
    const color = d3.scaleOrdinal().domain(keys).range(d3.schemeDark2);

    // Stack the data
    const stackedData = d3.stack().keys(keys).offset(d3.stackOffsetSilhouette)(
      data,
    );

    // Custom gradient colors for each key
    const customGradients = {
      flowers: ["#355B8D", "#64ACFF"], // Gradient from red to yellow
      shadows: ["#9A55FF", "#6D35BE"], // Gradient from dark blue to light blue
      ripples: ["#FAB130", "#9C6400"], // Gradient from dark green to light green
    };

    // Create a defs element
    const defs = svg.append("defs");

    // For each key, create a radial gradient with custom colors
    keys.forEach((key) => {
      const gradientColors = customGradients[key];

      const gradient = defs
        .append("radialGradient")
        .attr("id", `gradient-${key}`)
        .attr("cx", "50%")
        .attr("cy", "50%")
        .attr("r", "50%")
        .attr("fx", "50%")
        .attr("fy", "50%");

      // Define the gradient colors
      gradient
        .append("stop")
        .attr("offset", "0%")
        .attr("stop-color", gradientColors[0])
        .attr("stop-opacity", 1);

      gradient
        .append("stop")
        .attr("offset", "100%")
        .attr("stop-color", gradientColors[1])
        .attr("stop-opacity", 1);
    });

    // Create a tooltip
    const Tooltip = svg
      .append("text")
      .attr("x", 10)
      .attr("y", 20)
      .style("opacity", 0)
      .style("font-size", 14);

    // Tooltip functions
    const mouseover = function () {
      Tooltip.style("opacity", 1);
      d3.selectAll(".myArea").style("opacity", 0.2);
      d3.select(this).style("stroke", "black").style("opacity", 1);
    };
    const mousemove = function () {
      const grp = d3.select(this).datum().key;
      Tooltip.text(grp);
    };
    const mouseleave = function () {
      Tooltip.style("opacity", 0);
      d3.selectAll(".myArea").style("opacity", 1).style("stroke", "none");
    };

    // Area generator with smoother curves
    const area = d3
      .area()
      .curve(d3.curveBasis) // Use d3.curveBasis for smoother edges
      .x((d) => x(d.data.day))
      .y0((d) => y(d[0]))
      .y1((d) => y(d[1]));

    // Draw the areas
    svg
      .selectAll(".myArea")
      .data(stackedData)
      .enter()
      .append("path")
      .attr("class", "myArea")
      // .style('fill', (d) => color(d.key))
      .attr("d", area)
      .attr("fill", (d) => `url(#gradient-${d.key})`) // Use the gradient fill
      .on("mouseover", mouseover)
      .on("mousemove", mousemove)
      .on("mouseleave", mouseleave);
  }, [containerWidth]);

  return (
    <div
      ref={ref}
      className="max-h-[150px] min-h-[150px] w-[600px] overflow-hidden"
    ></div>
  );
};

export default StreamGraph;

// Data provided by the user
// const data = [
//   { day: 1, flowers: 0, shadows: 0, ripples: 0 },
//   { day: 2, flowers: 1, shadows: 1, ripples: 1 },
//   { day: 3, flowers: 1, shadows: 1, ripples: 1 },
//   { day: 4, flowers: 2, shadows: 2, ripples: 1 },
//   { day: 5, flowers: 1, shadows: 2, ripples: 2 },
//   { day: 6, flowers: 3, shadows: 9, ripples: 3 },
//   { day: 7, flowers: 2, shadows: 2, ripples: 2 },
//   { day: 8, flowers: 2, shadows: 2, ripples: 2 },
//   { day: 9, flowers: 1, shadows: 1, ripples: 1 },
//   { day: 10, flowers: 1, shadows: 1, ripples: 1 },
//   { day: 11, flowers: 0, shadows: 0, ripples: 0 },
//   { day: 12, flowers: 1, shadows: 3, ripples: 2 },
//   { day: 13, flowers: 2, shadows: 4, ripples: 3 },
//   { day: 14, flowers: 3, shadows: 5, ripples: 4 },
//   { day: 15, flowers: 4, shadows: 4, ripples: 5 },
//   { day: 16, flowers: 5, shadows: 6, ripples: 6 },
//   { day: 17, flowers: 6, shadows: 5, ripples: 5 },
//   { day: 18, flowers: 7, shadows: 7, ripples: 6 },
//   { day: 19, flowers: 6, shadows: 8, ripples: 5 },
//   { day: 20, flowers: 5, shadows: 7, ripples: 4 },
//   { day: 21, flowers: 4, shadows: 6, ripples: 4 },
//   { day: 22, flowers: 3, shadows: 5, ripples: 3 },
//   { day: 23, flowers: 2, shadows: 4, ripples: 2 },
//   { day: 24, flowers: 3, shadows: 6, ripples: 4 },
//   { day: 25, flowers: 4, shadows: 7, ripples: 5 },
//   { day: 26, flowers: 5, shadows: 9, ripples: 6 },
//   { day: 27, flowers: 6, shadows: 10, ripples: 7 },
//   { day: 28, flowers: 7, shadows: 8, ripples: 8 },
//   { day: 29, flowers: 6, shadows: 7, ripples: 6 },
//   { day: 30, flowers: 5, shadows: 6, ripples: 5 },
//   { day: 31, flowers: 4, shadows: 5, ripples: 4 },
//   { day: 32, flowers: 3, shadows: 4, ripples: 3 },
//   { day: 33, flowers: 2, shadows: 3, ripples: 2 },
//   { day: 34, flowers: 1, shadows: 2, ripples: 1 },
//   { day: 35, flowers: 0, shadows: 1, ripples: 0 },
//   { day: 36, flowers: 1, shadows: 3, ripples: 1 },
//   { day: 37, flowers: 2, shadows: 5, ripples: 3 },
//   { day: 38, flowers: 3, shadows: 6, ripples: 4 },
//   { day: 39, flowers: 4, shadows: 7, ripples: 5 },
//   { day: 40, flowers: 3, shadows: 8, ripples: 4 },
//   { day: 41, flowers: 2, shadows: 7, ripples: 3 },
// ];
