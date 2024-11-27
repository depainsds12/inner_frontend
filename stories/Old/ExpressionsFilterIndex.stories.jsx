import ExpressionFilter from "@/src/components/__old__/expressions_filter/index";

export default {
  title: "Old/ExpressionFilterIndex", // Title for the story
  component: ExpressionFilter,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    data: [
      { id: 1, name: "peace" },
      { id: 2, name: "love" },
      { id: 3, name: "kindness" },
      { id: 4, name: "gratitude" },
      { id: 5, name: "hope" },
      { id: 6, name: "humility" },
    ],
  },
};

export const Empty = {
  args: {
    data: [],
  },
};

export const LongList = {
  args: {
    data: [
      { id: 1, name: "peace" },
      { id: 2, name: "love" },
      { id: 3, name: "kindness" },
      { id: 4, name: "gratitude" },
      { id: 5, name: "hope" },
      { id: 6, name: "humility" },
      { id: 7, name: "patience" },
      { id: 8, name: "forgiveness" },
      { id: 9, name: "compassion" },
      { id: 10, name: "empathy" },
    ],
  },
};

export const SingleItem = {
  args: {
    data: [{ id: 1, name: "solitude" }],
  },
};
