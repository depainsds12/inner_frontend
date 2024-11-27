import CardImage from "@/public/assets/banner/banner.png";
import RectangleCard from "@/src/components/__old__/cards/rectangle_card";

export default function Screen2({ data = [], setOpen, children }) {
  const handleCardClick = () => {
    setOpen((state) => {
      return !state;
    });
  };
  return (
    <div className="responsive-container relative">
      <section className="my-12 flex flex-col items-center gap-3">
        <h2 className="text-3xl font-extrabold text-yellow-dark lg:text-5xl">
          (<span className="font-extrabold text-white">inner</span>)Gardening
          101
        </h2>
        <p className="text-purple-bg-light text-2xl font-bold">
          where 2D journaling meets 3D virtual reality
        </p>
      </section>
      <div className="flex flex-wrap gap-12">
        <RectangleCard
          onClick={handleCardClick}
          cardImage={CardImage}
          className={{
            container: "drop-shadow-light-purple max-w-[430px]",
            main: "relative",
            image: "!h-[40%]",
            text: `!m-0 bg-purple-text-light !px-12 py-9 text-center text-xl !text-white md:!px-8 md:text-xl lg:!px-10 lg:text-2xl xl:!px-12 2xl:!px-20`,
          }}
          textContent={
            <span className="line-clamp-3 font-semibold">
              Conversations with experts on the importance of cultivating calm
            </span>
          }
        ></RectangleCard>

        <RectangleCard
          onClick={handleCardClick}
          cardImage={CardImage}
          className={{
            container: "drop-shadow-light-purple max-w-[430px]",
            main: "relative",
            image: "!h-[40%]",
            text: `!m-0 bg-purple-text-light !px-12 py-9 text-center text-xl !text-white md:!px-8 md:text-xl lg:!px-10 lg:text-2xl xl:!px-12 2xl:!px-20`,
          }}
          textContent={
            <span className="line-clamp-3 font-semibold">
              Conversations with experts on the importance of cultivating calm
            </span>
          }
        ></RectangleCard>

        <RectangleCard
          onClick={handleCardClick}
          cardImage={CardImage}
          className={{
            container: "drop-shadow-light-purple max-w-[430px]",
            main: "relative",
            image: "!h-[40%]",
            text: `!m-0 bg-purple-text-light !px-12 py-9 text-center text-xl !text-white md:!px-8 md:text-xl lg:!px-10 lg:text-2xl xl:!px-12 2xl:!px-20`,
          }}
          textContent={
            <span className="line-clamp-3 font-semibold">
              Conversations with experts on the importance of cultivating calm
            </span>
          }
        ></RectangleCard>
      </div>

      <section className="my-12 flex flex-col items-center gap-3">
        <h3 className="text-4xl font-extrabold text-yellow-dark">
          (<span className="font-extrabold text-white">inner</span>)Gardening
          201
        </h3>
        <p className="text-purple-bg-light text-xl font-bold">
          where 2D journaling meets 3D virtual reality
        </p>
      </section>

      {children}
    </div>
  );
}
