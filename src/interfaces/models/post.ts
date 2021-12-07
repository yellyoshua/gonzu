import { PostOrPage, Pagination } from "@tryghost/content-api";

export interface Post extends PostOrPage {
  reading_time_text: string;
  tags_text: string;
}

export interface Posts extends Array<Post> {
  meta: { pagination: Pagination };
}
