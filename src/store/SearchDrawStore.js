import { create } from "zustand";

export const useSearchDrawStore = create((set) => ({
  searchValue: "",
  setSearchValue: (value) => set(() => ({ searchValue: value })),
}));
