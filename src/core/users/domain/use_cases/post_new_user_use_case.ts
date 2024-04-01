import { inject, injectable } from "inversify";
import type { IocProvider } from "../../../app/ioc/interfaces.ts";
import { TYPES } from "../../../app/ioc/types.ts";
import type { IUsersRepository } from "../interfaces/users_repository.ts";
import type NewUserInput from "../view_models/new_user_input.ts";

@injectable()
export class PostNewUserUseCase {
  @inject(TYPES.IUsersRepository) private readonly usersRepositoryProvider!: IocProvider<IUsersRepository>;

  async execute(values: NewUserInput): Promise<string> {
    const repository = await this.usersRepositoryProvider();
    return await repository.newUser(values);
  }
}
