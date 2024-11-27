import Avatar from "@/public/assets/avatar/avatar.svg";
import SquareCard from "@/src/components/__old__/cards/square_card";
import LabelComponent from "@/src/components/__old__/label";
import useClipBuilder from "@/src/hooks/clip_path_calculations";
import calculate from "@/src/libs/align_calculation";
import Image from "next/image";
import { useEffect, useRef } from "react";

const Card = () => {
  const cardBottomSectionRef = useRef(null);
  const userNameCardOuterRef = useRef(null);
  const userNameCardInnerRef = useRef(null);
  const cardTagRef = useRef(null);
  const pointsOctaRef = useRef(null);
  const { rectClipBanner, hexagonClip, octagonClip } = useClipBuilder();

  useEffect(() => {
    hexagonClip(userNameCardOuterRef, 8);
    hexagonClip(userNameCardInnerRef, 8);
    hexagonClip(cardTagRef, 8);
    octagonClip(pointsOctaRef, 8);
    calculate(cardBottomSectionRef, "bottom");
  }, []);

  return (
    <SquareCard
      className={{
        main: "max-md:!w-[100%] xl:!w-[28%] 2xl:!w-[24%]",
        image: "",
        text: "text-[18px] leading-5 !text-black",
      }}
    >
      <LabelComponent
        angle={14}
        text={["compassion", "title"]}
        align={"top"}
        shape="hexagon"
        className="left-[50%] h-[14%] translate-x-[-50%] lg:w-[63%]"
        textClasses={"text-lg"}
        bracketClassName=" text-lg !w-[70%]"
      />
      <section
        ref={cardBottomSectionRef}
        className="absolute left-[50%] flex h-fit w-[90%] translate-x-[-50%] items-center justify-between md:max-lg:w-[85%]"
      >
        <section className="flex w-fit items-center justify-center">
          <Image src={Avatar} alt="avatar" className="z-[2]" />
          <span
            className="bg-purple-inner-octagon z-[1] ml-[-12%] flex h-fit items-center justify-center p-[1px]"
            ref={userNameCardOuterRef}
          >
            <p
              className="text-purple-inner-octagon flex items-center justify-center text-nowrap bg-white py-1 pl-7 pr-4 text-sm font-bold"
              ref={userNameCardInnerRef}
            >
              jackie milter
            </p>
          </span>
        </section>
        <section className="flex items-center gap-[2px] lg:mr-[3%]">
          <p
            ref={cardTagRef}
            className="h-fit bg-orange-dark px-5 py-2 text-sm font-bold text-white"
          >
            peace
          </p>
          <p
            className="flex aspect-square items-center justify-center bg-[#4F81E5] px-[14px] font-bold text-white lg:px-[16px]"
            ref={pointsOctaRef}
          >
            20
          </p>
        </section>
      </section>
    </SquareCard>
  );
};

export default Card;
