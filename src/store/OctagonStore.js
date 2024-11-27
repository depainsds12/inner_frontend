import { create } from "zustand";

export const useOctagonStore = create((set) => ({
  innerOctagon: {},
  mainOctagon: {},
  status: "idle",
  error: null,
}));
