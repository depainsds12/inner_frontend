import { create } from "zustand";

const useExpressionsFilter = create((set) => ({
  activeFilter: { id: null, name: null },
  setActiveFilter: (id, name) =>
    set((state) => ({ activeFilter: { id, name } })),
}));

export default useExpressionsFilter;
