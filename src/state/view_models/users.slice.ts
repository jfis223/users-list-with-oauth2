import type { User } from "../../core/users/domain/models/user.ts";
import type { Page } from "../../core/app/domain/models/page.ts";

export interface UsersSlice {
  users: Page<User> | null;
  isLoading: boolean;
  hasError: boolean;
  userDetail: User | null;
}
