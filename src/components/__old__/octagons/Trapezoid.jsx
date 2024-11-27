"use client";
import { useBigTrapezoidStore } from "@/src/store/BigTrapezoidStore";
import Flower from "./Flower";

const Trapezoid = ({ gap, radius, level = 2, index = 0 }) => {
  // const {
  //   inner_octagon: {
  //     avatar,
  //     color: innerOctagonColor,
  //     stroke: { value: innerStrokeValue, color: innerStrokeColor }
  //   },
  //   main_octagon: {
  //     background: {
  //       color: mainBackgroundColor,
  //       stroke: { value: mainBackgroundStrokeValue, color: mainBackgroundStrokeColor }
  //     },
  //     non_selected_zones: { color: nonSelectedZonesColor, weight: nonSelectedZonesWeight },
  //     zones
  //   }
  // } = useSelector(state => state.bigTrapezoid);

  const {
    inner_octagon: {
      avatar,
      color: innerOctagonColor,
      stroke: { value: innerStrokeValue, color: innerStrokeColor },
    },
    main_octagon: {
      background: {
        color: mainBackgroundColor,
        stroke: {
          value: mainBackgroundStrokeValue,
          color: mainBackgroundStrokeColor,
        },
      },
      non_selected_zones: {
        color: nonSelectedZonesColor,
        weight: nonSelectedZonesWeight,
      },
      zones,
    },
  } = useBigTrapezoidStore();

  const height = gap * Math.sin((67.5 * Math.PI) / 180);
  const longSide =
    (radius + (level - 1) * gap) / Math.sqrt(1 + 1 / Math.sqrt(2));
  const shortSide =
    (radius + (level - 2) * gap) / Math.sqrt(1 + 1 / Math.sqrt(2));
  const sideExtraLength = (longSide - shortSide) / 2;

  //const dispatch = useDispatch();
  //const selectedTrapezoid = useSelector(state => state.bigTrapezoid.selectedPosition);
  const selectedTrapezoid = useBigTrapezoidStore(
    (state) => state.selectedPositon,
  );
  const { changeBigTrapezoidPosition } = useBigTrapezoidStore();

  // Extracting zones data from octagonData
  const zonesData = zones || []; // Safely accessing zones array

  // Ensure the index is within the bounds of the zonesData array
  const keywordName = zonesData[index]
    ? zonesData[index].keyword.name
    : "Unnamed";

  const zonedata = zonesData[index].keyword;
  return (
    <>
      {level === 2 && (
        <div
          className="relative h-0 w-0"
          style={{
            rotate: `${index * 45 + 112.5}deg`,
          }}
        >
          <div
            onClick={
              () =>
                //dispatch(
                changeBigTrapezoidPosition({
                  position: zonesData[index].pos,
                  data: zonesData[index],
                })
              //  )
            }
            className={`${selectedTrapezoid === index + 1 ? "text-green" : "cursor-pointer text-white"} trapezoid max-w-screen hover:bg-gradient-trapezoid-active relative flex h-full w-full origin-center items-center justify-center overflow-clip transition-all duration-300`}
            style={{
              backgroundColor:
                selectedTrapezoid === index + 1 ? "#fff" : mainBackgroundColor, // HARSHIT: selected_zone bg here
              height: height * (level - Math.floor(level)) || height,
              width: longSide,
              clipPath: `polygon(${longSide}px 0, ${shortSide + sideExtraLength}px ${height}px, ${sideExtraLength}px ${height}px, 0 0)`,
            }}
          >
            <div className="flex h-full w-full flex-col items-center justify-center gap-1">
              <div
                className={`${index > 3 ? "rotate-0" : "rotate-180"} text-center text-sm`}
                style={{
                  // HARSHIT: font configs
                  fontSize: keywordName.length > 10 ? "18px" : "22px", //clamp(10px, 0.9vw, 20vw) Dynamically scale font size
                  width: "90%", // Optional: Set a max-width to prevent overflow
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  fontWeight: zonedata.weight,
                  fontFamily: zonedata.font,
                  color:
                    selectedTrapezoid === index + 1
                      ? nonSelectedZonesColor
                      : zonedata.color,
                }}
                // HARSHIT: font config here
              >
                {keywordName}{" "}
                {/* Displaying the keyword name instead of the index */}
              </div>
              <div className="aspect-square h-1/3">
                {/* HARSHIT: change the flower icon here */}
                <Flower />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Trapezoid;
