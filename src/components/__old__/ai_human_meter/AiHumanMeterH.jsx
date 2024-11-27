import { useAiMeterStore } from "@/src/store/AiMeterStore";
import { useEffect, useRef, useState } from "react";

const AiHumanMeterH = () => {
  const [value, setValue] = useState(50); // Slider percentage
  const [aiValue, setAiValue] = useState(50); // AI percentage
  const [humanValue, setHumanValue] = useState(50); // Human percentage

  const sliderRef = useRef(null); // Reference to slider container
  const dividerPullerRef = useRef(null); // Reference to draggable divider
  const meterContainerRef = useRef(null); // Reference to entire meter container
  const aiValueRef = useRef(null); // Reference to AI percentage label
  const humanValueRef = useRef(null); // Reference to Human percentage label

  //const dispatch = useDispatch();
  //const currentMeterValue = useSelector(currentAiMeterValue);
  const currentMeterValue = useAiMeterStore((state) => state.aiMeterValue);
  const { setAiMeterValue } = useAiMeterStore();

  const handleMouseMove = (event) => {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect(); // Get slider dimensions
      const newWidth = ((event.clientX - rect.left) / rect.width) * 100; // Calculate new width based on mouse position
      if (newWidth >= 0 && newWidth <= 100) {
        setValue(Math.round(newWidth));
        setAiValue(Math.round(newWidth));
        //dispatch(
        setAiMeterValue(Math.round(newWidth));
        //);
        setHumanValue(100 - Math.round(newWidth));
      }
    }
  };

  const handleTouchMove = (event) => {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect(); // Get slider dimensions
      const touch = event.touches[0]; // Get first touch point
      const newWidth = ((touch.clientX - rect.left) / rect.width) * 100; // Calculate new width based on touch position
      if (newWidth >= 0 && newWidth <= 100) {
        setValue(Math.round(newWidth));
        setAiValue(Math.round(newWidth));
        //dispatch(
        setAiMeterValue(Math.round(newWidth));
        //);
        setHumanValue(100 - Math.round(newWidth));
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

  useEffect(() => {
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, []);

  return (
    <>
      <div
        className="bg-custom-gradient relative z-0 mx-auto h-[38px] w-[350px] select-none border-[2px] border-yellow-light bg-transparent md:w-[650px] xl:w-[450px]"
        ref={sliderRef}
      >
        {/* Lables */}
        <div
          className="absolute left-[2%] top-[50%] z-10 translate-y-[-50%] text-center text-[14px] font-black leading-tight text-[#564A8D]"
          ref={humanValueRef}
        >
          Human
        </div>
        <div
          className="absolute right-[2%] top-[50%] z-10 translate-y-[-50%] text-center text-[14px] font-black leading-tight text-white"
          ref={aiValueRef}
        >
          AI
        </div>
        {/* Lables */}

        {/* Flower Slider */}
        <div
          className="absolute bottom-0 top-0 z-20 translate-y-[-28%] cursor-grab"
          style={{ left: `${value}%` }}
          ref={dividerPullerRef}
        >
          <div className="relative">
            <h1
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart} // Add touch start event
              className="absolute left-0 top-0 grid h-[76px] w-[76px] translate-x-[-50%] translate-y-[-15%] cursor-grab place-items-center bg-[url('/assets/aiHumanMeter/flower.svg')] bg-no-repeat text-[24px] font-bold text-white"
            >
              {currentMeterValue}
            </h1>
          </div>
        </div>
        {/* Flower Slider */}
      </div>
    </>
  );
};

export default AiHumanMeterH;
