"use client";
import Biome from "@/public/assets/header/biome1.jpg";
import Dna from "@/public/assets/header/dna1.jpg";
import Health from "@/public/assets/header/health1.jpg";
import CloseIcon from "@/public/assets/journal-flow/close-icon.svg";
import QNAIcon from "@/public/assets/journal-flow/qna-icon.svg";
import TextInBrackets from "@/src/components/__old__/texts/text_in_brackets";
import useClipBuilder from "@/src/hooks/clip_path_calculations";
import { useDashboardFooterStore } from "@/src/store/DashboardFooterStore";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Footer = () => {
  //const footerOpen = useSelector(footerToggle)
  const { footerOpen, setFooterOpen } = useDashboardFooterStore();
  //const dispatch = useDispatch(

  const toggleFooter = () => {
    //dispatch(
    setFooterOpen(!footerOpen);
    //)
  };

  const joinUsRef = useRef(null);
  const joinUsRef2 = useRef(null);
  const footerContainerRef = useRef(null);
  const footerContainerRefOuter = useRef(null);
  const footerContainerRefOuterBg = useRef(null);
  const headingImageRefOuter = useRef(null);
  const headingImageRef = useRef(null);
  const largeFooterContainerRefOuterBg = useRef(null);
  const qnaIconRef = useRef(null);
  const inputRefDown = useRef(null);
  const inputRefDownOuter = useRef(null);
  const inputRefUp = useRef(null);
  const inputRefUpOuter = useRef(null);
  const aboutButtonRef = useRef(null);
  const donateButtonRef = useRef(null);
  const titleRef = useRef(null);

  const [innerW, setInnerW] = useState();

  const { hexagonClip } = useClipBuilder();
  const path = `polygon(4% 0%, 96% 0%, 100% 50%, 100% 100%, 0 100%, 0 50%)`;
  const largePath = `polygon(0% 0%, 100% 0%, 100% 96%, 96% 100%, 4% 100%, 0% 96%)`;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [title, setTitle] = useState("DNA");
  const [image, setImage] = useState(Dna);
  const [headline, setHeadline] = useState(
    "Nourish and share your emotional ecosystem in 3D",
  );
  const [text, setText] = useState(
    "Step into a 3D space where your emotions come alive as interactive organisms. Map and share your growth in virtual reality, track progress, get feedback, and gain new insights through simulated, gamified assessments.",
  );

  // const toggleFooter = () =>{
  //   setFooterOpen(!footerOpen)
  // }

  useEffect(() => {
    hexagonClip(joinUsRef, 12);
    hexagonClip(joinUsRef2, 12);
    hexagonClip(aboutButtonRef, 8);
    hexagonClip(donateButtonRef, 8);
    hexagonClip(inputRefDown, 18);
    hexagonClip(inputRefDownOuter, 18);
    hexagonClip(inputRefUp, 18);
    hexagonClip(inputRefUpOuter, 18);
    hexagonClip(titleRef, 22);

    // Get the height of joinUsRef to calculate the center
    const joinUsHeight = joinUsRef.current.clientHeight;
    const qnaIconHeight = qnaIconRef.current.clientHeight;

    // Set the top position so the center of joinUsRef aligns with the top of footerContainerRefOuterBg
    joinUsRef.current.style.top = `${footerContainerRefOuter.current.offsetTop - joinUsHeight / 2 + 1.5}px`;
    // joinUsRef2.current.style.bottom = `-${footerContainerRefOuter.current.offsetTop - (joinUsHeight / 2) + 1.5}px`;
    qnaIconRef.current.style.top = `${footerContainerRefOuter.current.offsetTop - qnaIconHeight / 2 + 1.5}px`;

    const page = window.location.pathname;
    console.log("page - ", page);

    if (page.includes("dna")) {
      setTitle("DNA");
      setImage(Dna);
      setHeadline("Nourish and share your emotional ecosystem in 3D");
      setText(
        "Step into a 3D space where your emotions come alive as interactive organisms. Map and share your growth in virtual reality, track progress, get feedback, and gain new insights through simulated, gamified assessments.",
      );
    } else if (page.includes("biome")) {
      setTitle("Biome");
      setImage(Biome);
      setHeadline("Cultivate your deepest emotional insights in 3D");
      setText(
        "Watch your emotions thrive in a natural, ever-changing 3D landscape. Collaborate with friends, exchange insights, and let your emotional environment evolve organically. Share your uniqueness and encourage others as they grow with you.",
      );
    } else if (page.includes("health")) {
      setTitle("Health");
      setImage(Health);
      setHeadline("Create your own unique 3D landscape");
      setText(
        "Discover a space where your emotions are nurtured through connection, reflection, and guided practices. Engage with friends to share insights, explore new mindfulness techniques, and configure your own unique landscape in a  virtual community.",
      );
    }
  }, [footerOpen]);

  useEffect(() => {
    setInnerW(innerWidth);
    if (innerWidth >= 1280) {
      hexagonClip(headingImageRef, 94);
      hexagonClip(headingImageRefOuter, 94);
      footerContainerRef.current.style.clipPath = path;
      footerContainerRefOuter.current.style.clipPath = path;
      footerContainerRefOuterBg.current.style.clipPath = path;
      largeFooterContainerRefOuterBg.current.style.clipPath = largePath;
    }
  }, [innerW, footerOpen]);

  return (
    <>
      <div
        className={`relative -z-0 h-[90px] w-full max-sm:h-[140px] xl:h-[140px] ${footerOpen ? "absolute bottom-[100%]" : ""}`}
      >
        <div
          className="bg-footer-gradient h-full w-full"
          ref={footerContainerRefOuterBg}
        >
          <div
            className="bg-footer-border-gradient grid h-full w-full place-items-center pt-[3px] xl:px-[3px]"
            ref={footerContainerRefOuter}
          >
            <div
              className="bg-footer-gradient h-full w-full"
              ref={footerContainerRef}
            ></div>
          </div>
        </div>

        <button
          className="absolute left-1/2 grid h-[53px] w-[160px] -translate-x-1/2 place-items-center bg-yellow-light text-[20px] font-black text-[#8858B5]"
          ref={joinUsRef}
          onClick={toggleFooter}
        >
          join us
        </button>

        <div className="absolute bottom-[10%] w-full items-center justify-between max-sm:flex max-sm:flex-col xl:flex xl:flex-col">
          <p className="text-[20px] font-semibold text-white max-xl:mb-[1%] sm:text-center">
            explore your emotional ecosystem
          </p>

          <div className="h-[47px] w-[329px] items-center justify-between max-xl:hidden max-sm:flex max-sm:flex-col sm:hidden xl:flex xl:flex-col">
            <div className="mx-auto flex h-[20px] w-[158px] items-center justify-between text-[16px] font-semibold text-[#BEC0CB]">
              <h2>policies</h2>
              <h2>contact</h2>
            </div>
            <p className="text-[14px] font-light text-[#BEC0CB]">
              © copyright 2024 by (inner). All rights reserved
            </p>
          </div>
        </div>

        <Image
          src={QNAIcon}
          alt="QNAIcon"
          className="absolute right-[2%] cursor-pointer"
          ref={qnaIconRef}
        />
      </div>

      {/* --------------------------------------------------------------------------------------------- */}

      <div
        className={`absolute left-[50%] w-full translate-x-[-50%] transition-all duration-500 max-sm:h-[977px] sm:h-[803px] xl:h-[880px] xl:w-[1440px] ${!footerOpen ? "top-[-145%]" : "top-[80px] xl:top-[88px]"} z-50 max-xl:border-b-2 max-xl:border-yellow-light`}
      >
        {/*  Background  */}
        <div
          className="h-full w-full bg-[#564A8D]/20 backdrop-blur-2xl"
          ref={largeFooterContainerRefOuterBg}
        />
        {/* Background */}

        <div
          className="absolute left-[50%] top-0 z-30 grid h-[76px] w-[350px] translate-x-[-50%] place-items-center bg-[#24AEFF] xl:h-[80px] xl:w-[500px] xl:translate-y-[-50%]"
          ref={titleRef}
        >
          <p className="relative flex items-center gap-1 text-[28px] font-black text-yellow-light xl:text-[40px]">
            <TextInBrackets
              text="inner"
              className="w-[60%] fill-[#FFF200] text-[28px] font-black text-white xl:text-[40px]"
            />
            {title}
            <span className="absolute right-[-5%] top-0 z-50 text-[8px] font-black text-yellow-light">
              TM
            </span>
          </p>
        </div>

        <div className="absolute top-0 z-10 h-full w-full">
          {" "}
          {/* Outer Container */}
          <div className="relative flex h-full w-full flex-col">
            {" "}
            {/* Main Container */}
            {/* Closing image */}
            <Image
              src={CloseIcon}
              alt="close-icon"
              className="absolute right-[2%] top-[5%] cursor-pointer"
              onClick={toggleFooter}
            />
            {/* Closing image */}
            {/* Heading Image */}
            <div
              className="relative mx-auto h-[477px] w-full bg-[#625990] xl:h-[490px] xl:w-[945px] xl:px-[5px] xl:pb-[5px]"
              ref={headingImageRefOuter}
            >
              <Image
                src={image}
                alt="image1"
                className="h-full w-full"
                ref={headingImageRef}
              />
            </div>
            {/* Heading Image */}
            <div className="mx-auto flex w-full flex-col items-center justify-start bg-[#564A8D] pt-[3%] max-sm:h-[500px] max-sm:gap-[5%] max-sm:pt-[8%] sm:h-[326px] sm:gap-[9%] xl:h-full xl:w-[758px] xl:gap-[5%] xl:pt-[3%]">
              <p className="mx-auto text-center text-[20px] font-bold text-yellow-light max-sm:w-[314px] sm:w-[514px] xl:w-[500px] xl:text-[32px]">
                {headline}
              </p>

              <form className="relative flex h-[126px] w-[672px] items-center justify-between max-sm:w-[325px] max-sm:flex-col sm:h-[52px]">
                <div
                  ref={inputRefUpOuter}
                  className="my-2 h-[53px] w-[325px] bg-[#AE5CAA] p-[2px]"
                >
                  <div
                    className="relative flex h-full w-full items-center justify-center bg-[#AE5CAA] px-10 lg:px-14"
                    ref={inputRefUp}
                  >
                    <span className="absolute left-11 text-xl font-semibold text-[#d3cfeb] lg:left-14">
                      |
                    </span>{" "}
                    <input
                      type="name"
                      placeholder="name"
                      className="h-full w-full bg-[#AE5CAA] bg-transparent p-2 px-3 py-[8%] text-[20px] font-medium text-white placeholder-white focus:outline-none"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>

                <div
                  ref={inputRefDownOuter}
                  className="my-2 h-[53px] w-[325px] bg-[#AE5CAA] p-[2px]"
                >
                  <div
                    className="relative flex h-full w-full items-center justify-center bg-[#564A8D] px-10 lg:px-14"
                    ref={inputRefDown}
                  >
                    <span className="absolute left-11 text-xl font-semibold text-[#d3cfeb] lg:left-14">
                      |
                    </span>{" "}
                    <input
                      type="email"
                      placeholder="email"
                      className="h-full w-full border-white bg-[#564A8D] bg-transparent p-2 px-3 py-[8%] text-[20px] font-medium text-[#d3cfeb] placeholder-[#d3cfeb] focus:outline-none"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
              </form>

              <p className="w-[672px] text-[16px] font-bold text-[#BEC1CC] max-xl:text-center max-sm:h-[168px] max-sm:w-[352px] xl:h-[104px] xl:text-[18px]">
                {text}
              </p>

              <button
                className="absolute bottom-0 left-1/2 z-10 grid h-[53px] w-[160px] -translate-x-1/2 translate-y-1/2 place-items-center bg-yellow-light text-[20px] font-black text-[#8858B5]"
                ref={joinUsRef2}
              >
                join us
              </button>

              <div className="absolute bottom-[-16%] flex h-[107px] w-[348px] flex-col justify-between sm:bottom-[-20%] xl:bottom-[-18%]">
                <div className="mx-auto flex w-full items-center justify-between">
                  <button
                    className="h-[40px] w-[124px] bg-[#AE5CAA] text-[16px] font-black text-white"
                    ref={aboutButtonRef}
                  >
                    about
                  </button>
                  <button
                    className="h-[40px] w-[124px] bg-[#AE5CAA] text-[16px] font-black text-white"
                    ref={donateButtonRef}
                  >
                    donate
                  </button>
                </div>

                <div className="mx-auto flex h-[20px] w-[158px] justify-between">
                  <button className="text-[16px] font-semibold text-[#BEC0CB]">
                    policies
                  </button>
                  <button className="text-[16px] font-semibold text-[#BEC0CB]">
                    policies
                  </button>
                </div>

                <p className="text-[14px] font-light text-[#BEC0CB]">
                  © copyright 2024 by (inner). All rights reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
