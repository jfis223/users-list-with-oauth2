import { inject, injectable } from "inversify";
import type { User } from "../../../users/domain/models/user.ts";
import { TYPES } from "../../../app/ioc/types.ts";
import type { IocProvider } from "../../../app/ioc/interfaces.ts";
import type { IAuthRepository } from "../../domain/interfaces/auth_repository.ts";
import type { AuthService } from "../../../app/data/services/auth_service.ts";
import { fromJson } from "../../../../common/utils/class_transformer.ts";
import { AuthUserDataModel } from "../models/auth_user_data_model.ts";

@injectable()
export class AuthRepository implements IAuthRepository {
  @inject(TYPES.AuthService) private authServiceProvider!: IocProvider<AuthService>;
  async user(): Promise<User | null> {
    const authService = await this.authServiceProvider();
    const data = await authService.get<Record<string, unknown>>("/auth/login/success", {
      withCredentials: true,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": "true"
      }
    });
    if (data.success) {
      return fromJson<AuthUserDataModel>(AuthUserDataModel, data).toDomain();
    } else {
      return null;
    }
  }
  async localLogin(username: string, password: string): Promise<boolean> {
    const authService = await this.authServiceProvider();
    //Sending password as params is a security flaw, but I didn't have time to research how to encode them and send it as data to PassportJS
    const data: Record<string, unknown> = await authService.post("/auth/login", {
      withCredentials: true,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": "true"
      },
      params: {
        email: username,
        password: password
      }
    });
    return Boolean(data.success);
  }
}
