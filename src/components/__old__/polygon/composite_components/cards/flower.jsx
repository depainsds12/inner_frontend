// TagCard.jsx
import Polygon from "@/src/components/polygon/polygon";
import Typography from "@/src/components/typography/typography";
import useBreakpoints from "@/src/hooks/media_query";

import { generateHexagonPoints } from "@/src/components/polygon/utils";

const FlowerCard = ({ data = [] }) => {
  const { isSm, isMd } = useBreakpoints();
  const topRow = data.slice(0, isSm ? 2 : isMd ? 3 : 4);
  const middleRow = data.slice(
    isSm ? 2 : isMd ? 3 : 4,
    isSm ? 3 : isMd ? 5 : 7,
  );

  return (
    <div className="px-4">
      {isSm ? (
        <div className="my-4 flex justify-center gap-4">
          {data.map((item, i) => (
            <Polygon
              onClick={() => console.log("clicked", item)}
              key={`top_${i}`}
              overflow={false}
              strokeWidth={0}
              fill="#8858B5"
              style={{
                zIndex: "1",
                width: "150px",
                pointerEvents: "all",
              }}
              points={generateHexagonPoints({ width: 210, height: 70 })}
            >
              <Typography
                className="relative left-1 font-bold text-white"
                component="span"
              >
                {item.text || item.name || "joy"}{" "}
                {/* Assuming each item has a text or name property */}
              </Typography>
            </Polygon>
          ))}
        </div>
      ) : (
        <>
          {/* Top row */}
          <div className="my-4 flex justify-center gap-4">
            {topRow.map((item, i) => (
              <Polygon
                onClick={() => console.log("clicked", item)}
                key={`top_${i}`}
                overflow={false}
                strokeWidth={0}
                fill="#8858B5"
                style={{
                  zIndex: "1",
                  width: "210px",
                  pointerEvents: "all",
                }}
                points={generateHexagonPoints({ width: 210, height: 70 })}
              >
                <Typography
                  className="relative left-1 font-bold text-white"
                  component="span"
                >
                  {item.text || item.name || "joy"}{" "}
                  {/* Assuming each item has a text or name property */}
                </Typography>
              </Polygon>
            ))}
          </div>
          {/* Middle row */}
          <div className="mb-4 flex justify-center gap-4">
            {middleRow.map((item, i) => (
              <Polygon
                onClick={() => console.log("clicked", item)}
                key={`mid_${i}`}
                overflow={false}
                strokeWidth={0}
                fill="#8858B5"
                style={{
                  zIndex: "1",
                  width: "210px",
                  pointerEvents: "all",
                }}
                points={generateHexagonPoints({ width: 210, height: 70 })}
              >
                <Typography
                  className="relative left-1 font-bold text-white"
                  component="span"
                >
                  {item.text || item.name || "boy"}{" "}
                  {/* Assuming each item has a text or name property */}
                </Typography>
              </Polygon>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default FlowerCard;
