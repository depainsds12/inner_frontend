"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import Check from "@/public/assets/journal_creation/check.svg";
import Toggle from "@/public/assets/journal_creation/comment-toggle.svg";
import Oct from "@/public/assets/journal_creation/icons/oct.svg";
import PrivateIcon from "@/public/assets/journal_creation/icons/private.svg";
import ToggleIcon from "@/public/assets/journal_creation/icons/toggle.svg";
import PrivateJournal from "@/public/assets/journal_creation/journal-private.svg";
import PublicJournal from "@/public/assets/journal_creation/journal-public.svg";
import Uncheck from "@/public/assets/journal_creation/uncheck.svg";

import CounterPalette from "@/src/components/__old__/counter_palette";
import OctagonCounter from "@/src/components/__old__/octagon_counter";
import useClipBuilder from "@/src/hooks/clip_path_calculations";

import WeatherIcon from "@/public/assets/journal_creation/icons/weather_icon.svg";

import Cloudy from "@/public/assets/searchdrawer/cloudy.svg";
import Rain from "@/public/assets/searchdrawer/rain.svg";
import Rainbow from "@/public/assets/searchdrawer/rainbow.svg";
import SunCloud from "@/public/assets/searchdrawer/sun-cloud.svg";
import Sun from "@/public/assets/searchdrawer/sun.svg";

const STEPS = {
  sphere: 1,
  zone: 2,
  journal: 3,
};

const Dropdown = () => {
  const [open, setOpen] = useState(false);

  const containerRef = useRef();
  const sectionRef = useRef();
  const drawerRef = useRef();

  const { rectClip } = useClipBuilder();

  let data = [
    "adaptability",
    "diversity",
    "symbiosis",
    "regeneration",
    "diversity",
    "symbiosis",
    "regeneration",
    "adaptability",
    "diversity",
    "symbiosis",
    "regeneration",
    "diversity",
    "symbiosis",
    "regeneration",
  ];

  useEffect(() => {
    if (open) {
      rectClip(containerRef, 6, 0);
    } else {
      rectClip(containerRef, 6, 6);
    }
    rectClip(sectionRef, 6, 6);

    rectClip(drawerRef, 0, 3);
  }, [open]);

  return (
    <div className="relative w-[150px] -space-y-0.5">
      <div
        className="z-20 cursor-pointer select-none bg-slate-200 p-[2px]"
        ref={containerRef}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <section
          className={`grid place-items-center font-bold text-white ${open ? "bg-[#FAA81A]" : "bg-[#564A8D]"} h-[50px]`}
          ref={sectionRef}
        >
          seeds
        </section>
      </div>
      {open ? (
        <div
          className="no-scrollbar absolute z-30 h-[352px] w-full overflow-auto bg-white px-[2px]"
          ref={drawerRef}
        >
          {data.map((z, i) => (
            <section
              key={i}
              className={`h-[40px] p-3 text-[16px] font-bold text-[#6E5090] ${i % 2 ? "bg-[#BCB1D1]" : "bg-slate-200"}`}
            >
              {z}
            </section>
          ))}
          <button className="w-full py-3 text-[16px] font-bold text-[#6E5090]">
            add +
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

const CommentSec = () => {
  const [comment, setComment] = useState(false);

  const commentContRef = useRef();
  const commmentSecRef = useRef();
  const buttonRef = useRef();

  const handleClick = () => {
    setComment(!comment);
  };

  const { hexagonClip } = useClipBuilder();

  useEffect(() => {
    hexagonClip(commentContRef, 6);
    hexagonClip(commmentSecRef, 5);
    hexagonClip(buttonRef, 6, true);
  }, []);

  return (
    <>
      <div
        ref={commentContRef}
        className="relative flex items-center bg-white p-[2px]"
      >
        <section
          ref={commmentSecRef}
          className="relative w-[144px] bg-[#7369A0] px-3 font-semibold text-white"
        >
          comments
        </section>
      </div>
      <button
        onClick={handleClick}
        ref={buttonRef}
        className={`pseudo-clip-path relative h-[93%] w-[85px] cursor-pointer select-none font-bold text-white ${comment ? "text-end before:bg-[#FAA81A]" : "text-start before:bg-[#90919A]"} z-10 px-3 before:left-0 before:top-0`}
      >
        {comment ? "on" : "off"}
        <Image
          src={Toggle}
          alt="toggle"
          className={`absolute top-1/2 ${comment ? "left-0" : "left-full"} -translate-x-1/2 -translate-y-1/2`}
        />
      </button>
    </>
  );
};

const Screen3 = ({ step = 0, setStep = () => {} }) => {
  const [checked, setChecked] = useState({ before: false, after: true });

  const publishBtnRef = useRef();

  const { hexagonClip } = useClipBuilder();
  useEffect(() => {
    hexagonClip(publishBtnRef, 12);
  }, [step]);

  const [counterActive, setCounterActive] = useState(false);
  const [weatherActive, setWeatherActive] = useState(false);

  const handleCounterClick = () => {
    setCounterActive(!counterActive);
  };

  const handleWeatherClick = () => {
    setWeatherActive(!weatherActive);
  };

  const weathers = [
    <Image key={0} alt="weather" src={Sun} />,
    <Image key={1} alt="weather" src={Rainbow} />,
    <Image key={2} alt="weather" src={Rain} />,
    <Image key={3} alt="weather" src={SunCloud} />,
    <Image key={4} alt="weather" src={Cloudy} />,
  ];

  if (step == STEPS.zone) {
    return (
      <>
        <div className="fixed bottom-0 z-0 flex w-full items-center justify-between bg-[#8858B5b9] p-3 sm:hidden">
          <Image src={Oct} alt="octagon" />
          <Image src={Oct} alt="octagon" />
          <Image src={Oct} alt="octagon" />
          <Image src={ToggleIcon} alt="toggle" className="" />
          <section className="flex flex-col items-center gap-3">
            <Image src={PrivateIcon} alt="private" />
            {/* <span className="text-slate-300 text-[14px]">private</span> */}
          </section>
        </div>
      </>
    );
  }

  return (
    <>
      <div
        className={`relative z-20 mx-auto mb-[4vh] h-[60px] w-[280px] ${weatherActive || counterActive ? "z-30" : "z-20"}`}
      >
        {step >= STEPS.journal ? (
          <div className="relative z-20 h-full w-full justify-between">
            <Image
              src={WeatherIcon}
              alt="weather"
              className={`absolute left-0 top-0 h-[60px] w-[60px] cursor-pointer xl:hidden`}
              onClick={handleWeatherClick}
            />
            {/* ${counterActive ? "bg-[#FAB130]" : "bg-[#675C98]"} */}

            <OctagonCounter
              count={20}
              onClick={handleCounterClick}
              contClassName=" absolute right-0 top-0
                w-[60px] h-[60px] text-[24px] font-black bg-slate-300 xl:hidden cursor-pointer"
              className={`w-full p-3 text-[24px] ${counterActive ? "bg-[#FAB130]" : "bg-[#675C98]"}`}
            />
          </div>
        ) : (
          <></>
        )}
        <div>
          {weatherActive ? (
            <CounterPalette
              className="absolute left-[-3%] top-full z-0 -translate-y-[60%]"
              countData={weathers}
            />
          ) : (
            <></>
          )}
          {counterActive ? (
            <CounterPalette
              className="absolute right-[-4%] top-full z-0 -translate-y-[50%]"
              countData={[5, 10, 15, 20, 25, 30, 35, 40, 45, 50]}
            />
          ) : (
            <></>
          )}
        </div>
      </div>

      <div className="mx-auto mb-9 flex w-full flex-wrap items-start justify-center gap-3 md:w-[470px] md:justify-between md:gap-0">
        <Dropdown />
        <Dropdown />
        <Dropdown />
      </div>
      <div className="mx-auto mb-9 flex w-[160px] justify-between text-white">
        <section className="flex flex-col items-center gap-1 font-extrabold text-yellow-light">
          <Image alt="public" src={PublicJournal} />
          public
        </section>
        <section className="flex flex-col items-center gap-1 font-extrabold text-slate-200">
          <Image alt="public" src={PrivateJournal} />
          private
        </section>
      </div>
      <div className="mx-auto mb-9 flex w-[329px] items-center justify-between text-white">
        <p className="font-extrabold text-slate-200">switches:</p>
        <section className="flex items-center gap-2 font-semibold text-white">
          {checked.before ? (
            <Image
              alt="checkbox"
              src={Check}
              onClick={() => {
                setChecked({ ...checked, before: false });
              }}
            />
          ) : (
            <Image
              alt="checkbox"
              src={Uncheck}
              onClick={() => {
                setChecked({ ...checked, before: true });
              }}
            />
          )}
          before
        </section>
        <section className="flex items-center gap-2 font-semibold text-white">
          {checked.after ? (
            <Image
              alt="checkbox"
              src={Check}
              onClick={() => {
                setChecked({ ...checked, after: false });
              }}
            />
          ) : (
            <Image
              alt="checkbox"
              src={Uncheck}
              onClick={() => {
                setChecked({ ...checked, after: true });
              }}
            />
          )}
          after
        </section>
      </div>
      <div className="mx-auto mb-9 flex h-[30px] w-[203px] items-center -space-x-3">
        <CommentSec />
      </div>
      <div className="mx-auto mb-9 flex w-[244px] items-center">
        <button
          ref={publishBtnRef}
          className="h-[59px] w-full border-2 bg-yellow-light text-[28px] font-extrabold text-[#8858B5]"
        >
          publish
        </button>
      </div>

      <div className="z-0 flex w-full items-center justify-between bg-[#8858B5b9] p-3 sm:hidden">
        <Image src={Oct} alt="octagon" />
        <Image src={Oct} alt="octagon" />
        <Image src={Oct} alt="octagon" />
        <Image src={ToggleIcon} alt="toggle" className="" />
        <section className="flex flex-col items-center gap-3">
          <Image src={PrivateIcon} alt="private" />
          {/* <span className="text-slate-300 text-[14px]">private</span> */}
        </section>
      </div>
    </>
  );
};

export default Screen3;
