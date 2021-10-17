import { PostsRepository } from "api/repositories/posts.repository"

export class PostsController {
  private postsRepository: PostsRepository;

  constructor() {
    this.postsRepository = new PostsRepository()
  }

  #parsePopulate(populate: string[]): string | undefined {
    if (populate.length === 0) {
      return undefined;
    }
    return populate.join(",")
  }

  async getPosts(populate: string[]) {
    try {
      const fields = this.#parsePopulate(populate);
      const posts = await this.postsRepository.getPosts(fields)
      return { posts, error: null }
    } catch (error) {
      return { posts: [], error: new Error("Error al obtener las publicaciones") }
    }
  }

  async getPost(slug: string, populate: string[]) {
    try {
      const fields = this.#parsePopulate(populate);
      const post = await this.postsRepository.getPost(slug, fields)
      return { post, error: null }
    } catch (error) {
      return { post: null, error: new Error("Publicacion no encontrada") }
    }
  }
}