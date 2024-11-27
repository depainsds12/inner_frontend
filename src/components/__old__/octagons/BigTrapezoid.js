"use client";
import { useBigTrapezoidStore } from "@/src/store/BigTrapezoidStore";

const BigTrapezoid = () => {
  //const selectedBigTrapezoidPosition = useSelector(state=>state.bigTrapezoid.selectedPosition);
  const selectedBigTrapezoidPosition = useBigTrapezoidStore(
    (state) => state.selectedPosition,
  );

  if (!selectedBigTrapezoidPosition) return <></>;
  return (
    <div
      className="relative h-0 w-0 overflow-visible"
      style={{ transform: `rotate(${selectedBigTrapezoidPosition * 45}deg)` }}
    >
      <div
        className="absolute bottom-0 aspect-square w-screen bg-white bg-opacity-45"
        style={{
          clipPath: "polygon(0% 100%, 100% 0%, 100% 100%)",
        }}
      ></div>
    </div>
  );
};

export default BigTrapezoid;
