"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import Avatar from "@/public/assets/avatar/avatar.svg";

import Banner from "@/src/components/__old__/banner";
import TextCard from "@/src/components/__old__/cards/text_card";
import LabelComponent from "@/src/components/__old__/label";

import useClipBuilder from "@/src/hooks/clip_path_calculations";

export const Info = () => {
  const userNameCardInnerRef = useRef(null);

  const hexElementRef = useRef(null);
  const octaElementRef = useRef(null);

  const { hexagonClip, octagonClip } = useClipBuilder();

  useEffect(() => {
    hexagonClip(userNameCardInnerRef, 8);

    hexagonClip(hexElementRef, 15);
    octagonClip(octaElementRef, 30);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="absolute top-full flex w-full translate-y-[-50%] items-center justify-between px-[10%]">
        <section className="flex w-fit items-center justify-center">
          <Image src={Avatar} alt="avatar" className="z-[2]" />
          <span className="drop-shadow-clip-outline-purple ml-[-12%]">
            <p
              className="text-purple-inner-octagon flex items-center justify-center text-nowrap bg-white py-1 pl-7 pr-4 text-sm font-bold"
              ref={userNameCardInnerRef}
            >
              jackie milter
            </p>
          </span>
        </section>
        <section className="flex h-full items-center">
          <p
            ref={hexElementRef}
            className="mr-3 bg-orange-dark px-3 py-1 font-bold text-white md:px-6"
          >
            peace
          </p>
          <p
            ref={octaElementRef}
            className="bg-[#4F81E5] p-3 font-bold text-white md:p-6"
          >
            20
          </p>
        </section>
      </div>
    </>
  );
};

const Screen1 = () => {
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
        className="aspect-[2.3/1] w-full md:aspect-[2.9/1]"
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
            className="!bg-purple-inner-octagon absolute left-1/2 z-10 w-max translate-x-[-50%]"
            text={["aware", "nest"]}
            align={"top"}
            shape="hexagon"
            thin={{ color: "#8757B5" }}
          />
          Around the world, a new awareness is blooming — that our emotions,
          like our bodies, are a part of nature, and that we can cultivate them
          like a garden.
          <Info />
        </TextCard>
      </Banner>
    </>
  );
};

export default Screen1;
