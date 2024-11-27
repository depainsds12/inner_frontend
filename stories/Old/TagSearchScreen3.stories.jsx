import Screen3 from "@/src/components/__old__/tag-search/screen3"; // Adjust the import path as needed

export default {
  title: "Old/TagSearchScreen3",
  component: Screen3,
  tags: ["autodocs"],
};

// Default story
export const Default = () => <Screen3 />;

// Mobile view story
export const MobileView = {
  render: () => (
    <div style={{ width: "100%", maxWidth: "375px" }}>
      <Screen3 />
    </div>
  ),
};

// Tablet view story
export const TabletView = {
  render: () => (
    <div style={{ width: "100%", maxWidth: "768px" }}>
      <Screen3 />
    </div>
  ),
};

// Desktop view story
export const DesktopView = {
  render: () => (
    <div style={{ width: "100%", maxWidth: "1200px" }}>
      <Screen3 />
    </div>
  ),
};
