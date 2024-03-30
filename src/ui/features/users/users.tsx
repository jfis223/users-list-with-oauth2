import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../state/session/session.slice.ts";
import { logOut } from "../../../state/session/session.slice.ts";

export default function Users() {
  const profile = useSelector(selectUser);
  const dispatch = useDispatch();

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
      <button onClick={() => dispatch(logOut())}>Log OUT</button>
    </div>
  );
}
