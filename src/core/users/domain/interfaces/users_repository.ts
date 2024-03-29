import type { Page } from "../../../app/domain/models/page.ts";
import type { User } from "../models/user.ts";

export interface IUsersRepository {
  users(page: number): Promise<Page<User>>;
}
