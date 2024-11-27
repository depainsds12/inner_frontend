import { useBigTrapezoidStore } from "@/src/store/BigTrapezoidStore";

const GapLine = ({ gap = 5, index, level }) => {
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
  const height = mainBackgroundStrokeValue / 2;

  return (
    <div className={"relative h-0 w-0"} style={{ rotate: `${index * 45}deg` }}>
      <div className={"relative h-0 w-0"} style={{ rotate: `${112.5}deg` }}>
        <div
          className={
            "absolute left-[1px] top-0 origin-left -translate-y-1/2 rounded-full"
          }
          style={{
            backgroundColor: mainBackgroundStrokeColor,
            opacity: "50%",
            width: `${gap + height / 2}px`,
            height: `${height}px`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default GapLine;
