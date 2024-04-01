import { inject, injectable } from "inversify";
import { RestClient } from "../../../../common/network/rest/rest_client.ts";
import type { IEnvVars } from "../../domain/interfaces/env_vars.ts";
import { TYPES } from "../../ioc/types.ts";
import type { IRestDataSource, RestDataSourceOptions } from "../../../../common/interfaces/rest_data_source.ts";
import type { PostRequestOptions } from "../../../../common/network/rest/rest_client.ts";

@injectable()
export class AuthService implements IRestDataSource {
  private readonly authClient: RestClient;

  constructor(@inject(TYPES.IEnvVars) envVars: IEnvVars) {
    this.authClient = new RestClient(`${envVars.authURL}`);
  }

  async get<T = unknown>(url: string, { params, headers, withCredentials }: RestDataSourceOptions = {}): Promise<T> {
    const res = await this.authClient.get<T>(url, {
      params,
      headers,
      withCredentials
    });
    return res.data;
  }

  async post<T, D>(url: string, options?: PostRequestOptions<D>): Promise<T> {
    const res = await this.authClient.post<T, D>(url, options);
    return res.data;
  }
}
