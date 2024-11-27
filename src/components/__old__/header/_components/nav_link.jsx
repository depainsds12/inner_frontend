"use client";

import Link from "next/link";

import { useEffect, useRef } from "react";

import useClipBuilder from "@/src/hooks/clip_path_calculations";

const NavLink = ({
  id = 0,
  text = "",
  href = "",
  className = "",
  active = false,
  angle = 12,
}) => {
  const elementRef = useRef();

  const { hexagonClip } = useClipBuilder();

  useEffect(() => {
    active && hexagonClip(elementRef, angle);
  }, [hexagonClip, angle]);

  return (
    <Link
      href={href}
      ref={elementRef}
      className={`${active ? "bg-purple-mid px-9 font-extrabold text-yellow-dark" : "px-0 font-semibold text-white"} w-fit py-2.5 text-center text-lg ${className}`}
    >
      {text}
    </Link>
  );
};

export default NavLink;
