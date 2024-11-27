import { create } from "zustand";

export const useSphereFilterStore = create((set) => ({
  sphereFilter: "flowers",
  setSphereFilter: (value) => set(() => ({ sphereFilter: value })),
}));
