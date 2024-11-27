import { FloatingLayer } from "@/src/components/polygon/radial-polygon/floating-layer";
import { useFloatingLayer } from "@/src/components/polygon/radial-polygon/hooks/useFloatingLayer";
import { useWedge } from "@/src/components/polygon/radial-polygon/hooks/useWedge";
import { Point, WedgeData } from "@/src/components/polygon/utils";
import { css } from "@emotion/css";
import React, { useMemo } from "react";
import { twMerge } from "tailwind-merge";
import Segment from "./segment";

const Wedge: React.FC<WedgeProps> = ({
  layers = 1,
  data,
  color: mainColor,
  center,
  polygonRotation,
  point,
  nextPoint,
  coreSize,
  floatingLayerContainer,
  parentRef,
}) => {
  const { rotation, width, height, layerHeight, clipPath, centerAngle } =
    useWedge({
      point,
      nextPoint,
      center,
      coreSize,
    });

  const floatingLayer = useFloatingLayer(floatingLayerContainer);

  const floatingLayerProps = useMemo(() => {
    return {
      floatingLayer,
      polygonRef: parentRef,
      center,
      rotation: polygonRotation,
      angle: centerAngle,
    };
  }, [floatingLayer, parentRef, center, polygonRotation, centerAngle]);

  const { fill = "transparent", color = mainColor, className } = data || {};

  return (
    <div
      style={{
        position: "absolute",
        top: point[1],
        width,
        height,
        left: point[0],
        color,
        zIndex: 2,
        transform: `translate(-50%, -50%) rotate(${rotation}deg) translate(-50%, -50%)`,
      }}
    >
      <div
        className={twMerge(
          "flex h-full w-full flex-col justify-end",
          // Use emotion to allow tailwind classes to override the background color
          css`
            clip-path: ${clipPath};
            background-color: ${fill};
          `,
          className,
        )}
      >
        {Array.from({ length: layers }).map((_, i) => {
          const index = layers - i - 1;
          return (
            <Segment
              key={`segment-${index}-${i}`}
              index={i}
              color={color}
              rotation={rotation}
              height={layerHeight / layers}
              {...(data?.segments?.[index] || {})}
            />
          );
        })}
      </div>
      {data?.floatingContent && (
        <div
          className={twMerge(
            "absolute bottom-0 left-1/2 flex w-full -translate-x-1/2 translate-y-full items-center justify-center",
            data?.floatingContentClassName,
          )}
        >
          {data?.floatingContent}
        </div>
      )}
      <FloatingLayer {...floatingLayerProps} />
    </div>
  );
};

export interface WedgeProps {
  index: number;
  color?: string;
  /**
   * The number of segments in the wedge.
   */
  layers?: number;
  /**
   * The data for each segment.
   */
  data?: WedgeData;
  center: Point;
  point: Point;
  nextPoint: Point;
  coreSize: number;
  floatingLayerContainer?: HTMLElement;
  parentRef: React.RefObject<HTMLElement>;
  polygonRotation: number;
}

export default Wedge;
