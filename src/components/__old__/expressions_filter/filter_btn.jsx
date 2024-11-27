"use client";

import { useEffect, useRef } from "react";

import useClipBuilder from "@/src/hooks/clip_path_calculations";
import useExpressionsFilter from "@/src/store/expressions_filter";

const FilterBtn = ({ id = 0, text = "", className = "", angle = 15 }) => {
  const elementRef = useRef();

  const { hexagonClip } = useClipBuilder();
  const expressionFilter = useExpressionsFilter();

  const handleClick = () => {
    expressionFilter.setActiveFilter(id, text);
  };

  useEffect(() => {
    hexagonClip(elementRef, angle);
  }, [hexagonClip, angle]);

  return (
    <button
      ref={elementRef}
      className={`${expressionFilter.activeFilter.id == id ? "bg-purple-mid text-yellow-dark" : "bg-white text-purple-dark"} w-full px-6 py-1.5 text-center text-sm font-bold lg:py-2 xl:px-9 xl:text-base ${className}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default FilterBtn;
