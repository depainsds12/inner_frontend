"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import AvatarImage from "@/public/assets/paths/Vector.png";
import BirdImage from "@/public/assets/paths/birf.png";
import BirdMore from "@/public/assets/paths/brrd_card_more.svg";
import DropdownBtn from "@/public/assets/paths/dropdown_btn.svg";

import TextCard from "@/src/components/__old__/cards/text_card";
import ScrollContainer from "@/src/components/__old__/container/scroll";
import LabelComponent from "@/src/components/__old__/label";
import TextInBrackets from "@/src/components/__old__/texts/text_in_brackets";

import useClipBuilder from "@/src/hooks/clip_path_calculations";

const HeadAvatar = ({ open = false, setOpen = () => {} }) => {
  const nameHexRef = useRef(null);

  const { hexagonClip, rectClip, rectClipBanner } = useClipBuilder();

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    // shapeRef, upperAnglePercent=20, lowerAnglePercent = 20, pseudo = false
    if (innerWidth > 768) {
      hexagonClip(nameHexRef, 27);
    }
  }, []);

  return (
    <div className="relative flex h-full w-full justify-between px-6 lg:px-12">
      <Image
        src={AvatarImage}
        alt="avatar"
        className="absolute left-0 top-1/2 z-10 translate-x-3 translate-y-[-50%] lg:translate-x-[-27%]"
      />
      <section
        ref={nameHexRef}
        className="hidden h-full w-[355px] items-center bg-[#564A8D] pl-[105px] text-[20px] font-bold text-[#D5D1ED] lg:flex"
      >
        martin butterfly
      </section>
      <p className="hidden items-center text-[28px] font-bold lg:flex">
        journey to the{" "}
        <TextInBrackets
          className="ml-2 mr-0.5 w-[25%] fill-white font-bold text-yellow-dark"
          text="peace"
          thin={{ apply: true, color: "#8858B5", width: 2 }}
        />
        Garden
      </p>
      <section className="flex flex-col justify-center pl-[150px] text-[20px] lg:hidden">
        <p className="hidden font-bold sm:block">martin butterfly</p>
        <p className="font-bold text-yellow-dark">
          journey to the peace Garden
        </p>
      </section>
      <button onClick={handleClick} className="">
        <Image
          src={DropdownBtn}
          alt="button"
          className={`${open ? "rotate-0" : "rotate-180"} w-[70px] md:w-full`}
        />
      </button>
    </div>
  );
};

const Zone = ({
  id = 0,
  text = "",
  type = 0,
  active = {},
  activeClick = () => {},
}) => {
  const elementRef = useRef();

  const { hexagonClip, arrowClip } = useClipBuilder();

  const handleClick = () => {
    activeClick(id);
  };

  useEffect(() => {
    if (type) {
      arrowClip(elementRef, 18);
    } else {
      hexagonClip(elementRef, 18);
    }
  }, []);

  return (
    <button
      ref={elementRef}
      onClick={handleClick}
      className={`h-full w-full max-w-[260px] text-[16px] font-bold lg:text-[20px] ${active.id == id ? (!type ? "bg-black text-yellow-dark" : "bg-[#3E8E36] text-yellow-dark") : "bg-[#A7A5B7] text-white"}`}
    >
      {text}
    </button>
  );
};
const ZoneRow = ({ data = [] }) => {
  const [active, setActive] = useState({ id: 0 });

  function splitArrayIntoChunks(
    arr,
    chunkSize = innerWidth > 768 ? 4 : innerWidth == 768 ? 3 : 2,
  ) {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      // Slice the array from current index to current index + chunkSize
      const chunk = arr.slice(i, i + chunkSize);
      result.push(chunk);
    }
    return result;
  }

  const activeClick = (id) => {
    setActive({ id });
  };

  return (
    <>
      {splitArrayIntoChunks(data.slice(0, innerWidth < 468 ? 4 : 6)).map(
        (y, j) => (
          <div
            key={j}
            className="mx-auto flex h-[47px] w-[349px] items-center -space-x-3.5 md:h-[72px] md:w-[637px] lg:w-[1004px]"
          >
            {y.map((z, i) => (
              <Zone
                key={i}
                type={i}
                {...z}
                activeClick={activeClick}
                active={active}
              />
            ))}
          </div>
        ),
      )}
    </>
  );
};

const BirdCard = () => {
  const { hexagonClip, rectClip, rectClipBanner } = useClipBuilder();

  useEffect(() => {}, []);

  return (
    <>
      <TextCard className="absolute top-full m-0 h-[204px] w-full translate-y-[-50%] p-0 lg:left-1/2 lg:h-[232px] lg:w-[676px] lg:translate-x-[-36%]">
        <LabelComponent
          text={["worry", "Birds"]}
          shape="hexagon"
          angle={21}
          className="h-full justify-end gap-2 bg-black p-0 pr-20 lg:pr-12"
          textClasses="text-white text-[20px] lg:text-[28px]"
          bracketClassName="text-yellow-dark fill-white w-[31%] lg:w-[35%] text-[20px] lg:text-[28px] gap-0"
          thin={{ apply: true, color: "black", width: 2 }}
          containerClassName="absolute top-0 mx-auto md:left-[15%] lg:left-0 translate-y-[-50%] bg-[#E0DFF0] p-[2px] w-[350px] lg:w-[382px] h-[66px] lg:h-[72px]"
        />

        <Image
          src={BirdImage}
          alt="image"
          className="absolute left-3 top-0 aspect-square w-[100px] translate-y-[-50%] md:w-[200px] lg:left-0 lg:top-1/2 lg:w-[339px] lg:translate-x-[-63%] lg:translate-y-[-56%]"
        />

        <p className="line-clamp-4 w-[350px] text-[18px] font-semibold md:ml-20 md:mt-9 md:w-[410px] lg:mt-0 lg:w-[478px] lg:text-[20px]">
          motions, like our bodies, are a part of nature, and that we can
          cultivate them like a garden. motions, like our bodies, are a part of
          nature, and that we can cultivate them like a garden. motions, like
          our bodies, are a part of nature, and that we can
        </p>

        <Image
          src={BirdMore}
          alt="more"
          className="absolute left-1/2 top-full translate-x-[-50%] translate-y-[-50%] md:left-full md:top-1/2 md:translate-x-[-130%] lg:translate-x-[-50%]"
        />
      </TextCard>
    </>
  );
};

const Card = ({ className = "" }) => {
  const [open, setOpen] = useState(false);

  let data = [
    { id: 0, text: "anxiety" },
    { id: 1, text: "composting" },
    { id: 2, text: "pruning" },
    { id: 3, text: "peace" },
    { id: 4, text: "anxiety" },
    { id: 5, text: "composting" },
  ];

  return (
    <ScrollContainer
      containerClassName={"relative top-full w-full " + (open ? "mb-40" : "")}
      headClassName={"h-[110px] md:h-[97px] " + className}
      headAngle={15}
      bodyClassName="md:h-[442px] h-[318px] w-full p-0 space-y-3 md:space-y-6 py-9 md:py-12 before:bg-[#EDECFA]"
      headChild={<HeadAvatar setOpen={setOpen} open={open} />}
      showBody={open}
      bodyAngle={3}
    >
      {open ? (
        <>
          <ZoneRow data={data} />
          <BirdCard />
        </>
      ) : (
        <></>
      )}
    </ScrollContainer>
  );
};

const Screen2 = () => {
  const imageRef = useRef();
  const desRef = useRef();

  const { rectClip, hexagonClip } = useClipBuilder();

  useEffect(() => {
    // rectClip(imageRef, 0, 3);
    // innerWidth > 768 && hexagonClip(desRef, 50);
  }, []);

  return (
    <>
      <div className="mx-auto flex w-full flex-col items-center gap-20 lg:w-[1240px]">
        <Card />
        <Card className="before:bg-[#3E8E36]" />
        <Card className="before:bg-[#000]" />
      </div>
    </>
  );
};

export default Screen2;
