import Index from "@/src/components/__old__/welllgorithm-spheres/index";
import getTagUrls from "@/src/libs/get_tag_urls";
import Image from "next/image.js";

export default async function Page() {
  const websiteFooterIconUrl = (await getTagUrls(["website footer"]))[0].url;

  return (
    <>
      <Index />
      <Image width={50} height={50} src={websiteFooterIconUrl} />
    </>
  );
}
