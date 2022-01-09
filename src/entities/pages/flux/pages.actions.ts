import { PagesController } from "@/app/entities/pages/api/controllers";
import { Page } from "@/app/entities/pages/interfaces";
import { usePageStore } from "./pages.store";

const pagesController = new PagesController();

export const getPagesSlug = async () => pagesController.getPagesSlug();

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

export const getPagesRecomendationsInStore = async (exeptPageSlug?: string) => {
  try {
    const pageExclude = exeptPageSlug ?? usePageStore.getState().page?.slug!;

    const recomendations = await pagesController.getPagesRecomendations(
      pageExclude
    );

    usePageStore.setState({ recomendations });
  } catch (error) {
    usePageStore.setState({ recomendations: [] });
  }
};
