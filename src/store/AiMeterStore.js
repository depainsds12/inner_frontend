import { create } from "zustand";

export const useAiMeterStore = create((set) => ({
  aiMeterValue: 50,
  setAiMeterValue: (value) => set(() => ({ aiMeterValue: value })),
}));
