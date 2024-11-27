import {
  ChevronLeft,
  ChevronRight,
} from "@/src/components/__old__/icons/icons";
import useBreakpoints from "@/src/hooks/media_query";
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Polygon from "../../polygon/polygon";

import { generateOctagonPoints } from "@/src/components/polygon/utils";

const Slider = (props) => {
  const { isSm, isMd, isLg } = useBreakpoints();
  const {
    slides = [],
    className = "",
    autoplay = false,
    spaceBetween = 0,
    breakpoints = {
      320: { slidesPerView: 1 },
      834: { slidesPerView: 2 },
      1440: { slidesPerView: 3 },
    },
    title = "",
    buttonPosition = "top-right",
    titlePosition = "top",
  } = props;

  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const shouldShowButtons = () => {
    if (isLg) return breakpoints[1440].slidesPerView;
    if (isMd) return breakpoints[834].slidesPerView;
    return breakpoints[320].slidesPerView;
  };

  const normalizeIndex = (index) => {
    if (!slides.length) return 0;
    return ((index % slides.length) + slides.length) % slides.length;
  };

  const CustomPagination = () => {
    return (
      <div className="mt-4 flex justify-center gap-2 pb-10">
        {slides.map((_, i) => {
          const normalizedActiveIndex = normalizeIndex(activeIndex);
          return (
            <Polygon
              style={{
                width: "20px",
                transition: "fill 0.3s ease",
                cursor: "pointer",
              }}
              rotation={90}
              points={generateOctagonPoints({ width: 30, height: 30 })}
              fill={
                normalizedActiveIndex === i
                  ? "#FFF200"
                  : normalizedActiveIndex > i
                    ? "#AE5CAA"
                    : "none"
              }
              stroke={normalizedActiveIndex !== i ? "#8C81CB" : "none"}
              strokeWidth={2}
              key={i}
              onClick={() => {
                if (!isTransitioning) {
                  swiperRef.current?.swiper.slideTo(i);
                }
              }}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div className={`w-full ${isSm ? "" : "p-4"} ${className}`}>
      <div
        className={`flex items-center justify-between ${isSm ? "px-4" : ""}`}
      >
        {titlePosition === "top" && title}
        {slides?.length > shouldShowButtons() &&
          buttonPosition === "top-right" && (
            <div className="relative left-2 flex gap-2">
              <button
                style={{ pointerEvents: "all" }}
                onClick={() =>
                  !isTransitioning && swiperRef.current?.swiper.slidePrev()
                }
                className="disabled:opacity-50"
                disabled={isTransitioning}
              >
                <ChevronRight fill="#FFF200" />
              </button>
              <button
                style={{ pointerEvents: "all" }}
                onClick={() =>
                  !isTransitioning && swiperRef.current?.swiper.slideNext()
                }
                className="disabled:opacity-50"
                disabled={isTransitioning}
              >
                <ChevronLeft fill="#FFF200" />
              </button>
            </div>
          )}
      </div>

      <div className="relative">
        {slides?.length > shouldShowButtons() && buttonPosition === "sides" && (
          <div className="pointer-events-none absolute inset-0 top-[0px] z-10 flex items-center justify-between px-2">
            <button
              style={{ pointerEvents: "all" }}
              onClick={() =>
                !isTransitioning && swiperRef.current?.swiper.slidePrev()
              }
              className="rounded-full p-2"
              disabled={isTransitioning}
            >
              <ChevronRight fill="#D4D1E6" />
            </button>
            <button
              onClick={() =>
                !isTransitioning && swiperRef.current?.swiper.slideNext()
              }
              style={{ pointerEvents: "all" }}
              className="p-2"
              disabled={isTransitioning}
            >
              <ChevronLeft fill="#FFF200" />
            </button>
          </div>
        )}

        <CustomPagination />
        {titlePosition === "middle" && title}
        <Swiper
          ref={swiperRef}
          autoplay={autoplay}
          loop={true}
          breakpoints={breakpoints}
          modules={[Autoplay, Pagination]}
          spaceBetween={isSm ? 0 : spaceBetween}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
          }}
          onTransitionStart={() => setIsTransitioning(true)}
          onTransitionEnd={() => setIsTransitioning(false)}
        >
          {slides?.map((slide, index) => (
            <SwiperSlide key={`slide_${index}`}>{slide}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
