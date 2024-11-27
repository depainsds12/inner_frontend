"use client";

import { useEffect, useRef } from "react";

import useClipBuilder from "@/src/hooks/clip_path_calculations";

const WaitlistModal = ({ open = false, data = [] }) => {
  const elementRef = useRef(null);
  const inputSecRef = useRef(null);
  const joinbtnRef = useRef(null);
  const nameRef = useRef(null);
  const mailRef = useRef(null);

  const { hexagonClip, halfHexagonClip } = useClipBuilder();

  useEffect(() => {
    hexagonClip(elementRef, 90);
    hexagonClip(inputSecRef, 27);
    hexagonClip(joinbtnRef, 12);

    // halfHexagonClip(nameRef, 29, 0);
    // halfHexagonClip(mailRef, 29, 0);
  }, [open]);

  if (!open) return <></>;
  return (
    <>
      <div className="drop-shadow-clip-outline-yellow-b absolute left-1/2 top-1/2 w-[40%] min-w-[900px] translate-x-[-50%] translate-y-[-65%]">
        <div
          ref={elementRef}
          className="flex flex-col items-center gap-12 bg-[#25408F] px-12 py-9"
        >
          <section className="flex w-full flex-col items-center gap-3">
            <p className="text-lg font-semibold text-white">
              get on the waiting list for
            </p>
            <p className="text-4xl font-extrabold text-white">(Inner)Academy</p>
          </section>
          <section
            ref={inputSecRef}
            className="mb-4 flex w-full flex-col gap-6 bg-transparent"
          >
            <section className="flex items-center gap-3 bg-white p-2 px-12">
              <label className="text-nowrap border-r-2 border-[#25408F] pr-2 font-semibold text-[#25408F]">
                first name
              </label>
              <input
                type="text"
                ref={nameRef}
                className="w-full p-1 text-lg text-[#25408F]"
                placeholder="firstname"
              />
            </section>
            <section className="flex items-center gap-3 bg-white p-2 px-12">
              <label className="border-r-2 border-[#25408F] pr-2 font-semibold text-[#25408F]">
                email
              </label>
              <input
                type="mail"
                placeholder="email"
                className="w-full p-1 text-lg text-[#25408F]"
                ref={mailRef}
              />
            </section>
          </section>
          <button
            ref={joinbtnRef}
            className="bg-yellow-dark p-3 px-6 text-2xl font-extrabold text-purple-text-light"
          >
            join the list
          </button>
        </div>
      </div>
    </>
  );
};

export default WaitlistModal;
