import { useEffect, useRef } from "react";
import useClipBuilder from "../../hooks/clip_path_calculations";

function CounterPalette({ className = "", countData = [] }) {
  const countPaletteContRef = useRef();
  const countPaletteRef = useRef();

  const { rectClipBanner } = useClipBuilder();

  useEffect(() => {
    rectClipBanner(countPaletteContRef, 15, 3);
    rectClipBanner(countPaletteRef, 15, 3);

    // if (countPaletteContRef.current) {
    //   const height = parseInt(getComputedStyle(countPaletteContRef.current).height);
    //   console.log(height, ((height/countData.length)*(countData.findIndex(z => z == 5)+1)-48))
    //   countPaletteContRef.current.style.top = -((height/countData.length)*(countData.findIndex(z => z == 5)+1)-48)+"px";
    // }
  }, []);

  return (
    <div
      className={`w-[80px] select-none bg-white p-[3px] ${className}`}
      ref={countPaletteContRef}
    >
      <div
        className="flex h-fit w-full flex-col items-center justify-between gap-6 bg-[#8858B5] py-[24px] text-[24px] text-yellow-light lg:text-[32px]"
        ref={countPaletteRef}
      >
        {countData.map((z, i) => (
          <span key={i} className="font-bold">
            {z}
          </span>
        ))}
      </div>
    </div>
  );
}

export default CounterPalette;
