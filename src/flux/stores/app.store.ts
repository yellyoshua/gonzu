import createStore from "zustand";
import {
  AppReducer,
  AppReducerActions,
  DispatchStore,
} from "@/app/interfaces/index";
import { APP_NAME, COPYRIGHT, SOCIAL_LINKS } from "@/app/config/app";
import { AppTypes } from "../types";
import * as reducers from "../reducers";

interface FullReducer extends AppReducer, AppReducerActions {}

const initialState: AppReducer = {
  title: APP_NAME,
  loading: false,
  socialLinks: SOCIAL_LINKS,
  copyright: COPYRIGHT,
};

export const useAppStore = createStore<FullReducer>((updater, _) => ({
  ...initialState,
  dispatch: (options: DispatchStore<AppTypes>) =>
    updater((state) => reducers.app(state, options)),
}));
