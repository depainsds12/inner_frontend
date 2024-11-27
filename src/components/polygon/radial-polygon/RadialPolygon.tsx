import {
  useRadialPolygon,
  UseRadialPolygonProps,
} from "@/src/components/polygon/radial-polygon/hooks/useRadialPolygon";
import { Layout } from "@/src/components/polygon/radial-polygon/layout/layout";
import React, { PropsWithChildren } from "react";
import Polygon from "../polygon";
import {
  BoundaryProps,
  createBoundary,
  RadialPolygonBoundary,
  WedgeData,
} from "../utils";
import Wedge from "./wedge";

type Props = {
  /**
   * Number of layers in the radial polygon.
   */
  numLayers?: number;
  /**
   * Configuration for the wedges and segments of the polygon
   */
  data?: Array<WedgeData>;
  /**
   * Classname for the wrapper
   */
  className?: string;

  /**
   * The background color of the radial polygon
   */
  backgroundColor?: string;

  /**
   * The text color
   */
  color?: string;

  /**
   * Configuration for the boundary of the polygon
   */
  boundary?: RadialPolygonBoundary | BoundaryProps;

  /**
   * The container to host the floating layer
   */
  floatingLayerContainer?: HTMLElement;
};

export type RadialPolygonProps = PropsWithChildren<
  Props & UseRadialPolygonProps
>;

const RadialPolygon: React.FC<RadialPolygonProps> = ({
  data,
  numLayers = 1,
  color = "black",
  backgroundColor = "white",
  boundary,
  children,
  rotation = 0,
  ...props
}) => {
  boundary = createBoundary(boundary || {}, true, "black", 2);

  const ref = React.useRef<HTMLDivElement>(null);

  const {
    points,
    center,
    polygonProps,
    coreSize,
    contentWidth,
    contentHeight,
    coreStrokeWidth,
    coreProps,
  } = useRadialPolygon({ ...props, boundary, rotation });

  return (
    <Polygon {...polygonProps} ref={ref}>
      {points.map(([x, y], index) => {
        return (
          <Wedge
            key={index}
            index={index}
            point={[x, y]}
            nextPoint={points[(index + 1) % points.length]}
            coreSize={coreSize}
            center={center}
            layers={numLayers}
            color={color}
            data={data?.[index]}
            parentRef={ref}
            polygonRotation={rotation}
          />
        );
      })}
      <Layout
        points={points}
        width={contentWidth}
        height={contentHeight}
        center={center}
        coreSize={coreSize}
        backgroundColor={backgroundColor}
        coreStrokeWidth={coreStrokeWidth}
        boundary={boundary}
        numLayers={numLayers}
        data={data}
      />
      {coreSize > 0 && <Polygon {...coreProps}>{children}</Polygon>}
    </Polygon>
  );
};

export default RadialPolygon;
