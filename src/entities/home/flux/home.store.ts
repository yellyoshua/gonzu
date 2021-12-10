import createStore from "zustand";
import { devtools } from "zustand/middleware";
import { HomePage } from "../interfaces";

const initialState: HomePage = {
  loading: false,
  socialLinks: [],
  copyright: "",
};

export const useHomePageStore = createStore<HomePage>(
  devtools(() => initialState)
);
