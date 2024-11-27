import React from "react";
import {
  RegularPolygon,
  RegularPolygonProps,
} from "@/src/components/polygon/RegularPolygon";

export interface RegularHexagonProps
  extends Omit<RegularPolygonProps, "sides"> {}

/**
 * A regular hexagon component that renders with 6 equal sides.
 * @param props
 */
export const RegularHexagon: React.FC<RegularHexagonProps> = (props) => {
  return <RegularPolygon sides={6} {...props} />;
};
