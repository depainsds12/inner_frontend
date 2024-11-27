import React, { useMemo } from "react";
import Polygon, { PolygonProps } from "@/src/components/polygon/polygon";
import { Point } from "../utils";

export const InvertedTrapezoid: React.FC<InvertedTrapezoidProps> = ({
  width = 400,
  height = 100,
  slopeAngle = 45,
  ...props
}) => {
  const points = useMemo(() => {
    const yPosition = height;
    const xPosition = yPosition * Math.tan((slopeAngle * Math.PI) / 180);

    return [
      [0, 0],
      [width, 0],
      [width - xPosition, yPosition],
      [xPosition, yPosition],
    ] as Array<Point>;
  }, [slopeAngle, width, height]);

  return <Polygon points={points} {...props} />;
};

export interface InvertedTrapezoidProps extends Omit<PolygonProps, "points"> {
  /**
   * The width of the view box
   * @default 400
   */
  width?: number;
  /**
   * The height of the view box
   * @default 100
   */
  height?: number;
  /**
   * The angle of the sloping sides on the left and right. 90 degrees makes it a rectangle.
   * @default 45
   */
  slopeAngle?: number;
}
