"use client";
import LeftHandle from "@/public/assets/contact-success/left_handle.svg";
import RightHandle from "@/public/assets/contact-success/right_handle.svg";
import WellgorithmIcon from "@/public/assets/contact-success/wellgorithm-icon.svg";
import SquareCard from "@/src/components/__old__/cards/square_card";
import TextInBrackets from "@/src/components/__old__/texts/text_in_brackets";
import useClipBuilder from "@/src/hooks/clip_path_calculations";
import searchWellgorithmsForContactPage from "@/src/services/contact_success";
import Image from "next/image";
import { createRef, useEffect, useRef, useState } from "react";

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

  const [wellgorithms, setWellgorithms] = useState([]);

  const searchWellgorithm = async () => {
    const response = await searchWellgorithmsForContactPage("pruning");
    if (response) {
      setWellgorithms(response);
    }
  };

  useEffect(() => {
    searchWellgorithm();
  }, []);

  return (
    <>
      {/* New cards carousel */}
      <div className="flex flex-col max-md:h-[515px] max-md:!w-full md:h-[450px] md:w-[728px] xl:h-[450px] xl:w-[1246px]">
        <div className="flex h-fit w-full justify-between max-md:px-[28px]">
          <h2 className="text-cl font-bold text-yellow-light">wellgorithms</h2>

          <div className="flex gap-5">
            <button onClick={handleRightClick}>
              <Image src={LeftHandle} alt="leftHandle" />
            </button>
            <button onClick={handleLeftClick}>
              <Image src={RightHandle} alt="RightHandle" />
            </button>
          </div>
        </div>

        <section
          className="no-scrollbar flex h-full w-full snap-x items-center !overflow-y-hidden md:gap-6 xl:gap-11"
          ref={scrollElementRef}
        >
          {/* Cards */}

          {Array.isArray(wellgorithms) &&
            wellgorithms?.map((card, index) => {
              const title = card?.title?.replace("⟨", "").replace("⟩", " ");

              const words = title?.split(" ");

              let part1;
              let part2;
              if (words) {
                part1 = words[0];
                part2 = words[1];
              }

              return (
                <SquareCard
                  cardRef={cardRef}
                  key={index}
                  text={card?.challenge}
                  className={{
                    main: "max-md:h-[399px] max-md:!min-w-full md:!h-[348px] md:!min-w-[352px] xl:!h-[333px] xl:!min-w-[386px]",
                    text: "mx-auto grid h-[121px] w-[250px] place-items-center !bg-[#8858B5] !font-bold !text-yellow-light md:w-[288px]",
                    internal: "!bg-[#8858B5]",
                    image: "max-md:h-[261px] md:h-[170px] xl:h-[155px]",
                    border: "bg-[#FFCF73]",
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
                        bracketHeight={19}
                        bracketWidth={10}
                        text={part1}
                        className="w-fit fill-white text-[17px] font-extrabold text-yellow-light"
                      />
                      {part2}
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[50%]">
                    <Image src={WellgorithmIcon} alt="card" />
                  </div>
                </SquareCard>
              );
            })}
        </section>
      </div>
    </>
  );
};

export default WellgorithmCardsSection;
