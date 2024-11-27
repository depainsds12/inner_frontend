"use client";

import RadialPolygon from "@/src/components/polygon/radial-polygon/RadialPolygon";
import useBreakpoints from "@/src/hooks/media_query";
import Image from "next/image";
import React from "react";
import FileUploader from "./file-uploader";

const ChangeBackground = () => {
  const handleFileChange = () => {
    console.log("file changed");
  };

  return (
    <div className="absolute right-0 top-0 sm:right-[100px] lg:-right-[170px] lg:top-[360px] xl:-right-[230px]">
      <FileUploader
        handleFileChange={handleFileChange}
        text="change background"
      >
        <div className="flex items-center justify-center gap-4">
          <Image
            src="/assets/icons/change-bg.svg"
            alt="Upload"
            width={50}
            height={50}
          />
        </div>
      </FileUploader>
    </div>
  );
};

const MainOctagon = ({
  children,
  showChangeBackground = false,
}: {
  children: React.ReactNode;
  showChangeBackground?: boolean;
}) => {
  const { isLg } = useBreakpoints();
  const size = isLg ? 400 : 516;

  return (
    <div className="flex flex-col items-center justify-center">
      <RadialPolygon
        width={size}
        height={size}
        backgroundColor="#4D3368"
        color="#FFF200"
        numLayers={1}
        sides={8}
        boundary={{
          outer: {
            stroke: "#9F79C3",
            strokeWidth: 5,
          },
          chord: {
            stroke: "#655d91",
            strokeWidth: 3,
          },
          radii: {
            stroke: "#8C81CB",
            strokeWidth: 4,
          },
          inner: {
            stroke: "#8C81CB",
            strokeWidth: 4,
          },
        }}
        coreSize={0.5}
        data={[
          { segments: [{ content: "joy" }] },
          { segments: [{ content: "kindness" }] },
          { segments: [{ content: "love" }] },
          { segments: [{ content: "peace" }] },
          { segments: [{ content: "patience" }] },
          { segments: [{ content: "goodness" }] },
          { segments: [{ content: "faithfulness" }] },
          { segments: [{ content: "gentleness" }] },
        ]}
      >
        <Image
          alt="Background"
          className="absolute"
          fill
          objectFit="cover"
          priority
          quality={100}
          src="/assets/avatar/vrAvatar.jpg"
        />
      </RadialPolygon>
      {children}
      {showChangeBackground && <ChangeBackground />}
    </div>
  );
};

export default MainOctagon;
