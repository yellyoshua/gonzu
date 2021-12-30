import { configureEndpointAPI } from "@/app/entities/gonzu/api/config";

export class GonzuRepository {
  private endpoint: (path: string) => string;

  constructor() {
    this.endpoint = configureEndpointAPI();
  }

  async getGonzuConfig() {
    const response = await fetch(this.endpoint("/content/gonzu-config.json"));
    const content = await response.json();
    return content;
  }
}
