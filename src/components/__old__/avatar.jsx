"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

import HeaderAvatar from "@/public/assets/spheres/avatar.png";

import useClipBuilder from "@/src/hooks/clip_path_calculations";

const UserAvatar = ({
  className = "",
  secClassName = "",
  textClassName = "",
  imageClassName = "",
  angle = 9,
}) => {
  const avatarTextContRef = useRef(null);
  const avatarTextRef = useRef(null);

  const { arrowClip } = useClipBuilder();

  useEffect(() => {
    arrowClip(avatarTextContRef, angle);
    arrowClip(avatarTextRef, angle);
  }, []);

  return (
    <div
      className={twMerge(
        "absolute left-1/2 top-full flex w-max translate-x-[-50%] translate-y-[-50%] items-center",
        className,
      )}
    >
      <Image
        src={HeaderAvatar}
        alt="avatar"
        className={twMerge("z-10 w-[111px]", imageClassName)}
      />
      <section
        className={twMerge("mx-[-20px]", secClassName)}
        ref={avatarTextContRef}
      >
        <p
          ref={avatarTextRef}
          className={twMerge(
            "bg-purple-bg-dark text-nowrap px-10 py-3 font-bold text-[#D5D1ED]",
            textClassName,
          )}
        >
          jackie miller
        </p>
      </section>
    </div>
  );
};

export default UserAvatar;
