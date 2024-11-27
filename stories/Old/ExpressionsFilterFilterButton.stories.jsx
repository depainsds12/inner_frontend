// FilterBtn.stories.js
import FilterBtn from "@/src/components/__old__/expressions_filter/filter_btn";

export default {
  title: "Old/ExpressionsFilterFilterBtn",
  component: FilterBtn,
  argTypes: {
    id: { control: "number" },
    text: { control: "text" },
    className: { control: "text" },
    angle: { control: "number" },
  },
};

export const Default = {
  args: {
    id: 0,
    text: "Filter",
    className: "",
    angle: 15,
  },
};
