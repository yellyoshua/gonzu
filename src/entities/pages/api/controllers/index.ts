import { Page } from "../../interfaces";
import { PageRepository } from "../repositories";

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
}
