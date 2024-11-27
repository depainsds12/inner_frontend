"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import BannerImage from "@/public/assets/banner/banner2.png";
import FlowerIcon from "@/public/assets/icons/flower.svg";
import CloudyA from "@/public/assets/searchdrawer/cloudA.svg";
import Cloudy from "@/public/assets/searchdrawer/cloudy.svg";
import Rain from "@/public/assets/searchdrawer/rain.svg";
import RainA from "@/public/assets/searchdrawer/rainA.svg";
import Rainbow from "@/public/assets/searchdrawer/rainbow.svg";
import RainbowA from "@/public/assets/searchdrawer/rainbowA.svg";
import SunCloud from "@/public/assets/searchdrawer/sun-cloud.svg";
import Sun from "@/public/assets/searchdrawer/sun.svg";
import SunA from "@/public/assets/searchdrawer/sunA.svg";
import SunCloudA from "@/public/assets/searchdrawer/weatherA.svg";

import JournalCardsSection from "@/src/components/__old__/contact_success/journalCardsSection";
import WellgorithmCardsSection from "@/src/components/__old__/contact_success/wellgorithmsCardsSection";
import LandingScreen from "@/src/components/__old__/container/landing_screen";

import Octagon from "@/src/components/__old__/octagons/Octagon";
import useClipBuilder from "@/src/hooks/clip_path_calculations";
import { useBigTrapezoidStore } from "@/src/store/BigTrapezoidStore";
import { useSearchDrawStore } from "@/src/store/SearchDrawStore";
import { useSphereFilterStore } from "@/src/store/SphereFilterStore";
import { useWellgoCounterStore } from "@/src/store/WellgoCounterStore";

const FlowerCounter = ({ count = 23 }) => {
  return (
    <section className="mx-auto grid w-[70px] place-items-center">
      <Image alt="flower" src={FlowerIcon} />
      <span className="absolute text-lg font-bold text-yellow-dark md:text-xl xl:text-2xl">
        {count}
      </span>
    </section>
  );
};

const Screen1 = ({ view }) => {
  const [weather, setWeather] = useState({ id: 0 });
  const optionsContRef = useRef();
  const optionsRef = useRef();
  const searchContRef = useRef();
  const searchRef = useRef();

  const { rectClip, hexagonClip } = useClipBuilder();
  //const dispatch = useDispatch();
  //const searchValue = useSelector(currentSearchValue);
  const { searchValue, setSearchValue } = useSearchDrawStore();
  const { changeBigTrapezoidPosition, changeData } = useBigTrapezoidStore();

  const handleWeatherClick = (e) => {
    setWeather({ id: e.currentTarget.dataset.id - 0 });
  };

  const handleSearchChange = (e) => {
    if (e.target.value.length === 0) {
      e.target.style.width = "13ch";
    } else if (e.target.value.length + 2 < 15) {
      e.target.style.width = e.target.value.length + 2 + "ch";
    }
    //dispatch(
    setSearchValue(e.target.value);
    //);
  };

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
    innerWidth >= 1280 && hexagonClip(optionsContRef, 50);
    innerWidth >= 1280 && hexagonClip(optionsRef, 50 * 0.98);
    hexagonClip(searchContRef, 30);
    hexagonClip(searchRef, 30 * 0.98);
  }, []);

  useEffect(() => {
    //dispatch(
    changeBigTrapezoidPosition({ position: 0, data: null });
    //)
    fetchZones();
  }, [sphereFilter]);

  //const wellgoCount = useSelector(currentWellgoCount);
  const wellgoCount = useWellgoCounterStore((state) => state.wellgorithmCount);

  const [radius, setRadius] = useState();
  const level = [1, 2];

  useEffect(() => {
    if (innerWidth >= 768) {
      setRadius(125);
    } else {
      setRadius(90);
    }
  }, [innerWidth]);

  return (
    <LandingScreen image={BannerImage} className="mb-0 h-[600px] xl:h-[512px]">
      <Octagon
        radius={radius}
        gap={radius + radius * 0.1}
        level={level}
        className="mb-[40%] sm:mb-10"
      />
      <div className="absolute left-1/2 top-full z-20 w-full translate-x-[-50%] translate-y-[-50%]">
        {/* search box */}
        <div
          ref={searchContRef}
          className="absolute left-1/2 top-0 z-10 h-[83px] w-[350px] translate-x-[-50%] translate-y-[-50%] bg-white p-[2px] sm:h-[103px] sm:w-[560px]"
        >
          <section
            ref={searchRef}
            className="grid h-full w-full place-items-center bg-purple-text-light"
          >
            <input
              type="text"
              onChange={handleSearchChange}
              value={searchValue}
              className={`mx-auto w-[13ch] max-w-full bg-transparent text-[28px] font-semibold text-yellow-dark caret-yellow-dark outline-none placeholder:text-yellow-dark md:text-[32px] lg:text-[40px] ${
                view === 2 ? "text-center" : ""
              }`}
              placeholder={view === 2 ? "search" : "search journals"} // Dynamic placeholder
            />
          </section>
        </div>

        {/* filters */}
        <div
          ref={optionsContRef}
          className={`bg-white sm:h-[201px] xl:w-[921px] ${
            weather ? "h-[280px]" : "h-[201px]"
          } mx-auto w-full py-[2px] lg:p-[2px]`}
        >
          <div
            ref={optionsRef}
            className="h-full w-full space-y-6 bg-[#564A8D] pt-[69px] text-center sm:space-y-1"
          >
            {searchValue.length ? (
              <section className="mx-auto flex w-fit flex-col items-center gap-3 sm:flex-row sm:pt-[20px]">
                <FlowerCounter count={wellgoCount} />
                <span className="text-[20px] font-semibold lg:text-[26px]">
                  Wellgorithms for compassion
                </span>
              </section>
            ) : (
              <>
                <section className="flex h-1/2 flex-wrap items-center justify-center gap-x-12 px-12 sm:gap-x-6 sm:px-0">
                  <button data-id="1" onClick={handleWeatherClick}>
                    <Image
                      src={weather.id == 1 ? SunA : Sun}
                      alt="Sun"
                      className="w-[54px]"
                    />
                  </button>
                  <button data-id="2" onClick={handleWeatherClick}>
                    <Image
                      src={weather.id == 2 ? CloudyA : Cloudy}
                      alt="Cloudy"
                      className="w-[40px]"
                    />
                  </button>
                  <button data-id="3" onClick={handleWeatherClick}>
                    <Image
                      src={weather.id == 3 ? SunCloudA : SunCloud}
                      alt="SunCloud"
                      className="w-[50px]"
                    />
                  </button>
                  <button data-id="4" onClick={handleWeatherClick}>
                    <Image
                      src={weather.id == 4 ? RainA : Rain}
                      alt="Rain"
                      className="w-[44px]"
                    />
                  </button>
                  <button data-id="5" onClick={handleWeatherClick}>
                    <Image
                      src={weather.id == 5 ? RainbowA : Rainbow}
                      alt="Rainbow"
                      className="w-[42px]"
                    />
                  </button>
                </section>
                {weather.id ? (
                  <p className="px-3 text-[18px] font-semibold text-yellow-dark sm:text-[20px]">
                    when your (
                    <span className="font-semibold text-white">inner</span>)
                    Weather is partly sunny
                  </p>
                ) : (
                  <></>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </LandingScreen>
  );
};

const SearchDrawer = ({ handleSearchClick = () => {} }) => {
  const [view, setView] = useState(2);

  return (
    <>
      <div className="absolute left-0 top-full z-50 h-fit w-full border-b-2 border-white bg-[#7369A0]">
        {/* Pass the `view` state as a prop to `Screen1` */}
        <Screen1 view={view} />
        {/* cards below */}
        <section className="flex flex-col items-center justify-center gap-10 max-md:mb-[10%] max-md:mt-[30%] md:my-[3%] xl:my-[3%]">
          <div className="mt-20 flex flex-col items-center justify-center max-md:!w-full md:w-fit">
            {view == 1 ? <JournalCardsSection /> : <WellgorithmCardsSection />}
          </div>
        </section>
      </div>
    </>
  );
};

export default SearchDrawer;
