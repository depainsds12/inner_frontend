"use client";

import Background from "@/src/components/image/background";
import Invitation from "@/src/components/__old__/polygon/composite_components/main/invitation";

const JoinUsPage = () => {
  return (
    <div className="relative bg-gradient-to-b from-[#100E1A] from-[400px] to-[#8858B5]">
      <Background
        image={{
          height: 600,
          src: "/assets/images/bg-empty.png",
          alt: "hero",
        }}
        extension={{
          src: "/assets/images/bg-net.svg",
          height: 540,
        }}
      />
      <Invitation />
    </div>
  );
};

export default JoinUsPage;
