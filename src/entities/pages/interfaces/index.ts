import { Asset, LinkUrl, RawRichText } from "@/app/interfaces";

export interface Page {
  slug: string;
  title: string;
  locale: "es";
  createdAt: string;
  updatedAt: string;
  content: RawRichText | { html: string } | null;
  backdrop: Asset | null;
}

export interface PageStore {
  recomendations: LinkUrl[];
  page: Page | null;
  loading: boolean;
}
