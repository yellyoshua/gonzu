import { UserRepository } from "../repository";

export class UserController {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  getCurrrentSession() {
    return this.userRepository.getCurrrentSession();
  }

  async login(email: string, password: string) {
    const data = await this.userRepository.login(email, password);
    return data;
  }
}
