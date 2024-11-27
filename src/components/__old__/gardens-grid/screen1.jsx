"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

import Avatar from "@/public/assets/avatar/avatar.svg";
import CardImage from "@/public/assets/cards/butterfly.png";

import RectangleCard from "@/src/components/__old__/cards/rectangle_card";
import LabelComponent from "@/src/components/__old__/label";
import OctagonCounter from "@/src/components/__old__/octagon_counter";

import useClipBuilder from "@/src/hooks/clip_path_calculations";

export const Info = () => {
  const userNameCardInnerRef = useRef(null);
  const hexElementRef = useRef(null);
  const octaElementRef = useRef(null);

  const { hexagonClip, octagonClip } = useClipBuilder();

  useEffect(() => {
    hexagonClip(userNameCardInnerRef, 8);
    hexagonClip(hexElementRef, 15);
    octagonClip(octaElementRef, 30);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="absolute top-full flex w-full translate-y-[-50%] items-center justify-between px-[10%]">
      <section className="flex w-fit items-center justify-center">
        <Image src={Avatar} alt="avatar" className="z-[2]" />
        <span className="drop-shadow-clip-outline-purple ml-[-12%]">
          <p
            className="text-purple-inner-octagon flex items-center justify-center text-nowrap bg-white py-1 pl-7 pr-4 text-sm font-bold"
            ref={userNameCardInnerRef}
          >
            jackie milter
          </p>
        </span>
      </section>
      <section className="flex h-full w-max items-center gap-0 md:gap-3">
        <p
          ref={hexElementRef}
          className="bg-orange-dark px-3 py-1 font-bold text-white md:px-6"
        >
          peace
        </p>
        <OctagonCounter className="w-full !p-3" count={20} />
      </section>
    </div>
  );
};

export default function Screen1() {
  return (
    <>
      <div className="3xl:grid-cols-5 mt-12 grid grid-cols-1 grid-rows-3 gap-x-12 gap-y-24 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        <RectangleCard
          lowerAngle={5}
          cardImage={CardImage}
          className={{
            main: "",
            image: "!h-[15vh]",
            text: `3xl:!text-2xl !m-0 !h-fit text-balance !py-0 px-12 !pb-20 !pt-6 !text-lg !text-black md:px-20 lg:px-10 xl:px-12`,
          }}
        >
          <LabelComponent
            bracketClassName="!w-[65%] md:!w-[68%] lg:!w-[68%] xl:!w-[72%]"
            align={"top"}
            shape="hexagon"
            angle={15}
            className="absolute left-1/2 z-10 w-max translate-x-[-50%] !px-2 !py-0.5 !text-sm md:!text-lg xl:!px-4 xl:!py-2 xl:!text-2xl"
            text={["compassion", "title"]}
          />

          <Info />
        </RectangleCard>

        <RectangleCard
          lowerAngle={5}
          cardImage={CardImage}
          className={{
            main: "",
            image: "!h-[15vh]",
            text: `3xl:!text-2xl !m-0 !h-fit text-balance !py-0 px-12 !pb-20 !pt-6 !text-lg !text-black md:px-20 lg:px-10 xl:px-12`,
          }}
        >
          <LabelComponent
            bracketClassName="!w-[65%] md:!w-[68%] lg:!w-[68%] xl:!w-[72%]"
            align={"top"}
            shape="hexagon"
            angle={15}
            className="absolute left-1/2 z-10 w-max translate-x-[-50%] !px-2 !py-0.5 !text-sm md:!text-lg xl:!px-4 xl:!py-2 xl:!text-2xl"
            text={["compassion", "title"]}
          />

          <Info />
        </RectangleCard>

        <RectangleCard
          lowerAngle={5}
          cardImage={CardImage}
          className={{
            main: "",
            image: "!h-[15vh]",
            text: `3xl:!text-2xl !m-0 !h-fit text-balance !py-0 px-12 !pb-20 !pt-6 !text-lg !text-black md:px-20 lg:px-10 xl:px-12`,
          }}
        >
          <LabelComponent
            bracketClassName="!w-[65%] md:!w-[68%] lg:!w-[68%] xl:!w-[72%]"
            align={"top"}
            shape="hexagon"
            angle={15}
            className="absolute left-1/2 z-10 w-max translate-x-[-50%] !px-2 !py-0.5 !text-sm md:!text-lg xl:!px-4 xl:!py-2 xl:!text-2xl"
            text={["compassion", "title"]}
          />

          <Info />
        </RectangleCard>

        <RectangleCard
          lowerAngle={5}
          cardImage={CardImage}
          className={{
            main: "",
            image: "!h-[15vh]",
            text: `3xl:!text-2xl !m-0 !h-fit text-balance !py-0 px-12 !pb-20 !pt-6 !text-lg !text-black md:px-20 lg:px-10 xl:px-12`,
          }}
        >
          <LabelComponent
            bracketClassName="!w-[65%] md:!w-[68%] lg:!w-[68%] xl:!w-[72%]"
            align={"top"}
            shape="hexagon"
            angle={15}
            className="absolute left-1/2 z-10 w-max translate-x-[-50%] !px-2 !py-0.5 !text-sm md:!text-lg xl:!px-4 xl:!py-2 xl:!text-2xl"
            text={["compassion", "title"]}
          />

          <Info />
        </RectangleCard>

        <RectangleCard
          lowerAngle={5}
          cardImage={CardImage}
          className={{
            main: "",
            image: "!h-[15vh]",
            text: `3xl:!text-2xl !m-0 !h-fit text-balance !py-0 px-12 !pb-20 !pt-6 !text-lg !text-black md:px-20 lg:px-10 xl:px-12`,
          }}
        >
          <LabelComponent
            bracketClassName="!w-[65%] md:!w-[68%] lg:!w-[68%] xl:!w-[72%]"
            align={"top"}
            shape="hexagon"
            angle={15}
            className="absolute left-1/2 z-10 w-max translate-x-[-50%] !px-2 !py-0.5 !text-sm md:!text-lg xl:!px-4 xl:!py-2 xl:!text-2xl"
            text={["compassion", "title"]}
          />

          <Info />
        </RectangleCard>

        <RectangleCard
          lowerAngle={5}
          cardImage={CardImage}
          className={{
            main: "",
            image: "!h-[15vh]",
            text: `3xl:!text-2xl !m-0 !h-fit text-balance !py-0 px-12 !pb-20 !pt-6 !text-lg !text-black md:px-20 lg:px-10 xl:px-12`,
          }}
        >
          <LabelComponent
            bracketClassName="!w-[65%] md:!w-[68%] lg:!w-[68%] xl:!w-[72%]"
            align={"top"}
            shape="hexagon"
            angle={15}
            className="absolute left-1/2 z-10 w-max translate-x-[-50%] !px-2 !py-0.5 !text-sm md:!text-lg xl:!px-4 xl:!py-2 xl:!text-2xl"
            text={["compassion", "title"]}
          />

          <Info />
        </RectangleCard>
      </div>
    </>
  );
}
