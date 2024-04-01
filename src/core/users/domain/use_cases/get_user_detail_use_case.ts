import { inject, injectable } from "inversify";
import type { IocProvider } from "../../../app/ioc/interfaces.ts";
import { TYPES } from "../../../app/ioc/types.ts";
import type { IUsersRepository } from "../interfaces/users_repository.ts";
import type { User } from "../models/user.ts";

@injectable()
export class GetUserDetailUseCase {
  @inject(TYPES.IUsersRepository) private readonly usersRepositoryProvider!: IocProvider<IUsersRepository>;

  async execute(id: string): Promise<User> {
    const repository = await this.usersRepositoryProvider();
    return await repository.userDetail(id);
  }
}
