"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import BannerImage from "@/public/assets/banner/banner2.png";
import AdvIcon from "@/public/assets/upload-selfie/advance.svg";
import MoreBtn from "@/public/assets/upload-selfie/more.svg";
import MoreBtnP from "@/public/assets/upload-selfie/more_p.svg";
import Social from "@/public/assets/upload-selfie/social.svg";
import Sunshine from "@/public/assets/upload-selfie/sunshine.svg";
import Title from "@/public/assets/upload-selfie/title.svg";
import Site from "@/public/assets/upload-selfie/website.svg";

import LandingScreen from "@/src/components/__old__/container/landing_screen";
import ScrollContainer from "@/src/components/__old__/container/scroll";
import Octagon from "@/src/components/__old__/octagons/Octagon";

import useClipBuilder from "@/src/hooks/clip_path_calculations";

const HeadDrop = ({ open, setOpen }) => {
  return (
    <>
      <section className="flex w-[319px] items-center justify-between p-3 px-9 md:w-[349px] lg:w-fit lg:p-0">
        <p className="text-[18px] font-bold">trending</p>
        <Image
          alt="open"
          src={MoreBtn}
          onClick={() => {
            setOpen(!open);
          }}
          className={`block lg:hidden ${open ? "rotate-180" : "rotate-0"}`}
        />
      </section>
    </>
  );
};

const Dropdown = () => {
  const [headAngle, setHeadAngle] = useState(1);
  const [open, setOpen] = useState(true);
  const [acive, setActive] = useState({ id: 0 });

  const scrollDivRef = useRef();

  useEffect(() => {
    innerWidth > 768 ? setHeadAngle(1) : setHeadAngle(12);
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
        headClassName="justify-start text-[#FFA800] before:bg-[#AD5CA5] lg:before:bg-transparent h-fit "
        containerClassName="absolute top-[12%] md:top-0 lg:top-[12%] 2xl:left-[550px] lg:left-[300px] left-1/2 translate-x-[-50%]
        z-20 w-fit max-h-[490px] lg:max-h-[282px] text-[18px] drop-shadow-clip-outline-white-bold lg:drop-shadow-none"
        bodyClassName="before:bg-[#D4D1E6] lg:before:bg-transparent p-0 pb-6 pt-3 h-[450px] lg:h-[230px] lg:mt-3"
        override={true}
        headAngle={headAngle}
        bodyAngle={2}
        showBody={open}
      >
        {open ? (
          <>
            <div
              className="no-scrollbar mb-6 h-[90%] w-full overflow-auto text-[18px] lg:pr-3"
              ref={scrollDivRef}
            >
              {list.map((z) => (
                <section
                  key={z.id}
                  onClick={() => {
                    handleSelClick(z);
                  }}
                  className={`px-3 py-3 font-semibold lg:mb-2 lg:p-0 lg:pr-3 ${acive.id == z.id ? "bg-[#594181] text-yellow-dark" : "text-[#6E5090] lg:text-white"}`}
                >
                  {z.text}
                </section>
              ))}
            </div>
            <Image
              alt="more"
              src={MoreBtn}
              className="mx-3 hidden lg:m-0 lg:block"
              onClick={handleMoreClick}
            />
            <Image
              alt="more"
              src={MoreBtnP}
              className="mx-3 block lg:m-0 lg:hidden"
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

const Step3Head = ({ open = true }) => {
  const LabelSecRef = useRef();
  const LabelRef = useRef();

  const { hexagonClip } = useClipBuilder();

  useEffect(() => {
    hexagonClip(LabelSecRef, 24);
    hexagonClip(LabelRef, 24 * 0.98);
  }, []);

  return (
    <>
      <section
        ref={LabelSecRef}
        className="absolute top-0 mx-auto h-[63px] w-[350px] translate-y-[-50%] bg-white p-[2px] md:h-[103px] md:w-[560px]"
      >
        <p
          ref={LabelRef}
          className="grid h-full w-full place-items-center bg-[#8858B5] text-[32px] font-bold text-yellow-dark lg:text-[40px]"
        >
          Jane Smith
        </p>
      </section>
      <section className="flex w-full items-center justify-between px-6 text-center text-[26px] md:w-[480px] md:px-0">
        {open ? (
          <>
            <section className="flex flex-col items-center">
              <Image src={Title} alt="title" />
              <p className="font-semibold text-[#D5D1ED]">title</p>
            </section>
            <section className="flex flex-col items-center">
              <Image src={Social} alt="social" />
              <p className="font-semibold text-[#D5D1ED]">social</p>
            </section>
            <section className="flex flex-col items-center">
              <Image src={Site} alt="site" />
              <p className="font-semibold text-[#D5D1ED]">website</p>
            </section>
          </>
        ) : (
          <p className="mx-auto font-bold">
            welcome Jane!
            <br />
            choose your destination
          </p>
        )}
      </section>
    </>
  );
};

const Screen1 = ({ selectedBigTrapezoidPosition = null }) => {
  const [open, setOpen] = useState(true);
  const [step, setStep] = useState(1);
  const [dimension, setDimensions] = useState({ radius: 0, gap: 0 });

  const enterBtnSecRef = useRef();
  const enterBtnRef = useRef();
  const contInfoTextRef = useRef();
  const infoTextRef = useRef();

  const desRef = useRef();

  const { rectClip, hexagonClip } = useClipBuilder();

  useEffect(() => {
    if (innerWidth >= 1440) {
      setDimensions({ radius: 125, gap: 160 });
    } else if (innerWidth >= 768) {
      if (step == 2) {
        setDimensions({ radius: 110, gap: 110 });
      } else {
        setDimensions({ radius: 130, gap: 150 });
      }
    } else if (innerWidth >= 390) {
      setDimensions({ radius: 75, gap: 110 });
    }

    if (innerWidth > 768) hexagonClip(desRef, 50, true);

    hexagonClip(contInfoTextRef, 24);
    hexagonClip(infoTextRef, 24 * 0.98);

    hexagonClip(enterBtnSecRef, 21);
    hexagonClip(enterBtnRef, 21 * 0.98);

    document.body.style.background = "#D5D1ED";
    return () => {
      document.body.style.background = "#7369A0";
    };
  }, [step]);

  const level = [1, 2];

  const nextStep = () => {
    const tempStep = step + 1;
    setStep(tempStep);
  };

  const handleEnterClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <LandingScreen image={BannerImage} className={"mb-[20vh] h-[535px]"}>
        {step == 1 ? <Dropdown /> : <></>}

        <Octagon
          radius={dimension.radius}
          gap={dimension.gap}
          level={level}
          className={
            "octagon-text-size mb-20 lg:mb-0 " +
            (step == 2 ? "md:-mb-6" : "md:mb-3")
          }
        />

        {step == 1 || step == 2 ? (
          <section
            ref={desRef}
            className="pseudo-clip-path absolute top-full z-10 grid h-[176px] w-full translate-y-[-50%] place-items-center pb-9 before:bg-[#564A8D] md:h-[201px] lg:w-[921px]"
          >
            <section
              ref={contInfoTextRef}
              className="absolute top-0 h-[63px] w-[350px] translate-y-[-50%] bg-white p-[2px] md:h-[103px] md:w-[560px]"
            >
              <p
                ref={infoTextRef}
                className="grid h-full w-full place-items-center bg-[#8858B5] text-[28px] font-bold text-yellow-dark md:text-[32px] lg:text-[40px]"
              >
                {step == 1 ? "upload a selfie" : "My Sunshine"}
              </p>
            </section>

            <textarea
              className="no-scrollbar mt-3 w-full bg-transparent px-3 text-center text-[20px] font-semibold text-[#fff] outline-none placeholder:text-white md:mt-16 lg:mt-9 lg:w-[361px] lg:text-[24px]"
              placeholder="enter your flower zone or choose from trending"
            ></textarea>

            <Image
              alt={"advance"}
              src={AdvIcon}
              className="absolute top-full translate-y-[-50%]"
              onClick={nextStep}
            />
          </section>
        ) : (
          <></>
        )}

        {step == 2 ? (
          <>
            <section className="absolute left-1/2 top-1 z-10 flex w-[333px] translate-x-[-50%] items-center gap-3 lg:left-[90%] lg:top-9 lg:w-[263px] lg:flex-col">
              <Image
                src={Sunshine}
                alt="sun"
                onClick={nextStep}
                className="w-[60px]"
              />
              <p className="text-center font-semibold text-white">
                I know I can be in a beautiful state, no matter the situation
              </p>
            </section>
          </>
        ) : (
          <></>
        )}

        {step == 3 ? (
          <ScrollContainer
            headChild={<Step3Head open={open} />}
            headClassName="before:bg-[#564A8D] md:h-[201px] h-[214px] w-full pt-9"
            containerClassName="absolute top-full translate-y-[-50%] z-10 lg:w-[921px] w-full pb-10"
            bodyClassName="h-[158px] md:h-[306px] lg:h-[350px] w-full py-3"
            translateHead={true}
            bodyAngle={3}
            showBody={open}
          >
            {open ? (
              <>
                <textarea
                  placeholder="| bio"
                  className="no-scrollbar h-full w-full p-3 text-[24px] font-bold outline-0 placeholder:font-bold placeholder:text-black"
                ></textarea>

                <section
                  ref={enterBtnSecRef}
                  className="absolute left-1/2 top-full h-[58px] w-[244px] translate-x-[-50%] translate-y-[-50%] bg-white p-[2px]"
                >
                  <button
                    ref={enterBtnRef}
                    onClick={handleEnterClick}
                    className="h-full w-full bg-yellow-light text-center text-[28px] font-extrabold text-[#8858B5]"
                  >
                    enter
                  </button>
                </section>
              </>
            ) : (
              <></>
            )}
          </ScrollContainer>
        ) : (
          <></>
        )}
      </LandingScreen>
    </>
  );
};

export default Screen1;
