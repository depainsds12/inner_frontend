import Screen1 from "./screen1";
// h-[60vh] md:h-[60vw] xl:h-screen 3xl:h-[80vh]
export default function Index({ type = "biome" }) {
  return (
    <>
      <Screen1 type={type} />
    </>
  );
}
