"use client";

import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

import useClipBuilder from "../../hooks/clip_path_calculations";

const OctagonCounter = ({
  contClassName = "",
  className = "",
  count = 0,
  onClick = () => {},
}) => {
  const octaElementRef = useRef(null);
  const octaElementContRef = useRef(null);

  const { octagonClip } = useClipBuilder();

  useEffect(() => {
    octagonClip(octaElementRef);
    octagonClip(octaElementContRef);
  }, []);

  return (
    <section
      onClick={onClick}
      ref={octaElementContRef}
      className={contClassName}
    >
      <p
        ref={octaElementRef}
        className={twMerge(
          `grid aspect-square place-items-center bg-[#4F81E5] font-bold text-white`,
          className,
        )}
      >
        {count}
      </p>
    </section>
  );
};

export default OctagonCounter;
