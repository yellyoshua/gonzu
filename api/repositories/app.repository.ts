import GhostContentAPI, { GhostAPI, Settings } from "@tryghost/content-api";
export class AppRepository {
  private blogApi: GhostAPI;
  constructor() {
    this.blogApi = new GhostContentAPI({
      key: process.env.NEXT_PUBLIC_BLOG_API_KEY || "",
      url: process.env.NEXT_PUBLIC_BLOG_API_URL || "",
      version: "v3"
    })
  }

  async getBlogConfig(): Promise<Settings> {
    const config = await this.blogApi.settings.browse()
    return config
  }

}