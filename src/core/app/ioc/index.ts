import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "./types";
import { EnvVars } from "../domain/models/env_vars.ts";
import { bindDynamicModule } from "./utils";

const locator = new Container();
locator.bind(TYPES.IEnvVars).to(EnvVars);

bindDynamicModule(TYPES.UsersService, () => import("../data/services/users_service.ts"));
bindDynamicModule(TYPES.AuthService, () => import("../data/services/auth_service.ts"));
bindDynamicModule(TYPES.IUsersRepository, () => import("../../users/data/repositories/users_repository.ts"));
bindDynamicModule(TYPES.IAuthRepository, () => import("../../auth/data/repositories/auth_repository.ts"));
bindDynamicModule(TYPES.GetUsersListUseCase, () => import("../../users/domain/use_cases/get_users_list_use_case.ts"));
bindDynamicModule(TYPES.GetAuthProfileUseCase, () => import("../../auth/domain/use_cases/get_auth_profile_use_case.ts"));
bindDynamicModule(TYPES.PostLocalLoginUseCase, () => import("../../auth/domain/use_cases/post_local_login_use_case.ts"));

export { locator };
