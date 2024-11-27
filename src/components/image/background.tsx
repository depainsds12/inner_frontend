"use client";

import {
  createPolygonClipPath,
  generateOctagonPoints,
} from "@/src/components/polygon/utils";
import useBreakpoints from "@/src/hooks/media_query";
import useWindowWidth from "@/src/hooks/use-window-width";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import Polygon from "../polygon/polygon";

type BackgroundProps = {
  image: {
    height: number;
    src: string;
    alt?: string;
  };
  extension?: {
    src: string;
    height?: number;
    zIndex?: number;
  };
  strokeWidth?: number;
  className?: string;
  gradient?: string;
  solidBg?: boolean;
};

type BackgroundImageProps = BackgroundProps & {
  windowWidth: number;
};

const BackGroundImage: React.FC<BackgroundImageProps> = ({
  image,
  strokeWidth = 4,
  windowWidth,
}) => {
  const { isLg, isXl } = useBreakpoints();
  const bgWidth = windowWidth + strokeWidth * 2;

  return (
    <div
      className="relative -mt-1"
      style={{
        marginLeft: -strokeWidth,
        marginRight: -strokeWidth,
      }}
    >
      <Polygon
        points={generateOctagonPoints({
          width: bgWidth,
          height: image.height,
          xCut: isLg ? 0 : isXl ? 40 : 60,
          type: "bottom",
        })}
        stroke="#FFFFFF"
        strokeWidth={strokeWidth}
        style={{ width: windowWidth + strokeWidth * 2, height: image.height }}
        className="absolute"
        fill="transparent"
      >
        <Image
          src={image.src}
          alt={image.alt || "hero"}
          fill
          className="object-cover object-center"
        />
      </Polygon>
    </div>
  );
};

/**
 * Background component that renders an image and an optional extension
 * especially used for custom vector shapes
 */
const Background: React.FC<BackgroundProps> = ({
  image,
  extension,
  strokeWidth = 4,
  className,
  gradient,
  solidBg = false,
}) => {
  const windowWidth = useWindowWidth();
  const { isSm, isLg, isXl } = useBreakpoints();
  return (
    <div className={twMerge("relative flex flex-col", className)}>
      {extension?.src && (
        <div
          className={twMerge(
            "absolute inset-0 top-[400px] bg-cover bg-center lg:top-[500px]",
            extension.height && "hidden sm:block",
          )}
          style={{
            backgroundImage: `url(${extension.src})`,
            height: extension.height ? `${extension.height}px` : "100vh",
            zIndex: extension.zIndex ? 10 : 0,
          }}
        />
      )}
      <BackGroundImage
        strokeWidth={strokeWidth}
        image={image}
        windowWidth={windowWidth}
      />
      {gradient && (
        <div
          className={twMerge(
            "absolute inset-0 top-[636px] z-10 sm:top-[572px] lg:top-[510px] xl:top-[520px]",
            isSm && solidBg ? "bg-[#241A34]" : gradient,
          )}
          style={{
            clipPath: createPolygonClipPath(
              generateOctagonPoints({
                width: windowWidth,
                height: image.height,
                xCut: isLg ? 0 : isXl ? 40 : 60,
                type: "top",
              }),
              windowWidth,
              image.height,
            ),
          }}
        />
      )}
    </div>
  );
};

export default Background;
