import { LinkUrl } from "@/app/interfaces";
import { Page, PageSlug } from "@/app/entities/pages/interfaces";
import { PageRepository } from "@/app/entities/pages/api/repositories";

export class PagesController {
  private pagesRepository: PageRepository;
  constructor() {
    this.pagesRepository = new PageRepository();
  }

  async getPagesSlug(): Promise<PageSlug[]> {
    const { data } = await this.pagesRepository.getPagesSlug();
    const { pages } = data ?? {};
    return pages ?? [];
  }

  async getPageBySlug(slug: string): Promise<Page> {
    const { data } = await this.pagesRepository.getPageBySlug(slug);
    const { page } = data ?? {};
    if (!page) throw new Error("Site not found: 404");
    return page;
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
