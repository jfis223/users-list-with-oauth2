import { inject, injectable } from "inversify";
import type { IocProvider } from "../../../app/ioc/interfaces.ts";
import { TYPES } from "../../../app/ioc/types.ts";
import type { IUsersRepository } from "../interfaces/users_repository.ts";
import type EditUserInput from "../view_models/edit_user_input.ts";

@injectable()
export class PatchUserUseCase {
  @inject(TYPES.IUsersRepository) private readonly usersRepositoryProvider!: IocProvider<IUsersRepository>;

  async execute(values: EditUserInput): Promise<void> {
    const repository = await this.usersRepositoryProvider();
    return await repository.editUser(values);
  }
}
