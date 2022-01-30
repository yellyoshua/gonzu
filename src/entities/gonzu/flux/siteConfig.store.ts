import createStore from "zustand";
import { devtools, persist } from "zustand/middleware";
import {
  CelebrationOption,
  Celebrations,
  SiteConfig,
} from "@/app/entities/gonzu/interfaces";

export const celebrations: CelebrationOption[] = [
  { celebration: Celebrations.CHRISTMAS, label: "Navidad" },
  { celebration: Celebrations.NONE, label: "Ninguna" },
];

const initialState: SiteConfig = {
  showInauguralConfetti: true,
  celebration: Celebrations.NONE,
  celebrationsProviderImplemented: false,
  darkMode: false,
  timesActiveDarkMode: 0,
};

export const useSiteConfigStore = createStore<SiteConfig>(
  devtools(
    persist(() => initialState, {
      name: "site-config",
      version: 2,
    })
  )
);
