import type { Page } from "../../../app/domain/models/page.ts";
import type { User } from "../models/user.ts";
import type EditUserInput from "../view_models/edit_user_input.ts";
import type NewUserInput from "../view_models/new_user_input.ts";

export interface IUsersRepository {
  users(page: number): Promise<Page<User>>;
  userDetail(id: string): Promise<User>;
  editUser(values: EditUserInput): Promise<void>;
  newUser(values: NewUserInput): Promise<string>;
}
