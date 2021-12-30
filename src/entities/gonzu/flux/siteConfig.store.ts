import createStore from "zustand";
import { devtools, persist } from "zustand/middleware";
import {
  CelebrationOption,
  Celebrations,
  SiteConfig,
  SongOption,
  Songs,
} from "@/app/entities/gonzu/interfaces";

export const celebrations: CelebrationOption[] = [
  { celebration: Celebrations.CHRISTMAS, label: "Navidad" },
  { celebration: Celebrations.NONE, label: "Ninguna" },
];

export const songs: SongOption[] = [
  { song: Songs.NONE, label: "Ninguna" },
  { song: Songs.CHRISTMAS, label: "Chill Navidad" },
  { song: Songs.STUDYING, label: "Estudiar" },
];

const initialState: SiteConfig = {
  showInauguralConfetti: true,
  song: Songs.NONE,
  songsProviderImplemented: false,
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
