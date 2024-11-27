"use client";

import { FlowerIcon } from "@/src/components/__old__/icons/icons";
import MainHexagon from "@/src/components/__old__/polygon/composite_components/main/main";
import Polygon from "@/src/components/polygon/polygon";
import {
  generateHexagonPoints,
  generateOctagonPoints,
} from "@/src/components/polygon/utils";
import Typography from "@/src/components/typography/typography";
import useBreakpoints from "@/src/hooks/media_query";
import useWindowWidth from "@/src/hooks/use-window-width";
import Image from "next/image";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import CustomCheckbox from "./custom-checkbox";

type ChangeMoreProps = {
  section: "icons" | "colors";
};

const IconsSection = ({
  contentWidth,
  isSm,
}: {
  contentWidth: number;
  isSm: boolean;
}) => {
  return (
    <Polygon
      points={generateOctagonPoints({
        width: contentWidth,
        height: isSm ? 360 : 264,
        xCut: isSm ? 0 : 24,
        type: "bottom",
      })}
      style={{
        width: `${contentWidth}px`,
      }}
      fill="#241A34"
      stroke="FFFFFF32"
      strokeWidth={4}
      containerClassname="sm:mt-0 -mt-[40px]"
    >
      <div className="grid size-full grid-cols-4 grid-rows-3 pb-8 pt-16 sm:p-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className="flex cursor-pointer items-center justify-center"
          >
            <FlowerIcon width={36} height={36} />
          </div>
        ))}
      </div>
    </Polygon>
  );
};

const ColorsSection = ({ isMd }: { isSm: boolean; isMd: boolean }) => {
  const [selectedTemplate, setSelectedTemplate] = useState<number>(1);

  const sizeRatio = isMd ? 5 / 6 : 1;

  const onCheckboxChange = (checked: boolean) => {
    console.log("checked", checked);
  };

  return (
    <div className="flex w-full flex-col items-center justify-center gap-8">
      <Typography variant="fluid-lg" className="text-white">
        color templates
      </Typography>
      <div className="grid grid-cols-2 gap-5 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <Polygon
            key={index}
            points={generateHexagonPoints({
              width: 210 * sizeRatio,
              height: 70 * sizeRatio,
            })}
            style={{
              width: `${210 * sizeRatio}px`,
              height: `${70 * sizeRatio}px`,
            }}
            fill="transparent"
            stroke={selectedTemplate === index ? "#FFF200" : "#FFFFFF32"}
            strokeWidth={4}
          >
            <Image
              src="/assets/icons/template.png"
              alt="color template"
              width={240}
              height={80}
              className={twMerge(
                "cursor-pointer object-cover saturate-0",
                selectedTemplate === index && "saturate-100",
              )}
              onClick={() => setSelectedTemplate(index)}
            />
          </Polygon>
        ))}
      </div>
      <CustomCheckbox
        label="monochrome"
        onChange={onCheckboxChange}
        className="mt-12"
      />
    </div>
  );
};

// TODO: section prop is a temporary prop added to test the component
// The actual prop will come from functionality for editing user data
const ChangeMore: React.FC<ChangeMoreProps> = ({ section }) => {
  const { isSm, isMd } = useBreakpoints();
  const windowWidth = useWindowWidth();
  const contentWidth = isSm ? windowWidth : 580;

  return (
    <div className="relative z-10 mt-2 sm:-mt-[50px] lg:-mt-[120px]">
      <MainHexagon
        title={
          <Typography className="!text-[24px] font-extrabold text-[#FFF200] sm:!text-[40px]">
            change more
          </Typography>
        }
      >
        {section === "icons" && (
          <IconsSection contentWidth={contentWidth} isSm={isSm} />
        )}
      </MainHexagon>
      <div className="relative mt-12 w-full sm:mt-4 lg:mt-12">
        {section === "colors" && <ColorsSection isSm={isSm} isMd={isMd} />}
      </div>
    </div>
  );
};

export default ChangeMore;
