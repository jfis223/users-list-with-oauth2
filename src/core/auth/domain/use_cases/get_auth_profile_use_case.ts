import { inject, injectable } from "inversify";
import type { IocProvider } from "../../../app/ioc/interfaces.ts";
import { TYPES } from "../../../app/ioc/types.ts";
import type { IAuthRepository } from "../interfaces/auth_repository.ts";
import type { User } from "../../../users/domain/models/user.ts";

@injectable()
export class GetAuthProfileUseCase {
  @inject(TYPES.IAuthRepository) private readonly authRepositoryProvider!: IocProvider<IAuthRepository>;

  async execute(): Promise<User | null> {
    const repository = await this.authRepositoryProvider();
    return await repository.user();
  }
}
