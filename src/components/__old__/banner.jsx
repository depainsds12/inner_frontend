"use client";

import { useEffect, useRef } from "react";

import useClipBuilder from "@/src/hooks/clip_path_calculations";

const Banner = ({
  className = "",
  shape = "rect",
  angle = 0,
  innerangle = 0,
  imageurl = "",
  children = "",
}) => {
  const elementRef = useRef();

  const { hexagonClip, rectClip, arrowClip, squareClip, rectClipBanner } =
    useClipBuilder();

  useEffect(() => {
    switch (shape) {
      case "hexagon":
        hexagonClip(elementRef, angle, true);
        break;
      case "rect":
        rectClipBanner(elementRef, angle, innerangle, true);
        break;
      case "square":
        squareClip(elementRef, angle, angle, true);
        break;
      case "arrow":
        arrowClip(elementRef, angle, "left", true);
        break;
      default:
        hexagonClip(elementRef, angle, true);
        break;
    }
  }, []);

  // useEffect(() => {
  //   elementRef.current.style
  // }, []);

  return (
    <div
      ref={elementRef}
      className={`pseudo-clip-path relative before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:bg-[url(/assets/banner/banner.png)] before:bg-cover before:bg-top before:bg-no-repeat before:content-[""] ${className}`}
    >
      {children}
    </div>
  );
};
export default Banner;
