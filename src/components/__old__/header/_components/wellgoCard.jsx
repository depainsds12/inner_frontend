"use client";
import WellgorithmIcon from "@/public/assets/contact-success/wellgorithm-icon.svg";
import useClipBuilder from "@/src/hooks/clip_path_calculations";
import Image from "next/image";
import { useEffect, useRef } from "react";
import TextInBrackets from "../../texts/text_in_brackets";
import Card from "./cards";

const WellgoCard = ({ title, challenge }) => {
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
  const cardRef = useRef(null);

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
        internal: "!bg-[#8858B5]",
        text: "mx-auto grid h-[121px] w-[250px] place-items-center !bg-[#8858B5] pt-2 text-center !text-[17px] !font-extrabold leading-tight !text-yellow-light md:w-[288px]",
        image: "max-md:!h-[261px] md:h-[170px] xl:h-[155px]",
        border: "bg-[#FFCF73]",
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

      <div className="absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[50%]">
        <Image src={WellgorithmIcon} alt="card" />
      </div>
    </Card>
  );
};

export default WellgoCard;
