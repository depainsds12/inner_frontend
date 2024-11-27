"use client";

import { useBigTrapezoidStore } from "@/src/store/BigTrapezoidStore";
import Image from "next/image"; // Import Image component for Next.js
import { useRef } from "react";

const Center = ({ radius = 10 }) => {
  const fileRef = useRef();

  // HARSHIT: useSelector from redux should be used here instead of data.
  //const { avatar, color, stroke: { value, color: strokeColor } } = useSelector(state=>state.bigTrapezoid.inner_octagon);
  const {
    avatar,
    color,
    stroke: { value, color: strokeColor },
  } = useBigTrapezoidStore((state) => state.inner_octagon);

  const handleClick = () => {
    fileRef.current.click();
  };
  const handleChange = () => {
    console.log(fileRef.current.files.length);
  };

  return (
    <div className="relative h-0 w-0 overflow-visible">
      <div
        className="absolute left-0 top-0 aspect-square origin-center -translate-x-1/2 -translate-y-1/2 rotate-[22.5deg] overflow-hidden"
        style={{
          width: 2 * radius - 13,
          clipPath: `polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)`,
        }}
      >
        <div
          onClick={handleClick}
          className="-m-2 grid aspect-square -rotate-[22.5deg] cursor-pointer items-center justify-center bg-cover"
          style={{
            backgroundColor: color,
            borderWidth: value,
            borderColor: strokeColor,
          }}
        >
          <input
            type="file"
            name="selfie"
            className="hidden"
            ref={fileRef}
            onChange={handleChange}
          />

          {/* frame here */}

          {avatar && (
            <Image src={avatar} alt="Avatar" fill className="object-cover" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Center;
