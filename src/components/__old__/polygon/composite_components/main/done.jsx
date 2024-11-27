import Typography from "@/src/components/typography/typography";
import useBreakpoints from "@/src/hooks/media_query";
import Polygon from "../../../../polygon/polygon";

import { generateHexagonPoints } from "@/src/components/polygon/utils";

export const Body = () => {
  const { isSm } = useBreakpoints();
  return (
    <div className="relative top-[30px] flex flex-col items-center justify-center text-center sm:top-[0px]">
      <Typography
        className="mb-6 mt-6 rounded-lg bg-[#FFF200] p-2 text-center font-bold text-black"
        variant="fluid-xl"
        component="h3"
      >
        done
      </Typography>
      <Typography className="mb-10 w-[672px] max-w-[80vw] font-bold text-[#D5D1ED]">
        Text that everything is ready and the user can continue or can continue
        with more detailed design
      </Typography>
      <div className="flex w-full items-center justify-center gap-6 text-center">
        <Polygon
          onClick={() => console.log("clicked")}
          fill="#D5D1ED"
          style={{
            width: isSm ? "150px" : "210px",
            justifyContent: "center",
            display: "flex",
            zIndex: 10,
          }}
          strokeWidth={0}
          points={generateHexagonPoints({ width: 210, height: 70 })}
        >
          <Typography
            className="p-1 text-[#AE5CAA]"
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
    </div>
  );
};

export const Title = () => {
  return (
    <Typography className="font-bold text-[#FFF200]" variant="fluid-2xl">
      name of gardener
    </Typography>
  );
};
