import ProfileCard from "./components/profile_card/profile_card.tsx";
import Styled from "./users.styled.ts";
import UsersList from "./components/users_list/users_list.tsx";

export default function Users() {
  return (
    <Styled.Wrapper>
      <ProfileCard />
      <UsersList />
    </Styled.Wrapper>
  );
}
