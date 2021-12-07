import { useThemeStore } from "@/app/flux/store";
import { ThemeStoreTypes } from "@/app/flux/types";

export const toggleDarkMode = () => {
  const dispatch = useThemeStore.getState().dispatch;
  return dispatch({ type: ThemeStoreTypes.TOGGLE_DARK_MODE });
};
