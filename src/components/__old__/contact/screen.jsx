"use client";
import Octagon from "@/src/components/__old__/auth/octogon";
import useClipBuilder from "@/src/hooks/clip_path_calculations";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { twMerge } from "tailwind-merge";
import HeadChild from "./headingLabel";

const ScrollContainer = ({
  heading = "",
  headChild = null,
  children = "",
  containerClassName = "",
  headClassName = "",
  bodyClassName = "",
  headAngle = 27,
  bodyAngle = 6,
  showBody = true,
  translateHead = false,
}) => {
  const containerRef = useRef(null);
  const headElementRef = useRef(null);
  const bodyElementRef = useRef(null);

  const { hexagonClip, rectClip } = useClipBuilder();

  useEffect(() => {
    if (innerWidth > 820) {
      const { leftEdge2 } = hexagonClip(headElementRef, headAngle * 2, 1);

      if (bodyElementRef.current) {
        rectClip(bodyElementRef, 0, bodyAngle, 1);
        bodyElementRef.current.style.width = `${100 - leftEdge2 * 2}%`;
      }

      if (translateHead)
        containerRef.current.style.transform = `translateY(-${
          parseInt(getComputedStyle(headElementRef.current).height) / 2
        }px)`;

      containerRef.current.style.bottom = `-${
        containerRef.current.clientHeight -
        headElementRef.current.clientHeight / 2 +
        1
      }px`;
    }
  }, []);

  return (
    <div
      className={twMerge(
        `relative flex w-full flex-col items-center`,
        containerClassName,
      )}
      ref={containerRef}
    >
      <section
        ref={headElementRef}
        className={twMerge(
          `pseudo-clip-path before:bg-purple-inner-octagon relative grid h-full w-full place-items-center font-extrabold text-white before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:content-[""]`,
          headClassName,
        )}
      >
        {heading}
        {headChild}
      </section>
      {showBody ? (
        <div
          ref={bodyElementRef}
          className={twMerge(
            `pseudo-clip-path relative h-full min-h-[300px] w-[95.6%] p-9 before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:bg-white before:content-[""]`,
            bodyClassName,
          )}
        >
          {children}
        </div>
      ) : (
        <>{children}</>
      )}
    </div>
  );
};

// Main code for the entire page starts here
const Screen = () => {
  const sendButtonRef = useRef(null);

  const { hexagonClip } = useClipBuilder();

  useEffect(() => {
    hexagonClip(sendButtonRef, 13);
  }, []);

  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const router = useRouter();

  // send message to server and redirect to success page
  const sendMessage = async () => {
    if (message.length < 10) {
      toast.error("message too short");
      return;
    }
    if (name.length < 3) {
      toast.error("name too short");
      return;
    }
    if (!email.includes("@")) {
      toast.error("invalid email");
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_APP_BASEURL}/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message, name, email }),
        },
      );

      // Ensure you await the resolution of `response.json()`
      const data = await response.json();
      console.log(data);

      if (data.success) {
        setEmail("");
        setName("");
        setMessage("");
        toast.success("message sent");
        router.push("/contact-success");
      } else {
        toast.error(data.error.data[0].message);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="relative max-md:h-[433px] md:h-[426px] lg:!h-[520px]">
      <Octagon
        imageClass={"z-[0]"}
        octagonMainClass={"xl:w-[526px] xl:h-[526px]"}
      />

      <ScrollContainer
        headChild={
          <HeadChild
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
          />
        }
        containerClassName="md:w-full xl:w-[921px] md:h-[500px] z-20 !absolute left-[50%] translate-x-[-50%] "
        headClassName={`h-[212px] md:!min-h-[201px] text-xl max-md:py-10 lg:py-1 lg:px-32 before:bg-[#564A8D] before:bg-center `}
        bodyClassName="mb-10 p-0 h-[299px] max-lg:!w-full"
      >
        <div className="relative h-[299px] min-h-full">
          <textarea
            placeholder="| your message"
            className="h-[85%] w-[99%] px-[7%] py-[4%] text-justify text-2xl font-semibold placeholder:text-black focus:outline-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <div className="drop-shadow-clip-outline-yellow absolute top-full flex w-full translate-y-[-50%] items-center justify-evenly">
            <button
              className="flex flex-col items-center bg-[#8858B5] px-[10%] py-3 text-xl font-extrabold text-yellow-dark"
              ref={sendButtonRef}
              onClick={sendMessage}
            >
              send
            </button>
          </div>
        </div>
      </ScrollContainer>
    </div>
  );
};

export default Screen;
