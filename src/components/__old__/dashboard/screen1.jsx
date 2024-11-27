"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { biome, dna, health } from "./data.js";

import ADash from "@/public/assets/dashboard/active-dash.svg";
import BannerImage from "@/public/assets/dashboard/banner-image.jpg";
import Dash from "@/public/assets/dashboard/dash.svg";
import DropArrow from "@/public/assets/dashboard/drop-arrow.svg";
import Toggle from "@/public/assets/dashboard/toggle.svg";
import Check from "@/public/assets/journal_creation/check.svg";
import Uncheck from "@/public/assets/journal_creation/uncheck.svg";

import LandingScreen from "@/src/components/__old__/container/landing_screen";
import useClipBuilder from "@/src/hooks/clip_path_calculations";
import { useDashboardFooterStore } from "@/src/store/DashboardFooterStore.js";
import StackedBarChart from "./barChart";
import SentimentChart from "./verticalChart";
import StreamGraph from "./waveChart";

const WaveChartCard = ({ heading = "", data = null, spheres = null }) => {
  const [active, setActive] = useState({ id: 1 });
  const contRef = useRef();
  const clr1Ref = useRef();
  const clr2Ref = useRef();

  const { rectClip, octagonClip } = useClipBuilder();

  const handleMoreClick = (e) => {
    e.currentTarget.classList.toggle("rotate-180");
    contRef.current.classList.toggle("h-[556px]");
  };

  const handleClick = (e) => {
    setActive({ id: e.currentTarget.dataset.id });
  };

  useEffect(() => {
    octagonClip(clr1Ref);
    octagonClip(clr2Ref);

    rectClip(contRef, 5, 5, true);
  }, []);

  if (!data || !spheres) {
    return <></>;
  }
  return (
    <div
      ref={contRef}
      className="pseudo-clip-path relative h-[340px] w-[400px] py-[15px] text-white transition-all before:left-0 before:top-0 before:bg-[rgba(0,0,0,0.5)]"
    >
      <div className="flex h-full w-full flex-col items-center space-y-[24px] overflow-hidden">
        <strong className="text-center text-[24px] text-yellow-light">
          {heading}
        </strong>

        <StreamGraph data={data} />

        <div className="flex min-h-[61px] w-full cursor-pointer items-end justify-center gap-6 bg-gradient-to-b from-[#605e69] to-transparent pb-1 text-[16px] text-slate-300">
          {spheres.map((z, i) => (
            <span
              key={i}
              className={`font-bold ${active.id == i ? "text-yellow-light" : "text-white"}`}
              data-id={i}
              onClick={handleClick}
            >
              {z.name}
            </span>
          ))}
        </div>

        {/* dropdown */}
        <div className="!mt-2 w-[260px] text-[16px]">
          {spheres[active.id].data.map((z, i) => (
            <section
              key={i}
              className="flex items-center justify-between border-b-2 border-purple-700 py-2"
            >
              <span>{z.name}</span>
              <span className="font-bold">{z.value}</span>
            </section>
          ))}
        </div>
      </div>
      <section className="absolute left-0 top-full grid w-full -translate-y-1/2 place-items-center">
        <Image
          src={DropArrow}
          alt="show more"
          className="cursor-pointer select-none transition-all"
          onClick={handleMoreClick}
        />
      </section>
    </div>
  );
};

const VerticalChartCard = ({ heading = "", data = null }) => {
  const contRef = useRef();
  const clr1Ref = useRef();
  const clr2Ref = useRef();

  const { rectClip, octagonClip } = useClipBuilder();

  const handleMoreClick = (e) => {
    e.currentTarget.classList.toggle("rotate-180");
    contRef.current.classList.toggle("h-[800px]");
  };

  useEffect(() => {
    octagonClip(clr1Ref);
    octagonClip(clr2Ref);

    rectClip(contRef, 3, 3, true);
  }, []);

  if (!data) {
    return <></>;
  }

  return (
    <div
      ref={contRef}
      className="pseudo-clip-path relative h-[660px] w-[400px] px-[30px] py-[30px] text-white transition-all before:left-0 before:top-0 before:bg-[rgba(0,0,0,0.5)]"
    >
      <div className="flex h-full w-full flex-col items-center gap-6 overflow-hidden">
        <strong className="text-[24px] text-yellow-light">{heading}</strong>

        <SentimentChart data={data} />

        <div className="flex w-[237px] items-center justify-between text-white">
          <section className="flex items-center">
            <i
              ref={clr1Ref}
              className="mr-3 block aspect-square w-[16px] bg-[#6D35BE]"
            ></i>
            <span className="font-bold">activations</span>
          </section>
          <section className="flex items-center">
            <i
              ref={clr2Ref}
              className="mr-3 block aspect-square w-[16px] bg-[#9C6400]"
            ></i>
            <span className="font-bold">releases</span>
          </section>
        </div>

        <section className="text-center text-[16px]">
          # of positive amplifications and negative reductions when journaling
          in the Ripples sphere.
        </section>

        {/* dropdown */}
        <div className="w-[150px] text-[16px]">
          {data.sphere_counts.map((z, i) => (
            <section
              key={i}
              className="flex items-center justify-between border-b-2 border-purple-700 py-1"
            >
              <span>{z.name}</span>
              <span className="font-bold">{z.count}</span>
            </section>
          ))}
        </div>
      </div>
      <section className="absolute left-0 top-full grid w-full -translate-y-1/2 place-items-center">
        <Image
          src={DropArrow}
          alt="show more"
          className="cursor-pointer transition-all"
          onClick={handleMoreClick}
        />
      </section>
    </div>
  );
};

const StackedBarChartCard = ({ heading = "", data = null }) => {
  const [comment, setComment] = useState(false);
  const buttonRef = useRef();

  const contRef = useRef();
  const clr1Ref = useRef();
  const clr2Ref = useRef();

  const { rectClip, octagonClip, hexagonClip } = useClipBuilder();

  const handleClick = () => {
    setComment(!comment);
  };

  useEffect(() => {
    hexagonClip(buttonRef, 9, true);

    octagonClip(clr1Ref);
    octagonClip(clr2Ref);

    rectClip(contRef, 3, 3, true);
  }, []);

  if (!data) {
    return <></>;
  }

  return (
    <div
      ref={contRef}
      className="pseudo-clip-path relative h-[560px] w-[400px] px-[30px] py-[15px] text-white transition-all before:left-0 before:top-0 before:bg-[rgba(0,0,0,0.5)]"
    >
      <div className="flex h-full w-full flex-col items-center gap-6 overflow-hidden">
        <strong className="text-[24px] text-yellow-light">{heading}</strong>

        <StackedBarChart data={data} heading={heading} />

        <div className="flex w-[267px] items-center justify-between text-white">
          <section className="flex items-center">
            <i
              ref={clr1Ref}
              className="mr-3 block aspect-square w-[16px] bg-[#848484]"
            ></i>
            <span className="font-bold">no switches</span>
          </section>
          <section className="flex items-center">
            <i
              ref={clr2Ref}
              className={`mr-3 block aspect-square w-[16px] bg-[#578CD3]`}
            ></i>
            <span className="font-bold">switches</span>
          </section>
        </div>
      </div>
      {/* <section className="absolute left-0 top-full -translate-y-1/2 w-full grid place-items-center">
        <Image src={DropArrow} alt="show more" className="cursor-pointer transition-all" onClick={handleMoreClick} />
      </section> */}
      <button
        onClick={handleClick}
        ref={buttonRef}
        className={`pseudo-clip-path absolute left-1/2 top-full z-10 h-[30px] w-[104px] -translate-x-1/2 -translate-y-1/2 cursor-pointer select-none font-bold text-yellow-light before:left-0 before:top-0 before:bg-[#564A8D] ${comment ? "px-6 text-end" : "px-4 text-start"} `}
      >
        {comment ? "after" : "before"}
        <Image
          src={Toggle}
          alt="toggle"
          className={`absolute top-1/2 ${comment ? "left-0" : "left-full"} -translate-x-1/2 -translate-y-1/2`}
        />
      </button>
    </div>
  );
};

const Screen1 = ({ type = "biome" }) => {
  const router = useRouter();

  const [checked, setChecked] = useState({ switches: true });
  const [activeTime, setActiveTime] = useState({ id: 1 });
  const sliderContRef = useRef();

  const { hexagonClip } = useClipBuilder();

  const handleTimeClick = (e) => {
    setActiveTime({ id: e.currentTarget.dataset.id });
  };

  useEffect(() => {
    hexagonClip(sliderContRef, 6, true);

    document.body.style.background = "#3F3676";

    return () => {
      document.body.style.background = "#7369A0";
    };
  }, []);

  //const footerOpen = useSelector(footerToggle);
  const { footerOpen } = useDashboardFooterStore();

  const navCounts = new Array(9).fill(0);
  if (type.includes("biome")) {
    navCounts[3] = 1;
  } else if (type.includes("health")) {
    navCounts[5] = 1;
  } else if (type.includes("dna")) {
    navCounts[4] = 1;
  }

  const handleNav = (e) => {
    const id = e.currentTarget.dataset.id - 0;

    if (id == 3) {
      router.push("/dashboard/inner-biome");
    } else if (id == 5) {
      router.push("/dashboard/inner-health");
    } else if (id == 4) {
      router.push("/dashboard/inner-dna");
    }
  };

  return (
    <LandingScreen image={BannerImage} border={false}>
      <div className="absolute left-1/2 mt-[160px] flex -translate-x-1/2 flex-col items-center gap-12">
        <div className="flex w-[442px] items-center overflow-hidden">
          {navCounts.map((z, i) => (
            <Image
              data-id={i}
              onClick={handleNav}
              src={z ? ADash : Dash}
              alt="navs"
              key={i}
              className="-translate-x-1/2"
            />
          ))}
        </div>

        <div className="grid place-items-center">
          <section
            className="pseudo-clip-path relative h-[24px] w-[240px] before:bg-[#564A8D]"
            ref={sliderContRef}
          >
            <Image
              src={Toggle}
              alt="handle"
              className={`absolute top-1/2 -translate-x-1/2 -translate-y-1/2 ${activeTime.id == 1 ? "left-[20px]" : ""} ${activeTime.id == 2 ? "left-1/2" : ""} ${activeTime.id == 3 ? "left-[92%]" : ""}`}
            />
          </section>
          <section className="mt-3 flex w-[285px] items-center justify-between text-center text-white">
            <span
              className={`w-[85px] cursor-pointer font-semibold ${activeTime.id == 1 ? "text-yellow-light" : ""}`}
              data-id={1}
              onClick={handleTimeClick}
            >
              me
            </span>
            <span
              className={`w-[85px] cursor-pointer font-semibold ${activeTime.id == 2 ? "text-yellow-light" : ""}`}
              data-id={2}
              onClick={handleTimeClick}
            >
              us
            </span>
            <span
              className={`w-[85px] cursor-pointer font-semibold ${activeTime.id == 3 ? "text-yellow-light" : ""}`}
              data-id={3}
              onClick={handleTimeClick}
            >
              future
            </span>
          </section>
        </div>

        {type.includes("health") ? (
          <div className="flex items-center gap-6 text-[24px] text-white">
            <p className="font-bold">journals +</p>
            <section className="flex items-center gap-3">
              {checked.switches ? (
                <Image
                  alt="checkbox"
                  src={Check}
                  onClick={() => {
                    setChecked({ ...checked, switches: false });
                  }}
                />
              ) : (
                <Image
                  alt="checkbox"
                  src={Uncheck}
                  onClick={() => {
                    setChecked({ ...checked, switches: true });
                  }}
                />
              )}
              <p>switches + wellgorithms</p>
            </section>
          </div>
        ) : (
          <></>
        )}
      </div>

      <div
        className={`${footerOpen ? "hidden" : ""} ${type.includes("biome") ? "top-[60%]" : ""} ${type.includes("health") ? "top-[80%]" : ""} ${type.includes("dna") ? "top-[60%]" : ""} absolute left-[50%] flex h-fit w-[1260px] translate-x-[-50%] flex-wrap justify-center gap-7 pb-10`}
      >
        {/* <RadarChartCard />
        <RadarChartCard />
        <RadarChartCard /> */}
        {type.includes("biome") ? (
          <>
            {biome.map((z, i) => (
              <VerticalChartCard key={i} heading={z.name} data={z.data} />
            ))}
          </>
        ) : (
          <></>
        )}
        {type.includes("dna") ? (
          <>
            {dna.map((z, i) => (
              <WaveChartCard
                key={i}
                heading={z.name}
                data={z.data}
                spheres={z.spheres}
              />
            ))}
          </>
        ) : (
          <></>
        )}
        {type.includes("health") ? (
          <>
            {health.map((z, i) => (
              <StackedBarChartCard key={i} heading={z.name} data={z.data} />
            ))}
          </>
        ) : (
          <></>
        )}
      </div>
    </LandingScreen>
  );
};

export default Screen1;
