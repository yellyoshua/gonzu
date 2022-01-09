import { Asset, LinkUrl, RawRichText } from "@/app/interfaces";

export interface Page {
  id: string;
  slug: string;
  title: string;
  locale: "es";
  createdAt: string;
  updatedAt: string;
  content: RawRichText | { html: string } | null;
  backdrop: Asset | null;
}

export type PageSlug = Pick<Page, "id" | "slug">;

export interface PageStore {
  recomendations: LinkUrl[];
  page: Page | null;
  loading: boolean;
}
