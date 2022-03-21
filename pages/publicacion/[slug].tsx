import { GetStaticPaths, GetStaticProps } from "next";
import { Layout } from "@/app/ui/Layout";
import { usePostStore } from "@/app/entities/posts/flux/posts.store";
import { Post } from "@/app/entities/posts/interfaces";
import {
  getPostBySlug,
  getPostsSlug,
} from "@/app/entities/posts/flux/posts.actions";
import { PostContent } from "@/app/entities/posts/ui/PostContent";

interface PostsProps {
  post: Post;
  permaLink: string;
}

export default function Posts({ permaLink, post }: PostsProps) {
  usePostStore.setState({ loading: false, post }, true);

  const { title } = post;

  return (
    <Layout seo={{ permaLink, title }}>
      <PostContent />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<PostsProps> = async (ctx) => {
  try {
    const permaLink = ctx.params?.slug as string;

    const post = await getPostBySlug(permaLink);

    return { props: { permaLink, post } };
  } catch (error) {
    return { notFound: true };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPostsSlug();

  return {
    paths: posts.map(({ slug }) => ({ params: { slug } })),
    fallback: "blocking",
  };
};
