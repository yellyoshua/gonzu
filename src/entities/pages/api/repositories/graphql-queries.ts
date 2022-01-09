import { gql } from "@apollo/client";

export const GET_PAGES_SLUG = gql`
  query {
    pages {
      ...PagesSlugFields
    }
  }

  fragment PagesSlugFields on Page {
    id
    slug
  }
`;

export const GET_PAGE_BY_SLUG = gql`
  query getPageBySlug($slug: String!) {
    page(where: { slug: $slug }) {
      ...PageFields
    }
  }

  fragment PageFields on Page {
    id
    slug
    title
    locale
    createdAt
    updatedAt
    content {
      raw
    }
    backdrop {
      height
      width
      url
      fileName
    }
  }
`;

export const GET_PAGES_RECOMENDATIONS = gql`
  query getPagesRecomendations($slug: String!) {
    pages(where: { slug_not: $slug }, first: 2, orderBy: updatedAt_DESC) {
      ...PageFieldsRecomendations
    }
  }

  fragment PageFieldsRecomendations on Page {
    id
    slug
    updatedAt
    title
  }
`;
