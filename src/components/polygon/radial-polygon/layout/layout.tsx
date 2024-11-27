import {
  useRadialPolygonLayout,
  UseRadialPolygonLayoutProps,
} from "@/src/components/polygon/radial-polygon/hooks/useRadialPolygonLayout";
import React from "react";
import { WedgeData } from "../../utils";
import { Chords } from "@/src/components/polygon/radial-polygon/layout/chords";
import { Radii } from "@/src/components/polygon/radial-polygon/layout/radii";

export const Layout: React.FC<LayoutProps> = ({
  width,
  height,
  points,
  center,
  coreSize = 0,
  backgroundColor,
  boundary,
  numLayers,
  data,
}) => {
  const { core, background, radii, chords } = useRadialPolygonLayout({
    points,
    coreSize,
    center,
    numLayers,
  });
  const border = (boundary?.outer?.strokeWidth || 0) / 2;

  return (
    <div className={"pointer-events-none absolute h-full w-full"} role="layout">
      <svg
        viewBox={`${-border} ${-border} ${width + border * 2} ${height + border * 2}`}
        style={{ width, height, zIndex: 1 }}
        className={"pointer-events-none absolute"}
      >
        <defs>
          <mask id="core-mask">
            <rect width="100%" height="100%" fill="white" />
            <path d={core} fill="black" fillRule="evenodd" />
          </mask>
        </defs>
        <path d={background} fill={backgroundColor} mask="url(#core-mask)" />
      </svg>
      <svg
        viewBox={`${-border} ${-border} ${width + border * 2} ${height + border * 2}`}
        style={{ width, height, zIndex: 4 }}
        className={"pointer-events-none absolute"}
      >
        <g>
          <Radii radii={radii} boundary={boundary?.radii} data={data} />
          <Chords chords={chords} boundary={boundary} data={data} />
        </g>
      </svg>
    </div>
  );
};

interface LayoutProps extends UseRadialPolygonLayoutProps {
  width: number;
  height: number;
  stroke?: string;
  strokeWidth?: number;
  backgroundColor?: string;
  coreStrokeWidth?: number;
  className?: string;
  data?: Array<WedgeData>;
}
