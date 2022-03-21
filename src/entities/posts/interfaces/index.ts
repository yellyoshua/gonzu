import { Asset, RawRichText } from "@/app/interfaces";

export interface Post {
  id: string;
  slug: string;
  title: string;
  locale: "es";
  createdAt: string;
  updatedAt: string;
  content: RawRichText | { html: string } | null;
  backdrop: Asset | null;
}

export type PostSlug = Pick<Post, "id" | "slug">;

export interface PostStore {
  post: Post | null;
  loading: boolean;
}
