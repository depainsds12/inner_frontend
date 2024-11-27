import {
  useRadialPolygonGeometry,
  UseRadialPolygonGeometryProps,
} from "@/src/components/polygon/radial-polygon/hooks/useRadialPolygonGeometry";
import { useMemo } from "react";

export type UseRadialPolygonProps = UseRadialPolygonGeometryProps & {
  /**
   * Configuration for the core of the polygon
   */
  coreSize?: number;
};

export function useRadialPolygon({
  coreSize = 0,
  width,
  points: originalPoints,
  height,
  boundary,
  sides,
  rotation,
}: UseRadialPolygonProps) {
  const { points, center, border, contentWidth, contentHeight } =
    useRadialPolygonGeometry({
      width,
      boundary,
      points: originalPoints,
      height,
      sides,
      rotation,
    });

  const coreStrokeWidth = boundary?.inner?.strokeWidth || 0;

  const polygonProps = useMemo(() => {
    return {
      points,
      stroke: "none",
      strokeWidth: border,
      fill: "transparent",
      overflow: true,
      style: { width, height },
    };
  }, [points, border, width, height]);

  const coreProps = useMemo(() => {
    const centerXRatio = center[0] / width;
    const centerYRatio = center[1] / height;
    return {
      strokeWidth: coreStrokeWidth,
      stroke: "none",
      points,
      fill: "transparent",
      overflow: false,
      style: {
        zIndex: 3,
        position: "absolute" as const,
        left: center[0] - contentWidth * coreSize * centerXRatio,
        top: center[1] - contentHeight * coreSize * centerYRatio,
        width: contentWidth * coreSize,
        height: contentHeight * coreSize,
      },
    };
  }, [points, contentWidth, contentHeight, coreSize, coreStrokeWidth]);

  return {
    points,
    center,
    border,
    polygonProps,
    coreSize,
    contentWidth,
    contentHeight,
    coreStrokeWidth,
    coreProps,
  };
}
