import JournalCard from "@/src/components/__old__/header/_components/journalCard";

export default {
  title: "Old/HeaderJournalCard",
  component: JournalCard,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    challenge: { control: "text" },
  },
};

export const Default = {
  args: {
    title: "⟨Peace⟩ Journey",
    challenge:
      "Welcome the crackling anxieties, knowing they'll soon wither in the wind.",
  },
};

export const CustomTitle = {
  args: {
    ...Default.args,
    title: "⟨Love⟩ Adventure",
  },
};

export const LongChallenge = {
  args: {
    ...Default.args,
    challenge:
      "This is a much longer challenge text that will test how the card handles larger amounts of content. It might wrap to multiple lines or require scrolling.",
  },
};

export const NoTitle = {
  args: {
    ...Default.args,
    title: "",
  },
};

export const NoChallenge = {
  args: {
    ...Default.args,
    challenge: "",
  },
};

export const MobileView = {
  args: {
    ...Default.args,
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

export const TabletView = {
  args: {
    ...Default.args,
  },
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
};

export const DesktopView = {
  args: {
    ...Default.args,
  },
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
  },
};
