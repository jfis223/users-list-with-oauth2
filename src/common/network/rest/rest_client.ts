import type { AxiosInstance, AxiosResponse } from "axios";
import axios from "axios";

export interface GetRequestOptions {
  params?: Record<string, unknown>;
  paramsSerializer?: {
    encode: (params: Record<string, unknown>) => string;
  };
}

export interface PostRequestOptions<D = Record<string, unknown>> {
  data?: D;
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
    return await this.client.post<T>(url, options?.data);
  }

  async patch<T, D>(url: string, options?: PatchRequestOptions<D>): Promise<AxiosResponse<T>> {
    return await this.client.patch<T>(url, options?.data);
  }
}
