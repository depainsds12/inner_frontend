import Screen1 from "@/src/components/__old__/pages/categories/screen1";

export default {
  title: "Old/PageCategoriesScreen1",
  component: Screen1,
  tags: ["autodocs"],
  argTypes: {
    category: { control: "text" },
    content: { control: "text" },
    categoryImage: { control: "text" },
  },
};

// Default story
export const Default = () => (
  <Screen1
    category="Flowers"
    content="Motions, like our bodies, are a part of nature, and that we can cultivate them like a garden."
    categoryImage="/path/to/category/image.jpg" // Replace with actual image path
  />
);

// Mobile view story
export const MobileView = {
  render: () => (
    <div style={{ width: "100%", maxWidth: "375px" }}>
      <Screen1
        category="Mobile Flowers"
        content="This is a mobile view of the flowers category."
        categoryImage="/path/to/category/image.jpg" // Replace with actual image path
      />
    </div>
  ),
};

// Tablet view story
export const TabletView = {
  render: () => (
    <div style={{ width: "100%", maxWidth: "768px" }}>
      <Screen1
        category="Tablet Flowers"
        content="This is a tablet view of the flowers category."
        categoryImage="/path/to/category/image.jpg" // Replace with actual image path
      />
    </div>
  ),
};

// Desktop view story
export const DesktopView = {
  render: () => (
    <div style={{ width: "100%", maxWidth: "1200px" }}>
      <Screen1
        category="Desktop Flowers"
        content="This is a desktop view of the flowers category."
        categoryImage="/path/to/category/image.jpg" // Replace with actual image path
      />
    </div>
  ),
};
