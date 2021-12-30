import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import * as query from "./graphql-queries";
import { GraphQLClient } from "@/app/entities/pages/api/config";

export class PageRepository {
  private api: ApolloClient<NormalizedCacheObject>;

  constructor() {
    this.api = GraphQLClient();
  }

  getPageBySlug(slug: string) {
    return this.api.query({
      query: query.GET_PAGE_BY_SLUG,
      variables: { slug },
    });
  }

  getPagesRecomendations(pageExcludeSlug: string) {
    return this.api.query({
      query: query.GET_PAGES_RECOMENDATIONS,
      variables: { slug: pageExcludeSlug },
    });
  }
}
