import React from "react";
import Polygon, { PolygonProps } from "../polygon";
import { generateHexagonPoints } from "../utils";

export const HexBox: React.FC<HexBoxProps> = ({
  width = 400,
  height = 100,
  tipAngle = 45,
  ...props
}) => {
  return (
    <Polygon
      points={generateHexagonPoints({ width, height, tipAngle })}
      {...props}
    />
  );
};

export interface HexBoxProps extends Omit<PolygonProps, "points"> {
  /**
   * Width of the hexagon
   * @default 400
   */
  width?: number;
  /**
   * Height of the hexagon
   * @default 100
   */
  height?: number;

  /**
   * The angle of the tip of the hexagon
   * @default 45 degrees
   */
  tipAngle?: number;
}
