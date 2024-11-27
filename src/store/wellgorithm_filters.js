import { create } from "zustand";

const useWellgorithmFilter = create((set) => ({
  activeFilter: { id: 3, name: "Mint" },
  setActiveFilter: (id, name) => set(() => ({ activeFilter: { id, name } })),
}));

export default useWellgorithmFilter;
