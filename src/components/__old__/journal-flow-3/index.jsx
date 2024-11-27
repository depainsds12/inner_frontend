"use client";

import { useState } from "react";

import Screen1 from "./screen1";

export const STEPS = {
  sphere: 1,
  zone: 2,
  journal: 3,
};

// h-[60vh] md:h-[60vw] xl:h-screen 3xl:h-[80vh]
export default function Index() {
  const [step, setStep] = useState(STEPS.sphere);

  return (
    <>
      <Screen1 step={step} setStep={setStep} />
    </>
  );
}
