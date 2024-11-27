import JournalCardsWithTagSection from "@/src/components/__old__/awarenest/journalCardsSection.jsx";
import Screen1 from "@/src/components/__old__/awarenest/screen1.jsx";

export default function Index() {
  return (
    <>
      <div className="3xl:h-[80vh] h-[45vh] md:h-[60vw] xl:h-screen">
        <Screen1 />
      </div>

      <JournalCardsWithTagSection bgColor=" bg-gradient-to-r from-[#815DB0] to-[#36274A] " />

      <JournalCardsWithTagSection bgColor=" bg-gradient-to-r from-[#534C8A] to-[#3E3865] " />

      <JournalCardsWithTagSection bgColor=" bg-gradient-to-r from-[#536DA7] to-[#4868B2] " />

      <JournalCardsWithTagSection bgColor=" bg-gradient-to-r from-[#AC74F2] to-[#7D56B0] " />

      <JournalCardsWithTagSection bgColor=" bg-gradient-to-r from-[#534C8A] to-[#3E3865] " />
    </>
  );
}
