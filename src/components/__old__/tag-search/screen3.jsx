"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

import {
  default as CardImage,
  default as womanImage,
} from "@/public/assets/banner/banner.png";

import useClipBuilder from "@/src/hooks/clip_path_calculations";

import UserIcon from "@/public/assets/avatar/avatar.svg";
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
  const smallProfileIconRef = useRef(null);
  const smallProfileIconOuterRef = useRef(null);
  const userIconNameRef = useRef(null);
  const userIconNameOuterRef = useRef(null);
  const { rectClip, rectClipBanner, hexagonClip, octagonClip } =
    useClipBuilder();

  useEffect(() => {
    // shapeRef, upperAnglePercent=20, lowerAnglePercent = 20, pseudo = false
    if (innerWidth > 768) {
      rectClipBanner(cardImageContRef, upperAngle, lowerAngle);
      hexagonClip(userIconNameRef, 10);
      hexagonClip(userIconNameOuterRef, 10);
      octagonClip(smallProfileIconOuterRef);
      octagonClip(smallProfileIconRef);
      rectClipBanner(cardImageRef, upperAngle, lowerAngle);
    }
  }, []);

  const username = "jackie miller";

  return (
    <div
      className={twMerge(
        `relative flex h-[351px] flex-col items-center bg-transparent md:h-[509px]`,
        className,
      )}
    >
      <section
        className="h-full w-full bg-white py-[3px] lg:p-[3px] xl:w-[1438px]"
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
        bodyAngle={5}
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
        <div className="absolute bottom-0 left-[50%] flex h-[107px] w-[297px] translate-x-[-50%] translate-y-[50%] items-center">
          <div
            className="relative z-[10] h-[99px] w-[99px] bg-[#D5D1ED] p-[3px] md:h-[107px] md:w-[107px]"
            ref={smallProfileIconOuterRef}
          >
            <Image
              ref={smallProfileIconRef}
              src={UserIcon}
              alt="card"
              className="h-full w-full object-cover"
            />
          </div>

          <div
            className="gird z-[0px] ml-[-24%] !h-[58px] !w-[260px] place-items-center bg-[#D5D1ED] p-[3px]"
            ref={userIconNameOuterRef}
          >
            <h3
              className="text-cs flex !h-full !w-[254px] items-center justify-end bg-[#3F3676] pr-[10%] font-extrabold text-[#D5D1ED]"
              ref={userIconNameRef}
            >
              {username ? username : "jackie miller"}
            </h3>
          </div>
        </div>
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
