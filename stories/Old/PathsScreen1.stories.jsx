import Screen1 from "@/src/components/__old__/paths/screen1";

export default {
  title: "Old/PathsScreen1",
  component: Screen1,
  tags: ["autodocs"],
};

// Default story
export const Default = () => <Screen1 />;

// Mobile view story
export const MobileView = {
  render: () => (
    <div style={{ width: "100%", maxWidth: "375px" }}>
      <Screen1 />
    </div>
  ),
};

// Tablet view story
export const TabletView = {
  render: () => (
    <div style={{ width: "100%", maxWidth: "768px" }}>
      <Screen1 />
    </div>
  ),
};

// Desktop view story
export const DesktopView = {
  render: () => (
    <div style={{ width: "100%", maxWidth: "1200px" }}>
      <Screen1 />
    </div>
  ),
};
