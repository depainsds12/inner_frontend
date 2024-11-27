"use client";
import Image1 from "@/public/assets/contact-success/bg-image.jpg";
import LandingScreen from "@/src/components/__old__/container/landing_screen";
import useClipBuilder from "@/src/hooks/clip_path_calculations";
import { useEffect, useRef } from "react";
import JournalCardsSection from "./journalCardsSection";
import WellgorithmCardsSection from "./wellgorithmsCardsSection";

const Screen = () => {
  const headingRef = useRef(null);
  const headingChildRef = useRef(null);
  const headingChildOuterRef = useRef(null);

  const { hexagonClip } = useClipBuilder();

  useEffect(() => {
    if (innerWidth >= 768) {
      hexagonClip(headingChildRef, 30);
      hexagonClip(headingChildOuterRef, 30);
    }

    if (innerWidth >= 1280) {
      hexagonClip(headingRef, 45, true);
    } else if (innerWidth < 768) {
      hexagonClip(headingChildRef, 20);
      hexagonClip(headingChildOuterRef, 20);
    }
  }, []);

  return (
    <>
      <div className="relative max-md:h-[30vh] md:h-[60vh] lg:h-[70vh]">
        <LandingScreen image={Image1} className="h-full">
          <div
            className="heading pseudo-clip-path !absolute bottom-0 left-[50%] flex h-[201px] w-full translate-x-[-50%] translate-y-[50%] items-center justify-center before:bg-white xl:w-[901px]"
            ref={headingRef}
          >
            <div
              className="max-md:text-hm md:text-hl absolute top-[0] flex translate-y-[-50%] items-center justify-center bg-white p-[3px] max-md:!h-[63px] max-md:!w-[350px] md:h-[103px] md:w-[560px] xl:h-[103px] xl:w-[560px]"
              ref={headingChildOuterRef}
            >
              <div
                className="max-md:text-hm md:text-hl grid h-full w-full place-items-center text-nowrap bg-[#8858B5] font-bold text-yellow-light"
                ref={headingChildRef}
              >
                thank you
              </div>
            </div>

            <p className="md:text-cm text-purple-inner-octagon flex items-center justify-center pt-6 font-bold xl:text-[26px]">
              we will send you a personal link shortly
              <br />
              in the meantime, feel free to look around.
            </p>
          </div>
        </LandingScreen>
      </div>

      <section className="flex flex-col items-center justify-center gap-10 max-md:mb-[10%] max-md:mt-[30%] md:mb-[10%] md:mt-[20%] xl:my-[10%]">
        <div className="journal-section flex flex-col items-center justify-center max-md:!w-full md:w-fit">
          <JournalCardsSection />
        </div>

        {/* wellgorithms section */}
        <div className="wellgorithms-section flex flex-col items-center justify-center max-md:!w-full md:w-fit">
          <WellgorithmCardsSection />
        </div>
      </section>
    </>
  );
};

export default Screen;
