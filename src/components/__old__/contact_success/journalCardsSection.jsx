"use client";

import Image from "next/image";
import { createRef, useEffect, useRef } from "react";

import LeftHandle from "@/public/assets/contact-success/left_handle.svg";
import RightHandle from "@/public/assets/contact-success/right_handle.svg";
import SquareCard from "@/src/components/__old__/cards/square_card";
import TextInBrackets from "@/src/components/__old__/texts/text_in_brackets";
import useClipBuilder from "@/src/hooks/clip_path_calculations";

const WellgorithmCardsSection = () => {
  const scrollElementRef = useRef(null);

  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const cardHeadingOuterRef = useRef(cards.map(() => createRef()));
  const cardHeadingInnerRef = useRef(cards.map(() => createRef()));
  const cardRef = useRef(null);

  const { hexagonClip } = useClipBuilder();

  useEffect(() => {
    cardHeadingOuterRef.current.forEach((ref) => {
      hexagonClip(ref, 11);
    });

    cardHeadingInnerRef.current.forEach((ref) => {
      hexagonClip(ref, 11);
    });
  });

  const handleLeftClick = () => {
    if (!scrollElementRef) return 0;

    scrollElementRef.current.scrollBy({
      left: innerWidth >= 768 ? 435 : cardRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  const handleRightClick = () => {
    if (!scrollElementRef) return 0;

    scrollElementRef.current.scrollBy({
      left: innerWidth >= 768 ? -435 : -cardRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* New cards carousel */}
      <div className="flex flex-col max-md:h-[515px] max-md:!w-full md:h-[450px] md:w-[728px] xl:h-[450px] xl:w-[1246px]">
        <div className="flex h-fit w-full justify-between max-md:px-[28px]">
          <h2 className="text-cl font-bold text-yellow-light">journals</h2>

          <div className="flex gap-5">
            <button onClick={handleRightClick} className="!h-[44px] !w-[22px]">
              <Image src={LeftHandle} alt="leftHandle" />
            </button>
            <button onClick={handleLeftClick}>
              <Image src={RightHandle} alt="RightHandle" />
            </button>
          </div>
        </div>

        <section
          className="no-scrollbar flex !h-full w-full snap-x items-center !overflow-y-auto md:gap-6 xl:gap-11"
          ref={scrollElementRef}
        >
          {/* Cards */}

          {cards.map((card, index) => (
            <SquareCard
              cardRef={cardRef}
              key={index}
              className={{
                main: "max-md:!h-[399px] max-md:!min-w-full md:!h-[348px] md:!min-w-[352px] xl:!h-[333px] xl:!min-w-[386px]",
                text: "!text-[18px] !font-extrabold !text-black",
                image: "max-md:!h-[261px] md:h-[170px] xl:h-[155px]",
                border: "bg-[#ffffff]",
              }}
              upperAngle={7}
              lowerAngle={7}
            >
              <div className="drop-shadow-clip-outline-yellow absolute left-[50%] top-0 grid h-[40px] w-[350px] translate-x-[-50%] translate-y-[-50%] place-items-center md:!h-[38px] md:!w-[207px]">
                <div
                  className="flex !h-[40px] w-full items-center justify-center gap-1 bg-[#8858B5] text-[17px] font-extrabold text-white"
                  ref={cardHeadingInnerRef.current[index]}
                >
                  <TextInBrackets
                    text="peace"
                    className="w-[22%] fill-white text-[17px] font-extrabold text-yellow-light md:w-[36%]"
                  />
                  Petunia
                </div>
              </div>
            </SquareCard>
          ))}
        </section>
      </div>
    </>
  );
};

export default WellgorithmCardsSection;
