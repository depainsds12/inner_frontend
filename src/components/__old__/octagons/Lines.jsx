import React from "react";
import GapLine from "./GapLine";

const Lines = ({ radius, gap = 0, level = 1 }) => {
  const r = radius + gap * (level - 1);

  return (
    <>
      {Array.from({ length: 8 }).map((_, index) => {
        const side = r / Math.sqrt(1 + 1 / Math.sqrt(2));
        const angle = 45 * index;
        return (
          <div
            key={index}
            className={`absolute h-0 w-0 overflow-visible`}
            style={{
              left: `${r * Math.cos((angle * Math.PI) / 180)}px`,
              top: `${r * Math.sin((angle * Math.PI) / 180)}px`,
            }}
          >
            {level > 1 && (
              <div className={"relative rotate-[68deg]"}>
                {
                  // index == 6
                  // &&
                  <GapLine gap={gap} index={index} level={level} />
                }
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default Lines;
