import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import * as query from "./graphql-queries";
import { GraphQLClient } from "@/app/entities/posts/api/config";

export class PostRepository {
  private api: ApolloClient<NormalizedCacheObject>;

  constructor() {
    this.api = GraphQLClient();
  }

  getPostsSlug() {
    return this.api.query({ query: query.GET_POSTS_SLUG });
  }

  getPostBySlug(slug: string) {
    return this.api.query({
      query: query.GET_POST_BY_SLUG,
      variables: { slug },
    });
  }

  getPostsRecomendations(postExcludeSlug: string) {
    return this.api.query({
      query: query.GET_POSTS_RECOMENDATIONS,
      variables: { slug: postExcludeSlug },
    });
  }
}
