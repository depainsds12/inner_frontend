"use client";

import { useEffect, useState } from "react";

import Banner from "@/src/components/__old__/banner";
import TextCard from "@/src/components/__old__/cards/text_card";
import LabelComponent from "@/src/components/__old__/label";

export default function Screen1() {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    setAngle(
      Math.floor(window.innerHeight) /
        (150 - window.innerHeight / window.innerWidth),
    );
  }, []);

  return (
    <>
      <Banner
        className="mt-6 aspect-[2.3/1] w-full md:aspect-[2.9/1]"
        shape="rect"
        angle={angle}
        innerangle={15}
      >
        <TextCard
          angle={angle}
          innerangle={15}
          align={{ do: true, value: 100 }}
          className="absolute left-[calc(50%-40%)] w-[80%] px-6 text-center text-xl md:left-[calc(50%-35%)] md:w-[70%] md:px-8 md:text-2xl lg:left-[calc(50%-30%)] lg:w-[60%] lg:px-10 lg:text-3xl xl:px-12"
        >
          <LabelComponent
            className="absolute left-1/2 z-10 w-max translate-x-[-50%]"
            text={["aware", "nest"]}
            align={"top"}
          />
          Around the world, a new awareness is blooming — that our emotions,
          like our bodies, are a part of nature, and that we can cultivate them
          like a garden.
        </TextCard>
      </Banner>
    </>
  );
}
