"use client";

import Image from "next/image";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

type CustomCheckboxProps = {
  label: string;
  checked?: boolean;
  onChange: (state: boolean) => void;
  className?: string;
};

const CustomCheckbox = ({
  label,
  checked = false,
  onChange,
  className,
}: CustomCheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (state: boolean) => {
    setIsChecked(state);
    onChange(state);
  };

  return (
    <label
      className={twMerge("flex cursor-pointer items-center gap-2", className)}
    >
      <div className="relative">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => handleChange(e.target.checked)}
          className="hidden"
        />
        <div className="flex items-center justify-center">
          <Image
            src="/assets/icons/check-octagon.svg"
            alt="Checked"
            width={50}
            height={50}
          />
          {isChecked && (
            <Image
              src="/assets/icons/check-mark.svg"
              alt="Checked"
              width={28}
              height={28}
              className="absolute z-10"
            />
          )}
        </div>
      </div>
      <span className="text-base font-extrabold text-white">{label}</span>
    </label>
  );
};

export default CustomCheckbox;
