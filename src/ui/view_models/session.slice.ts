import type { User } from "../../core/users/domain/models/user.ts";

export interface SessionSlice {
  isLoggedIn: boolean;
  isLoading: boolean;
  profile: User | null;
}
