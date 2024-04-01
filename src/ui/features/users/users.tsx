import UserCard from "./components/user_card/user_card.tsx";
import Styled from "./users.styled.ts";
import UsersList from "./components/users_list/users_list.tsx";

export default function Users() {
  return (
    <Styled.Wrapper>
      <UserCard />
      <UsersList />
    </Styled.Wrapper>
  );
}
