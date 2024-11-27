import { useMemo } from "react";
import {
  createPolygonClipPath,
  getBoundingBox,
  normalizePointsWithStrokeInset,
} from "@/src/components/polygon/utils";
import { Point } from "../components/polygon/utils";

type Segment = [Point, Point, Point, Point];

/**
 * Calculates polygon geometry and returns an array of line segments
 * with variable stroke width based on vertex angles
 */
export const usePolygonGeometry = (
  points: Point[],
  strokeWidths: Array<number>,
  rotation = 0,
) => {
  return useMemo(() => {
    const {
      exteriorPoints,
      middlePoints,
      interiorPoints, // points for the content inside the polygon
      width,
      height,
    } = normalizePointsWithStrokeInset(points, strokeWidths, rotation);

    const segments: Segment[] = middlePoints.map((point, i) => {
      const nextIndex = (i + 1) % middlePoints.length;

      return [
        exteriorPoints[i],
        interiorPoints[i],
        interiorPoints[nextIndex],
        exteriorPoints[nextIndex],
      ];
    });

    const exteriorBounds = getBoundingBox(exteriorPoints);
    const boundingBox = getBoundingBox(interiorPoints);

    // Calculate clip path (percentage-based coordinates)
    const clipPath = createPolygonClipPath(
      interiorPoints.map(([x, y]) => [x - boundingBox.x, y - boundingBox.y]),
      boundingBox.width,
      boundingBox.height,
    );

    const contentBounds = {
      left: (boundingBox.x * 100) / exteriorBounds.width,
      top: (boundingBox.y * 100) / exteriorBounds.height,
      width: (boundingBox.width * 100) / exteriorBounds.width,
      height: (boundingBox.height * 100) / exteriorBounds.height,
    };

    const path =
      middlePoints
        .map(([x, y], index) => {
          return `${index === 0 ? "M" : "L"} ${x},${y}`;
        })
        .join(" ") + " Z";

    return {
      path,
      segments,
      viewBox: `0 0 ${width} ${height}`,
      aspectRatio: width / height,
      clipPath,
      contentBounds,
    };
  }, [points, strokeWidths, rotation]);
};
