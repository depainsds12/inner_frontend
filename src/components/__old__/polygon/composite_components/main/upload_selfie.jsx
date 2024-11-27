import Polygon from "@/src/components/polygon/polygon";
import Typography from "@/src/components/typography/typography";
import useBreakpoints from "@/src/hooks/media_query";

import { generateHexagonPoints } from "@/src/components/polygon/utils";

export const Child = () => {
  const { isSm } = useBreakpoints();
  return (
    <div className="relative flex items-baseline justify-between gap-2 sm:gap-6">
      <Polygon
        onClick={() => console.log("clicked")}
        fill="#D5D1ED"
        style={{
          width: isSm ? "150px" : "210px",
          position: "relative",
          justifyContent: "center",
          display: "flex",
          zIndex: 10,
        }}
        strokeWidth={0}
        points={generateHexagonPoints({ width: 210, height: 70 })}
      >
        <Typography
          className="bg-[#FFF200] p-1 font-bold text-black"
          variant="fluid-xl"
          component="h3"
        >
          Cancel
        </Typography>
      </Polygon>
      <Polygon
        onClick={() => console.log("clicked")}
        fill="#FFF200"
        strokeWidth={0}
        style={{
          width: isSm ? "150px" : "210px",
          position: "relative",
          justifyContent: "center",
          display: "flex",
          zIndex: 10,
        }}
        points={generateHexagonPoints({ width: 210, height: 70 })}
      >
        <Typography
          className="font-bold text-[#AE5CAA]"
          variant="fluid-xl"
          component="h3"
        >
          Save
        </Typography>
      </Polygon>
    </div>
  );
};

export const ChildVariantTwo = () => {
  const { isSm } = useBreakpoints();
  return (
    <>
      <Polygon
        onClick={() => console.log("clicked")}
        fill="#FFF200"
        strokeWidth={0}
        style={{
          width: isSm ? "150px" : "210px",
          position: "relative",
          justifyContent: "center",
          display: "flex",
          zIndex: 10,
        }}
        points={generateHexagonPoints({ width: 210, height: 70 })}
      >
        <Typography
          className="font-bold text-[#AE5CAA]"
          variant="fluid-xl"
          component="h3"
        >
          Save
        </Typography>
      </Polygon>
    </>
  );
};

export const Title = () => {
  return (
    <Typography
      className="font-bold text-white"
      variant="fluid-2xl"
      component="h1"
    >
      upload a selfie
    </Typography>
  );
};
