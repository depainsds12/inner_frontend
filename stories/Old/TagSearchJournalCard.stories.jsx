import JournalCardsWithTagSection from "@/src/components/__old__/tag-search/journalCardsWithTagSection"; // Adjust the import path as needed

export default {
  title: "Old/TagSearchJournalCardsWithTagSection",
  component: JournalCardsWithTagSection,
  tags: ["autodocs"],
};

// Default story
export const Default = () => <JournalCardsWithTagSection />;

// Mobile view story
export const MobileView = {
  render: () => (
    <div style={{ width: "100%", maxWidth: "375px" }}>
      <JournalCardsWithTagSection />
    </div>
  ),
};

// Tablet view story
export const TabletView = {
  render: () => (
    <div style={{ width: "100%", maxWidth: "768px" }}>
      <JournalCardsWithTagSection />
    </div>
  ),
};

// Desktop view story
export const DesktopView = {
  render: () => (
    <div style={{ width: "100%", maxWidth: "1200px" }}>
      <JournalCardsWithTagSection />
    </div>
  ),
};
