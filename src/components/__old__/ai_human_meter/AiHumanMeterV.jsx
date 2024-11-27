"use client";
import AiHumoMeter from "@/public/assets/aiHumanMeter/aiHumanMeter.svg";
import useClipBuilder from "@/src/hooks/clip_path_calculations";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const AiHumanMeter = () => {
  const [value, setValue] = useState(50);
  const [aiValue, setaiValue] = useState(50);
  const [humanValue, sethumanValue] = useState(50);

  const sliderRef = useRef(null);
  const dividerPullerRef = useRef(null);
  const meterContainerRef = useRef(null);
  const lowerBlockRef = useRef(null);
  const upperBlockRef = useRef(null);
  const aiValueRef = useRef(null);
  const humanValueRef = useRef(null);

  const handleMouseMove = (event) => {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      const newHeight = ((event.clientY - rect.top) / rect.height) * 100;
      if (newHeight >= 0 && newHeight <= 100) {
        setValue(100 - Math.round(newHeight));
        setaiValue(100 - (100 - Math.round(newHeight)));
        sethumanValue(100 - Math.round(newHeight));
        console.log(value);
        console.log(aiValue);
        console.log(humanValue);
      }
    }
  };

  const handleMouseUp = () => {
    dividerPullerRef.current.style.cursor = "grab";
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  };

  const handleMouseDown = () => {
    dividerPullerRef.current.style.cursor = "grabbing";
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const { hexagonClip } = useClipBuilder();

  useEffect(() => {
    hexagonClip(dividerPullerRef, 4);
    meterContainerRef.current.style.clipPath =
      "polygon(30% 0 , 70% 0, 100% 9% , 100% 22% , 72% 31% , 72% 69% , 100% 78% , 100% 91% , 70% 100% , 30% 100% , 0 91% , 0 78%, 28% 69% , 28% 31% , 0 22% , 0 9%)";

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  useEffect(() => {
    if (value === 0) {
      meterContainerRef.current.style.opacity = "0%";
    } else if ((aiValue >= 0) & (aiValue <= 49)) {
      meterContainerRef.current.style.background =
        "conic-gradient(#D5D1ED 0deg 90deg , #855AA5 90deg 270deg , #D5D1ED 270deg 360deg)";
      upperBlockRef.current.style.background = "#D5D1ED";
      aiValueRef.current.style.color = "#8858B5";
      meterContainerRef.current.style.opacity = "100%";
    } else {
      meterContainerRef.current.style.background =
        "conic-gradient(#41AD49 0deg 90deg , #855AA5 90deg 270deg , #41AD49 270deg 360deg)";
      upperBlockRef.current.style.background = "#41AD49";
      aiValueRef.current.style.color = "#FFF200";
      meterContainerRef.current.style.opacity = "100%";
    }
  }, [value]);

  return (
    <>
      <div className="drop-shadow-clip-outline-yellow relative flex h-[300px] w-[100px] items-center justify-center p-[3px] transition-opacity ease-in-out">
        <Image src={AiHumoMeter} alt="AiHumanMeter" className="absolute" />
        <div
          className="bg-conic-gradient-green-purple-green clip-polygon-hexagon relative z-0 flex h-full w-full items-center justify-center"
          ref={meterContainerRef}
        >
          <div
            className="absolute left-[50%] top-[10%] z-50 translate-x-[-50%] text-center text-[16px] font-bold leading-tight"
            ref={aiValueRef}
          >
            AI
            <br />
            {aiValue}%
          </div>
          <div
            className="absolute bottom-[8%] left-[50%] z-50 translate-x-[-50%] text-center text-[16px] font-bold leading-tight text-[#FFF200]"
            ref={humanValueRef}
          >
            Human
            <br />
            {humanValue}%
          </div>

          <div
            className="relative z-0 h-[37%] w-[100px] select-none bg-transparent"
            ref={sliderRef}
          >
            {" "}
            {/* Entire sliding block */}
            <div
              className="transition-height ease w-full bg-[#41AD49]"
              style={{ height: `${100 - value}%` }}
              ref={upperBlockRef}
            ></div>
            {/* upper block */}
            <div
              className="absolute left-0 right-0 z-10 h-[2px] cursor-grab bg-yellow-light"
              style={{ bottom: `${value}%` }}
              onMouseDown={(el) => {
                handleMouseDown(el);
              }}
            >
              {/* divider */}

              <span
                className="absolute left-[50%] top-[50%] z-20 block h-[600%] w-[34%] translate-x-[-50%] translate-y-[-50%] bg-yellow-light"
                ref={dividerPullerRef}
              />
            </div>
            <div
              className="transition-height ease w-full bg-[#855AA5]"
              style={{ height: `${value}%` }}
              ref={lowerBlockRef}
            ></div>
            {/* lower block */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AiHumanMeter;
