import { PagesController } from "../api/controllers";
import { Page } from "../interfaces";
import { usePageStore } from "./pages.store";

const pagesController = new PagesController();

export const getPageBySlug = async (slug: string) => {
  try {
    const page = await pagesController.getPageBySlug(slug);
    return page;
  } catch (error) {
    return null;
  }
};

export const setPageInToStore = (page: Page) => {
  usePageStore.setState({ page, loading: false });
};
