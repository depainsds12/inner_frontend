"use client";

import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import MenuClose from "@/public/assets/header/close_menu.svg";
import FlowerSVG from "@/public/assets/header/flower.svg";
import Avatar from "@/public/assets/header/header_avatar.svg";
import HeaderLogo from "@/public/assets/header/header_logo.svg";
import HeaderWellgorithm from "@/public/assets/header/header_wellgorithm.svg";
import HeaderWellgorithmActive from "@/public/assets/header/header_wellgorithm_orange.svg";
import LeafSVG from "@/public/assets/header/leaf.svg";
import MenuOpen from "@/public/assets/header/menu.svg";
import PeopleSVG from "@/public/assets/header/people.svg";
import Search from "@/public/assets/header/search.svg";
import HeaderSmallWellgorithmActive from "@/public/assets/header/small_active_wellgo.svg";
import HeaderSmallWellgorithm from "@/public/assets/header/small_wellgo.svg";

import LinkComp from "@/src/components/__old__/link";
import useClipBuilder from "@/src/hooks/clip_path_calculations";
import MobileNav from "./mobile_nav";
import MoreDrawer from "./more_drawer";
import PeopleDirectory from "./people_directory";
import SearchDrawer from "./search_drawer";
// import the action
import { useSphereFilterStore } from "@/src/store/SphereFilterStore";

const Header = () => {
  const [openPeopleDirectory, setOpenPeopleDirectory] = useState(false);
  const [openMoreDrawer, setOpenMoreDrawer] = useState(false);
  const [openSearchDrawer, setOpenSearchDrawer] = useState(false);
  const [openMobileNav, setOpenMobileNav] = useState(false);

  const pathname = usePathname();

  const handlePeopleClick = () => {
    setOpenPeopleDirectory(!openPeopleDirectory);

    openMobileNav && handleMenuClick();
  };

  const handleSearchClick = () => {
    setOpenSearchDrawer(!openSearchDrawer);
  };

  const handleMoreClick = () => {
    setOpenMoreDrawer(!openMoreDrawer);
  };

  const handleMenuClick = () => {
    setOpenMobileNav(!openMobileNav);
  };

  //const dispatch = useDispatch()
  //const sphereFilter = useSelector((state) => state.sphere.sphereFilter);  // access the sphereFilter from Redux
  const { sphereFilter, setSphereFilter } = useSphereFilterStore();

  const flowersRef = useRef(null);
  const shadowsRef = useRef(null);
  const ripplesRef = useRef(null);

  const { hexagonClip } = useClipBuilder();

  useEffect(() => {
    hexagonClip(flowersRef);
    hexagonClip(shadowsRef);
    hexagonClip(ripplesRef);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 flex h-[80px] w-full items-center justify-between bg-[#493973] px-6 text-white lg:h-[88px] lg:px-9`}
    >
      {/* z-[999999999] */}
      <section className="flex items-center gap-9">
        <Link href={"/public"} className="w-[130px] md:w-[152px]">
          <Image src={HeaderLogo} alt="Inner Logo" className="w-full" />
        </Link>
        {!openPeopleDirectory ? (
          <>
            <button
              className="hidden w-[43px] xl:flex"
              title="avatar"
              onClick={handlePeopleClick}
            >
              <Image src={PeopleSVG} alt="Avatar" className="w-full" />
            </button>

            <h1
              id={1}
              onClick={
                (e) =>
                  //dispatch(
                  setSphereFilter(e.target.innerHTML)
                //)
              }
              className={`hidden h-[44px] w-[133px] cursor-pointer transition-all ease-in xl:flex xl:items-center xl:justify-center ${sphereFilter === "flowers" ? "bg-[#A262A1] text-[16.4px] font-extrabold text-yellow-light" : "bg-transparent text-[18px] font-semibold"}`}
              ref={flowersRef}
            >
              flowers
            </h1>

            <h1
              id={2}
              onClick={
                (e) =>
                  //dispatch(
                  setSphereFilter(e.target.innerHTML)
                //)
              }
              className={`hidden h-[44px] w-[133px] cursor-pointer transition-all ease-in xl:flex xl:items-center xl:justify-center ${sphereFilter === "shadows" ? "bg-[#A262A1] text-[16.4px] font-extrabold text-yellow-light" : "bg-transparent text-[18px] font-semibold"}`}
              ref={shadowsRef}
            >
              shadows
            </h1>

            <h1
              id={3}
              onClick={
                (e) =>
                  //dispatch(
                  setSphereFilter(e.target.innerHTML)
                //)
              }
              className={`hidden h-[44px] w-[133px] cursor-pointer transition-all ease-in xl:flex xl:items-center xl:justify-center ${sphereFilter === "ripples" ? "bg-[#A262A1] text-[16.4px] font-extrabold text-yellow-light" : "bg-transparent text-[18px] font-semibold"}`}
              ref={ripplesRef}
            >
              ripples
            </h1>
          </>
        ) : (
          <></>
        )}
      </section>

      {!openPeopleDirectory ? (
        <>
          <section className="flex items-center gap-5 lg:gap-6">
            <button className="w-[26px] lg:w-[40px]" onClick={handleMoreClick}>
              <Image src={FlowerSVG} alt="extra" className="w-full" />
            </button>

            {/* wellgorithm */}
            {/* <section className="hidden lg:inline w-[30%] lg:w-[15%] xl:w-[12%]"> */}
            <Link href="/wellgorithms" className="hidden w-[232px] xl:flex">
              <Image
                src={
                  pathname == "/wellgorithms"
                    ? HeaderWellgorithmActive
                    : HeaderWellgorithm
                }
                alt="Avatar"
                className="w-full"
              />
            </Link>
            <Link
              href="/wellgorithms"
              className="flex w-[27px] lg:w-[40px] xl:hidden"
            >
              <Image
                src={
                  pathname == "/wellgorithms"
                    ? HeaderSmallWellgorithmActive
                    : HeaderSmallWellgorithm
                }
                alt="Avatar"
                className="w-full"
              />
            </Link>

            {/* leaf */}
            <button
              className="hidden w-[36px] items-center justify-center xl:flex"
              onClick={handleMoreClick}
            >
              <Image src={LeafSVG} alt="extra" className="w-full" />
            </button>

            <button
              className="w-[25px] lg:w-[32px]"
              onClick={handleSearchClick}
            >
              <Image src={Search} alt="Search" className="w-full" />
            </button>

            {/* mobile menu */}
            <button
              onClick={handleMenuClick}
              className="z-[60] flex w-[50px] md:w-[41px] xl:hidden"
            >
              <Image
                src={openMobileNav ? MenuClose : MenuOpen}
                alt="Menu"
                className="w-full"
              />
            </button>

            {/* <section className="hidden lg:flex items-center gap-3">
            <LinkComp href="/login" className="flex items-center justify-center gap-0.5 text-purple-mid text-sm xl:text-base">
              <>
                log
                <TextInBrackets text="in" className="w-[41%] font-bold text-white fill-purple-mid" thin={{apply: true, color: "#000", width: 3}} />
              </>
            </LinkComp>
          </section>

          <section className="hidden lg:flex w-max">
            <LinkComp text="join us" href="/joinus" className="bg-purple-mid py-2 px-6 text-sm xl:text-base text-nowrap" angle={18} />
          </section> */}
            <section className="drop-shadow-clip-outline-pink-bold hidden w-max xl:flex">
              <LinkComp
                text="welcome"
                href="/joinus"
                className="text-nowrap px-4 py-1.5 text-lg font-medium text-slate-300"
                angle={12}
              />
            </section>
          </section>
        </>
      ) : (
        <>
          <section
            className="ml-6 flex w-full items-center gap-3"
            onClick={handlePeopleClick}
          >
            <Image src={Avatar} alt="pests" className="" />
            <span className="text-[30px] font-bold">x</span>
          </section>
        </>
      )}

      <MobileNav
        open={openMobileNav}
        handleMoreClick={handleMoreClick}
        moreDrawer={openMoreDrawer}
        handlePeopleClick={handlePeopleClick}
      />

      {openPeopleDirectory && <PeopleDirectory />}

      {openMoreDrawer && (
        <MoreDrawer
          handleMoreClick={handleMoreClick}
          moreDrawer={openMoreDrawer}
        />
      )}

      {openSearchDrawer && (
        <SearchDrawer handleSearchClick={handleSearchClick} />
      )}
    </header>
  );
};
export default Header;
