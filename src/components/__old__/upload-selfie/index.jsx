"use client";

import Screen1 from "@/src/components/__old__/upload-selfie/screen1";
import { useBigTrapezoidStore } from "@/src/store/BigTrapezoidStore";

export default function Index() {
  //const selectedBigTrapezoidPosition = useSelector(state=>state.bigTrapezoid.selectedPosition)
  const selectedBigTrapezoidPosition = useBigTrapezoidStore(
    (state) => state.selectedPosition,
  );

  return (
    <>
      <Screen1 selectedBigTrapezoidPosition={selectedBigTrapezoidPosition} />
    </>
  );
}
