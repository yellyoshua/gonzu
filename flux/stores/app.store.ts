import createStore from "zustand"
import { AppReducer, AppReducerActions, DispatchStore } from "@/interfaces/index"
import { APP_NAME, COPYRIGHT, SOCIAL_LINKS } from "@/config/app";
import { AppStoreTypes } from "../types";
import * as reducers from "../reducers";

interface FullReducer extends AppReducer, AppReducerActions { }

const initialState: AppReducer = {
  name: APP_NAME,
  socialLinks: SOCIAL_LINKS,
  copyright: COPYRIGHT,
}


export const useAppStore = createStore<FullReducer>((updater, _) => ({
  ...initialState,
  dispatch: (options: DispatchStore<AppStoreTypes>) => updater(state => reducers.app(state, options))
}))