/* eslint-disable react/display-name */
"use client";
import React, { forwardRef } from "react";

const TextWithBrackets = forwardRef(
  (
    {
      bracketsData,
      className,
      text = "",
      thin = { apply: false, width: 0, color: "transparent" },
    },
    ref,
  ) => {
    return (
      <p
        className={`flex items-center justify-center lg:h-fit ${className}`}
        ref={ref}
      >
        {bracketsData?.leftText ? (
          <span
            className={`${bracketsData.leftText.properties} mx-[2px] md:mx-1`}
          >
            {bracketsData.leftText.text}
          </span>
        ) : null}

        <svg
          width="19"
          height="46"
          viewBox="0 0 19 46"
          fill="inherit"
          xmlns="http://www.w3.org/2000/svg"
          strokeWidth={thin.apply ? thin.width : 0}
          stroke={thin.apply ? thin.color : "transparent"}
        >
          <path
            d="M0.707688 22.848L8.96369 0.383998H18.9957L11.2677 22.848L18.9957 45.312H8.96369L0.707688 22.848Z"
            fill="inherit"
          />
        </svg>
        <span
          className={`${bracketsData?.middleText?.properties} mx-[2px] md:mx-1`}
        >
          {bracketsData?.middleText.text}
        </span>
        <svg
          width="19"
          height="46"
          viewBox="0 0 19 46"
          fill="inherit"
          xmlns="http://www.w3.org/2000/svg"
          strokeWidth={thin.apply ? thin.width : 0}
          stroke={thin.apply ? thin.color : "transparent"}
        >
          <path
            d="M18.2837 22.848L10.0277 45.312H-0.00431246L7.72369 22.848L-0.00431246 0.383998H10.0277L18.2837 22.848Z"
            fill="inherit"
          />
        </svg>

        {bracketsData?.rightText ? (
          <span
            className={`${bracketsData.rightText.properties} mx-[2px] md:mx-1`}
          >
            {bracketsData.rightText.text}
          </span>
        ) : null}
      </p>
    );
  },
);

export default TextWithBrackets;
