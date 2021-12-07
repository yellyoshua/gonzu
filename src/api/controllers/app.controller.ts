import { Logger } from "@/app/utils/logger.utils";
import { AppRepository } from "@/app/api/repositories";

const logger = new Logger();

export class AppController {
  private appRespository: AppRepository;

  constructor() {
    this.appRespository = new AppRepository();
  }

  async getBlogConfig() {
    try {
      const config = await this.appRespository.getBlogConfig();
      return { config, error: null };
    } catch (error) {
      logger.inDev.error({ error });
      return {
        config: null,
        error: new Error("Error al obtener la informacion del blog"),
      };
    }
  }
}
