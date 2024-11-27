"use client";

import { useEffect, useRef } from "react";

import useClipBuilder from "@/src/hooks/clip_path_calculations";

import calculate from "@/src/libs/position_calculation";
import { twMerge } from "tailwind-merge";

const TextCard = ({
  children = "",
  angle = 6,
  innerangle = 15,
  className = "",
  align = { apply: false, value: 100 },
}) => {
  const elementRef = useRef();

  const { rectClipBanner } = useClipBuilder();

  useEffect(() => {
    if (innerWidth > 768) {
      const { leftEdge2 } = rectClipBanner(elementRef, angle, innerangle, true);

      if (align.apply) {
        elementRef.current.style.top = `${calculate(elementRef, leftEdge2, align.value)}%`;
      }
    }
  }, [angle]);

  return (
    <div
      ref={elementRef}
      className={twMerge(
        `pseudo-clip-path relative grid place-items-center before:absolute before:-z-10 before:h-full before:w-full before:bg-white before:content-[""]`,
        className,
      )}
    >
      {children}
    </div>
  );
};

export default TextCard;
