"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import Flower from "@/public/assets/icons/wellgo_sphere_flower.svg";
import FlowerActive from "@/public/assets/icons/wellgo_sphere_flower_active.svg";
import Toggle from "@/public/assets/profile/toggle.svg";
import Compare from "@/public/assets/wellgorithm_spheres/compare.svg";
import Explore from "@/public/assets/wellgorithm_spheres/explore.svg";
import Personalize from "@/public/assets/wellgorithm_spheres/personalize.svg";

import useClipBuilder from "@/src/hooks/clip_path_calculations";

import ScrollContainer from "@/src/components/__old__/container/scroll";
import LabelComponent from "@/src/components/__old__/label";
import OctagonCounter from "@/src/components/__old__/octagon_counter";

const HeadingLabel = ({ view = 1 }) => {
  return (
    <LabelComponent
      bracketClassName={`w-[40%] !gap-1 text-[#A37EC6] fill-white font-extrabold ${view == 1 ? "md:w-[35%]" : "md:w-[37%]"}`}
      angle={21}
      className={`z-20 h-[68px] w-[350px] gap-2 bg-[#3F3676] p-0 px-12 text-[32px] text-[#A37EC6] ${view == 1 ? "md:h-[96px] md:w-[509px] md:gap-3 md:text-[40px]" : "md:h-[67px] md:w-[356px] md:text-[28px]"}`}
      text={["peace", "Petunia"]}
      shape="hexagon"
      textClasses="font-extrabold text-[#A37EC6]"
      containerClassName="absolute top-0 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-[#BDA3D6] p-[2px]"
    />
  );
};

const Card = ({ className = "", view = 1 }) => {
  const [flowerActive, setFlowerActive] = useState(false);
  const [counterActive, setCounterActive] = useState(false);

  const handleFlowerClick = () => {
    setFlowerActive(!flowerActive);
  };

  const handleCounterClick = () => {
    setCounterActive(!counterActive);
  };

  return (
    <ScrollContainer
      bodyAngle={3}
      headChild={<HeadingLabel view={view} />}
      headClassName={`py-1 px-32 before:bg-[url(/assets/banner/banner.png)] before:bg-center
        ${view == 1 ? "h-[232px]" : "h-[163px]"} w-full`}
      containerClassName={`z-20 w-full ${view == 1 ? "lg:w-[920px]" : "lg:w-[643px]"} ${className}
       ${counterActive || flowerActive ? "mb:mb-40 mb-80" : ""} `}
      bodyClassName={`p-0 ${view == 1 ? "h-[445px]" : "h-[312px]"} w-full
       before:bg-[url(/assets/wellgorithm_spheres/scroll_card_foot.png)] before:bg-bottom`}
    >
      <section
        className={`grid h-[240px] w-full place-items-center bg-white px-6 text-center md:px-16 ${view == 1 ? "md:h-[278px]" : "md:h-[195px]"} `}
      >
        <p
          className={`text-[32px] ${view == 1 ? "md:text-hl" : "md:text-[29px]"} font-extrabold leading-snug text-[#8858B5]`}
        >
          Welcome the crackling anxieties, knowing they&apos;ll soon wither in
          the wind.
        </p>
      </section>

      <div className="relative mx-auto flex min-h-[35%] w-[330px] items-center justify-between text-[14px] text-white">
        <section className="flex flex-col items-center">
          <Image alt="explore" src={Explore} />
          <span>explore</span>
        </section>
        <section className="flex flex-col items-center">
          <Image alt="compare" src={Compare} />
          <span>compare</span>
        </section>
        <section className="flex flex-col items-center">
          <Image alt="personalize" src={Personalize} />
          <span>personalize</span>
        </section>
      </div>
      {!counterActive && !flowerActive ? (
        <></>
      ) : (
        <div className="relative h-full w-full">
          <div className="absolute top-0 grid min-h-[35%] w-full translate-y-[50%] grid-cols-2 items-center justify-around px-12 text-white md:translate-y-[25%] md:grid-cols-4">
            <section className="flex flex-col items-center gap-3">
              <section className="drop-shadow-clip-outline-yellow">
                {counterActive ? (
                  <OctagonCounter
                    count={30}
                    className={`bg-[#FAA81A] p-[9px] font-extrabold text-white`}
                  />
                ) : (
                  <Image
                    alt="compare"
                    src={FlowerActive}
                    className="mx-auto w-[60%]"
                  />
                )}
              </section>
              <section className="flex flex-col items-center">
                <span className="text-xl font-bold text-yellow-dark">
                  Cultivate
                </span>
                <span className="">your mind</span>
              </section>
            </section>

            <section className="flex flex-col items-center gap-3">
              <section className="drop-shadow-clip-outline-yellow">
                {counterActive ? (
                  <OctagonCounter
                    count={30}
                    className={`bg-[#FAA81A] p-[9px] font-extrabold text-white`}
                  />
                ) : (
                  <Image
                    alt="compare"
                    src={FlowerActive}
                    className="mx-auto w-[60%]"
                  />
                )}
              </section>
              <section className="flex flex-col items-center">
                <span className="text-xl font-bold text-yellow-dark">
                  Cultivate
                </span>
                <span className="">your mind</span>
              </section>
            </section>

            <section className="flex flex-col items-center gap-3">
              <section className="drop-shadow-clip-outline-yellow">
                {counterActive ? (
                  <OctagonCounter
                    count={30}
                    className={`bg-[#FAA81A] p-[9px] font-extrabold text-white`}
                  />
                ) : (
                  <Image
                    alt="compare"
                    src={FlowerActive}
                    className="mx-auto w-[60%]"
                  />
                )}
              </section>
              <section className="flex flex-col items-center">
                <span className="text-xl font-bold text-yellow-dark">
                  Cultivate
                </span>
                <span className="">your mind</span>
              </section>
            </section>

            <section className="flex flex-col items-center gap-3">
              <section className="drop-shadow-clip-outline-yellow">
                {counterActive ? (
                  <OctagonCounter
                    count={30}
                    className={`bg-[#FAA81A] p-[9px] font-extrabold text-white`}
                  />
                ) : (
                  <Image
                    alt="compare"
                    src={FlowerActive}
                    className="mx-auto w-[60%]"
                  />
                )}
              </section>
              <section className="flex flex-col items-center">
                <span className="text-xl font-bold text-yellow-dark">
                  Cultivate
                </span>
                <span className="">your mind</span>
              </section>
            </section>
          </div>
        </div>
      )}
      <div className="absolute left-1/2 top-full flex w-[300px] translate-x-[-50%] translate-y-[-50%] items-center justify-between md:w-[342px]">
        <section
          className={`flex cursor-pointer flex-col items-center ${view == 1 ? "w-[71px]" : "w-[50px]"}`}
        >
          {flowerActive ? (
            <Image
              alt="compare"
              src={FlowerActive}
              onClick={handleFlowerClick}
            />
          ) : (
            <Image alt="compare" src={Flower} onClick={handleFlowerClick} />
          )}
        </section>
        {counterActive || flowerActive ? (
          <span className="translate-y-[-50%] text-[18px] font-bold text-[#D5D1ED] md:text-[25px]">
            diversity
          </span>
        ) : (
          <></>
        )}
        <section
          onClick={handleCounterClick}
          className={`${view == 1 ? "text-[26px]" : "text-[19px]"} ${view == 1 ? "w-[71px]" : "w-[50px]"} cursor-pointer ${counterActive ? "drop-shadow-clip-outline-yellow" : "drop-shadow-clip-outline-smoke"}`}
        >
          <OctagonCounter
            count={30}
            className={`${counterActive ? "bg-[#FAA81A] text-white" : "bg-[#564A8D] text-[#DFDCF1]"} font-extrabold`}
          />
        </section>
      </div>
    </ScrollContainer>
  );
};

const Options = ({
  className = "",
  id = 0,
  text = "",
  active = {},
  handleClick = () => {},
}) => {
  const eleRef = useRef(null);

  const { hexagonClip } = useClipBuilder();
  useEffect(() => {
    active.id == id && hexagonClip(eleRef, 12);
  }, [active]);

  return (
    <span
      ref={eleRef}
      className={`p-1 px-6 font-semibold ${active.id == id ? "bg-[#8858B5] text-yellow-light" : ""}`}
      onClick={() => {
        handleClick(id);
      }}
    >
      {text}
    </span>
  );
};

const Screen3 = () => {
  const [active, setActive] = useState({ id: 1 });

  const handleClick = (id) => {
    setActive({ id });
  };
  let data = [1, 2, 3];
  return (
    <>
      <div className={`flex w-full flex-col items-center gap-6`}>
        <section className="flex w-full flex-wrap items-center justify-center gap-y-6 px-3 text-center text-[24px] text-[#8858B5] md:justify-between lg:w-[606px] lg:p-0">
          <Options
            id={1}
            text="journals"
            handleClick={handleClick}
            active={active}
          />
          <Options
            id={2}
            text="wellgorithms"
            handleClick={handleClick}
            active={active}
          />
          <Options
            id={3}
            text="paths"
            handleClick={handleClick}
            active={active}
          />
          <Options id={4} text="XR" handleClick={handleClick} active={active} />
        </section>
        <Image src={Toggle} alt="toggle" />
      </div>
    </>
  );
};

export default Screen3;
