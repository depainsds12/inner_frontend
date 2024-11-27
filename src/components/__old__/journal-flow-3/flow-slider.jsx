"use client";
import useClipBuilder from "@/src/hooks/clip_path_calculations";
import { useEffect, useRef, useState } from "react";

const FlowSlider = ({
  className = "",
  setFlowSliderPage,
  setActivationsPage,
}) => {
  const [value, setValue] = useState(5); // Slider value from 1 to 10

  const sliderRef = useRef(null); // Reference to slider container
  const dividerPullerRef = useRef(null); // Reference to draggable divider
  const aiValueRef = useRef(null); // Reference to AI percentage label
  const humanValueRef = useRef(null); // Reference to Human percentage label

  const snapValue = (newWidth) => {
    const step = 100 / 9; // Divide slider into 10 equal parts (9 intervals)
    let snappedValue = Math.round(newWidth / step) + 1; // Calculate the snapped value
    return Math.max(1, Math.min(snappedValue, 10)); // Ensure value stays within 1 to 10
  };

  const updateValues = (newWidth) => {
    const snappedValue = snapValue(newWidth);
    setValue(snappedValue);
  };

  const handleMouseMove = (event) => {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect(); // Get slider dimensions
      const newWidth = ((event.clientX - rect.left) / rect.width) * 100; // Calculate new width based on mouse position
      if (newWidth >= 0 && newWidth <= 100) {
        updateValues(newWidth); // Update values based on mouse position
      }
    }
  };

  const handleTouchMove = (event) => {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect(); // Get slider dimensions
      const touch = event.touches[0]; // Get first touch point
      const newWidth = ((touch.clientX - rect.left) / rect.width) * 100; // Calculate new width based on touch position
      if (newWidth >= 0 && newWidth <= 100) {
        updateValues(newWidth); // Update values based on touch position
      }
    }
  };

  const handleMouseUp = () => {
    dividerPullerRef.current.style.cursor = "grab";
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
    window.removeEventListener("touchmove", handleTouchMove);
    window.removeEventListener("touchend", handleMouseUp);
  };

  const handleMouseDown = () => {
    dividerPullerRef.current.style.cursor = "grabbing";
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const handleTouchStart = () => {
    dividerPullerRef.current.style.cursor = "grabbing";
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleMouseUp);
  };

  const { hexagonClip } = useClipBuilder();

  useEffect(() => {
    hexagonClip(sliderRef, 12, true);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, []);

  const calculateLeftPosition = (value) => {
    return ((value - 1) * 100) / 9; // Calculate the left position based on value (1-10)
  };

  const [switchh, setSwitchh] = useState();

  return (
    <>
      <div
        className={`absolute top-[50%] z-0 grid w-[921px] translate-y-[-30%] place-items-center ${className}`}
      >
        <section
          className={`flex h-[226px] flex-col items-center justify-between gap-[14%] sm:h-[226px]`}
        >
          <p className="text-center text-[24px] font-black text-white max-sm:w-[350px] xl:text-[32px]">
            are you in the flow, or do you feel stuck?
          </p>

          <div
            className="pseudo-clip-path before:bg-flow-slider-gradient relative mx-auto h-[40px] w-[350px] before:z-0 before:select-none sm:w-[600px]"
            ref={sliderRef}
          >
            {/* Labels */}
            <div
              className="absolute bottom-[-100%] left-[2%] z-10 text-[18px] font-semibold leading-snug text-[#D5D1ED]"
              ref={humanValueRef}
            >
              flow
              <div className="z-99 absolute top-0 h-full w-full bg-transparent" />
            </div>
            <div
              className="absolute bottom-[-100%] right-[2%] z-10 text-[18px] font-semibold leading-snug text-[#D5D1ED]"
              ref={aiValueRef}
            >
              stuck
            </div>

            {/* Flower Slider */}
            <div
              className="absolute bottom-0 top-[8%] z-20 translate-y-[-50%] cursor-grab"
              style={{ left: `${calculateLeftPosition(value)}%` }} // Set position based on the value (1-10)
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
              ref={dividerPullerRef}
            >
              <div className="relative">
                <h1
                  // Add touch start event
                  className="absolute left-0 z-0 grid h-[70px] w-[70px] translate-x-[-50%] cursor-grab place-items-center bg-[url('/assets/journal-flow/octa-fill-icon.svg')] bg-no-repeat text-[24px] font-bold text-white"
                >
                  {/* {value} Display the current value */}
                  <div className="absolute z-10 h-full w-full bg-transparent"></div>
                </h1>
              </div>
            </div>
          </div>
          <section className="mt-[5%] flex w-[350px] justify-between text-[18px] font-extrabold text-white sm:w-[400px]">
            <span
              className={`cursor-pointer ${
                switchh === "tranquiloids" ? "text-yellow-light" : ""
              } transition-all ease-in`}
              onClick={(e) => {
                setSwitchh(e.target.innerHTML);
                setActivationsPage(true);
                setFlowSliderPage(false);
              }}
            >
              tranquiloids
            </span>
            <span
              className={`cursor-pointer ${
                switchh === "empathites" ? "text-yellow-light" : ""
              } transition-all ease-in`}
              onClick={(e) => {
                setSwitchh(e.target.innerHTML);
                setActivationsPage(true);
                setFlowSliderPage(false);
              }}
            >
              empathites
            </span>
            <span
              className={`cursor-pointer ${
                switchh === "angerites" ? "text-yellow-light" : ""
              } transition-all ease-in`}
              onClick={(e) => {
                setSwitchh(e.target.innerHTML);
                setActivationsPage(true);
                setFlowSliderPage(false);
              }}
            >
              angerites
            </span>
          </section>
        </section>
      </div>
    </>
  );
};

export default FlowSlider;
