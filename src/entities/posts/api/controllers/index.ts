import { LinkUrl } from "@/app/interfaces";
import { Post, PostSlug } from "@/app/entities/posts/interfaces";
import { PostRepository } from "@/app/entities/posts/api/repositories";

export class PostsController {
  private postsRepository: PostRepository;
  constructor() {
    this.postsRepository = new PostRepository();
  }

  async getPostsSlug(): Promise<PostSlug[]> {
    const { data } = await this.postsRepository.getPostsSlug();
    const { posts } = data ?? {};
    return posts ?? [];
  }

  async getPostBySlug(slug: string): Promise<Post> {
    const { data } = await this.postsRepository.getPostBySlug(slug);
    const { post } = data ?? {};
    if (!post) throw new Error("Site not found: 404");
    return post;
  }

  async getPostsRecomendations(postExcludeSlug: string): Promise<LinkUrl[]> {
    const { data } = await this.postsRepository.getPostsRecomendations(
      postExcludeSlug
    );
    const { posts } = data ?? {};

    const links: LinkUrl[] = [];

    posts.forEach((post: Post) => {
      links.push({ label: post.title, url: `/publicacion/${post.slug}` });
    });

    return links;
  }
}
