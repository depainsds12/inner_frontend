"use client";

import { useState } from "react";

import Screen1 from "./screen1";
import Screen2 from "./screen2";
import Screen3 from "./screen3";

// h-[60vh] md:h-[60vw] xl:h-screen 3xl:h-[80vh]
export default function Index() {
  const [view, setView] = useState(2);

  return (
    <>
      <Screen1 />

      {view == 2 ? <Screen2 /> : <Screen3 />}
    </>
  );
}
