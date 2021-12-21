import { ElementNode } from "@graphcms/rich-text-types";

export interface LinkUrl {
  disabled?: boolean;
  external?: boolean;
  url: string;
  label: string;
}

export interface RawRichText {
  __typename: "RichText";
  raw: { children: ElementNode[] };
}
