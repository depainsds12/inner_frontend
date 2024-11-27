"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import LeftHandle from "@/public/assets/contact-success/left_handle.svg";
import RightHandle from "@/public/assets/contact-success/right_handle.svg";
import searchWellgorithms from "@/src/services/search";
import { useBigTrapezoidStore } from "@/src/store/BigTrapezoidStore";
import { useSearchDrawStore } from "@/src/store/SearchDrawStore";
import { useSphereFilterStore } from "@/src/store/SphereFilterStore";
import { useWellgoCounterStore } from "@/src/store/WellgoCounterStore";
import toast from "react-hot-toast";
import WellgoCard from "./wellgoCard";

const WellgorithmsSection = () => {
  const scrollElementRef1 = useRef(null);
  const scrollElementRef2 = useRef(null);
  const cardRef = useRef(null);

  const handleLeftClick = () => {
    if (!scrollElementRef1) return 0;
    scrollElementRef1.current.scrollBy({
      left: innerWidth >= 768 ? 435 : cardRef.current.clientWidth,
      behavior: "smooth",
    });
    if (!scrollElementRef2) return 0;
    scrollElementRef2.current.scrollBy({
      left: innerWidth >= 768 ? 435 : cardRef.current.clientWidth,
      behavior: "smooth",
    });
  };
  const handleRightClick = () => {
    if (!scrollElementRef1) return 0;
    scrollElementRef1.current.scrollBy({
      left: innerWidth >= 768 ? -435 : -cardRef.current.clientWidth,
      behavior: "smooth",
    });
    if (!scrollElementRef2) return 0;
    scrollElementRef2.current.scrollBy({
      left: innerWidth >= 768 ? -435 : -cardRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  const [wellgorithms, setWellgorithms] = useState([]);
  //const sphereFilter = useSelector(currentSphereFilter);
  const { sphereFilter } = useSphereFilterStore();
  //const keyword = useSelector(currentSearchValue);
  const keyword = useSearchDrawStore((state) => state.searchValue);

  const [midIndex, setmidIndex] = useState([]);
  const [firstHalf, setFirstHalf] = useState([]);
  const [secondHalf, setSecondHalf] = useState([]);

  //const dispatch = useDispatch()

  // Here we added debounce

  //const selectedZone =  useSelector(state=>state.bigTrapezoid.selectedData);
  const selectedZone = useBigTrapezoidStore((state) => state.selectedData);
  const { setWellgoCount } = useWellgoCounterStore();

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      // Call the search function after the debounce delay
      const searchWellgorithm = async () => {
        const response = await searchWellgorithms(
          selectedZone?.keyword?.name,
          sphereFilter,
          keyword,
        );
        if (response && response?.success) {
          toast.success("Wellgorithms found successfully.");
          setWellgorithms(response?.data);
        } else if (response && response?.error) {
          setWellgorithms([]);
          setFirstHalf([]);
          setSecondHalf([]);
          toast.error(response?.error);
        }
      };

      searchWellgorithm();
    }, 500); // 500ms debounce delay

    // Cleanup the timer if keyword changes before delay is over
    return () => clearTimeout(debounceTimer);
  }, [selectedZone?.keyword?.name, sphereFilter, keyword]);

  useEffect(() => {
    //dispatch(
    setWellgoCount(wellgorithms.length);
    //)
  }, [wellgorithms, setWellgoCount]);

  useEffect(() => {
    if (wellgorithms && wellgorithms?.length > 0 && wellgorithms?.length > 6) {
      setmidIndex(Math.ceil(wellgorithms.length / 2));
      setFirstHalf(wellgorithms.slice(0, midIndex));
      setSecondHalf(wellgorithms.slice(midIndex));
    } else if (
      wellgorithms &&
      wellgorithms.length > 0 &&
      wellgorithms.length < 7
    ) {
      setFirstHalf(wellgorithms);
    }
  }, [wellgorithms]);

  return (
    <>
      {/* New cards carousel */}
      <div className="flex flex-col max-md:h-[1250px] max-md:!w-full md:h-[870px] md:w-[728px] xl:h-[860px] xl:w-[1246px]">
        <div className="flex w-full flex-row-reverse gap-5 px-[10px]">
          {wellgorithms.length > 6 && (
            <>
              <button
                onClick={handleLeftClick}
                className={`!h-[44px] !w-[22px] ${
                  wellgorithms?.length > 6 ? "visible" : "hidden"
                }`}
              >
                <Image src={RightHandle} alt="RightHandle" />
              </button>
              <button
                onClick={handleRightClick}
                className={`!h-[44px] !w-[22px] ${
                  wellgorithms?.length > 6 ? "visible" : "hidden"
                }`}
              >
                <Image src={LeftHandle} alt="leftHandle" />
              </button>
            </>
          )}
        </div>

        <section
          className="no-scrollbar flex h-full w-full snap-x items-center overflow-y-hidden md:gap-6 xl:!h-[784px] xl:gap-11"
          ref={scrollElementRef1}
        >
          {/* Cards section 1*/}

          {firstHalf?.length > 0 &&
            firstHalf?.map((card, index) => (
              <WellgoCard
                key={index}
                title={card.title}
                challenge={card.challenge}
              />
            ))}
        </section>

        <section
          className="no-scrollbar flex h-full w-full snap-x items-center overflow-y-hidden md:gap-6 xl:!h-[784px] xl:gap-11"
          ref={scrollElementRef2}
        >
          {/* Cards section 2 */}

          {secondHalf?.length > 0 &&
            secondHalf?.map((card, index) => (
              <WellgoCard
                key={index}
                title={card.title}
                challenge={card.challenge}
              />
            ))}
        </section>
      </div>
    </>
  );
};

export default WellgorithmsSection;
