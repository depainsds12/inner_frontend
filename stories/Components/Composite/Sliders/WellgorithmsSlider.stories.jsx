import WellgorithmCard from "@/src/components/__old__/polygon/composite_components/cards/wellgorithm";
import Slider from "@/src/components/__old__/slider/slider";
import Typography from "@/src/components/typography/typography";

export default {
  title: "Components/Composite/Slider/Wellgorthim",
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
    slides: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => <WellgorithmCard />),
    className: "w-full h-96",
    autoplay: false,
    spaceBetween: 50,
    title: (
      <Typography className="relative text-[#FFF200]" component="h2">
        wellgorithms
      </Typography>
    ),
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
