import { ElementNode } from "@graphcms/rich-text-types";

export interface RawRichText {
  __typename: "RichText";
  raw: { children: ElementNode[] };
}

export interface Page {
  slug: string;
  title: string;
  content: RawRichText | { html: string } | null;
}

export interface PageStore {
  page: Page | null;
  loading: boolean;
}
