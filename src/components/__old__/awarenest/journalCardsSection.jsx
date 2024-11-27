"use client";

import Image from "next/image";
import { createRef, useEffect, useRef, useState } from "react";

import {
  default as DownHandle,
  default as LeftHandle,
} from "@/public/assets/awarenest/left_handle_white.svg";
import PolygonIcon from "@/public/assets/awarenest/polygonIcon.svg";
import RightHandle from "@/public/assets/awarenest/right_handle_white.svg";
import HeaderAvatar from "@/public/assets/header/header_avatar.svg";
import TextInBrackets from "@/src/components/__old__/texts/text_in_brackets";
import useClipBuilder from "@/src/hooks/clip_path_calculations";
import Card from "./card";

const JournalCardsWithTagSection = ({ bgColor = "" }) => {
  const scrollElementRef = useRef(null);

  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const cardHeadingOuterRef = useRef(cards.map(() => createRef()));
  const cardHeadingInnerRef = useRef(cards.map(() => createRef()));
  const cardRef = useRef(null);

  const { hexagonClip } = useClipBuilder();

  useEffect(() => {
    cardHeadingOuterRef.current.forEach((ref) => {
      hexagonClip(ref, 11);
    });

    cardHeadingInnerRef.current.forEach((ref) => {
      hexagonClip(ref, 11);
    });
  });

  const handleLeftClick = () => {
    if (!scrollElementRef) return 0;

    scrollElementRef.current.scrollBy({
      left: innerWidth >= 768 ? 435 : cardRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  const handleRightClick = () => {
    if (!scrollElementRef) return 0;

    scrollElementRef.current.scrollBy({
      left: innerWidth >= 768 ? -435 : -cardRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  let points = 7;

  const avatarIcons = () => {
    return (
      <section className="flex w-full gap-3 px-9 pb-6">
        <Image src={HeaderAvatar} alt="avatar" className="w-[18%]" />
        <Image src={HeaderAvatar} alt="avatar" className="w-[18%]" />
        <Image src={HeaderAvatar} alt="avatar" className="w-[18%]" />
      </section>
    );
  };

  const [dropDownStatus, setDropDownStatus] = useState(false);

  const handleDropDownClick = () => {
    setDropDownStatus(!dropDownStatus);
  };

  return (
    <div
      className={`main-cards-container ${bgColor} grid transition-all duration-300 ease-in-out max-xl:place-items-start md:h-[94px] xl:!h-[650px] xl:place-items-center ${
        dropDownStatus ? "max-md:!h-[804px] md:!h-[635px]" : "max-md:!h-[100px]"
      }`}
    >
      {/* New cards carousel */}
      <div
        className={`mx-auto flex w-screen flex-col transition-all duration-300 ease-in-out md:h-[94px] md:w-[728px] xl:!h-[539px] xl:w-[1217px] ${
          dropDownStatus
            ? "max-xl:!h-[602px] max-md:!h-[803px]"
            : "max-md:!h-[100px]"
        }`}
      >
        <div
          className="section-heading-arrows flex justify-between gap-4 max-xl:cursor-pointer max-md:mx-auto max-md:!h-[100px] max-md:w-[360px] md:!h-[94px] xl:!h-[56px]"
          onClick={handleDropDownClick}
        >
          <div className="flex h-full items-center justify-center gap-2">
            <div className="points-icon relative flex !h-[48px] !w-[48px] items-center justify-center xl:hidden">
              <Image
                src={PolygonIcon}
                alt="polygonIcon"
                className="h-[48px] w-[48px] max-w-[48px]"
              />
              <h2 className="text-cm absolute font-bold text-[#564A8D]">
                {points ? points : 7}
              </h2>
            </div>

            <div className="grid place-items-center max-md:!h-[87px] max-md:w-[230px]">
              <h2 className="max-md:text-cm md:text-cl h-fit font-bold text-white">
                journals that spark{" "}
                <span className="text-cm md:text-cl font-bold text-yellow-light">
                  our
                </span>{" "}
                wonder
              </h2>
            </div>
          </div>

          <div className="flex items-center justify-center gap-5 max-xl:!w-[44px] xl:w-[170px]">
            <div className="relative flex h-fit items-center justify-center max-xl:hidden md:w-fit">
              <Image src={PolygonIcon} alt="polygonIcon" />
              <h2 className="text-cm absolute font-bold text-[#564A8D]">
                {points ? points : 7}
              </h2>
            </div>

            <button
              onClick={handleDropDownClick}
              className={`!h-[44px] md:!w-[22px] xl:hidden ${
                dropDownStatus ? "rotate-90 transform" : ""
              } transition-all ease-in-out`}
            >
              <Image src={DownHandle} alt="leftHandle" />
            </button>

            <button
              onClick={handleRightClick}
              className="!h-[44px] max-xl:hidden md:!w-[22px]"
            >
              <Image src={RightHandle} alt="RightHandle" />
            </button>
            <button
              onClick={handleLeftClick}
              className="!h-[44px] max-xl:hidden md:!w-[22px]"
            >
              <Image src={LeftHandle} alt="leftHandle" />
            </button>
          </div>
        </div>

        <section
          className={`no-scrollbar flex snap-x items-center !overflow-y-auto transition-all duration-300 ease-in-out max-xl:flex-1 max-md:overflow-x-hidden md:w-full md:gap-6 xl:h-full xl:items-end xl:gap-10 ${
            dropDownStatus
              ? "opacity-100"
              : "max-xl:max-h-0 max-xl:overflow-hidden max-xl:opacity-0"
          }`}
          ref={scrollElementRef}
        >
          {/* Cards */}

          {cards.map((card, index) => (
            <Card
              cardRef={cardRef}
              key={index}
              className={{
                main: "max-md:!h-[537px] max-md:min-w-full md:!h-[378px] md:!min-w-[352px] xl:!h-[435px] xl:!min-w-[379px]",
                text: "px-[5%] text-justify !text-[16px] !font-semibold !text-black",
                image: "max-md:!h-[261px] md:h-[170px] xl:h-[190px]",
                border: "bg-[#ffffff]",
              }}
              upperAngle={7}
              lowerAngle={7}
              innerChildren={avatarIcons}
              text="motions, like our bodies, are a part of nature, and that we can cultivate them like a garden. motions, like our bodies, are a part of nature, and that we can cultivate them like a garden."
            >
              <div className="drop-shadow-clip-outline-yellow absolute left-[50%] top-0 grid h-[40px] w-[350px] translate-x-[-50%] translate-y-[-50%] place-items-center md:!h-[40px] md:!w-[209px]">
                <div
                  className="flex !h-[40px] w-full items-center justify-center gap-1 bg-[#AE5CAA] text-[18px] font-extrabold text-white"
                  ref={cardHeadingInnerRef.current[index]}
                >
                  <TextInBrackets
                    text="peace"
                    className="w-[22%] fill-white text-[18px] font-extrabold text-yellow-light md:w-[36%]"
                  />
                  Petunia
                </div>
              </div>
            </Card>
          ))}
        </section>

        <div
          className={`flex h-[80px] justify-center gap-5 transition-all duration-300 ease-in-out max-md:items-start md:items-center xl:hidden ${
            dropDownStatus
              ? "max-h-[80px] opacity-100"
              : "hidden max-h-0 opacity-0"
          }`}
        >
          <button onClick={handleRightClick} className="">
            <Image
              src={RightHandle}
              alt="RightHandle"
              className="!h-[44px] md:!w-[22px]"
            />
          </button>
          <button onClick={handleLeftClick} className="">
            <Image
              src={LeftHandle}
              alt="leftHandle"
              className="!h-[44px] md:!w-[22px]"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default JournalCardsWithTagSection;
