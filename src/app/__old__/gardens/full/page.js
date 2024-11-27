import ExpressionFilter from "@/src/components/__old__/expressions_filter";

import Screen1 from "@/src/components/__old__/gardens-full/screen1";

export default function Index() {
  return (
    <>
      <ExpressionFilter />
      <div className="3xl:h-[80vh] mb-9 h-[60vh] md:h-[60vw] xl:h-screen">
        <Screen1 />
      </div>
      <div className="3xl:h-[80vh] mb-9 h-[60vh] md:h-[60vw] xl:h-screen">
        <Screen1 />
      </div>
      <div className="3xl:h-[80vh] mb-9 h-[60vh] md:h-[60vw] xl:h-screen">
        <Screen1 />
      </div>
    </>
  );
}
