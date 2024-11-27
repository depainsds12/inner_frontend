import Typography from "@/src/components/typography/typography";
import { useState } from "react";
import Polygon from "../../../../polygon/polygon";
import {
  generateHexagonPoints,
  generateOctagonPoints,
} from "@/src/components/polygon/utils";

const ColorButton = ({ index, isActive, onClick }) => (
  <button
    key={`flower-${index}`}
    className={`pointer-events-auto flex w-full cursor-pointer items-center justify-center`}
    aria-label={`Portrait button ${index + 1}`}
    onClick={onClick}
  >
    <div className="relative w-full">
      <Polygon
        backgroundImage="/assets/hq_img.jpg"
        backgroundImageAlt="Background"
        points={generateHexagonPoints({ width: 210, height: 70 })}
      />
    </div>
  </button>
);

const ColorGrid = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Set middle-top item as initially active

  return (
    <div className="grid h-full w-full grid-cols-2 gap-2 px-24 pb-10 pt-3 sm:grid-cols-3 sm:px-10 lg:pt-6">
      {[...Array(6)].map((_, index) => (
        <div key={index}>
          <ColorButton
            index={index}
            isActive={activeIndex === index}
            onClick={() => setActiveIndex(index)}
          />
        </div>
      ))}
    </div>
  );
};

const HexagonContainer = ({ children, onPolygonClick }) => (
  <div className="relative top-[30px] w-[552px] max-w-4xl sm:top-0">
    <Typography
      className="relative pt-6 text-center text-[#D5D1ED]"
      component="h4"
    >
      color templates
    </Typography>
    {children}
    <div className="flex w-full items-center justify-center gap-2">
      <Polygon
        stroke="#A262A1"
        fill="#3F3676"
        style={{ width: "50px", cursor: "pointer" }}
        points={generateOctagonPoints({ height: 50, width: 50 })}
        onClick={onPolygonClick}
        className="transition-colors hover:fill-[#4F4486]"
      />
      <Typography
        className="relative text-center text-[#D5D1ED]"
        variant="fluid-sm"
        component="span"
      >
        monochrome
      </Typography>
    </div>
  </div>
);

const Title = () => (
  <Typography
    variant="fluid-2xl"
    className="rounded-lg bg-[#FFF200] p-1 font-bold text-black"
  >
    change more
  </Typography>
);

const Body = ({ data }) => (
  <HexagonContainer>
    <ColorGrid data={data} />
  </HexagonContainer>
);

export { Body, Title };
