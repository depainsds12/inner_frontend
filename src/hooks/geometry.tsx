import { useMemo } from "react";

/**
 * Calculates polygon geometry and returns path data and layout properties
 */
export const usePolygonGeometry = (points: [number, number][]) => {
  return useMemo(() => {
    // Calculate bounding box
    const [minX, minY, maxX, maxY] = points.reduce(
      ([left, top, right, bottom], [x, y]) => [
        Math.min(left, x),
        Math.min(top, y),
        Math.max(right, x),
        Math.max(bottom, y),
      ],
      [Infinity, Infinity, -Infinity, -Infinity],
    );

    const width = maxX - minX;
    const height = maxY - minY;

    // Normalize points to origin
    const normalized = points.map(([x, y]) => [x - minX, y - minY]);

    // Generate path
    const pathData =
      normalized
        .map((point, i) => `${i === 0 ? "M" : "L"} ${point[0]},${point[1]}`)
        .join(" ") + " Z";

    // Calculate clip path for content
    const clipPath = `polygon(${normalized
      .map(([x, y]) => `${(x / width) * 100}% ${(y / height) * 100}%`)
      .join(", ")})`;

    return {
      pathData,
      viewBox: `0 0 ${width} ${height}`,
      clipPath,
      aspectRatio: width / height,
    };
  }, [points]);
};
