import { inject, injectable } from "inversify";
import type { IocProvider } from "../../../app/ioc/interfaces.ts";
import { TYPES } from "../../../app/ioc/types.ts";
import type { IUsersRepository } from "../interfaces/users_repository.ts";
import type { User } from "../models/user.ts";
import type { Page } from "../../../app/domain/models/page.ts";

@injectable()
export class GetUsersListUseCase {
  @inject(TYPES.IUsersRepository) private readonly usersRepositoryProvider!: IocProvider<IUsersRepository>;

  async execute(page: number): Promise<Page<User>> {
    const repository = await this.usersRepositoryProvider();
    return await repository.users(page);
  }
}
