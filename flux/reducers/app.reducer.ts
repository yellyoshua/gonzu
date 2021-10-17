import { AppReducer } from "@/interfaces/app-reducer.interface";
import { DispatchStore } from "@/interfaces/models";
import { AppTypes } from "../types";

export function app(state: AppReducer, options: DispatchStore<AppTypes>): AppReducer {
  switch (options.type) {
    default:
      return { ...state }
  }
}