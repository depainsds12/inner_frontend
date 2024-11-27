"use client";

import LeftHandle from "@/public/assets/contact-success/left_handle.svg";
import RightHandle from "@/public/assets/contact-success/right_handle.svg";
import Image from "next/image";
import { useRef } from "react";
import JournalCard from "./journalCard";

const JournalCardsSection = () => {
  const scrollElementRef1 = useRef(null);
  const scrollElementRef2 = useRef(null);
  const cardRef = useRef(null);

  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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

  return (
    <>
      {/* New cards carousel */}
      <div className="flex flex-col max-md:h-[1250px] max-md:!w-full md:h-[870px] md:w-[728px] xl:h-[860px] xl:w-[1246px]">
        <div className="flex w-full flex-row-reverse gap-5 px-[10px]">
          <button onClick={handleLeftClick}>
            <Image src={RightHandle} alt="RightHandle" />
          </button>
          <button onClick={handleRightClick} className="!h-[44px] !w-[22px]">
            <Image src={LeftHandle} alt="leftHandle" />
          </button>
        </div>

        <section
          className="no-scrollbar flex h-full w-full snap-x items-center overflow-y-hidden md:gap-6 xl:!h-[784px] xl:gap-11"
          ref={scrollElementRef1}
        >
          {/* Cards */}

          {cards.map((card, index) => (
            <JournalCard key={index} />
          ))}
        </section>

        <section
          className="no-scrollbar flex h-full w-full snap-x items-center overflow-y-hidden md:gap-6 xl:!h-[784px] xl:gap-11"
          ref={scrollElementRef2}
        >
          {/* Cards */}

          {cards.map((card, index) => (
            <JournalCard key={index} />
          ))}
        </section>
      </div>
    </>
  );
};

export default JournalCardsSection;
