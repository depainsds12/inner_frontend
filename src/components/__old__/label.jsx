"use client";

import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

import TextInBrackets from "@/src/components/__old__/texts/text_in_brackets";

import useClipBuilder from "@/src/hooks/clip_path_calculations";

const LabelComponent = ({
  children = null,
  text = ["", "", ""],
  containerClassName = "",
  className = "",
  textClasses = "",
  bracketClassName = "",
  angle = 24,
  align = false,
  shape = "arrow",
  thin = { apply: false, color: "#AF5CAA", width: 3 },
}) => {
  const elementContRef = useRef();
  const elementRef = useRef();

  const { hexagonClip, arrowClip } = useClipBuilder();

  useEffect(() => {
    switch (shape) {
      case "hexagon":
        hexagonClip(elementContRef, angle);
        hexagonClip(elementRef, angle * 0.95);
        break;
      case "arrow":
        arrowClip(elementContRef, angle);
        arrowClip(elementRef, angle * 0.95);
        break;
      default:
        break;
    }
  }, []);
  //  text-lg md:text-xl lg:text-2xl xl:text-3xl
  return (
    <div className={containerClassName} ref={elementContRef}>
      <section
        ref={elementRef}
        className={twMerge(
          `flex items-center justify-center gap-1 bg-purple-mid px-6 py-3 text-center`,
          className,
        )}
      >
        {text[2] && text[2].length && (
          <span className={twMerge(`font-bold text-yellow-dark`, textClasses)}>
            {text[2]}
          </span>
        )}
        {text[0].length ? (
          <TextInBrackets
            text={text[0]}
            className={twMerge(
              `fill-yellow-dark font-bold text-white`,
              bracketClassName,
            )}
            thin={thin}
          />
        ) : (
          ""
        )}
        <span className={twMerge(`font-bold text-yellow-dark`, textClasses)}>
          {text[1]}
        </span>
        {children}
      </section>
    </div>
  );
};
export default LabelComponent;
