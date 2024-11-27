import Line from "@/src/components/__old__/line/line";
import Typography from "@/src/components/typography/typography";
import useBreakpoints from "@/src/hooks/media_query";
import * as Form from "@radix-ui/react-form";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { ReverseTrapeziumCoordinates, TrapeziumCoordinates } from "../../paths";
import Polygon from "../../../../polygon/polygon";
import {
  generateHexagonPoints,
  generateOctagonPoints,
  generateParallelogramPoints,
} from "../../../../polygon/utils";
// Constants
const COLORS = {
  primary: "#564A8D",
  secondary: "#FFF200",
  accent: "#786EA4",
  stroke: "rgba(255, 255, 255, 0.2)",
};

const GRADIENTS = {
  background: "linear-gradient(180deg, #2d1b3a 0%, #8456a3 100%)",
};

// Reusable shape components
const ShapeSection = ({
  points,
  active = false,
  style,
  containerClassname,
  title,
  onClick,
}) => {
  const { isSm } = useBreakpoints();

  return (
    <div style={style} className="relative flex h-full w-1/4 flex-col">
      {active && (
        <Line
          color={COLORS.secondary}
          style={{
            width: "100%",
            marginTop: isSm ? undefined : "-10px",
            position: "relative",
            height: isSm ? "3px" : "10px",
            transition: "all 0.2s ease-in-out",
          }}
        />
      )}
      <Polygon
        onClick={onClick}
        borderStyle={[
          isSm ? "rgba(0, 0, 0, 0)" : COLORS.primary,
          COLORS.stroke,
          COLORS.stroke,
          COLORS.stroke,
        ]}
        className="pointer-events-auto"
        fill={isSm ? COLORS.accent : COLORS.primary}
        stroke={COLORS.stroke}
        strokeWidth={!isSm ? 2 : 0}
        overflow={isSm}
        containerClassname={`!h-full w-[100%] mb-[-10px] ${containerClassname}`}
        points={points}
        style={{
          transition: "fill 0.2s ease-in-out",
          border: !isSm ? undefined : `2px solid ${COLORS.stroke}`,
          ...style,
        }}
      >
        <Typography style={{ color: "#ffffff" }}>{title}</Typography>
      </Polygon>
    </div>
  );
};

// Main component
export const Body = ({ isPressed }) => {
  const { isSm } = useBreakpoints();

  const [activeState, setIsActive] = useState(3);

  const sections = [
    {
      points: generateParallelogramPoints({ width: 290, height: 100 }),
      style: {
        zIndex: 1,
      },
      containerClassname: "w-[128.4%]",
      title: "bio",
      score: 2,
    },
    {
      points: TrapeziumCoordinates,
      style: {
        zIndex: 2,
      },
      title: "seeds",
      score: 20,
    },
    {
      points: ReverseTrapeziumCoordinates,
      style: {
        zIndex: 2,
        right: isSm ? undefined : "2px",
      },
      title: "wormholes",
      score: 200,
    },
    {
      points: generateParallelogramPoints({
        width: 290,
        height: 100,
        aligned: "right",
      }),
      containerClassname: "sm:right-[20px] sm:left-[-64px]",
      aligned: "right",
      style: {
        width: isSm ? "100%" : 305,
        zIndex: 3,
      },
      score: 2000,
      title: "wellgorithms",
    },
  ];

  return (
    <Polygon
      overflow={isSm}
      fill={COLORS.primary}
      stroke={COLORS.stroke}
      strokeWidth={!isSm ? 2 : 0}
      containerClassname="!top-[30px] sm:min-w-[920px] !max-w-[100vw]"
      className="flex flex-col items-start justify-start"
      points={generateHexagonPoints({ width: 920, height: 200 })}
      style={{
        height: isSm ? "133px" : "205px",
        position: "relative",
        zIndex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "-73px",
        overflow: "hidden",
      }}
    >
      <div
        className="flex h-full w-full max-w-none items-end justify-between"
        style={{ background: GRADIENTS.background }}
      >
        {sections.map((section, index) => (
          <>
            <div className="flex w-full items-center justify-center">
              {activeState !== index && (
                <Polygon
                  containerClassname={twMerge(
                    "!w-[90px] !h-[35px] translate-y-[50%] z-50 relative",
                  )}
                  stroke={COLORS.stroke}
                  fill={COLORS.accent}
                  points={generateHexagonPoints({ width: 90, height: 35 })}
                >
                  <Typography style={{ color: "#ffffff" }}>
                    {section.score}
                  </Typography>
                </Polygon>
              )}
            </div>
          </>
        ))}
      </div>
      <div
        className={`flex h-[60px] w-full items-start justify-start sm:h-[213px]`}
      >
        {sections.map((section, index) => (
          <ShapeSection
            key={index}
            points={section.points}
            aligned={section.aligned}
            style={section.style}
            containerClassname={section.containerClassname}
            active={activeState === index}
            title={section.title}
            onClick={() => setIsActive(index)}
          />
        ))}
      </div>
    </Polygon>
  );
};

export const Child = ({ isPressed = false }) => {
  const { isSm } = useBreakpoints();
  return (
    <Form.Root className="relative top-[-2px] flex flex-col items-center justify-center overflow-hidden">
      <Form.Field name="message">
        <Form.Message className="FormMessage" match="valueMissing">
          Please enter a message
        </Form.Message>
        <Form.Control asChild required>
          <Polygon
            overflow={false}
            strokeWidth={0}
            fill="white"
            style={{
              width: isSm ? "100vw" : "819px",
              position: "relative",
              zIndex: "10",
              top: "36px",
              minHeight: "350px",
            }}
            points={generateOctagonPoints({
              width: 812,
              height: 288,
              type: "bottom",
            })}
          >
            <Typography
              rows={10}
              required
              placeholder="I Your Message"
              component="textarea"
              className="scrollbar-hide mt-[2px] flex h-[70%] w-4/5 justify-center pt-2 font-bold text-black placeholder:text-left placeholder:text-black focus:outline-none xl:pt-10"
            />
          </Polygon>
        </Form.Control>
      </Form.Field>
      <Form.Submit className="flex w-full items-center justify-center">
        <Polygon
          className="pointer-events-auto"
          overflow={false}
          stroke="#FFF200"
          strokeWidth={2}
          fill="#8858B5"
          style={{
            width: "289px",
            zIndex: "10",
          }}
          points={generateHexagonPoints({ width: 289, height: 58 })}
        >
          <Typography
            className="font-bold text-white"
            variant="fluid-2xl"
            component="span"
          >
            Next
          </Typography>
          {isPressed && (
            <span
              aria-hidden="true"
              className="absolute inset-0 animate-ping rounded-full bg-white/25"
            />
          )}
        </Polygon>
      </Form.Submit>
    </Form.Root>
  );
};

export const Title = () => {
  return (
    <Typography className="font-bold text-white" variant="fluid-2xl">
      gardener configures
    </Typography>
  );
};
