"use client";

import Logo from "@/public/assets/login/logo.svg";
import useBreakpoints from "@/src/hooks/media_query";
import Image from "next/image";
import Polygon from "../../../components/polygon/polygon";
import Typography from "@/src/components/typography/typography";
import { generateHexagonPoints } from "@/src/components/polygon/utils";

const JoinUsLink = ({ message }: { message: string }) => {
  const { isLg, isMd } = useBreakpoints();
  const btnWidth = isLg ? 172 : 232;

  return (
    <div className="flex scale-[0.9] flex-col items-center justify-center gap-3 sm:scale-[1] md:flex-row lg:flex-col">
      <Typography
        className="font-semibold text-white"
        variant={isMd ? "sm" : "base"}
      >
        {message}
      </Typography>
      <Polygon
        points={generateHexagonPoints({ width: btnWidth, height: 60 })}
        stroke="#FFF200"
        strokeWidth={3}
        fill="#8858B5"
        style={{
          width: `${btnWidth}px`,
          cursor: "pointer",
        }}
      >
        <Typography className="!text-[28px] font-extrabold text-[#FFF200]">
          join us
        </Typography>
      </Polygon>
    </div>
  );
};

const AuthHeader = () => {
  return (
    <div className="absolute top-0 z-20 flex h-[120px] w-full bg-transparent px-[30px] py-5">
      <div className="flex w-full items-start justify-between">
        <Image src={Logo.src} alt="logo" width={180} height={50} />
        <JoinUsLink message="don't have an account?" />
      </div>
    </div>
  );
};

export default AuthHeader;
