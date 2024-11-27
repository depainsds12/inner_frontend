"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

import useClipBuilder from "@/src/hooks/clip_path_calculations";

const LandingScreen = ({
  children = "",
  className = "",
  imgContClassName = "",
  image = null,
  angle = 3,
  clip = "rectClip",
  outerAngle = 2,
  innerAngle = 12,
}) => {
  const imageRef = useRef();

  const { rectClip, rectClipBanner, authBannerClip } = useClipBuilder();

  useEffect(() => {
    switch (clip) {
      case "rectClipBanner":
        innerWidth > 1279 && rectClipBanner(imageRef, outerAngle, innerAngle);
        break;

      case "authBannerClip":
        innerWidth > 1279 && authBannerClip(imageRef, outerAngle, innerAngle);
        break;

      default:
        innerWidth > 768 && rectClip(imageRef, 0, angle);
        break;
    }
  }, []);

  return (
    <div
      className={twMerge(
        "relative z-0 mb-[calc(100vh-607px)] h-[607px] overflow-x-clip overflow-y-visible",
        className,
      )}
    >
      {/* grid place-items-center  drop-shadow-light-purple-b*/}
      <section
        className={twMerge("absolute -z-10 h-full w-full", imgContClassName)}
      >
        <Image
          fill
          ref={imageRef}
          alt="background image"
          src={image}
          className="h-full w-full object-cover"
        />
      </section>

      {children}
    </div>
  );
};

export default LandingScreen;
