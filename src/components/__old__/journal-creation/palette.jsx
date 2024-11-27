import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import Image1 from "@/public/assets/banner/banner.png";
import Image2 from "@/public/assets/banner/banner2.png";
import useClipBuilder from "@/src/hooks/clip_path_calculations";

const Color = ({ color = "#fff", setColor = () => {} }) => {
  const handleClick = () => {
    setColor(color);
  };

  return (
    <>
      <div
        onClick={handleClick}
        className="h-[38px] w-[60px]"
        data-value={color}
        style={{ background: color }}
      >
        {/*  */}
      </div>
    </>
  );
};

const ImageDiv = ({ image = "", setImage = () => {} }) => {
  const handleClick = () => {
    setImage(image);
  };

  return (
    <>
      <Image
        onClick={handleClick}
        className="h-[55px] w-[80px] object-cover"
        src={image}
        alt="image"
      />
    </>
  );
};

const Palette = () => {
  const [activeImage, setActiveImage] = useState();
  const [activeColor, setActiveColor] = useState();

  const paletteContRef = useRef();
  const paletteRef = useRef();

  const { rectClip } = useClipBuilder();

  useEffect(() => {
    rectClip(paletteContRef, 4, 4);
    rectClip(paletteRef, 4, 4);
  }, []);

  return (
    <div
      ref={paletteContRef}
      className="absolute left-1/2 top-1/2 z-50 h-[400px] w-[500px] -translate-x-1/2 -translate-y-1/2 bg-yellow-light p-[2px]"
    >
      {/* Outer Container */}
      <div
        ref={paletteRef}
        className="relative flex h-full w-full flex-col items-center justify-between bg-purple-900 p-3 py-6"
      >
        {/* Top Image Placeholder Row */}
        <div className="grid grid-cols-3 justify-center gap-4">
          <ImageDiv image={Image1} setImage={setActiveImage} />
          <ImageDiv image={Image1} setImage={setActiveImage} />
          <ImageDiv image={Image1} setImage={setActiveImage} />
        </div>

        <div className="flex w-full items-center justify-between">
          {/* Color Palette on Left */}
          <div className="grid grid-rows-4 gap-2">
            <Color color="#A262A1" setColor={setActiveColor} />
            <Color color="#7E5DA1" setColor={setActiveColor} />
            <Color color="#544D8B" setColor={setActiveColor} />
            <Color color="#3C3873" setColor={setActiveColor} />
          </div>

          {/* Main Image Placeholder */}
          <Image
            className="h-[220px] w-[334px] bg-black object-cover"
            alt="selected image"
            src={activeImage}
          />
          {/* style={{ background: activeColor }} */}

          {/* Color Palette on Right */}
          <div className="grid grid-rows-4 gap-2">
            <Color color="#FFF14B" setColor={setActiveColor} />
            <Color color="#EFAB42" setColor={setActiveColor} />
            <Color color="#5F7DB9" setColor={setActiveColor} />
            <Color color="#60AB55" setColor={setActiveColor} />
          </div>
        </div>

        {/* Bottom Image Placeholder Row */}
        <div className="grid grid-cols-3 justify-center gap-4">
          <ImageDiv image={Image2} setImage={setActiveImage} />
          <ImageDiv image={Image2} setImage={setActiveImage} />
          <ImageDiv image={Image2} setImage={setActiveImage} />
        </div>
      </div>
    </div>
  );
};

export default Palette;
