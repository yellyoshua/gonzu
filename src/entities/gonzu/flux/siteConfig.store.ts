import createStore from "zustand";
import { devtools, persist } from "zustand/middleware";
import { SiteConfig } from "../interfaces";

const initialState: SiteConfig = {
  celebration: null,
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
