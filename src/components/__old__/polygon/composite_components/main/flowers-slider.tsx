import { generateHexagonPoints } from "@/src/components/polygon/utils";
import Slider from "@/src/components/__old__/slider/slider";
import Typography from "@/src/components/typography/typography";
import useBreakpoints from "@/src/hooks/media_query";
import Polygon from "../../../../polygon/polygon";
import FlowerCard from "../cards/flower";

export const FlowersSlider = ({ data }: { data: number[] }) => {
  const { isSm } = useBreakpoints();

  if (!data || !Array.isArray(data)) {
    return null;
  }

  // Chunk the data into groups for each slide
  const chunkedData = [];
  for (let i = 0; i < data.length; i += 7) {
    chunkedData.push(data.slice(i, i + 7));
  }

  return (
    <div className="relative top-[50px] z-10 mx-auto mt-8 max-w-6xl px-4 sm:top-[10px] sm:px-6 lg:px-8">
      <div className="relative w-full">
        <div className="relative min-h-[200px]">
          <Slider
            titlePosition={"middle"}
            title={
              <Typography
                className="relative text-center text-[#D5D1ED]"
                component="h6"
              >
                trending
              </Typography>
            }
            slides={chunkedData.map((slideData, index) => (
              <FlowerCard key={`flowers_card_${index}`} data={slideData} />
            ))}
            spaceBetween={20}
            buttonPosition="sides"
            // Add custom class for button positioning
            buttonClassName="top-[25%] -translate-y-1/2"
            slidesPerView={1}
            loop={true}
            speed={500}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              834: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              1440: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
            }}
          />
        </div>
        {/* Create button */}
        <div className="flex justify-center">
          <Polygon
            onClick={() => console.log("clicked")}
            overflow={false}
            strokeWidth={0}
            fill="#D5D1ED"
            style={{
              zIndex: "1",
              width: isSm ? "150px" : "210px",
              pointerEvents: "all",
            }}
            points={generateHexagonPoints({ width: 210, height: 70 })}
          >
            <Typography className="font-bold text-[#AE5CAA]" component="span">
              +create
            </Typography>
          </Polygon>
        </div>
      </div>
    </div>
  );
};

export default FlowersSlider;
