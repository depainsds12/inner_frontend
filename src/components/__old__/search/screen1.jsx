"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

import BannerImage from "@/public/assets/banner/banner2.png";
import FlowerIcon from "@/public/assets/icons/flower.svg";

import useClipBuilder from "@/src/hooks/clip_path_calculations";

const FlowerCounter = ({ count = 23 }) => {
  return (
    <section className="grid place-items-center">
      <Image alt="flower" src={FlowerIcon} />
      <span className="absolute text-lg font-bold text-yellow-dark md:text-xl xl:text-2xl">
        {count}
      </span>
    </section>
  );
};

const Screen1 = () => {
  const imageRef = useRef();
  const desRef = useRef();
  const searchRef = useRef();

  const { rectClip, hexagonClip } = useClipBuilder();

  const handleSearchChange = (e) => {
    if (e.target.value.length + 2 < 15)
      e.target.style.width = e.target.value.length + 2 + "ch";
  };

  useEffect(() => {
    if (innerWidth > 840) {
      rectClip(imageRef, 0, 3);
    }
    hexagonClip(desRef, 50);
    hexagonClip(searchRef, 50);
  }, []);

  return (
    <>
      <div className="relative mb-[21vh] h-[70vh]">
        <section className="drop-shadow-light-purple-b absolute h-full w-full">
          <Image
            ref={imageRef}
            alt="background image"
            src={BannerImage}
            className="h-full w-full object-cover"
          />
        </section>
        <div className="absolute left-1/2 top-full w-full translate-x-[-50%] translate-y-[-50%]">
          <section
            ref={searchRef}
            className="absolute left-1/2 top-0 z-10 grid w-max translate-x-[-50%] translate-y-[-50%] place-items-center bg-purple-text-light px-20 py-6 text-lg sm:w-1/3 md:text-xl lg:text-2xl xl:py-8 xl:text-3xl"
          >
            <input
              type="text"
              onChange={handleSearchChange}
              className="w-1/2 max-w-full border-l-2 border-yellow-dark bg-transparent pl-6 text-yellow-dark caret-yellow-dark outline-none"
            />
          </section>

          <section
            ref={desRef}
            className="text-light-pinkish-bg mx-auto flex w-[90%] items-center justify-center gap-6 bg-[#564A8D] px-20 py-6 pt-16 text-center sm:w-[80%] md:w-[70%] lg:w-[60%] xl:py-8 xl:pt-20"
          >
            <FlowerCounter />
            <span className="text-lg font-bold md:text-xl xl:text-2xl">
              journal with compassion
            </span>
          </section>
        </div>
      </div>
    </>
  );
};

export default Screen1;
