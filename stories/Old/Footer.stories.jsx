import Footer from "@/src/components/__old__/footer/index";

export default {
  title: "Old/Footer",
  component: Footer,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export const Default = {
  args: {
    heading: "Subscribe to Wellgorithms Weekly",
    sub: "A weekly dose of Wellgorithms to warm your heart, invigorate your mind, and inspire resilience in adversity.",
  },
};

export const CustomHeading = {
  args: {
    heading: "Join Our Newsletter",
    sub: "Stay updated with the latest Wellgorithms and insights.",
  },
};

export const LongSubtext = {
  args: {
    heading: "Subscribe Now",
    sub: "Discover weekly Wellgorithms that will transform your perspective, boost your mental well-being, and help you navigate life's challenges with grace and resilience. Join our growing community of mindful individuals today!",
  },
};

export const ShortContent = {
  args: {
    heading: "Quick Subscribe",
    sub: "Get weekly Wellgorithms.",
  },
};
