import { create } from "zustand";

export const useWellgoCounterStore = create((set) => ({
  wellgorithmCount: "0",
  setWellgoCount: (value) => set(() => ({ wellgorithmCount: value })),
}));
