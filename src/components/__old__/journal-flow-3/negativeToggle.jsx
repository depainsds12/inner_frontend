"use client";
import useClipBuilder from "@/src/hooks/clip_path_calculations";
import { useCallback, useEffect, useRef, useState } from "react";

const NegativeToggle = ({ className = "", sliderClass }) => {
  const [value, setValue] = useState(50); // Slider percentage
  const [isDragging, setIsDragging] = useState(false); // Track if dragging is happening

  const sliderRef = useRef(null); // Reference to slider container
  const sliderRefOuter = useRef(null); // Reference to slider container
  //const dispatch = useDispatch();

  // Snap value to 0, 50, or 100 based on mouse or touch position
  const snapValue = useCallback((newWidth) => {
    if (newWidth <= 25) return 5;
    if (newWidth >= 75) return 95;
    return 50;
  }, []);

  // Update slider value and dispatch to Redux
  const updateValue = useCallback(
    (newWidth) => {
      const snappedValue = snapValue(newWidth);
      setValue(snappedValue);
    },
    [snapValue],
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
    hexagonClip(sliderRefOuter, 9);
    hexagonClip(sliderRef, 9);
  }, []);

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
    <div className="relative h-[32px] w-[150px]">
      <div
        className={`relative h-[32px] w-[150px] bg-white p-[2px] ${className} transition-all duration-150`}
        ref={sliderRefOuter}
      >
        <div
          className={`pseudo-clip-path z-0 grid h-full w-full select-none place-items-center ${value < 50 ? "bg-[#FF0000]" : value > 50 ? "bg-black" : "bg-black"} mx-auto text-[14px] font-extrabold text-white transition-all duration-150`}
          ref={sliderRef}
        >
          {value < 50 ? "activate" : value > 50 ? "release" : ""}
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
            className={`absolute left-0 grid h-[44px] w-[44px] translate-x-[-50%] place-items-center bg-no-repeat ${value < 50 ? "bg-[url('/assets/journal-flow/octa-dark-icon.svg')]" : value > 50 ? "bg-[url('/assets/journal-flow/octa-green-icon.svg')]" : "bg-[url('/assets/journal-flow/octa-grey-icon.svg')]"} ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            } text-[24px] font-bold text-white transition-all duration-150`}
          >
            {/* {value} */}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default NegativeToggle;
