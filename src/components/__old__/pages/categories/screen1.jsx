"use client";

import { useEffect, useState } from "react";

import Banner from "@/src/components/__old__/banner";
import TextCard from "@/src/components/__old__/cards/text_card";
import LabelComponent from "@/src/components/__old__/label";

export default function Screen1({
  category = "",
  content = "",
  categoryImage = "",
}) {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    setAngle(
      Math.floor(window.innerHeight) /
        (150 - window.innerHeight / window.innerWidth),
    );
  }, []);

  return (
    <>
      <Banner
        className={`aspect-[2.3/1] w-full md:aspect-[2.9/1]`}
        shape="rect"
        angle={angle}
        innerangle={15}
        imageurl={categoryImage}
      >
        <TextCard
          angle={4}
          innerangle={18}
          align={{ apply: true, value: 100 }}
          className="absolute left-[calc(50%)] w-[90%] translate-x-[-50%] px-6 md:w-[80%] md:px-8 lg:px-10 xl:w-[60%] xl:px-12"
        >
          <LabelComponent
            className="absolute left-1/2 z-10 w-max translate-x-[-50%] !py-1 md:!py-2 xl:!py-3"
            text={[category]}
            align={"top"}
            shape="hexagon"
            bracketClassName="!w-[55%] md:!w-[58%] lg:!w-[58%] xl:!w-[62%]"
          />

          <p className="line-clamp-4 w-full text-center text-xl font-semibold md:text-2xl lg:text-3xl">
            {content}
          </p>
        </TextCard>
      </Banner>
    </>
  );
}
