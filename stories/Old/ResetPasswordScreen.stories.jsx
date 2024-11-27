import Screen from "@/src/components/reset-password/reset-password_components/screen"; // Adjust the import path as needed

export default {
  title: "Old/ResetPasswordScreen",
  component: Screen,
  tags: ["autodocs"],
};

// Default story
export const Default = () => <Screen />;

// Mobile view story
export const MobileView = {
  render: () => (
    <div style={{ width: "100%", maxWidth: "375px" }}>
      <Screen />
    </div>
  ),
};

// Tablet view story
export const TabletView = {
  render: () => (
    <div style={{ width: "100%", maxWidth: "768px" }}>
      <Screen />
    </div>
  ),
};

// Desktop view story
export const DesktopView = {
  render: () => (
    <div style={{ width: "100%", maxWidth: "1200px" }}>
      <Screen />
    </div>
  ),
};
