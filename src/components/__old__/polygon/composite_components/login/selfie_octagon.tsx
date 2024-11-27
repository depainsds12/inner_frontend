import { SelfieIcon } from "@/src/components/__old__/icons/icons";
import Polygon from "@/src/components/polygon/polygon";
import { LoginOctagonCoordinates } from "../../paths";

const SelfieOctagon = () => (
  <Polygon
    onClick={() => console.log("clicked")}
    containerClassname="!h-[510.16px] !w-[510.16px]"
    fill="#6E5090"
    points={LoginOctagonCoordinates as [number, number][]}
    stroke="#9F79C3"
    strokeWidth={8}
  >
    <Polygon
      fill="#6E5090"
      containerClassname="!scale-[0.8]"
      stroke="rgba(255, 255, 255, .05)"
      strokeWidth={8}
      points={LoginOctagonCoordinates as [number, number][]}
    >
      <Polygon
        fill="#6E5090"
        stroke="rgba(255, 255, 255, .05)"
        strokeWidth={8}
        containerClassname="!scale-[0.7]"
        points={LoginOctagonCoordinates as [number, number][]}
      >
        <Polygon
          fill="yellow"
          stroke="#FFF200"
          containerClassname="!scale-[0.6]"
          strokeWidth={8}
          points={LoginOctagonCoordinates as [number, number][]}
        >
          <SelfieIcon width={200} height={200} />
        </Polygon>
      </Polygon>
    </Polygon>
  </Polygon>
);

export default SelfieOctagon;
