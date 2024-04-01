import ProfileCard from "./components/profile_card/profile_card.tsx";
import Styled from "./users.styled.ts";
import UsersList from "./components/users_list/users_list.tsx";
import UsersNewCTA from "./components/users_new_cta/users_new_cta.tsx";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../../state/session/session.slice.ts";

export default function Users() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Styled.Wrapper>
      {isLoggedIn && (
        <>
          <ProfileCard />
          <UsersList />
          <UsersNewCTA />
        </>
      )}
    </Styled.Wrapper>
  );
}
