import { useSelector } from "react-redux";
import { selectUser } from "../../../state/session/session.slice.ts";
import { locator } from "../../../core/app/ioc";
import type { IEnvVars } from "../../../core/app/domain/interfaces/env_vars.ts";
import { TYPES } from "../../../core/app/ioc/types.ts";

export default function Users() {
  const profile = useSelector(selectUser);
  const authURL = locator.get<IEnvVars>(TYPES.IEnvVars).authURL;

  return (
    <div>
      {profile && (
        <div>
          {profile.avatar && <img src={profile.avatar} alt={profile.name} />}
          <h1>{profile.name}</h1>
          <h3>{profile.email}</h3>
          <h3>{profile.id}</h3>
        </div>
      )}
      <a href={`${authURL}/auth/logout`}>log Out</a>
    </div>
  );
}
