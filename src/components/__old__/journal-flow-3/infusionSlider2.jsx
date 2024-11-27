"use client";
import React, { useState, useRef, useEffect } from "react";

const InfusionSlider2 = () => {
  const [value, setValue] = useState(50);
  const [aiValue, setAiValue] = useState(50);

  const sliderRef = useRef(null);
  const meterContainerRef = useRef(null);
  const lowerBlockRef = useRef(null);
  const upperBlockRef = useRef(null);

  // Function to handle both mouse and touch events
  const handleMove = (clientY) => {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      const newHeight = ((clientY - rect.top) / rect.height) * 100;

      if (newHeight >= 0 && newHeight <= 100) {
        setValue(100 - Math.round(newHeight));
        setInfusionDropSize(Math.round(newHeight));
        setAiValue(100 - (100 - Math.round(newHeight)));
      }
    }
  };

  // Mouse event handlers
  const handleMouseMove = (event) => {
    handleMove(event.clientY);
  };

  const handleMouseUp = () => {
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  };

  const handleMouseDown = () => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  // Touch event handlers
  const handleTouchMove = (event) => {
    handleMove(event.touches[0].clientY);
  };

  const handleTouchEnd = () => {
    window.removeEventListener("touchmove", handleTouchMove);
    window.removeEventListener("touchend", handleTouchEnd);
  };

  const handleTouchStart = () => {
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);
  };

  useEffect(() => {
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  useEffect(() => {
    if (aiValue >= 0 && aiValue <= 49) {
      meterContainerRef.current.style.background =
        "conic-gradient(#D5D1ED 0deg 90deg, #808080 90deg 270deg, #D5D1ED 270deg 360deg)";
      upperBlockRef.current.style.background = "#D5D1ED";
      meterContainerRef.current.style.opacity = "100%";
    } else {
      meterContainerRef.current.style.background =
        "conic-gradient(#D5D1ED 0deg 90deg, #808080 90deg 270deg, #D5D1ED 270deg 360deg)";
      upperBlockRef.current.style.background = "#D5D1ED";
      meterContainerRef.current.style.opacity = "100%";
    }
  }, [value]);

  const [infusionDropSize, setInfusionDropSize] = useState(100 - value);

  return (
    <>
      <div className="flex w-1/2 items-center justify-end gap-[8%] max-sm:h-[210px] max-sm:gap-[15%]">
        {/* Droplet  */}
        <div className="relative h-[170px] w-[124px] overflow-hidden max-sm:hidden">
          <div className="absolute z-0 h-full w-full">
            <div
              className="absolute"
              style={{
                clipPath:
                  'path("M75.8459 18.9977C89.0002 64.9977 139.265 109.752 118.5 145.505C100.501 176.498 55.3709 178.998 35.5006 148.998C10.0003 110.498 58.0002 73.4977 75.8459 18.9977Z")',
                backgroundColor: "grey",
                width: "124px",
                height: "170px",
              }}
            />
            <div
              className="absolute"
              style={{
                clipPath:
                  'path("M38.5 0.5C51.5 45.5 57.7164 47.8765 62 89C64.5 113 31.4595 134.462 8.49988 107C-17 76.5 21 47 38.5 0.5Z")',
                backgroundColor: "transparent",
                width: "62px",
                height: "120px",
              }}
            />
          </div>

          <div className="purple-drops absolute h-full w-full">
            <div
              className="fill absolute z-10"
              style={{
                clipPath:
                  'path("M75.8459 18.9977C89.0002 64.9977 139.265 109.752 118.5 145.505C100.501 176.498 55.3709 178.998 35.5006 148.998C10.0003 110.498 58.0002 73.4977 75.8459 18.9977Z")',
                backgroundColor: "#362f65",
                width: "124px",
                height: `${infusionDropSize + 12}%`,
              }}
            />
            <div
              className="fill absolute z-0"
              style={{
                clipPath:
                  'path("M38.5 0.5C51.5 45.5 57.7164 47.8765 62 89C64.5 113 31.4595 134.462 8.49988 107C-17 76.5 21 47 38.5 0.5Z")',
                backgroundColor: "transparent",
                width: "62px",
                height: "120px",
              }}
            />
          </div>

          {/* First Clipped Div */}
          <div
            className="absolute z-20"
            style={{
              clipPath:
                'path("M62.5997 48.3C53.7997 32.6 43.2997 17.9 38.3997 0C35.3997 6.9 32.9997 13.7 29.6997 19.9C23.7997 31 17.1997 41.7 10.9997 52.6C6.79973 60 2.99973 67.7 1.09973 76.1C-3.00027 94 4.89973 110.3 21.8997 117.3C24.9997 118.6 28.0997 119.5 31.1997 120.1C31.1997 116.4 31.5997 112.6 32.3997 108.8C25.9997 107.6 19.9997 104.4 15.9997 99C11.4997 93.1 10.3997 86.5 12.0997 79.4C12.9997 75.7 13.8997 71.9 15.5997 68.7C22.6997 55.5 30.0997 42.4 37.7997 28.6C43.8997 38.9 49.6997 48.1 54.8997 57.7C55.2997 58.4 55.5997 59.1 55.9997 59.8C58.1997 56 60.4997 52.2 62.5997 48.3Z")',
              backgroundColor: "#D6D1E8", // Ensure proper background color
              width: "62px",
              height: "120px",
            }}
          />

          {/* Second Clipped Div */}
          <div
            className="absolute z-20 h-[170px] w-[124px]"
            style={{
              clipPath:
                'path("M75.2997 54.7C65.6997 72 56.3997 88.3 47.5997 104.8C45.3997 108.9 44.2997 113.6 43.1997 118.2C40.9997 127 42.3997 135.3 48.0997 142.6C61.0997 159.5 89.2997 159.9 102.7 143.3C109.5 134.9 110.8 125.4 107.5 115.5C104.6 107.1 101 98.8 96.7997 90.9C90.1997 79.1 82.8997 67.5 75.2997 54.7ZM76.0997 19C82.2997 41.6 95.7997 60.3 106.9 80.2C111.7 88.9 116.5 97.7 119.8 107C126.4 125.4 124.9 143 109.4 156.8C93.4997 171 74.8997 173.5 55.3997 165.5C34.2997 156.8 24.3997 136.5 29.4997 114.1C31.8997 103.6 36.5997 94 41.8997 84.7C49.5997 71.1 57.7997 57.7 65.1997 44C69.3997 36.1 72.2997 27.6 76.0997 19Z")',
              backgroundColor: "#D6D1E8",
              width: "124px",
              height: "170px",
            }}
          />
        </div>
        {/* Droplet  */}

        {/* Slider  */}
        <div className="relative z-10 mx-4 flex h-[170px] w-[14px] items-center justify-center p-[3px] transition-opacity ease-in-out max-sm:h-[210px]">
          <div
            className="bg-conic-gradient-green-purple-green clip-polygon-hexagon relative z-0 flex h-full w-full items-center justify-center"
            ref={meterContainerRef}
          >
            <div
              className="relative z-0 h-[100%] w-[100px] select-none bg-transparent"
              ref={sliderRef}
            >
              {/* Upper Block for Showing AI Value */}
              <div
                className="transition-height ease w-full bg-[#D5D1ED]"
                style={{ height: `${100 - value}%` }}
                ref={upperBlockRef}
              ></div>

              {/* Divider (Flower) */}
              <div
                className="absolute left-0 z-40 h-[50px] w-[50px] translate-x-[-37%] cursor-grab bg-[url('/assets/journal-flow/infusion-slider-flower-icon.svg')] bg-no-repeat"
                style={{ bottom: `${value - 15}%` }}
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
              />

              {/* Lower Block for Showing Human Value */}
              <div
                className="transition-height ease w-full bg-[#808080]"
                style={{ height: `${value}%` }}
                ref={lowerBlockRef}
              ></div>
            </div>
          </div>
        </div>
        {/* Slider  */}
        <h2 className="text-[18px] font-semibold text-white">fear</h2>
      </div>
    </>
  );
};

export default InfusionSlider2;
