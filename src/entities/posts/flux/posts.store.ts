import createStore from "zustand";
import { devtools } from "zustand/middleware";
import { PostStore } from "@/app/entities/posts/interfaces";

const initialState: PostStore = {
  post: null,
  loading: false,
};

export const usePostStore = createStore<PostStore>(
  devtools(() => initialState)
);
