"use client";

import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

import useClipBuilder from "@/src/hooks/clip_path_calculations";

const ScrollContainer = ({
  heading = "",
  headChild = null,
  children = "",
  containerClassName = "",
  headClassName = "",
  bodyClassName = "",
  headAngle = 27,
  bodyAngle = 6,
  showBody = true,
  translateHead = false,
  override = false,
}) => {
  const containerRef = useRef();
  const headElementRef = useRef();
  const bodyElementRef = useRef();

  const { hexagonClip, rectClip } = useClipBuilder();

  useEffect(() => {
    if (innerWidth > 1280 || override) {
      const { leftEdge2 } = hexagonClip(headElementRef, headAngle * 2, 1);

      if (bodyElementRef.current) {
        rectClip(bodyElementRef, 0, bodyAngle, 1);
        bodyElementRef.current.style.width = `${100 - leftEdge2 * 2}%`;
      }
    }

    if (translateHead)
      containerRef.current.style.transform = `translateY(-${parseInt(getComputedStyle(headElementRef.current).height) / 2}px)`;
  }, [showBody, headAngle]);

  return (
    <div
      className={twMerge(
        `relative flex w-full flex-col items-center`,
        containerClassName,
      )}
      ref={containerRef}
    >
      <section
        ref={headElementRef}
        className={twMerge(
          `pseudo-clip-path before:bg-purple-inner-octagon relative grid h-full w-full place-items-center font-extrabold text-white before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:content-[""]`,
          headClassName,
        )}
      >
        {heading}
        {headChild}
      </section>
      {showBody ? (
        <div
          ref={bodyElementRef}
          className={twMerge(
            `pseudo-clip-path relative h-full p-9 before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:bg-white before:content-[""]`,
            bodyClassName,
          )}
        >
          {children}
        </div>
      ) : (
        <>{children}</>
      )}
    </div>
  );
};

export default ScrollContainer;
