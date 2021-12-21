import createStore from "zustand";
import { devtools } from "zustand/middleware";
import { PageStore } from "../interfaces";

const initialState: PageStore = {
  recomendations: [],
  page: null,
  loading: false,
};

export const usePageStore = createStore<PageStore>(
  devtools(() => initialState)
);

interface PageStoreProviderProps {
  content: PageStore;
  children: React.ReactNode;
}

export const PageStoreProvider = ({
  content,
  children,
}: PageStoreProviderProps) => {
  usePageStore.setState(content, true);

  return <div>{children}</div>;
};
