"use client";
import TextInBrackets from "@/src/components/__old__/texts/text_in_brackets";
import useClipBuilder from "@/src/hooks/clip_path_calculations";
import { useEffect, useRef, useState } from "react";

const Screen = () => {
  const [tag, setTag] = useState("");

  const tagHeadingOuterRef = useRef(null);
  const tagHeadingInnerRef = useRef(null);
  const tagSearchOuterRef = useRef(null);
  const tagSearchInnerRef = useRef(null);
  const tagSearchOuterRef1 = useRef(null);
  const tagSearchInnerRef1 = useRef(null);

  const { hexagonClip } = useClipBuilder();

  useEffect(() => {
    hexagonClip(tagHeadingOuterRef, 27);
    hexagonClip(tagHeadingInnerRef, 27);
    hexagonClip(tagSearchOuterRef, 10);
    hexagonClip(tagSearchInnerRef, 10);
    hexagonClip(tagSearchOuterRef1, 10);
    hexagonClip(tagSearchInnerRef1, 10);

    if (innerWidth < 700) {
      hexagonClip(tagHeadingOuterRef, 18);
      hexagonClip(tagHeadingInnerRef, 18);
    }
  }, []);

  return (
    <>
      <section className="my-[2%] flex w-full items-center max-lg:flex-col max-lg:gap-6 lg:justify-evenly">
        <div className="w-full max-md:flex-col md:flex md:justify-between lg:hidden">
          {" "}
          {/* just for phones and tablets */}
          <div className="w-full">
            <h2 className="mx-[2%] text-[18px] font-semibold text-white max-md:my-2">{`flowers  /  ${tag}`}</h2>
          </div>
          <div
            className="mx-auto bg-[#AD5DA4] p-[2px] max-md:!h-[42px] max-md:!w-[350px] md:mx-[2%] md:!h-[42px] md:!w-[229px] xl:h-[42px] xl:w-[229px]"
            ref={tagSearchOuterRef1}
          >
            <div
              className="grid h-full w-full place-items-center bg-[#3F3676]"
              ref={tagSearchInnerRef1}
            >
              <input
                type="text"
                name="tagSearch"
                id="tagSearch"
                className="bg-transparent pl-[24%] text-[18px] font-semibold text-[#BEC0CB] focus:outline-none"
                placeholder="| search tags"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="w-1/4 max-lg:hidden"></div> {/* just for sizing */}
        <div
          className="bg-white p-[2px] max-md:h-[63px] max-md:w-[350px] md:h-[103px] md:w-[560px]"
          ref={tagHeadingOuterRef}
        >
          <div
            className="grid h-full w-full place-items-center bg-[#8858B5]"
            ref={tagHeadingInnerRef}
          >
            <TextInBrackets
              text={tag}
              className="xl:text-hl w-full fill-white font-extrabold text-yellow-light max-md:hidden md:text-[46px]"
            />
            <h3 className="max-md:text-hm h-full w-full text-center font-extrabold text-yellow-light md:hidden">
              {tag}
            </h3>
          </div>
        </div>
        <div className="w-1/4 max-lg:hidden">
          <div
            className="bg-[#AD5DA4] p-[2px] xl:h-[42px] xl:w-[229px]"
            ref={tagSearchOuterRef}
          >
            <div
              className="grid h-full w-full place-items-center bg-[#3F3676]"
              ref={tagSearchInnerRef}
            >
              <input
                type="text"
                name="tagSearch"
                id="tagSearch"
                className="bg-transparent px-[30px] text-[18px] font-semibold text-[#BEC0CB] focus:outline-none"
                placeholder="| search tags"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      <h3 className="w-full text-clip text-center text-[18px] font-bold text-yellow-light">
        journals tagged with {tag}
      </h3>
    </>
  );
};

export default Screen;
