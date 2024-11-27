"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

import {
  default as CardImage,
  default as womanImage,
} from "@/public/assets/banner/banner.png";
import LeftHandle from "@/public/assets/brackets/left-bracket-y.svg";
import RightHandle from "@/public/assets/brackets/right-bracket-y.svg";
import WellgorithmLabel from "@/public/assets/search_page/wellgorithm-active2.png";

import useClipBuilder from "@/src/hooks/clip_path_calculations";

import LabelComponent from "@/src/components/__old__/label";

const Card = ({
  children = "",
  text = null,
  cardImage = null,
  upperAngle = 9,
  lowerAngle = 9,
  className = "",
  imageClassName = "",
}) => {
  const imageTextRef = useRef(null);
  const avatarTextRef = useRef(null);
  const { squareClip, arrowClip } = useClipBuilder();

  useEffect(() => {
    // shapeRef, upperAnglePercent=20, lowerAnglePercent = 20, pseudo = false
    squareClip(imageTextRef, upperAngle, lowerAngle);
    arrowClip(avatarTextRef, 9);
  }, []);

  return (
    <div
      className={twMerge(
        `relative grid h-full place-items-center bg-transparent`,
        className,
      )}
    >
      <div className="drop-shadow-clip-outline-white aspect-[2/1.6] h-full max-h-[660px] bg-transparent">
        <section
          className={`aspect-[2/1.6] h-full bg-purple-text-light`}
          ref={imageTextRef}
        >
          <Image
            src={cardImage ? cardImage : womanImage}
            alt="image"
            className={`h-1/2 w-full object-cover ${imageClassName}`}
          />
          <p className="mt-6 line-clamp-3 px-12 text-base font-semibold text-yellow-dark lg:text-lg xl:text-xl">
            {text}
          </p>
        </section>
      </div>
      <Image
        src={WellgorithmLabel}
        alt="wellgorithm active label"
        className="absolute left-1/2 top-full w-[150px] translate-x-[-50%] translate-y-[-50%] md:w-[160px] lg:w-[170px] xl:w-[180px]"
      />
      {children}
    </div>
  );
};

const Screen3 = () => {
  const scrollElementRef1 = useRef(null);
  const scrollElementRef2 = useRef(null);
  const scrollElements = [scrollElementRef1, scrollElementRef2];

  const handleLeftClick = () => {
    if (!scrollElementRef1 || !scrollElementRef2) return 0;

    scrollElements.forEach((z) =>
      z.current.scrollBy({
        left: 300, // Scroll 100 pixels to the right
        behavior: "smooth",
      }),
    );
  };

  const handleRightClick = () => {
    if (!scrollElementRef1 || !scrollElementRef2) return 0;

    scrollElements.forEach((z) =>
      z.current.scrollBy({
        left: -300, // Scroll 100 pixels to the right
        behavior: "smooth",
      }),
    );
  };

  return (
    <>
      <div className="responsive-container flex w-full items-center justify-end gap-9">
        <button onClick={handleRightClick}>
          <Image
            src={LeftHandle}
            alt="left"
            className="w-full fill-yellow-dark"
          />
        </button>
        <button onClick={handleLeftClick}>
          <Image src={RightHandle} alt="right" className="w-full" />
        </button>
      </div>

      <div
        ref={scrollElementRef1}
        className="no-scrollbar responsive-container mt-6 flex h-full w-full snap-x flex-nowrap items-center gap-x-[60px] gap-y-[120px] overflow-x-auto overflow-y-hidden py-9"
      >
        <Card
          cardImage={CardImage}
          className="w-full min-w-[410px] snap-center"
          text={
            "motions, like our bodies, are a part of nature, and that we can cultivate them like a garden. motions, like our bodies, are a part of nature, and that we can cultivate them like a garden."
          }
        >
          <div className="drop-shadow-clip-outline-white absolute left-1/2 top-0 w-max translate-x-[-50%] translate-y-[-50%]">
            <LabelComponent
              bracketClassName="w-[49%] md:w-[50%] text-yellow-dark fill-white"
              shape="hexagon"
              angle={15}
              className="relative z-10 bg-purple-text-light py-0 text-base md:text-base lg:text-lg xl:text-xl"
              text={["peace", "Ptunia"]}
              textClasses="text-white"
            />
          </div>
        </Card>

        <Card
          cardImage={CardImage}
          className="w-full min-w-[410px] snap-center"
          text={
            "motions, like our bodies, are a part of nature, and that we can cultivate them like a garden. motions, like our bodies, are a part of nature, and that we can cultivate them like a garden."
          }
        >
          <div className="drop-shadow-clip-outline-white absolute left-1/2 top-0 w-max translate-x-[-50%] translate-y-[-50%]">
            <LabelComponent
              bracketClassName="w-[49%] md:w-[50%] text-yellow-dark fill-white"
              shape="hexagon"
              angle={15}
              className="relative z-10 bg-purple-text-light py-0 text-base md:text-base lg:text-lg xl:text-xl"
              text={["peace", "Ptunia"]}
              textClasses="text-white"
            />
          </div>
        </Card>

        <Card
          cardImage={CardImage}
          className="w-full min-w-[410px] snap-center"
          text={
            "motions, like our bodies, are a part of nature, and that we can cultivate them like a garden. motions, like our bodies, are a part of nature, and that we can cultivate them like a garden."
          }
        >
          <div className="drop-shadow-clip-outline-white absolute left-1/2 top-0 w-max translate-x-[-50%] translate-y-[-50%]">
            <LabelComponent
              bracketClassName="w-[49%] md:w-[50%] text-yellow-dark fill-white"
              shape="hexagon"
              angle={15}
              className="relative z-10 bg-purple-text-light py-0 text-base md:text-base lg:text-lg xl:text-xl"
              text={["peace", "Ptunia"]}
              textClasses="text-white"
            />
          </div>
        </Card>

        <Card
          cardImage={CardImage}
          className="w-full min-w-[410px] snap-center"
          text={
            "motions, like our bodies, are a part of nature, and that we can cultivate them like a garden. motions, like our bodies, are a part of nature, and that we can cultivate them like a garden."
          }
        >
          <div className="drop-shadow-clip-outline-white absolute left-1/2 top-0 w-max translate-x-[-50%] translate-y-[-50%]">
            <LabelComponent
              bracketClassName="w-[49%] md:w-[50%] text-yellow-dark fill-white"
              shape="hexagon"
              angle={15}
              className="relative z-10 bg-purple-text-light py-0 text-base md:text-base lg:text-lg xl:text-xl"
              text={["peace", "Ptunia"]}
              textClasses="text-white"
            />
          </div>
        </Card>

        <Card
          cardImage={CardImage}
          className="w-full min-w-[410px] snap-center"
          text={
            "motions, like our bodies, are a part of nature, and that we can cultivate them like a garden. motions, like our bodies, are a part of nature, and that we can cultivate them like a garden."
          }
        >
          <div className="drop-shadow-clip-outline-white absolute left-1/2 top-0 w-max translate-x-[-50%] translate-y-[-50%]">
            <LabelComponent
              bracketClassName="w-[49%] md:w-[50%] text-yellow-dark fill-white"
              shape="hexagon"
              angle={15}
              className="relative z-10 bg-purple-text-light py-0 text-base md:text-base lg:text-lg xl:text-xl"
              text={["peace", "Ptunia"]}
              textClasses="text-white"
            />
          </div>
        </Card>
      </div>

      <div
        ref={scrollElementRef2}
        className="no-scrollbar responsive-container mt-6 flex h-full w-full snap-x flex-nowrap items-center gap-x-[60px] gap-y-[120px] overflow-x-auto overflow-y-hidden py-9"
      >
        <Card
          cardImage={CardImage}
          className="w-full min-w-[410px] snap-center"
          text={
            "motions, like our bodies, are a part of nature, and that we can cultivate them like a garden. motions, like our bodies, are a part of nature, and that we can cultivate them like a garden."
          }
        >
          <div className="drop-shadow-clip-outline-white absolute left-1/2 top-0 w-max translate-x-[-50%] translate-y-[-50%]">
            <LabelComponent
              bracketClassName="w-[49%] md:w-[50%] text-yellow-dark fill-white"
              shape="hexagon"
              angle={15}
              className="relative z-10 bg-purple-text-light py-0 text-base md:text-base lg:text-lg xl:text-xl"
              text={["peace", "Ptunia"]}
              textClasses="text-white"
            />
          </div>
        </Card>

        <Card
          cardImage={CardImage}
          className="w-full min-w-[410px] snap-center"
          text={
            "motions, like our bodies, are a part of nature, and that we can cultivate them like a garden. motions, like our bodies, are a part of nature, and that we can cultivate them like a garden."
          }
        >
          <div className="drop-shadow-clip-outline-white absolute left-1/2 top-0 w-max translate-x-[-50%] translate-y-[-50%]">
            <LabelComponent
              bracketClassName="w-[49%] md:w-[50%] text-yellow-dark fill-white"
              shape="hexagon"
              angle={15}
              className="relative z-10 bg-purple-text-light py-0 text-base md:text-base lg:text-lg xl:text-xl"
              text={["peace", "Ptunia"]}
              textClasses="text-white"
            />
          </div>
        </Card>

        <Card
          cardImage={CardImage}
          className="w-full min-w-[410px] snap-center"
          text={
            "motions, like our bodies, are a part of nature, and that we can cultivate them like a garden. motions, like our bodies, are a part of nature, and that we can cultivate them like a garden."
          }
        >
          <div className="drop-shadow-clip-outline-white absolute left-1/2 top-0 w-max translate-x-[-50%] translate-y-[-50%]">
            <LabelComponent
              bracketClassName="w-[49%] md:w-[50%] text-yellow-dark fill-white"
              shape="hexagon"
              angle={15}
              className="relative z-10 bg-purple-text-light py-0 text-base md:text-base lg:text-lg xl:text-xl"
              text={["peace", "Ptunia"]}
              textClasses="text-white"
            />
          </div>
        </Card>

        <Card
          cardImage={CardImage}
          className="w-full min-w-[410px] snap-center"
          text={
            "motions, like our bodies, are a part of nature, and that we can cultivate them like a garden. motions, like our bodies, are a part of nature, and that we can cultivate them like a garden."
          }
        >
          <div className="drop-shadow-clip-outline-white absolute left-1/2 top-0 w-max translate-x-[-50%] translate-y-[-50%]">
            <LabelComponent
              bracketClassName="w-[49%] md:w-[50%] text-yellow-dark fill-white"
              shape="hexagon"
              angle={15}
              className="relative z-10 bg-purple-text-light py-0 text-base md:text-base lg:text-lg xl:text-xl"
              text={["peace", "Ptunia"]}
              textClasses="text-white"
            />
          </div>
        </Card>

        <Card
          cardImage={CardImage}
          className="w-full min-w-[410px] snap-center"
          text={
            "motions, like our bodies, are a part of nature, and that we can cultivate them like a garden. motions, like our bodies, are a part of nature, and that we can cultivate them like a garden."
          }
        >
          <div className="drop-shadow-clip-outline-white absolute left-1/2 top-0 w-max translate-x-[-50%] translate-y-[-50%]">
            <LabelComponent
              bracketClassName="w-[49%] md:w-[50%] text-yellow-dark fill-white"
              shape="hexagon"
              angle={15}
              className="relative z-10 bg-purple-text-light py-0 text-base md:text-base lg:text-lg xl:text-xl"
              text={["peace", "Ptunia"]}
              textClasses="text-white"
            />
          </div>
        </Card>
      </div>
    </>
  );
};

export default Screen3;
