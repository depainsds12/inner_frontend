"use client";

import { useEffect, useRef } from "react";

import useClipBuilder from "@/src/hooks/clip_path_calculations";

import subscribeUser from "@/src/services/mail_subscribe";

const MailSubscribeComp = () => {
  const inputRef = useRef();
  const mailSubscribeSecRef = useRef();
  const subscribeBtnRef = useRef();

  const { hexagonClip } = useClipBuilder();

  const handleClick = async () => {
    const response = await subscribeUser(inputRef.current.value);
    console.log(response);
  };

  useEffect(() => {
    hexagonClip(mailSubscribeSecRef, 24);
    hexagonClip(subscribeBtnRef, 19);
  }, [hexagonClip]);

  return (
    <section
      ref={mailSubscribeSecRef}
      className="flex w-full justify-between gap-3 bg-white px-2 py-1.5 text-black sm:w-[60%] lg:w-[45%]"
    >
      <input
        ref={inputRef}
        type="mail"
        placeholder="Email"
        className="ml-6 w-full py-2 outline-2 lg:py-3"
      />
      <button
        ref={subscribeBtnRef}
        onClick={handleClick}
        className="w-[90%] bg-[#AF5CAA] px-6 py-2 font-bold text-white sm:w-1/3 sm:px-3 lg:py-3"
      >
        subscribe
      </button>
    </section>
  );
};

export default MailSubscribeComp;
