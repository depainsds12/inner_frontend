"use client";

import { useEffect, useRef, useState } from "react";

import BannerImage from "@/public/assets/banner/banner2.png";

import LandingScreen from "@/src/components/__old__/container/landing_screen";
import LabelComponent from "@/src/components/__old__/label";
import Octagon from "@/src/components/__old__/octagons/Octagon";

import useClipBuilder from "@/src/hooks/clip_path_calculations";

import { useBigTrapezoidStore } from "@/src/store/BigTrapezoidStore";

const Screen1 = () => {
  const imageRef = useRef();
  const desRef = useRef();

  //const dispatch = useDispatch();

  //const selectedData = useSelector(state=>state.bigTrapezoid.selectedData);
  const { selectedData } = useBigTrapezoidStore();

  const { rectClip, hexagonClip } = useClipBuilder();

  useEffect(() => {
    rectClip(imageRef, 0, 3);
    innerWidth > 768 && hexagonClip(desRef, 50);

    //  dispatch(changeData())
  }, []);

  const [radius, setRadius] = useState();
  const level = [1, 2];

  useEffect(() => {
    if (innerWidth >= 768) {
      setRadius(125);
    } else {
      setRadius(90);
    }
  }, []);

  return (
    <>
      <LandingScreen
        image={BannerImage}
        className="mb-[20vh] h-[600px] xl:h-[512px]"
      >
        <Octagon
          radius={radius}
          gap={radius + radius * 0.1}
          level={level}
          className="mb-[40%] sm:mb-10"
        />

        <section className="absolute left-1/2 top-full z-10 grid w-full translate-x-[-50%] translate-y-[-50%] place-items-center">
          <LabelComponent
            bracketClassName="w-[65%] md:w-[39%] lg:w-[47%] !gap-3 fill-white
           font-extrabold lg:text-hl sm:text-hm text-yellow-light text-sm"
            shape="hexagon"
            angle={25}
            containerClassName="relative drop-shadow-clip-outline-white-bold z-20"
            className="absolute left-1/2 top-0 w-[350px] translate-x-[-50%] translate-y-[-50%] bg-purple-text-light px-12 py-3 md:w-[560px] md:py-6"
            text={["flowers"]}
            textClasses="font-bold text-hl lg:text-hl sm:text-hm text-hs"
          />

          <p
            ref={desRef}
            className="lg:text-cm text-cs bg-light-pinkish-bg h-[201px] w-full px-6 pt-16 text-center font-bold text-[#8858B5] md:pt-24 lg:w-[921px] lg:px-28"
          >
            elit, sed do eiusmod tempor incididunt ut labore et elit, sed do
            eiusmod tempor incididunt ut labore et
          </p>
        </section>
      </LandingScreen>
    </>
  );
};

export default Screen1;
