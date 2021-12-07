import createStore from "zustand";
import {
  ThemeReducer,
  ThemeReducerActions,
  DispatchStore,
} from "@/app/interfaces/index";
import { ThemeStoreTypes } from "../types";
import * as reducers from "../reducers";

interface FullReducer extends ThemeReducer, ThemeReducerActions {}

const initialState: ThemeReducer = {
  darkMode: false,
};

export const useThemeStore = createStore<FullReducer>((updater, _) => ({
  ...initialState,
  dispatch: (options: DispatchStore<ThemeStoreTypes>) =>
    updater((state) => reducers.theme(state, options)),
}));
