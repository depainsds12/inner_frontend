import WellgorithmFilterBtn from "@/src/components/__old__/welllgorithm-search/wellgo_filter_button"; // Adjust the import path as needed

export default {
  title: "Old/WellgorithmSearchWellgorithmFilterBtn",
  component: WellgorithmFilterBtn,
  tags: ["autodocs"],
  argTypes: {
    id: { control: "number" },
    text: { control: "text" },
    className: { control: "text" },
    angle: { control: "number" },
  },
};

// Default story
export const Default = () => (
  <WellgorithmFilterBtn id={1} text="Sample Filter" />
);

// Active filter story
export const ActiveFilter = () => (
  <WellgorithmFilterBtn id={2} text="Active Filter" />
);

// Custom style story
export const CustomStyle = () => (
  <WellgorithmFilterBtn id={3} text="Custom Style" className="bg-blue-500" />
);
