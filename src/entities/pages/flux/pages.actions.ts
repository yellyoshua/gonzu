import { PagesController } from "@/app/entities/pages/api/controllers";
import { Page } from "@/app/entities/pages/interfaces";
import { usePageStore } from "./pages.store";

const pagesController = new PagesController();

export const getPagesSlug = async () => pagesController.getPagesSlug();

export const getPageBySlug = async (slug: string) =>
  pagesController.getPageBySlug(slug);

export const setPageInToStore = (page: Page) => {
  usePageStore.setState({ page, loading: false });
};

export const getPagesRecomendations = async (exeptPageSlug?: string) => {
  try {
    const pageExclude = exeptPageSlug ?? usePageStore.getState().page?.slug!;

    const recomendations = await pagesController.getPagesRecomendations(
      pageExclude
    );

    return recomendations;
  } catch (error) {
    return [];
  }
};
