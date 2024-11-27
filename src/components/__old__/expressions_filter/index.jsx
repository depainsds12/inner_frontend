"use client";

import Image from "next/image";

import { useRef } from "react";

import LeftHandle from "@/public/assets/expressions_filter/left_handle.svg";
import RightHandle from "@/public/assets/expressions_filter/right_handle.svg";

import FilterBtn from "./filter_btn";

const expressions = [
  { id: 1, name: "peace" },
  { id: 2, name: "love" },
  { id: 3, name: "kindness" },
  { id: 4, name: "gratitude" },
  { id: 5, name: "hope" },
  { id: 6, name: "humility" },
];
const ExpressionFilter = ({ data = [] }) => {
  const sectionRef = useRef(null);

  const handleLeftClick = () => {
    if (!sectionRef) return 0;

    sectionRef.current.scrollBy({
      left: 100, // Scroll 100 pixels to the right
      behavior: "smooth",
    });
  };

  const handleRightClick = () => {
    if (!sectionRef) return 0;

    sectionRef.current.scrollBy({
      left: -100, // Scroll 100 pixels to the right
      behavior: "smooth",
    });
  };

  return (
    <div className="mb-6 mt-3 flex min-h-max w-full items-center justify-between gap-3 py-2">
      <section className="grid place-items-center">
        <button onClick={handleRightClick}>
          <Image src={LeftHandle} alt="left" className="w-[90%] lg:w-[100%]" />
        </button>
      </section>

      <section
        className="no-scrollbar flex w-full snap-x gap-6 overflow-auto md:gap-9"
        ref={sectionRef}
      >
        {(data.length ? data : expressions).map((z, i) => (
          <FilterBtn
            key={z.id}
            id={z.id}
            text={z.name}
            className="snap-center"
          />
        ))}
      </section>

      <section className="grid place-items-center">
        <button onClick={handleLeftClick}>
          <Image
            src={RightHandle}
            alt="right"
            className="w-[90%] lg:w-[100%]"
          />
        </button>
      </section>
    </div>
  );
};
export default ExpressionFilter;
