import { PlusIcon, WeatherIcon } from "@/src/components/__old__/icons/icons";
import Line from "@/src/components/__old__/line/line";
import Polygon from "@/src/components/polygon/polygon";
import Typography from "@/src/components/typography/typography";
import {
  generateHexagonPoints,
  generateOctagonPoints,
} from "@/src/components/polygon/utils";

const ActiveLine = ({ active = false }) => (
  <>
    <Line
      color="#FFF200"
      thickness={3}
      style={{
        position: "absolute",
        zIndex: 3,
        rotate: "90deg",
        width: "30.6%",
        top: "48.3%",
        left: "-15.3%",
      }}
    />
    <Line
      color="#FFF200"
      thickness={3}
      style={{
        position: "absolute",
        zIndex: 3,
        rotate: "46.7deg",
        width: "7%",
        top: "93.3%",
        left: "-1.15%",
      }}
    />
    <Line
      color="#FFF200"
      thickness={3}
      style={{
        position: "absolute",
        zIndex: 3,
        width: "30%",
        top: "99.55%",
        left: "4.7%",
      }}
    />
  </>
);

const PersonalisedWellgorithm = ({ active = false }) => (
  <div
    className="h-full w-full"
    style={{ position: "relative", padding: "10%", backgroundColor: "#7369A0" }}
  >
    <Polygon
      overflow
      fill="#7369A0"
      points={generateOctagonPoints({
        type: "bottom",
        width: 1440,
        height: 526,
      })}
      stroke="white"
      strokeWidth={4}
      style={{ position: "relative", zIndex: 1 }}
    >
      <Polygon
        onClick={() => console.log("clicked")}
        fill="#B66CB2"
        stroke="#FFF200"
        style={{
          width: "8%",
          position: "absolute",
          zIndex: 4,
          top: "-10%",
          left: "-4%",
          rotate: "68deg",
        }}
        points={generateOctagonPoints({ height: 50, width: 50 })}
      >
        <WeatherIcon width={"20%"} height={"21%"} />
      </Polygon>
      <Polygon
        onClick={() => console.log("clicked")}
        fill="#675C98"
        stroke="white"
        style={{
          width: "8%",
          position: "absolute",
          zIndex: 4,
          top: "-10%",
          right: "-4%",
          rotate: "68deg",
        }}
        points={generateOctagonPoints({ height: 50, width: 50 })}
      >
        <div className="rotate-[-68deg] p-2 text-center text-white">
          <Typography variant="fluid-lg">20</Typography>
          <Typography variant="fluid-sm">pts</Typography>
        </div>
      </Polygon>
      {active && <ActiveLine />}
      <Polygon
        overflow
        fill="#7369A0"
        points={generateOctagonPoints({
          type: "bottom",
          width: 812,
          height: 288,
        })}
        stroke="white"
        strokeWidth={4}
        style={{
          position: "absolute",
          width: "55%",
          zIndex: 2,
          top: "0",
          left: "22%",
        }}
      >
        <Polygon
          onClick={() => console.log("clicked")}
          fill="#6E5090"
          stroke="white"
          style={{
            width: "40%",
            height: "30%",
            position: "absolute",
            zIndex: 3,
            bottom: "-12.9%",
          }}
          points={generateHexagonPoints({ width: 210, height: 70 })}
        >
          <Typography className="font-bold text-[#FFF200]">
            diversity
          </Typography>
        </Polygon>
      </Polygon>
      <Polygon
        overflow
        onClick={() => console.log("clicked")}
        fill="#675C98"
        stroke="#DFDCF1"
        style={{
          width: "25%",
          position: "absolute",
          zIndex: 4,
          bottom: "-13%",
          left: "26.2%",
        }}
        points={generateHexagonPoints({ height: 159, width: 300 })}
      >
        <Polygon
          onClick={() => console.log("clicked")}
          fill="#B66CB2"
          stroke="#FFF200"
          style={{
            width: "33%",
            position: "absolute",
            zIndex: 4,
            top: "-31%",
            rotate: "68deg",
          }}
          points={generateOctagonPoints({ height: 50, width: 50 })}
        >
          <WeatherIcon width="20%" height="21%" fill="#D6D1E8" />
        </Polygon>
        <div className="mt-1 scale-75 text-center text-[#DFDCF1]">
          <Typography variant="fluid-lg">mulch</Typography>
          <Typography>your mind</Typography>
        </div>
      </Polygon>
      <Polygon
        overflow
        onClick={() => console.log("clicked")}
        fill="#7369A0"
        stroke="#DFDCF1"
        style={{
          width: "25%",
          position: "absolute",
          zIndex: 3,
          bottom: "-13%",
          left: "48%",
        }}
        points={generateHexagonPoints({ height: 159, width: 300 })}
      >
        <Polygon
          onClick={() => console.log("clicked")}
          fill="#B66CB2"
          stroke="#FFF200"
          style={{
            width: "33%",
            position: "absolute",
            zIndex: 4,
            top: "-31%",
            rotate: "68deg",
          }}
          points={generateOctagonPoints({ height: 50, width: 50 })}
        >
          <WeatherIcon width="20%" height="21%" fill="#D6D1E8" />
        </Polygon>
        <div className="mt-1 scale-75 text-center text-[#DFDCF1]">
          <Typography variant="fluid-lg">mulch</Typography>
          <Typography>your mind</Typography>
        </div>
      </Polygon>
      <Polygon
        onClick={() => console.log("clicked")}
        fill="#FAA81A"
        stroke="white"
        style={{
          width: "8%",
          position: "absolute",
          zIndex: 4,
          bottom: "-50%",
          left: "45.6%",
          rotate: "70deg",
        }}
        points={generateOctagonPoints({ height: 50, width: 50 })}
      >
        <PlusIcon width="15%" height="16%" />
      </Polygon>
    </Polygon>
  </div>
);

export default PersonalisedWellgorithm;
