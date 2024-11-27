"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import BannerImage from "@/public/assets/banner/banner2.png";
import Color from "@/public/assets/profile/color.svg";
import Edit from "@/public/assets/profile/edit.svg";
import Flower from "@/public/assets/profile/flower.svg";
import House from "@/public/assets/profile/house.svg";
import Mountain from "@/public/assets/profile/mountain.svg";
import Setting from "@/public/assets/profile/oct.svg";
import Option from "@/public/assets/profile/option.svg";
import Sun from "@/public/assets/profile/sun.svg";

import LandingScreen from "@/src/components/__old__/container/landing_screen";
import ScrollContainer from "@/src/components/__old__/container/scroll";
import LabelComponent from "@/src/components/__old__/label";
import Octagon from "@/src/components/__old__/octagons/Octagon";

import useClipBuilder from "@/src/hooks/clip_path_calculations";

const IconPalette = ({ open = false }) => {
  const octaContRef = useRef();
  const octaSecRef = useRef();

  const { rectClip, rectClipBanner } = useClipBuilder();

  useEffect(() => {
    rectClipBanner(octaContRef, 6, 15);
    rectClipBanner(octaSecRef, 6, 15);
  }, [open]);

  if (!open) return <></>;

  return (
    <div
      ref={octaContRef}
      className="absolute left-0 top-[12%] z-10 h-[126px] w-full bg-[#FFF200] p-[2px] md:w-[400px]"
    >
      <section
        ref={octaSecRef}
        className="flex h-full w-full flex-wrap justify-between gap-x-4 bg-[#391D53] px-9 py-1"
      >
        <Image alt="flower" src={Flower} />
        <Image alt="flower" src={Flower} />
        <Image alt="flower" src={Flower} />
        <Image alt="flower" src={Flower} />
        <Image alt="flower" src={Flower} />
        <Image alt="flower" src={Flower} />
        {/*  */}
        <Image alt="flower" src={Flower} />
        <Image alt="flower" src={Flower} />
        <Image alt="flower" src={Flower} />
        <Image alt="flower" src={Flower} />
        <Image alt="flower" src={Flower} />
        <Image alt="flower" src={Flower} />
      </section>
    </div>
  );
};

const Options = ({
  openIconPalette = false,
  setOpenIconPalette = () => {},
}) => {
  const handleIconPaletteClick = () => {
    setOpenIconPalette(!openIconPalette);
  };

  return (
    <div className="absolute top-[3%] z-10 flex w-full items-center justify-between px-3 md:px-9 lg:inline lg:px-12">
      <section className="flex w-[90px] items-center justify-between md:w-[107px] lg:absolute lg:left-[20%]">
        <button>
          <Image alt="flower" src={Flower} onClick={handleIconPaletteClick} />
        </button>
        <button>
          <Image alt="color" src={Color} />
        </button>
      </section>
      <section className="flex w-[179px] items-center justify-between lg:absolute lg:left-[73%]">
        <button>
          <Image alt="edit" src={Edit} />
        </button>
        <button>
          <Image alt="mountain" src={Mountain} />
        </button>
        <button>
          <Image alt="setting" src={Setting} />
        </button>
        <button>
          <Image alt="sun" src={Sun} />
        </button>
      </section>
    </div>
  );
};

const HeadingLabel = () => {
  return (
    <>
      <LabelComponent
        shape="hexagon"
        angle={35}
        className="md:text-hm xl:text-hl z-20 w-[350px] gap-2 bg-[#8858B5] px-12 py-5 text-sm md:w-[560px]"
        textClasses="font-extrabold"
        text={["", "wellgorithms"]}
        containerClassName="absolute top-0 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-white p-[3px]"
      />
      <p className="font-semibold">caretaker of the gardens</p>
      <section className="mt-3 flex gap-[24px]">
        <Image alt="option" src={Option} />
        <Image alt="option" src={House} />
      </section>
    </>
  );
};

const Screen1 = () => {
  const [dimension, setDimensions] = useState({ radius: 0, gap: 0 });
  const [openIconPalette, setOpenIconPalette] = useState(false);
  const [more, setMore] = useState(true);

  const showMoreBtnRef = useRef();

  const { hexagonClip } = useClipBuilder();

  useEffect(() => {
    hexagonClip(showMoreBtnRef, 9);
  }, [more]);

  useEffect(() => {
    if (innerWidth >= 1440) {
      setDimensions({ radius: 125, gap: 160 });
    } else if (innerWidth >= 768) {
      setDimensions({ radius: 110, gap: 110 });
    } else if (innerWidth >= 390) {
      setDimensions({ radius: 70, gap: 90 });
    }

    document.body.style.background = "#D5D1ED";
    return () => {
      document.body.style.background = "#7369A0";
    };
  }, []);

  const radius = 100;
  const level = [1, 2];

  const handleMoreClick = () => {
    setMore(!more);
  };

  return (
    <>
      <LandingScreen
        image={BannerImage}
        className="mb-[50vh] h-[512px] lg:mb-[60vh]"
        imgContClassName="drop-shadow-none"
        angle={2}
      >
        <Octagon
          radius={dimension.radius}
          gap={dimension.gap}
          level={level}
          className={"octagon-text-size mb-20 lg:mb-0"}
        />

        <Options
          openIconPalette={openIconPalette}
          setOpenIconPalette={setOpenIconPalette}
        />

        <IconPalette open={openIconPalette} />

        <ScrollContainer
          headChild={<HeadingLabel />}
          headClassName={`text-[20px] lg:text-[26px] py-10 pt-16 md:pt-20 px-6 md:px-12 lg:px-32 font-semibold h-[201px]
            before:bg-[#564A8D] text-white`}
          containerClassName="absolute top-full translate-y-[-50%] w-full lg:w-[921px] z-20"
          bodyClassName="mb-10 flex flex-col items-center p-3 md:p-9"
          showBody={more}
          translateHead={true}
          bodyAngle={3}
        >
          {!more ? (
            <></>
          ) : (
            <p className="text-balance px-0 pb-3 text-[16px] font-semibold md:text-[24px] lg:p-3 lg:px-20 lg:pb-12">
              What will I do with my one wild and precious life? I will be the
              peace, be the love, be the hope. And I will create a platform, a
              garden, a sanctuary, whose mission is to help others to be the
              peace, be the love, be the hope. No matter the darkness, no matter
              the pain, I will never allow the flame that burns bright in my
              heart to be extinguished. And I will go gentle, and fearless, into
              that Good Night.
            </p>
          )}
          {/* <button className="absolute top-full translate-y-[-50%] bg-[#A262A1] text-yellow-light p-2 px-12
           font-semibold text-[20px]"
           ref={showMoreBtnRef} onClick={handleMoreClick}>
            {
              more ? "more about wellgorithm" : "more"
            }
          </button> */}
        </ScrollContainer>
      </LandingScreen>
    </>
  );
};

export default Screen1;
