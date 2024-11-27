"use client";

import Screen1 from "./screen1";
import Screen3 from "./screen3";

// h-[60vh] md:h-[60vw] xl:h-screen 3xl:h-[80vh]
export default function Index() {
  return (
    <>
      <Screen1 />
      <Screen3 />
    </>
  );
}
