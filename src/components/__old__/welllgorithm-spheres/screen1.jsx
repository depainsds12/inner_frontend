"use client";

import { useEffect, useRef, useState } from "react";

import BannerImage from "@/public/assets/wellgorithm_spheres/background.png";

import LandingScreen from "@/src/components/__old__/container/landing_screen";
import ScrollContainer from "@/src/components/__old__/container/scroll";
import LabelComponent from "@/src/components/__old__/label";
import Octagon from "@/src/components/__old__/octagons/Octagon";

import useClipBuilder from "@/src/hooks/clip_path_calculations";
import { useBigTrapezoidStore } from "@/src/store/BigTrapezoidStore";
import { useSphereFilterStore } from "@/src/store/SphereFilterStore";

const HeadingLabel = () => {
  return (
    <LabelComponent
      shape="hexagon"
      angle={35}
      className="md:text-hm xl:text-hl z-20 w-[350px] gap-2 bg-platformcolor1 px-12 py-5 text-sm md:w-[560px]"
      text={["", "wellgorithms"]}
      textClass
      es="font-extrabold"
      containerClassName="absolute top-0 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-white p-[0px] px-[3px]"
    />
  );
};

const Screen1 = () => {
  const [more, setMore] = useState(false);
  const showMoreBtnRef = useRef();

  const { hexagonClip } = useClipBuilder();

  useEffect(() => {
    hexagonClip(showMoreBtnRef, 9);
  }, [more]);

  //const dispatch = useDispatch()
  //const sphereFilter = useSelector(currentSphereFilter);
  const { sphereFilter } = useSphereFilterStore();
  const { changeBigTrapezoidPosition, changeData } = useBigTrapezoidStore();
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

  const handleMoreClick = () => {
    setMore(!more);
  };

  return (
    <>
      <LandingScreen
        image={BannerImage}
        className="mb-[20vh] h-[600px] xl:h-[512px]"
      >
        <Octagon
          radius={radius}
          gap={radius + radius * 0.1}
          level={level}
          className="mb-[40%] sm:mb-10"
        />

        <ScrollContainer
          heading={
            "elit, sed do eiusmod tempor incididunt ut labore et elit, sed do eiusmod tempor incididunt ut labore et"
          }
          headChild={<HeadingLabel />}
          headClassName={`text-[20px] lg:text-cm py-10 pt-16 md:pt-20 px-6 md:px-12 lg:px-32 font-semibold
            ${more ? "before:bg-[#544D8B] text-[#BEC1CC]" : "before:bg-white text-pink-text"}`}
          containerClassName="absolute top-full translate-y-[-50%] w-full xl:w-[921px] z-20 drop-shadow-clip-outline-white-bold"
          bodyClassName="mb-10 flex flex-col items-center p-3 md:p-9"
          showBody={more}
          translateHead={true}
          bodyAngle={3}
        >
          {!more ? (
            <></>
          ) : (
            <p className="text-balance p-3 px-0 pb-12 font-semibold md:px-10">
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
              <br />
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
            </p>
          )}
          <button
            className="absolute top-full translate-y-[-50%] bg-[#A262A1] p-2 px-12 text-[20px] font-semibold text-yellow-light"
            ref={showMoreBtnRef}
            onClick={handleMoreClick}
          >
            {more ? "more about wellgorithm" : "more"}
          </button>
        </ScrollContainer>
      </LandingScreen>
    </>
  );
};

export default Screen1;
