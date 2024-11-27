"use client";
import useClipBuilder from "@/src/hooks/clip_path_calculations";
import { useEffect, useRef } from "react";

const WelgoCard = ({ text, tags }) => {
  const wellgoRef = useRef(null);
  const octaRefOuter = useRef(null);
  const octaRefInner = useRef(null);
  const textRef = useRef(null);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const textRef3 = useRef(null);
  const { arrowClip, octagonClip } = useClipBuilder();

  useEffect(() => {
    octaRefOuter.current.style.top = `${(wellgoRef.current.clientHeight - octaRefOuter.current.clientHeight) / 2}px`;
    octaRefOuter.current.style.right = `${-(octaRefOuter.current.clientWidth / 2)}px`;
    octaRefOuter.current.style.width = `${octaRefInner.current.clientWidth + 4}px`;
    octaRefOuter.current.style.height = `${octaRefInner.current.clientHeight + 4}px`;
    textRef.current.style.bottom = `${-(textRef.current.clientHeight / 2)}px`;

    arrowClip(wellgoRef, 50, "left");
    arrowClip(textRef1, 10, "left");
    arrowClip(textRef2, 10, "left");
    arrowClip(textRef3, 10, "left");
    octagonClip(octaRefOuter);
    octagonClip(octaRefInner);
  }, [arrowClip, octagonClip]);

  return (
    <section className="relative mb-10 h-fit min-h-[232px] w-fit">
      <p
        className="h-full w-[450px] bg-white py-20 pl-28 pr-20 font-extrabold text-purple-text"
        ref={wellgoRef}
      >
        {text}
      </p>
      <span
        className="absolute flex items-center justify-center bg-white"
        ref={octaRefOuter}
      >
        <span
          className="flex h-12 w-12 items-center justify-center bg-orange-dark text-white"
          ref={octaRefInner}
        >
          20
        </span>
      </span>
      <section
        className="absolute left-[50%] flex translate-x-[-50%] gap-0"
        ref={textRef}
      >
        <span
          ref={textRef1}
          className="-mx-1 bg-orange-mid px-5 py-2 text-xs font-bold text-white"
        >
          {tags ? tags.tag1 : "love"}
        </span>
        <span
          ref={textRef2}
          className="bg-purple-inner-octagon -mx-1 px-5 py-2 text-xs font-bold text-white"
        >
          {tags ? tags.tag2 : "peace"}
        </span>
        <span
          ref={textRef3}
          className="-mx-1 bg-orange-mid px-5 py-2 text-xs font-bold text-white"
        >
          {tags ? tags.tag3 : "kindness"}
        </span>
      </section>
    </section>
  );
};

export default WelgoCard;
