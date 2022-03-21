import { gql } from "@apollo/client";

export const GET_POSTS_SLUG = gql`
  query {
    posts {
      ...PostsSlugFields
    }
  }

  fragment PostsSlugFields on Post {
    id
    slug
  }
`;

export const GET_POST_BY_SLUG = gql`
  query getPostBySlug($slug: String!) {
    post(where: { slug: $slug }) {
      ...PostFields
    }
  }

  fragment PostFields on Post {
    id
    slug
    title
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

export const GET_POSTS_RECOMENDATIONS = gql`
  query getPostsRecomendations($slug: String!) {
    posts(where: { slug_not: $slug }, first: 2, orderBy: updatedAt_DESC) {
      ...PostFieldsRecomendations
    }
  }

  fragment PostFieldsRecomendations on Post {
    id
    slug
    updatedAt
    title
  }
`;
