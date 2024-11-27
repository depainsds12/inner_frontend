"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
// import { useSelector } from 'react-redux';
import { twMerge } from "tailwind-merge";

import BannerImage from "@/public/assets/banner/banner2.png";
import AddSVg from "@/public/assets/personalized_wellgo/add.svg";
import Flower from "@/public/assets/personalized_wellgo/flower.svg";
import FlowerM from "@/public/assets/personalized_wellgo/flowerM.svg";
import FlowerMA from "@/public/assets/personalized_wellgo/flowerMA.svg";
import LeftHandle from "@/public/assets/personalized_wellgo/left.svg";
import RightHandle from "@/public/assets/personalized_wellgo/right.svg";
import MoreBtn from "@/public/assets/upload-selfie/more.svg";
import MoreBtnP from "@/public/assets/upload-selfie/more_p.svg";

import LandingScreen from "@/src/components/__old__/container/landing_screen";
import LabelComponent from "@/src/components/__old__/label";
import Octagon from "@/src/components/__old__/octagons/Octagon";

import ScrollContainer from "@/src/components/__old__/container/scroll";
import OctagonCounter from "@/src/components/__old__/octagon_counter";
import TextInBrackets from "@/src/components/__old__/texts/text_in_brackets";
import useClipBuilder from "@/src/hooks/clip_path_calculations";

const HeadDrop = ({ open, setOpen, text = "diversity" }) => {
  return (
    <>
      <section className="flex w-full items-center justify-between p-3">
        <p className="text-[30px] font-bold"></p>
        <p className="text-[30px] font-bold">{text}</p>
        <Image
          alt="open"
          src={MoreBtn}
          onClick={() => {
            setOpen(!open);
          }}
          className={`${open ? "rotate-180" : "rotate-0"}`}
        />
      </section>
    </>
  );
};

const Dropdown = ({ className = "", translateHead = true }) => {
  const [headAngle, setHeadAngle] = useState(1);
  const [open, setOpen] = useState(false);
  const [acive, setActive] = useState({ id: 0 });

  const scrollDivRef = useRef();

  useEffect(() => {
    innerWidth > 768 ? setHeadAngle(12) : setHeadAngle(12);
  }, []);

  const handleMoreClick = () => {
    if (!scrollDivRef.current) return 0;

    scrollDivRef.current.scrollBy({
      top: 30, // Scroll 100 pixels to the right
      behavior: "smooth",
    });
  };

  const handleSelClick = ({ id }) => {
    setActive({ id: id });
  };

  const list = [
    { id: 1, text: "love" },
    { id: 2, text: "peace" },
    { id: 3, text: "joy" },
    { id: 4, text: "gratitude" },
    { id: 5, text: "kindness" },
    { id: 6, text: "humility" },
    { id: 7, text: "love" },
    { id: 8, text: "peace" },
    { id: 9, text: "joy" },
  ];

  return (
    <>
      <ScrollContainer
        headChild={<HeadDrop open={open} setOpen={setOpen} />}
        headClassName="text-yellow-light before:bg-[#6E5090] h-[85px] w-full"
        containerClassName={twMerge(
          `absolute top-full w-[339px]
        z-20 text-[20px] drop-shadow-clip-outline-white-bold`,
          className,
        )}
        bodyClassName="before:bg-[#BDB6D3] p-0 pb-6 h-[450px]"
        override={true}
        headAngle={headAngle}
        bodyAngle={2}
        showBody={open}
        translateHead={translateHead}
      >
        {open ? (
          <>
            <div
              className="no-scrollbar mb-3 h-[93%] w-full overflow-auto text-[18px]"
              ref={scrollDivRef}
            >
              {list.map((z) => (
                <section
                  key={z.id}
                  onClick={() => {
                    handleSelClick(z);
                  }}
                  className={`px-3 py-3 font-semibold ${acive.id == z.id ? "bg-[#594181] text-yellow-dark" : "text-[#6E5090] lg:text-[#594181]"}`}
                >
                  {z.text}
                </section>
              ))}
            </div>
            <Image
              alt="more"
              src={MoreBtnP}
              className="mx-3"
              onClick={handleMoreClick}
            />
          </>
        ) : (
          <></>
        )}
      </ScrollContainer>
    </>
  );
};

const Process = ({ className = "", countActive = false }) => {
  const [open, setOpen] = useState(false);

  const contRef = useRef();
  const secRef = useRef();

  const scrollDivRef = useRef();

  const { hexagonClip } = useClipBuilder();

  const handleMoreClick = () => {
    if (!scrollDivRef.current) return 0;

    scrollDivRef.current.scrollBy({
      top: 30, // Scroll 100 pixels to the right
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (innerWidth > 640) {
      hexagonClip(contRef, 30, true);
      hexagonClip(secRef, 30 * 0.98, true);
    } else {
      hexagonClip(contRef, 20, true);
      hexagonClip(secRef, 20 * 0.98, true);
    }
  }, []);

  const list = [
    { id: 1, text: "love" },
    { id: 2, text: "peace" },
    { id: 3, text: "joy" },
    { id: 4, text: "gratitude" },
    { id: 5, text: "kindness" },
    { id: 6, text: "humility" },
    { id: 7, text: "love" },
    { id: 8, text: "peace" },
    { id: 9, text: "joy" },
  ];

  return (
    <>
      <ScrollContainer
        headChild={
          <>
            {countActive ? (
              <OctagonCounter
                count={20}
                contClassName="absolute z-10 top-1/2 lg:top-0 -translate-y-1/2 lg:left-1/2 left-0
              -translate-x-1/2 w-[64px] aspect-square p-[3px]"
                className={`w-full bg-[#FAB130] p-3 text-[24px]`}
              />
            ) : (
              <Image
                src={Flower}
                alt="flower"
                className="absolute left-0 top-1/2 z-10 aspect-square w-[64px] -translate-x-1/2 -translate-y-1/2 lg:left-1/2 lg:top-0"
              />
            )}
            <div
              className="flex w-full items-center justify-between p-3"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <p className="text-[30px] font-bold"></p>
              <section className="relative flex flex-col items-center justify-center gap-0 text-slate-300">
                <p className="text-[25px] font-bold lg:mt-6">mulch</p>
                <p className="text-[15px]">your mind</p>
              </section>
              <section>
                <Image
                  alt="open"
                  src={MoreBtn}
                  className={`${open ? "rotate-180" : "rotate-0"} lg:hidden`}
                />
              </section>
            </div>
          </>
        }
        headClassName="text-yellow-light before:bg-[#675C98] h-[103px] w-full"
        containerClassName={twMerge(
          `relative text-[20px] drop-shadow-clip-outline-white-bold
        w-[310px] md:w-[640px] lg:w-[272px]`,
          className,
        )}
        //  drop-shadow-clip-outline-white-bold
        bodyClassName="before:bg-[#BDB6D3] p-0 pb-6 h-[450px]"
        override={true}
        headAngle={15}
        bodyAngle={2}
        showBody={open}
        translateHead={false}
      >
        {open ? (
          <>
            <div
              className="no-scrollbar mb-6 h-[72%] w-full overflow-auto text-[18px]"
              ref={scrollDivRef}
            >
              {list.map((z) => (
                <section
                  key={z.id}
                  className={`px-3 py-3 text-[20px] font-semibold`}
                >
                  {z.text}
                  <br />
                  <span>your mind</span>
                </section>
              ))}
            </div>
            <Image
              alt="more"
              src={MoreBtnP}
              className="mx-3"
              onClick={handleMoreClick}
            />
            <section
              className={`mt-6 bg-white px-3 py-3 text-center text-[20px] font-semibold`}
            >
              <span>add your own</span>
            </section>
          </>
        ) : (
          <></>
        )}
      </ScrollContainer>
    </>
  );
};
const HeadChild = ({
  flowerActive = false,
  setFlowerActive = () => {},
  countActive = false,
  setCountActive = () => {},
}) => {
  const countPaletteContRef = useRef();
  const countPaletteRef = useRef();

  const { rectClipBanner } = useClipBuilder();

  useEffect(() => {
    rectClipBanner(countPaletteContRef, 15, 3);
    rectClipBanner(countPaletteRef, 15, 3);

    if (countPaletteContRef.current) {
      const height = parseInt(
        getComputedStyle(countPaletteContRef.current).height,
      );
      countPaletteContRef.current.style.top =
        -(
          (height / countData.length) *
            (countData.findIndex((z) => z == 5) + 1) -
          48
        ) + "px";
    }
  }, [countActive]);

  const countData = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
  return (
    <>
      <LabelComponent
        bracketClassName="w-[39%] md:w-[39%] lg:w-[40%] !gap-1 lg:!gap-2 fill-yellow-light
        font-extrabold lg:text-[40px] text-[24px] text-white"
        shape="hexagon"
        angle={30}
        containerClassName="absolute top-0 left-1/2 translate-x-[-50%] translate-y-[-50%]
        p-0 drop-shadow-clip-outline-white-bold w-[350px] lg:w-[560px] h-[64px] lg:h-[103px] z-20"
        className="h-full w-full gap-2 bg-purple-text-light p-0"
        text={["serenity", "Sunflowers"]}
        textClasses="font-extrabold lg:text-[40px] text-[24px] text-yellow-light"
      />

      <Image
        src={flowerActive ? FlowerMA : FlowerM}
        alt="flower"
        onClick={() => {
          setFlowerActive(!flowerActive);
        }}
        className="absolute left-[30%] top-full block -translate-x-1/2 -translate-y-1/2 cursor-pointer lg:hidden"
      />
      <OctagonCounter
        count={20}
        onClick={() => {
          setCountActive(!countActive);
        }}
        contClassName="block lg:hidden absolute top-full -translate-y-1/2 left-[70%] -translate-x-1/2 z-30
        w-[86px] p-[3px] bg-white cursor-pointer select-none"
        className={`w-full p-3 text-[32px] ${countActive ? "bg-[#FAB130]" : "bg-[#675C98]"}`}
      />

      {countActive && !flowerActive ? (
        <div
          className="absolute left-[70%] top-[-56px] z-20 w-[80px] -translate-x-1/2 select-none bg-white p-[3px]"
          ref={countPaletteContRef}
        >
          <div
            className="flex h-fit w-full flex-col items-center justify-between gap-6 bg-[#8858B5] py-[24px] text-[24px] text-yellow-light lg:text-[32px]"
            ref={countPaletteRef}
          >
            {countData.map((z, i) => (
              <span key={i} className="font-bold">
                {z}
              </span>
            ))}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
const Screen1 = () => {
  const [selectedSearchValue, setSelectedSearchValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [dimension, setDimensions] = useState({ radius: 0, gap: 0 });
  const [flowerActive, setFlowerActive] = useState(false);
  const [countActive, setCountActive] = useState(false);

  const [processData, setProcessData] = useState([1, 2]);

  const imageRef = useRef();
  const desRef = useRef();

  const principleContRef = useRef();
  const processContRef = useRef();
  const processRef = useRef();

  const suggestionPosContRef = useRef();
  const suggestionContRef = useRef();
  const suggestionRef = useRef();

  const searchContRef = useRef();
  const searchRef = useRef();

  const countPaletteContRef = useRef();
  const countPaletteRef = useRef();

  //   const selectedBigTrapezoidPosition = useSelector(state=>state.bigTrapezoid.selectedPosition);

  const { rectClip, hexagonClip, rectClipBanner, halfHexagonClip } =
    useClipBuilder();

  const handleSearchChange = (e) => {
    setSearchValue(e.currentTarget.value);
  };

  const handleSectionClick = (z) => {
    setSelectedSearchValue(z);
    setSearchValue("");
  };

  const handleAddProcessClick = () => {
    const data = JSON.parse(JSON.stringify(processData));
    data.push(data.length + 1);
    setProcessData(data);
  };

  useEffect(() => {
    rectClip(imageRef, 0, 3);
    innerWidth > 768 && hexagonClip(desRef, 50);

    if (innerWidth >= 1440) {
      setDimensions({ radius: 120, gap: 110 });
    } else if (innerWidth >= 768) {
      setDimensions({ radius: 95, gap: 100 });
    } else if (innerWidth >= 390) {
      setDimensions({ radius: 100, gap: 90 });
    }

    if (innerWidth > 640) {
      hexagonClip(searchContRef, 30);
      hexagonClip(searchRef, 30 * 0.98);
    } else {
      hexagonClip(searchContRef, 20);
      hexagonClip(searchRef, 20 * 0.98);
    }

    if (
      searchValue.length &&
      suggestionContRef.current &&
      suggestionPosContRef.current &&
      innerWidth > 768
    ) {
      const { leftEdge1, leftEdge2 } = rectClipBanner(suggestionContRef, 5, 15);
      rectClipBanner(suggestionRef, 5, 15);

      suggestionPosContRef.current.style.top = -leftEdge2 * 3.5 + "px";
      searchContRef.current.style.top = -leftEdge2 * 3.5 + "px";
    } else if (searchContRef.current) {
      searchContRef.current.style.top = 0 + "px";
    }

    rectClip(processContRef, 0, 3, true);
    rectClip(processRef, 0, 3 * 0.95, true);

    rectClip(principleContRef, 0, 3, true);
  }, [searchValue]);

  useEffect(() => {
    rectClipBanner(countPaletteContRef, 15, 3);
    rectClipBanner(countPaletteRef, 15, 3);

    if (countPaletteContRef.current) {
      const height = parseInt(
        getComputedStyle(countPaletteContRef.current).height,
      );
      // console.log(height, ((height/countData.length)*(countData.findIndex(z => z == 5)+1)-48))
      countPaletteContRef.current.style.top =
        -(
          (height / countData.length) *
            (countData.findIndex((z) => z == 5) + 1) -
          48
        ) + "px";
    }
  }, [countActive]);

  const data = [1, 2, 3, 4, 5, 6];
  const countData = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

  return (
    <>
      <LandingScreen image={BannerImage} className="z-30 mb-[20vh] h-[512px]">
        <Octagon
          radius={dimension.radius}
          gap={dimension.gap}
          level={[1, 2]}
          className={"octagon-text-size mb-28 md:mb-28 lg:mb-20"}
        />

        {selectedSearchValue && selectedSearchValue.length ? (
          <ScrollContainer
            headChild={
              <HeadChild
                countActive={countActive}
                setCountActive={setCountActive}
                flowerActive={flowerActive}
                setFlowerActive={setFlowerActive}
              />
            }
            heading={"Let your gaze be a gentle harbor of kindness"}
            translateHead={true}
            headAngle={30}
            containerClassName="absolute top-full lg:translate-y-[-50%] w-full lg:w-[921px] z-10"
            headClassName="h-[201px] before:bg-[#3F3676]
            px-6 lg:pt-10 lg:px-40
            font-bold text-[#fff] text-center lg:text-[26px] text-[20px]"
            bodyClassName="hidden lg:flex before:bg-white p-0 h-[141px] w-[822px] justify-center"
            showBody={flowerActive}
          >
            {flowerActive ? (
              <>
                <div
                  className="pseudo-clip-path drop-shadow-clip-outline-white-bold hidden h-full w-full before:bg-[#7369A0] lg:block"
                  ref={principleContRef}
                ></div>
                <Dropdown className="" />
              </>
            ) : (
              <></>
            )}
          </ScrollContainer>
        ) : (
          <section className="absolute left-1/2 top-full z-10 grid w-full translate-x-[-50%] place-items-center lg:w-[921px] lg:translate-y-[-50%]">
            {/* search bar */}
            <div
              ref={searchContRef}
              className="absolute left-1/2 top-0 z-10 h-[63px] w-[350px] translate-x-[-50%] translate-y-[-50%] bg-white p-[3px] sm:h-[98px] md:w-[513px] lg:w-[560px]"
            >
              <section
                ref={searchRef}
                className="grid h-full w-full place-items-center bg-[#D5D1ED]"
              >
                <input
                  type="text"
                  onChange={handleSearchChange}
                  className="mx-auto w-[13ch] max-w-full bg-transparent text-[18px] font-semibold text-[#978FBE] caret-[#978FBE] outline-none placeholder:text-[#978FBE] md:text-[32px] lg:text-[40px]"
                  placeholder="| search"
                />
              </section>
            </div>

            {/* text */}
            {searchValue.length ? (
              <div
                ref={suggestionPosContRef}
                className="absolute top-full flex w-full flex-col items-center justify-center gap-6 lg:w-[1338px] lg:flex-row"
              >
                <Image
                  src={LeftHandle}
                  alt="left"
                  className="hidden lg:inline"
                />
                <div
                  ref={suggestionContRef}
                  className="h-[430px] w-full bg-white p-[2px] md:h-[270px] lg:h-[367px] lg:w-[1138px]"
                >
                  <div
                    ref={suggestionRef}
                    className="grid h-full w-full grid-cols-1 content-center justify-items-center gap-x-3 gap-y-2 bg-[#8858B5] md:grid-cols-2 md:gap-y-0 md:pt-6 lg:p-0"
                  >
                    {data.map((z, i) => (
                      <section
                        key={i}
                        className={`flex w-fit cursor-pointer items-center justify-center gap-1 text-[24px] font-bold text-yellow-light hover:bg-[#5E3D84] lg:h-[75px] lg:w-[568px] lg:gap-0 lg:text-[30px] ${i % 2 ? "md:justify-self-start" : "md:justify-self-end"}`}
                        onClick={() => {
                          handleSectionClick(z + "");
                        }}
                      >
                        <TextInBrackets
                          text="serentity"
                          thin={{ apply: true, color: "#8858B5", width: 2 }}
                          className="w-[48%] fill-yellow-light font-bold text-white lg:w-[30%]"
                        />
                        Sunflower
                      </section>
                    ))}
                  </div>
                </div>
                <Image
                  src={RightHandle}
                  alt="right"
                  className="hidden lg:inline"
                />

                <section className="space-x-12">
                  <Image
                    src={LeftHandle}
                    alt="left"
                    className="inline aspect-square w-[50px] lg:hidden"
                  />
                  <Image
                    src={RightHandle}
                    alt="right"
                    className="inline aspect-square w-[50px] lg:hidden"
                  />
                </section>
              </div>
            ) : (
              <p
                ref={desRef}
                className="h-[201px] bg-[#3F3676] px-6 pt-16 text-center text-[20px] font-bold text-[#fff] md:pt-20 lg:px-28 lg:text-[24px]"
              >
                elit, sed do eiusmod tempor incididunt ut labore et elit, sed do
                eiusmod tempor incididunt ut labore et
              </p>
            )}
          </section>
        )}

        {/* user selected some value from search */}
        {selectedSearchValue && selectedSearchValue.length ? (
          <div
            ref={processContRef}
            className={`pseudo-clip-path absolute top-full hidden h-[407px] place-items-center p-[3px] lg:grid lg:w-[1116px] ${flowerActive ? (countActive ? "before:bg-yellow-light" : "yellow-gr before:bg-white") : "before:bg-transparent"}`}
          >
            <Image
              src={flowerActive ? FlowerMA : FlowerM}
              alt="flower"
              onClick={() => {
                setFlowerActive(!flowerActive);
              }}
              className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            />

            <OctagonCounter
              count={20}
              onClick={() => {
                setCountActive(!countActive);
              }}
              contClassName="absolute top-0 -translate-y-1/2 left-full -translate-x-1/2 z-20
              w-[86px] p-[3px] bg-white cursor-pointer select-none"
              className={`w-full p-3 text-[32px] ${countActive ? "bg-[#FAB130]" : "bg-[#675C98]"}`}
            />

            {countActive && !flowerActive ? (
              <div
                className="absolute left-full top-[-56px] z-10 w-[80px] -translate-x-1/2 select-none bg-white p-[3px]"
                ref={countPaletteContRef}
              >
                <div
                  className="flex h-fit w-full flex-col items-center justify-between gap-6 bg-[#8858B5] py-[24px] text-[24px] text-yellow-light lg:text-[32px]"
                  ref={countPaletteRef}
                >
                  {countData.map((z, i) => (
                    <span key={i} className="font-bold">
                      {z}
                    </span>
                  ))}
                </div>
              </div>
            ) : (
              <></>
            )}

            {flowerActive ? (
              <div
                ref={processRef}
                className="pseudo-clip-path relative h-full w-full before:bg-[#7369A0]"
              >
                <section className="absolute top-full flex h-[145px] w-full -translate-y-1/2 items-start justify-center -space-x-9">
                  {processData.map((z, i) => (
                    <Process key={i} countActive={countActive} />
                  ))}
                </section>
              </div>
            ) : (
              <></>
            )}

            {flowerActive && processData.length < 4 ? (
              <>
                <Image
                  src={AddSVg}
                  alt="add"
                  className="absolute top-full -z-10 mt-24"
                  onClick={handleAddProcessClick}
                />
              </>
            ) : (
              <></>
            )}
          </div>
        ) : (
          <></>
        )}
      </LandingScreen>

      {/* small screen flower active */}
      {flowerActive ? (
        <>
          <div className="mb-6 flex h-full w-full flex-col items-center gap-3 lg:hidden">
            <span className="text-[20px] font-semibold text-white">
              {" "}
              principle{" "}
            </span>
            <Dropdown
              className="relative left-0 top-0 w-[339px] translate-x-0 translate-y-0 md:w-[680px]"
              translateHead={false}
            />
          </div>
          <div className="flex h-full w-full flex-col items-center gap-3 lg:hidden">
            <span className="text-[20px] font-semibold text-white">
              {" "}
              processes{" "}
            </span>
            <section className="relative flex w-[339px] flex-col items-end justify-center space-y-6 md:w-[680px] lg:-space-x-9">
              {processData.map((z, i) => (
                <Process key={i} countActive={countActive} />
              ))}
            </section>
          </div>

          {flowerActive && processData.length < 4 ? (
            <>
              <Image
                src={AddSVg}
                alt="add"
                className="mx-auto mt-12"
                onClick={handleAddProcessClick}
              />
            </>
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Screen1;
