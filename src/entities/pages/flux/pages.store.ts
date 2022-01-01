import createStore from "zustand";
import { devtools } from "zustand/middleware";
import { PageStore } from "@/app/entities/pages/interfaces";

const initialState: PageStore = {
  recomendations: [],
  page: null,
  loading: false,
};

export const usePageStore = createStore<PageStore>(
  devtools(() => initialState)
);
