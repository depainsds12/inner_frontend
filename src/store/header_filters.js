import { create } from "zustand";

const useHeaderFilters = create((set) => ({
  activeFilter: { id: 1, name: "Gardens" },
  setActiveFilter: (id, name) =>
    set((state) => ({ activeFilter: { id, name } })),
}));

export default useHeaderFilters;
