import { AppReducer } from "@/app/interfaces/app-reducer.interface";
import { DispatchStore } from "@/app/interfaces/models";
import { AppTypes } from "../types";

export function app(
  state: AppReducer,
  action: DispatchStore<AppTypes>
): AppReducer {
  const { config = {}, loading = false } = action.payload || {};

  switch (action.type) {
    case AppTypes.GET_CONF_DONE:
      return { ...state, ...config, loading };
    case AppTypes.GET_CONF_ERROR:
    case AppTypes.GET_CONF_FETCHING:
      return { ...state, loading };
    default:
      return { ...state };
  }
}
