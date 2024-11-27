import { create } from "zustand";

export const useDashboardFooterStore = create((set) => ({
  footerOpen: false,
  setFooterOpen: (value) => set(() => ({ footerOpen: value })),
}));
