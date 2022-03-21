import { PostsController } from "@/app/entities/posts/api/controllers";
import { Post } from "@/app/entities/posts/interfaces";
import { usePostStore } from "./posts.store";

const postsController = new PostsController();

export const getPostsSlug = async () => postsController.getPostsSlug();

export const getPostBySlug = async (slug: string) =>
  postsController.getPostBySlug(slug);

export const setPostInToStore = (post: Post) => {
  usePostStore.setState({ post, loading: false });
};

export const getPostsRecomendations = async (exeptPostSlug?: string) => {
  try {
    const postExclude = exeptPostSlug ?? usePostStore.getState().post?.slug!;

    const recomendations = await postsController.getPostsRecomendations(
      postExclude
    );

    return recomendations;
  } catch (error) {
    return [];
  }
};
