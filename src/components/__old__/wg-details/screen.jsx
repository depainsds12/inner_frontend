"use client";
import RectWellgorithmCard from "@/src/components/__old__/cards/rect_wellgorithm_card";
import LabelComponent from "@/src/components/__old__/label";
import useClipBuilder from "@/src/hooks/clip_path_calculations";
import calculate from "@/src/libs/align_calculation";
import { useEffect, useRef } from "react";
import Card from "./card";

const Screen = () => {
  const sectionRef = useRef(null);
  const cardBottomSectionRef = useRef(null);
  const userNameCardOuterRef = useRef(null);
  const userNameCardInnerRef = useRef(null);
  const cardTagRef = useRef(null);
  const pointsOctaRef = useRef(null);
  const { rectClipBanner, hexagonClip, octagonClip } = useClipBuilder();

  useEffect(() => {
    rectClipBanner(sectionRef, 5, 13);
    hexagonClip(userNameCardOuterRef, 8);
    hexagonClip(userNameCardInnerRef, 8);
    hexagonClip(cardTagRef, 8);
    octagonClip(pointsOctaRef, 8);
    calculate(cardBottomSectionRef, "bottom");
  }, []);

  return (
    <>
      <section className="my-20 grid h-full w-[100%] grid-cols-1 place-items-center">
        <RectWellgorithmCard
          className={{
            main: "h-[105%] w-[53%] md:w-[60%] lg:h-full lg:w-[53%] 2xl:w-[33%]",
            text: "bg-purple-mid text-white",
          }}
        >
          <LabelComponent
            shape={"arrow"}
            text={["compassion", "title"]}
            angle={15}
            align={"top"}
            className="left-[50%] h-[10%] translate-x-[-50%] !px-[6%] !text-lg"
            bracketClassName="!w-[70%]"
          />
          <LabelComponent
            thin={{ apply: true, color: "#FAA81A", width: 3 }}
            shape={"arrow"}
            textClasses={"!text-white"}
            text={["compassion", "title", "30"]}
            angle={15}
            align={"bottom"}
            bracketClassName="!w-[63%]"
            className="left-[50%] h-[10%] translate-x-[-50%] !bg-orange-dark !px-[6%] !text-lg text-white"
          />
        </RectWellgorithmCard>

        <section
          className="relative z-[-1] mt-[-12%] flex h-fit w-fit flex-col items-center gap-20 bg-[#AA9DD0] py-20 pt-28 max-md:px-[8%] md:mt-[-8%] md:pt-40 md:max-lg:px-[15%] lg:mt-[-6%] lg:justify-center lg:py-32 lg:pt-36 lg:max-xl:px-[20%] xl:mt-[-3%] xl:flex-row xl:gap-8 2xl:gap-10"
          ref={sectionRef}
        >
          <Card />
          <Card />
          <Card />
        </section>
      </section>
    </>
  );
};

export default Screen;
