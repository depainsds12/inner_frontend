"use client";
import { useBigTrapezoidStore } from "@/src/store/BigTrapezoidStore";

const TrapezoidLine = ({ gap, radius, level = 2, index = 0 }) => {
  // const {
  //   inner_octagon: {
  //     avatar,
  //     color: innerOctagonColor,
  //     stroke: { value: innerStrokeValue, color: innerStrokeColor },
  //   },
  //   main_octagon: {
  //     background: {
  //       color: mainBackgroundColor,
  //       stroke: {
  //         value: mainBackgroundStrokeValue,
  //         color: mainBackgroundStrokeColor,
  //       },
  //     },
  //   },
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
    },
  } = useBigTrapezoidStore();

  const height = 7;
  const longSide =
    (radius + (level - 1) * gap + height / 2) / Math.sqrt(1 + 1 / Math.sqrt(2));
  const shortSide =
    (radius + (level - 1) * gap - height / 2) / Math.sqrt(1 + 1 / Math.sqrt(2));

  return (
    <>
      {(level === 1 || level === 2) && (
        <div
          className="relative z-[99999999999999999999999999999999] h-0 w-0"
          style={{
            rotate: `${index * 45 + 112.5}deg`,
          }}
        >
          <div
            className={`trapezoid max-w-screen hover:bg-gradient-trapezoid-active relative flex h-full w-full origin-center items-center justify-center overflow-clip transition-all duration-300`}
            style={{
              backgroundColor:
                level === 1 ? innerStrokeColor : mainBackgroundStrokeColor,
              height:
                level === 1 ? innerStrokeValue : mainBackgroundStrokeValue,
              width: longSide - 3,
              clipPath: `polygon(${longSide}px 0, ${shortSide}px ${height}px, 0 ${height}px, 0 0)`,
            }}
          >
            <div className="flex h-full w-full flex-col items-center justify-center gap-1"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default TrapezoidLine;
