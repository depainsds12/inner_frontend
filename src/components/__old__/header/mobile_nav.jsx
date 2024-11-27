import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { usePathname } from "next/navigation";

import ExtraArrow from "@/public/assets/header/extra_arrow.svg";
import LeafSVG from "@/public/assets/header/leaf.svg";
import MoreBtnSVG from "@/public/assets/header/more-btn.svg";
import PeopleSVG from "@/public/assets/header/people.svg";
import Search from "@/public/assets/header/search.svg";

import useClipBuilder from "@/src/hooks/clip_path_calculations";

const MobileNav = ({
  open = false,
  handleMoreClick = () => {},
  handleSearchClick = () => {},
  handlePeopleClick = () => {},
  moreDrawer = false,
}) => {
  const [submore, setSubmore] = useState(false);

  const octsRef1 = useRef(null);
  const octsRef2 = useRef(null);
  const octsRef3 = useRef(null);
  const pathname = usePathname();

  const { hexagonClip } = useClipBuilder();

  useEffect(() => {
    hexagonClip(octsRef1, 18);
    hexagonClip(octsRef2, 18);
    hexagonClip(octsRef3, 18);
  }, []);

  const handleSubmoreClick = () => {
    setSubmore(!submore);
  };

  return (
    <div
      className={` ${open ? "right-0" : "-right-full"} fixed top-[80px] z-[999999999] flex h-full w-full flex-col items-center gap-6 border-t-2 border-[#7369A0] bg-black bg-inherit pt-5 transition-all lg:top-[88px] lg:hidden`}
    >
      <Link
        href="/joinus"
        className="flex items-center gap-4 text-[32px] font-extrabold text-yellow-light"
      >
        join us <Image src={ExtraArrow} alt="extra arrow" />
      </Link>

      <section className="flex w-full justify-between gap-6 bg-[#3F3676] p-6">
        <section className="flex flex-col items-center gap-1">
          <span
            ref={octsRef1}
            className="block h-[80px] w-[90px] bg-[#564A8D]"
          ></span>
          <Link id={1} href="/gardens" className="py-1">
            Flowers
          </Link>
        </section>
        <section className="flex flex-col items-center gap-1">
          <span
            ref={octsRef2}
            className="block h-[80px] w-[90px] bg-[#564A8D]"
          ></span>
          <Link id={2} href="/shadows" className="py-1">
            shadows
          </Link>
        </section>
        <section className="flex flex-col items-center gap-1">
          <span
            ref={octsRef3}
            className="block h-[80px] w-[90px] bg-[#564A8D]"
          ></span>
          <Link id={3} href="/ripples" className="py-1">
            ripples
          </Link>
        </section>
      </section>

      <section className="flex w-full justify-between px-12">
        <button className="w-[40px]" title="avatar" onClick={handlePeopleClick}>
          <Image src={PeopleSVG} alt="Avatar" className="w-full" />
        </button>

        <button className="w-[32px]" onClick={handleSearchClick}>
          <Image src={Search} alt="Search" className="w-full" />
        </button>

        <button className="w-[36px]" onClick={handleSubmoreClick}>
          <Image src={LeafSVG} alt="more" className="w-full" />
        </button>
      </section>

      {submore ? (
        <div className="h-[60%] w-full overflow-auto bg-[#8858B5] px-5 py-2">
          <div className="mx-auto flex w-full flex-col justify-between lg:w-[933px] xl:mx-0 2xl:mx-auto">
            <section className="flex w-full justify-between border-b-2 border-slate-400 py-5">
              <Link href={"/welcome"} className="font-semibold text-white">
                welcome center
              </Link>
              <Image alt="more" src={MoreBtnSVG} className="w-[14px]" />
            </section>
            <section
              className="flex w-full justify-between border-b-2 border-slate-400 py-5"
              onClick={handleMoreClick}
            >
              <button className={`w-fit font-semibold text-white`}>
                explore the spheres
              </button>
              <Image alt="more" src={MoreBtnSVG} className="w-[14px]" />
            </section>
            <section className="flex w-full justify-between border-b-2 border-slate-400 py-5">
              <Link href={"/dashboard"} className="font-semibold text-white">
                dashboard
              </Link>
              <Image alt="more" src={MoreBtnSVG} className="w-[14px]" />
            </section>
            <section className="flex w-full justify-between border-b-2 border-slate-400 py-5">
              <Link href={"/awarenest"} className="font-semibold text-white">
                awarenest
              </Link>
              <Image alt="more" src={MoreBtnSVG} className="w-[14px]" />
            </section>
            <section className="flex w-full justify-between py-5">
              <Link href={"/xr"} className="font-semibold text-white">
                ⟨inner⟩XR
              </Link>
              <Image alt="more" src={MoreBtnSVG} className="w-[14px]" />
            </section>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
export default MobileNav;
