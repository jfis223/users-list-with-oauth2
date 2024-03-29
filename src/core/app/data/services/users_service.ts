import { inject, injectable } from "inversify";
import { RestClient } from "../../../../common/network/rest/rest_client.ts";
import type { IEnvVars } from "../../domain/interfaces/env_vars.ts";
import { TYPES } from "../../ioc/types.ts";
import type { IRestDataSource, RestDataSourceOptions } from "../../../../common/interfaces/rest_data_source.ts";

@injectable()
export class UsersService implements IRestDataSource {
  private readonly usersClient: RestClient;

  constructor(@inject(TYPES.IEnvVars) envVars: IEnvVars) {
    this.usersClient = new RestClient(`${envVars.serverURL}`);
  }

  async get<T = unknown>(url: string, { params }: RestDataSourceOptions = {}): Promise<T> {
    const res = await this.usersClient.get<T>(url, {
      params
    });
    return res.data;
  }
}
