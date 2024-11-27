"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

import {
  default as CardImage,
  default as womanImage,
} from "@/public/assets/banner/banner.png";

import useClipBuilder from "@/src/hooks/clip_path_calculations";

import UserIcon from "@/public/assets/avatar/avatar.svg";
import LabelComponent from "@/src/components/__old__/label";

const Card = ({
  children = "",
  text = null,
  cardImage = null,
  upperAngle = 9,
  lowerAngle = 9,
  className = "",
  imageClassName = "",
  cutContent = false,
}) => {
  const imageTextRef = useRef(null);
  const smallProfileIconRef = useRef(null);
  const smallProfileIconOuterRef = useRef(null);
  const userIconNameRef = useRef(null);
  const userIconNameOuterRef = useRef(null);
  const { squareClip, arrowClip, hexagonClip, octagonClip } = useClipBuilder();

  useEffect(() => {
    // shapeRef, upperAnglePercent=20, lowerAnglePercent = 20, pseudo = false
    innerWidth >= 768 && squareClip(imageTextRef, upperAngle, lowerAngle);
    hexagonClip(userIconNameRef, 10);
    hexagonClip(userIconNameOuterRef, 10);
    octagonClip(smallProfileIconOuterRef);
    octagonClip(smallProfileIconRef);
  }, []);

  const username = "jackie miller";

  return (
    <div
      className={twMerge(
        `relative grid h-full w-full place-items-center bg-transparent`,
        className,
      )}
    >
      <div className="drop-shadow-clip-outline-white h-full bg-transparent">
        <section className={`h-full bg-white`} ref={imageTextRef}>
          <Image
            src={cardImage ? cardImage : womanImage}
            alt="image"
            className={`h-[261px] w-full object-cover ${imageClassName}`}
          />
          {!cutContent ? (
            <p className="sm:text-cs mt-6 px-6 text-[18px] font-semibold md:px-12">
              {text}
            </p>
          ) : (
            <></>
          )}
        </section>
      </div>

      <div className="absolute bottom-0 left-[50%] flex h-[107px] w-[297px] translate-x-[-50%] translate-y-[50%] items-center">
        <div
          className="relative z-[10] h-[99px] w-[99px] bg-[#D5D1ED] p-[3px] md:h-[107px] md:w-[107px]"
          ref={smallProfileIconOuterRef}
        >
          <Image
            ref={smallProfileIconRef}
            src={UserIcon}
            alt="card"
            className="h-full w-full object-cover"
          />
        </div>

        <div
          className="gird z-[0px] ml-[-24%] !h-[58px] !w-[260px] place-items-center bg-[#D5D1ED] p-[3px]"
          ref={userIconNameOuterRef}
        >
          <h3
            className="text-cs flex !h-full !w-[254px] items-center justify-end bg-[#3F3676] pr-[10%] font-extrabold text-[#D5D1ED]"
            ref={userIconNameRef}
          >
            {username ? username : "jackie miller"}
          </h3>
        </div>
      </div>

      {children}
    </div>
  );
};

const Screen2 = ({ cutContent = false }) => {
  const data = [1, 2, 3, 4];
  return (
    <>
      <div className="mt-9 grid h-full w-full place-items-center gap-x-[60px] gap-y-[120px] py-6 lg:grid-cols-2 lg:items-center">
        {data.map((z, i) => (
          <Card
            key={i}
            cardImage={CardImage}
            cutContent={cutContent}
            className={`md:w-[590px] ${cutContent ? "h-[261px]" : "h-[497px] md:h-[520px]"} ${i % 2 == 0 ? "lg:justify-self-end" : "lg:justify-self-start"}`}
            text={
              "motions, like our bodies, are a part of nature, and that we can cultivate them like a garden. motions, like our bodies, are a part of nature, and that we can cultivate them like a garden."
            }
          >
            <div className="drop-shadow-clip-outline-white absolute left-1/2 top-0 w-max translate-x-[-50%] translate-y-[-50%]">
              <LabelComponent
                bracketClassName="w-[47%] sm:w-[49%] lg:w-[51%] text-yellow-dark fill-white"
                shape="hexagon"
                angle={18}
                className="text-hm relative z-10 bg-purple-text-light px-12 py-2 lg:px-9"
                text={["peace", "Petunia"]}
                textClasses="text-white"
                thin={{ apply: true, color: "#8858B5" }}
              />
            </div>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Screen2;
