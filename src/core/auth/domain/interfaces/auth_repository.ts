import type { User } from "../../../users/domain/models/user.ts";

export interface IAuthRepository {
  user(): Promise<User>;
}
