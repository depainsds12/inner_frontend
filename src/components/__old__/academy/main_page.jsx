"use client";

import { useEffect, useRef, useState } from "react";

import Screen2 from "./screen2";
import WaitlistModal from "./waitlist_modal";

import useClipBuilder from "@/src/hooks/clip_path_calculations";

const MainPage = () => {
  const [open, setOpen] = useState(false);

  const containerHexagonRef = useRef(null);

  const { hexagonClip } = useClipBuilder();

  useEffect(() => {
    hexagonClip(containerHexagonRef, 70);

    return () => {
      document.querySelector("body").style.background = "#1B225A";
    };
  }, []);

  return (
    <>
      <div className="mb-3 h-[70vh] border-2 border-black bg-[url('/assets/academy/background.png')]">
        <div ref={containerHexagonRef}></div>
      </div>
      <Screen2 setOpen={setOpen}>
        <WaitlistModal open={open} />
      </Screen2>
    </>
  );
};
export default MainPage;
