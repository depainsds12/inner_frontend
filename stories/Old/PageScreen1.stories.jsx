import Screen1 from "@/src/components/__old__/pages/screen1";

export default {
  title: "Old/PageScreen1",
  component: Screen1,
  tags: ["autodocs"],
  argTypes: {
    category: { control: "text" },
    content: { control: "text" },
    categoryImage: { control: "text" },
  },
};

// Default story with sample props
export const Default = () => (
  <Screen1
    category="Nature"
    content="Around the world, a new awareness is blooming — that our emotions, like our bodies, are a part of nature, and that we can cultivate them like a garden."
    categoryImage="/path/to/category/image.jpg" // Replace with an actual image path
  />
);

// Mobile view story
export const MobileView = {
  render: () => (
    <div style={{ width: "100%", maxWidth: "375px" }}>
      <Screen1
        category="Mobile Nature"
        content="This is a mobile view of nature topics."
        categoryImage="/path/to/category/image.jpg" // Replace with an actual image path
      />
    </div>
  ),
};

// Tablet view story
export const TabletView = {
  render: () => (
    <div style={{ width: "100%", maxWidth: "768px" }}>
      <Screen1
        category="Tablet Nature"
        content="This is a tablet view of nature topics."
        categoryImage="/path/to/category/image.jpg" // Replace with an actual image path
      />
    </div>
  ),
};

// Desktop view story
export const DesktopView = {
  render: () => (
    <div style={{ width: "100%", maxWidth: "1200px" }}>
      <Screen1
        category="Desktop Nature"
        content="This is a desktop view of nature topics."
        categoryImage="/path/to/category/image.jpg" // Replace with an actual image path
      />
    </div>
  ),
};
