import FlowerCard from "@/src/components/__old__/polygon/composite_components/cards/flower";
import Slider from "@/src/components/__old__/slider/slider";
import Typography from "@/src/components/typography/typography";

export default {
  title: "Components/Composite/Slider/Flower",
  component: Slider,
  argTypes: {
    slides: { control: "object" },
    className: { control: "text" },
    autoplay: { control: "boolean" },
  },
  parameters: {
    layout: "fullscreen",
  },
};

export const Default = {
  args: {
    titlePosition: "middle",
    title: (
      <Typography className="relative w-full text-center text-[#D5D1ED]">
        trending
      </Typography>
    ),
    slides: [0, 1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
      <FlowerCard
        data={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 19, 11, 12, 13, 14]}
        key={index}
      />
    )),
    className: "w-full h-full",
    autoplay: false,
    spaceBetween: 50,
    buttonPosition: "sides",
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      // when window width is >= 480px
      834: {
        slidesPerView: 1,
      },
      // when window width is >= 768px
      1440: {
        slidesPerView: 1,
      },
    },
  },
};

export const AutoplayEnabled = {
  args: {
    ...Default.args,
    autoplay: true,
  },
};

export const NoSlides = {
  args: {
    slides: [],
  },
};
