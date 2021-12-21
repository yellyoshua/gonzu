import { gql } from "@apollo/client";

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
    content {
      raw
    }
    backdrop {
      url
    }
  }
`;
