import { AppStoreTypes } from "flux/types";
import { SocialLink, DispatchStore } from "./models";

export interface AppReducer {
  name: string,
  API_URL?: string,
  socialLinks: SocialLink[],
  copyright: string
}

export interface AppReducerActions {
  dispatch: (args: DispatchStore<AppStoreTypes>) => void;
}