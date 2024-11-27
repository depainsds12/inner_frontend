"use client";

import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

import HeaderAvatar from "@/public/assets/dashboard/avatar.svg";
import Calendar from "@/public/assets/dashboard/cal.svg";
import HeaderCreate from "@/public/assets/dashboard/create-top.svg";
import HeaderFormula from "@/public/assets/dashboard/formula.png";
import HeaderRead from "@/public/assets/dashboard/read.svg";
import HeaderLogo from "@/public/assets/header/header_logo.svg";

// import NavLink from "./components/nav_link";
// import MobileNav from "./mobile_nav";
// import MoreDrawer from "./more_drawer";

// import LinkComp from "@/src/components/link_component";
// import TextInBrackets from "@/src/components/texts/text_in_brackets";
// import SearchDrawer from "./search_drawer";
// import PeopleDirectory from "./people_directory";

import useClipBuilder from "@/src/hooks/clip_path_calculations";
// import the action
import { useSphereFilterStore } from "@/src/store/SphereFilterStore";
import LabelComponent from "../label";

const DashboardHeader = () => {
  const pathname = usePathname();

  //const dispatch = useDispatch();
  //const sphereFilter = useSelector((state) => state.sphere.sphereFilter);  // access the sphereFilter from Redux
  const { sphereFilter } = useSphereFilterStore();

  const flowersRef = useRef(null);
  const shadowsRef = useRef(null);
  const ripplesRef = useRef(null);

  const { hexagonClip } = useClipBuilder();

  useEffect(() => {
    hexagonClip(flowersRef);
    hexagonClip(shadowsRef);
    hexagonClip(ripplesRef);
  }, []);

  const path = pathname.split("/").pop();

  return (
    <header
      className={`fixed left-0 top-0 z-50 flex h-[80px] w-full items-center justify-between bg-[#493973] px-9 text-white lg:h-[88px]`}
    >
      <div className="flex items-center gap-9">
        <Link href={"/public"} className="h-[50px] w-[166px]">
          <Image src={HeaderLogo} alt="Inner Logo" className="w-full" />
        </Link>
        <Image
          src={HeaderFormula}
          alt="Inner Logo"
          className="h-[39px] w-[81px]"
        />
      </div>

      <div className="flex h-full items-start gap-3 py-3">
        <p className="text-nowrap font-semibold">this week</p>
        <Image src={Calendar} className="" alt="cal" />
        <p className="text-nowrap font-semibold text-yellow-light">sep 10-16</p>

        <LabelComponent
          shape="hexagon"
          text={[path.split("-")[0], path.split("-")[1]?.toUpperCase()]}
          thin={{ apply: true, width: 2, color: "#564A8D" }}
          containerClassName="bg-[#564A8D] w-[500px] h-[76px] absolute top-full -translate-y-1/2 left-1/2 -translate-x-1/2"
          className="!gap-0 bg-[#564A8D] text-[40px]"
          textClasses="font-extrabold"
          angle={24}
          bracketClassName="w-[33%] font-extrabold"
        />
      </div>

      <div className="flex items-center gap-6">
        <Image alt="create" src={HeaderCreate} />
        <Image alt="create" src={HeaderRead} />
        <Image alt="avatar" src={HeaderAvatar} className="h-[63px] w-[179px]" />
      </div>
    </header>
  );
};
export default DashboardHeader;
