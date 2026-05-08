import { create } from "zustand";
import { persist } from "zustand/middleware";

const useViewProductStore = create(
  persist(
    (set) => ({
      view: 3,
      setView: (view) => set({ view }),
    }),
    {
      name: "view-product", 
    }
  )
);

export default useViewProductStore;