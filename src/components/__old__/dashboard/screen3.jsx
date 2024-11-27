"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

import {
  default as CardImage,
  default as womanImage,
} from "@/public/assets/banner/banner.png";

import useClipBuilder from "@/src/hooks/clip_path_calculations";

import UserAvatar from "@/src/components/__old__/avatar";
import ScrollContainer from "@/src/components/__old__/container/scroll";
import LabelComponent from "@/src/components/__old__/label";

const CardHeading = () => {
  return (
    <div className="drop-shadow-light-purple absolute left-1/2 top-0 w-[350px] translate-x-[-50%] translate-y-[-50%] md:w-[513px]">
      <LabelComponent
        bracketClassName="!gap-1 md:!gap-2 md:w-[50%] w-[56%] text-[#A37EC6] fill-white font-[900]"
        shape="hexagon"
        angle={30}
        className="text-hm md:text-hl bg-purple-bg-dark relative z-10 px-12 py-2 md:gap-0 xl:py-4"
        text={["peace", "Petunia"]}
        textClasses="font-[900] text-[#A37EC6]"
      />
    </div>
  );
};
const Card = ({
  children = "",
  text = null,
  cardImage = null,
  upperAngle = 5,
  lowerAngle = 15,
  className = "",
  imageClassName = "",
}) => {
  const cardImageContRef = useRef(null);
  const cardImageRef = useRef(null);
  const { rectClip, rectClipBanner } = useClipBuilder();

  useEffect(() => {
    // shapeRef, upperAnglePercent=20, lowerAnglePercent = 20, pseudo = false
    if (innerWidth > 768) {
      rectClipBanner(cardImageContRef, upperAngle, lowerAngle);
      rectClipBanner(cardImageRef, upperAngle, lowerAngle);
    }
  }, []);

  return (
    <div
      className={twMerge(
        `relative flex h-[351px] flex-col items-center bg-transparent md:h-[509px]`,
        className,
      )}
    >
      <section
        className="h-full w-full bg-white py-[3px] lg:p-[3px] 2xl:w-[1432px]"
        ref={cardImageContRef}
      >
        <Image
          alt="banner"
          src={womanImage}
          ref={cardImageRef}
          className="h-full w-full object-cover"
        />
      </section>
      <ScrollContainer
        containerClassName="absolute top-full w-full lg:w-[921px]"
        headClassName="text-[20px] md:text-cm xl:text-[26px] h-[184px] md:h-[201px] text-white font-semibold text-center px-[10%] md:px-[15%] pt-[4%]"
        heading="The angels have come, revealing themselves in everyday acts of kindness."
        bodyClassName="md:h-[276px] h-[318px] p-5 md:p-9 lg:p-9"
        headChild={<CardHeading />}
        translateHead={true}
      >
        <p className="md:text-cs text-[18px] font-semibold md:px-3 lg:px-16">
          motions, like our bodies, are a part of nature, and that we can
          cultivate them like a garden. motions, like our bodies, are a part of
          nature, and that we can cultivate them like a garden. motions, like
          our bodies, are a part of nature, and that we can cultivate them like
          a garden.
        </p>
        <UserAvatar
          textClassName="bg-[#D5D1ED] text-[20px] text-purple-bg-dark font-[800] px-16 py-3.5"
          secClassName="bg-[#BDA3D6] p-[2px] ml-[-40px]"
          angle={14}
        />
      </ScrollContainer>
    </div>
  );
};

const Screen3 = () => {
  return (
    <>
      <div className="mt-6 grid h-full w-full grid-cols-1 place-items-center gap-x-[60px] py-6">
        <Card cardImage={CardImage} className="mb-[550px] w-full"></Card>
        <Card cardImage={CardImage} className="mb-[550px] w-full"></Card>
      </div>
    </>
  );
};

export default Screen3;
