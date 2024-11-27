import InvitationForm from "@/src/components/__old__/form/invitation-form";
import Polygon from "@/src/components/polygon/polygon";
import TitleBracket from "@/src/components/typography/title_bracket";
import Typography from "@/src/components/typography/typography";
import useBreakpoints from "@/src/hooks/media_query";
import { twMerge } from "tailwind-merge";
import RadialPolygon from "../../../../polygon/radial-polygon/RadialPolygon";
import MainHexagon from "./main";
import { generateOctagonPoints } from "@/src/components/polygon/utils";

const sectionWidth = 820;

export const InvitationTitle = () => (
  <>
    <TitleBracket text="⟨" />
    <Typography className="!text-[24px] font-extrabold text-white sm:!text-[40px]">
      compassion
    </Typography>
    <TitleBracket text="⟩" />
    <Typography className="!text-[24px] font-extrabold text-[#FFF200] sm:!text-[40px]">
      Compost
    </Typography>
  </>
);

const DecorativeOctagon = ({ isSm }: { isSm: boolean }) => {
  const size = isSm ? 70 : 80;
  return (
    <div className="relative z-10 my-0 -mb-[70px] -translate-y-[30px] sm:mt-[150px] sm:-translate-y-[40px]">
      <RadialPolygon
        sides={8}
        width={size}
        height={size}
        backgroundColor="#564A8D"
        boundary={{
          outer: {
            stroke: "#786FA4",
            strokeWidth: 4,
          },
          radii: {
            strokeWidth: 0,
          },
        }}
      />
    </div>
  );
};

const DescriptionContent = () => (
  <div className="flex items-center justify-center">
    <Typography
      className="font-semibold text-black sm:max-w-[630px]"
      variant="xl"
    >
      Around the world, a new awareness is blooming — that our emotions, like
      our bodies, are a part of nature, and that we can cultivate them like a
      garden. Around the world, a new awareness is blooming — that our emotions,
      like our bodies, are a part of nature, and that we can cultivate them like
      a garden. Around the world, a new awareness is blooming — that our
      emotions, like our bodies, are a part of nature, and that we can cultivate
      them like a garden.
    </Typography>
  </div>
);

const DescriptionSection = ({ isSm }: { isSm: boolean }) => {
  if (isSm) {
    return (
      <div className="relative z-[2] w-screen overflow-hidden bg-[#ffffff] p-10">
        <DescriptionContent />
      </div>
    );
  }

  return (
    <Polygon
      points={generateOctagonPoints({
        width: sectionWidth,
        height: 320,
        xCut: 40,
        type: "bottom",
        angleType: "hexagon",
      })}
      style={{
        width: sectionWidth,
        height: 320,
        zIndex: 1,
      }}
      fill="white"
      strokeWidth={0}
    >
      <DescriptionContent />
    </Polygon>
  );
};

const FormSection = ({ isSm }: { isSm: boolean }) => {
  if (isSm) {
    return (
      <div className="relative border-b-[2px] border-[#FFFFFF32] bg-[#583A77]">
        <InvitationForm />
      </div>
    );
  }

  return (
    <div className="relative -translate-y-[100px]">
      <Polygon
        overflow={true}
        points={generateOctagonPoints({
          width: sectionWidth,
          height: 540,
          type: "bottom",
          xCut: 40,
        })}
        style={{
          width: sectionWidth,
          height: 540,
        }}
        fill="#583A77"
        stroke="#FFFFFF32"
        strokeWidth={2}
      >
        <InvitationForm />
      </Polygon>
    </div>
  );
};

const DonationText = ({ isSm }: { isSm: boolean }) => (
  <Typography
    className={twMerge(
      "scale-margin-fix mx-auto flex max-w-[540px] items-center justify-center text-center text-base text-[#D5D1ED]",
      isSm && "max-w-screen bg-[#583A77] px-8 py-16",
    )}
    variant="fluid-sm"
  >
    * in the spirit of the gift economy, journaling is by donation. you decide
    what you con afford to pay.
  </Typography>
);

export const InvitationChildren = ({ isSm }: { isSm: boolean }) => {
  return (
    <div className="relative">
      <DescriptionSection isSm={isSm} />
      {isSm && (
        <div className="flex items-center justify-center gap-20">
          <DecorativeOctagon isSm={isSm} />
          <DecorativeOctagon isSm={isSm} />
        </div>
      )}
      <FormSection isSm={isSm} />
      <DonationText isSm={isSm} />
    </div>
  );
};

const Invitation = () => {
  const { isSm, isMd } = useBreakpoints();
  return (
    <div className="component-scale relative z-10">
      <div className="relative flex -translate-y-20 justify-center gap-10 sm:-translate-y-[150px] lg:gap-[54px]">
        {!isMd && <DecorativeOctagon isSm={isSm} />}
        <MainHexagon
          title={<InvitationTitle />}
          body="Around the world, a new awareness is blooming — that our emotions, like our bodies, are a part of nature, and that we can cultivate them like a garden."
          responsive={false}
        >
          <InvitationChildren isSm={isSm} />
        </MainHexagon>
        {!isMd && <DecorativeOctagon isSm={isSm} />}
      </div>
    </div>
  );
};

export default Invitation;
