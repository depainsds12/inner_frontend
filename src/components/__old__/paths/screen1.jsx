"use client";

import { useEffect, useRef } from "react";

import BannerImage from "@/public/assets/banner/banner2.png";

import LandingScreen from "@/src/components/__old__/container/landing_screen";
import LabelComponent from "@/src/components/__old__/label";

import useClipBuilder from "@/src/hooks/clip_path_calculations";

const Screen1 = () => {
  const imageRef = useRef();
  const desRef = useRef();

  const { rectClip, hexagonClip } = useClipBuilder();

  useEffect(() => {
    document.body.style.background = "#D5D1ED";

    rectClip(imageRef, 0, 3);
    innerWidth > 768 && hexagonClip(desRef, 50);

    return () => {
      document.body.style.background = "#7369A0";
    };
  }, []);

  return (
    <>
      <LandingScreen image={BannerImage} className="mb-[20vh] h-[60vh]">
        {/* <Octagon radius={120} gap={150} level={level} /> */}

        <section className="absolute left-1/2 top-full z-10 grid w-full translate-x-[-50%] translate-y-[-50%] place-items-center">
          <LabelComponent
            bracketClassName="w-[60%] md:w-[42%] lg:w-[47%] !gap-3 fill-white
           font-extrabold lg:text-[40px] sm:text-[36px] text-yellow-light text-[32px]"
            shape="hexagon"
            angle={25}
            containerClassName="relative drop-shadow-clip-outline-white-bold z-20"
            className="absolute left-1/2 top-0 w-[350px] translate-x-[-50%] translate-y-[-50%] bg-purple-text-light px-12 py-1 md:w-[497px] md:py-5 lg:w-[560px]"
            text={["paths"]}
            textClasses="font-bold text-hl lg:text-hl sm:text-hm text-hs"
          />

          <p
            ref={desRef}
            className="grid h-[186px] w-full place-items-center bg-[#564A8D] pt-9 text-center text-[20px] font-bold text-white md:h-[201px] md:px-10 md:pt-12 md:text-[26px] lg:w-[921px] lg:px-20"
          >
            paths are how you explore the interconnections between your flowers,
            shadows and seasons
          </p>
        </section>
      </LandingScreen>
    </>
  );
};

export default Screen1;
