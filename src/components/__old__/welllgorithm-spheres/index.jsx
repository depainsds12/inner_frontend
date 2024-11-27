"use client";

import { useEffect, useState } from "react";

import Screen1 from "./screen1";
import Screen3 from "./screen3";

// h-[60vh] md:h-[60vw] xl:h-screen 3xl:h-[80vh]
export default function Index() {
  const [width, setWidth] = useState(null);
  const [view, setView] = useState(1);

  const x1 = view > 1 ? "51.7695" : "90.769";
  const x2 = view > 1 ? "121.7695" : "90.769";

  useEffect(() => {
    setWidth(innerWidth);
  }, []);

  return (
    <>
      <Screen1 />

      <button
        className={"w-full " + (width && width > 768 ? "" : "hidden")}
        onClick={() => {
          setView((view % 2) + 1);
        }}
      >
        <svg
          viewBox="0 0 173 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto w-[90px] sm:w-[120px] lg:w-[150px]"
        >
          <path
            d="M26.1287 13.5H25.5598L25.134 13.8773L24.0335 14.8523L4.06296 30.8287L2.64267 31.9649L4.02853 33.1429L24.0285 50.1429L24.4486 50.5H25H26.1287H150.465H151H151.609L152.045 50.0759L169.545 33.0759L170.653 32L169.545 30.9241L152.045 13.9241L151.609 13.5H151H150.465H26.1287Z"
            fill="white"
            stroke="#8858B5"
            strokeWidth="3"
          />
          <rect
            className="transition-all"
            x={x1}
            y="1.58579"
            width="42.6852"
            height="42.6852"
            transform={`rotate(45 ${x1} 1.58579)`}
            fill="#8858B5"
            stroke="white"
            strokeWidth="2"
          />
          <rect
            className="transition-all"
            x={x2}
            y="1.58579"
            width="42.6852"
            height="42.6852"
            transform={`rotate(45 ${x2} 1.58579)`}
            fill="#8858B5"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      </button>

      <Screen3 view={view} />
    </>
  );
}
