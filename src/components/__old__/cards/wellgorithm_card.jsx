"use client";
import womanImage from "@/public/assets/banner/banner.png";
import Compare from "@/public/assets/icons/compare.png";
import Create from "@/public/assets/icons/create.png";
import Explore from "@/public/assets/icons/explore.png";
import WellgorithmBottom from "@/public/assets/wellgorithm_card/wellgorithm_card_bottom.png";
import useClipBuilder from "@/src/hooks/clip_path_calculations";
import Image from "next/image";
import { useEffect, useRef } from "react";

const WellgorithmCard = ({
  cardImage,
  children,
  text,
  upperAngle = 8,
  lowerAngle = 5,
  className = { main: "", image: "", text: "" },
  shadow,
  shape,
}) => {
  const imageTextRef = useRef(null);
  const outerWellgoritmCardRef = useRef(null);
  const { squareClip, rectClip } = useClipBuilder();
  let border = ["w-[99.7%],w-[100%]"];

  useEffect(() => {
    switch (shape) {
      case "rect":
        rectClip(outerWellgoritmCardRef, upperAngle, lowerAngle);
        rectClip(outerWellgoritmCardRef, upperAngle, lowerAngle);
        break;
      case "square":
        squareClip(imageTextRef, upperAngle, lowerAngle);
        squareClip(outerWellgoritmCardRef, upperAngle, lowerAngle);
        break;

      default:
        squareClip(imageTextRef, upperAngle, lowerAngle);
        squareClip(outerWellgoritmCardRef, upperAngle, lowerAngle);
        break;
    }
  }, []);

  return (
    <div className={`relative aspect-square h-full w-full ${className.main}`}>
      <div
        className={`absolute grid aspect-square h-full w-full place-items-center bg-yellow-dark`}
        ref={outerWellgoritmCardRef}
      >
        <section
          className={`image-text ${shadow === true ? "h-[99.7%]" : "h-[100%]"} ${shadow === true ? "w-[99.7%]" : "w-[100%]"} bg-white`}
          ref={imageTextRef}
        >
          <Image
            src={cardImage ? cardImage : womanImage}
            alt="womanImage"
            className={`h-2/5 w-[100%] object-cover ${className.image}`}
          />
          <p
            className={`text-purple-inner-octagon my-auto grid h-2/5 w-full place-items-center px-12 py-8 text-center text-lg font-semibold md:text-2xl ${className.text}`}
          >
            {text
              ? text
              : "Welcome the crackling anxieties, knowing they’ll soon wither in the wind."}
          </p>
          <section
            className={`relative h-1/5 ${shadow ? "border-t-[1px] border-yellow-dark" : ""}`}
          >
            <Image
              src={WellgorithmBottom}
              alt="WellgorithmBottom"
              className="h-full w-full"
            />
            <section className="z-99 absolute bottom-0 flex h-full w-full">
              <div className="flex h-[80%] w-1/3 flex-col items-center justify-center">
                <Image src={Explore} />
                <span className="font-semibold text-white">explore</span>
              </div>
              <div className="flex h-[80%] w-1/3 flex-col items-center justify-center">
                <Image src={Compare} />
                <span className="font-semibold text-white">compare</span>
              </div>
              <div className="flex h-[80%] w-1/3 flex-col items-center justify-center">
                <Image src={Create} />
                <span className="font-semibold text-white">create</span>
              </div>
            </section>
          </section>
        </section>
      </div>
      {children}
    </div>
  );
};

export default WellgorithmCard;
