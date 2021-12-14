import { RichTextContent } from "@graphcms/rich-text-types";

export interface Page {
  slug: string;
  title: string;
  content: RichTextContent | { html: string } | null;
}

export interface PageStore {
  page: Page | null;
  loading: boolean;
}
