import React from "react";

const Line = ({ color = "black", thickness = 1, style = {} }) => {
  return (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: thickness,
        border: "none",
        ...style, // Spread the additional styles here
      }}
    />
  );
};

export default Line;
