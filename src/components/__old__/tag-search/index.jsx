"use client";

import { useState } from "react";

import Screen from "./screen";
import Screen2 from "./screen2";
import Screen3 from "./screen3";

// h-[60vh] md:h-[60vw] xl:h-screen 3xl:h-[80vh]
export default function Index() {
  const [view, setView] = useState(2);
  const [cutContent, setCutContent] = useState(false);

  const x1 = view == 2 ? "51.7695" : "90.769";
  const x2 = view == 2 ? "121.7695" : "90.769";

  return (
    <>
      <Screen />

      <button
        className="mt-5 hidden w-full lg:block"
        onClick={() => {
          setView((view % 2) + 1);
        }}
      >
        <svg
          viewBox="0 0 173 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto w-[163px]"
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
      <button
        className="mt-3 block w-full lg:hidden"
        onClick={() => {
          setCutContent(!cutContent);
        }}
      >
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto w-[50px]"
        >
          <g clip-path="url(#clip0_5033_33840)">
            {cutContent ? (
              <></>
            ) : (
              <>
                <path
                  d="M25.0003 1.11816L8.13036 8.13036L1.11816 25.0003L8.13036 41.8702L25.0003 48.8824L41.8702 41.8702L48.8824 25.0003L41.8702 8.13036L25.0003 1.11816Z"
                  fill="white"
                />
              </>
            )}
            <path
              d="M25.0003 1.11816L8.13036 8.13036L1.11816 25.0003L8.13036 41.8702L25.0003 48.8824L41.8702 41.8702L48.8824 25.0003L41.8702 8.13036L25.0003 1.11816Z"
              stroke="#D6D1E8"
              stroke-width="2.024"
            />
            <path
              d="M7.92723 8.13036L0.915039 25.0003H48.6793L41.6671 8.13036L24.7972 1.11816L7.92723 8.13036Z"
              fill="#AD5DA4"
            />
            <path
              d="M48.6793 25.0003L41.6671 8.13036L24.7972 1.11816L7.92723 8.13036L0.915039 25.0003"
              stroke="#D6D1E8"
              stroke-width="2.024"
            />
            {cutContent ? (
              <></>
            ) : (
              <>
                <path d="M13.415 30.4883H38.8215" stroke="#855AA5" />
                <path d="M15.9551 34.8574H36.2803" stroke="#855AA5" />
                <path d="M19.0039 39.126H33.2315" stroke="#855AA5" />
              </>
            )}
          </g>
          <defs>
            <clipPath id="clip0_5033_33840">
              <rect width="50" height="50" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>

      {view == 1 ? <Screen3 /> : <Screen2 cutContent={cutContent} />}
    </>
  );
}
