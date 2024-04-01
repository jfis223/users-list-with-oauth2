import type { User } from "../../core/users/domain/models/user.ts";

export interface SessionSlice {
  isLoggedIn: boolean;
  isLoading: boolean;
  loginError: boolean;
  profile: User | null;
}

export interface LogInPayload {
  email: string;
  password: string;
}
