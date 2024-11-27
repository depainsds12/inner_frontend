import HeadAvatar from "@/src/components/__old__/paths/screen2"; // Adjust the import based on your file structure
import { useState } from "react";

export default {
  title: "Old/PathsHeadAvatar (Screen 2)",
  component: HeadAvatar,
  tags: ["autodocs"],
  argTypes: {
    open: { control: "boolean" },
    setOpen: { action: "setOpen" },
  },
};

// Default story
export const Default = () => {
  const [open, setOpen] = useState(false);

  return <HeadAvatar open={open} setOpen={setOpen} />;
};

// Mobile view story
export const MobileView = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div style={{ width: "100%", maxWidth: "375px" }}>
        <HeadAvatar open={open} setOpen={setOpen} />
      </div>
    );
  },
};

// Tablet view story
export const TabletView = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div style={{ width: "100%", maxWidth: "768px" }}>
        <HeadAvatar open={open} setOpen={setOpen} />
      </div>
    );
  },
};

// Desktop view story
export const DesktopView = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div style={{ width: "100%", maxWidth: "1200px" }}>
        <HeadAvatar open={open} setOpen={setOpen} />
      </div>
    );
  },
};
