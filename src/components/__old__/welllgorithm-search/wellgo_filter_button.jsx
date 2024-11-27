"use client";

import { useEffect, useRef } from "react";

import useClipBuilder from "@/src/hooks/clip_path_calculations";
import useWellgorithmFilter from "@/src/store/wellgorithm_filters";

const WellgorithmFilterBtn = ({
  id = 0,
  text = "",
  className = "",
  angle = 15,
}) => {
  const elementRef = useRef();

  const { hexagonClip } = useClipBuilder();
  const expressionFilter = useWellgorithmFilter();

  const handleClick = () => {
    expressionFilter.setActiveFilter(id, text);
  };

  useEffect(() => {
    hexagonClip(elementRef, angle);
  }, []);

  return (
    <button
      ref={elementRef}
      className={`${expressionFilter.activeFilter.id == id ? "bg-orange-dark text-white" : "bg-transparent text-white"} w-full py-1.5 text-center text-[8px] font-bold md:text-sm lg:px-6 lg:py-2 xl:text-base ${className}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default WellgorithmFilterBtn;
