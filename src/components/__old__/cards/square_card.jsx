"use client";
import womanImage from "@/public/assets/cards/butterfly.png";
import useClipBuilder from "@/src/hooks/clip_path_calculations";
import Image from "next/image";
import { useEffect, useRef } from "react";

const SquareCard = ({
  children,
  cardImage,
  upperAngle = 5,
  lowerAngle = 7,
  className = { main: "", image: "", text: "", internal: "", border: "" },
  cardRef,
  text = "Welcome the crackling , anxieties, knowing they’ll soon wither in the wind.",
}) => {
  const imageTextRef = useRef(null);
  const imageTextParentRef = useRef(null);
  const { squareClip } = useClipBuilder();

  useEffect(() => {
    // shapeRef, upperAnglePercent = 20 , lowerAnglePercent = 12, pseudo = false

    if (innerWidth >= 765) {
      squareClip(imageTextRef, upperAngle, lowerAngle);
      squareClip(imageTextParentRef, upperAngle, lowerAngle);
    } else {
      squareClip(imageTextRef, 0, 0);
      squareClip(imageTextParentRef, 0, 0);
    }
  }, []);

  return (
    <div className={`relative h-fit w-fit ${className.main}`} ref={cardRef}>
      <div
        ref={imageTextParentRef}
        className={`grid h-full w-full flex-grow place-items-center p-[2px] ${className.border}`}
      >
        <section
          className={`z-[-1] flex h-full w-full flex-col ${className.internal}`}
          ref={imageTextRef}
        >
          <Image
            src={cardImage ? cardImage : womanImage}
            alt="womanImage"
            className={`w-[100%] object-cover ${className.image}`}
          />
          <p
            className={`text-purple-inner-octagon grid w-full place-items-center bg-white text-center text-lg font-bold ${className.text}`}
          >
            {text}
          </p>
        </section>
      </div>

      {children}
    </div>
  );
};

export default SquareCard;
