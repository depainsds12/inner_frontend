"use client";
import WellgoLogo from "@/public/assets/header/header_wellgorithm_active.svg";
import HexagonWithDots from "@/public/assets/icons/hexagon_with_dots.svg";
import SearchIcon from "@/public/assets/icons/search-purple.svg";
import Banner from "@/src/components/__old__/banner";
import WellgorithmCard from "@/src/components/__old__/cards/wellgorithm_card";
import ExpressionFilter from "@/src/components/__old__/expressions_filter";
import LabelComponent from "@/src/components/__old__/label";
import useClipBuilder from "@/src/hooks/clip_path_calculations";
import calculate from "@/src/libs/align_calculation";
import useWellgorithmFilter from "@/src/store/wellgorithm_filters";
import Image from "next/image";
import { useEffect, useRef } from "react";
import "./style.css";
import WellgorithmFilterBtn from "./wellgo_filter_button";

const Screen = () => {
  const WellgoLogoRef = useRef(null);
  const filterHeadingRef = useRef(null);
  const filtersRef = useRef(null);
  const inputRef = useRef(null);
  const searchRef = useRef(null);
  let border = ["w-[99.7%],w-[100%]"];

  const { hexagonClip, halfHexagonClip } = useClipBuilder();

  const expressionFilter = useWellgorithmFilter();

  useEffect(() => {
    calculate(WellgoLogoRef, "top");
    hexagonClip(filterHeadingRef, 14);
    halfHexagonClip(filtersRef, 50);
    hexagonClip(inputRef, 12);
  }, []);

  const wellgoFilters = [
    { id: 1, name: "nest" },
    { id: 2, name: "tea" },
    { id: 3, name: "mint" },
    { id: 4, name: "RX" },
    { id: 5, name: "911" },
    { id: 6, name: "police" },
    { id: 7, name: "flower" },
    { id: 8, name: "landscape" },
  ];

  return (
    <>
      <ExpressionFilter />
      <Banner
        className="mt-10 aspect-[2.3/1] w-full before:bg-[url(/assets/wellgorithm_page/banner.png)] md:aspect-[4.5/1] lg:mt-20"
        shape="hexagon"
        angle={50}
      >
        {/* Top wellgorithm logo */}
        <Image
          src={WellgoLogo}
          alt="WellgoLogo"
          className="absolute left-1/2 w-[50%] translate-x-[-50%] lg:w-[30%]"
          ref={WellgoLogoRef}
        />
        {/* Top wellgorithm logo */}

        {/* Middle section of banner */}
        <section className="absolute left-1/2 top-[33%] grid h-fit w-full translate-x-[-50%] place-items-center gap-1 text-white lg:top-[33%] lg:gap-3">
          <div className="relative flex h-full w-[50%] lg:w-[30%]">
            <Image
              src={SearchIcon}
              alt="SearchIcon"
              className="absolute right-[-43px] top-[-18px] z-20 w-14 lg:right-[-75px] lg:top-[-30px] lg:w-24"
              ref={searchRef}
            />
            {/* <span className="text-black absolute left-16 font-semibold z-20 w-fit">|</span> */}
            <input
              type="text"
              className="text-purple-inner-octagon placeholder:text-purple-inner-octagon mx-auto w-full px-6 py-1 text-sm font-semibold decoration-transparent outline-none lg:px-10 lg:py-4 lg:text-lg"
              placeholder="| search"
              ref={inputRef}
            />
          </div>
        </section>
        {/* Middle section of banner */}

        {/* Wellgorithm filters in banner. */}
        <section
          className="absolute bottom-0 w-full bg-[#FFF500] py-[2px] lg:h-[26%]"
          ref={filtersRef}
        >
          <section className="flex w-[100%] items-center justify-center bg-[#AF5CAA] px-[45%] text-xs max-lg:gap-8 lg:h-[100%] lg:w-full lg:px-[20%]">
            {wellgoFilters.map((filter, i) => (
              <WellgorithmFilterBtn
                key={i}
                id={filter.id}
                text={filter.name}
                className="text-white"
              />
            ))}
          </section>
        </section>
        {/* Wellgorithm filters in banner. */}
      </Banner>

      {/* Dots icon between banner and cards */}
      <div className="mb-[8%] mt-[4%] flex w-full justify-center md:mb-[3%] md:mt-[2%]">
        <Image
          src={HexagonWithDots}
          alt="HexagonWithDots"
          className="w-[12%] lg:w-auto"
        />
      </div>
      {/* Dots icon between banner and cards */}

      {/* Wellgorithm cards */}
      <section className="grid grid-cols-1 gap-x-10 gap-y-24 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-3">
        {/* Card */}
        <WellgorithmCard
          className={{
            main: "aspect-square drop-shadow-2xl",
            text: "text-purple-inner-octagon !bg-white",
          }}
          shadow={false}
        >
          <LabelComponent
            shape={"arrow"}
            text={["compassion", "title"]}
            angle={15}
            align={"top"}
            className="left-[50%] h-[10%] translate-x-[-50%] !px-[6%] !text-lg"
            bracketClassName="!w-[71%]"
          />
          <LabelComponent
            thin={{ apply: true, color: "#FAA81A", width: 3 }}
            shape={"arrow"}
            textClasses={"!text-white"}
            text={["compassion", "title", "30"]}
            angle={15}
            align={"bottom"}
            className="left-[50%] h-[10%] translate-x-[-50%] !bg-orange-dark !px-[6%] !text-lg text-white"
            bracketClassName="!w-[64%]"
          />
        </WellgorithmCard>
        {/* Card */}

        <WellgorithmCard
          className={{
            main: "aspect-square drop-shadow-2xl",
            text: "text-purple-inner-octagon !bg-white",
          }}
          shadow={false}
        >
          <LabelComponent
            shape={"arrow"}
            text={["compassion", "title"]}
            angle={15}
            align={"top"}
            className="left-[50%] h-[10%] translate-x-[-50%] !px-[6%] !text-lg"
            bracketClassName="!w-[71%]"
          />
          <LabelComponent
            thin={{ apply: true, color: "#FAA81A", width: 3 }}
            shape={"arrow"}
            textClasses={"!text-white"}
            text={["compassion", "title", "30"]}
            angle={15}
            align={"bottom"}
            className="left-[50%] h-[10%] translate-x-[-50%] !bg-orange-dark !px-[6%] !text-lg text-white"
            bracketClassName="!w-[64%]"
          />
        </WellgorithmCard>

        <WellgorithmCard
          className={{
            main: "aspect-square drop-shadow-2xl",
            text: "text-purple-inner-octagon !bg-white",
          }}
          shadow={false}
        >
          <LabelComponent
            shape={"arrow"}
            text={["compassion", "title"]}
            angle={15}
            align={"top"}
            className="left-[50%] h-[10%] translate-x-[-50%] !px-[6%] !text-lg"
            bracketClassName="!w-[71%]"
          />
          <LabelComponent
            thin={{ apply: true, color: "#FAA81A", width: 3 }}
            shape={"arrow"}
            textClasses={"!text-white"}
            text={["compassion", "title", "30"]}
            angle={15}
            align={"bottom"}
            className="left-[50%] h-[10%] translate-x-[-50%] !bg-orange-dark !px-[6%] !text-lg text-white"
            bracketClassName="!w-[64%]"
          />
        </WellgorithmCard>

        <WellgorithmCard
          className={{
            main: "aspect-square drop-shadow-2xl",
            text: "text-purple-inner-octagon !bg-white",
          }}
          shadow={false}
        >
          <LabelComponent
            shape={"arrow"}
            text={["compassion", "title"]}
            angle={15}
            align={"top"}
            className="left-[50%] h-[10%] translate-x-[-50%] !px-[6%] !text-lg"
            bracketClassName="!w-[71%]"
          />
          <LabelComponent
            thin={{ apply: true, color: "#FAA81A", width: 3 }}
            shape={"arrow"}
            textClasses={"!text-white"}
            text={["compassion", "title", "30"]}
            angle={15}
            align={"bottom"}
            className="left-[50%] h-[10%] translate-x-[-50%] !bg-orange-dark !px-[6%] !text-lg text-white"
            bracketClassName="!w-[64%]"
          />
        </WellgorithmCard>

        <WellgorithmCard
          className={{
            main: "aspect-square drop-shadow-2xl",
            text: "text-purple-inner-octagon !bg-white",
          }}
          shadow={false}
        >
          <LabelComponent
            shape={"arrow"}
            text={["compassion", "title"]}
            angle={15}
            align={"top"}
            className="left-[50%] h-[10%] translate-x-[-50%] !px-[6%] !text-lg"
            bracketClassName="!w-[71%]"
          />
          <LabelComponent
            thin={{ apply: true, color: "#FAA81A", width: 3 }}
            shape={"arrow"}
            textClasses={"!text-white"}
            text={["compassion", "title", "30"]}
            angle={15}
            align={"bottom"}
            className="left-[50%] h-[10%] translate-x-[-50%] !bg-orange-dark !px-[6%] !text-lg text-white"
            bracketClassName="!w-[64%]"
          />
        </WellgorithmCard>

        <WellgorithmCard
          className={{
            main: "aspect-square drop-shadow-2xl",
            text: "text-purple-inner-octagon !bg-white",
          }}
          shadow={false}
        >
          <LabelComponent
            shape={"arrow"}
            text={["compassion", "title"]}
            angle={15}
            align={"top"}
            className="left-[50%] h-[10%] translate-x-[-50%] !px-[6%] !text-lg"
            bracketClassName="!w-[71%]"
          />
          <LabelComponent
            thin={{ apply: true, color: "#FAA81A", width: 3 }}
            shape={"arrow"}
            textClasses={"!text-white"}
            text={["compassion", "title", "30"]}
            angle={15}
            align={"bottom"}
            className="left-[50%] h-[10%] translate-x-[-50%] !bg-orange-dark !px-[6%] !text-lg text-white"
            bracketClassName="!w-[64%]"
          />
        </WellgorithmCard>
      </section>
      {/* Wellgorithm cards */}
    </>
  );
};
export default Screen;
