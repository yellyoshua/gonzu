import { DispatchStore } from "@/app/interfaces/models";
import { ThemeReducer } from "@/app/interfaces/theme-reducer.interface";
import { ThemeStoreTypes } from "../types";

export function theme(
  state: ThemeReducer,
  options: DispatchStore<ThemeStoreTypes>
): ThemeReducer {
  switch (options.type) {
    case ThemeStoreTypes.TOGGLE_DARK_MODE:
      return { ...state, darkMode: !state.darkMode };
    default:
      return { ...state };
  }
}
