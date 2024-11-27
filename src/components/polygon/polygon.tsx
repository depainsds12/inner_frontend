import { usePolygonFill } from "@/src/hooks/usePolygonFill";
import { usePolygonGeometry } from "@/src/hooks/usePolygonGeometry";
import Image from "next/image";
import React, { CSSProperties, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { BoundaryProps, createBorderStyle, GradientFill, Point } from "./utils";

export interface PolygonProps {
  /**
   * The points of the polygon
   */
  points: Array<Point>;

  /**
   * The stroke color of the polygon
   */
  stroke?: string;

  /**
   * The fill color of the polygon
   */
  fill?: string | GradientFill;

  /**
   * The children of the polygon. This will be inside the polygon
   */
  children?: React.ReactNode;

  /**
   * The styles to apply to the polygon container
   */
  style?: React.CSSProperties;

  /**
   * The stroke width of the polygon border
   */
  strokeWidth?: number;

  /**
   * The class name to apply to the polygon content
   */
  className?: string;

  /**
   * The class name to apply to the polygon container
   */
  containerClassname?: string;

  /**
   * The click handler for the polygon
   */
  onClick?: () => void;

  /**
   * The rotation of the polygon points in degrees. Note that this will not rotate the content inside the polygon
   * @default 0
   */
  rotation?: number;

  /**
   * Whether the content should overflow the polygon
   */
  overflow?: boolean;

  /**
   * The background image to apply to the polygon
   */
  backgroundImage?: string;

  /**
   * The alt text for the background image
   * @default ""
   */
  backgroundImageAlt?: string;

  borderStyle?: Array<BoundaryProps | string>;

  /**
   * The colors for the segments of the polygon
   */
  segmentColors?: string[];
}

const Polygon = React.forwardRef<
  HTMLDivElement,
  PropsWithChildren<PolygonProps>
>(
  (
    {
      points,
      stroke = "#000000",
      fill = "#ffffff",
      children,
      style = {},
      strokeWidth = 1,
      className = "",
      containerClassname = "",
      onClick,
      rotation,
      backgroundImage,
      backgroundImageAlt,
      overflow = false,
      borderStyle = [],
    },
    containerRef,
  ) => {
    const { fillValue, def } = usePolygonFill(fill);
    const borders = createBorderStyle(
      borderStyle,
      points.length,
      stroke,
      strokeWidth,
    );

    const { path, segments, viewBox, clipPath, aspectRatio, contentBounds } =
      usePolygonGeometry(
        points,
        borders.map((style) => style.strokeWidth * 2),
        rotation,
      );

    const styles: Record<string, CSSProperties> = {
      container: {
        aspectRatio,
        ...style,
      },
      content: {
        inset: `${contentBounds.top}% ${contentBounds.left}%`,
        width: `${contentBounds.width}%`,
        height: `${contentBounds.height}%`,
        ...(overflow ? {} : { clipPath }),
      },
    };

    return (
      <div
        ref={containerRef}
        style={styles.container}
        className={twMerge(
          "relative h-auto w-full",
          onClick ? "cursor-pointer" : "",
          containerClassname,
        )}
        onClick={onClick}
      >
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox={viewBox}
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>{def}</defs>
          <g transform={`scale(1)`}>
            <path
              d={path}
              fill={fillValue}
              stroke="none"
              strokeWidth={strokeWidth}
            />
          </g>
          {segments.map((segment, i) => (
            <path
              key={i}
              d={`M ${segment[0].join(" ")} L ${segment[1].join(" ")} L ${segment[2].join(" ")} L ${segment[3].join(" ")} Z`}
              fill={borders[i].stroke}
              {...borders[i]}
              strokeWidth={0}
            />
          ))}
        </svg>

        {onClick && (
          <div
            onClick={onClick}
            style={{ clipPath }}
            className="absolute inset-0 cursor-pointer"
          />
        )}

        <div
          onClick={onClick}
          className={twMerge(
            "absolute inset-0 z-0",
            onClick ? "cursor-pointer" : "",
          )}
          style={{
            clipPath: clipPath,
            overflow: "visible",
            pointerEvents: "all",
          }}
        />

        {backgroundImage && (
          <Image
            src={backgroundImage}
            alt={backgroundImageAlt ?? ""}
            fill
            sizes="100vw"
            style={{ clipPath: overflow ? clipPath : undefined }}
            className="z-0 object-cover"
          />
        )}

        <div
          className={twMerge(
            "relative z-10 flex items-center justify-center",
            overflow ? "size-full" : "",
            className,
          )}
          style={styles.content}
        >
          {children}
        </div>
      </div>
    );
  },
);

Polygon.displayName = "Polygon";

export default Polygon;
