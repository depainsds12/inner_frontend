"use client";
import Calendar from "@/public/assets/dashboard/cal.svg";
import HeaderFlower from "@/public/assets/header/header-flower-icon.svg";
import HeaderLogo from "@/public/assets/header/header_logo.svg";
import ReaderIcon from "@/public/assets/header/reader-icon.svg";
import RxIconSmall from "@/public/assets/header/rx-icon-small.svg";
import RxIcon from "@/public/assets/header/rx-icon.svg";
import CloseIcon from "@/public/assets/journal-flow/close-icon.svg";
import useClipBuilder from "@/src/hooks/clip_path_calculations";
import { useDashboardFooterStore } from "@/src/store/DashboardFooterStore";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import TextInBrackets from "../texts/text_in_brackets";

const Header = () => {
  //const footerOpen = useSelector(footerToggle)
  const { footerOpen, setFooterOpen } = useDashboardFooterStore();
  //const dispatch = useDispatch()

  const titleRef = useRef(null);

  const toogleFooter = () => {
    //dispatch(
    setFooterOpen(!footerOpen);
    //)
  };

  const avatarRef = useRef(null);
  const avatarRefInner = useRef(null);
  const avatarNameRef = useRef(null);
  const { octagonClip, hexagonClip } = useClipBuilder();
  const [title, setTitle] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    octagonClip(avatarRef);
    octagonClip(avatarRefInner);
    hexagonClip(avatarNameRef, 10);
    hexagonClip(titleRef, 22);

    if (pathname?.includes("dna")) {
      setTitle("DNA");
    } else if (pathname?.includes("biome")) {
      setTitle("Biome");
    } else if (pathname?.includes("health")) {
      setTitle("Health");
    }
  }, [pathname, footerOpen]);

  const [avatarName, setAvatarName] = useState("martin");

  const path = pathname?.split("/").pop();

  let heading = path?.split("-")[1]
    ? path?.split("-")[1].charAt(0).toUpperCase() + path?.split("-")[1].slice(1)
    : "";

  if (heading?.includes("Dna")) {
    heading = "DNA";
  }

  return (
    <div className="absolute top-0 z-50 flex h-[80px] w-full justify-between bg-[#493973] px-5 xl:h-[88px]">
      <div className="my-auto flex h-[41px] w-[185px] justify-between xl:h-[50px] xl:w-[287px]">
        <Image
          src={HeaderLogo}
          alt="header-logo"
          className="h-[41px] w-[138px] xl:h-[50px] xl:w-[166px]"
        />
        <Image src={RxIcon} alt="rx-icon" className="max-xl:hidden" />
        <Image src={RxIconSmall} alt="rx-icon" className="xl:hidden" />
      </div>

      <div className="flex h-full items-start gap-3 py-3">
        <p className="text-nowrap font-semibold text-white">this week</p>
        <Image src={Calendar} className="" alt="cal" />
        <p className="text-nowrap font-semibold text-yellow-light">sep 10-16</p>

        <div
          className="absolute left-[50%] top-full z-30 grid h-[76px] w-[350px] translate-x-[-50%] place-items-center bg-[#564A8D] xl:h-[80px] xl:w-[500px] xl:translate-y-[-50%]"
          ref={titleRef}
        >
          <p className="relative flex items-center gap-1 text-[28px] font-black text-yellow-light xl:text-[40px]">
            <TextInBrackets
              text="inner"
              className="w-[60%] fill-[#FFF200] text-[28px] font-black text-white xl:text-[40px]"
            />
            {title}
            <span className="absolute right-[-5%] top-0 z-20 text-[8px] font-black text-yellow-light">
              TM
            </span>
          </p>
        </div>
      </div>

      <div className="my-auto flex h-[36px] w-[146px] justify-between xl:h-[63px] xl:w-[309px]">
        <Image src={HeaderFlower} alt="header-flower" className="" />
        <Image src={ReaderIcon} alt="reader-icon" className="" />
        <div className="relative flex h-[64px] w-[180px] items-center max-xl:hidden">
          <div
            className="z-10 grid h-[64px] !w-[64px] place-items-center bg-[#E9E7F5] p-[2px]"
            ref={avatarRef}
          >
            <div
              className="h-full w-full bg-[url('/assets/header/avatar.jpg')] bg-cover"
              ref={avatarRefInner}
            />
          </div>
          <div
            className="absolute left-[16%] z-0 flex h-[44px] w-[136px] items-center bg-[#AE5CAA] pl-[25%] text-[18px] font-semibold text-white"
            ref={avatarNameRef}
          >
            {avatarName}
          </div>
        </div>
        <Image
          src={CloseIcon}
          alt="close-icon"
          className="h-[38px] w-[48px] cursor-pointer xl:hidden"
          onClick={toogleFooter}
        />
      </div>
    </div>
  );
};

export default Header;
