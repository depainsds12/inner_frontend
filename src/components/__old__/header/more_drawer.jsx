import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import Avatar from "@/public/assets/header/header_drawer_avatar.svg";
import DrawerMoveBtn from "@/public/assets/header/union.svg";
import MoreBtnSVG from "@/public/assets/header/more-btn.svg";

import LabelComponent from "../label";

const DrawerCard = ({
  text = ["", ""],
  content = "",
  className = "",
  bracketClassName = "",
  thin = { apply: false, color: "#AF5CAA", width: 3 },
}) => {
  return (
    <div
      className={`flex w-full flex-col items-center gap-x-6 gap-y-3 py-4 text-center text-[32px] lg:flex-row lg:text-left ${className}`}
    >
      <section className="row-span-2 w-[100px] md:w-[126px]">
        <Image src={Avatar} alt="avatar" />
      </section>
      {/* <section className="flex items-end gap-1">
                <TextInBrackets text={text[0]} className={`font-bold text-yellow-dark fill-white ${bracketClassName}`} thin={thin} />
                <span className={`text-white font-bold`}>{text[1]}</span>
            </section> */}
      <section className="flex w-full flex-col items-center gap-1 lg:items-start">
        <LabelComponent
          text={text}
          className="justify-start gap-2 bg-transparent p-0"
          textClasses={"text-white font-extrabold"}
          shape={false}
          bracketClassName="text-yellow-dark fill-white w-[45%] font-extrabold"
          thin={{ apply: true, color: "#433A7A" }}
        />
        <p className="text-[16px] font-[500] text-yellow-dark md:text-[20px]">
          {content}
        </p>
      </section>
    </div>
  );
};

const MoreDrawer = ({ handleMoreClick = () => {} }) => {
  const elementRef = useRef();

  useEffect(() => {}, []);

  const handleScroll = () => {
    elementRef.current.scrollBy({
      top: 120, // Scroll 100 pixels to the right
      behavior: "smooth",
    });
  };

  const cats = [
    "Nature",
    "Nature",
    "Nature",
    "Nature",
    "Nature",
    "Nature",
    "Nature",
    "Nature",
  ];

  return (
    <>
      <div className="absolute left-0 top-0 z-50 h-screen w-full bg-[#433A7A] text-[18px] lg:top-full">
        <div className="hidden w-full bg-[#8858B5] px-6 py-9 lg:block lg:px-[130px]">
          <section className="mx-auto flex w-full justify-between lg:w-[933px] xl:mx-0 2xl:mx-auto">
            <Link href={"/welcome"} className="font-semibold text-[#BEC0CB]">
              welcome center
            </Link>
            <button className={`font-bold text-yellow-dark`}>
              explore the spheres
            </button>
            <Link href={"/dashboard"} className="font-semibold text-[#BEC0CB]">
              dashboard
            </Link>
            <Link href={"/awarenest"} className="font-semibold text-[#BEC0CB]">
              awarenest
            </Link>
            {/* <Link href={"/paths"} className="text-[#BEC0CB] font-semibold">
                        paths
                    </Link>
                    <Link href={"/tags"} className="text-[#BEC0CB] font-semibold">
                        tags
                    </Link> */}
            <Link href={"/xr"} className="font-semibold text-[#BEC0CB]">
              ⟨inner⟩XR
            </Link>
          </section>
        </div>

        {/* only appears in mobile */}
        <section
          className="flex h-[80px] w-full gap-4 bg-[#8858B5] px-6 lg:hidden"
          onClick={handleMoreClick}
        >
          <Image alt="more" src={MoreBtnSVG} className="w-[14px] rotate-180" />
          <button className={`w-fit text-[20px] font-bold text-white`}>
            explore the spheres
          </button>
        </section>

        <div
          ref={elementRef}
          className={`no-scrollbar pseudo-clip-path relative mx-auto flex h-[calc(100%-80px)] w-full flex-col items-start overflow-auto px-6 pt-6 before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:bg-transparent before:content-[""] lg:h-[60%] lg:w-[933px] lg:px-0`}
        >
          {cats.map((z, i) => (
            <DrawerCard
              key={i}
              text={["inner", z]}
              className={
                i < cats.length - 1 && "border-b-2 border-[#D5D1ED] lg:border-0"
              }
              content="AI personas inspired by the great souls of history. AI personas inspired by"
            />
          ))}
        </div>
        <button
          className="mx-auto hidden w-[933px] px-12 pt-12 lg:block lg:px-6"
          onClick={handleScroll}
        >
          <Image src={DrawerMoveBtn} alt="move down" />
        </button>
      </div>
    </>
  );
};

export default MoreDrawer;
