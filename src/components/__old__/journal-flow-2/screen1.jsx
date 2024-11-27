"use client";
import PlusIcon from "@/public/assets/journal-flow/plus-sign.svg";
import ReIcon from "@/public/assets/journal-flow/re-icon.svg";
import Oct from "@/public/assets/journal_creation/icons/oct.svg";
import PrivateIcon from "@/public/assets/journal_creation/icons/private.svg";
import BannerImage from "@/public/assets/wellgorithm_spheres/background.png";
import LandingScreen from "@/src/components/__old__/container/landing_screen";
import ScrollContainer from "@/src/components/__old__/container/scroll";
import Toggle from "@/src/components/__old__/journal-flow-3/toggle";
import Octagon from "@/src/components/__old__/octagons/Octagon";
import TextInBrackets from "@/src/components/__old__/texts/text_in_brackets";
import useClipBuilder from "@/src/hooks/clip_path_calculations";
import { useBigTrapezoidStore } from "@/src/store/BigTrapezoidStore";
import { useSphereFilterStore } from "@/src/store/SphereFilterStore";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Screen1 = () => {
  const [more, setMore] = useState(false);
  const showMoreBtnRef = useRef(null);
  const showMoreBtnRefOuter = useRef(null);

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
    octagonClip(iconOctagon);
    octagonClip(iconOctagonOuter);
    octagonClip(pointsOctagonOuter);
    octagonClip(pointsOctagon);
    octagonClip(iconOctagon_2);
    octagonClip(iconOctagonOuter_2);
    octagonClip(pointsOctagonOuter_2);
    octagonClip(pointsOctagon_2);

    hexagonClip(showMoreBtnRef, 9);
  }, [more]);

  const HeadingLabel = () => {
    const headingRef = useRef(null);
    const headingRefOuter = useRef(null);
    const { hexagonClip } = useClipBuilder();

    useEffect(() => {
      hexagonClip(headingRef, 25);
      hexagonClip(headingRefOuter, 25);
    }, []);

    return (
      <div
        className="absolute top-0 !h-[83px] !w-[350px] -translate-y-1/2 bg-white p-[2px] sm:h-[103px] sm:!w-[560px]"
        ref={headingRef}
      >
        <div
          ref={headingRefOuter}
          className="relative flex h-full w-full items-center justify-center bg-[#8858B5] text-[24px] font-black text-yellow-light max-sm:gap-[3px] sm:text-[32px] xl:text-[40px]"
        >
          {!selectedData ? (
            <>
              {" "}
              <TextInBrackets
                text="serenity"
                className="h-full fill-yellow-light text-[24px] font-black text-white max-sm:w-[40%] sm:text-[32px] xl:text-[40px]"
              />
              Sunflowers{" "}
            </>
          ) : (
            <p className="grid h-full w-full place-items-center text-[20px] font-semibold text-white sm:text-[32px]">
              choose your Wellgorithm
            </p>
          )}
        </div>
      </div>
    );
  };

  //const dispatch = useDispatch()
  //const sphereFilter = useSelector(currentSphereFilter);
  const { sphereFilter } = useSphereFilterStore();
  const fetchZones = async () => {
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
                color: "#BEC1CE",
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
    fetchZones();
  }, [sphereFilter]);

  const [radius, setRadius] = useState();
  const level = [1, 2];

  useEffect(() => {
    if (innerWidth >= 768) {
      setRadius(125);
    } else {
      setRadius(90);
    }
  }, []);

  //const selectedData = useSelector(state => state.bigTrapezoid.selectedData);
  const { selectedData, changeBigTrapezoidPosition, changeData } =
    useBigTrapezoidStore();

  useEffect(() => {
    if (selectedData) {
      setMore(true);
    } else {
      setMore(false);
    }
  }, [selectedData]);

  return (
    <section className="h-[150vh]">
      <LandingScreen
        image={BannerImage}
        className="mb-[20vh] grid h-[600px] place-items-center xl:h-[512px]"
      >
        <>
          <div className="absolute left-0 top-0 z-0 flex h-[80px] w-full items-center justify-between bg-[#8858B5b9] px-10 py-3 max-sm:px-3 xl:h-[89px]">
            <section className="flex items-center gap-3">
              <Image src={Oct} alt="octagon" className="h-[50px]" />
              <Image src={Oct} alt="octagon" className="h-[50px]" />
              <Image src={Oct} alt="octagon" className="h-[50px]" />
              <Toggle className="ml-4" />
            </section>

            <section className="flex flex-col items-center gap-3">
              <Image src={PrivateIcon} alt="private" />
              <span className="text-[14px] text-slate-300 max-sm:hidden">
                private
              </span>
            </section>
          </div>
        </>

        <Octagon
          radius={radius}
          gap={radius + radius * 0.1}
          level={level}
          className="z mb-[40%] sm:mb-10"
        />

        <div className="absolute bottom-0 h-fit w-[70%] translate-y-[50%] cursor-pointer max-xl:hidden">
          <div className="relative flex h-full w-full justify-between">
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

            <div className="cursor-pointer">
              <span className="absolute bottom-[-30%] text-nowrap text-[16px] font-bold text-white">
                add a hero
              </span>
              <div
                className="hidden h-[86px] w-[86px] bg-white p-1 xl:block"
                ref={pointsOctagonOuter}
              >
                <div
                  className="grid h-full w-full place-items-center bg-[#675C98] text-[30px] font-black text-white"
                  ref={pointsOctagon}
                >
                  <Image
                    src={PlusIcon}
                    alt="plus-sign"
                    className="grid place-items-center"
                    ref={pointsOctagon}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <ScrollContainer
          heading={
            "Take a few moments to savor the miracles of walking the earth"
          }
          headChild={<HeadingLabel />}
          headClassName={`text-[20px] xl:text-[24px] text-center py-10 pt-16 sm:pt-10 px-6 sm:px-12 lg:px-32 font-bold
    ${more ? "before:bg-[#544D8B] text-[#BEC1CC]" : "before:bg-[#564A8D] text-white"}`}
          containerClassName="absolute top-full translate-y-[-50%] w-full xl:w-[921px] h-[201px] z-20 "
          bodyClassName="mb-10 flex flex-col items-center p-3 sm:p-9 h-fit"
          showBody={more}
          translateHead={true}
          bodyAngle={3}
        >
          {/*
        <div className="w-[70%] h-[50px] absolute top-0 translate-y-[50%] cursor-pointer xl:hidden z-50">
        <div className="w-full h-full flex justify-between relative z-50">

        <div className="w-[86px] h-[86px] bg-white p-1 xl:block hidden cursor-pointer z-50"
        ref={iconOctagonOuter}>
        <div className="bg-[#675C98] w-full h-full grid place-items-center" ref={iconOctagon}>
        <Image src={ReIcon} alt="re-icon" />
        </div>
         </div>

         <div className="cursor-pointer z-50">
            <span className="text-[16px] font-bold text-white absolute bottom-[-30%] text-nowrap">add a hero</span>
         <div className="w-[86px] h-[86px] bg-white p-1 xl:block hidden" ref={pointsOctagonOuter}>
        <div className="bg-[#675C98] w-full h-full font-black text-[30px] text-white grid place-items-center"
        ref={pointsOctagon}>
        <Image src={PlusIcon} alt="plus-sign"
        className="grid place-items-center"
        ref={pointsOctagon}/>
        </div>
        </div>
         </div>


        </div>
    </div> */}

          {!more ? (
            <></>
          ) : (
            <p className="text-balance p-3 px-0 font-semibold md:px-10">
              Around the world, a new awareness is blooming — that our emotions,
              like our bodies, are a part of nature, and that we can cultivate
              them like a garden. Around the world, a new awareness is blooming
              — that our emotions, like our bodies, are a part of nature, and
              that we can cultivate them like a garden. Around the world, a new
              awareness is blooming — that our emotions, like our bodies, are a
              part of nature, and that we can cultivate them like a garden.
              <br />
              <br />
              Around the world, a new awareness is blooming — that our emotions,
              like our bodies, are a part of nature, and that we can cultivate
              them like a garden. Around the world, a new awareness is blooming
              — that our emotions, like our bodies, are a part of nature, and
              that we can cultivate them like a garden. Around the world, a new
              awareness is blooming — that our emotions, like our bodies, are a
              part of nature, and that we can cultivate them like a garden.
              <br />
            </p>
          )}
        </ScrollContainer>
      </LandingScreen>
    </section>
  );
};

export default Screen1;
