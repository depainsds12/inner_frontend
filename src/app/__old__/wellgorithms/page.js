import ExpressionFilter from "@/src/components/__old__/expressions_filter";

import Screen1 from "@/src/components/__old__/wellgorthims/screen1";

export default function Index() {
  return (
    <>
      <ExpressionFilter />
      <div className="h-[60vh]">
        <Screen1 />
      </div>
      <div className="grid min-h-screen grid-flow-row">hello world</div>
    </>
  );
}
