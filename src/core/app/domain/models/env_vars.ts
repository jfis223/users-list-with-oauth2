import { injectable } from "inversify";
import type { IEnvVars } from "../interfaces/env_vars";

@injectable()
export class EnvVars implements IEnvVars {
  serverURL: string = import.meta.env.VITE_APP_API_URL ?? "localhost:3000";
  authURL: string = import.meta.env.VITE_APP_AUTH_URL ?? "localhost:3000";
}
