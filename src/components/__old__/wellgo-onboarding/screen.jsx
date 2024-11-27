"use client";
import WellgoLogo from "@/public/assets/header/header_wellgorithm_active.svg";
import Banner from "@/src/components/__old__/banner";
import useClipBuilder from "@/src/hooks/clip_path_calculations";
import calculate from "@/src/libs/align_calculation";
import useWellgorithmFilter from "@/src/store/wellgorithm_filters";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Screen2 from "./screen2";

const Screen = () => {
  const WellgoLogoRef = useRef(null);
  const filterHeadingRef = useRef(null);
  const filtersRef = useRef(null);
  let border = ["w-[99.7%],w-[100%]"];

  const { hexagonClip, halfHexagonClip } = useClipBuilder();

  const expressionFilter = useWellgorithmFilter();

  useEffect(() => {
    calculate(WellgoLogoRef, "top");
    hexagonClip(filterHeadingRef, 14);
    halfHexagonClip(filtersRef, 50);
  }, []);

  return (
    <>
      <Banner
        className="mt-10 flex aspect-[2.3/1] w-full items-center justify-center before:bg-[url(/assets/wellgorithm_page/banner.png)] md:mt-[7%] md:aspect-[4.5/1]"
        shape="hexagon"
        angle={50}
      >
        <Image
          src={WellgoLogo}
          alt="WellgoLogo"
          className="absolute left-1/2 w-[50%] translate-x-[-50%] lg:w-[30%]"
          ref={WellgoLogoRef}
        />

        <section className="flex h-fit w-[80%] flex-col items-center justify-center gap-1 text-center text-white md:w-full md:max-lg:mt-[6%] lg:gap-3">
          <p className="text-lg font-bold text-yellow-dark md:text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl">
            Wellgorithms are ...
          </p>
          <p className="mb-[-0.3%] text-xs font-semibold text-yellow-dark md:text-sm lg:text-lg xl:text-2xl 2xl:text-3xl">
            gamified prompts to nourish your (inner)Garden
          </p>
          <p className="mt-[-0.3%] text-xs font-semibold md:text-sm lg:text-lg xl:text-2xl 2xl:text-3xl">
            combining 2D journaling with immersive 3D virtual experience
          </p>
        </section>

        <section></section>
      </Banner>

      <section className="bg-purple-outer-octagon mt-12 h-full p-6">
        <Screen2 />
      </section>
    </>
  );
};

export default Screen;
