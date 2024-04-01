import type { User } from "../../../users/domain/models/user.ts";

export interface IAuthRepository {
  user(): Promise<User | null>;
  localLogin(username: string, password: string): Promise<boolean>;
}
