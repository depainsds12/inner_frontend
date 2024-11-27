import React, { useMemo } from "react";
import Polygon, { PolygonProps } from "./polygon";
import { getPolygonPoints, normalizePoints, Sides } from "./utils";

export interface RegularPolygonProps extends Omit<PolygonProps, "points"> {
  /**
   * Number of sides in the polygon
   */
  sides: Sides;

  /**
   * Width of the polygon. Provide if you need to control the ratio of the stroke width to the size of the polygon
   * @default 100
   */
  width?: number;

  /**
   * Height of the polygon. Provide if you need to control the ratio of the stroke width to the size of the polygon
   * @default 100
   */
  height?: number;
}

export const RegularPolygon: React.FC<RegularPolygonProps> = ({
  sides,
  width = 100,
  height = 100,
  ...props
}) => {
  const { points } = useMemo(
    () => normalizePoints(getPolygonPoints(sides), width, height),
    [width, height, sides],
  );

  return <Polygon points={points} {...props} />;
};
