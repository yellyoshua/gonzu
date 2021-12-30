import { useSiteConfigStore } from "../siteConfig.store";

export const changeDarkMode = (
  active: boolean,
  incremental: boolean = true
) => {
  active
    ? document.documentElement.classList.add("dark")
    : document.documentElement.classList.remove("dark");
  return useSiteConfigStore.setState((prev) => ({
    ...prev,
    darkMode: active,
    timesActiveDarkMode: incremental
      ? prev.timesActiveDarkMode + 1
      : prev.timesActiveDarkMode,
  }));
};
