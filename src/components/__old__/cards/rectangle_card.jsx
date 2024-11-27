"use client";
import womanImage from "@/public/assets/banner/banner.png";
import useClipBuilder from "@/src/hooks/clip_path_calculations";
import Image from "next/image";
import { useEffect, useRef } from "react";

const RectangleCard = ({
  onClick,
  textContent = "",
  cardImage,
  children,
  upperAngle = 5,
  lowerAngle = 7,
  className = { main: "", image: "", text: "", container: "" },
}) => {
  const imageTextRef = useRef(null);
  const { rectClip } = useClipBuilder();

  useEffect(() => {
    // shapeRef, upperAnglePercent=20, lowerAnglePercent = 20, pseudo = false
    rectClip(imageTextRef, upperAngle, lowerAngle);
  }, [rectClip, upperAngle, lowerAngle]);

  return (
    <div
      className={`relative h-full w-full ${className.container}`}
      onClick={onClick}
    >
      <section
        className={`image-text h-full bg-white ${className.main}`}
        ref={imageTextRef}
      >
        <Image
          src={cardImage ? cardImage : womanImage}
          alt="image"
          className={`h-[45%] w-[100%] object-cover ${className.image}`}
        />
        <p
          className={`text-purple-inner-octagon w-full p-8 text-left text-lg font-semibold ${className.text}`}
        >
          {textContent}
        </p>
      </section>
      {children}
    </div>
  );
};

export default RectangleCard;
