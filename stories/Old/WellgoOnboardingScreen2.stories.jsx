import Screen2 from "@/src/components/__old__/wellgo-onboarding/screen2"; // Adjust the import path as needed

export default {
  title: "Old/WellgoOnboardingScreen2",
  component: Screen2,
  tags: ["autodocs"],
  argTypes: {
    selectedBigTrapezoidPosition: { control: "number" }, // Assuming this prop is a number
  },
};

// Default story
export const Default = () => <Screen2 />;

// Mobile view story
export const MobileView = {
  render: () => (
    <div style={{ width: "100%", maxWidth: "375px" }}>
      <Screen2 />
    </div>
  ),
};

// Tablet view story
export const TabletView = {
  render: () => (
    <div style={{ width: "100%", maxWidth: "768px" }}>
      <Screen2 />
    </div>
  ),
};

// Desktop view story
export const DesktopView = {
  render: () => (
    <div style={{ width: "100%", maxWidth: "1200px" }}>
      <Screen2 />
    </div>
  ),
};
