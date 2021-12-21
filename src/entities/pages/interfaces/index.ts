import { RawRichText } from "@/app/interfaces";

export interface Page {
  slug: string;
  title: string;
  content: RawRichText | { html: string } | null;
}

export interface PageStore {
  page: Page | null;
  loading: boolean;
}
