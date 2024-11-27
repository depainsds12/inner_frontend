"use client";
import UserIcon from "@/public/assets/avatar/avatar.svg";
import SquareCard from "@/src/components/__old__/cards/square_card";
import TextInBrackets from "@/src/components/__old__/texts/text_in_brackets";
import useClipBuilder from "@/src/hooks/clip_path_calculations";
import Image from "next/image";
import { createRef, useEffect, useRef } from "react";

const JournalCardsWithTagSection = () => {
  const cards = [1, 2, 3, 4];

  const cardHeadingOuterRef = useRef(cards.map(() => createRef()));
  const cardHeadingInnerRef = useRef(cards.map(() => createRef()));
  const smallProfileIconRef = useRef(cards.map(() => createRef()));
  const smallProfileIconOuterRef = useRef(cards.map(() => createRef()));
  const userIconNameRef = useRef(cards.map(() => createRef()));
  const userIconNameOuterRef = useRef(cards.map(() => createRef()));

  const { hexagonClip, octagonClip } = useClipBuilder();

  useEffect(() => {
    cardHeadingOuterRef.current.forEach((ref) => {
      hexagonClip(ref, 16);
    });

    cardHeadingInnerRef.current.forEach((ref) => {
      hexagonClip(ref, 16);
    });

    userIconNameRef.current.forEach((ref) => {
      hexagonClip(ref, 10);
    });

    userIconNameOuterRef.current.forEach((ref) => {
      hexagonClip(ref, 10);
    });

    smallProfileIconOuterRef.current.forEach((ref) => {
      octagonClip(ref);
    });

    smallProfileIconRef.current.forEach((ref) => {
      octagonClip(ref);
    });
  });

  const username = "jackie miller";

  const texts =
    "and that we can cultivate them like a garden. motions, like our bodies, are a part of nature, and that we can cultivate them like a garden, motions, like our bodies, are a part Of nature,";

  return (
    <>
      {/* New cards carousel */}
      <section className="grid place-items-center gap-y-32 max-md:!w-full md:w-[728px] md:grid-cols-1 xl:w-[1240px] xl:grid-cols-2">
        {/* Cards */}

        {cards.map((card, index) => (
          <SquareCard
            key={index}
            text={texts}
            className={{
              main: "max-md:h-[497px] max-md:!min-w-[390px] md:h-[564px] md:!max-w-[586px] xl:!h-[523px]",
              text: "md:text-cs !place-items-start px-5 py-4 text-justify text-[18px] font-semibold !text-black md:p-14 md:!font-extrabold",
              image: "max-md:h-[261px] md:h-[170px] xl:h-[261px]",
              border: "bg-[#ffffff]",
            }}
            upperAngle={7}
            lowerAngle={7}
          >
            <div
              className="absolute left-[50%] top-0 grid h-[68px] w-[350px] translate-x-[-50%] translate-y-[-50%] place-items-center bg-yellow-light p-[2px] md:!h-[69px] md:!w-[375px]"
              ref={cardHeadingOuterRef.current[index]}
            >
              <div
                className="text-hm flex !h-full w-full items-center justify-center gap-1 bg-[#8858B5] font-extrabold text-white"
                ref={cardHeadingInnerRef.current[index]}
              >
                <TextInBrackets
                  text="peace"
                  className="text-hm w-[38%] fill-white font-extrabold text-yellow-light md:w-[36%]"
                />
                Petunia
              </div>
            </div>

            <div className="absolute bottom-0 left-[50%] flex h-[107px] w-[297px] translate-x-[-50%] translate-y-[50%] items-center">
              <div
                className="relative z-[10] h-[99px] w-[99px] bg-[#D5D1ED] p-[3px] md:h-[107px] md:w-[107px]"
                ref={smallProfileIconOuterRef.current[index]}
              >
                <Image
                  ref={smallProfileIconRef.current[index]}
                  src={UserIcon}
                  alt="card"
                  className="h-full w-full object-cover"
                />
              </div>

              <div
                className="gird z-[0px] ml-[-24%] !h-[58px] !w-[260px] place-items-center bg-[#D5D1ED] p-[3px]"
                ref={userIconNameOuterRef.current[index]}
              >
                <h3
                  className="text-cs flex !h-full !w-[254px] items-center justify-end bg-[#3F3676] pr-[10%] font-extrabold text-[#D5D1ED]"
                  ref={userIconNameRef.current[index]}
                >
                  {username ? username : "jackie miller"}
                </h3>
              </div>
            </div>
          </SquareCard>
        ))}
      </section>
    </>
  );
};

export default JournalCardsWithTagSection;
