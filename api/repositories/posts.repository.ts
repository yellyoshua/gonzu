import GhostContentAPI, { GhostAPI, PostsOrPages, PostOrPage } from "@tryghost/content-api"
import { Post, Posts } from "@/interfaces/models";
import { copyObject } from "@/utils/transforms";
import { tags, readingTime } from '@tryghost/helpers'

export class PostsRepository {
  private blogApi: GhostAPI;
  constructor() {
    this.blogApi = new GhostContentAPI({
      key: process.env.NEXT_PUBLIC_BLOG_API_KEY || "",
      url: process.env.NEXT_PUBLIC_BLOG_API_URL || "",
      version: "v3"
    })
  }

  #parsePost(post: PostOrPage): Post {
    const reading_time_text = readingTime(post, { minute: '1 minuto de lectura.', minutes: '% minutos de lectura.' })
    const tags_text = tags(post, { prefix: 'Posted in: ', suffix: '.' })

    const newPost: PostOrPage & { reading_time_text: string, tags_text: string } = {
      ...post, reading_time_text, tags_text
    };

    return newPost
  }

  #parsePosts(posts: PostsOrPages): Posts {
    const newPosts = copyObject(posts);
    newPosts.meta = newPosts.meta;
    newPosts.map(post => this.#parsePost(post));
    // @ts-ignore
    return newPosts;
  }

  async getPosts(fields?: string, filter?: string): Promise<Posts> {
    const posts = await this.blogApi.posts.browse({ limit: 20, filter, fields });
    const newPosts = this.#parsePosts(posts)
    return newPosts
  }

  async getPost(slug: string, fields?: string): Promise<Post> {
    const post = await this.blogApi.posts.read({ slug }, { fields });
    return this.#parsePost(post)
  }
}