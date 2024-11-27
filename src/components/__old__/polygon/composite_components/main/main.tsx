import Polygon from "@/src/components/polygon/polygon";
import Typography from "@/src/components/typography/typography";
import useBreakpoints from "@/src/hooks/media_query";
import React, { isValidElement } from "react";
import { twMerge } from "tailwind-merge";

import { generateHexagonPoints } from "@/src/components/polygon/utils";

type TitlePolygonProps = {
  title: string | React.ReactNode;
  onClick?: () => void;
  titleStyle?: React.CSSProperties;
};

type MainHexagonProps = {
  title: string | React.ReactNode;
  body?: string;
  children?: React.ReactNode;
  coordinates?: [number, number][];
  bodyStyle?: React.CSSProperties;
  titleStyle?: React.CSSProperties;
  bodyFill?: string;
  responsive?: boolean;
};

export const TitlePolygon: React.FC<TitlePolygonProps> = ({
  title,
  onClick,
  titleStyle = {},
}) => {
  const { isSm } = useBreakpoints();
  const width = isSm ? 350 : 640;
  const height = isSm ? 80 : 100;

  return (
    <Polygon
      points={generateHexagonPoints({ width, height })}
      onClick={onClick}
      fill="#8858B5"
      stroke="#9D78C1"
      strokeWidth={4}
      containerClassname="z-10"
      style={{
        width,
        height,
        ...titleStyle,
      }}
    >
      {title}
    </Polygon>
  );
};

const MainHexagon: React.FC<MainHexagonProps> = ({
  title,
  body,
  children,
  bodyStyle,
  titleStyle,
  bodyFill,
  responsive = true,
}) => {
  const { isSm } = useBreakpoints();

  if (!body && !children) {
    return (
      <div
        className={twMerge(
          "flex w-full justify-center",
          responsive ? "component-scale" : "",
        )}
      >
        <TitlePolygon
          title={title}
          onClick={() => console.log("clicked")}
          titleStyle={titleStyle}
        />
      </div>
    );
  }

  const renderBody = () => {
    if (typeof body !== "string") {
      return body;
    }

    if (isSm) {
      return (
        <div
          className="-mt-[40px] flex items-center justify-center bg-[#564A8D] px-8 pb-12 pt-16"
          style={{
            zIndex: 1,
            ...bodyStyle,
          }}
        >
          <Typography
            className="w-full break-words text-center font-bold text-[#D5D1ED]"
            variant="fluid-lg"
          >
            {body}
          </Typography>
        </div>
      );
    }

    return (
      <Polygon
        fill={bodyFill || "#564A8D"}
        points={generateHexagonPoints({ width: 940, height: 200 })}
        containerClassname="-mt-[50px]"
        style={{
          width: 940,
          height: 200,
          ...bodyStyle,
        }}
        stroke="#786FA4"
        strokeWidth={4}
      >
        <Typography
          className="relative mx-auto w-full max-w-[720px] break-words px-8 pt-12 text-center font-bold text-[#D5D1ED]"
          variant="fluid-lg"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100%",
          }}
        >
          {body}
        </Typography>
      </Polygon>
    );
  };

  return (
    <div
      className={twMerge(
        "some relative flex flex-col items-center justify-center",
        responsive ? "component-scale" : "",
      )}
    >
      <TitlePolygon
        onClick={() => console.log("clicked")}
        title={title}
        titleStyle={titleStyle}
      />
      <div className="relative">
        {renderBody()}
        {isValidElement(children) && (
          <div className="relative flex items-center justify-center">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default MainHexagon;
