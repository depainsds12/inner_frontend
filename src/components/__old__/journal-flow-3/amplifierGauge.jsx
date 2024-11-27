import React, { useState, useEffect } from "react";
import Image from "next/image";
import AmpBaseIcon from "@/public/assets/journal-flow/amplifier-base-icon.svg"; // base image
import AmpPickIcon from "@/public/assets/journal-flow/amplifier-pick-icon.png"; // needle image

const AmplifierGauge = () => {
  const [speed, setSpeed] = useState(50);

  // Function to handle slider change
  const handleSliderChange = (e) => {
    setSpeed(e.target.value);
  };

  // Modify the `getNeedleRotation` function to adjust the rotation range
  const getNeedleRotation = () => {
    // Rotation range: -83deg (for 0) to 78deg (for 100)
    return (speed - 50) * 1.61; // scaling factor adjusted to rotate the needle from -83 to 78 degrees
  };

  const getSpeedValue = (sliderValue) => {
    return sliderValue <= 50
      ? (sliderValue / 50) * 1000 - 1000 // map 0-50 to -1000 to 0
      : ((sliderValue - 50) / 50) * 1000; // map 51-100 to 0 to 1000
  };

  useEffect(() => {
    console.log("Speed valye - ", getSpeedValue(speed));
  }, [speed]);

  return (
    <div className="relative h-[207px] w-[362px]">
      <span className="absolute left-0 top-[50%] translate-y-[-50%] text-[18px] font-semibold text-[#D5D1ED]">
        -1000%
      </span>
      <span className="absolute left-[50%] top-0 translate-x-[-50%] text-[18px] font-semibold text-[#D5D1ED]">
        0%
      </span>
      <div className="relative z-10 mx-auto mt-[30px] flex h-[208px] w-[208px] flex-col items-center rounded-t-full border-t-[3px] border-[#8E86B2] pt-8">
        {/* Speedometer display */}
        <div className="relative z-0 h-[105px] w-[182px]">
          <Image src={AmpBaseIcon} alt="amplifier-base-icon" className="z-1" />

          <div
            className="absolute top-0 z-20"
            style={{
              clipPath:
                'path("M0 79.9916C0.53824 77.1094 0.99084 74.1672 1.60177 71.2719C4.25343 58.7502 9.43038 47.3577 17.1456 37.1675C25.8294 25.6745 36.6644 16.5825 49.7541 10.4752C54.0533 8.50114 58.4381 6.58703 63.0122 5.31669C68.4326 3.74431 74.0423 2.81572 79.6261 1.74117C82.8969 1.15584 86.2066 0.789437 89.5163 0.423034C95.1649 -0.28663 100.764 -0.00857287 106.415 0.561391C118.944 1.85808 130.818 5.38023 141.991 11.2868C155.972 18.6485 167.665 28.7537 177.177 41.3576C183.448 49.6472 183.536 60.7 177.836 68.7225C171.431 77.8499 158.867 81.0019 149.231 75.7239C146.654 74.3027 144.349 72.3056 142.131 70.3686C130.188 59.7055 122.067 49.8646 116.864 45.9016C113.295 42.7001 98.7287 32.8832 94.3164 31.2633C87.0154 28.5792 79.4597 26.9948 71.74 27.021C65.3674 27.032 59.1373 27.8457 52.9901 29.5482C45.197 31.6958 37.9616 34.8729 31.2631 39.3847C22.8174 45.0373 15.7599 52.1733 10.0517 60.5738C6.12254 66.3217 3.01088 72.4504 0.716756 78.9598C0.623207 79.2778 0.456974 79.6087 0.35047 79.8536C0.363425 79.9266 0.29074 79.9396 0.218055 79.9526C0.158325 80.0386 0.072685 79.9786 0 79.9916Z")',
              // backgroundColor: '#FFF200',
              width: `${speed - 17}%`,
              height: "82px",
            }}
          >
            <div className="absolute left-[-175%] top-[-130%] h-[300%] w-[300%] bg-[#fff200]"></div>
          </div>

          {/* Needle */}
          <Image
            src={AmpPickIcon}
            alt="amplifier-needle-icon"
            className="absolute -bottom-1 left-[34%] z-30 origin-[50%_81%]"
            style={{ transform: `rotate(${getNeedleRotation()}deg)` }} // Rotate based on speed
          />
        </div>

        {/* Slider to control the speed */}
        <div className="absolute z-40 mx-auto w-[174px] opacity-0">
          {" "}
          {/* z-40 to ensure slider is on top */}
          <input
            type="range"
            min="0"
            max="100"
            value={speed}
            onChange={handleSliderChange}
            className="h-[100px] w-full cursor-pointer" // Add cursor pointer for better UX
          />
        </div>

        {/* Display speed value */}
        <div className="mt-2 text-[18px] font-semibold text-[#D5D1ED]">
          fear
        </div>
      </div>
      <span className="absolute right-0 top-[50%] translate-y-[-50%] text-[18px] font-semibold text-[#D5D1ED]">
        +1000%
      </span>
    </div>
  );
};

export default AmplifierGauge;
