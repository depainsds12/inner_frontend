"use client";

import Image from "next/image";
import { useState } from "react";

import Caterpillar from "@/public/assets/awarenest/caterpillar2.svg";
import Hive from "@/public/assets/awarenest/hive2.svg";
import Butterfly from "@/public/assets/awarenest/butterfly2.svg";
import ActiveCaterpillar from "@/public/assets/awarenest/active_caterpillar2.svg";
import ActiveHive from "@/public/assets/awarenest/active_hive2.svg";
import ActiveButterfly from "@/public/assets/awarenest/active_butterfly2.svg";

const Controls = () => {
  const [activeBtn, setActiveBtn] = useState(1);

  const handleClick = (e) => {
    setActiveBtn(e.target.parentNode.dataset.id - 0);
  };

  return (
    <>
      <section className="flex items-center gap-6">
        <button onClick={handleClick} data-id={1}>
          <Image
            src={activeBtn === 1 ? ActiveCaterpillar : Caterpillar}
            alt="caterpillar"
            className="w-[80%] lg:w-full"
          />
        </button>
        <button onClick={handleClick} data-id={2}>
          <Image
            src={activeBtn === 2 ? ActiveHive : Hive}
            alt="hive"
            className="w-[80%] lg:w-full"
          />
        </button>
        <button onClick={handleClick} data-id={3}>
          <Image
            src={activeBtn === 3 ? ActiveButterfly : Butterfly}
            alt="butterfly"
            className="w-[80%] lg:w-full"
          />
        </button>
      </section>
    </>
  );
};

export default Controls;
