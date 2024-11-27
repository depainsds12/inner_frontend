"use client";

import { useEffect, useRef, useState } from "react";

import Banner from "@/src/components/__old__/banner";
import TextCard from "@/src/components/__old__/cards/text_card";
import useClipBuilder from "@/src/hooks/clip_path_calculations";
import Controls from "./controls";

const Screen1 = () => {
  const [angle, setAngle] = useState(0);

  const awarenestInnerRef = useRef(null);
  const awarenestOuterRef = useRef(null);

  const { hexagonClip } = useClipBuilder();

  useEffect(() => {
    setAngle(
      Math.floor(window.innerHeight) /
        (150 - window.innerHeight / window.innerWidth),
    );
    hexagonClip(awarenestInnerRef, 14);
    hexagonClip(awarenestOuterRef, 16);
  }, []);

  return (
    <>
      <Banner
        className="aspect-[2.3/1] w-full md:aspect-[2.9/1]"
        shape="rect"
        angle={angle}
        innerangle={15}
      >
        <TextCard
          angle={angle}
          innerangle={
            typeof window !== "undefined" && window.innerWidth > 1024 ? 15 : 0
          }
          // align={{apply: true, value: 100}}
          className="absolute bottom-0 left-[50%] h-[260px] w-[100%] translate-x-[-50%] translate-y-[50%] md:h-[204px] md:w-[100%%] xl:h-[282px] xl:w-[789px]"
        >
          <div
            className="absolute top-0 grid translate-y-[-50%] place-items-center bg-white p-[4px] max-xl:h-[67px] max-xl:w-[354px] xl:h-[61px] xl:w-[331px]"
            ref={awarenestOuterRef}
          >
            <h2
              className="flex h-full w-full items-center justify-center bg-[#AE5CAA] text-sm font-black text-white"
              ref={awarenestInnerRef}
            >
              aware
              <span className="text-sm font-black text-yellow-light">Nest</span>
            </h2>
          </div>
          <p className="text-cs xl:text-cm text-center font-semibold text-[#8858B5]">
            Around the world, a new awareness is blooming — that our emotions,
            like our bodies, are a part of nature, and that we can cultivate
            them like a garden.
          </p>
          <div className="absolute bottom-0 flex translate-y-[50%] justify-center">
            <Controls />
          </div>
        </TextCard>
      </Banner>
    </>
  );
};

export default Screen1;
