import { useBigTrapezoidStore } from "@/src/store/BigTrapezoidStore";
import ClarityLine from "./ClarityLine";

const Line = ({ side, index = 0, level = 1, constellation = false }) => {
  //const strokeColor = useSelector(state => state.bigTrapezoid.main_octagon.background.stroke.color);
  const strokeColor = useBigTrapezoidStore(
    (state) => state.main_octagon.background.stroke.color,
  );
  return (
    <div
      className="relative h-0 w-0 overflow-visible"
      style={{ rotate: `${index * 45 + 112.5}deg` }}
    >
      <div
        className="absolute left-0 top-0 -translate-y-1/2 cursor-pointer rounded-full"
        style={{
          width: `${side}px`,
        }}
      >
        <DrawLine level={level} color={strokeColor} />
      </div>
    </div>
  );
};

export default Line;

const DrawLine = ({ height, type, level, currentSelectionData, color }) => {
  return (
    <>
      <ClarityLine height={height} color={color} level={level} />
    </>
  );
};
