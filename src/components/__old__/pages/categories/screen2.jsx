import CardImage from "@/public/assets/cards/butterfly.png";

import RectangleCard from "@/src/components/__old__/cards/rectangle_card";
import LabelComponent from "@/src/components/__old__/label";

export default function Screen2({ topics = [] }) {
  return (
    <>
      <div className="grid grid-rows-[repeat(3,_minmax(300px,_400px))] gap-12 md:grid-cols-2 lg:mt-6 lg:grid-cols-2">
        {topics.map((z) => (
          <RectangleCard
            key={z._id}
            cardImage={CardImage}
            className={{
              main: "relative",
              image: "mb-3 !h-[40%]",
              text: `!m-0 line-clamp-3 text-balance !px-12 text-xl !text-black md:!px-8 md:text-xl lg:!px-10 lg:text-2xl xl:!px-12 2xl:!px-20`,
            }}
            textContent={z.content}
          >
            <LabelComponent
              className="absolute left-1/2 top-[40%] z-10 w-max translate-x-[-50%] translate-y-[-50%] !py-1 md:!py-2 xl:!py-3"
              text={[z.topicName]}
              shape="hexagon"
              bracketClassName=""
            />
            {/* !w-[68%] md:!w-[71%] lg:!w-[71%] xl:!w-[74%] */}
          </RectangleCard>
        ))}
      </div>
    </>
  );
}
