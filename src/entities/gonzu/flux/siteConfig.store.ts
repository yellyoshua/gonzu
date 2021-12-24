import createStore from "zustand";
import { devtools, persist } from "zustand/middleware";
import { Celebrations, SiteConfig, Songs } from "../interfaces";

const initialState: SiteConfig = {
  showInauguralConfetti: true,
  song: Songs.NONE,
  celebration: Celebrations.NONE,
  darkMode: false,
};

export const useSiteConfigStore = createStore<SiteConfig>(
  devtools(
    persist(() => initialState, {
      name: "site-config",
      version: 1,
      merge: (storedState, currentState) => ({
        ...currentState,
        ...storedState,
        darkMode: false,
      }),
    })
  )
);
