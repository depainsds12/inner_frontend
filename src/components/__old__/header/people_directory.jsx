"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import BannerImage from "@/public/assets/banner/banner2.png";
import Avatar from "@/public/assets/header/header_avatar.svg";
import Eye from "@/public/assets/people_directory/eye.svg";
import EyeA from "@/public/assets/people_directory/eyeA.svg";
import Flower from "@/public/assets/people_directory/flower.svg";

import LandingScreen from "@/src/components/__old__/container/landing_screen";

import Octagon from "@/src/components/__old__/octagons/Octagon";
import useClipBuilder from "@/src/hooks/clip_path_calculations";

const Screen1 = () => {
  const [dimension, setDimensions] = useState({ radius: 0, gap: 0 });
  const [searchValue, setSearchValue] = useState("");
  const [eyeActive, setEyeActive] = useState(false);

  const hexContainerRef = useRef();
  const optionsContRef = useRef();
  const optionsRef = useRef();
  const searchContRef = useRef();
  const searchRef = useRef();

  const { rectClip, hexagonClip } = useClipBuilder();

  const handleSearchChange = (e) => {
    if (e.target.value.length == 0) {
      e.target.style.width = "13ch";
    } else if (e.target.value.length + 2 < 15) {
      e.target.style.width = e.target.value.length + 2 + "ch";
    }
    setSearchValue(e.target.value);
  };

  const handleEyeClick = (e) => {
    setEyeActive(!eyeActive);
  };

  useEffect(() => {
    if (innerWidth > 768) {
      hexagonClip(optionsContRef, 50);
      hexagonClip(optionsRef, 50 * 0.98);

      hexagonClip(hexContainerRef, 50, true);
    }

    if (innerWidth > 640) {
      hexagonClip(searchContRef, 30);
      hexagonClip(searchRef, 30 * 0.98);
    } else {
      hexagonClip(searchContRef, 20);
      hexagonClip(searchRef, 20 * 0.98);
    }
  }, []);

  useEffect(() => {
    if (innerWidth >= 1440) {
      setDimensions({ radius: 120, gap: 110 });
    } else if (innerWidth >= 768) {
      setDimensions({ radius: 95, gap: 100 });
    } else if (innerWidth >= 390) {
      setDimensions({ radius: 100, gap: 90 });
    }
  }, []);

  return (
    <LandingScreen
      image={BannerImage}
      className={`mb-0 h-[500px] gap-[301px] lg:flex lg:justify-center`}
    >
      <div className="z-10 hidden space-y-3 lg:block">
        <p className="font-bold">jack</p>
        <p className="font-bold">steve</p>
        <p className="font-bold">balt</p>
        <p className="font-bold">sally</p>
        <p className="font-bold">susan</p>
      </div>

      <Octagon
        radius={dimension.radius}
        gap={dimension.gap}
        level={[1, 2]}
        className={"octagon-text-size mb-28 md:mb-28 lg:mb-20"}
      />

      <div className="z-10 hidden lg:block lg:space-y-3">
        <p className="font-bold">jack</p>
        <p className="font-bold">steve</p>
        <p className="font-bold">balt</p>
        <p className="font-bold">sally</p>
        <p className="font-bold">susan</p>
      </div>

      <Image
        alt="eye"
        src={eyeActive ? EyeA : Eye}
        className={`${searchValue.length ? "hidden lg:block" : "hidden"} absolute left-[15%] top-full z-10 translate-x-[-50%] translate-y-[-50%]`}
        onClick={handleEyeClick}
      />

      <div className="absolute left-1/2 top-full z-10 h-[201px] w-full translate-x-[-50%] translate-y-[-50%] lg:w-[921px]">
        <div
          ref={hexContainerRef}
          className={`pseudo-clip-path grid h-full w-full place-items-center ${searchValue.length ? "before:bg-[#564A8D]" : "bg-transparent"}`}
        >
          {/* serarch box */}
          <div
            ref={searchContRef}
            className="absolute -top-[60px] left-1/2 z-10 h-[47px] w-[299px] translate-x-[-50%] translate-y-[-50%] bg-white p-[2px] sm:h-[80px] sm:w-[465px] lg:top-[-6px]"
          >
            <section
              ref={searchRef}
              className="grid h-full w-full place-items-center bg-[#AD5CA5]"
            >
              <input
                type="text"
                onChange={handleSearchChange}
                className="mx-auto w-[13ch] max-w-full bg-transparent text-[18px] font-semibold text-yellow-dark caret-yellow-dark outline-none placeholder:text-yellow-dark md:text-[32px] lg:text-[40px]"
                placeholder="| people search"
              />
            </section>
          </div>

          <div className="absolute top-[3%] z-10 flex w-[90%] flex-wrap items-center justify-center gap-x-9 gap-y-3 md:gap-x-12 lg:hidden lg:space-y-3">
            <p className="font-bold">jack</p>
            <p className="font-bold">steve</p>
            <p className="font-bold">balt</p>
            <p className="font-bold">sally</p>
            <p className="font-bold">susan</p>
          </div>

          <Image
            alt="eye"
            src={eyeActive ? EyeA : Eye}
            className={`${searchValue.length ? "block lg:hidden" : "hidden"} absolute left-[10%] top-full z-10 translate-x-[-50%] translate-y-[-50%]`}
            onClick={handleEyeClick}
          />

          {/* filters */}
          <div
            className={`absolute left-1/2 z-10 h-[83px] w-[350px] translate-x-[-50%] space-y-12 p-[2px] sm:h-[103px] md:w-[467px] lg:w-[650px] ${searchValue.length ? (eyeActive ? "top-[calc(100%+120px)] mt-12 translate-y-[0%]" : "top-full mt-20 translate-y-[0%] sm:mt-12") : "top-1/2 mt-6 translate-y-[-50%]"} `}
          >
            <section className="flex h-full w-full items-center justify-between">
              <section className="flex w-full flex-col items-center">
                <Image src={Avatar} alt="gardeners" className="mb-3 w-[88px]" />
                <span className="text-[18px] font-bold text-[#BBB7D1] lg:text-[24px]">
                  gardeners
                </span>
              </section>
              <section className="flex w-full flex-col items-center">
                <Image src={Avatar} alt="personas" className="mb-3 w-[88px]" />
                <span className="text-[18px] font-bold text-[#BBB7D1] lg:text-[24px]">
                  personas
                </span>
              </section>
              <section className="flex w-full flex-col items-center">
                <Image src={Avatar} alt="pests" className="mb-3 w-[88px]" />
                <span className="text-[18px] font-bold text-[#BBB7D1] lg:text-[24px]">
                  pests
                </span>
              </section>
            </section>
            <p className="text-center text-[18px] font-semibold text-white lg:text-[28px]">
              Personas are AI-inspired journals inspired by the great souls of
              history.
            </p>
          </div>

          <Image
            alt="flower"
            src={Flower}
            className={`${searchValue.length ? "block lg:hidden" : "hidden"} absolute left-[90%] top-full z-10 translate-x-[-50%] translate-y-[-50%]`}
          />

          <p
            className={`${searchValue.length ? "block" : "hidden"} mt-6 text-[20px] font-semibold md:text-[24px]`}
          >
            steve bio goes here
          </p>

          {/* some text */}
          <p
            className={`absolute z-10 w-full text-center text-[20px] font-semibold md:w-[545px] md:text-[24px] ${eyeActive ? "block" : "hidden"} left-1/2 top-full mt-12 translate-x-[-50%] translate-y-[0%]`}
          >
            the “Proust button” allows you to see the world through another’s
            eyes
          </p>
        </div>
      </div>

      <Image
        alt="flower"
        src={Flower}
        className={`${searchValue.length ? "hidden lg:block" : "hidden"} absolute left-[85%] top-full z-10 translate-x-[-50%] translate-y-[-50%]`}
      />
    </LandingScreen>
  );
};

const PeopleDirectory = ({ handleSearchClick = () => {} }) => {
  const inputRef = useRef();

  const { hexagonClip } = useClipBuilder();

  useEffect(() => {
    hexagonClip(inputRef, 12);
  }, [hexagonClip]);

  const [view, setView] = useState(1);

  return (
    <>
      <div className="absolute left-0 top-full z-50 h-fit min-h-screen w-full border-b-2 border-white bg-[#3F3676]">
        <Screen1 />
      </div>
    </>
  );
};

export default PeopleDirectory;
