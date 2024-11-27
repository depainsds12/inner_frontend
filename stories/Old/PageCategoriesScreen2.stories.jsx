import Screen2 from "@/src/components/__old__/pages/categories/screen2";

export default {
  title: "Old/PageCategoriesScreen2",
  component: Screen2,
  tags: ["autodocs"],
  argTypes: {
    topics: { control: "array" },
  },
};

// Default story with sample topics
export const Default = () => {
  const sampleTopics = [
    {
      _id: "1",
      topicName: "Nature",
      content: "Nature is beautiful and diverse.",
    },
    {
      _id: "2",
      topicName: "Technology",
      content: "Technology is rapidly evolving.",
    },
    { _id: "3", topicName: "Art", content: "Art expresses human creativity." },
    {
      _id: "4",
      topicName: "Science",
      content: "Science helps us understand the world.",
    },
  ];

  return <Screen2 topics={sampleTopics} />;
};

// Mobile view story
export const MobileView = {
  render: () => {
    const sampleTopics = [
      {
        _id: "1",
        topicName: "Mobile Nature",
        content: "Mobile view of nature topics.",
      },
      {
        _id: "2",
        topicName: "Mobile Technology",
        content: "Mobile view of technology topics.",
      },
    ];

    return (
      <div style={{ width: "100%", maxWidth: "375px" }}>
        <Screen2 topics={sampleTopics} />
      </div>
    );
  },
};

// Tablet view story
export const TabletView = {
  render: () => {
    const sampleTopics = [
      {
        _id: "1",
        topicName: "Tablet Nature",
        content: "Tablet view of nature topics.",
      },
      {
        _id: "2",
        topicName: "Tablet Technology",
        content: "Tablet view of technology topics.",
      },
    ];

    return (
      <div style={{ width: "100%", maxWidth: "768px" }}>
        <Screen2 topics={sampleTopics} />
      </div>
    );
  },
};

// Desktop view story
export const DesktopView = {
  render: () => {
    const sampleTopics = [
      {
        _id: "1",
        topicName: "Desktop Nature",
        content: "Desktop view of nature topics.",
      },
      {
        _id: "2",
        topicName: "Desktop Technology",
        content: "Desktop view of technology topics.",
      },
    ];

    return (
      <div style={{ width: "100%", maxWidth: "1200px" }}>
        <Screen2 topics={sampleTopics} />
      </div>
    );
  },
};
