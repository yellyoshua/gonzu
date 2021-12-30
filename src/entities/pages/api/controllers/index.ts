import { LinkUrl } from "@/app/interfaces";
import { Page } from "@/app/entities/pages/interfaces";
import { PageRepository } from "@/app/entities/pages/api/repositories";

export class PagesController {
  private pagesRepository: PageRepository;
  constructor() {
    this.pagesRepository = new PageRepository();
  }

  async getPageBySlug(slug: string): Promise<null | Page> {
    const { data } = await this.pagesRepository.getPageBySlug(slug);
    const { page } = data ?? {};
    return page ? page : null;
  }

  async getPagesRecomendations(pageExcludeSlug: string): Promise<LinkUrl[]> {
    const { data } = await this.pagesRepository.getPagesRecomendations(
      pageExcludeSlug
    );
    const { pages } = data ?? {};

    const links: LinkUrl[] = [];

    pages.forEach((page: Page) => {
      links.push({ label: page.title, url: `/${page.slug}` });
    });

    return links;
  }
}
