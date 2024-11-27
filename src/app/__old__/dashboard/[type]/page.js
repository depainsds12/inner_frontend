import Index from "@/src/components/__old__/dashboard";

// h-[60vh] md:h-[60vw] xl:h-screen 3xl:h-[80vh]
export default function Page({ params }) {
  return (
    <>
      <Index type={params.type} />
    </>
  );
}
