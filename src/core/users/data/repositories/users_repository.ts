import { inject, injectable } from "inversify";
import type { IUsersRepository } from "../../domain/interfaces/users_repository.ts";
import type { User } from "../../domain/models/user.ts";
import { TYPES } from "../../../app/ioc/types.ts";
import type { UsersService } from "../../../app/data/services/users_service.ts";
import { fromJson, fromJsonWithPagination } from "../../../../common/utils/class_transformer.ts";
import { UserDataModel, UserDetailDataModel } from "../models/user_data_model.ts";
import type { IocProvider } from "../../../app/ioc/interfaces.ts";
import type { Page } from "../../../app/domain/models/page.ts";

@injectable()
export class UsersRepository implements IUsersRepository {
  @inject(TYPES.UsersService) private usersServiceProvider!: IocProvider<UsersService>;
  async users(page: number): Promise<Page<User>> {
    const usersService = await this.usersServiceProvider();
    const data = await usersService.get<Record<string, unknown>>("/api/users", {
      params: {
        per_page: 5,
        page
      }
    });
    return fromJsonWithPagination<UserDataModel, User>(UserDataModel, data).toDomain();
  }
  async userDetail(id: string): Promise<User> {
    const usersService = await this.usersServiceProvider();
    const data = await usersService.get<Record<string, unknown>>(`/api/users/${id}`, {
      params: {
        delay: 1
      }
    });
    return fromJson<UserDetailDataModel>(UserDetailDataModel, data).toDomain();
  }
}
