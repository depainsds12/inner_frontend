"use client";
import useClipBuilder from "@/src/hooks/clip_path_calculations";
import { useEffect, useRef } from "react";

const Octagon = ({
  children,
  outerBannerClass,
  octagonContainerClass,
  octagonOuterContainerClass,
  bannerClass,
}) => {
  const authBannerRef = useRef(null);
  const authBannerRefOuter = useRef(null);
  const { authBannerClip } = useClipBuilder();
  useEffect(() => {
    if (innerWidth > 840) {
      authBannerClip(authBannerRef);
      authBannerClip(authBannerRefOuter);
    }
  }, []);

  return (
    <div
      className={`outer-most-banner w-full bg-white pb-[4px] ${outerBannerClass}`}
      ref={authBannerRefOuter}
    >
      <div
        className={`outer banner grid h-full w-full place-items-center bg-[url('/assets/login/octa-banner.jpg')] bg-cover bg-no-repeat ${bannerClass}`}
        ref={authBannerRef}
      >
        <div
          className={`filter-layer-over-banner pseudo-clip-path z-[0] flex h-full w-full items-end justify-center max-md:items-center ${octagonOuterContainerClass}`}
        >
          <div
            className={`relative flex flex-col items-center justify-center max-md:h-[351px] max-md:w-[351px] md:h-[535px] md:w-[535px] ${octagonContainerClass}`}
          >
            {/* <Image src={TransparentOctagon} alt="transparent-octagon"  className={`absolute w-full h-full z-[-1] left-[50%] translate-x-[-50%] opacity-50`}/> */}
            <svg
              width="536"
              height="525"
              viewBox="0 0 536 525"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`absolute left-[50%] z-[-1] h-full w-full translate-x-[-50%] opacity-50`}
            >
              <g style={{ mixBlendMode: "multiply" }}>
                <path
                  d="M264.641 525L80.4901 453.589L1 264.763L78.1888 76.8787L266.846 0L456.51 79.1412L536 268.015L458.859 455.852L264.641 525Z"
                  fill="#1F0C4F"
                  fill-opacity="0.7"
                />
              </g>
              <path
                d="M263.629 525L79.4921 453.579L0 264.738L77.1928 76.9114L265.881 0L455.508 79.1722L534.578 266.952L535 267.921L457.76 455.84L263.629 525ZM265.881 5.62879L81.2284 80.8331L5.67801 264.738L83.5278 449.565L263.769 519.464L453.865 451.78L529.416 267.921L451.566 83.0477L265.881 5.58265"
                fill="#D9DAE1"
                fill-opacity="0.8"
              />
            </svg>

            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Octagon;
