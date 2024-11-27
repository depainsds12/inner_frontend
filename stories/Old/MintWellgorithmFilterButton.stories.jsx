import WellgorithmFilterBtn from "@/src/components/__old__/mint/wellgo_filter_button";

export default {
  title: "Old/MintWellgorithmFilterBtn",
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
  <WellgorithmFilterBtn id={1} text="Filter Option 1" className="" angle={15} />
);

// Active state story
export const ActiveState = () => (
  <WellgorithmFilterBtn id={2} text="Active Filter" className="" angle={15} />
);

// Custom class story
export const CustomClass = () => (
  <WellgorithmFilterBtn
    id={3}
    text="Custom Filter"
    className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
    angle={15}
  />
);

// Story with different angles
export const WithDifferentAngles = () => (
  <WellgorithmFilterBtn id={4} text="Different Angle" className="" angle={30} />
);

// Mobile view story
export const MobileView = {
  render: () => (
    <div style={{ width: "100%", maxWidth: "375px" }}>
      <WellgorithmFilterBtn
        id={1}
        text="Mobile Filter"
        className=""
        angle={15}
      />
    </div>
  ),
};

// Tablet view story
export const TabletView = {
  render: () => (
    <div style={{ width: "100%", maxWidth: "768px" }}>
      <WellgorithmFilterBtn
        id={1}
        text="Tablet Filter"
        className=""
        angle={15}
      />
    </div>
  ),
};

// Desktop view story
export const DesktopView = {
  render: () => (
    <div style={{ width: "100%", maxWidth: "1200px" }}>
      <WellgorithmFilterBtn
        id={1}
        text="Desktop Filter"
        className=""
        angle={15}
      />
    </div>
  ),
};
