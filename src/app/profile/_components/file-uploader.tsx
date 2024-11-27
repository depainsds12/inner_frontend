"use client";

import React, { useRef } from "react";
import { twMerge } from "tailwind-merge";

interface FileUploaderProps {
  handleFileChange: () => void;
  accept?: string;
  children: React.ReactNode;
  className?: string;
  text?: string;
}

const FileUploader = ({
  handleFileChange,
  accept = "image/*",
  children,
  className,
  text,
}: FileUploaderProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <div
      onClick={handleClick}
      className={twMerge(
        "relative z-10 flex cursor-pointer items-center gap-2",
        className,
      )}
    >
      <input
        type="file"
        ref={inputRef}
        onChange={handleFileChange}
        accept={accept}
        className="hidden"
      />
      {children}
      <p className="hidden text-[14px] font-medium text-white lg:block lg:text-[16px]">
        {text}
      </p>
    </div>
  );
};

export default FileUploader;
