import { Settings } from "@tryghost/content-api";
import { AppTypes } from "flux/types";
import { SocialLink, DispatchStore } from "./models";
export interface AppReducer extends Settings {
  API_URL?: string;
  loading: boolean;
  socialLinks: SocialLink[];
  copyright: string;
}

export interface AppReducerActions {
  dispatch: (args: DispatchStore<AppTypes>) => void;
}
