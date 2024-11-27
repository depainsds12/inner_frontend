"use client";
import { useCallback, useEffect, useRef, useState } from "react";
//import { currentAiMeterValue, setAiMeterValue } from "@/src/app/features/aiMeter/AiMeterSlice";
import useClipBuilder from "@/src/hooks/clip_path_calculations";
import { useAiMeterStore } from "@/src/store/AiMeterStore";

const Toggle = ({ className = "" }) => {
  const [value, setValue] = useState(50); // Slider percentage
  const [isDragging, setIsDragging] = useState(false); // Track if dragging is happening

  const sliderRef = useRef(null); // Reference to slider container
  const sliderRefOuter = useRef(null); // Reference to slider container
  //const dispatch = useDispatch();
  const { setAiMeterValue } = useAiMeterStore();

  // Snap value to 0, 50, or 100 based on mouse or touch position
  const snapValue = useCallback((newWidth) => {
    if (newWidth <= 25) return 0;
    if (newWidth >= 75) return 100;
    return 50;
  }, []);

  // Update slider value and dispatch to Redux
  const updateValue = useCallback(
    (newWidth) => {
      const snappedValue = snapValue(newWidth);
      setValue(snappedValue);
      //dispatch(
      setAiMeterValue(snappedValue);
      //);
    },
    [snapValue, setAiMeterValue],
  );

  // Mouse and touch move handler
  const handleMove = useCallback(
    (clientX) => {
      if (!sliderRef.current) return;
      const rect = sliderRef.current.getBoundingClientRect();
      const newWidth = ((clientX - rect.left) / rect.width) * 100;
      if (newWidth >= 0 && newWidth <= 100) updateValue(newWidth);
    },
    [updateValue],
  );

  // Mouse move handler
  const handleMouseMove = useCallback(
    (event) => handleMove(event.clientX),
    [handleMove],
  );

  // Touch move handler
  const handleTouchMove = useCallback(
    (event) => handleMove(event.touches[0].clientX),
    [handleMove],
  );

  // Stop dragging and cleanup event listeners
  const handleEnd = useCallback(() => {
    setIsDragging(false);
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleEnd);
    window.removeEventListener("touchmove", handleTouchMove);
    window.removeEventListener("touchend", handleEnd);
  }, [handleMouseMove, handleTouchMove]);

  // Start dragging and attach event listeners
  const handleStart = (clientX) => {
    setIsDragging(true);
    handleMove(clientX);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleEnd);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleEnd);
  };

  // Mouse down handler
  const handleMouseDown = (event) => handleStart(event.clientX);

  // Touch start handler
  const handleTouchStart = (event) => handleStart(event.touches[0].clientX);

  // Initialize hexagon clip path
  const { hexagonClip } = useClipBuilder();
  useEffect(() => {
    hexagonClip(sliderRefOuter, 12);
    hexagonClip(sliderRef, 12);
  }, [hexagonClip]);

  // Cleanup event listeners when unmounting
  useEffect(() => {
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleEnd);
    };
  }, [handleMouseMove, handleTouchMove, handleEnd]);

  return (
    <div className={`relative h-[36px] w-[112px] sm:w-[112px] ${className}`}>
      <div
        className={`h-full w-full bg-yellow-light p-[2px]`}
        ref={sliderRefOuter}
      >
        <div
          className="pseudo-clip-path relative mx-auto h-full w-full before:z-0 before:select-none before:bg-[#8859B4]"
          ref={sliderRef}
        >
          {/* Flower Slider */}
        </div>
      </div>
      <div
        className={`absolute bottom-0 top-[8%] z-20 translate-y-[-30%] transition-all duration-150 ${
          isDragging ? "transition-none" : "transition-all"
        }`}
        style={{ left: `${value}%` }}
      >
        <div className="relative">
          <h1
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart} // Add touch start event
            className={`absolute left-0 grid h-[50px] w-[50px] translate-x-[-50%] place-items-center bg-[url('/assets/journal-flow/flower-yello-icon.svg')] bg-no-repeat ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            } text-[24px] font-bold text-white`}
          >
            {/* {currentMeterValue} */}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Toggle;
