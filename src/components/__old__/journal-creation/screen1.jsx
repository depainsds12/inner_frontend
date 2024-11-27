"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import CloseHelp from "@/public/assets/journal_creation/close_help.svg";
import Oct from "@/public/assets/journal_creation/icons/oct.svg";
import PrivateIcon from "@/public/assets/journal_creation/icons/private.svg";
import Toggle from "@/public/assets/journal_creation/icons/toggle.svg";
import WeatherIcon from "@/public/assets/journal_creation/icons/weather_icon.svg";
import AIQuestion from "@/public/assets/journal_creation/question.svg";
import BannerImage from "@/public/assets/wellgorithm_spheres/background.png";

import Cloudy from "@/public/assets/searchdrawer/cloudy.svg";
import Rain from "@/public/assets/searchdrawer/rain.svg";
import Rainbow from "@/public/assets/searchdrawer/rainbow.svg";
import SunCloud from "@/public/assets/searchdrawer/sun-cloud.svg";
import Sun from "@/public/assets/searchdrawer/sun.svg";

import LandingScreen from "@/src/components/__old__/container/landing_screen";
import ScrollContainer from "@/src/components/__old__/container/scroll";
import CounterPalette from "@/src/components/__old__/counter_palette";
import LabelComponent from "@/src/components/__old__/label";
import OctagonCounter from "@/src/components/__old__/octagon_counter";
import Octagon from "@/src/components/__old__/octagons/Octagon";
import TextInBrackets from "@/src/components/__old__/texts/text_in_brackets";

import SlateEditor from "./draft_editor";

import useClipBuilder from "@/src/hooks/clip_path_calculations";

import AiHumanMeterH from "@/src/components/__old__/ai_human_meter/AiHumanMeterH";
import { STEPS } from "@/src/components/__old__/journal-creation/index";
import { useBigTrapezoidStore } from "@/src/store/BigTrapezoidStore";
import { useSphereFilterStore } from "@/src/store/SphereFilterStore";

const HeadingLabel = ({ step = 1 }) => {
  return (
    <LabelComponent
      shape="hexagon"
      angle={30}
      className={`gap-2 py-5 ${step >= STEPS.journal ? "bg-[#564A8D]" : "bg-[#8858B5]"} xl:text-hl z-20 w-[350px] text-[28px] md:w-[560px] md:text-[32px]`}
      text={["", step >= STEPS.journal ? "title" : "choose your sphere"]}
      textClasses={`font-semibold ${step >= STEPS.journal ? "text-yellow-light" : "text-white"}`}
      containerClassName="absolute top-0 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-white p-[3px]"
    />
  );
};
const HeadingInputs = ({ step = 1 }) => {
  const contElementRef = useRef(null);
  const elementRef = useRef(null);

  const { hexagonClip } = useClipBuilder();

  useEffect(() => {
    hexagonClip(contElementRef, 30);
    hexagonClip(elementRef, 30 * 0.95);
  }, [step]);

  return (
    <>
      <div
        ref={contElementRef}
        className="absolute left-1/2 top-0 h-[103px] w-[350px] translate-x-[-50%] translate-y-[-50%] bg-white p-[3px] py-[2px] md:w-[560px]"
      >
        <section
          ref={elementRef}
          className="md:text-hm xl:text-hl relative grid h-full w-full place-items-center bg-[#564A8D] text-sm text-yellow-light"
        >
          <input
            type="text"
            placeholder="title"
            name="title"
            className="inline w-full bg-transparent text-center outline-none placeholder:font-extrabold placeholder:text-yellow-light"
          />
        </section>
      </div>

      <div className="w-full">
        <input
          placeholder="subtitle"
          className="w-full bg-transparent text-center outline-none placeholder:text-slate-100"
        />
      </div>
    </>
  );
};

let meterActive = false;
const AIMeter = () => {
  const [openHelp, setOpenHelp] = useState(false);

  const helpBoxRef = useRef();
  const sliderValueRef = useRef();

  const contElementRef = useRef();
  const elementRef = useRef();

  const { rectClip } = useClipBuilder();

  useEffect(() => {
    if (innerWidth >= 1280) {
      rectClip(contElementRef, 0, 3);
      rectClip(elementRef, 0, 3);

      rectClip(helpBoxRef, 3, 3);
    }
  }, [openHelp]);

  return (
    <div className="absolute top-full z-50 w-full border-0 xl:w-fit">
      <div
        ref={contElementRef}
        className="pseudo-clip-path grid h-[299px] place-items-center bg-white px-[2px] pb-[2px] max-xl:w-full xl:w-[564px]"
      >
        <div
          ref={elementRef}
          className="pseudo-clip-path flex h-full w-full flex-col items-center justify-between bg-[#358D51] py-9 pb-12 text-white"
        >
          <strong className="text-[32px]">
            <span className="font-extrabold">AI</span>
            <span className="font-extrabold text-yellow-light"> humometer</span>
          </strong>
          {/* <input type="range" className="ai-meter-slider" /> */}

          {/* slider here */}
          <AiHumanMeterH />

          {/* <div className="relative border-yellow-light border-2 w-[450px] h-[30px] ai-meter-slider" ref={sliderContRef}>
            <section className="absolute top-1/2 -translate-y-1/2 grid place-items-center cursor-pointer" ref={sliderRef}>
              <Image src={RangeHook} alt="range-hook" />
              <span className="absolute text-[24px] font-semibold">0</span>
            </section>
          </div> */}
          <section className="text-center">
            <p className="flex items-center gap-1 text-[24px] font-semibold text-yellow-light">
              <TextInBrackets
                text="compassion"
                className="w-[58%] fill-[#FFF200] font-semibold text-white"
                thin={{ apply: true, width: 2, color: "#358D51" }}
              />
              compast
            </p>
            <p className="text-[16px] font-semibold">
              was <span className="font-semibold text-yellow-dark">50%</span>{" "}
              written by me.
            </p>
          </section>
        </div>
      </div>

      <Image
        alt="help"
        src={openHelp ? CloseHelp : AIQuestion}
        onClick={() => setOpenHelp(!openHelp)}
        className="absolute left-1/2 top-full z-50 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
      />

      {openHelp && (
        <div
          className="absolute left-1/2 top-full flex h-[460px] w-full -translate-x-1/2 flex-col items-center justify-center gap-3 bg-white max-sm:px-2 xl:w-[818px]"
          ref={helpBoxRef}
        >
          <h2 className="text-left text-[32px] font-black text-[#564A8D] max-sm:w-[350px] max-sm:text-[24px] sm:w-[650px] xl:w-[580px]">
            How to Calculate Your AI/Human Authorship Ratio
          </h2>
          <ul className="ml-0 w-[643px] list-inside list-disc text-[16px] font-medium max-sm:w-full max-sm:px-4">
            <li>
              Direction, True North, Big Ideas: 20% of the total contribution is
              based on the initial direction and big ideas provided by the
              human.
            </li>
            <li>
              Spine, All Main Points: 20% is attributed to outlining the main
              points of the journal entry, distributed proportionally if they
              vary in significance.
            </li>
            <li>
              Point Details, Language: 20% is for the details and language used
              to elaborate on the points, again distributed proportionally if
              they vary.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

const Screen1 = ({ step = 0, setStep = () => {} }) => {
  const [counterActive, setCounterActive] = useState(false);
  const [weatherActive, setWeatherActive] = useState(false);

  const showMoreBtnRef = useRef();

  //const sphereFilter = useSelector(currentSphereFilter);
  const { sphereFilter } = useSphereFilterStore();
  //const selectedData = useSelector(state => state.bigTrapezoid.selectedData);
  const { selectedData, changeData, changeBigTrapezoidPosition } =
    useBigTrapezoidStore();

  const { hexagonClip } = useClipBuilder();

  useEffect(() => {
    hexagonClip(showMoreBtnRef, 9);
  }, []);

  useEffect(() => {
    if (selectedData) {
      setStep(STEPS.journal);
    } else if (sphereFilter) {
      setStep(STEPS.zone);
    }
  }, [sphereFilter, selectedData]);

  //const dispatch = useDispatch()
  const fetchZones = async () => {
    console.log("Inside fetch zones");
    try {
      const zonesFetchResponse = await fetch(
        `${process.env.NEXT_PUBLIC_APP_BASEURL}/fetch/zone`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            depth: 1,
            where: {
              rank: {
                less_than_equal: 8,
              },
              "sphere.name": {
                equals: sphereFilter,
              },
            },
            limit: 8,
          }),
        },
      );

      const zonesFetchResult = await zonesFetchResponse.json();

      if (zonesFetchResult.success && zonesFetchResult?.data?.totalDocs > 0) {
        const zones = [];

        zonesFetchResult?.data?.docs?.map((zone, i) => {
          zones.push({
            keyword: {
              name: zone.name,
              color: "#D4D1EC",
              font: "Verdana",
              weight: "normal",
            },
            icon: {
              url: zone.icon.url,
              color: "#696392",
            },
            pos: i + 1,
          });
        });

        //dispatch(
        changeData(
          {
            inner_octagon: {
              avatar: "/assets/avatar/vrAvatar.jpg",
              color: "transparent",
              stroke: {
                value: 5,
                color: "#FFF200",
              },
            },
            main_octagon: {
              background: {
                color: "#3E3477",
                stroke: {
                  value: 5,
                  color: "#BEC1CE",
                },
              },
              non_selected_zones: {
                color: "#696392",
                weight: 6,
              },
              zones: zones,
            },
          },
          //)
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    //dispatch(
    changeBigTrapezoidPosition({ position: 0, data: null });
    //)
    console.log("Req to fetch zones");
    fetchZones();
  }, [sphereFilter]);

  const [radius, setRadius] = useState();
  const level = [1, 2];

  useEffect(() => {
    if (innerWidth >= 1280) {
      setRadius(150);
    } else if (innerWidth >= 780) {
      setRadius(90);
    } else {
      setRadius(50);
    }
  }, []);
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

  return (
    <>
      {/* <Palette /> */}
      <LandingScreen
        image={BannerImage}
        className={`realtive ${step >= STEPS.journal && "z-30 mb-[83vh] sm:mb-[56vh] xl:mb-[75vh]"}`}
      >
        {step >= STEPS.zone && (
          <>
            <Octagon
              radius={radius}
              gap={innerWidth}
              level={level}
              className="max-xl:mt-[6%] max-sm:mb-[33%] max-sm:mt-0 xl:mb-[2%]"
            />

            <div className="absolute left-0 top-0 z-0 hidden w-full justify-between bg-[#8858B5b9] px-10 py-3 sm:flex">
              <section className="flex gap-3">
                <Image src={Oct} alt="octagon" />
                <Image src={Oct} alt="octagon" />
                <Image src={Oct} alt="octagon" />
                <Image src={Toggle} alt="toggle" className="ml-6" />
              </section>
              <section className="flex flex-col items-center gap-3">
                <Image src={PrivateIcon} alt="private" />
                <span className="text-[14px] text-slate-300">private</span>
              </section>
            </div>

            <ScrollContainer
              headChild={
                step >= STEPS.journal ? (
                  <HeadingInputs step={step} />
                ) : (
                  <HeadingLabel step={step} />
                )
              }
              headClassName={`h-[201px] text-[20px] lg:text-cm py-10 pt-16 md:pt-20 px-6 md:px-12 lg:px-32
               font-semibold ${step >= STEPS.journal ? "before:bg-[#8858B5]" : "before:bg-[#564A8D] text-white"} 
               drop-shadow-clip-outline-white-bold`}
              containerClassName="absolute top-full translate-y-[-50%] w-full xl:w-[921px] z-20 mb-[300px]"
              //  drop-shadow-clip-outline-white-bold
              bodyClassName="mb-10 flex flex-col items-center p-0 h-[324px] w-full"
              translateHead={true}
              bodyAngle={3}
              showBody={step >= STEPS.journal}
            >
              {step >= STEPS.journal ? (
                <>
                  <SlateEditor />
                  <AIMeter />
                </>
              ) : (
                <></>
              )}
              {/* <button className="absolute top-full translate-y-[-50%] bg-[#A262A1] text-yellow-light p-2 px-12
              font-semibold text-[20px]"
              ref={showMoreBtnRef} onClick={handleMoreClick}>
                {
                  more ? "more about wellgorithm" : "more"
                }
              </button> */}
            </ScrollContainer>
          </>
        )}

        {step >= STEPS.journal ? (
          <>
            <Image
              src={WeatherIcon}
              alt="weather"
              className={`absolute left-[calc(50%-461px-6%)] top-full z-40 -translate-x-1/2 -translate-y-1/2 cursor-pointer max-xl:hidden`}
              onClick={handleWeatherClick}
            />
            {/* ${counterActive ? "bg-[#FAB130]" : "bg-[#675C98]"} */}

            <OctagonCounter
              count={20}
              onClick={handleCounterClick}
              contClassName="absolute top-full -translate-y-1/2
                z-40 left-[calc(50%+461px+6%)] -translate-x-1/2 w-[86px] text-[30px] bg-slate-300 p-[3px] max-xl:hidden cursor-pointer"
              className={`w-full p-3 text-[32px] ${counterActive ? "bg-[#FAB130]" : "bg-[#675C98]"}`}
            />
          </>
        ) : (
          <></>
        )}
        {weatherActive ? (
          <CounterPalette
            className="absolute left-[calc(50%-461px-6%)] top-full z-10 -translate-x-1/2 -translate-y-1/2"
            countData={weathers}
          />
        ) : (
          <></>
        )}
        {counterActive ? (
          <CounterPalette
            className="absolute left-[calc(50%+461px+6%)] top-full z-10 -translate-x-1/2 -translate-y-1/2"
            countData={[5, 10, 15, 20, 25, 30, 35, 40, 45, 50]}
          />
        ) : (
          <></>
        )}
      </LandingScreen>
    </>
  );
};

export default Screen1;
