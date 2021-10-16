import { AppReducer } from "@/interfaces/app-reducer.interface";
import { DispatchStore } from "@/interfaces/models";
import { AppStoreTypes } from "../types";

export function app(state: AppReducer, options: DispatchStore<AppStoreTypes>): AppReducer {
  switch (options.type) {
    default:
      return { ...state }
  }
}