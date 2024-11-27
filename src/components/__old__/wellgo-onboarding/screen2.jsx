"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

//import CardImage from "@/public/assets/wellgorithm_card/wellgorithm_card_head.png";
import CardImage from "@/public/assets/cards/butterfly.png";
import LabelComponent from "@/src/components/__old__/label";

import LeftHandle from "@/public/assets/awarenest/left.svg";
import RightHandle from "@/public/assets/awarenest/right.svg";

import useClipBuilder from "@/src/hooks/clip_path_calculations";

import Avatar from "@/public/assets/avatar/avatar.svg";
import womanImage from "@/public/assets/banner/banner.png";

const Card = ({
  children = "",
  text = null,
  cardImage = null,
  upperAngle = 5,
  lowerAngle = 7,
  className = "",
  imageClassName = "",
}) => {
  const imageTextRef = useRef(null);
  const { rectClip } = useClipBuilder();

  useEffect(() => {
    // shapeRef, upperAnglePercent=20, lowerAnglePercent = 20, pseudo = false
    rectClip(imageTextRef, upperAngle, lowerAngle);
  }, []);

  return (
    <div className={`relative h-fit ${className}`}>
      <section className={`relative h-full bg-white`} ref={imageTextRef}>
        <Image
          src={cardImage ? cardImage : womanImage}
          alt="image"
          className={`aspect-[3/1] w-full object-cover ${imageClassName}`}
        />
        {text}
        <section className="flex w-full gap-3 px-9 pb-6">
          <section className="flex w-fit items-center justify-center gap-3">
            <Image src={Avatar} alt="avatar" className="z-[2]" />
            <span className="z-[1] flex h-fit items-center justify-center text-nowrap text-lg font-bold text-purple-mid">
              jackie milter
            </span>
          </section>
        </section>
      </section>
      {children}
    </div>
  );
};

const Text = ({ className = "", text = "" }) => {
  return (
    <>
      <p className={className}>
        {
          "motions, like our bodies, are a part of nature, and that we can cultivate them like a garden. motions, like our bodies, are a part of nature, and that we can cultivate them like a garden."
        }
      </p>
    </>
  );
};

const Screen2 = () => {
  const scrollElementRef = useRef(null);

  const handleLeftClick = () => {
    if (!scrollElementRef) return 0;

    scrollElementRef.current.scrollBy({
      left: 300, // Scroll 100 pixels to the right
      behavior: "smooth",
    });
  };

  const handleRightClick = () => {
    if (!scrollElementRef) return 0;

    scrollElementRef.current.scrollBy({
      left: -300, // Scroll 100 pixels to the right
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* New cards carousel */}
      <div className="flex max-md:gap-3 md:gap-10">
        <section className="grid place-items-center">
          <button onClick={handleRightClick}>
            <Image src={LeftHandle} alt="left" className="w-full" />
          </button>
        </section>

        <section
          className="no-scrollbar mt-6 flex h-full w-full snap-x gap-6 overflow-x-auto py-6 md:gap-9"
          ref={scrollElementRef}
        >
          {/* Cards */}

          <Card
            cardImage={CardImage}
            imageClassName="!h-[30%]"
            className="w-full max-w-[450px] shrink-0 snap-center"
            text={
              <Text className="h-[70%] p-6 font-semibold max-md:text-sm md:text-lg" />
            }
          >
            <LabelComponent
              bracketClassName="!w-[4rem] md:!w-[55%]"
              align={"top"}
              shape="hexagon"
              angle={15}
              className="absolute left-1/2 z-10 w-max translate-x-[-50%] !px-2 !py-0.5 !text-sm md:!text-lg"
              text={["aware", "Nest"]}
            />
          </Card>

          <Card
            cardImage={CardImage}
            imageClassName="!h-[30%]"
            className="w-full max-w-[450px] shrink-0 snap-center"
            text={
              <Text className="h-[70%] p-6 font-semibold max-md:text-sm md:text-lg" />
            }
          >
            <LabelComponent
              bracketClassName="!w-[4rem] md:!w-[55%]"
              align={"top"}
              shape="hexagon"
              angle={15}
              className="absolute left-1/2 z-10 w-max translate-x-[-50%] !px-2 !py-0.5 !text-sm md:!text-lg"
              text={["aware", "Nest"]}
            />
          </Card>

          <Card
            cardImage={CardImage}
            imageClassName="!h-[30%]"
            className="w-full max-w-[450px] shrink-0 snap-center"
            text={
              <Text className="h-[70%] p-6 font-semibold max-md:text-sm md:text-lg" />
            }
          >
            <LabelComponent
              bracketClassName="!w-[4rem] md:!w-[55%]"
              align={"top"}
              shape="hexagon"
              angle={15}
              className="absolute left-1/2 z-10 w-max translate-x-[-50%] !px-2 !py-0.5 !text-sm md:!text-lg"
              text={["aware", "Nest"]}
            />
          </Card>

          <Card
            cardImage={CardImage}
            imageClassName="!h-[30%]"
            className="w-full max-w-[450px] shrink-0 snap-center"
            text={
              <Text className="h-[70%] p-6 font-semibold max-md:text-sm md:text-lg" />
            }
          >
            <LabelComponent
              bracketClassName="!w-[4rem] md:!w-[55%]"
              align={"top"}
              shape="hexagon"
              angle={15}
              className="absolute left-1/2 z-10 w-max translate-x-[-50%] !px-2 !py-0.5 !text-sm md:!text-lg"
              text={["aware", "Nest"]}
            />
          </Card>

          <Card
            cardImage={CardImage}
            imageClassName="!h-[30%]"
            className="w-full max-w-[450px] shrink-0 snap-center"
            text={
              <Text className="h-[70%] p-6 font-semibold max-md:text-sm md:text-lg" />
            }
          >
            <LabelComponent
              bracketClassName="!w-[4rem] md:!w-[55%]"
              align={"top"}
              shape="hexagon"
              angle={15}
              className="absolute left-1/2 z-10 w-max translate-x-[-50%] !px-2 !py-0.5 !text-sm md:!text-lg"
              text={["aware", "Nest"]}
            />
          </Card>
        </section>

        <section className="grid place-items-center">
          <button onClick={handleLeftClick}>
            <Image src={RightHandle} alt="right" className="w-full" />
          </button>
        </section>
      </div>
    </>
  );
};

export default Screen2;
