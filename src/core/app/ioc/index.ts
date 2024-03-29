import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "./types";
import { EnvVars } from "../domain/models/env_vars.ts";
import { bindDynamicModule } from "./utils";

const locator = new Container();
locator.bind(TYPES.IEnvVars).to(EnvVars);

bindDynamicModule(TYPES.UsersService, () => import("../data/services/users_service.ts"));
bindDynamicModule(TYPES.IUsersRepository, () => import("../../users/data/repositories/users_repository.ts"));
bindDynamicModule(TYPES.GetUsersListUseCase, () => import("../../users/domain/use_cases/get_users_list_use_case.ts"));

export { locator };
