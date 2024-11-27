import React from "react";

const ClarityLine = ({ height = 7, color = "#fff", level = 1 }) => {
  return (
    <div
      className="relative w-full"
      style={{
        height: `${height}px`,
        backgroundColor: level === 1 ? "#fff" : color,
      }}
    ></div>
  );
};

export default ClarityLine;
