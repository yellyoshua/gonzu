import { ThemeStoreTypes } from "flux/types";
import { DispatchStore } from "./models";

export interface ThemeReducer {
  darkMode: boolean;
}

export interface ThemeReducerActions {
  dispatch: (args: DispatchStore<ThemeStoreTypes>) => void;
}