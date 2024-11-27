"use client";
import UserIcon from "@/public/assets/avatar/avatar.svg";
import useClipBuilder from "@/src/hooks/clip_path_calculations";
import Image from "next/image";
import { useEffect, useRef } from "react";
import TextInBrackets from "../../texts/text_in_brackets";
import Card from "./cards";

const JournalCard = ({ title, challenge }) => {
  const username = "jackie miller";

  const cardHeadingOuterRef = useRef(null);
  const cardHeadingInnerRef = useRef(null);
  const cardHeadingOuterRef2 = useRef(null);
  const cardHeadingInnerRef2 = useRef(null);
  const smallProfileIconRef = useRef(null);
  const smallProfileIconOuterRef = useRef(null);
  const userIconNameRef = useRef(null);
  const userIconNameOuterRef = useRef(null);
  const smallProfileIconRef2 = useRef(null);
  const smallProfileIconOuterRef2 = useRef(null);
  const userIconNameRef2 = useRef(null);
  const userIconNameOuterRef2 = useRef(null);

  const { hexagonClip, octagonClip } = useClipBuilder();

  useEffect(() => {
    hexagonClip(cardHeadingOuterRef, 11);
    hexagonClip(cardHeadingInnerRef, 11);
    hexagonClip(cardHeadingOuterRef2, 11);
    hexagonClip(cardHeadingInnerRef2, 11);
    hexagonClip(userIconNameRef, 10);
    hexagonClip(userIconNameOuterRef, 10);
    hexagonClip(smallProfileIconOuterRef);
    hexagonClip(smallProfileIconRef);
    hexagonClip(userIconNameRef2, 10);
    hexagonClip(userIconNameOuterRef2, 10);
    octagonClip(smallProfileIconOuterRef2);
    octagonClip(smallProfileIconRef2);
  }, []);

  const titlee = title?.replace("⟨", "").replace("⟩", " ");

  const words = titlee?.split(" ");

  let part1;
  let part2;
  if (words) {
    part1 = words[0];
    part2 = words[1];
  }

  return (
    <Card
      text={challenge}
      className={{
        main: "max-md:!h-[419px] max-md:!min-w-full md:!h-[331px] md:!min-w-[352px] xl:!h-[348px] xl:!min-w-[381px]",
        internal: "!bg-white",
        text: "mx-auto grid min-h-[121px] w-[280px] place-items-center !bg-white text-center !text-[17px] !font-extrabold leading-tight !text-black lg:w-[300px]",
        image: "max-md:!h-[261px] md:h-[170px] xl:h-[155px]",
        border: "bg-white",
      }}
      upperAngle={7}
      lowerAngle={7}
    >
      <div
        className="absolute left-[50%] top-0 flex !h-[40px] !w-[350px] translate-x-[-50%] translate-y-[-50%] items-center justify-center bg-white p-[2px] md:!h-[40px] md:!w-[208px]"
        ref={cardHeadingOuterRef}
      >
        <div
          className="flex !h-[100%] !w-full items-center justify-center gap-1 bg-[#8858B5] text-[17px] font-extrabold text-white"
          ref={cardHeadingInnerRef}
        >
          <TextInBrackets
            bracketWidth={10}
            bracketHeight={20}
            text={part1}
            className="w-fit fill-white text-[17px] font-extrabold text-yellow-light md:w-fit"
          />
          {part2}
        </div>
      </div>

      <div className="absolute bottom-0 left-[50%] flex translate-x-[-50%] translate-y-[50%] items-center justify-center max-md:h-[110px] md:h-[64px] md:w-[174px]">
        <div
          className="relative z-[10] bg-[#D5D1ED] p-[1px] max-md:h-[99px] max-md:w-[99px] md:h-[60px] md:w-[60px]"
          ref={smallProfileIconOuterRef}
        >
          <Image
            ref={smallProfileIconRef}
            src={UserIcon}
            alt="card"
            className="h-full w-full object-cover"
          />
        </div>

        <div
          className="gird z-[0px] ml-[-20%] place-items-center bg-[#D5D1ED] p-[1px] max-md:!h-[58px] max-md:!w-[206px] md:ml-[-14%] md:!h-[34px] md:!w-[151px]"
          ref={userIconNameOuterRef}
        >
          <h3
            className="flex !h-full !w-full items-center justify-end bg-[#3F3676] pr-[10%] font-extrabold text-[#D5D1ED] md:text-[14px]"
            ref={userIconNameRef}
          >
            {username ? username : "jackie miller"}
          </h3>
        </div>
      </div>
    </Card>
  );
};

export default JournalCard;
