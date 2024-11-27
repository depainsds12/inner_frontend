import useClipBuilder from "@/src/hooks/clip_path_calculations";
import { useEffect, useRef } from "react";

const HeadChild = ({ name, setName, email, setEmail }) => {
  const headingTextRef = useRef(null);
  const headingRef = useRef(null);
  const nameInputOuterRef = useRef(null);
  const nameInputInnerRef = useRef(null);
  const emailInputOuterRef = useRef(null);
  const emailInputInnerRef = useRef(null);

  const { hexagonClip } = useClipBuilder();

  useEffect(() => {
    if (window.innerWidth > 768) {
      hexagonClip(headingTextRef, 30);
      hexagonClip(headingRef, 30);
    } else {
      hexagonClip(headingTextRef, 20);
      hexagonClip(headingRef, 20);
    }

    hexagonClip(nameInputOuterRef, 17);
    hexagonClip(nameInputInnerRef, 17);
    hexagonClip(emailInputInnerRef, 17);
    hexagonClip(emailInputOuterRef, 17);

    headingRef.current.style.top = `-${headingRef.current.clientHeight / 2}px`;
  }, []);

  return (
    <div>
      <div
        className="absolute left-[50%] h-[63px] w-[350px] translate-x-[-50%] bg-white p-[3px] md:!h-[103px] md:w-[560px]"
        ref={headingRef}
      >
        <h2
          className="text-hm xl:text-hl grid h-full w-full place-items-center bg-[#8858B5] font-black text-yellow-light md:text-[42px]"
          ref={headingTextRef}
        >
          contact
        </h2>
      </div>

      <div className="h-full w-full justify-center max-md:flex-col max-md:items-center md:flex md:gap-[5%]">
        <div
          className="mx-auto mt-[4%] h-[53px] w-[325px] bg-white p-[2px] md:mt-[10%]"
          ref={nameInputOuterRef}
        >
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="text-cs h-full w-full bg-[#564A8D] px-[10%] font-medium text-white placeholder:text-white focus:outline-none"
            placeholder="name"
            ref={nameInputInnerRef}
          />
        </div>

        <div
          className="mx-auto mt-[4%] h-[53px] w-[325px] bg-white p-[2px] md:mt-[10%]"
          ref={emailInputOuterRef}
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="text-cs h-full w-full bg-[#564A8D] px-[10%] font-medium text-white placeholder:text-white focus:outline-none"
            placeholder="email"
            ref={emailInputInnerRef}
          />
        </div>
      </div>
    </div>
  );
};

export default HeadChild;
