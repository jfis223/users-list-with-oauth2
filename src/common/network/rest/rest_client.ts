import type { AxiosInstance, AxiosResponse } from "axios";
import axios from "axios";

export interface GetRequestOptions {
  params?: Record<string, unknown>;
  headers?: Record<string, string>;
  withCredentials?: boolean;
  paramsSerializer?: {
    encode: (params: Record<string, unknown>) => string;
  };
}

export interface PostRequestOptions<D = Record<string, unknown>> {
  data?: D;
  params?: Record<string, unknown>;
  headers?: Record<string, string>;
  withCredentials?: boolean;
}

export type PatchRequestOptions<D> = PostRequestOptions<D>;

export class RestClient {
  private client: AxiosInstance;

  constructor(baseUrl: string) {
    this.client = axios.create({
      baseURL: baseUrl,
      timeout: 5000
    });
  }

  async get<T>(url: string, options?: GetRequestOptions): Promise<AxiosResponse<T>> {
    return await this.client.get<T>(url, options);
  }

  async post<T, D>(url: string, options?: PostRequestOptions<D>): Promise<AxiosResponse<T>> {
    return await this.client.post<T>(url, options?.data, {
      params: options?.params,
      withCredentials: options?.withCredentials,
      headers: options?.headers
    });
  }

  async patch<T, D>(url: string, options?: PatchRequestOptions<D>): Promise<AxiosResponse<T>> {
    return await this.client.patch<T>(url, options?.data);
  }
}
