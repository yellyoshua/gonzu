import { isSSR } from "@/app/utils/dom.utils";
import { useEffect } from "react";
import { changeDarkMode } from "../../../flux/actions/siteConfig.actions";
import { useSiteConfigStore } from "../../../flux/siteConfig.store";

export const DarkModeProvider = () => {
  const isDarkMode = useSiteConfigStore((state) => state.darkMode);

  useEffect(() => {
    if (!isSSR) {
      const timesActiveDarkMode =
        useSiteConfigStore.getState().timesActiveDarkMode;

      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches &&
        timesActiveDarkMode === 0
      ) {
        changeDarkMode(true, false);
      } else {
        changeDarkMode(isDarkMode, false);
      }
    }
  }, []);

  return null;
};
