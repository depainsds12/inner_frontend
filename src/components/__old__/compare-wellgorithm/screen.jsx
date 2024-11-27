"use client";
import WellgorithmLogo from "@/public/assets/header/header_wellgorithm_active.svg";
import Banner from "@/src/components/__old__/banner";
import ExpressionFilter from "@/src/components/__old__/expressions_filter";
import TextWithBrackets from "@/src/components/__old__/texts/text_with_brackets";
import useClipBuilder from "@/src/hooks/clip_path_calculations";
import calculate from "@/src/libs/align_calculation";
import Image from "next/image";
import { useEffect, useRef } from "react";
import WelgoCard from "./wellgo-card";

const Screen = () => {
  const welgoRef = useRef(null);
  const arrowClipRef = useRef(null);

  const { arrowClip } = useClipBuilder();

  useEffect(() => {
    arrowClip(arrowClipRef, 30);
    calculate(arrowClipRef, "bottom");
    calculate(welgoRef, "top");
  }, [arrowClip]);

  const bracketsData = {
    rightText: {
      text: "sunflowers",
      properties: "font-black text-2xl md:text-4xl lg:text-5xl text-white",
    },
    middleText: {
      text: "title",
      properties:
        "font-black text-2xl md:text-4xl lg:text-5xl text-yellow-dark",
    },
    brackets: {
      properties: "h-[80%]",
    },
  };

  const wellgorithmData = [
    {
      text: " Welcome the crackling anxieties, knowing theyll soon wither in the wind",
      tags: { tag1: "love", tag2: "peace", tag3: "kindness" },
    },
    {
      text: " Welcome the crackling anxieties, knowing theyll soon wither in the wind",
      tags: { tag1: "love", tag2: "peace", tag3: "kindness" },
    },
    {
      text: " Welcome the crackling anxieties, knowing theyll soon wither in the wind",
      tags: { tag1: "love", tag2: "peace", tag3: "kindness" },
    },
  ];

  return (
    <div>
      <ExpressionFilter />

      <Banner
        className="mt-20 aspect-[2.3/1] w-full before:bg-[url(/assets/images/banner/butterfly-woman.svg)] md:aspect-[4.5/1]"
        shape="hexagon"
        angle={90}
      >
        <Image
          src={WellgorithmLogo}
          alt="WellgorithmLogo"
          className="absolute left-1/2 translate-x-[-50%]"
          ref={welgoRef}
        />

        <TextWithBrackets
          bracketsData={bracketsData}
          className={`bg-purple-inner-octagon absolute left-1/2 w-fit translate-x-[-50%] fill-white p-6 px-24`}
          ref={arrowClipRef}
        />
      </Banner>

      <section className="compare-section mt-20 flex w-full justify-center gap-4">
        {/* Left Section */}
        <section className="left-section flex w-[40%] flex-col items-end px-2">
          <span className="relative left-[50%] w-full p-5 text-xl font-extrabold text-purple-dark">
            original
          </span>
          <WelgoCard
            text={wellgorithmData[1].text}
            tags={wellgorithmData.tags}
          />
        </section>
        {/* Left Section */}

        {/* Right Section */}
        <section className="right-section flex w-[40%] flex-col">
          <span className="relative left-[15%] w-full p-5 text-xl font-extrabold text-purple-dark">
            personalized
          </span>
          {wellgorithmData.map((wellgorithmData, i) => (
            <WelgoCard
              key={i}
              text={wellgorithmData.text}
              tags={wellgorithmData.tags}
            />
          ))}
        </section>
        {/* Right Section */}
      </section>
    </div>
  );
};

export default Screen;
