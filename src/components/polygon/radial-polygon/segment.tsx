import React from "react";

import { SegmentData } from "@/src/components/polygon/utils";

const Segment: React.FC<SegmentProps> = ({
  content,
  rotation,
  className,
  color,
  height,
  fill,
}) => {
  const textRotation = Math.abs(rotation) >= 90 ? "180deg" : "0deg";

  return (
    <div
      style={{
        display: "flex",
        height,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: fill,
        color,
        transform: `rotate(${textRotation})`,
      }}
      className={className}
    >
      {content}
    </div>
  );
};

export interface SegmentProps extends SegmentData {
  index: number;
  height: number;
  rotation: number;
}

export default Segment;
