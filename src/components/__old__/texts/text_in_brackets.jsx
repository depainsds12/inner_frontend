import React from "react";

const TextInBrackets = ({
  text = "",
  className = "",
  thin = { apply: false, color: "transparent", width: 0 },
  bracketHeight = 50,
  bracketWidth = 19,
}) => {
  return (
    <span className={`flex items-center justify-center gap-[1%] ${className}`}>
      <svg
        width={bracketWidth}
        height={bracketHeight}
        viewBox="0 -3 19 46"
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

      {text}

      <svg
        width={bracketWidth}
        height={bracketHeight}
        viewBox="0 -3 19 46"
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
    </span>
  );
};

export default TextInBrackets;
