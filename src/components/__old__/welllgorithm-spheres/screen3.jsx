"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import Flower from "@/public/assets/icons/wellgo_sphere_flower.svg";
import FlowerActive from "@/public/assets/icons/wellgo_sphere_flower_active.svg";
import Compare from "@/public/assets/wellgorithm_spheres/compare.svg";
import Explore from "@/public/assets/wellgorithm_spheres/explore.svg";
import Personalize from "@/public/assets/wellgorithm_spheres/personalize.svg";

import ScrollContainer from "@/src/components/__old__/container/scroll";
import LabelComponent from "@/src/components/__old__/label";
import OctagonCounter from "@/src/components/__old__/octagon_counter";
import fetchWellgorithmsForZone from "@/src/services/wellgorithm_sphere_zone";
import { useBigTrapezoidStore } from "@/src/store/BigTrapezoidStore";
import { useSphereFilterStore } from "@/src/store/SphereFilterStore";
import toast from "react-hot-toast";

const HeadingLabel = ({ view = 1, part1, part2 }) => {
  return (
    // <LabelComponent bracketClassName={`w-[40%] !gap-1 text-[#A37EC6] fill-white font-extrabold ${view == 1 ? "md:w-fit" : "md:w-[37%]"}`}
    <LabelComponent
      bracketClassName={`w-[40%] !gap-1 text-[#A37EC6] fill-white font-extrabold ${
        view == 1 ? "md:w-fit" : "md:w-fit"
      }`}
      angle={21}
      className={`z-20 h-[68px] w-[350px] gap-2 bg-[#3F3676] p-0 px-12 text-[32px] text-[#A37EC6] ${
        view == 1
          ? "md:h-[96px] md:w-[509px] md:gap-3 md:text-[40px]"
          : "md:h-[67px] md:w-[356px] md:text-[28px]"
      }`}
      text={[part1, part2]}
      shape="hexagon"
      textClasses="font-extrabold text-[#A37EC6]"
      containerClassName="absolute top-0 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-[#BDA3D6] p-[2px]"
    />
  );
};

const Card = ({
  className = "",
  view = 1,
  title,
  challenge,
  points,
  principles,
  process,
}) => {
  // ⟨⟩
  const titlee = title?.replace("⟨", "").replace("⟩", " ");

  const words = titlee?.split(" ");
  const part1 = words[0];
  const part2 = words[1];

  const [flowerActive, setFlowerActive] = useState(false);
  const [counterActive, setCounterActive] = useState(false);

  const handleFlowerClick = () => {
    if (principles) {
      setFlowerActive(!flowerActive);
    }
  };

  const handleCounterClick = () => {
    if (principles) {
      setCounterActive(!counterActive);
    }
  };

  return (
    <ScrollContainer
      bodyAngle={3}
      headChild={<HeadingLabel view={view} part1={part1} part2={part2} />}
      headClassName={`py-1 px-32 before:bg-[url(/assets/banner/banner.png)] before:bg-center
        ${view == 1 ? "h-[232px]" : "h-[163px]"} w-full`}
      containerClassName={`z-20 w-full ${
        view == 1 ? "lg:w-[920px]" : "lg:w-[643px]"
      } ${className}
       ${counterActive || flowerActive ? "mb:mb-40 mb-80" : ""} `}
      bodyClassName={`p-0 ${view == 1 ? "h-[445px]" : "h-[312px]"} w-full
       before:bg-[url(/assets/wellgorithm_spheres/scroll_card_foot.png)] before:bg-bottom`}
    >
      <section
        className={`grid h-[240px] w-full place-items-center bg-white px-6 text-center md:px-16 ${view == 1 ? "md:h-[278px]" : "md:h-[195px]"} `}
      >
        <p
          className={`text-[32px] ${view == 1 ? "md:text-hl" : "md:text-[29px]"} font-extrabold leading-snug text-[#8858B5]`}
        >
          {challenge}
        </p>
      </section>

      <div className="relative mx-auto flex min-h-[35%] w-[330px] items-center justify-between text-[14px] text-white">
        <section className="flex flex-col items-center">
          <Image alt="explore" src={Explore} />
          <span>explore</span>
        </section>
        <section className="flex flex-col items-center">
          <Image alt="compare" src={Compare} />
          <span>compare</span>
        </section>
        <section className="flex flex-col items-center">
          <Image alt="personalize" src={Personalize} />
          <span>personalize</span>
        </section>
      </div>
      {flowerActive && principles?.ripple ? (
        <div className="relative h-full w-full">
          <div
            className={`absolute top-0 min-h-[35%] w-full translate-y-[50%] items-center justify-around px-12 text-white md:translate-y-[25%] md:grid-cols-4 ${
              !principles ? "flex" : "grid grid-cols-2"
            }`}
          >
            {principles ? (
              principles?.ripple?.map((p, i) => {
                const words = p?.name?.split(" ");
                const group1 = words[0];
                const group2 = words.slice(1).join(" ");

                return (
                  <section className="flex flex-col items-center gap-3" key={i}>
                    <section className="drop-shadow-clip-outline-yellow">
                      {counterActive ? (
                        <OctagonCounter
                          count={30}
                          className={`bg-[#FAA81A] p-[9px] font-extrabold text-white`}
                        />
                      ) : (
                        <Image
                          alt="compare"
                          src={FlowerActive}
                          className="mx-auto w-[60%]"
                        />
                      )}
                    </section>
                    <section className="flex flex-col items-center">
                      <span className="text-xl font-bold text-yellow-dark">
                        {group1}
                      </span>
                      <span className="">{group2}</span>
                    </section>
                  </section>
                );
              })
            ) : (
              <></>
            )}
          </div>
        </div>
      ) : (
        <></>
      )}

      {counterActive && principles?.ripple ? (
        <div className="relative h-full w-full">
          <div
            className={`absolute top-0 min-h-[35%] w-full translate-y-[50%] items-center justify-around px-12 text-white md:translate-y-[25%] md:grid-cols-4 ${
              !principles ? "flex" : "grid grid-cols-2"
            }`}
          >
            {principles ? (
              principles?.ripple?.map((p, i) => {
                const words = p?.name?.split(" ");
                const group1 = words[0];
                const group2 = words.slice(1).join(" ");

                function divideIntoRandomParts(points, numParts) {
                  let parts = [];

                  if (numParts === 0 || points < numParts) {
                    return (parts[0] = 0);
                  } else if (numParts === 1) {
                    parts[0] = points;
                  } else if (numParts === 2) {
                    const quotient = Math.floor(points / numParts);
                    const remainder = points % numParts;
                    parts[0] = quotient + remainder;
                    parts[1] = quotient;
                  } else if (numParts === 3) {
                    const quotient = Math.floor(points / numParts);
                    const remainder = points % numParts;
                    parts[0] = quotient;
                    parts[1] = quotient + remainder;
                    parts[2] = quotient;
                  } else if (numParts === 4) {
                    const quotient = Math.floor(points / numParts);
                    const remainder = points % numParts;
                    parts[0] = quotient;
                    parts[1] = quotient;
                    parts[3] = quotient + remainder;
                    parts[2] = quotient;
                  }

                  return parts;
                }

                const point = divideIntoRandomParts(
                  points,
                  principles?.ripple?.length,
                );

                return (
                  <section className="flex flex-col items-center gap-3" key={i}>
                    <section className="drop-shadow-clip-outline-yellow h-[50px] w-[50px]">
                      {counterActive ? (
                        <OctagonCounter
                          count={point[i]}
                          className={`bg-[#FAA81A] p-[9px] font-extrabold text-white`}
                        />
                      ) : (
                        <Image
                          alt="compare"
                          src={FlowerActive}
                          className="mx-auto w-[60%]"
                        />
                      )}
                    </section>
                    <section className="flex flex-col items-center">
                      {/* <span className="text-yellow-dark font-bold text-xl">
                          {group1}
                        </span>
                        <span className="">{group2}</span> */}
                    </section>
                  </section>
                );
              })
            ) : (
              <></>
            )}
          </div>
        </div>
      ) : (
        <></>
      )}

      <div className="absolute left-1/2 top-full flex w-[300px] translate-x-[-50%] translate-y-[-50%] items-center justify-between md:w-[342px]">
        <section
          className={`flex cursor-pointer flex-col items-center ${view == 1 ? "w-[71px]" : "w-[50px]"}`}
        >
          {flowerActive ? (
            <Image
              alt="compare"
              src={FlowerActive}
              onClick={handleFlowerClick}
            />
          ) : (
            <Image alt="compare" src={Flower} onClick={handleFlowerClick} />
          )}
        </section>
        {flowerActive && principles?.ripple ? (
          <span className="translate-y-[-50%] text-[18px] font-bold text-[#D5D1ED] md:text-[25px]">
            {principles?.name}
          </span>
        ) : counterActive && principles?.ripple ? (
          <span className="translate-y-[-50%] text-[18px] font-bold text-[#D5D1ED] md:text-[25px]">
            points
          </span>
        ) : (
          <></>
        )}
        <section
          onClick={handleCounterClick}
          className={`${view == 1 ? "text-[26px]" : "text-[19px]"} ${view == 1 ? "w-[71px]" : "w-[50px]"} cursor-pointer ${
            counterActive
              ? "drop-shadow-clip-outline-yellow"
              : "drop-shadow-clip-outline-smoke"
          }`}
        >
          <OctagonCounter
            count={points}
            className={`${
              counterActive
                ? "bg-[#FAA81A] text-white"
                : "bg-[#564A8D] text-[#DFDCF1]"
            } font-extrabold`}
          />
        </section>
      </div>
    </ScrollContainer>
  );
};

const Screen3 = ({ view = 1 }) => {
  const [grids, setGrids] = useState("grid-cols-1");
  const [wellgorithms, setWellgorithms] = useState([]);

  useEffect(() => {
    if (view == 1) {
      setGrids("grid-cols-1");
    } else {
      setGrids("grid-cols-2");
    }
  }, [view]);

  //const sphereFilter = useSelector(currentSphereFilter);
  const { sphereFilter } = useSphereFilterStore();
  //const selectedZone =  useSelector(state=>state.bigTrapezoid.selectedData);
  const selectedZone = useBigTrapezoidStore((state) => state.selectedData);

  const fetchWellgorithms = async () => {
    //need to add zone from redux
    const response = await fetchWellgorithmsForZone(
      selectedZone?.keyword?.name,
      sphereFilter,
    );

    if (response && response?.success) {
      toast.success("Wellgorithms found successfully.");
      setWellgorithms(response?.data);
      console.log(wellgorithms);
    } else if (response && response?.error) {
      setWellgorithms([]);
      toast.error(response?.error);
    }
  };

  useEffect(() => {
    fetchWellgorithms();
  }, [sphereFilter, selectedZone]);

  return (
    <>
      <div className={`grid ${grids} mt-20 w-full justify-items-center gap-20`}>
        {wellgorithms.length > 0 &&
          wellgorithms?.map((z, i) => (
            <Card
              key={i}
              className={`mb-20 ${
                view > 1 &&
                (i % 2 == 0 ? "lg:justify-self-end" : "lg:justify-self-start")
              }`}
              view={view}
              title={z.title}
              challenge={z.challenge}
              points={z.points}
              principles={z.principles}
              process={z.process}
            />
          ))}
      </div>
    </>
  );
};

export default Screen3;
