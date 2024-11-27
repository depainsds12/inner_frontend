import { FlowerIcon } from "@/src/components/__old__/icons/icons";
import Typography from "@/src/components/typography/typography";
import useBreakpoints from "@/src/hooks/media_query";
import { useState } from "react";
import Polygon from "../../../../polygon/polygon";

import { generateOctagonPoints } from "@/src/components/polygon/utils";

const IconButton = ({ index, isActive, onClick }) => (
  <button
    key={`flower-${index}`}
    className="pointer-events-auto flex w-full cursor-pointer items-center justify-center p-3 sm:p-0"
    aria-label={`Flower button ${index + 1}`}
    onClick={onClick}
  >
    <FlowerIcon fill={isActive ? "yellow" : "#D5D1ED"} />
  </button>
);

const IconGrid = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="grid h-full w-full grid-cols-4 gap-1 sm:pb-6 sm:pt-16">
      {data.slice(0, 12).map((_, index) => (
        <IconButton
          key={index}
          index={index}
          isActive={activeIndex === index}
          onClick={() => setActiveIndex(index)}
        />
      ))}
    </div>
  );
};

const HexagonContainer = ({ children }) => {
  const { isSm } = useBreakpoints();

  if (isSm) {
    return (
      <div className="flex w-[100vw] items-center justify-center bg-[#241A34] px-4">
        <div className="flex w-full justify-between pb-2 pt-10">{children}</div>
      </div>
    );
  }

  return (
    <Polygon
      stroke="#FFFFFF"
      strokeWidth={1}
      fill="#241A34"
      containerClassname="flex !w-[562px] sm:max-w-2xl items-center justify-center top-[-3px]" // adjusted height to align with title hexagon
      points={generateOctagonPoints({
        width: 552,
        height: 264,
        type: "bottom",
      })}
    >
      {children}
    </Polygon>
  );
};

const Title = () => (
  <Typography variant="fluid-2xl" className="font-bold text-yellow-300">
    change more
  </Typography>
);

const Body = ({ data }) => (
  <HexagonContainer>
    <IconGrid data={data} />
  </HexagonContainer>
);

export { Body, Title };
