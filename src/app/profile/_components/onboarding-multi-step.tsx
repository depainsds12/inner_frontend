"use client";

import FlowersSlider from "@/src/components/__old__/polygon/composite_components/main/flowers-slider";
import {
  Child as GardenerTemplateChild,
  Title as GardenerTemplateTitle,
} from "@/src/components/__old__/polygon/composite_components/main/gardener_configures";
import Main from "@/src/components/__old__/polygon/composite_components/main/main";
import { useAuthGuard } from "@/src/hooks/useAuthGuard";
import { useOnboardingStore } from "@/src/store/onboarding-store";
import { JSX } from "react";
import FileUploader from "./file-uploader";
import MainOctagon from "./main-octagon";

const OnboardingMultiStep = () => {
  const { activeStep } = useOnboardingStore();
  const { session, status } = useAuthGuard();

  if (status === "loading") {
    return <div>Loading...</div>;
  }
  console.log(session, status);

  const renderStep = (): JSX.Element | null => {
    switch (activeStep) {
      case 1:
        return (
          <FileUploader handleFileChange={() => {}}>
            <div>Upload your selfie</div>
          </FileUploader>
        );
      case 2:
        return (
          <MainOctagon>
            <FlowersSlider data={Array.from(Array(16).keys())} />
          </MainOctagon>
        );
      case 3:
        return (
          <Main
            title={<GardenerTemplateTitle />}
            body={
              "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            }
          >
            <GardenerTemplateChild />
          </Main>
        );
      default:
        return null;
    }
  };

  return <>{renderStep()}</>;
};

export default OnboardingMultiStep;
