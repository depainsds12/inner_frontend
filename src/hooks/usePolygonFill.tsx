import React, { useMemo } from "react";
import { GradientFill, GradientStop } from "@/src/components/polygon/utils";

interface GradientDefinition {
  def: React.ReactNode | null;
  fillValue: string;
  id: string | null;
}

const Fill = ({ fill, id }: { fill: GradientFill; id: string }) => {
  if (fill.type === "linear") {
    const coords = getLinearCoords(fill.angle);
    return (
      <linearGradient id={id} {...coords}>
        <GradientStops stops={fill.stops} />
      </linearGradient>
    );
  }

  return (
    <radialGradient id={id} cx="50%" cy="50%" r="100%" {...fill}>
      <GradientStops stops={fill.stops} />
    </radialGradient>
  );
};

const getLinearCoords = (angle?: number) => {
  if (!angle) {
    return { x1: "0%", y1: "0%", x2: "0%", y2: "100%" };
  }

  const rad = ((angle - 90) * Math.PI) / 180;
  const x2 = 50 + 50 * Math.cos(rad);
  const y2 = 50 + 50 * Math.sin(rad);

  return { x1: "50%", y1: "50%", x2: `${x2}%`, y2: `${y2}%` };
};

const GradientStops = ({ stops }: { stops: Array<GradientStop> }) => {
  return stops.map((stop, i) => {
    const [color, offset] =
      typeof stop === "string" ? [stop] : [stop.color, stop.offset];
    const pos = offset || `${(i * 100) / stops.length}%`;
    return <stop key={i} offset={pos} stop-color={color} />;
  });
};

export const usePolygonFill = (
  fill: string | GradientFill,
): GradientDefinition => {
  const uniqueId = useMemo(
    () => Math.random().toString(36).substring(2, 9),
    [],
  );

  return useMemo(() => {
    if (typeof fill !== "string") {
      const gradientId = `gradient-${uniqueId}`;

      return {
        def: <Fill fill={fill} id={gradientId} />,
        fillValue: `url(#${gradientId})`,
        id: gradientId,
      };
    }

    return {
      def: null,
      fillValue: fill,
      id: null,
    };
  }, [fill, uniqueId]);
};
