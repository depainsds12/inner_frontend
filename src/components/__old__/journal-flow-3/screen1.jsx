"use client";
import ActivationsOff from "@/public/assets/journal-flow/activations-icon-off.svg";
import ActivationsIcon from "@/public/assets/journal-flow/activations-icon.svg";
import AmplifiersOff from "@/public/assets/journal-flow/amplifiers-icon-off.svg";
import Amplifiers from "@/public/assets/journal-flow/amplifiers-icon.svg";
import BannerImage from "@/public/assets/journal-flow/banner-image.jpg";
import InfusionsOff from "@/public/assets/journal-flow/infusions-icon-off.svg";
import InfusionsIcon from "@/public/assets/journal-flow/infusions-icon.svg";
import RightArrow from "@/public/assets/journal-flow/right-arrow.svg";
import Oct from "@/public/assets/journal_creation/icons/oct.svg";
import PrivateIcon from "@/public/assets/journal_creation/icons/private.svg";
import LandingScreen from "@/src/components/__old__/container/landing_screen";
import useClipBuilder from "@/src/hooks/clip_path_calculations";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import FlowSlider from "@/src/components/__old__/journal-flow-3/flow-slider";
import Infusions from "@/src/components/__old__/journal-flow-3/infusions";
import Toggle from "@/src/components/__old__/journal-flow-3/toggle";
import { useBigTrapezoidStore } from "@/src/store/BigTrapezoidStore";
import { useSphereFilterStore } from "@/src/store/SphereFilterStore";
import { STEPS } from "./index";
import Activations from "./activations";
import Amplifier from "./amplifier";

const Screen1 = ({ setStep = () => {} }) => {
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

  //const sphereFilter = useSelector(currentSphereFilter);
  const { sphereFilter } = useSphereFilterStore();
  //const selectedData = useSelector((state) => state.bigTrapezoid.selectedData);
  const { selectedData } = useBigTrapezoidStore();

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

  useEffect(() => {
    if (selectedData) {
      setStep(STEPS.journal);
    } else if (sphereFilter) {
      setStep(STEPS.zone);
    }
  }, [sphereFilter, selectedData]);

  const [dimension, setdimension] = useState();

  const [dimensionsDisplay, setDimensionsDisplay] = useState(false);
  const dimensionDisplay = () => {
    console.log("CALLED");
    setDimensionsDisplay(!dimensionsDisplay);
  };

  const [points, setPoints] = useState(0);

  const [stage, setStage] = useState();

  const [flowSliderPage, setFlowSliderPage] = useState(true);
  const [activationsPage, setActivationsPage] = useState(false);
  const [infusionsPage, setInfusionsPage] = useState(false);
  const [amplifiersPage, setAmplifiersPage] = useState(false);

  return (
    <div className="relative h-[640px] w-full xl:h-[540px]">
      {/* <Palette /> */}
      <LandingScreen
        image={BannerImage}
        className={`realtive grid h-[640px] place-items-center sm:h-[800px] xl:!h-[540px]`}
        clip="authBannerClip"
        outerAngle={11}
        innerAngle={4}
      >
        <>
          <div
            className={`absolute left-[3%] flex h-[150px] w-[148px] flex-col justify-between max-xl:hidden`}
          >
            <div
              className="cursor-pointer items-center gap-3 xl:flex"
              onClick={(e) => {
                setActivationsPage(!activationsPage);
                setInfusionsPage(false);
                setAmplifiersPage(false);
                {
                  !activationsPage ? setStage("Activations") : setStage("");
                }
              }}
            >
              <Image
                src={stage === "Activations" ? ActivationsIcon : ActivationsOff}
                alt="activation-icon"
                className="h-[30px] w-[30px]"
              />
              <h2
                className={`${stage === "Activations" ? "block" : "hidden"} text-[18px] font-extrabold text-yellow-light`}
              >
                Activations
              </h2>
            </div>

            <div
              className="cursor-pointer items-center gap-3 xl:flex"
              onClick={(e) => {
                setInfusionsPage(!infusionsPage);
                setAmplifiersPage(false);
                setActivationsPage(false);
                {
                  !infusionsPage ? setStage("Infusions") : setStage("");
                }
              }}
            >
              <Image
                src={stage === "Infusions" ? InfusionsIcon : InfusionsOff}
                alt="infusions-icon"
                className="h-[30px] w-[30px]"
              />
              <h2
                className={`${stage === "Infusions" ? "block" : "hidden"} text-[18px] font-extrabold text-yellow-light`}
              >
                Infusions
              </h2>
            </div>

            <div
              className="cursor-pointer items-center gap-3 xl:flex"
              onClick={(e) => {
                setAmplifiersPage(!amplifiersPage);
                setActivationsPage(false);
                setInfusionsPage(false);
                {
                  !amplifiersPage ? setStage("Amplifiers") : setStage("");
                }
              }}
            >
              <Image
                src={stage === "Amplifiers" ? Amplifiers : AmplifiersOff}
                alt="amplifiers-icon"
                className="h-[30px] w-[30px]"
              />
              <h2
                className={`${stage === "Amplifiers" ? "block" : "hidden"} text-[18px] font-extrabold text-yellow-light`}
              >
                Amplifiers
              </h2>
            </div>
          </div>

          <div
            className={`absolute left-[50%] top-44 flex h-[40px] w-[200px] translate-x-[-50%] justify-between xl:hidden`}
          >
            <div
              className="cursor-pointer justify-between xl:flex"
              onClick={(e) => {
                setStage("Activations");
              }}
            >
              <Image
                src={stage === "Activations" ? ActivationsIcon : ActivationsOff}
                alt="activation-icon"
                className="h-[40px] w-[40px]"
              />
            </div>

            <div
              className="cursor-pointer justify-between xl:flex"
              onClick={(e) => {
                setStage("Infusions");
              }}
            >
              <Image
                src={stage === "Infusions" ? InfusionsIcon : InfusionsOff}
                alt="infusions-icon"
                className="h-[40px] w-[40px]"
              />
            </div>

            <div
              className="cursor-pointer justify-between xl:flex"
              onClick={(e) => {
                setStage("Amplifiers");
              }}
            >
              <Image
                src={stage === "Amplifiers" ? Amplifiers : AmplifiersOff}
                alt="amplifiers-icon"
                className="h-[40px] w-[40px]"
              />
            </div>
          </div>
        </>

        <>
          <div className="absolute left-0 top-0 z-0 flex h-[80px] w-full items-center justify-between bg-[#8858B5b9] px-10 py-3 max-sm:px-3 xl:h-[89px]">
            <section className="flex items-center gap-3">
              <Image src={Oct} alt="octagon" className="h-[50px]" />
              <Image src={Oct} alt="octagon" className="h-[50px]" />
              <Image src={Oct} alt="octagon" className="h-[50px]" />
              <Toggle className="ml-4" />
            </section>
            <section className="flex w-[622px] justify-between text-[18px] font-semibold text-[#D5D1ED] max-xl:hidden">
              <h2
                className={`cursor-pointer ${
                  dimension === "flow" ? "font-bold text-yellow-light" : ""
                }`}
                onClick={(e) => {
                  setdimension(e.target.innerHTML);
                }}
              >
                flow
              </h2>
              <h2
                className={`cursor-pointer ${
                  dimension === "resilience"
                    ? "font-bold text-yellow-light"
                    : ""
                }`}
                onClick={(e) => {
                  setdimension(e.target.innerHTML);
                }}
              >
                resilience
              </h2>
              <h2
                className={`cursor-pointer ${
                  dimension === "balance" ? "font-bold text-yellow-light" : ""
                }`}
                onClick={(e) => {
                  setdimension(e.target.innerHTML);
                }}
              >
                balance
              </h2>
              <h2
                className={`cursor-pointer ${
                  dimension === "symbiosis" ? "font-bold text-yellow-light" : ""
                }`}
                onClick={(e) => {
                  setdimension(e.target.innerHTML);
                }}
              >
                symbiosis
              </h2>
              <h2
                className={`cursor-pointer ${
                  dimension === "metamorphosis"
                    ? "font-bold text-yellow-light"
                    : ""
                }`}
                onClick={(e) => {
                  setdimension(e.target.innerHTML);
                }}
              >
                metamorphosis
              </h2>
            </section>
            <section className="flex flex-col items-center gap-3">
              <Image src={PrivateIcon} alt="private" />
              <span className="text-[14px] text-slate-300 max-sm:hidden">
                private
              </span>
            </section>
          </div>

          <div className="absolute top-[84px] z-0 flex h-[50px] w-screen items-center bg-[#8858B5] pl-2 xl:hidden">
            <div
              className={`flex gap-3 text-[18px] font-semibold text-[#D5D1ED] ${
                dimensionsDisplay ? "w-[498px]" : "w-[48px]"
              } scrollbar-hide overflow-hidden transition-all duration-500 max-sm:overflow-x-auto`}
            >
              <h2
                className={`cursor-pointer ${
                  dimension === "flow" ? "font-bold text-yellow-light" : ""
                }`}
                onClick={(e) => {
                  setdimension(e.target.innerHTML);
                }}
              >
                flow
              </h2>
              <h2
                className={`cursor-pointer ${
                  dimension === "resilience"
                    ? "font-bold text-yellow-light"
                    : ""
                }`}
                onClick={(e) => {
                  setdimension(e.target.innerHTML);
                }}
              >
                resilience
              </h2>
              <h2
                className={`cursor-pointer ${
                  dimension === "balance" ? "font-bold text-yellow-light" : ""
                }`}
                onClick={(e) => {
                  setdimension(e.target.innerHTML);
                }}
              >
                balance
              </h2>
              <h2
                className={`cursor-pointer ${
                  dimension === "symbiosis" ? "font-bold text-yellow-light" : ""
                }`}
                onClick={(e) => {
                  setdimension(e.target.innerHTML);
                }}
              >
                symbiosis
              </h2>
              <h2
                className={`cursor-pointer ${
                  dimension === "metamorphosis"
                    ? "font-bold text-yellow-light"
                    : ""
                }`}
                onClick={(e) => {
                  setdimension(e.target.innerHTML);
                }}
              >
                metamorphosis
              </h2>
            </div>

            <Image
              src={RightArrow}
              alt="RightArrow"
              className={`cursor-pointer ${dimensionsDisplay ? "mx-3 rotate-180" : "rotate-0"} transition-all duration-500`}
              onClick={dimensionDisplay}
            />
          </div>
        </>

        <>
          {!activationsPage && !infusionsPage && !amplifiersPage && (
            <FlowSlider
              dimension={dimension}
              setFlowSliderPage={setFlowSliderPage}
              setActivationsPage={setActivationsPage}
            />
          )}
        </>

        <>
          {activationsPage && (
            <Activations
              points={points}
              activationsPage={activationsPage}
              setPoints={setPoints}
            />
          )}
        </>

        <>{infusionsPage && <Infusions />}</>

        <>{amplifiersPage && <Amplifier />}</>
      </LandingScreen>
    </div>
  );
};

export default Screen1;
