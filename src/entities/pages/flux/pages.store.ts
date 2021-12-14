import createStore from "zustand";
import { devtools } from "zustand/middleware";
import { PageStore } from "../interfaces";

const initialState: PageStore = {
  page: null,
  loading: false,
};

export const usePageStore = createStore<PageStore>(
  devtools(() => initialState)
);
