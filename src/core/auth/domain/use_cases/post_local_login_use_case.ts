import { inject, injectable } from "inversify";
import type { IocProvider } from "../../../app/ioc/interfaces.ts";
import { TYPES } from "../../../app/ioc/types.ts";
import type { IAuthRepository } from "../interfaces/auth_repository.ts";

@injectable()
export class PostLocalLoginUseCase {
  @inject(TYPES.IAuthRepository) private readonly authRepositoryProvider!: IocProvider<IAuthRepository>;

  async execute(username: string, password: string): Promise<boolean> {
    const repository = await this.authRepositoryProvider();
    return await repository.localLogin(username, password);
  }
}
