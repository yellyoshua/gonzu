import { Switch } from "@headlessui/react";
import { changeDarkMode } from "../../flux/actions/siteConfig.actions";
import { useSiteConfigStore } from "../../flux/siteConfig.store";

interface DarkModeSwitchProps {}

export const DarkModeSwitch = ({}: DarkModeSwitchProps) => {
  const isDarkMode = useSiteConfigStore((state) => state.darkMode);

  const toggleDarkMode = (darkMode: boolean) => changeDarkMode(darkMode);

  return (
    <Switch
      checked={isDarkMode}
      onChange={toggleDarkMode}
      className={`${
        isDarkMode ? "bg-blue-700" : "bg-slate-500"
      } relative inline-flex items-center h-6 rounded-full w-11 transition-colors ease-in-out duration-200`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          isDarkMode ? "translate-x-6" : "translate-x-1"
        } inline-block w-4 h-4 transform bg-white rounded-full transition ease-in-out duration-200`}
      />
    </Switch>
  );
};
