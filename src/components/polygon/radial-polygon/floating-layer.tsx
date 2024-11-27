import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Point } from "../utils";

export const FloatingLayer: React.FC<FloatingLayerProps> = ({
  floatingLayer,
  fill,
  polygonRef,
  center,
  rotation,
  angle,
}) => {
  const size = 4000;
  const [bounds, setBounds] = React.useState<DOMRect | null>(null);

  useEffect(() => {
    const element = polygonRef.current;
    function updateBounds() {
      if (element) {
        setBounds(element.getBoundingClientRect());
      }
    }
    updateBounds();

    if (element) {
      element.addEventListener("transitionend", updateBounds);
    }
    return () => {
      element?.removeEventListener("transitionend", updateBounds);
    };
  }, [polygonRef]);

  if (!floatingLayer || !fill || !bounds) return;

  const theta = (90 - angle) / 2;
  const b = size * Math.tan((theta * Math.PI) / 180);

  return ReactDOM.createPortal(
    <div
      style={{
        position: "absolute",
        top: bounds.top + center[1],
        left: bounds.left + center[0],
        width: size,
        height: size,
        backgroundColor: fill,
        transformOrigin: "0% 0%",
        clipPath: `polygon(0 0, ${b}px 100%, 100% ${b}px)`,
        transform: `rotate(${360 - theta + rotation}deg)`,
      }}
    />,
    floatingLayer,
  );
};

interface FloatingLayerProps {
  floatingLayer?: HTMLElement | null;
  fill?: string;
  polygonRef: React.RefObject<HTMLElement>;
  center: Point;
  rotation: number;
  angle: number;
}
