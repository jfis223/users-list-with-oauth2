export interface RestDataSourceOptions {
  params?: Record<string, unknown>;
  headers?: Record<string, string>;
  withCredentials?: boolean;
}

export interface IRestDataSource {
  get<T>(url: string, options?: RestDataSourceOptions): Promise<T>;
}
