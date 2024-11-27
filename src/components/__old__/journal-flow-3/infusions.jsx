"use client";
import ReIcon from "@/public/assets/journal-flow/re-icon.svg";
import useClipBuilder from "@/src/hooks/clip_path_calculations";
import Image from "next/image";
import { useEffect, useRef } from "react";
import InfusionSlier from "./infusionSlider";
import InfusionSlider2 from "./infusionSlider2";

const Infusions = ({
  className,
  setActivationsPage,
  activationsPage,
  points,
  setPoints,
}) => {
  const showMoreBtnRef = useRef();
  const headChildRef = useRef(null);
  const headChildRefOuter = useRef(null);
  const containerRef = useRef(null);
  const containerRefOuter = useRef(null);
  const iconOctagonOuter = useRef(null);
  const iconOctagon = useRef(null);
  const pointsOctagonOuter = useRef(null);
  const pointsOctagon = useRef(null);
  const iconOctagonOuter_2 = useRef(null);
  const iconOctagon_2 = useRef(null);
  const pointsOctagonOuter_2 = useRef(null);
  const pointsOctagon_2 = useRef(null);

  const { hexagonClip, octagonClip } = useClipBuilder();

  useEffect(() => {
    hexagonClip(showMoreBtnRef, 9);
    hexagonClip(headChildRef, 26);
    hexagonClip(headChildRefOuter, 26);
    octagonClip(iconOctagon);
    octagonClip(iconOctagonOuter);
    octagonClip(pointsOctagonOuter);
    octagonClip(pointsOctagon);
    octagonClip(iconOctagon_2);
    octagonClip(iconOctagonOuter_2);
    octagonClip(pointsOctagonOuter_2);
    octagonClip(pointsOctagon_2);

    if (innerWidth > 1270) {
      hexagonClip(containerRef, 45);
      hexagonClip(containerRefOuter, 45);
    }
  }, []);

  return (
    <>
      <div className="z-0 mt-[20%] flex h-fit w-[280px] items-center justify-between sm:w-[560px] xl:mb-[4%] xl:mt-0">
        <InfusionSlier />
        <InfusionSlider2 />
      </div>

      <div
        className={`absolute bottom-0 left-[50%] translate-x-[-50%] max-xl:translate-y-[100%] xl:translate-y-[50%] ${className}`}
      >
        <div className="relative flex h-[228px] w-screen items-center justify-evenly xl:h-[202px]">
          <div
            className="hidden h-[86px] w-[86px] cursor-pointer bg-white p-1 xl:block"
            ref={iconOctagonOuter}
          >
            <div
              className="grid h-full w-full place-items-center bg-[#675C98]"
              ref={iconOctagon}
            >
              <Image src={ReIcon} alt="re-icon" />
            </div>
          </div>

          <div
            ref={containerRefOuter}
            className="h-[228px] w-full bg-white p-1 xl:h-[201px] xl:w-[921px]"
          >
            <div
              ref={containerRef}
              className="flex h-full w-full justify-center bg-[#564A8D] text-[20px] font-bold text-white sm:text-[24px]"
            >
              <p className="absolute top-[30%] h-[84px] w-[350px] text-center sm:top-[40%] sm:h-[64px] sm:w-[731px]">
                Tranquiloids catalyze moments of deep tranquility, restoring
                emotional calm and peace.
              </p>
            </div>
          </div>

          <div
            ref={headChildRefOuter}
            className="absolute left-[50%] top-0 h-[83px] w-[350px] translate-x-[-50%] translate-y-[-50%] bg-white p-[3px] sm:h-[103px] sm:w-[560px]"
          >
            <span
              ref={headChildRef}
              className="grid h-full w-full place-items-center bg-[#8858B5] text-[40px] font-black text-yellow-light"
            >
              empathites
            </span>
          </div>

          <div className="absolute bottom-0 flex w-[292px] translate-y-[50%] justify-between xl:hidden">
            <div
              className="h-[86px] w-[86px] bg-white p-1"
              ref={iconOctagonOuter_2}
            >
              <div
                className="grid h-full w-full place-items-center bg-[#675C98]"
                ref={iconOctagon_2}
              >
                <Image src={ReIcon} alt="re-icon" />
              </div>
            </div>

            <div
              className="h-[86px] w-[86px] bg-[#FFF45C] p-1"
              ref={pointsOctagonOuter_2}
            >
              <div
                className="grid h-full w-full place-items-center bg-[#FAB130] text-[30px] font-black text-white"
                ref={pointsOctagon_2}
              >
                {points}
              </div>
            </div>
          </div>

          <div
            className="hidden h-[86px] w-[86px] bg-[#FFF45C] p-1 xl:block"
            ref={pointsOctagonOuter}
          >
            <div
              className="grid h-full w-full place-items-center bg-[#FAB130] text-[30px] font-black text-white"
              ref={pointsOctagon}
            >
              {points}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Infusions;
