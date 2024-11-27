import { create } from "zustand";

export type OnboardingStep = 1 | 2 | 3;

interface OnboardingStore {
  activeStep: OnboardingStep;
  data: Record<string, any>;
  setActiveStep: (step: OnboardingStep) => void;
}

export const useOnboardingStore = create<OnboardingStore>((set) => ({
  activeStep: 1,
  data: {},
  setActiveStep: (step: OnboardingStep) => set({ activeStep: step }),
}));
