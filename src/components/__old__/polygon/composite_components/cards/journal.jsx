import Polygon from "@/src/components/polygon/polygon";
import Typography from "@/src/components/typography/typography";
import useBreakpoints from "@/src/hooks/media_query";
import Image from "next/image";
import {
  generateHexagonPoints,
  generateOctagonPoints,
} from "@/src/components/polygon/utils";

const JournalCard = () => {
  const { isSm } = useBreakpoints();
  return (
    <>
      <Polygon
        overflow={false}
        stroke="white"
        strokeWidth={1}
        fill="#8858B5"
        style={{
          width: "50%",
          position: "relative",
          zIndex: "20",
          left: "50%",
          transform: `translateX(-50%) translateY(${isSm ? "52%" : "65%"})`,
        }}
        points={generateHexagonPoints({ width: 210, height: 70 })}
      >
        <Typography className="font-bold text-white" component="span">
          (
        </Typography>
        <Typography className="font-bold text-[#FFF200]" component="span">
          peace
        </Typography>
        <Typography className="font-bold text-white" component="span">
          )
        </Typography>
        <Typography className="pl-2 font-bold text-white" component="span">
          Petunia
        </Typography>
      </Polygon>
      <Polygon
        stroke="white"
        strokeWidth={4}
        overflow={false}
        points={generateOctagonPoints({ height: 250, width: 250 })}
      >
        <Image src={"/assets/hq_img.jpg"} fill quality={100} />
        <Typography
          variant="fluid-lg"
          className="relative h-1/2 w-full translate-y-[50%] bg-white px-16 py-10 text-center"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Typography>
      </Polygon>
    </>
  );
};

export default JournalCard;
